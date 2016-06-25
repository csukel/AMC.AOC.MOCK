sap.ui.define(
		["amc/aoc/controller/BaseController",
		 "amc/aoc/model/formatter",
		 "sap/ui/model/Filter",
		 "sap/ui/model/FilterOperator",
		 "sap/ui/core/routing/History"],
		function(BaseController,formatter,Filter,FilterOperator,History){
			"use strict";
			
			return BaseController.extend("amc.aoc.controller.Transfers",{
				 onNavBack : function(){
					 	
					 	var oHistory = History.getInstance(),
					 		sPreviousHash = oHistory.getPreviousHash();
					 	
					 	var component = this.getOwnerComponent();
					 	var oView = component.byId("homepage");
					 	var oIconTabBar = oView.byId("idIconTabBarNoIcons");
					 	//oIconTabBar.setSelectedKey("__component0---homepage--tab-__component0---homepage--idIconTabBarNoIcons--header-0");
					 	oIconTabBar.setSelectedKey("All");
					 	//var homepageController = component.getHomepageController();
					 	
					 	//homepageController.setSelectedTab();
					 	if (sPreviousHash !== undefined){
					 		// the history contains a previous entry
					 		history.go(-1);
					 	} else {
					 		//otherwise we go backwards with a forward history
					 		var bReplace = true;
					 		this.getRouter().navTo("homepage",{},bReplace);
					 	}
					 	
					 }
				
			});
		});