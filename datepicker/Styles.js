//---------------routines.js----------------------
var setTimeoutID;
var RoutinesMethods = {
	enableCancelBubble: function (e) {
		enableCancelBubble(e);
	},
	selectInputText: function (element) {
		if (element == null)
			return;

		if (setTimeoutID != null && setTimeoutID != undefined)
			clearTimeout(setTimeoutID);

		if (element.avoidSelection != "true") {
			setTimeoutID = setTimeout(function () { try { element.select() } catch (e) { } }, 0);
		}
	}
}

//---------------ssnInput.htc----------------------
var SSN = {
	hasError: false,

	visited: false,

	validator: function (value, keyCode) {
		var ctrlChr = "";
		var sum = 0;
		var mod = 0;
		var lastDigit = 0;
		var isValid = false;
		var isSame = false;

		if (keyCode != null && keyCode != undefined)
			ctrlChr = String.fromCharCode(keyCode);
		else
			ctrlChr = value.substring(9, 10);

		isSame = (keyCode != null && keyCode != undefined) ? SSN.isSameAll(value + ctrlChr) : SSN.isSameAll(value);
		if (isSame) {
			SSN.setError(!isSame);
			return;
		}

		for (var x = 0; x < 9; x++) {
			sum += parseInt(value.substring(x, x + 1)) * (10 - x);
		}

		mod = sum % 11;
		if (mod < 2)
			isValid = (mod == ctrlChr);
		else if (mod >= 2)
			isValid = ((11 - mod) == ctrlChr);
		SSN.setError(isValid);
		return true;
	},

	handleKeyPress: function () {
		if ((event.keyCode < 48 || event.keyCode > 57) || event.srcElement.value.length >= 10)
			return false;
		if (event.srcElement.value.length + 1 == 10) {
			return SSN.validator(event.srcElement.value, event.keyCode);
		}
	},

	handleBlur: function () {
		var isSame = false;
		var standardCode = event.srcElement.value;
		if (standardCode == "") {
			SSN.setError(true);
			return false;
		}
		isSame = SSN.isSameAll(standardCode);
		if (isSame) {
			SSN.setError(!isSame)
			return false;
		}

		if (!SSN.visited)
			SSN.validator(event.srcElement.value);
		SSN.visited = false;
	},

	isSameAll: function (value) {
		var isSame = true;
		if (value.length < 10)
			return false;
		for (var x = 0; x < 10; x++) {
			if (x > 0) {
				if (value.substring(x, x + 1) != value.substring(x - 1, x))
					isSame = false;
			}
		}
		return isSame;
	},

	setError: function (status) {
		event.srcElement.style.backgroundColor = !status ? "FDC3AA" : "";
		if (!status) {
			SSN.hasError = true;
			SSN.visited = true;
			messageBox("InvalidSSN");
			event.srcElement.focus();
		}
		else {
			SSN.hasError = false;
		}
	}
}

//---------------economicalUniqueIdentifier.htc----------------------
var EconomicalUniqueIdentifier = {
	hasError: false,

	validator: function (value) {
		/* source algo link: http://www.are.ir/article/shenasameli/shenasa_meli.htm */
		var isValid = false;

		var L = value.length;
		if (L < 11 || parseInt(value, 10) == 0) {
			return false;
		}

		if (parseInt(value.substr(3, 6), 10) == 0) {
			return false;
		}
		var c = parseInt(value.substr(10, 1), 10);
		var d = parseInt(value.substr(9, 1), 10) + 2;
		var z = new Array(29, 27, 23, 19, 17);
		var s = 0;
		for (var i = 0; i < 10; i++)
			s += (d + parseInt(value.substr(i, 1), 10)) * z[i % 5];
		s = s % 11;
		if (s == 10) s = 0;
		isValid = (c == s);

		return isValid;
	},

	handleKeyPress: function () {
		if ((event.keyCode < 48 || event.keyCode > 57) || event.srcElement.value.length >= 11)
			return false;
	},

	handleBlur: function () {
		if (event.srcElement.value == "") {
			EconomicalUniqueIdentifier.setError(true);
			return false;
		}
		EconomicalUniqueIdentifier.setError(EconomicalUniqueIdentifier.validator(event.srcElement.value));
	},

	setError: function (status) {
		event.srcElement.style.backgroundColor = !status ? "FDC3AA" : "";
		if (!status) {
			messageBox("InvalidEconomicalUniqueIdentifier");
			event.srcElement.focus();
		}
	}
}

//---------------barcodeInput.htc----------------------
var BarcodeInputBehavior = {
	handleKeyPress: function () {
		key = window.event.keyCode;
		if (window.event.keyCode == 13) {
			if (event.srcElement.onBarcodeEnter != null && event.srcElement.value != "")
				eval(event.srcElement.onBarcodeEnter);
			window.event.cancelBubble = true;
			return false;
		}
	},

	handleMouseOver: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid silver";
	},

	handleChange: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement);
	},

	handleBlur: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement);

		handleRequiredInputBlur(event.srcElement);
	},

	handleFocus: function () {
		RoutinesMethods.selectInputText(event.srcElement);
	}
}

//---------------emailInput.htc----------------------
var EmailInputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		var input = event.srcElement.value;
		var atIndex = input.indexOf("@");
		var dotIndex = input.lastIndexOf(".");
		var invalidEmail = false;

		if (input == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		if (atIndex <= 0 || dotIndex <= 0 || dotIndex <= atIndex + 1 || dotIndex == input.length - 1 || input.length < 5)
			invalidEmail = true;

		if (invalidEmail) {
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidEmail");
			event.srcElement.focus();
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}
	},

	handleKeyPress: function () {
		if (event.keyCode == 13)
			return EmailInputBehavior.handleBlur();
	}
}

