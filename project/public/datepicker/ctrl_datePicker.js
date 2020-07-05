var m_szUrl = "";
var m_iFirstWeekOfYear = 0;
var m_bAutoInitialize = true;
var m_fIsIE50 = false;
var m_iIntervalID;
var m_iSubscriptionID;
var m_fReadOnly = false;
var CONST_MS_IN_WEEK = 604800000;
var m_oViewDate;
var m_oTodaysDate = new Date();
m_oTodaysDate.setHours(0, 0, 0, 0);
var m_oSelectedStart;
var m_oSelectedEnd;
var m_oMainTable;
var m_fHasLoaded = false;
var m_iFirstDayOfMonth = 0;
var m_iDaysInMonth = 0;
var m_oStatus;
var m_rgCalCells;
var m_fHaveData = false;
var m_iStartDay = 0;
var m_oCalStartDate;
var m_oCalEndDate;
var m_szClassPrepend = "";
var m_szClassTodaysDateCell = "cpTodaysDateCell";
var L_rgShortMonths_Text;
var L_rgLongMonths_Text;
var L_rgDayLetters_Text;
var m_szDateFormat = "[MMM] [yyyy]";
var m_szLanguageCode = "en";
var m_szDirection = "ltr";
var m_szApplicationURL;
var m_szShortMonths = "Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec";
var m_szLongMonths = "January;February;March;April;May;June;July;August;September;October;November;December";
var m_szDayLetters = "S;M;T;W;T;F;S";
var startDayIdx = -1;
var actualDate = new Array();

function onDocumentReady() {
	m_szClassPrepend = (null != this.name) ? this.name : "";
	L_rgShortMonths_Text = m_szShortMonths.split(";");
	L_rgLongMonths_Text = m_szLongMonths.split(";");
	L_rgDayLetters_Text = m_szDayLetters.split(";");

	if (m_bAutoInitialize)
		f_initBehavior(null);

	event_onBehaviorReady.fire();
}

function put_ShortMonths(shortMonths) {
	L_rgShortMonths_Text = shortMonths.split(";");
}

function put_LongMonths(longMonths) {
	L_rgLongMonths_Text = longMonths.split(";");
}

function put_DayLetters(dayLetters) {
	L_rgDayLetters_Text = dayLetters.split(";");
}

var m_szClassActiveDateCell, m_szClassInactiveDateCell;
f_initBehavior.bDone = false;
function f_initBehavior(oD) {
	try { //ADDED BY AIDIN
		if (f_initBehavior.bDone)
			return;

		f_initBehavior.bDone = true;

		if (-1 < window.clientInformation.appVersion.indexOf("MSIE 5.0")) {
			m_fIsIE50 = true;
			element.insertAdjacentElement("afterbegin", this.document.body.firstChild);
			m_oMainTable = this.firstChild.firstChild;
		} else {
			m_oMainTable = this.document.body.firstChild.firstChild;
			if (element.document.styleSheets) {
				var oSheet, oStyle;
				var len = element.document.styleSheets.length;
				for (var x = 0; x < len; x++) {
					if (oSheet = element.document.styleSheets[x]) {
						var szHref = oSheet.href;
						oStyle = null;
						if (szHref && szHref.length) {
							oStyle = document.createStyleSheet(szHref);
						} else if (oSheet.cssText.length) {
							oStyle = document.createStyleSheet();
							oStyle.cssText = oSheet.cssText;
						}

						if (oStyle) {
							var szMedia = oSheet.media;

							if (null != szMedia) {
								oStyle.media = szMedia;
							}
						}
					}
				}
			}

			m_oMainTable.style.fontFamily = this.document.body.currentStyle.fontFamily;
		}

		if (this.m_szDirection === "rtl") {
			var temp = element.imagePrevArrow;
			element.imagePrevArrow = element.imageNextArrow;
			element.imageNextArrow = temp;
		}

		if (element.imagePrevArrow) {
			m_oMainTable.children[1].children[0].children[0].innerHTML = '<IMG border=0 height=10 width=5 src="' + element.imagePrevArrow + '" leftNavButton="1">';
		}

		if (element.imageNextArrow) {
			m_oMainTable.children[1].children[0].children[2].innerHTML = '<IMG border=0 height=10 width=5 src="' + element.imageNextArrow + '" rightNavButton="1">';
		}

		m_oMainTable.attachEvent("onmousedown", onMouseDown);
		m_oMainTable.attachEvent("onmouseup", onMouseUp);
		m_oMainTable.parentElement.attachEvent("onkeydown", onKeyDown);
		m_oMainTable.parentElement.attachEvent("onfocus", onFocus);
		m_oMainTable.parentElement.attachEvent("onblur", onBlur);

		m_szClassActiveDateCell = "cpActiveDateCell";
		m_szClassInactiveDateCell = "cpInactiveDateCell";
		m_szClassTodaysDateCell = "cpTodaysDateCell";
		m_rgCalCells = m_oMainTable.cells["numbercell"];

		for (var i = 0; i < 7; i++) {
			with (m_rgCalCells[i]) {
				innerText = L_rgDayLetters_Text[(Number(m_iStartDay) + i) % 7];
			}
		}

		if (oD) {
			m_oViewDate = new Date(oD);
		} else if (!m_oViewDate) {
			m_oViewDate = new Date();
			m_oSelectedStart = new Date();
			m_oSelectedEnd = new Date();
		}
		m_oSelectedStart.setHours(0, 0, 0, 0);
		m_oSelectedEnd.setHours(24, 0, 0, 0);

		mfUpdateCalendar(false, false);
	} catch (e) { }
}

