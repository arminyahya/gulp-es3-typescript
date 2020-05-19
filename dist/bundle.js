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
!function (e) { var t = {}; function n(r) { if (t[r])
    return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports; } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var i in e)
        n.d(r, i, function (t) { return e[t]; }.bind(null, i)); return r; }, n.n = function (e) { var t = e && e.__esModule ? function () { return e["default"]; } : function () { return e; }; return n.d(t, "a", t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = "", n(n.s = 3); }([function (e, t, n) {
        "use strict";
        t.__esModule = !0, t.container = document.getElementById("root"), t.isObjectDomElement = function (e) { return e.scopeName && "HTML" === e.scopeName; }, t.getElementWithStyle = function (e, t) { var n = e.cloneNode(); return t.forEach((function (e) { n.style[e.key] = e.value; })), n; }, t.renderIntoRoot = function (e) { t.container.appendChild(e); }, t.getElementWithClassNames = function (e, t) { var n = e.cloneNode(); return t.forEach((function (e) { n.className += " " + e; })), n; }, t.elementIdGenerator = { id: 0, gererate: function () { return this.id++, this.id.toString(); } }, t.createElement = function (e) { var t = e.tagName, n = e.props, r = document.createElement(t); for (var i in n)
            if ("style" === i)
                for (var o in n[i])
                    r.style[o] = n[i][o];
            else
                r[i] = n[i]; return r; };
    }, function (e, t, n) {
        var r, i, o;
        /*!
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
         */ i = "undefined" != typeof window ? window : this, o = function (n, i) {
            var o = [], a = n.document, s = o.slice, u = o.concat, l = o.push, c = o.indexOf, f = {}, d = f.toString, p = f.hasOwnProperty, h = {}, m = function (e, t) { return new m.fn.init(e, t); }, g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, v = /^-ms-/, y = /-([\da-z])/gi, b = function (e, t) { return t.toUpperCase(); };
            function x(e) { var t = !!e && "length" in e && e.length, n = m.type(e); return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e); }
            m.fn = m.prototype = { jquery: "1.12.4", constructor: m, selector: "", length: 0, toArray: function () { return s.call(this); }, get: function (e) { return null != e ? e < 0 ? this[e + this.length] : this[e] : s.call(this); }, pushStack: function (e) { var t = m.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t; }, each: function (e) { return m.each(this, e); }, map: function (e) { return this.pushStack(m.map(this, (function (t, n) { return e.call(t, n, t); }))); }, slice: function () { return this.pushStack(s.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: l, sort: o.sort, splice: o.splice }, m.extend = m.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i)
                        e = a[r], a !== (n = i[r]) && (l && n && (m.isPlainObject(n) || (t = m.isArray(n))) ? (t ? (t = !1, o = e && m.isArray(e) ? e : []) : o = e && m.isPlainObject(e) ? e : {}, a[r] = m.extend(l, o, n)) : void 0 !== n && (a[r] = n)); return a; }, m.extend({ expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e); }, noop: function () { }, isFunction: function (e) { return "function" === m.type(e); }, isArray: Array.isArray || function (e) { return "array" === m.type(e); }, isWindow: function (e) { return null != e && e == e.window; }, isNumeric: function (e) { var t = e && e.toString(); return !m.isArray(e) && t - parseFloat(t) + 1 >= 0; }, isEmptyObject: function (e) { var t; for (t in e)
                    return !1; return !0; }, isPlainObject: function (e) { var t; if (!e || "object" !== m.type(e) || e.nodeType || m.isWindow(e))
                    return !1; try {
                    if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1;
                }
                catch (e) {
                    return !1;
                } if (!h.ownFirst)
                    for (t in e)
                        return p.call(e, t); for (t in e)
                    ; return void 0 === t || p.call(e, t); }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e; }, globalEval: function (e) { e && m.trim(e) && (n.execScript || function (e) { n.eval.call(n, e); })(e); }, camelCase: function (e) { return e.replace(v, "ms-").replace(y, b); }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(); }, each: function (e, t) { var n, r = 0; if (x(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break; return e; }, trim: function (e) { return null == e ? "" : (e + "").replace(g, ""); }, makeArray: function (e, t) { var n = t || []; return null != e && (x(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n; }, inArray: function (e, t, n) { var r; if (t) {
                    if (c)
                        return c.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e)
                            return n;
                } return -1; }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n;)
                    e[i++] = t[r++]; if (n != n)
                    for (; void 0 !== t[r];)
                        e[i++] = t[r++]; return e.length = i, e; }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]); return r; }, map: function (e, t, n) { var r, i, o = 0, a = []; if (x(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i); return u.apply([], a); }, guid: 1, proxy: function (e, t) { var n, r, i; if ("string" == typeof t && (i = e[t], t = e, e = i), m.isFunction(e))
                    return n = s.call(arguments, 2), (r = function () { return e.apply(t || this, n.concat(s.call(arguments))); }).guid = e.guid = e.guid || m.guid++, r; }, now: function () { return +new Date; }, support: h }), "function" == typeof Symbol && (m.fn[Symbol.iterator] = o[Symbol.iterator]), m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) { f["[object " + t + "]"] = t.toLowerCase(); }));
            var w = 
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function (e) { var t, n, r, i, o, a, s, u, l, c, f, d, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ie(), N = ie(), k = ie(), S = function (e, t) { return e === t && (f = !0), 0; }, D = {}.hasOwnProperty, A = [], L = A.pop, j = A.push, _ = A.push, H = A.slice, M = function (e, t) { for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n; return -1; }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = "\\[" + I + "*(" + O + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + I + "*\\]", B = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", P = new RegExp(I + "+", "g"), R = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), W = new RegExp("^" + I + "*," + I + "*"), $ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), z = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), X = new RegExp(B), U = new RegExp("^" + O + "$"), V = { ID: new RegExp("^#(" + O + ")"), CLASS: new RegExp("^\\.(" + O + ")"), TAG: new RegExp("^(" + O + "|[*])"), ATTR: new RegExp("^" + F), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"), bool: new RegExp("^(?:" + q + ")$", "i"), needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i") }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = /'|\\/g, ee = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), te = function (e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320); }, ne = function () { d(); }; try {
                _.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
            }
            catch (e) {
                _ = { apply: A.length ? function (e, t) { j.apply(e, H.call(t)); } : function (e, t) { for (var n = e.length, r = 0; e[n++] = t[r++];)
                        ; e.length = n - 1; } };
            } function re(e, t, r, i) { var o, s, l, c, f, h, v, y, T = t && t.ownerDocument, C = t ? t.nodeType : 9; if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                return r; if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, m)) {
                if (11 !== C && (h = Q.exec(e)))
                    if (o = h[1]) {
                        if (9 === C) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l), r;
                        }
                        else if (T && (l = T.getElementById(o)) && b(t, l) && l.id === o)
                            return r.push(l), r;
                    }
                    else {
                        if (h[2])
                            return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return _.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== C)
                        T = t, y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(Z, "\\$&") : t.setAttribute("id", c = x), s = (v = a(e)).length, f = U.test(c) ? "#" + c : "[id='" + c + "']"; s--;)
                            v[s] = f + " " + he(v[s]);
                        y = v.join(","), T = K.test(e) && de(t.parentNode) || t;
                    }
                    if (y)
                        try {
                            return _.apply(r, T.querySelectorAll(y)), r;
                        }
                        catch (e) { }
                        finally {
                            c === x && t.removeAttribute("id");
                        }
                }
            } return u(e.replace(R, "$1"), t, r, i); } function ie() { var e = []; return function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i; }; } function oe(e) { return e[x] = !0, e; } function ae(e) { var t = p.createElement("div"); try {
                return !!e(t);
            }
            catch (e) {
                return !1;
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            } } function se(e, t) { for (var n = e.split("|"), i = n.length; i--;)
                r.attrHandle[n[i]] = t; } function ue(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31); if (r)
                return r; if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1; return e ? 1 : -1; } function le(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e; }; } function ce(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e; }; } function fe(e) { return oe((function (t) { return t = +t, oe((function (n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;)
                n[i = o[a]] && (n[i] = !(r[i] = n[i])); })); })); } function de(e) { return e && void 0 !== e.getElementsByTagName && e; } for (t in n = re.support = {}, o = re.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName; }, d = re.setDocument = function (e) { var t, i, a = e ? e.ownerDocument || e : w; return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !o(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), n.attributes = ae((function (e) { return e.className = "i", !e.getAttribute("className"); })), n.getElementsByTagName = ae((function (e) { return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length; })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ae((function (e) { return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length; })), n.getById ? (r.find.ID = function (e, t) { if (void 0 !== t.getElementById && m) {
                var n = t.getElementById(e);
                return n ? [n] : [];
            } }, r.filter.ID = function (e) { var t = e.replace(ee, te); return function (e) { return e.getAttribute("id") === t; }; }) : (delete r.find.ID, r.filter.ID = function (e) { var t = e.replace(ee, te); return function (e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t; }; }), r.find.TAG = n.getElementsByTagName ? function (e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0; } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) {
                for (; n = o[i++];)
                    1 === n.nodeType && r.push(n);
                return r;
            } return o; }, r.find.CLASS = n.getElementsByClassName && function (e, t) { if (void 0 !== t.getElementsByClassName && m)
                return t.getElementsByClassName(e); }, v = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (ae((function (e) { h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"); })), ae((function (e) { var t = p.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:"); }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae((function (e) { n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", B); })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))); } : function (e, t) { if (t)
                for (; t = t.parentNode;)
                    if (t === e)
                        return !0; return !1; }, S = t ? function (e, t) { if (e === t)
                return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1); } : function (e, t) { if (e === t)
                return f = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o)
                return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? M(c, e) - M(c, t) : 0; if (i === o)
                return ue(e, t); for (n = e; n = n.parentNode;)
                a.unshift(n); for (n = t; n = n.parentNode;)
                s.unshift(n); for (; a[r] === s[r];)
                r++; return r ? ue(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0; }, p) : p; }, re.matches = function (e, t) { return re(e, null, null, t); }, re.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== p && d(e), t = t.replace(z, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r;
                }
                catch (e) { } return re(t, p, null, [e]).length > 0; }, re.contains = function (e, t) { return (e.ownerDocument || e) !== p && d(e), b(e, t); }, re.attr = function (e, t) { (e.ownerDocument || e) !== p && d(e); var i = r.attrHandle[t.toLowerCase()], o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0; return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null; }, re.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e); }, re.uniqueSort = function (e) { var t, r = [], i = 0, o = 0; if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
                for (; t = e[o++];)
                    t === e[o] && (i = r.push(o));
                for (; i--;)
                    e.splice(r[i], 1);
            } return c = null, e; }, i = re.getText = function (e) { var t, n = "", r = 0, o = e.nodeType; if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e);
                }
                else if (3 === o || 4 === o)
                    return e.nodeValue;
            }
            else
                for (; t = e[r++];)
                    n += i(t); return n; }, (r = re.selectors = { cacheLength: 50, createPseudo: oe, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4); }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e; }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)); } }, filter: { TAG: function (e) { var t = e.replace(ee, te).toLowerCase(); return "*" === e ? function () { return !0; } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t; }; }, CLASS: function (e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, (function (e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || ""); })); }, ATTR: function (e, t, n) { return function (r) { var i = re.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(P, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")); }; }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode; } : function (t, n, u) { var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1; if (g) {
                        if (o) {
                            for (; m;) {
                                for (d = t; d = d[m];)
                                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                        return !1;
                                h = m = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                        }
                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                            for (b = (p = (l = (c = (f = (d = g)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                if (1 === d.nodeType && ++b && d === t) {
                                    c[e] = [T, p, b];
                                    break;
                                }
                        }
                        else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                            for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, b]), d !== t));)
                                ;
                        return (b -= i) === r || b % r == 0 && b / r >= 0;
                    } }; }, PSEUDO: function (e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e); return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe((function (e, n) { for (var r, o = i(e, t), a = o.length; a--;)
                        e[r = M(e, o[a])] = !(n[r] = o[a]); })) : function (e) { return i(e, 0, n); }) : i; } }, pseudos: { not: oe((function (e) { var t = [], n = [], r = s(e.replace(R, "$1")); return r[x] ? oe((function (e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)
                        (o = a[s]) && (e[s] = !(t[s] = o)); })) : function (e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop(); }; })), has: oe((function (e) { return function (t) { return re(e, t).length > 0; }; })), contains: oe((function (e) { return e = e.replace(ee, te), function (t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1; }; })), lang: oe((function (e) { return U.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(), function (t) { var n; do {
                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType); return !1; }; })), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id; }, root: function (e) { return e === h; }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex); }, enabled: function (e) { return !1 === e.disabled; }, disabled: function (e) { return !0 === e.disabled; }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected; }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected; }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1; return !0; }, parent: function (e) { return !r.pseudos.empty(e); }, header: function (e) { return Y.test(e.nodeName); }, input: function (e) { return G.test(e.nodeName); }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t; }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()); }, first: fe((function () { return [0]; })), last: fe((function (e, t) { return [t - 1]; })), eq: fe((function (e, t, n) { return [n < 0 ? n + t : n]; })), even: fe((function (e, t) { for (var n = 0; n < t; n += 2)
                        e.push(n); return e; })), odd: fe((function (e, t) { for (var n = 1; n < t; n += 2)
                        e.push(n); return e; })), lt: fe((function (e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;)
                        e.push(r); return e; })), gt: fe((function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r); return e; })) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                r.pseudos[t] = le(t); for (t in { submit: !0, reset: !0 })
                r.pseudos[t] = ce(t); function pe() { } function he(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value; return r; } function me(e, t, n) { var r = t.dir, i = n && "parentNode" === r, o = C++; return t.first ? function (t, n, o) { for (; t = t[r];)
                if (1 === t.nodeType || i)
                    return e(t, n, o); } : function (t, n, a) { var s, u, l, c = [T, o]; if (a) {
                for (; t = t[r];)
                    if ((1 === t.nodeType || i) && e(t, n, a))
                        return !0;
            }
            else
                for (; t = t[r];)
                    if (1 === t.nodeType || i) {
                        if ((s = (u = (l = t[x] || (t[x] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === T && s[1] === o)
                            return c[2] = s[2];
                        if (u[r] = c, c[2] = e(t, n, a))
                            return !0;
                    } }; } function ge(e) { return e.length > 1 ? function (t, n, r) { for (var i = e.length; i--;)
                if (!e[i](t, n, r))
                    return !1; return !0; } : e[0]; } function ve(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a; } function ye(e, t, n, r, i, o) { return r && !r[x] && (r = ye(r)), i && !i[x] && (i = ye(i, o)), oe((function (o, a, s, u) { var l, c, f, d = [], p = [], h = a.length, m = o || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)
                re(e, t[r], n); return n; }(t || "*", s.nodeType ? [s] : s, []), g = !e || !o && t ? m : ve(m, d, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : g; if (n && n(g, v, s, u), r)
                for (l = ve(v, p), r(l, [], s, u), c = l.length; c--;)
                    (f = l[c]) && (v[p[c]] = !(g[p[c]] = f)); if (o) {
                if (i || e) {
                    if (i) {
                        for (l = [], c = v.length; c--;)
                            (f = v[c]) && l.push(g[c] = f);
                        i(null, v = [], l, u);
                    }
                    for (c = v.length; c--;)
                        (f = v[c]) && (l = i ? M(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f));
                }
            }
            else
                v = ve(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : _.apply(a, v); })); } function be(e) { for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me((function (e) { return e === t; }), s, !0), f = me((function (e) { return M(t, e) > -1; }), s, !0), d = [function (e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i; }]; u < o; u++)
                if (n = r.relative[e[u].type])
                    d = [me(ge(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                            ;
                        return ye(u > 1 && ge(d), u > 1 && he(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(R, "$1"), n, u < i && be(e.slice(u, i)), i < o && be(e = e.slice(i)), i < o && he(e));
                    }
                    d.push(n);
                } return ge(d); } return pe.prototype = r.filters = r.pseudos, r.setFilters = new pe, a = re.tokenize = function (e, t) { var n, i, o, a, s, u, l, c = N[e + " "]; if (c)
                return t ? 0 : c.slice(0); for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(R, " ") }), s = s.slice(n.length)), r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
                if (!n)
                    break;
            } return t ? s.length : s ? re.error(e) : N(e, u).slice(0); }, s = re.compile = function (e, t) { var n, i = [], o = [], s = k[e + " "]; if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)
                    (s = be(t[n]))[x] ? i.push(s) : o.push(s);
                (s = k(e, function (e, t) { var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) { var f, h, g, v = 0, y = "0", b = o && [], x = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, N = C.length; for (c && (l = a === p || a || c); y !== N && null != (f = C[y]); y++) {
                    if (i && f) {
                        for (h = 0, a || f.ownerDocument === p || (d(f), s = !m); g = e[h++];)
                            if (g(f, a || p, s)) {
                                u.push(f);
                                break;
                            }
                        c && (T = E);
                    }
                    n && ((f = !g && f) && v--, o && b.push(f));
                } if (v += y, n && y !== v) {
                    for (h = 0; g = t[h++];)
                        g(b, x, a, s);
                    if (o) {
                        if (v > 0)
                            for (; y--;)
                                b[y] || x[y] || (x[y] = L.call(u));
                        x = ve(x);
                    }
                    _.apply(u, x), c && !o && x.length > 0 && v + t.length > 1 && re.uniqueSort(u);
                } return c && (T = E, l = w), b; }; return n ? oe(o) : o; }(o, i))).selector = e;
            } return s; }, u = re.select = function (e, t, i, o) { var u, l, c, f, d, p = "function" == typeof e && e, h = !o && a(e = p.selector || e); if (i = i || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && m && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(ee, te), t) || [])[0]))
                        return i;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length);
                }
                for (u = V.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                    if ((d = r.find[f]) && (o = d(c.matches[0].replace(ee, te), K.test(l[0].type) && de(t.parentNode) || t))) {
                        if (l.splice(u, 1), !(e = o.length && he(l)))
                            return _.apply(i, o), i;
                        break;
                    }
            } return (p || s(e, h))(o, t, !m, i, !t || K.test(e) && de(t.parentNode) || t), i; }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ae((function (e) { return 1 & e.compareDocumentPosition(p.createElement("div")); })), ae((function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href"); })) || se("type|href|height|width", (function (e, t, n) { if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2); })), n.attributes && ae((function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value"); })) || se("value", (function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue; })), ae((function (e) { return null == e.getAttribute("disabled"); })) || se(q, (function (e, t, n) { var r; if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null; })), re; }(n);
            m.find = w, m.expr = w.selectors, m.expr[":"] = m.expr.pseudos, m.uniqueSort = m.unique = w.uniqueSort, m.text = w.getText, m.isXMLDoc = w.isXML, m.contains = w.contains;
            var T = function (e, t, n) { for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && m(e).is(n))
                        break;
                    r.push(e);
                } return r; }, C = function (e, t) { for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e); return n; }, E = m.expr.match.needsContext, N = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, k = /^.[^:#\[\.,]*$/;
            function S(e, t, n) { if (m.isFunction(t))
                return m.grep(e, (function (e, r) { return !!t.call(e, r, e) !== n; })); if (t.nodeType)
                return m.grep(e, (function (e) { return e === t !== n; })); if ("string" == typeof t) {
                if (k.test(t))
                    return m.filter(t, e, n);
                t = m.filter(t, e);
            } return m.grep(e, (function (e) { return m.inArray(e, t) > -1 !== n; })); }
            m.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, (function (e) { return 1 === e.nodeType; }))); }, m.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e)
                    return this.pushStack(m(e).filter((function () { for (t = 0; t < i; t++)
                        if (m.contains(r[t], this))
                            return !0; }))); for (t = 0; t < i; t++)
                    m.find(e, r[t], n); return (n = this.pushStack(i > 1 ? m.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n; }, filter: function (e) { return this.pushStack(S(this, e || [], !1)); }, not: function (e) { return this.pushStack(S(this, e || [], !0)); }, is: function (e) { return !!S(this, "string" == typeof e && E.test(e) ? m(e) : e || [], !1).length; } });
            var D, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (m.fn.init = function (e, t, n) { var r, i; if (!e)
                return this; if (n = n || D, "string" == typeof e) {
                if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : A.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), N.test(r[1]) && m.isPlainObject(t))
                        for (r in t)
                            m.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                if ((i = a.getElementById(r[2])) && i.parentNode) {
                    if (i.id !== r[2])
                        return D.find(e);
                    this.length = 1, this[0] = i;
                }
                return this.context = a, this.selector = e, this;
            } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), m.makeArray(e, this)); }).prototype = m.fn, D = m(a);
            var L = /^(?:parents|prev(?:Until|All))/, j = { children: !0, contents: !0, next: !0, prev: !0 };
            function _(e, t) { do {
                e = e[t];
            } while (e && 1 !== e.nodeType); return e; }
            m.fn.extend({ has: function (e) { var t, n = m(e, this), r = n.length; return this.filter((function () { for (t = 0; t < r; t++)
                    if (m.contains(this, n[t]))
                        return !0; })); }, closest: function (e, t) { for (var n, r = 0, i = this.length, o = [], a = E.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        } return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o); }, index: function (e) { return e ? "string" == typeof e ? m.inArray(this[0], m(e)) : m.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (e, t) { return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t)))); }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)); } }), m.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null; }, parents: function (e) { return T(e, "parentNode"); }, parentsUntil: function (e, t, n) { return T(e, "parentNode", n); }, next: function (e) { return _(e, "nextSibling"); }, prev: function (e) { return _(e, "previousSibling"); }, nextAll: function (e) { return T(e, "nextSibling"); }, prevAll: function (e) { return T(e, "previousSibling"); }, nextUntil: function (e, t, n) { return T(e, "nextSibling", n); }, prevUntil: function (e, t, n) { return T(e, "previousSibling", n); }, siblings: function (e) { return C((e.parentNode || {}).firstChild, e); }, children: function (e) { return C(e.firstChild); }, contents: function (e) { return m.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : m.merge([], e.childNodes); } }, (function (e, t) { m.fn[e] = function (n, r) { var i = m.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (j[e] || (i = m.uniqueSort(i)), L.test(e) && (i = i.reverse())), this.pushStack(i); }; }));
            var H, M, q = /\S+/g;
            function I() { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", O), n.removeEventListener("load", O)) : (a.detachEvent("onreadystatechange", O), n.detachEvent("onload", O)); }
            function O() { (a.addEventListener || "load" === n.event.type || "complete" === a.readyState) && (I(), m.ready()); }
            for (M in m.Callbacks = function (e) { e = "string" == typeof e ? function (e) { var t = {}; return m.each(e.match(q) || [], (function (e, n) { t[n] = !0; })), t; }(e) : m.extend({}, e); var t, n, r, i, o = [], a = [], s = -1, u = function () { for (i = e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length;)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1); e.memory || (n = !1), t = !1, i && (o = n ? [] : ""); }, l = { add: function () { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { m.each(n, (function (n, r) { m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r); })); }(arguments), n && !t && u()), this; }, remove: function () { return m.each(arguments, (function (e, t) { for (var n; (n = m.inArray(t, o, n)) > -1;)
                    o.splice(n, 1), n <= s && s--; })), this; }, has: function (e) { return e ? m.inArray(e, o) > -1 : o.length > 0; }, empty: function () { return o && (o = []), this; }, disable: function () { return i = a = [], o = n = "", this; }, disabled: function () { return !o; }, lock: function () { return i = !0, n || l.disable(), this; }, locked: function () { return !!i; }, fireWith: function (e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this; }, fire: function () { return l.fireWith(this, arguments), this; }, fired: function () { return !!r; } }; return l; }, m.extend({ Deferred: function (e) { var t = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], n = "pending", r = { state: function () { return n; }, always: function () { return i.done(arguments).fail(arguments), this; }, then: function () { var e = arguments; return m.Deferred((function (n) { m.each(t, (function (t, o) { var a = m.isFunction(e[t]) && e[t]; i[o[1]]((function () { var e = a && a.apply(this, arguments); e && m.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments); })); })), e = null; })).promise(); }, promise: function (e) { return null != e ? m.extend(e, r) : r; } }, i = {}; return r.pipe = r.then, m.each(t, (function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add((function () { n = s; }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this; }, i[o[0] + "With"] = a.fireWith; })), r.promise(i), e && e.call(i, i), i; }, when: function (e) { var t, n, r, i = 0, o = s.call(arguments), a = o.length, u = 1 !== a || e && m.isFunction(e.promise) ? a : 0, l = 1 === u ? e : m.Deferred(), c = function (e, n, r) { return function (i) { n[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : i, r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r); }; }; if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
                        o[i] && m.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(l.reject) : --u; return u || l.resolveWith(r, o), l.promise(); } }), m.fn.ready = function (e) { return m.ready.promise().done(e), this; }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (e) { e ? m.readyWait++ : m.ready(!0); }, ready: function (e) { (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || (H.resolveWith(a, [m]), m.fn.triggerHandler && (m(a).triggerHandler("ready"), m(a).off("ready")))); } }), m.ready.promise = function (e) { if (!H)
                if (H = m.Deferred(), "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll)
                    n.setTimeout(m.ready);
                else if (a.addEventListener)
                    a.addEventListener("DOMContentLoaded", O), n.addEventListener("load", O);
                else {
                    a.attachEvent("onreadystatechange", O), n.attachEvent("onload", O);
                    var t = !1;
                    try {
                        t = null == n.frameElement && a.documentElement;
                    }
                    catch (e) { }
                    t && t.doScroll && function e() { if (!m.isReady) {
                        try {
                            t.doScroll("left");
                        }
                        catch (t) {
                            return n.setTimeout(e, 50);
                        }
                        I(), m.ready();
                    } }();
                } return H.promise(e); }, m.ready.promise(), m(h))
                break;
            h.ownFirst = "0" === M, h.inlineBlockNeedsLayout = !1, m((function () { var e, t, n, r; (n = a.getElementsByTagName("body")[0]) && n.style && (t = a.createElement("div"), (r = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", h.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)); })), function () { var e = a.createElement("div"); h.deleteExpando = !0; try {
                delete e.test;
            }
            catch (e) {
                h.deleteExpando = !1;
            } e = null; }();
            var F, B = function (e) { var t = m.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1; return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t); }, P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, R = /([A-Z])/g;
            function W(e, t, n) { if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(R, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? m.parseJSON(n) : n);
                    }
                    catch (e) { }
                    m.data(e, t, n);
                }
                else
                    n = void 0;
            } return n; }
            function $(e) { var t; for (t in e)
                if (("data" !== t || !m.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1; return !0; }
            function z(e, t, n, r) { if (B(e)) {
                var i, a, s = m.expando, u = e.nodeType, l = u ? m.cache : e, c = u ? e[s] : e[s] && s;
                if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof t)
                    return c || (c = u ? e[s] = o.pop() || m.guid++ : s), l[c] || (l[c] = u ? {} : { toJSON: m.noop }), "object" != typeof t && "function" != typeof t || (r ? l[c] = m.extend(l[c], t) : l[c].data = m.extend(l[c].data, t)), a = l[c], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[m.camelCase(t)] = n), "string" == typeof t ? null == (i = a[t]) && (i = a[m.camelCase(t)]) : i = a, i;
            } }
            function X(e, t, n) { if (B(e)) {
                var r, i, o = e.nodeType, a = o ? m.cache : e, s = o ? e[m.expando] : m.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        i = (t = m.isArray(t) ? t.concat(m.map(t, m.camelCase)) : t in r || (t = m.camelCase(t)) in r ? [t] : t.split(" ")).length;
                        for (; i--;)
                            delete r[t[i]];
                        if (n ? !$(r) : !m.isEmptyObject(r))
                            return;
                    }
                    (n || (delete a[s].data, $(a[s]))) && (o ? m.cleanData([e], !0) : h.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0);
                }
            } }
            m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return !!(e = e.nodeType ? m.cache[e[m.expando]] : e[m.expando]) && !$(e); }, data: function (e, t, n) { return z(e, t, n); }, removeData: function (e, t) { return X(e, t); }, _data: function (e, t, n) { return z(e, t, n, !0); }, _removeData: function (e, t) { return X(e, t, !0); } }), m.fn.extend({ data: function (e, t) { var n, r, i, o = this[0], a = o && o.attributes; if (void 0 === e) {
                    if (this.length && (i = m.data(o), 1 === o.nodeType && !m._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;)
                            a[n] && 0 === (r = a[n].name).indexOf("data-") && W(o, r = m.camelCase(r.slice(5)), i[r]);
                        m._data(o, "parsedAttrs", !0);
                    }
                    return i;
                } return "object" == typeof e ? this.each((function () { m.data(this, e); })) : arguments.length > 1 ? this.each((function () { m.data(this, e, t); })) : o ? W(o, e, m.data(o, e)) : void 0; }, removeData: function (e) { return this.each((function () { m.removeData(this, e); })); } }), m.extend({ queue: function (e, t, n) { var r; if (e)
                    return t = (t || "fx") + "queue", r = m._data(e, t), n && (!r || m.isArray(n) ? r = m._data(e, t, m.makeArray(n)) : r.push(n)), r || []; }, dequeue: function (e, t) { t = t || "fx"; var n = m.queue(e, t), r = n.length, i = n.shift(), o = m._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function () { m.dequeue(e, t); }), o)), !r && o && o.empty.fire(); }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return m._data(e, n) || m._data(e, n, { empty: m.Callbacks("once memory").add((function () { m._removeData(e, t + "queue"), m._removeData(e, n); })) }); } }), m.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each((function () { var n = m.queue(this, e, t); m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e); })); }, dequeue: function (e) { return this.each((function () { m.dequeue(this, e); })); }, clearQueue: function (e) { return this.queue(e || "fx", []); }, promise: function (e, t) { var n, r = 1, i = m.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]); }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                    (n = m._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t); } }), h.shrinkWrapBlocks = function () { return null != F ? F : (F = !1, (t = a.getElementsByTagName("body")[0]) && t.style ? (e = a.createElement("div"), (n = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(a.createElement("div")).style.width = "5px", F = 3 !== e.offsetWidth), t.removeChild(n), F) : void 0); var e, t, n; };
            var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, V = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"), G = ["Top", "Right", "Bottom", "Left"], Y = function (e, t) { return e = t || e, "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e); };
            function J(e, t, n, r) { var i, o = 1, a = 20, s = r ? function () { return r.cur(); } : function () { return m.css(e, t, ""); }, u = s(), l = n && n[3] || (m.cssNumber[t] ? "" : "px"), c = (m.cssNumber[t] || "px" !== l && +u) && V.exec(m.css(e, t)); if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do {
                    c /= o = o || ".5", m.style(e, t, c + l);
                } while (o !== (o = s() / u) && 1 !== o && --a);
            } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i; }
            var Q, K, Z, ee = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === m.type(n))
                for (s in i = !0, n)
                    ee(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(m(e), n); })), t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o; }, te = /^(?:checkbox|radio)$/i, ne = /<([\w:-]+)/, re = /^$|\/(?:java|ecma)script/i, ie = /^\s+/, oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            function ae(e) { var t = oe.split("|"), n = e.createDocumentFragment(); if (n.createElement)
                for (; t.length;)
                    n.createElement(t.pop()); return n; }
            Q = a.createElement("div"), K = a.createDocumentFragment(), Z = a.createElement("input"), Q.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h.leadingWhitespace = 3 === Q.firstChild.nodeType, h.tbody = !Q.getElementsByTagName("tbody").length, h.htmlSerialize = !!Q.getElementsByTagName("link").length, h.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, Z.type = "checkbox", Z.checked = !0, K.appendChild(Z), h.appendChecked = Z.checked, Q.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!Q.cloneNode(!0).lastChild.defaultValue, K.appendChild(Q), (Z = a.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), Q.appendChild(Z), h.checkClone = Q.cloneNode(!0).cloneNode(!0).lastChild.checked, h.noCloneEvent = !!Q.addEventListener, Q[m.expando] = 1, h.attributes = !Q.getAttribute(m.expando);
            var se = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: h.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
            function ue(e, t) { var n, r, i = 0, o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0; if (!o)
                for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
                    !t || m.nodeName(r, t) ? o.push(r) : m.merge(o, ue(r, t)); return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], o) : o; }
            function le(e, t) { for (var n, r = 0; null != (n = e[r]); r++)
                m._data(n, "globalEval", !t || m._data(t[r], "globalEval")); }
            se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;
            var ce = /<|&#?\w+;/, fe = /<tbody/i;
            function de(e) { te.test(e.type) && (e.defaultChecked = e.checked); }
            function pe(e, t, n, r, i) { for (var o, a, s, u, l, c, f, d = e.length, p = ae(t), g = [], v = 0; v < d; v++)
                if ((a = e[v]) || 0 === a)
                    if ("object" === m.type(a))
                        m.merge(g, a.nodeType ? [a] : a);
                    else if (ce.test(a)) {
                        for (u = u || p.appendChild(t.createElement("div")), l = (ne.exec(a) || ["", ""])[1].toLowerCase(), f = se[l] || se._default, u.innerHTML = f[1] + m.htmlPrefilter(a) + f[2], o = f[0]; o--;)
                            u = u.lastChild;
                        if (!h.leadingWhitespace && ie.test(a) && g.push(t.createTextNode(ie.exec(a)[0])), !h.tbody)
                            for (o = (a = "table" !== l || fe.test(a) ? "<table>" !== f[1] || fe.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;)
                                m.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                        for (m.merge(g, u.childNodes), u.textContent = ""; u.firstChild;)
                            u.removeChild(u.firstChild);
                        u = p.lastChild;
                    }
                    else
                        g.push(t.createTextNode(a)); for (u && p.removeChild(u), h.appendChecked || m.grep(ue(g, "input"), de), v = 0; a = g[v++];)
                if (r && m.inArray(a, r) > -1)
                    i && i.push(a);
                else if (s = m.contains(a.ownerDocument, a), u = ue(p.appendChild(a), "script"), s && le(u), n)
                    for (o = 0; a = u[o++];)
                        re.test(a.type || "") && n.push(a); return u = null, p; }
            !function () { var e, t, r = a.createElement("div"); for (e in { submit: !0, change: !0, focusin: !0 })
                t = "on" + e, (h[e] = t in n) || (r.setAttribute(t, "t"), h[e] = !1 === r.attributes[t].expando); r = null; }();
            var he = /^(?:input|select|textarea)$/i, me = /^key/, ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ve = /^(?:focusinfocus|focusoutblur)$/, ye = /^([^.]*)(?:\.(.+)|)/;
            function be() { return !0; }
            function xe() { return !1; }
            function we() { try {
                return a.activeElement;
            }
            catch (e) { } }
            function Te(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t)
                    Te(e, s, n, r, t[s], o);
                return e;
            } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
                i = xe;
            else if (!i)
                return e; return 1 === o && (a = i, (i = function (e) { return m().off(e), a.apply(this, arguments); }).guid = a.guid || (a.guid = m.guid++)), e.each((function () { m.event.add(this, t, i, r, n); })); }
            m.event = { global: {}, add: function (e, t, n, r, i) { var o, a, s, u, l, c, f, d, p, h, g, v = m._data(e); if (v) {
                    for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = m.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function (e) { return void 0 === m || e && m.event.triggered === e.type ? void 0 : m.event.dispatch.apply(c.elem, arguments); }).elem = e), s = (t = (t || "").match(q) || [""]).length; s--;)
                        p = g = (o = ye.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (l = m.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = m.event.special[p] || {}, f = m.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && m.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), m.event.global[p] = !0);
                    e = null;
                } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, d, p, h, g, v = m.hasData(e) && m._data(e); if (v && (c = v.events)) {
                    for (l = (t = (t || "").match(q) || [""]).length; l--;)
                        if (p = g = (s = ye.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = m.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;)
                                a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                            u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || m.removeEvent(e, p, v.handle), delete c[p]);
                        }
                        else
                            for (p in c)
                                m.event.remove(e, p + t[l], n, r, !0);
                    m.isEmptyObject(c) && (delete v.handle, m._removeData(e, "events"));
                } }, trigger: function (e, t, r, i) { var o, s, u, l, c, f, d, h = [r || a], g = p.call(e, "type") ? e.type : e, v = p.call(e, "namespace") ? e.namespace.split(".") : []; if (u = f = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !ve.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), s = g.indexOf(":") < 0 && "on" + g, (e = e[m.expando] ? e : new m.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : m.makeArray(t, [e]), c = m.event.special[g] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, t))) {
                    if (!i && !c.noBubble && !m.isWindow(r)) {
                        for (l = c.delegateType || g, ve.test(l + g) || (u = u.parentNode); u; u = u.parentNode)
                            h.push(u), f = u;
                        f === (r.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || n);
                    }
                    for (d = 0; (u = h[d++]) && !e.isPropagationStopped();)
                        e.type = d > 1 ? l : c.bindType || g, (o = (m._data(u, "events") || {})[e.type] && m._data(u, "handle")) && o.apply(u, t), (o = s && u[s]) && o.apply && B(u) && (e.result = o.apply(u, t), !1 === e.result && e.preventDefault());
                    if (e.type = g, !i && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), t)) && B(r) && s && r[g] && !m.isWindow(r)) {
                        (f = r[s]) && (r[s] = null), m.event.triggered = g;
                        try {
                            r[g]();
                        }
                        catch (e) { }
                        m.event.triggered = void 0, f && (r[s] = f);
                    }
                    return e.result;
                } }, dispatch: function (e) { e = m.event.fix(e); var t, n, r, i, o, a = [], u = s.call(arguments), l = (m._data(this, "events") || {})[e.type] || [], c = m.event.special[e.type] || {}; if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = m.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                            e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result;
                } }, handlers: function (e, t) { var n, r, i, o, a = [], s = t.delegateCount, u = e.target; if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                            for (r = [], n = 0; n < s; n++)
                                void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? m(i, this).index(u) > -1 : m.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({ elem: u, handlers: r });
                        } return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a; }, fix: function (e) { if (e[m.expando])
                    return e; var t, n, r, i = e.type, o = e, s = this.fixHooks[i]; for (s || (this.fixHooks[i] = s = ge.test(i) ? this.mouseHooks : me.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new m.Event(o), t = r.length; t--;)
                    e[n = r[t]] = o[n]; return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e; }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e; } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) { var n, r, i, o = t.button, s = t.fromElement; return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || a).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== we() && this.focus)
                            try {
                                return this.focus(), !1;
                            }
                            catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { if (this === we() && this.blur)
                            return this.blur(), !1; }, delegateType: "focusout" }, click: { trigger: function () { if (m.nodeName(this, "input") && "checkbox" === this.type && this.click)
                            return this.click(), !1; }, _default: function (e) { return m.nodeName(e.target, "a"); } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result); } } }, simulate: function (e, t, n) { var r = m.extend(new m.Event, n, { type: e, isSimulated: !0 }); m.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault(); } }, m.removeEvent = a.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n); } : function (e, t, n) { var r = "on" + t; e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n)); }, m.Event = function (e, t) { if (!(this instanceof m.Event))
                return new m.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : xe) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), this[m.expando] = !0; }, m.Event.prototype = { constructor: m.Event, isDefaultPrevented: xe, isPropagationStopped: xe, isImmediatePropagationStopped: xe, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = be, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1); }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = be, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0); }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = be, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation(); } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function (e, t) { m.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || m.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n; } }; })), h.submit || (m.event.special.submit = { setup: function () { if (m.nodeName(this, "form"))
                    return !1; m.event.add(this, "click._submit keypress._submit", (function (e) { var t = e.target, n = m.nodeName(t, "input") || m.nodeName(t, "button") ? m.prop(t, "form") : void 0; n && !m._data(n, "submit") && (m.event.add(n, "submit._submit", (function (e) { e._submitBubble = !0; })), m._data(n, "submit", !0)); })); }, postDispatch: function (e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && m.event.simulate("submit", this.parentNode, e)); }, teardown: function () { if (m.nodeName(this, "form"))
                    return !1; m.event.remove(this, "._submit"); } }), h.change || (m.event.special.change = { setup: function () { if (he.test(this.nodeName))
                    return "checkbox" !== this.type && "radio" !== this.type || (m.event.add(this, "propertychange._change", (function (e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0); })), m.event.add(this, "click._change", (function (e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), m.event.simulate("change", this, e); }))), !1; m.event.add(this, "beforeactivate._change", (function (e) { var t = e.target; he.test(t.nodeName) && !m._data(t, "change") && (m.event.add(t, "change._change", (function (e) { !this.parentNode || e.isSimulated || e.isTrigger || m.event.simulate("change", this.parentNode, e); })), m._data(t, "change", !0)); })); }, handle: function (e) { var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                    return e.handleObj.handler.apply(this, arguments); }, teardown: function () { return m.event.remove(this, "._change"), !he.test(this.nodeName); } }), h.focusin || m.each({ focus: "focusin", blur: "focusout" }, (function (e, t) { var n = function (e) { m.event.simulate(t, e.target, m.event.fix(e)); }; m.event.special[t] = { setup: function () { var r = this.ownerDocument || this, i = m._data(r, t); i || r.addEventListener(e, n, !0), m._data(r, t, (i || 0) + 1); }, teardown: function () { var r = this.ownerDocument || this, i = m._data(r, t) - 1; i ? m._data(r, t, i) : (r.removeEventListener(e, n, !0), m._removeData(r, t)); } }; })), m.fn.extend({ on: function (e, t, n, r) { return Te(this, e, t, n, r); }, one: function (e, t, n, r) { return Te(this, e, t, n, r, 1); }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj, m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this;
                } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each((function () { m.event.remove(this, e, n, t); })); }, trigger: function (e, t) { return this.each((function () { m.event.trigger(e, t, this); })); }, triggerHandler: function (e, t) { var n = this[0]; if (n)
                    return m.event.trigger(e, t, n, !0); } });
            var Ce = / jQuery\d+="(?:null|\d+)"/g, Ee = new RegExp("<(?:" + oe + ")[\\s/>]", "i"), Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ke = /<script|<style|<link/i, Se = /checked\s*(?:[^=]|=\s*.checked.)/i, De = /^true\/(.*)/, Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Le = ae(a).appendChild(a.createElement("div"));
            function je(e, t) { return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e; }
            function _e(e) { return e.type = (null !== m.find.attr(e, "type")) + "/" + e.type, e; }
            function He(e) { var t = De.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e; }
            function Me(e, t) { if (1 === t.nodeType && m.hasData(e)) {
                var n, r, i, o = m._data(e), a = m._data(t, o), s = o.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (r = 0, i = s[n].length; r < i; r++)
                            m.event.add(t, n, s[n][r]);
                a.data && (a.data = m.extend({}, a.data));
            } }
            function qe(e, t) { var n, r, i; if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !h.noCloneEvent && t[m.expando]) {
                    for (r in (i = m._data(t)).events)
                        m.removeEvent(t, r, i.handle);
                    t.removeAttribute(m.expando);
                }
                "script" === n && t.text !== e.text ? (_e(t).text = e.text, He(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), h.html5Clone && e.innerHTML && !m.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            } }
            function Ie(e, t, n, r) { t = u.apply([], t); var i, o, a, s, l, c, f = 0, d = e.length, p = d - 1, g = t[0], v = m.isFunction(g); if (v || d > 1 && "string" == typeof g && !h.checkClone && Se.test(g))
                return e.each((function (i) { var o = e.eq(i); v && (t[0] = g.call(this, i, o.html())), Ie(o, t, n, r); })); if (d && (i = (c = pe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === c.childNodes.length && (c = i), i || r)) {
                for (a = (s = m.map(ue(c, "script"), _e)).length; f < d; f++)
                    o = c, f !== p && (o = m.clone(o, !0, !0), a && m.merge(s, ue(o, "script"))), n.call(e[f], o, f);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, m.map(s, He), f = 0; f < a; f++)
                        o = s[f], re.test(o.type || "") && !m._data(o, "globalEval") && m.contains(l, o) && (o.src ? m._evalUrl && m._evalUrl(o.src) : m.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ae, "")));
                c = i = null;
            } return e; }
            function Oe(e, t, n) { for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || m.cleanData(ue(r)), r.parentNode && (n && m.contains(r.ownerDocument, r) && le(ue(r, "script")), r.parentNode.removeChild(r)); return e; }
            m.extend({ htmlPrefilter: function (e) { return e.replace(Ne, "<$1></$2>"); }, clone: function (e, t, n) { var r, i, o, a, s, u = m.contains(e.ownerDocument, e); if (h.html5Clone || m.isXMLDoc(e) || !Ee.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Le.innerHTML = e.outerHTML, Le.removeChild(o = Le.firstChild)), !(h.noCloneEvent && h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                    for (r = ue(o), s = ue(e), a = 0; null != (i = s[a]); ++a)
                        r[a] && qe(i, r[a]); if (t)
                    if (n)
                        for (s = s || ue(e), r = r || ue(o), a = 0; null != (i = s[a]); a++)
                            Me(i, r[a]);
                    else
                        Me(e, o); return (r = ue(o, "script")).length > 0 && le(r, !u && ue(e, "script")), r = s = i = null, o; }, cleanData: function (e, t) { for (var n, r, i, a, s = 0, u = m.expando, l = m.cache, c = h.attributes, f = m.event.special; null != (n = e[s]); s++)
                    if ((t || B(n)) && (a = (i = n[u]) && l[i])) {
                        if (a.events)
                            for (r in a.events)
                                f[r] ? m.event.remove(n, r) : m.removeEvent(n, r, a.handle);
                        l[i] && (delete l[i], c || void 0 === n.removeAttribute ? n[u] = void 0 : n.removeAttribute(u), o.push(i));
                    } } }), m.fn.extend({ domManip: Ie, detach: function (e) { return Oe(this, e, !0); }, remove: function (e) { return Oe(this, e); }, text: function (e) { return ee(this, (function (e) { return void 0 === e ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)); }), null, e, arguments.length); }, append: function () { return Ie(this, arguments, (function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e); })); }, prepend: function () { return Ie(this, arguments, (function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild);
                } })); }, before: function () { return Ie(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this); })); }, after: function () { return Ie(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling); })); }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && m.cleanData(ue(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && m.nodeName(e, "select") && (e.options.length = 0);
                } return this; }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map((function () { return m.clone(this, e, t); })); }, html: function (e) { return ee(this, (function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ce, "") : void 0; if ("string" == typeof e && !ke.test(e) && (h.htmlSerialize || !Ee.test(e)) && (h.leadingWhitespace || !ie.test(e)) && !se[(ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = m.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (m.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0;
                    }
                    catch (e) { }
                } t && this.empty().append(e); }), null, e, arguments.length); }, replaceWith: function () { var e = []; return Ie(this, arguments, (function (t) { var n = this.parentNode; m.inArray(this, e) < 0 && (m.cleanData(ue(this)), n && n.replaceChild(t, this)); }), e); } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function (e, t) { m.fn[e] = function (e) { for (var n, r = 0, i = [], o = m(e), a = o.length - 1; r <= a; r++)
                n = r === a ? this : this.clone(!0), m(o[r])[t](n), l.apply(i, n.get()); return this.pushStack(i); }; }));
            var Fe, Be = { HTML: "block", BODY: "block" };
            function Pe(e, t) { var n = m(t.createElement(e)).appendTo(t.body), r = m.css(n[0], "display"); return n.detach(), r; }
            function Re(e) { var t = a, n = Be[e]; return n || ("none" !== (n = Pe(e, t)) && n || ((t = ((Fe = (Fe || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write(), t.close(), n = Pe(e, t), Fe.detach()), Be[e] = n), n; }
            var We = /^margin/, $e = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"), ze = function (e, t, n, r) { var i, o, a = {}; for (o in t)
                a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t)
                e.style[o] = a[o]; return i; }, Xe = a.documentElement;
            !function () { var e, t, r, i, o, s, u = a.createElement("div"), l = a.createElement("div"); function c() { var c, f, d = a.documentElement; d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = r = s = !1, t = o = !0, n.getComputedStyle && (f = n.getComputedStyle(l), e = "1%" !== (f || {}).top, s = "2px" === (f || {}).marginLeft, r = "4px" === (f || { width: "4px" }).width, l.style.marginRight = "50%", t = "4px" === (f || { marginRight: "4px" }).marginRight, (c = l.appendChild(a.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", l.style.width = "1px", o = !parseFloat((n.getComputedStyle(c) || {}).marginRight), l.removeChild(c)), l.style.display = "none", (i = 0 === l.getClientRects().length) && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", (c = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (i = 0 === c[0].offsetHeight) && (c[0].style.display = "", c[1].style.display = "none", i = 0 === c[0].offsetHeight)), d.removeChild(u); } l.style && (l.style.cssText = "float:left;opacity:.5", h.opacity = "0.5" === l.style.opacity, h.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, (u = a.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), h.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, m.extend(h, { reliableHiddenOffsets: function () { return null == e && c(), i; }, boxSizingReliable: function () { return null == e && c(), r; }, pixelMarginRight: function () { return null == e && c(), t; }, pixelPosition: function () { return null == e && c(), e; }, reliableMarginRight: function () { return null == e && c(), o; }, reliableMarginLeft: function () { return null == e && c(), s; } })); }();
            var Ue, Ve, Ge = /^(top|right|bottom|left)$/;
            function Ye(e, t) { return { get: function () { if (!e())
                    return (this.get = t).apply(this, arguments); delete this.get; } }; }
            n.getComputedStyle ? (Ue = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e); }, Ve = function (e, t, n) { var r, i, o, a, s = e.style; return "" !== (a = (n = n || Ue(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)), n && !h.pixelMarginRight() && $e.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""; }) : Xe.currentStyle && (Ue = function (e) { return e.currentStyle; }, Ve = function (e, t, n) { var r, i, o, a, s = e.style; return null == (a = (n = n || Ue(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), $e.test(a) && !Ge.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"; });
            var Je = /alpha\([^)]*\)/i, Qe = /opacity\s*=\s*([^)]*)/i, Ke = /^(none|table(?!-c[ea]).+)/, Ze = new RegExp("^(" + U + ")(.*)$", "i"), et = { position: "absolute", visibility: "hidden", display: "block" }, tt = { letterSpacing: "0", fontWeight: "400" }, nt = ["Webkit", "O", "Moz", "ms"], rt = a.createElement("div").style;
            function it(e) { if (e in rt)
                return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = nt.length; n--;)
                if ((e = nt[n] + t) in rt)
                    return e; }
            function ot(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
                (r = e[a]).style && (o[a] = m._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Y(r) && (o[a] = m._data(r, "olddisplay", Re(r.nodeName)))) : (i = Y(r), (n && "none" !== n || !i) && m._data(r, "olddisplay", i ? n : m.css(r, "display")))); for (a = 0; a < s; a++)
                (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e; }
            function at(e, t, n) { var r = Ze.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t; }
            function st(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                "margin" === n && (a += m.css(e, n + G[o], !0, i)), r ? ("content" === n && (a -= m.css(e, "padding" + G[o], !0, i)), "margin" !== n && (a -= m.css(e, "border" + G[o] + "Width", !0, i))) : (a += m.css(e, "padding" + G[o], !0, i), "padding" !== n && (a += m.css(e, "border" + G[o] + "Width", !0, i))); return a; }
            function ut(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ue(e), a = h.boxSizing && "border-box" === m.css(e, "boxSizing", !1, o); if (i <= 0 || null == i) {
                if (((i = Ve(e, t, o)) < 0 || null == i) && (i = e.style[t]), $e.test(i))
                    return i;
                r = a && (h.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
            } return i + st(e, t, n || (a ? "border" : "content"), r, o) + "px"; }
            function lt(e, t, n, r, i) { return new lt.prototype.init(e, t, n, r, i); }
            m.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n;
                        } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: h.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = m.camelCase(t), u = e.style;
                    if (t = m.cssProps[s] || (m.cssProps[s] = it(s) || s), a = m.cssHooks[t] || m.cssHooks[s], void 0 === n)
                        return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if ("string" == (o = typeof n) && (i = V.exec(n)) && i[1] && (n = J(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (m.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !a || !("set" in a) || void 0 !== (n = a.set(e, n, r))))
                        try {
                            u[t] = n;
                        }
                        catch (e) { }
                } }, css: function (e, t, n, r) { var i, o, a, s = m.camelCase(t); return t = m.cssProps[s] || (m.cssProps[s] = it(s) || s), (a = m.cssHooks[t] || m.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ve(e, t, r)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o; } }), m.each(["height", "width"], (function (e, t) { m.cssHooks[t] = { get: function (e, n, r) { if (n)
                    return Ke.test(m.css(e, "display")) && 0 === e.offsetWidth ? ze(e, et, (function () { return ut(e, t, r); })) : ut(e, t, r); }, set: function (e, n, r) { var i = r && Ue(e); return at(0, n, r ? st(e, t, r, h.boxSizing && "border-box" === m.css(e, "boxSizing", !1, i), i) : 0); } }; })), h.opacity || (m.cssHooks.opacity = { get: function (e, t) { return Qe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""; }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = m.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === m.trim(o.replace(Je, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Je.test(o) ? o.replace(Je, i) : o + " " + i); } }), m.cssHooks.marginRight = Ye(h.reliableMarginRight, (function (e, t) { if (t)
                return ze(e, { display: "inline-block" }, Ve, [e, "marginRight"]); })), m.cssHooks.marginLeft = Ye(h.reliableMarginLeft, (function (e, t) { if (t)
                return (parseFloat(Ve(e, "marginLeft")) || (m.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ze(e, { marginLeft: 0 }, (function () { return e.getBoundingClientRect().left; })) : 0)) + "px"; })), m.each({ margin: "", padding: "", border: "Width" }, (function (e, t) { m.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + G[r] + t] = o[r] || o[r - 2] || o[0]; return i; } }, We.test(e) || (m.cssHooks[e + t].set = at); })), m.fn.extend({ css: function (e, t) { return ee(this, (function (e, t, n) { var r, i, o = {}, a = 0; if (m.isArray(t)) {
                    for (r = Ue(e), i = t.length; a < i; a++)
                        o[t[a]] = m.css(e, t[a], !1, r);
                    return o;
                } return void 0 !== n ? m.style(e, t, n) : m.css(e, t); }), e, t, arguments.length > 1); }, show: function () { return ot(this, !0); }, hide: function () { return ot(this); }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () { Y(this) ? m(this).show() : m(this).hide(); })); } }), m.Tween = lt, lt.prototype = { constructor: lt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || m.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px"); }, cur: function () { var e = lt.propHooks[this.prop]; return e && e.get ? e.get(this) : lt.propHooks._default.get(this); }, run: function (e) { var t, n = lt.propHooks[this.prop]; return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : lt.propHooks._default.set(this), this; } }, lt.prototype.init.prototype = lt.prototype, lt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0; }, set: function (e) { m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit); } } }, lt.propHooks.scrollTop = lt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now); } }, m.easing = { linear: function (e) { return e; }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2; }, _default: "swing" }, m.fx = lt.prototype.init, m.fx.step = {};
            var ct, ft, dt = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
            function ht() { return n.setTimeout((function () { ct = void 0; })), ct = m.now(); }
            function mt(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; i < 4; i += 2 - t)
                r["margin" + (n = G[i])] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r; }
            function gt(e, t, n) { for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e))
                    return r; }
            function vt(e, t, n) { var r, i, o = 0, a = vt.prefilters.length, s = m.Deferred().always((function () { delete u.elem; })), u = function () { if (i)
                return !1; for (var t = ct || ht(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1); }, l = s.promise({ elem: e, props: m.extend({}, t), opts: m.extend(!0, { specialEasing: {}, easing: m.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ct || ht(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r; }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i)
                    return this; for (i = !0; n < r; n++)
                    l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this; } }), c = l.props; for (function (e, t) { var n, r, i, o, a; for (n in e)
                if (i = t[r = m.camelCase(n)], o = e[n], m.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = m.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[r], o)
                        n in e || (e[n] = o[n], t[n] = i);
                else
                    t[r] = i; }(c, l.opts.specialEasing); o < a; o++)
                if (r = vt.prefilters[o].call(l, e, c, l.opts))
                    return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)), r; return m.map(c, gt, l), m.isFunction(l.opts.start) && l.opts.start.call(e, l), m.fx.timer(m.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always); }
            m.Animation = m.extend(vt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return J(n.elem, e, V.exec(t), n), n; }] }, tweener: function (e, t) { m.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(q); for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t); }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c = this, f = {}, d = e.style, p = e.nodeType && Y(e), g = m._data(e, "fxshow"); for (r in n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () { s.unqueued || u(); }), s.unqueued++, c.always((function () { c.always((function () { s.unqueued--, m.queue(e, "fx").length || s.empty.fire(); })); }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = m.css(e, "display")) ? m._data(e, "olddisplay") || Re(e.nodeName) : l) && "none" === m.css(e, "float") && (h.inlineBlockNeedsLayout && "inline" !== Re(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.shrinkWrapBlocks() || c.always((function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]; }))), t)
                        if (i = t[r], dt.exec(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[r])
                                    continue;
                                p = !0;
                            }
                            f[r] = g && g[r] || m.style(e, r);
                        }
                        else
                            l = void 0; if (m.isEmptyObject(f))
                        "inline" === ("none" === l ? Re(e.nodeName) : l) && (d.display = l);
                    else
                        for (r in g ? "hidden" in g && (p = g.hidden) : g = m._data(e, "fxshow", {}), o && (g.hidden = !p), p ? m(e).show() : c.done((function () { m(e).hide(); })), c.done((function () { var t; for (t in m._removeData(e, "fxshow"), f)
                            m.style(e, t, f[t]); })), f)
                            a = gt(p ? g[r] : 0, r, c), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)); }], prefilter: function (e, t) { t ? vt.prefilters.unshift(e) : vt.prefilters.push(e); } }), m.speed = function (e, t, n) { var r = e && "object" == typeof e ? m.extend({}, e) : { complete: n || !n && t || m.isFunction(e) && e, duration: e, easing: n && t || t && !m.isFunction(t) && t }; return r.duration = m.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in m.fx.speeds ? m.fx.speeds[r.duration] : m.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m.isFunction(r.old) && r.old.call(this), r.queue && m.dequeue(this, r.queue); }, r; }, m.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(Y).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r); }, animate: function (e, t, n, r) { var i = m.isEmptyObject(e), o = m.speed(t, n, r), a = function () { var t = vt(this, m.extend({}, e), o); (i || m._data(this, "finish")) && t.stop(!0); }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a); }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n); }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () { var t = !0, i = null != e && e + "queueHooks", o = m.timers, a = m._data(this); if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && pt.test(i) && r(a[i]); for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); !t && n || m.dequeue(this, e); })); }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each((function () { var t, n = m._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = m.timers, a = r ? r.length : 0; for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this); delete n.finish; })); } }), m.each(["toggle", "show", "hide"], (function (e, t) { var n = m.fn[t]; m.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, r, i); }; })), m.each({ slideDown: mt("show"), slideUp: mt("hide"), slideToggle: mt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function (e, t) { m.fn[e] = function (e, n, r) { return this.animate(t, e, n, r); }; })), m.timers = [], m.fx.tick = function () { var e, t = m.timers, n = 0; for (ct = m.now(); n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1); t.length || m.fx.stop(), ct = void 0; }, m.fx.timer = function (e) { m.timers.push(e), e() ? m.fx.start() : m.timers.pop(); }, m.fx.interval = 13, m.fx.start = function () { ft || (ft = n.setInterval(m.fx.tick, m.fx.interval)); }, m.fx.stop = function () { n.clearInterval(ft), ft = null; }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (e, t) { return e = m.fx && m.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, r) { var i = n.setTimeout(t, e); r.stop = function () { n.clearTimeout(i); }; })); }, function () { var e, t = a.createElement("input"), n = a.createElement("div"), r = a.createElement("select"), i = r.appendChild(a.createElement("option")); (n = a.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", h.getSetAttribute = "t" !== n.className, h.style = /top/.test(e.getAttribute("style")), h.hrefNormalized = "/a" === e.getAttribute("href"), h.checkOn = !!t.value, h.optSelected = i.selected, h.enctype = !!a.createElement("form").enctype, r.disabled = !0, h.optDisabled = !i.disabled, (t = a.createElement("input")).setAttribute("value", ""), h.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), h.radioValue = "t" === t.value; }();
            var yt = /\r/g, bt = /[\x20\t\r\n\f]+/g;
            m.fn.extend({ val: function (e) { var t, n, r, i = this[0]; return arguments.length ? (r = m.isFunction(e), this.each((function (n) { var i; 1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, (function (e) { return null == e ? "" : e + ""; }))), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)); }))) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0; } }), m.extend({ valHooks: { option: { get: function (e) { var t = m.find.attr(e, "value"); return null != t ? t : m.trim(m.text(e)).replace(bt, " "); } }, select: { get: function (e) { for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (((n = r[u]).selected || u === i) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                if (t = m(n).val(), o)
                                    return t;
                                a.push(t);
                            } return a; }, set: function (e, t) { for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--;)
                            if (r = i[a], m.inArray(m.valHooks.option.get(r), o) > -1)
                                try {
                                    r.selected = n = !0;
                                }
                                catch (e) {
                                    r.scrollHeight;
                                }
                            else
                                r.selected = !1; return n || (e.selectedIndex = -1), i; } } } }), m.each(["radio", "checkbox"], (function () { m.valHooks[this] = { set: function (e, t) { if (m.isArray(t))
                    return e.checked = m.inArray(m(e).val(), t) > -1; } }, h.checkOn || (m.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value; }); }));
            var xt, wt, Tt = m.expr.attrHandle, Ct = /^(?:checked|selected)$/i, Et = h.getSetAttribute, Nt = h.input;
            m.fn.extend({ attr: function (e, t) { return ee(this, m.attr, e, t, arguments.length > 1); }, removeAttr: function (e) { return this.each((function () { m.removeAttr(this, e); })); } }), m.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(), i = m.attrHooks[t] || (m.expr.match.bool.test(t) ? wt : xt)), void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r); }, attrHooks: { type: { set: function (e, t) { if (!h.radioValue && "radio" === t && m.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        } } } }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(q); if (o && 1 === e.nodeType)
                    for (; n = o[i++];)
                        r = m.propFix[n] || n, m.expr.match.bool.test(n) ? Nt && Et || !Ct.test(n) ? e[r] = !1 : e[m.camelCase("default-" + n)] = e[r] = !1 : m.attr(e, n, ""), e.removeAttribute(Et ? n : r); } }), wt = { set: function (e, t, n) { return !1 === t ? m.removeAttr(e, n) : Nt && Et || !Ct.test(n) ? e.setAttribute(!Et && m.propFix[n] || n, n) : e[m.camelCase("default-" + n)] = e[n] = !0, n; } }, m.each(m.expr.match.bool.source.match(/\w+/g), (function (e, t) { var n = Tt[t] || m.find.attr; Nt && Et || !Ct.test(t) ? Tt[t] = function (e, t, r) { var i, o; return r || (o = Tt[t], Tt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Tt[t] = o), i; } : Tt[t] = function (e, t, n) { if (!n)
                return e[m.camelCase("default-" + t)] ? t.toLowerCase() : null; }; })), Nt && Et || (m.attrHooks.value = { set: function (e, t, n) { if (!m.nodeName(e, "input"))
                    return xt && xt.set(e, t, n); e.defaultValue = t; } }), Et || (xt = { set: function (e, t, n) { var r = e.getAttributeNode(n); if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n))
                    return t; } }, Tt.id = Tt.name = Tt.coords = function (e, t, n) { var r; if (!n)
                return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null; }, m.valHooks.button = { get: function (e, t) { var n = e.getAttributeNode(t); if (n && n.specified)
                    return n.value; }, set: xt.set }, m.attrHooks.contenteditable = { set: function (e, t, n) { xt.set(e, "" !== t && t, n); } }, m.each(["width", "height"], (function (e, t) { m.attrHooks[t] = { set: function (e, n) { if ("" === n)
                    return e.setAttribute(t, "auto"), n; } }; }))), h.style || (m.attrHooks.style = { get: function (e) { return e.style.cssText || void 0; }, set: function (e, t) { return e.style.cssText = t + ""; } });
            var kt = /^(?:input|select|textarea|button|object)$/i, St = /^(?:a|area)$/i;
            m.fn.extend({ prop: function (e, t) { return ee(this, m.prop, e, t, arguments.length > 1); }, removeProp: function (e) { return e = m.propFix[e] || e, this.each((function () { try {
                    this[e] = void 0, delete this[e];
                }
                catch (e) { } })); } }), m.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]; }, propHooks: { tabIndex: { get: function (e) { var t = m.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : kt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1; } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.hrefNormalized || m.each(["href", "src"], (function (e, t) { m.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4); } }; })), h.optSelected || (m.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null; }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex); } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () { m.propFix[this.toLowerCase()] = this; })), h.enctype || (m.propFix.enctype = "encoding");
            var Dt = /[\t\r\n\f]/g;
            function At(e) { return m.attr(e, "class") || ""; }
            m.fn.extend({ addClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (m.isFunction(e))
                    return this.each((function (t) { m(this).addClass(e.call(this, t, At(this))); })); if ("string" == typeof e && e)
                    for (t = e.match(q) || []; n = this[u++];)
                        if (i = At(n), r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                            for (a = 0; o = t[a++];)
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = m.trim(r)) && m.attr(n, "class", s);
                        } return this; }, removeClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (m.isFunction(e))
                    return this.each((function (t) { m(this).removeClass(e.call(this, t, At(this))); })); if (!arguments.length)
                    return this.attr("class", ""); if ("string" == typeof e && e)
                    for (t = e.match(q) || []; n = this[u++];)
                        if (i = At(n), r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;)
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = m.trim(r)) && m.attr(n, "class", s);
                        } return this; }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each((function (n) { m(this).toggleClass(e.call(this, n, At(this), t), t); })) : this.each((function () { var t, r, i, o; if ("string" === n)
                    for (r = 0, i = m(this), o = e.match(q) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = At(this)) && m._data(this, "__className__", t), m.attr(this, "class", t || !1 === e ? "" : m._data(this, "__className__") || "")); })); }, hasClass: function (e) { var t, n, r = 0; for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + At(n) + " ").replace(Dt, " ").indexOf(t) > -1)
                        return !0; return !1; } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (e, t) { m.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t); }; })), m.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e); } });
            var Lt = n.location, jt = m.now(), _t = /\?/, Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            m.parseJSON = function (e) { if (n.JSON && n.JSON.parse)
                return n.JSON.parse(e + ""); var t, r = null, i = m.trim(e + ""); return i && !m.trim(i.replace(Ht, (function (e, n, i, o) { return t && n && (r = 0), 0 === r ? e : (t = i || n, r += !o - !i, ""); }))) ? Function("return " + i)() : m.error("Invalid JSON: " + e); }, m.parseXML = function (e) { var t; if (!e || "string" != typeof e)
                return null; try {
                n.DOMParser ? t = (new n.DOMParser).parseFromString(e, "text/xml") : ((t = new n.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e));
            }
            catch (e) {
                t = void 0;
            } return t && t.documentElement && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e), t; };
            var Mt = /#.*$/, qt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ot = /^(?:GET|HEAD)$/, Ft = /^\/\//, Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pt = {}, Rt = {}, Wt = "*/".concat("*"), $t = Lt.href, zt = Bt.exec($t.toLowerCase()) || [];
            function Xt(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(q) || []; if (m.isFunction(n))
                for (; r = o[i++];)
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n); }; }
            function Ut(e, t, n, r) { var i = {}, o = e === Rt; function a(s) { var u; return i[s] = !0, m.each(e[s] || [], (function (e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1); })), u; } return a(t.dataTypes[0]) || !i["*"] && a("*"); }
            function Vt(e, t) { var n, r, i = m.ajaxSettings.flatOptions || {}; for (r in t)
                void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]); return n && m.extend(!0, e, n), e; }
            function Gt(e) { return e.style && e.style.display || m.css(e, "display"); }
            m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: $t, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(zt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Vt(Vt(e, m.ajaxSettings), t) : Vt(m.ajaxSettings, e); }, ajaxPrefilter: Xt(Pt), ajaxTransport: Xt(Rt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var r, i, o, a, s, u, l, c, f = m.ajaxSetup({}, t), d = f.context || f, p = f.context && (d.nodeType || d.jquery) ? m(d) : m.event, h = m.Deferred(), g = m.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === x) {
                        if (!c)
                            for (c = {}; t = It.exec(a);)
                                c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()];
                    } return null == t ? null : t; }, getAllResponseHeaders: function () { return 2 === x ? a : null; }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return x || (e = b[n] = b[n] || e, y[e] = t), this; }, overrideMimeType: function (e) { return x || (f.mimeType = e), this; }, statusCode: function (e) { var t; if (e)
                        if (x < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            T.always(e[T.status]); return this; }, abort: function (e) { var t = e || w; return l && l.abort(t), C(0, t), this; } }; if (h.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || $t) + "").replace(Mt, "").replace(Ft, zt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = m.trim(f.dataType || "*").toLowerCase().match(q) || [""], null == f.crossDomain && (r = Bt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === zt[1] && r[2] === zt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (zt[3] || ("http:" === zt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = m.param(f.data, f.traditional)), Ut(Pt, f, t, T), 2 === x)
                    return T; for (i in (u = m.event && f.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (_t.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = qt.test(o) ? o.replace(qt, "$1_=" + jt++) : o + (_t.test(o) ? "&" : "?") + "_=" + jt++)), f.ifModified && (m.lastModified[o] && T.setRequestHeader("If-Modified-Since", m.lastModified[o]), m.etag[o] && T.setRequestHeader("If-None-Match", m.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]), f.headers)
                    T.setRequestHeader(i, f.headers[i]); if (f.beforeSend && (!1 === f.beforeSend.call(d, T, f) || 2 === x))
                    return T.abort(); for (i in w = "abort", { success: 1, error: 1, complete: 1 })
                    T[i](f[i]); if (l = Ut(Rt, f, t, T)) {
                    if (T.readyState = 1, u && p.trigger("ajaxSend", [T, f]), 2 === x)
                        return T;
                    f.async && f.timeout > 0 && (s = n.setTimeout((function () { T.abort("timeout"); }), f.timeout));
                    try {
                        x = 1, l.send(y, C);
                    }
                    catch (e) {
                        if (!(x < 2))
                            throw e;
                        C(-1, e);
                    }
                }
                else
                    C(-1, "No Transport"); function C(e, t, r, i) { var c, y, b, w, C, E = t; 2 !== x && (x = 2, s && n.clearTimeout(s), l = void 0, a = i || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (w = function (e, t, n) { for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
                    u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                    for (a in s)
                        if (s[a] && s[a].test(i)) {
                            u.unshift(a);
                            break;
                        } if (u[0] in n)
                    o = u[0];
                else {
                    for (a in n) {
                        if (!u[0] || e.converters[a + " " + u[0]]) {
                            o = a;
                            break;
                        }
                        r || (r = a);
                    }
                    o = o || r;
                } if (o)
                    return o !== u[0] && u.unshift(o), n[o]; }(f, T, r)), w = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1])
                    for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o)
                            o = u;
                        else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                        break;
                                    }
                            if (!0 !== a)
                                if (a && e.throws)
                                    t = a(t);
                                else
                                    try {
                                        t = a(t);
                                    }
                                    catch (e) {
                                        return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                    }
                        } return { state: "success", data: t }; }(f, w, T, c), c ? (f.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (m.lastModified[o] = C), (C = T.getResponseHeader("etag")) && (m.etag[o] = C)), 204 === e || "HEAD" === f.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, y = w.data, c = !(b = w.error))) : (b = E, !e && E || (E = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || E) + "", c ? h.resolveWith(d, [y, E, T]) : h.rejectWith(d, [T, E, b]), T.statusCode(v), v = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? y : b]), g.fireWith(d, [T, E]), u && (p.trigger("ajaxComplete", [T, f]), --m.active || m.event.trigger("ajaxStop"))); } return T; }, getJSON: function (e, t, n) { return m.get(e, t, n, "json"); }, getScript: function (e, t) { return m.get(e, void 0, t, "script"); } }), m.each(["get", "post"], (function (e, t) { m[t] = function (e, n, r, i) { return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax(m.extend({ url: e, type: t, dataType: i, data: n, success: r }, m.isPlainObject(e) && e)); }; })), m._evalUrl = function (e) { return m.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }); }, m.fn.extend({ wrapAll: function (e) { if (m.isFunction(e))
                    return this.each((function (t) { m(this).wrapAll(e.call(this, t)); })); if (this[0]) {
                    var t = m(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function () { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                        e = e.firstChild; return e; })).append(this);
                } return this; }, wrapInner: function (e) { return m.isFunction(e) ? this.each((function (t) { m(this).wrapInner(e.call(this, t)); })) : this.each((function () { var t = m(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e); })); }, wrap: function (e) { var t = m.isFunction(e); return this.each((function (n) { m(this).wrapAll(t ? e.call(this, n) : e); })); }, unwrap: function () { return this.parent().each((function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes); })).end(); } }), m.expr.filters.hidden = function (e) { return h.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function (e) { if (!m.contains(e.ownerDocument || a, e))
                return !0; for (; e && 1 === e.nodeType;) {
                if ("none" === Gt(e) || "hidden" === e.type)
                    return !0;
                e = e.parentNode;
            } return !1; }(e); }, m.expr.filters.visible = function (e) { return !m.expr.filters.hidden(e); };
            var Yt = /%20/g, Jt = /\[\]$/, Qt = /\r?\n/g, Kt = /^(?:submit|button|image|reset|file)$/i, Zt = /^(?:input|select|textarea|keygen)/i;
            function en(e, t, n, r) { var i; if (m.isArray(t))
                m.each(t, (function (t, i) { n || Jt.test(e) ? r(e, i) : en(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r); }));
            else if (n || "object" !== m.type(t))
                r(e, t);
            else
                for (i in t)
                    en(e + "[" + i + "]", t[i], n, r); }
            m.param = function (e, t) { var n, r = [], i = function (e, t) { t = m.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t); }; if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(e) || e.jquery && !m.isPlainObject(e))
                m.each(e, (function () { i(this.name, this.value); }));
            else
                for (n in e)
                    en(n, e[n], t, i); return r.join("&").replace(Yt, "+"); }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()); }, serializeArray: function () { return this.map((function () { var e = m.prop(this, "elements"); return e ? m.makeArray(e) : this; })).filter((function () { var e = this.type; return this.name && !m(this).is(":disabled") && Zt.test(this.nodeName) && !Kt.test(e) && (this.checked || !te.test(e)); })).map((function (e, t) { var n = m(this).val(); return null == n ? null : m.isArray(n) ? m.map(n, (function (e) { return { name: t.name, value: e.replace(Qt, "\r\n") }; })) : { name: t.name, value: n.replace(Qt, "\r\n") }; })).get(); } }), m.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () { return this.isLocal ? an() : a.documentMode > 8 ? on() : /^(get|post|head|put|delete|options)$/i.test(this.type) && on() || an(); } : on;
            var tn = 0, nn = {}, rn = m.ajaxSettings.xhr();
            function on() { try {
                return new n.XMLHttpRequest;
            }
            catch (e) { } }
            function an() { try {
                return new n.ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { } }
            n.attachEvent && n.attachEvent("onunload", (function () { for (var e in nn)
                nn[e](void 0, !0); })), h.cors = !!rn && "withCredentials" in rn, (rn = h.ajax = !!rn) && m.ajaxTransport((function (e) { var t; if (!e.crossDomain || h.cors)
                return { send: function (r, i) { var o, a = e.xhr(), s = ++tn; if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields)
                            a[o] = e.xhrFields[o]; for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)
                        void 0 !== r[o] && a.setRequestHeader(o, r[o] + ""); a.send(e.hasContent && e.data || null), t = function (n, r) { var o, u, l; if (t && (r || 4 === a.readyState))
                        if (delete nn[s], t = void 0, a.onreadystatechange = m.noop, r)
                            4 !== a.readyState && a.abort();
                        else {
                            l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText;
                            }
                            catch (e) {
                                u = "";
                            }
                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404;
                        } l && i(o, u, l, a.getAllResponseHeaders()); }, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = nn[s] = t : t(); }, abort: function () { t && t(void 0, !0); } }; })), m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return m.globalEval(e), e; } } }), m.ajaxPrefilter("script", (function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1); })), m.ajaxTransport("script", (function (e) { if (e.crossDomain) {
                var t, n = a.head || m("head")[0] || a.documentElement;
                return { send: function (r, i) { (t = a.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")); }, n.insertBefore(t, n.firstChild); }, abort: function () { t && t.onload(void 0, !0); } };
            } }));
            var sn = [], un = /(=)\?(?=&|$)|\?\?/;
            m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = sn.pop() || m.expando + "_" + jt++; return this[e] = !0, e; } }), m.ajaxPrefilter("json jsonp", (function (e, t, r) { var i, o, a, s = !1 !== e.jsonp && (un.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(un, "$1" + i) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () { return a || m.error(i + " was not called"), a[0]; }, e.dataTypes[0] = "json", o = n[i], n[i] = function () { a = arguments; }, r.always((function () { void 0 === o ? m(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, sn.push(i)), a && m.isFunction(o) && o(a[0]), a = o = void 0; })), "script"; })), m.parseHTML = function (e, t, n) { if (!e || "string" != typeof e)
                return null; "boolean" == typeof t && (n = t, t = !1), t = t || a; var r = N.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = pe([e], t, i), i && i.length && m(i).remove(), m.merge([], r.childNodes)); };
            var ln = m.fn.load;
            function cn(e) { return m.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow); }
            m.fn.load = function (e, t, n) { if ("string" != typeof e && ln)
                return ln.apply(this, arguments); var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = m.trim(e.slice(s, e.length)), e = e.slice(0, s)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && m.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done((function (e) { o = arguments, a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e); })).always(n && function (e, t) { a.each((function () { n.apply(this, o || [e.responseText, t, e]); })); }), this; }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) { m.fn[t] = function (e) { return this.on(t, e); }; })), m.expr.filters.animated = function (e) { return m.grep(m.timers, (function (t) { return e === t.elem; })).length; }, m.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = m.css(e, "position"), c = m(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = m.css(e, "top"), u = m.css(e, "left"), ("absolute" === l || "fixed" === l) && m.inArray("auto", [o, u]) > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f); } }, m.fn.extend({ offset: function (e) { if (arguments.length)
                    return void 0 === e ? this : this.each((function (t) { m.offset.setOffset(this, e, t); })); var t, n, r = { top: 0, left: 0 }, i = this[0], o = i && i.ownerDocument; return o ? (t = o.documentElement, m.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = cn(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r) : void 0; }, position: function () { if (this[0]) {
                    var e, t, n = { top: 0, left: 0 }, r = this[0];
                    return "fixed" === m.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (n = e.offset()), n.top += m.css(e[0], "borderTopWidth", !0), n.left += m.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - m.css(r, "marginTop", !0), left: t.left - n.left - m.css(r, "marginLeft", !0) };
                } }, offsetParent: function () { return this.map((function () { for (var e = this.offsetParent; e && !m.nodeName(e, "html") && "static" === m.css(e, "position");)
                    e = e.offsetParent; return e || Xe; })); } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function (e, t) { var n = /Y/.test(t); m.fn[e] = function (r) { return ee(this, (function (e, r, i) { var o = cn(e); if (void 0 === i)
                return o ? t in o ? o[t] : o.document.documentElement[r] : e[r]; o ? o.scrollTo(n ? m(o).scrollLeft() : i, n ? i : m(o).scrollTop()) : e[r] = i; }), e, r, arguments.length, null); }; })), m.each(["top", "left"], (function (e, t) { m.cssHooks[t] = Ye(h.pixelPosition, (function (e, n) { if (n)
                return n = Ve(e, t), $e.test(n) ? m(e).position()[t] + "px" : n; })); })), m.each({ Height: "height", Width: "width" }, (function (e, t) { m.each({ padding: "inner" + e, content: t, "": "outer" + e }, (function (n, r) { m.fn[r] = function (r, i) { var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border"); return ee(this, (function (t, n, r) { var i; return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a); }), t, o ? r : void 0, o, null); }; })); })), m.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n); }, unbind: function (e, t) { return this.off(e, null, t); }, delegate: function (e, t, n, r) { return this.on(t, e, n, r); }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n); } }), m.fn.size = function () { return this.length; }, m.fn.andSelf = m.fn.addBack, void 0 === (r = function () { return m; }.apply(t, [])) || (e.exports = r);
            var fn = n.jQuery, dn = n.$;
            return m.noConflict = function (e) { return n.$ === m && (n.$ = dn), e && n.jQuery === m && (n.jQuery = fn), m; }, i || (n.jQuery = n.$ = m), m;
        }, "object" == typeof e.exports ? e.exports = i.document ? o(i, !0) : function (e) { if (!e.document)
            throw new Error("jQuery requires a window with a document"); return o(e); } : o(i);
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(7);
        t.Table = r["default"];
        var i = n(8);
        t.Modal = i["default"];
        var o = n(9);
        t.Select = o["default"];
        var a = n(10);
        t.Dropdown = a["default"];
        var s = n(11);
        t.autoCompelete = s["default"];
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0, n(4).generateTableForm();
    }, function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function s(e) { try {
            u(r["throw"](e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, i = this && this.__generator || function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), "throw": s(1), "return": s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; a;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return a.label++, { value: o[1], done: !1 };
                    case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                    default:
                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            a.label = o[1];
                            break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                            a.label = i[1], i = o;
                            break;
                        }
                        if (i && a.label < i[2]) {
                            a.label = i[2], a.ops.push(o);
                            break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                }
                o = t.call(e, a);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } };
        t.__esModule = !0;
        var o = n(0), a = n(1), s = n(5), u = n(6), l = n(13);
        t.generateTableForm = function () { return r(this, void 0, void 0, (function () { var e, t, n, r, c, f, d, p, h, m, g, v, y, b, x, w, T, C, E, N, k, S, D, A, L; return i(this, (function (i) { switch (i.label) {
            case 0: return [4, l.fetchTableLoginFormDefaultValues()];
            case 1: return e = i.sent(), t = e.formNumber, n = e.firstName, r = e.lastName, c = e.fromDate, f = e.toDate, d = e.status, p = e.employmentType, h = e.gender, m = e.maritalStatus, g = e.country, v = e.fromBirthDate, y = e.toBirthDate, b = e.city, x = e.languageLevel, w = e.languages, (T = o.createElement({ tagName: "form", props: { id: "table-form", dir: "rtl" } })).onsubmit = function (e) { return !1; }, C = o.createElement({ tagName: "input", props: { type: "submit", onclick: function (e) { console.log(a("#table-form").serializeArray()); } } }), E = { formNumber: { value: t, type: "text", name: "formNumber" }, firstName: { value: n, type: "text", name: "firstName" }, lastName: { value: r, type: "text", name: "lastName" } }, N = { fromDate: { value: c, type: "text", name: "fromDate" }, toDate: { value: f, type: "text", name: "toDate" }, status: { value: d, options: [{ value: 1, label: "accepted" }, { value: 2, label: "rejected" }], name: "status" } }, k = { employmentType: { value: p, options: [{ value: 1, label: "contract" }, { value: 2, label: "other" }], name: "employmentType" }, gender: { value: h, options: [{ value: 1, label: "male" }, { value: 2, label: "female" }], name: "gender" }, maritalStatus: { value: m, options: [{ value: 1, label: "married" }, { value: 2, label: "single" }], name: "maritalStatus" } }, S = { country: { value: g, type: "text", name: "country" }, fromBirthDate: { value: v, type: "text", name: "fromBirthDate" }, toBirthDate: { value: y, type: "text", name: "toBirthDate" } }, D = { city: { value: b, type: "text", name: "city" }, languageLevel: { value: x, type: "text", name: "languageLevel" }, languages: { value: w, type: "text", name: "languages" } }, A = [{ renderer: s.mapIntoTD([{ input: u.formNumberInput(E.formNumber) }, { input: u.firstNameInput(E.firstName) }, { input: u.lastNameInput(E.lastName) }]) }, { renderer: s.mapIntoTD([{ input: u.fromDateInput(N.fromDate) }, { input: u.toDateInput(N.toDate) }, { input: u.statusInput(N.status) }]) }, { renderer: s.mapIntoTD([{ input: u.employmentTypeInput(k.employmentType) }, { input: u.genderInput(k.gender) }, { input: u.maritalStatusInput(k.maritalStatus) }]) }, { renderer: s.mapIntoTD([{ input: u.countryInput(S.country) }, { input: u.fromBirthDateInput(S.fromBirthDate) }, { input: u.toBirthDateInput(S.toBirthDate) }]) }, { renderer: s.mapIntoTD([{ input: u.cityInput(D.city) }, { input: u.languageLevelInput(D.languageLevel) }, { input: u.languagesInput(D.languages) }]) }], L = s["default"]({ rows: A }), T.appendChild(L), T.appendChild(C), o.renderIntoRoot(T), [2];
        } })); })); };
    }, function (e, t, n) {
        "use strict";
        var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        t.__esModule = !0;
        var i = n(0);
        t.mapIntoTD = function (e) { return e.map((function (e) { var t = i.createElement({ tagName: "td", props: r({}, e.cellProps) }); return t.appendChild(e.input), t; })); }, t["default"] = function (e) { for (var t = e.rows, n = document.createElement("table"), r = document.createElement("tbody"), o = 0, a = t; o < a.length; o++) {
            for (var s = a[o], u = i.createElement({ tagName: "tr", props: {} }), l = 0, c = s.renderer; l < c.length; l++) {
                var f = c[l];
                u.appendChild(f);
            }
            r.appendChild(u);
        } return n.appendChild(r), n; };
    }, function (e, t, n) {
        "use strict";
        var r = this && this.__assign || function () { return (r = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
        t.__esModule = !0;
        var i = n(0), o = n(2), a = n(12);
        t.formNumberInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "form number"); }, t.firstNameInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "first name"); }, t.lastNameInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "last name"); }, t.fromDateInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "from date"); }, t.toDateInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "to date"); }, t.statusInput = function (e) { return a["default"](o.Select(r({ options: e.options, value: e.value }, e)), "status"); }, t.employmentTypeInput = function (e) { return a["default"](o.Select(r({ options: e.options, value: e.value }, e)), "employment type"); }, t.genderInput = function (e) { return a["default"](o.Select(r({ options: e.options, value: e.value }, e)), "gender"); }, t.maritalStatusInput = function (e) { return a["default"](o.Select(r({ options: e.options, value: e.value }, e)), "maritial"); }, t.countryInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "country"); }, t.fromBirthDateInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "from birth date"); }, t.toBirthDateInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "to birth date"); }, t.cityInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "city"); }, t.languageLevelInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "language level"); }, t.languagesInput = function (e) { return a["default"](i.createElement({ tagName: "input", props: r({}, e) }), "laguages"); };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t["default"] = function (e) { for (var t = e.dataSource, n = e.columns, i = n.map((function (e) { return e.dataIndex; })), o = document.createElement("table"), a = document.createElement("thead"), s = document.createElement("tr"), u = document.createElement("tbody"), l = 0, c = n; l < c.length; l++) {
            var f = c[l], d = document.createElement("th");
            d.innerHTML = f.title, s.appendChild(d);
        } for (var p = 0, h = t; p < h.length; p++) {
            for (var m = h[p], g = document.createElement("tr"), v = [], y = function (e) { var t = document.createElement("td"), i = n.find((function (t) { return t.dataIndex === e; })).renderer; if (i) {
                var o = i(m);
                r.isObjectDomElement(o) ? t.appendChild(o) : t.innerHTML = o;
            }
            else
                t.innerHTML = m[e]; v.push(t); }, b = 0, x = i; b < x.length; b++) {
                y(x[b]);
            }
            for (var w = 0, T = v; w < T.length; w++) {
                var C = T[w];
                g.appendChild(C);
            }
            u.appendChild(g);
        } return a.appendChild(s), o.appendChild(a), o.appendChild(u), o; };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        t["default"] = function (e) { var t = e.htmlsrc, n = e.height, r = void 0 === n ? 250 : n, i = e.width, o = "dialogHeight:" + r + "px;dialogWidth:" + (void 0 === i ? 850 : i) + "px"; window.showModalDialog(t, "", o); };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t["default"] = function (e) { var t = e.options, n = e.value, i = e.name, o = r.createElement({ tagName: "select", props: { value: n, name: i } }); return t.map((function (e, t) { var n = r.createElement({ tagName: "option" }); n.setAttribute("value", e.value), n.innerHTML = e.label, o.appendChild(n); })), o; };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t["default"] = function (e) { var t = e.children, n = document.createElement("div"); return n = r.getElementWithClassNames(n, ["didgah-dropdown"]), t && n.appendChild(t), n; };
    }, function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
            u(r.next(e));
        }
        catch (e) {
            o(e);
        } } function s(e) { try {
            u(r["throw"](e));
        }
        catch (e) {
            o(e);
        } } function u(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, s); } u((r = r.apply(e, t || [])).next()); })); }, i = this && this.__generator || function (e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), "throw": s(1), "return": s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (n)
            throw new TypeError("Generator is already executing."); for (; a;)
            try {
                if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)
                    return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4: return a.label++, { value: o[1], done: !1 };
                    case 5:
                        a.label++, r = o[1], o = [0];
                        continue;
                    case 7:
                        o = a.ops.pop(), a.trys.pop();
                        continue;
                    default:
                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                            a.label = o[1];
                            break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                            a.label = i[1], i = o;
                            break;
                        }
                        if (i && a.label < i[2]) {
                            a.label = i[2], a.ops.push(o);
                            break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                }
                o = t.call(e, a);
            }
            catch (e) {
                o = [6, e], r = 0;
            }
            finally {
                n = i = 0;
            } if (5 & o[0])
            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } };
        t.__esModule = !0;
        var o = n(1), a = n(2), s = n(0);
        t["default"] = function (e) { var t = e.options, n = e.value, u = e.onInputChange, l = s.elementIdGenerator, c = document.createElement("div"); (c = s.getElementWithClassNames(c, ["auto-complete"])).id = l.gererate(); var f = document.createElement("input"); f.id = l.gererate(), n && (f.value = n.label); var d = function () { return document.getElementById(f.id); }, p = function (e) { d().value = e; }; f.onkeydown = function (e) { !function (e) { r(this, void 0, void 0, (function () { var t; return i(this, (function (n) { switch (n.label) {
            case 0: return [4, u(e)];
            case 1: return t = n.sent(), h.innerHTML = "", t.forEach((function (e, t) { var n = document.createElement("div"); n.innerHTML = e.label, n.onclick = function () { p(e.label); }, h.appendChild(n); })), [2];
        } })); })); }(this.value); }, f.onfocus = function (e) { document.getElementById(h.id).style.display = "block"; }; var h = a.Dropdown({}); return h = s.getElementWithClassNames(h, ["auto-complete__dropdown"]), (h = s.getElementWithStyle(h, [{ key: "display", value: "none" }])).id = l.gererate(), t.forEach((function (e) { var t = document.createElement("div"); t.onclick = function () { p(e.label); }, t.innerHTML = e.label, h.appendChild(t); })), o(document).click((function (e) { var t = document.getElementById(h.id); "none" === t.style.display || t.contains(e.target) || d().contains(e.target) || (t.style.display = "none"); })), c.appendChild(f), c.appendChild(h), c; };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t["default"] = function (e, t) { var n = r.createElement({ tagName: "div" }), i = r.createElement({ tagName: "label", props: { className: "with-label__label" } }); return i.innerHTML = t, n.appendChild(i), n.appendChild(e), n; };
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = { formNumber: "0", firstName: "armin", lastName: "yahya", fromDate: "2020/02/02", toDate: "2020/02/02", status: { value: "1", label: "accepted" }, employmentType: { value: "1", label: "contract" }, gender: { value: "1", label: "mail" }, maritalStatus: { value: "1", label: "married" }, country: "iran", fromBirthDate: "2020/02/02", toBirthDate: "2020/02/02", city: "tehran", languageLevel: "intermediate", languages: "" };
        t.fetchTableLoginFormDefaultValues = function () { return new Promise((function (e, t) { setTimeout((function () { e(r); }), 0); })); };
    }]);
//# sourceMappingURL=bundle.js.map