//---------------body.htc----------------------
var BodyBehavior = {
	handleMouseUp: function () {
		try {
			hideAllRightClickMenus();
			window.parent.hideRightClickMenus();
		} catch (e) { }
	},

	cancelContextMenu: function () {
		return false;
	}
}

//---------------button.htc----------------------
var ButtonBehavior = {
	handleButtonMouseOver: function () {
		event.srcElement.className = "buttonHighlighted";
	},

	handleButtonMouseOut: function () {
		event.srcElement.className = "button";
	}
}

//---------------date.htc----------------------
var DateBehavior = {
	handleReadyStateChange: function () {
		if (event.srcElement.readyState == "complete")
			DateBehavior.handleBlur();
	},

	handleMouseOver: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid silver";
	},

	handleKeyUp: function () {
		for (var i = 0; i < event.srcElement.value.length; i++) {
			if (event.srcElement.value.charCodeAt(i) > 1000) {
				event.srcElement.style.direction = "rtl";
				event.srcElement.style.textAlign = "right";
				break;
			}
		}

		if (event.keyCode == 191) {
			event.srcElement.style.direction = "ltr";
			event.srcElement.style.textAlign = "left";
		}
	},

	handleBlur: function () {
		var dateValue;

		if (event.srcElement.value == "") {
			event.srcElement.style.borderColor = "";

			if (event.srcElement.todayIsDefault)
				dateValue = "today";
			else
				return;
		} else {
			dateValue = event.srcElement.value;
		}

		var calendar = event.srcElement.calendar ? event.srcElement.calendar : "gregorian";

		if (calendar.search(/persian/ig) != -1) {
			if (dateValue == "today")
				dateValue = getPersianShortDateString(new Date());

			DateBehavior.resolvePersianDate(dateValue);
		} else {
			if (dateValue == "today")
				dateValue = (new Date()).toDateString();
			DateBehavior.resolveDate(dateValue);
		}
	},

	resolveDate: function (dateValue) {
		event.srcElement.style.borderColor = "";
		event.srcElement.dir = "ltr";
		event.srcElement.style.textAlign = "left";

		var ms = Date.parse(dateValue);
		var date = new Date(ms);

		if (date.getFullYear() > 1900) {
			var displayMode = event.srcElement.displayMode ? event.srcElement.displayMode : "short";
			if (displayMode.search(/long/ig) != -1)
				event.srcElement.value = date.toDateString();
			else {
				var dateString = "";
				dateString += (date.getMonth() + 1) + "/";
				dateString += date.getDate() + "/";
				dateString += date.getFullYear();

				event.srcElement.value = dateString;
			}

			if (!window.document.all(event.srcElement.id).date)
				window.document.all(event.srcElement.id).date = date;
			else {
				with (window.document.all(event.srcElement.id).date) {
					setFullYear(date.getFullYear());
					setMonth(date.getMonth());
					setDate(date.getDate());
				}
			}
		}

		if (isNaN(Date.parse(event.srcElement.date))) {
			event.srcElement.value = "Invalid date";
			event.srcElement.style.borderColor = "red";
			event.srcElement.dir = "ltr";
			event.srcElement.style.textAlign = "left";
			window.document.all(event.srcElement.id).date = null;
		}
	},

	resolvePersianDate: function (dateValue) {
		event.srcElement.style.borderColor = "";
		date = parsePersianDate(dateValue);

		if (date) {
			var displayMode = event.srcElement.displayMode ? event.srcElement.displayMode : "short";
			if (displayMode.search(/long/ig) != -1) {
				event.srcElement.dir = "rtl";
				event.srcElement.style.textAlign = "right";
				event.srcElement.value = getPersianDateString(date);
			}
			else {
				event.srcElement.dir = "ltr";
				event.srcElement.style.textAlign = "left";
				event.srcElement.value = getPersianShortDateString(date);
			}

			if (!window.document.all(event.srcElement.id).date)
				window.document.all(event.srcElement.id).date = date;
			else {
				with (window.document.all(event.srcElement.id).date) {
					setFullYear(date.getFullYear());
					setMonth(date.getMonth());
					setDate(date.getDate());
				}
			}
		}

		if (isNaN(Date.parse(event.srcElement.date))) {
			event.srcElement.value = "تاريخ نادرست است.";
			event.srcElement.dir = "rtl";
			event.srcElement.style.textAlign = "right";
			event.srcElement.style.direction = "rtl";
			event.srcElement.style.borderColor = "red";
			window.document.all(event.srcElement.id).date = null;
		}
	}
}

