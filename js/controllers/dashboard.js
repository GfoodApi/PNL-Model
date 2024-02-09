"use strict";

/**
 * @description
 * # controller.dashboard
 * Second Controller of the app
 */
app.obj.angularApp.controller(
  "controller.dashboard",
  function ($scope, $rootScope, $location, $injector, api, utility) {
    var me = {};

    me.init = function () {
      console.log("settings.measures", settings.measures);

      //get measures from settings file
      me.measures = settings.measures;
      $scope.kpis = [];

      //years
      $scope.last_year = new Date().getFullYear() - 1;
      $scope.this_year = new Date().getFullYear();

      //materialize methods activation
      //Auto Init allows you to initialize all of the Materialize Components with a single function
      M.AutoInit();

      //sidepanel functions
      //https://materializeweb.com/sidenav.html
      const element = document.querySelector(".sidenav");
      var instances = M.Sidenav.init(element, {
        edge: "left",
      });

      $scope.openSidepanel = function () {
        //console.log('openSidepanel');
        instances.open();
      };

      $scope.closeSidepanel = function () {
        //console.log('closeSidepanel');
        instances.close();
      };

      //add active class to barchart_link
      const iconsContainer = document.querySelector(".icons_container");
      const barchartLink = iconsContainer.querySelector(".barchart_link");
      const otherLinks = iconsContainer.querySelectorAll(
        "a:not(.barchart_link)"
      );

      //add active class to link on click
      otherLinks.forEach((link) => {
        if (link.classList.contains("active")) {
          link.classList.remove("active");
        }
      });

      if (!barchartLink.classList.contains("active")) {
        barchartLink.classList.add("active");
      }
    };

    me.boot = function () {
      me.init();

      me.events();

      me.createKpis();
      // me.getObjects();

      // For debugging selections uncomment the line below
      app.obj.app.getObject("CurrentSelections", "CurrentSelections");
      //utility.log('Page loaded: ', $scope.page);
    };

    me.createKpis = function () {

      api.getHyperCube(
        [],
        me.measures,
        app.obj.app,
        function (data) {
          console.log("getHyperCube",data);
          $scope.kpis = data;
        },
        12
      );
    };

    me.events = function () {

      //open charts
      let main_model;
      //default chart
      app.obj.app.getObject("barchart", settings.objects.charts[0]).then((model) => {
        main_model = model;
      });

      const kpi_buttons = document.querySelectorAll(".kpi_button");
      console.log('kpi_buttons', kpi_buttons);

      $scope.changeChart = function (chart, $event) {
        //remove active class from links
        kpi_buttons.forEach((button) => button.classList.remove("active"));

        //add active class to link
        $event.currentTarget.classList.add("active");

        main_model.close();

        //console.log('chart', chart);
        app.obj.app.getObject("barchart", settings.objects.charts[chart]).then(function (model) {
          console.log("model", model);
          main_model = model;
        });

        app.obj.qlik.resize(settings.objects.charts[chart]);
      }

      //catch selections
      // app.obj.app.getList('SelectionObject', async function (reply) {
      // 	openContainerTable($scope.objectId);
      // });

      //clear all selections
      $scope.clearAll = function () {
        //clear selections
        app.obj.app.clearAll();
      };
    };

    me.boot();
  }
);