function fire_OnDateChange(bViewOnly, oDate) {
	var objEvent = createEventObject();
	if (!bViewOnly) {
		objEvent.date = oDate ? oDate : m_oSelectedStart;
		m_oSelectedStart = objEvent.date;
	}
	window.document.all(this.dateValueField).date = oDate;
	id_OnDateChange.fire(objEvent);
}

function fire_OnMonthChange() {
	var objEvent = createEventObject();
	objEvent.month = m_oViewDate.getMonth();
	objEvent.year = m_oViewDate.getFullYear();
	id_OnMonthChange.fire(objEvent);
}

function onStop() {
	if (m_iIntervalID) {
		window.clearInterval(m_iIntervalID);
	}
}

onKeyDown.iCell0 = 7;
onKeyDown.iCell1 = 7;

function onKeyDown() {
	var dir = 1;
	if (this.m_szDirection == "rtl")
		dir = -1;

	f_setDatePicked.oD = null;

	switch (event.keyCode) {
		case 37:
			onKeyDown.iCell1 -= (event.ctrlKey) ? dir * 1100 : dir * 1;
			break;

		case 38:
			onKeyDown.iCell1 -= (event.ctrlKey) ? 1100 : 7;
			break;

		case 39:
			onKeyDown.iCell1 += (event.ctrlKey) ? dir * 1000 : dir * 1;
			break;

		case 40:
			onKeyDown.iCell1 += (event.ctrlKey) ? 1000 : 7;
			break;

		case 13:
			mfSetDailyView(m_rgCalCells[onKeyDown.iCell0], event.ctrlKey);
			break;

		case 9:
			id_OnCalendarBlur.fire();
	}

	if (onKeyDown.iCell1 < 7) {
		if (event.ctrlKey && event.shiftKey)
			m_oViewDate.setFullYear(m_oViewDate.getFullYear() - 1);
		else {
			if (m_szLanguageCode == "fa") {
				var date = getPersianDate(m_oViewDate);
				if (date[1] == 1) {
					m_oViewDate = getDateFromPersian(date[0] - 1, 12, date[2] < 30 ? date[2] : 29, true);
				} else {
					m_oViewDate = getDateFromPersian(date[0], date[1] - 1, date[2], true);
				}
			} else {
				m_oViewDate.setMonth(m_oViewDate.getMonth() - 1);
			}
		}

		onKeyDown.iCell1 = (onKeyDown.iCell1 < -1000) ? onKeyDown.iCell0 : 48;
		mfUpdateCalendar(false, false);
		fire_OnMonthChange();
	} else if (onKeyDown.iCell1 > 48) {
		if (event.ctrlKey && event.shiftKey)
			m_oViewDate.setFullYear(m_oViewDate.getFullYear() + 1);
		else {
			if (m_szLanguageCode == "fa") {
				var date = getPersianDate(m_oViewDate);
				m_oViewDate = getDateFromPersian(date[0], date[1] + 1, date[2], true);
			} else {
				m_oViewDate.setMonth(m_oViewDate.getMonth() + 1);
			}
		}

		onKeyDown.iCell1 = (onKeyDown.iCell1 > 1000) ? onKeyDown.iCell0 : 7;

		mfUpdateCalendar(false, false);
		fire_OnMonthChange();
	}

	if (0 > onKeyDown.iCell0) {
		onKeyDown.iCell0 = onKeyDown.iCell1 = 7;
	}

	if (onKeyDown.iCell0 != onKeyDown.iCell1) {
		m_rgCalCells[onKeyDown.iCell0].firstChild.className = "cpKeyNavCell0";
		m_rgCalCells[onKeyDown.iCell1].firstChild.className = "cpKeyNavCell1";
		onKeyDown.iCell0 = onKeyDown.iCell1;
	}
}