//---------------dateInput.htc----------------------
var DateInputBehavior = {
	handleMouseOver: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid silver";
	},

	handleFocus: function () {
		event.srcElement.maxLength = 10;
	},

	handleKeyPress: function () {
		if (window.event.keyCode > 57 || window.event.keyCode == 32)
			return false;
		if (event.keyCode == 13)
			return DateInputBehavior.handleBlur();
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		event.srcElement.isValid = true;
		if (event.srcElement.value == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		formattedDate = DateInputBehavior.formatPersianDate(event.srcElement.value);
		event.srcElement.isValid = formattedDate != false;
		if (!event.srcElement.isValid) {
			if (event.srcElement.style.border.toString().indexOf("red") != -1)
				return false;
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidDate");
			event.srcElement.focus();
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
			event.srcElement.value = formattedDate;
			return true;
		}
	},

	formatPersianDate: function (CheckDate) {
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
}

//---------------fieldInput.htc----------------------
var FieldInputBehavior = {
	handleDrop: function () {
		return false;
	},

	handlePaste: function () {
		return false;
	},

	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	// Keyboard Switching
	FKeyDown: function () {
		if ((window.event.ctrlKey && window.event.keyCode == 86) || (window.event.shiftKey && window.event.keyCode == 45)) {
			window.event.returnValue = false;
			return false;
		}
		window.event.returnValue = true;
	},

	FKeyPress: function () {
		key = window.event.keyCode;

		if ((key == 32) /*space*/ || (key > 47 && key < 58) /*numbers*/ || (key > 64 && key < 91) /*ABC..Z*/ || (key > 96 && key < 123)/*abc..z*/)
			return;
		if (key == 1548 || key == 1567 || key == 1569 || key == 1570 || key == 1572 || key == 1574 || key == 1575 || key == 1576 || key == 1601 || key == 1602 || key == 1662 || key == 1740 || key == 1670 || key == 1688 || key == 1705 || key == 1711)
			return;
		if ((key > 1577 && key < 1595) || (key > 1600 && key < 1611))
			return;

		return false;
	},

	handleFocus: function () {
		RoutinesMethods.selectInputText(event.srcElement);
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);

		if (val(event.srcElement.value) == 0 && event.srcElement.value != "")
			event.srcElement.value = event.srcElement.value.replace(/[\s]+/g, " ");
	}
}

//---------------htmlViewer.htc----------------------
var HtmlViewerBehavior = {
	handleKeydown: function () {
		if (event.keyCode == 46 || event.keyCode == 88 || event.keyCode == 86 || event.keyCode == 66 || event.keyCode == 73 || event.keyCode == 85 || event.keyCode == 8)
			return false;
	},

	returnTrue: function () {
		event.cancelBubble = true;
		return true;
	},

	returnFalse: function () {
		return false;
	},

	cacheCurrentValue: function () {
		event.srcElement.currentInnerHTML = event.srcElement.innerHTML;
	},

	setCachedValue: function () {
		if (event.srcElement.innerHTML != event.srcElement.currentInnerHTML)
			event.srcElement.innerHTML = event.srcElement.currentInnerHTML;
	}
}

//---------------ipInput.htc----------------------
var IpInputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if ((window.event.keyCode < 48 && window.event.keyCode != 32 && window.event.keyCode != 13 && window.event.keyCode != 44 && window.event.keyCode != 46) || window.event.keyCode > 57) {
			if (!(event.srcElement.allowWildcards == "true" && (window.event.keyCode == 63 || window.event.keyCode == 42)))
				return false;
		}
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		var validIP = false;

		var input = event.srcElement.value;

		if (input == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		var ipParts = input.split(".");

		validIP = ipParts.length == 4;

		if (validIP)
			validIP = IpInputBehavior.validIPPart(ipParts[0]) && IpInputBehavior.validIPPart(ipParts[1]) && IpInputBehavior.validIPPart(ipParts[2]) && IpInputBehavior.validIPPart(ipParts[3])

		if (!validIP) {
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidIP", undefined, eMessageBoxStyle.exclamation);
			event.srcElement.focus();
			RoutinesMethods.selectInputText(event.srcElement);
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}
	},

	validIPPart: function (ipPart) {
		return ((ipPart >= 0 && ipPart <= 255 && !isNaN(ipPart) && ipPart != "") || (event.srcElement.allowWildcards == "true" && (ipPart.indexOf("*") != -1 || ipPart.indexOf("?") != -1)));
	}
}

var Ipv6InputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},
	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},
	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		var validIP = false;

		var input = event.srcElement.value;

		if (input == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}
		validIP = Ipv6InputBehavior.Ipv6Validator(input);
		if (!validIP) {
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidIPV6", undefined, eMessageBoxStyle.exclamation);
			event.srcElement.focus();
			RoutinesMethods.selectInputText(event.srcElement);
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}
	},

	Ipv6Validator: function (ip) {
		if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(ip)) {
			return true;
		} else {
			return false;
		}
	}
}

//---------------parameterInput.htc----------------------
var ParameterInputBehavior = {
	handleMouseOver: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		var keyCode = window.event.keyCode;
		if (keyCode > 255 || keyCode == 32 || (keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126))
			return false;

		if (event.keyCode == 13)
			return ParameterInputBehavior.handleBlur();
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		event.srcElement.isValid = true;

		if (event.srcElement.value == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		if (event.srcElement.value.toLowerCase().charAt(0) < 'a' || event.srcElement.value.toLowerCase().charAt(0) > 'z') {
			if (event.srcElement.style.border.toString().indexOf("red") != -1)
				return false;

			messageBox("FirstCharOfParameterNameError");
			event.srcElement.style.border = "1px solid red";
			event.srcElement.focus();
			return false;
		}

		event.srcElement.style.border = "1px solid silver";
		return true;
	}
}

//---------------readOnlyInput.htc----------------------
var ReadOnlyInputBehavior = {
	handleKeydown: function () {
		if (event.keyCode == 46 || event.keyCode == 88 || event.keyCode == 86 || event.keyCode == 66 || event.keyCode == 73 || event.keyCode == 85 || event.keyCode == 8) {
			event.keyCode = 0;
			event.returnValue = false;
			return false;
		}
	},

	returnTrue: function () {
		return true;
	},

	returnFalse: function () {
		return false;
	},

	cacheCurrentValue: function () {
		event.srcElement.currentValue = event.srcElement.value;
	},

	setCachedValue: function () {
		if (event.srcElement.value != event.srcElement.currentValue)
			event.srcElement.value = event.srcElement.currentValue;
	}
}

//---------------selectButton.htc----------------------
var SelectButtonBehavior = {
	handleButtonMouseOver: function () {
		event.srcElement.className = "selectButtonHighlighted";
	},

	handleButtonMouseOut: function () {
		event.srcElement.className = "selectButton";
	}
}

