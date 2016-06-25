sap.ui.define(
		["sap/ui/core/UIComponent",
		 "sap/ui/Device",
		 "amc/aoc/model/models",
		 ],
		function(UIComponent,Device,models){
			"use strict";
			
			return UIComponent.extend("amc.aoc.Component",{
				
				metadata: {
					manifest: "json"
				},
				
				init: function() {
					
					//call the prototype init function
					UIComponent.prototype.init.apply(this,arguments);
					
					// set the device model
					this.setModel(models.createDeviceModel(), "device");

					// create the views based on the url/hash
					this.getRouter().initialize();
				},
				getHomepageController: function(){
					return new amc.aoc.controller.Homepage();
				}
			});
		}
);