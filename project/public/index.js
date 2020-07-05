/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../library/dist/index.js":
/*!********************************!*\
  !*** ../library/dist/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    try {
        var obj = {};
        var result = Object.defineProperty(obj, "a", {
            get: function () {
                return 1;
            }
        });
        if (result.a !== 1) {
            throw new Error("fail");
        }
    }
    catch (e) {
        var isIE8 = false;
        try {
            var div = document.createElement("a");
            isIE8 =
                Object.defineProperty(div, "a", {
                    value: 1
                }).a === 1;
        }
        catch (e) {
            // ignore
        }
        var hasDp = "defineProperty" in Object;
        if (!hasDp || isIE8) {
            Object.defineProperty = function (object, property, descriptor) {
                if (object === void 0) {
                    object = {};
                }
                if (property === void 0) {
                    property = "property";
                }
                if (descriptor === void 0) {
                    descriptor = {};
                }
                if ("value" in descriptor) {
                    object[property] = descriptor.value;
                }
                else if ("get" in descriptor) {
                    object[property] = descriptor.get();
                }
                return object;
            };
        }
        else {
            var oldDp_1 = Object.defineProperty;
            Object.defineProperty = function (object, property, descriptor) {
                var descriptor2Use = descriptor;
                if ("get" in descriptor) {
                    var value = descriptor.get();
                    delete descriptor.get;
                    descriptor2Use = __assign(__assign({}, descriptor), { value: value });
                }
                return oldDp_1(object, property, descriptor2Use);
            };
        }
    }
})();
(function (e, t) {  true ? module.exports = t() : undefined; })(window, function () {
    return function (e) {
        function t(a) {
            if (n[a])
                return n[a].exports;
            var o = n[a] = { i: a, l: !1, exports: {} };
            return e[a].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, a) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: a }); }, t.r = function (e) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, t.t = function (e, n) {
            if (1 & n && (e = t(e)), 8 & n)
                return e;
            if (4 & n && 'object' == typeof e && e && e.__esModule)
                return e;
            var a = Object.create(null);
            if (t.r(a), Object.defineProperty(a, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e)
                for (var o in e)
                    t.d(a, o, function (t) { return e[t]; }.bind(null, o));
            return a;
        }, t.n = function (e) { var n = e && e.__esModule ? function () { return e['default']; } : function () { return e; }; return t.d(n, 'a', n), n; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = '', t(t.s = 0);
    }({ "./node_modules/jquery/dist/jquery.js": /*!********************************************!*\
      !*** ./node_modules/jquery/dist/jquery.js ***!
      \********************************************/ /*! no static exports found */ function (e, t) {
            var n, a; /*!
           * jQuery JavaScript Library v1.12.4
           * http://jquery.com/
           *
           * Includes Sizzle.js
           * http://sizzlejs.com/
           *
           * Copyright jQuery Foundation and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2016-05-20T17:17Z
           */
            (function (t, n) {
                'object' == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                    if (!e.document)
                        throw new Error('jQuery requires a window with a document');
                    return n(e);
                } : n(t);
            })('undefined' == typeof window ? this : window, function (o, d) {
                function r(e) { var t = !!e && 'length' in e && e.length, n = Ce.type(e); return !('function' === n || Ce.isWindow(e)) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e); }
                function l(e, t, n) {
                    if (Ce.isFunction(t))
                        return Ce.grep(e, function (e, a) { return !!t.call(e, a, e) !== n; });
                    if (t.nodeType)
                        return Ce.grep(e, function (e) { return e === t !== n; });
                    if ('string' == typeof t) {
                        if (ke.test(t))
                            return Ce.filter(t, e, n);
                        t = Ce.filter(t, e);
                    }
                    return Ce.grep(e, function (e) { return -1 < Ce.inArray(e, t) !== n; });
                }
                function s(e, t) {
                    do
                        e = e[t];
                    while (e && 1 !== e.nodeType);
                    return e;
                }
                function p(e) { var t = {}; return Ce.each(e.match(He) || [], function (e, n) { t[n] = !0; }), t; }
                function c() { se.addEventListener ? (se.removeEventListener('DOMContentLoaded', u), o.removeEventListener('load', u)) : (se.detachEvent('onreadystatechange', u), o.detachEvent('onload', u)); }
                function u() { (se.addEventListener || 'load' === o.event.type || 'complete' === se.readyState) && (c(), Ce.ready()); }
                function m(e, t, n) {
                    if (void 0 === n && 1 === e.nodeType) {
                        var a = 'data-' + t.replace(Be, '-$1').toLowerCase();
                        if (n = e.getAttribute(a), 'string' == typeof n) {
                            try {
                                n = 'true' === n || 'false' !== n && ('null' === n ? null : +n + '' === n ? +n : i.test(n) ? Ce.parseJSON(n) : n);
                            }
                            catch (t) { }
                            Ce.data(e, t, n);
                        }
                        else
                            n = void 0;
                    }
                    return n;
                }
                function g(e) {
                    for (var t in e)
                        if (!('data' === t && Ce.isEmptyObject(e[t])) && 'toJSON' !== t)
                            return !1;
                    return !0;
                }
                function h(e, t, n, a) {
                    if (Fe(e)) {
                        var o = Ce.expando, d = e.nodeType, i = d ? Ce.cache : e, r = d ? e[o] : e[o] && o, l, s;
                        if (r && i[r] && (a || i[r].data) || void 0 !== n || 'string' != typeof t)
                            return r || (d ? r = e[o] = le.pop() || Ce.guid++ : r = o), i[r] || (i[r] = d ? {} : { toJSON: Ce.noop }), ('object' == typeof t || 'function' == typeof t) && (a ? i[r] = Ce.extend(i[r], t) : i[r].data = Ce.extend(i[r].data, t)), s = i[r], a || (!s.data && (s.data = {}), s = s.data), void 0 !== n && (s[Ce.camelCase(t)] = n), 'string' == typeof t ? (l = s[t], null == l && (l = s[Ce.camelCase(t)])) : l = s, l;
                    }
                }
                function f(e, t, n) {
                    if (Fe(e)) {
                        var a = e.nodeType, o = a ? Ce.cache : e, d = a ? e[Ce.expando] : Ce.expando, r, l;
                        if (o[d]) {
                            if (t && (r = n ? o[d] : o[d].data, r)) {
                                for (Ce.isArray(t) ? t = t.concat(Ce.map(t, Ce.camelCase)) : (t in r) ? t = [t] : (t = Ce.camelCase(t), t = (t in r) ? [t] : t.split(' ')), l = t.length; l--;)
                                    delete r[t[l]];
                                if (n ? !g(r) : !Ce.isEmptyObject(r))
                                    return;
                            }
                            !n && (delete o[d].data, !g(o[d])) || (a ? Ce.cleanData([e], !0) : ye.deleteExpando || o != o.window ? delete o[d] : o[d] = void 0);
                        }
                    }
                }
                function y(e, t, n, a) {
                    var o = 1, d = 20, i = a ? function () { return a.cur(); } : function () { return Ce.css(e, t, ''); }, r = i(), l = n && n[3] || (Ce.cssNumber[t] ? '' : 'px'), s = (Ce.cssNumber[t] || 'px' !== l && +r) && Pe.exec(Ce.css(e, t)), p;
                    if (s && s[3] !== l) {
                        l = l || s[3], n = n || [], s = +r || 1;
                        do
                            o = o || '.5', s /= o, Ce.style(e, t, s + l);
                        while (o != (o = i() / r) && 1 != o && --d);
                    }
                    return n && (s = +s || +r || 0, p = n[1] ? s + (n[1] + 1) * n[2] : +n[2], a && (a.unit = l, a.start = s, a.end = p)), p;
                }
                function x(e) {
                    var t = Je.split('|'), n = e.createDocumentFragment();
                    if (n.createElement)
                        for (; t.length;)
                            n.createElement(t.pop());
                    return n;
                }
                function C(e, t) {
                    var n = 0, a = 'undefined' == typeof e.getElementsByTagName ? 'undefined' == typeof e.querySelectorAll ? void 0 : e.querySelectorAll(t || '*') : e.getElementsByTagName(t || '*'), o, d;
                    if (!a)
                        for (a = [], o = e.childNodes || e; null != (d = o[n]); n++)
                            !t || Ce.nodeName(d, t) ? a.push(d) : Ce.merge(a, C(d, t));
                    return void 0 === t || t && Ce.nodeName(e, t) ? Ce.merge([e], a) : a;
                }
                function b(e, t) {
                    for (var n = 0, a; null != (a = e[n]); n++)
                        Ce._data(a, 'globalEval', !t || Ce._data(t[n], 'globalEval'));
                }
                function v(e) { Ue.test(e.type) && (e.defaultChecked = e.checked); }
                function T(e, t, n, a, o) {
                    for (var d = e.length, r = x(t), l = [], s = 0, i, p, c, u, m, g, h; s < d; s++)
                        if (p = e[s], p || 0 === p)
                            if ('object' === Ce.type(p))
                                Ce.merge(l, p.nodeType ? [p] : p);
                            else if (!Ke.test(p))
                                l.push(t.createTextNode(p));
                            else {
                                for (u = u || r.appendChild(t.createElement('div')), m = (Xe.exec(p) || ['', ''])[1].toLowerCase(), h = Ye[m] || Ye._default, u.innerHTML = h[1] + Ce.htmlPrefilter(p) + h[2], i = h[0]; i--;)
                                    u = u.lastChild;
                                if (!ye.leadingWhitespace && Ve.test(p) && l.push(t.createTextNode(Ve.exec(p)[0])), !ye.tbody)
                                    for (p = 'table' !== m || Qe.test(p) ? '<table>' !== h[1] || Qe.test(p) ? 0 : u : u.firstChild, i = p && p.childNodes.length; i--;)
                                        Ce.nodeName(g = p.childNodes[i], 'tbody') && !g.childNodes.length && p.removeChild(g);
                                for (Ce.merge(l, u.childNodes), u.textContent = ''; u.firstChild;)
                                    u.removeChild(u.firstChild);
                                u = r.lastChild;
                            }
                    for (u && r.removeChild(u), ye.appendChecked || Ce.grep(C(l, 'input'), v), s = 0; p = l[s++];) {
                        if (a && -1 < Ce.inArray(p, a)) {
                            o && o.push(p);
                            continue;
                        }
                        if (c = Ce.contains(p.ownerDocument, p), u = C(r.appendChild(p), 'script'), c && b(u), n)
                            for (i = 0; p = u[i++];)
                                $e.test(p.type || '') && n.push(p);
                    }
                    return u = null, r;
                }
                function N() { return !0; }
                function w() { return !1; }
                function E() {
                    try {
                        return se.activeElement;
                    }
                    catch (e) { }
                }
                function S(e, t, n, a, o, d) {
                    var i, r;
                    if ('object' == typeof t) {
                        for (r in 'string' != typeof n && (a = a || n, n = void 0), t)
                            S(e, r, n, a, t[r], d);
                        return e;
                    }
                    if (null == a && null == o ? (o = n, a = n = void 0) : null == o && ('string' == typeof n ? (o = a, a = void 0) : (o = a, a = n, n = void 0)), !1 === o)
                        o = w;
                    else if (!o)
                        return e;
                    return 1 === d && (i = o, o = function (e) { return Ce().off(e), i.apply(this, arguments); }, o.guid = i.guid || (i.guid = Ce.guid++)), e.each(function () { Ce.event.add(this, t, o, a, n); });
                }
                function D(e, t) { return Ce.nodeName(e, 'table') && Ce.nodeName(11 === t.nodeType ? t.firstChild : t, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e; }
                function _(e) { return e.type = (null !== Ce.find.attr(e, 'type')) + '/' + e.type, e; }
                function k(e) { var t = st.exec(e.type); return t ? e.type = t[1] : e.removeAttribute('type'), e; }
                function M(e, t) {
                    if (1 === t.nodeType && Ce.hasData(e)) {
                        var n = Ce._data(e), a = Ce._data(t, n), o = n.events, d, r, i;
                        if (o)
                            for (d in delete a.handle, a.events = {}, o)
                                for (r = 0, i = o[d].length; r < i; r++)
                                    Ce.event.add(t, d, o[d][r]);
                        a.data && (a.data = Ce.extend({}, a.data));
                    }
                }
                function j(t, n) {
                    var a, o, e;
                    if (1 === n.nodeType) {
                        if (a = n.nodeName.toLowerCase(), !ye.noCloneEvent && n[Ce.expando]) {
                            for (o in e = Ce._data(n), e.events)
                                Ce.removeEvent(n, o, e.handle);
                            n.removeAttribute(Ce.expando);
                        }
                        'script' === a && n.text !== t.text ? (_(n).text = t.text, k(n)) : 'object' === a ? (n.parentNode && (n.outerHTML = t.outerHTML), ye.html5Clone && t.innerHTML && !Ce.trim(n.innerHTML) && (n.innerHTML = t.innerHTML)) : 'input' === a && Ue.test(t.type) ? (n.defaultChecked = n.checked = t.checked, n.value !== t.value && (n.value = t.value)) : 'option' === a ? n.defaultSelected = n.selected = t.defaultSelected : ('input' === a || 'textarea' === a) && (n.defaultValue = t.defaultValue);
                    }
                }
                function A(e, t, n, a) {
                    t = ce.apply([], t);
                    var o = 0, d = e.length, i = t[0], r = Ce.isFunction(i), l, s, p, c, u, m;
                    if (r || 1 < d && 'string' == typeof i && !ye.checkClone && lt.test(i))
                        return e.each(function (o) { var d = e.eq(o); r && (t[0] = i.call(this, o, d.html())), A(d, t, n, a); });
                    if (d && (m = T(t, e[0].ownerDocument, !1, e, a), l = m.firstChild, 1 === m.childNodes.length && (m = l), l || a)) {
                        for (c = Ce.map(C(m, 'script'), _), p = c.length; o < d; o++)
                            s = m, o != d - 1 && (s = Ce.clone(s, !0, !0), p && Ce.merge(c, C(s, 'script'))), n.call(e[o], s, o);
                        if (p)
                            for (u = c[c.length - 1].ownerDocument, Ce.map(c, k), o = 0; o < p; o++)
                                s = c[o], $e.test(s.type || '') && !Ce._data(s, 'globalEval') && Ce.contains(u, s) && (s.src ? Ce._evalUrl && Ce._evalUrl(s.src) : Ce.globalEval((s.text || s.textContent || s.innerHTML || '').replace(pt, '')));
                        m = l = null;
                    }
                    return e;
                }
                function L(e, t, n) {
                    for (var a = t ? Ce.filter(t, e) : e, o = 0, d; null != (d = a[o]); o++)
                        n || 1 !== d.nodeType || Ce.cleanData(C(d)), d.parentNode && (n && Ce.contains(d.ownerDocument, d) && b(C(d, 'script')), d.parentNode.removeChild(d));
                    return e;
                }
                function q(e, t) { var n = Ce(t.createElement(e)).appendTo(t.body), a = Ce.css(n[0], 'display'); return n.detach(), a; }
                function H(e) { var t = se, n = mt[e]; return n || (n = q(e, t), ('none' === n || !n) && (xt = (xt || Ce('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write(), t.close(), n = q(e, t), xt.detach()), mt[e] = n), n; }
                function I(e, t) { return { get: function () { return e() ? void delete this.get : (this.get = t).apply(this, arguments); } }; }
                function O(e) {
                    if (e in kt)
                        return e;
                    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = _t.length; n--;)
                        if (e = _t[n] + t, e in kt)
                            return e;
                }
                function F(e, t) {
                    for (var n = [], a = 0, o = e.length, d, i, r; a < o; a++)
                        (i = e[a], !!i.style) && (n[a] = Ce._data(i, 'olddisplay'), d = i.style.display, t ? (!n[a] && 'none' === d && (i.style.display = ''), '' === i.style.display && ze(i) && (n[a] = Ce._data(i, 'olddisplay', H(i.nodeName)))) : (r = ze(i), (d && 'none' !== d || !r) && Ce._data(i, 'olddisplay', r ? d : Ce.css(i, 'display'))));
                    for (a = 0; a < o; a++)
                        (i = e[a], !!i.style) && (t && 'none' !== i.style.display && '' !== i.style.display || (i.style.display = t ? n[a] || '' : 'none'));
                    return e;
                }
                function B(e, t, n) { var a = Et.exec(t); return a ? re(0, a[1] - (n || 0)) + (a[2] || 'px') : t; }
                function R(e, t, n, a, o) {
                    for (var d = n === (a ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, i = 0; 4 > d; d += 2)
                        'margin' === n && (i += Ce.css(e, n + We[d], !0, o)), a ? ('content' === n && (i -= Ce.css(e, 'padding' + We[d], !0, o)), 'margin' !== n && (i -= Ce.css(e, 'border' + We[d] + 'Width', !0, o))) : (i += Ce.css(e, 'padding' + We[d], !0, o), 'padding' !== n && (i += Ce.css(e, 'border' + We[d] + 'Width', !0, o)));
                    return i;
                }
                function P(e, t, n) {
                    var a = !0, o = 'width' === t ? e.offsetWidth : e.offsetHeight, d = bt(e), i = ye.boxSizing && 'border-box' === Ce.css(e, 'boxSizing', !1, d);
                    if (0 >= o || null == o) {
                        if (o = vt(e, t, d), (0 > o || null == o) && (o = e.style[t]), ht.test(o))
                            return o;
                        a = i && (ye.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0;
                    }
                    return o + R(e, t, n || (i ? 'border' : 'content'), a, d) + 'px';
                }
                function W(e, t, n, a, o) { return new W.prototype.init(e, t, n, a, o); }
                function z() { return o.setTimeout(function () { At = void 0; }), At = Ce.now(); }
                function G(e, t) {
                    var n = { height: e }, a = 0, o;
                    for (t = t ? 1 : 0; 4 > a; a += 2 - t)
                        o = We[a], n['margin' + o] = n['padding' + o] = e;
                    return t && (n.opacity = n.width = e), n;
                }
                function U(e, t, n) {
                    for (var a = (V.tweeners[t] || []).concat(V.tweeners['*']), o = 0, d = a.length, i; o < d; o++)
                        if (i = a[o].call(n, t, e))
                            return i;
                }
                function X(e, t, n) {
                    var a = this, o = {}, d = e.style, i = e.nodeType && ze(e), r = Ce._data(e, 'fxshow'), l, s, p, c, u, m, g, h;
                    for (l in n.queue || (u = Ce._queueHooks(e, 'fx'), null == u.unqueued && (u.unqueued = 0, m = u.empty.fire, u.empty.fire = function () { u.unqueued || m(); }), u.unqueued++, a.always(function () { a.always(function () { u.unqueued--, Ce.queue(e, 'fx').length || u.empty.fire(); }); })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], g = Ce.css(e, 'display'), h = 'none' === g ? Ce._data(e, 'olddisplay') || H(e.nodeName) : g, 'inline' === h && 'none' === Ce.css(e, 'float') && (ye.inlineBlockNeedsLayout && 'inline' !== H(e.nodeName) ? d.zoom = 1 : d.display = 'inline-block')), n.overflow && (d.overflow = 'hidden', !ye.shrinkWrapBlocks() && a.always(function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]; })), t)
                        if (s = t[l], Mt.exec(s)) {
                            if (delete t[l], p = p || 'toggle' === s, s === (i ? 'hide' : 'show'))
                                if ('show' === s && r && void 0 !== r[l])
                                    i = !0;
                                else
                                    continue;
                            o[l] = r && r[l] || Ce.style(e, l);
                        }
                        else
                            g = void 0;
                    if (!Ce.isEmptyObject(o))
                        for (l in r ? 'hidden' in r && (i = r.hidden) : r = Ce._data(e, 'fxshow', {}), p && (r.hidden = !i), i ? Ce(e).show() : a.done(function () { Ce(e).hide(); }), a.done(function () {
                            for (var t in Ce._removeData(e, 'fxshow'), o)
                                Ce.style(e, t, o[t]);
                        }), o)
                            c = U(i ? r[l] : 0, l, a), l in r || (r[l] = c.start, i && (c.end = c.start, c.start = 'width' === l || 'height' === l ? 1 : 0));
                    else
                        'inline' === ('none' === g ? H(e.nodeName) : g) && (d.display = g);
                }
                function $(e, t) {
                    var n, a, o, d, i;
                    for (n in e)
                        if (a = Ce.camelCase(n), o = t[a], d = e[n], Ce.isArray(d) && (o = d[1], d = e[n] = d[0]), n != a && (e[a] = d, delete e[n]), i = Ce.cssHooks[a], i && 'expand' in i)
                            for (n in d = i.expand(d), delete e[a], d)
                                n in e || (e[n] = d[n], t[n] = o);
                        else
                            t[a] = o;
                }
                function V(e, t, n) {
                    var a = 0, o = V.prefilters.length, d = Ce.Deferred().always(function () { delete i.elem; }), i = function () {
                        if (p)
                            return !1;
                        for (var t = At || z(), n = re(0, r.startTime + r.duration - t), a = n / r.duration || 0, o = 1 - a, i = 0, l = r.tweens.length; i < l; i++)
                            r.tweens[i].run(o);
                        return d.notifyWith(e, [r, o, n]), 1 > o && l ? n : (d.resolveWith(e, [r]), !1);
                    }, r = d.promise({ elem: e, props: Ce.extend({}, t), opts: Ce.extend(!0, { specialEasing: {}, easing: Ce.easing._default }, n), originalProperties: t, originalOptions: n, startTime: At || z(), duration: n.duration, tweens: [], createTween: function (t, n) { var a = Ce.Tween(e, r.opts, t, n, r.opts.specialEasing[t] || r.opts.easing); return r.tweens.push(a), a; }, stop: function (t) {
                            var n = 0, a = t ? r.tweens.length : 0;
                            if (p)
                                return this;
                            for (p = !0; n < a; n++)
                                r.tweens[n].run(1);
                            return t ? (d.notifyWith(e, [r, 1, 0]), d.resolveWith(e, [r, t])) : d.rejectWith(e, [r, t]), this;
                        } }), l = r.props, s, p;
                    for ($(l, r.opts.specialEasing); a < o; a++)
                        if (s = V.prefilters[a].call(r, e, l, r.opts), s)
                            return Ce.isFunction(s.stop) && (Ce._queueHooks(r.elem, r.opts.queue).stop = Ce.proxy(s.stop, s)), s;
                    return Ce.map(l, U, r), Ce.isFunction(r.opts.start) && r.opts.start.call(e, r), Ce.fx.timer(Ce.extend(i, { elem: e, anim: r, queue: r.opts.queue })), r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always);
                }
                function J(e) { return Ce.attr(e, 'class') || ''; }
                function Y(e) {
                    return function (t, n) {
                        'string' != typeof t && (n = t, t = '*');
                        var a = 0, o = t.toLowerCase().match(He) || [], d;
                        if (Ce.isFunction(n))
                            for (; d = o[a++];)
                                '+' === d.charAt(0) ? (d = d.slice(1) || '*', (e[d] = e[d] || []).unshift(n)) : (e[d] = e[d] || []).push(n);
                    };
                }
                function K(e, t, n, a) { function o(r) { var l; return d[r] = !0, Ce.each(e[r] || [], function (e, r) { var s = r(t, n, a); return 'string' != typeof s || i || d[s] ? i ? !(l = s) : void 0 : (t.dataTypes.unshift(s), o(s), !1); }), l; } var d = {}, i = e === an; return o(t.dataTypes[0]) || !d['*'] && o('*'); }
                function Q(e, t) {
                    var n = Ce.ajaxSettings.flatOptions || {}, a, o;
                    for (o in t)
                        void 0 !== t[o] && ((n[o] ? e : a || (a = {}))[o] = t[o]);
                    return a && Ce.extend(!0, e, a), e;
                }
                function Z(e, t, n) {
                    for (var a = e.contents, o = e.dataTypes, d, i, r, l; '*' === o[0];)
                        o.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (i)
                        for (l in a)
                            if (a[l] && a[l].test(i)) {
                                o.unshift(l);
                                break;
                            }
                    if (o[0] in n)
                        r = o[0];
                    else {
                        for (l in n) {
                            if (!o[0] || e.converters[l + ' ' + o[0]]) {
                                r = l;
                                break;
                            }
                            d || (d = l);
                        }
                        r = r || d;
                    }
                    return r ? (r !== o[0] && o.unshift(r), n[r]) : void 0;
                }
                function ee(e, t, n, a) {
                    var o = {}, d = e.dataTypes.slice(), i, r, l, s, p;
                    if (d[1])
                        for (l in e.converters)
                            o[l.toLowerCase()] = e.converters[l];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !p && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), p = r, r = d.shift(), r)
                            if ('*' === r)
                                r = p;
                            else if ('*' !== p && p != r) {
                                if (l = o[p + ' ' + r] || o['* ' + r], !l)
                                    for (i in o)
                                        if (s = i.split(' '), s[1] === r && (l = o[p + ' ' + s[0]] || o['* ' + s[0]], l)) {
                                            !0 === l ? l = o[i] : !0 !== o[i] && (r = s[0], d.unshift(s[1]));
                                            break;
                                        }
                                if (!0 !== l)
                                    if (l && e.throws)
                                        t = l(t);
                                    else
                                        try {
                                            t = l(t);
                                        }
                                        catch (t) {
                                            return { state: 'parsererror', error: l ? t : 'No conversion from ' + p + ' to ' + r };
                                        }
                            }
                    return { state: 'success', data: t };
                }
                function te(e) { return e.style && e.style.display || Ce.css(e, 'display'); }
                function ne(e) {
                    if (!Ce.contains(e.ownerDocument || se, e))
                        return !0;
                    for (; e && 1 === e.nodeType;) {
                        if ('none' === te(e) || 'hidden' === e.type)
                            return !0;
                        e = e.parentNode;
                    }
                    return !1;
                }
                function ae(e, t, n, a) {
                    if (Ce.isArray(t))
                        Ce.each(t, function (t, o) { n || sn.test(e) ? a(e, o) : ae(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, a); });
                    else if (!n && 'object' === Ce.type(t))
                        for (var o in t)
                            ae(e + '[' + o + ']', t[o], n, a);
                    else
                        a(e, t);
                }
                function oe() {
                    try {
                        return new o.XMLHttpRequest;
                    }
                    catch (t) { }
                }
                function de() {
                    try {
                        return new o.ActiveXObject('Microsoft.XMLHTTP');
                    }
                    catch (t) { }
                }
                function ie(e) { return Ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow); }
                var re = Math.max, le = [], se = o.document, pe = le.slice, ce = le.concat, ue = le.push, me = le.indexOf, ge = {}, he = ge.toString, fe = ge.hasOwnProperty, ye = {}, xe = '1.12.4', Ce = function (e, t) { return new Ce.fn.init(e, t); }, be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, Te = /-([\da-z])/gi, Ne = function (e, t) { return t.toUpperCase(); };
                Ce.fn = Ce.prototype = { jquery: xe, constructor: Ce, selector: '', length: 0, toArray: function () { return pe.call(this); }, get: function (e) { return null == e ? pe.call(this) : 0 > e ? this[e + this.length] : this[e]; }, pushStack: function (e) { var t = Ce.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t; }, each: function (e) { return Ce.each(this, e); }, map: function (e) { return this.pushStack(Ce.map(this, function (t, n) { return e.call(t, n, t); })); }, slice: function () { return this.pushStack(pe.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: ue, sort: le.sort, splice: le.splice }, Ce.extend = Ce.fn.extend = function () {
                    var e = arguments[0] || {}, t = 1, n = arguments.length, a = !1, o, d, i, r, l, s;
                    for ('boolean' == typeof e && (a = e, e = arguments[t] || {}, t++), 'object' == typeof e || Ce.isFunction(e) || (e = {}), t === n && (e = this, t--); t < n; t++)
                        if (null != (l = arguments[t]))
                            for (r in l)
                                (o = e[r], i = l[r], e !== i) && (a && i && (Ce.isPlainObject(i) || (d = Ce.isArray(i))) ? (d ? (d = !1, s = o && Ce.isArray(o) ? o : []) : s = o && Ce.isPlainObject(o) ? o : {}, e[r] = Ce.extend(a, s, i)) : void 0 !== i && (e[r] = i));
                    return e;
                }, Ce.extend({ expando: 'jQuery' + (xe + Math.random()).replace(/\D/g, ''), isReady: !0, error: function (e) { throw new Error(e); }, noop: function () { }, isFunction: function (e) { return 'function' === Ce.type(e); }, isArray: Array.isArray || function (e) { return 'array' === Ce.type(e); }, isWindow: function (e) { return null != e && e == e.window; }, isNumeric: function (e) { var t = e && e.toString(); return !Ce.isArray(e) && 0 <= t - parseFloat(t) + 1; }, isEmptyObject: function (e) {
                        for (var t in e)
                            return !1;
                        return !0;
                    }, isPlainObject: function (e) {
                        if (!e || 'object' !== Ce.type(e) || e.nodeType || Ce.isWindow(e))
                            return !1;
                        try {
                            if (e.constructor && !fe.call(e, 'constructor') && !fe.call(e.constructor.prototype, 'isPrototypeOf'))
                                return !1;
                        }
                        catch (t) {
                            return !1;
                        }
                        if (!ye.ownFirst)
                            for (var t in e)
                                return fe.call(e, t);
                        for (t in e)
                            ;
                        return void 0 == t || fe.call(e, t);
                    }, type: function (e) { return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? ge[he.call(e)] || 'object' : typeof e; }, globalEval: function (e) { e && Ce.trim(e) && (o.execScript || function (e) { o.eval.call(o, e); })(e); }, camelCase: function (e) { return e.replace(ve, 'ms-').replace(Te, Ne); }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(); }, each: function (e, t) {
                        var n = 0, a;
                        if (r(e))
                            for (a = e.length; n < a && !1 !== t.call(e[n], n, e[n]); n++)
                                ;
                        else
                            for (n in e)
                                if (!1 === t.call(e[n], n, e[n]))
                                    break;
                        return e;
                    }, trim: function (e) { return null == e ? '' : (e + '').replace(be, ''); }, makeArray: function (e, t) { var n = t || []; return null != e && (r(Object(e)) ? Ce.merge(n, 'string' == typeof e ? [e] : e) : ue.call(n, e)), n; }, inArray: function (e, t, n) {
                        var a;
                        if (t) {
                            if (me)
                                return me.call(t, e, n);
                            for (a = t.length, n = n ? 0 > n ? re(0, a + n) : n : 0; n < a; n++)
                                if (n in t && t[n] === e)
                                    return n;
                        }
                        return -1;
                    }, merge: function (e, t) {
                        for (var n = +t.length, a = 0, o = e.length; a < n;)
                            e[o++] = t[a++];
                        if (n != n)
                            for (; void 0 !== t[a];)
                                e[o++] = t[a++];
                        return e.length = o, e;
                    }, grep: function (e, t, n) {
                        for (var a = [], o = 0, d = e.length, i; o < d; o++)
                            i = !t(e[o], o), i !== !n && a.push(e[o]);
                        return a;
                    }, map: function (e, t, n) {
                        var a = 0, o = [], d, i;
                        if (r(e))
                            for (d = e.length; a < d; a++)
                                i = t(e[a], a, n), null != i && o.push(i);
                        else
                            for (a in e)
                                i = t(e[a], a, n), null != i && o.push(i);
                        return ce.apply([], o);
                    }, guid: 1, proxy: function (e, t) {
                        var n, a, o;
                        if ('string' == typeof t && (o = e[t], t = e, e = o), !!Ce.isFunction(e))
                            return n = pe.call(arguments, 2), a = function () { return e.apply(t || this, n.concat(pe.call(arguments))); }, a.guid = e.guid = e.guid || Ce.guid++, a;
                    }, now: function () { return +new Date; }, support: ye }), 'function' == typeof Symbol && (Ce.fn[Symbol.iterator] = le[Symbol.iterator]), Ce.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function (e, t) { ge['[object ' + t + ']'] = t.toLowerCase(); });
                var we = /*!
                * Sizzle CSS Selector Engine v2.2.1
                * http://sizzlejs.com/
                *
                * Copyright jQuery Foundation and other contributors
                * Released under the MIT license
                * http://jquery.org/license
                *
                * Date: 2015-10-17
                */ function (e) {
                    function t(e, t, n, a) {
                        var o = t && t.ownerDocument, d = t ? t.nodeType : 9, r, l, i, s, p, u, g, h;
                        if (n = n || [], 'string' != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                            return n;
                        if (!a && ((t ? t.ownerDocument || t : T) !== ge && me(t), t = t || ge, fe)) {
                            if (11 !== d && (u = K.exec(e)))
                                if (!(r = u[1])) {
                                    if (u[2])
                                        return q.apply(n, t.getElementsByTagName(e)), n;
                                    if ((r = u[3]) && oe.getElementsByClassName && t.getElementsByClassName)
                                        return q.apply(n, t.getElementsByClassName(r)), n;
                                }
                                else if (9 === d) {
                                    if (!(i = t.getElementById(r)))
                                        return n;
                                    if (i.id === r)
                                        return n.push(i), n;
                                }
                                else if (o && (i = o.getElementById(r)) && be(t, i) && i.id === r)
                                    return n.push(i), n;
                            if (oe.qsa && !D[e + ' '] && (!ye || !ye.test(e))) {
                                if (1 !== d)
                                    o = t, h = e;
                                else if ('object' !== t.nodeName.toLowerCase()) {
                                    for ((s = t.getAttribute('id')) ? s = s.replace(Z, '\\$&') : t.setAttribute('id', s = v), g = re(e), l = g.length, p = X.test(s) ? '#' + s : '[id=\'' + s + '\']'; l--;)
                                        g[l] = p + ' ' + m(g[l]);
                                    h = g.join(','), o = Q.test(e) && c(t.parentNode) || t;
                                }
                                if (h)
                                    try {
                                        return q.apply(n, o.querySelectorAll(h)), n;
                                    }
                                    catch (e) { }
                                    finally {
                                        s === v && t.removeAttribute('id');
                                    }
                            }
                        }
                        return se(e.replace(P, '$1'), t, n, a);
                    }
                    function n() { function e(n, a) { return t.push(n + ' ') > de.cacheLength && delete e[t.shift()], e[n + ' '] = a; } var t = []; return e; }
                    function a(e) { return e[v] = !0, e; }
                    function o(e) {
                        var t = ge.createElement('div');
                        try {
                            return !!e(t);
                        }
                        catch (t) {
                            return !1;
                        }
                        finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null;
                        }
                    }
                    function d(e, t) {
                        for (var n = e.split('|'), a = n.length; a--;)
                            de.attrHandle[n[a]] = t;
                    }
                    function r(e, t) {
                        var n = t && e, a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
                        if (a)
                            return a;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1;
                    }
                    function l(e) { return function (t) { var n = t.nodeName.toLowerCase(); return 'input' === n && t.type === e; }; }
                    function s(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ('input' === n || 'button' === n) && t.type === e; }; }
                    function p(e) {
                        return a(function (t) {
                            return t = +t, a(function (n, a) {
                                for (var o = e([], n.length, t), d = o.length, i; d--;)
                                    n[i = o[d]] && (n[i] = !(a[i] = n[i]));
                            });
                        });
                    }
                    function c(e) { return e && 'undefined' != typeof e.getElementsByTagName && e; }
                    function u() { }
                    function m(e) {
                        for (var t = 0, n = e.length, a = ''; t < n; t++)
                            a += e[t].value;
                        return a;
                    }
                    function g(e, t, n) {
                        var a = t.dir, o = n && 'parentNode' === a, d = w++;
                        return t.first ? function (t, n, d) {
                            for (; t = t[a];)
                                if (1 === t.nodeType || o)
                                    return e(t, n, d);
                        } : function (t, n, i) {
                            var r = [N, d], l, s, p;
                            if (i) {
                                for (; t = t[a];)
                                    if ((1 === t.nodeType || o) && e(t, n, i))
                                        return !0;
                            }
                            else
                                for (; t = t[a];)
                                    if (1 === t.nodeType || o) {
                                        if (p = t[v] || (t[v] = {}), s = p[t.uniqueID] || (p[t.uniqueID] = {}), (l = s[a]) && l[0] === N && l[1] === d)
                                            return r[2] = l[2];
                                        if (s[a] = r, r[2] = e(t, n, i))
                                            return !0;
                                    }
                        };
                    }
                    function h(e) {
                        return 1 < e.length ? function (t, n, a) {
                            for (var o = e.length; o--;)
                                if (!e[o](t, n, a))
                                    return !1;
                            return !0;
                        } : e[0];
                    }
                    function f(e, n, a) {
                        for (var o = 0, d = n.length; o < d; o++)
                            t(e, n[o], a);
                        return a;
                    }
                    function y(e, t, n, a, o) {
                        for (var d = [], r = 0, i = e.length, l; r < i; r++)
                            (l = e[r]) && (!n || n(l, a, o)) && (d.push(l), null != t && t.push(r));
                        return d;
                    }
                    function x(e, t, n, o, d, i) {
                        return o && !o[v] && (o = x(o)), d && !d[v] && (d = x(d, i)), a(function (a, r, l, s) {
                            var p = [], c = [], u = r.length, m = a || f(t || '*', l.nodeType ? [l] : l, []), g = e && (a || !t) ? y(m, p, e, l, s) : m, h = n ? d || (a ? e : u || o) ? [] : r : g, x, C, i;
                            if (n && n(g, h, l, s), o)
                                for (x = y(h, c), o(x, [], l, s), C = x.length; C--;)
                                    (i = x[C]) && (h[c[C]] = !(g[c[C]] = i));
                            if (!a)
                                h = y(h === r ? h.splice(u, h.length) : h), d ? d(null, r, h, s) : q.apply(r, h);
                            else if (d || e) {
                                if (d) {
                                    for (x = [], C = h.length; C--;)
                                        (i = h[C]) && x.push(g[C] = i);
                                    d(null, h = [], x, s);
                                }
                                for (C = h.length; C--;)
                                    (i = h[C]) && -1 < (x = d ? I(a, i) : p[C]) && (a[x] = !(r[x] = i));
                            }
                        });
                    }
                    function C(e) {
                        for (var t = e.length, n = de.relative[e[0].type], a = n || de.relative[' '], o = n ? 1 : 0, d = g(function (e) { return e === l; }, a, !0), i = g(function (e) { return -1 < I(l, e); }, a, !0), r = [function (e, t, a) { var o = !n && (a || t !== pe) || ((l = t).nodeType ? d(e, t, a) : i(e, t, a)); return l = null, o; }], l, s, p; o < t; o++)
                            if (s = de.relative[e[o].type])
                                r = [g(h(r), s)];
                            else {
                                if (s = de.filter[e[o].type].apply(null, e[o].matches), s[v]) {
                                    for (p = ++o; p < t && !de.relative[e[p].type]; p++)
                                        ;
                                    return x(1 < o && h(r), 1 < o && m(e.slice(0, o - 1).concat({ value: ' ' === e[o - 2].type ? '*' : '' })).replace(P, '$1'), s, o < p && C(e.slice(o, p)), p < t && C(e = e.slice(p)), p < t && m(e));
                                }
                                r.push(s);
                            }
                        return h(r);
                    }
                    function b(e, n) {
                        var o = 0 < n.length, d = 0 < e.length, i = function (a, r, l, s, p) {
                            var c = 0, u = '0', i = a && [], m = [], g = pe, h = a || d && de.find.TAG('*', p), f = N += null == g ? 1 : Math.random() || .1, x = h.length, C, b, v;
                            for (p && (pe = r === ge || r || p); u !== x && null != (C = h[u]); u++) {
                                if (d && C) {
                                    for (b = 0, r || C.ownerDocument === ge || (me(C), l = !fe); v = e[b++];)
                                        if (v(C, r || ge, l)) {
                                            s.push(C);
                                            break;
                                        }
                                    p && (N = f);
                                }
                                o && ((C = !v && C) && c--, a && i.push(C));
                            }
                            if (c += u, o && u !== c) {
                                for (b = 0; v = n[b++];)
                                    v(i, m, r, l);
                                if (a) {
                                    if (0 < c)
                                        for (; u--;)
                                            i[u] || m[u] || (m[u] = A.call(s));
                                    m = y(m);
                                }
                                q.apply(s, m), p && !a && 0 < m.length && 1 < c + n.length && t.uniqueSort(s);
                            }
                            return p && (N = f, pe = g), i;
                        };
                        return o ? a(i) : i;
                    }
                    var v = 'sizzle' + 1 * new Date, T = e.document, N = 0, w = 0, E = n(), S = n(), D = n(), _ = function (e, t) { return e === t && (ue = !0), 0; }, k = -2147483648, M = {}.hasOwnProperty, j = [], A = j.pop, L = j.push, q = j.push, H = j.slice, I = function (e, t) {
                        for (var n = 0, a = e.length; n < a; n++)
                            if (e[n] === t)
                                return n;
                        return -1;
                    }, O = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', F = '[\\x20\\t\\r\\n\\f]', B = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', R = /[\x20\t\r\n\f]+/g, P = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, W = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, z = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, G = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, U = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, X = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, $ = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i }, V = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, Z = /'|\\/g, ee = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, te = function (e, t, n) { var a = String.fromCharCode, o = '0x' + t - 65536; return o != o || n ? t : 0 > o ? a(o + 65536) : a(55296 | o >> 10, 56320 | 1023 & o); }, ne = function () { me(); }, ae, oe, de, ie, i, re, le, se, pe, ce, ue, me, ge, he, fe, ye, xe, Ce, be;
                    try {
                        q.apply(j = H.call(T.childNodes), T.childNodes), j[T.childNodes.length].nodeType;
                    }
                    catch (t) {
                        q = { apply: j.length ? function (e, t) { L.apply(e, H.call(t)); } : function (e, t) {
                                for (var n = e.length, a = 0; e[n++] = t[a++];)
                                    ;
                                e.length = n - 1;
                            } };
                    }
                    for (ae in oe = t.support = {}, i = t.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && 'HTML' !== t.nodeName; }, me = t.setDocument = function (e) {
                        var t = e ? e.ownerDocument || e : T, n, a;
                        return t !== ge && 9 === t.nodeType && t.documentElement ? (ge = t, he = ge.documentElement, fe = !i(ge), (a = ge.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener('unload', ne, !1) : a.attachEvent && a.attachEvent('onunload', ne)), oe.attributes = o(function (e) { return e.className = 'i', !e.getAttribute('className'); }), oe.getElementsByTagName = o(function (e) { return e.appendChild(ge.createComment('')), !e.getElementsByTagName('*').length; }), oe.getElementsByClassName = Y.test(ge.getElementsByClassName), oe.getById = o(function (e) { return he.appendChild(e).id = v, !ge.getElementsByName || !ge.getElementsByName(v).length; }), oe.getById ? (de.find.ID = function (e, t) {
                            if ('undefined' != typeof t.getElementById && fe) {
                                var n = t.getElementById(e);
                                return n ? [n] : [];
                            }
                        }, de.filter.ID = function (e) { var t = e.replace(ee, te); return function (e) { return e.getAttribute('id') === t; }; }) : (delete de.find.ID, de.filter.ID = function (e) { var t = e.replace(ee, te); return function (e) { var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id'); return n && n.value === t; }; }), de.find.TAG = oe.getElementsByTagName ? function (e, t) { return 'undefined' == typeof t.getElementsByTagName ? oe.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e); } : function (e, t) {
                            var n = [], a = 0, o = t.getElementsByTagName(e), d;
                            if ('*' === e) {
                                for (; d = o[a++];)
                                    1 === d.nodeType && n.push(d);
                                return n;
                            }
                            return o;
                        }, de.find.CLASS = oe.getElementsByClassName && function (e, t) {
                            if ('undefined' != typeof t.getElementsByClassName && fe)
                                return t.getElementsByClassName(e);
                        }, xe = [], ye = [], (oe.qsa = Y.test(ge.querySelectorAll)) && (o(function (e) { he.appendChild(e).innerHTML = '<a id=\'' + v + '\'></a><select id=\'' + v + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && ye.push('[*^$]=' + F + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || ye.push('\\[' + F + '*(?:value|' + O + ')'), e.querySelectorAll('[id~=' + v + '-]').length || ye.push('~='), e.querySelectorAll(':checked').length || ye.push(':checked'), e.querySelectorAll('a#' + v + '+*').length || ye.push('.#.+[+~]'); }), o(function (e) { var t = ge.createElement('input'); t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && ye.push('name' + F + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || ye.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), ye.push(',.*:'); })), (oe.matchesSelector = Y.test(Ce = he.matches || he.webkitMatchesSelector || he.mozMatchesSelector || he.oMatchesSelector || he.msMatchesSelector)) && o(function (e) { oe.disconnectedMatch = Ce.call(e, 'div'), Ce.call(e, '[s!=\'\']:x'), xe.push('!=', ':(' + B + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + F + '*(' + B + ')(?:' + F + '*([*^$|!~]?=)' + F + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + B + '))|)' + F + '*\\]') + ')*)|.*)\\)|)'); }), ye = ye.length && new RegExp(ye.join('|')), xe = xe.length && new RegExp(xe.join('|')), n = Y.test(he.compareDocumentPosition), be = n || Y.test(he.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode; return e === a || !!(a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))); } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1;
                        }, _ = n ? function (e, t) {
                            if (e === t)
                                return ue = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !oe.sortDetached && t.compareDocumentPosition(e) === n ? e === ge || e.ownerDocument === T && be(T, e) ? -1 : t === ge || t.ownerDocument === T && be(T, t) ? 1 : ce ? I(ce, e) - I(ce, t) : 0 : 4 & n ? -1 : 1);
                        } : function (e, t) {
                            if (e === t)
                                return ue = !0, 0;
                            var n = 0, a = e.parentNode, o = t.parentNode, d = [e], i = [t], l;
                            if (!a || !o)
                                return e === ge ? -1 : t === ge ? 1 : a ? -1 : o ? 1 : ce ? I(ce, e) - I(ce, t) : 0;
                            if (a === o)
                                return r(e, t);
                            for (l = e; l = l.parentNode;)
                                d.unshift(l);
                            for (l = t; l = l.parentNode;)
                                i.unshift(l);
                            for (; d[n] === i[n];)
                                n++;
                            return n ? r(d[n], i[n]) : d[n] === T ? -1 : i[n] === T ? 1 : 0;
                        }, ge) : ge;
                    }, t.matches = function (e, n) { return t(e, null, null, n); }, t.matchesSelector = function (e, n) {
                        if ((e.ownerDocument || e) !== ge && me(e), n = n.replace(G, '=\'$1\']'), oe.matchesSelector && fe && !D[n + ' '] && (!xe || !xe.test(n)) && (!ye || !ye.test(n)))
                            try {
                                var a = Ce.call(e, n);
                                if (a || oe.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return a;
                            }
                            catch (t) { }
                        return 0 < t(n, ge, null, [e]).length;
                    }, t.contains = function (e, t) { return (e.ownerDocument || e) !== ge && me(e), be(e, t); }, t.attr = function (e, t) { (e.ownerDocument || e) !== ge && me(e); var n = de.attrHandle[t.toLowerCase()], a = n && M.call(de.attrHandle, t.toLowerCase()) ? n(e, t, !fe) : void 0; return void 0 === a ? oe.attributes || !fe ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a; }, t.error = function (e) { throw new Error('Syntax error, unrecognized expression: ' + e); }, t.uniqueSort = function (e) {
                        var t = [], n = 0, a = 0, o;
                        if (ue = !oe.detectDuplicates, ce = !oe.sortStable && e.slice(0), e.sort(_), ue) {
                            for (; o = e[a++];)
                                o === e[a] && (n = t.push(a));
                            for (; n--;)
                                e.splice(t[n], 1);
                        }
                        return ce = null, e;
                    }, ie = t.getText = function (e) {
                        var t = '', n = 0, a = e.nodeType, o;
                        if (!a)
                            for (; o = e[n++];)
                                t += ie(o);
                        else if (1 === a || 9 === a || 11 === a) {
                            if ('string' == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                t += ie(e);
                        }
                        else if (3 === a || 4 === a)
                            return e.nodeValue;
                        return t;
                    }, de = t.selectors = { cacheLength: 50, createPseudo: a, match: $, attrHandle: {}, find: {}, relative: { ">": { dir: 'parentNode', first: !0 }, " ": { dir: 'parentNode' }, "+": { dir: 'previousSibling', first: !0 }, "~": { dir: 'previousSibling' } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || '').replace(ee, te), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4); }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e; }, PSEUDO: function (e) { var t = !e[6] && e[2], n; return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : t && U.test(t) && (n = re(t, !0)) && (n = t.indexOf(')', t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3)); } }, filter: { TAG: function (e) { var t = e.replace(ee, te).toLowerCase(); return '*' === e ? function () { return !0; } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t; }; }, CLASS: function (e) { var t = E[e + ' ']; return t || (t = new RegExp('(^|' + F + ')' + e + '(' + F + '|$)')) && E(e, function (e) { return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || ''); }); }, ATTR: function (e, n, a) { return function (o) { var d = t.attr(o, e); return null == d ? '!=' === n : !n || (d += '', '=' === n ? d === a : '!=' === n ? d !== a : '^=' === n ? a && 0 === d.indexOf(a) : '*=' === n ? a && -1 < d.indexOf(a) : '$=' === n ? a && d.slice(-a.length) === a : '~=' === n ? -1 < (' ' + d.replace(R, ' ') + ' ').indexOf(a) : '|=' == n && (d === a || d.slice(0, a.length + 1) === a + '-')); }; }, CHILD: function (e, t, n, a, o) {
                                var d = 'nth' !== e.slice(0, 3), i = 'last' !== e.slice(-4), r = 'of-type' === t;
                                return 1 === a && 0 === o ? function (e) { return !!e.parentNode; } : function (t, n, l) {
                                    var s = d == i ? 'previousSibling' : 'nextSibling', p = t.parentNode, c = r && t.nodeName.toLowerCase(), u = !l && !r, m = !1, g, h, f, y, x, C;
                                    if (p) {
                                        if (d) {
                                            for (; s;) {
                                                for (y = t; y = y[s];)
                                                    if (r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType)
                                                        return !1;
                                                C = s = 'only' === e && !C && 'nextSibling';
                                            }
                                            return !0;
                                        }
                                        if (C = [i ? p.firstChild : p.lastChild], i && u) {
                                            for (y = p, f = y[v] || (y[v] = {}), h = f[y.uniqueID] || (f[y.uniqueID] = {}), g = h[e] || [], x = g[0] === N && g[1], m = x && g[2], y = x && p.childNodes[x]; y = ++x && y && y[s] || (m = x = 0) || C.pop();)
                                                if (1 === y.nodeType && ++m && y === t) {
                                                    h[e] = [N, x, m];
                                                    break;
                                                }
                                        }
                                        else if (u && (y = t, f = y[v] || (y[v] = {}), h = f[y.uniqueID] || (f[y.uniqueID] = {}), g = h[e] || [], x = g[0] === N && g[1], m = x), !1 === m)
                                            for (; (y = ++x && y && y[s] || (m = x = 0) || C.pop()) && !((r ? y.nodeName.toLowerCase() === c : 1 === y.nodeType) && ++m && (u && (f = y[v] || (y[v] = {}), h = f[y.uniqueID] || (f[y.uniqueID] = {}), h[e] = [N, m]), y === t));)
                                                ;
                                        return m -= o, m === a || 0 == m % a && 0 <= m / a;
                                    }
                                };
                            }, PSEUDO: function (e, n) {
                                var o = de.pseudos[e] || de.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e), d;
                                return o[v] ? o(n) : 1 < o.length ? (d = [e, e, '', n], de.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) {
                                    for (var a = o(e, n), d = a.length, i; d--;)
                                        i = I(e, a[d]), e[i] = !(t[i] = a[d]);
                                }) : function (e) { return o(e, 0, d); }) : o;
                            } }, pseudos: { not: a(function (e) {
                                var t = [], n = [], o = le(e.replace(P, '$1'));
                                return o[v] ? a(function (e, t, n, a) {
                                    for (var d = o(e, null, a, []), r = e.length, i; r--;)
                                        (i = d[r]) && (e[r] = !(t[r] = i));
                                }) : function (e, a, d) { return t[0] = e, o(t, null, d, n), t[0] = null, !n.pop(); };
                            }), has: a(function (e) { return function (n) { return 0 < t(e, n).length; }; }), contains: a(function (e) { return e = e.replace(ee, te), function (t) { return -1 < (t.textContent || t.innerText || ie(t)).indexOf(e); }; }), lang: a(function (e) {
                                return X.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ee, te).toLowerCase(), function (t) {
                                    var n;
                                    do
                                        if (n = fe ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                };
                            }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id; }, root: function (e) { return e === he; }, focus: function (e) { return e === ge.activeElement && (!ge.hasFocus || ge.hasFocus()) && !!(e.type || e.href || ~e.tabIndex); }, enabled: function (e) { return !1 === e.disabled; }, disabled: function (e) { return !0 === e.disabled; }, checked: function (e) { var t = e.nodeName.toLowerCase(); return 'input' === t && !!e.checked || 'option' === t && !!e.selected; }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected; }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (6 > e.nodeType)
                                        return !1;
                                return !0;
                            }, parent: function (e) { return !de.pseudos.empty(e); }, header: function (e) { return J.test(e.nodeName); }, input: function (e) { return V.test(e.nodeName); }, button: function (e) { var t = e.nodeName.toLowerCase(); return 'input' === t && 'button' === e.type || 'button' === t; }, text: function (e) { var t; return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase()); }, first: p(function () { return [0]; }), last: p(function (e, t) { return [t - 1]; }), eq: p(function (e, t, n) { return [0 > n ? n + t : n]; }), even: p(function (e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e;
                            }), odd: p(function (e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e;
                            }), lt: p(function (e, t, n) {
                                for (var a = 0 > n ? n + t : n; 0 <= --a;)
                                    e.push(a);
                                return e;
                            }), gt: p(function (e, t, n) {
                                for (var a = 0 > n ? n + t : n; ++a < t;)
                                    e.push(a);
                                return e;
                            }) } }, de.pseudos.nth = de.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                        de.pseudos[ae] = l(ae);
                    for (ae in { submit: !0, reset: !0 })
                        de.pseudos[ae] = s(ae);
                    return u.prototype = de.filters = de.pseudos, de.setFilters = new u, re = t.tokenize = function (e, n) {
                        var a = S[e + ' '], o, d, i, r, l, s, p;
                        if (a)
                            return n ? 0 : a.slice(0);
                        for (l = e, s = [], p = de.preFilter; l;) {
                            for (r in (!o || (d = W.exec(l))) && (d && (l = l.slice(d[0].length) || l), s.push(i = [])), o = !1, (d = z.exec(l)) && (o = d.shift(), i.push({ value: o, type: d[0].replace(P, ' ') }), l = l.slice(o.length)), de.filter)
                                (d = $[r].exec(l)) && (!p[r] || (d = p[r](d))) && (o = d.shift(), i.push({ value: o, type: r, matches: d }), l = l.slice(o.length));
                            if (!o)
                                break;
                        }
                        return n ? l.length : l ? t.error(e) : S(e, s).slice(0);
                    }, le = t.compile = function (e, t) {
                        var n = [], a = [], o = D[e + ' '], d;
                        if (!o) {
                            for (t || (t = re(e)), d = t.length; d--;)
                                o = C(t[d]), o[v] ? n.push(o) : a.push(o);
                            o = D(e, b(a, n)), o.selector = e;
                        }
                        return o;
                    }, se = t.select = function (e, t, n, a) {
                        var o = 'function' == typeof e && e, d = !a && re(e = o.selector || e), r, i, l, s, p;
                        if (n = n || [], 1 === d.length) {
                            if (i = d[0] = d[0].slice(0), 2 < i.length && 'ID' === (l = i[0]).type && oe.getById && 9 === t.nodeType && fe && de.relative[i[1].type]) {
                                if (t = (de.find.ID(l.matches[0].replace(ee, te), t) || [])[0], !t)
                                    return n;
                                o && (t = t.parentNode), e = e.slice(i.shift().value.length);
                            }
                            for (r = $.needsContext.test(e) ? 0 : i.length; r-- && (l = i[r], !de.relative[s = l.type]);)
                                if ((p = de.find[s]) && (a = p(l.matches[0].replace(ee, te), Q.test(i[0].type) && c(t.parentNode) || t))) {
                                    if (i.splice(r, 1), e = a.length && m(i), !e)
                                        return q.apply(n, a), n;
                                    break;
                                }
                        }
                        return (o || le(e, d))(a, t, !fe, n, !t || Q.test(e) && c(t.parentNode) || t), n;
                    }, oe.sortStable = v.split('').sort(_).join('') === v, oe.detectDuplicates = !!ue, me(), oe.sortDetached = o(function (e) { return 1 & e.compareDocumentPosition(ge.createElement('div')); }), o(function (e) { return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href'); }) || d('type|href|height|width', function (e, t, n) {
                        if (!n)
                            return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
                    }), oe.attributes && o(function (e) { return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value'); }) || d('value', function (e, t, n) {
                        if (!n && 'input' === e.nodeName.toLowerCase())
                            return e.defaultValue;
                    }), o(function (e) { return null == e.getAttribute('disabled'); }) || d(O, function (e, t, n) {
                        var a;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
                    }), t;
                }(o);
                Ce.find = we, Ce.expr = we.selectors, Ce.expr[':'] = Ce.expr.pseudos, Ce.uniqueSort = Ce.unique = we.uniqueSort, Ce.text = we.getText, Ce.isXMLDoc = we.isXML, Ce.contains = we.contains;
                var Ee = function (e, t, n) {
                    for (var a = []; (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (void 0 !== n && Ce(e).is(n))
                                break;
                            a.push(e);
                        }
                    return a;
                }, Se = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }, De = Ce.expr.match.needsContext, _e = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ke = /^.[^:#\[\.,]*$/;
                Ce.filter = function (e, t, n) { var a = t[0]; return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === a.nodeType ? Ce.find.matchesSelector(a, e) ? [a] : [] : Ce.find.matches(e, Ce.grep(t, function (e) { return 1 === e.nodeType; })); }, Ce.fn.extend({ find: function (e) {
                        var t = [], n = this, a = n.length, o;
                        if ('string' != typeof e)
                            return this.pushStack(Ce(e).filter(function () {
                                for (o = 0; o < a; o++)
                                    if (Ce.contains(n[o], this))
                                        return !0;
                            }));
                        for (o = 0; o < a; o++)
                            Ce.find(e, n[o], t);
                        return t = this.pushStack(1 < a ? Ce.unique(t) : t), t.selector = this.selector ? this.selector + ' ' + e : e, t;
                    }, filter: function (e) { return this.pushStack(l(this, e || [], !1)); }, not: function (e) { return this.pushStack(l(this, e || [], !0)); }, is: function (e) { return !!l(this, 'string' == typeof e && De.test(e) ? Ce(e) : e || [], !1).length; } });
                var Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, je = Ce.fn.init = function (e, t, n) {
                    var a, o;
                    if (!e)
                        return this;
                    if (n = n || Ae, 'string' == typeof e) {
                        if (a = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Me.exec(e), a && (a[1] || !t)) {
                            if (a[1]) {
                                if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), _e.test(a[1]) && Ce.isPlainObject(t))
                                    for (a in t)
                                        Ce.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                                return this;
                            }
                            if (o = se.getElementById(a[2]), o && o.parentNode) {
                                if (o.id !== a[2])
                                    return Ae.find(e);
                                this.length = 1, this[0] = o;
                            }
                            return this.context = se, this.selector = e, this;
                        }
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Ce.isFunction(e) ? 'undefined' == typeof n.ready ? e(Ce) : n.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Ce.makeArray(e, this));
                }, Ae;
                je.prototype = Ce.fn, Ae = Ce(se);
                var Le = /^(?:parents|prev(?:Until|All))/, qe = { children: !0, contents: !0, next: !0, prev: !0 };
                Ce.fn.extend({ has: function (e) {
                        var t = Ce(e, this), n = t.length, a;
                        return this.filter(function () {
                            for (a = 0; a < n; a++)
                                if (Ce.contains(this, t[a]))
                                    return !0;
                        });
                    }, closest: function (e, t) {
                        for (var n = 0, a = this.length, o = [], d = De.test(e) || 'string' != typeof e ? Ce(e, t || this.context) : 0, i; n < a; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (11 > i.nodeType && (d ? -1 < d.index(i) : 1 === i.nodeType && Ce.find.matchesSelector(i, e))) {
                                    o.push(i);
                                    break;
                                }
                        return this.pushStack(1 < o.length ? Ce.uniqueSort(o) : o);
                    }, index: function (e) { return e ? 'string' == typeof e ? Ce.inArray(this[0], Ce(e)) : Ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (e, t) { return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t)))); }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)); } }), Ce.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null; }, parents: function (e) { return Ee(e, 'parentNode'); }, parentsUntil: function (e, t, n) { return Ee(e, 'parentNode', n); }, next: function (e) { return s(e, 'nextSibling'); }, prev: function (e) { return s(e, 'previousSibling'); }, nextAll: function (e) { return Ee(e, 'nextSibling'); }, prevAll: function (e) { return Ee(e, 'previousSibling'); }, nextUntil: function (e, t, n) { return Ee(e, 'nextSibling', n); }, prevUntil: function (e, t, n) { return Ee(e, 'previousSibling', n); }, siblings: function (e) { return Se((e.parentNode || {}).firstChild, e); }, children: function (e) { return Se(e.firstChild); }, contents: function (e) { return Ce.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : Ce.merge([], e.childNodes); } }, function (e, t) { Ce.fn[e] = function (n, a) { var o = Ce.map(this, t, n); return 'Until' !== e.slice(-5) && (a = n), a && 'string' == typeof a && (o = Ce.filter(a, o)), 1 < this.length && (!qe[e] && (o = Ce.uniqueSort(o)), Le.test(e) && (o = o.reverse())), this.pushStack(o); }; });
                var He = /\S+/g;
                Ce.Callbacks = function (e) {
                    e = 'string' == typeof e ? p(e) : Ce.extend({}, e);
                    var t = [], n = [], a = -1, o = function () {
                        for (s = e.once, l = i = !0; n.length; a = -1)
                            for (r = n.shift(); ++a < t.length;)
                                !1 === t[a].apply(r[0], r[1]) && e.stopOnFalse && (a = t.length, r = !1);
                        e.memory || (r = !1), i = !1, s && (r ? t = [] : t = '');
                    }, d = { add: function () { return t && (r && !i && (a = t.length - 1, n.push(r)), function n(a) { Ce.each(a, function (a, o) { Ce.isFunction(o) ? (!e.unique || !d.has(o)) && t.push(o) : o && o.length && 'string' !== Ce.type(o) && n(o); }); }(arguments), r && !i && o()), this; }, remove: function () {
                            return Ce.each(arguments, function (e, n) {
                                for (var o; -1 < (o = Ce.inArray(n, t, o));)
                                    t.splice(o, 1), o <= a && a--;
                            }), this;
                        }, has: function (e) { return e ? -1 < Ce.inArray(e, t) : 0 < t.length; }, empty: function () { return t && (t = []), this; }, disable: function () { return s = n = [], t = r = '', this; }, disabled: function () { return !t; }, lock: function () { return s = !0, r || d.disable(), this; }, locked: function () { return !!s; }, fireWith: function (e, t) { return s || (t = t || [], t = [e, t.slice ? t.slice() : t], n.push(t), !i && o()), this; }, fire: function () { return d.fireWith(this, arguments), this; }, fired: function () { return !!l; } }, i, r, l, s;
                    return d;
                }, Ce.extend({ Deferred: function (e) { var t = [['resolve', 'done', Ce.Callbacks('once memory'), 'resolved'], ['reject', 'fail', Ce.Callbacks('once memory'), 'rejected'], ['notify', 'progress', Ce.Callbacks('memory')]], n = 'pending', a = { state: function () { return n; }, always: function () { return o.done(arguments).fail(arguments), this; }, then: function () { var e = arguments; return Ce.Deferred(function (n) { Ce.each(t, function (t, d) { var i = Ce.isFunction(e[t]) && e[t]; o[d[1]](function () { var e = i && i.apply(this, arguments); e && Ce.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[d[0] + 'With'](this === a ? n.promise() : this, i ? [e] : arguments); }); }), e = null; }).promise(); }, promise: function (e) { return null == e ? a : Ce.extend(e, a); } }, o = {}; return a.pipe = a.then, Ce.each(t, function (e, d) { var i = d[2], r = d[3]; a[d[1]] = i.add, r && i.add(function () { n = r; }, t[1 ^ e][2].disable, t[2][2].lock), o[d[0]] = function () { return o[d[0] + 'With'](this === o ? a : this, arguments), this; }, o[d[0] + 'With'] = i.fireWith; }), a.promise(o), e && e.call(o, o), o; }, when: function (e) {
                        var t = 0, n = pe.call(arguments), a = n.length, o = 1 !== a || e && Ce.isFunction(e.promise) ? a : 0, d = 1 === o ? e : Ce.Deferred(), i = function (e, t, n) { return function (a) { t[e] = this, n[e] = 1 < arguments.length ? pe.call(arguments) : a, n === r ? d.notifyWith(t, n) : !--o && d.resolveWith(t, n); }; }, r, l, s;
                        if (1 < a)
                            for (r = Array(a), l = Array(a), s = Array(a); t < a; t++)
                                n[t] && Ce.isFunction(n[t].promise) ? n[t].promise().progress(i(t, l, r)).done(i(t, s, n)).fail(d.reject) : --o;
                        return o || d.resolveWith(s, n), d.promise();
                    } });
                var Ie;
                Ce.fn.ready = function (e) { return Ce.ready.promise().done(e), this; }, Ce.extend({ isReady: !1, readyWait: 1, holdReady: function (e) { e ? Ce.readyWait++ : Ce.ready(!0); }, ready: function (e) { (!0 === e ? !--Ce.readyWait : !Ce.isReady) && (Ce.isReady = !0, !0 !== e && 0 < --Ce.readyWait || (Ie.resolveWith(se, [Ce]), Ce.fn.triggerHandler && (Ce(se).triggerHandler('ready'), Ce(se).off('ready')))); } }), Ce.ready.promise = function (e) {
                    if (!Ie)
                        if (Ie = Ce.Deferred(), 'complete' === se.readyState || 'loading' !== se.readyState && !se.documentElement.doScroll)
                            o.setTimeout(Ce.ready);
                        else if (se.addEventListener)
                            se.addEventListener('DOMContentLoaded', u), o.addEventListener('load', u);
                        else {
                            se.attachEvent('onreadystatechange', u), o.attachEvent('onload', u);
                            var t = !1;
                            try {
                                t = null == o.frameElement && se.documentElement;
                            }
                            catch (t) { }
                            t && t.doScroll && function e() {
                                if (!Ce.isReady) {
                                    try {
                                        t.doScroll('left');
                                    }
                                    catch (t) {
                                        return o.setTimeout(e, 50);
                                    }
                                    c(), Ce.ready();
                                }
                            }();
                        }
                    return Ie.promise(e);
                }, Ce.ready.promise();
                for (var Oe in Ce(ye))
                    break;
                ye.ownFirst = '0' === Oe, ye.inlineBlockNeedsLayout = !1, Ce(function () { var e, t, n, a; n = se.getElementsByTagName('body')[0], n && n.style && (t = se.createElement('div'), a = se.createElement('div'), a.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(a).appendChild(t), 'undefined' != typeof t.style.zoom && (t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', ye.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(a)); }), function () {
                    var e = se.createElement('div');
                    ye.deleteExpando = !0;
                    try {
                        delete e.test;
                    }
                    catch (t) {
                        ye.deleteExpando = !1;
                    }
                    e = null;
                }();
                var Fe = function (e) { var t = Ce.noData[(e.nodeName + ' ').toLowerCase()], n = +e.nodeType || 1; return (1 == n || 9 == n) && (!t || !0 !== t && e.getAttribute('classid') === t); }, i = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Be = /([A-Z])/g;
                Ce.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' }, hasData: function (e) { return e = e.nodeType ? Ce.cache[e[Ce.expando]] : e[Ce.expando], !!e && !g(e); }, data: function (e, t, n) { return h(e, t, n); }, removeData: function (e, t) { return f(e, t); }, _data: function (e, t, n) { return h(e, t, n, !0); }, _removeData: function (e, t) { return f(e, t, !0); } }), Ce.fn.extend({ data: function (e, t) {
                        var n = this[0], a = n && n.attributes, o, d, i;
                        if (void 0 === e) {
                            if (this.length && (i = Ce.data(n), 1 === n.nodeType && !Ce._data(n, 'parsedAttrs'))) {
                                for (o = a.length; o--;)
                                    a[o] && (d = a[o].name, 0 === d.indexOf('data-') && (d = Ce.camelCase(d.slice(5)), m(n, d, i[d])));
                                Ce._data(n, 'parsedAttrs', !0);
                            }
                            return i;
                        }
                        return 'object' == typeof e ? this.each(function () { Ce.data(this, e); }) : 1 < arguments.length ? this.each(function () { Ce.data(this, e, t); }) : n ? m(n, e, Ce.data(n, e)) : void 0;
                    }, removeData: function (e) { return this.each(function () { Ce.removeData(this, e); }); } }), Ce.extend({ queue: function (e, t, n) {
                        var a;
                        if (e)
                            return t = (t || 'fx') + 'queue', a = Ce._data(e, t), n && (!a || Ce.isArray(n) ? a = Ce._data(e, t, Ce.makeArray(n)) : a.push(n)), a || [];
                    }, dequeue: function (e, t) { t = t || 'fx'; var n = Ce.queue(e, t), a = n.length, o = n.shift(), d = Ce._queueHooks(e, t), i = function () { Ce.dequeue(e, t); }; 'inprogress' === o && (o = n.shift(), a--), o && ('fx' === t && n.unshift('inprogress'), delete d.stop, o.call(e, i, d)), !a && d && d.empty.fire(); }, _queueHooks: function (e, t) { var n = t + 'queueHooks'; return Ce._data(e, n) || Ce._data(e, n, { empty: Ce.Callbacks('once memory').add(function () { Ce._removeData(e, t + 'queue'), Ce._removeData(e, n); }) }); } }), Ce.fn.extend({ queue: function (e, t) { var n = 2; return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? Ce.queue(this[0], e) : void 0 === t ? this : this.each(function () { var n = Ce.queue(this, e, t); Ce._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && Ce.dequeue(this, e); }); }, dequeue: function (e) { return this.each(function () { Ce.dequeue(this, e); }); }, clearQueue: function (e) { return this.queue(e || 'fx', []); }, promise: function (e, t) {
                        var n = 1, a = Ce.Deferred(), o = this, d = this.length, i = function () { --n || a.resolveWith(o, [o]); }, r;
                        for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; d--;)
                            r = Ce._data(o[d], e + 'queueHooks'), r && r.empty && (n++, r.empty.add(i));
                        return i(), a.promise(t);
                    } }), function () {
                    var e;
                    ye.shrinkWrapBlocks = function () {
                        if (null != e)
                            return e;
                        e = !1;
                        var t, n, a;
                        if (n = se.getElementsByTagName('body')[0], n && n.style)
                            return t = se.createElement('div'), a = se.createElement('div'), a.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(a).appendChild(t), 'undefined' != typeof t.style.zoom && (t.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', t.appendChild(se.createElement('div')).style.width = '5px', e = 3 !== t.offsetWidth), n.removeChild(a), e;
                    };
                }();
                var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp('^(?:([+-])=|)(' + Re + ')([a-z%]*)$', 'i'), We = ['Top', 'Right', 'Bottom', 'Left'], ze = function (e, t) { return e = t || e, 'none' === Ce.css(e, 'display') || !Ce.contains(e.ownerDocument, e); }, Ge = function (e, t, n, a, o, d, r) {
                    var l = 0, i = e.length, s = null == n;
                    if ('object' === Ce.type(n))
                        for (l in o = !0, n)
                            Ge(e, t, l, n[l], !0, d, r);
                    else if (void 0 !== a && (o = !0, Ce.isFunction(a) || (r = !0), s && (r ? (t.call(e, a), t = null) : (s = t, t = function (e, t, n) { return s.call(Ce(e), n); })), t))
                        for (; l < i; l++)
                            t(e[l], n, r ? a : a.call(e[l], l, t(e[l], n)));
                    return o ? e : s ? t.call(e) : i ? t(e[0], n) : d;
                }, Ue = /^(?:checkbox|radio)$/i, Xe = /<([\w:-]+)/, $e = /^$|\/(?:java|ecma)script/i, Ve = /^\s+/, Je = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
                (function () { var e = se.createElement('div'), t = se.createDocumentFragment(), n = se.createElement('input'); e.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', ye.leadingWhitespace = 3 === e.firstChild.nodeType, ye.tbody = !e.getElementsByTagName('tbody').length, ye.htmlSerialize = !!e.getElementsByTagName('link').length, ye.html5Clone = '<:nav></:nav>' !== se.createElement('nav').cloneNode(!0).outerHTML, n.type = 'checkbox', n.checked = !0, t.appendChild(n), ye.appendChecked = n.checked, e.innerHTML = '<textarea>x</textarea>', ye.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement('input'), n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), e.appendChild(n), ye.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.noCloneEvent = !!e.addEventListener, e[Ce.expando] = 1, ye.attributes = !e.getAttribute(Ce.expando); })();
                var Ye = { option: [1, '<select multiple=\'multiple\'>', '</select>'], legend: [1, '<fieldset>', '</fieldset>'], area: [1, '<map>', '</map>'], param: [1, '<object>', '</object>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: ye.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'] };
                Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
                var Ke = /<|&#?\w+;/, Qe = /<tbody/i;
                (function () {
                    var e = se.createElement('div'), t, n;
                    for (t in { submit: !0, change: !0, focusin: !0 })
                        n = 'on' + t, (ye[t] = n in o) || (e.setAttribute(n, 't'), ye[t] = !1 === e.attributes[n].expando);
                    e = null;
                })();
                var Ze = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, at = /^([^.]*)(?:\.(.+)|)/;
                Ce.event = { global: {}, add: function (e, n, a, o, d) {
                        var i = Ce._data(e), r, l, s, t, p, c, u, m, g, h, f;
                        if (i) {
                            for (a.handler && (t = a, a = t.handler, d = t.selector), a.guid || (a.guid = Ce.guid++), (l = i.events) || (l = i.events = {}), (c = i.handle) || (c = i.handle = function (t) { return 'undefined' == typeof Ce || t && Ce.event.triggered === t.type ? void 0 : Ce.event.dispatch.apply(c.elem, arguments); }, c.elem = e), n = (n || '').match(He) || [''], s = n.length; s--;)
                                (r = at.exec(n[s]) || [], g = f = r[1], h = (r[2] || '').split('.').sort(), !!g) && (p = Ce.event.special[g] || {}, g = (d ? p.delegateType : p.bindType) || g, p = Ce.event.special[g] || {}, u = Ce.extend({ type: g, origType: f, data: o, handler: a, guid: a.guid, selector: d, needsContext: d && Ce.expr.match.needsContext.test(d), namespace: h.join('.') }, t), (m = l[g]) || (m = l[g] = [], m.delegateCount = 0, (!p.setup || !1 === p.setup.call(e, o, h, c)) && (e.addEventListener ? e.addEventListener(g, c, !1) : e.attachEvent && e.attachEvent('on' + g, c))), p.add && (p.add.call(e, u), !u.handler.guid && (u.handler.guid = a.guid)), d ? m.splice(m.delegateCount++, 0, u) : m.push(u), Ce.event.global[g] = !0);
                            e = null;
                        }
                    }, remove: function (e, n, a, o, d) {
                        var i = Ce.hasData(e) && Ce._data(e), r, l, s, p, c, t, u, m, g, h, f;
                        if (i && (t = i.events)) {
                            for (n = (n || '').match(He) || [''], c = n.length; c--;) {
                                if (s = at.exec(n[c]) || [], g = f = s[1], h = (s[2] || '').split('.').sort(), !g) {
                                    for (g in t)
                                        Ce.event.remove(e, g + n[c], a, o, !0);
                                    continue;
                                }
                                for (u = Ce.event.special[g] || {}, g = (o ? u.delegateType : u.bindType) || g, m = t[g] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), p = r = m.length; r--;)
                                    l = m[r], (d || f === l.origType) && (!a || a.guid === l.guid) && (!s || s.test(l.namespace)) && (!o || o === l.selector || '**' === o && l.selector) && (m.splice(r, 1), l.selector && m.delegateCount--, u.remove && u.remove.call(e, l));
                                p && !m.length && ((!u.teardown || !1 === u.teardown.call(e, h, i.handle)) && Ce.removeEvent(e, g, i.handle), delete t[g]);
                            }
                            Ce.isEmptyObject(t) && (delete i.handle, Ce._removeData(e, 'events'));
                        }
                    }, trigger: function (e, t, n, a) {
                        var d = [n || se], r = fe.call(e, 'type') ? e.type : e, l = fe.call(e, 'namespace') ? e.namespace.split('.') : [], s, p, c, u, m, g, h;
                        if ((c = g = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType) && !nt.test(r + Ce.event.triggered) && (-1 < r.indexOf('.') && (l = r.split('.'), r = l.shift(), l.sort()), p = 0 > r.indexOf(':') && 'on' + r, e = e[Ce.expando] ? e : new Ce.Event(r, 'object' == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = l.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + l.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : Ce.makeArray(t, [e]), m = Ce.event.special[r] || {}, a || !m.trigger || !1 !== m.trigger.apply(n, t))) {
                            if (!a && !m.noBubble && !Ce.isWindow(n)) {
                                for (u = m.delegateType || r, nt.test(u + r) || (c = c.parentNode); c; c = c.parentNode)
                                    d.push(c), g = c;
                                g === (n.ownerDocument || se) && d.push(g.defaultView || g.parentWindow || o);
                            }
                            for (h = 0; (c = d[h++]) && !e.isPropagationStopped();)
                                e.type = 1 < h ? u : m.bindType || r, s = (Ce._data(c, 'events') || {})[e.type] && Ce._data(c, 'handle'), s && s.apply(c, t), s = p && c[p], s && s.apply && Fe(c) && (e.result = s.apply(c, t), !1 === e.result && e.preventDefault());
                            if (e.type = r, !a && !e.isDefaultPrevented() && (!m._default || !1 === m._default.apply(d.pop(), t)) && Fe(n) && p && n[r] && !Ce.isWindow(n)) {
                                g = n[p], g && (n[p] = null), Ce.event.triggered = r;
                                try {
                                    n[r]();
                                }
                                catch (t) { }
                                Ce.event.triggered = void 0, g && (n[p] = g);
                            }
                            return e.result;
                        }
                    }, dispatch: function (e) {
                        e = Ce.event.fix(e);
                        var t = [], n = pe.call(arguments), a = (Ce._data(this, 'events') || {})[e.type] || [], o = Ce.event.special[e.type] || {}, d, i, r, l, s;
                        if (n[0] = e, e.delegateTarget = this, !(o.preDispatch && !1 === o.preDispatch.call(this, e))) {
                            for (t = Ce.event.handlers.call(this, e, a), d = 0; (l = t[d++]) && !e.isPropagationStopped();)
                                for (e.currentTarget = l.elem, i = 0; (s = l.handlers[i++]) && !e.isImmediatePropagationStopped();)
                                    (!e.rnamespace || e.rnamespace.test(s.namespace)) && (e.handleObj = s, e.data = s.data, r = ((Ce.event.special[s.origType] || {}).handle || s.handler).apply(l.elem, n), void 0 !== r && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                            return o.postDispatch && o.postDispatch.call(this, e), e.result;
                        }
                    }, handlers: function (e, t) {
                        var n = [], a = t.delegateCount, o = e.target, d, i, r, l;
                        if (a && o.nodeType && ('click' !== e.type || isNaN(e.button) || 1 > e.button))
                            for (; o != this; o = o.parentNode || this)
                                if (1 === o.nodeType && (!0 !== o.disabled || 'click' !== e.type)) {
                                    for (i = [], d = 0; d < a; d++)
                                        l = t[d], r = l.selector + ' ', void 0 === i[r] && (i[r] = l.needsContext ? -1 < Ce(r, this).index(o) : Ce.find(r, this, null, [o]).length), i[r] && i.push(l);
                                    i.length && n.push({ elem: o, handlers: i });
                                }
                        return a < t.length && n.push({ elem: this, handlers: t.slice(a) }), n;
                    }, fix: function (e) {
                        if (e[Ce.expando])
                            return e;
                        var t = e.type, n = e, a = this.fixHooks[t], o, d, i;
                        for (a || (this.fixHooks[t] = a = tt.test(t) ? this.mouseHooks : et.test(t) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Ce.Event(n), o = i.length; o--;)
                            d = i[o], e[d] = n[d];
                        return e.target || (e.target = n.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, n) : e;
                    }, props: ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'detail', 'eventPhase', 'metaKey', 'relatedTarget', 'shiftKey', 'target', 'timeStamp', 'view', 'which'], fixHooks: {}, keyHooks: { props: ['char', 'charCode', 'key', 'keyCode'], filter: function (e, t) { return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e; } }, mouseHooks: { props: ['button', 'buttons', 'clientX', 'clientY', 'fromElement', 'offsetX', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY', 'toElement'], filter: function (e, t) { var n = t.button, a = t.fromElement, o, d, i; return null == e.pageX && null != t.clientX && (d = e.target.ownerDocument || se, i = d.documentElement, o = d.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === n || (e.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), e; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
                                if (this !== E() && this.focus)
                                    try {
                                        return this.focus(), !1;
                                    }
                                    catch (t) { }
                            }, delegateType: 'focusin' }, blur: { trigger: function () {
                                if (this === E() && this.blur)
                                    return this.blur(), !1;
                            }, delegateType: 'focusout' }, click: { trigger: function () {
                                if (Ce.nodeName(this, 'input') && 'checkbox' === this.type && this.click)
                                    return this.click(), !1;
                            }, _default: function (e) { return Ce.nodeName(e.target, 'a'); } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result); } } }, simulate: function (t, n, a) { var o = Ce.extend(new Ce.Event, a, { type: t, isSimulated: !0 }); Ce.event.trigger(o, null, n), o.isDefaultPrevented() && a.preventDefault(); } }, Ce.removeEvent = se.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n); } : function (e, t, n) { var a = 'on' + t; e.detachEvent && ('undefined' == typeof e[a] && (e[a] = null), e.detachEvent(a, n)); }, Ce.Event = function (e, t) { return this instanceof Ce.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? N : w) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Ce.now(), this[Ce.expando] = !0) : new Ce.Event(e, t); }, Ce.Event.prototype = { constructor: Ce.Event, isDefaultPrevented: w, isPropagationStopped: w, isImmediatePropagationStopped: w, preventDefault: function () { var t = this.originalEvent; this.isDefaultPrevented = N, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1); }, stopPropagation: function () { var t = this.originalEvent; this.isPropagationStopped = N, !t || this.isSimulated || (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0); }, stopImmediatePropagation: function () { var t = this.originalEvent; this.isImmediatePropagationStopped = N, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation(); } }, Ce.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, t) { Ce.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n = this, a = e.relatedTarget, o = e.handleObj, d; return a && (a === n || Ce.contains(n, a)) || (e.type = o.origType, d = o.handler.apply(this, arguments), e.type = t), d; } }; }), ye.submit || (Ce.event.special.submit = { setup: function () { return !Ce.nodeName(this, 'form') && void Ce.event.add(this, 'click._submit keypress._submit', function (t) { var e = t.target, n = Ce.nodeName(e, 'input') || Ce.nodeName(e, 'button') ? Ce.prop(e, 'form') : void 0; n && !Ce._data(n, 'submit') && (Ce.event.add(n, 'submit._submit', function (e) { e._submitBubble = !0; }), Ce._data(n, 'submit', !0)); }); }, postDispatch: function (e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && Ce.event.simulate('submit', this.parentNode, e)); }, teardown: function () { return !Ce.nodeName(this, 'form') && void Ce.event.remove(this, '._submit'); } }), ye.change || (Ce.event.special.change = { setup: function () { return Ze.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (Ce.event.add(this, 'propertychange._change', function (e) { 'checked' === e.originalEvent.propertyName && (this._justChanged = !0); }), Ce.event.add(this, 'click._change', function (e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), Ce.event.simulate('change', this, e); })), !1) : void Ce.event.add(this, 'beforeactivate._change', function (t) { var e = t.target; Ze.test(e.nodeName) && !Ce._data(e, 'change') && (Ce.event.add(e, 'change._change', function (e) { !this.parentNode || e.isSimulated || e.isTrigger || Ce.event.simulate('change', this.parentNode, e); }), Ce._data(e, 'change', !0)); }); }, handle: function (e) {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || 'radio' !== t.type && 'checkbox' !== t.type)
                            return e.handleObj.handler.apply(this, arguments);
                    }, teardown: function () { return Ce.event.remove(this, '._change'), !Ze.test(this.nodeName); } }), ye.focusin || Ce.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) { var n = function (e) { Ce.event.simulate(t, e.target, Ce.event.fix(e)); }; Ce.event.special[t] = { setup: function () { var a = this.ownerDocument || this, o = Ce._data(a, t); o || a.addEventListener(e, n, !0), Ce._data(a, t, (o || 0) + 1); }, teardown: function () { var a = this.ownerDocument || this, o = Ce._data(a, t) - 1; o ? Ce._data(a, t, o) : (a.removeEventListener(e, n, !0), Ce._removeData(a, t)); } }; }), Ce.fn.extend({ on: function (e, t, n, a) { return S(this, e, t, n, a); }, one: function (e, t, n, a) { return S(this, e, t, n, a, 1); }, off: function (e, t, n) {
                        var a, o;
                        if (e && e.preventDefault && e.handleObj)
                            return a = e.handleObj, Ce(e.delegateTarget).off(a.namespace ? a.origType + '.' + a.namespace : a.origType, a.selector, a.handler), this;
                        if ('object' == typeof e) {
                            for (o in e)
                                this.off(o, t, e[o]);
                            return this;
                        }
                        return (!1 === t || 'function' == typeof t) && (n = t, t = void 0), !1 === n && (n = w), this.each(function () { Ce.event.remove(this, e, n, t); });
                    }, trigger: function (e, t) { return this.each(function () { Ce.event.trigger(e, t, this); }); }, triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n)
                            return Ce.event.trigger(e, t, n, !0);
                    } });
                var ot = / jQuery\d+="(?:null|\d+)"/g, dt = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i, it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rt = /<script|<style|<link/i, lt = /checked\s*(?:[^=]|=\s*.checked.)/i, st = /^true\/(.*)/, pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = x(se), ut = ct.appendChild(se.createElement('div'));
                Ce.extend({ htmlPrefilter: function (e) { return e.replace(it, '<$1></$2>'); }, clone: function (e, t, n) {
                        var a = Ce.contains(e.ownerDocument, e), o, d, r, l, i;
                        if (ye.html5Clone || Ce.isXMLDoc(e) || !dt.test('<' + e.nodeName + '>') ? r = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(r = ut.firstChild)), (!ye.noCloneEvent || !ye.noCloneChecked) && (1 === e.nodeType || 11 === e.nodeType) && !Ce.isXMLDoc(e))
                            for (o = C(r), i = C(e), l = 0; null != (d = i[l]); ++l)
                                o[l] && j(d, o[l]);
                        if (t)
                            if (n)
                                for (i = i || C(e), o = o || C(r), l = 0; null != (d = i[l]); l++)
                                    M(d, o[l]);
                            else
                                M(e, r);
                        return o = C(r, 'script'), 0 < o.length && b(o, !a && C(e, 'script')), o = i = d = null, r;
                    }, cleanData: function (e, t) {
                        for (var n = 0, a = Ce.expando, o = Ce.cache, d = ye.attributes, i = Ce.event.special, r, l, s, p; null != (r = e[n]); n++)
                            if ((t || Fe(r)) && (s = r[a], p = s && o[s], p)) {
                                if (p.events)
                                    for (l in p.events)
                                        i[l] ? Ce.event.remove(r, l) : Ce.removeEvent(r, l, p.handle);
                                o[s] && (delete o[s], d || 'undefined' == typeof r.removeAttribute ? r[a] = void 0 : r.removeAttribute(a), le.push(s));
                            }
                    } }), Ce.fn.extend({ domManip: A, detach: function (e) { return L(this, e, !0); }, remove: function (e) { return L(this, e); }, text: function (e) { return Ge(this, function (e) { return void 0 === e ? Ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e)); }, null, e, arguments.length); }, append: function () {
                        return A(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = D(this, e);
                                t.appendChild(e);
                            }
                        });
                    }, prepend: function () {
                        return A(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = D(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    }, before: function () { return A(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this); }); }, after: function () { return A(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling); }); }, empty: function () {
                        for (var e = 0, t; null != (t = this[e]); e++) {
                            for (1 === t.nodeType && Ce.cleanData(C(t, !1)); t.firstChild;)
                                t.removeChild(t.firstChild);
                            t.options && Ce.nodeName(t, 'select') && (t.options.length = 0);
                        }
                        return this;
                    }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return Ce.clone(this, e, t); }); }, html: function (e) {
                        return Ge(this, function (e) {
                            var t = this[0] || {}, n = 0, a = this.length;
                            if (void 0 === e)
                                return 1 === t.nodeType ? t.innerHTML.replace(ot, '') : void 0;
                            if ('string' == typeof e && !rt.test(e) && (ye.htmlSerialize || !dt.test(e)) && (ye.leadingWhitespace || !Ve.test(e)) && !Ye[(Xe.exec(e) || ['', ''])[1].toLowerCase()]) {
                                e = Ce.htmlPrefilter(e);
                                try {
                                    for (; n < a; n++)
                                        t = this[n] || {}, 1 === t.nodeType && (Ce.cleanData(C(t, !1)), t.innerHTML = e);
                                    t = 0;
                                }
                                catch (t) { }
                            }
                            t && this.empty().append(e);
                        }, null, e, arguments.length);
                    }, replaceWith: function () { var e = []; return A(this, arguments, function (t) { var n = this.parentNode; 0 > Ce.inArray(this, e) && (Ce.cleanData(C(this)), n && n.replaceChild(t, this)); }, e); } }), Ce.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, t) {
                    Ce.fn[e] = function (e) {
                        for (var n = 0, a = [], o = Ce(e), d = o.length - 1, i; n <= d; n++)
                            i = n === d ? this : this.clone(!0), Ce(o[n])[t](i), ue.apply(a, i.get());
                        return this.pushStack(a);
                    };
                });
                var mt = { HTML: 'block', BODY: 'block' }, gt = /^margin/, ht = new RegExp('^(' + Re + ')(?!px)[a-z%]+$', 'i'), ft = function (e, t, n, a) {
                    var o = {}, d, i;
                    for (i in t)
                        o[i] = e.style[i], e.style[i] = t[i];
                    for (i in d = n.apply(e, a || []), t)
                        e.style[i] = o[i];
                    return d;
                }, yt = se.documentElement, xt;
                (function () { function e() { var e = se.documentElement, p, c; e.appendChild(t), n.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', a = i = s = !1, d = l = !0, o.getComputedStyle && (c = o.getComputedStyle(n), a = '1%' !== (c || {}).top, s = '2px' === (c || {}).marginLeft, i = '4px' === (c || { width: '4px' }).width, n.style.marginRight = '50%', d = '4px' === (c || { marginRight: '4px' }).marginRight, p = n.appendChild(se.createElement('div')), p.style.cssText = n.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', p.style.marginRight = p.style.width = '0', n.style.width = '1px', l = !parseFloat((o.getComputedStyle(p) || {}).marginRight), n.removeChild(p)), n.style.display = 'none', r = 0 === n.getClientRects().length, r && (n.style.display = '', n.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', n.childNodes[0].style.borderCollapse = 'separate', p = n.getElementsByTagName('td'), p[0].style.cssText = 'margin:0;border:0;padding:0;display:none', r = 0 === p[0].offsetHeight, r && (p[0].style.display = '', p[1].style.display = 'none', r = 0 === p[0].offsetHeight)), e.removeChild(t); } var t = se.createElement('div'), n = se.createElement('div'), a, d, i, r, l, s; n.style && (n.style.cssText = 'float:left;opacity:.5', ye.opacity = '0.5' === n.style.opacity, ye.cssFloat = !!n.style.cssFloat, n.style.backgroundClip = 'content-box', n.cloneNode(!0).style.backgroundClip = '', ye.clearCloneStyle = 'content-box' === n.style.backgroundClip, t = se.createElement('div'), t.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', n.innerHTML = '', t.appendChild(n), ye.boxSizing = '' === n.style.boxSizing || '' === n.style.MozBoxSizing || '' === n.style.WebkitBoxSizing, Ce.extend(ye, { reliableHiddenOffsets: function () { return null == a && e(), r; }, boxSizingReliable: function () { return null == a && e(), i; }, pixelMarginRight: function () { return null == a && e(), d; }, pixelPosition: function () { return null == a && e(), a; }, reliableMarginRight: function () { return null == a && e(), l; }, reliableMarginLeft: function () { return null == a && e(), s; } })); })();
                var Ct = /^(top|right|bottom|left)$/, bt, vt;
                o.getComputedStyle ? (bt = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = o), t.getComputedStyle(e); }, vt = function (e, t, n) { var a = e.style, o, d, i, r; return n = n || bt(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, '' !== r && void 0 !== r || Ce.contains(e.ownerDocument, e) || (r = Ce.style(e, t)), n && !ye.pixelMarginRight() && ht.test(r) && gt.test(t) && (o = a.width, d = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = o, a.minWidth = d, a.maxWidth = i), void 0 === r ? r : r + ''; }) : yt.currentStyle && (bt = function (e) { return e.currentStyle; }, vt = function (e, t, n) { var a = e.style, o, d, i, r; return n = n || bt(e), r = n ? n[t] : void 0, null == r && a && a[t] && (r = a[t]), ht.test(r) && !Ct.test(t) && (o = a.left, d = e.runtimeStyle, i = d && d.left, i && (d.left = e.currentStyle.left), a.left = 'fontSize' === t ? '1em' : r, r = a.pixelLeft + 'px', a.left = o, i && (d.left = i)), void 0 === r ? r : r + '' || 'auto'; });
                var Tt = /alpha\([^)]*\)/i, Nt = /opacity\s*=\s*([^)]*)/i, wt = /^(none|table(?!-c[ea]).+)/, Et = new RegExp('^(' + Re + ')(.*)$', 'i'), St = { position: 'absolute', visibility: 'hidden', display: 'block' }, Dt = { letterSpacing: '0', fontWeight: '400' }, _t = ['Webkit', 'O', 'Moz', 'ms'], kt = se.createElement('div').style;
                Ce.extend({ cssHooks: { opacity: { get: function (e, t) {
                                if (t) {
                                    var n = vt(e, 'opacity');
                                    return '' === n ? '1' : n;
                                }
                            } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: ye.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function (e, t, n, a) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o = Ce.camelCase(t), d = e.style, i, r, l;
                            if (t = Ce.cssProps[o] || (Ce.cssProps[o] = O(o) || o), l = Ce.cssHooks[t] || Ce.cssHooks[o], void 0 !== n) {
                                if (r = typeof n, 'string' === r && (i = Pe.exec(n)) && i[1] && (n = y(e, t, i), r = 'number'), null == n || n !== n)
                                    return;
                                if ('number' === r && (n += i && i[3] || (Ce.cssNumber[o] ? '' : 'px')), ye.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (d[t] = 'inherit'), !l || !('set' in l) || void 0 !== (n = l.set(e, n, a)))
                                    try {
                                        d[t] = n;
                                    }
                                    catch (t) { }
                            }
                            else
                                return l && 'get' in l && void 0 !== (i = l.get(e, !1, a)) ? i : d[t];
                        }
                    }, css: function (e, t, n, a) { var o = Ce.camelCase(t), d, i, r; return t = Ce.cssProps[o] || (Ce.cssProps[o] = O(o) || o), r = Ce.cssHooks[t] || Ce.cssHooks[o], r && 'get' in r && (i = r.get(e, !0, n)), void 0 === i && (i = vt(e, t, a)), 'normal' === i && t in Dt && (i = Dt[t]), '' === n || n ? (d = parseFloat(i), !0 === n || isFinite(d) ? d || 0 : i) : i; } }), Ce.each(['height', 'width'], function (e, t) {
                    Ce.cssHooks[t] = { get: function (e, n, a) {
                            if (n)
                                return wt.test(Ce.css(e, 'display')) && 0 === e.offsetWidth ? ft(e, St, function () { return P(e, t, a); }) : P(e, t, a);
                        }, set: function (e, n, a) { var o = a && bt(e); return B(e, n, a ? R(e, t, a, ye.boxSizing && 'border-box' === Ce.css(e, 'boxSizing', !1, o), o) : 0); } };
                }), ye.opacity || (Ce.cssHooks.opacity = { get: function (e, t) { return Nt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : t ? '1' : ''; }, set: function (e, t) { var n = e.style, a = e.currentStyle, o = Ce.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '', d = a && a.filter || n.filter || ''; n.zoom = 1, (1 <= t || '' === t) && '' === Ce.trim(d.replace(Tt, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || a && !a.filter) || (n.filter = Tt.test(d) ? d.replace(Tt, o) : d + ' ' + o); } }), Ce.cssHooks.marginRight = I(ye.reliableMarginRight, function (e, t) {
                    if (t)
                        return ft(e, { display: 'inline-block' }, vt, [e, 'marginRight']);
                }), Ce.cssHooks.marginLeft = I(ye.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (parseFloat(vt(e, 'marginLeft')) || (Ce.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left; }) : 0)) + 'px';
                }), Ce.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
                    Ce.cssHooks[e + t] = { expand: function (n) {
                            for (var a = 0, o = {}, d = 'string' == typeof n ? n.split(' ') : [n]; 4 > a; a++)
                                o[e + We[a] + t] = d[a] || d[a - 2] || d[0];
                            return o;
                        } }, gt.test(e) || (Ce.cssHooks[e + t].set = B);
                }), Ce.fn.extend({ css: function (e, t) {
                        return Ge(this, function (e, t, n) {
                            var a = {}, o = 0, d, i;
                            if (Ce.isArray(t)) {
                                for (d = bt(e), i = t.length; o < i; o++)
                                    a[t[o]] = Ce.css(e, t[o], !1, d);
                                return a;
                            }
                            return void 0 === n ? Ce.css(e, t) : Ce.style(e, t, n);
                        }, e, t, 1 < arguments.length);
                    }, show: function () { return F(this, !0); }, hide: function () { return F(this); }, toggle: function (e) { return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () { ze(this) ? Ce(this).show() : Ce(this).hide(); }); } }), Ce.Tween = W, W.prototype = { constructor: W, init: function (e, t, n, a, o, d) { this.elem = e, this.prop = n, this.easing = o || Ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = d || (Ce.cssNumber[n] ? '' : 'px'); }, cur: function () { var e = W.propHooks[this.prop]; return e && e.get ? e.get(this) : W.propHooks._default.get(this); }, run: function (e) { var t = W.propHooks[this.prop], n; return this.pos = this.options.duration ? n = Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : W.propHooks._default.set(this), this; } }, W.prototype.init.prototype = W.prototype, W.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ce.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0); }, set: function (e) { Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[Ce.cssProps[e.prop]] || Ce.cssHooks[e.prop]) ? Ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now; } } }, W.propHooks.scrollTop = W.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now); } }, Ce.easing = { linear: function (e) { return e; }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2; }, _default: 'swing' }, Ce.fx = W.prototype.init, Ce.fx.step = {};
                var Mt = /^(?:toggle|show|hide)$/, jt = /queueHooks$/, At, Lt;
                Ce.Animation = Ce.extend(V, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return y(n.elem, e, Pe.exec(t), n), n; }] }, tweener: function (e, t) {
                        Ce.isFunction(e) ? (t = e, e = ['*']) : e = e.match(He);
                        for (var n = 0, a = e.length, o; n < a; n++)
                            o = e[n], V.tweeners[o] = V.tweeners[o] || [], V.tweeners[o].unshift(t);
                    }, prefilters: [X], prefilter: function (e, t) { t ? V.prefilters.unshift(e) : V.prefilters.push(e); } }), Ce.speed = function (e, t, n) { var a = e && 'object' == typeof e ? Ce.extend({}, e) : { complete: n || !n && t || Ce.isFunction(e) && e, duration: e, easing: n && t || t && !Ce.isFunction(t) && t }; return a.duration = Ce.fx.off ? 0 : 'number' == typeof a.duration ? a.duration : a.duration in Ce.fx.speeds ? Ce.fx.speeds[a.duration] : Ce.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = 'fx'), a.old = a.complete, a.complete = function () { Ce.isFunction(a.old) && a.old.call(this), a.queue && Ce.dequeue(this, a.queue); }, a; }, Ce.fn.extend({ fadeTo: function (e, t, n, a) { return this.filter(ze).css('opacity', 0).show().end().animate({ opacity: t }, e, n, a); }, animate: function (e, t, n, a) { var o = Ce.isEmptyObject(e), d = Ce.speed(t, n, a), i = function () { var t = V(this, Ce.extend({}, e), d); (o || Ce._data(this, 'finish')) && t.stop(!0); }; return i.finish = i, o || !1 === d.queue ? this.each(i) : this.queue(d.queue, i); }, stop: function (e, t, n) {
                        var a = function (e) { var t = e.stop; delete e.stop, t(n); };
                        return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
                            var t = !0, o = null != e && e + 'queueHooks', d = Ce.timers, i = Ce._data(this);
                            if (o)
                                i[o] && i[o].stop && a(i[o]);
                            else
                                for (o in i)
                                    i[o] && i[o].stop && jt.test(o) && a(i[o]);
                            for (o = d.length; o--;)
                                d[o].elem === this && (null == e || d[o].queue === e) && (d[o].anim.stop(n), t = !1, d.splice(o, 1));
                            (t || !n) && Ce.dequeue(this, e);
                        });
                    }, finish: function (e) {
                        return !1 !== e && (e = e || 'fx'), this.each(function () {
                            var t = Ce._data(this), n = t[e + 'queue'], a = t[e + 'queueHooks'], o = Ce.timers, d = n ? n.length : 0, i;
                            for (t.finish = !0, Ce.queue(this, e, []), a && a.stop && a.stop.call(this, !0), i = o.length; i--;)
                                o[i].elem === this && o[i].queue === e && (o[i].anim.stop(!0), o.splice(i, 1));
                            for (i = 0; i < d; i++)
                                n[i] && n[i].finish && n[i].finish.call(this);
                            delete t.finish;
                        });
                    } }), Ce.each(['toggle', 'show', 'hide'], function (e, t) { var n = Ce.fn[t]; Ce.fn[t] = function (e, a, o) { return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, a, o); }; }), Ce.each({ slideDown: G('show'), slideUp: G('hide'), slideToggle: G('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, t) { Ce.fn[e] = function (e, n, a) { return this.animate(t, e, n, a); }; }), Ce.timers = [], Ce.fx.tick = function () {
                    var e = Ce.timers, t = 0, n;
                    for (At = Ce.now(); t < e.length; t++)
                        n = e[t], n() || e[t] !== n || e.splice(t--, 1);
                    e.length || Ce.fx.stop(), At = void 0;
                }, Ce.fx.timer = function (e) { Ce.timers.push(e), e() ? Ce.fx.start() : Ce.timers.pop(); }, Ce.fx.interval = 13, Ce.fx.start = function () { Lt || (Lt = o.setInterval(Ce.fx.tick, Ce.fx.interval)); }, Ce.fx.stop = function () { o.clearInterval(Lt), Lt = null; }, Ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Ce.fn.delay = function (e, t) { return e = Ce.fx ? Ce.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) { var a = o.setTimeout(t, e); n.stop = function () { o.clearTimeout(a); }; }); }, function () { var e = se.createElement('input'), t = se.createElement('div'), n = se.createElement('select'), o = n.appendChild(se.createElement('option')), d; t = se.createElement('div'), t.setAttribute('className', 't'), t.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = t.getElementsByTagName('a')[0], e.setAttribute('type', 'checkbox'), t.appendChild(e), d = t.getElementsByTagName('a')[0], d.style.cssText = 'top:1px', ye.getSetAttribute = 't' !== t.className, ye.style = /top/.test(d.getAttribute('style')), ye.hrefNormalized = '/a' === d.getAttribute('href'), ye.checkOn = !!e.value, ye.optSelected = o.selected, ye.enctype = !!se.createElement('form').enctype, n.disabled = !0, ye.optDisabled = !o.disabled, e = se.createElement('input'), e.setAttribute('value', ''), ye.input = '' === e.getAttribute('value'), e.value = 't', e.setAttribute('type', 'radio'), ye.radioValue = 't' === e.value; }();
                var qt = /\r/g, Ht = /[\x20\t\r\n\f]+/g;
                Ce.fn.extend({ val: function (e) { var t = this[0], n, a, o; return arguments.length ? (o = Ce.isFunction(e), this.each(function (t) { var a; 1 !== this.nodeType || (a = o ? e.call(this, t, Ce(this).val()) : e, null == a ? a = '' : 'number' == typeof a ? a += '' : Ce.isArray(a) && (a = Ce.map(a, function (e) { return null == e ? '' : e + ''; })), n = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()], (!n || !('set' in n) || void 0 === n.set(this, a, 'value')) && (this.value = a)); })) : t ? (n = Ce.valHooks[t.type] || Ce.valHooks[t.nodeName.toLowerCase()], n && 'get' in n && void 0 !== (a = n.get(t, 'value'))) ? a : (a = t.value, 'string' == typeof a ? a.replace(qt, '') : null == a ? '' : a) : void 0; } }), Ce.extend({ valHooks: { option: { get: function (e) { var t = Ce.find.attr(e, 'value'); return null == t ? Ce.trim(Ce.text(e)).replace(Ht, ' ') : t; } }, select: { get: function (e) {
                                for (var t = e.options, n = e.selectedIndex, a = 'select-one' === e.type || 0 > n, o = a ? null : [], d = a ? n + 1 : t.length, r = 0 > n ? d : a ? n : 0, i, l; r < d; r++)
                                    if (l = t[r], (l.selected || r === n) && (ye.optDisabled ? !l.disabled : null === l.getAttribute('disabled')) && (!l.parentNode.disabled || !Ce.nodeName(l.parentNode, 'optgroup'))) {
                                        if (i = Ce(l).val(), a)
                                            return i;
                                        o.push(i);
                                    }
                                return o;
                            }, set: function (e, t) {
                                for (var n = e.options, a = Ce.makeArray(t), o = n.length, d, i; o--;)
                                    if (i = n[o], -1 < Ce.inArray(Ce.valHooks.option.get(i), a))
                                        try {
                                            i.selected = d = !0;
                                        }
                                        catch (e) {
                                            i.scrollHeight;
                                        }
                                    else
                                        i.selected = !1;
                                return d || (e.selectedIndex = -1), n;
                            } } } }), Ce.each(['radio', 'checkbox'], function () {
                    Ce.valHooks[this] = { set: function (e, t) {
                            if (Ce.isArray(t))
                                return e.checked = -1 < Ce.inArray(Ce(e).val(), t);
                        } }, ye.checkOn || (Ce.valHooks[this].get = function (e) { return null === e.getAttribute('value') ? 'on' : e.value; });
                });
                var It = Ce.expr.attrHandle, Ot = /^(?:checked|selected)$/i, Ft = ye.getSetAttribute, Bt = ye.input, Rt, Pt;
                Ce.fn.extend({ attr: function (e, t) { return Ge(this, Ce.attr, e, t, 1 < arguments.length); }, removeAttr: function (e) { return this.each(function () { Ce.removeAttr(this, e); }); } }), Ce.extend({ attr: function (e, t, n) {
                        var a = e.nodeType, o, d;
                        if (3 !== a && 8 !== a && 2 !== a)
                            return 'undefined' == typeof e.getAttribute ? Ce.prop(e, t, n) : (1 === a && Ce.isXMLDoc(e) || (t = t.toLowerCase(), d = Ce.attrHooks[t] || (Ce.expr.match.bool.test(t) ? Pt : Rt)), void 0 !== n) ? null === n ? void Ce.removeAttr(e, t) : d && 'set' in d && void 0 !== (o = d.set(e, n, t)) ? o : (e.setAttribute(t, n + ''), n) : d && 'get' in d && null !== (o = d.get(e, t)) ? o : (o = Ce.find.attr(e, t), null == o ? void 0 : o);
                    }, attrHooks: { type: { set: function (e, t) {
                                if (!ye.radioValue && 'radio' === t && Ce.nodeName(e, 'input')) {
                                    var n = e.value;
                                    return e.setAttribute('type', t), n && (e.value = n), t;
                                }
                            } } }, removeAttr: function (e, t) {
                        var n = 0, a = t && t.match(He), o, d;
                        if (a && 1 === e.nodeType)
                            for (; o = a[n++];)
                                d = Ce.propFix[o] || o, Ce.expr.match.bool.test(o) ? Bt && Ft || !Ot.test(o) ? e[d] = !1 : e[Ce.camelCase('default-' + o)] = e[d] = !1 : Ce.attr(e, o, ''), e.removeAttribute(Ft ? o : d);
                    } }), Pt = { set: function (e, t, n) { return !1 === t ? Ce.removeAttr(e, n) : Bt && Ft || !Ot.test(n) ? e.setAttribute(!Ft && Ce.propFix[n] || n, n) : e[Ce.camelCase('default-' + n)] = e[n] = !0, n; } }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = It[t] || Ce.find.attr;
                    It[t] = Bt && Ft || !Ot.test(t) ? function (e, t, a) { var o, d; return a || (d = It[t], It[t] = o, o = null == n(e, t, a) ? null : t.toLowerCase(), It[t] = d), o; } : function (e, t, n) {
                        if (!n)
                            return e[Ce.camelCase('default-' + t)] ? t.toLowerCase() : null;
                    };
                }), Bt && Ft || (Ce.attrHooks.value = { set: function (e, t, n) { return Ce.nodeName(e, 'input') ? void (e.defaultValue = t) : Rt && Rt.set(e, t, n); } }), Ft || (Rt = { set: function (e, t, n) {
                        var a = e.getAttributeNode(n);
                        if (a || e.setAttributeNode(a = e.ownerDocument.createAttribute(n)), a.value = t += '', 'value' === n || t === e.getAttribute(n))
                            return t;
                    } }, It.id = It.name = It.coords = function (e, t, n) {
                    var a;
                    if (!n)
                        return (a = e.getAttributeNode(t)) && '' !== a.value ? a.value : null;
                }, Ce.valHooks.button = { get: function (e, t) {
                        var n = e.getAttributeNode(t);
                        if (n && n.specified)
                            return n.value;
                    }, set: Rt.set }, Ce.attrHooks.contenteditable = { set: function (e, t, n) { Rt.set(e, '' !== t && t, n); } }, Ce.each(['width', 'height'], function (e, t) {
                    Ce.attrHooks[t] = { set: function (e, n) {
                            if ('' === n)
                                return e.setAttribute(t, 'auto'), n;
                        } };
                })), ye.style || (Ce.attrHooks.style = { get: function (e) { return e.style.cssText || void 0; }, set: function (e, t) { return e.style.cssText = t + ''; } });
                var Wt = /^(?:input|select|textarea|button|object)$/i, zt = /^(?:a|area)$/i;
                Ce.fn.extend({ prop: function (e, t) { return Ge(this, Ce.prop, e, t, 1 < arguments.length); }, removeProp: function (e) {
                        return e = Ce.propFix[e] || e, this.each(function () {
                            try {
                                this[e] = void 0, delete this[e];
                            }
                            catch (t) { }
                        });
                    } }), Ce.extend({ prop: function (e, t, n) {
                        var a = e.nodeType, o, d;
                        if (3 !== a && 8 !== a && 2 !== a)
                            return 1 === a && Ce.isXMLDoc(e) || (t = Ce.propFix[t] || t, d = Ce.propHooks[t]), void 0 === n ? d && 'get' in d && null !== (o = d.get(e, t)) ? o : e[t] : d && 'set' in d && void 0 !== (o = d.set(e, n, t)) ? o : e[t] = n;
                    }, propHooks: { tabIndex: { get: function (e) { var t = Ce.find.attr(e, 'tabindex'); return t ? parseInt(t, 10) : Wt.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : -1; } } }, propFix: { "for": 'htmlFor', "class": 'className' } }), ye.hrefNormalized || Ce.each(['href', 'src'], function (e, t) { Ce.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4); } }; }), ye.optSelected || (Ce.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null; }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex); } }), Ce.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { Ce.propFix[this.toLowerCase()] = this; }), ye.enctype || (Ce.propFix.enctype = 'encoding');
                var Gt = /[\t\r\n\f]/g;
                Ce.fn.extend({ addClass: function (e) {
                        var t = 0, n, a, o, d, i, r, l;
                        if (Ce.isFunction(e))
                            return this.each(function (t) { Ce(this).addClass(e.call(this, t, J(this))); });
                        if ('string' == typeof e && e)
                            for (n = e.match(He) || []; a = this[t++];)
                                if (d = J(a), o = 1 === a.nodeType && (' ' + d + ' ').replace(Gt, ' '), o) {
                                    for (r = 0; i = n[r++];)
                                        0 > o.indexOf(' ' + i + ' ') && (o += i + ' ');
                                    l = Ce.trim(o), d !== l && Ce.attr(a, 'class', l);
                                }
                        return this;
                    }, removeClass: function (e) {
                        var t = 0, n, a, o, d, i, r, l;
                        if (Ce.isFunction(e))
                            return this.each(function (t) { Ce(this).removeClass(e.call(this, t, J(this))); });
                        if (!arguments.length)
                            return this.attr('class', '');
                        if ('string' == typeof e && e)
                            for (n = e.match(He) || []; a = this[t++];)
                                if (d = J(a), o = 1 === a.nodeType && (' ' + d + ' ').replace(Gt, ' '), o) {
                                    for (r = 0; i = n[r++];)
                                        for (; -1 < o.indexOf(' ' + i + ' ');)
                                            o = o.replace(' ' + i + ' ', ' ');
                                    l = Ce.trim(o), d !== l && Ce.attr(a, 'class', l);
                                }
                        return this;
                    }, toggleClass: function (e, t) {
                        var n = typeof e;
                        return 'boolean' == typeof t && 'string' == n ? t ? this.addClass(e) : this.removeClass(e) : Ce.isFunction(e) ? this.each(function (n) { Ce(this).toggleClass(e.call(this, n, J(this), t), t); }) : this.each(function () {
                            var t, a, o, d;
                            if ('string' == n)
                                for (a = 0, o = Ce(this), d = e.match(He) || []; t = d[a++];)
                                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else
                                (void 0 === e || 'boolean' == n) && (t = J(this), t && Ce._data(this, '__className__', t), Ce.attr(this, 'class', t || !1 === e ? '' : Ce._data(this, '__className__') || ''));
                        });
                    }, hasClass: function (e) {
                        var t = 0, n, a;
                        for (n = ' ' + e + ' '; a = this[t++];)
                            if (1 === a.nodeType && -1 < (' ' + J(a) + ' ').replace(Gt, ' ').indexOf(n))
                                return !0;
                        return !1;
                    } }), Ce.each(['blur', 'focus', 'focusin', 'focusout', 'load', 'resize', 'scroll', 'unload', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'error', 'contextmenu'], function (e, t) { Ce.fn[t] = function (e, n) { return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t); }; }), Ce.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e); } });
                var Ut = o.location, Xt = Ce.now(), $t = /\?/, Vt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                Ce.parseJSON = function (e) {
                    if (o.JSON && o.JSON.parse)
                        return o.JSON.parse(e + '');
                    var t = null, n = Ce.trim(e + ''), a;
                    return n && !Ce.trim(n.replace(Vt, function (e, n, o, d) { return (a && n && (t = 0), 0 === t) ? e : (a = o || n, t += !d - !o, ''); })) ? Function('return ' + n)() : Ce.error('Invalid JSON: ' + e);
                }, Ce.parseXML = function (e) {
                    var t, n;
                    if (!e || 'string' != typeof e)
                        return null;
                    try {
                        o.DOMParser ? (n = new o.DOMParser, t = n.parseFromString(e, 'text/xml')) : (t = new o.ActiveXObject('Microsoft.XMLDOM'), t.async = 'false', t.loadXML(e));
                    }
                    catch (n) {
                        t = void 0;
                    }
                    return t && t.documentElement && !t.getElementsByTagName('parsererror').length || Ce.error('Invalid XML: ' + e), t;
                };
                var Jt = /#.*$/, Yt = /([?&])_=[^&]*/, Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nn = {}, an = {}, on = '*/'.concat('*'), dn = Ut.href, rn = tn.exec(dn.toLowerCase()) || [];
                Ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: dn, type: 'GET', isLocal: Qt.test(rn[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { "*": on, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { "* text": String, "text html": !0, "text json": Ce.parseJSON, "text xml": Ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Q(Q(e, Ce.ajaxSettings), t) : Q(Ce.ajaxSettings, e); }, ajaxPrefilter: Y(nn), ajaxTransport: Y(an), ajax: function (e, t) {
                        function n(e, t, n, c) { var u = t, g, f, y, T, N; 2 === m || (m = 2, C && o.clearTimeout(C), v = void 0, x = c || '', h.readyState = 0 < e ? 4 : 0, g = 200 <= e && 300 > e || 304 === e, n && (T = Z(a, h, n)), T = ee(a, T, h, g), g ? (a.ifModified && (N = h.getResponseHeader('Last-Modified'), N && (Ce.lastModified[i] = N), N = h.getResponseHeader('etag'), N && (Ce.etag[i] = N)), 204 === e || 'HEAD' === a.type ? u = 'nocontent' : 304 === e ? u = 'notmodified' : (u = T.state, f = T.data, y = T.error, g = !y)) : (y = u, (e || !u) && (u = 'error', 0 > e && (e = 0))), h.status = e, h.statusText = (t || u) + '', g ? l.resolveWith(d, [f, u, h]) : l.rejectWith(d, [h, u, y]), h.statusCode(p), p = void 0, b && r.trigger(g ? 'ajaxSuccess' : 'ajaxError', [h, a, g ? f : y]), s.fireWith(d, [h, u]), b && (r.trigger('ajaxComplete', [h, a]), !--Ce.active && Ce.event.trigger('ajaxStop'))); }
                        'object' == typeof e && (t = e, e = void 0), t = t || {};
                        var a = Ce.ajaxSetup({}, t), d = a.context || a, r = a.context && (d.nodeType || d.jquery) ? Ce(d) : Ce.event, l = Ce.Deferred(), s = Ce.Callbacks('once memory'), p = a.statusCode || {}, c = {}, u = {}, m = 0, g = 'canceled', h = { readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (2 == m) {
                                    if (!T)
                                        for (T = {}; t = Kt.exec(x);)
                                            T[t[1].toLowerCase()] = t[2];
                                    t = T[e.toLowerCase()];
                                }
                                return null == t ? null : t;
                            }, getAllResponseHeaders: function () { return 2 == m ? x : null; }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return m || (e = u[n] = u[n] || e, c[e] = t), this; }, overrideMimeType: function (e) { return m || (a.mimeType = e), this; }, statusCode: function (e) {
                                if (e)
                                    if (2 > m)
                                        for (var t in e)
                                            p[t] = [p[t], e[t]];
                                    else
                                        h.always(e[h.status]);
                                return this;
                            }, abort: function (e) { var t = e || g; return v && v.abort(t), n(0, t), this; } }, f, y, i, x, C, b, v, T;
                        if (l.promise(h).complete = s.add, h.success = h.done, h.error = h.fail, a.url = ((e || a.url || dn) + '').replace(Jt, '').replace(en, rn[1] + '//'), a.type = t.method || t.type || a.method || a.type, a.dataTypes = Ce.trim(a.dataType || '*').toLowerCase().match(He) || [''], null == a.crossDomain && (f = tn.exec(a.url.toLowerCase()), a.crossDomain = !!(f && (f[1] !== rn[1] || f[2] !== rn[2] || (f[3] || ('http:' === f[1] ? '80' : '443')) !== (rn[3] || ('http:' === rn[1] ? '80' : '443'))))), a.data && a.processData && 'string' != typeof a.data && (a.data = Ce.param(a.data, a.traditional)), K(nn, a, t, h), 2 == m)
                            return h;
                        for (y in b = Ce.event && a.global, b && 0 == Ce.active++ && Ce.event.trigger('ajaxStart'), a.type = a.type.toUpperCase(), a.hasContent = !Zt.test(a.type), i = a.url, a.hasContent || (a.data && (i = a.url += ($t.test(i) ? '&' : '?') + a.data, delete a.data), !1 === a.cache && (a.url = Yt.test(i) ? i.replace(Yt, '$1_=' + Xt++) : i + ($t.test(i) ? '&' : '?') + '_=' + Xt++)), a.ifModified && (Ce.lastModified[i] && h.setRequestHeader('If-Modified-Since', Ce.lastModified[i]), Ce.etag[i] && h.setRequestHeader('If-None-Match', Ce.etag[i])), (a.data && a.hasContent && !1 !== a.contentType || t.contentType) && h.setRequestHeader('Content-Type', a.contentType), h.setRequestHeader('Accept', a.dataTypes[0] && a.accepts[a.dataTypes[0]] ? a.accepts[a.dataTypes[0]] + ('*' === a.dataTypes[0] ? '' : ', ' + on + '; q=0.01') : a.accepts['*']), a.headers)
                            h.setRequestHeader(y, a.headers[y]);
                        if (a.beforeSend && (!1 === a.beforeSend.call(d, h, a) || 2 == m))
                            return h.abort();
                        for (y in g = 'abort', { success: 1, error: 1, complete: 1 })
                            h[y](a[y]);
                        if (v = K(an, a, t, h), !v)
                            n(-1, 'No Transport');
                        else {
                            if (h.readyState = 1, b && r.trigger('ajaxSend', [h, a]), 2 == m)
                                return h;
                            a.async && 0 < a.timeout && (C = o.setTimeout(function () { h.abort('timeout'); }, a.timeout));
                            try {
                                m = 1, v.send(c, n);
                            }
                            catch (t) {
                                if (2 > m)
                                    n(-1, t);
                                else
                                    throw t;
                            }
                        }
                        return h;
                    }, getJSON: function (e, t, n) { return Ce.get(e, t, n, 'json'); }, getScript: function (e, t) { return Ce.get(e, void 0, t, 'script'); } }), Ce.each(['get', 'post'], function (e, t) { Ce[t] = function (e, n, a, o) { return Ce.isFunction(n) && (o = o || a, a = n, n = void 0), Ce.ajax(Ce.extend({ url: e, type: t, dataType: o, data: n, success: a }, Ce.isPlainObject(e) && e)); }; }), Ce._evalUrl = function (e) { return Ce.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 }); }, Ce.fn.extend({ wrapAll: function (e) {
                        if (Ce.isFunction(e))
                            return this.each(function (t) { Ce(this).wrapAll(e.call(this, t)); });
                        if (this[0]) {
                            var t = Ce(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                                    e = e.firstChild;
                                return e;
                            }).append(this);
                        }
                        return this;
                    }, wrapInner: function (e) { return Ce.isFunction(e) ? this.each(function (t) { Ce(this).wrapInner(e.call(this, t)); }) : this.each(function () { var t = Ce(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e); }); }, wrap: function (e) { var t = Ce.isFunction(e); return this.each(function (n) { Ce(this).wrapAll(t ? e.call(this, n) : e); }); }, unwrap: function () { return this.parent().each(function () { Ce.nodeName(this, 'body') || Ce(this).replaceWith(this.childNodes); }).end(); } }), Ce.expr.filters.hidden = function (e) { return ye.reliableHiddenOffsets() ? 0 >= e.offsetWidth && 0 >= e.offsetHeight && !e.getClientRects().length : ne(e); }, Ce.expr.filters.visible = function (e) { return !Ce.expr.filters.hidden(e); };
                var ln = /%20/g, sn = /\[\]$/, pn = /\r?\n/g, cn = /^(?:submit|button|image|reset|file)$/i, un = /^(?:input|select|textarea|keygen)/i;
                Ce.param = function (e, t) {
                    var n = [], a = function (e, t) { t = Ce.isFunction(t) ? t() : null == t ? '' : t, n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t); }, o;
                    if (void 0 === t && (t = Ce.ajaxSettings && Ce.ajaxSettings.traditional), Ce.isArray(e) || e.jquery && !Ce.isPlainObject(e))
                        Ce.each(e, function () { a(this.name, this.value); });
                    else
                        for (o in e)
                            ae(o, e[o], t, a);
                    return n.join('&').replace(ln, '+');
                }, Ce.fn.extend({ serialize: function () { return Ce.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var e = Ce.prop(this, 'elements'); return e ? Ce.makeArray(e) : this; }).filter(function () { var e = this.type; return this.name && !Ce(this).is(':disabled') && un.test(this.nodeName) && !cn.test(e) && (this.checked || !Ue.test(e)); }).map(function (e, t) { var n = Ce(this).val(); return null == n ? null : Ce.isArray(n) ? Ce.map(n, function (e) { return { name: t.name, value: e.replace(pn, '\r\n') }; }) : { name: t.name, value: n.replace(pn, '\r\n') }; }).get(); } }), Ce.ajaxSettings.xhr = void 0 === o.ActiveXObject ? oe : function () { return this.isLocal ? de() : 8 < se.documentMode ? oe() : /^(get|post|head|put|delete|options)$/i.test(this.type) && oe() || de(); };
                var mn = 0, gn = {}, hn = Ce.ajaxSettings.xhr();
                o.attachEvent && o.attachEvent('onunload', function () {
                    for (var e in gn)
                        gn[e](void 0, !0);
                }), ye.cors = !!hn && 'withCredentials' in hn, hn = ye.ajax = !!hn, hn && Ce.ajaxTransport(function (e) {
                    if (!e.crossDomain || ye.cors) {
                        var t;
                        return { send: function (n, a) {
                                var d = e.xhr(), r = ++mn, l;
                                if (d.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (l in e.xhrFields)
                                        d[l] = e.xhrFields[l];
                                for (l in e.mimeType && d.overrideMimeType && d.overrideMimeType(e.mimeType), e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest'), n)
                                    void 0 !== n[l] && d.setRequestHeader(l, n[l] + '');
                                d.send(e.hasContent && e.data || null), t = function (n, o) {
                                    var i, l, s;
                                    if (t && (o || 4 === d.readyState))
                                        if (delete gn[r], t = void 0, d.onreadystatechange = Ce.noop, o)
                                            4 !== d.readyState && d.abort();
                                        else {
                                            s = {}, i = d.status, 'string' == typeof d.responseText && (s.text = d.responseText);
                                            try {
                                                l = d.statusText;
                                            }
                                            catch (t) {
                                                l = '';
                                            }
                                            i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : i = s.text ? 200 : 404;
                                        }
                                    s && a(i, l, s, d.getAllResponseHeaders());
                                }, e.async ? 4 === d.readyState ? o.setTimeout(t) : d.onreadystatechange = gn[r] = t : t();
                            }, abort: function () { t && t(void 0, !0); } };
                    }
                }), Ce.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return Ce.globalEval(e), e; } } }), Ce.ajaxPrefilter('script', function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1); }), Ce.ajaxTransport('script', function (e) {
                    if (e.crossDomain) {
                        var t = se.head || Ce('head')[0] || se.documentElement, n;
                        return { send: function (a, o) { n = se.createElement('script'), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, !t && o(200, 'success')); }, t.insertBefore(n, t.firstChild); }, abort: function () { n && n.onload(void 0, !0); } };
                    }
                });
                var fn = [], yn = /(=)\?(?=&|$)|\?\?/;
                Ce.ajaxSetup({ jsonp: 'callback', jsonpCallback: function () { var e = fn.pop() || Ce.expando + '_' + Xt++; return this[e] = !0, e; } }), Ce.ajaxPrefilter('json jsonp', function (e, t, n) {
                    var a = !1 !== e.jsonp && (yn.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && yn.test(e.data) && 'data'), d, i, r;
                    if (a || 'jsonp' === e.dataTypes[0])
                        return d = e.jsonpCallback = Ce.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(yn, '$1' + d) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? '&' : '?') + e.jsonp + '=' + d), e.converters['script json'] = function () { return r || Ce.error(d + ' was not called'), r[0]; }, e.dataTypes[0] = 'json', i = o[d], o[d] = function () { r = arguments; }, n.always(function () { void 0 === i ? Ce(o).removeProp(d) : o[d] = i, e[d] && (e.jsonpCallback = t.jsonpCallback, fn.push(d)), r && Ce.isFunction(i) && i(r[0]), r = i = void 0; }), 'script';
                }), Ce.parseHTML = function (e, t, n) {
                    if (!e || 'string' != typeof e)
                        return null;
                    'boolean' == typeof t && (n = t, t = !1), t = t || se;
                    var a = _e.exec(e), o = !n && [];
                    return a ? [t.createElement(a[1])] : (a = T([e], t, o), o && o.length && Ce(o).remove(), Ce.merge([], a.childNodes));
                };
                var xn = Ce.fn.load;
                Ce.fn.load = function (e, t, n) {
                    if ('string' != typeof e && xn)
                        return xn.apply(this, arguments);
                    var a = this, o = e.indexOf(' '), d, i, r;
                    return -1 < o && (d = Ce.trim(e.slice(o, e.length)), e = e.slice(0, o)), Ce.isFunction(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), 0 < a.length && Ce.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t }).done(function (e) { r = arguments, a.html(d ? Ce('<div>').append(Ce.parseHTML(e)).find(d) : e); }).always(n && function (e, t) { a.each(function () { n.apply(this, r || [e.responseText, t, e]); }); }), this;
                }, Ce.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) { Ce.fn[t] = function (e) { return this.on(t, e); }; }), Ce.expr.filters.animated = function (e) { return Ce.grep(Ce.timers, function (t) { return e === t.elem; }).length; }, Ce.offset = { setOffset: function (e, t, n) { var a = Ce.css(e, 'position'), o = Ce(e), d = {}, i, r, l, s, p, c, u; 'static' === a && (e.style.position = 'relative'), p = o.offset(), l = Ce.css(e, 'top'), c = Ce.css(e, 'left'), u = ('absolute' === a || 'fixed' === a) && -1 < Ce.inArray('auto', [l, c]), u ? (i = o.position(), s = i.top, r = i.left) : (s = parseFloat(l) || 0, r = parseFloat(c) || 0), Ce.isFunction(t) && (t = t.call(e, n, Ce.extend({}, p))), null != t.top && (d.top = t.top - p.top + s), null != t.left && (d.left = t.left - p.left + r), 'using' in t ? t.using.call(e, d) : o.css(d); } }, Ce.fn.extend({ offset: function (e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function (t) { Ce.offset.setOffset(this, e, t); });
                        var t = { top: 0, left: 0 }, n = this[0], a = n && n.ownerDocument, o, d;
                        if (a)
                            return (o = a.documentElement, !Ce.contains(o, n)) ? t : ('undefined' != typeof n.getBoundingClientRect && (t = n.getBoundingClientRect()), d = ie(a), { top: t.top + (d.pageYOffset || o.scrollTop) - (o.clientTop || 0), left: t.left + (d.pageXOffset || o.scrollLeft) - (o.clientLeft || 0) });
                    }, position: function () {
                        if (this[0]) {
                            var e = { top: 0, left: 0 }, t = this[0], n, a;
                            return 'fixed' === Ce.css(t, 'position') ? a = t.getBoundingClientRect() : (n = this.offsetParent(), a = this.offset(), !Ce.nodeName(n[0], 'html') && (e = n.offset()), e.top += Ce.css(n[0], 'borderTopWidth', !0), e.left += Ce.css(n[0], 'borderLeftWidth', !0)), { top: a.top - e.top - Ce.css(t, 'marginTop', !0), left: a.left - e.left - Ce.css(t, 'marginLeft', !0) };
                        }
                    }, offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && !Ce.nodeName(e, 'html') && 'static' === Ce.css(e, 'position');)
                                e = e.offsetParent;
                            return e || yt;
                        });
                    } }), Ce.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) { var n = /Y/.test(t); Ce.fn[e] = function (a) { return Ge(this, function (e, a, o) { var d = ie(e); return void 0 === o ? d ? t in d ? d[t] : d.document.documentElement[a] : e[a] : void (d ? d.scrollTo(n ? Ce(d).scrollLeft() : o, n ? o : Ce(d).scrollTop()) : e[a] = o); }, e, a, arguments.length, null); }; }), Ce.each(['top', 'left'], function (e, t) {
                    Ce.cssHooks[t] = I(ye.pixelPosition, function (e, n) {
                        if (n)
                            return n = vt(e, t), ht.test(n) ? Ce(e).position()[t] + 'px' : n;
                    });
                }), Ce.each({ Height: 'height', Width: 'width' }, function (e, t) { Ce.each({ padding: 'inner' + e, content: t, "": 'outer' + e }, function (n, a) { Ce.fn[a] = function (a, o) { var d = arguments.length && (n || 'boolean' != typeof a), i = n || (!0 === a || !0 === o ? 'margin' : 'border'); return Ge(this, function (t, n, a) { var o; return Ce.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, re(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e])) : void 0 === a ? Ce.css(t, n, i) : Ce.style(t, n, a, i); }, t, d ? a : void 0, d, null); }; }); }), Ce.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n); }, unbind: function (e, t) { return this.off(e, null, t); }, delegate: function (e, t, n, a) { return this.on(t, e, n, a); }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n); } }), Ce.fn.size = function () { return this.length; }, Ce.fn.andSelf = Ce.fn.addBack, n = [], a = function () { return Ce; }.apply(t, n), !(void 0 !== a && (e.exports = a));
                var Cn = o.jQuery, bn = o.$;
                return Ce.noConflict = function (e) { return o.$ === Ce && (o.$ = bn), e && o.jQuery === Ce && (o.jQuery = Cn), Ce; }, d || (o.jQuery = o.$ = Ce), Ce;
            });
        }, "./src/Components/autoComplete.ts": /*!****************************************!*\
         !*** ./src/Components/autoComplete.ts ***!
         \****************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            var a = this && this.__awaiter || function (e, t, n, a) {
                function o(e) { return e instanceof n ? e : new n(function (t) { t(e); }); }
                return new (n || (n = Promise))(function (n, d) {
                    function i(e) {
                        try {
                            l(a.next(e));
                        }
                        catch (t) {
                            d(t);
                        }
                    }
                    function r(e) {
                        try {
                            l(a['throw'](e));
                        }
                        catch (t) {
                            d(t);
                        }
                    }
                    function l(e) { e.done ? n(e.value) : o(e.value).then(i, r); }
                    l((a = a.apply(e, t || [])).next());
                });
            }, o = this && this.__generator || function (e, n) {
                function a(e) { return function (t) { return o([e, t]); }; }
                function o(a) {
                    if (i)
                        throw new TypeError('Generator is already executing.');
                    for (; d;)
                        try {
                            if (i = 1, r && (l = 2 & a[0] ? r['return'] : a[0] ? r['throw'] || ((l = r['return']) && l.call(r), 0) : r.next) && !(l = l.call(r, a[1])).done)
                                return l;
                            switch ((r = 0, l) && (a = [2 & a[0], l.value]), a[0]) {
                                case 0:
                                case 1:
                                    l = a;
                                    break;
                                case 4: return d.label++, { value: a[1], done: !1 };
                                case 5:
                                    d.label++, r = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = d.ops.pop(), d.trys.pop();
                                    continue;
                                default:
                                    if ((l = d.trys, !(l = 0 < l.length && l[l.length - 1])) && (6 === a[0] || 2 === a[0])) {
                                        d = 0;
                                        continue;
                                    }
                                    if (3 === a[0] && (!l || a[1] > l[0] && a[1] < l[3])) {
                                        d.label = a[1];
                                        break;
                                    }
                                    if (6 === a[0] && d.label < l[1]) {
                                        d.label = l[1], l = a;
                                        break;
                                    }
                                    if (l && d.label < l[2]) {
                                        d.label = l[2], d.ops.push(a);
                                        break;
                                    }
                                    l[2] && d.ops.pop(), d.trys.pop();
                                    continue;
                            }
                            a = n.call(e, d);
                        }
                        catch (t) {
                            a = [6, t], r = 0;
                        }
                        finally {
                            i = l = 0;
                        }
                    if (5 & a[0])
                        throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                }
                var d = { label: 0, sent: function () {
                        if (1 & l[0])
                            throw l[1];
                        return l[1];
                    }, trys: [], ops: [] }, i, r, l, s;
                return s = { next: a(0), "throw": a(1), "return": a(2) }, 'function' == typeof Symbol && (s[Symbol.iterator] = function () { return this; }), s;
            };
            t.__esModule = !0;
            var d = n(/*! jquery */ './node_modules/jquery/dist/jquery.js'), i = n(/*! . */ './src/Components/index.ts'), r = n(/*! ../utils */ './src/utils.ts');
            t['default'] = r.withErrorHandling(function (e) {
                var t = e.options, n = e.value, l = e.onInputChange, s = r.createElement({ tagName: 'div', props: { id: r.elementIdGenerator.gererate(), className: 'auto-complete' } }), p = document.createElement('input');
                p.id = r.elementIdGenerator.gererate(), n && (p.value = n.label);
                var c = function () { return document.getElementById(p.id); }, u = function (e) { c().value = e; }, m = function (e) {
                    return a(this, void 0, void 0, function () {
                        var t;
                        return o(this, function (n) {
                            switch (n.label) {
                                case 0: return [4, l(e)];
                                case 1: return t = n.sent(), g.innerHTML = '', t.forEach(function (e) { var t = r.createElement({ tagName: 'div' }); t.innerHTML = e.label, t.onclick = function () { u(e.label); }, g.appendChild(t); }), [2];
                            }
                        });
                    });
                };
                p.onkeydown = function () { m(this.value); }, p.onfocus = function () { document.getElementById(g.id).style.display = 'block'; };
                var g = i.Dropdown({});
                return g = r.getElementWithClassNames(g, ['auto-complete__dropdown']), g = r.getElementWithStyle(g, [{ key: 'display', value: 'none' }]), g.id = r.elementIdGenerator.gererate(), t.forEach(function (e) { var t = document.createElement('div'); t.onclick = function () { u(e.label); }, t.innerHTML = e.label, g.appendChild(t); }), d(document).click(function (t) { var e = document.getElementById(g.id); 'none' === e.style.display || e.contains(t.target) || c().contains(t.target) || (e.style.display = 'none'); }), s.appendChild(p), s.appendChild(g), s;
            }, 'AutoComplete');
        }, "./src/Components/dialog.ts": /*!**********************************!*\
        !*** ./src/Components/dialog.ts ***!
        \**********************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts');
            t['default'] = a.withErrorHandling(function (e) { var t = e.htmlSrc, n = e.dialogArguments, a = void 0 === n ? {} : n, o = e.height, d = void 0 === o ? 250 : o, i = e.width, r = void 0 === i ? 850 : i; window.showModalDialog(t, a, 'dialogHeight:' + d + 'px;dialogWidth:' + r + 'px'); }, 'Dialog');
        }, "./src/Components/dropdown.ts": /*!************************************!*\
        !*** ./src/Components/dropdown.ts ***!
        \************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts');
            t['default'] = a.withErrorHandling(function (e) { var t = e.children, n = a.createElement({ tagName: 'div' }); return n = a.getElementWithClassNames(n, ['didgah-dropdown']), t && n.appendChild(t), n; }, 'DropDown');
        }, "./src/Components/fieldset.ts": /*!************************************!*\
        !*** ./src/Components/fieldset.ts ***!
        \************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts');
            t['default'] = function () { var e = a.createElement({ tagName: 'fieldset' }); return e; };
        }, "./src/Components/index.ts": /*!*********************************!*\
        !*** ./src/Components/index.ts ***!
        \*********************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./table */ './src/Components/table.ts');
            t.Table = a['default'];
            var o = n(/*! ./tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
            t.TableBaseOnRow = o['default'];
            var d = n(/*! ./dialog */ './src/Components/dialog.ts');
            t.Dialog = d['default'];
            var i = n(/*! ./select */ './src/Components/select.ts');
            t.Select = i['default'];
            var r = n(/*! ./dropdown */ './src/Components/dropdown.ts');
            t.Dropdown = r['default'];
            var l = n(/*! ./autoComplete */ './src/Components/autoComplete.ts');
            t.autoComplete = l['default'];
            var s = n(/*! ./withLabel */ './src/Components/withLabel.ts');
            t.withLabel = s['default'];
        }, "./src/Components/select.ts": /*!**********************************!*\
        !*** ./src/Components/select.ts ***!
        \**********************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts'), o = n(/*! ../DidgahDeferred */ './src/DidgahDeferred.ts'), d = n(/*! ../ajax */ './src/ajax.ts');
            t['default'] = a.withErrorHandling({ component: function (e) { var t = e.options, n = e.value, o = e.name, d = a.createElement({ tagName: 'select', props: { value: n, name: o } }); return t.map(function (e) { var t = a.createElement({ tagName: 'option' }); t.setAttribute('value', e.value), t.innerHTML = e.label, d.appendChild(t); }), d; }, onInit: function (e, t) { var n = t.EntityId, a = t.ReferenceFieldId, i = o['default'].create(); return d.createAjaxReq(e, 'post', { EntityId: n, ReferenceFieldId: a }).done(function (e) { var t = e.map(function (e) { return { value: e.key, label: e.value || '' }; }); i.resolve(t); }), i.promise(); } }, 'Select');
        }, "./src/Components/simple-modal.ts": /*!****************************************!*\
        !*** ./src/Components/simple-modal.ts ***!
        \****************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            function a(e) { var t = document.getElementById(e); t.parentNode && t.parentNode.removeChild(t); }
            t.__esModule = !0;
            var o = n(/*! jquery */ './node_modules/jquery/dist/jquery.js'), d = n(/*! ../utils */ './src/utils.ts');
            t.removeElement = a, t['default'] = function () { function e() { a(t), a(n); } var t = d.elementIdGenerator.gererate(), n = d.elementIdGenerator.gererate(), i = o('.simple-modal'), r = d.createElement({ tagName: 'div', props: { id: n, className: 'simple-modal__overlay' } }); 0 === i.length ? document.getElementById('root').appendChild(r) : i.after(r); var l = (.5 * window.screen.width - 300).toString() + 'px', s = d.createElement({ tagName: 'div', props: { id: t, className: 'simple-modal', style: { left: l } } }), p = d.createElement({ tagName: 'div', props: { className: 'simple-modal__inner' } }), c = d.createElement({ tagName: 'input', props: { type: 'button', value: 'x', className: 'simple-modal__close', onclick: e } }); p.appendChild(c); var u = d.createElement({ tagName: 'div', props: { className: 'simple-modal__content' } }); return p.appendChild(u), s.appendChild(p), { modal: s, onClose: e }; };
        }, "./src/Components/table.ts": /*!*********************************!*\
        !*** ./src/Components/table.ts ***!
        \*********************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts');
            t['default'] = a.withErrorHandling(function (e) {
                for (var t = e.dataSource, n = e.columns, o = n.map(function (e) { return e.dataIndex; }), i = a.createElement({ tagName: 'table' }), r = a.createElement({ tagName: 'thead' }), l = a.createElement({ tagName: 'tr' }), s = a.createElement({ tagName: 'tbody' }), p = 0, c = n; p < c.length; p++) {
                    var u = c[p], m = a.createElement({ tagName: 'th' });
                    m.innerHTML = u.title, l.appendChild(m);
                }
                for (var g = 0, h = t; g < h.length; g++) {
                    for (var f = h[g], y = a.createElement({ tagName: 'tr' }), x = [], C = function (e) {
                        var t = a.createElement({ tagName: 'td' }), o = n.find(function (t) { return t.dataIndex === e; }).renderer;
                        if (o) {
                            var d = o(f);
                            a.isObjectDomElement(d) ? t.appendChild(d) : t.innerHTML = d;
                        }
                        else
                            t.innerHTML = f[e];
                        x.push(t);
                    }, b = 0, v = o, T; b < v.length; b++)
                        T = v[b], C(T);
                    for (var d = 0, N = x, w; d < N.length; d++)
                        w = N[d], y.appendChild(w);
                    s.appendChild(y);
                }
                return r.appendChild(l), i.appendChild(r), i.appendChild(s), i;
            }, 'Table');
        }, "./src/Components/tableBaseOnRow.ts": /*!******************************************!*\
        !*** ./src/Components/tableBaseOnRow.ts ***!
        \******************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts'), o = n(/*! ../extraModel/Components/bundle */ './src/extraModel/Components/bundle.ts');
            t.mapIntoTD = function (e) { return void 0 === e && (e = []), e.map(function (e) { return o.toTD(e); }); }, t['default'] = a.withErrorHandling(function (e) {
                for (var t = e.rows, n = a.createElement({ tagName: 'table', props: { className: 'table-base-row' } }), o = a.createElement({ tagName: 'tbody' }), d = 0, i = t; d < i.length; d++) {
                    for (var r = i[d], l = a.createElement({ tagName: 'tr', props: {} }), s = 0, p = r.renderer, c; s < p.length; s++)
                        c = p[s], l.appendChild(c);
                    o.appendChild(l);
                }
                return n.appendChild(o), n;
            }, 'TableBasedRow');
        }, "./src/Components/withLabel.ts": /*!*************************************!*\
        !*** ./src/Components/withLabel.ts ***!
        \*************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/utils.ts');
            t['default'] = a.withErrorHandling(function (e, t, n) { void 0 === n && (n = window.document); var o = a.createElement({ tagName: 'div', props: { className: 'with-label' } }), d = a.createElement({ tagName: 'label', props: { className: 'with-label__label' } }); return d.innerHTML = t, o.appendChild(d), o.appendChild(e), o; }, 'withLabel');
        }, "./src/DidgahDeferred.ts": /*!*******************************!*\
        !*** ./src/DidgahDeferred.ts ***!
        \*******************************/ /*! no static exports found */ function (e, t) {
            'use strict';
            t.__esModule = !0;
            var n = function () { function e() { var e = this; this.promiseInstance = new Promise(function (t, n) { e.resolver = t, e.rejecter = n; }), this['catch'] = this['catch'].bind(this), this.then = this.then.bind(this), this.done = this.done.bind(this), this.fail = this.fail.bind(this), this.always = this.always.bind(this), this.resolve = this.resolve.bind(this), this.reject = this.reject.bind(this); } return e.create = function () { return new e; }, e.prototype.resolve = function (e) { return this.resolver(e), this; }, e.prototype.reject = function (e) { return this.rejecter(e), this; }, e.prototype.then = function (e, t) { return this.promiseInstance = this.promiseInstance.then(e, t), this; }, e.prototype['catch'] = function (e) { return this.promiseInstance = this.promiseInstance['catch'](e), this; }, e.prototype['finally'] = function (e) { return this.promiseInstance = this.promiseInstance['finally'](e), this; }, e.prototype.done = function (e, t) { return this.then(e, t); }, e.prototype.fail = function (e) { return this['catch'](e); }, e.prototype.always = function (e) { return this['finally'](e); }, e.prototype.promise = function () { return this.promiseInstance; }, e; }();
            t['default'] = n;
            var a = function () { function e(e) { this.task = e; } return e.prototype.run = function () { return this.task(); }, e; }();
            t.Task = a;
        }, "./src/ajax.ts": /*!*********************!*\
        !*** ./src/ajax.ts ***!
        \*********************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! jquery */ './node_modules/jquery/dist/jquery.js');
            t.createAjaxReq = function (e, n, o, d, i) { void 0 === e && (e = 'POST'), void 0 === n && (n = ''), void 0 === o && (o = {}), void 0 === d && (d = {}), void 0 === i && (i = !0); var r = a.ajax({ dataType: 'json', contentType: 'application/json', crossDomain: !0, url: t.createApiUrl(n), headers: { "Access-Control-Allow-Origin": '*' }, method: e, data: i ? JSON.stringify(o) : o }); return r.fail(t.ajaxFailHandler), r; }, t.createApiUrl = function () { return 'replace me with api'; }, t.ajaxFailHandler = function () { console.log('failed'); };
        }, "./src/enums/index.ts": /*!****************************!*\
        !*** ./src/enums/index.ts ***!
        \****************************/ /*! no static exports found */ function (e, t) {
            'use strict';
            t.__esModule = !0;
            var n;
            (function (e) { e[e.IntCode = 1] = 'IntCode', e[e.StringCode = 2] = 'StringCode', e[e.TextCode = 3] = 'TextCode', e[e.BooleanCode = 4] = 'BooleanCode', e[e.DateCode = 5] = 'DateCode', e[e.TimeCode = 6] = 'TimeCode', e[e.MultiSelectCode = 7] = 'MultiSelectCode', e[e.TelCode = 8] = 'TelCode', e[e.EmailCode = 9] = 'EmailCode', e[e.UrlCode = 10] = 'UrlCode', e[e.ImageCode = 11] = 'ImageCode', e[e.FileCode = 12] = 'FileCode', e[e.InsertTimeStampCode = 13] = 'InsertTimeStampCode', e[e.UpdateTimeStampCode = 14] = 'UpdateTimeStampCode', e[e.DecimalCode = 15] = 'DecimalCode', e[e.GenderCode = 16] = 'GenderCode', e[e.DateTimeCode = 17] = 'DateTimeCode', e[e.AutoIncrementCode = 18] = 'AutoIncrementCode', e[e.UniqueidentifierCode = 19] = 'UniqueidentifierCode', e[e.BigDecimalCode = 20] = 'BigDecimalCode', e[e.GridCode = 100] = 'GridCode', e[e.DidgahStaffCode = 1001] = 'DidgahStaffCode', e[e.DidgahContactCode = 1002] = 'DidgahContactCode'; })(n = t.ControlsCode || (t.ControlsCode = {}));
            var a;
            (function (e) { e[e.NumericEqual = 1] = 'NumericEqual', e[e.NumericGreater = 2] = 'NumericGreater', e[e.NumericLess = 3] = 'NumericLess', e[e.NumericGreaterOrEqual = 4] = 'NumericGreaterOrEqual', e[e.NumericLessOrEqual = 5] = 'NumericLessOrEqual', e[e.StringEqual = 6] = 'StringEqual', e[e.StringStartsWith = 7] = 'StringStartsWith', e[e.StringEndsWith = 8] = 'StringEndsWith', e[e.StringContains = 9] = 'StringContains', e[e.DateTimeEqual = 10] = 'DateTimeEqual', e[e.DateTimeGreater = 11] = 'DateTimeGreater', e[e.DateTimeLess = 12] = 'DateTimeLess', e[e.DateTimeGreaterOrEqual = 13] = 'DateTimeGreaterOrEqual', e[e.DateTimeLessOrEqual = 14] = 'DateTimeLessOrEqual'; })(a = t.CompareOptions || (t.CompareOptions = {}));
            var o;
            (function (e) { e[e.Container = 1] = 'Container', e[e.Component = 2] = 'Component'; })(o = t.ControlType || (t.ControlType = {}));
            var d;
            (function (e) { e[e.Fieldset = 1] = 'Fieldset', e[e.FormRow = 2] = 'FormRow'; })(d = t.ContainerCode || (t.ContainerCode = {}));
        }, "./src/extraModel/Components/autoIncrementType.ts": /*!********************************************************!*\
        !*** ./src/extraModel/Components/autoIncrementType.ts ***!
        \********************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.value, d = e.name, i;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': i = a['default']({ value: n, name: d });
                    case 'edit':
                    case 'filter':
                    case 'wizard': i = o.createElement({ tagName: 'input', props: { value: n, name: d } });
                }
                return i;
            };
        }, "./src/extraModel/Components/bigDecimalType.ts": /*!*****************************************************!*\
        !*** ./src/extraModel/Components/bigDecimalType.ts ***!
        \*****************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            function a(e) { return d['default'](o({}, e)); }
            var o = this && this.__assign || function () {
                return o = Object.assign || function (e) {
                    for (var t = 1, a = arguments.length, n; t < a; t++)
                        for (var o in n = arguments[t], n)
                            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e;
                }, o.apply(this, arguments);
            };
            t.__esModule = !0;
            var d = n(/*! ./decimalType */ './src/extraModel/Components/decimalType.ts');
            t['default'] = a;
        }, "./src/extraModel/Components/booleanType.ts": /*!**************************************************!*\
        !*** ./src/extraModel/Components/booleanType.ts ***!
        \**************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.value, d = e.name, i;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': i = a['default']({ value: n ? 'Yes' : 'No', name: d });
                    case 'edit':
                    case 'filter':
                    case 'wizard': i = o.createElement({ tagName: 'input', props: { type: 'checkbox', checked: !!n } });
                }
                return i;
            };
        }, "./src/extraModel/Components/bundle.ts": /*!*********************************************!*\
        !*** ./src/extraModel/Components/bundle.ts ***!
        \*********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            var a = this && this.__assign || function () {
                return a = Object.assign || function (e) {
                    for (var t = 1, a = arguments.length, n; t < a; t++)
                        for (var o in n = arguments[t], n)
                            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e;
                }, a.apply(this, arguments);
            }, o = this && this.__spreadArrays || function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                for (var o = Array(e), d = 0, t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, r = i.length; a < r; a++, d++)
                        o[d] = i[a];
                return o;
            };
            t.__esModule = !0;
            var d = n(/*! ../../utils */ './src/utils.ts'), i = n(/*! ../staticComponents */ './src/extraModel/staticComponents.ts'), r = n(/*! ../../Components/tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), l = n(/*! ../dynamicDataModal */ './src/extraModel/dynamicDataModal.ts'), s = n(/*! ../../DidgahDeferred */ './src/DidgahDeferred.ts'), p = n(/*! ../../ajax */ './src/ajax.ts');
            t.toTD = function (e, t) { void 0 === t && (t = window.document); var n = d.createElement({ tagName: 'td', props: a({}, e.cellProps) }); return n.appendChild(e.input), n; };
            t['default'] = d.withErrorHandling({ component: function (e) {
                    function n(e) { return o([t.toTD(i.removeCell(e, p))], r.mapIntoTD(x.fields.map(function (t) { return a({}, h(a(a({}, t), { formData: w[e][t.name] }))); })), [t.toTD(i.settingCell(e, c))]); }
                    function s() {
                        var e = l['default']({ mode: 'add', fields: x.fields, formData: {}, editCellRenderer: f, onSubmit: function (e) {
                                w.push(e), v && v(w);
                                var n = i.gridRowElement(), o = t.toTD(i.removeCell(w.length - 1, p));
                                n.appendChild(o);
                                var d = function (o) { var d = t.toTD(h(a(a({}, x.fields.find(function (e) { return e.name === o; })), { formData: e[o] }))); n.appendChild(d); };
                                for (var r in e)
                                    d(r);
                                var l = t.toTD(i.settingCell(w.length - 1, c));
                                n.appendChild(l), document.getElementById(N).insertBefore(n, document.getElementById(N).lastChild);
                            } });
                        document.getElementById('root').appendChild(e);
                    }
                    function p(e) { w.splice(e, 1), v && v(w); var t = document.getElementById(N); t.removeChild(t.childNodes[e]); }
                    function c(e) { var t = l['default']({ mode: 'edit', fields: x.fields, formData: w[e], editCellRenderer: f, onSubmit: function (t) { console.log(t), u(e, t); } }); t && document.getElementById('root').appendChild(t); }
                    function u(e, t) {
                        w[e] = t, v && v(w);
                        for (var a = document.getElementById(N), o = i.gridRowElement(), d = 0, r = n(e), l; d < r.length; d++)
                            l = r[d], o.appendChild(l);
                        a.insertBefore(o, a.childNodes[e]), a.removeChild(a.childNodes[e + 1]);
                    }
                    var m = e.headers, g = void 0 === m ? [] : m, h = e.displayCellRenderer, f = e.editCellRenderer, y = e.rowsData, x = void 0 === y ? {} : y, C = e.initialFormData, b = void 0 === C ? [] : C, v = e.onUpdateFormData, T = d.elementIdGenerator.gererate(), N = d.elementIdGenerator.gererate(), w = o(b), E = function () { return o(w.map(function (e, t) { return { renderer: n(t) }; }), [{ renderer: [t.toTD(i.addNewRow(s))] }]); }();
                    return function () {
                        var e = d.createElement({ tagName: 'table', props: { className: 'table-base-row', id: T, dir: 'rtl' } }), t = d.createElement({ tagName: 'thead' }), n = d.createElement({ tagName: 'tr' }), a = d.createElement({ tagName: 'tbody', props: { id: N } });
                        n.appendChild(d.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } })), g.forEach(function (e, t) {
                            var a = 1, o = 1;
                            try {
                                a = 1, o = x.fields[t].col;
                            }
                            catch (e) { }
                            var i = d.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader', rowSpan: a, colSpan: o } });
                            i.innerHTML = e, n.appendChild(i);
                        }), n.appendChild(d.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } }));
                        for (var o = 0, r = E; o < r.length; o++) {
                            for (var l = r[o], s = i.gridRowElement(), p = 0, c = l.renderer, u; p < c.length; p++)
                                u = c[p], s.appendChild(u);
                            a.appendChild(s);
                        }
                        return t.appendChild(n), e.appendChild(t), e.appendChild(a), e;
                    }();
                }, onInit: function (e, t) { var n = t.EntityId, a = t.ReferenceFieldId, o = s['default'].create(); return p.createAjaxReq(e, 'post', { EntityId: n, ReferenceFieldId: a }).done(function (e) { var t = e.map(function (e) { return { value: e.key, label: e.value || '' }; }); o.resolve(t); }), o.promise(); } }, 'DynamicData/Grid');
        }, "./src/extraModel/Components/dateTimeType.ts": /*!***************************************************!*\
        !*** ./src/extraModel/Components/dateTimeType.ts ***!
        \***************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'dateTimeType' }); };
        }, "./src/extraModel/Components/dateType.ts": /*!***********************************************!*\
        !*** ./src/extraModel/Components/dateType.ts ***!
        \***********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'dateType' }); };
        }, "./src/extraModel/Components/decimalType.ts": /*!**************************************************!*\
        !*** ./src/extraModel/Components/decimalType.ts ***!
        \**************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../utils */ './src/extraModel/utils.ts'), o = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), d = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.value, i = e.name, r = e.formatValueForDisplay, l;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': l = o['default']({ value: r && !!n ? a['default'](n) : n, name: i });
                    case 'edit':
                    case 'filter':
                    case 'wizard': l = d.createElement({ tagName: 'input', props: { value: n, name: i } });
                }
                return l;
            };
        }, "./src/extraModel/Components/didgahContactType.ts": /*!********************************************************!*\
        !*** ./src/extraModel/Components/didgahContactType.ts ***!
        \********************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'didgahContactType' }); };
        }, "./src/extraModel/Components/didgahStaffType.ts": /*!******************************************************!*\
        !*** ./src/extraModel/Components/didgahStaffType.ts ***!
        \******************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'didgahStaffType' }); };
        }, "./src/extraModel/Components/emailType.ts": /*!************************************************!*\
        !*** ./src/extraModel/Components/emailType.ts ***!
        \************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.value, n = e.name; return a.createElement({ tagName: 'input', props: { value: t, name: n, style: { direction: 'ltr' } } }); };
        }, "./src/extraModel/Components/fileType.ts": /*!***********************************************!*\
        !*** ./src/extraModel/Components/fileType.ts ***!
        \***********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'fileType' }); };
        }, "./src/extraModel/Components/genderType.ts": /*!*************************************************!*\
        !*** ./src/extraModel/Components/genderType.ts ***!
        \*************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../Components */ './src/Components/index.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.Select({ options: [{ label: '\u0645\u0631\u062F', value: '1' }, { label: '\u0632\u0646', value: '2' }], name: n, value: o }); };
        }, "./src/extraModel/Components/imageType.ts": /*!************************************************!*\
        !*** ./src/extraModel/Components/imageType.ts ***!
        \************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'imageType' }); };
        }, "./src/extraModel/Components/insertTimeStamp.ts": /*!******************************************************!*\
        !*** ./src/extraModel/Components/insertTimeStamp.ts ***!
        \******************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'insertTimeStamp' }); };
        }, "./src/extraModel/Components/intType.ts": /*!**********************************************!*\
        !*** ./src/extraModel/Components/intType.ts ***!
        \**********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.name, d = e.value, i;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': i = a['default']({ name: n, value: d });
                    case 'edit':
                    case 'filter':
                    case 'wizard': i = o.createElement({ tagName: 'input', props: { value: d } });
                }
                return i;
            };
        }, "./src/extraModel/Components/multiSelectType.ts": /*!******************************************************!*\
        !*** ./src/extraModel/Components/multiSelectType.ts ***!
        \******************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'multiSelectType' }); };
        }, "./src/extraModel/Components/readOnlyField.ts": /*!****************************************************!*\
        !*** ./src/extraModel/Components/readOnlyField.ts ***!
        \****************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.value, n = e.name; return a.createElement({ tagName: 'input', props: { name: n, disabled: !0 }, innerText: t }); };
        }, "./src/extraModel/Components/stringType.ts": /*!*************************************************!*\
        !*** ./src/extraModel/Components/stringType.ts ***!
        \*************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.value, n = e.name; return a.createElement({ tagName: 'input', props: { value: t, name: n } }); };
        }, "./src/extraModel/Components/telType.ts": /*!**********************************************!*\
        !*** ./src/extraModel/Components/telType.ts ***!
        \**********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.value, n = e.name; return a.createElement({ tagName: 'input', props: { value: t, name: n, style: { direction: 'ltr' } } }); };
        }, "./src/extraModel/Components/textType.ts": /*!***********************************************!*\
        !*** ./src/extraModel/Components/textType.ts ***!
        \***********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.value, d = e.name, i;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': i = a['default']({ value: n, name: d });
                    case 'edit':
                    case 'filter':
                    case 'wizard': i = o.createElement({ tagName: 'input', props: { value: n } });
                }
                return i;
            };
        }, "./src/extraModel/Components/timeType.ts": /*!***********************************************!*\
        !*** ./src/extraModel/Components/timeType.ts ***!
        \***********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.mode, n = e.name, o = e.value; return a.createElement({ tagName: 'div', innerText: 'timeType' }); };
        }, "./src/extraModel/Components/uniqueidentifierType.ts": /*!***********************************************************!*\
        !*** ./src/extraModel/Components/uniqueidentifierType.ts ***!
        \***********************************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.value, d = e.name, i;
                switch (t) {
                    case 'display':
                    case 'filter-readonly': i = a['default']({ value: n, name: d });
                    case 'edit':
                    case 'filter':
                    case 'wizard': i = o.createElement({ tagName: 'input', props: { value: n, style: { direction: 'ltr' } } });
                }
                return i;
            };
        }, "./src/extraModel/Components/urlType.ts": /*!**********************************************!*\
        !*** ./src/extraModel/Components/urlType.ts ***!
        \**********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../../utils */ './src/utils.ts');
            t['default'] = function (e) { var t = e.value, n = e.name; return a.createElement({ tagName: 'input', props: { value: t, name: n, style: { direction: 'ltr' } } }); };
        }, "./src/extraModel/dynamicDataModal.ts": /*!********************************************!*\
        !*** ./src/extraModel/dynamicDataModal.ts ***!
        \********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            var a = this && this.__assign || function () {
                return a = Object.assign || function (e) {
                    for (var t = 1, a = arguments.length, n; t < a; t++)
                        for (var o in n = arguments[t], n)
                            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e;
                }, a.apply(this, arguments);
            };
            t.__esModule = !0;
            var o = n(/*! ./Components/bundle */ './src/extraModel/Components/bundle.ts'), d = n(/*! ../Components/simple-modal */ './src/Components/simple-modal.ts'), i = n(/*! ../utils */ './src/utils.ts');
            t['default'] = function (e) {
                var t = e.mode, n = e.fields, r = e.formData, l = void 0 === r ? {} : r, s = e.editCellRenderer, p = e.onSubmit, c = d['default'](), u = c.modal, m = c.onClose, g = i.elementIdGenerator.gererate(), h = i.createElement({ tagName: 'form', props: { id: g } });
                n.map(function (e) { var n = i.createElement({ tagName: 'div' }); e.formData = l[e.name], 'add' === t && (l[e.name] = e.Type.IsBundle ? [] : null), e.Type.IsBundle ? n.appendChild(o['default'](a(a({}, e.bundleInfo), { initialFormData: 0 < Object.keys(l).length ? l[e.name] : [], onUpdateFormData: function (t) { e.name && (l[e.name] = t); } }))) : n.appendChild(s(e).input), h.appendChild(n); }), u.appendChild(h);
                var f = i.createElement({ tagName: 'div', props: { className: 'center' } }), y = i.createElement({ tagName: 'input', props: { type: 'submit', className: 'buttonHighlighted', onclick: function () {
                            var e = i.formToJSON('#' + g);
                            for (var t in e)
                                l[t] = e[t];
                            p(a({}, l)), m();
                        } } });
                return f.appendChild(y), u.appendChild(f), u;
            };
        }, "./src/extraModel/extraModel.ts": /*!**************************************!*\
        !*** ./src/extraModel/extraModel.ts ***!
        \**************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./getComponent */ './src/extraModel/getComponent.ts'), o = n(/*! ../enums */ './src/enums/index.ts'), d = n(/*! ../Components/fieldset */ './src/Components/fieldset.ts'), i = n(/*! ../utils */ './src/utils.ts');
            t['default'] = function (e) {
                function t(e) {
                    if (e.Type === o.ControlType.Container)
                        return r(e);
                    if (e.Type === o.ControlType.Component)
                        return n(e);
                    throw 'Renderer was not found for controlType = ' + e.Type;
                }
                function n(e) {
                    var t = a.getComponent(e, p), n = e.Code === o.ControlsCode.FileCode.toString() || o.ControlsCode.ImageCode;
                    if (!t)
                        return null;
                    Object.assign({ mode: u }, e.Attributes, n ? { downloadUrl: g.replace('$fieldName$', e.Label) } : {});
                    return (e.Rules || []).forEach(function (e) { !e.pattern || (e.pattern = new RegExp(e.pattern)); }), t;
                }
                function r(e) {
                    if (e.Code === o.ContainerCode.Fieldset.toString()) {
                        var n = d['default']();
                        return e.Children.forEach(function (e) { n.appendChild(t(e)); }), n;
                    }
                    if (e.Code === o.ContainerCode.FormRow.toString()) {
                        var a = i.createElement({ tagName: 'div' });
                        return e.Children.forEach(function (e) { a.appendChild(t(e)); }), a;
                    }
                }
                var l = e.formDescriptor, s = e.controlFactory, p = void 0 === s ? function () { return null; } : s, c = e.mode, u = void 0 === c ? 'edit' : c, m = e.downloadUrl, g = void 0 === m ? '' : m, h = e.onCreated, f = void 0 === h ? function () { return null; } : h, y = e.form;
                return f({ validate: function () { return new Promise(function (e) { y.validateFields(function (t, n) { e({ errors: t, values: n }); }); }); }, setFieldsValue: function (e) { return y.setFieldsValue(e); } }), function () { return l.map(function (e) { return t(e); }); }();
            };
        }, "./src/extraModel/getComponent.ts": /*!****************************************!*\
        !*** ./src/extraModel/getComponent.ts ***!
        \****************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../enums */ './src/enums/index.ts'), o = n(/*! ./Components/intType */ './src/extraModel/Components/intType.ts'), d = n(/*! ./Components/bigDecimalType */ './src/extraModel/Components/bigDecimalType.ts'), i = n(/*! ./Components/decimalType */ './src/extraModel/Components/decimalType.ts'), r = n(/*! ./Components/textType */ './src/extraModel/Components/textType.ts'), l = n(/*! ./Components/emailType */ './src/extraModel/Components/emailType.ts'), s = n(/*! ./Components/booleanType */ './src/extraModel/Components/booleanType.ts'), p = n(/*! ./Components/dateType */ './src/extraModel/Components/dateType.ts'), c = n(/*! ./Components/dateTimeType */ './src/extraModel/Components/dateTimeType.ts'), u = n(/*! ./Components/multiSelectType */ './src/extraModel/Components/multiSelectType.ts'), m = n(/*! ./Components/uniqueidentifierType */ './src/extraModel/Components/uniqueidentifierType.ts'), g = n(/*! ./Components/autoIncrementType */ './src/extraModel/Components/autoIncrementType.ts'), h = n(/*! ./Components/genderType */ './src/extraModel/Components/genderType.ts'), f = n(/*! ./Components/fileType */ './src/extraModel/Components/fileType.ts'), y = n(/*! ./Components/stringType */ './src/extraModel/Components/stringType.ts'), x = n(/*! ./Components/telType */ './src/extraModel/Components/telType.ts'), C = n(/*! ./Components/timeType */ './src/extraModel/Components/timeType.ts'), b = n(/*! ./Components/urlType */ './src/extraModel/Components/urlType.ts'), v = n(/*! ./Components/insertTimeStamp */ './src/extraModel/Components/insertTimeStamp.ts'), T = n(/*! ./Components/didgahStaffType */ './src/extraModel/Components/didgahStaffType.ts'), N = n(/*! ./Components/didgahContactType */ './src/extraModel/Components/didgahContactType.ts'), w = n(/*! ./Components/imageType */ './src/extraModel/Components/imageType.ts'), E = n(/*! ../utils */ './src/utils.ts');
            t.getComponent = function (e, t) {
                var n = null;
                switch (console.log(e), e.Code) {
                    case a.ControlsCode.IntCode.toString():
                        n = o['default'];
                        break;
                    case a.ControlsCode.BigDecimalCode.toString():
                        n = d['default'];
                        break;
                    case a.ControlsCode.DecimalCode.toString():
                        n = i['default'];
                        break;
                    case a.ControlsCode.TextCode.toString():
                        n = r['default'];
                        break;
                    case a.ControlsCode.EmailCode.toString():
                        n = l['default'];
                        break;
                    case a.ControlsCode.BooleanCode.toString():
                        n = s['default'];
                        break;
                    case a.ControlsCode.DateCode.toString():
                        n = p['default'];
                        break;
                    case a.ControlsCode.DateTimeCode.toString():
                        n = c['default'];
                        break;
                    case a.ControlsCode.MultiSelectCode.toString():
                        n = u['default'];
                        break;
                    case a.ControlsCode.UniqueidentifierCode.toString():
                        n = m['default'];
                        break;
                    case a.ControlsCode.AutoIncrementCode.toString():
                        n = g['default'];
                        break;
                    case a.ControlsCode.GenderCode.toString():
                        n = h['default'];
                        break;
                    case a.ControlsCode.ImageCode.toString():
                        n = w['default'];
                        break;
                    case a.ControlsCode.FileCode.toString():
                        n = f['default'];
                        break;
                    case a.ControlsCode.StringCode.toString():
                        n = y['default'];
                        break;
                    case a.ControlsCode.TelCode.toString():
                        n = x['default'];
                        break;
                    case a.ControlsCode.TimeCode.toString():
                        n = C['default'];
                        break;
                    case a.ControlsCode.UrlCode.toString():
                        n = b['default'];
                        break;
                    case a.ControlsCode.GridCode.toString():
                        n = function () { return E.createElement({ tagName: 'span', innerText: 'GridType' }); };
                        break;
                    case a.ControlsCode.InsertTimeStampCode.toString():
                        n = v['default'];
                        break;
                    case a.ControlsCode.DidgahStaffCode.toString():
                        n = T['default'];
                        break;
                    case a.ControlsCode.DidgahContactCode.toString():
                        n = N['default'];
                        break;
                    default: n = t(e);
                }
                return n({});
            };
        }, "./src/extraModel/staticComponents.ts": /*!********************************************!*\
        !*** ./src/extraModel/staticComponents.ts ***!
        \********************************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            function a(e) { var t = o.createElement({ tagName: 'div' }); return t.appendChild(e), t; }
            t.__esModule = !0;
            var o = n(/*! ../utils */ './src/utils.ts');
            t.addNewRow = function (e) { return { input: a(o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__add-button', type: 'button', value: '+', onclick: function () { e(); } } })), cellProps: { className: 'text-center' } }; }, t.removeCell = function (e, t) { return { input: a(o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__remove-button', type: 'button', value: 'x', onclick: function () { t(e); } } })), cellProps: { className: 'text-center' } }; }, t.settingCell = function (e, t) { return { input: a(o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__setting-button', type: 'button', value: '...', onclick: function () { t(e); } } })), cellProps: { className: 'text-center' } }; }, t.wrapDiv = a, t.gridRowElement = function () { return o.createElement({ tagName: 'tr', props: { className: 'listRowNormal' } }); };
        }, "./src/extraModel/utils.ts": /*!*********************************!*\
        !*** ./src/extraModel/utils.ts ***!
        \*********************************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ../enums */ './src/enums/index.ts');
            t.DynamicDataComponentRules = { Email: '^\\s*(((?!\\.)[a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9\\-]+\\.)+([a-zA-Z]{2,}))\\s*$', Guid: '^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$', InputDecimal: '^[0-9]+\\.[0-9]+$', InputNumber: '/^d+$/' }, t['default'] = function (e, t, n, o) {
                t = t || 3, n = n || '.', o = o || ',', e = e.toString();
                var d = e.split(n), a = d[0], r = d[1], l = '';
                if ('undefined' != typeof a) {
                    for (var s = a.length - 1; 0 <= s; s--)
                        l += a.charAt(s);
                    l = l.replace(new RegExp('(\\d{' + t + '})', 'g'), '$1' + o), l.slice(-o.length) == o && (l = l.slice(0, -o.length)), a = '';
                    for (var s = l.length - 1; 0 <= s; s--)
                        a += l.charAt(s);
                    'undefined' != typeof r && 0 <= r.length && (a += n + r);
                }
                return a;
            }, t.getDesiredValidationRules = function (e, t, n) {
                var o = [];
                switch (e) {
                    case a.ControlsCode.EmailCode.toString():
                        o.push({ type: 'email' });
                        break;
                    case a.ControlsCode.BooleanCode.toString():
                        o.push({ type: 'boolean' });
                        break;
                    case a.ControlsCode.DateCode.toString():
                    case a.ControlsCode.DateTimeCode.toString(): break;
                    case a.ControlsCode.UrlCode.toString():
                        o.push({ type: 'url' });
                        break;
                    case a.ControlsCode.UniqueidentifierCode.toString(): o.push({ pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i });
                }
                return t && o.push({ required: !0 }), !!n && n.length && o.push.apply(o, n), o;
            };
        }, "./src/index.ts": /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            t.__esModule = !0;
            var a = n(/*! ./extraModel/Components/bundle */ './src/extraModel/Components/bundle.ts');
            t.DynamicDataGrid = a['default'];
            var o = n(/*! ./utils */ './src/utils.ts');
            t.createElement = o.createElement, t.renderIntoRoot = o.renderIntoRoot, t.formToJSON = o.formToJSON, t.elementIdGenerator = o.elementIdGenerator, t.dialogFormToJSON = o.dialogFormToJSON, t.currentDocumentObj = o.currentDocumentObj;
            var d = n(/*! ./Components */ './src/Components/index.ts');
            t.withLabel = d.withLabel, t.autoComplete = d.autoComplete;
            var i = n(/*! ./Components/tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
            t.mapIntoTD = i.mapIntoTD;
            var r = n(/*! ./DidgahDeferred */ './src/DidgahDeferred.ts');
            t.DidgahDeferred = r['default'];
            var l = n(/*! ./ajax */ './src/ajax.ts');
            t.createApiUrl = l.createApiUrl, t.createAjaxReq = l.createAjaxReq, function (e) {
                for (var n in e)
                    t.hasOwnProperty(n) || (t[n] = e[n]);
            }(n(/*! ./enums */ './src/enums/index.ts'));
            var s = n(/*! ./extraModel/extraModel */ './src/extraModel/extraModel.ts');
            t.ExtraModel = s['default'];
        }, "./src/utils.ts": /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/ /*! no static exports found */ function (e, t, n) {
            'use strict';
            function a(e) { return 'object' == typeof e ? 0 === e.length : !!!e; }
            t.__esModule = !0;
            var o = n(/*! jquery */ './node_modules/jquery/dist/jquery.js');
            t.currentDocumentObj = { currentDocument: null, getCurrentDocument: function () { return this.currentDocument; }, setCurentDocument: function (e) { this.currentDocument = e; } }, t.container = document.getElementById('root'), t.isObjectDomElement = function (e) { return e.scopeName && 'HTML' === e.scopeName; }, t.getElementWithStyle = function (e, t) { var n = e.cloneNode(); return t.forEach(function (e) { n.style[e.key] = e.value; }), n; }, t.renderIntoRoot = function (e) { t.container.appendChild(e); }, t.getElementWithClassNames = function (e, t) { var n = e.cloneNode(!0); return t.forEach(function (e) { n.className += ' ' + e; }), n; }, t.elementIdGenerator = { busyIds: [], gererate: function () { var e = Math.random().toString(36).substr(2, 9); return 0 !== document.querySelectorAll('#' + e).length || this.busyIds.find(function (t) { return t === e; }) ? void this.gererate() : (this.busyIds.push(e), e.toString()); } }, t.createElement = function (e) {
                var n = e.tagName, a = e.props, d = e.onMount, i = e.innerText, r = window.document.createElement(n), l = t.elementIdGenerator;
                for (var s in a)
                    if ('style' === s)
                        for (var p in a[s])
                            r.style[p] = a[s][p];
                    else
                        r[s] = a[s];
                return d && ((!a || !a.id) && (r.id = l.gererate()), o(r.id).ready(function () { d(); })), i && (r.innerText = i), r;
            }, t.withErrorHandling = function (e, t) {
                return function () {
                    for (var n = [], a = 0; a < arguments.length; a++)
                        n[a] = arguments[a];
                    try {
                        return e.apply(void 0, n);
                    }
                    catch (n) {
                        alert('error happend in ' + t + ' ' + n.message || false);
                    }
                };
            }, t.formToJSON = function (e) { var t = {}; return document.querySelectorAll(e + ' input').forEach(function (e) { var n = e.getAttribute('fieldName'); n && (t[n] = e.getAttribute('value')); }), t; }, t.dialogFormToJSON = function () { var e = {}; return o('input[type="text"]').each(function () { var t = o(this), n = t.attr('fieldName'); e[n] = e[n] ? e[n] + ',' + t.val() : t.val(); }), e; }, t.isEmpty = a, t.validate = function (e, t) {
                var n = e.rules, o = e.messages, d = Object.keys(n).filter(function (e) { return n[e].isRequired; });
                d.forEach(function (e) {
                    if (a(t[e])) {
                        var n = document.getElementById(e), d = document.createElement('span');
                        d.innerHTML = o[e].isRequired, n.after(d);
                    }
                });
                var i = Object.keys(n).filter(function (e) { return n[e].pattern; });
                i.forEach(function (e) {
                    if (!a(t[e]) && n[e].pattern.test(t[e])) {
                        var d = document.getElementById(e), i = document.createElement('span');
                        i.innerHTML = o[e].pattern, d.after(i);
                    }
                });
            }, t.importModule = function (e) { var t = e; return new Promise(function (e, n) { var a = document.createElement('script'); a.src = t, a.async = !0, a.onload = function () { e(), a.remove(); }, a.onerror = function () { n(new Error('Failed to load module script with URL ' + t)), a.remove(); }, document.head.appendChild(a); }); };
        }, 0: /*!****************************!*\
        !*** multi ./src/index.ts ***!
        \****************************/ /*! no static exports found */ function (e, t, n) { e.exports = n(/*! ./src/index.ts */ './src/index.ts'); } });
});



