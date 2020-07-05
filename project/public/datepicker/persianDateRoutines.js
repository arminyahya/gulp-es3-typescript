var monthNames = new Array("فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند");
var dayNames = new Array("یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه");

function IsDaylightSavingDay(year, month, day) {
	return new Date(year, month, day, 6).getDate() != new Date(year, month, day, 0).getDate();
}

function parsePersianDate(dateValue) {
	dateValue = dateValue.replace(/ي/g, "ی").replace(/ك/g, "ک");
	dateValue = dateValue.replace(/شنبه|یک‌شنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|یک شنبه|دو شنبه|سه شنبه|چهار شنبه|پنج شنبه|پنجشنبه|یکشنبه|دوشنبه|چهارشنبه|پنجشنبه|1شنبه|2شنبه|3شنبه|4شنبه|5شنبه|1 شنبه|2 شنبه|3 شنبه|4 شنبه|5 شنبه/g, "");

	dateValue = dateValue.replace(/(^\s*)|(\s*$)/g, "");
	dateValue = dateValue.replace(/[\s]+/g, " ");
	dateValue = dateValue.replace(/(^\s*)|(\s*$)/g, "");

	if (dateValue.substr(0, 1) != "-" && dateValue.substr(0, 1) != "+" && dateValue != "0") {
		if (Number(dateValue) > 0) {
			return getDateFromPersian(Number(getPersianDate(new Date())[0]), 1, Number(dateValue), true);
		}

		dateValue = dateValue.replace(/\s/g, "/");
		dateValue = dateValue.replace(/-/g, "/");

		var dateParts = dateValue.split("/");

		try {
			if (Number(dateParts[0]) > 1900) {
				var oDate = new Date(Date.parse(dateValue));

				if (IsDaylightSavingDay(oDate.getFullYear(), oDate.getMonth(), Number(dateParts[2]))) //Check DaylightSaving
					oDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]), 6);

				return oDate;
			}
		} catch (e) { }

		if (dateParts.length == 2 && !isNaN(dateParts[0]) && !isNaN(dateParts[1]))
			return getDateFromPersian(Number(getPersianDate(new Date())[0]), Number(dateParts[0]), Number(dateParts[1]));

		if (isNaN(dateParts[1])) {
			var month = null;

			try {
				if (dateParts[1] == "دی")
					month = 10;
				else if (dateParts[1].substr(0, 2) == "به")
					month = 11;
				else if (dateParts[1].substr(0, 2) == "فر")
					month = 1;
				else if (dateParts[1].substr(0, 2) == "ار")
					month = 2;
				else if (dateParts[1].substr(0, 2) == "خر")
					month = 3;
				else if (dateParts[1].substr(0, 2) == "تی")
					month = 4;
				else if (dateParts[1].substr(0, 2) == "مر")
					month = 5;
				else if (dateParts[1].substr(0, 2) == "شه")
					month = 6;
				else if (dateParts[1].substr(0, 2) == "مه")
					month = 7;
				else if (dateParts[1].substr(0, 2) == "آب")
					month = 8;
				else if (dateParts[1].substr(0, 2) == "آذ")
					month = 9;
				else if (dateParts[1].substr(0, 2) == "اس")
					month = 12;
			} catch (e) {
				return null;
			}

			try {
				if (!dateParts[2])
					dateParts[2] = getPersianDate(new Date())[0].toString();

				var year = dateParts[2].replace(/(^\s*)|(\s*$)/g, "");
				if (year.length == 2)
					year = "13" + year;

				year = Number(year);
				if (!isValidPersianYear(year))
					return null;
			} catch (e) {
				return null;
			}

			var day = Number(dateParts[0]);

			if (isNaN(day))
				return null;

			return getDateFromPersian(year, month, day);
		} else {
			var year = dateParts[0].replace(/(^\s*)|(\s*$)/g, "");
			if (year.length == 2)
				year = "13" + year;

			year = Number(year);

			if (!isValidPersianYear(year))
				return null;

			return getDateFromPersian(year, Number(dateParts[1]), Number(dateParts[2]));
		}
	} else {
		var date = new Date();
		date.setDate(date.getDate() + Number(dateValue));
		return date;
	}

	return null;
}

function getPersianDateString(oDate) {
	var persianDate = getPersianDate(oDate);

	return dayNames[oDate.getDay()] + " " + persianDate[2] + " " + monthNames[persianDate[1] - 1] + " " + persianDate[0];
}

function getPersianShortDateTime(oDate) {
	if (oDate) {
		var persianDate = getPersianDate(oDate);

		var year = persianDate[0];
		var month = "00" + persianDate[1];
		var day = "00" + persianDate[2];

		month = month.substr(month.length - 2);
		day = day.substr(day.length - 2);

		return year + "/" + month + "/" + day + " " + getHoursPart(oDate);
	} else {
		return "";
	}
}

function getFormatedTime(objTime) {
	var timeParts = objTime.split(":");
	var hours = "00";
	var minutes = "00";

	if(timeParts.length > 0)
	 hours = "00" + timeParts[0];

	if (timeParts.length > 1)
		minutes = "00" + timeParts[1];
	
	hours = hours.substr(hours.length - 2);
	minutes = minutes.substr(minutes.length - 2);

	return hours + ":" + minutes;
}