//---------------selectImageButton.htc----------------------
var SelectImageButtonBehavior = {
	handleImageButtonMouseOver: function () {
		event.srcElement.className = "selectImageButtonHighlighted";
	},

	handleImageButtonMouseOut: function () {
		event.srcElement.className = "selectImageButton";
	}
}

//---------------signedNumberInput.htc----------------------
var SignedNumberInputBehavior = {
	handleMouseOver: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if ((window.event.keyCode < 48 && window.event.keyCode != 32 && window.event.keyCode != 13 && window.event.keyCode != 44 && window.event.keyCode != 46 && window.event.keyCode != 43 && window.event.keyCode != 45) || window.event.keyCode > 57)
			return false;
	},

	handleFocus: function () {
		if (event.srcElement.autoFormatDecimal == "true" || event.srcElement.AutoFormatDecimal == "true")
			event.srcElement.value = replaceString(event.srcElement.value, ",", "");
	},

	handleBlur: function () {
		handleRequiredInputBlur(event.srcElement);

		if (event.srcElement.value == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		event.srcElement.value = replaceString(event.srcElement.value, "'", "");
		if (!(event.srcElement.AllowSpaces == "true" || event.srcElement.allowSpaces == "true"))
			event.srcElement.value = replaceString(event.srcElement.value, " ", "");

		if (!(event.srcElement.AllowCommas == "true" || event.srcElement.allowCommas == "true"))
			event.srcElement.value = replaceString(event.srcElement.value, ",", "");

		if (!(event.srcElement.AllowDecimal == "true" || event.srcElement.allowDecimal == "true"))
			event.srcElement.value = event.srcElement.value.replace(".", "");

		var controlValue = val(event.srcElement.value);

		if (event.srcElement.isValid == undefined)
			event.srcElement.isValid = true;

		var stringControlValue = event.srcElement.value.replace(/0+/g, "0");
		event.srcElement.isValid = !(stringControlValue != "0" && val(controlValue) == 0);
		if (!event.srcElement.isValid) {
			if (event.srcElement.style.border.toString().indexOf("red") != -1) {
				event.srcElement.value = "";
				return false;
			}
			event.srcElement.value = "";
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidNumber");
			event.srcElement.focus();
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";

			if (event.srcElement.autoFormatDecimal == "true" || event.srcElement.AutoFormatDecimal == "true")
				event.srcElement.value = formatDecimal(event.srcElement.value);

			return true;
		}
	}
}

//---------------telInput.htc----------------------
var TelInputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if (window.event.keyCode > 57 || window.event.keyCode < 47) {
			if (window.event.keyCode != 32 && window.event.keyCode != 43 && window.event.keyCode != 44 && window.event.keyCode != 45 && window.event.keyCode != 120 && window.event.keyCode != 41 && window.event.keyCode != 40 && window.event.keyCode != 42 && window.event.keyCode != 35)
				return false;
		}
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);

		event.srcElement.value = event.srcElement.value.replace(/^\s*|\s*$/g, "");

		while (event.srcElement.value.indexOf("  ") != -1)
			event.srcElement.value = event.srcElement.value.replace("  ", " ");

		while (event.srcElement.value.indexOf("++") != -1)
			event.srcElement.value = event.srcElement.value.replace("++", "+");

		while (event.srcElement.value.indexOf("xx") != -1)
			event.srcElement.value = event.srcElement.value.replace("xx", "x");

		while (event.srcElement.value.indexOf("--") != -1)
			event.srcElement.value = event.srcElement.value.replace("--", "-");

		handleRequiredInputBlur(event.srcElement);
	}
}

//---------------timeInputWithSign----------------------
var TimeInputWithSignBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if (window.event.keyCode == 45)
			return true;
		if (window.event.keyCode < 48 || window.event.keyCode > 58)
			return false;
	},

	handleKeyDown: function () {
		if (window.event.keyCode == 13)
			TimeInputWithSignBehavior.handleBlur(); 
	},

	handleFocus: function () {
		if (event.srcElement.allowMoreThan24Hours != "true")
			event.srcElement.maxLength = 6;
		else
			event.srcElement.maxLength = 7;

		RoutinesMethods.selectInputText(event.srcElement);
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		var time = event.srcElement.value;
		var invalidTime = false;
		var hour = "";
		var mins = "";
		
		var sign = time.indexOf("-");
		time = time.replace('-', '');

		if (time == "") {
			event.srcElement.value = "";
			event.srcElement.style.border = "1px solid silver";
			return false;
		}

		if (time.indexOf(":") == -1) {
			if (time.length == 3 || time.length > 4)
				invalidTime = true;
			else if (time.length < 3)
				hour = time;
			else {
				hour = time.substr(0, 2);
				mins = time.substr(2, 2);
			}
		} else {
			hour = time.substring(0, time.indexOf(":"));
			mins = time.substring(time.indexOf(":") + 1, time.length);
		}

		if (!invalidTime) {
			if (event.srcElement.allowMoreThan24Hours != "true") {
				hour = "00" + hour;
				hour = hour.substr(hour.length - 2, 2);
			}

			mins = "00" + mins;
			mins = mins.substr(mins.length - 2, 2);

			if (isNaN(hour) || isNaN(mins) || (parseInt(hour) > 23 && event.srcElement.allowMoreThan24Hours != "true") || parseInt(mins) > 59)
				invalidTime = true;
			else if (sign != "undifind" && sign ==0) 
				event.srcElement.value = "-" + hour + ":" + mins;
			else
				event.srcElement.value = hour + ":" + mins;
		}

		if (invalidTime) {
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidTime");
			event.srcElement.focus();
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
		}
	}
}