/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts":
/*!********************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function autoCompleteViewer(_a) {
    var value = _a.value;
    var component = lib.createElement({ tagName: 'input', props: { disabled: true, value: value } });
    return component;
}
exports["default"] = {
    component: autoCompleteViewer,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/bundleViewer.ts":
/*!**************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/bundleViewer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function bundleViewer(_a) {
    var value = _a.value;
    var component = lib.createElement({
        tagName: "div",
        props: { disabled: true, value: "#" },
    });
    return component;
}
exports["default"] = {
    component: bundleViewer,
    events: {
        onInit: function () { return ""; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts":
/*!******************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function emptyBlockViewer() {
    var component = lib.createElement({ tagName: 'div' });
    return component;
}
exports["default"] = {
    component: emptyBlockViewer,
    events: {
        onInit: function () { return ""; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/index.ts":
/*!*******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var autoCompleteViewer_1 = __webpack_require__(/*! ./autoCompleteViewer */ "./src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts");
var emptyBlockViewer_1 = __webpack_require__(/*! ./emptyBlockViewer */ "./src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts");
var labelNumberWithSeperator_1 = __webpack_require__(/*! ./labelNumberWithSeperator */ "./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts");
var WIDGETS = {
    'AutoCompleteViewer': {
        component: autoCompleteViewer_1["default"].component,
        events: autoCompleteViewer_1["default"].events,
        setting: function () { return ''; },
    },
    'EmptyBlockViewer': {
        component: emptyBlockViewer_1["default"].component,
    },
    'LabelNumberWithSeperator': {
        component: labelNumberWithSeperator_1["default"].component,
        events: labelNumberWithSeperator_1["default"].events,
        setting: function () { return ''; }
    },
};
var defaultWidget = {
    events: {
        onInit: function (widgetId, attributes) {
            return '';
        }
    },
    getConsistentRules: function () { return []; }
};
exports["default"] = (function (id) { return WIDGETS[id] && __assign(__assign({}, defaultWidget), WIDGETS[id]); });


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/label.ts":
/*!*******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/label.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function label(_a) {
    var value = _a.value;
    return lib.createElement({
        tagName: "div",
        innerText: value,
    });
}
exports.label = label;
exports["default"] = {
    component: label,
    events: {
        onInit: function () { return ""; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts":
/*!**************************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function labelNumberWithSeperator(_a) {
    var value = _a.value;
    return lib.createElement({
        tagName: 'div',
        innerText: !!value && value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
    });
}
exports.labelNumberWithSeperator = labelNumberWithSeperator;
exports["default"] = {
    component: labelNumberWithSeperator,
    events: {
        onInit: function () { return ""; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts":
/*!************************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
exports["default"] = {
    component: lib.autoComplete,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts":
/*!***********************************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function AutoCompleteSettingForm(_a) {
    return gulp_es3_typescript_library_1.createElement({ tagName: '' });
}
exports["default"] = AutoCompleteSettingForm;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts":
/*!****************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function Checkbox(_a) {
    var checked = _a.checked, name = _a.name;
    var component = lib.createElement({
        tagName: 'input',
        props: { checked: true, disabled: true, name: name },
    });
    return component;
}
exports["default"] = {
    component: lib.autoComplete,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Email/email.ts":
/*!**********************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Email/email.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function Email(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: 'input',
        props: { value: value, name: name },
    });
    return component;
}
exports["default"] = {
    component: Email,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts":
/*!********************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function EmptyBlock(_a) {
    return gulp_es3_typescript_library_1.createElement({ tagName: '' });
}
exports["default"] = {
    component: EmptyBlock
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Guid/guid.ts":
/*!********************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Guid/guid.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function guid(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: "input",
        props: {
            value: value,
            name: name,
            placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
    });
    return component;
}
exports["default"] = {
    component: guid,
    events: {
        onInit: function () { return ""; },
    },
    getConsistentRules: function () { return [
        {
            pattern: "^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$",
        },
    ]; },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts":
/*!************************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function inputDecimal(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: "input",
        props: { value: value, name: name },
    });
    return component;
}
exports["default"] = {
    component: inputDecimal,
    events: {
        onInit: function () { return ''; },
    },
    getConsistentRules: function () { return [{ pattern: "^[0-9]+\\.[0-9]+$" }]; },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts":
/*!**********************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function inputNumber(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: "input",
        props: { value: value, name: name },
    });
    return component;
}
exports["default"] = {
    component: inputNumber,
    events: {
        onInit: function () { return ""; },
    },
    getConsistentRules: function () { return [
        {
            pattern: "((https://)|| (http://))?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)",
        },
    ]; },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts":
/*!****************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function textArea(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: 'input',
        props: { value: value, name: name },
    });
    return component;
}
exports["default"] = {
    component: textArea,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts":
/*!**************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var lib = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function textBox(_a) {
    var value = _a.value, name = _a.name;
    var component = lib.createElement({
        tagName: 'input',
        props: { value: value, name: name },
    });
    return component;
}
exports["default"] = {
    component: textBox,
    events: {
        onInit: function () { return ''; },
    },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts":
/*!*************************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function TextboxSettingForm(_a) {
    return gulp_es3_typescript_library_1.createElement({ tagName: '' });
}
exports["default"] = TextboxSettingForm;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/Url/url.ts":
/*!******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/Url/url.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function Url(_a) {
    return gulp_es3_typescript_library_1.createElement({ tagName: "" });
}
exports["default"] = {
    component: Url,
    events: {
        onInit: function () { return ""; },
    },
    getConsistentRules: function () { return [
        {
            pattern: "((https://)|| (http://))?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)",
        },
    ]; },
};


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/generalSetting.ts":
/*!*************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/generalSetting.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function GeneralSetting(_a) {
    return gulp_es3_typescript_library_1.createElement({ tagName: '' });
}
exports["default"] = GeneralSetting;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/Edit/index.ts":
/*!****************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/Edit/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var textbox_1 = __webpack_require__(/*! ./Textbox/textbox */ "./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts");
var textarea_1 = __webpack_require__(/*! ./Textarea/textarea */ "./src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts");
var autoComplete_1 = __webpack_require__(/*! ./AutoComplete/autoComplete */ "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts");
var email_1 = __webpack_require__(/*! ./Email/email */ "./src/DynamicDataModel/Widgets/Edit/Email/email.ts");
var url_1 = __webpack_require__(/*! ./Url/url */ "./src/DynamicDataModel/Widgets/Edit/Url/url.ts");
var checkbox_1 = __webpack_require__(/*! ./Checkbox/checkbox */ "./src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts");
var inputNumber_1 = __webpack_require__(/*! ./InputNumber/inputNumber */ "./src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts");
var guid_1 = __webpack_require__(/*! ./Guid/guid */ "./src/DynamicDataModel/Widgets/Edit/Guid/guid.ts");
var InputDecimal_1 = __webpack_require__(/*! ./InputDecimal/InputDecimal */ "./src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts");
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
var autoCompleteSettingForm_1 = __webpack_require__(/*! ./AutoComplete/autoCompleteSettingForm */ "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts");
var textboxSettingForm_1 = __webpack_require__(/*! ./Textbox/textboxSettingForm */ "./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts");
var generalSetting_1 = __webpack_require__(/*! ./generalSetting */ "./src/DynamicDataModel/Widgets/Edit/generalSetting.ts");
var emptyBlock_1 = __webpack_require__(/*! ./EmptyBlock/emptyBlock */ "./src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts");
var WIDGETS = {
    TextBox: {
        component: textbox_1["default"].component,
        setting: textboxSettingForm_1["default"],
        events: textbox_1["default"].events,
    },
    TextArea: {
        component: textarea_1["default"].component,
        setting: textboxSettingForm_1["default"],
        events: textarea_1["default"].events,
    },
    AutoComplete: {
        component: autoComplete_1["default"].component,
        setting: autoCompleteSettingForm_1["default"],
        events: autoComplete_1["default"].events,
    },
    Email: {
        component: email_1["default"].component,
        setting: generalSetting_1["default"],
        events: email_1["default"].events,
        getConsistentRules: email_1["default"].getConsistentRules,
    },
    Url: {
        component: url_1["default"].component,
        setting: generalSetting_1["default"],
        events: url_1["default"].events,
        getConsistentRules: url_1["default"].getConsistentRules,
    },
    Checkbox: {
        component: checkbox_1["default"].component,
        setting: generalSetting_1["default"],
        events: checkbox_1["default"].events,
    },
    InputNumber: {
        component: inputNumber_1["default"].component,
        setting: function () { return ""; },
        events: inputNumber_1["default"].events,
    },
    Guid: {
        component: guid_1["default"].component,
        setting: function () { return ""; },
        events: guid_1["default"].events,
        getConsistentRules: guid_1["default"].getConsistentRules,
    },
    InputDecimal: {
        component: InputDecimal_1["default"].component,
        setting: function () { return ""; },
        events: InputDecimal_1["default"].events,
        getConsistentRules: InputDecimal_1["default"].getConsistentRules,
    },
    EmptyBlock: {
        component: emptyBlock_1["default"].component,
    },
    TableExEditor: {
        component: function (_a) {
            return gulp_es3_typescript_library_1.createElement({
                tagName: "div",
                props: { className: "TableExEditor" },
                innerText: "i'm TableExEditor",
            });
        },
    },
};
var defaultWidget = {
    events: {
        onInit: function (widgetId, attributes) {
            var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
            dfd.resolve();
            return dfd.promise();
        },
    },
    getConsistentRules: function () { return []; },
};
exports["default"] = (function (id) {
    return WIDGETS[id] && __assign(__assign({}, defaultWidget), WIDGETS[id]);
});


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/FormRenderer.ts":
/*!******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/FormRenderer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// import { ExtraModel } from "didgah/components";
var utils_1 = __webpack_require__(/*! ../utils */ "./src/DynamicDataModel/utils.ts");
var widgetFactory_1 = __webpack_require__(/*! ../widgetFactory */ "./src/DynamicDataModel/widgetFactory.ts");
var fieldTypeGuids_1 = __webpack_require__(/*! ../fieldTypeGuids */ "./src/DynamicDataModel/fieldTypeGuids.ts");
var dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/DynamicDataModel/dispatcher.ts");
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
var enums_1 = __webpack_require__(/*! ../enums */ "./src/DynamicDataModel/enums/index.ts");
var widgetIdList_1 = __webpack_require__(/*! ./widgetIdList */ "./src/DynamicDataModel/Widgets/widgetIdList.ts");
function FormRenderer(_a) {
    var designedLayout = _a.designedLayout, setExtraModelFormArgs = _a.setExtraModelFormArgs;
    var dispatcher = new dispatcher_1.Dispatcher();
    var widgetFactory;
    var formDescriptor = [];
    var softwareLayoutItems = designedLayout.LayoutItems.filter(function (x) { return x.FieldInstance.Type.SoftwareGuid !== utils_1.softwareGuid.toLowerCase(); });
    if (softwareLayoutItems.length > 0) {
        // GeneralWidgetFactory
        widgetFactory = widgetFactory_1["default"](
        // this.props.context.commandHandler.getDidgahSoftwares(),
        [], softwareLayoutItems[0].FieldInstance.Type.SoftwareGuid);
    }
    else {
        // CommonWidgetFactory
        widgetFactory = widgetFactory_1["default"]([], null);
    }
    function prepareFormDescriptor() {
        var LayoutItems = designedLayout.LayoutItems, DesigendForm = designedLayout.DesigendForm;
        // const items = JSON.parse(DesigendForm) as Array<Item>;
        var items = DesigendForm;
        var _loop_1 = function (item) {
            if (item.isFieldBindableWidget) {
                var correspondingLayoutItem_1 = LayoutItems.filter(function (x) { return x.FieldInstance.Name === item.correspondingFieldInstance.Name; })[0];
                if (item.correspondingFieldInstance.Type.Guid ===
                    fieldTypeGuids_1.FieldTypeGuids.RelationType) {
                    item.control.Attributes["EntityId"] =
                        correspondingLayoutItem_1.Relation.EntityId;
                    item.control.Attributes["ReferenceFieldId"] =
                        correspondingLayoutItem_1.Relation.ReferenceFieldId;
                }
                else if (item.correspondingFieldInstance.Type.Guid ===
                    fieldTypeGuids_1.FieldTypeGuids.BundleType) {
                    item.control.Attributes["ReferenceFieldId"] =
                        correspondingLayoutItem_1.FieldInstance.FieldInstanceId;
                    item.control.Attributes["dataEntryLayoutItems"] =
                        correspondingLayoutItem_1.LayoutItems;
                    var oldSelectedFields = item.control.Attributes["selectedFields"];
                    var newSelectedFields_1 = [];
                    oldSelectedFields.forEach(function (oldfield) {
                        var newField = correspondingLayoutItem_1.LayoutItems.find(function (x) { return x.FieldInstance.Name === oldfield.Name; });
                        if (!oldfield) {
                            newSelectedFields_1.push(newField.FieldInstance);
                        }
                        else {
                            newSelectedFields_1.push(oldfield);
                        }
                    });
                    item.control.Attributes["selectedFields"] = newSelectedFields_1;
                }
                else {
                    item.control.Attributes["ReferenceFieldId"] =
                        correspondingLayoutItem_1.FieldInstance.FieldInstanceId;
                    item.control.Attributes["layoutItemDefaultValue"] =
                        correspondingLayoutItem_1.LayoutItemDefaultValue;
                }
                //this part should not be merged to release version
                //this part is used to revise setting of inputnumber and textbox widget
                //in case of having 0 zero value for both max and min rules
                var rules_1 = item.control["Rules"];
                if (!!rules_1) {
                    rules_1.forEach(function (maxRule) {
                        if (Object.keys(maxRule).filter(function (x) { return x === "max"; }).length > 0) {
                            rules_1.forEach(function (minRule) {
                                if (Object.keys(minRule).filter(function (x) { return x === "min"; }).length > 0) {
                                    if (maxRule["max"] + minRule["min"] == 0) {
                                        maxRule["max"] = minRule["min"] = undefined;
                                    }
                                }
                            });
                        }
                    });
                }
                //////////////////////////////
                //configure widget's rules
                if (!!rules_1 &&
                    item.editWidgetId == widgetIdList_1["default"].InputNumberWithSeperator) {
                    rules_1.forEach(function (RuleObj) {
                        Object.keys(RuleObj).forEach(function (x) {
                            switch (x) {
                                case "max":
                                    RuleObj["type"] = "number";
                                    RuleObj["message"] = exports.translate("MaximumNumberMustBe").replace("{0}", RuleObj["max"]);
                                    break;
                                case "min":
                                    RuleObj["type"] = "number";
                                    RuleObj["message"] = exports.translate("MinimumNumberMustBe").replace("{0}", RuleObj["min"]);
                                    break;
                            }
                        });
                    });
                }
                // const widgetCallback = {
                // 	softwareGuid: item.correspondingFieldInstance.Type.SoftwareGuid,
                // 	widgetId: item.control.Code,
                // 	fieldInstanceName: item.correspondingFieldInstance.Name,
                // 	attributes: item.control.Attributes,
                // 	callback: widgetFactory.onInit.bind(widgetFactory),
                // } as WidgetCallback;
                // dispatcher.registerCallback(widgetCallback);
            }
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_1(item);
        }
        var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
        // dispatcher.invokeAllCallbacks().done((result: Array<any>) => {
        // for (let item of items) {
        // 	if (item.isFieldBindableWidget) {
        // 		const newAttributes = {
        // 			...item.control.Attributes,
        // 			onInitData: result.filter(
        // 				(x) =>
        // 					x.fieldInstanceName === item.correspondingFieldInstance.Name
        // 			)[0].data,
        // 		};
        // 		item.control.Attributes = newAttributes;
        // 	}
        // }
        // dfd.resolve(generateFormDescriptor(items));
        // });
        dfd.resolve(generateFormDescriptor(items));
        return dfd;
    }
    function controlFactroy(component) {
        var Targetwidget = widgetFactory.getWidget(component.SoftwareGuid, component.Code);
        return Targetwidget;
        // return <Targetwidget {...component.Attributes} isOnRuntime={true} />;
    }
    function generateFormDescriptor(items) {
        var omitColComponent = function (flatItems) {
            var getParentId = function (parentId) {
                return flatItems.filter(function (x) { return x.id == parentId; })[0].parentId;
            };
            var newItems = [];
            flatItems.forEach(function (item) {
                if (item.control.Type == gulp_es3_typescript_library_1.ControlType.Component)
                    item.parentId = getParentId(item.parentId);
                newItems.push(item);
            });
            return newItems;
        };
        var toHierarchy = function (flatitems, parentId) {
            var temp = [];
            flatitems
                .filter(function (x) { return x.parentId === parentId; })
                .forEach(function (x) {
                if (x.control.Type === gulp_es3_typescript_library_1.ControlType.Container) {
                    switch (x.control.Code) {
                        case enums_1.DesignerContainerCode[enums_1.DesignerContainerCode.Col]:
                            x.control.Code = enums_1.DesignerContainerCode.Col.toString();
                            break;
                        case enums_1.DesignerContainerCode[enums_1.DesignerContainerCode.FormRow]:
                            x.control.Code = enums_1.DesignerContainerCode.FormRow.toString();
                            break;
                        case enums_1.DesignerContainerCode[enums_1.DesignerContainerCode.Fieldset]:
                            x.control.Code = enums_1.DesignerContainerCode.Fieldset.toString();
                            break;
                    }
                    x.control.Children = toHierarchy(flatitems, x.id);
                }
                if (x.control.Type === gulp_es3_typescript_library_1.ControlType.Container) {
                    if (x.control.Code != enums_1.DesignerContainerCode.Col.toString()) {
                        x.control.Identifier = Math.random().toString();
                        temp.push(x);
                    }
                }
                else {
                    if (!x.control.DataIndex ||
                        x.control.DataIndex == "")
                        x.control.DataIndex = "undefined";
                    x.control.Label = x.control.Attributes["label"];
                    temp.push(x);
                }
                temp.sort(function (a, b) { return a.orderIndex - b.orderIndex; });
            });
            var ret = temp.map(function (item) {
                return item.control;
            });
            return ret;
        };
        var list = toHierarchy(omitColComponent(items), undefined);
        return list;
    }
    function componentDidMount() {
        widgetFactory.importModules().done(function () {
            prepareFormDescriptor().done(function (result) {
                // console.log(result);
                var root = document.getElementById("root");
                gulp_es3_typescript_library_1.ExtraModel({
                    formDescriptor: result,
                    mode: "edit",
                    form: {},
                    controlFactory: controlFactroy,
                }).forEach(function (cm) {
                    console.log("forEach");
                    root.appendChild(cm);
                    // formDescriptor = result;
                });
                // .fail();
            });
        });
    }
    function onFormCreate(extraModelFormArgs) {
        if (!!designedLayout.formData) {
            extraModelFormArgs.setFieldsValue(designedLayout.formData.KeyValues);
        }
        setExtraModelFormArgs(extraModelFormArgs);
    }
    componentDidMount();
    function render() {
        // return (
        // 	<React.Fragment>
        // 		{!this.state.loadingModules &&
        // 			<ExtraModel
        // 				formDescriptor={this.formDescriptor}
        // 				mode='edit'
        // 				controlFactory={this.controlFactroy}
        // 				onCreated={this.onFormCreate}
        // 			/>}
        // 	</React.Fragment>
        // )
    }
}
exports.translate = function (props) {
    return "NOT TRANSLATED";
};
exports["default"] = FormRenderer;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/tableExDisplayFields.ts":
/*!**************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/tableExDisplayFields.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
function skipComponentComponent() {
    return gulp_es3_typescript_library_1.createElement({ tagName: "span", innerText: "i skipped" });
}
exports.skipComponentComponent = skipComponentComponent;
function fnSelectIndividualStore(config) {
    return skipComponentComponent();
}
function fnSelectStaff(config) {
    return skipComponentComponent();
}
function SelectIndividualEditorFieldFn() {
    return skipComponentComponent();
}
function RigidNumberEditorFieldFn() {
    return skipComponentComponent();
}
function TextEditorFieldFn() {
    return skipComponentComponent();
}
function NumberEditorFieldFn() {
    return skipComponentComponent();
}
function DatePickerEditorFieldFn() {
    return skipComponentComponent();
}
function TimePickerEditorFieldFn() {
    return skipComponentComponent();
}
function DateTimePickerEditorFieldFn() {
    return skipComponentComponent();
}
function CheckboxEditorFieldFn() {
    return skipComponentComponent();
}
function CustomEditorFieldFn() {
    return skipComponentComponent();
}
var editorFields = {
    TextBox: TextEditorFieldFn,
    Email: TextEditorFieldFn,
    Url: TextEditorFieldFn,
    TextArea: TextEditorFieldFn,
    SelectStaff: SelectIndividualEditorFieldFn,
    InputNumber: NumberEditorFieldFn,
    InputNumberWithSeperator: CustomEditorFieldFn,
    DatePicker: DatePickerEditorFieldFn,
    TimePicker: TimePickerEditorFieldFn,
    DateTimePicker: DateTimePickerEditorFieldFn,
    Checkbox: CheckboxEditorFieldFn,
    Switch: CheckboxEditorFieldFn,
    InputDecimal: RigidNumberEditorFieldFn,
    Guid: CustomEditorFieldFn,
    ExtensionLite: CustomEditorFieldFn,
    SignatureSelector: CustomEditorFieldFn,
    TableExEditor: CustomEditorFieldFn,
};
exports["default"] = editorFields;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/tableExEditorFields.ts":
/*!*************************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/tableExEditorFields.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tableExDisplayFields_1 = __webpack_require__(/*! ./tableExDisplayFields */ "./src/DynamicDataModel/Widgets/tableExDisplayFields.ts");
function TextViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function SelectIndividualViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function DateViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function TimeViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function DateTimeViewerFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function BooleanViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function DecimalViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function CustomViewerFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
function CustomeViewerInputNumberWithSeperatorFieldFn() {
    return tableExDisplayFields_1.skipComponentComponent();
}
var displayFields = {
    TextBox: TextViewerFieldFn,
    Email: TextViewerFieldFn,
    Url: TextViewerFieldFn,
    TextArea: TextViewerFieldFn,
    SelectStaff: SelectIndividualViewerFieldFn,
    InputNumber: TextViewerFieldFn,
    InputNumberWithSeperator: CustomeViewerInputNumberWithSeperatorFieldFn,
    DatePicker: DateViewerFieldFn,
    TimePicker: TimeViewerFieldFn,
    DateTimePicker: DateTimeViewerFn,
    Checkbox: BooleanViewerFieldFn,
    Switch: BooleanViewerFieldFn,
    InputDecimal: DecimalViewerFieldFn,
    Guid: TextViewerFieldFn,
    ExtensionLite: CustomViewerFieldFn,
    AutoComplete: CustomViewerFieldFn,
    PopupSelector: CustomViewerFieldFn,
    SignatureSelector: CustomViewerFieldFn,
    TableExEditor: CustomViewerFieldFn,
};
exports["default"] = displayFields;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/widgetFactory.ts":
/*!*******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/widgetFactory.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var textbox_1 = __webpack_require__(/*! ./Edit/Textbox/textbox */ "./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts");
var textboxSettingForm_1 = __webpack_require__(/*! ./Edit/Textbox/textboxSettingForm */ "./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts");
var index_1 = __webpack_require__(/*! ./Edit/index */ "./src/DynamicDataModel/Widgets/Edit/index.ts");
var index_2 = __webpack_require__(/*! ./Display/index */ "./src/DynamicDataModel/Widgets/Display/index.ts");
var defaultWidget = {
    component: textbox_1["default"].component,
    setting: textboxSettingForm_1["default"],
    events: textbox_1["default"].events,
};
exports["default"] = (function (id) {
    var widgetWrapper = index_1["default"](id) || index_2["default"](id);
    return (widgetWrapper || defaultWidget);
});


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/widgetIdList.ts":
/*!******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/widgetIdList.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var widgetIdList = {
    TextBox: 'TextBox',
    TextArea: 'TextArea',
    AutoComplete: 'AutoComplete',
    AutoCompleteViewer: 'AutoCompleteViewer',
    TableExEditor: 'TableExEditor',
    Email: 'Email',
    PopupSelector: 'PopupSelector',
    EmptyBlock: 'EmptyBlock',
    EmptyBlockViewer: 'EmptyBlockViewer',
    ExtensionLite: "ExtensionLite",
    Guid: 'Guid',
    IndicatorViewer: 'IndicatorViewer',
    SignatureViewer: 'SignatureViewer',
    InputNumberWithSeperator: 'InputNumberWithSeperator',
    LabelNumberWithSeperator: 'LabelNumberWithSeperator',
    SignatureSelector: 'SignatureSelector',
};
exports["default"] = widgetIdList;


/***/ }),