function getHoursPart(objDate) {
	var hours = "00" + objDate.getHours();
	var minutes = "00" + objDate.getMinutes();
	hours = hours.substr(hours.length - 2);
	minutes = minutes.substr(minutes.length - 2);

	return hours + ":" + minutes;
}

function getPersianShortDateString(oDate) {
	var persianDate = getPersianDate(oDate);

	var year = persianDate[0];
	var month = "00" + persianDate[1];
	var day = "00" + persianDate[2];

	month = month.substr(month.length - 2);
	day = day.substr(day.length - 2);

	return year + "/" + month + "/" + day;
}

function getPersianDaysInMonth(month, year) {
	if (month <= 6) return 31;
	if (month <= 11) return 30;
	if (isPersianLeap(year))
		return 30;
	return 29;
}

function getPersianDay(date) {
	return getPersianDate(date)[2];
}

function getPersianMonth(date) {
	return getPersianDate(date)[1];
}

function getPersianYear(date) {
	return getPersianDate(date)[0];
}

function getPersianDate(date) {
	//var perscal = julianDayToPersian(gregorianToJulianDay(date.getFullYear(), date.getMonth()+1, date.getDate()) + ((date.getSeconds() + 60 * (date.getMinutes() + 60 * date.getHours())) / 86400.0));

	var perscal = julianDayToPersian(gregorianToJulianDay(date.getFullYear(), date.getMonth() + 1, date.getDate()));
	return new Array(perscal[0], perscal[1], perscal[2]);
}

function isValidPersianYear(year) {
	if (year >= 1000 && year <= 1500)
		return true;
	else
		return false;
}

function getDateFromPersian(year, month, day, skipValidate) {
	try {
		if (!skipValidate && !(month > 0 && month < 13 && day > 0 && day < 32))
			return null;

		if (year == 1386 && month == 12 && day == 26) { //Exception beacuse of client daylight saving bug on Iran time zone!
			return new Date(2008, 2, 16, 17);
		}
		else {
			var dateParts = julianDayToGregorian(persianToJulianDay(year, month, day));
			var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], 12, 0, 0);
			return date;
		}
	} catch (e) {
		return null;
	}
}

function mod(a, b) {
	return a - (b * Math.floor(a / b));
}


function isPersianLeap(year) {
	return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
}

function isGregorianLeap(year) {
	return ((year % 4) == 0) &&
					(!(((year % 100) == 0) && ((year % 400) != 0)));
}

var GREGORIAN_EPOCH = 1721425.5;
function gregorianToJulianDay(year, month, day) {
	return (GREGORIAN_EPOCH - 1) +
		(365 * (year - 1)) +
		Math.floor((year - 1) / 4) +
		(-Math.floor((year - 1) / 100)) +
		Math.floor((year - 1) / 400) +
		Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (isGregorianLeap(year) ? -1 : -2)) + day);
}

var PERSIAN_EPOCH = 1948320.5;
function persianToJulianDay(year, month, day) {
	var epbase, epyear;
	epbase = year - ((year >= 0) ? 474 : 473);
	epyear = 474 + mod(epbase, 2820);

	var manualDisposition = 0;

	return day + ((month <= 7) ? ((month - 1) * 31) : (((month - 1) * 30) + 6)) + Math.floor(((epyear * 682) - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (PERSIAN_EPOCH - 1);
}

function julianDayToPersian(jd) {
	var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;

	jd = Math.floor(jd) + 0.5;

	depoch = jd - persianToJulianDay(475, 1, 1);
	cycle = Math.floor(depoch / 1029983);
	cyear = mod(depoch, 1029983);

	if (cyear == 1029982) {
		ycycle = 2820;
	} else {
		aux1 = Math.floor(cyear / 366);
		aux2 = mod(cyear, 366);
		ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
	}

	year = ycycle + (2820 * cycle) + 474;
	if (year <= 0)
		year--;
	yday = (jd - persianToJulianDay(year, 1, 1)) + 1;
	month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
	day = (jd - persianToJulianDay(year, month, 1)) + 1;
	return new Array(year, month, day);
}

function julianDayToGregorian(jd) {
	var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, dyindex, year, yearday, leapadj;

	wjd = Math.floor(jd - 0.5) + 0.5;
	depoch = wjd - GREGORIAN_EPOCH;
	quadricent = Math.floor(depoch / 146097);
	dqc = mod(depoch, 146097);
	cent = Math.floor(dqc / 36524);
	dcent = mod(dqc, 36524);
	quad = Math.floor(dcent / 1461);
	dquad = mod(dcent, 1461);
	yindex = Math.floor(dquad / 365);
	year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
	if (!((cent == 4) || (yindex == 4))) {
		year++;
	}
	yearday = wjd - gregorianToJulianDay(year, 1, 1);
	leapadj = ((wjd < gregorianToJulianDay(year, 3, 1)) ? 0
																								:
								(isGregorianLeap(year) ? 1 : 2)
						);
	var month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
	day = (wjd - gregorianToJulianDay(year, month, 1)) + 1;

	return new Array(year, month, day);
}