//---------------timeInput.htc----------------------
var TimeInputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if (window.event.keyCode < 48 || window.event.keyCode > 58)
			return false;
	},

	handleKeyDown: function () {
		if (window.event.keyCode == 13)
			TimeInputBehavior.handleBlur();
	},

	handleFocus: function () {
		if (event.srcElement.allowMoreThan24Hours != "true")
			event.srcElement.maxLength = 5;
		else
			event.srcElement.maxLength = 7;

		RoutinesMethods.selectInputText(event.srcElement);
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		var time = event.srcElement.value;
		var invalidTime = false;
		var hour = "";
		var mins = "";

		if (time == "") {
			event.srcElement.style.border = "1px solid silver";
			return false;
		}

		if (time.indexOf(":") == -1) {
			if (time.length == 3 || time.length > 4)
				invalidTime = true;
			else if (time.length < 3)
				hour = time;
			else {
				hour = time.substr(0, 2);
				mins = time.substr(2, 2);
			}
		} else {
			hour = time.substring(0, time.indexOf(":"));
			mins = time.substring(time.indexOf(":") + 1, time.length);
		}

		if (!invalidTime) {
			if (event.srcElement.allowMoreThan24Hours != "true") {
				hour = "00" + hour;
				hour = hour.substr(hour.length - 2, 2);
			}

			mins = "00" + mins;
			mins = mins.substr(mins.length - 2, 2);

			if (isNaN(hour) || isNaN(mins) || (parseInt(hour) > 23 && event.srcElement.allowMoreThan24Hours != "true") || parseInt(mins) > 59)
				invalidTime = true;
			else
				event.srcElement.value = hour + ":" + mins;
		}
		if (invalidTime) {
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidTime");
			event.srcElement.focus();
			return false;
		} else {
			event.srcElement.style.border = "1px solid silver";
		}
	}
}

//---------------urlInput.htc----------------------
var UrlInputBehavior = {
	handleMouseOver: function () {
		event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		event.srcElement.style.border = "1px solid silver";
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);
	}
}

//---------------input.htc----------------------
var InputBehavior = {
	handleKeyPress: function () {
		key = window.event.keyCode;
		if (event.srcElement.cancelBubble == "true" || event.srcElement.CancelBubble == "true") {
			if (window.event.keyCode == 13) {
				window.event.cancelBubble = true;
				return false;
			}
		}

		if (window.event.keyCode == 13 && event.srcElement.tagName != "TEXTAREA")
			standardizeInputCharacters(event.srcElement);

		var keyboardIsPersian = false;
		try {
			keyboardIsPersian = g_PersianKeyboardBehavior == "persian";
		} catch (e) { }

		if (keyboardIsPersian) {
			if (window.event.keyCode == 1610) /*arabic YA*/
				window.event.keyCode = 1740; /*persian YA*/

			if (window.event.keyCode == 1603) /*arabic KAF*/
				window.event.keyCode = 1705; /*persian KAF*/
		} else {
			if (window.event.keyCode == 1740) /*persian YA*/
				window.event.keyCode = 1610; /*arabic YA*/

			if (window.event.keyCode == 1705) /*persian KAF*/
				window.event.keyCode = 1603; /*arabic KAF*/
		}

		window.event.returnValue = true;
	},

	handleMouseOver: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid silver";
	},

	handleChange: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement);
	},

	handleBlur: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement);

		handleRequiredInputBlur(event.srcElement);
	},

	handleFocus: function () {
		RoutinesMethods.selectInputText(event.srcElement);
	},

	handleKeyDown: function () { }
}

