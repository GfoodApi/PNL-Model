"use strict";

/**
 * @description
 * # controller.home
 * Main Controller of the app
 */
app.obj.angularApp.controller(
  "controller.home",
  function ($scope, $rootScope, $location, $injector, api, utility) {
    var me = {};

    me.init = function () {

      console.log("settings.measures", settings.measures);

      /* me.measures = settings.measures;
      $scope.kpis = []; */

      //Get app layout
      /* app.obj.app.getAppLayout(function (layout) {
        console.log("getAppLayout", layout);
      });
      */
      //select fields
      selectFields();
     //app.obj.app.field("YTD").selectMatch("YTD", true);
     //app.obj.app.field("Year").selectMatch(new Date().getFullYear().toString(), true);

      //materialize methods activation
      //Auto Init allows you to initialize all of the Materialize Components with a single function
      M.AutoInit();

      //sidepanel functions
      //https://materializeweb.com/sidenav.html
      const element = document.querySelector(".sidenav");
      var instances = M.Sidenav.init(element, {
        edge: "left",
      });

      document
        .querySelector(".sidenav-trigger")
        .addEventListener("click", function () {
          console.log("openSidepanel");
          instances.open();
        });

      document
        .querySelector(".close_sidenav")
        .addEventListener("click", function () {
          console.log("closeSidepanel");
          instances.close();
        });
    };

    //add active class to link
    const iconsContainer = document.querySelector(".icons_container");
    const tableLink = iconsContainer.querySelector(".table_link");
    const otherLinks = iconsContainer.querySelectorAll("a:not(.table_link)");

    otherLinks.forEach((link) => {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });

    if (!tableLink.classList.contains("active")) {
      tableLink.classList.add("active");
    }

    me.boot = function () {
      me.init();

      me.events();

      //me.createKpis();

      // For debugging selections uncomment the line below
      app.obj.app.getObject("CurrentSelections", "CurrentSelections");
    };

    me.createKpis = function () {
    };

    //select default fields
     function selectFields() {
       settings.selectedFields.forEach((field) => {
         console.log('field', field);
         let value = (typeof field.value !== 'string') ? field.value.toString() : field.value;
         app.obj.app.field(field.name).selectMatch(value, true);
       });
     }
 
    me.events = function () {
      //console.log("settings.objects.filters", settings.objects.filters);

      //open filters
      for (let i = 0; i < settings.objects.filters.length - 1; i++) {
        console.log("filter_" + i, settings.objects.filters[i]);
        app.obj.app.getObject("filter_" + i, settings.objects.filters[i]);
      }

      //open active buttons
      for (let i = 0; i < settings.objects.buttons.length; i++) {
        console.log("button_" + i, settings.objects.buttons[i]);
        app.obj.app.getObject("button_" + i, settings.objects.buttons[i]);
      }

      //open datepicker
      app.obj.app.getObject(
        "datepicker",
        settings.objects.filters[settings.objects.filters.length - 1]
      );

      //open pivot table
      app.obj.app.getObject("pivot", settings.objects.pivot);

      //examples
      // me.getObjects = function () {
      // 	api.destroyObjects().then(function(){
      // 		api.getObjects(me.objects);
      // 	})
      // }

      //change vTarget variable
      //app.obj.app.variable.setNumValue(app_settings.variable, value);

      //catch selections
      // app.obj.app.getList('SelectionObject', async function (reply) {
      // 	openContainerTable($scope.objectId);
      // });


      //app.obj.app.clearAll();
      document.querySelector(".logo a").addEventListener("click", function () {
        console.log("logo");
        app.obj.app.clearAll();
        //select fields
        selectFields();

      });
    };

    me.boot();
  }
);