/***/ "./src/DynamicDataModel/Widgets/widgetManager.ts":
/*!*******************************************************!*\
  !*** ./src/DynamicDataModel/Widgets/widgetManager.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var widgetFactory_1 = __webpack_require__(/*! ./widgetFactory */ "./src/DynamicDataModel/Widgets/widgetFactory.ts");
var widgetIdList_1 = __webpack_require__(/*! ./widgetIdList */ "./src/DynamicDataModel/Widgets/widgetIdList.ts");
var tableExEditorFields_1 = __webpack_require__(/*! ./tableExEditorFields */ "./src/DynamicDataModel/Widgets/tableExEditorFields.ts");
var tableExDisplayFields_1 = __webpack_require__(/*! ./tableExDisplayFields */ "./src/DynamicDataModel/Widgets/tableExDisplayFields.ts");
var label_1 = __webpack_require__(/*! ../Widgets/Display/label */ "./src/DynamicDataModel/Widgets/Display/label.ts");
var autoComplete_1 = __webpack_require__(/*! ./Edit/AutoComplete/autoComplete */ "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts");
var bundleViewer_1 = __webpack_require__(/*! ../Widgets/Display/bundleViewer */ "./src/DynamicDataModel/Widgets/Display/bundleViewer.ts");
var labelNumberWithSeperator_1 = __webpack_require__(/*! ./Display/labelNumberWithSeperator */ "./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts");
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
var DynamicDataModelWidgetManagerFactory = function () {
    var DynamicDataModelWidgetManager = {
        getDataEntryEditComponent: function (widgetId) {
            return typeof tableExEditorFields_1["default"][widgetId] === "function"
                ? tableExEditorFields_1["default"][widgetId]()
                : tableExEditorFields_1["default"][widgetId] || widgetId;
        },
        getDataEntryViewComponent: function (widgetId) {
            return typeof tableExDisplayFields_1["default"][widgetId] === "function"
                ? tableExDisplayFields_1["default"][widgetId]()
                : tableExDisplayFields_1["default"][widgetId] || widgetId;
        },
        getWidget: function (widgetId) {
            return widgetFactory_1["default"](widgetId).component;
        },
        getCustomDataEntryEditComponent: function (widgetId) {
            switch (widgetId) {
                case widgetIdList_1["default"].Guid:
                case widgetIdList_1["default"].AutoComplete:
                case widgetIdList_1["default"].PopupSelector:
                    return autoComplete_1["default"].component;
                case widgetIdList_1["default"].IndicatorViewer:
                    return label_1["default"].component;
                case widgetIdList_1["default"].InputNumberWithSeperator:
                    return label_1["default"].component;
                default:
                    break;
            }
        },
        getCustomDataEntryViewComponent: function (widgetId) {
            switch (widgetId) {
                case widgetIdList_1["default"].ExtensionLite:
                case widgetIdList_1["default"].AutoComplete:
                case widgetIdList_1["default"].PopupSelector:
                case widgetIdList_1["default"].SignatureSelector:
                case widgetIdList_1["default"].TableExEditor:
                    return bundleViewer_1["default"].component;
                case widgetIdList_1["default"].InputNumberWithSeperator:
                    return labelNumberWithSeperator_1["default"].component;
                default:
                    break;
            }
        },
        getCustomDataEntryValidation: function (widgetId) {
            return [];
        },
        onInit: function (widgetId, attributes) {
            var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
            if (!!widgetFactory_1["default"](widgetId).events.onInit) {
                widgetFactory_1["default"](widgetId)
                    .events.onInit(widgetId, attributes)
                    .then(function (result) {
                    dfd.resolve(result);
                })["catch"](function () { return dfd.fail(); });
            }
            else {
                dfd.resolve(null);
            }
            return dfd;
        },
        hasRequiredSetting: function (widgetId) {
            switch (widgetId) {
                case widgetIdList_1["default"].AutoComplete:
                case widgetIdList_1["default"].TableExEditor:
                    return true;
                default:
                    return false;
            }
        },
        getConsistentRules: function (widgetId) {
            return widgetFactory_1["default"](widgetId).getConsistentRules();
        },
        validateWidgetSetting: function (widgetId, setting) {
            switch (widgetId) {
                case widgetIdList_1["default"].AutoComplete:
                case widgetIdList_1["default"].AutoCompleteViewer:
                case widgetIdList_1["default"].PopupSelector:
                    return !!setting["ReferenceFieldId"];
                case widgetIdList_1["default"].IndicatorViewer:
                    return !!setting["indicatorSelected"];
                case widgetIdList_1["default"].TableExEditor:
                    return (!!setting["design"] &&
                        JSON.parse(setting["design"]).length > 0);
                default:
                    return true;
            }
        },
    };
    return DynamicDataModelWidgetManager;
};
exports.DynamicDataModelWidgetManagerFactory = DynamicDataModelWidgetManagerFactory;


