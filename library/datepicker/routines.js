var currentWindow = window;
function handleLoginNotOK() {
	for (var i = 0; i < 20; i++) {
		try {
			if (currentWindow.document.body.id.indexOf("genericModal") != -1) {
				currentWindow.returnValue = "loginNotOK";
				currentWindow.close();
				return;
			}
			if (currentWindow.document.body.id.indexOf("default") != -1) {
				redirectToLoginPage();
				return;
			}
		} catch (e) { }

		currentWindow = window.parent;
	}
	if(window.opener)
		for (var i = 0; i < 20; i++) {
			try {
				if (currentWindow.document.body.id.indexOf("default") != -1) {
					redirectToLoginPage();
					return;
				}
			} catch (e) { }

			currentWindow = window.opener;
		}

	redirectToLoginPage();
}

function importData(sourceString, tag) {
	try {
		if (sourceString.indexOf(tag + "{(") == -1)
			return "";
		var s;
		if (sourceString.indexOf(")}" + tag + "{(") != -1)
			s = sourceString.indexOf(")}" + tag + "{(") + tag.length + 4;
		else
			s = sourceString.indexOf(tag + "{(") + tag.length + 2;
		var e = sourceString.indexOf(")}", s);
		return sourceString.substring(s, e);
	}

	catch (e) {
		return "";
	}
}

function setKeyValue(importDataSource, key, keyValue) {
	if (importDataSource == null || importDataSource == undefined)
		importDataSource = "";

	if (importDataSource == "" || importDataSource.indexOf(key + "{(") == -1)
		importDataSource += key + "{(" + keyValue + ")}";
	else
		importDataSource = importDataSource.replace(key + "{(" + importData(importDataSource, key) + ")}", key + "{(" + keyValue + ")}");

	return importDataSource;
}

function val(sourceString) {
	sourceString = replaceString(sourceString, ",", "");
	if (isNaN(sourceString) || sourceString == "")
		return 0
	else
		return parseInt(sourceString, 10);
}

function normalizeSeperators(string) {
	if (string.length > 3)
		return string.substr(0, string.length - 3);
	else
		return string;
}

function replaceString(sourceString, searchText, replaceText) {
	if (sourceString == "" || sourceString == null || sourceString == undefined)
		return "";

	sourceString = sourceString.toString();
	while (sourceString.search(searchText) != -1)
		sourceString = sourceString.replace(searchText, "_temp_string_");

	while (sourceString.search("_temp_string_") != -1)
		sourceString = sourceString.replace("_temp_string_", replaceText);

	return sourceString;
}

function validateFullTextSearchClauseBoxes() {
	return true;
	//	var inputsArray = document.getElementsByTagName("input");
	//	for (var i=0; i<inputsArray.length; i++) {
	//		var textBox = inputsArray[i];
	//		if (textBox.fullTextSearchClause=="true" && textBox.value.toString().trim().substr(0, 1)=="-") {
	//			messageBox("FullTextClauseCantStartWith-", eMessageBoxStyle.exclamation);
	//			setFocus(textBox);
	//			return false;
	//		}
	//	}
	//	
	//	return true;
}

function getSoftwareCookie(softwareGuid, name, defaultValue) {
	var softwareCookies = getCookie("swc-" + softwareGuid);
	if (softwareCookies == null) {
		if (defaultValue != undefined)
			return defaultValue;

		return null;
	}

	var cookieValue = importData(softwareCookies, name);
	if (cookieValue == "") {
		if (softwareCookies.indexOf(")}" + name + "{(") == -1 && softwareCookies.substr(0, name.length + 2) != name + "{(") {
			if (defaultValue != undefined)
				return defaultValue;

			return null;
		}
	}

	return cookieValue;
}

function setSoftwareCookie(softwareGuid, name, value) {
	var softwareCookies = getCookie("swc-" + softwareGuid);
	softwareCookies = setKeyValue(softwareCookies, name, value)
	setCookie("swc-" + softwareGuid, softwareCookies);
}

function getCookie(name, defaultValue) {
	var cookie = document.cookie.split("; ");
	for (var i = 0; i < cookie.length; i++) {
		var crumb = cookie[i].split("=");
		if (name == crumb[0])
			return unescape(crumb[1]);
	}

	if (defaultValue != undefined)
		return defaultValue;

	return null;
}

function setCookie(name, value) {
	date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	document.cookie = name + "=" + escape(value) + "; expires=" + date.toGMTString();
}

function togglePageSelects(visible) {
	var array = document.getElementsByTagName("select")
	for (i = 0; i < array.length; i++)
		if (array[i].className != "")
			array[i].style.display = visible ? "" : "none";
}

function togglePageButtons(enabled) {
	var array = document.getElementsByTagName("input")
	for (i = 0; i < array.length; i++)
		if (array[i].type == "button" || array[i].type == "submit")
			array[i].disabled = !enabled;
}

function togglePageReadOnly(readOnly) {
	var array;
	array = document.getElementsByTagName("select")
	for (i = 0; i < array.length; i++)
		array[i].disabled = readOnly;

	array = document.getElementsByTagName("input")
	for (i = 0; i < array.length; i++)
		if (array[i].type == "text")
			array[i].readOnly = readOnly;
		else if (array[i].type != "submit")
			array[i].disabled = readOnly;

	array = document.getElementsByTagName("textarea")
	for (i = 0; i < array.length; i++)
		array[i].readOnly = readOnly;

	array = document.getElementsByTagName("datePicker")
	for (i = 0; i < array.length; i++)
		array[i].enabled = !readOnly;
}

function toggleChildrenDisabled(parent, disabled, toggleThis) {
	if (parent.tagName == "LEGEND") return;

	if (toggleThis == true)
		parent.disabled = disabled;

	for (var i = 0; i < parent.children.length; i++) {
		parent.children[i].disabled = disabled;
		try {
			toggleChildrenDisabled(parent.children[i], disabled);
		} catch (e) { }
	}
}

function getTempId() {
	return parseInt(Math.random() * -1000000, 10);
}

function getSelectItemByText(cbo, text) {
	for (i = 0; i < cbo.children.length; i++)
		if (cbo.children[i].innerText == text)
			return cbo.children[i].value;

	return null;
}