function onFocus() {
	m_rgCalCells[onKeyDown.iCell1].firstChild.className = "cpKeyNavCell1";
}

function onBlur() {
	if (onMouseDown.bIsDown)
		return;

	m_rgCalCells[onKeyDown.iCell1].firstChild.className = "cpKeyNavCell0";
}

function onMouseUp() {
	onMouseDown.bIsDown = false;
}

onMouseDown.bIsDown = false

function onMouseDown() {
	onMouseDown.bIsDown = true;
	event.cancelBubble = true;
	f_setDatePicked.oD = null;
	m_oMainTable.focus();

	if (!m_fReadOnly) {
		var eSrc = event.srcElement;

		if (eSrc.parentElement.holdClass || eSrc.holdClass) {
			if (eSrc.holdClass)
				eSrc = eSrc.firstChild;

			mfSetDailyView(eSrc.parentElement, event.ctrlKey);
			return (false);
		} else if (null != eSrc.holdClass) {
			mfSetDailyView(eSrc, event.ctrlKey); return (false);
		} else if (null != eSrc.leftNavButton) {
			if (m_szLanguageCode == "fa") {
				var date = getPersianDate(m_oViewDate);

				if (date[1] == 1) {
					m_oViewDate = getDateFromPersian(date[0] - 1, 12, date[2] < 30 ? date[2] : 29, true);
				} else {
					m_oViewDate = getDateFromPersian(date[0], date[1] - 1, date[2], true);
				}
			} else {
				m_oViewDate.setMonth(m_oViewDate.getMonth() - 1);
			}

			mfUpdateCalendar(false, false);
			fire_OnMonthChange();
			return;
		} else if (null != eSrc.rightNavButton) {
			if (m_szLanguageCode == "fa") {
				var date = getPersianDate(m_oViewDate);
				m_oViewDate = getDateFromPersian(date[0], date[1] + 1, date[2], true);
			} else {
				m_oViewDate.setMonth(m_oViewDate.getMonth() + 1);
			}

			mfUpdateCalendar(false, false);
			fire_OnMonthChange();
			return;
		}
	}
}

function mfSetDailyView(eCell, bExternalCall) {
	var currentDay = eCell.day;
	var newDay = -1;
	var oDate = new Date(eCell.year, eCell.month, eCell.day);

	actualDate = new Array();
	actualDate.push(eCell.year);
	actualDate.push(eCell.month);
	actualDate.push(eCell.day);

	eCell.className = eCell.holdClass;
	newDay = oDate.getDate();

	if (newDay != currentDay)
		oDate.setDate(oDate.getDate() + 1);

	fire_OnDateChange(false, oDate);

	mfFindAndSelectDate.rgoDates.length = 0;

	mfFindAndSelectDate();
}