//---------------farsiInput.htc----------------------
var FarsiInputBehavior = {
	handleMouseOver: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (!event.srcElement.disableMouseOverEffect)
			event.srcElement.style.border = "1px solid silver";
	},

	handleBlur: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement)

		handleRequiredInputBlur(event.srcElement);
	},

	handleChange: function () {
		if (event.srcElement.tagName == "INPUT" || event.srcElement.tagName == "TEXTAREA")
			standardizeInputCharacters(event.srcElement)
	},

	handleFocus: function () {
		RoutinesMethods.selectInputText(event.srcElement);
	},

	mode: 1,
	// Keyboard Switching
	// ************************************************** Copied in XsDhtmlEditor.htc
	handleKeyDown: function () {
		if (window.event.ctrlKey && window.event.altKey) {
			if (FarsiInputBehavior.mode == 0) {
				FarsiInputBehavior.mode = 1;
				window.defaultStatus = "Farsi Mode";
				//window.event.srcElement.style.textAlign="right";
			}
			else {
				FarsiInputBehavior.mode = 0;
				window.defaultStatus = "Normal Mode (English)";
				//window.event.srcElement.style.textAlign="left"
			}
			window.event.returnValue = false;
			return false;
		}
		window.event.returnValue = true;
	},

	//Keyboard Mapping to Unicode
	handleKeyPress: function () {
		key = window.event.keyCode;
		if (FarsiInputBehavior.mode == 1 && key <= 127) {
			switch (key) {
				case 32:
					if (window.event.shiftKey)
						window.event.keyCode = 8204;
					break;
				case 72:
					window.event.keyCode = 1570;
					break;
				case 104:
					window.event.keyCode = 1575;
					break;
				case 70:
				case 102:
					window.event.keyCode = 1576;
					break;
				case 39:
					window.event.keyCode = 1711;
					break;
				case 106:
				case 74:
					window.event.keyCode = 1578;
					break;
				case 101:
				case 69:
					window.event.keyCode = 1579;
					break;
				case 91:
					window.event.keyCode = 1580;
					break;
				case 93:
					window.event.keyCode = 1670;
					break;
				case 112:
				case 80:
					window.event.keyCode = 1581;
					break;
				case 111:
				case 79:
					window.event.keyCode = 1582;
					break;
				case 110:
				case 78:
					window.event.keyCode = 1583;
					break;
				case 98:
				case 66:
					window.event.keyCode = 1584;
					break;
				case 118:
				case 86:
					window.event.keyCode = 1585;
					break;
				case 99:
					window.event.keyCode = 1586;
					break;
				case 67:
					window.event.keyCode = 8205;
					break;
				case 92:
					window.event.keyCode = 1688;
					break;
				case 115:
				case 83:
					window.event.keyCode = 1587;
					break;
				case 97:
				case 65:
					window.event.keyCode = 1588;
					break;
				case 119:
				case 87:
					window.event.keyCode = 1589;
					break;
				case 113:
				case 81:
					window.event.keyCode = 1590;
					break;
				case 120:
				case 88:
					window.event.keyCode = 1591;
					break;
				case 122:
				case 90:
					window.event.keyCode = 1592;
					break;
				case 117:
				case 85:
					window.event.keyCode = 1593;
					break;
				case 121:
				case 89:
					window.event.keyCode = 1594;
					break;
				case 116:
					window.event.keyCode = 1601;
					break;
				case 84:
					window.event.keyCode = 1548;
					break;
				case 114:
				case 82:
					window.event.keyCode = 1602;
					break;
				case 59:
					window.event.keyCode = 1705;
					break;
				case 39:
					window.event.keyCode = 1711;
					break;
				case 103:
				case 71:
					window.event.keyCode = 1604;
					break;
				case 108:
					window.event.keyCode = 1605;
					break;
				case 76:
					window.event.keyCode = 171;
					break;
				case 107:
					window.event.keyCode = 1606;
					break;
				case 75:
					window.event.keyCode = 187;
					break;
				case 44:
					window.event.keyCode = 1608;
					break;
				case 105:
				case 73:
					window.event.keyCode = 1607;
					break;
				case 68:
				case 100:
					window.event.keyCode = 1740;
					break;
				case 109:
					window.event.keyCode = 1574;
					break;
				case 77:
					window.event.keyCode = 1569;
					break;
				case 60:
					window.event.keyCode = 1572;
					break;
				case 62:
					window.event.keyCode = 1728;
					break;
				case 63:
					window.event.keyCode = 1567;
					break;
				case 38:
					window.event.keyCode = 1548;
					break;
				case 96:
					window.event.keyCode = 1662;
					break;
				case 126:
					window.event.keyCode = 215;
					break;
				case 123:
					window.event.keyCode = 125;
					break;
				case 125:
					window.event.keyCode = 123;
					break;
				case 40:
					window.event.keyCode = 41;
					break;
				case 41:
					window.event.keyCode = 40;
					break;
			}
		}

		if (window.event.keyCode == 13 && event.srcElement.tagName != "TEXTAREA")
			standardizeInputCharacters(event.srcElement);

		var keyboardIsPersian = false;
		try {
			keyboardIsPersian = g_PersianKeyboardBehavior == "persian";
		} catch (e) { }

		if (keyboardIsPersian) {
			if (window.event.keyCode == 1610) /*arabic YA*/
				window.event.keyCode = 1740; /*persian YA*/

			if (window.event.keyCode == 1603) /*arabic KAF*/
				window.event.keyCode = 1705; /*persian KAF*/
		} else {
			if (window.event.keyCode == 1740) /*persian YA*/
				window.event.keyCode = 1610; /*arabic YA*/

			if (window.event.keyCode == 1705) /*persian KAF*/
				window.event.keyCode = 1603; /*arabic KAF*/
		}

		window.event.returnValue = true;
	}
}

//---------------textInput.htc----------------------
var TextInputBehavior = {
	handleKeyPress: function () {
		inputBehaviorObject(this).handleKeyPress();
	},

	handleMouseOver: function () {
		inputBehaviorObject(this).handleMouseOver();
	},

	handleMouseOut: function () {
		inputBehaviorObject(this).handleMouseOut();
	},

	handleChange: function () {
		inputBehaviorObject(this).handleChange();
	},

	handleBlur: function () {
		inputBehaviorObject(this).handleBlur();
	},

	handleFocus: function () {
		inputBehaviorObject(this).handleFocus();
	},

	handleKeyDown: function () {
		inputBehaviorObject(this).handleKeyDown();
	}
}

function inputBehaviorObject(self) {
	var isFarsiInput = false;
	try {
		isFarsiInput = $(self).css('behaviorClass').toLowerCase() == 'farsiinput';
	}
	catch (err) {
		isFarsiInput = false;
	}

	if (isFarsiInput)
		return FarsiInputBehavior;
	else
		return InputBehavior;
}

