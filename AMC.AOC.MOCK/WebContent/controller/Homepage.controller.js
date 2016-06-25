sap.ui.define(
		["amc/aoc/controller/BaseController",
		 "amc/aoc/model/formatter",
		 "sap/ui/model/Filter",
		 "sap/ui/model/FilterOperator"],
		function(BaseController,formatter,Filter,FilterOperator){
			"use strict";
			
			return BaseController.extend("amc.aoc.controller.Homepage",{
				
/*				formatter: formatter,
				
				onSearch: function (oEvent){
					
					var sQueryString = oEvent.getParameter("query");
					var oComboBox = this.getView().byId("__component0---homepage--cbSearchCriteria-__component0---homepage--idIconTabBarNoIcons--header-0");
					var sCriteria = oComboBox.getSelectedKey();
					
					var oFilters = [];
					
					if(sQueryString && sQueryString.length>0) {
						var oFilter = new Filter(sCriteria,FilterOperator.Contains,sQueryString);
						oFilters.push(oFilter);
					}
					var oTileContainer = this.getView().byId("__component0---homepage--tileContainer-__component0---homepage--idIconTabBarNoIcons--header-0");
					var oTab = this.getView().byId("tab");
					var oIconTabContainer = this.getView("idIconTabBarNoIcons");
					var oBinding = oTileContainer.getBinding("tiles");
					oBinding.filter(oFilters);
				}*/
				
				onInit : function (){
					jQuery.sap.log.info("Homepage","onInit","Homepage controller");
				},
				
				onAfterRendering : function(){
					jQuery.sap.log.info("Homepage","onAfterRendering","Homepage controller");
				},
				onBeforeRendering: function(){
					jQuery.sap.log.info("Homepage","onBeforeRendering","Homepage controller");
				},
				/**
				 * if the Transfer tab is selected then the user should be navigated to the corresponding page
				 */
				onIconTabBarSelect: function(oEvent){
					var oSelectedItem = oEvent.getParameter("selectedItem");
					var oBindingContext = oSelectedItem.getBindingContext("homepage_tabs");
					var oModel = oBindingContext.getModel();
					var sPath = oBindingContext.getPath();
					var oProperty = oModel.getProperty(sPath);
					var sText = oProperty.text;
					
					if (sText === "Transfers"){
						//navigate to Transfer page
						this.getRouter().navTo("transfers"); 
					}
				},
				setSelectedTab: function(){
					var iconTabBar = sap.ui.getCore().byId("__component0---homepage--idIconTabBarNoIcons");
					iconTabBar.setSelectedKey("__component0---homepage--tab-__component0---homepage--idIconTabBarNoIcons--header-0");
				}
				
			});
		});