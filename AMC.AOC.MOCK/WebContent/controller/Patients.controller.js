sap.ui.define(
		["amc/aoc/controller/BaseController",
		 "amc/aoc/model/formatter",
		 "sap/ui/model/Filter",
		 "sap/ui/model/FilterOperator"],
		function(BaseController,formatter,Filter,FilterOperator){
			"use strict";
			
			return BaseController.extend("amc.aoc.controller.Patients",{
				
				formatter: formatter,
				
				onSearch: function (oEvent){
					
					var sQueryString = oEvent.getParameter("query");
					//var oComboBox = this.getView().byId("__component0---homepage--cbSearchCriteria-__component0---homepage--idIconTabBarNoIcons--header-0");
					//var oComboBox = this.getView().byId("cbSearchCriteria");
					//var sCriteria = oComboBox.getSelectedKey();
					
					var oFilters = [];
					
					if(sQueryString && sQueryString.length>0) {
						//var oFilter = new Filter(sCriteria,FilterOperator.Contains,sQueryString);
						var oNameFilter = new Filter("Name",FilterOperator.Contains,sQueryString);
						var oRoomFilter = new Filter("Room",FilterOperator.Contains,sQueryString);
						var oSurnameFilter = new Filter("Surname",FilterOperator.Contains,sQueryString);
						//oFilters.push(oFilter);
						oFilters.push(oNameFilter);
						oFilters.push(oRoomFilter);
						oFilters.push(oSurnameFilter);
					}
					//var oTileContainer = this.getView().byId("__component0---homepage--tileContainer-__component0---homepage--idIconTabBarNoIcons--header-0");
					var oTileContainer = this.getView().byId("tileContainer");
					var oBinding = oTileContainer.getBinding("tiles");
					
					var aFilters = new Filter(oFilters,false);
					
					if (oFilters.length === 0){
						oBinding.filter(oFilters);
					}else {
						oBinding.filter(aFilters);
					}
					
				}
				
			});
		});