//---------------numberInput.htc----------------------
var NumberInput = {
	MaxValue: function (obj) {
		if ($(obj).attr('MaxValue') == undefined)
			return null;
		else
			return $(obj).attr('MaxValue');
	},

	MinValue: function (obj) {
		if ($(obj).attr('MinValue') == undefined)
			return null;
		else
			return $(obj).attr('MinValue');
	},

	isValidNumber: function (value) {
		if (NumberInput.MaxValue(event.srcElement) != null && parseFloat(value) > NumberInput.MaxValue(event.srcElement))
			return false;

		if (NumberInput.MinValue(event.srcElement) != null && parseFloat(value) < NumberInput.MinValue(event.srcElement))
			return false;

		return true;
	},

	handleMouseOver: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid black";
	},

	handleMouseOut: function () {
		if (event.srcElement.style.border.toString().indexOf("red") == -1)
			event.srcElement.style.border = "1px solid silver";
	},

	handleKeyPress: function () {
		if ((event.srcElement.allowNegativeSign == "true" || event.srcElement.AllowNegativeSign == "true") && event.keyCode == 45 && event.srcElement.value.length == 0)
			return true;

		if ((event.srcElement.allowDecimal == "true" || event.srcElement.AllowDecimal == "true") && event.keyCode == 46)
			return true;

		if ((window.event.keyCode < 48 && window.event.keyCode != 32 && window.event.keyCode != 13 && window.event.keyCode != 44) || window.event.keyCode > 57)
			return false;
	},

	handleFocus: function () {
		RoutinesMethods.selectInputText(event.srcElement);
	},

	handleBlur: function () {
		standardizeInputCharacters(event.srcElement);
		handleRequiredInputBlur(event.srcElement);

		if (event.srcElement.value == "") {
			event.srcElement.style.border = "1px solid silver";
			return true;
		}

		event.srcElement.value = replaceString(event.srcElement.value, "'", "");
		if (!(event.srcElement.AllowSpaces == "true" || event.srcElement.allowSpaces == "true"))
			event.srcElement.value = replaceString(event.srcElement.value, " ", "");

		if (!(event.srcElement.AllowCommas == "true" || event.srcElement.allowCommas == "true"))
			event.srcElement.value = replaceString(event.srcElement.value, ",", "");

		if (!(event.srcElement.AllowDecimal == "true" || event.srcElement.allowDecimal == "true"))
			event.srcElement.value = event.srcElement.value.replace(".", "");

		var controlValue = val(event.srcElement.value);

		if (event.srcElement.isValid == undefined)
			event.srcElement.isValid = true;

		event.srcElement.isValid = event.srcElement.isValid && !(controlValue != "0" && val(controlValue) == 0) && NumberInput.isValidNumber(event.srcElement.value);

		if (!event.srcElement.isValid) {
			if (event.srcElement.style.border.toString().indexOf("red") != -1)
				return false;
			event.srcElement.style.border = "1px solid red";
			messageBox("InvalidNumber");
			event.srcElement.focus();
			return false;
		} else {
			if (!event.srcElement.invalid)
				event.srcElement.style.border = "1px solid silver";

			if (event.srcElement.autoFormatDecimal == "true" || event.srcElement.AutoFormatDecimal == "true")
				NumberInput.handleKeyUp();

			return true;
		}
	},

	handleKeyUp: function () {
		if (!(event.srcElement.autoFormatDecimal == "true" || event.srcElement.AutoFormatDecimal == "true"))
			return;

		var separator = ",";
		var int = event.srcElement.value.replace(new RegExp(separator, "g"), "");
		var regexp = new RegExp("\\B(\\d{3})(" + separator + "|$)");
		do {
			int = int.replace(regexp, separator + "$1");
		}
		while (int.search(regexp) >= 0)
		event.srcElement.value = int;

	}
}