/***/ }),

/***/ "./src/DynamicDataModel/dispatcher.ts":
/*!********************************************!*\
  !*** ./src/DynamicDataModel/dispatcher.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
        this.widgetCallbacks = [];
    }
    Dispatcher.prototype.registerCallback = function (widgetCallback) {
        this.widgetCallbacks.push(widgetCallback);
    };
    Dispatcher.prototype.invokeAllCallbacks = function () {
        var callbacks = this.widgetCallbacks.map(function (widgetCallback) {
            return (function () {
                var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
                widgetCallback.callback(widgetCallback.softwareGuid, widgetCallback.widgetId, widgetCallback.attributes)
                    .then(function (result) {
                    dfd.resolve({ fieldInstanceName: widgetCallback.fieldInstanceName, data: result });
                });
                return dfd;
            })();
        });
        var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
        Promise.all(callbacks)
            .then(dfd.resolve)["catch"](dfd.fail);
        return dfd;
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;


/***/ }),

/***/ "./src/DynamicDataModel/enums/index.ts":
/*!*********************************************!*\
  !*** ./src/DynamicDataModel/enums/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DesignerContainerCode;
(function (DesignerContainerCode) {
    DesignerContainerCode[DesignerContainerCode["Fieldset"] = 1] = "Fieldset";
    DesignerContainerCode[DesignerContainerCode["FormRow"] = 2] = "FormRow";
    //Root = -3,
    DesignerContainerCode[DesignerContainerCode["Col"] = 4] = "Col";
})(DesignerContainerCode = exports.DesignerContainerCode || (exports.DesignerContainerCode = {}));
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["Edit"] = 0] = "Edit";
    WidgetType[WidgetType["Display"] = 1] = "Display";
    WidgetType[WidgetType["Search"] = 2] = "Search";
})(WidgetType = exports.WidgetType || (exports.WidgetType = {}));


/***/ }),

