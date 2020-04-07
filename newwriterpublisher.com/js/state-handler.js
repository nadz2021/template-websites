// STATEHANDLER Module
var STATEHANDLER = (function () {
	
	// **************************************************************************
	// PRIVATE
	// **************************************************************************
	
	var currentCountryValue = '';

	function countryChangeHandler(countryId, stateId, removeOptions) {

			var countryControl = document.getElementById(countryId);
			var countryValue = '';
			if (countryControl) {
				countryValue = countryControl.value;
			}

			if (currentCountryValue == countryValue)
					return;
			else
					currentCountryValue = countryValue;

			var stateProvControl = document.getElementById(stateId);

			if (removeOptions) {
					removeChildNodes(stateProvControl);
			}
		
			if (countryValue == 'USA') {
					StateOptionBuilder.unitedStates(stateProvControl);
			} else if (countryValue == 'CAN') {
					StateOptionBuilder.canada(stateProvControl);
			} else if (countryValue == 'MEX') {
					StateOptionBuilder.mexico(stateProvControl);
			} else {
					StateOptionBuilder.nonus(stateProvControl);
			}
	}

	function removeChildNodes(el) {
			while (el.hasChildNodes()) {
					el.removeChild(el.lastChild);
			}
	}

	function StateProvince(optValue, optText) {
			this.optValue = optValue;
			this.optText = optText;
	}

	StateProvince.prototype.val = function () {
			return this.optValue;
	}

	StateProvince.prototype.text = function () {
			return this.optText;
	}

	var StateOptionBuilder = {
			unitedStates: function (selectControl) {
					if (selectControl == null || typeof selectControl == 'undefined')
							return;

					var unitedStatesOptGroup = document.createElement('optgroup');
					unitedStatesOptGroup.setAttribute('label', 'United States:');
					unitedStates1 = UnitedStates.unitedStates();
					for (var state in unitedStates1) {
							var newOption = createOption(unitedStates1[state].val(),
					unitedStates1[state].text());
							unitedStatesOptGroup.appendChild(newOption);
					}

					selectControl.appendChild(unitedStatesOptGroup);

					var usArmedForcesOptGroup = document.createElement('optgroup');
					usArmedForcesOptGroup.setAttribute('label', 'US Armed Forces:');
					usArmedForces = UnitedStates.usArmedForces();
					for (var state in usArmedForces) {
							var newOption = createOption(usArmedForces[state].val(),
					usArmedForces[state].text());
							usArmedForcesOptGroup.appendChild(newOption);
					}

					selectControl.appendChild(usArmedForcesOptGroup);
			},

			canada: function (selectControl) {
					if (selectControl == null || typeof selectControl == 'undefined')
							return;

					var canadaStatesOptGroup = document.createElement('optgroup');
					canadaStatesOptGroup.setAttribute('label', 'Canada:');
					canStates = Canada.canadaStates();
					for (var state in canStates) {
							var newOption = createOption(canStates[state].val(),
					canStates[state].text());
							canadaStatesOptGroup.appendChild(newOption);
					}

					selectControl.appendChild(canadaStatesOptGroup);
			},

			mexico: function (selectControl) {
					if (selectControl == null || typeof selectControl == 'undefined')
							return;

					var mexicoStatesOptGroup = document.createElement('optgroup');
					mexicoStatesOptGroup.setAttribute('label', 'Mexico:');
					mexStates = Mexico.mexicoStates();
					for (var state in mexStates) {
							var newOption = createOption(mexStates[state].val(),
					mexStates[state].text());
							mexicoStatesOptGroup.appendChild(newOption);
					}

					selectControl.appendChild(mexicoStatesOptGroup);
			},

			nonus: function (selectControl) {
					if (selectControl == null || typeof selectControl == 'undefined')
							return;
					var nonusStatesOptGroup = document.createElement('optgroup');
					nonusStatesOptGroup.setAttribute('label', 'Non-U.S./Canadian');
					nonusStates = NonUS.nonusStates();
					for (var state in nonusStates) {
							var newOption = createOption(nonusStates[state].val(),
					nonusStates[state].text());
							nonusStatesOptGroup.appendChild(newOption);
					}

					selectControl.appendChild(nonusStatesOptGroup);
			}
	}

	function createOption(optionValue, optionText) {
			var option = document.createElement('option');
			option.setAttribute('value', optionValue);
			var optionText = document.createTextNode(optionText);
			option.appendChild(optionText);
			return option;
	}

	var UnitedStates = {
			unitedStates: function () {
					var states = new Array();
					states.push(new StateProvince('AL', 'Alabama'));
					states.push(new StateProvince('AK', 'Alaska'));
					states.push(new StateProvince('AZ', 'Arizona'));
					states.push(new StateProvince('AR', 'Arkansas'));
					states.push(new StateProvince('CA', 'California'));
					states.push(new StateProvince('CO', 'Colorado'));
					states.push(new StateProvince('CT', 'Connecticut'));
					states.push(new StateProvince('DE', 'Delaware'));
					states.push(new StateProvince('DC', 'District of Columbia'));
					states.push(new StateProvince('FL', 'Florida'));
					states.push(new StateProvince('GA', 'Georgia'));
					states.push(new StateProvince('HI', 'Hawaii'));
					states.push(new StateProvince('ID', 'Idaho'));
					states.push(new StateProvince('IL', 'Illinois'));
					states.push(new StateProvince('IN', 'Indiana'));
					states.push(new StateProvince('IA', 'Iowa'));
					states.push(new StateProvince('KS', 'Kansas'));
					states.push(new StateProvince('KY', 'Kentucky'));
					states.push(new StateProvince('LA', 'Louisiana'));
					states.push(new StateProvince('ME', 'Maine'));
					states.push(new StateProvince('MD', 'Maryland'));
					states.push(new StateProvince('MA', 'Massachusetts'));
					states.push(new StateProvince('MI', 'Michigan'));
					states.push(new StateProvince('MN', 'Minnesota'));
					states.push(new StateProvince('MS', 'Mississippi'));
					states.push(new StateProvince('MO', 'Missouri'));
					states.push(new StateProvince('MT', 'Montana'));
					states.push(new StateProvince('NE', 'Nebraska'));
					states.push(new StateProvince('NV', 'Nevada'));
					states.push(new StateProvince('NH', 'New Hampshire'));
					states.push(new StateProvince('NJ', 'New Jersey'));
					states.push(new StateProvince('NM', 'New Mexico'));
					states.push(new StateProvince('NY', 'New York'));
					states.push(new StateProvince('NC', 'North Carolina'));
					states.push(new StateProvince('ND', 'North Dakota'));
					states.push(new StateProvince('OH', 'Ohio'));
					states.push(new StateProvince('OK', 'Oklahoma'));
					states.push(new StateProvince('OR', 'Oregon'));
					states.push(new StateProvince('PA', 'Pennsylvania'));
					states.push(new StateProvince('RI', 'Rhode Island'));
					states.push(new StateProvince('SC', 'South Carolina'));
					states.push(new StateProvince('SD', 'South Dakota'));
					states.push(new StateProvince('TN', 'Tennessee'));
					states.push(new StateProvince('TX', 'Texas'));
					states.push(new StateProvince('UT', 'Utah'));
					states.push(new StateProvince('VT', 'Vermont'));
					states.push(new StateProvince('VA', 'Virginia'));
					states.push(new StateProvince('WA', 'Washington'));
					states.push(new StateProvince('WV', 'West Virginia'));
					states.push(new StateProvince('WI', 'Wisconsin'));
					states.push(new StateProvince('WY', 'Wyoming'));

					return states;
			},

			usArmedForces: function () {
					var armedForces = new Array();
					armedForces.push(new StateProvince('AA', 'Armed Forces Americas'));
					armedForces.push(new StateProvince('AP', 'Armed Forces Pacific'));
					armedForces.push(new StateProvince('AE', 'Armed Forces Other'));

					return armedForces;
			}
	}

	var Canada = {
			canadaStates: function () {
					var canStates = new Array();
					canStates.push(new StateProvince('AB', 'Alberta'));
					canStates.push(new StateProvince('BC', 'British Columbia'));
					canStates.push(new StateProvince('MB', 'Manitoba'));
					canStates.push(new StateProvince('NB', 'New Brunswick'));
					canStates.push(new StateProvince('NF', 'Newfoundland'));
					canStates.push(new StateProvince('NT', 'Northwest Territories'));
					canStates.push(new StateProvince('NS', 'Nova Scotia'));
					canStates.push(new StateProvince('ON', 'Ontario'));
					canStates.push(new StateProvince('PE', 'Prince Edward Island'));
					canStates.push(new StateProvince('QC', 'Quebec'));
					canStates.push(new StateProvince('SK', 'Saskatchewan'));
					canStates.push(new StateProvince('YT', 'Yukon'));

					return canStates;
			}
	}

	var Mexico = {
			mexicoStates: function () {
					var mexStates = new Array();
					mexStates.push(new StateProvince('AGS', 'Aguascalientes'));
					mexStates.push(new StateProvince('BCN', 'Baja California Norte'));
					mexStates.push(new StateProvince('BCS', 'Baja California Sur'));
					mexStates.push(new StateProvince('CAM', 'Campeche'));
					mexStates.push(new StateProvince('CHIS', 'Chiapas'));
					mexStates.push(new StateProvince('CHIH', 'Chihuahua'));
					mexStates.push(new StateProvince('COAH', 'Coahuila'));
					mexStates.push(new StateProvince('COL', 'Colima'));
					mexStates.push(new StateProvince('DF', 'Distrito Federal'));
					mexStates.push(new StateProvince('DGO', 'Durango'));
					mexStates.push(new StateProvince('GTO', 'Guanajuato'));
					mexStates.push(new StateProvince('GRO', 'Guerrero'));
					mexStates.push(new StateProvince('HGO', 'Hidalgo'));
					mexStates.push(new StateProvince('JAL', 'Jalisco'));
					mexStates.push(new StateProvince('EDM', 'Mexico - Estado de'));
					mexStates.push(new StateProvince('MICH', 'Michoacan'));
					mexStates.push(new StateProvince('MOR', 'Morelos'));
					mexStates.push(new StateProvince('NAY', 'Nayarit'));
					mexStates.push(new StateProvince('NL', 'Nuevo Leon'));
					mexStates.push(new StateProvince('OAX', 'Oaxaca'));
					mexStates.push(new StateProvince('PUE', 'Puebla'));
					mexStates.push(new StateProvince('QRO', 'Queretaro'));
					mexStates.push(new StateProvince('QROO', 'Quintana Roo'));
					mexStates.push(new StateProvince('SLP', 'San Luis Potosi'));
					mexStates.push(new StateProvince('SIN', 'Sinaloa'));
					mexStates.push(new StateProvince('SON', 'Sonora'));
					mexStates.push(new StateProvince('TAB', 'Tabasco'));
					mexStates.push(new StateProvince('TAMPS', 'Tamaulipas'));
					mexStates.push(new StateProvince('TLAX', 'Tlaxcala'));
					mexStates.push(new StateProvince('VER', 'Veracruz'));
					mexStates.push(new StateProvince('YUC', 'Yucatan'));
					mexStates.push(new StateProvince('ZAC', 'Zacatecas'));
					return mexStates;
			}
	}


	var NonUS = {
			nonusStates: function () {
					var nonusStates = new Array();
					nonusStates.push(new StateProvince('--', 'Other'));

					return nonusStates;
			}
	}

	// **************************************************************************
	// PUBLIC
	// **************************************************************************
	return {
		countryChangeHandler: countryChangeHandler
	};
	
	
}()); // end STATEHANDLER Module