function getSelectItemValue(cbo, findKey, findValue) {
	for (i = 0; i < cbo.children.length; i++)
		if (importData(cbo.children[i].value, findKey) == findValue)
			return cbo.children[i].value;

	return null;
}

function removeSelectSelection(cbo) {
	for (i = 0; i < cbo.children.length; i++)
		if (cbo.value == cbo.children[i].value) {
			cbo.removeChild(cbo.children[i]);
			try {
				cbo.children[i].selected = true;
			} catch (e) { }

			return;
		}
}

function renameSelectSelection(cbo, title) {
	for (i = 0; i < cbo.children.length; i++)
		if (cbo.value == cbo.children[i].value) {
			cbo.children[i].innerText = title;
			try {
				cbo.children[i].selected = true;
			} catch (e) { }

			return;
		}
}

function getSelectText(cbo) {
	try {
		for (i = 0; i < cbo.children.length; i++)
			if (cbo.value == cbo.children[i].value)
				return cbo.children[i].innerText;
		return "";
	} catch (e) {
		return "";
	}
}

function setSelectText(cbo, text) {
	for (i = 0; i < cbo.children.length; i++)
		cbo.children[i].selected = cbo.children[i].innerText == text;
}

function setFocus(ctrl) {
	try {
		ctrl.focus();
		if (ctrl.type != "button")
			ctrl.select();
	}

	catch (err) {
		return;
	}
}

function getFileName(filePath) {
	if (filePath.indexOf("\\") == -1)
		return filePath;
	else
		return filePath.substr(filePath.lastIndexOf("\\") + 1);
}

function getFolderTitle(filePath) {
	var splitted = filePath.split("\\");
	return splitted[splitted.length - 1];
}

function toggleCheckBoxListByID(checkboxListID, checked) {
	var tablesArray = document.getElementsByTagName("table");
	for (var c = 0; c < tablesArray.length; c++) {
		var tableID = tablesArray[c].id.toString();
		if (tableID.indexOf(checkboxListID) != -1) {
			toggleCheckBoxList(tablesArray[c], checked);
			break;
		}
	}
}

function toggleCheckBoxList(checkboxList, checked) {
	if (checked == null || checked == undefined)
		checked = !checkboxList.rows(0).children(0).children(0).checked;

	for (var i = 0; i < checkboxList.rows.length; i++) {
		for (var j = 0; j < checkboxList.rows(i).children.length; j++) {
			var checkBox = checkboxList.rows(i).children(j).children(0);
			if (checkBox.tagName.toLowerCase() == "input" && checkBox.type.toLowerCase() == "checkbox")
				checkBox.checked = checked;
		}
	}
}