mfFindAndSelectDate.iStartIdx = -1;
mfFindAndSelectDate.iEndIdx = -1;
mfFindAndSelectDate.iHoldLastDaily = -1;
mfFindAndSelectDate.nAppendCount = 0;
mfFindAndSelectDate.rgoDates = new Array();
mfFindAndSelectDate.bFirst = true;
function mfFindAndSelectDate() {

	var x, y;
	if (mfFindAndSelectDate.iStartIdx > -1) {
		for (x = mfFindAndSelectDate.iStartIdx; x <= mfFindAndSelectDate.iEndIdx; x++) {
			m_rgCalCells[x].className = m_rgCalCells[x].holdClass;
		}
		mfFindAndSelectDate.iStartIdx = -1;
	} else if (1 < mfFindAndSelectDate.rgoDates.length) {
		var len = mfFindAndSelectDate.rgoDates.length;
		var msStart = mfFindAndSelectDate.rgoDates[0];
		var msEnd = mfFindAndSelectDate.rgoDates[len - 1];
		if (msEnd >= m_oCalStartDate.getTime() && msStart <= m_oCalEndDate.getTime()) {
			var msCalStart = m_oCalStartDate.getTime();

			for (x = 0; x < len; x++) {
				y = Math.round((mfFindAndSelectDate.rgoDates[x] - msCalStart) / 86400000) + 7;

				if (6 < y && 49 > y) {
					m_rgCalCells[y].className = "cpSelectedDateCell " + m_rgCalCells[y].className;

					if (48 < y)
						break;
				}
			}
		}

		return (false);
	}
	if (m_oSelectedStart > m_oCalEndDate || m_oSelectedEnd < m_oCalStartDate) {
		return (false);
	}

	x = 7;
	if (m_oSelectedStart >= m_oCalStartDate && m_oSelectedStart <= m_oCalEndDate) {
		//x = Math.round((m_oSelectedStart - m_oCalStartDate) / 86400000) + 6; // [ CHANGED BY KAMRAN : to fix the problem of find the selected date and show it ].
		x = Math.round((m_oSelectedStart - m_oCalStartDate) / 86400000) + 7;
	}

	y = x;

	mfFindAndSelectDate.iStartIdx = (x < 49) ? x : -1;
	mfFindAndSelectDate.iEndIdx = (y < 49) ? y : -1;
	var szClassAppend;

	for (; (x <= y && x < 49) ; x++) {
		m_rgCalCells[x].className = "cpSelectedDateCell " + m_rgCalCells[x].className;
	}

	mfFindAndSelectDate.rgoDates.length = 0;
	mfFindAndSelectDate.rgoDates[0] = m_oSelectedStart.getTime();

	mfFindAndSelectDate.iHoldLastDaily = mfFindAndSelectDate.iStartIdx;

	if (-1 < onKeyDown.iCell0) {
		m_rgCalCells[onKeyDown.iCell0].firstChild.className = "cpKeyNavCell0";
		onKeyDown.iCell1 = onKeyDown.iCell0 = (-1 < mfFindAndSelectDate.iStartIdx) ? mfFindAndSelectDate.iStartIdx : 7;

		if (!mfFindAndSelectDate.bFirst) {
			m_rgCalCells[onKeyDown.iCell1].firstChild.className = "cpKeyNavCell1";
		} else {
			mfFindAndSelectDate.bFirst = false;
		}
	}

	return (true);
}

f_setDatePicked.oD = null;
function f_setDatePicked(iD, iM, iY) {
	for (var x = 7; x < m_rgCalCells.length; x++) {
		if (iY == m_rgCalCells[x].year && iM == m_rgCalCells[x].month && iD == Number(m_rgCalCells[x].day)) {
			m_rgCalCells[x].firstChild.className = "cpKeyNavCell1";
			onKeyDown.iCell1 = onKeyDown.iCell0 = x;
			mfFindAndSelectDate.iHoldLastDaily = x;
		} else {
			m_rgCalCells[x].firstChild.className = "cpKeyNavCell0";
		}
	}

	f_setDatePicked.oD = new Date(iY, iM, iD, 0, 0, 0);
}

function mfGetDaysInMonth(iMonth, iYear) {
	iMonth += (iMonth == -1) ? 13 : 1;
	return ((2 == iMonth) ? (28 + mfIsLeapYear(iYear)) : (30 + ((iMonth + (iMonth > 7)) % 2)));
}

function mfIsLeapYear(yr) {
	return ((yr % 4 == 0) && (yr % 100 != 0) || (yr % 400 == 0)) ? 1 : 0;
}

