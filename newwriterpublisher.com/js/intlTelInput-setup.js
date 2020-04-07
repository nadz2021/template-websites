'use strict';

// IPINFO Module
var IPINFO = function ($, STATEHANDLER) {

	// **************************************************************************
	// PRIVATE
	// **************************************************************************

	// Country code list
	var countryList = {
		AF: 'AFG',
		AL: 'ALB',
		DZ: 'DZA',
		AS: 'ASM',
		AD: 'AND',
		AO: 'AGO',
		AI: 'AIA',
		AG: 'ATG',
		AR: 'ARG',
		AM: 'ARM',
		AW: 'ABW',
		AU: 'AUS',
		AT: 'AUT',
		AZ: 'AZE',
		BS: 'BHS',
		BH: 'BHR',
		BD: 'BGD',
		BB: 'BRB',
		BY: 'BLR',
		BE: 'BEL',
		BZ: 'BLZ',
		BJ: 'BEN',
		BM: 'BMU',
		BT: 'BTN',
		BO: 'BOL',
		BA: 'BIH',
		BW: 'BWA',
		BR: 'BRA',
		IO: 'BGR',
		VG: 'VGB',
		BN: 'BRN',
		BG: 'BGR',
		BF: 'BFA',
		BI: 'BDI',
		KH: 'KHM',
		CM: 'CMR',
		CA: 'CAN',
		CV: 'CPV',
		BQ: 'ANT',
		KY: 'CYM',
		CF: 'CAF',
		TD: 'TCD',
		CL: 'CHL',
		CN: 'CHN',
		CO: 'COL',
		KM: 'COM',
		CD: 'COD',
		CG: 'COG',
		CK: 'COK',
		CR: 'CRI',
		CI: 'CIV',
		HR: 'HRV',
		CU: 'CUB',
		CW: 'CUW',
		CY: 'CYP',
		CZ: 'CZE',
		DK: 'DNK',
		DJ: 'DJI',
		DM: 'DMA',
		DO: 'DOM',
		EC: 'ECU',
		EG: 'EGY',
		SV: 'SLV',
		GQ: 'GNQ',
		ER: 'ERI',
		EE: 'EST',
		ET: 'ETH',
		FK: 'FLK',
		FO: 'FRO',
		FJ: 'FJI',
		FI: 'FIN',
		FR: 'FRA',
		GF: 'GUF',
		PF: 'PYF',
		GA: 'GAB',
		GM: 'GMB',
		GE: 'GEO',
		DE: 'DEU',
		GH: 'GHA',
		GI: 'GIB',
		GR: 'GRC',
		GL: 'GRL',
		GD: 'GRD',
		GP: 'GLP',
		GU: 'GUM',
		GT: 'GTM',
		GN: 'GIN',
		GW: 'GNB',
		GY: 'GUY',
		HT: 'HTI',
		HN: 'HND',
		HK: 'HKG',
		HU: 'HUN',
		IS: 'ISL',
		IN: 'IND',
		ID: 'IDN',
		IR: 'IRN',
		IQ: 'IRQ',
		IE: 'IRL',
		IL: 'ISR',
		IT: 'ITA',
		JM: 'JAM',
		JP: 'JPN',
		JO: 'JOR',
		KZ: 'KAZ',
		KE: 'KEN',
		KI: 'KIR',
		KW: 'KWT',
		KG: 'KGZ',
		LA: 'LAO',
		LV: 'LVA',
		LB: 'LBN',
		LS: 'LSO',
		LR: 'LBR',
		LY: 'LBY',
		LI: 'LIE',
		LT: 'LTU',
		LU: 'LUX',
		MO: 'MAC',
		MK: 'MKD',
		MG: 'MDG',
		MW: 'MWI',
		MY: 'MYS',
		MV: 'MDV',
		ML: 'MLI',
		MT: 'MLT',
		MH: 'MHL',
		MQ: 'MTQ',
		MR: 'MRT',
		MU: 'MUS',
		MX: 'MEX',
		FM: 'FSM',
		MD: 'MDA',
		MC: 'MCO',
		MN: 'MNG',
		ME: 'MNE',
		MS: 'MSR',
		MA: 'MAR',
		MZ: 'MOZ',
		MM: 'MMR',
		NA: 'NAM',
		NR: 'NRU',
		NP: 'NPL',
		NL: 'NLD',
		NC: 'NCL',
		NZ: 'NZL',
		NI: 'NIC',
		NE: 'NER',
		NG: 'NGA',
		NU: 'NIU',
		NF: 'NFK',
		KP: 'PRK',
		MP: 'MNP',
		NO: 'NOR',
		OM: 'OMN',
		PK: 'PAK',
		PW: 'PLW',
		PS: 'PSE',
		PA: 'PAN',
		PG: 'PNG',
		PY: 'PRY',
		PE: 'PER',
		PH: 'PHL',
		PL: 'POL',
		PT: 'PRT',
		PR: 'PRI',
		QA: 'QAT',
		RE: 'REU',
		RO: 'ROM',
		RU: 'RUS',
		RW: 'RWA',
		BL: 'BLM',
		SH: 'SHN',
		KN: 'KNA',
		LC: 'LCA',
		MF: 'MAF',
		PM: 'SPM',
		VC: 'VCT',
		WS: 'WSM',
		SM: 'SMR',
		ST: 'STP',
		SA: 'SAU',
		SN: 'SEN',
		RS: 'SRB',
		SC: 'SYC',
		SL: 'SLE',
		SG: 'SGP',
		SX: 'SXM',
		SK: 'SVK',
		SI: 'SVN',
		SB: 'SLB',
		SO: 'SOM',
		ZA: 'ZAF',
		KR: 'KOR',
		SS: 'SSD',
		ES: 'ESP',
		LK: 'LKA',
		SD: 'SDN',
		SR: 'SUR',
		SZ: 'SWZ',
		SE: 'SWE',
		CH: 'CHE',
		SY: 'SYR',
		TW: 'TWN',
		TJ: 'TJK',
		TZ: 'TZA',
		TH: 'THA',
		TL: 'TLS',
		TG: 'TGO',
		TK: 'TKL',
		TO: 'TON',
		TT: 'TTO',
		TN: 'TUN',
		TR: 'TUR',
		TM: 'TKM',
		TC: 'TCA',
		TV: 'TUV',
		VI: 'VIR',
		UG: 'UGA',
		UA: 'UKR',
		AE: 'ARE',
		GB: 'GBR',
		US: 'USA',
		UY: 'URY',
		UZ: 'UZB',
		VU: 'VUT',
		VA: 'VAT',
		VE: 'VEN',
		VN: 'VNM',
		WF: 'WLF',
		YE: 'YEM',
		ZM: 'ZMB',
		ZW: 'ZWE'
	};

	// State list
	var stateList = {
		'AL': 'Alabama',
		'AK': 'Alaska',
		'AZ': 'Arizona',
		'AR': 'Arkansas',
		'CA': 'California',
		'CO': 'Colorado',
		'CT': 'Connecticut',
		'DE': 'Delaware',
		'DC': 'District, Columbia',
		'FL': 'Florida',
		'GA': 'Georgia',
		'HI': 'Hawaii',
		'ID': 'Idaho',
		'IL': 'Illinois',
		'IN': 'Indiana',
		'IA': 'Iowa',
		'KS': 'Kansas',
		'KY': 'Kentucky',
		'LA': 'Louisiana',
		'ME': 'Maine',
		'MD': 'Maryland',
		'MA': 'Massachusetts',
		'MI': 'Michigan',
		'MN': 'Minnesota',
		'MS': 'Mississippi',
		'MO': 'Missouri',
		'MT': 'Montana',
		'NE': 'Nebraska',
		'NV': 'Nevada',
		'NH': 'New Hampsh,',
		'NJ': 'New Jer,',
		'NM': 'New Mex,',
		'NY': 'New Y,',
		'NC': 'North Carol,',
		'ND': 'North Dak,',
		'OH': 'Ohio',
		'OK': 'Oklahoma',
		'OR': 'Oregon',
		'PA': 'Pennsylvania',
		'RI': 'Rhode Isl,',
		'SC': 'South Carol,',
		'SD': 'South Dak,',
		'TN': 'Tennessee',
		'TX': 'Texas',
		'UT': 'Utah',
		'VT': 'Vermont',
		'VA': 'Virginia',
		'WA': 'Washington',
		'WV': 'West Virgi,',
		'WI': 'Wisconsin',
		'WY': 'Wyoming',
		'AA': 'Armed For, Americas',
		'AP': 'Armed For, Pacific',
		'AE': 'Armed For, Other',
		'AB': 'Alberta',
		'BC': 'British Colum,',
		'MB': 'Manitoba',
		'NB': 'New Brunsw,',
		'NF': 'Newfoundland',
		'NT': 'Northwest Territor,',
		'NS': 'Nova Sco,',
		'ON': 'Ontario',
		'PE': 'Prince Edw, Island',
		'QC': 'Quebec',
		'SK': 'Saskatchewan',
		'YT': 'Yukon',
		'AGS': 'Aguascalientes',
		'BCN': 'Baja Califor, Norte',
		'BCS': 'Baja Califor, Sur',
		'CAM': 'Campeche',
		'CHIS': 'Chiapas',
		'CHIH': 'Chihuahua',
		'COAH': 'Coahuila',
		'COL': 'Colima',
		'DF': 'Distrito Fede,',
		'DGO': 'Durango',
		'GTO': 'Guanajuato',
		'GRO': 'Guerrero',
		'HGO': 'Hidalgo',
		'JAL': 'Jalisco',
		'EDM': 'Mexic, Estado de',
		'MICH': 'Michoacan',
		'MOR': 'Morelos',
		'NAY': 'Nayarit',
		'NL': 'Nuevo L,',
		'OAX': 'Oaxaca',
		'PUE': 'Puebla',
		'QRO': 'Queretaro',
		'QROO': 'Quintana ,',
		'SLP': 'San L, Potosi',
		'SIN': 'Sinaloa',
		'SON': 'Sonora',
		'TAB': 'Tabasco',
		'TAMPS': 'Tamaulipas',
		'TLAX': 'Tlaxcala',
		'VER': 'Veracruz',
		'YUC': 'Yucatan',
		'ZAC': 'Zacatecas'
	};

	// Function to initialize IPINFO module
	// @params: module settings
	function init() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$defaultCountry = _ref.defaultCountry,
		    defaultCountry = _ref$defaultCountry === undefined ? '' : _ref$defaultCountry,
		    _ref$countryChecklist = _ref.countryChecklist,
		    countryChecklist = _ref$countryChecklist === undefined ? ['USA', 'CAN', 'MEX', 'AUS', 'NZL'] : _ref$countryChecklist,
		    _ref$showStateCheckli = _ref.showStateChecklist,
		    showStateChecklist = _ref$showStateCheckli === undefined ? ['USA'] : _ref$showStateCheckli,
		    _ref$optInReqChecklis = _ref.optInReqChecklist,
		    optInReqChecklist = _ref$optInReqChecklis === undefined ? ['GBR'] : _ref$optInReqChecklis,
		    _ref$phoneProxyId = _ref.phoneProxyId,
		    phoneProxyId = _ref$phoneProxyId === undefined ? 'phone-proxy' : _ref$phoneProxyId,
		    _ref$phoneId = _ref.phoneId,
		    phoneId = _ref$phoneId === undefined ? 'Phone' : _ref$phoneId,
		    _ref$countryId = _ref.countryId,
		    countryId = _ref$countryId === undefined ? 'Country' : _ref$countryId,
		    _ref$ipId = _ref.ipId,
		    ipId = _ref$ipId === undefined ? 'userIPAddr' : _ref$ipId,
		    _ref$locId = _ref.locId,
		    locId = _ref$locId === undefined ? 'userGeoLoc' : _ref$locId,
		    _ref$postalId = _ref.postalId,
		    postalId = _ref$postalId === undefined ? 'userPostalCode' : _ref$postalId,
		    _ref$stateId = _ref.stateId,
		    stateId = _ref$stateId === undefined ? 'State' : _ref$stateId,
		    _ref$optInId = _ref.optInId,
		    optInId = _ref$optInId === undefined ? 'opt-ins' : _ref$optInId,
		    _ref$formId = _ref.formId,
		    formId = _ref$formId === undefined ? 'LeadForm' : _ref$formId,
		    _ref$phoneName = _ref.phoneName,
		    phoneName = _ref$phoneName === undefined ? 'Phone' : _ref$phoneName,
		    _ref$countryName = _ref.countryName,
		    countryName = _ref$countryName === undefined ? 'Country' : _ref$countryName,
		    _ref$ipName = _ref.ipName,
		    ipName = _ref$ipName === undefined ? 'userIPAddr' : _ref$ipName,
		    _ref$locName = _ref.locName,
		    locName = _ref$locName === undefined ? 'userGeoLoc' : _ref$locName,
		    _ref$postalName = _ref.postalName,
		    postalName = _ref$postalName === undefined ? 'userPostalCode' : _ref$postalName,
		    _ref$stateName = _ref.stateName,
		    stateName = _ref$stateName === undefined ? 'State' : _ref$stateName,
		    _ref$hiddenClass = _ref.hiddenClass,
		    hiddenClass = _ref$hiddenClass === undefined ? 'hidden' : _ref$hiddenClass,
		    _ref$optInReqClass = _ref.optInReqClass,
		    optInReqClass = _ref$optInReqClass === undefined ? 'opt-in-required' : _ref$optInReqClass,
		    _ref$submitBtnClass = _ref.submitBtnClass,
		    submitBtnClass = _ref$submitBtnClass === undefined ? 'btn-submit' : _ref$submitBtnClass,
		    _ref$btnDisabledClass = _ref.btnDisabledClass,
		    btnDisabledClass = _ref$btnDisabledClass === undefined ? 'btn-disabled' : _ref$btnDisabledClass,
		    _ref$ipInfoUrl = _ref.ipInfoUrl,
		    ipInfoUrl = _ref$ipInfoUrl === undefined ? 'https://ipinfo.io/?token=11627ae1b2831c' : _ref$ipInfoUrl,
		    _ref$pathToUtils = _ref.pathToUtils,
		    pathToUtils = _ref$pathToUtils === undefined ? '/js/intl-tel-input-v12.1.6/js/utils.js' : _ref$pathToUtils;

		var trackedCountry = void 0;

		// initialize intl-tel-input plugin 
		$('#' + phoneProxyId).intlTelInput({
			initialCountry: 'auto',
			utilsScript: pathToUtils,
			autoPlaceholder: 'aggressive',
			customPlaceholder: function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
				// remove parenthesis in placeholders
				return selectedCountryPlaceholder.replace(/\(|\)/g, '');
			},
			geoIpLookup: function geoIpLookup(callback) {
				$.get(ipInfoUrl, function () {}, 'jsonp').always(function (resp) {

					// filtering so that we won't get 'undefined'
					var phoneVal = '',
					    countryVal = resp && resp.country ? resp.country : '',
					    ipVal = resp && resp.ip ? resp.ip : '',
					    locVal = resp && resp.loc ? resp.loc : '',
					    postalVal = resp && resp.postal ? resp.postal : '',
					    stateVal = resp && resp.region ? resp.region : '';

					// convert country code
					trackedCountry = !defaultCountry.length ? mapCountry(countryVal) : defaultCountry.toUpperCase();

					// doing reverse lookup to get 2-digit code of trackedCountry
					var countryProp = getProp(countryList, trackedCountry);
					callback(countryProp);

					// set initial values on page load
					var setInfoValues = {
						phoneVal: phoneVal,
						trackedCountry: trackedCountry,
						ipVal: ipVal,
						locVal: locVal,
						postalVal: postalVal,
						stateVal: stateVal,
						phoneId: phoneId,
						phoneName: phoneName,
						countryId: countryId,
						countryName: countryName,
						ipId: ipId,
						ipName: ipName,
						locId: locId,
						locName: locName,
						postalId: postalId,
						postalName: postalName,
						stateId: stateId,
						formId: formId
					};
					setInfo(setInfoValues);

					// event listener to update country value
					var updateCountryValues = {
						phoneProxyId: phoneProxyId,
						countryId: countryId,
						stateId: stateId,
						stateVal: stateVal,
						countryChecklist: countryChecklist,
						showStateChecklist: showStateChecklist,
						optInReqChecklist: optInReqChecklist,
						optInId: optInId,
						optInReqClass: optInReqClass,
						submitBtnClass: submitBtnClass,
						btnDisabledClass: btnDisabledClass,
						hiddenClass: hiddenClass
					};
					updateCountry(updateCountryValues);
				});
			}
		});

		// update phone to international number
		updateIntlPhone(phoneProxyId, phoneId);
	}

	// Function to convert 2-digit country code to 3-digit
	// @params: 'string' = 2-digit country code
	// @return: 'string' = 3-digit country code
	function mapCountry(countryCode) {
		var mappedCountry = countryCode.length ? countryList[countryCode.toUpperCase()] : countryCode;
		return mappedCountry;
	}

	// Function to get property of an object using a given value
	// @params: 'object' = object list, 'string' = value
	// @return: 'string' = property of an object
	function getProp(objList, objVal) {
		for (var prop in objList) {
			if (objList[prop] === objVal) {
				return prop;
			}
		}
	}

	// Function to set initial values on page load
	// @params: 'object' = collection of values
	function setInfo(values) {

		var phoneVal = values.phoneVal,
		    trackedCountry = values.trackedCountry,
		    ipVal = values.ipVal,
		    locVal = values.locVal,
		    postalVal = values.postalVal,
		    stateVal = values.stateVal,
		    phoneId = values.phoneId,
		    phoneName = values.phoneName,
		    countryId = values.countryId,
		    countryName = values.countryName,
		    ipId = values.ipId,
		    ipName = values.ipName,
		    locId = values.locId,
		    locName = values.locName,
		    postalId = values.postalId,
		    postalName = values.postalName,
		    stateId = values.stateId,
		    formId = values.formId;

		// Function to set value for existing input element or create new hidden fields
		function setter(inputId, inputName, value, formId) {
			// check if input field already exist and change its value
			var $input = $('#' + inputId);
			if ($input.length) {
				$input.val(value);
			}
			// else create input element and set the value
			else {
					var inputField = '<input name="' + inputName + '" id="' + inputId + '" type="hidden" value="' + value + '" />';
					$('#' + formId).append(inputField);
				}
		}

		setter(phoneId, phoneName, phoneVal, formId);
		setter(countryId, countryName, trackedCountry, formId);
		setter(ipId, ipName, ipVal, formId);
		setter(locId, locName, locVal, formId);
		setter(postalId, postalName, postalVal, formId);
	}

	// Function to check if country code match our checklist
	// @params: 'array' = country list, 'string' = country code
	// @return: 'boolean'
	function countryMatch(checkList, trackedCountry) {
		return checkList.indexOf(trackedCountry) > -1;
	}

	// Function to check country and toggle opt-ins, toggle state
	// @params: 'object' = collection of values
	function countryChecker(values) {

		var phoneProxyId = values.phoneProxyId,
		    countryChecklist = values.countryChecklist,
		    showStateChecklist = values.showStateChecklist,
		    optInReqChecklist = values.optInReqChecklist,
		    trackedCountry = values.trackedCountry,
		    optInId = values.optInId,
		    stateId = values.stateId,
		    optInReqClass = values.optInReqClass,
		    submitBtnClass = values.submitBtnClass,
		    btnDisabledClass = values.btnDisabledClass,
		    hiddenClass = values.hiddenClass;

		// toggle opt-ins
		var $optIn = $('#' + optInId);
		if (countryMatch(countryChecklist, trackedCountry)) {
			$optIn.addClass(hiddenClass);
			$optIn.find('input[type="checkbox"]').prop('checked', true);
		} else {
			$optIn.removeClass(hiddenClass);
			$optIn.find('input[type="checkbox"]').prop('checked', false);
		}

		// check required opt-in and toggle/disable submit button
		if (countryMatch(optInReqChecklist, trackedCountry)) {
			optInRequiredOn(optInReqClass, submitBtnClass, btnDisabledClass);
		} else {
			optInRequiredOff(optInReqClass, submitBtnClass, btnDisabledClass);
		}

		// toggle state
		var $state = $('#' + stateId);
		if (countryMatch(showStateChecklist, trackedCountry)) {
			$state.removeClass(hiddenClass);
		} else {
			$state.addClass(hiddenClass);
			$state.val('');
		}

		// change validation of phone
		var $phoneProxy = $('#' + phoneProxyId);
		var regPhoneNat = /^(?:[-.\s]?)?\(?([0-9]{1})\)?[-.\s]?([0-9][\-\(\)\s]|[\d]){9,15}(?:\x.[0-9]+)?$/;
		var regPhoneIntl = /^([+\(]?([0-9]{3})[\)]?)?[+\s\.\-]?([0-9][\-\(\)\s]|[\d]|[0-9]){8,13}(?:\x.[0-9]+)?$/;
		if (countryMatch(showStateChecklist, trackedCountry)) {
			siteType(regPhoneNat);
		} else {
			siteType(regPhoneIntl);
		}

		// Funtion to change regex injection base on site type (micorsites/ektron)
		// @params: regex
		function siteType(phoneRegEx) {
			if (typeof isSpecialValidation != 'undefined') {
				// for microsites
				isSpecialValidation.regPhone = phoneRegEx;
			} else {
				// for ektron sites
				$phoneProxy.attr('ektdesignns_validate', phoneRegEx);
				$phoneProxy.attr('onblur', 'design_validate_re(' + phoneRegEx + ',this,"Phone number invalid");');
			}
		}
	}

	// Function to toggle/disable submit button if required opt-in is not checked
	// @params: 'string' optInReqClass, submitBtnClass
	function optInRequired(optInReqClass, submitBtnClass, btnDisabledClass) {

		var $optInReq = $('.' + optInReqClass),
		    optInReqNum = $optInReq.length; // get how many are required opt-ins

		// check how many required opt-ins are 'checked'
		var optInCheck = $optInReq.filter(function () {
			return $(this).prop('checked');
		});

		// if all required opt-ins are checked, enable submit button
		var $submitBtn = $('.' + submitBtnClass);
		if (optInCheck.length === optInReqNum) {
			$submitBtn.prop('disabled', false);
			$submitBtn.removeClass(btnDisabledClass);
		} else {
			$submitBtn.prop('disabled', true);
			$submitBtn.addClass(btnDisabledClass);
		}
	}

	// Function for load/event listener for optInRequired()
	// @params: 'string' optInReqClass, submitBtnClass, btnDisabledClass
	function optInRequiredOn(optInReqClass, submitBtnClass, btnDisabledClass) {
		var $optInReq = $('.' + optInReqClass);
		if ($optInReq.length) {
			// on page load
			optInRequired(optInReqClass, submitBtnClass, btnDisabledClass);
			// on-change
			$optInReq.on('change', function () {
				optInRequired(optInReqClass, submitBtnClass, btnDisabledClass);
			});
		}
	}

	// Function to remove load/event listener for optInRequired()
	// @params: 'string' optInReqClass, submitBtnClass, btnDisabledClass
	function optInRequiredOff(optInReqClass, submitBtnClass, btnDisabledClass) {
		$('.' + optInReqClass).off();
		var $submitBtn = $('.' + submitBtnClass);
		$submitBtn.prop('disabled', false);
		$submitBtn.removeClass(btnDisabledClass);
	}

	// Function to update phone input to International number
	// @params: 'string' = phone proxy id, phone id
	function updateIntlPhone(phoneProxyId, phoneId) {
		// listen to "keyup", but also "change" to update when the user selects a country
		var $phoneProxy = $('#' + phoneProxyId);
		$phoneProxy.on('keyup change', function () {
			var intlNumber = $phoneProxy.intlTelInput('getNumber');

			if (intlNumber) {
				if (intlNumber.match(/^\+1/)) {
					// if USA
					// remove country code
					var natlNumber = intlNumber.slice(2);
					$('#' + phoneId).val(natlNumber);
				} else {
					$('#' + phoneId).val(intlNumber);
				}
			}
		});
	}

	// Function to update country by listening to onchange event
	// @params: 'object' = collection of values
	function updateCountry(values) {

		var phoneProxyId = values.phoneProxyId,
		    countryId = values.countryId,
		    stateId = values.stateId,
		    stateVal = values.stateVal,
		    countryChecklist = values.countryChecklist,
		    showStateChecklist = values.showStateChecklist,
		    optInReqChecklist = values.optInReqChecklist,
		    optInId = values.optInId,
		    optInReqClass = values.optInReqClass,
		    submitBtnClass = values.submitBtnClass,
		    btnDisabledClass = values.btnDisabledClass,
		    hiddenClass = values.hiddenClass;

		$('#' + phoneProxyId).on('countrychange', function (e, countryData) {

			// update country value
			var countryCode = mapCountry(countryData.iso2);
			$('#' + countryId).val(countryCode);
			values.trackedCountry = countryCode;

			// this set the value of State for some forms that have State field
			var $state = $('#' + stateId);
			if ($state.length) {
				STATEHANDLER.countryChangeHandler(countryId, stateId, true);
				// get code of State
				var stateProp = getProp(stateList, stateVal);
				if (stateProp) {
					$state.val(stateProp);
				}
			}

			// country checker
			countryChecker(values);
		});
	}

	// **************************************************************************
	// PUBLIC
	// **************************************************************************
	return {
		init: init
	};
}(jQuery, STATEHANDLER); // end IPINFO Module