function getXmlHttpObj() {
	var xmlhttp = null;
	if (window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest()
	else if (window.ActiveXObject)
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	else
		alert("Can not initialize XML HTTP request object.\nPlease check active scripting and ActiveX initialization security settings.");

	return xmlhttp;
}

function createXmlHttpReq(handler) {
	var xmlhttp = getXmlHttpObj();
	if (xmlhttp == null)
		return null;

	xmlhttp.onreadystatechange = handler;
	return xmlhttp;
}

function dummyHandler() { }

var uniqnum_counter = (new Date).getTime();

function xmlHttpGET1(xmlhttp, url) {
	xmlhttp.open('GET', url, true);
	xmlhttp.send(null);

	return xmlhttp;
}

function xmlHttpPOST1(xmlhttp, url, content) {
	xmlhttp.open('POST', url, true);
	xmlhttp.send(content);

	return xmlhttp;
}

function sendRequest(url) {
	var xmlhttp = createXmlHttpReq(dummyHandler);
	++uniqnum_counter;
	return xmlHttpGET1(xmlhttp, url + "&rand=" + uniqnum_counter);
}

function sendRequestWithContent(url, content) {
	var xmlhttp = createXmlHttpReq(dummyHandler);
	++uniqnum_counter;
	return xmlHttpPOST1(xmlhttp, url + "&rand=" + uniqnum_counter, content);
}

function getXmlHttpResponse(url, data) {
	var xmlHttp = getXmlHttpObj();
	if (xmlHttp == null)
		return null;

	try {
		if (data == null || data == undefined) {
			xmlHttp.open("GET", url, false);
			xmlHttp.send(null);
		} else {
			xmlHttp.open("POST", url, false);
			xmlHttp.send(data);
		}

		if (xmlHttp.status == 200)
			return xmlHttp.responseText;
		else {
			if (confirm("There was an error communicating with the server. If you want to see server response, press 'Ok'.")) {
				var errorWindow = windowOpen("about:blank", "_errorWindow" + (getTempId() * -1), "width=640, height=480, location=no, titlebar=no, scrollbars=yes, resizable=yes");
				errorWindow.document.write(xmlHttp.responseText);
			}
			return null;
		}
	} catch (e) {
		alert("Error communicating with the server:\n" + e.message);
		return null;
	}
}

var asyncXmlHttp;
var asyncXmlHttpHandlerFunction;
function getXmlHttpResponseAsync(url, responseHandler, data) {
	asyncXmlHttp = getXmlHttpObj();
	if (asyncXmlHttp == null)
		return false;

	if (responseHandler == undefined)
		responseHandler = asyncXmlHttpDummyHandler;
	asyncXmlHttpHandlerFunction = responseHandler;

	asyncXmlHttp.onreadystatechange = asyncXmlHttpHandler;
	if (data == null || data == undefined) {
		asyncXmlHttp.open("GET", url, true);
		asyncXmlHttp.send(null);
	} else {
		asyncXmlHttp.open("POST", url, true);
		asyncXmlHttp.send(data);
	}

	return true;
}

function asyncXmlHttpHandler() {
	if (asyncXmlHttp.readyState == 4) {
		if (asyncXmlHttp.status == 200) {
			Object.prototype.invoke = asyncXmlHttpHandlerFunction;
			var invoker = new Object();
			invoker.invoke(asyncXmlHttp.responseText)
		}
		else {
			if (confirm("There was an error communicating with the server. If you want to see server response, press 'Ok'.")) {
				var errorWindow = windowOpen("about:blank", "_errorWindow" + (getTempId() * -1), "width=640, height=480, location=no, titlebar=no, scrollbars=yes, resizable=yes");
				errorWindow.document.write(asyncXmlHttp.responseText);
			}
			return null;
		}
	}
}

function asyncXmlHttpDummyHandler(response) { }

function getURLParamValue(paramName) {
	var re = new RegExp("[?|&]" + paramName + "=([^&]*)", "gi");
	var arr = re.exec(window.document.location.search);
	return ((arr == null) ? null : arr[1]);
}

function toUTF8(szInput) {
	if (szInput == null || szInput == undefined || szInput == "")
		return szInput;

	var wch, x, uch = "", szRet = "";
	for (x = 0; x < szInput.length; x++) {
		wch = szInput.charCodeAt(x);

		if (!(wch & 0xFF80)) {
			szRet += "%" + wch.toString(16);
		} else if (!(wch & 0xF800)) {
			uch = "%" + (wch >> 6 | 0xC0).toString(16) + "%" + (wch & 0x3F | 0x80).toString(16);
			szRet += uch;
		} else {
			uch = "%" + (wch >> 12 | 0xE0).toString(16) + "%" + (((wch >> 6) & 0x3F) | 0x80).toString(16) + "%" + (wch & 0x3F | 0x80).toString(16);
			szRet += uch;
		}
	}

	return (szRet);
}

function dataBindDropdown(dropdown, data, dataValueField, dataTextField, insertEmptyItem) {
	var originalTargetDropdown = dropdown;
	if (originalTargetDropdown.customControlType == "DropDownEx") {
		setDropDownExValue(dropdown, "");
		dropdown = dropdown.selectObject;
	}

	dropdown.innerHTML = "";

	if (insertEmptyItem == true)
		addItemToSelect(dropdown, "", "");

	for (var i = 0; i < val(importData(data, "count")) ; i++)
		addItemToSelect(dropdown, importData(data, dataValueField + i), importData(data, dataTextField + i));


	if (originalTargetDropdown.customControlType == "DropDownEx") {
		initializeDropDownEx(originalTargetDropdown);
	} else {
		dropdown.fireEvent("onchange");
	}
}

function dataBindDropdownWithServerResponse(dropdown, software, command, arguments, dataValueField, dataTextField, insertEmptyItem, cacheResponse) {
	if (cacheResponse == false)
		dataBindDropdown(dropdown, getServerResponse(software, command, arguments), dataValueField, dataTextField, insertEmptyItem);
	else
		dataBindDropdown(dropdown, getServerResponseWithCache(software, command, arguments), dataValueField, dataTextField, insertEmptyItem);
}

function filterDropdown(sourceDropdown, targetDropdown, filterKey, filterValue, insertEmptyItem) {
	var originalTargetDropdown = targetDropdown;
	if (originalTargetDropdown.customControlType == "DropDownEx") {
		setDropDownExValue(targetDropdown, "");
		targetDropdown = targetDropdown.selectObject;
	}

	targetDropdown.innerHTML = "";

	if (insertEmptyItem == true)
		addItemToSelect(targetDropdown, "", "");

	for (i = 0; i < sourceDropdown.children.length; i++) {
		if (filterValue == null || importData(sourceDropdown.children(i).value, filterKey) == filterValue)
			addItemToSelect(targetDropdown, importData(sourceDropdown.children(i).value, "id"), sourceDropdown.children(i).innerText);
	}

	if (originalTargetDropdown.customControlType == "DropDownEx") {
		initializeDropDownEx(originalTargetDropdown);
	} else {
		targetDropdown.fireEvent("onchange");
	}
}

function filterDropdownJSON(sourceDropdown, targetDropdown, filterKey, filterValue, fillFieldKeyName, insertEmptyItem) {
	var originalTargetDropdown = targetDropdown;
	if (originalTargetDropdown.customControlType == "DropDownEx") {
		setDropDownExValue(targetDropdown, "");
		targetDropdown = targetDropdown.selectObject;
	}

	targetDropdown.innerHTML = "";

	if (insertEmptyItem == true)
		addItemToSelect(targetDropdown, "", "");

	for (i = 0; i < sourceDropdown.children.length; i++) {
		var value = JSON.parse(sourceDropdown.children(i).value);

		if (filterValue == null || value[filterKey] == filterValue)
			addItemToSelect(targetDropdown, value[fillFieldKeyName], sourceDropdown.children(i).innerText);
	}

	if (originalTargetDropdown.customControlType == "DropDownEx") {
		initializeDropDownEx(originalTargetDropdown);
	} else {
		targetDropdown.fireEvent("onchange");
	}
}

function copyDropdownItems(sourceDropdown,
	targetDropdown1, targetDropdown2, targetDropdown3, targetDropdown4, targetDropdown5,
	targetDropdown6, targetDropdown7, targetDropdown8, targetDropdown9, targetDropdown10) {

	targetDropdown1.innerHTML = "";
	if (targetDropdown2 != undefined) targetDropdown2.innerHTML = "";
	if (targetDropdown3 != undefined) targetDropdown3.innerHTML = "";
	if (targetDropdown4 != undefined) targetDropdown4.innerHTML = "";
	if (targetDropdown5 != undefined) targetDropdown5.innerHTML = "";
	if (targetDropdown6 != undefined) targetDropdown6.innerHTML = "";
	if (targetDropdown7 != undefined) targetDropdown7.innerHTML = "";
	if (targetDropdown8 != undefined) targetDropdown8.innerHTML = "";
	if (targetDropdown9 != undefined) targetDropdown9.innerHTML = "";
	if (targetDropdown10 != undefined) targetDropdown10.innerHTML = "";

	for (i = 0; i < sourceDropdown.children.length; i++) {
		addItemToSelect(targetDropdown1, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown2 != undefined)
			addItemToSelect(targetDropdown2, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown3 != undefined)
			addItemToSelect(targetDropdown3, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown4 != undefined)
			addItemToSelect(targetDropdown4, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown5 != undefined)
			addItemToSelect(targetDropdown5, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown6 != undefined)
			addItemToSelect(targetDropdown6, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown7 != undefined)
			addItemToSelect(targetDropdown7, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown8 != undefined)
			addItemToSelect(targetDropdown8, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown9 != undefined)
			addItemToSelect(targetDropdown9, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
		if (targetDropdown10 != undefined)
			addItemToSelect(targetDropdown10, sourceDropdown.children(i).value, sourceDropdown.children(i).innerText);
	}
}

function addItemToSelect(select, value, title) {
	var oOption = document.createElement("OPTION");
	select.options.add(oOption);
	oOption.value = value;
	oOption.innerText = title;
}

function clearPopupSelectableBoxes(clearButton) {
	clearButton.parentElement.children(0).value = "";
	clearButton.parentElement.children(1).value = "";
}

function hasControlRequiredValidationConditions(control, validationSet) {
	var ret = (control.obligatedField == "true" || control.required == "true") && control.validationSet == validationSet && !control.disabled;

	if (ret == true) {
		$(control).parents().each(function () {
			if ($(this).css('display') == 'none' && $(this).attr('class') != 'tabPanel')
				return (ret = false);
		});
	}

	handleRequiredInputBlur(control);

	return ret;
}

function validateDatePickerFields() {
	var datePickersArray = document.getElementsByTagName("datePicker");

	for (var i = 0; i < datePickersArray.length; i++) {
		if (datePickersArray[i].invalid == true) {
			messageBox("InvalidDate");
			datePickersArray[i].focus();
			return false;
		}
	}

	return true;
}

var invalidControlsArray;
var userControlsArray = new Array();
function validateRequiredFields(validationSet) {
	var inputsArray = document.getElementsByTagName("input");
	var textareasArray = document.getElementsByTagName("textarea");
	var selectsArray = document.getElementsByTagName("select");
	var tablesArray = document.getElementsByTagName("table");

	var controlArray = new Array();
	invalidControlsArray = new Array();
	var arrayIndex = 0;
	for (var i = 0; i < inputsArray.length; i++) {
		if (hasControlRequiredValidationConditions(inputsArray[i], validationSet)) {
			if (inputsArray[i].id.indexOf('txtSearchBox') != -1) {
				try {
					if (inputsArray[i].parentElement.parentElement.parentElement.parentElement.parentElement.customControlType.toLowerCase().indexOf("searchdropdown") != -1)
						inputsArray[i].isSearchDropDown = true;
				} catch (e) { }
				try {
					if (inputsArray[i].parentElement.customControlType.toLowerCase().indexOf("dropdownex") != -1)
						inputsArray[i].isDropDownEx = true;
				} catch (e) { }
			}
			controlArray[arrayIndex++] = inputsArray[i];
		}
	}

	for (var i = 0; i < textareasArray.length; i++) {
		if (hasControlRequiredValidationConditions(textareasArray[i], validationSet))
			controlArray[arrayIndex++] = textareasArray[i];
	}

	for (var i = 0; i < selectsArray.length; i++) {
		if (hasControlRequiredValidationConditions(selectsArray[i], validationSet))
			controlArray[arrayIndex++] = selectsArray[i];
	}

	var invalidCount = 0;
	for (var i = 0; i < controlArray.length; i++) {
		var forceInvalid = null;
		if (controlArray[i].tagName.toLowerCase() == "select" && controlArray[i].validateCount == "true")
			forceInvalid = controlArray[i].children.length == 0;

		if (controlArray[i].isSearchDropDown) {
			if (controlArray[i].parentElement.parentElement.parentElement.parentElement.parentElement.value == "" || controlArray[i].parentElement.parentElement.parentElement.parentElement.parentElement.value == undefined) {
				forceInvalid = true;
			}
		} else if (controlArray[i].isDropDownEx) {
			if (controlArray[i].parentElement.value == "" || controlArray[i].parentElement.value == undefined) {
				forceInvalid = true;
			}
		}

		if ((forceInvalid == null && (controlArray[i].value == undefined || controlArray[i].value.trim() == "")) || forceInvalid) {
			if (controlArray[i].style.display != "none") {
				controlArray[i].originalBGColor = controlArray[i].style.backgroundColor;
				controlArray[i].style.backgroundColor = g_requiredFieldErrorBackgroundColor;
				try {
					controlArray[i].scrollIntoView();
				} catch (e) { }

				invalidControlsArray[invalidCount++] = controlArray[i];
			} else if (controlArray[i].style.display == "none" && controlArray[i].parentElement.innerHTML.toLowerCase().indexOf("ccc:datepicker") != -1) {
				try {
					eval(controlArray[i].id.toString() + "Picker.setBackgroundColor(\"" + g_requiredFieldErrorBackgroundColor + "\");");
					invalidControlsArray[invalidCount++] = controlArray[i];
				} catch (e1) {
					try {
						controlArray[i].nextSibling.setBackgroundColor(g_requiredFieldErrorBackgroundColor);
						invalidControlsArray[invalidCount++] = controlArray[i];
					} catch (e2) { }
				}
			}
		}
	}

	for (var i = 0; i < tablesArray.length; i++) {
		if (tablesArray[i].type == "gridEx") {
			if (validationSet == undefined || tablesArray[i].validationSet == "" || tablesArray[i].validationSet == validationSet) {
				eval("var ret = " + tablesArray[i].validationFunction + "();");
				if (!ret)
					invalidCount++;
			}
		} else if (tablesArray[i].type == "grid") {
			if (validationSet == undefined || tablesArray[i].validationSet == "" || tablesArray[i].validationSet == validationSet) {
				if (tablesArray[i].obligatedField == "true" || tablesArray[i].required == "true") {
					var tblData = tablesArray[i].nextSibling.children(0);
					var hasRows = false;
					for (var j = 0; j < tblData.rows.length - 1; j++) {
						if (tblData.rows[j].style.display != "none") {
							hasRows = true;
							break;
						}
					}

					if (!hasRows) {
						var requiredMessageKey = tablesArray[i].requiredMessageKey;
						if (requiredMessageKey == undefined || requiredMessageKey == "")
							requiredMessageKey = "AtLeaseOneGridRowIsRequired";

						messageBox(requiredMessageKey, softwareGuid, eMessageBoxStyle.exclamation);
						return false;
					}
				}

				eval("var ret = " + tablesArray[i].validationFunction + "();");
				if (!ret)
					invalidCount++;
			} else {
				eval("buildGridExSaveData(" + tablesArray[i].parentElement.id + ");");
			}
		}
	}
	for (var i = 0; i < userControlsArray.length; i++) {
		if (validationSet == undefined || userControlsArray[i].validationSet == "" || userControlsArray[i].validationSet == validationSet) {
			eval("var ret = " + userControlsArray[i].validationFunction + "();");
			if (!ret)
				invalidCount++;
		}
	}

	return invalidCount == 0;
}

function validateTabbedFormRequiredFields(tabButtonsContainer, tabPageIDPrefix, tabButtonIDPrefix) {
	if (tabPageIDPrefix == undefined)
		tabPageIDPrefix = "pnl";

	if (tabButtonIDPrefix == undefined)
		tabButtonIDPrefix = "tab";

	for (var i = 0; i < tabButtonsContainer.children.length; i++) {
		var controlId = tabButtonsContainer.children[i].id.toString();
		if (controlId.substr(0, 3) == tabButtonIDPrefix) {
			var panelId = controlId.replace(tabButtonIDPrefix, tabPageIDPrefix);
			if (!validateRequiredFields(panelId)) {
				tabButtonsContainer.children[i].click();
				return false;
			}
		}
	}

	return true;
}


function standardizeInputCharacters(input) {
	input.value = getStandardizeCharacters(input.value, input.expressionField);
}

function handleRequiredInputBlur(input) {
	if (input.obligatedField == "true" || input.required == "true") {
		var originalBGColor = "white";
		if (input.originalBGColor != undefined)
			originalBGColor = input.originalBGColor;

		if ((input.value != "" && input.value != undefined) || input.disabled == true)
			input.style.backgroundColor = originalBGColor;
	}
}

function isTrue(varBool) {
	switch (typeof (varBool)) {
		case "boolean":
			return varBool;

		case "number":
			return (0 != varBool);

		case "string":
			return (0 == varBool.search(/1|true/i));

		default:
			return false;
	}
}

function formatPersianDate(CheckDate) {
	YY = parseInt(CheckDate.substr(0, CheckDate.indexOf("/")), 10);
	MM = parseInt(CheckDate.substring(CheckDate.indexOf("/") + 1, CheckDate.lastIndexOf("/")), 10);
	DD = parseInt(CheckDate.substr(CheckDate.lastIndexOf("/") + 1), 10);

	if (YY == 0 || isNaN(YY))
		return false;
	if (MM < 1 || MM > 12 || isNaN(MM))
		return false;

	if (DD < 1 || DD > 31 || isNaN(DD))
		return false;

	switch (MM) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			if (DD < 1 || DD > 31)
				return false;
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			if (DD < 1 || DD > 30)
				return false;
			break;
	}

	DD = DD.toString();
	MM = MM.toString();
	YY = YY.toString();

	DD = "0" + DD;
	MM = "0" + MM;
	DD = DD.substring(DD.length - 2);
	MM = MM.substring(MM.length - 2);

	YY = YY.length == 1 ? "0" + YY : YY;
	YY = YY.length == 2 ? "13" + YY : YY;

	if (parseInt(YY, 10) < 1300 || parseInt(YY, 10) > 1450)
		return false;

	return YY + "/" + MM + "/" + DD;
}

function getHoursPart(objDate) {
	var hours = "00" + objDate.getHours();
	var minutes = "00" + objDate.getMinutes();
	hours = hours.substr(hours.length - 2);
	minutes = minutes.substr(minutes.length - 2);

	return hours + ":" + minutes;
}

function padwithZero(str) {
	return ("00" + str).substr(("00" + str).length - 2);
}

function calculateDateRangeDifference(START_DATE_BOX, END_DATE_BOX, DURATION_DAYS_BOX, DURATION_MONTHS_BOX, DURATION_YEARS_BOX) {
	var mode = START_DATE_BOX.className == "dateInput" ? "textBox" : "datePicker";

	var durationDays = "", durationMonths = "", durationYears = "";
	if (mode == "textBox") {
		var formattedStartDate = formatPersianDate(START_DATE_BOX.value);
		var formattedEndDate = formatPersianDate(END_DATE_BOX.value);

		if (formattedStartDate == false || formattedEndDate == false)
			return;

		if (formattedStartDate > formattedEndDate) {
			START_DATE_BOX.value = formattedEndDate;
			END_DATE_BOX.value = formattedStartDate;

			formattedStartDate = START_DATE_BOX.value;
			formattedEndDate = END_DATE_BOX.value;
		}

		var startDate = parsePersianDate(formattedStartDate);
		var endDate = parsePersianDate(formattedEndDate);

		durationDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
		durationYears = Math.floor(durationDays / 365);
		durationDays -= durationYears * 365;
		durationMonths = Math.floor(durationDays / 30);
		durationDays -= durationMonths * 30;
	} else {
		try {
			var startPicker = START_DATE_BOX.nextSibling;
			var endPicker = END_DATE_BOX.nextSibling;
			var startDaysCount = (val(startPicker.year) * 360) + (val(startPicker.month) * 30) + val(startPicker.day);
			var endDaysCount = (val(endPicker.year) * 360) + (val(endPicker.month) * 30) + val(endPicker.day);

			if (startPicker.date && endPicker.date) {
				durationDays = endDaysCount - startDaysCount;
				durationYears = Math.floor(durationDays / 360);
				durationDays -= durationYears * 360;
				durationMonths = Math.floor(durationDays / 30);
				durationDays -= durationMonths * 30;
			}
		} catch (e) { }
	}

	DURATION_DAYS_BOX.value = durationDays;
	DURATION_MONTHS_BOX.value = durationMonths;
	DURATION_YEARS_BOX.value = durationYears;
}

function getDateDiffDays(date1, date2) {
	try {
		var x = date1.toDateString();
	} catch (e) {
		date1 = parseServerDateString(date1);
	}

	if (date2 == undefined || date2 == null) {
		date2 = new Date();
		date2 = date2.setHours(0, 0, 0, 0);
	} else {
		try {
			var x = date2.toDateString();
		} catch (e) {
			date2 = parseServerDateString(date2);
		}
	}

	var difference = date2 - date1;
	return Math.round(difference / (1000 * 60 * 60 * 24));
}

function findControlByIdSuffix(containerElement, id) {
	if (id == "")
		return null;
	for (var i = 0; i < containerElement.children.length; i++) {
		var currentElement = containerElement.children[i];
		if (currentElement.id.toString().indexOf(id) == currentElement.id.length - id.length) {
			if (currentElement.id.toString().indexOf(id) != -1) {
				return currentElement;
			}
		} else {
			var ret = findControlByIdSuffix(currentElement, id);
			if (ret != null) {
				return ret;
			}
		}
	}
	return null;
}

function parseURLfor(szWhat) {
	var re = new RegExp("[?|&]" + szWhat + "=([^&]*)", "gi");
	var arr = re.exec(window.document.location.search);
	return ((arr == null) ? null : arr[1]);
}

function getDateObject(dateString) {
	return new Date(Date.parse(dateString.replace(/(\d{4})-(\d{2})-(\d{2})/ig, "$2/$3/$1")));
}

// function to format a number with separators. returns formatted number. (<script language="JavaScript" src="http://www.hashemian.com/js/NumberFormat.js"></script>)
// num - the number to be formatted
// decpoint - the decimal point character. if skipped, "." is used
// sep - the separator character. if skipped, "," is used
function formatDecimal(num, decpoint, sep) { //Original Name: FormatNumberBy3
	// check for missing parameters and use defaults if so
	if (arguments.length == 2) {
		sep = ",";
	}
	if (arguments.length == 1) {
		sep = ",";
		decpoint = ".";
	}
	// need a string for operations
	num = num.toString();
	// separate the whole number and the fraction if possible
	a = num.split(decpoint);
	x = a[0]; // decimal
	y = a[1]; // fraction
	z = "";


	if (typeof (x) != "undefined") {
		// reverse the digits. regexp works from left to right.
		for (i = x.length - 1; i >= 0; i--)
			z += x.charAt(i);
		// add seperators. but undo the trailing one, if there
		z = z.replace(/(\d{3})/g, "$1" + sep);
		if (z.slice(-sep.length) == sep)
			z = z.slice(0, -sep.length);
		x = "";
		// reverse again to get back the number
		for (i = z.length - 1; i >= 0; i--)
			x += z.charAt(i);
		// add the fraction back in, if it was there
		if (typeof (y) != "undefined" && y.length > 0)
			x += decpoint + y;
	}

	return x;
}

function u_Param(key, value) {
	return "&" + key + "=" + urlEncode(value);
}

function u_FirstParam(key, value) {
	return "?" + key + "=" + urlEncode(value);
}

function u_AppendParam(url, key, value) {
	if (url.indexOf('?') < 0) {
		return url + u_FirstParam(key, value);
	}
	else {
		return url + u_Param(key, value);
	}
}

function u_MakeUnique(url) {
	if (url.indexOf('?') < 0) {
		return url;
	}
	var rand_str = "c5beb3dc46a10e41" + Math.round(Math.random() * 2147483648.000000);
	return u_AppendParam(url, "zx", rand_str);
}

var serverResponseCache = new Array();
function getServerResponseWithCache(software, command, arguments, data) {
	var cacheKey = software + "," + command + "," + arguments + "," + data;
	if (serverResponseCache[cacheKey] == undefined)
		serverResponseCache[cacheKey] = getServerResponse(software, command, arguments, data);

	return serverResponseCache[cacheKey];
}

function getServerResponse(software, command, arguments, bodyData) {
	return getServerResponseWithTimeout(software, command, arguments, bodyData);
}

function getServerResponseWithTimeout(software, command, arguments, bodyData, timeout) {
	var data = bodyData;
	if (
		software.toLowerCase() == "common" ||
		software.toLowerCase() == "contacts" ||
		software.toLowerCase() == "documentmanager" ||
		software.toLowerCase() == "contracts" ||
		software.toLowerCase() == "financialaccounting" ||
		software.toLowerCase() == "budgets" ||
		software.toLowerCase() == "treasury"
	) {
		data = JSON.stringify({ data: bodyData != undefined ? bodyData : "", arguments: arguments != undefined ? arguments : "", formToken: formAntiXsrfToken });
		arguments = undefined;
	}

	var url = getClientEventHandlerUrl(software, command, arguments);

	var holder = function () {
		var temp = "";

		var get = function () {
			return temp;
		};

		var set = function (data) {
			temp = data;
		};

		return {
			Get: get,
			Set: set
		};
	}();

	if (ajaxCall(url, data, holder.Set, false, timeout))
		return holder.Get();
	throw "unable to get data from server.";
}

function getServerResponseAsync(software, command, arguments, responseHandler, bodyData) {
	return getServerResponseAsyncWithTimeout(software, command, arguments, responseHandler, bodyData);
}

function getServerResponseAsyncWithTimeout(software, command, arguments, responseHandler, bodyData, timeout) {
	var data = bodyData;
	if (
		software.toLowerCase() == "common" ||
		software.toLowerCase() == "contacts" ||
		software.toLowerCase() == "documentmanager" ||
		software.toLowerCase() == "contracts" ||
		software.toLowerCase() == "financialaccounting" ||
		software.toLowerCase() == "budgets" ||
		software.toLowerCase() == "treasury"
	) {
		data = JSON.stringify({ data: bodyData != undefined ? bodyData : "", arguments: arguments != undefined ? arguments : "", formToken: formAntiXsrfToken });
		arguments = undefined;
	}

	var url = getClientEventHandlerUrl(software, command, arguments);
	return ajaxCall(url, data, responseHandler, true, timeout);
}

function getClientEventHandlerUrl(software, command, arguments) {
	return getSoftwareControlsPath(software) + "/clientEventHandlers.aspx" + "?c=" + command + (arguments == undefined ? "" : "&" + arguments) + "&rnd=" + getTempId();
}

function ajaxCall(url, data, callbackHandler, async, timeout) {
	if ($.ajax == null || $.ajax == undefined)
		return false;

	var timeout = (timeout == null || timeout == undefined || timeout == 0) ? 80000 : timeout;
	var isAsync = (async == null || async == undefined) ? false : async;
	var requestType = (data == null || data == undefined) ? "GET" : "POST";
	$.ajax({
		url: url,
		data: data,
		type: requestType,
		async: isAsync,
		timeout: timeout
	}).done(function (data, textStatus, jqXHR) {
		callbackHandler(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		callbackHandler(textStatus);
	});
	return true;
}

function parseServerDateString(serverDateString) {
	var ret = new Date(Date.parse(serverDateString.replace(/(\d{4})-(\d{2})-(\d{2})/ig, "$2/$3/$1")));
	if (ret.getHours() == 23)
		ret.setDate(ret.getDate() + 1);

	return ret;
}

function getServerDateString(stringDate) {
	if (stringDate == "")
		return "";

	if (stringDate.indexOf("-") > -1)
		stringDate = replaceString(stringDate, "-", "/");

	try {
		stringDate = stringDate.split(" ")[0] + " 06:00";
	} catch (e) { }

	var fullDate = new Date(stringDate);

	var ret = fullDate.getFullYear() + "-";

	if ((fullDate.getMonth() + 1).toString().length == 1)
		ret += "0" + (fullDate.getMonth() + 1).toString();
	else
		ret += (fullDate.getMonth() + 1).toString();

	ret += "-";

	if (fullDate.getDate().toString().length == 1)
		ret += "0" + fullDate.getDate().toString();
	else
		ret += fullDate.getDate().toString();

	return ret;
}

var g_rgRequestFactory = new Array();
function requestFactory(software, command, arguments, fnCallBack, objContext) {
	var url = getSoftwareControlsPath(software) + "/clientEventHandlers.aspx";
	url += "?c=" + command + (arguments == undefined ? "" : "&" + arguments) + "&rnd=" + getTempId();

	var objXMLHTTP;
	this.xmlhttp = new ActiveXObject("Microsoft.xmlhttp");
	this.xmlVersion = 1;
	objXMLHTTP = this.xmlhttp;
	objXMLHTTP.open("POST", url, true);
	objXMLHTTP.send(objContext);
	this.url = url;
	this.context = objContext;
	this.index = requestFactory.index;
	this.expand = false;
	this.lockRequest = false;
	if (null != fnCallBack) {
		this.callBack = fnCallBack;
		this.xmlhttp.onreadystatechange = new Function("requestDispatch(" + (this.index) + ")");
	}

	g_rgRequestFactory[this.index] = this;

	requestFactory.index += 1;

}
requestFactory.index = 0;

function requestDispatch(iIndex) {
	var obj = g_rgRequestFactory[iIndex];
	if (null != obj && !obj.lockRequest && 4 == obj.xmlhttp.readystate) {
		obj.lockRequest = true;
		Object.prototype.invoke = obj.callBack;
		var invoker = new Object();
		invoker.invoke(obj.xmlhttp.responseText);
		delete g_rgRequestFactory[iIndex];
	}
}

function getFullUrlOf(pagePath) {
	var ret = window.location.href.toString();
	ret = ret.substr(0, ret.length - window.location.search.length);

	if (ret.toLocaleLowerCase().indexOf("genericmodal.aspx") > -1)
		ret = ret.substr(0, ret.length - 17);
	else
		ret = ret.substr(0, ret.length - 12);

	ret += pagePath;
	return ret;
}

String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function () {
	return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
	return this.replace(/\s+$/, "");
}

function generateGuid_sub() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function generateGuid() {
	return (generateGuid_sub() + generateGuid_sub() + "-" + generateGuid_sub() + "-" + generateGuid_sub() + "-" + generateGuid_sub() + "-" + generateGuid_sub() + generateGuid_sub() + generateGuid_sub());
}

function RandomString(length) {
	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!@#$*()";
	var charsLength = chars.length;
	var str = "";

	for (x = 0; x < length; x++) {
		i = Math.floor(Math.random() * charsLength);
		str += chars.charAt(i);
	}
	return str;
}

function toggleCheckBoxes(parentElement, checked) {
	var checkBoxes = parentElement.all.tags("INPUT");

	for (var i = 0; i < checkBoxes.length; i++)
		checkBoxes[i].checked = checked;
}

function daysBetween(date1, date2) {
	// The number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = date1_ms - date2_ms;

	// Convert back to days and return
	return Math.round(difference_ms / ONE_DAY);
}

function insertTextAtCursor(myField, myValue) {
	//Source: http://alexking.org/blog/2003/06/02/inserting-at-the-cursor-using-javascript

	//IE support
	if (document.selection) {
		sel = document.selection.createRange();
		sel.text = myValue;
	}

	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
			+ myValue
			+ myField.value.substring(endPos, myField.value.length);
	} else {
		myField.value += myValue;
	}
}

function gtSelectedItemsCount(listControl) {
	var ret = 0;

	for (var i = 0; i < listControl.children.length; i++)
		if (listControl.children(i).selected)
			ret++;

	return ret;
}

function enableCancelBubble(e) {
	e = e || event;
	if (e) {
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	}
}

function windowOpen(url, name, features, replace) {
	var newWindow = rootWindow.open(url, name, features, replace);
	newWindow.focus();
	return newWindow;
}

String.prototype.endsWith = function (s) {
	var reg = new RegExp(s + "$");
	return reg.test(this);
}

String.prototype.startsWith = function (s) {
	var reg = new RegExp("^" + s);
	return reg.test(this);
}

function getTimeString(minutes) {
	var hours = minutes / 60 - (minutes % 60) / 60;
	minutes = minutes % 60;

	var hourString = hours.toString();
	var minuteString = minutes.toString();

	if (hours < 10)
		hourString = "0" + hours;

	if (minutes < 10)
		minuteString = "0" + minutes;

	return hourString + ":" + minuteString;
}

function getElementPosition(element) {
	var offsetLeft = 0;
	var offsetTop = 0;

	while (element) {
		offsetLeft += element.offsetLeft;
		offsetTop += element.offsetTop;
		element = element.offsetParent;
	}

	if (navigator.userAgent.indexOf('Mac') != -1 && typeof document.body.leftMargin != 'undefined') {
		offsetLeft += document.body.leftMargin;
		offsetTop += document.body.topMargin;
	}

	return { left: offsetLeft, top: offsetTop };
}

function ParseFloatEx(dataValue) {
	var temp = dataValue.toString().replace(/(,)/g, "");
	var floatValue = parseFloat(temp);
	floatValue = Math.round(floatValue * 1000) / 1000.0;
	return floatValue;
}

function FormatFloat(floatValue) {
	floatValue = ParseFloatEx(floatValue);
	var strValue = floatValue.toFixed(8);
	var ret = strValue.replace(/(\x2E0+)$|(0*)$|(,)/g, "");

	if (ret == 'NaN')
		ret = '0';

	return formatDecimal(ret);
}

function openModalWindow(url, name, features) {
	var param = new Object();
	param.name = name;

	var retVal = rootWindow.showModal(url, param, features);
	return retVal;
}

function checkIE64Bit() {
	if (navigator != null) {
		if (navigator.userAgent != null) {
			return navigator.userAgent.toLowerCase().indexOf("win64") != -1;
		} else {
			throw "userAgent is unavailable.";
		}
	} else {
		throw "navigator is unavailable.";
	}
}

function parseIsoDate(isoDate) {
	try {
		isoDate = isoDate.replace(/\D/g, " ");
		var dtcomps = isoDate.split(" ");

		// modify month between 1 based ISO 8601 and zero based Date
		dtcomps[1]--;

		return new Date(dtcomps[0], dtcomps[1], dtcomps[2], dtcomps[3], dtcomps[4], dtcomps[5]);
	} catch (e) {
		throw e.message;
	}
}

function findDefaultWindow(currentWindow) {
	if (currentWindow == undefined)
		currentWindow = window;

	var defaultPageFileName = currentWindow.location.pathname.toLowerCase();

	if (defaultPageFileName.indexOf('loader.aspx') != -1)
		return findDefaultWindow(currentWindow.parent);
	else if (defaultPageFileName.indexOf("default.aspx"))
		return currentWindow;
}

function pad(val) {
	// input: 9 -> output: 09
	var valString = val + "";
	if (valString.length < 2) {
		return "0" + valString;
	}
	else {
		return valString;
	}
}

function convertToHTMLString(inputString) {
	inputString = inputString.trim();
	var sepratorCharacters = "{0123456789\-/}";
	var letters = inputString.split(/[{0123456789\-/}]+/);
	var Separator = inputString.split(/[^{0123456789\-/}]+/);

	var isFirstPartSeprator = sepratorCharacters.indexOf(inputString.charAt(0)) != -1;
	var counter = letters.length > Separator.length ? letters.length : Separator.length;

	for (var i = 0; i < letters.length; i++)
		letters[i] = '<span style="float:left;">' + letters[i] + '</span>';

	for (var i = 0; i < Separator.length; i++)
		Separator[i] = '<span style="float:left;">' + Separator[i] + '</span>';

	var result = '<span style="direction:ltr;float:right">';

	for (var i = 0; i < counter ; i++) {
		var letter = "";
		var seprator = "";

		if (letters[i] != undefined)
			letter = letters[i];
		if (Separator[i] != undefined)
			seprator = Separator[i];

		result += isFirstPartSeprator ? seprator + letter : letter + seprator;
	}

	result += '</span>';
	return result;
}

function validateGuid(input) {
	if ((!input.startsWith("{") && input.endsWith("}")) || (input.startsWith("{") && !input.endsWith("}")))
		return false;

	return /^[{]*[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}[}]*$/i.test(input);
}

function registerListenerKeys(keys, onReceiveMessageEvent, ticket, clientNotificationServiceUrls) {
	var functionContainer = getFunctionContainer("RealtimeMessenger.RegisterListenerKeys");

	if (functionContainer) {
		if (functionContainer.RealtimeMessenger.ConnectionState() == -1 && ticket && clientNotificationServiceUrls) {
			$.when(functionContainer.RealtimeMessenger.Init(ticket, clientNotificationServiceUrls))
				.then(function (connectionStablished) {
					if (connectionStablished) {
						functionContainer.RealtimeMessenger.RegisterListenerKeys(keys, onReceiveMessageEvent);
					}
				});
		}
		else {
			waitToConnected(functionContainer.RealtimeMessenger, function () { functionContainer.RealtimeMessenger.RegisterListenerKeys(keys, onReceiveMessageEvent); }, 5);
		}
	}
}

function getNotificationServiceTicket() {
	return getServerResponse("Common", "GetNotificationServiceTicket");
}

function unregisterListenerKeys(keys) {
	var functionContainer = getFunctionContainer("RealtimeMessenger.UnregisterListenerKeys");

	if (functionContainer)
		waitToConnected(functionContainer.RealtimeMessenger, function () { functionContainer.RealtimeMessenger.UnregisterListenerKeys(keys); }, 5);
}

function waitToConnected(realtimeMessenger, callBackFunction, tryCount) {
	if (realtimeMessenger.ConnectionState() == 1) {
		callBackFunction();
		return;
	}

	if (tryCount == 0)
		throw new Error("Could not connect to signalR hub.");

	setTimeout(function () { waitToConnected(realtimeMessenger, callBackFunction, tryCount - 1); }, 500);
}

function getFunctionContainer(func) {
	var currentWindow = getFirstRootWindowObject();
	if (currentWindow && (func.indexOf('.') == -1 || eval("currentWindow." + func.substring(0, func.indexOf('.'))) != undefined) && eval("currentWindow." + func) != undefined)
		return currentWindow;

	//alert("Function '" + func + "' not found!");

	return null;
}

function getFirstRootWindowObject() {
	var currentWindow = window.top;
	while (currentWindow) {
		if (currentWindow.dialogArguments && currentWindow.dialogArguments.window && HasPermission(currentWindow.dialogArguments.window))
			currentWindow = currentWindow.dialogArguments.window;
		else if (currentWindow.opener && HasPermission(currentWindow.opener))
			currentWindow = currentWindow.opener;
		else if (currentWindow != currentWindow.top && HasPermission(currentWindow.top))
			currentWindow = currentWindow.top;
		else
			break;
	}

	return currentWindow;
}

//If open didgah from another domain, javascript will failed to access to parent.
function HasPermission(win) {
	try {
		win.location.href;
	}
	catch (ex) {
		if (ex.message == 'Permission denied')
			return false;
	}

	return true;
}