function mfGetMsStartWeek(iY, iFirstWeekOfYear) {
	var y, z;
	var fShift = false;
	var rgRet = new Array(3);
	var oDate = new Date(iY, 0, 1, 0, 0, 0, 0);

	rgRet[2] = (oDate.getDay() == m_iFirstDayOfMonth);
	switch (iFirstWeekOfYear) {
		case 1:
			fShift = true;
			for (z = oDate.getDay() ; z != m_iStartDay;) {
				oDate.setDate(oDate.getDate() - 1); z = oDate.getDay(); fShift = false;
			}
			break;

		case 2:
			z = oDate.getDay();
			for (y = 0; z != m_iStartDay; y++) {
				oDate.setDate(oDate.getDate() + 1); z = oDate.getDay();
			}

			if (4 <= y)
				oDate.setDate(oDate.getDate() - 7);
			else
				fShift = true;
			break;

		case 3:
			z = oDate.getDay();
			for (y = 0; z != m_iStartDay; y++) {
				oDate.setDate(oDate.getDate() + 1);
				z = oDate.getDay();
			}

			if (7 <= y)
				oDate.setDate(oDate.getDate() - 7);
			else
				fShift = true;
			break;
	}

	rgRet[1] = fShift;
	rgRet[0] = oDate.getTime();
	return (rgRet);
}

mfWriteCellNumbers.todayCellIdx = -1;

