//Main file

/* Login function  */

async function login() {

	async function isLoggedIn() {

		return fetch("https://" + config.host + "/api/v1/users/me", {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'qlik-web-integration-id': config.webIntegrationId,
			},
		}).then(response => {
			return response.status === 200;
		});

	}

	const loggedIn = await isLoggedIn();

	console.log('loggedIn', config.host, config.webIntegrationId, top.location.href);

	if (!loggedIn) {

		// check login
		window.top.location.href = "https://" + config.host + "/login?qlik-web-integration-id=" + config.webIntegrationId + "&returnto=" + location.href;
		throw new Error('not logged in');

	}

} 
//get data from browser 
//login().then(() => {
login(); 

console.log('Basic Settings', baseUrl, config.webIntegrationId, scriptsUrl);

	/* 
	 * DEPENDANCIES
	 */
	require.config({
		baseUrl: baseUrl,
		webIntegrationId: config.webIntegrationId,
		paths: {
			'domReady': scriptsUrl + 'js/vendor/domReady/domReady',
			'jquery': scriptsUrl + 'js/vendor/jquery/dist/jquery.min',
			//'materialize': scriptsUrl + 'js/vendor/materialize_old/materialize.min',
			'app': scriptsUrl + 'js/lib/app',
			'controller.home': scriptsUrl + 'js/controllers/home',
			'controller.dashboard': scriptsUrl + 'js/controllers/dashboard',
			'directive.getObject': scriptsUrl + 'js/directives/getObject',
			'service.api': scriptsUrl + 'js/services/api',
			'service.utility': scriptsUrl + 'js/services/utilities'
		}
	});

	define([
		'require',
		'angular',
		'app'
	], function (require, angular) {

		'use strict';

		console.log('inside require');

		app.obj.angularApp = angular.module('myApp', [
			'ngAnimate',
			'ngRoute',
		]);

		app.obj.angularApp.config(function ($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: scriptsUrl + "views/home.html",
					controller: 'controller.home'
				})
				.when('/dashboard', { //..../pnl-model/#!/dash
					templateUrl: scriptsUrl + "views/dashboard.html",
					controller: 'controller.dashboard'
				})
				.otherwise({
					redirectTo: '/'
				})
		});

		require([
			'domReady!',
			'js/qlik',
			'angular',
			//'materialize',
			'controller.home',


			'controller.dashboard',
			'service.api',
			'service.utility',
			'directive.getObject'
		], function (document, qlik) {

			app.obj.qlik = qlik;

			qlik.setOnError(function (error) {

				console.log(error);

			});

			angular.bootstrap(document, ["myApp", "qlik-angular"]);

			app.boot();

		});

	});

//});