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
                if (object === void 0) { object = {}; }
                if (property === void 0) { property = "property"; }
                if (descriptor === void 0) { descriptor = {}; }
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
(function (e) { function t(n) { if (a[n])
    return a[n].exports; var d = a[n] = { i: n, l: !1, exports: {} }; return e[n].call(d.exports, d, d.exports, t), d.l = !0, d.exports; } var a = {}; return t.m = e, t.c = a, t.d = function (e, a, n) { t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: n }); }, t.r = function (e) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, t.t = function (e, a) { if (1 & a && (e = t(e)), 8 & a)
    return e; if (4 & a && 'object' == typeof e && e && e.__esModule)
    return e; var n = Object.create(null); if (t.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & a && 'string' != typeof e)
    for (var d in e)
        t.d(n, d, function (t) { return e[t]; }.bind(null, d)); return n; }, t.n = function (e) { var a = e && e.__esModule ? function () { return e['default']; } : function () { return e; }; return t.d(a, 'a', a), a; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = '', t(t.s = 0); })({ "../library/dist/index.js": /*!********************************!*\
      !*** ../library/dist/index.js ***!
      \********************************/ /*! no static exports found */ function (a) {
        var e = this && this.__assign || function () { return e = Object.assign || function (e) { for (var t, a = 1, d = arguments.length; a < d; a++)
            for (var n in t = arguments[a], t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e; }, e.apply(this, arguments); };
        (function () { try {
            var t = Object.defineProperty({}, 'a', { get: function () { return 1; } });
            if (1 !== t.a)
                throw new Error('fail');
        }
        catch (t) {
            var a = !1;
            try {
                var n = document.createElement('a');
                a = 1 === Object.defineProperty(n, 'a', { value: 1 }).a;
            }
            catch (t) { }
            var d = 'defineProperty' in Object;
            if (!d || a)
                Object.defineProperty = function (e, t, a) { return void 0 === e && (e = {}), void 0 === t && (t = 'property'), void 0 === a && (a = {}), 'value' in a ? e[t] = a.value : 'get' in a && (e[t] = a.get()), e; };
            else {
                var o = Object.defineProperty;
                Object.defineProperty = function (t, a, n) { var d = n; if ('get' in n) {
                    var i = n.get();
                    delete n.get, d = e(e({}, n), { value: i });
                } return o(t, a, d); };
            }
        } })(), function (n, e) { a.exports = e(); }(window, function () {
            return function (d) { function i(t) { if (e[t])
                return e[t].exports; var n = e[t] = { i: t, l: !1, exports: {} }; return d[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports; } var e = {}; return i.m = d, i.c = e, i.d = function (t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, i.r = function (t) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, i.t = function (d, t) { if (1 & t && (d = i(d)), 8 & t)
                return d; if (4 & t && 'object' == typeof d && d && d.__esModule)
                return d; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: d }), 2 & t && 'string' != typeof d)
                for (var a in d)
                    i.d(n, a, function (e) { return d[e]; }.bind(null, a)); return n; }, i.n = function (t) { var e = t && t.__esModule ? function () { return t['default']; } : function () { return t; }; return i.d(e, 'a', e), e; }, i.o = function (a, e) { return Object.prototype.hasOwnProperty.call(a, e); }, i.p = '', i(i.s = 0); }({ "./node_modules/jquery/dist/jquery.js": /*!********************************************!*\
                        !*** ./node_modules/jquery/dist/jquery.js ***!
                        \********************************************/ /*! no static exports found */ function (ea, e) {
                    var t, n; /*!
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
                    (function (e, t) { 'object' == typeof ea.exports ? ea.exports = e.document ? t(e, !0) : function (a) { if (!a.document)
                        throw new Error('jQuery requires a window with a document'); return t(a); } : t(e); })('undefined' == typeof window ? this : window, function (ta, a) {
                        function aa(a) { var d = !!a && 'length' in a && a.length, o = ia.type(a); return !('function' === o || ia.isWindow(a)) && ('array' === o || 0 === d || 'number' == typeof d && 0 < d && d - 1 in a); }
                        function d(a, d, o) { if (ia.isFunction(d))
                            return ia.grep(a, function (t, e) { return !!d.call(t, e, t) !== o; }); if (d.nodeType)
                            return ia.grep(a, function (t) { return t === d !== o; }); if ('string' == typeof d) {
                            if (_e.test(d))
                                return ia.filter(d, a, o);
                            d = ia.filter(d, a);
                        } return ia.grep(a, function (t) { return -1 < ia.inArray(t, d) !== o; }); }
                        function o(a, e) { do
                            a = a[e];
                        while (a && 1 !== a.nodeType); return a; }
                        function na(a) { var d = {}; return ia.each(a.match(He) || [], function (t, e) { d[e] = !0; }), d; }
                        function l() { le.addEventListener ? (le.removeEventListener('DOMContentLoaded', s), ta.removeEventListener('load', s)) : (le.detachEvent('onreadystatechange', s), ta.detachEvent('onload', s)); }
                        function s() { (le.addEventListener || 'load' === ta.event.type || 'complete' === le.readyState) && (l(), ia.ready()); }
                        function r(d, e, t) { if (void 0 === t && 1 === d.nodeType) {
                            var o = 'data-' + e.replace(i, '-$1').toLowerCase();
                            if (t = d.getAttribute(o), 'string' == typeof t) {
                                try {
                                    t = 'true' === t || 'false' !== t && ('null' === t ? null : +t + '' === t ? +t : Fe.test(t) ? ia.parseJSON(t) : t);
                                }
                                catch (e) { }
                                ia.data(d, e, t);
                            }
                            else
                                t = void 0;
                        } return t; }
                        function p(a) { for (var e in a)
                            if (!('data' === e && ia.isEmptyObject(a[e])) && 'toJSON' !== e)
                                return !1; return !0; }
                        function c(p, e, c, n) { if (Oe(p)) {
                            var a, l, s = ia.expando, o = p.nodeType, d = o ? ia.cache : p, i = o ? p[s] : p[s] && s;
                            if (i && d[i] && (n || d[i].data) || void 0 !== c || 'string' != typeof e)
                                return i || (o ? i = p[s] = re.pop() || ia.guid++ : i = s), d[i] || (d[i] = o ? {} : { toJSON: ia.noop }), ('object' == typeof e || 'function' == typeof e) && (n ? d[i] = ia.extend(d[i], e) : d[i].data = ia.extend(d[i].data, e)), l = d[i], n || (!l.data && (l.data = {}), l = l.data), void 0 !== c && (l[ia.camelCase(e)] = c), 'string' == typeof e ? (a = l[e], null == a && (a = l[ia.camelCase(e)])) : a = l, a;
                        } }
                        function u(i, e, t) { if (Oe(i)) {
                            var s, r, l = i.nodeType, a = l ? ia.cache : i, o = l ? i[ia.expando] : ia.expando;
                            if (a[o]) {
                                if (e && (s = t ? a[o] : a[o].data, s)) {
                                    for (ia.isArray(e) ? e = e.concat(ia.map(e, ia.camelCase)) : (e in s) ? e = [e] : (e = ia.camelCase(e), e = (e in s) ? [e] : e.split(' ')), r = e.length; r--;)
                                        delete s[e[r]];
                                    if (t ? !p(s) : !ia.isEmptyObject(s))
                                        return;
                                }
                                !t && (delete a[o].data, !p(a[o])) || (l ? ia.cleanData([i], !0) : fe.deleteExpando || a != a.window ? delete a[o] : a[o] = void 0);
                            }
                        } }
                        function m(c, e, t, n) { var a, p = 1, o = 20, d = n ? function () { return n.cur(); } : function () { return ia.css(c, e, ''); }, i = d(), u = t && t[3] || (ia.cssNumber[e] ? '' : 'px'), l = (ia.cssNumber[e] || 'px' !== u && +i) && Re.exec(ia.css(c, e)); if (l && l[3] !== u) {
                            u = u || l[3], t = t || [], l = +i || 1;
                            do
                                p = p || '.5', l /= p, ia.style(c, e, l + u);
                            while (p != (p = d() / i) && 1 != p && --o);
                        } return t && (l = +l || +i || 0, a = t[1] ? l + (t[1] + 1) * t[2] : +t[2], n && (n.unit = u, n.start = l, n.end = a)), a; }
                        function f(a) { var e = Ve.split('|'), t = a.createDocumentFragment(); if (t.createElement)
                            for (; e.length;)
                                t.createElement(e.pop()); return t; }
                        function g(i, e) { var l, o, d = 0, n = 'undefined' == typeof i.getElementsByTagName ? 'undefined' == typeof i.querySelectorAll ? void 0 : i.querySelectorAll(e || '*') : i.getElementsByTagName(e || '*'); if (!n)
                            for (n = [], l = i.childNodes || i; null != (o = l[d]); d++)
                                !e || ia.nodeName(o, e) ? n.push(o) : ia.merge(n, g(o, e)); return void 0 === e || e && ia.nodeName(i, e) ? ia.merge([i], n) : n; }
                        function y(d, e) { for (var o, a = 0; null != (o = d[a]); a++)
                            ia._data(o, 'globalEval', !e || ia._data(e[a], 'globalEval')); }
                        function h(t) { Ge.test(t.type) && (t.defaultChecked = t.checked); }
                        function b(b, e, t, n, a) { for (var o, i, p, c, u, m, x, C = b.length, d = f(e), r = [], l = 0; l < C; l++)
                            if (i = b[l], i || 0 === i)
                                if ('object' === ia.type(i))
                                    ia.merge(r, i.nodeType ? [i] : i);
                                else if (!Ye.test(i))
                                    r.push(e.createTextNode(i));
                                else {
                                    for (c = c || d.appendChild(e.createElement('div')), u = (Ue.exec(i) || ['', ''])[1].toLowerCase(), x = Je[u] || Je._default, c.innerHTML = x[1] + ia.htmlPrefilter(i) + x[2], o = x[0]; o--;)
                                        c = c.lastChild;
                                    if (!fe.leadingWhitespace && $e.test(i) && r.push(e.createTextNode($e.exec(i)[0])), !fe.tbody)
                                        for (i = 'table' !== u || Ke.test(i) ? '<table>' !== x[1] || Ke.test(i) ? 0 : c : c.firstChild, o = i && i.childNodes.length; o--;)
                                            ia.nodeName(m = i.childNodes[o], 'tbody') && !m.childNodes.length && i.removeChild(m);
                                    for (ia.merge(r, c.childNodes), c.textContent = ''; c.firstChild;)
                                        c.removeChild(c.firstChild);
                                    c = d.lastChild;
                                } for (c && d.removeChild(c), fe.appendChecked || ia.grep(g(r, 'input'), h), l = 0; i = r[l++];) {
                            if (n && -1 < ia.inArray(i, n)) {
                                a && a.push(i);
                                continue;
                            }
                            if (p = ia.contains(i.ownerDocument, i), c = g(d.appendChild(i), 'script'), p && y(c), t)
                                for (o = 0; i = c[o++];)
                                    Xe.test(i.type || '') && t.push(i);
                        } return c = null, d; }
                        function x() { return !0; }
                        function C() { return !1; }
                        function T() { try {
                            return le.activeElement;
                        }
                        catch (t) { } }
                        function v(l, e, s, p, a, c) { var d, i; if ('object' == typeof e) {
                            for (i in 'string' != typeof s && (p = p || s, s = void 0), e)
                                v(l, i, s, p, e[i], c);
                            return l;
                        } if (null == p && null == a ? (a = s, p = s = void 0) : null == a && ('string' == typeof s ? (a = p, p = void 0) : (a = p, p = s, s = void 0)), !1 === a)
                            a = C;
                        else if (!a)
                            return l; return 1 === c && (d = a, a = function (t) { return ia().off(t), d.apply(this, arguments); }, a.guid = d.guid || (d.guid = ia.guid++)), l.each(function () { ia.event.add(this, e, a, p, s); }); }
                        function E(a, e) { return ia.nodeName(a, 'table') && ia.nodeName(11 === e.nodeType ? e.firstChild : e, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a; }
                        function D(t) { return t.type = (null !== ia.find.attr(t, 'type')) + '/' + t.type, t; }
                        function N(a) { var e = lt.exec(a.type); return e ? a.type = e[1] : a.removeAttribute('type'), a; }
                        function S(l, e) { if (1 === e.nodeType && ia.hasData(l)) {
                            var t, d, s, i = ia._data(l), n = ia._data(e, i), a = i.events;
                            if (a)
                                for (t in delete n.handle, n.events = {}, a)
                                    for (d = 0, s = a[t].length; d < s; d++)
                                        ia.event.add(e, t, a[t][d]);
                            n.data && (n.data = ia.extend({}, n.data));
                        } }
                        function M(d, t) { var n, a, o; if (1 === t.nodeType) {
                            if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[ia.expando]) {
                                for (a in o = ia._data(t), o.events)
                                    ia.removeEvent(t, a, o.handle);
                                t.removeAttribute(ia.expando);
                            }
                            'script' === n && t.text !== d.text ? (D(t).text = d.text, N(t)) : 'object' === n ? (t.parentNode && (t.outerHTML = d.outerHTML), fe.html5Clone && d.innerHTML && !ia.trim(t.innerHTML) && (t.innerHTML = d.innerHTML)) : 'input' === n && Ge.test(d.type) ? (t.defaultChecked = t.checked = d.checked, t.value !== d.value && (t.value = d.value)) : 'option' === n ? t.defaultSelected = t.selected = d.defaultSelected : ('input' === n || 'textarea' === n) && (t.defaultValue = d.defaultValue);
                        } }
                        function _(f, e, t, n) { e = pe.apply([], e); var a, l, s, p, c, u, m = 0, o = f.length, y = e[0], h = ia.isFunction(y); if (h || 1 < o && 'string' == typeof y && !fe.checkClone && rt.test(y))
                            return f.each(function (a) { var o = f.eq(a); h && (e[0] = y.call(this, a, o.html())), _(o, e, t, n); }); if (o && (u = b(e, f[0].ownerDocument, !1, f, n), a = u.firstChild, 1 === u.childNodes.length && (u = a), a || n)) {
                            for (p = ia.map(g(u, 'script'), D), s = p.length; m < o; m++)
                                l = u, m != o - 1 && (l = ia.clone(l, !0, !0), s && ia.merge(p, g(l, 'script'))), t.call(f[m], l, m);
                            if (s)
                                for (c = p[p.length - 1].ownerDocument, ia.map(p, N), m = 0; m < s; m++)
                                    l = p[m], Xe.test(l.type || '') && !ia._data(l, 'globalEval') && ia.contains(c, l) && (l.src ? ia._evalUrl && ia._evalUrl(l.src) : ia.globalEval((l.text || l.textContent || l.innerHTML || '').replace(st, '')));
                            u = a = null;
                        } return f; }
                        function k(i, e, t) { for (var n, d = e ? ia.filter(e, i) : i, a = 0; null != (n = d[a]); a++)
                            t || 1 !== n.nodeType || ia.cleanData(g(n)), n.parentNode && (t && ia.contains(n.ownerDocument, n) && y(g(n, 'script')), n.parentNode.removeChild(n)); return i; }
                        function L(d, e) { var t = ia(e.createElement(d)).appendTo(e.body), n = ia.css(t[0], 'display'); return t.detach(), n; }
                        function j(a) { var e = le, t = xt[a]; return t || (t = L(a, e), ('none' === t || !t) && (ut = (ut || ia('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(e.documentElement), e = (ut[0].contentWindow || ut[0].contentDocument).document, e.write(), e.close(), t = L(a, e), ut.detach()), xt[a] = t), t; }
                        function q(a, e) { return { get: function () { return a() ? void delete this.get : (this.get = e).apply(this, arguments); } }; }
                        function I(a) { if (a in _t)
                            return a; for (var e = a.charAt(0).toUpperCase() + a.slice(1), t = Dt.length; t--;)
                            if (a = Dt[t] + e, a in _t)
                                return a; }
                        function H(l, e) { for (var t, d, i, s = [], n = 0, a = l.length; n < a; n++)
                            (d = l[n], !!d.style) && (s[n] = ia._data(d, 'olddisplay'), t = d.style.display, e ? (!s[n] && 'none' === t && (d.style.display = ''), '' === d.style.display && We(d) && (s[n] = ia._data(d, 'olddisplay', j(d.nodeName)))) : (i = We(d), (t && 'none' !== t || !i) && ia._data(d, 'olddisplay', i ? t : ia.css(d, 'display')))); for (n = 0; n < a; n++)
                            (d = l[n], !!d.style) && (e && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = e ? s[n] || '' : 'none')); return l; }
                        function F(d, e, t) { var n = wt.exec(e); return n ? ie(0, n[1] - (t || 0)) + (n[2] || 'px') : e; }
                        function B(l, e, t, n, a) { for (var o = t === (n ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0, d = 0; 4 > o; o += 2)
                            'margin' === t && (d += ia.css(l, t + Pe[o], !0, a)), n ? ('content' === t && (d -= ia.css(l, 'padding' + Pe[o], !0, a)), 'margin' !== t && (d -= ia.css(l, 'border' + Pe[o] + 'Width', !0, a))) : (d += ia.css(l, 'padding' + Pe[o], !0, a), 'padding' !== t && (d += ia.css(l, 'border' + Pe[o] + 'Width', !0, a))); return d; }
                        function R(l, e, t) { var n = !0, a = 'width' === e ? l.offsetWidth : l.offsetHeight, o = yt(l), d = fe.boxSizing && 'border-box' === ia.css(l, 'boxSizing', !1, o); if (0 >= a || null == a) {
                            if (a = bt(l, e, o), (0 > a || null == a) && (a = l.style[e]), gt.test(a))
                                return a;
                            n = d && (fe.boxSizingReliable() || a === l.style[e]), a = parseFloat(a) || 0;
                        } return a + B(l, e, t || (d ? 'border' : 'content'), n, o) + 'px'; }
                        function O(d, e, t, n, a) { return new O.prototype.init(d, e, t, n, a); }
                        function P() { return ta.setTimeout(function () { kt = void 0; }), kt = ia.now(); }
                        function z(d, i) { var t, o = { height: d }, n = 0; for (i = i ? 1 : 0; 4 > n; n += 2 - i)
                            t = Pe[n], o['margin' + t] = o['padding' + t] = d; return i && (o.opacity = o.width = d), o; }
                        function G(l, e, t) { for (var n, i = ($.tweeners[e] || []).concat($.tweeners['*']), a = 0, o = i.length; a < o; a++)
                            if (n = i[a].call(t, e, l))
                                return n; }
                        function U(f, e, t) { var n, l, s, p, c, u, m, g, y = this, a = {}, o = f.style, d = f.nodeType && We(f), h = ia._data(f, 'fxshow'); for (n in t.queue || (c = ia._queueHooks(f, 'fx'), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function () { c.unqueued || u(); }), c.unqueued++, y.always(function () { y.always(function () { c.unqueued--, ia.queue(f, 'fx').length || c.empty.fire(); }); })), 1 === f.nodeType && ('height' in e || 'width' in e) && (t.overflow = [o.overflow, o.overflowX, o.overflowY], m = ia.css(f, 'display'), g = 'none' === m ? ia._data(f, 'olddisplay') || j(f.nodeName) : m, 'inline' === g && 'none' === ia.css(f, 'float') && (fe.inlineBlockNeedsLayout && 'inline' !== j(f.nodeName) ? o.zoom = 1 : o.display = 'inline-block')), t.overflow && (o.overflow = 'hidden', !fe.shrinkWrapBlocks() && y.always(function () { o.overflow = t.overflow[0], o.overflowX = t.overflow[1], o.overflowY = t.overflow[2]; })), e)
                            if (l = e[n], Lt.exec(l)) {
                                if (delete e[n], s = s || 'toggle' === l, l === (d ? 'hide' : 'show'))
                                    if ('show' === l && h && void 0 !== h[n])
                                        d = !0;
                                    else
                                        continue;
                                a[n] = h && h[n] || ia.style(f, n);
                            }
                            else
                                m = void 0; if (!ia.isEmptyObject(a))
                            for (n in h ? 'hidden' in h && (d = h.hidden) : h = ia._data(f, 'fxshow', {}), s && (h.hidden = !d), d ? ia(f).show() : y.done(function () { ia(f).hide(); }), y.done(function () { for (var e in ia._removeData(f, 'fxshow'), a)
                                ia.style(f, e, a[e]); }), a)
                                p = G(d ? h[n] : 0, n, y), n in h || (h[n] = p.start, d && (p.end = p.start, p.start = 'width' === n || 'height' === n ? 1 : 0));
                        else
                            'inline' === ('none' === m ? j(f.nodeName) : m) && (o.display = m); }
                        function X(l, e) { var t, n, a, o, d; for (t in l)
                            if (n = ia.camelCase(t), a = e[n], o = l[t], ia.isArray(o) && (a = o[1], o = l[t] = o[0]), t != n && (l[n] = o, delete l[t]), d = ia.cssHooks[n], d && 'expand' in d)
                                for (t in o = d.expand(o), delete l[n], o)
                                    t in l || (l[t] = o[t], e[t] = a);
                            else
                                e[n] = a; }
                        function $(c, u, m) { var f, s, p = 0, a = $.prefilters.length, g = ia.Deferred().always(function () { delete d.elem; }), d = function () { if (s)
                            return !1; for (var e = kt || P(), t = ie(0, y.startTime + y.duration - e), n = t / y.duration || 0, a = 1 - n, d = 0, o = y.tweens.length; d < o; d++)
                            y.tweens[d].run(a); return g.notifyWith(c, [y, a, t]), 1 > a && o ? t : (g.resolveWith(c, [y]), !1); }, y = g.promise({ elem: c, props: ia.extend({}, u), opts: ia.extend(!0, { specialEasing: {}, easing: ia.easing._default }, m), originalProperties: u, originalOptions: m, startTime: kt || P(), duration: m.duration, tweens: [], createTween: function (e, t) { var n = ia.Tween(c, y.opts, e, t, y.opts.specialEasing[e] || y.opts.easing); return y.tweens.push(n), n; }, stop: function (e) { var t = 0, n = e ? y.tweens.length : 0; if (s)
                                return this; for (s = !0; t < n; t++)
                                y.tweens[t].run(1); return e ? (g.notifyWith(c, [y, 1, 0]), g.resolveWith(c, [y, e])) : g.rejectWith(c, [y, e]), this; } }), o = y.props; for (X(o, y.opts.specialEasing); p < a; p++)
                            if (f = $.prefilters[p].call(y, c, o, y.opts), f)
                                return ia.isFunction(f.stop) && (ia._queueHooks(y.elem, y.opts.queue).stop = ia.proxy(f.stop, f)), f; return ia.map(o, G, y), ia.isFunction(y.opts.start) && y.opts.start.call(c, y), ia.fx.timer(ia.extend(d, { elem: c, anim: y, queue: y.opts.queue })), y.progress(y.opts.progress).done(y.opts.done, y.opts.complete).fail(y.opts.fail).always(y.opts.always); }
                        function V(t) { return ia.attr(t, 'class') || ''; }
                        function J(t) { return function (e, i) { 'string' != typeof e && (i = e, e = '*'); var n, d = 0, a = e.toLowerCase().match(He) || []; if (ia.isFunction(i))
                            for (; n = a[d++];)
                                '+' === n.charAt(0) ? (n = n.slice(1) || '*', (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i); }; }
                        function Y(s, p, t, n) { function a(e) { var i; return o[e] = !0, ia.each(s[e] || [], function (l, e) { var r = e(p, t, n); return 'string' != typeof r || d || o[r] ? d ? !(i = r) : void 0 : (p.dataTypes.unshift(r), a(r), !1); }), i; } var o = {}, d = s === ua; return a(p.dataTypes[0]) || !o['*'] && a('*'); }
                        function K(d, e) { var t, a, o = ia.ajaxSettings.flatOptions || {}; for (a in e)
                            void 0 !== e[a] && ((o[a] ? d : t || (t = {}))[a] = e[a]); return t && ia.extend(!0, d, t), d; }
                        function Q(s, e, t) { for (var n, d, i, r, l = s.contents, a = s.dataTypes; '*' === a[0];)
                            a.shift(), void 0 === d && (d = s.mimeType || e.getResponseHeader('Content-Type')); if (d)
                            for (r in l)
                                if (l[r] && l[r].test(d)) {
                                    a.unshift(r);
                                    break;
                                } if (a[0] in t)
                            i = a[0];
                        else {
                            for (r in t) {
                                if (!a[0] || s.converters[r + ' ' + a[0]]) {
                                    i = r;
                                    break;
                                }
                                n || (n = r);
                            }
                            i = i || n;
                        } return i ? (i !== a[0] && a.unshift(i), t[i]) : void 0; }
                        function Z(c, e, u, n) { var a, i, r, l, s, m = {}, o = c.dataTypes.slice(); if (o[1])
                            for (r in c.converters)
                                m[r.toLowerCase()] = c.converters[r]; for (i = o.shift(); i;)
                            if (c.responseFields[i] && (u[c.responseFields[i]] = e), !s && n && c.dataFilter && (e = c.dataFilter(e, c.dataType)), s = i, i = o.shift(), i)
                                if ('*' === i)
                                    i = s;
                                else if ('*' !== s && s != i) {
                                    if (r = m[s + ' ' + i] || m['* ' + i], !r)
                                        for (a in m)
                                            if (l = a.split(' '), l[1] === i && (r = m[s + ' ' + l[0]] || m['* ' + l[0]], r)) {
                                                !0 === r ? r = m[a] : !0 !== m[a] && (i = l[0], o.unshift(l[1]));
                                                break;
                                            }
                                    if (!0 !== r)
                                        if (r && c.throws)
                                            e = r(e);
                                        else
                                            try {
                                                e = r(e);
                                            }
                                            catch (e) {
                                                return { state: 'parsererror', error: r ? e : 'No conversion from ' + s + ' to ' + i };
                                            }
                                } return { state: 'success', data: e }; }
                        function ee(t) { return t.style && t.style.display || ia.css(t, 'display'); }
                        function te(t) { if (!ia.contains(t.ownerDocument || le, t))
                            return !0; for (; t && 1 === t.nodeType;) {
                            if ('none' === ee(t) || 'hidden' === t.type)
                                return !0;
                            t = t.parentNode;
                        } return !1; }
                        function ne(d, e, i, l) { if (ia.isArray(e))
                            ia.each(e, function (e, t) { i || ha.test(d) ? l(d, t) : ne(d + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, i, l); });
                        else if (!i && 'object' === ia.type(e))
                            for (var t in e)
                                ne(d + '[' + t + ']', e[t], i, l);
                        else
                            l(d, e); }
                        function ae() { try {
                            return new ta.XMLHttpRequest;
                        }
                        catch (e) { } }
                        function oe() { try {
                            return new ta.ActiveXObject('Microsoft.XMLHTTP');
                        }
                        catch (e) { } }
                        function de(t) { return ia.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow); }
                        var ie = Math.max, re = [], le = ta.document, se = re.slice, pe = re.concat, ce = re.push, da = re.indexOf, me = {}, ge = me.toString, he = me.hasOwnProperty, fe = {}, oa = '1.12.4', ia = function (a, e) { return new ia.fn.init(a, e); }, la = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, be = /^-ms-/, ve = /-([\da-z])/gi, Te = function (a, e) { return e.toUpperCase(); };
                        ia.fn = ia.prototype = { jquery: oa, constructor: ia, selector: '', length: 0, toArray: function () { return se.call(this); }, get: function (t) { return null == t ? se.call(this) : 0 > t ? this[t + this.length] : this[t]; }, pushStack: function (a) { var e = ia.merge(this.constructor(), a); return e.prevObject = this, e.context = this.context, e; }, each: function (t) { return ia.each(this, t); }, map: function (a) { return this.pushStack(ia.map(this, function (e, t) { return a.call(e, t, e); })); }, slice: function () { return this.pushStack(se.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (a) { var d = this.length, t = +a + (0 > a ? d : 0); return this.pushStack(0 <= t && t < d ? [this[t]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: ce, sort: re.sort, splice: re.splice }, ia.extend = ia.fn.extend = function () { var p, o, d, i, r, l, s = arguments[0] || {}, c = 1, t = arguments.length, n = !1; for ('boolean' == typeof s && (n = s, s = arguments[c] || {}, c++), 'object' == typeof s || ia.isFunction(s) || (s = {}), c === t && (s = this, c--); c < t; c++)
                            if (null != (r = arguments[c]))
                                for (i in r)
                                    (p = s[i], d = r[i], s !== d) && (n && d && (ia.isPlainObject(d) || (o = ia.isArray(d))) ? (o ? (o = !1, l = p && ia.isArray(p) ? p : []) : l = p && ia.isPlainObject(p) ? p : {}, s[i] = ia.extend(n, l, d)) : void 0 !== d && (s[i] = d)); return s; }, ia.extend({ expando: 'jQuery' + (oa + Math.random()).replace(/\D/g, ''), isReady: !0, error: function (t) { throw new Error(t); }, noop: function () { }, isFunction: function (t) { return 'function' === ia.type(t); }, isArray: Array.isArray || function (t) { return 'array' === ia.type(t); }, isWindow: function (t) { return null != t && t == t.window; }, isNumeric: function (a) { var e = a && a.toString(); return !ia.isArray(a) && 0 <= e - parseFloat(e) + 1; }, isEmptyObject: function (a) { for (var e in a)
                                return !1; return !0; }, isPlainObject: function (a) { if (!a || 'object' !== ia.type(a) || a.nodeType || ia.isWindow(a))
                                return !1; try {
                                if (a.constructor && !he.call(a, 'constructor') && !he.call(a.constructor.prototype, 'isPrototypeOf'))
                                    return !1;
                            }
                            catch (e) {
                                return !1;
                            } if (!fe.ownFirst)
                                for (var n in a)
                                    return he.call(a, n); for (n in a)
                                ; return void 0 == n || he.call(a, n); }, type: function (t) { return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? me[ge.call(t)] || 'object' : typeof t; }, globalEval: function (t) { t && ia.trim(t) && (ta.execScript || function (t) { ta.eval.call(ta, t); })(t); }, camelCase: function (t) { return t.replace(be, 'ms-').replace(ve, Te); }, nodeName: function (a, e) { return a.nodeName && a.nodeName.toLowerCase() === e.toLowerCase(); }, each: function (d, e) { var t, a = 0; if (aa(d))
                                for (t = d.length; a < t && !1 !== e.call(d[a], a, d[a]); a++)
                                    ;
                            else
                                for (a in d)
                                    if (!1 === e.call(d[a], a, d[a]))
                                        break; return d; }, trim: function (t) { return null == t ? '' : (t + '').replace(la, ''); }, makeArray: function (a, d) { var t = d || []; return null != a && (aa(Object(a)) ? ia.merge(t, 'string' == typeof a ? [a] : a) : ce.call(t, a)), t; }, inArray: function (d, e, t) { var n; if (e) {
                                if (da)
                                    return da.call(e, d, t);
                                for (n = e.length, t = t ? 0 > t ? ie(0, n + t) : t : 0; t < n; t++)
                                    if (t in e && e[t] === d)
                                        return t;
                            } return -1; }, merge: function (d, e) { for (var t = +e.length, n = 0, a = d.length; n < t;)
                                d[a++] = e[n++]; if (t != t)
                                for (; void 0 !== e[n];)
                                    d[a++] = e[n++]; return d.length = a, d; }, grep: function (l, e, t) { for (var s, i = [], a = 0, o = l.length; a < o; a++)
                                s = !e(l[a], a), s != !t && i.push(l[a]); return i; }, map: function (l, e, t) { var n, d, i = 0, a = []; if (aa(l))
                                for (n = l.length; i < n; i++)
                                    d = e(l[i], i, t), null != d && a.push(d);
                            else
                                for (i in l)
                                    d = e(l[i], i, t), null != d && a.push(d); return pe.apply([], a); }, guid: 1, proxy: function (d, e) { var i, n, a; if ('string' == typeof e && (a = d[e], e = d, d = a), !!ia.isFunction(d))
                                return i = se.call(arguments, 2), n = function () { return d.apply(e || this, i.concat(se.call(arguments))); }, n.guid = d.guid = d.guid || ia.guid++, n; }, now: function () { return +new Date; }, support: fe }), 'function' == typeof Symbol && (ia.fn[Symbol.iterator] = re[Symbol.iterator]), ia.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function (a, e) { me['[object ' + e + ']'] = e.toLowerCase(); });
                        var Ne = /*!
                             * Sizzle CSS Selector Engine v2.2.1
                             * http://sizzlejs.com/
                             *
                             * Copyright jQuery Foundation and other contributors
                             * Released under the MIT license
                             * http://jquery.org/license
                             *
                             * Date: 2015-10-17
                             */ function (De) { function Ie(m, f, y, n) { var C, r, l, i, s, p, u, g, h = f && f.ownerDocument, o = f ? f.nodeType : 9; if (y = y || [], 'string' != typeof m || !m || 1 !== o && 9 !== o && 11 !== o)
                            return y; if (!n && ((f ? f.ownerDocument || f : v) !== re && se(f), f = f || re, pe)) {
                            if (11 !== o && (p = Y.exec(m)))
                                if (!(C = p[1])) {
                                    if (p[2])
                                        return L.apply(y, f.getElementsByTagName(m)), y;
                                    if ((C = p[3]) && b.getElementsByClassName && f.getElementsByClassName)
                                        return L.apply(y, f.getElementsByClassName(C)), y;
                                }
                                else if (9 === o) {
                                    if (!(l = f.getElementById(C)))
                                        return y;
                                    if (l.id === C)
                                        return y.push(l), y;
                                }
                                else if (h && (l = h.getElementById(C)) && he(f, l) && l.id === C)
                                    return y.push(l), y;
                            if (b.qsa && !S[m + ' '] && (!ce || !ce.test(m))) {
                                if (1 !== o)
                                    h = f, g = m;
                                else if ('object' !== f.nodeName.toLowerCase()) {
                                    for ((i = f.getAttribute('id')) ? i = i.replace(Q, '\\$&') : f.setAttribute('id', i = be), u = x(m), r = u.length, s = U.test(i) ? '#' + i : '[id=\'' + i + '\']'; r--;)
                                        u[r] = s + ' ' + c(u[r]);
                                    g = u.join(','), h = K.test(m) && Ne(f.parentNode) || f;
                                }
                                if (g)
                                    try {
                                        return L.apply(y, h.querySelectorAll(g)), y;
                                    }
                                    catch (t) { }
                                    finally {
                                        i === be && f.removeAttribute('id');
                                    }
                            }
                        } return de(m.replace(R, '$1'), f, y, n); } function e() { function d(t, n) { return e.push(t + ' ') > ae.cacheLength && delete d[e.shift()], d[t + ' '] = n; } var e = []; return d; } function Te(t) { return t[be] = !0, t; } function ve(a) { var e = re.createElement('div'); try {
                            return !!a(e);
                        }
                        catch (e) {
                            return !1;
                        }
                        finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null;
                        } } function t(d, e) { for (var t = d.split('|'), n = t.length; n--;)
                            ae.attrHandle[t[n]] = e; } function Ee(d, e) { var t = e && d, n = t && 1 === d.nodeType && 1 === e.nodeType && (~e.sourceIndex || _) - (~d.sourceIndex || _); if (n)
                            return n; if (t)
                            for (; t = t.nextSibling;)
                                if (t === e)
                                    return -1; return d ? 1 : -1; } function n(a) { return function (e) { var t = e.nodeName.toLowerCase(); return 'input' === t && e.type === a; }; } function d(a) { return function (e) { var t = e.nodeName.toLowerCase(); return ('input' === t || 'button' === t) && e.type === a; }; } function o(l) { return Te(function (e) { return e = +e, Te(function (t, n) { for (var a, i = l([], t.length, e), o = i.length; o--;)
                            t[a = i[o]] && (t[a] = !(n[a] = t[a])); }); }); } function Ne(t) { return t && 'undefined' != typeof t.getElementsByTagName && t; } function l() { } function c(d) { for (var e = 0, t = d.length, n = ''; e < t; e++)
                            n += d[e].value; return n; } function u(c, e, t) { var u = e.dir, a = t && 'parentNode' === u, o = N++; return e.first ? function (e, t, n) { for (; e = e[u];)
                            if (1 === e.nodeType || a)
                                return c(e, t, n); } : function (e, t, n) { var d, i, l, s = [T, o]; if (n) {
                            for (; e = e[u];)
                                if ((1 === e.nodeType || a) && c(e, t, n))
                                    return !0;
                        }
                        else
                            for (; e = e[u];)
                                if (1 === e.nodeType || a) {
                                    if (l = e[be] || (e[be] = {}), i = l[e.uniqueID] || (l[e.uniqueID] = {}), (d = i[u]) && d[0] === T && d[1] === o)
                                        return s[2] = d[2];
                                    if (i[u] = s, s[2] = c(e, t, n))
                                        return !0;
                                } }; } function m(d) { return 1 < d.length ? function (e, t, n) { for (var a = d.length; a--;)
                            if (!d[a](e, t, n))
                                return !1; return !0; } : d[0]; } function Se(t, e, n) { for (var a = 0, o = e.length; a < o; a++)
                            Ie(t, e[a], n); return n; } function f(s, e, t, p, a) { for (var o, l = [], d = 0, r = s.length; d < r; d++)
                            (o = s[d]) && (!t || t(o, p, a)) && (l.push(o), null != e && e.push(d)); return l; } function g(y, e, b, n, o, a) { return n && !n[be] && (n = g(n)), o && !o[be] && (o = g(o, a)), Te(function (d, D, r, l) { var s, x, C, i = [], p = [], c = D.length, u = d || Se(e || '*', r.nodeType ? [r] : r, []), m = y && (d || !e) ? f(u, i, y, r, l) : u, g = b ? o || (d ? y : c || n) ? [] : D : m; if (b && b(m, g, r, l), n)
                            for (s = f(g, p), n(s, [], r, l), x = s.length; x--;)
                                (C = s[x]) && (g[p[x]] = !(m[p[x]] = C)); if (!d)
                            g = f(g === D ? g.splice(c, g.length) : g), o ? o(null, D, g, l) : L.apply(D, g);
                        else if (o || y) {
                            if (o) {
                                for (s = [], x = g.length; x--;)
                                    (C = g[x]) && s.push(m[x] = C);
                                o(null, g = [], s, l);
                            }
                            for (x = g.length; x--;)
                                (C = g[x]) && -1 < (s = o ? q(d, C) : i[x]) && (d[s] = !(D[s] = C));
                        } }); } function y(f) { for (var h, e, l, s = f.length, p = ae.relative[f[0].type], t = p || ae.relative[' '], a = p ? 1 : 0, b = u(function (t) { return t === h; }, t, !0), d = u(function (t) { return -1 < q(h, t); }, t, !0), o = [function (i, e, t) { var a = !p && (t || e !== oe) || ((h = e).nodeType ? b(i, e, t) : d(i, e, t)); return h = null, a; }]; a < s; a++)
                            if (e = ae.relative[f[a].type])
                                o = [u(m(o), e)];
                            else {
                                if (e = ae.filter[f[a].type].apply(null, f[a].matches), e[be]) {
                                    for (l = ++a; l < s && !ae.relative[f[l].type]; l++)
                                        ;
                                    return g(1 < a && m(o), 1 < a && c(f.slice(0, a - 1).concat({ value: ' ' === f[a - 2].type ? '*' : '' })).replace(R, '$1'), e, a < l && y(f.slice(a, l)), l < s && y(f = f.slice(l)), l < s && c(f));
                                }
                                o.push(e);
                            } return m(o); } function s(t, e) { var n = 0 < e.length, o = 0 < t.length, a = function (d, y, r, l, s) { var p, C, b, D = 0, c = '0', u = d && [], i = [], m = oe, g = d || o && ae.find.TAG('*', s), h = T += null == m ? 1 : Math.random() || .1, I = g.length; for (s && (oe = y === re || y || s); c !== I && null != (p = g[c]); c++) {
                            if (o && p) {
                                for (C = 0, y || p.ownerDocument === re || (se(p), r = !pe); b = t[C++];)
                                    if (b(p, y || re, r)) {
                                        l.push(p);
                                        break;
                                    }
                                s && (T = h);
                            }
                            n && ((p = !b && p) && D--, d && u.push(p));
                        } if (D += c, n && c !== D) {
                            for (C = 0; b = e[C++];)
                                b(u, i, y, r);
                            if (d) {
                                if (0 < D)
                                    for (; c--;)
                                        u[c] || i[c] || (i[c] = j.call(l));
                                i = f(i);
                            }
                            L.apply(l, i), s && !d && 0 < i.length && 1 < D + e.length && Ie.uniqueSort(l);
                        } return s && (T = h, oe = m), u; }; return n ? Te(a) : a; } var r, b, ae, p, h, x, C, de, oe, ie, le, se, re, i, pe, ce, me, ge, he, be = 'sizzle' + 1 * new Date, v = De.document, T = 0, N = 0, w = e(), E = e(), S = e(), D = function (a, e) { return a === e && (le = !0), 0; }, _ = -2147483648, k = {}.hasOwnProperty, M = [], j = M.pop, A = M.push, L = M.push, H = M.slice, q = function (d, e) { for (var t = 0, n = d.length; t < n; t++)
                            if (d[t] === e)
                                return t; return -1; }, I = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', O = '[\\x20\\t\\r\\n\\f]', F = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', B = /[\x20\t\r\n\f]+/g, R = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, P = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, W = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, z = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, G = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, U = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, X = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i }, Ce = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Q = /'|\\/g, Z = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ee = function (d, e, t) { var n = String.fromCharCode, a = '0x' + e - 65536; return a != a || t ? e : 0 > a ? n(a + 65536) : n(55296 | a >> 10, 56320 | 1023 & a); }, te = function () { se(); }; try {
                            L.apply(M = H.call(v.childNodes), v.childNodes), M[v.childNodes.length].nodeType;
                        }
                        catch (e) {
                            L = { apply: M.length ? function (a, e) { A.apply(a, H.call(e)); } : function (d, e) { for (var t = d.length, n = 0; d[t++] = e[n++];)
                                    ; d.length = t - 1; } };
                        } for (r in b = Ie.support = {}, h = Ie.isXML = function (a) { var e = a && (a.ownerDocument || a).documentElement; return !!e && 'HTML' !== e.nodeName; }, se = Ie.setDocument = function (d) { var e, n, a = d ? d.ownerDocument || d : v; return a !== re && 9 === a.nodeType && a.documentElement ? (re = a, i = re.documentElement, pe = !h(re), (n = re.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', te, !1) : n.attachEvent && n.attachEvent('onunload', te)), b.attributes = ve(function (t) { return t.className = 'i', !t.getAttribute('className'); }), b.getElementsByTagName = ve(function (t) { return t.appendChild(re.createComment('')), !t.getElementsByTagName('*').length; }), b.getElementsByClassName = J.test(re.getElementsByClassName), b.getById = ve(function (t) { return i.appendChild(t).id = be, !re.getElementsByName || !re.getElementsByName(be).length; }), b.getById ? (ae.find.ID = function (a, e) { if ('undefined' != typeof e.getElementById && pe) {
                            var t = e.getElementById(a);
                            return t ? [t] : [];
                        } }, ae.filter.ID = function (a) { var n = a.replace(Z, ee); return function (t) { return t.getAttribute('id') === n; }; }) : (delete ae.find.ID, ae.filter.ID = function (a) { var d = a.replace(Z, ee); return function (t) { var e = 'undefined' != typeof t.getAttributeNode && t.getAttributeNode('id'); return e && e.value === d; }; }), ae.find.TAG = b.getElementsByTagName ? function (a, e) { return 'undefined' == typeof e.getElementsByTagName ? b.qsa ? e.querySelectorAll(a) : void 0 : e.getElementsByTagName(a); } : function (i, e) { var t, d = [], n = 0, a = e.getElementsByTagName(i); if ('*' === i) {
                            for (; t = a[n++];)
                                1 === t.nodeType && d.push(t);
                            return d;
                        } return a; }, ae.find.CLASS = b.getElementsByClassName && function (a, e) { if ('undefined' != typeof e.getElementsByClassName && pe)
                            return e.getElementsByClassName(a); }, me = [], ce = [], (b.qsa = J.test(re.querySelectorAll)) && (ve(function (t) { i.appendChild(t).innerHTML = '<a id=\'' + be + '\'></a><select id=\'' + be + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', t.querySelectorAll('[msallowcapture^=\'\']').length && ce.push('[*^$]=' + O + '*(?:\'\'|"")'), t.querySelectorAll('[selected]').length || ce.push('\\[' + O + '*(?:value|' + I + ')'), t.querySelectorAll('[id~=' + be + '-]').length || ce.push('~='), t.querySelectorAll(':checked').length || ce.push(':checked'), t.querySelectorAll('a#' + be + '+*').length || ce.push('.#.+[+~]'); }), ve(function (a) { var e = re.createElement('input'); e.setAttribute('type', 'hidden'), a.appendChild(e).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && ce.push('name' + O + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || ce.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), ce.push(',.*:'); })), (b.matchesSelector = J.test(ge = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && ve(function (t) { b.disconnectedMatch = ge.call(t, 'div'), ge.call(t, '[s!=\'\']:x'), me.push('!=', ':(' + F + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + O + '*(' + F + ')(?:' + O + '*([*^$|!~]?=)' + O + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + F + '))|)' + O + '*\\])*)|.*)\\)|)')); }), ce = ce.length && new RegExp(ce.join('|')), me = me.length && new RegExp(me.join('|')), e = J.test(i.compareDocumentPosition), he = e || J.test(i.contains) ? function (d, e) { var t = 9 === d.nodeType ? d.documentElement : d, n = e && e.parentNode; return d === n || !!(n && 1 === n.nodeType && (t.contains ? t.contains(n) : d.compareDocumentPosition && 16 & d.compareDocumentPosition(n))); } : function (a, e) { if (e)
                            for (; e = e.parentNode;)
                                if (e === a)
                                    return !0; return !1; }, D = e ? function (a, e) { if (a === e)
                            return le = !0, 0; var t = !a.compareDocumentPosition - !e.compareDocumentPosition; return t ? t : (t = (a.ownerDocument || a) === (e.ownerDocument || e) ? a.compareDocumentPosition(e) : 1, 1 & t || !b.sortDetached && e.compareDocumentPosition(a) === t ? a === re || a.ownerDocument === v && he(v, a) ? -1 : e === re || e.ownerDocument === v && he(v, e) ? 1 : ie ? q(ie, a) - q(ie, e) : 0 : 4 & t ? -1 : 1); } : function (s, e) { if (s === e)
                            return le = !0, 0; var t, l = 0, n = s.parentNode, r = e.parentNode, p = [s], d = [e]; if (!n || !r)
                            return s === re ? -1 : e === re ? 1 : n ? -1 : r ? 1 : ie ? q(ie, s) - q(ie, e) : 0; if (n === r)
                            return Ee(s, e); for (t = s; t = t.parentNode;)
                            p.unshift(t); for (t = e; t = t.parentNode;)
                            d.unshift(t); for (; p[l] === d[l];)
                            l++; return l ? Ee(p[l], d[l]) : p[l] === v ? -1 : d[l] === v ? 1 : 0; }, re) : re; }, Ie.matches = function (t, e) { return Ie(t, null, null, e); }, Ie.matchesSelector = function (t, e) { if ((t.ownerDocument || t) !== re && se(t), e = e.replace(z, '=\'$1\']'), b.matchesSelector && pe && !S[e + ' '] && (!me || !me.test(e)) && (!ce || !ce.test(e)))
                            try {
                                var n = ge.call(t, e);
                                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                    return n;
                            }
                            catch (e) { } return 0 < Ie(e, re, null, [t]).length; }, Ie.contains = function (a, e) { return (a.ownerDocument || a) !== re && se(a), he(a, e); }, Ie.attr = function (d, e) { (d.ownerDocument || d) !== re && se(d); var t = ae.attrHandle[e.toLowerCase()], n = t && k.call(ae.attrHandle, e.toLowerCase()) ? t(d, e, !pe) : void 0; return void 0 === n ? b.attributes || !pe ? d.getAttribute(e) : (n = d.getAttributeNode(e)) && n.specified ? n.value : null : n; }, Ie.error = function (t) { throw new Error('Syntax error, unrecognized expression: ' + t); }, Ie.uniqueSort = function (d) { var e, o = [], t = 0, n = 0; if (le = !b.detectDuplicates, ie = !b.sortStable && d.slice(0), d.sort(D), le) {
                            for (; e = d[n++];)
                                e === d[n] && (t = o.push(n));
                            for (; t--;)
                                d.splice(o[t], 1);
                        } return ie = null, d; }, p = Ie.getText = function (d) { var e, o = '', t = 0, n = d.nodeType; if (!n)
                            for (; e = d[t++];)
                                o += p(e);
                        else if (1 === n || 9 === n || 11 === n) {
                            if ('string' == typeof d.textContent)
                                return d.textContent;
                            for (d = d.firstChild; d; d = d.nextSibling)
                                o += p(d);
                        }
                        else if (3 === n || 4 === n)
                            return d.nodeValue; return o; }, ae = Ie.selectors = { cacheLength: 50, createPseudo: Te, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: 'parentNode', first: !0 }, " ": { dir: 'parentNode' }, "+": { dir: 'previousSibling', first: !0 }, "~": { dir: 'previousSibling' } }, preFilter: { ATTR: function (t) { return t[1] = t[1].replace(Z, ee), t[3] = (t[3] || t[4] || t[5] || '').replace(Z, ee), '~=' === t[2] && (t[3] = ' ' + t[3] + ' '), t.slice(0, 4); }, CHILD: function (t) { return t[1] = t[1].toLowerCase(), 'nth' === t[1].slice(0, 3) ? (!t[3] && Ie.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3])), t[5] = +(t[7] + t[8] || 'odd' === t[3])) : t[3] && Ie.error(t[0]), t; }, PSEUDO: function (a) { var e, n = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : n && G.test(n) && (e = x(n, !0)) && (e = n.indexOf(')', n.length - e) - n.length) && (a[0] = a[0].slice(0, e), a[2] = n.slice(0, e)), a.slice(0, 3)); } }, filter: { TAG: function (a) { var n = a.replace(Z, ee).toLowerCase(); return '*' === a ? function () { return !0; } : function (t) { return t.nodeName && t.nodeName.toLowerCase() === n; }; }, CLASS: function (a) { var n = w[a + ' ']; return n || (n = new RegExp('(^|' + O + ')' + a + '(' + O + '|$)')) && w(a, function (t) { return n.test('string' == typeof t.className && t.className || 'undefined' != typeof t.getAttribute && t.getAttribute('class') || ''); }); }, ATTR: function (t, e, i) { return function (a) { var o = Ie.attr(a, t); return null == o ? '!=' === e : !e || (o += '', '=' === e ? o === i : '!=' === e ? o !== i : '^=' === e ? i && 0 === o.indexOf(i) : '*=' === e ? i && -1 < o.indexOf(i) : '$=' === e ? i && o.slice(-i.length) === i : '~=' === e ? -1 < (' ' + o.replace(B, ' ') + ' ').indexOf(i) : '|=' == e && (o === i || o.slice(0, i.length + 1) === i + '-')); }; }, CHILD: function (l, e, t, n, a) { var o = 'nth' !== l.slice(0, 3), d = 'last' !== l.slice(-4), i = 'of-type' === e; return 1 === n && 0 === a ? function (t) { return !!t.parentNode; } : function (e, t, b) { var D, g, h, f, y, x, I = o == d ? 'previousSibling' : 'nextSibling', s = e.parentNode, p = i && e.nodeName.toLowerCase(), c = !b && !i, u = !1; if (s) {
                                    if (o) {
                                        for (; I;) {
                                            for (f = e; f = f[I];)
                                                if (i ? f.nodeName.toLowerCase() === p : 1 === f.nodeType)
                                                    return !1;
                                            x = I = 'only' === l && !x && 'nextSibling';
                                        }
                                        return !0;
                                    }
                                    if (x = [d ? s.firstChild : s.lastChild], d && c) {
                                        for (f = s, h = f[be] || (f[be] = {}), g = h[f.uniqueID] || (h[f.uniqueID] = {}), D = g[l] || [], y = D[0] === T && D[1], u = y && D[2], f = y && s.childNodes[y]; f = ++y && f && f[I] || (u = y = 0) || x.pop();)
                                            if (1 === f.nodeType && ++u && f === e) {
                                                g[l] = [T, y, u];
                                                break;
                                            }
                                    }
                                    else if (c && (f = e, h = f[be] || (f[be] = {}), g = h[f.uniqueID] || (h[f.uniqueID] = {}), D = g[l] || [], y = D[0] === T && D[1], u = y), !1 === u)
                                        for (; (f = ++y && f && f[I] || (u = y = 0) || x.pop()) && !((i ? f.nodeName.toLowerCase() === p : 1 === f.nodeType) && ++u && (c && (h = f[be] || (f[be] = {}), g = h[f.uniqueID] || (h[f.uniqueID] = {}), g[l] = [T, u]), f === e));)
                                            ;
                                    return u -= a, u === n || 0 == u % n && 0 <= u / n;
                                } }; }, PSEUDO: function (t, l) { var a, n = ae.pseudos[t] || ae.setFilters[t.toLowerCase()] || Ie.error('unsupported pseudo: ' + t); return n[be] ? n(l) : 1 < n.length ? (a = [t, t, '', l], ae.setFilters.hasOwnProperty(t.toLowerCase()) ? Te(function (o, e) { for (var t, i = n(o, l), a = i.length; a--;)
                                    t = q(o, i[a]), o[t] = !(e[t] = i[a]); }) : function (t) { return n(t, 0, a); }) : n; } }, pseudos: { not: Te(function (a) { var i = [], t = [], n = C(a.replace(R, '$1')); return n[be] ? Te(function (o, e, t, l) { for (var a, i = n(o, null, l, []), d = o.length; d--;)
                                    (a = i[d]) && (o[d] = !(e[d] = a)); }) : function (o, e, a) { return i[0] = o, n(i, null, a, t), i[0] = null, !t.pop(); }; }), has: Te(function (t) { return function (e) { return 0 < Ie(t, e).length; }; }), contains: Te(function (a) { return a = a.replace(Z, ee), function (e) { return -1 < (e.textContent || e.innerText || p(e)).indexOf(a); }; }), lang: Te(function (a) { return U.test(a || '') || Ie.error('unsupported lang: ' + a), a = a.replace(Z, ee).toLowerCase(), function (e) { var t; do
                                    if (t = pe ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                                        return t = t.toLowerCase(), t === a || 0 === t.indexOf(a + '-');
                                while ((e = e.parentNode) && 1 === e.nodeType); return !1; }; }), target: function (e) { var t = De.location && De.location.hash; return t && t.slice(1) === e.id; }, root: function (t) { return t === i; }, focus: function (t) { return t === re.activeElement && (!re.hasFocus || re.hasFocus()) && !!(t.type || t.href || ~t.tabIndex); }, enabled: function (t) { return !1 === t.disabled; }, disabled: function (t) { return !0 === t.disabled; }, checked: function (a) { var e = a.nodeName.toLowerCase(); return 'input' === e && !!a.checked || 'option' === e && !!a.selected; }, selected: function (t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected; }, empty: function (t) { for (t = t.firstChild; t; t = t.nextSibling)
                                    if (6 > t.nodeType)
                                        return !1; return !0; }, parent: function (t) { return !ae.pseudos.empty(t); }, header: function (t) { return V.test(t.nodeName); }, input: function (t) { return Ce.test(t.nodeName); }, button: function (a) { var e = a.nodeName.toLowerCase(); return 'input' === e && 'button' === a.type || 'button' === e; }, text: function (a) { var e; return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (e = a.getAttribute('type')) || 'text' === e.toLowerCase()); }, first: o(function () { return [0]; }), last: o(function (a, e) { return [e - 1]; }), eq: o(function (a, e, t) { return [0 > t ? t + e : t]; }), even: o(function (a, e) { for (var t = 0; t < e; t += 2)
                                    a.push(t); return a; }), odd: o(function (a, e) { for (var t = 1; t < e; t += 2)
                                    a.push(t); return a; }), lt: o(function (d, e, t) { for (var n = 0 > t ? t + e : t; 0 <= --n;)
                                    d.push(n); return d; }), gt: o(function (d, e, t) { for (var n = 0 > t ? t + e : t; ++n < e;)
                                    d.push(n); return d; }) } }, ae.pseudos.nth = ae.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                            ae.pseudos[r] = n(r); for (r in { submit: !0, reset: !0 })
                            ae.pseudos[r] = d(r); return l.prototype = ae.filters = ae.pseudos, ae.setFilters = new l, x = Ie.tokenize = function (t, e) { var n, c, u, i, r, l, s, p = E[t + ' ']; if (p)
                            return e ? 0 : p.slice(0); for (r = t, l = [], s = ae.preFilter; r;) {
                            for (i in (!n || (c = P.exec(r))) && (c && (r = r.slice(c[0].length) || r), l.push(u = [])), n = !1, (c = W.exec(r)) && (n = c.shift(), u.push({ value: n, type: c[0].replace(R, ' ') }), r = r.slice(n.length)), ae.filter)
                                (c = X[i].exec(r)) && (!s[i] || (c = s[i](c))) && (n = c.shift(), u.push({ value: n, type: i, matches: c }), r = r.slice(n.length));
                            if (!n)
                                break;
                        } return e ? r.length : r ? Ie.error(t) : E(t, l).slice(0); }, C = Ie.compile = function (i, e) { var t, d = [], n = [], a = S[i + ' ']; if (!a) {
                            for (e || (e = x(i)), t = e.length; t--;)
                                a = y(e[t]), a[be] ? d.push(a) : n.push(a);
                            a = S(i, s(n, d)), a.selector = i;
                        } return a; }, de = Ie.select = function (u, m, f, n) { var g, r, i, l, s, p = 'function' == typeof u && u, o = !n && x(u = p.selector || u); if (f = f || [], 1 === o.length) {
                            if (r = o[0] = o[0].slice(0), 2 < r.length && 'ID' === (i = r[0]).type && b.getById && 9 === m.nodeType && pe && ae.relative[r[1].type]) {
                                if (m = (ae.find.ID(i.matches[0].replace(Z, ee), m) || [])[0], !m)
                                    return f;
                                p && (m = m.parentNode), u = u.slice(r.shift().value.length);
                            }
                            for (g = X.needsContext.test(u) ? 0 : r.length; g-- && (i = r[g], !ae.relative[l = i.type]);)
                                if ((s = ae.find[l]) && (n = s(i.matches[0].replace(Z, ee), K.test(r[0].type) && Ne(m.parentNode) || m))) {
                                    if (r.splice(g, 1), u = n.length && c(r), !u)
                                        return L.apply(f, n), f;
                                    break;
                                }
                        } return (p || C(u, o))(n, m, !pe, f, !m || K.test(u) && Ne(m.parentNode) || m), f; }, b.sortStable = be.split('').sort(D).join('') === be, b.detectDuplicates = !!le, se(), b.sortDetached = ve(function (t) { return 1 & t.compareDocumentPosition(re.createElement('div')); }), ve(function (t) { return t.innerHTML = '<a href=\'#\'></a>', '#' === t.firstChild.getAttribute('href'); }) || t('type|href|height|width', function (a, e, t) { if (!t)
                            return a.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2); }), b.attributes && ve(function (t) { return t.innerHTML = '<input/>', t.firstChild.setAttribute('value', ''), '' === t.firstChild.getAttribute('value'); }) || t('value', function (a, e, t) { if (!t && 'input' === a.nodeName.toLowerCase())
                            return a.defaultValue; }), ve(function (t) { return null == t.getAttribute('disabled'); }) || t(I, function (d, e, t) { var o; if (!t)
                            return !0 === d[e] ? e.toLowerCase() : (o = d.getAttributeNode(e)) && o.specified ? o.value : null; }), Ie; }(ta);
                        ia.find = Ne, ia.expr = Ne.selectors, ia.expr[':'] = ia.expr.pseudos, ia.uniqueSort = ia.unique = Ne.uniqueSort, ia.text = Ne.getText, ia.isXMLDoc = Ne.isXML, ia.contains = Ne.contains;
                        var we = function (d, e, t) { for (var n = []; (d = d[e]) && 9 !== d.nodeType;)
                            if (1 === d.nodeType) {
                                if (void 0 !== t && ia(d).is(t))
                                    break;
                                n.push(d);
                            } return n; }, Ee = function (a, e) { for (var t = []; a; a = a.nextSibling)
                            1 === a.nodeType && a !== e && t.push(a); return t; }, Se = ia.expr.match.needsContext, De = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, _e = /^.[^:#\[\.,]*$/;
                        ia.filter = function (d, e, t) { var n = e[0]; return t && (d = ':not(' + d + ')'), 1 === e.length && 1 === n.nodeType ? ia.find.matchesSelector(n, d) ? [n] : [] : ia.find.matches(d, ia.grep(e, function (t) { return 1 === t.nodeType; })); }, ia.fn.extend({ find: function (d) { var i, o = [], t = this, n = t.length; if ('string' != typeof d)
                                return this.pushStack(ia(d).filter(function () { for (i = 0; i < n; i++)
                                    if (ia.contains(t[i], this))
                                        return !0; })); for (i = 0; i < n; i++)
                                ia.find(d, t[i], o); return o = this.pushStack(1 < n ? ia.unique(o) : o), o.selector = this.selector ? this.selector + ' ' + d : d, o; }, filter: function (t) { return this.pushStack(d(this, t || [], !1)); }, not: function (t) { return this.pushStack(d(this, t || [], !0)); }, is: function (t) { return !!d(this, 'string' == typeof t && Se.test(t) ? ia(t) : t || [], !1).length; } });
                        var ke, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Me = ia.fn.init = function (d, i, l) { var n, a; if (!d)
                            return this; if (l = l || ke, 'string' == typeof d) {
                            if (n = '<' === d.charAt(0) && '>' === d.charAt(d.length - 1) && 3 <= d.length ? [null, d, null] : Ae.exec(d), n && (n[1] || !i)) {
                                if (n[1]) {
                                    if (i = i instanceof ia ? i[0] : i, ia.merge(this, ia.parseHTML(n[1], i && i.nodeType ? i.ownerDocument || i : le, !0)), De.test(n[1]) && ia.isPlainObject(i))
                                        for (n in i)
                                            ia.isFunction(this[n]) ? this[n](i[n]) : this.attr(n, i[n]);
                                    return this;
                                }
                                if (a = le.getElementById(n[2]), a && a.parentNode) {
                                    if (a.id !== n[2])
                                        return ke.find(d);
                                    this.length = 1, this[0] = a;
                                }
                                return this.context = le, this.selector = d, this;
                            }
                            return !i || i.jquery ? (i || l).find(d) : this.constructor(i).find(d);
                        } return d.nodeType ? (this.context = this[0] = d, this.length = 1, this) : ia.isFunction(d) ? 'undefined' == typeof l.ready ? d(ia) : l.ready(d) : (void 0 !== d.selector && (this.selector = d.selector, this.context = d.context), ia.makeArray(d, this)); };
                        Me.prototype = ia.fn, ke = ia(le);
                        var je = /^(?:parents|prev(?:Until|All))/, Le = { children: !0, contents: !0, next: !0, prev: !0 };
                        ia.fn.extend({ has: function (d) { var e, a = ia(d, this), t = a.length; return this.filter(function () { for (e = 0; e < t; e++)
                                if (ia.contains(this, a[e]))
                                    return !0; }); }, closest: function (l, s) { for (var t, i = 0, n = this.length, a = [], o = Se.test(l) || 'string' != typeof l ? ia(l, s || this.context) : 0; i < n; i++)
                                for (t = this[i]; t && t !== s; t = t.parentNode)
                                    if (11 > t.nodeType && (o ? -1 < o.index(t) : 1 === t.nodeType && ia.find.matchesSelector(t, l))) {
                                        a.push(t);
                                        break;
                                    } return this.pushStack(1 < a.length ? ia.uniqueSort(a) : a); }, index: function (t) { return t ? 'string' == typeof t ? ia.inArray(this[0], ia(t)) : ia.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (a, e) { return this.pushStack(ia.uniqueSort(ia.merge(this.get(), ia(a, e)))); }, addBack: function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)); } }), ia.each({ parent: function (a) { var e = a.parentNode; return e && 11 !== e.nodeType ? e : null; }, parents: function (t) { return we(t, 'parentNode'); }, parentsUntil: function (a, e, t) { return we(a, 'parentNode', t); }, next: function (t) { return o(t, 'nextSibling'); }, prev: function (t) { return o(t, 'previousSibling'); }, nextAll: function (t) { return we(t, 'nextSibling'); }, prevAll: function (t) { return we(t, 'previousSibling'); }, nextUntil: function (a, e, t) { return we(a, 'nextSibling', t); }, prevUntil: function (a, e, t) { return we(a, 'previousSibling', t); }, siblings: function (t) { return Ee((t.parentNode || {}).firstChild, t); }, children: function (t) { return Ee(t.firstChild); }, contents: function (t) { return ia.nodeName(t, 'iframe') ? t.contentDocument || t.contentWindow.document : ia.merge([], t.childNodes); } }, function (d, e) { ia.fn[d] = function (t, n) { var i = ia.map(this, e, t); return 'Until' !== d.slice(-5) && (n = t), n && 'string' == typeof n && (i = ia.filter(n, i)), 1 < this.length && (!Le[d] && (i = ia.uniqueSort(i)), je.test(d) && (i = i.reverse())), this.pushStack(i); }; });
                        var He = /\S+/g;
                        ia.Callbacks = function (p) { p = 'string' == typeof p ? na(p) : ia.extend({}, p); var c, u, r, m, f = [], g = [], y = -1, a = function () { for (m = p.once, r = c = !0; g.length; y = -1)
                            for (u = g.shift(); ++y < f.length;)
                                !1 === f[y].apply(u[0], u[1]) && p.stopOnFalse && (y = f.length, u = !1); p.memory || (u = !1), c = !1, m && (u ? f = [] : f = ''); }, h = { add: function () { return f && (u && !c && (y = f.length - 1, g.push(u)), function e(t) { ia.each(t, function (t, a) { ia.isFunction(a) ? (!p.unique || !h.has(a)) && f.push(a) : a && a.length && 'string' !== ia.type(a) && e(a); }); }(arguments), u && !c && a()), this; }, remove: function () { return ia.each(arguments, function (t, e) { for (var a; -1 < (a = ia.inArray(e, f, a));)
                                f.splice(a, 1), a <= y && y--; }), this; }, has: function (t) { return t ? -1 < ia.inArray(t, f) : 0 < f.length; }, empty: function () { return f && (f = []), this; }, disable: function () { return m = g = [], f = u = '', this; }, disabled: function () { return !f; }, lock: function () { return m = !0, u || h.disable(), this; }, locked: function () { return !!m; }, fireWith: function (n, e) { return m || (e = e || [], e = [n, e.slice ? e.slice() : e], g.push(e), !c && a()), this; }, fire: function () { return h.fireWith(this, arguments), this; }, fired: function () { return !!r; } }; return h; }, ia.extend({ Deferred: function (d) { var l = [['resolve', 'done', ia.Callbacks('once memory'), 'resolved'], ['reject', 'fail', ia.Callbacks('once memory'), 'rejected'], ['notify', 'progress', ia.Callbacks('memory')]], e = 'pending', t = { state: function () { return e; }, always: function () { return a.done(arguments).fail(arguments), this; }, then: function () { var o = arguments; return ia.Deferred(function (s) { ia.each(l, function (e, n) { var d = ia.isFunction(o[e]) && o[e]; a[n[1]](function () { var a = d && d.apply(this, arguments); a && ia.isFunction(a.promise) ? a.promise().progress(s.notify).done(s.resolve).fail(s.reject) : s[n[0] + 'With'](this === t ? s.promise() : this, d ? [a] : arguments); }); }), o = null; }).promise(); }, promise: function (a) { return null == a ? t : ia.extend(a, t); } }, a = {}; return t.pipe = t.then, ia.each(l, function (n, o) { var d = o[2], i = o[3]; t[o[1]] = d.add, i && d.add(function () { e = i; }, l[1 ^ n][2].disable, l[2][2].lock), a[o[0]] = function () { return a[o[0] + 'With'](this === a ? t : this, arguments), this; }, a[o[0] + 'With'] = d.fireWith; }), t.promise(a), d && d.call(a, a), a; }, when: function (p) { var c, e, l, s = 0, t = se.call(arguments), n = t.length, r = 1 !== n || p && ia.isFunction(p.promise) ? n : 0, o = 1 === r ? p : ia.Deferred(), a = function (d, e, t) { return function (n) { e[d] = this, t[d] = 1 < arguments.length ? se.call(arguments) : n, t === c ? o.notifyWith(e, t) : !--r && o.resolveWith(e, t); }; }; if (1 < n)
                                for (c = Array(n), e = Array(n), l = Array(n); s < n; s++)
                                    t[s] && ia.isFunction(t[s].promise) ? t[s].promise().progress(a(s, e, c)).done(a(s, l, t)).fail(o.reject) : --r; return r || o.resolveWith(l, t), o.promise(); } });
                        var qe;
                        for (var sa in ia.fn.ready = function (t) { return ia.ready.promise().done(t), this; }, ia.extend({ isReady: !1, readyWait: 1, holdReady: function (t) { t ? ia.readyWait++ : ia.ready(!0); }, ready: function (t) { (!0 === t ? !--ia.readyWait : !ia.isReady) && (ia.isReady = !0, !0 !== t && 0 < --ia.readyWait || (qe.resolveWith(le, [ia]), ia.fn.triggerHandler && (ia(le).triggerHandler('ready'), ia(le).off('ready')))); } }), ia.ready.promise = function (a) { if (!qe)
                            if (qe = ia.Deferred(), 'complete' === le.readyState || 'loading' !== le.readyState && !le.documentElement.doScroll)
                                ta.setTimeout(ia.ready);
                            else if (le.addEventListener)
                                le.addEventListener('DOMContentLoaded', s), ta.addEventListener('load', s);
                            else {
                                le.attachEvent('onreadystatechange', s), ta.attachEvent('onload', s);
                                var e = !1;
                                try {
                                    e = null == ta.frameElement && le.documentElement;
                                }
                                catch (e) { }
                                e && e.doScroll && function t() { if (!ia.isReady) {
                                    try {
                                        e.doScroll('left');
                                    }
                                    catch (e) {
                                        return ta.setTimeout(t, 50);
                                    }
                                    l(), ia.ready();
                                } }();
                            } return qe.promise(a); }, ia.ready.promise(), ia(fe))
                            break;
                        fe.ownFirst = '0' == sa, fe.inlineBlockNeedsLayout = !1, ia(function () { var d, e, t, n; t = le.getElementsByTagName('body')[0], t && t.style && (e = le.createElement('div'), n = le.createElement('div'), n.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', t.appendChild(n).appendChild(e), 'undefined' != typeof e.style.zoom && (e.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', fe.inlineBlockNeedsLayout = d = 3 === e.offsetWidth, d && (t.style.zoom = 1)), t.removeChild(n)); }), function () { var t = le.createElement('div'); fe.deleteExpando = !0; try {
                            delete t.test;
                        }
                        catch (e) {
                            fe.deleteExpando = !1;
                        } t = null; }();
                        var Oe = function (a) { var e = ia.noData[(a.nodeName + ' ').toLowerCase()], d = +a.nodeType || 1; return (1 == d || 9 == d) && (!e || !0 !== e && a.getAttribute('classid') === e); }, Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, i = /([A-Z])/g;
                        ia.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' }, hasData: function (t) { return t = t.nodeType ? ia.cache[t[ia.expando]] : t[ia.expando], !!t && !p(t); }, data: function (a, e, t) { return c(a, e, t); }, removeData: function (a, e) { return u(a, e); }, _data: function (a, e, t) { return c(a, e, t, !0); }, _removeData: function (a, e) { return u(a, e, !0); } }), ia.fn.extend({ data: function (l, s) { var t, o, d, i = this[0], n = i && i.attributes; if (void 0 === l) {
                                if (this.length && (d = ia.data(i), 1 === i.nodeType && !ia._data(i, 'parsedAttrs'))) {
                                    for (t = n.length; t--;)
                                        n[t] && (o = n[t].name, 0 === o.indexOf('data-') && (o = ia.camelCase(o.slice(5)), r(i, o, d[o])));
                                    ia._data(i, 'parsedAttrs', !0);
                                }
                                return d;
                            } return 'object' == typeof l ? this.each(function () { ia.data(this, l); }) : 1 < arguments.length ? this.each(function () { ia.data(this, l, s); }) : i ? r(i, l, ia.data(i, l)) : void 0; }, removeData: function (t) { return this.each(function () { ia.removeData(this, t); }); } }), ia.extend({ queue: function (d, e, t) { var n; if (d)
                                return e = (e || 'fx') + 'queue', n = ia._data(d, e), t && (!n || ia.isArray(t) ? n = ia._data(d, e, ia.makeArray(t)) : n.push(t)), n || []; }, dequeue: function (l, e) { e = e || 'fx'; var t = ia.queue(l, e), n = t.length, s = t.shift(), o = ia._queueHooks(l, e), d = function () { ia.dequeue(l, e); }; 'inprogress' === s && (s = t.shift(), n--), s && ('fx' === e && t.unshift('inprogress'), delete o.stop, s.call(l, d, o)), !n && o && o.empty.fire(); }, _queueHooks: function (a, e) { var t = e + 'queueHooks'; return ia._data(a, t) || ia._data(a, t, { empty: ia.Callbacks('once memory').add(function () { ia._removeData(a, e + 'queue'), ia._removeData(a, t); }) }); } }), ia.fn.extend({ queue: function (a, d) { var t = 2; return 'string' != typeof a && (d = a, a = 'fx', t--), arguments.length < t ? ia.queue(this[0], a) : void 0 === d ? this : this.each(function () { var e = ia.queue(this, a, d); ia._queueHooks(this, a), 'fx' === a && 'inprogress' !== e[0] && ia.dequeue(this, a); }); }, dequeue: function (t) { return this.each(function () { ia.dequeue(this, t); }); }, clearQueue: function (t) { return this.queue(t || 'fx', []); }, promise: function (l, s) { var t, r = 1, n = ia.Deferred(), a = this, o = this.length, d = function () { --r || n.resolveWith(a, [a]); }; for ('string' != typeof l && (s = l, l = void 0), l = l || 'fx'; o--;)
                                t = ia._data(a[o], l + 'queueHooks'), t && t.empty && (r++, t.empty.add(d)); return d(), n.promise(s); } }), function () { var d; fe.shrinkWrapBlocks = function () { if (null != d)
                            return d; d = !1; var e, t, n; if (t = le.getElementsByTagName('body')[0], t && t.style)
                            return e = le.createElement('div'), n = le.createElement('div'), n.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', t.appendChild(n).appendChild(e), 'undefined' != typeof e.style.zoom && (e.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', e.appendChild(le.createElement('div')).style.width = '5px', d = 3 !== e.offsetWidth), t.removeChild(n), d; }; }();
                        var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Re = new RegExp('^(?:([+-])=|)(' + Be + ')([a-z%]*)$', 'i'), Pe = ['Top', 'Right', 'Bottom', 'Left'], We = function (a, e) { return a = e || a, 'none' === ia.css(a, 'display') || !ia.contains(a.ownerDocument, a); }, ze = function (p, e, t, n, a, o, d) { var r = 0, l = p.length, i = null == t; if ('object' === ia.type(t))
                            for (r in a = !0, t)
                                ze(p, e, r, t[r], !0, o, d);
                        else if (void 0 !== n && (a = !0, ia.isFunction(n) || (d = !0), i && (d ? (e.call(p, n), e = null) : (i = e, e = function (a, e, t) { return i.call(ia(a), t); })), e))
                            for (; r < l; r++)
                                e(p[r], t, d ? n : n.call(p[r], r, e(p[r], t))); return a ? p : i ? e.call(p) : l ? e(p[0], t) : o; }, Ge = /^(?:checkbox|radio)$/i, Ue = /<([\w:-]+)/, Xe = /^$|\/(?:java|ecma)script/i, $e = /^\s+/, Ve = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
                        (function () { var a = le.createElement('div'), e = le.createDocumentFragment(), t = le.createElement('input'); a.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', fe.leadingWhitespace = 3 === a.firstChild.nodeType, fe.tbody = !a.getElementsByTagName('tbody').length, fe.htmlSerialize = !!a.getElementsByTagName('link').length, fe.html5Clone = '<:nav></:nav>' !== le.createElement('nav').cloneNode(!0).outerHTML, t.type = 'checkbox', t.checked = !0, e.appendChild(t), fe.appendChecked = t.checked, a.innerHTML = '<textarea>x</textarea>', fe.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, e.appendChild(a), t = le.createElement('input'), t.setAttribute('type', 'radio'), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), a.appendChild(t), fe.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!a.addEventListener, a[ia.expando] = 1, fe.attributes = !a.getAttribute(ia.expando); })();
                        var Je = { option: [1, '<select multiple=\'multiple\'>', '</select>'], legend: [1, '<fieldset>', '</fieldset>'], area: [1, '<map>', '</map>'], param: [1, '<object>', '</object>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: fe.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'] };
                        Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
                        var Ye = /<|&#?\w+;/, Ke = /<tbody/i;
                        (function () { var a, t, n = le.createElement('div'); for (a in { submit: !0, change: !0, focusin: !0 })
                            t = 'on' + a, (fe[a] = t in ta) || (n.setAttribute(t, 't'), fe[a] = !1 === n.attributes[t].expando); n = null; })();
                        var Qe = /^(?:input|select|textarea)$/i, Ze = /^key/, et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, tt = /^(?:focusinfocus|focusoutblur)$/, nt = /^([^.]*)(?:\.(.+)|)/;
                        ia.event = { global: {}, add: function (y, e, n, b, x) { var C, r, l, s, t, p, c, u, m, D, h, I = ia._data(y); if (I) {
                                for (n.handler && (s = n, n = s.handler, x = s.selector), n.guid || (n.guid = ia.guid++), (r = I.events) || (r = I.events = {}), (p = I.handle) || (p = I.handle = function (e) { return 'undefined' == typeof ia || e && ia.event.triggered === e.type ? void 0 : ia.event.dispatch.apply(p.elem, arguments); }, p.elem = y), e = (e || '').match(He) || [''], l = e.length; l--;)
                                    (C = nt.exec(e[l]) || [], m = h = C[1], D = (C[2] || '').split('.').sort(), !!m) && (t = ia.event.special[m] || {}, m = (x ? t.delegateType : t.bindType) || m, t = ia.event.special[m] || {}, c = ia.extend({ type: m, origType: h, data: b, handler: n, guid: n.guid, selector: x, needsContext: x && ia.expr.match.needsContext.test(x), namespace: D.join('.') }, s), (u = r[m]) || (u = r[m] = [], u.delegateCount = 0, (!t.setup || !1 === t.setup.call(y, b, D, p)) && (y.addEventListener ? y.addEventListener(m, p, !1) : y.attachEvent && y.attachEvent('on' + m, p))), t.add && (t.add.call(y, c), !c.handler.guid && (c.handler.guid = n.guid)), x ? u.splice(u.delegateCount++, 0, c) : u.push(c), ia.event.global[m] = !0);
                                y = null;
                            } }, remove: function (y, e, n, b, x) { var d, r, l, C, p, c, t, u, m, g, h, f = ia.hasData(y) && ia._data(y); if (f && (c = f.events)) {
                                for (e = (e || '').match(He) || [''], p = e.length; p--;) {
                                    if (l = nt.exec(e[p]) || [], m = h = l[1], g = (l[2] || '').split('.').sort(), !m) {
                                        for (m in c)
                                            ia.event.remove(y, m + e[p], n, b, !0);
                                        continue;
                                    }
                                    for (t = ia.event.special[m] || {}, m = (b ? t.delegateType : t.bindType) || m, u = c[m] || [], l = l[2] && new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)'), C = d = u.length; d--;)
                                        r = u[d], (x || h === r.origType) && (!n || n.guid === r.guid) && (!l || l.test(r.namespace)) && (!b || b === r.selector || '**' === b && r.selector) && (u.splice(d, 1), r.selector && u.delegateCount--, t.remove && t.remove.call(y, r));
                                    C && !u.length && ((!t.teardown || !1 === t.teardown.call(y, g, f.handle)) && ia.removeEvent(y, m, f.handle), delete c[m]);
                                }
                                ia.isEmptyObject(c) && (delete f.handle, ia._removeData(y, 'events'));
                            } }, trigger: function (o, i, t, n) { var f, s, p, c, u, m, g, y = [t || le], d = he.call(o, 'type') ? o.type : o, r = he.call(o, 'namespace') ? o.namespace.split('.') : []; if ((p = m = t = t || le, 3 !== t.nodeType && 8 !== t.nodeType) && !tt.test(d + ia.event.triggered) && (-1 < d.indexOf('.') && (r = d.split('.'), d = r.shift(), r.sort()), s = 0 > d.indexOf(':') && 'on' + d, o = o[ia.expando] ? o : new ia.Event(d, 'object' == typeof o && o), o.isTrigger = n ? 2 : 3, o.namespace = r.join('.'), o.rnamespace = o.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, o.result = void 0, o.target || (o.target = t), i = null == i ? [o] : ia.makeArray(i, [o]), u = ia.event.special[d] || {}, n || !u.trigger || !1 !== u.trigger.apply(t, i))) {
                                if (!n && !u.noBubble && !ia.isWindow(t)) {
                                    for (c = u.delegateType || d, tt.test(c + d) || (p = p.parentNode); p; p = p.parentNode)
                                        y.push(p), m = p;
                                    m === (t.ownerDocument || le) && y.push(m.defaultView || m.parentWindow || ta);
                                }
                                for (g = 0; (p = y[g++]) && !o.isPropagationStopped();)
                                    o.type = 1 < g ? c : u.bindType || d, f = (ia._data(p, 'events') || {})[o.type] && ia._data(p, 'handle'), f && f.apply(p, i), f = s && p[s], f && f.apply && Oe(p) && (o.result = f.apply(p, i), !1 === o.result && o.preventDefault());
                                if (o.type = d, !n && !o.isDefaultPrevented() && (!u._default || !1 === u._default.apply(y.pop(), i)) && Oe(t) && s && t[d] && !ia.isWindow(t)) {
                                    m = t[s], m && (t[s] = null), ia.event.triggered = d;
                                    try {
                                        t[d]();
                                    }
                                    catch (e) { }
                                    ia.event.triggered = void 0, m && (t[s] = m);
                                }
                                return o.result;
                            } }, dispatch: function (p) { p = ia.event.fix(p); var e, d, i, r, l, s = [], t = se.call(arguments), n = (ia._data(this, 'events') || {})[p.type] || [], a = ia.event.special[p.type] || {}; if (t[0] = p, p.delegateTarget = this, !(a.preDispatch && !1 === a.preDispatch.call(this, p))) {
                                for (s = ia.event.handlers.call(this, p, n), e = 0; (r = s[e++]) && !p.isPropagationStopped();)
                                    for (p.currentTarget = r.elem, d = 0; (l = r.handlers[d++]) && !p.isImmediatePropagationStopped();)
                                        (!p.rnamespace || p.rnamespace.test(l.namespace)) && (p.handleObj = l, p.data = l.data, i = ((ia.event.special[l.origType] || {}).handle || l.handler).apply(r.elem, t), void 0 !== i && !1 === (p.result = i) && (p.preventDefault(), p.stopPropagation()));
                                return a.postDispatch && a.postDispatch.call(this, p), p.result;
                            } }, handlers: function (s, e) { var t, d, p, r, l = [], n = e.delegateCount, a = s.target; if (n && a.nodeType && ('click' !== s.type || isNaN(s.button) || 1 > s.button))
                                for (; a != this; a = a.parentNode || this)
                                    if (1 === a.nodeType && (!0 !== a.disabled || 'click' !== s.type)) {
                                        for (d = [], t = 0; t < n; t++)
                                            r = e[t], p = r.selector + ' ', void 0 === d[p] && (d[p] = r.needsContext ? -1 < ia(p, this).index(a) : ia.find(p, this, null, [a]).length), d[p] && d.push(r);
                                        d.length && l.push({ elem: a, handlers: d });
                                    } return n < e.length && l.push({ elem: this, handlers: e.slice(n) }), l; }, fix: function (l) { if (l[ia.expando])
                                return l; var e, o, d, i = l.type, t = l, n = this.fixHooks[i]; for (n || (this.fixHooks[i] = n = et.test(i) ? this.mouseHooks : Ze.test(i) ? this.keyHooks : {}), d = n.props ? this.props.concat(n.props) : this.props, l = new ia.Event(t), e = d.length; e--;)
                                o = d[e], l[o] = t[o]; return l.target || (l.target = t.srcElement || le), 3 === l.target.nodeType && (l.target = l.target.parentNode), l.metaKey = !!l.metaKey, n.filter ? n.filter(l, t) : l; }, props: ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'detail', 'eventPhase', 'metaKey', 'relatedTarget', 'shiftKey', 'target', 'timeStamp', 'view', 'which'], fixHooks: {}, keyHooks: { props: ['char', 'charCode', 'key', 'keyCode'], filter: function (a, e) { return null == a.which && (a.which = null == e.charCode ? e.keyCode : e.charCode), a; } }, mouseHooks: { props: ['button', 'buttons', 'clientX', 'clientY', 'fromElement', 'offsetX', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY', 'toElement'], filter: function (l, e) { var t, o, d, i = e.button, n = e.fromElement; return null == l.pageX && null != e.clientX && (o = l.target.ownerDocument || le, d = o.documentElement, t = o.body, l.pageX = e.clientX + (d && d.scrollLeft || t && t.scrollLeft || 0) - (d && d.clientLeft || t && t.clientLeft || 0), l.pageY = e.clientY + (d && d.scrollTop || t && t.scrollTop || 0) - (d && d.clientTop || t && t.clientTop || 0)), !l.relatedTarget && n && (l.relatedTarget = n === l.target ? e.toElement : n), l.which || void 0 === i || (l.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), l; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== T() && this.focus)
                                        try {
                                            return this.focus(), !1;
                                        }
                                        catch (e) { } }, delegateType: 'focusin' }, blur: { trigger: function () { if (this === T() && this.blur)
                                        return this.blur(), !1; }, delegateType: 'focusout' }, click: { trigger: function () { if (ia.nodeName(this, 'input') && 'checkbox' === this.type && this.click)
                                        return this.click(), !1; }, _default: function (t) { return ia.nodeName(t.target, 'a'); } }, beforeunload: { postDispatch: function (t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result); } } }, simulate: function (e, d, n) { var a = ia.extend(new ia.Event, n, { type: e, isSimulated: !0 }); ia.event.trigger(a, null, d), a.isDefaultPrevented() && n.preventDefault(); } }, ia.removeEvent = le.removeEventListener ? function (a, e, t) { a.removeEventListener && a.removeEventListener(e, t); } : function (d, e, t) { var n = 'on' + e; d.detachEvent && ('undefined' == typeof d[n] && (d[n] = null), d.detachEvent(n, t)); }, ia.Event = function (a, e) { return this instanceof ia.Event ? void (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? x : C) : this.type = a, e && ia.extend(this, e), this.timeStamp = a && a.timeStamp || ia.now(), this[ia.expando] = !0) : new ia.Event(a, e); }, ia.Event.prototype = { constructor: ia.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = x, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1); }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = x, !e || this.isSimulated || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0); }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = x, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation(); } }, ia.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (a, i) { ia.event.special[a] = { delegateType: i, bindType: i, handle: function (t) { var e, d = this, n = t.relatedTarget, a = t.handleObj; return n && (n === d || ia.contains(d, n)) || (t.type = a.origType, e = a.handler.apply(this, arguments), t.type = i), e; } }; }), fe.submit || (ia.event.special.submit = { setup: function () { return !ia.nodeName(this, 'form') && void ia.event.add(this, 'click._submit keypress._submit', function (a) { var t = a.target, e = ia.nodeName(t, 'input') || ia.nodeName(t, 'button') ? ia.prop(t, 'form') : void 0; e && !ia._data(e, 'submit') && (ia.event.add(e, 'submit._submit', function (t) { t._submitBubble = !0; }), ia._data(e, 'submit', !0)); }); }, postDispatch: function (t) { t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ia.event.simulate('submit', this.parentNode, t)); }, teardown: function () { return !ia.nodeName(this, 'form') && void ia.event.remove(this, '._submit'); } }), fe.change || (ia.event.special.change = { setup: function () { return Qe.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (ia.event.add(this, 'propertychange._change', function (t) { 'checked' === t.originalEvent.propertyName && (this._justChanged = !0); }), ia.event.add(this, 'click._change', function (t) { this._justChanged && !t.isTrigger && (this._justChanged = !1), ia.event.simulate('change', this, t); })), !1) : void ia.event.add(this, 'beforeactivate._change', function (a) { var t = a.target; Qe.test(t.nodeName) && !ia._data(t, 'change') && (ia.event.add(t, 'change._change', function (t) { !this.parentNode || t.isSimulated || t.isTrigger || ia.event.simulate('change', this.parentNode, t); }), ia._data(t, 'change', !0)); }); }, handle: function (a) { var e = a.target; if (this !== e || a.isSimulated || a.isTrigger || 'radio' !== e.type && 'checkbox' !== e.type)
                                return a.handleObj.handler.apply(this, arguments); }, teardown: function () { return ia.event.remove(this, '._change'), !Qe.test(this.nodeName); } }), fe.focusin || ia.each({ focus: 'focusin', blur: 'focusout' }, function (d, i) { var e = function (t) { ia.event.simulate(i, t.target, ia.event.fix(t)); }; ia.event.special[i] = { setup: function () { var t = this.ownerDocument || this, a = ia._data(t, i); a || t.addEventListener(d, e, !0), ia._data(t, i, (a || 0) + 1); }, teardown: function () { var t = this.ownerDocument || this, a = ia._data(t, i) - 1; a ? ia._data(t, i, a) : (t.removeEventListener(d, e, !0), ia._removeData(t, i)); } }; }), ia.fn.extend({ on: function (d, e, t, n) { return v(this, d, e, t, n); }, one: function (d, e, t, n) { return v(this, d, e, t, n, 1); }, off: function (d, i, l) { var n, a; if (d && d.preventDefault && d.handleObj)
                                return n = d.handleObj, ia(d.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler), this; if ('object' == typeof d) {
                                for (a in d)
                                    this.off(a, i, d[a]);
                                return this;
                            } return (!1 === i || 'function' == typeof i) && (l = i, i = void 0), !1 === l && (l = C), this.each(function () { ia.event.remove(this, d, l, i); }); }, trigger: function (a, e) { return this.each(function () { ia.event.trigger(a, e, this); }); }, triggerHandler: function (a, e) { var t = this[0]; if (t)
                                return ia.event.trigger(a, e, t, !0); } });
                        var at = / jQuery\d+="(?:null|\d+)"/g, ot = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, it = /<script|<style|<link/i, rt = /checked\s*(?:[^=]|=\s*.checked.)/i, lt = /^true\/(.*)/, st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, pt = f(le), ct = pt.appendChild(le.createElement('div'));
                        ia.extend({ htmlPrefilter: function (t) { return t.replace(dt, '<$1></$2>'); }, clone: function (s, e, t) { var n, o, d, r, l, i = ia.contains(s.ownerDocument, s); if (fe.html5Clone || ia.isXMLDoc(s) || !ot.test('<' + s.nodeName + '>') ? d = s.cloneNode(!0) : (ct.innerHTML = s.outerHTML, ct.removeChild(d = ct.firstChild)), (!fe.noCloneEvent || !fe.noCloneChecked) && (1 === s.nodeType || 11 === s.nodeType) && !ia.isXMLDoc(s))
                                for (n = g(d), l = g(s), r = 0; null != (o = l[r]); ++r)
                                    n[r] && M(o, n[r]); if (e)
                                if (t)
                                    for (l = l || g(s), n = n || g(d), r = 0; null != (o = l[r]); r++)
                                        S(o, n[r]);
                                else
                                    S(s, d); return n = g(d, 'script'), 0 < n.length && y(n, !i && g(s, 'script')), n = l = o = null, d; }, cleanData: function (c, e) { for (var t, r, l, s, p = 0, n = ia.expando, a = ia.cache, o = fe.attributes, d = ia.event.special; null != (t = c[p]); p++)
                                if ((e || Oe(t)) && (l = t[n], s = l && a[l], s)) {
                                    if (s.events)
                                        for (r in s.events)
                                            d[r] ? ia.event.remove(t, r) : ia.removeEvent(t, r, s.handle);
                                    a[l] && (delete a[l], o || 'undefined' == typeof t.removeAttribute ? t[n] = void 0 : t.removeAttribute(n), re.push(l));
                                } } }), ia.fn.extend({ domManip: _, detach: function (t) { return k(this, t, !0); }, remove: function (t) { return k(this, t); }, text: function (t) { return ze(this, function (t) { return void 0 === t ? ia.text(this) : this.empty().append((this[0] && this[0].ownerDocument || le).createTextNode(t)); }, null, t, arguments.length); }, append: function () { return _(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = E(this, a);
                                e.appendChild(a);
                            } }); }, prepend: function () { return _(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = E(this, a);
                                e.insertBefore(a, e.firstChild);
                            } }); }, before: function () { return _(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this); }); }, after: function () { return _(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling); }); }, empty: function () { for (var a, t = 0; null != (a = this[t]); t++) {
                                for (1 === a.nodeType && ia.cleanData(g(a, !1)); a.firstChild;)
                                    a.removeChild(a.firstChild);
                                a.options && ia.nodeName(a, 'select') && (a.options.length = 0);
                            } return this; }, clone: function (a, e) { return a = null != a && a, e = null == e ? a : e, this.map(function () { return ia.clone(this, a, e); }); }, html: function (t) { return ze(this, function (d) { var o = this[0] || {}, t = 0, n = this.length; if (void 0 === d)
                                return 1 === o.nodeType ? o.innerHTML.replace(at, '') : void 0; if ('string' == typeof d && !it.test(d) && (fe.htmlSerialize || !ot.test(d)) && (fe.leadingWhitespace || !$e.test(d)) && !Je[(Ue.exec(d) || ['', ''])[1].toLowerCase()]) {
                                d = ia.htmlPrefilter(d);
                                try {
                                    for (; t < n; t++)
                                        o = this[t] || {}, 1 === o.nodeType && (ia.cleanData(g(o, !1)), o.innerHTML = d);
                                    o = 0;
                                }
                                catch (e) { }
                            } o && this.empty().append(d); }, null, t, arguments.length); }, replaceWith: function () { var a = []; return _(this, arguments, function (e) { var t = this.parentNode; 0 > ia.inArray(this, a) && (ia.cleanData(g(this)), t && t.replaceChild(e, this)); }, a); } }), ia.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (a, l) { ia.fn[a] = function (t) { for (var e, i = 0, n = [], a = ia(t), o = a.length - 1; i <= o; i++)
                            e = i === o ? this : this.clone(!0), ia(a[i])[l](e), ce.apply(n, e.get()); return this.pushStack(n); }; });
                        var ut, xt = { HTML: 'block', BODY: 'block' }, mt = /^margin/, gt = new RegExp('^(' + Be + ')(?!px)[a-z%]+$', 'i'), ht = function (l, e, t, n) { var a, d, i = {}; for (d in e)
                            i[d] = l.style[d], l.style[d] = e[d]; for (d in a = t.apply(l, n || []), e)
                            l.style[d] = i[d]; return a; }, ft = le.documentElement;
                        (function () { function o() { var n, o, p = le.documentElement; p.appendChild(s), t.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', u = d = l = !1, a = r = !0, ta.getComputedStyle && (o = ta.getComputedStyle(t), u = '1%' !== (o || {}).top, l = '2px' === (o || {}).marginLeft, d = '4px' === (o || { width: '4px' }).width, t.style.marginRight = '50%', a = '4px' === (o || { marginRight: '4px' }).marginRight, n = t.appendChild(le.createElement('div')), n.style.cssText = t.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', n.style.marginRight = n.style.width = '0', t.style.width = '1px', r = !parseFloat((ta.getComputedStyle(n) || {}).marginRight), t.removeChild(n)), t.style.display = 'none', i = 0 === t.getClientRects().length, i && (t.style.display = '', t.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', t.childNodes[0].style.borderCollapse = 'separate', n = t.getElementsByTagName('td'), n[0].style.cssText = 'margin:0;border:0;padding:0;display:none', i = 0 === n[0].offsetHeight, i && (n[0].style.display = '', n[1].style.display = 'none', i = 0 === n[0].offsetHeight)), p.removeChild(s); } var u, a, d, i, r, l, s = le.createElement('div'), t = le.createElement('div'); t.style && (t.style.cssText = 'float:left;opacity:.5', fe.opacity = '0.5' === t.style.opacity, fe.cssFloat = !!t.style.cssFloat, t.style.backgroundClip = 'content-box', t.cloneNode(!0).style.backgroundClip = '', fe.clearCloneStyle = 'content-box' === t.style.backgroundClip, s = le.createElement('div'), s.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', t.innerHTML = '', s.appendChild(t), fe.boxSizing = '' === t.style.boxSizing || '' === t.style.MozBoxSizing || '' === t.style.WebkitBoxSizing, ia.extend(fe, { reliableHiddenOffsets: function () { return null == u && o(), i; }, boxSizingReliable: function () { return null == u && o(), d; }, pixelMarginRight: function () { return null == u && o(), a; }, pixelPosition: function () { return null == u && o(), u; }, reliableMarginRight: function () { return null == u && o(), r; }, reliableMarginLeft: function () { return null == u && o(), l; } })); })();
                        var yt, bt, vt = /^(top|right|bottom|left)$/;
                        ta.getComputedStyle ? (yt = function (a) { var e = a.ownerDocument.defaultView; return e && e.opener || (e = ta), e.getComputedStyle(a); }, bt = function (l, e, t) { var n, o, d, i, s = l.style; return t = t || yt(l), i = t ? t.getPropertyValue(e) || t[e] : void 0, '' !== i && void 0 !== i || ia.contains(l.ownerDocument, l) || (i = ia.style(l, e)), t && !fe.pixelMarginRight() && gt.test(i) && mt.test(e) && (n = s.width, o = s.minWidth, d = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = t.width, s.width = n, s.minWidth = o, s.maxWidth = d), void 0 === i ? i : i + ''; }) : ft.currentStyle && (yt = function (t) { return t.currentStyle; }, bt = function (l, e, t) { var n, o, d, i, s = l.style; return t = t || yt(l), i = t ? t[e] : void 0, null == i && s && s[e] && (i = s[e]), gt.test(i) && !vt.test(e) && (n = s.left, o = l.runtimeStyle, d = o && o.left, d && (o.left = l.currentStyle.left), s.left = 'fontSize' === e ? '1em' : i, i = s.pixelLeft + 'px', s.left = n, d && (o.left = d)), void 0 === i ? i : i + '' || 'auto'; });
                        var Ct = /alpha\([^)]*\)/i, Tt = /opacity\s*=\s*([^)]*)/i, Nt = /^(none|table(?!-c[ea]).+)/, wt = new RegExp('^(' + Be + ')(.*)$', 'i'), Et = { position: 'absolute', visibility: 'hidden', display: 'block' }, St = { letterSpacing: '0', fontWeight: '400' }, Dt = ['Webkit', 'O', 'Moz', 'ms'], _t = le.createElement('div').style;
                        ia.extend({ cssHooks: { opacity: { get: function (a, e) { if (e) {
                                        var t = bt(a, 'opacity');
                                        return '' === t ? '1' : t;
                                    } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: fe.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function (s, e, t, p) { if (s && 3 !== s.nodeType && 8 !== s.nodeType && s.style) {
                                var a, i, r, c = ia.camelCase(e), o = s.style;
                                if (e = ia.cssProps[c] || (ia.cssProps[c] = I(c) || c), r = ia.cssHooks[e] || ia.cssHooks[c], void 0 !== t) {
                                    if (i = typeof t, 'string' === i && (a = Re.exec(t)) && a[1] && (t = m(s, e, a), i = 'number'), null == t || t !== t)
                                        return;
                                    if ('number' === i && (t += a && a[3] || (ia.cssNumber[c] ? '' : 'px')), fe.clearCloneStyle || '' !== t || 0 !== e.indexOf('background') || (o[e] = 'inherit'), !r || !('set' in r) || void 0 !== (t = r.set(s, t, p)))
                                        try {
                                            o[e] = t;
                                        }
                                        catch (e) { }
                                }
                                else
                                    return r && 'get' in r && void 0 !== (a = r.get(s, !1, p)) ? a : o[e];
                            } }, css: function (l, e, t, n) { var a, d, i, s = ia.camelCase(e); return e = ia.cssProps[s] || (ia.cssProps[s] = I(s) || s), i = ia.cssHooks[e] || ia.cssHooks[s], i && 'get' in i && (d = i.get(l, !0, t)), void 0 === d && (d = bt(l, e, n)), 'normal' === d && e in St && (d = St[e]), '' === t || t ? (a = parseFloat(d), !0 === t || isFinite(a) ? a || 0 : d) : d; } }), ia.each(['height', 'width'], function (a, d) { ia.cssHooks[d] = { get: function (t, e, n) { if (e)
                                return Nt.test(ia.css(t, 'display')) && 0 === t.offsetWidth ? ht(t, Et, function () { return R(t, d, n); }) : R(t, d, n); }, set: function (t, e, n) { var a = n && yt(t); return F(t, e, n ? B(t, d, n, fe.boxSizing && 'border-box' === ia.css(t, 'boxSizing', !1, a), a) : 0); } }; }), fe.opacity || (ia.cssHooks.opacity = { get: function (a, e) { return Tt.test((e && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : e ? '1' : ''; }, set: function (i, e) { var t = i.style, n = i.currentStyle, a = ia.isNumeric(e) ? 'alpha(opacity=' + 100 * e + ')' : '', o = n && n.filter || t.filter || ''; t.zoom = 1, (1 <= e || '' === e) && '' === ia.trim(o.replace(Ct, '')) && t.removeAttribute && (t.removeAttribute('filter'), '' === e || n && !n.filter) || (t.filter = Ct.test(o) ? o.replace(Ct, a) : o + ' ' + a); } }), ia.cssHooks.marginRight = q(fe.reliableMarginRight, function (a, e) { if (e)
                            return ht(a, { display: 'inline-block' }, bt, [a, 'marginRight']); }), ia.cssHooks.marginLeft = q(fe.reliableMarginLeft, function (a, e) { if (e)
                            return (parseFloat(bt(a, 'marginLeft')) || (ia.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - ht(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left; }) : 0)) + 'px'; }), ia.each({ margin: '', padding: '', border: 'Width' }, function (i, e) { ia.cssHooks[i + e] = { expand: function (t) { for (var l = 0, a = {}, o = 'string' == typeof t ? t.split(' ') : [t]; 4 > l; l++)
                                a[i + Pe[l] + e] = o[l] || o[l - 2] || o[0]; return a; } }, mt.test(i) || (ia.cssHooks[i + e].set = F); }), ia.fn.extend({ css: function (a, e) { return ze(this, function (l, e, t) { var n, d, i = {}, a = 0; if (ia.isArray(e)) {
                                for (n = yt(l), d = e.length; a < d; a++)
                                    i[e[a]] = ia.css(l, e[a], !1, n);
                                return i;
                            } return void 0 === t ? ia.css(l, e) : ia.style(l, e, t); }, a, e, 1 < arguments.length); }, show: function () { return H(this, !0); }, hide: function () { return H(this); }, toggle: function (t) { return 'boolean' == typeof t ? t ? this.show() : this.hide() : this.each(function () { We(this) ? ia(this).show() : ia(this).hide(); }); } }), ia.Tween = O, O.prototype = { constructor: O, init: function (i, e, t, n, a, o) { this.elem = i, this.prop = t, this.easing = a || ia.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ia.cssNumber[t] ? '' : 'px'); }, cur: function () { var t = O.propHooks[this.prop]; return t && t.get ? t.get(this) : O.propHooks._default.get(this); }, run: function (a) { var e, n = O.propHooks[this.prop]; return this.pos = this.options.duration ? e = ia.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : e = a, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this; } }, O.prototype.init.prototype = O.prototype, O.propHooks = { _default: { get: function (a) { var e; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (e = ia.css(a.elem, a.prop, ''), e && 'auto' !== e ? e : 0); }, set: function (t) { ia.fx.step[t.prop] ? ia.fx.step[t.prop](t) : 1 === t.elem.nodeType && (null != t.elem.style[ia.cssProps[t.prop]] || ia.cssHooks[t.prop]) ? ia.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now; } } }, O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function (t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now); } }, ia.easing = { linear: function (t) { return t; }, swing: function (t) { return .5 - Math.cos(t * Math.PI) / 2; }, _default: 'swing' }, ia.fx = O.prototype.init, ia.fx.step = {};
                        var kt, At, Lt = /^(?:toggle|show|hide)$/, Mt = /queueHooks$/;
                        ia.Animation = ia.extend($, { tweeners: { "*": [function (a, e) { var t = this.createTween(a, e); return m(t.elem, a, Re.exec(e), t), t; }] }, tweener: function (d, e) { ia.isFunction(d) ? (e = d, d = ['*']) : d = d.match(He); for (var t, o = 0, n = d.length; o < n; o++)
                                t = d[o], $.tweeners[t] = $.tweeners[t] || [], $.tweeners[t].unshift(e); }, prefilters: [U], prefilter: function (a, e) { e ? $.prefilters.unshift(a) : $.prefilters.push(a); } }), ia.speed = function (d, o, t) { var i = d && 'object' == typeof d ? ia.extend({}, d) : { complete: t || !t && o || ia.isFunction(d) && d, duration: d, easing: t && o || o && !ia.isFunction(o) && o }; return i.duration = ia.fx.off ? 0 : 'number' == typeof i.duration ? i.duration : i.duration in ia.fx.speeds ? ia.fx.speeds[i.duration] : ia.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = 'fx'), i.old = i.complete, i.complete = function () { ia.isFunction(i.old) && i.old.call(this), i.queue && ia.dequeue(this, i.queue); }, i; }, ia.fn.extend({ fadeTo: function (d, e, o, n) { return this.filter(We).css('opacity', 0).show().end().animate({ opacity: e }, d, o, n); }, animate: function (l, e, t, n) { var a = ia.isEmptyObject(l), o = ia.speed(e, t, n), d = function () { var e = $(this, ia.extend({}, l), o); (a || ia._data(this, 'finish')) && e.stop(!0); }; return d.finish = d, a || !1 === o.queue ? this.each(d) : this.queue(o.queue, d); }, stop: function (l, d, s) { var r = function (a) { var e = a.stop; delete a.stop, e(s); }; return 'string' != typeof l && (s = d, d = l, l = void 0), d && !1 !== l && this.queue(l || 'fx', []), this.each(function () { var e = !0, t = null != l && l + 'queueHooks', a = ia.timers, d = ia._data(this); if (t)
                                d[t] && d[t].stop && r(d[t]);
                            else
                                for (t in d)
                                    d[t] && d[t].stop && Mt.test(t) && r(d[t]); for (t = a.length; t--;)
                                a[t].elem === this && (null == l || a[t].queue === l) && (a[t].anim.stop(s), e = !1, a.splice(t, 1)); (e || !s) && ia.dequeue(this, l); }); }, finish: function (l) { return !1 !== l && (l = l || 'fx'), this.each(function () { var e, i = ia._data(this), t = i[l + 'queue'], n = i[l + 'queueHooks'], a = ia.timers, o = t ? t.length : 0; for (i.finish = !0, ia.queue(this, l, []), n && n.stop && n.stop.call(this, !0), e = a.length; e--;)
                                a[e].elem === this && a[e].queue === l && (a[e].anim.stop(!0), a.splice(e, 1)); for (e = 0; e < o; e++)
                                t[e] && t[e].finish && t[e].finish.call(this); delete i.finish; }); } }), ia.each(['toggle', 'show', 'hide'], function (a, d) { var t = ia.fn[d]; ia.fn[d] = function (n, i, a) { return null == n || 'boolean' == typeof n ? t.apply(this, arguments) : this.animate(z(d, !0), n, i, a); }; }), ia.each({ slideDown: z('show'), slideUp: z('hide'), slideToggle: z('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (a, d) { ia.fn[a] = function (t, e, n) { return this.animate(d, t, e, n); }; }), ia.timers = [], ia.fx.tick = function () { var a, n = ia.timers, e = 0; for (kt = ia.now(); e < n.length; e++)
                            a = n[e], a() || n[e] !== a || n.splice(e--, 1); n.length || ia.fx.stop(), kt = void 0; }, ia.fx.timer = function (t) { ia.timers.push(t), t() ? ia.fx.start() : ia.timers.pop(); }, ia.fx.interval = 13, ia.fx.start = function () { At || (At = ta.setInterval(ia.fx.tick, ia.fx.interval)); }, ia.fx.stop = function () { ta.clearInterval(At), At = null; }, ia.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ia.fn.delay = function (d, e) { return d = ia.fx ? ia.fx.speeds[d] || d : d, e = e || 'fx', this.queue(e, function (e, t) { var n = ta.setTimeout(e, d); t.stop = function () { ta.clearTimeout(n); }; }); }, function () { var a, d = le.createElement('input'), e = le.createElement('div'), t = le.createElement('select'), n = t.appendChild(le.createElement('option')); e = le.createElement('div'), e.setAttribute('className', 't'), e.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', a = e.getElementsByTagName('a')[0], d.setAttribute('type', 'checkbox'), e.appendChild(d), a = e.getElementsByTagName('a')[0], a.style.cssText = 'top:1px', fe.getSetAttribute = 't' !== e.className, fe.style = /top/.test(a.getAttribute('style')), fe.hrefNormalized = '/a' === a.getAttribute('href'), fe.checkOn = !!d.value, fe.optSelected = n.selected, fe.enctype = !!le.createElement('form').enctype, t.disabled = !0, fe.optDisabled = !n.disabled, d = le.createElement('input'), d.setAttribute('value', ''), fe.input = '' === d.getAttribute('value'), d.value = 't', d.setAttribute('type', 'radio'), fe.radioValue = 't' === d.value; }();
                        var jt = /\r/g, Ht = /[\x20\t\r\n\f]+/g;
                        ia.fn.extend({ val: function (d) { var e, i, l, o = this[0]; return arguments.length ? (l = ia.isFunction(d), this.each(function (o) { var t; 1 !== this.nodeType || (t = l ? d.call(this, o, ia(this).val()) : d, null == t ? t = '' : 'number' == typeof t ? t += '' : ia.isArray(t) && (t = ia.map(t, function (t) { return null == t ? '' : t + ''; })), e = ia.valHooks[this.type] || ia.valHooks[this.nodeName.toLowerCase()], (!e || !('set' in e) || void 0 === e.set(this, t, 'value')) && (this.value = t)); })) : o ? (e = ia.valHooks[o.type] || ia.valHooks[o.nodeName.toLowerCase()], e && 'get' in e && void 0 !== (i = e.get(o, 'value'))) ? i : (i = o.value, 'string' == typeof i ? i.replace(jt, '') : null == i ? '' : i) : void 0; } }), ia.extend({ valHooks: { option: { get: function (a) { var e = ia.find.attr(a, 'value'); return null == e ? ia.trim(ia.text(a)).replace(Ht, ' ') : e; } }, select: { get: function (s) { for (var e, i, l = s.options, t = s.selectedIndex, n = 'select-one' === s.type || 0 > t, a = n ? null : [], o = n ? t + 1 : l.length, d = 0 > t ? o : n ? t : 0; d < o; d++)
                                        if (i = l[d], (i.selected || d === t) && (fe.optDisabled ? !i.disabled : null === i.getAttribute('disabled')) && (!i.parentNode.disabled || !ia.nodeName(i.parentNode, 'optgroup'))) {
                                            if (e = ia(i).val(), n)
                                                return e;
                                            a.push(e);
                                        } return a; }, set: function (l, e) { for (var t, d, i = l.options, n = ia.makeArray(e), a = i.length; a--;)
                                        if (d = i[a], -1 < ia.inArray(ia.valHooks.option.get(d), n))
                                            try {
                                                d.selected = t = !0;
                                            }
                                            catch (t) {
                                                d.scrollHeight;
                                            }
                                        else
                                            d.selected = !1; return t || (l.selectedIndex = -1), i; } } } }), ia.each(['radio', 'checkbox'], function () { ia.valHooks[this] = { set: function (a, e) { if (ia.isArray(e))
                                return a.checked = -1 < ia.inArray(ia(a).val(), e); } }, fe.checkOn || (ia.valHooks[this].get = function (t) { return null === t.getAttribute('value') ? 'on' : t.value; }); });
                        var qt, Rt, Pt = ia.expr.attrHandle, It = /^(?:checked|selected)$/i, Ot = fe.getSetAttribute, ra = fe.input;
                        ia.fn.extend({ attr: function (a, e) { return ze(this, ia.attr, a, e, 1 < arguments.length); }, removeAttr: function (t) { return this.each(function () { ia.removeAttr(this, t); }); } }), ia.extend({ attr: function (i, e, t) { var n, o, d = i.nodeType; if (3 !== d && 8 !== d && 2 !== d)
                                return 'undefined' == typeof i.getAttribute ? ia.prop(i, e, t) : (1 === d && ia.isXMLDoc(i) || (e = e.toLowerCase(), o = ia.attrHooks[e] || (ia.expr.match.bool.test(e) ? Rt : qt)), void 0 !== t) ? null === t ? void ia.removeAttr(i, e) : o && 'set' in o && void 0 !== (n = o.set(i, t, e)) ? n : (i.setAttribute(e, t + ''), t) : o && 'get' in o && null !== (n = o.get(i, e)) ? n : (n = ia.find.attr(i, e), null == n ? void 0 : n); }, attrHooks: { type: { set: function (a, e) { if (!fe.radioValue && 'radio' === e && ia.nodeName(a, 'input')) {
                                        var t = a.value;
                                        return a.setAttribute('type', e), t && (a.value = t), e;
                                    } } } }, removeAttr: function (i, e) { var t, o, d = 0, n = e && e.match(He); if (n && 1 === i.nodeType)
                                for (; t = n[d++];)
                                    o = ia.propFix[t] || t, ia.expr.match.bool.test(t) ? ra && Ot || !It.test(t) ? i[o] = !1 : i[ia.camelCase('default-' + t)] = i[o] = !1 : ia.attr(i, t, ''), i.removeAttribute(Ot ? t : o); } }), Rt = { set: function (a, e, t) { return !1 === e ? ia.removeAttr(a, t) : ra && Ot || !It.test(t) ? a.setAttribute(!Ot && ia.propFix[t] || t, t) : a[ia.camelCase('default-' + t)] = a[t] = !0, t; } }, ia.each(ia.expr.match.bool.source.match(/\w+/g), function (a, e) { var i = Pt[e] || ia.find.attr; Pt[e] = ra && Ot || !It.test(e) ? function (n, e, t) { var a, o; return t || (o = Pt[e], Pt[e] = a, a = null == i(n, e, t) ? null : e.toLowerCase(), Pt[e] = o), a; } : function (a, e, t) { if (!t)
                            return a[ia.camelCase('default-' + e)] ? e.toLowerCase() : null; }; }), ra && Ot || (ia.attrHooks.value = { set: function (a, e, t) { return ia.nodeName(a, 'input') ? void (a.defaultValue = e) : qt && qt.set(a, e, t); } }), Ot || (qt = { set: function (d, e, t) { var n = d.getAttributeNode(t); if (n || d.setAttributeNode(n = d.ownerDocument.createAttribute(t)), n.value = e += '', 'value' === t || e === d.getAttribute(t))
                                return e; } }, Pt.id = Pt.name = Pt.coords = function (d, e, t) { var o; if (!t)
                            return (o = d.getAttributeNode(e)) && '' !== o.value ? o.value : null; }, ia.valHooks.button = { get: function (a, e) { var t = a.getAttributeNode(e); if (t && t.specified)
                                return t.value; }, set: qt.set }, ia.attrHooks.contenteditable = { set: function (a, e, t) { qt.set(a, '' !== e && e, t); } }, ia.each(['width', 'height'], function (a, d) { ia.attrHooks[d] = { set: function (t, e) { if ('' === e)
                                return t.setAttribute(d, 'auto'), e; } }; })), fe.style || (ia.attrHooks.style = { get: function (t) { return t.style.cssText || void 0; }, set: function (a, e) { return a.style.cssText = e + ''; } });
                        var Bt = /^(?:input|select|textarea|button|object)$/i, Wt = /^(?:a|area)$/i;
                        ia.fn.extend({ prop: function (a, e) { return ze(this, ia.prop, a, e, 1 < arguments.length); }, removeProp: function (t) { return t = ia.propFix[t] || t, this.each(function () { try {
                                this[t] = void 0, delete this[t];
                            }
                            catch (e) { } }); } }), ia.extend({ prop: function (i, e, t) { var n, o, d = i.nodeType; if (3 !== d && 8 !== d && 2 !== d)
                                return 1 === d && ia.isXMLDoc(i) || (e = ia.propFix[e] || e, o = ia.propHooks[e]), void 0 === t ? o && 'get' in o && null !== (n = o.get(i, e)) ? n : i[e] : o && 'set' in o && void 0 !== (n = o.set(i, t, e)) ? n : i[e] = t; }, propHooks: { tabIndex: { get: function (a) { var e = ia.find.attr(a, 'tabindex'); return e ? parseInt(e, 10) : Bt.test(a.nodeName) || Wt.test(a.nodeName) && a.href ? 0 : -1; } } }, propFix: { "for": 'htmlFor', "class": 'className' } }), fe.hrefNormalized || ia.each(['href', 'src'], function (a, n) { ia.propHooks[n] = { get: function (t) { return t.getAttribute(n, 4); } }; }), fe.optSelected || (ia.propHooks.selected = { get: function (a) { var e = a.parentNode; return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null; }, set: function (a) { var e = a.parentNode; e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex); } }), ia.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { ia.propFix[this.toLowerCase()] = this; }), fe.enctype || (ia.propFix.enctype = 'encoding');
                        var zt = /[\t\r\n\f]/g;
                        ia.fn.extend({ addClass: function (s) { var p, n, a, o, d, i, r, l = 0; if (ia.isFunction(s))
                                return this.each(function (e) { ia(this).addClass(s.call(this, e, V(this))); }); if ('string' == typeof s && s)
                                for (p = s.match(He) || []; n = this[l++];)
                                    if (o = V(n), a = 1 === n.nodeType && (' ' + o + ' ').replace(zt, ' '), a) {
                                        for (i = 0; d = p[i++];)
                                            0 > a.indexOf(' ' + d + ' ') && (a += d + ' ');
                                        r = ia.trim(a), o !== r && ia.attr(n, 'class', r);
                                    } return this; }, removeClass: function (s) { var p, n, a, o, d, i, r, l = 0; if (ia.isFunction(s))
                                return this.each(function (e) { ia(this).removeClass(s.call(this, e, V(this))); }); if (!arguments.length)
                                return this.attr('class', ''); if ('string' == typeof s && s)
                                for (p = s.match(He) || []; n = this[l++];)
                                    if (o = V(n), a = 1 === n.nodeType && (' ' + o + ' ').replace(zt, ' '), a) {
                                        for (i = 0; d = p[i++];)
                                            for (; -1 < a.indexOf(' ' + d + ' ');)
                                                a = a.replace(' ' + d + ' ', ' ');
                                        r = ia.trim(a), o !== r && ia.attr(n, 'class', r);
                                    } return this; }, toggleClass: function (i, a) { var l = typeof i; return 'boolean' == typeof a && 'string' == l ? a ? this.addClass(i) : this.removeClass(i) : ia.isFunction(i) ? this.each(function (e) { ia(this).toggleClass(i.call(this, e, V(this), a), a); }) : this.each(function () { var e, t, a, n; if ('string' == l)
                                for (t = 0, a = ia(this), n = i.match(He) || []; e = n[t++];)
                                    a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                            else
                                (void 0 === i || 'boolean' == l) && (e = V(this), e && ia._data(this, '__className__', e), ia.attr(this, 'class', e || !1 === i ? '' : ia._data(this, '__className__') || '')); }); }, hasClass: function (d) { var e, n, a = 0; for (e = ' ' + d + ' '; n = this[a++];)
                                if (1 === n.nodeType && -1 < (' ' + V(n) + ' ').replace(zt, ' ').indexOf(e))
                                    return !0; return !1; } }), ia.each(['blur', 'focus', 'focusin', 'focusout', 'load', 'resize', 'scroll', 'unload', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'error', 'contextmenu'], function (a, d) { ia.fn[d] = function (t, e) { return 0 < arguments.length ? this.on(d, null, t, e) : this.trigger(d); }; }), ia.fn.extend({ hover: function (a, e) { return this.mouseenter(a).mouseleave(e || a); } });
                        var Gt = ta.location, Ut = ia.now(), Xt = /\?/, $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                        ia.parseJSON = function (d) { if (ta.JSON && ta.JSON.parse)
                            return ta.JSON.parse(d + ''); var i, a = null, e = ia.trim(d + ''); return e && !ia.trim(e.replace($t, function (t, e, n, l) { return (i && e && (a = 0), 0 === a) ? t : (i = n || e, a += !l - !n, ''); })) ? Function('return ' + e)() : ia.error('Invalid JSON: ' + d); }, ia.parseXML = function (a) { var d, t; if (!a || 'string' != typeof a)
                            return null; try {
                            ta.DOMParser ? (t = new ta.DOMParser, d = t.parseFromString(a, 'text/xml')) : (d = new ta.ActiveXObject('Microsoft.XMLDOM'), d.async = 'false', d.loadXML(a));
                        }
                        catch (e) {
                            d = void 0;
                        } return d && d.documentElement && !d.getElementsByTagName('parsererror').length || ia.error('Invalid XML: ' + a), d; };
                        var Vt = /#.*$/, Jt = /([?&])_=[^&]*/, Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qt = /^(?:GET|HEAD)$/, Zt = /^\/\//, pa = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ca = {}, ua = {}, ma = '*/'.concat('*'), fa = Gt.href, ga = pa.exec(fa.toLowerCase()) || [];
                        ia.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: fa, type: 'GET', isLocal: Kt.test(ga[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { "*": ma, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { "* text": String, "text html": !0, "text json": ia.parseJSON, "text xml": ia.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, e) { return e ? K(K(a, ia.ajaxSettings), e) : K(ia.ajaxSettings, a); }, ajaxPrefilter: J(ca), ajaxTransport: J(ua), ajax: function (o, D) { function I(o, e, t, p) { var c, g, f, h, D, I = e; 2 == w || (w = 2, x && ta.clearTimeout(x), b = void 0, i = p || '', m.readyState = 0 < o ? 4 : 0, c = 200 <= o && 300 > o || 304 === o, t && (h = Q(S, m, t)), h = Z(S, h, m, c), c ? (S.ifModified && (D = m.getResponseHeader('Last-Modified'), D && (ia.lastModified[E] = D), D = m.getResponseHeader('etag'), D && (ia.etag[E] = D)), 204 === o || 'HEAD' === S.type ? I = 'nocontent' : 304 === o ? I = 'notmodified' : (I = h.state, g = h.data, f = h.error, c = !f)) : (f = I, (o || !I) && (I = 'error', 0 > o && (o = 0))), m.status = o, m.statusText = (e || I) + '', c ? r.resolveWith(a, [g, I, m]) : r.rejectWith(a, [m, I, f]), m.statusCode(s), s = void 0, C && d.trigger(c ? 'ajaxSuccess' : 'ajaxError', [m, S, c ? g : f]), l.fireWith(a, [m, I]), C && (d.trigger('ajaxComplete', [m, S]), !--ia.active && ia.event.trigger('ajaxStop'))); } 'object' == typeof o && (D = o, o = void 0), D = D || {}; var t, n, E, i, x, C, b, f, S = ia.ajaxSetup({}, D), a = S.context || S, d = S.context && (a.nodeType || a.jquery) ? ia(a) : ia.event, r = ia.Deferred(), l = ia.Callbacks('once memory'), s = S.statusCode || {}, p = {}, c = {}, w = 0, u = 'canceled', m = { readyState: 0, getResponseHeader: function (a) { var e; if (2 == w) {
                                    if (!f)
                                        for (f = {}; e = Yt.exec(i);)
                                            f[e[1].toLowerCase()] = e[2];
                                    e = f[a.toLowerCase()];
                                } return null == e ? null : e; }, getAllResponseHeaders: function () { return 2 == w ? i : null; }, setRequestHeader: function (a, e) { var t = a.toLowerCase(); return w || (a = c[t] = c[t] || a, p[a] = e), this; }, overrideMimeType: function (t) { return w || (S.mimeType = t), this; }, statusCode: function (a) { if (a)
                                    if (2 > w)
                                        for (var e in a)
                                            s[e] = [s[e], a[e]];
                                    else
                                        m.always(a[m.status]); return this; }, abort: function (a) { var e = a || u; return b && b.abort(e), I(0, e), this; } }; if (r.promise(m).complete = l.add, m.success = m.done, m.error = m.fail, S.url = ((o || S.url || fa) + '').replace(Vt, '').replace(Zt, ga[1] + '//'), S.type = D.method || D.type || S.method || S.type, S.dataTypes = ia.trim(S.dataType || '*').toLowerCase().match(He) || [''], null == S.crossDomain && (t = pa.exec(S.url.toLowerCase()), S.crossDomain = !!(t && (t[1] !== ga[1] || t[2] !== ga[2] || (t[3] || ('http:' === t[1] ? '80' : '443')) !== (ga[3] || ('http:' === ga[1] ? '80' : '443'))))), S.data && S.processData && 'string' != typeof S.data && (S.data = ia.param(S.data, S.traditional)), Y(ca, S, D, m), 2 == w)
                                return m; for (n in C = ia.event && S.global, C && 0 == ia.active++ && ia.event.trigger('ajaxStart'), S.type = S.type.toUpperCase(), S.hasContent = !Qt.test(S.type), E = S.url, S.hasContent || (S.data && (E = S.url += (Xt.test(E) ? '&' : '?') + S.data, delete S.data), !1 === S.cache && (S.url = Jt.test(E) ? E.replace(Jt, '$1_=' + Ut++) : E + (Xt.test(E) ? '&' : '?') + '_=' + Ut++)), S.ifModified && (ia.lastModified[E] && m.setRequestHeader('If-Modified-Since', ia.lastModified[E]), ia.etag[E] && m.setRequestHeader('If-None-Match', ia.etag[E])), (S.data && S.hasContent && !1 !== S.contentType || D.contentType) && m.setRequestHeader('Content-Type', S.contentType), m.setRequestHeader('Accept', S.dataTypes[0] && S.accepts[S.dataTypes[0]] ? S.accepts[S.dataTypes[0]] + ('*' === S.dataTypes[0] ? '' : ', ' + ma + '; q=0.01') : S.accepts['*']), S.headers)
                                m.setRequestHeader(n, S.headers[n]); if (S.beforeSend && (!1 === S.beforeSend.call(a, m, S) || 2 == w))
                                return m.abort(); for (n in u = 'abort', { success: 1, error: 1, complete: 1 })
                                m[n](S[n]); if (b = Y(ua, S, D, m), !b)
                                I(-1, 'No Transport');
                            else {
                                if (m.readyState = 1, C && d.trigger('ajaxSend', [m, S]), 2 == w)
                                    return m;
                                S.async && 0 < S.timeout && (x = ta.setTimeout(function () { m.abort('timeout'); }, S.timeout));
                                try {
                                    w = 1, b.send(p, I);
                                }
                                catch (e) {
                                    if (2 > w)
                                        I(-1, e);
                                    else
                                        throw e;
                                }
                            } return m; }, getJSON: function (a, e, t) { return ia.get(a, e, t, 'json'); }, getScript: function (a, e) { return ia.get(a, void 0, e, 'script'); } }), ia.each(['get', 'post'], function (a, d) { ia[d] = function (i, l, s, r) { return ia.isFunction(l) && (r = r || s, s = l, l = void 0), ia.ajax(ia.extend({ url: i, type: d, dataType: r, data: l, success: s }, ia.isPlainObject(i) && i)); }; }), ia._evalUrl = function (t) { return ia.ajax({ url: t, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 }); }, ia.fn.extend({ wrapAll: function (a) { if (ia.isFunction(a))
                                return this.each(function (e) { ia(this).wrapAll(a.call(this, e)); }); if (this[0]) {
                                var e = ia(a, this[0].ownerDocument).eq(0).clone(!0);
                                this[0].parentNode && e.insertBefore(this[0]), e.map(function () { for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                                    t = t.firstChild; return t; }).append(this);
                            } return this; }, wrapInner: function (a) { return ia.isFunction(a) ? this.each(function (e) { ia(this).wrapInner(a.call(this, e)); }) : this.each(function () { var e = ia(this), t = e.contents(); t.length ? t.wrapAll(a) : e.append(a); }); }, wrap: function (a) { var e = ia.isFunction(a); return this.each(function (t) { ia(this).wrapAll(e ? a.call(this, t) : a); }); }, unwrap: function () { return this.parent().each(function () { ia.nodeName(this, 'body') || ia(this).replaceWith(this.childNodes); }).end(); } }), ia.expr.filters.hidden = function (t) { return fe.reliableHiddenOffsets() ? 0 >= t.offsetWidth && 0 >= t.offsetHeight && !t.getClientRects().length : te(t); }, ia.expr.filters.visible = function (t) { return !ia.expr.filters.hidden(t); };
                        var ya = /%20/g, ha = /\[\]$/, ba = /\r?\n/g, xa = /^(?:submit|button|image|reset|file)$/i, Ca = /^(?:input|select|textarea|keygen)/i;
                        ia.param = function (d, e) { var t, o = [], n = function (a, e) { e = ia.isFunction(e) ? e() : null == e ? '' : e, o[o.length] = encodeURIComponent(a) + '=' + encodeURIComponent(e); }; if (void 0 === e && (e = ia.ajaxSettings && ia.ajaxSettings.traditional), ia.isArray(d) || d.jquery && !ia.isPlainObject(d))
                            ia.each(d, function () { n(this.name, this.value); });
                        else
                            for (t in d)
                                ne(t, d[t], e, n); return o.join('&').replace(ya, '+'); }, ia.fn.extend({ serialize: function () { return ia.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var t = ia.prop(this, 'elements'); return t ? ia.makeArray(t) : this; }).filter(function () { var t = this.type; return this.name && !ia(this).is(':disabled') && Ca.test(this.nodeName) && !xa.test(t) && (this.checked || !Ge.test(t)); }).map(function (a, d) { var e = ia(this).val(); return null == e ? null : ia.isArray(e) ? ia.map(e, function (t) { return { name: d.name, value: t.replace(ba, '\r\n') }; }) : { name: d.name, value: e.replace(ba, '\r\n') }; }).get(); } }), ia.ajaxSettings.xhr = void 0 === ta.ActiveXObject ? ae : function () { return this.isLocal ? oe() : 8 < le.documentMode ? ae() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ae() || oe(); };
                        var Da = 0, Ia = {}, Ta = ia.ajaxSettings.xhr();
                        ta.attachEvent && ta.attachEvent('onunload', function () { for (var t in Ia)
                            Ia[t](void 0, !0); }), fe.cors = !!Ta && 'withCredentials' in Ta, Ta = fe.ajax = !!Ta, Ta && ia.ajaxTransport(function (o) { if (!o.crossDomain || fe.cors) {
                            var e;
                            return { send: function (t, p) { var a, c = o.xhr(), d = ++Da; if (c.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                                    for (a in o.xhrFields)
                                        c[a] = o.xhrFields[a]; for (a in o.mimeType && c.overrideMimeType && c.overrideMimeType(o.mimeType), o.crossDomain || t['X-Requested-With'] || (t['X-Requested-With'] = 'XMLHttpRequest'), t)
                                    void 0 !== t[a] && c.setRequestHeader(a, t[a] + ''); c.send(o.hasContent && o.data || null), e = function (t, a) { var n, i, l; if (e && (a || 4 === c.readyState))
                                    if (delete Ia[d], e = void 0, c.onreadystatechange = ia.noop, a)
                                        4 !== c.readyState && c.abort();
                                    else {
                                        l = {}, n = c.status, 'string' == typeof c.responseText && (l.text = c.responseText);
                                        try {
                                            i = c.statusText;
                                        }
                                        catch (e) {
                                            i = '';
                                        }
                                        n || !o.isLocal || o.crossDomain ? 1223 === n && (n = 204) : n = l.text ? 200 : 404;
                                    } l && p(n, i, l, c.getAllResponseHeaders()); }, o.async ? 4 === c.readyState ? ta.setTimeout(e) : c.onreadystatechange = Ia[d] = e : e(); }, abort: function () { e && e(void 0, !0); } };
                        } }), ia.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (t) { return ia.globalEval(t), t; } } }), ia.ajaxPrefilter('script', function (t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET', t.global = !1); }), ia.ajaxTransport('script', function (d) { if (d.crossDomain) {
                            var i, e = le.head || ia('head')[0] || le.documentElement;
                            return { send: function (t, a) { i = le.createElement('script'), i.async = !0, d.scriptCharset && (i.charset = d.scriptCharset), i.src = d.url, i.onload = i.onreadystatechange = function (n, e) { (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, !e && a(200, 'success')); }, e.insertBefore(i, e.firstChild); }, abort: function () { i && i.onload(void 0, !0); } };
                        } });
                        var va = [], Ea = /(=)\?(?=&|$)|\?\?/;
                        ia.ajaxSetup({ jsonp: 'callback', jsonpCallback: function () { var t = va.pop() || ia.expando + '_' + Ut++; return this[t] = !0, t; } }), ia.ajaxPrefilter('json jsonp', function (o, e, t) { var n, d, i, l = !1 !== o.jsonp && (Ea.test(o.url) ? 'url' : 'string' == typeof o.data && 0 === (o.contentType || '').indexOf('application/x-www-form-urlencoded') && Ea.test(o.data) && 'data'); if (l || 'jsonp' === o.dataTypes[0])
                            return n = o.jsonpCallback = ia.isFunction(o.jsonpCallback) ? o.jsonpCallback() : o.jsonpCallback, l ? o[l] = o[l].replace(Ea, '$1' + n) : !1 !== o.jsonp && (o.url += (Xt.test(o.url) ? '&' : '?') + o.jsonp + '=' + n), o.converters['script json'] = function () { return i || ia.error(n + ' was not called'), i[0]; }, o.dataTypes[0] = 'json', d = ta[n], ta[n] = function () { i = arguments; }, t.always(function () { void 0 === d ? ia(ta).removeProp(n) : ta[n] = d, o[n] && (o.jsonpCallback = e.jsonpCallback, va.push(n)), i && ia.isFunction(d) && d(i[0]), i = d = void 0; }), 'script'; }), ia.parseHTML = function (d, i, l) { if (!d || 'string' != typeof d)
                            return null; 'boolean' == typeof i && (l = i, i = !1), i = i || le; var s = De.exec(d), a = !l && []; return s ? [i.createElement(s[1])] : (s = b([d], i, a), a && a.length && ia(a).remove(), ia.merge([], s.childNodes)); };
                        var Na = ia.fn.load;
                        ia.fn.load = function (l, s, p) { if ('string' != typeof l && Na)
                            return Na.apply(this, arguments); var n, d, i, r = this, a = l.indexOf(' '); return -1 < a && (n = ia.trim(l.slice(a, l.length)), l = l.slice(0, a)), ia.isFunction(s) ? (p = s, s = void 0) : s && 'object' == typeof s && (d = 'POST'), 0 < r.length && ia.ajax({ url: l, type: d || 'GET', dataType: 'html', data: s }).done(function (t) { i = arguments, r.html(n ? ia('<div>').append(ia.parseHTML(t)).find(n) : t); }).always(p && function (a, e) { r.each(function () { p.apply(this, i || [a.responseText, e, a]); }); }), this; }, ia.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (a, n) { ia.fn[n] = function (t) { return this.on(n, t); }; }), ia.expr.filters.animated = function (a) { return ia.grep(ia.timers, function (e) { return a === e.elem; }).length; }, ia.offset = { setOffset: function (m, e, t) { var n, i, r, l, s, p, c, u = ia.css(m, 'position'), a = ia(m), o = {}; 'static' === u && (m.style.position = 'relative'), s = a.offset(), r = ia.css(m, 'top'), p = ia.css(m, 'left'), c = ('absolute' === u || 'fixed' === u) && -1 < ia.inArray('auto', [r, p]), c ? (n = a.position(), l = n.top, i = n.left) : (l = parseFloat(r) || 0, i = parseFloat(p) || 0), ia.isFunction(e) && (e = e.call(m, t, ia.extend({}, s))), null != e.top && (o.top = e.top - s.top + l), null != e.left && (o.left = e.left - s.left + i), 'using' in e ? e.using.call(m, o) : a.css(o); } }, ia.fn.extend({ offset: function (i) { if (arguments.length)
                                return void 0 === i ? this : this.each(function (e) { ia.offset.setOffset(this, i, e); }); var e, o, d = { top: 0, left: 0 }, t = this[0], n = t && t.ownerDocument; if (n)
                                return (e = n.documentElement, !ia.contains(e, t)) ? d : ('undefined' != typeof t.getBoundingClientRect && (d = t.getBoundingClientRect()), o = de(n), { top: d.top + (o.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: d.left + (o.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }); }, position: function () { if (this[0]) {
                                var d, n, a = { top: 0, left: 0 }, e = this[0];
                                return 'fixed' === ia.css(e, 'position') ? n = e.getBoundingClientRect() : (d = this.offsetParent(), n = this.offset(), !ia.nodeName(d[0], 'html') && (a = d.offset()), a.top += ia.css(d[0], 'borderTopWidth', !0), a.left += ia.css(d[0], 'borderLeftWidth', !0)), { top: n.top - a.top - ia.css(e, 'marginTop', !0), left: n.left - a.left - ia.css(e, 'marginLeft', !0) };
                            } }, offsetParent: function () { return this.map(function () { for (var t = this.offsetParent; t && !ia.nodeName(t, 'html') && 'static' === ia.css(t, 'position');)
                                t = t.offsetParent; return t || ft; }); } }), ia.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (d, i) { var t = /Y/.test(i); ia.fn[d] = function (e) { return ze(this, function (n, e, a) { var o = de(n); return void 0 === a ? o ? i in o ? o[i] : o.document.documentElement[e] : n[e] : void (o ? o.scrollTo(t ? ia(o).scrollLeft() : a, t ? a : ia(o).scrollTop()) : n[e] = a); }, d, e, arguments.length, null); }; }), ia.each(['top', 'left'], function (a, d) { ia.cssHooks[d] = q(fe.pixelPosition, function (t, e) { if (e)
                            return e = bt(t, d), gt.test(e) ? ia(t).position()[d] + 'px' : e; }); }), ia.each({ Height: 'height', Width: 'width' }, function (d, e) { ia.each({ padding: 'inner' + d, content: e, "": 'outer' + d }, function (t, n) { ia.fn[n] = function (n, l) { var o = arguments.length && (t || 'boolean' != typeof n), s = t || (!0 === n || !0 === l ? 'margin' : 'border'); return ze(this, function (e, t, n) { var a; return ia.isWindow(e) ? e.document.documentElement['client' + d] : 9 === e.nodeType ? (a = e.documentElement, ie(e.body['scroll' + d], a['scroll' + d], e.body['offset' + d], a['offset' + d], a['client' + d])) : void 0 === n ? ia.css(e, t, s) : ia.style(e, t, n, s); }, e, o ? n : void 0, o, null); }; }); }), ia.fn.extend({ bind: function (a, e, t) { return this.on(a, null, e, t); }, unbind: function (a, e) { return this.off(a, null, e); }, delegate: function (d, e, t, n) { return this.on(e, d, t, n); }, undelegate: function (a, e, t) { return 1 === arguments.length ? this.off(a, '**') : this.off(e, a || '**', t); } }), ia.fn.size = function () { return this.length; }, ia.fn.andSelf = ia.fn.addBack, t = [], n = function () { return ia; }.apply(e, t), !(void 0 !== n && (ea.exports = n));
                        var Sa = ta.jQuery, wa = ta.$;
                        return ia.noConflict = function (t) { return ta.$ === ia && (ta.$ = wa), t && ta.jQuery === ia && (ta.jQuery = Sa), ia; }, a || (ta.jQuery = ta.$ = ia), ia;
                    });
                }, "./src/Components/autoComplete.ts": /*!****************************************!*\
         !*** ./src/Components/autoComplete.ts ***!
         \****************************************/ /*! no static exports found */ function (l, e, t) {
                    'use strict';
                    var n = this && this.__awaiter || function (s, e, t, p) { function a(a) { return a instanceof t ? a : new t(function (e) { e(a); }); } return new (t || (t = Promise))(function (t, n) { function d(t) { try {
                        i(p.next(t));
                    }
                    catch (e) {
                        n(e);
                    } } function o(t) { try {
                        i(p['throw'](t));
                    }
                    catch (e) {
                        n(e);
                    } } function i(n) { n.done ? t(n.value) : a(n.value).then(d, o); } i((p = p.apply(s, e || [])).next()); }); }, a = this && this.__generator || function (t, e) { function n(n) { return function (e) { return a([n, e]); }; } function a(n) { if (o)
                        throw new TypeError('Generator is already executing.'); for (; s;)
                        try {
                            if (o = 1, i && (r = 2 & n[0] ? i['return'] : n[0] ? i['throw'] || ((r = i['return']) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done)
                                return r;
                            switch ((i = 0, r) && (n = [2 & n[0], r.value]), n[0]) {
                                case 0:
                                case 1:
                                    r = n;
                                    break;
                                case 4: return s.label++, { value: n[1], done: !1 };
                                case 5:
                                    s.label++, i = n[1], n = [0];
                                    continue;
                                case 7:
                                    n = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if ((r = s.trys, !(r = 0 < r.length && r[r.length - 1])) && (6 === n[0] || 2 === n[0])) {
                                        s = 0;
                                        continue;
                                    }
                                    if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                        s.label = n[1];
                                        break;
                                    }
                                    if (6 === n[0] && s.label < r[1]) {
                                        s.label = r[1], r = n;
                                        break;
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(n);
                                        break;
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                            }
                            n = e.call(t, s);
                        }
                        catch (e) {
                            n = [6, e], i = 0;
                        }
                        finally {
                            o = r = 0;
                        } if (5 & n[0])
                        throw n[1]; return { value: n[0] ? n[1] : void 0, done: !0 }; } var o, i, r, p, s = { label: 0, sent: function () { if (1 & r[0])
                            throw r[1]; return r[1]; }, trys: [], ops: [] }; return p = { next: n(0), "throw": n(1), "return": n(2) }, 'function' == typeof Symbol && (p[Symbol.iterator] = function () { return this; }), p; };
                    e.__esModule = !0;
                    var o = t(/*! jquery */ './node_modules/jquery/dist/jquery.js'), d = t(/*! . */ './src/Components/index.ts'), i = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = i.withErrorHandling(function (r) { var e = r.options, t = r.value, f = r.onInputChange, l = i.createElement({ tagName: 'div', props: { id: i.elementIdGenerator.gererate(), className: 'auto-complete' } }), s = document.createElement('input'); s.id = i.elementIdGenerator.gererate(), t && (s.value = t.label); var p = function () { return document.getElementById(s.id); }, c = function (t) { p().value = t; }, u = function (d) { return n(this, void 0, void 0, function () { var e; return a(this, function (t) { switch (t.label) {
                        case 0: return [4, f(d)];
                        case 1: return e = t.sent(), m.innerHTML = '', e.forEach(function (a) { var e = i.createElement({ tagName: 'div' }); e.innerHTML = a.label, e.onclick = function () { c(a.label); }, m.appendChild(e); }), [2];
                    } }); }); }; s.onkeydown = function () { u(this.value); }, s.onfocus = function () { document.getElementById(m.id).style.display = 'block'; }; var m = d.Dropdown({}); return m = i.getElementWithClassNames(m, ['auto-complete__dropdown']), m = i.getElementWithStyle(m, [{ key: 'display', value: 'none' }]), m.id = i.elementIdGenerator.gererate(), e.forEach(function (a) { var e = document.createElement('div'); e.onclick = function () { c(a.label); }, e.innerHTML = a.label, m.appendChild(e); }), o(document).click(function (a) { var t = document.getElementById(m.id); 'none' === t.style.display || t.contains(a.target) || p().contains(a.target) || (t.style.display = 'none'); }), l.appendChild(s), l.appendChild(m), l; }, 'AutoComplete');
                }, "./src/Components/dialog.ts": /*!**********************************!*\
               !*** ./src/Components/dialog.ts ***!
               \**********************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var n = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = n.withErrorHandling(function (l) { var e = l.htmlSrc, t = l.dialogArguments, n = void 0 === t ? {} : t, a = l.height, o = void 0 === a ? 250 : a, d = l.width, i = void 0 === d ? 850 : d; window.showModalDialog(e, n, 'dialogHeight:' + o + 'px;dialogWidth:' + i + 'px'); }, 'Dialog');
                }, "./src/Components/dropdown.ts": /*!************************************!*\
                !*** ./src/Components/dropdown.ts ***!
                \************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = o.withErrorHandling(function (a) { var e = a.children, t = o.createElement({ tagName: 'div' }); return t = o.getElementWithClassNames(t, ['didgah-dropdown']), e && t.appendChild(e), t; }, 'DropDown');
                }, "./src/Components/fieldset.ts": /*!************************************!*\
                !*** ./src/Components/fieldset.ts ***!
                \************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var n = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = function () { var t = n.createElement({ tagName: 'fieldset' }); return t; };
                }, "./src/Components/index.ts": /*!*********************************!*\
                !*** ./src/Components/index.ts ***!
                \*********************************/ /*! no static exports found */ function (p, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var n = t(/*! ./table */ './src/Components/table.ts');
                    e.Table = n['default'];
                    var a = t(/*! ./tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
                    e.TableBaseOnRow = a['default'];
                    var o = t(/*! ./dialog */ './src/Components/dialog.ts');
                    e.Dialog = o['default'];
                    var d = t(/*! ./select */ './src/Components/select.ts');
                    e.Select = d['default'];
                    var i = t(/*! ./dropdown */ './src/Components/dropdown.ts');
                    e.Dropdown = i['default'];
                    var r = t(/*! ./autoComplete */ './src/Components/autoComplete.ts');
                    e.autoComplete = r['default'];
                    var l = t(/*! ./withLabel */ './src/Components/withLabel.ts');
                    e.withLabel = l['default'];
                }, "./src/Components/select.ts": /*!**********************************!*\
                !*** ./src/Components/select.ts ***!
                \**********************************/ /*! no static exports found */ function (i, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ../utils */ './src/utils.ts'), s = t(/*! ../DidgahDeferred */ './src/DidgahDeferred.ts'), o = t(/*! ../ajax */ './src/ajax.ts');
                    e['default'] = l.withErrorHandling({ component: function (a) { var e = a.options, t = a.value, i = a.name, s = l.createElement({ tagName: 'select', props: { value: t, name: i } }); return e.map(function (a) { var e = l.createElement({ tagName: 'option' }); e.setAttribute('value', a.value), e.innerHTML = a.label, s.appendChild(e); }), s; }, onInit: function (d, e) { var t = e.EntityId, l = e.ReferenceFieldId, r = s['default'].create(); return o.createAjaxReq(d, 'post', { EntityId: t, ReferenceFieldId: l }).done(function (a) { var e = a.map(function (t) { return { value: t.key, label: t.value || '' }; }); r.resolve(e); }), r.promise(); } }, 'Select');
                }, "./src/Components/simple-modal.ts": /*!****************************************!*\
                !*** ./src/Components/simple-modal.ts ***!
                \****************************************/ /*! no static exports found */ function (i, e, t) {
                    'use strict';
                    function l(a) { var e = document.getElementById(a); e.parentNode && e.parentNode.removeChild(e); }
                    e.__esModule = !0;
                    var a = t(/*! jquery */ './node_modules/jquery/dist/jquery.js'), o = t(/*! ../utils */ './src/utils.ts');
                    e.removeElement = l, e['default'] = function () { function d() { l(m), l(f); } var m = o.elementIdGenerator.gererate(), f = o.elementIdGenerator.gererate(), g = a('.simple-modal'), i = o.createElement({ tagName: 'div', props: { id: f, className: 'simple-modal__overlay' } }); 0 === g.length ? document.getElementById('root').appendChild(i) : g.after(i); var r = (.5 * window.screen.width - 300).toString() + 'px', y = o.createElement({ tagName: 'div', props: { id: m, className: 'simple-modal', style: { left: r } } }), h = o.createElement({ tagName: 'div', props: { className: 'simple-modal__inner' } }), p = o.createElement({ tagName: 'input', props: { type: 'button', value: 'x', className: 'simple-modal__close', onclick: d } }); h.appendChild(p); var c = o.createElement({ tagName: 'div', props: { className: 'simple-modal__content' } }); return h.appendChild(c), y.appendChild(h), { modal: y, onClose: d }; };
                }, "./src/Components/table.ts": /*!*********************************!*\
                !*** ./src/Components/table.ts ***!
                \*********************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = i.withErrorHandling(function (a) { for (var e = a.dataSource, D = a.columns, t = D.map(function (t) { return t.dataIndex; }), n = i.createElement({ tagName: 'table' }), o = i.createElement({ tagName: 'thead' }), r = i.createElement({ tagName: 'tr' }), l = i.createElement({ tagName: 'tbody' }), s = 0, p = D; s < p.length; s++) {
                        var c = p[s], u = i.createElement({ tagName: 'th' });
                        u.innerHTML = c.title, r.appendChild(u);
                    } for (var m = 0, g = e; m < g.length; m++) {
                        for (var h, I = g[m], f = i.createElement({ tagName: 'tr' }), y = [], x = function (a) { var e = i.createElement({ tagName: 'td' }), t = D.find(function (e) { return e.dataIndex === a; }).renderer; if (t) {
                            var n = t(I);
                            i.isObjectDomElement(n) ? e.appendChild(n) : e.innerHTML = n;
                        }
                        else
                            e.innerHTML = I[a]; y.push(e); }, C = 0, b = t; C < b.length; C++)
                            h = b[C], x(h);
                        for (var T, v = 0, d = y; v < d.length; v++)
                            T = d[v], f.appendChild(T);
                        l.appendChild(f);
                    } return o.appendChild(r), n.appendChild(o), n.appendChild(l), n; }, 'Table');
                }, "./src/Components/tableBaseOnRow.ts": /*!******************************************!*\
                !*** ./src/Components/tableBaseOnRow.ts ***!
                \******************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var n = t(/*! ../utils */ './src/utils.ts'), a = t(/*! ../extraModel/Components/bundle */ './src/extraModel/Components/bundle.ts');
                    e.mapIntoTD = function (t) { return void 0 === t && (t = []), t.map(function (t) { return a.toTD(t); }); }, e['default'] = n.withErrorHandling(function (a) { for (var e = a.rows, t = n.createElement({ tagName: 'table', props: { className: 'table-base-row' } }), u = n.createElement({ tagName: 'tbody' }), o = 0, d = e; o < d.length; o++) {
                        for (var i, c = d[o], r = n.createElement({ tagName: 'tr', props: {} }), l = 0, s = c.renderer; l < s.length; l++)
                            i = s[l], r.appendChild(i);
                        u.appendChild(r);
                    } return t.appendChild(u), t; }, 'TableBasedRow');
                }, "./src/Components/withLabel.ts": /*!*************************************!*\
                !*** ./src/Components/withLabel.ts ***!
                \*************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = i.withErrorHandling(function (a, e, t) { void 0 === t && (t = window.document); var n = i.createElement({ tagName: 'div', props: { className: 'with-label' } }), o = i.createElement({ tagName: 'label', props: { className: 'with-label__label' } }); return o.innerHTML = e, n.appendChild(o), n.appendChild(a), n; }, 'withLabel');
                }, "./src/DidgahDeferred.ts": /*!*******************************!*\
                !*** ./src/DidgahDeferred.ts ***!
                \*******************************/ /*! no static exports found */ function (d, e) {
                    'use strict';
                    e.__esModule = !0;
                    var t = function () { function t() { var a = this; this.promiseInstance = new Promise(function (e, t) { a.resolver = e, a.rejecter = t; }), this['catch'] = this['catch'].bind(this), this.then = this.then.bind(this), this.done = this.done.bind(this), this.fail = this.fail.bind(this), this.always = this.always.bind(this), this.resolve = this.resolve.bind(this), this.reject = this.reject.bind(this); } return t.create = function () { return new t; }, t.prototype.resolve = function (t) { return this.resolver(t), this; }, t.prototype.reject = function (t) { return this.rejecter(t), this; }, t.prototype.then = function (a, e) { return this.promiseInstance = this.promiseInstance.then(a, e), this; }, t.prototype['catch'] = function (t) { return this.promiseInstance = this.promiseInstance['catch'](t), this; }, t.prototype['finally'] = function (t) { return this.promiseInstance = this.promiseInstance['finally'](t), this; }, t.prototype.done = function (a, e) { return this.then(a, e); }, t.prototype.fail = function (t) { return this['catch'](t); }, t.prototype.always = function (t) { return this['finally'](t); }, t.prototype.promise = function () { return this.promiseInstance; }, t; }();
                    e['default'] = t;
                    var n = function () { function t(t) { this.task = t; } return t.prototype.run = function () { return this.task(); }, t; }();
                    e.Task = n;
                }, "./src/ajax.ts": /*!*********************!*\
                !*** ./src/ajax.ts ***!
                \*********************/ /*! no static exports found */ function (d, l, e) {
                    'use strict';
                    l.__esModule = !0;
                    var t = e(/*! jquery */ './node_modules/jquery/dist/jquery.js');
                    l.createAjaxReq = function (a, s, n, o, d) { void 0 === a && (a = 'POST'), void 0 === s && (s = ''), void 0 === n && (n = {}), void 0 === o && (o = {}), void 0 === d && (d = !0); var i = t.ajax({ dataType: 'json', contentType: 'application/json', crossDomain: !0, url: l.createApiUrl(s), headers: { "Access-Control-Allow-Origin": '*' }, method: a, data: d ? JSON.stringify(n) : n }); return i.fail(l.ajaxFailHandler), i; }, l.createApiUrl = function () { return 'replace me with api'; }, l.ajaxFailHandler = function () { console.log('failed'); };
                }, "./src/enums/index.ts": /*!****************************!*\
                !*** ./src/enums/index.ts ***!
                \****************************/ /*! no static exports found */ function (i, e) {
                    'use strict';
                    e.__esModule = !0;
                    var t;
                    (function (t) { t[t.IntCode = 1] = 'IntCode', t[t.StringCode = 2] = 'StringCode', t[t.TextCode = 3] = 'TextCode', t[t.BooleanCode = 4] = 'BooleanCode', t[t.DateCode = 5] = 'DateCode', t[t.TimeCode = 6] = 'TimeCode', t[t.MultiSelectCode = 7] = 'MultiSelectCode', t[t.TelCode = 8] = 'TelCode', t[t.EmailCode = 9] = 'EmailCode', t[t.UrlCode = 10] = 'UrlCode', t[t.ImageCode = 11] = 'ImageCode', t[t.FileCode = 12] = 'FileCode', t[t.InsertTimeStampCode = 13] = 'InsertTimeStampCode', t[t.UpdateTimeStampCode = 14] = 'UpdateTimeStampCode', t[t.DecimalCode = 15] = 'DecimalCode', t[t.GenderCode = 16] = 'GenderCode', t[t.DateTimeCode = 17] = 'DateTimeCode', t[t.AutoIncrementCode = 18] = 'AutoIncrementCode', t[t.UniqueidentifierCode = 19] = 'UniqueidentifierCode', t[t.BigDecimalCode = 20] = 'BigDecimalCode', t[t.GridCode = 100] = 'GridCode', t[t.DidgahStaffCode = 1001] = 'DidgahStaffCode', t[t.DidgahContactCode = 1002] = 'DidgahContactCode'; })(t = e.ControlsCode || (e.ControlsCode = {}));
                    var n;
                    (function (t) { t[t.NumericEqual = 1] = 'NumericEqual', t[t.NumericGreater = 2] = 'NumericGreater', t[t.NumericLess = 3] = 'NumericLess', t[t.NumericGreaterOrEqual = 4] = 'NumericGreaterOrEqual', t[t.NumericLessOrEqual = 5] = 'NumericLessOrEqual', t[t.StringEqual = 6] = 'StringEqual', t[t.StringStartsWith = 7] = 'StringStartsWith', t[t.StringEndsWith = 8] = 'StringEndsWith', t[t.StringContains = 9] = 'StringContains', t[t.DateTimeEqual = 10] = 'DateTimeEqual', t[t.DateTimeGreater = 11] = 'DateTimeGreater', t[t.DateTimeLess = 12] = 'DateTimeLess', t[t.DateTimeGreaterOrEqual = 13] = 'DateTimeGreaterOrEqual', t[t.DateTimeLessOrEqual = 14] = 'DateTimeLessOrEqual'; })(n = e.CompareOptions || (e.CompareOptions = {}));
                    var a;
                    (function (t) { t[t.Container = 1] = 'Container', t[t.Component = 2] = 'Component'; })(a = e.ControlType || (e.ControlType = {}));
                    var o;
                    (function (t) { t[t.Fieldset = 1] = 'Fieldset', t[t.FormRow = 2] = 'FormRow'; })(o = e.ContainerCode || (e.ContainerCode = {}));
                }, "./src/extraModel/Components/autoIncrementType.ts": /*!********************************************************!*\
                !*** ./src/extraModel/Components/autoIncrementType.ts ***!
                \********************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), a = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (o) { var e, i = o.mode, t = o.value, s = o.name; switch (i) {
                        case 'display':
                        case 'filter-readonly': e = l['default']({ value: t, name: s });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = a.createElement({ tagName: 'input', props: { value: t, name: s } });
                    } return e; };
                }, "./src/extraModel/Components/bigDecimalType.ts": /*!*****************************************************!*\
                !*** ./src/extraModel/Components/bigDecimalType.ts ***!
                \*****************************************************/ /*! no static exports found */ function (i, e, t) {
                    'use strict';
                    function n(t) { return o['default'](a({}, t)); }
                    var a = this && this.__assign || function () { return a = Object.assign || function (d) { for (var e, n = 1, t = arguments.length; n < t; n++)
                        for (var a in e = arguments[n], e)
                            Object.prototype.hasOwnProperty.call(e, a) && (d[a] = e[a]); return d; }, a.apply(this, arguments); };
                    e.__esModule = !0;
                    var o = t(/*! ./decimalType */ './src/extraModel/Components/decimalType.ts');
                    e['default'] = n;
                }, "./src/extraModel/Components/booleanType.ts": /*!**************************************************!*\
                !*** ./src/extraModel/Components/booleanType.ts ***!
                \**************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), a = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (o) { var e, i = o.mode, t = o.value, s = o.name; switch (i) {
                        case 'display':
                        case 'filter-readonly': e = l['default']({ value: t ? 'Yes' : 'No', name: s });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = a.createElement({ tagName: 'input', props: { type: 'checkbox', checked: !!t } });
                    } return e; };
                }, "./src/extraModel/Components/bundle.ts": /*!*********************************************!*\
                !*** ./src/extraModel/Components/bundle.ts ***!
                \*********************************************/ /*! no static exports found */ function (s, u, e) {
                    'use strict';
                    var p = this && this.__assign || function () { return p = Object.assign || function (d) { for (var e, n = 1, t = arguments.length; n < t; n++)
                        for (var a in e = arguments[n], e)
                            Object.prototype.hasOwnProperty.call(e, a) && (d[a] = e[a]); return d; }, p.apply(this, arguments); }, t = this && this.__spreadArrays || function () { for (var l = 0, e = 0, t = arguments.length; e < t; e++)
                        l += arguments[e].length; for (var n = Array(l), o = 0, e = 0; e < t; e++)
                        for (var d = arguments[e], i = 0, a = d.length; i < a; i++, o++)
                            n[o] = d[i]; return n; };
                    u.__esModule = !0;
                    var D = e(/*! ../../utils */ './src/utils.ts'), a = e(/*! ../staticComponents */ './src/extraModel/staticComponents.ts'), n = e(/*! ../../Components/tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), d = e(/*! ../dynamicDataModal */ './src/extraModel/dynamicDataModal.ts');
                    u.toTD = function (a, e) { void 0 === e && (e = window.document); var t = D.createElement({ tagName: 'td', props: p({}, a.cellProps) }); return t.appendChild(a.input), t; }, u['default'] = D.withErrorHandling(function (o) { function i(d) { return t([u.toTD(a.removeCell(d, s))], n.mapIntoTD(y.fields.map(function (e) { return p({}, c(p(p({}, e), { formData: M[d][e.name], widgetId: e.DisplayWidgets[0].Id }))); })), [u.toTD(a.settingCell(d, I))]); } function e() { var t = d['default']({ mode: 'add', fields: y.fields, formData: {}, widgetId: '', editCellRenderer: g, onSubmit: function (t) { M.push(t), b && b(M); var e = a.gridRowElement(), n = u.toTD(a.removeCell(M.length - 1, s)); e.appendChild(n); var o = function (a) { var n = u.toTD(c(p(p({}, y.fields.find(function (t) { return t.Name === a; })), { formData: t[a] }))); e.appendChild(n); }; for (var d in t)
                            o(d); var i = u.toTD(a.settingCell(M.length - 1, I)); e.appendChild(i), document.getElementById(S).insertBefore(e, document.getElementById(S).lastChild); } }); document.getElementById('root').appendChild(t); } function s(a) { M.splice(a, 1), b && b(M); var e = document.getElementById(S); e.removeChild(e.childNodes[a]); } function I(a) { var e = d['default']({ mode: 'edit', fields: y.fields, formData: M[a], widgetId: '', editCellRenderer: g, onSubmit: function (e) { l(a, e); } }); e && document.getElementById('root').appendChild(e); } function l(n, e) { M[n] = e, b && b(M); for (var t, l = document.getElementById(S), s = a.gridRowElement(), o = 0, d = i(n); o < d.length; o++)
                        t = d[o], s.appendChild(t); l.insertBefore(s, l.childNodes[n]), l.removeChild(l.childNodes[n + 1]); } var r = o.headers, m = void 0 === r ? [] : r, c = o.displayCellRenderer, g = o.editCellRenderer, h = o.rowsData, y = void 0 === h ? {} : h, x = o.initialFormData, C = void 0 === x ? [] : x, b = o.onUpdateFormData, v = D.elementIdGenerator.gererate(), S = D.elementIdGenerator.gererate(), M = t(C), w = function () { return t(M.map(function (a, e) { return { renderer: i(e) }; }), [{ renderer: [u.toTD(a.addNewRow(e))] }]); }(); return console.log(w), function () { console.log(15); var d = D.createElement({ tagName: 'table', props: { className: 'table-base-row', id: v, dir: 'rtl' } }), e = D.createElement({ tagName: 'thead' }), i = D.createElement({ tagName: 'tr' }), t = D.createElement({ tagName: 'tbody', props: { id: S } }); i.appendChild(D.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } })), m.forEach(function (n) { console.log(16); var e = 1; try {
                        e = 1;
                    }
                    catch (t) { } var d = D.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader', rowSpan: e, colSpan: 1 } }); d.innerHTML = n, i.appendChild(d); }), i.appendChild(D.createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } })), console.log(w); for (var n, l = 0, o = w; l < o.length; l++) {
                        n = o[l], console.log(18);
                        for (var r, u = a.gridRowElement(), s = 0, p = n.renderer; s < p.length; s++)
                            r = p[s], u.appendChild(r);
                        console.log(u), t.appendChild(u);
                    } return e.appendChild(i), d.appendChild(e), d.appendChild(t), d; }(); }, 'DynamicData/Grid');
                }, "./src/extraModel/Components/dateTimeType.ts": /*!***************************************************!*\
                !*** ./src/extraModel/Components/dateTimeType.ts ***!
                \***************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'dateTimeType' }); };
                }, "./src/extraModel/Components/dateType.ts": /*!***********************************************!*\
                !*** ./src/extraModel/Components/dateType.ts ***!
                \***********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'dateType' }); };
                }, "./src/extraModel/Components/decimalType.ts": /*!**************************************************!*\
                !*** ./src/extraModel/Components/decimalType.ts ***!
                \**************************************************/ /*! no static exports found */ function (i, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var s = t(/*! ../utils */ './src/extraModel/utils.ts'), a = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (d) { var e, l = d.mode, t = d.value, p = d.name, c = d.formatValueForDisplay; switch (l) {
                        case 'display':
                        case 'filter-readonly': e = a['default']({ value: c && !!t ? s['default'](t) : t, name: p });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = o.createElement({ tagName: 'input', props: { value: t, name: p } });
                    } return e; };
                }, "./src/extraModel/Components/didgahContactType.ts": /*!********************************************************!*\
                !*** ./src/extraModel/Components/didgahContactType.ts ***!
                \********************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'didgahContactType' }); };
                }, "./src/extraModel/Components/didgahStaffType.ts": /*!******************************************************!*\
                !*** ./src/extraModel/Components/didgahStaffType.ts ***!
                \******************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'didgahStaffType' }); };
                }, "./src/extraModel/Components/emailType.ts": /*!************************************************!*\
                !*** ./src/extraModel/Components/emailType.ts ***!
                \************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.value, d = a.name; return o.createElement({ tagName: 'input', props: { value: e, name: d, style: { direction: 'ltr' } } }); };
                }, "./src/extraModel/Components/fileType.ts": /*!***********************************************!*\
                !*** ./src/extraModel/Components/fileType.ts ***!
                \***********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'fileType' }); };
                }, "./src/extraModel/Components/genderType.ts": /*!*************************************************!*\
                !*** ./src/extraModel/Components/genderType.ts ***!
                \*************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../Components */ './src/Components/index.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, d = a.value; return i.Select({ options: [{ label: '\u0645\u0631\u062F', value: '1' }, { label: '\u0632\u0646', value: '2' }], name: t, value: d }); };
                }, "./src/extraModel/Components/imageType.ts": /*!************************************************!*\
                !*** ./src/extraModel/Components/imageType.ts ***!
                \************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'imageType' }); };
                }, "./src/extraModel/Components/insertTimeStamp.ts": /*!******************************************************!*\
                !*** ./src/extraModel/Components/insertTimeStamp.ts ***!
                \******************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'insertTimeStamp' }); };
                }, "./src/extraModel/Components/intType.ts": /*!**********************************************!*\
                !*** ./src/extraModel/Components/intType.ts ***!
                \**********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), a = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (o) { var e, i = o.mode, t = o.name, s = o.value; switch (i) {
                        case 'display':
                        case 'filter-readonly': e = l['default']({ name: t, value: s });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = a.createElement({ tagName: 'input', props: { value: s } });
                    } return e; };
                }, "./src/extraModel/Components/multiSelectType.ts": /*!******************************************************!*\
                !*** ./src/extraModel/Components/multiSelectType.ts ***!
                \******************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'multiSelectType' }); };
                }, "./src/extraModel/Components/readOnlyField.ts": /*!****************************************************!*\
                !*** ./src/extraModel/Components/readOnlyField.ts ***!
                \****************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.value, d = a.name; return o.createElement({ tagName: 'input', props: { name: d, disabled: !0 }, innerText: e }); };
                }, "./src/extraModel/Components/stringType.ts": /*!*************************************************!*\
                !*** ./src/extraModel/Components/stringType.ts ***!
                \*************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.value, d = a.name; return o.createElement({ tagName: 'input', props: { value: e, name: d } }); };
                }, "./src/extraModel/Components/telType.ts": /*!**********************************************!*\
                !*** ./src/extraModel/Components/telType.ts ***!
                \**********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.value, d = a.name; return o.createElement({ tagName: 'input', props: { value: e, name: d, style: { direction: 'ltr' } } }); };
                }, "./src/extraModel/Components/textType.ts": /*!***********************************************!*\
                !*** ./src/extraModel/Components/textType.ts ***!
                \***********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), a = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (o) { var e, i = o.mode, t = o.value, s = o.name; switch (i) {
                        case 'display':
                        case 'filter-readonly': e = l['default']({ value: t, name: s });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = a.createElement({ tagName: 'input', props: { value: t } });
                    } return e; };
                }, "./src/extraModel/Components/timeType.ts": /*!***********************************************!*\
                !*** ./src/extraModel/Components/timeType.ts ***!
                \***********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var i = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.mode, t = a.name, n = a.value; return i.createElement({ tagName: 'div', innerText: 'timeType' }); };
                }, "./src/extraModel/Components/uniqueidentifierType.ts": /*!***********************************************************!*\
                !*** ./src/extraModel/Components/uniqueidentifierType.ts ***!
                \***********************************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var l = t(/*! ./readOnlyField */ './src/extraModel/Components/readOnlyField.ts'), a = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (o) { var e, i = o.mode, t = o.value, s = o.name; switch (i) {
                        case 'display':
                        case 'filter-readonly': e = l['default']({ value: t, name: s });
                        case 'edit':
                        case 'filter':
                        case 'wizard': e = a.createElement({ tagName: 'input', props: { value: t, style: { direction: 'ltr' } } });
                    } return e; };
                }, "./src/extraModel/Components/urlType.ts": /*!**********************************************!*\
                !*** ./src/extraModel/Components/urlType.ts ***!
                \**********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var o = t(/*! ../../utils */ './src/utils.ts');
                    e['default'] = function (a) { var e = a.value, d = a.name; return o.createElement({ tagName: 'input', props: { value: e, name: d, style: { direction: 'ltr' } } }); };
                }, "./src/extraModel/dynamicDataModal.ts": /*!********************************************!*\
                !*** ./src/extraModel/dynamicDataModal.ts ***!
                \********************************************/ /*! no static exports found */ function (l, e, t) {
                    'use strict';
                    var r = this && this.__assign || function () { return r = Object.assign || function (d) { for (var e, n = 1, t = arguments.length; n < t; n++)
                        for (var a in e = arguments[n], e)
                            Object.prototype.hasOwnProperty.call(e, a) && (d[a] = e[a]); return d; }, r.apply(this, arguments); };
                    e.__esModule = !0;
                    var a = t(/*! ./Components/bundle */ './src/extraModel/Components/bundle.ts'), o = t(/*! ../Components/simple-modal */ './src/Components/simple-modal.ts'), d = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = function (i) { var b = i.mode, e = i.fields, t = i.formData, C = void 0 === t ? {} : t, l = i.widgetId, s = i.editCellRenderer, n = i.onSubmit, p = o['default'](), c = p.modal, u = p.onClose, m = d.elementIdGenerator.gererate(), g = d.createElement({ tagName: 'form', props: { id: m } }); e.map(function (o) { var e = d.createElement({ tagName: 'div' }); o.formData = C[o.name], 'add' === b && (C[o.name] = o.Type.IsBundle ? [] : null), o.Type.IsBundle ? e.appendChild(a['default'](r(r({}, o.bundleInfo), { initialFormData: 0 < Object.keys(C).length ? C[o.name] : [], onUpdateFormData: function (e) { o.name && (C[o.name] = e); } }))) : (o.widgetId = l, e.appendChild(s(o).input())), g.appendChild(e); }), c.appendChild(g); var f = d.createElement({ tagName: 'div', props: { className: 'center' } }), y = d.createElement({ tagName: 'input', props: { type: 'submit', className: 'buttonHighlighted', onclick: function () { var a = d.formToJSON('#' + m); for (var e in a)
                                C[e] = a[e]; n(r({}, C)), u(); } } }); return f.appendChild(y), c.appendChild(f), c; };
                }, "./src/extraModel/extraModel.ts": /*!**************************************!*\
                !*** ./src/extraModel/extraModel.ts ***!
                \**************************************/ /*! no static exports found */ function (l, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var s = t(/*! ./getComponent */ './src/extraModel/getComponent.ts'), c = t(/*! ../enums */ './src/enums/index.ts'), a = t(/*! ../Components/fieldset */ './src/Components/fieldset.ts'), n = t(/*! ../utils */ './src/utils.ts');
                    e['default'] = function (d) { function o(a) { if (a.Type === c.ControlType.Container)
                        return i(a); if (a.Type === c.ControlType.Component)
                        return t(a); throw 'Renderer was not found for controlType = ' + a.Type; } function t(a) { var e = s.getComponent(a, r), t = a.Code === c.ControlsCode.FileCode.toString() || c.ControlsCode.ImageCode; return e ? (Object.assign({ mode: b }, a.Attributes, t ? { downloadUrl: m.replace('$fieldName$', a.Label) } : {}), (a.Rules || []).forEach(function (t) { t.pattern && (t.pattern = new RegExp(t.pattern)); }), e) : null; } function i(t) { if (t.Code === c.ContainerCode.Fieldset.toString()) {
                        var d = a['default']();
                        return t.Children.forEach(function (t) { d.appendChild(o(t)); }), d;
                    } if (t.Code === c.ContainerCode.FormRow.toString()) {
                        var i = n.createElement({ tagName: 'div' });
                        return t.Children.forEach(function (t) { console.log(o(t)), o(t) && i.appendChild(o(t)); }), i;
                    } } var e = d.formDescriptor, l = d.controlFactory, r = void 0 === l ? function () { return null; } : l, p = d.mode, b = void 0 === p ? 'edit' : p, x = d.downloadUrl, m = void 0 === x ? '' : x, g = d.onCreated, h = void 0 === g ? function () { return null; } : g, f = d.form; return h({ validate: function () { return new Promise(function (a) { f.validateFields(function (e, d) { a({ errors: e, values: d }); }); }); }, setFieldsValue: function (t) { return f.setFieldsValue(t); } }), function () { return e.map(function (t) { return o(t); }); }(); };
                }, "./src/extraModel/getComponent.ts": /*!****************************************!*\
                !*** ./src/extraModel/getComponent.ts ***!
                \****************************************/ /*! no static exports found */ function (I, e, t) {
                    'use strict';
                    function n(D, e) { var t = null, n = M({}, D.Attributes); switch (console.log(D.Code), D.Code) {
                        case o.ControlsCode.IntCode.toString():
                            t = d['default'](n);
                            break;
                        case o.ControlsCode.BigDecimalCode.toString():
                            t = i['default'](n);
                            break;
                        case o.ControlsCode.DecimalCode.toString():
                            t = r['default'](n);
                            break;
                        case o.ControlsCode.TextCode.toString():
                            t = l['default'](n);
                            break;
                        case o.ControlsCode.EmailCode.toString():
                            t = s['default'](n);
                            break;
                        case o.ControlsCode.BooleanCode.toString():
                            t = p['default'](n);
                            break;
                        case o.ControlsCode.DateCode.toString():
                            t = c['default'](n);
                            break;
                        case o.ControlsCode.DateTimeCode.toString():
                            t = u['default'](n);
                            break;
                        case o.ControlsCode.MultiSelectCode.toString():
                            t = m['default'](n);
                            break;
                        case o.ControlsCode.UniqueidentifierCode.toString():
                            t = g['default'](n);
                            break;
                        case o.ControlsCode.AutoIncrementCode.toString():
                            t = h['default'](n);
                            break;
                        case o.ControlsCode.GenderCode.toString():
                            t = f['default'](n);
                            break;
                        case o.ControlsCode.ImageCode.toString():
                            t = E['default'](n);
                            break;
                        case o.ControlsCode.FileCode.toString():
                            t = y['default'](n);
                            break;
                        case o.ControlsCode.StringCode.toString():
                            t = x['default'](n);
                            break;
                        case o.ControlsCode.TelCode.toString():
                            t = C['default'](n);
                            break;
                        case o.ControlsCode.TimeCode.toString():
                            t = b['default'](n);
                            break;
                        case o.ControlsCode.UrlCode.toString():
                            t = v['default'](n);
                            break;
                        case o.ControlsCode.GridCode.toString():
                            t = function () { return a.createElement({ tagName: 'span', innerText: 'GridType' }); };
                            break;
                        case o.ControlsCode.InsertTimeStampCode.toString():
                            t = T['default'](n);
                            break;
                        case o.ControlsCode.DidgahStaffCode.toString():
                            t = N['default'](n);
                            break;
                        case o.ControlsCode.DidgahContactCode.toString():
                            t = w['default'](n);
                            break;
                        default: t = e(D)(D.Attributes);
                    } return t; }
                    var M = this && this.__assign || function () { return M = Object.assign || function (d) { for (var e, n = 1, t = arguments.length; n < t; n++)
                        for (var a in e = arguments[n], e)
                            Object.prototype.hasOwnProperty.call(e, a) && (d[a] = e[a]); return d; }, M.apply(this, arguments); };
                    e.__esModule = !0;
                    var o = t(/*! ../enums */ './src/enums/index.ts'), d = t(/*! ./Components/intType */ './src/extraModel/Components/intType.ts'), i = t(/*! ./Components/bigDecimalType */ './src/extraModel/Components/bigDecimalType.ts'), r = t(/*! ./Components/decimalType */ './src/extraModel/Components/decimalType.ts'), l = t(/*! ./Components/textType */ './src/extraModel/Components/textType.ts'), s = t(/*! ./Components/emailType */ './src/extraModel/Components/emailType.ts'), p = t(/*! ./Components/booleanType */ './src/extraModel/Components/booleanType.ts'), c = t(/*! ./Components/dateType */ './src/extraModel/Components/dateType.ts'), u = t(/*! ./Components/dateTimeType */ './src/extraModel/Components/dateTimeType.ts'), m = t(/*! ./Components/multiSelectType */ './src/extraModel/Components/multiSelectType.ts'), g = t(/*! ./Components/uniqueidentifierType */ './src/extraModel/Components/uniqueidentifierType.ts'), h = t(/*! ./Components/autoIncrementType */ './src/extraModel/Components/autoIncrementType.ts'), f = t(/*! ./Components/genderType */ './src/extraModel/Components/genderType.ts'), y = t(/*! ./Components/fileType */ './src/extraModel/Components/fileType.ts'), x = t(/*! ./Components/stringType */ './src/extraModel/Components/stringType.ts'), C = t(/*! ./Components/telType */ './src/extraModel/Components/telType.ts'), b = t(/*! ./Components/timeType */ './src/extraModel/Components/timeType.ts'), v = t(/*! ./Components/urlType */ './src/extraModel/Components/urlType.ts'), T = t(/*! ./Components/insertTimeStamp */ './src/extraModel/Components/insertTimeStamp.ts'), N = t(/*! ./Components/didgahStaffType */ './src/extraModel/Components/didgahStaffType.ts'), w = t(/*! ./Components/didgahContactType */ './src/extraModel/Components/didgahContactType.ts'), E = t(/*! ./Components/imageType */ './src/extraModel/Components/imageType.ts'), a = t(/*! ../utils */ './src/utils.ts');
                    e.getComponent = n;
                }, "./src/extraModel/staticComponents.ts": /*!********************************************!*\
                !*** ./src/extraModel/staticComponents.ts ***!
                \********************************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    function n(n) { var e = a.createElement({ tagName: 'div' }); return e.appendChild(n), e; }
                    e.__esModule = !0;
                    var a = t(/*! ../utils */ './src/utils.ts');
                    e.addNewRow = function (t) { return { input: n(a.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__add-button', type: 'button', value: '+', onclick: function () { t(); } } })), cellProps: { className: 'text-center' } }; }, e.removeCell = function (d, e) { return { input: n(a.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__remove-button', type: 'button', value: 'x', onclick: function () { e(d); } } })), cellProps: { className: 'text-center' } }; }, e.settingCell = function (d, e) { return { input: n(a.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__setting-button', type: 'button', value: '...', onclick: function () { e(d); } } })), cellProps: { className: 'text-center' } }; }, e.wrapDiv = n, e.gridRowElement = function () { return a.createElement({ tagName: 'tr', props: { className: 'listRowNormal' } }); };
                }, "./src/extraModel/utils.ts": /*!*********************************!*\
                !*** ./src/extraModel/utils.ts ***!
                \*********************************/ /*! no static exports found */ function (d, e, t) {
                    'use strict';
                    e.__esModule = !0;
                    var n = t(/*! ../enums */ './src/enums/index.ts');
                    e.DynamicDataComponentRules = { Email: '^\\s*(((?!\\.)[a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9\\-]+\\.)+([a-zA-Z]{2,}))\\s*$', Guid: '^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$', InputDecimal: '^[0-9]+\\.[0-9]+$', InputNumber: '/^d+$/' }, e['default'] = function (i, e, t, n) { e = e || 3, t = t || '.', n = n || ',', i = i.toString(); var o = i.split(t), d = o[0], p = o[1], c = ''; if ('undefined' != typeof d) {
                        for (var l = d.length - 1; 0 <= l; l--)
                            c += d.charAt(l);
                        c = c.replace(new RegExp('(\\d{' + e + '})', 'g'), '$1' + n), c.slice(-n.length) == n && (c = c.slice(0, -n.length)), d = '';
                        for (var l = c.length - 1; 0 <= l; l--)
                            d += c.charAt(l);
                        'undefined' != typeof p && 0 <= p.length && (d += t + p);
                    } return d; }, e.getDesiredValidationRules = function (a, e, t) { var d = []; switch (a) {
                        case n.ControlsCode.EmailCode.toString():
                            d.push({ type: 'email' });
                            break;
                        case n.ControlsCode.BooleanCode.toString():
                            d.push({ type: 'boolean' });
                            break;
                        case n.ControlsCode.DateCode.toString():
                        case n.ControlsCode.DateTimeCode.toString(): break;
                        case n.ControlsCode.UrlCode.toString():
                            d.push({ type: 'url' });
                            break;
                        case n.ControlsCode.UniqueidentifierCode.toString(): d.push({ pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i });
                    } return e && d.push({ required: !0 }), !!t && t.length && d.push.apply(d, t), d; };
                }, "./src/index.ts": /*!**********************!*\
                !*** ./src/index.ts ***!
                \**********************/ /*! no static exports found */ function (p, c, e) {
                    'use strict';
                    c.__esModule = !0;
                    var t = e(/*! ./extraModel/Components/bundle */ './src/extraModel/Components/bundle.ts');
                    c.DynamicDataGrid = t['default'];
                    var a = e(/*! ./utils */ './src/utils.ts');
                    c.createElement = a.createElement, c.renderIntoRoot = a.renderIntoRoot, c.formToJSON = a.formToJSON, c.elementIdGenerator = a.elementIdGenerator, c.dialogFormToJSON = a.dialogFormToJSON, c.currentDocumentObj = a.currentDocumentObj;
                    var n = e(/*! ./Components */ './src/Components/index.ts');
                    c.withLabel = n.withLabel, c.autoComplete = n.autoComplete;
                    var d = e(/*! ./Components/tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
                    c.mapIntoTD = d.mapIntoTD;
                    var o = e(/*! ./DidgahDeferred */ './src/DidgahDeferred.ts');
                    c.DidgahDeferred = o['default'];
                    var i = e(/*! ./ajax */ './src/ajax.ts');
                    c.createApiUrl = i.createApiUrl, c.createAjaxReq = i.createAjaxReq, function (t) { for (var e in t)
                        c.hasOwnProperty(e) || (c[e] = t[e]); }(e(/*! ./enums */ './src/enums/index.ts'));
                    var l = e(/*! ./extraModel/extraModel */ './src/extraModel/extraModel.ts');
                    c.ExtraModel = l['default'];
                }, "./src/utils.ts": /*!**********************!*\
                !*** ./src/utils.ts ***!
                \**********************/ /*! no static exports found */ function (d, c, e) {
                    'use strict';
                    function l(t) { return 'object' == typeof t ? 0 === t.length : !!!t; }
                    c.__esModule = !0;
                    var u = e(/*! jquery */ './node_modules/jquery/dist/jquery.js');
                    c.currentDocumentObj = { currentDocument: null, getCurrentDocument: function () { return this.currentDocument; }, setCurentDocument: function (t) { this.currentDocument = t; } }, c.container = document.getElementById('root'), c.isObjectDomElement = function (t) { return t.scopeName && 'HTML' === t.scopeName; }, c.getElementWithStyle = function (a, e) { var t = a.cloneNode(); return e.forEach(function (a) { t.style[a.key] = a.value; }), t; }, c.renderIntoRoot = function (t) { c.container.appendChild(t); }, c.getElementWithClassNames = function (a, e) { var t = a.cloneNode(!0); return e.forEach(function (a) { t.className += ' ' + a; }), t; }, c.elementIdGenerator = { busyIds: [], gererate: function () { for (var d = '', e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', t = e.length, n = 0; 5 > n; n++)
                            d += e.charAt(Math.floor(Math.random() * t)); return 0 !== document.querySelectorAll('#' + d).length || this.busyIds.find(function (e) { return e === d; }) ? void this.gererate() : (this.busyIds.push(d), d.toString()); } }, c.createElement = function (t) { var e = t.tagName, n = t.props, o = t.onMount, d = t.innerText, i = window.document.createElement(e), r = c.elementIdGenerator; for (var l in n)
                        if ('style' === l)
                            for (var s in n[l])
                                i.style[s] = n[l][s];
                        else
                            i[l] = n[l]; return o && ((!n || !n.id) && (i.id = r.gererate()), u(i.id).ready(function () { o(); })), d && (i.innerText = d), i; }, c.withErrorHandling = function (a) { return function () { for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t]; try {
                        return a.apply(void 0, e);
                    }
                    catch (e) {
                        throw Error(e);
                    } }; }, c.formToJSON = function (a) { var d = {}; return document.querySelectorAll(a + ' input').forEach(function (t) { var e = t.getAttribute('fieldName'); e && (d[e] = t.getAttribute('value')); }), d; }, c.dialogFormToJSON = function () { var a = {}; return u('input[type="text"]').each(function () { var e = u(this), t = e.attr('fieldName'); a[t] = a[t] ? a[t] + ',' + e.val() : e.val(); }), a; }, c.isEmpty = l, c.validate = function (a, s) { var t = a.rules, r = a.messages, e = Object.keys(t).filter(function (a) { return t[a].isRequired; }); e.forEach(function (t) { if (l(s[t])) {
                        var e = document.getElementById(t), a = document.createElement('span');
                        a.innerHTML = r[t].isRequired, e.after(a);
                    } }); var n = Object.keys(t).filter(function (a) { return t[a].pattern; }); n.forEach(function (a) { if (!l(s[a]) && t[a].pattern.test(s[a])) {
                        var e = document.getElementById(a), n = document.createElement('span');
                        n.innerHTML = r[a].pattern, e.after(n);
                    } }); }, c.importModule = function (a) { var d = a; return new Promise(function (t, e) { var n = document.createElement('script'); n.src = d, n.async = !0, n.onload = function () { t(), n.remove(); }, n.onerror = function () { e(new Error('Failed to load module script with URL ' + d)), n.remove(); }, document.head.appendChild(n); }); };
                }, 0: /*!****************************!*\
                !*** multi ./src/index.ts ***!
                \****************************/ /*! no static exports found */ function (a, e, t) { a.exports = t(/*! ./src/index.ts */ './src/index.ts'); } });
        });
    }, "./src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts": /*!********************************************************************!*\
!*** ./src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts ***!
\********************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = n.createElement({ tagName: 'input', props: { disabled: !0, value: t } }); return a; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Display/bundleViewer.ts": /*!**************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Display/bundleViewer.ts ***!
    \**************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = n.createElement({ tagName: 'div', props: { disabled: !0, value: '#' } }); return a; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts": /*!******************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts ***!
    \******************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function () { var e = n.createElement({ tagName: 'div' }); return e; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Display/index.ts": /*!*******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Display/index.ts ***!
    \*******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        var n = this && this.__assign || function () { return n = Object.assign || function (e) { for (var t, a = 1, d = arguments.length; a < d; a++)
            for (var n in t = arguments[a], t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e; }, n.apply(this, arguments); };
        t.__esModule = !0;
        var d = a(/*! ./autoCompleteViewer */ './src/DynamicDataModel/Widgets/Display/autoCompleteViewer.ts'), o = a(/*! ./emptyBlockViewer */ './src/DynamicDataModel/Widgets/Display/emptyBlockViewer.ts'), i = a(/*! ./labelNumberWithSeperator */ './src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts'), l = { AutoCompleteViewer: { component: d['default'].component, events: d['default'].events, setting: function () { return ''; } }, EmptyBlockViewer: { component: o['default'].component }, LabelNumberWithSeperator: { component: i['default'].component, events: i['default'].events, setting: function () { return ''; } } }, s = { events: { onInit: function () { return ''; } }, getConsistentRules: function () { return []; } };
        t['default'] = function (e) { return l[e] && n(n({}, s), l[e]); };
    }, "./src/DynamicDataModel/Widgets/Display/label.ts": /*!*******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Display/label.ts ***!
    \*******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        function n(e) { var t = e.value; return d.createElement({ tagName: 'div', innerText: t }); }
        t.__esModule = !0;
        var d = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t.label = n, t['default'] = { component: n, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts": /*!**************************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts ***!
    \**************************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        function n(e) { var t = e.value; return d.createElement({ tagName: 'div', innerText: !!t && t.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') }); }
        t.__esModule = !0;
        var d = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t.labelNumberWithSeperator = n, t['default'] = { component: n, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts": /*!************************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts ***!
    \************************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: n.autoComplete, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts": /*!***********************************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts ***!
    \***********************************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = function () { return n.createElement({ tagName: '' }); };
    }, "./src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts": /*!****************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts ***!
    \****************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: n.autoComplete, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/Email/email.ts": /*!**********************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Email/email.ts ***!
    \**********************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a } }); return d; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts": /*!********************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts ***!
    \********************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function () { return n.createElement({ tagName: '' }); } };
    }, "./src/DynamicDataModel/Widgets/Edit/Guid/guid.ts": /*!********************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Guid/guid.ts ***!
    \********************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a, placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' } }); return d; }, events: { onInit: function () { return ''; } }, getConsistentRules: function () { return [{ pattern: '^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$' }]; } };
    }, "./src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts": /*!************************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts ***!
    \************************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a } }); return d; }, events: { onInit: function () { return ''; } }, getConsistentRules: function () { return [{ pattern: '^[0-9]+\\.[0-9]+$' }]; } };
    }, "./src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts": /*!**********************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts ***!
    \**********************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a } }); return d; }, events: { onInit: function () { return ''; } }, getConsistentRules: function () { return [{ pattern: '((https://)|| (http://))?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)' }]; } };
    }, "./src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts": /*!****************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts ***!
    \****************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a } }); return d; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts": /*!**************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts ***!
    \**************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function (e) { var t = e.value, a = e.name, d = n.createElement({ tagName: 'input', props: { value: t, name: a } }); return d; }, events: { onInit: function () { return ''; } } };
    }, "./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts": /*!*************************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts ***!
    \*************************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = function () { return n.createElement({ tagName: '' }); };
    }, "./src/DynamicDataModel/Widgets/Edit/Url/url.ts": /*!******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/Url/url.ts ***!
    \******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = { component: function () { return n.createElement({ tagName: '' }); }, events: { onInit: function () { return ''; } }, getConsistentRules: function () { return [{ pattern: '((https://)|| (http://))?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)' }]; } };
    }, "./src/DynamicDataModel/Widgets/Edit/generalSetting.ts": /*!*************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/generalSetting.ts ***!
    \*************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t['default'] = function () { return n.createElement({ tagName: '' }); };
    }, "./src/DynamicDataModel/Widgets/Edit/index.ts": /*!****************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/Edit/index.ts ***!
    \****************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        var n = this && this.__assign || function () { return n = Object.assign || function (e) { for (var t, a = 1, d = arguments.length; a < d; a++)
            for (var n in t = arguments[a], t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e; }, n.apply(this, arguments); };
        t.__esModule = !0;
        var d = a(/*! ./Textbox/textbox */ './src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts'), o = a(/*! ./Textarea/textarea */ './src/DynamicDataModel/Widgets/Edit/Textarea/textarea.ts'), i = a(/*! ./AutoComplete/autoComplete */ './src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts'), l = a(/*! ./Email/email */ './src/DynamicDataModel/Widgets/Edit/Email/email.ts'), s = a(/*! ./Url/url */ './src/DynamicDataModel/Widgets/Edit/Url/url.ts'), r = a(/*! ./Checkbox/checkbox */ './src/DynamicDataModel/Widgets/Edit/Checkbox/checkbox.ts'), p = a(/*! ./InputNumber/inputNumber */ './src/DynamicDataModel/Widgets/Edit/InputNumber/inputNumber.ts'), c = a(/*! ./Guid/guid */ './src/DynamicDataModel/Widgets/Edit/Guid/guid.ts'), u = a(/*! ./InputDecimal/InputDecimal */ './src/DynamicDataModel/Widgets/Edit/InputDecimal/InputDecimal.ts'), m = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js'), f = a(/*! ./AutoComplete/autoCompleteSettingForm */ './src/DynamicDataModel/Widgets/Edit/AutoComplete/autoCompleteSettingForm.ts'), g = a(/*! ./Textbox/textboxSettingForm */ './src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts'), y = a(/*! ./generalSetting */ './src/DynamicDataModel/Widgets/Edit/generalSetting.ts'), h = a(/*! ./EmptyBlock/emptyBlock */ './src/DynamicDataModel/Widgets/Edit/EmptyBlock/emptyBlock.ts'), b = a(/*! ../tableExDisplayFields */ './src/DynamicDataModel/Widgets/tableExDisplayFields.ts'), x = a(/*! ../tableExEditorFields */ './src/DynamicDataModel/Widgets/tableExEditorFields.ts'), C = { TextBox: { component: d['default'].component, setting: g['default'], events: d['default'].events }, TextArea: { component: o['default'].component, setting: g['default'], events: o['default'].events }, AutoComplete: { component: i['default'].component, setting: f['default'], events: i['default'].events }, Email: { component: l['default'].component, setting: y['default'], events: l['default'].events, getConsistentRules: l['default'].getConsistentRules }, Url: { component: s['default'].component, setting: y['default'], events: s['default'].events, getConsistentRules: s['default'].getConsistentRules }, Checkbox: { component: r['default'].component, setting: y['default'], events: r['default'].events }, InputNumber: { component: p['default'].component, setting: function () { return ''; }, events: p['default'].events }, Guid: { component: c['default'].component, setting: function () { return ''; }, events: c['default'].events, getConsistentRules: c['default'].getConsistentRules }, InputDecimal: { component: u['default'].component, setting: function () { return ''; }, events: u['default'].events, getConsistentRules: u['default'].getConsistentRules }, EmptyBlock: { component: h['default'].component }, TableExEditor: { component: function (e) { console.log('props is'), console.log(e); var t = e.fieldInstance, a = e.fields, n = m.DynamicDataGrid({ headers: a.map(function (e) { return e.Name; }), initialFormData: [], displayCellRenderer: function (e) { return { input: x['default'][e] }; }, editCellRenderer: function (e) { var t = e.widgetId; return { input: b['default'][t] }; }, rowsData: { fields: a } }); return console.log(n), n; } } }, D = { events: { onInit: function () { var e = m.DidgahDeferred.create(); return e.resolve(), e.promise(); } }, getConsistentRules: function () { return []; } };
        t['default'] = function (e) { return C[e] && n(n({}, D), C[e]); };
    }, "./src/DynamicDataModel/Widgets/FormRenderer.ts": /*!******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/FormRenderer.ts ***!
    \******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! ../utils */ './src/DynamicDataModel/utils.ts'), d = a(/*! ../widgetFactory */ './src/DynamicDataModel/widgetFactory.ts'), o = a(/*! ../fieldTypeGuids */ './src/DynamicDataModel/fieldTypeGuids.ts'), i = a(/*! ../dispatcher */ './src/DynamicDataModel/dispatcher.ts'), l = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js'), s = a(/*! ../enums */ './src/DynamicDataModel/enums/index.ts'), r = a(/*! ./widgetIdList */ './src/DynamicDataModel/Widgets/widgetIdList.ts');
        t.translate = function () { return 'NOT TRANSLATED'; }, t['default'] = function (e) { function a() { for (var e, a = f.LayoutItems, n = f.DesigendForm, d = n, i = function (e) { if (e.isFieldBindableWidget) {
            var n = a.filter(function (t) { return t.FieldInstance.Name === e.correspondingFieldInstance.Name; })[0];
            if (e.correspondingFieldInstance.Type.Guid === o.FieldTypeGuids.RelationType)
                e.control.Attributes.EntityId = n.Relation.EntityId, e.control.Attributes.ReferenceFieldId = n.Relation.ReferenceFieldId;
            else if (e.correspondingFieldInstance.Type.Guid === o.FieldTypeGuids.BundleType) {
                e.control.Attributes.ReferenceFieldId = n.FieldInstance.FieldInstanceId, e.control.Attributes.dataEntryLayoutItems = n.LayoutItems;
                var d = e.control.Attributes.selectedFields, i = [];
                d.forEach(function (e) { var t = n.LayoutItems.find(function (t) { return t.FieldInstance.Name === e.Name; }); e ? i.push(e) : i.push(t.FieldInstance); }), e.control.Attributes.selectedFields = i;
            }
            else
                e.control.Attributes.ReferenceFieldId = n.FieldInstance.FieldInstanceId, e.control.Attributes.layoutItemDefaultValue = n.LayoutItemDefaultValue;
            var l = e.control.Rules;
            !l || l.forEach(function (e) { 0 < Object.keys(e).filter(function (e) { return 'max' === e; }).length && l.forEach(function (t) { 0 < Object.keys(t).filter(function (e) { return 'min' === e; }).length && 0 == e.max + t.min && (e.max = t.min = void 0); }); }), !l || e.editWidgetId != r['default'].InputNumberWithSeperator || l.forEach(function (e) { Object.keys(e).forEach(function (a) { 'max' === a ? (e.type = 'number', e.message = t.translate('MaximumNumberMustBe').replace('{0}', e.max)) : 'min' === a ? (e.type = 'number', e.message = t.translate('MinimumNumberMustBe').replace('{0}', e.min)) : void 0; }); });
        } }, s = 0, p = d; s < p.length; s++)
            e = p[s], i(e); var u = l.DidgahDeferred.create(); return u.resolve(c(d)), u; } function p(e) { var t = m.getWidget(e.SoftwareGuid, e.Code); return t; } function c(e) { var t = function (e, a) { var n = []; e.filter(function (e) { return e.parentId === a; }).forEach(function (a) { if (a.control.Type === l.ControlType.Container) {
            switch (a.control.Code) {
                case s.DesignerContainerCode[s.DesignerContainerCode.Col]:
                    a.control.Code = s.DesignerContainerCode.Col.toString();
                    break;
                case s.DesignerContainerCode[s.DesignerContainerCode.FormRow]:
                    a.control.Code = s.DesignerContainerCode.FormRow.toString();
                    break;
                case s.DesignerContainerCode[s.DesignerContainerCode.Fieldset]: a.control.Code = s.DesignerContainerCode.Fieldset.toString();
            }
            a.control.Children = t(e, a.id);
        } a.control.Type === l.ControlType.Container ? a.control.Code != s.DesignerContainerCode.Col.toString() && (a.control.Identifier = Math.random().toString(), n.push(a)) : ((!a.control.DataIndex || '' == a.control.DataIndex) && (a.control.DataIndex = 'undefined'), a.control.Label = a.control.Attributes.label, n.push(a)), n.sort(function (e, t) { return e.orderIndex - t.orderIndex; }); }); var d = n.map(function (e) { return e.control; }); return d; }, a = t(function (e) { var t = function (t) { return e.filter(function (e) { return e.id == t; })[0].parentId; }, a = []; return e.forEach(function (e) { e.control.Type == l.ControlType.Component && (e.parentId = t(e.parentId)), a.push(e); }), a; }(e), void 0); return a; } function u() { m.importModules().done(function () { console.log(1), a().done(function (e) { console.log(2); var t = document.getElementById('root'); l.ExtraModel({ formDescriptor: e, mode: 'edit', form: {}, controlFactory: p }).forEach(function (e) { console.log(e), t.appendChild(e); }); }); }); } var m, f = e.designedLayout, g = e.setExtraModelFormArgs, y = new i.Dispatcher, h = f.LayoutItems.filter(function (e) { return e.FieldInstance.Type.SoftwareGuid !== n.softwareGuid.toLowerCase(); }); m = 0 < h.length ? d['default']([], h[0].FieldInstance.Type.SoftwareGuid) : d['default']([], null), u(); };
    }, "./src/DynamicDataModel/Widgets/tableExDisplayFields.ts": /*!**************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/tableExDisplayFields.ts ***!
    \**************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        function n() { return l.createElement({ tagName: 'span', innerText: 'i skipped' }); }
        function d() { return n(); }
        function o() { return n(); }
        function i() { return n(); }
        t.__esModule = !0;
        var l = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t.skipComponentComponent = n;
        t['default'] = { TextBox: d, Email: d, Url: d, TextArea: d, SelectStaff: function () { return n(); }, InputNumber: function () { return n(); }, InputNumberWithSeperator: i, DatePicker: function () { return n(); }, TimePicker: function () { return n(); }, DateTimePicker: function () { return n(); }, Checkbox: o, Switch: o, InputDecimal: function () { return n(); }, Guid: i, ExtensionLite: i, SignatureSelector: i, TableExEditor: i };
    }, "./src/DynamicDataModel/Widgets/tableExEditorFields.ts": /*!*************************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/tableExEditorFields.ts ***!
    \*************************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        function n() { return i.skipComponentComponent(); }
        function d() { return i.skipComponentComponent(); }
        function o() { return i.skipComponentComponent(); }
        t.__esModule = !0;
        var i = a(/*! ./tableExDisplayFields */ './src/DynamicDataModel/Widgets/tableExDisplayFields.ts');
        t['default'] = { TextBox: n, Email: n, Url: n, TextArea: n, SelectStaff: function () { return i.skipComponentComponent(); }, InputNumber: n, InputNumberWithSeperator: function () { return i.skipComponentComponent(); }, DatePicker: function () { return i.skipComponentComponent(); }, TimePicker: function () { return i.skipComponentComponent(); }, DateTimePicker: function () { return i.skipComponentComponent(); }, Checkbox: d, Switch: d, InputDecimal: function () { return i.skipComponentComponent(); }, Guid: n, ExtensionLite: o, AutoComplete: o, PopupSelector: o, SignatureSelector: o, TableExEditor: o };
    }, "./src/DynamicDataModel/Widgets/widgetFactory.ts": /*!*******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/widgetFactory.ts ***!
    \*******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! ./Edit/Textbox/textbox */ './src/DynamicDataModel/Widgets/Edit/Textbox/textbox.ts'), d = a(/*! ./Edit/Textbox/textboxSettingForm */ './src/DynamicDataModel/Widgets/Edit/Textbox/textboxSettingForm.ts'), o = a(/*! ./Edit/index */ './src/DynamicDataModel/Widgets/Edit/index.ts'), i = a(/*! ./Display/index */ './src/DynamicDataModel/Widgets/Display/index.ts'), l = { component: n['default'].component, setting: d['default'], events: n['default'].events };
        t['default'] = function (e) { var t = o['default'](e) || i['default'](e); return t || l; };
    }, "./src/DynamicDataModel/Widgets/widgetIdList.ts": /*!******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/widgetIdList.ts ***!
    \******************************************************/ /*! no static exports found */ function (e, t) {
        'use strict';
        t.__esModule = !0;
        t['default'] = { TextBox: 'TextBox', TextArea: 'TextArea', AutoComplete: 'AutoComplete', AutoCompleteViewer: 'AutoCompleteViewer', TableExEditor: 'TableExEditor', Email: 'Email', PopupSelector: 'PopupSelector', EmptyBlock: 'EmptyBlock', EmptyBlockViewer: 'EmptyBlockViewer', ExtensionLite: 'ExtensionLite', Guid: 'Guid', IndicatorViewer: 'IndicatorViewer', SignatureViewer: 'SignatureViewer', InputNumberWithSeperator: 'InputNumberWithSeperator', LabelNumberWithSeperator: 'LabelNumberWithSeperator', SignatureSelector: 'SignatureSelector' };
    }, "./src/DynamicDataModel/Widgets/widgetManager.ts": /*!*******************************************************!*\
    !*** ./src/DynamicDataModel/Widgets/widgetManager.ts ***!
    \*******************************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! ./widgetFactory */ './src/DynamicDataModel/Widgets/widgetFactory.ts'), d = a(/*! ./widgetIdList */ './src/DynamicDataModel/Widgets/widgetIdList.ts'), o = a(/*! ./tableExEditorFields */ './src/DynamicDataModel/Widgets/tableExEditorFields.ts'), i = a(/*! ./tableExDisplayFields */ './src/DynamicDataModel/Widgets/tableExDisplayFields.ts'), l = a(/*! ../Widgets/Display/label */ './src/DynamicDataModel/Widgets/Display/label.ts'), s = a(/*! ./Edit/AutoComplete/autoComplete */ './src/DynamicDataModel/Widgets/Edit/AutoComplete/autoComplete.ts'), r = a(/*! ../Widgets/Display/bundleViewer */ './src/DynamicDataModel/Widgets/Display/bundleViewer.ts'), p = a(/*! ./Display/labelNumberWithSeperator */ './src/DynamicDataModel/Widgets/Display/labelNumberWithSeperator.ts'), c = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js');
        t.DynamicDataModelWidgetManagerFactory = function () { return { getDataEntryEditComponent: function (e) { return 'function' == typeof o['default'][e] ? o['default'][e]() : o['default'][e] || e; }, getDataEntryViewComponent: function (e) { return 'function' == typeof i['default'][e] ? i['default'][e]() : i['default'][e] || e; }, getWidget: function (e) { return n['default'](e).component; }, getCustomDataEntryEditComponent: function (e) { switch (e) {
                case d['default'].Guid:
                case d['default'].AutoComplete:
                case d['default'].PopupSelector: return s['default'].component;
                case d['default'].IndicatorViewer: return l['default'].component;
                case d['default'].InputNumberWithSeperator: return l['default'].component;
                default:
            } }, getCustomDataEntryViewComponent: function (e) { switch (e) {
                case d['default'].ExtensionLite:
                case d['default'].AutoComplete:
                case d['default'].PopupSelector:
                case d['default'].SignatureSelector:
                case d['default'].TableExEditor: return r['default'].component;
                case d['default'].InputNumberWithSeperator: return p['default'].component;
                default:
            } }, getCustomDataEntryValidation: function () { return []; }, onInit: function (e, t) { var a = c.DidgahDeferred.create(); return n['default'](e).events.onInit ? n['default'](e).events.onInit(e, t).then(function (e) { a.resolve(e); })['catch'](function () { return a.fail(); }) : a.resolve(null), a; }, hasRequiredSetting: function (e) { return e === d['default'].AutoComplete || e === d['default'].TableExEditor; }, getConsistentRules: function (e) { return n['default'](e).getConsistentRules(); }, validateWidgetSetting: function (e, t) { return e === d['default'].AutoComplete || e === d['default'].AutoCompleteViewer || e === d['default'].PopupSelector ? !!t.ReferenceFieldId : e === d['default'].IndicatorViewer ? !!t.indicatorSelected : e !== d['default'].TableExEditor || !!t.design && 0 < JSON.parse(t.design).length; } }; };
    }, "./src/DynamicDataModel/dispatcher.ts": /*!********************************************!*\
    !*** ./src/DynamicDataModel/dispatcher.ts ***!
    \********************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js'), d = function () { function e() { this.widgetCallbacks = []; } return e.prototype.registerCallback = function (e) { this.widgetCallbacks.push(e); }, e.prototype.invokeAllCallbacks = function () { var e = this.widgetCallbacks.map(function (e) { return function () { var t = n.DidgahDeferred.create(); return e.callback(e.softwareGuid, e.widgetId, e.attributes).then(function (a) { t.resolve({ fieldInstanceName: e.fieldInstanceName, data: a }); }), t; }(); }), t = n.DidgahDeferred.create(); return Promise.all(e).then(t.resolve)['catch'](t.fail), t; }, e; }();
        t.Dispatcher = d;
    }, "./src/DynamicDataModel/enums/index.ts": /*!*********************************************!*\
    !*** ./src/DynamicDataModel/enums/index.ts ***!
    \*********************************************/ /*! no static exports found */ function (e, t) {
        'use strict';
        t.__esModule = !0;
        var a;
        (function (e) { e[e.Fieldset = 1] = 'Fieldset', e[e.FormRow = 2] = 'FormRow', e[e.Col = 4] = 'Col'; })(a = t.DesignerContainerCode || (t.DesignerContainerCode = {}));
        var n;
        (function (e) { e[e.Edit = 0] = 'Edit', e[e.Display = 1] = 'Display', e[e.Search = 2] = 'Search'; })(n = t.WidgetType || (t.WidgetType = {}));
    }, "./src/DynamicDataModel/fieldTypeGuids.ts": /*!************************************************!*\
    !*** ./src/DynamicDataModel/fieldTypeGuids.ts ***!
    \************************************************/ /*! no static exports found */ function (e, t) {
        'use strict';
        t.__esModule = !0, t.FieldTypeGuids = { BundleType: '48d1770c-c16a-4cf7-97ea-63be4a35537b', RelationType: '7c6c24c5-af3e-4b37-afc6-8ef998f83008', StringType: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', DecimalType: '43a04185-07f5-464b-b82b-46548cae0ebc', SignatureType: '814ef0ca-4552-43c9-9e65-f3a4f093bd09', StaffType: '70f450c3-a132-48bd-8bf7-a89628d67fdf', FileType: '65AA9A09-1D96-4C93-9B59-7700D646B5EF', DateTimeType: 'e0b2b27c-5890-4f39-b329-ecb90065d290' };
    }, "./src/DynamicDataModel/utils.ts": /*!***************************************!*\
    !*** ./src/DynamicDataModel/utils.ts ***!
    \***************************************/ /*! no static exports found */ function (e, t) {
        'use strict';
        t.__esModule = !0, t.softwareGuid = 'B90F03A0-5B3B-4027-B9EC-247C2D6DDAAC';
    }, "./src/DynamicDataModel/widgetFactory.ts": /*!***********************************************!*\
    !*** ./src/DynamicDataModel/widgetFactory.ts ***!
    \***********************************************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! gulp-es3-typescript-library */ '../library/dist/index.js'), d = a(/*! ./Widgets/widgetManager */ './src/DynamicDataModel/Widgets/widgetManager.ts');
        t['default'] = function (e, t) { function a(e) { var t = '/' + e.Url + '/build/DynamicDataModelWidgetManager.js', a = l(t); return a.then(function () { window[e.Key.toLocaleLowerCase()].DynamicDataModelWidgetManagerFactory; }), a; } function o() { return new Promise(function (e) { p = d.DynamicDataModelWidgetManagerFactory, e(p); }); } function i(t) { return e.filter(function (e) { return e.Guid.toString().toLowerCase() === t.toString().toLowerCase(); })[0]; } function l(e) { return new Promise(function (t, a) { var n = document.createElement('script'); n.src = e + '?package=appContext.Package', n.async = !0, n.onload = function () { t(), n.remove ? n.remove() : n.removeNode(); }, n.onerror = function () { return a(new Error('Failed to load module script with URL ' + e)), void n.remove(); }, document.head.appendChild(n); }); } function s(e) { if (e === e || void 0 === e)
            return p({}); } var r, p, c; return e = e, t ? (r = i(t), c = !0) : c = !1, { getSoftwareWidgetManager: a, getCommonWidgetManager: o, getSoftware: i, importModuleBySoftware: function (e) { var t = n.DidgahDeferred.create(), d = i(e); return a(d).then(function () { t.resolve(!0); }), t; }, importModules: function () { var e = n.DidgahDeferred.create(), t = [o()]; return Promise.all(t).then(function () { e.resolve(!0); }), e; }, getDataEntryEditComponent: function (e, t) { return s(e).getDataEntryEditComponent(t); }, getDataEntryViewComponent: function (e, t) { return s(e).getDataEntryViewComponent(t); }, getWidget: function (e, t) { return s(e).getWidget(t); }, onInit: function (e, t, a) { var n = s(e); return n.onInit ? n.onInit(t, a) : null; }, hasRequiredSetting: function (e, t) { return s(e).hasRequiredSetting(t); }, getConsistentRules: function (e, t) { return s(e).getConsistentRules(t); }, validateWidgetSetting: function (e, t, a) { return s(e).validateWidgetSetting(t, a); } }; };
    }, "./src/example-data.ts": /*!*****************************!*\
    !*** ./src/example-data.ts ***!
    \*****************************/ /*! no static exports found */ function (e, t) {
        'use strict';
        t.__esModule = !0;
        t['default'] = { DataModelId: 'F8PJGtUTatTBvGwIlDZTGg', Layoutkey: 'testBase2-DidgahWeb', DesigendForm: [{ id: .19540226172476705, index: 0, control: { Identifier: '', Type: 1, Code: 'Fieldset', Attributes: { Title: '\u0641\u06CC\u0644\u062F\u0633\u062A \u06F1' }, Children: [], Rules: [{ Title: '\u0641\u06CC\u0644\u062F\u0633\u062A \u06F1' }] }, orderIndex: 0, isValid: !0 }, { id: .7102255613499266, parentId: .19540226172476705, index: 0, control: { Identifier: '0.2892061075922687', Type: 1, Code: 'FormRow', Attributes: { cols: [24] }, Children: [] }, orderIndex: 0, isValid: !0 }, { id: .8411682271830765, parentId: .7102255613499266, index: 0, control: { Identifier: '0.5044389291358857', Type: 1, Code: 'Col', Attributes: { col: 24 }, Children: [] }, orderIndex: 0, isValid: !0 }, { parentId: .8411682271830765, id: .6571985040398887, index: 3, control: { Type: 2, Attributes: { fieldInstance: { FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg', Name: 'Grid1', Label: 'Grid1', Type: { Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_BundleDisplayName', IsBundle: !0 }, Settings: '', EditWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }], DisplayWidgets: [{ Id: 'TableExViewer', IsDefault: !0 }], SearchWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }] }, fields: [{ FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, { FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ', Name: 'CountryCode', Label: '2CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }], selectedFields: [{ FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, { FieldInstanceId: '86LV1oW3aoTe14UOzItGYg', Name: 'CountryCode', Label: 'CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }], dataEntryLayoutItems: [{ Id: 'BGTd3SftGgfhkZau0X9TZA', FieldInstance: { FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ', Name: 'CountryCode', Label: '2CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TextBox', DisplayWidgetId: 'Label', SearchWidgetId: 'TextBox', IsBundle: !1, Relation: null, LayoutItems: [] }, { Id: '4s-D8h_xlEiimRroA749kw', FieldInstance: { FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TextBox', DisplayWidgetId: 'Label', SearchWidgetId: 'TextBox', IsBundle: !1, Relation: null, LayoutItems: [] }], label: 'Grid1', design: [{ id: .42031951540816026, index: 0, control: { Identifier: '', Type: 1, Code: 'Fieldset', Attributes: { Title: '\u0641\u06CC\u0644\u062F\u0633\u062A \u062C\u062F\u06CC\u062F' }, Children: [] }, orderIndex: 0, isValid: !0 }, { id: .38503776533004497, parentId: .42031951540816026, index: 0, control: { Identifier: '0.4770841982863905', Type: 1, Code: 'FormRow', Attributes: { cols: [12, 12] }, Children: [] }, orderIndex: 0, isValid: !0 }, { id: .9207505206276649, parentId: .38503776533004497, index: 0, control: { Identifier: '0.5740389906076677', Type: 1, Code: 'Col', Attributes: { col: 12 }, Children: [] }, orderIndex: 0, isValid: !0 }, { id: .07008070910353581, parentId: .38503776533004497, index: 0, control: { Identifier: '0.1472431088033761', Type: 1, Code: 'Col', Attributes: { col: 12 }, Children: [] }, orderIndex: 0, isValid: !0 }, { id: .2421834677141217, parentId: .9207505206276649, index: 4, control: { Type: 2, Attributes: { fieldInstance: { FieldInstanceId: '86LV1oW3aoTe14UOzItGYg', Name: 'CountryCode', Label: 'CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, label: 'CountryCode' }, Code: 'TextBox', DataIndex: 'CountryCode', Label: 'CountryCode', Required: !1, Rules: [], SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac' }, orderIndex: 0, isFieldBindableWidget: !0, correspondingFieldInstance: { FieldInstanceId: '86LV1oW3aoTe14UOzItGYg', Name: 'CountryCode', Label: 'CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, editWidgetId: 'TextBox', displayWidgetId: 'Label', searchWidgetId: 'TextBox', isValid: !0 }, { id: .44986848802692037, parentId: .07008070910353581, index: 5, control: { Type: 2, Attributes: { fieldInstance: { FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, label: 'CountryName' }, Code: 'TextBox', DataIndex: 'CountryName', Label: 'CountryName', Required: !1, Rules: [], SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac' }, orderIndex: 1, isFieldBindableWidget: !0, correspondingFieldInstance: { FieldInstanceId: 'HrmbL1zlM4xr9BfYUsClhQ', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, editWidgetId: 'TextBox', displayWidgetId: 'Label', searchWidgetId: 'TextBox', isValid: !0 }] }, Code: 'TableExEditor', DataIndex: 'Grid1', Label: 'Grid1', Required: !1, Rules: [], SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac' }, orderIndex: 0, isFieldBindableWidget: !0, correspondingFieldInstance: { FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg', Name: 'Grid1', Label: 'Grid1', Type: { Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_BundleDisplayName', IsBundle: !0 }, Settings: '', EditWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }], DisplayWidgets: [{ Id: 'TableExViewer', IsDefault: !0 }], SearchWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }] }, editWidgetId: 'TableExEditor', displayWidgetId: 'TableExViewer', searchWidgetId: 'TableExEditor', isValid: !0 }, { id: .051512334254858905, parentId: .19540226172476705, index: 1, control: { Identifier: '0.44301354509883684', Type: 1, Code: 'FormRow', Attributes: { cols: [12, 12] }, Children: [] }, orderIndex: 1, isValid: !0 }, { id: .19070734599361994, parentId: .051512334254858905, index: 1, control: { Identifier: '0.22960751142591818', Type: 1, Code: 'Col', Attributes: { col: 12 }, Children: [] }, orderIndex: 1, isValid: !0 }, { id: .9931355434307865, parentId: .051512334254858905, index: 1, control: { Identifier: '0.8622276179901889', Type: 1, Code: 'Col', Attributes: { col: 12 }, Children: [] }, orderIndex: 1, isValid: !0 }, { id: .9092185716929777, parentId: .19070734599361994, index: 7, control: { Type: 2, Attributes: { fieldInstance: { FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw', Name: 'Name1', Label: 'Name', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, label: 'Name' }, Code: 'TextBox', DataIndex: 'Name1', Label: 'Name', Required: !1, Rules: [], SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac' }, orderIndex: 0, isFieldBindableWidget: !0, correspondingFieldInstance: { FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw', Name: 'Name1', Label: 'Name', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, editWidgetId: 'TextBox', displayWidgetId: 'Label', searchWidgetId: 'TextBox', isValid: !0 }, { id: .001716380594920297, parentId: .9931355434307865, index: 8, control: { Type: 2, Attributes: { fieldInstance: { FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag', Name: 'Ashar', Label: 'Ashar', Type: { Guid: '43a04185-07f5-464b-b82b-46548cae0ebc', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_DecimalFieldTypeDisplayName', IsBundle: !1 }, Settings: { NumericPrecision: 4, NumericScale: 4 }, EditWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }], SearchWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }] }, label: 'Ashar' }, Code: 'InputDecimal', DataIndex: 'Ashar', Label: 'Ashar', Required: !1, Rules: [{ pattern: '^[0-9]+\\.[0-9]+$' }], SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac' }, orderIndex: 1, isFieldBindableWidget: !0, correspondingFieldInstance: { FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag', Name: 'Ashar', Label: 'Ashar', Type: { Guid: '43a04185-07f5-464b-b82b-46548cae0ebc', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_DecimalFieldTypeDisplayName', IsBundle: !1 }, Settings: { NumericPrecision: 4, NumericScale: 4 }, EditWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }], SearchWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }] }, editWidgetId: 'InputDecimal', displayWidgetId: 'Label', searchWidgetId: 'InputDecimal', isValid: !0 }], LayoutItems: [{ Id: 'FQ7MHfKRjHN8mNLmkmnIaw', FieldInstance: { FieldInstanceId: 'X8HpUEDMmWdjsK0cmdaagg', Name: 'Grid1', Label: 'Grid1', Type: { Guid: '48d1770c-c16a-4cf7-97ea-63be4a35537b', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_BundleDisplayName', IsBundle: !0 }, Settings: '', EditWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }], DisplayWidgets: [{ Id: 'TableExViewer', IsDefault: !0 }], SearchWidgets: [{ Id: 'TableExEditor', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TableExEditor', DisplayWidgetId: 'TableExEditor', SearchWidgetId: 'TableExEditor', IsBundle: !0, Relation: null, LayoutItems: [{ Id: '-STS8kw602mTXdqJ6O8pSg', FieldInstance: { FieldInstanceId: 'ZTrrF0Kz5TI7kZMLRJG6jA', Name: 'CountryName', Label: 'CountryName', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TextBox', DisplayWidgetId: 'Label', SearchWidgetId: 'TextBox', IsBundle: !1, Relation: null, LayoutItems: [] }, { Id: 'A2fpgXgsrD_I-LtfkawSfA', FieldInstance: { FieldInstanceId: 'dMseCgLNgsmlgWC01m39GQ', Name: 'CountryCode', Label: '2CountryCode', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TextBox', DisplayWidgetId: 'Label', SearchWidgetId: 'TextBox', IsBundle: !1, Relation: null, LayoutItems: [] }] }, { Id: 'VRR900aD1tKpSJGfivtJ7A', FieldInstance: { FieldInstanceId: 'NWXRxb0n4lrrlSA98cZ8Cw', Name: 'Name1', Label: 'Name', Type: { Guid: 'd2983f70-34ce-4ffd-9b86-78f761b73cab', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_StringFieldTypeDisplayName', IsBundle: !1 }, Settings: null, EditWidgets: [{ Id: 'TextBox', IsDefault: !0 }, { Id: 'TextArea', IsDefault: !1 }, { Id: 'Email', IsDefault: !1 }, { Id: 'Url', IsDefault: !1 }, { Id: 'CommaSeparableComboBox', IsDefault: !1 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }, { Id: 'IndicatorViewer', IsDefault: !1 }], SearchWidgets: [{ Id: 'TextBox', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'TextBox', DisplayWidgetId: 'Label', SearchWidgetId: 'TextBox', IsBundle: !1, Relation: null, LayoutItems: [] }, { Id: 'n4gsfvUXSV9NkyV8FXIPeQ', FieldInstance: { FieldInstanceId: 'HkrxVY4Kk4UgfDsNSekLag', Name: 'Ashar', Label: 'Ashar', Type: { Guid: '43a04185-07f5-464b-b82b-46548cae0ebc', SoftwareGuid: 'b90f03a0-5b3b-4027-b9ec-247c2d6ddaac', Name: 'DynamicDataModel_DecimalFieldTypeDisplayName', IsBundle: !1 }, Settings: { NumericPrecision: 4, NumericScale: 4 }, EditWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }], DisplayWidgets: [{ Id: 'Label', IsDefault: !0 }], SearchWidgets: [{ Id: 'InputDecimal', IsDefault: !0 }] }, LayoutItemDefaultValue: null, EditWidgetId: 'InputDecimal', DisplayWidgetId: 'Label', SearchWidgetId: 'InputDecimal', IsBundle: !1, Relation: null, LayoutItems: [] }], formData: { Guid: 'Zn21LZKbTxMxQsbmlfBM_pBaaaCiqZx74SsFxRkS1cM', ParentGuid: 'iXLbVR3r4Hbl1frPWIA7ZO2SuhVq2sKceynOzU_BuxM', KeyValues: { Name1: 'Abbasaa', Ashar: 123.4, Grid1: [{ CountryName: 'ww', CountryCode: 'wqwq', Guid: 'ifbWhWmorTmC2lS2NPjG1ovssstYkVulijv2Y_3-Iuo' }, { CountryName: 'www', CountryCode: 'wqwq', Guid: 'L9_uvUU0iz_fW1YUA2zGMK7EsYROHhaLO0-QBe-MOD8' }] } } };
    }, "./src/main.ts": /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/ /*! no static exports found */ function (e, t, a) {
        'use strict';
        t.__esModule = !0;
        var n = a(/*! ./example-data */ './src/example-data.ts'), d = a(/*! ./DynamicDataModel/Widgets/FormRenderer */ './src/DynamicDataModel/Widgets/FormRenderer.ts');
        d['default']({ designedLayout: n['default'], setExtraModelFormArgs: null });
    }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (e, t, a) { e.exports = a(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