function mfWriteCellNumbers(fLeaveSelection) {
	if (m_szLanguageCode == "fa") {
		var date = getPersianDate(m_oViewDate);
		m_oViewDate = getDateFromPersian(date[0], date[1], 1, true);
	} // else  {
	//	m_oViewDate.setDate(1);
	//}

	if (m_szLanguageCode == "fa") {
		var iM = getPersianMonth(m_oViewDate) - 1;
		var iY = getPersianYear(m_oViewDate);
	} else {
		var iM = m_oViewDate.getMonth();
		var iY = m_oViewDate.getFullYear();
	}


	var iY2 = iY % 100;
	var szCaptionText = this.m_szDateFormat.replace(/\[MMMM\]/g, L_rgLongMonths_Text[iM]);
	szCaptionText = szCaptionText.replace(/\[MMM\]/g, L_rgShortMonths_Text[iM]);
	szCaptionText = szCaptionText.replace(/\[MM\]/g, ++iM < 10 ? "0" + iM : iM);
	szCaptionText = szCaptionText.replace(/\[M\]/g, iM);
	szCaptionText = szCaptionText.replace(/\[yyy+\]/g, iY);
	szCaptionText = szCaptionText.replace(/\[y+\]/g, iY2 > 9 ? iY2 : "0" + iY2);
	m_oMainTable.rows[0].cells[1].innerText = szCaptionText;

	if (m_oCalStartDate) {
		m_oCalStartDate.setTime(m_oViewDate);
		m_oCalEndDate.setTime(m_oViewDate);
	} else {
		m_oCalStartDate = new Date(m_oViewDate);
		m_oCalEndDate = new Date(m_oViewDate);
	}

	var x = m_oViewDate.getDay() - m_iStartDay;
	x += (0 >= x) ? 7 : 0;

	startDayIdx = x;

	if (m_szLanguageCode == "fa") {
		// TODO: Check this
		m_oCalStartDate.setDate(m_oViewDate.getDate() - getPersianDay(m_oViewDate) + 1 - x);
		m_oCalEndDate.setDate((m_oViewDate.getDate() - getPersianDay(m_oViewDate) + 1 - x) + 41);
	} else {
		var firstDay = new Date(m_oViewDate.getFullYear(), m_oViewDate.getMonth(), 1);
		var m = firstDay.getDay() - m_iStartDay;
		m += (0 >= m) ? 7 : 0;
		startDayIdx = m;
		m_oCalStartDate.setDate(1 - m);
		m_oCalEndDate.setDate((1 - m) + 41);
	}

	m_oCalStartDate.setHours(1, 0, 0, 0); // Set time to 01:00 to prevent DST error
	m_oCalEndDate.setHours(24, 0, 0, 0);

	if ("number" != typeof (m_iFirstWeekOfYear))
		m_iFirstWeekOfYear = Number(m_iFirstWeekOfYear);

	if ("number" != typeof (m_iStartDay))
		m_iStartDay = Number(m_iStartDay);

	if (m_szLanguageCode == "fa") {
		var iD = getPersianDay(m_oCalStartDate);
		var iM = getPersianMonth(m_oCalStartDate) - 1;
		var iY = getPersianYear(m_oCalStartDate);
		var iDm = getPersianDaysInMonth(iM + 1, iY);
	} else {
		var iD = m_oCalStartDate.getDate();
		var iM = m_oCalStartDate.getMonth();
		var iY = m_oCalStartDate.getFullYear();
		var iDm = mfGetDaysInMonth(iM, iY);
	}

	var szClass = (0 == x) ? m_szClassActiveDateCell : m_szClassInactiveDateCell;
	var y = 7 + iDm;

	if (m_szLanguageCode == "fa")
		var originalDate;

	for (x = 7; iD <= iDm; x++) {
		if (m_szLanguageCode == "fa") {
			originalDate = getDateFromPersian(iY, iM + 1, iD, true);
			m_rgCalCells[x].month = originalDate.getMonth();
			m_rgCalCells[x].year = originalDate.getFullYear();
			m_rgCalCells[x].day = originalDate.getDate();
			m_rgCalCells[x].title = originalDate.toDateString();
		} else {
			m_rgCalCells[x].month = iM;
			m_rgCalCells[x].year = iY;
			m_rgCalCells[x].day = iD;
		}

		m_rgCalCells[x].holdClass = szClass;

		with (m_rgCalCells[x]) {
			className = fLeaveSelection ? (className + " " + szClass) : szClass;
			firstChild.innerText = iD++;
			runtimeStyle.fontWeight = "normal";
		}
	}

	var iLastCell = m_rgCalCells.length;
	while (x < iLastCell) {
		iD = 1;
		iM = (11 == iM) ? 0 : iM + 1;
		if (0 == iM)
			iY++;

		if (m_szLanguageCode == "fa")
			var iDm = getPersianDaysInMonth(iM + 1, iY);
		else
			var iDm = mfGetDaysInMonth(iM, iY);

		szClass = (szClass == m_szClassInactiveDateCell) ? m_szClassActiveDateCell : m_szClassInactiveDateCell;

		if ((iDm + x) > iLastCell)
			iDm = iLastCell - x;

		for (; iD <= iDm; x++) {

			if (m_szLanguageCode == "fa") {
				originalDate = getDateFromPersian(iY, iM + 1, iD, true);
				m_rgCalCells[x].month = originalDate.getMonth();
				m_rgCalCells[x].year = originalDate.getYear();
				m_rgCalCells[x].day = originalDate.getDate();
				m_rgCalCells[x].title = originalDate.toDateString();
			} else {
				m_rgCalCells[x].month = iM;
				m_rgCalCells[x].year = iY;
				m_rgCalCells[x].day = iD;
			}

			m_rgCalCells[x].holdClass = szClass;
			with (m_rgCalCells[x]) {
				firstChild.innerText = iD++;
				className = fLeaveSelection ? (className + " " + szClass) : szClass;
				runtimeStyle.fontWeight = "normal";
			}
		}
	}

	if (-1 != mfWriteCellNumbers.todayCellIdx) {
		mfWriteCellNumbers.todayCellIdx = -1;
	}

	if (m_oTodaysDate > m_oCalStartDate && m_oTodaysDate < m_oCalEndDate) {
		x = Math.floor((m_oTodaysDate - m_oCalStartDate + (3600000 * 2)) / 86400000); // Add 1 hours to undo DST, 3600000 = 1 Hours
		m_rgCalCells[x + 7].className = fLeaveSelection ? (className + " " + m_szClassTodaysDateCell) : m_szClassTodaysDateCell;
		m_rgCalCells[x + 7].holdClass = m_szClassTodaysDateCell;
		mfWriteCellNumbers.todayCellIdx = x + 7;
	}

	mfFindAndSelectDate.iStartIdx = -1;
}

function mfUpdateCalendar(fFireUpdate, fUseCurrentSelection) {
	fUseCurrentSelection = (null == fUseCurrentSelection) ? false : fUseCurrentSelection;
	fFireUpdate = (null == fFireUpdate) ? true : fFireUpdate;
	mfWriteCellNumbers(fUseCurrentSelection);

	mfFindAndSelectDate(false, fUseCurrentSelection);
}

