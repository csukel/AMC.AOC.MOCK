sap.ui.define(
		[],
		function(){
			"use strict";
			
			return {
				formatPatientDetailsTile : function(sSurname,sName,sAge,sGender,sRoom){
					
					return sSurname + ' ' + sName.substring(0,1) + '. ' + sAge + 'y (' +sGender.substring(0,1) + ') ' + sRoom; 
				},
				formatPatientFullName: function(sSurname,sName){
					return sSurname + ' ' + sName.substring(0,1) + '.' 
				},
				getGenderIcon: function (sGender){
					if (sGender =='M'){
						return "{resources>/g_male}";
					}
					else if (sGender == 'F'){
						return "{resources>/g_female}";
					}
				}
				
			}
		});