/***/ "./src/DynamicDataModel/fieldTypeGuids.ts":
/*!************************************************!*\
  !*** ./src/DynamicDataModel/fieldTypeGuids.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.FieldTypeGuids = {
    BundleType: '48d1770c-c16a-4cf7-97ea-63be4a35537b',
    RelationType: '7c6c24c5-af3e-4b37-afc6-8ef998f83008',
    StringType: 'd2983f70-34ce-4ffd-9b86-78f761b73cab',
    DecimalType: '43a04185-07f5-464b-b82b-46548cae0ebc',
    SignatureType: '814ef0ca-4552-43c9-9e65-f3a4f093bd09',
    StaffType: '70f450c3-a132-48bd-8bf7-a89628d67fdf',
    FileType: '65AA9A09-1D96-4C93-9B59-7700D646B5EF',
    DateTimeType: 'e0b2b27c-5890-4f39-b329-ecb90065d290',
};


/***/ }),

/***/ "./src/DynamicDataModel/utils.ts":
/*!***************************************!*\
  !*** ./src/DynamicDataModel/utils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.softwareGuid = 'B90F03A0-5B3B-4027-B9EC-247C2D6DDAAC';


/***/ }),

/***/ "./src/DynamicDataModel/widgetFactory.ts":
/*!***********************************************!*\
  !*** ./src/DynamicDataModel/widgetFactory.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gulp_es3_typescript_library_1 = __webpack_require__(/*! gulp-es3-typescript-library */ "../library/dist/index.js");