function mfGetISOdateString(objDate, fIsUTC) {
	if (fIsUTC) {
		var szDay = objDate.getUTCDate();
		var szMonth = objDate.getUTCMonth() + 1;
		var szYear = objDate.getUTCFullYear();
		var szHr = objDate.getUTCHours();
		var szMin = objDate.getUTCMinutes();
		var szSec = objDate.getUTCSeconds();
	} else {
		var szDay = objDate.getDate();
		var szMonth = objDate.getMonth() + 1;
		var szYear = objDate.getFullYear();
		var szHr = objDate.getHours();
		var szMin = objDate.getMinutes();
		var szSec = objDate.getSeconds();
	}

	var szDate = szYear + "-" + ((szMonth < 10) ? "0" + szMonth : szMonth) + "-" + ((szDay < 10) ? "0" + szDay : szDay) + "T" + ((szHr < 10) ? "0" + szHr : szHr) + ":" + ((szMin < 10) ? "0" + szMin : szMin) + ":" + ((szSec < 10) ? "0" + szSec : szSec);

	return (szDate);
}

function formatTimezone(iTzMin) {
	var szSign = (0 > iTzMin) ? "+" : "-";
	var iHr = Math.floor(Math.abs(iTzMin) / 60);

	iHr = (10 > iHr) ? ("0" + iHr.toString(10)) : iHr.toString(10);
	var iMin = Math.abs(iTzMin) % 60;
	iMin = (10 > iMin) ? ("0" + iMin.toString(10)) : iMin.toString(10);
	return (szSign + iHr + ":" + iMin);
}

function mfGetSearchDateUTC(objDate) {
	var szYear = objDate.getUTCFullYear();
	var szMonth = objDate.getUTCMonth() + 1;
	var szDate = objDate.getUTCDate();
	var szHrs = objDate.getUTCHours();
	var szMin = objDate.getUTCMinutes();
	return (szYear + "/" +
		((szMonth < 10) ? ("0" + szMonth) : szMonth) + "/" +
		((szDate < 10) ? ("0" + szDate) : szDate) + " " +
		((szHrs < 10) ? ("0" + szHrs) : szHrs) + ":" +
		((szMin < 10) ? ("0" + szMin) : szMin) + ":00");
}

mfGetUTFIsoDate.objD = new Date();
function mfGetUTFIsoDate(iYr, iMon, iDate, iHr, iMin) {
	mfGetUTFIsoDate.objD.setFullYear(iYr, iMon, iDate);
	mfGetUTFIsoDate.objD.setHours(iHr, iMin, 0);
	var iYear = mfGetUTFIsoDate.objD.getUTCFullYear();
	var szMonth = mfGetUTFIsoDate.objD.getUTCMonth() + 1;
	var szDate = mfGetUTFIsoDate.objD.getUTCDate();
	var szHours = mfGetUTFIsoDate.objD.getUTCHours();
	var szMinutes = mfGetUTFIsoDate.objD.getUTCMinutes();

	if (szMonth < 10) {
		szMonth = "0" + szMonth;
	}

	if (szDate < 10) {
		szDate = "0" + szDate;
	}

	if (szHours < 10) {
		szHours = "0" + szHours;
	}

	if (szMinutes < 10) {
		szMinutes = "0" + szMinutes;
	}

	return (String(iYear + "-" + szMonth + "-" + szDate + "T" + szHours + ":" + szMinutes + ":00.000Z"));
}

function mfGetIsoDateMs(szIsoDate) {
	var re = mfGetRegExpIsoDates();
	re.lastIndex = 0;
	var arr = re.exec(szIsoDate);
	return ((null == arr) ? null : Date.UTC(Number(arr[1]), Number(arr[2]) - 1, Number(arr[3]), Number(arr[4]), Number(arr[5]), 0, 0));
}

mfGetRegExpIsoDates.re;

function mfGetRegExpIsoDates() {
	if (null == mfGetRegExpIsoDates.re) {
		mfGetRegExpIsoDates.re = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):\d{2}\.\d{3}Z?$/;
	}

	return (mfGetRegExpIsoDates.re);
}
function f_selectDate() {

	mfFindAndSelectDate(false);
}

