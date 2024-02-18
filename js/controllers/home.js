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


      // For debugging selections uncomment the line below
      app.obj.app.getObject("CurrentSelections", "CurrentSelections");
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
        //console.log("filter_" + i, settings.objects.filters[i]);
        app.obj.app.getObject("filter_" + i, settings.objects.filters[i]);
      }

      //open active buttons
      for (let i = 0; i < settings.objects.buttons.length; i++) {
        //console.log("button_" + i, settings.objects.buttons[i]);
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

      //change data table after selection
			app.obj.app.getList('SelectionObject', function (reply) {

        //set variables value
        $scope.ytd_flag = false;
        $scope.purchasesflag = false;
        $scope.orderscustflag = false;

				//get selected items
				//console.log('SelectionObject', reply.qSelectionObject.qSelections);
				//const selections =  reply.qSelectionObject.qSelections;
				$rootScope.selection_data = reply.qSelectionObject.qSelections.map( element => {

          //get selected fields for buttons flags
          if(element.qField === 'YTD'){
            $scope.ytd_flag = true;
          } else if(element.qField === 'PurchasesFlag'){
            $scope.purchasesflag = true;
          } else if(element.qField === 'OrdersCustFlag'){
            $scope.orderscustflag = true;
          }

					return {
						qField: element.qField,
					  qSelected: element.qSelected
					}
				})

				console.log('selection_data',$rootScope.selection_data);
			});



      //Back
      document.querySelector("#back_button").addEventListener("click", function () {
        //console.log("back");
        app.obj.app.back();
      }); 

      //app.obj.app.clearAll();
      document.querySelector(".logo a").addEventListener("click", function () {
        app.obj.app.clearAll();
        //select fields
        selectFields();
      });

      //clear cpecific field
      $rootScope.clearField = function (field) {
        console.log('clearField', field);
        app.obj.app.field(field).clear();
      };


    };

    me.boot();
  }
);