//---------------Attach Event----------------------
$(document)
	//button.htc
	.on({
		'mouseover': ButtonBehavior.handleButtonMouseOver,
		'mouseout': ButtonBehavior.handleButtonMouseOut
	}, '.button, .buttonHighlighted')



	//selectButton.htc
	.on({
		'mouseover': SelectButtonBehavior.handleButtonMouseOver,
		'mouseout': SelectButtonBehavior.handleButtonMouseOut
	}, '.selectButton, .selectButtonHighlighted')



	//selectImageButton.htc
	.on({
		'mouseover': SelectImageButtonBehavior.handleImageButtonMouseOver,
		'mouseout': SelectImageButtonBehavior.handleImageButtonMouseOut
	}, '.selectImageButton, .selectImageButtonHighlighted')



	//body.htc
	.on({
		'contextmenu': BodyBehavior.cancelContextMenu,
		'mouseup': BodyBehavior.handleMouseUp
	}, 'BODY')



	//urlInput.htc
	.on({
		'blur': UrlInputBehavior.handleBlur,
		'mouseover': UrlInputBehavior.handleMouseOver,
		'mouseout': UrlInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.urlInput')


	//emailInput.htc
	.on({
		'keypress': EmailInputBehavior.handleKeyPress,
		'blur': EmailInputBehavior.handleBlur,
		'mouseover': EmailInputBehavior.handleMouseOver,
		'mouseout': EmailInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.emailInput')



	//htmlViewer.htc
	.on({
		'selectstart': HtmlViewerBehavior.returnTrue,
		'contextmenu': HtmlViewerBehavior.returnTrue,
		'keydown': HtmlViewerBehavior.handleKeydown,
		'keypress': HtmlViewerBehavior.returnFalse,
		'drag': HtmlViewerBehavior.returnFalse,
		'drop': HtmlViewerBehavior.returnFalse,
		'cut': HtmlViewerBehavior.returnFalse,
		'paste': HtmlViewerBehavior.returnFalse,
		'focus': HtmlViewerBehavior.cacheCurrentValue,
		'blur': HtmlViewerBehavior.setCachedValue
	}, '.htmlViewer, .htmlViewerFCKEditor')



	//readOnlyInput.htc
	.on({
		'selectstart': ReadOnlyInputBehavior.returnTrue,
		'keydown': ReadOnlyInputBehavior.handleKeydown,
		'keypress': ReadOnlyInputBehavior.returnFalse,
		'drag': ReadOnlyInputBehavior.returnFalse,
		'drop': ReadOnlyInputBehavior.returnFalse,
		'contextmenu': RoutinesMethods.enableCancelBubble,
		'cut': ReadOnlyInputBehavior.returnFalse,
		'paste': ReadOnlyInputBehavior.returnFalse,
		'focus': ReadOnlyInputBehavior.cacheCurrentValue,
		'change': ReadOnlyInputBehavior.setCachedValue
	}, '.readOnlyInput')



	//barcodeInput.htc
	.on({
		'keypress': BarcodeInputBehavior.handleKeyPress,
		'mouseover': BarcodeInputBehavior.handleMouseOver,
		'mouseout': BarcodeInputBehavior.handleMouseOut,
		'blur': BarcodeInputBehavior.handleBlur,
		'change': BarcodeInputBehavior.handleChange,
		'focus': BarcodeInputBehavior.handleFocus
	}, '.barcodeInput')



	//telInput.htc
	.on({
		'keypress': TelInputBehavior.handleKeyPress,
		'mouseover': TelInputBehavior.handleMouseOver,
		'mouseout': TelInputBehavior.handleMouseOut,
		'blur': TelInputBehavior.handleBlur,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.telInput')



	//parameterInput.htc
	.on({
		'keypress': ParameterInputBehavior.handleKeyPress,
		'blur': ParameterInputBehavior.handleBlur,
		'mouseover': ParameterInputBehavior.handleMouseOver,
		'mouseout': ParameterInputBehavior.handleMouseOut
	}, '.parameterInput')



	//fieldInput.htc
	.on({
		'keydown': FieldInputBehavior.FKeyDown,
		'keypress': FieldInputBehavior.FKeyPress,
		'focus': FieldInputBehavior.handleFocus,
		'blur': FieldInputBehavior.handleBlur,
		'mouseover': FieldInputBehavior.handleMouseOver,
		'mouseout': FieldInputBehavior.handleMouseOut,
		'drop': FieldInputBehavior.handleDrop,
		'beforepaste': FieldInputBehavior.handlePaste
	}, '.fieldInput')



	//input.htc
	.on({
		'keypress': InputBehavior.handleKeyPress,
		'mouseover': InputBehavior.handleMouseOver,
		'mouseout': InputBehavior.handleMouseOut,
		'blur': InputBehavior.handleBlur,
		'change': InputBehavior.handleChange,
		'focus': InputBehavior.handleFocus,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.input, .passwordInput')



	//timeInputWithSign
	.on({
		'keypress': TimeInputWithSignBehavior.handleKeyPress,
		'keydown': TimeInputWithSignBehavior.handleKeyDown,
		'focus': TimeInputWithSignBehavior.handleFocus,
		'blur': TimeInputWithSignBehavior.handleBlur,
		'mouseover': TimeInputWithSignBehavior.handleMouseOver,
		'mouseout': TimeInputWithSignBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.timeInputWithSign')



	//timeInput.htc
	.on({
		'keypress': TimeInputBehavior.handleKeyPress,
		'keydown': TimeInputBehavior.handleKeyDown,
		'focus': TimeInputBehavior.handleFocus,
		'blur': TimeInputBehavior.handleBlur,
		'mouseover': TimeInputBehavior.handleMouseOver,
		'mouseout': TimeInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.timeInput')



	//numberInput.htc
	.on({
		'keypress': NumberInput.handleKeyPress,
		'blur': NumberInput.handleBlur,
		'focus': NumberInput.handleFocus,
		'mouseover': NumberInput.handleMouseOver,
		'mouseout': NumberInput.handleMouseOut,
		'keyup': NumberInput.handleKeyUp,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.numberInput')



	//signedNumberInput.htc
	.on({
		'keypress': SignedNumberInputBehavior.handleKeyPress,
		'blur': SignedNumberInputBehavior.handleBlur,
		'focus': SignedNumberInputBehavior.handleFocus,
		'mouseover': SignedNumberInputBehavior.handleMouseOver,
		'mouseout': SignedNumberInputBehavior.handleMouseOut
	}, '.signedNumberInput')



	//ipInput.htc
	.on({
		'keypress': IpInputBehavior.handleKeyPress,
		'blur': IpInputBehavior.handleBlur,
		'mouseover': IpInputBehavior.handleMouseOver,
		'mouseout': IpInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.ipInput')


	//ipv6Input.htc
	.on({
		'blur': Ipv6InputBehavior.handleBlur,
		'mouseover': Ipv6InputBehavior.handleMouseOver,
		'mouseout': Ipv6InputBehavior.handleMouseOut,
		'contextmenu': Ipv6InputBehavior.enableCancelBubble
	}, '.ipv6Input')


	//ssnInput.htc
	.on({
		'keypress': SSN.handleKeyPress,
		'blur': SSN.handleBlur
	}, '.ssnInput')



	//date.htc
	.on({
		'keyup': DateBehavior.handleKeyUp,
		'blur': DateBehavior.handleBlur,
		'mouseover': DateBehavior.handleMouseOver,
		'mouseout': DateBehavior.handleMouseOut,
		'readystatechange': DateBehavior.handleReadyStateChange
	}, '.date')



	//dateInput.htc
	.on({
		'keypress': DateInputBehavior.handleKeyPress,
		'focus': DateInputBehavior.handleFocus,
		'blur': DateInputBehavior.handleBlur,
		'mouseover': DateInputBehavior.handleMouseOver,
		'mouseout': DateInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.dateInput')



	//textInput.htc
	.on({
		'keydown': TextInputBehavior.handleKeyDown,
		'keypress': TextInputBehavior.handleKeyPress,
		'blur': TextInputBehavior.handleBlur,
		'change': TextInputBehavior.handleChange,
		'focus': TextInputBehavior.handleFocus,
		'mouseover': TextInputBehavior.handleMouseOver,
		'mouseout': TextInputBehavior.handleMouseOut,
		'contextmenu': RoutinesMethods.enableCancelBubble
	}, '.textInput')



	//economicalUniqueIdentifierInput.htc
	.on({
		'blur': EconomicalUniqueIdentifier.handleBlur,
		'keypress': EconomicalUniqueIdentifier.handleKeyPress
	}, '.economicalUniqueIdentifierInput');