var widgetManager_1 = __webpack_require__(/*! ./Widgets/widgetManager */ "./src/DynamicDataModel/Widgets/widgetManager.ts");
function WidgetFactory(didgahSoftwares, softwareGuid) {
    var software;
    var softwareWidgetManager;
    var commonWidgetManager;
    var containsExtraWidget;
    didgahSoftwares = didgahSoftwares;
    if (!!softwareGuid) {
        software = getSoftware(softwareGuid);
        containsExtraWidget = true;
    }
    else {
        containsExtraWidget = false;
    }
    function getSoftwareWidgetManager(software) {
        var url = "/" + software.Url + "/build/DynamicDataModelWidgetManager.js";
        var bundle = importModule(url);
        bundle.then(function () {
            softwareWidgetManager = window[software.Key.toLocaleLowerCase()]["DynamicDataModelWidgetManagerFactory"];
        });
        return bundle;
    }
    function getCommonWidgetManager() {
        var url = "/Applications/Common/build/DynamicDataModelWidgetManager.js";
        // const bundle = importModule(url);
        // bundle.then(() => {
        // 	commonWidgetManager = window["common"][
        // 		"DynamicDataModelWidgetManagerFactory"
        // 	] as (context: any) => IDynamicDataModelUIManager;
        // });
        return new Promise(function (resolve, reject) {
            commonWidgetManager = widgetManager_1.DynamicDataModelWidgetManagerFactory;
            resolve(commonWidgetManager);
        });
    }
    function getSoftware(softwareGuid) {
        return didgahSoftwares.filter(function (software) {
            return software.Guid.toString().toLowerCase() ===
                softwareGuid.toString().toLowerCase();
        })[0];
    }
    function importModule(url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            script.src = url + "?package=" + "appContext.Package";
            script.async = true;
            script.onload = function () {
                resolve();
                if (!!script.remove) {
                    script.remove();
                }
                else {
                    // tslint:disable
                    script["removeNode"]();
                }
            };
            script.onerror = function () {
                reject(new Error("Failed to load module script with URL " + url));
                script.remove();
                return;
            };
            document.head.appendChild(script);
        });
    }
    function importModuleBySoftware(softwareGuid) {
        var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
        var targetSoftware = getSoftware(softwareGuid);
        getSoftwareWidgetManager(targetSoftware).then(function (result) {
            dfd.resolve(true);
        });
        return dfd;
    }
    function importModules() {
        var dfd = gulp_es3_typescript_library_1.DidgahDeferred.create();
        var targetWidgetManagers = [getCommonWidgetManager()];
        // if (containsExtraWidget) {
        // 	targetWidgetManagers.push(getSoftwareWidgetManager(software));
        // }
        Promise.all(targetWidgetManagers).then(function (result) {
            dfd.resolve(true);
        });
        return dfd;
    }
    /////////////////////////////////////////////
    function getCorrespondingWidgeManager(softwareGuid) {
        if (softwareGuid === softwareGuid || softwareGuid === undefined) {
            return commonWidgetManager({});
        }
        // return softwareWidgetManager({});
    }
    function getDataEntryEditComponent(softwareGuid, widgetId) {
        return getCorrespondingWidgeManager(softwareGuid).getDataEntryEditComponent(widgetId);
    }
    function getDataEntryViewComponent(softwareGuid, widgetId) {
        return getCorrespondingWidgeManager(softwareGuid).getDataEntryViewComponent(widgetId);
    }
    function getWidget(softwareGuid, widgetId) {
        return getCorrespondingWidgeManager(softwareGuid).getWidget(widgetId);
        "";
    }
    function onInit(softwareGuid, widgetId, attributes) {
        var widgetManager = getCorrespondingWidgeManager(softwareGuid);
        if (widgetManager.onInit) {
            return widgetManager.onInit(widgetId, attributes);
        }
        return null;
    }
    function hasRequiredSetting(softwareGuid, widgetId) {
        return getCorrespondingWidgeManager(softwareGuid).hasRequiredSetting(widgetId);
    }
    function getConsistentRules(softwareGuid, widgetId) {
        return getCorrespondingWidgeManager(softwareGuid).getConsistentRules(widgetId);
    }
    function validateWidgetSetting(softwareGuid, widgetId, setting) {
        return getCorrespondingWidgeManager(softwareGuid).validateWidgetSetting(widgetId, setting);
    }
    return {
        getSoftwareWidgetManager: getSoftwareWidgetManager,
        getCommonWidgetManager: getCommonWidgetManager,
        getSoftware: getSoftware,
        importModuleBySoftware: importModuleBySoftware,
        importModules: importModules,
        getDataEntryEditComponent: getDataEntryEditComponent,
        getDataEntryViewComponent: getDataEntryViewComponent,
        getWidget: getWidget,
        onInit: onInit,
        hasRequiredSetting: hasRequiredSetting,
        getConsistentRules: getConsistentRules,
        validateWidgetSetting: validateWidgetSetting,
    };
}
exports["default"] = WidgetFactory;
// export class CommonWidgetFactory extends WidgetFactory {
// 	constructor(didgahSoftwares: Array<any>, context: any, appContext: any) {
// 		super(didgahSoftwares, null, context, appContext)
// 	}
// }
// export class GeneralWidgetFactory extends WidgetFactory {
// 	constructor(didgahSoftwares: Array<any>, softwareGuid, context: any, appContext: any) {
// 		super(didgahSoftwares, softwareGuid, context, appContext);
// 	}
// }


