sap.ui.define(
		["amc/aoc/controller/BaseController",
		 "amc/aoc/model/formatter",
		 "sap/ui/model/Filter",
		 "sap/ui/model/FilterOperator",
		 "sap/ui/core/routing/History"],
		 function(BaseController,formatter,Filter,FilterOperator,History){
			"use strict";

			return BaseController.extend("amc.aoc.controller.ChargePatient",{

				formatter: formatter,
				onInit: function () {
					var oRouter = this.getRouter();
					oRouter.getRoute("ChargePatient").attachPatternMatched(this._onObjectMatched, this);
				},
				_onObjectMatched: function (oEvent) {
					this.getView().bindElement({
						path: "/" + decodeURIComponent(oEvent.getParameter("arguments").patientIndex),
						model: "patients"
					});
					var sTitle=this.getResourceBundle().getText("chargePatientTitle",oEvent.getParameter("arguments").storage);
					this.getView().byId("chargePatient").setTitle(sTitle);
				},

				onNavBack : function(){

					var oHistory = History.getInstance(),
					sPreviousHash = oHistory.getPreviousHash();

					try {
						var component = this.getOwnerComponent();
						var oView = component.byId("homepage");
						var oIconTabBar = oView.byId("idIconTabBarNoIcons");
						//oIconTabBar.setSelectedKey("__component0---homepage--tab-__component0---homepage--idIconTabBarNoIcons--header-0");
						oIconTabBar.setSelectedKey("All");
						//var homepageController = component.getHomepageController();						
						
					}catch(err){
						jQuery.sap.log.error("ChargePatient","onNavBack",err);
					}


					//homepageController.setSelectedTab();
					if (sPreviousHash !== undefined){
						// the history contains a previous entry
						history.go(-1);
					} else {
						//otherwise we go backwards with a forward history
						var bReplace = true;
						this.getRouter().navTo("homepage",{},bReplace);
					}

				},
/*				showDialogWithTable: function(oEvent){
					var oPopover = this.byId("searchPopover");
					var oSource = oEvent.getSource();
					//oPopover.bindElement(oSource.getBindingContext().getPath());
					// open dialog
					oPopover.openBy(oSource);

				}*/
				showFindItemsPanel: function(oEvent){
					var oPanel = this.getView().byId("searchItemsPanel");
					oPanel.setExpanded(true);
				}

			});
		});