function f_refresh() {
	mfUpdateCalendar(false, true);
}

function f_gotoToday() {
	put_FullYear(m_oTodaysDate.getFullYear());
	put_viewedFullYear(m_oTodaysDate.getFullYear());
	put_Month(m_oTodaysDate.getMonth());
	put_viewedMonth(m_oTodaysDate.getMonth());
	put_Date(m_oTodaysDate.getDate());
	m_oSelectedStart = new Date(m_oTodaysDate);
	m_oSelectedEnd = new Date(m_oTodaysDate);

	if (mfFindAndSelectDate.rgoDates.length) {
		mfFindAndSelectDate.rgoDates.length = 0;
	}

	mfUpdateCalendar(true, false);
}

function put_readOnly(bVal) {
	m_fReadOnly = mfToBool(bVal);
}

function get_readOnly() {
	return m_fReadOnly;
}

function get_Day() {
	return m_oSelectedStart.getDay();
}

function get_Time() {
	return m_oSelectedStart.getTime();
}

function put_Date(newVal) {
	var iM1 = m_oSelectedStart.getMonth();
	m_oSelectedStart.setDate(Number(newVal));
	var iM2 = m_oSelectedStart.getMonth();
	m_oSelectedEnd.setDate(Number(newVal));
}

function get_Date() {
	return m_oSelectedStart.getDate();
}

function put_Month(newVal) {
	m_oSelectedStart.setMonth(Number(newVal));
	m_oSelectedEnd.setMonth(Number(newVal));
}

function put_viewedMonth(newVal) {
	m_oViewDate.setMonth(Number(newVal));
}

function get_viewedMonth() {
	return m_oViewDate.getMonth();
}

function get_viewedFullYear() {
	return m_oViewDate.getFullYear();
}

function get_Month() {
	return m_oSelectedStart.getMonth();
}

function get_FullYear() {
	return m_oSelectedStart.getFullYear();
}

function put_FullYear(newVal) {
	m_oSelectedStart.setFullYear(Number(newVal));
	m_oSelectedEnd.setFullYear(Number(newVal));
}

function put_viewedFullYear(newVal) {
	m_oViewDate.setFullYear(Number(newVal));
}

function put_filter(szFilter) {
	m_szFilter = szFilter;
	m_fHasCustomFilter = true;
}

function get_filter() {
	return (m_szFilter);
}

function put_filterAppend(szFilter) {
	m_szFilterAppend = szFilter;
}

function get_filterAppend() {
	return (m_szFilterAppend);
}

function put_autoInitialize(bVal) {
	m_bAutoInitialize = mfToBool(bVal);
}

function put_Direction(szDirection) {
	this.m_szDirection = szDirection;

	if (-1 < window.clientInformation.appVersion.search(/MSIE 5.0/))
		element.document.dir = szDirection;
	else
		this.document.dir = szDirection;
}

function put_LanguageCode(szLanguageCode) { m_szLanguageCode = szLanguageCode; }

function doFocus() {
	m_oMainTable.focus();
}

function get_selectedDate() {
	return m_oSelectedStart;
}

function mfToBool(varBool) {
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

function f_focus() {
	m_oMainTable.focus();
}

function put_selectedDate(oD) {
	m_oSelectedStart = oD;
	m_oViewDate = oD;
	mfUpdateCalendar(true, false);
}

function setDaylightSaving(date) { // to resolved the problem of daylight saving on 13xx/01/01
	var hour = date.getHours();

	if (isFaDaylightSaving(date, hour))
		date.setHours(1);
}

function isFaDaylightSaving(date, hour) { // to resolved the problem of daylight saving on 13xx/01/01
	var month = date.getMonth();

	if (month == 2 && hour == 0 && m_szLanguageCode == "fa") {
		var day = date.getDate();

		if (mfIsLeapYear(date.getYear())) {
			if (day == 21)
				return true;
		}
		else if (day == 22)
			return true;
	}

	return false;
}

function getStartIndex() {
	return startDayIdx;
}

function getActualDate() {
	return actualDate;
}