/***/ }),

/***/ "./src/example-data.ts":
/*!*****************************!*\
  !*** ./src/example-data.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var exampleDataStructure = {
    DataModelId: "F8PJGtUTatTBvGwIlDZTGg",
    Layoutkey: "testBase2-DidgahWeb",
    DesigendForm: [
        {
            id: 0.19540226172476705,
            index: 0,
            control: {
                Identifier: "",
                Type: 1,
                Code: "Fieldset",
                Attributes: {
                    Title: "فیلدست ۱",
                },
                Children: [],
                Rules: [
                    {
                        Title: "فیلدست ۱",
                    },
                ],
            },
            orderIndex: 0,
            isValid: true,
        },
        {
            id: 0.7102255613499266,
            parentId: 0.19540226172476705,
            index: 0,
            control: {
                Identifier: "0.2892061075922687",
                Type: 1,
                Code: "FormRow",
                Attributes: {
                    cols: [24],
                },
                Children: [],
            },
            orderIndex: 0,
            isValid: true,
        },
        {
            id: 0.8411682271830765,
            parentId: 0.7102255613499266,
            index: 0,
            control: {
                Identifier: "0.5044389291358857",
                Type: 1,
                Code: "Col",
                Attributes: {
                    col: 24,
                },
                Children: [],
            },
            orderIndex: 0,
            isValid: true,
        },
        {
            parentId: 0.8411682271830765,
            id: 0.6571985040398887,
            index: 3,
            control: {
                Type: 2,
                Attributes: {
                    fieldInstance: {
                        FieldInstanceId: "X8HpUEDMmWdjsK0cmdaagg",
                        Name: "Grid1",
                        Label: "Grid1",
                        Type: {
                            Guid: "48d1770c-c16a-4cf7-97ea-63be4a35537b",
                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            Name: "DynamicDataModel_BundleDisplayName",
                            IsBundle: true,
                        },
                        Settings: "",
                        EditWidgets: [
                            {
                                Id: "TableExEditor",
                                IsDefault: true,
                            },
                        ],
                        DisplayWidgets: [
                            {
                                Id: "TableExViewer",
                                IsDefault: true,
                            },
                        ],
                        SearchWidgets: [
                            {
                                Id: "TableExEditor",
                                IsDefault: true,
                            },
                        ],
                    },
                    fields: [
                        {
                            FieldInstanceId: "ZTrrF0Kz5TI7kZMLRJG6jA",
                            Name: "CountryName",
                            Label: "CountryName",
                            Type: {
                                Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                IsBundle: false,
                            },
                            Settings: null,
                            EditWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                                {
                                    Id: "TextArea",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Email",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Url",
                                    IsDefault: false,
                                },
                                {
                                    Id: "CommaSeparableComboBox",
                                    IsDefault: false,
                                },
                            ],
                            DisplayWidgets: [
                                {
                                    Id: "Label",
                                    IsDefault: true,
                                },
                                {
                                    Id: "IndicatorViewer",
                                    IsDefault: false,
                                },
                            ],
                            SearchWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                            ],
                        },
                        {
                            FieldInstanceId: "dMseCgLNgsmlgWC01m39GQ",
                            Name: "CountryCode",
                            Label: "2CountryCode",
                            Type: {
                                Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                IsBundle: false,
                            },
                            Settings: null,
                            EditWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                                {
                                    Id: "TextArea",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Email",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Url",
                                    IsDefault: false,
                                },
                                {
                                    Id: "CommaSeparableComboBox",
                                    IsDefault: false,
                                },
                            ],
                            DisplayWidgets: [
                                {
                                    Id: "Label",
                                    IsDefault: true,
                                },
                                {
                                    Id: "IndicatorViewer",
                                    IsDefault: false,
                                },
                            ],
                            SearchWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                            ],
                        },
                    ],
                    selectedFields: [
                        {
                            FieldInstanceId: "HrmbL1zlM4xr9BfYUsClhQ",
                            Name: "CountryName",
                            Label: "CountryName",
                            Type: {
                                Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                IsBundle: false,
                            },
                            Settings: null,
                            EditWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                                {
                                    Id: "TextArea",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Email",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Url",
                                    IsDefault: false,
                                },
                                {
                                    Id: "CommaSeparableComboBox",
                                    IsDefault: false,
                                },
                            ],
                            DisplayWidgets: [
                                {
                                    Id: "Label",
                                    IsDefault: true,
                                },
                                {
                                    Id: "IndicatorViewer",
                                    IsDefault: false,
                                },
                            ],
                            SearchWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                            ],
                        },
                        {
                            FieldInstanceId: "86LV1oW3aoTe14UOzItGYg",
                            Name: "CountryCode",
                            Label: "CountryCode",
                            Type: {
                                Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                IsBundle: false,
                            },
                            Settings: null,
                            EditWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                                {
                                    Id: "TextArea",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Email",
                                    IsDefault: false,
                                },
                                {
                                    Id: "Url",
                                    IsDefault: false,
                                },
                                {
                                    Id: "CommaSeparableComboBox",
                                    IsDefault: false,
                                },
                            ],
                            DisplayWidgets: [
                                {
                                    Id: "Label",
                                    IsDefault: true,
                                },
                                {
                                    Id: "IndicatorViewer",
                                    IsDefault: false,
                                },
                            ],
                            SearchWidgets: [
                                {
                                    Id: "TextBox",
                                    IsDefault: true,
                                },
                            ],
                        },
                    ],
                    dataEntryLayoutItems: [
                        {
                            Id: "BGTd3SftGgfhkZau0X9TZA",
                            FieldInstance: {
                                FieldInstanceId: "dMseCgLNgsmlgWC01m39GQ",
                                Name: "CountryCode",
                                Label: "2CountryCode",
                                Type: {
                                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                    IsBundle: false,
                                },
                                Settings: null,
                                EditWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "TextArea",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Email",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Url",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "CommaSeparableComboBox",
                                        IsDefault: false,
                                    },
                                ],
                                DisplayWidgets: [
                                    {
                                        Id: "Label",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "IndicatorViewer",
                                        IsDefault: false,
                                    },
                                ],
                                SearchWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                ],
                            },
                            LayoutItemDefaultValue: null,
                            EditWidgetId: "TextBox",
                            DisplayWidgetId: "Label",
                            SearchWidgetId: "TextBox",
                            IsBundle: false,
                            Relation: null,
                            LayoutItems: [],
                        },
                        {
                            Id: "4s-D8h_xlEiimRroA749kw",
                            FieldInstance: {
                                FieldInstanceId: "ZTrrF0Kz5TI7kZMLRJG6jA",
                                Name: "CountryName",
                                Label: "CountryName",
                                Type: {
                                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                    IsBundle: false,
                                },
                                Settings: null,
                                EditWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "TextArea",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Email",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Url",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "CommaSeparableComboBox",
                                        IsDefault: false,
                                    },
                                ],
                                DisplayWidgets: [
                                    {
                                        Id: "Label",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "IndicatorViewer",
                                        IsDefault: false,
                                    },
                                ],
                                SearchWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                ],
                            },
                            LayoutItemDefaultValue: null,
                            EditWidgetId: "TextBox",
                            DisplayWidgetId: "Label",
                            SearchWidgetId: "TextBox",
                            IsBundle: false,
                            Relation: null,
                            LayoutItems: [],
                        },
                    ],
                    label: "Grid1",
                    design: [
                        {
                            id: 0.42031951540816026,
                            index: 0,
                            control: {
                                Identifier: "",
                                Type: 1,
                                Code: "Fieldset",
                                Attributes: {
                                    Title: "فیلدست جدید",
                                },
                                Children: [],
                            },
                            orderIndex: 0,
                            isValid: true,
                        },
                        {
                            id: 0.38503776533004497,
                            parentId: 0.42031951540816026,
                            index: 0,
                            control: {
                                Identifier: "0.4770841982863905",
                                Type: 1,
                                Code: "FormRow",
                                Attributes: {
                                    cols: [12, 12],
                                },
                                Children: [],
                            },
                            orderIndex: 0,
                            isValid: true,
                        },
                        {
                            id: 0.9207505206276649,
                            parentId: 0.38503776533004497,
                            index: 0,
                            control: {
                                Identifier: "0.5740389906076677",
                                Type: 1,
                                Code: "Col",
                                Attributes: {
                                    col: 12,
                                },
                                Children: [],
                            },
                            orderIndex: 0,
                            isValid: true,
                        },
                        {
                            id: 0.07008070910353581,
                            parentId: 0.38503776533004497,
                            index: 0,
                            control: {
                                Identifier: "0.1472431088033761",
                                Type: 1,
                                Code: "Col",
                                Attributes: {
                                    col: 12,
                                },
                                Children: [],
                            },
                            orderIndex: 0,
                            isValid: true,
                        },
                        {
                            id: 0.2421834677141217,
                            parentId: 0.9207505206276649,
                            index: 4,
                            control: {
                                Type: 2,
                                Attributes: {
                                    fieldInstance: {
                                        FieldInstanceId: "86LV1oW3aoTe14UOzItGYg",
                                        Name: "CountryCode",
                                        Label: "CountryCode",
                                        Type: {
                                            Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                            Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                            IsBundle: false,
                                        },
                                        Settings: null,
                                        EditWidgets: [
                                            {
                                                Id: "TextBox",
                                                IsDefault: true,
                                            },
                                            {
                                                Id: "TextArea",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "Email",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "Url",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "CommaSeparableComboBox",
                                                IsDefault: false,
                                            },
                                        ],
                                        DisplayWidgets: [
                                            {
                                                Id: "Label",
                                                IsDefault: true,
                                            },
                                            {
                                                Id: "IndicatorViewer",
                                                IsDefault: false,
                                            },
                                        ],
                                        SearchWidgets: [
                                            {
                                                Id: "TextBox",
                                                IsDefault: true,
                                            },
                                        ],
                                    },
                                    label: "CountryCode",
                                },
                                Code: "TextBox",
                                DataIndex: "CountryCode",
                                Label: "CountryCode",
                                Required: false,
                                Rules: [],
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            },
                            orderIndex: 0,
                            isFieldBindableWidget: true,
                            correspondingFieldInstance: {
                                FieldInstanceId: "86LV1oW3aoTe14UOzItGYg",
                                Name: "CountryCode",
                                Label: "CountryCode",
                                Type: {
                                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                    IsBundle: false,
                                },
                                Settings: null,
                                EditWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "TextArea",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Email",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Url",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "CommaSeparableComboBox",
                                        IsDefault: false,
                                    },
                                ],
                                DisplayWidgets: [
                                    {
                                        Id: "Label",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "IndicatorViewer",
                                        IsDefault: false,
                                    },
                                ],
                                SearchWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                ],
                            },
                            editWidgetId: "TextBox",
                            displayWidgetId: "Label",
                            searchWidgetId: "TextBox",
                            isValid: true,
                        },
                        {
                            id: 0.44986848802692037,
                            parentId: 0.07008070910353581,
                            index: 5,
                            control: {
                                Type: 2,
                                Attributes: {
                                    fieldInstance: {
                                        FieldInstanceId: "HrmbL1zlM4xr9BfYUsClhQ",
                                        Name: "CountryName",
                                        Label: "CountryName",
                                        Type: {
                                            Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                            Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                            IsBundle: false,
                                        },
                                        Settings: null,
                                        EditWidgets: [
                                            {
                                                Id: "TextBox",
                                                IsDefault: true,
                                            },
                                            {
                                                Id: "TextArea",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "Email",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "Url",
                                                IsDefault: false,
                                            },
                                            {
                                                Id: "CommaSeparableComboBox",
                                                IsDefault: false,
                                            },
                                        ],
                                        DisplayWidgets: [
                                            {
                                                Id: "Label",
                                                IsDefault: true,
                                            },
                                            {
                                                Id: "IndicatorViewer",
                                                IsDefault: false,
                                            },
                                        ],
                                        SearchWidgets: [
                                            {
                                                Id: "TextBox",
                                                IsDefault: true,
                                            },
                                        ],
                                    },
                                    label: "CountryName",
                                },
                                Code: "TextBox",
                                DataIndex: "CountryName",
                                Label: "CountryName",
                                Required: false,
                                Rules: [],
                                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            },
                            orderIndex: 1,
                            isFieldBindableWidget: true,
                            correspondingFieldInstance: {
                                FieldInstanceId: "HrmbL1zlM4xr9BfYUsClhQ",
                                Name: "CountryName",
                                Label: "CountryName",
                                Type: {
                                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                                    IsBundle: false,
                                },
                                Settings: null,
                                EditWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "TextArea",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Email",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "Url",
                                        IsDefault: false,
                                    },
                                    {
                                        Id: "CommaSeparableComboBox",
                                        IsDefault: false,
                                    },
                                ],
                                DisplayWidgets: [
                                    {
                                        Id: "Label",
                                        IsDefault: true,
                                    },
                                    {
                                        Id: "IndicatorViewer",
                                        IsDefault: false,
                                    },
                                ],
                                SearchWidgets: [
                                    {
                                        Id: "TextBox",
                                        IsDefault: true,
                                    },
                                ],
                            },
                            editWidgetId: "TextBox",
                            displayWidgetId: "Label",
                            searchWidgetId: "TextBox",
                            isValid: true,
                        },
                    ],
                },
                Code: "TableExEditor",
                DataIndex: "Grid1",
                Label: "Grid1",
                Required: false,
                Rules: [],
                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
            },
            orderIndex: 0,
            isFieldBindableWidget: true,
            correspondingFieldInstance: {
                FieldInstanceId: "X8HpUEDMmWdjsK0cmdaagg",
                Name: "Grid1",
                Label: "Grid1",
                Type: {
                    Guid: "48d1770c-c16a-4cf7-97ea-63be4a35537b",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_BundleDisplayName",
                    IsBundle: true,
                },
                Settings: "",
                EditWidgets: [
                    {
                        Id: "TableExEditor",
                        IsDefault: true,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "TableExViewer",
                        IsDefault: true,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "TableExEditor",
                        IsDefault: true,
                    },
                ],
            },
            editWidgetId: "TableExEditor",
            displayWidgetId: "TableExViewer",
            searchWidgetId: "TableExEditor",
            isValid: true,
        },
        {
            id: 0.051512334254858905,
            parentId: 0.19540226172476705,
            index: 1,
            control: {
                Identifier: "0.44301354509883684",
                Type: 1,
                Code: "FormRow",
                Attributes: {
                    cols: [12, 12],
                },
                Children: [],
            },
            orderIndex: 1,
            isValid: true,
        },
        {
            id: 0.19070734599361994,
            parentId: 0.051512334254858905,
            index: 1,
            control: {
                Identifier: "0.22960751142591818",
                Type: 1,
                Code: "Col",
                Attributes: {
                    col: 12,
                },
                Children: [],
            },
            orderIndex: 1,
            isValid: true,
        },
        {
            id: 0.9931355434307865,
            parentId: 0.051512334254858905,
            index: 1,
            control: {
                Identifier: "0.8622276179901889",
                Type: 1,
                Code: "Col",
                Attributes: {
                    col: 12,
                },
                Children: [],
            },
            orderIndex: 1,
            isValid: true,
        },
        {
            id: 0.9092185716929777,
            parentId: 0.19070734599361994,
            index: 7,
            control: {
                Type: 2,
                Attributes: {
                    fieldInstance: {
                        FieldInstanceId: "NWXRxb0n4lrrlSA98cZ8Cw",
                        Name: "Name1",
                        Label: "Name",
                        Type: {
                            Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            Name: "DynamicDataModel_StringFieldTypeDisplayName",
                            IsBundle: false,
                        },
                        Settings: null,
                        EditWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                            {
                                Id: "TextArea",
                                IsDefault: false,
                            },
                            {
                                Id: "Email",
                                IsDefault: false,
                            },
                            {
                                Id: "Url",
                                IsDefault: false,
                            },
                            {
                                Id: "CommaSeparableComboBox",
                                IsDefault: false,
                            },
                        ],
                        DisplayWidgets: [
                            {
                                Id: "Label",
                                IsDefault: true,
                            },
                            {
                                Id: "IndicatorViewer",
                                IsDefault: false,
                            },
                        ],
                        SearchWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                        ],
                    },
                    label: "Name",
                },
                Code: "TextBox",
                DataIndex: "Name1",
                Label: "Name",
                Required: false,
                Rules: [],
                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
            },
            orderIndex: 0,
            isFieldBindableWidget: true,
            correspondingFieldInstance: {
                FieldInstanceId: "NWXRxb0n4lrrlSA98cZ8Cw",
                Name: "Name1",
                Label: "Name",
                Type: {
                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                    IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                    {
                        Id: "TextBox",
                        IsDefault: true,
                    },
                    {
                        Id: "TextArea",
                        IsDefault: false,
                    },
                    {
                        Id: "Email",
                        IsDefault: false,
                    },
                    {
                        Id: "Url",
                        IsDefault: false,
                    },
                    {
                        Id: "CommaSeparableComboBox",
                        IsDefault: false,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "Label",
                        IsDefault: true,
                    },
                    {
                        Id: "IndicatorViewer",
                        IsDefault: false,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "TextBox",
                        IsDefault: true,
                    },
                ],
            },
            editWidgetId: "TextBox",
            displayWidgetId: "Label",
            searchWidgetId: "TextBox",
            isValid: true,
        },
        {
            id: 0.001716380594920297,
            parentId: 0.9931355434307865,
            index: 8,
            control: {
                Type: 2,
                Attributes: {
                    fieldInstance: {
                        FieldInstanceId: "HkrxVY4Kk4UgfDsNSekLag",
                        Name: "Ashar",
                        Label: "Ashar",
                        Type: {
                            Guid: "43a04185-07f5-464b-b82b-46548cae0ebc",
                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            Name: "DynamicDataModel_DecimalFieldTypeDisplayName",
                            IsBundle: false,
                        },
                        Settings: { NumericPrecision: 4, NumericScale: 4 },
                        EditWidgets: [
                            {
                                Id: "InputDecimal",
                                IsDefault: true,
                            },
                        ],
                        DisplayWidgets: [
                            {
                                Id: "Label",
                                IsDefault: true,
                            },
                        ],
                        SearchWidgets: [
                            {
                                Id: "InputDecimal",
                                IsDefault: true,
                            },
                        ],
                    },
                    label: "Ashar",
                },
                Code: "InputDecimal",
                DataIndex: "Ashar",
                Label: "Ashar",
                Required: false,
                Rules: [
                    {
                        pattern: "^[0-9]+\\.[0-9]+$",
                    },
                ],
                SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
            },
            orderIndex: 1,
            isFieldBindableWidget: true,
            correspondingFieldInstance: {
                FieldInstanceId: "HkrxVY4Kk4UgfDsNSekLag",
                Name: "Ashar",
                Label: "Ashar",
                Type: {
                    Guid: "43a04185-07f5-464b-b82b-46548cae0ebc",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_DecimalFieldTypeDisplayName",
                    IsBundle: false,
                },
                Settings: { NumericPrecision: 4, NumericScale: 4 },
                EditWidgets: [
                    {
                        Id: "InputDecimal",
                        IsDefault: true,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "Label",
                        IsDefault: true,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "InputDecimal",
                        IsDefault: true,
                    },
                ],
            },
            editWidgetId: "InputDecimal",
            displayWidgetId: "Label",
            searchWidgetId: "InputDecimal",
            isValid: true,
        },
    ],
    LayoutItems: [
        {
            Id: "FQ7MHfKRjHN8mNLmkmnIaw",
            FieldInstance: {
                FieldInstanceId: "X8HpUEDMmWdjsK0cmdaagg",
                Name: "Grid1",
                Label: "Grid1",
                Type: {
                    Guid: "48d1770c-c16a-4cf7-97ea-63be4a35537b",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_BundleDisplayName",
                    IsBundle: true,
                },
                Settings: "",
                EditWidgets: [
                    {
                        Id: "TableExEditor",
                        IsDefault: true,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "TableExViewer",
                        IsDefault: true,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "TableExEditor",
                        IsDefault: true,
                    },
                ],
            },
            LayoutItemDefaultValue: null,
            EditWidgetId: "TableExEditor",
            DisplayWidgetId: "TableExEditor",
            SearchWidgetId: "TableExEditor",
            IsBundle: true,
            Relation: null,
            LayoutItems: [
                {
                    Id: "-STS8kw602mTXdqJ6O8pSg",
                    FieldInstance: {
                        FieldInstanceId: "ZTrrF0Kz5TI7kZMLRJG6jA",
                        Name: "CountryName",
                        Label: "CountryName",
                        Type: {
                            Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            Name: "DynamicDataModel_StringFieldTypeDisplayName",
                            IsBundle: false,
                        },
                        Settings: null,
                        EditWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                            {
                                Id: "TextArea",
                                IsDefault: false,
                            },
                            {
                                Id: "Email",
                                IsDefault: false,
                            },
                            {
                                Id: "Url",
                                IsDefault: false,
                            },
                            {
                                Id: "CommaSeparableComboBox",
                                IsDefault: false,
                            },
                        ],
                        DisplayWidgets: [
                            {
                                Id: "Label",
                                IsDefault: true,
                            },
                            {
                                Id: "IndicatorViewer",
                                IsDefault: false,
                            },
                        ],
                        SearchWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                        ],
                    },
                    LayoutItemDefaultValue: null,
                    EditWidgetId: "TextBox",
                    DisplayWidgetId: "Label",
                    SearchWidgetId: "TextBox",
                    IsBundle: false,
                    Relation: null,
                    LayoutItems: [],
                },
                {
                    Id: "A2fpgXgsrD_I-LtfkawSfA",
                    FieldInstance: {
                        FieldInstanceId: "dMseCgLNgsmlgWC01m39GQ",
                        Name: "CountryCode",
                        Label: "2CountryCode",
                        Type: {
                            Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                            SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                            Name: "DynamicDataModel_StringFieldTypeDisplayName",
                            IsBundle: false,
                        },
                        Settings: null,
                        EditWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                            {
                                Id: "TextArea",
                                IsDefault: false,
                            },
                            {
                                Id: "Email",
                                IsDefault: false,
                            },
                            {
                                Id: "Url",
                                IsDefault: false,
                            },
                            {
                                Id: "CommaSeparableComboBox",
                                IsDefault: false,
                            },
                        ],
                        DisplayWidgets: [
                            {
                                Id: "Label",
                                IsDefault: true,
                            },
                            {
                                Id: "IndicatorViewer",
                                IsDefault: false,
                            },
                        ],
                        SearchWidgets: [
                            {
                                Id: "TextBox",
                                IsDefault: true,
                            },
                        ],
                    },
                    LayoutItemDefaultValue: null,
                    EditWidgetId: "TextBox",
                    DisplayWidgetId: "Label",
                    SearchWidgetId: "TextBox",
                    IsBundle: false,
                    Relation: null,
                    LayoutItems: [],
                },
            ],
        },
        {
            Id: "VRR900aD1tKpSJGfivtJ7A",
            FieldInstance: {
                FieldInstanceId: "NWXRxb0n4lrrlSA98cZ8Cw",
                Name: "Name1",
                Label: "Name",
                Type: {
                    Guid: "d2983f70-34ce-4ffd-9b86-78f761b73cab",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_StringFieldTypeDisplayName",
                    IsBundle: false,
                },
                Settings: null,
                EditWidgets: [
                    {
                        Id: "TextBox",
                        IsDefault: true,
                    },
                    {
                        Id: "TextArea",
                        IsDefault: false,
                    },
                    {
                        Id: "Email",
                        IsDefault: false,
                    },
                    {
                        Id: "Url",
                        IsDefault: false,
                    },
                    {
                        Id: "CommaSeparableComboBox",
                        IsDefault: false,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "Label",
                        IsDefault: true,
                    },
                    {
                        Id: "IndicatorViewer",
                        IsDefault: false,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "TextBox",
                        IsDefault: true,
                    },
                ],
            },
            LayoutItemDefaultValue: null,
            EditWidgetId: "TextBox",
            DisplayWidgetId: "Label",
            SearchWidgetId: "TextBox",
            IsBundle: false,
            Relation: null,
            LayoutItems: [],
        },
        {
            Id: "n4gsfvUXSV9NkyV8FXIPeQ",
            FieldInstance: {
                FieldInstanceId: "HkrxVY4Kk4UgfDsNSekLag",
                Name: "Ashar",
                Label: "Ashar",
                Type: {
                    Guid: "43a04185-07f5-464b-b82b-46548cae0ebc",
                    SoftwareGuid: "b90f03a0-5b3b-4027-b9ec-247c2d6ddaac",
                    Name: "DynamicDataModel_DecimalFieldTypeDisplayName",
                    IsBundle: false,
                },
                Settings: { NumericPrecision: 4, NumericScale: 4 },
                EditWidgets: [
                    {
                        Id: "InputDecimal",
                        IsDefault: true,
                    },
                ],
                DisplayWidgets: [
                    {
                        Id: "Label",
                        IsDefault: true,
                    },
                ],
                SearchWidgets: [
                    {
                        Id: "InputDecimal",
                        IsDefault: true,
                    },
                ],
            },
            LayoutItemDefaultValue: null,
            EditWidgetId: "InputDecimal",
            DisplayWidgetId: "Label",
            SearchWidgetId: "InputDecimal",
            IsBundle: false,
            Relation: null,
            LayoutItems: [],
        },
    ],
    formData: {
        Guid: "Zn21LZKbTxMxQsbmlfBM_pBaaaCiqZx74SsFxRkS1cM",
        ParentGuid: "iXLbVR3r4Hbl1frPWIA7ZO2SuhVq2sKceynOzU_BuxM",
        KeyValues: {
            Name1: "Abbasaa",
            Ashar: 123.4,
            Grid1: [
                {
                    CountryName: "ww",
                    CountryCode: "wqwq",
                    Guid: "ifbWhWmorTmC2lS2NPjG1ovssstYkVulijv2Y_3-Iuo",
                },
                {
                    CountryName: "www",
                    CountryCode: "wqwq",
                    Guid: "L9_uvUU0iz_fW1YUA2zGMK7EsYROHhaLO0-QBe-MOD8",
                },
            ],
        },
    },
};
exports["default"] = exampleDataStructure;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var example_data_1 = __webpack_require__(/*! ./example-data */ "./src/example-data.ts");
var FormRenderer_1 = __webpack_require__(/*! ./DynamicDataModel/Widgets/FormRenderer */ "./src/DynamicDataModel/Widgets/FormRenderer.ts");
FormRenderer_1["default"]({ designedLayout: example_data_1["default"], setExtraModelFormArgs: null });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map