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
(function (e) { function t(a) { if (n[a])
    return n[a].exports; var o = n[a] = { i: a, l: !1, exports: {} }; return e[a].call(o.exports, o, o.exports, t), o.l = !0, o.exports; } var n = {}; return t.m = e, t.c = n, t.d = function (e, n, a) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: a }); }, t.r = function (e) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, t.t = function (e, n) { if (1 & n && (e = t(e)), 8 & n)
    return e; if (4 & n && 'object' == typeof e && e && e.__esModule)
    return e; var a = Object.create(null); if (t.r(a), Object.defineProperty(a, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e)
    for (var o in e)
        t.d(a, o, function (t) { return e[t]; }.bind(null, o)); return a; }, t.n = function (e) { var n = e && e.__esModule ? function () { return e['default']; } : function () { return e; }; return t.d(n, 'a', n), n; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = '', t(t.s = 0); })({ "./node_modules/jquery/dist/jquery.js": /*!********************************************!*\
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
        (function (t, n) { 'object' == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) { if (!e.document)
            throw new Error('jQuery requires a window with a document'); return n(e); } : n(t); })('undefined' == typeof window ? this : window, function (o, d) {
            function s(e) { var t = !!e && 'length' in e && e.length, n = be.type(e); return !('function' === n || be.isWindow(e)) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e); }
            function r(e, t, n) { if (be.isFunction(t))
                return be.grep(e, function (e, a) { return !!t.call(e, a, e) !== n; }); if (t.nodeType)
                return be.grep(e, function (e) { return e === t !== n; }); if ('string' == typeof t) {
                if (je.test(t))
                    return be.filter(t, e, n);
                t = be.filter(t, e);
            } return be.grep(e, function (e) { return -1 < be.inArray(e, t) !== n; }); }
            function l(e, t) { do
                e = e[t];
            while (e && 1 !== e.nodeType); return e; }
            function p(e) { var t = {}; return be.each(e.match(Me) || [], function (e, n) { t[n] = !0; }), t; }
            function c() { le.addEventListener ? (le.removeEventListener('DOMContentLoaded', u), o.removeEventListener('load', u)) : (le.detachEvent('onreadystatechange', u), o.detachEvent('onload', u)); }
            function u() { (le.addEventListener || 'load' === o.event.type || 'complete' === le.readyState) && (c(), be.ready()); }
            function m(e, t, n) { if (void 0 === n && 1 === e.nodeType) {
                var a = 'data-' + t.replace(Be, '-$1').toLowerCase();
                if (n = e.getAttribute(a), 'string' == typeof n) {
                    try {
                        n = 'true' === n || 'false' !== n && ('null' === n ? null : +n + '' === n ? +n : i.test(n) ? be.parseJSON(n) : n);
                    }
                    catch (t) { }
                    be.data(e, t, n);
                }
                else
                    n = void 0;
            } return n; }
            function h(e) { for (var t in e)
                if (!('data' === t && be.isEmptyObject(e[t])) && 'toJSON' !== t)
                    return !1; return !0; }
            function g(e, t, n, a) { if (Pe(e)) {
                var o, i, d = be.expando, s = e.nodeType, r = s ? be.cache : e, l = s ? e[d] : e[d] && d;
                if (l && r[l] && (a || r[l].data) || void 0 !== n || 'string' != typeof t)
                    return l || (s ? l = e[d] = re.pop() || be.guid++ : l = d), r[l] || (r[l] = s ? {} : { toJSON: be.noop }), ('object' == typeof t || 'function' == typeof t) && (a ? r[l] = be.extend(r[l], t) : r[l].data = be.extend(r[l].data, t)), i = r[l], a || (!i.data && (i.data = {}), i = i.data), void 0 !== n && (i[be.camelCase(t)] = n), 'string' == typeof t ? (o = i[t], null == o && (o = i[be.camelCase(t)])) : o = i, o;
            } }
            function f(e, t, n) { if (Pe(e)) {
                var a, o, i = e.nodeType, d = i ? be.cache : e, s = i ? e[be.expando] : be.expando;
                if (d[s]) {
                    if (t && (a = n ? d[s] : d[s].data, a)) {
                        for (be.isArray(t) ? t = t.concat(be.map(t, be.camelCase)) : (t in a) ? t = [t] : (t = be.camelCase(t), t = (t in a) ? [t] : t.split(' ')), o = t.length; o--;)
                            delete a[t[o]];
                        if (n ? !h(a) : !be.isEmptyObject(a))
                            return;
                    }
                    !n && (delete d[s].data, !h(d[s])) || (i ? be.cleanData([e], !0) : ye.deleteExpando || d != d.window ? delete d[s] : d[s] = void 0);
                }
            } }
            function y(e, t, n, a) { var o, i = 1, d = 20, s = a ? function () { return a.cur(); } : function () { return be.css(e, t, ''); }, r = s(), l = n && n[3] || (be.cssNumber[t] ? '' : 'px'), p = (be.cssNumber[t] || 'px' !== l && +r) && Fe.exec(be.css(e, t)); if (p && p[3] !== l) {
                l = l || p[3], n = n || [], p = +r || 1;
                do
                    i = i || '.5', p /= i, be.style(e, t, p + l);
                while (i != (i = s() / r) && 1 != i && --d);
            } return n && (p = +p || +r || 0, o = n[1] ? p + (n[1] + 1) * n[2] : +n[2], a && (a.unit = l, a.start = p, a.end = o)), o; }
            function x(e) { var t = Je.split('|'), n = e.createDocumentFragment(); if (n.createElement)
                for (; t.length;)
                    n.createElement(t.pop()); return n; }
            function b(e, t) { var n, a, o = 0, i = 'undefined' == typeof e.getElementsByTagName ? 'undefined' == typeof e.querySelectorAll ? void 0 : e.querySelectorAll(t || '*') : e.getElementsByTagName(t || '*'); if (!i)
                for (i = [], n = e.childNodes || e; null != (a = n[o]); o++)
                    !t || be.nodeName(a, t) ? i.push(a) : be.merge(i, b(a, t)); return void 0 === t || t && be.nodeName(e, t) ? be.merge([e], i) : i; }
            function v(e, t) { for (var n, a = 0; null != (n = e[a]); a++)
                be._data(n, 'globalEval', !t || be._data(t[a], 'globalEval')); }
            function C(e) { $e.test(e.type) && (e.defaultChecked = e.checked); }
            function T(e, t, n, a, o) { for (var d, s, r, p, c, u, m, h = e.length, l = x(t), g = [], f = 0; f < h; f++)
                if (s = e[f], s || 0 === s)
                    if ('object' === be.type(s))
                        be.merge(g, s.nodeType ? [s] : s);
                    else if (!Ye.test(s))
                        g.push(t.createTextNode(s));
                    else {
                        for (p = p || l.appendChild(t.createElement('div')), c = (Ue.exec(s) || ['', ''])[1].toLowerCase(), m = Ke[c] || Ke._default, p.innerHTML = m[1] + be.htmlPrefilter(s) + m[2], d = m[0]; d--;)
                            p = p.lastChild;
                        if (!ye.leadingWhitespace && Ve.test(s) && g.push(t.createTextNode(Ve.exec(s)[0])), !ye.tbody)
                            for (s = 'table' !== c || Qe.test(s) ? '<table>' !== m[1] || Qe.test(s) ? 0 : p : p.firstChild, d = s && s.childNodes.length; d--;)
                                be.nodeName(u = s.childNodes[d], 'tbody') && !u.childNodes.length && s.removeChild(u);
                        for (be.merge(g, p.childNodes), p.textContent = ''; p.firstChild;)
                            p.removeChild(p.firstChild);
                        p = l.lastChild;
                    } for (p && l.removeChild(p), ye.appendChecked || be.grep(b(g, 'input'), C), f = 0; s = g[f++];) {
                if (a && -1 < be.inArray(s, a)) {
                    o && o.push(s);
                    continue;
                }
                if (r = be.contains(s.ownerDocument, s), p = b(l.appendChild(s), 'script'), r && v(p), n)
                    for (d = 0; s = p[d++];)
                        Ge.test(s.type || '') && n.push(s);
            } return p = null, l; }
            function w() { return !0; }
            function N() { return !1; }
            function E() { try {
                return le.activeElement;
            }
            catch (e) { } }
            function k(e, t, n, a, o, i) { var d, s; if ('object' == typeof t) {
                for (s in 'string' != typeof n && (a = a || n, n = void 0), t)
                    k(e, s, n, a, t[s], i);
                return e;
            } if (null == a && null == o ? (o = n, a = n = void 0) : null == o && ('string' == typeof n ? (o = a, a = void 0) : (o = a, a = n, n = void 0)), !1 === o)
                o = N;
            else if (!o)
                return e; return 1 === i && (d = o, o = function (e) { return be().off(e), d.apply(this, arguments); }, o.guid = d.guid || (d.guid = be.guid++)), e.each(function () { be.event.add(this, t, o, a, n); }); }
            function S(e, t) { return be.nodeName(e, 'table') && be.nodeName(11 === t.nodeType ? t.firstChild : t, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e; }
            function D(e) { return e.type = (null !== be.find.attr(e, 'type')) + '/' + e.type, e; }
            function j(e) { var t = lt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute('type'), e; }
            function L(e, t) { if (1 === t.nodeType && be.hasData(e)) {
                var n, a, o, i = be._data(e), d = be._data(t, i), s = i.events;
                if (s)
                    for (n in delete d.handle, d.events = {}, s)
                        for (a = 0, o = s[n].length; a < o; a++)
                            be.event.add(t, n, s[n][a]);
                d.data && (d.data = be.extend({}, d.data));
            } }
            function _(t, n) { var a, o, e; if (1 === n.nodeType) {
                if (a = n.nodeName.toLowerCase(), !ye.noCloneEvent && n[be.expando]) {
                    for (o in e = be._data(n), e.events)
                        be.removeEvent(n, o, e.handle);
                    n.removeAttribute(be.expando);
                }
                'script' === a && n.text !== t.text ? (D(n).text = t.text, j(n)) : 'object' === a ? (n.parentNode && (n.outerHTML = t.outerHTML), ye.html5Clone && t.innerHTML && !be.trim(n.innerHTML) && (n.innerHTML = t.innerHTML)) : 'input' === a && $e.test(t.type) ? (n.defaultChecked = n.checked = t.checked, n.value !== t.value && (n.value = t.value)) : 'option' === a ? n.defaultSelected = n.selected = t.defaultSelected : ('input' === a || 'textarea' === a) && (n.defaultValue = t.defaultValue);
            } }
            function A(e, t, n, a) { t = ce.apply([], t); var o, d, s, r, p, c, u = 0, i = e.length, l = t[0], m = be.isFunction(l); if (m || 1 < i && 'string' == typeof l && !ye.checkClone && rt.test(l))
                return e.each(function (o) { var i = e.eq(o); m && (t[0] = l.call(this, o, i.html())), A(i, t, n, a); }); if (i && (c = T(t, e[0].ownerDocument, !1, e, a), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || a)) {
                for (r = be.map(b(c, 'script'), D), s = r.length; u < i; u++)
                    d = c, u != i - 1 && (d = be.clone(d, !0, !0), s && be.merge(r, b(d, 'script'))), n.call(e[u], d, u);
                if (s)
                    for (p = r[r.length - 1].ownerDocument, be.map(r, j), u = 0; u < s; u++)
                        d = r[u], Ge.test(d.type || '') && !be._data(d, 'globalEval') && be.contains(p, d) && (d.src ? be._evalUrl && be._evalUrl(d.src) : be.globalEval((d.text || d.textContent || d.innerHTML || '').replace(pt, '')));
                c = o = null;
            } return e; }
            function H(e, t, n) { for (var a, o = t ? be.filter(t, e) : e, d = 0; null != (a = o[d]); d++)
                n || 1 !== a.nodeType || be.cleanData(b(a)), a.parentNode && (n && be.contains(a.ownerDocument, a) && v(b(a, 'script')), a.parentNode.removeChild(a)); return e; }
            function q(e, t) { var n = be(t.createElement(e)).appendTo(t.body), a = be.css(n[0], 'display'); return n.detach(), a; }
            function M(e) { var t = le, n = ht[e]; return n || (n = q(e, t), ('none' === n || !n) && (mt = (mt || be('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement), t = (mt[0].contentWindow || mt[0].contentDocument).document, t.write(), t.close(), n = q(e, t), mt.detach()), ht[e] = n), n; }
            function O(e, t) { return { get: function () { return e() ? void delete this.get : (this.get = t).apply(this, arguments); } }; }
            function I(e) { if (e in jt)
                return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Dt.length; n--;)
                if (e = Dt[n] + t, e in jt)
                    return e; }
            function P(e, t) { for (var n, a, o, i = [], d = 0, s = e.length; d < s; d++)
                (a = e[d], !!a.style) && (i[d] = be._data(a, 'olddisplay'), n = a.style.display, t ? (!i[d] && 'none' === n && (a.style.display = ''), '' === a.style.display && ze(a) && (i[d] = be._data(a, 'olddisplay', M(a.nodeName)))) : (o = ze(a), (n && 'none' !== n || !o) && be._data(a, 'olddisplay', o ? n : be.css(a, 'display')))); for (d = 0; d < s; d++)
                (a = e[d], !!a.style) && (t && 'none' !== a.style.display && '' !== a.style.display || (a.style.display = t ? i[d] || '' : 'none')); return e; }
            function B(e, t, n) { var a = Et.exec(t); return a ? se(0, a[1] - (n || 0)) + (a[2] || 'px') : t; }
            function W(e, t, n, a, o) { for (var d = n === (a ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, i = 0; 4 > d; d += 2)
                'margin' === n && (i += be.css(e, n + Re[d], !0, o)), a ? ('content' === n && (i -= be.css(e, 'padding' + Re[d], !0, o)), 'margin' !== n && (i -= be.css(e, 'border' + Re[d] + 'Width', !0, o))) : (i += be.css(e, 'padding' + Re[d], !0, o), 'padding' !== n && (i += be.css(e, 'border' + Re[d] + 'Width', !0, o))); return i; }
            function F(e, t, n) { var a = !0, o = 'width' === t ? e.offsetWidth : e.offsetHeight, i = bt(e), d = ye.boxSizing && 'border-box' === be.css(e, 'boxSizing', !1, i); if (0 >= o || null == o) {
                if (o = vt(e, t, i), (0 > o || null == o) && (o = e.style[t]), ft.test(o))
                    return o;
                a = d && (ye.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0;
            } return o + W(e, t, n || (d ? 'border' : 'content'), a, i) + 'px'; }
            function R(e, t, n, a, o) { return new R.prototype.init(e, t, n, a, o); }
            function z() { return o.setTimeout(function () { Lt = void 0; }), Lt = be.now(); }
            function X(e, t) { var n, a = { height: e }, o = 0; for (t = t ? 1 : 0; 4 > o; o += 2 - t)
                n = Re[o], a['margin' + n] = a['padding' + n] = e; return t && (a.opacity = a.width = e), a; }
            function $(e, t, n) { for (var a, o = (V.tweeners[t] || []).concat(V.tweeners['*']), i = 0, d = o.length; i < d; i++)
                if (a = o[i].call(n, t, e))
                    return a; }
            function U(e, t, n) { var a, o, i, d, s, r, l, p, c = this, u = {}, m = e.style, h = e.nodeType && ze(e), g = be._data(e, 'fxshow'); for (a in n.queue || (s = be._queueHooks(e, 'fx'), null == s.unqueued && (s.unqueued = 0, r = s.empty.fire, s.empty.fire = function () { s.unqueued || r(); }), s.unqueued++, c.always(function () { c.always(function () { s.unqueued--, be.queue(e, 'fx').length || s.empty.fire(); }); })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [m.overflow, m.overflowX, m.overflowY], l = be.css(e, 'display'), p = 'none' === l ? be._data(e, 'olddisplay') || M(e.nodeName) : l, 'inline' === p && 'none' === be.css(e, 'float') && (ye.inlineBlockNeedsLayout && 'inline' !== M(e.nodeName) ? m.zoom = 1 : m.display = 'inline-block')), n.overflow && (m.overflow = 'hidden', !ye.shrinkWrapBlocks() && c.always(function () { m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]; })), t)
                if (o = t[a], At.exec(o)) {
                    if (delete t[a], i = i || 'toggle' === o, o === (h ? 'hide' : 'show'))
                        if ('show' === o && g && void 0 !== g[a])
                            h = !0;
                        else
                            continue;
                    u[a] = g && g[a] || be.style(e, a);
                }
                else
                    l = void 0; if (!be.isEmptyObject(u))
                for (a in g ? 'hidden' in g && (h = g.hidden) : g = be._data(e, 'fxshow', {}), i && (g.hidden = !h), h ? be(e).show() : c.done(function () { be(e).hide(); }), c.done(function () { for (var t in be._removeData(e, 'fxshow'), u)
                    be.style(e, t, u[t]); }), u)
                    d = $(h ? g[a] : 0, a, c), a in g || (g[a] = d.start, h && (d.end = d.start, d.start = 'width' === a || 'height' === a ? 1 : 0));
            else
                'inline' === ('none' === l ? M(e.nodeName) : l) && (m.display = l); }
            function G(e, t) { var n, a, o, i, d; for (n in e)
                if (a = be.camelCase(n), o = t[a], i = e[n], be.isArray(i) && (o = i[1], i = e[n] = i[0]), n != a && (e[a] = i, delete e[n]), d = be.cssHooks[a], d && 'expand' in d)
                    for (n in i = d.expand(i), delete e[a], i)
                        n in e || (e[n] = i[n], t[n] = o);
                else
                    t[a] = o; }
            function V(e, t, n) { var a, o, i = 0, d = V.prefilters.length, s = be.Deferred().always(function () { delete r.elem; }), r = function () { if (o)
                return !1; for (var t = Lt || z(), n = se(0, l.startTime + l.duration - t), a = n / l.duration || 0, i = 1 - a, d = 0, r = l.tweens.length; d < r; d++)
                l.tweens[d].run(i); return s.notifyWith(e, [l, i, n]), 1 > i && r ? n : (s.resolveWith(e, [l]), !1); }, l = s.promise({ elem: e, props: be.extend({}, t), opts: be.extend(!0, { specialEasing: {}, easing: be.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Lt || z(), duration: n.duration, tweens: [], createTween: function (t, n) { var a = be.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(a), a; }, stop: function (t) { var n = 0, a = t ? l.tweens.length : 0; if (o)
                    return this; for (o = !0; n < a; n++)
                    l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this; } }), p = l.props; for (G(p, l.opts.specialEasing); i < d; i++)
                if (a = V.prefilters[i].call(l, e, p, l.opts), a)
                    return be.isFunction(a.stop) && (be._queueHooks(l.elem, l.opts.queue).stop = be.proxy(a.stop, a)), a; return be.map(p, $, l), be.isFunction(l.opts.start) && l.opts.start.call(e, l), be.fx.timer(be.extend(r, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always); }
            function J(e) { return be.attr(e, 'class') || ''; }
            function K(e) { return function (t, n) { 'string' != typeof t && (n = t, t = '*'); var a, o = 0, i = t.toLowerCase().match(Me) || []; if (be.isFunction(n))
                for (; a = i[o++];)
                    '+' === a.charAt(0) ? (a = a.slice(1) || '*', (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n); }; }
            function Y(e, t, n, a) { function o(s) { var r; return i[s] = !0, be.each(e[s] || [], function (e, s) { var l = s(t, n, a); return 'string' != typeof l || d || i[l] ? d ? !(r = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1); }), r; } var i = {}, d = e === an; return o(t.dataTypes[0]) || !i['*'] && o('*'); }
            function Q(e, t) { var n, a, o = be.ajaxSettings.flatOptions || {}; for (a in t)
                void 0 !== t[a] && ((o[a] ? e : n || (n = {}))[a] = t[a]); return n && be.extend(!0, e, n), e; }
            function Z(e, t, n) { for (var a, o, i, d, s = e.contents, r = e.dataTypes; '*' === r[0];)
                r.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader('Content-Type')); if (o)
                for (d in s)
                    if (s[d] && s[d].test(o)) {
                        r.unshift(d);
                        break;
                    } if (r[0] in n)
                i = r[0];
            else {
                for (d in n) {
                    if (!r[0] || e.converters[d + ' ' + r[0]]) {
                        i = d;
                        break;
                    }
                    a || (a = d);
                }
                i = i || a;
            } return i ? (i !== r[0] && r.unshift(i), n[i]) : void 0; }
            function ee(e, t, n, a) { var o, i, d, s, r, l = {}, p = e.dataTypes.slice(); if (p[1])
                for (d in e.converters)
                    l[d.toLowerCase()] = e.converters[d]; for (i = p.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !r && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), r = i, i = p.shift(), i)
                    if ('*' === i)
                        i = r;
                    else if ('*' !== r && r != i) {
                        if (d = l[r + ' ' + i] || l['* ' + i], !d)
                            for (o in l)
                                if (s = o.split(' '), s[1] === i && (d = l[r + ' ' + s[0]] || l['* ' + s[0]], d)) {
                                    !0 === d ? d = l[o] : !0 !== l[o] && (i = s[0], p.unshift(s[1]));
                                    break;
                                }
                        if (!0 !== d)
                            if (d && e.throws)
                                t = d(t);
                            else
                                try {
                                    t = d(t);
                                }
                                catch (t) {
                                    return { state: 'parsererror', error: d ? t : 'No conversion from ' + r + ' to ' + i };
                                }
                    } return { state: 'success', data: t }; }
            function te(e) { return e.style && e.style.display || be.css(e, 'display'); }
            function ne(e) { if (!be.contains(e.ownerDocument || le, e))
                return !0; for (; e && 1 === e.nodeType;) {
                if ('none' === te(e) || 'hidden' === e.type)
                    return !0;
                e = e.parentNode;
            } return !1; }
            function ae(e, t, n, a) { if (be.isArray(t))
                be.each(t, function (t, o) { n || ln.test(e) ? a(e, o) : ae(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, a); });
            else if (!n && 'object' === be.type(t))
                for (var o in t)
                    ae(e + '[' + o + ']', t[o], n, a);
            else
                a(e, t); }
            function oe() { try {
                return new o.XMLHttpRequest;
            }
            catch (t) { } }
            function ie() { try {
                return new o.ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (t) { } }
            function de(e) { return be.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow); }
            var se = Math.max, re = [], le = o.document, pe = re.slice, ce = re.concat, ue = re.push, me = re.indexOf, he = {}, ge = he.toString, fe = he.hasOwnProperty, ye = {}, xe = '1.12.4', be = function (e, t) { return new be.fn.init(e, t); }, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Ce = /^-ms-/, Te = /-([\da-z])/gi, we = function (e, t) { return t.toUpperCase(); };
            be.fn = be.prototype = { jquery: xe, constructor: be, selector: '', length: 0, toArray: function () { return pe.call(this); }, get: function (e) { return null == e ? pe.call(this) : 0 > e ? this[e + this.length] : this[e]; }, pushStack: function (e) { var t = be.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t; }, each: function (e) { return be.each(this, e); }, map: function (e) { return this.pushStack(be.map(this, function (t, n) { return e.call(t, n, t); })); }, slice: function () { return this.pushStack(pe.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: ue, sort: re.sort, splice: re.splice }, be.extend = be.fn.extend = function () { var e, t, n, a, o, d, s = arguments[0] || {}, r = 1, i = arguments.length, l = !1; for ('boolean' == typeof s && (l = s, s = arguments[r] || {}, r++), 'object' == typeof s || be.isFunction(s) || (s = {}), r === i && (s = this, r--); r < i; r++)
                if (null != (o = arguments[r]))
                    for (a in o)
                        (e = s[a], n = o[a], s !== n) && (l && n && (be.isPlainObject(n) || (t = be.isArray(n))) ? (t ? (t = !1, d = e && be.isArray(e) ? e : []) : d = e && be.isPlainObject(e) ? e : {}, s[a] = be.extend(l, d, n)) : void 0 !== n && (s[a] = n)); return s; }, be.extend({ expando: 'jQuery' + (xe + Math.random()).replace(/\D/g, ''), isReady: !0, error: function (e) { throw new Error(e); }, noop: function () { }, isFunction: function (e) { return 'function' === be.type(e); }, isArray: Array.isArray || function (e) { return 'array' === be.type(e); }, isWindow: function (e) { return null != e && e == e.window; }, isNumeric: function (e) { var t = e && e.toString(); return !be.isArray(e) && 0 <= t - parseFloat(t) + 1; }, isEmptyObject: function (e) { for (var t in e)
                    return !1; return !0; }, isPlainObject: function (e) { if (!e || 'object' !== be.type(e) || e.nodeType || be.isWindow(e))
                    return !1; try {
                    if (e.constructor && !fe.call(e, 'constructor') && !fe.call(e.constructor.prototype, 'isPrototypeOf'))
                        return !1;
                }
                catch (t) {
                    return !1;
                } if (!ye.ownFirst)
                    for (var t in e)
                        return fe.call(e, t); for (t in e)
                    ; return void 0 == t || fe.call(e, t); }, type: function (e) { return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? he[ge.call(e)] || 'object' : typeof e; }, globalEval: function (e) { e && be.trim(e) && (o.execScript || function (e) { o.eval.call(o, e); })(e); }, camelCase: function (e) { return e.replace(Ce, 'ms-').replace(Te, we); }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(); }, each: function (e, t) { var n, a = 0; if (s(e))
                    for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++)
                        ;
                else
                    for (a in e)
                        if (!1 === t.call(e[a], a, e[a]))
                            break; return e; }, trim: function (e) { return null == e ? '' : (e + '').replace(ve, ''); }, makeArray: function (e, t) { var n = t || []; return null != e && (s(Object(e)) ? be.merge(n, 'string' == typeof e ? [e] : e) : ue.call(n, e)), n; }, inArray: function (e, t, n) { var a; if (t) {
                    if (me)
                        return me.call(t, e, n);
                    for (a = t.length, n = n ? 0 > n ? se(0, a + n) : n : 0; n < a; n++)
                        if (n in t && t[n] === e)
                            return n;
                } return -1; }, merge: function (e, t) { for (var n = +t.length, a = 0, o = e.length; a < n;)
                    e[o++] = t[a++]; if (n != n)
                    for (; void 0 !== t[a];)
                        e[o++] = t[a++]; return e.length = o, e; }, grep: function (e, t, n) { for (var a, o = [], d = 0, i = e.length; d < i; d++)
                    a = !t(e[d], d), a !== !n && o.push(e[d]); return o; }, map: function (e, t, n) { var a, o, d = 0, i = []; if (s(e))
                    for (a = e.length; d < a; d++)
                        o = t(e[d], d, n), null != o && i.push(o);
                else
                    for (d in e)
                        o = t(e[d], d, n), null != o && i.push(o); return ce.apply([], i); }, guid: 1, proxy: function (e, t) { var n, a, o; if ('string' == typeof t && (o = e[t], t = e, e = o), !!be.isFunction(e))
                    return n = pe.call(arguments, 2), a = function () { return e.apply(t || this, n.concat(pe.call(arguments))); }, a.guid = e.guid = e.guid || be.guid++, a; }, now: function () { return +new Date; }, support: ye }), 'function' == typeof Symbol && (be.fn[Symbol.iterator] = re[Symbol.iterator]), be.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function (e, t) { he['[object ' + t + ']'] = t.toLowerCase(); });
            var Ne = /*!
            * Sizzle CSS Selector Engine v2.2.1
            * http://sizzlejs.com/
            *
            * Copyright jQuery Foundation and other contributors
            * Released under the MIT license
            * http://jquery.org/license
            *
            * Date: 2015-10-17
            */ function (e) { function t(e, t, n, a) { var o, d, i, s, r, l, p, u, h = t && t.ownerDocument, g = t ? t.nodeType : 9; if (n = n || [], 'string' != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n; if (!a && ((t ? t.ownerDocument || t : W) !== H && A(t), t = t || H, q)) {
                if (11 !== g && (l = ge.exec(e)))
                    if (!(o = l[1])) {
                        if (l[2])
                            return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && T.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(o)), n;
                    }
                    else if (9 === g) {
                        if (!(i = t.getElementById(o)))
                            return n;
                        if (i.id === o)
                            return n.push(i), n;
                    }
                    else if (h && (i = h.getElementById(o)) && P(t, i) && i.id === o)
                        return n.push(i), n;
                if (T.qsa && !$[e + ' '] && (!M || !M.test(e))) {
                    if (1 !== g)
                        h = t, u = e;
                    else if ('object' !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute('id')) ? s = s.replace(ye, '\\$&') : t.setAttribute('id', s = B), p = E(e), d = p.length, r = pe.test(s) ? '#' + s : '[id=\'' + s + '\']'; d--;)
                            p[d] = r + ' ' + m(p[d]);
                        u = p.join(','), h = fe.test(e) && c(t.parentNode) || t;
                    }
                    if (u)
                        try {
                            return Q.apply(n, h.querySelectorAll(u)), n;
                        }
                        catch (e) { }
                        finally {
                            s === B && t.removeAttribute('id');
                        }
                }
            } return S(e.replace(ie, '$1'), t, n, a); } function n() { function e(n, a) { return t.push(n + ' ') > w.cacheLength && delete e[t.shift()], e[n + ' '] = a; } var t = []; return e; } function a(e) { return e[B] = !0, e; } function o(e) { var t = H.createElement('div'); try {
                return !!e(t);
            }
            catch (t) {
                return !1;
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            } } function d(e, t) { for (var n = e.split('|'), a = n.length; a--;)
                w.attrHandle[n[a]] = t; } function s(e, t) { var n = t && e, a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G); if (a)
                return a; if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1; return e ? 1 : -1; } function r(e) { return function (t) { var n = t.nodeName.toLowerCase(); return 'input' === n && t.type === e; }; } function l(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ('input' === n || 'button' === n) && t.type === e; }; } function p(e) { return a(function (t) { return t = +t, a(function (n, a) { for (var o, d = e([], n.length, t), s = d.length; s--;)
                n[o = d[s]] && (n[o] = !(a[o] = n[o])); }); }); } function c(e) { return e && 'undefined' != typeof e.getElementsByTagName && e; } function u() { } function m(e) { for (var t = 0, n = e.length, a = ''; t < n; t++)
                a += e[t].value; return a; } function h(e, t, n) { var a = t.dir, o = n && 'parentNode' === a, i = R++; return t.first ? function (t, n, i) { for (; t = t[a];)
                if (1 === t.nodeType || o)
                    return e(t, n, i); } : function (t, n, d) { var s, r, l, p = [F, i]; if (d) {
                for (; t = t[a];)
                    if ((1 === t.nodeType || o) && e(t, n, d))
                        return !0;
            }
            else
                for (; t = t[a];)
                    if (1 === t.nodeType || o) {
                        if (l = t[B] || (t[B] = {}), r = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = r[a]) && s[0] === F && s[1] === i)
                            return p[2] = s[2];
                        if (r[a] = p, p[2] = e(t, n, d))
                            return !0;
                    } }; } function g(e) { return 1 < e.length ? function (t, n, a) { for (var o = e.length; o--;)
                if (!e[o](t, n, a))
                    return !1; return !0; } : e[0]; } function f(e, n, a) { for (var o = 0, i = n.length; o < i; o++)
                t(e, n[o], a); return a; } function y(e, t, n, a, o) { for (var d, s = [], r = 0, i = e.length; r < i; r++)
                (d = e[r]) && (!n || n(d, a, o)) && (s.push(d), null != t && t.push(r)); return s; } function x(e, t, n, o, d, i) { return o && !o[B] && (o = x(o)), d && !d[B] && (d = x(d, i)), a(function (a, s, r, l) { var p, c, i, u = [], m = [], h = s.length, g = a || f(t || '*', r.nodeType ? [r] : r, []), x = e && (a || !t) ? y(g, u, e, r, l) : g, b = n ? d || (a ? e : h || o) ? [] : s : x; if (n && n(x, b, r, l), o)
                for (p = y(b, m), o(p, [], r, l), c = p.length; c--;)
                    (i = p[c]) && (b[m[c]] = !(x[m[c]] = i)); if (!a)
                b = y(b === s ? b.splice(h, b.length) : b), d ? d(null, s, b, l) : Q.apply(s, b);
            else if (d || e) {
                if (d) {
                    for (p = [], c = b.length; c--;)
                        (i = b[c]) && p.push(x[c] = i);
                    d(null, b = [], p, l);
                }
                for (c = b.length; c--;)
                    (i = b[c]) && -1 < (p = d ? ee(a, i) : u[c]) && (a[p] = !(s[p] = i));
            } }); } function b(e) { for (var t, n, a, o = e.length, d = w.relative[e[0].type], s = d || w.relative[' '], r = d ? 1 : 0, i = h(function (e) { return e === t; }, s, !0), l = h(function (e) { return -1 < ee(t, e); }, s, !0), p = [function (e, n, a) { var o = !d && (a || n !== D) || ((t = n).nodeType ? i(e, n, a) : l(e, n, a)); return t = null, o; }]; r < o; r++)
                if (n = w.relative[e[r].type])
                    p = [h(g(p), n)];
                else {
                    if (n = w.filter[e[r].type].apply(null, e[r].matches), n[B]) {
                        for (a = ++r; a < o && !w.relative[e[a].type]; a++)
                            ;
                        return x(1 < r && g(p), 1 < r && m(e.slice(0, r - 1).concat({ value: ' ' === e[r - 2].type ? '*' : '' })).replace(ie, '$1'), n, r < a && b(e.slice(r, a)), a < o && b(e = e.slice(a)), a < o && m(e));
                    }
                    p.push(n);
                } return g(p); } function v(e, n) { var o = 0 < n.length, d = 0 < e.length, i = function (a, s, r, l, p) { var c, u, m, h = 0, g = '0', i = a && [], f = [], x = D, b = a || d && w.find.TAG('*', p), v = F += null == x ? 1 : Math.random() || .1, C = b.length; for (p && (D = s === H || s || p); g !== C && null != (c = b[g]); g++) {
                if (d && c) {
                    for (u = 0, s || c.ownerDocument === H || (A(c), r = !q); m = e[u++];)
                        if (m(c, s || H, r)) {
                            l.push(c);
                            break;
                        }
                    p && (F = v);
                }
                o && ((c = !m && c) && h--, a && i.push(c));
            } if (h += g, o && g !== h) {
                for (u = 0; m = n[u++];)
                    m(i, f, s, r);
                if (a) {
                    if (0 < h)
                        for (; g--;)
                            i[g] || f[g] || (f[g] = K.call(l));
                    f = y(f);
                }
                Q.apply(l, f), p && !a && 0 < f.length && 1 < h + n.length && t.uniqueSort(l);
            } return p && (F = v, D = x), i; }; return o ? a(i) : i; } var C, T, w, N, i, E, k, S, D, L, _, A, H, j, q, M, O, I, P, B = 'sizzle' + 1 * new Date, W = e.document, F = 0, R = 0, z = n(), X = n(), $ = n(), U = function (e, t) { return e === t && (_ = !0), 0; }, G = -2147483648, V = {}.hasOwnProperty, J = [], K = J.pop, Y = J.push, Q = J.push, Z = J.slice, ee = function (e, t) { for (var n = 0, a = e.length; n < a; n++)
                if (e[n] === t)
                    return n; return -1; }, te = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ne = '[\\x20\\t\\r\\n\\f]', ae = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', oe = /[\x20\t\r\n\f]+/g, ie = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, de = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, se = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, re = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, le = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, pe = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, ce = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i }, ue = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, fe = /[+~]/, ye = /'|\\/g, xe = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, be = function (e, t, n) { var a = String.fromCharCode, o = '0x' + t - 65536; return o != o || n ? t : 0 > o ? a(o + 65536) : a(55296 | o >> 10, 56320 | 1023 & o); }, ve = function () { A(); }; try {
                Q.apply(J = Z.call(W.childNodes), W.childNodes), J[W.childNodes.length].nodeType;
            }
            catch (t) {
                Q = { apply: J.length ? function (e, t) { Y.apply(e, Z.call(t)); } : function (e, t) { for (var n = e.length, a = 0; e[n++] = t[a++];)
                        ; e.length = n - 1; } };
            } for (C in T = t.support = {}, i = t.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && 'HTML' !== t.nodeName; }, A = t.setDocument = function (e) { var t, n, a = e ? e.ownerDocument || e : W; return a !== H && 9 === a.nodeType && a.documentElement ? (H = a, j = H.documentElement, q = !i(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', ve, !1) : n.attachEvent && n.attachEvent('onunload', ve)), T.attributes = o(function (e) { return e.className = 'i', !e.getAttribute('className'); }), T.getElementsByTagName = o(function (e) { return e.appendChild(H.createComment('')), !e.getElementsByTagName('*').length; }), T.getElementsByClassName = he.test(H.getElementsByClassName), T.getById = o(function (e) { return j.appendChild(e).id = B, !H.getElementsByName || !H.getElementsByName(B).length; }), T.getById ? (w.find.ID = function (e, t) { if ('undefined' != typeof t.getElementById && q) {
                var n = t.getElementById(e);
                return n ? [n] : [];
            } }, w.filter.ID = function (e) { var t = e.replace(xe, be); return function (e) { return e.getAttribute('id') === t; }; }) : (delete w.find.ID, w.filter.ID = function (e) { var t = e.replace(xe, be); return function (e) { var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id'); return n && n.value === t; }; }), w.find.TAG = T.getElementsByTagName ? function (e, t) { return 'undefined' == typeof t.getElementsByTagName ? T.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e); } : function (e, t) { var n, a = [], o = 0, i = t.getElementsByTagName(e); if ('*' === e) {
                for (; n = i[o++];)
                    1 === n.nodeType && a.push(n);
                return a;
            } return i; }, w.find.CLASS = T.getElementsByClassName && function (e, t) { if ('undefined' != typeof t.getElementsByClassName && q)
                return t.getElementsByClassName(e); }, O = [], M = [], (T.qsa = he.test(H.querySelectorAll)) && (o(function (e) { j.appendChild(e).innerHTML = '<a id=\'' + B + '\'></a><select id=\'' + B + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && M.push('[*^$]=' + ne + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || M.push('\\[' + ne + '*(?:value|' + te + ')'), e.querySelectorAll('[id~=' + B + '-]').length || M.push('~='), e.querySelectorAll(':checked').length || M.push(':checked'), e.querySelectorAll('a#' + B + '+*').length || M.push('.#.+[+~]'); }), o(function (e) { var t = H.createElement('input'); t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && M.push('name' + ne + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || M.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), M.push(',.*:'); })), (T.matchesSelector = he.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (e) { T.disconnectedMatch = I.call(e, 'div'), I.call(e, '[s!=\'\']:x'), O.push('!=', ':(' + ae + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + ne + '*(' + ae + ')(?:' + ne + '*([*^$|!~]?=)' + ne + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ae + '))|)' + ne + '*\\]') + ')*)|.*)\\)|)'); }), M = M.length && new RegExp(M.join('|')), O = O.length && new RegExp(O.join('|')), t = he.test(j.compareDocumentPosition), P = t || he.test(j.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode; return e === a || !!(a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))); } : function (e, t) { if (t)
                for (; t = t.parentNode;)
                    if (t === e)
                        return !0; return !1; }, U = t ? function (e, t) { if (e === t)
                return _ = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === W && P(W, e) ? -1 : t === H || t.ownerDocument === W && P(W, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1); } : function (e, t) { if (e === t)
                return _ = !0, 0; var n, a = 0, o = e.parentNode, i = t.parentNode, d = [e], r = [t]; if (!o || !i)
                return e === H ? -1 : t === H ? 1 : o ? -1 : i ? 1 : L ? ee(L, e) - ee(L, t) : 0; if (o === i)
                return s(e, t); for (n = e; n = n.parentNode;)
                d.unshift(n); for (n = t; n = n.parentNode;)
                r.unshift(n); for (; d[a] === r[a];)
                a++; return a ? s(d[a], r[a]) : d[a] === W ? -1 : r[a] === W ? 1 : 0; }, H) : H; }, t.matches = function (e, n) { return t(e, null, null, n); }, t.matchesSelector = function (e, n) { if ((e.ownerDocument || e) !== H && A(e), n = n.replace(re, '=\'$1\']'), T.matchesSelector && q && !$[n + ' '] && (!O || !O.test(n)) && (!M || !M.test(n)))
                try {
                    var a = I.call(e, n);
                    if (a || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return a;
                }
                catch (t) { } return 0 < t(n, H, null, [e]).length; }, t.contains = function (e, t) { return (e.ownerDocument || e) !== H && A(e), P(e, t); }, t.attr = function (e, t) { (e.ownerDocument || e) !== H && A(e); var n = w.attrHandle[t.toLowerCase()], a = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0; return void 0 === a ? T.attributes || !q ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a; }, t.error = function (e) { throw new Error('Syntax error, unrecognized expression: ' + e); }, t.uniqueSort = function (e) { var t, n = [], a = 0, o = 0; if (_ = !T.detectDuplicates, L = !T.sortStable && e.slice(0), e.sort(U), _) {
                for (; t = e[o++];)
                    t === e[o] && (a = n.push(o));
                for (; a--;)
                    e.splice(n[a], 1);
            } return L = null, e; }, N = t.getText = function (e) { var t, n = '', a = 0, o = e.nodeType; if (!o)
                for (; t = e[a++];)
                    n += N(t);
            else if (1 === o || 9 === o || 11 === o) {
                if ('string' == typeof e.textContent)
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += N(e);
            }
            else if (3 === o || 4 === o)
                return e.nodeValue; return n; }, w = t.selectors = { cacheLength: 50, createPseudo: a, match: ce, attrHandle: {}, find: {}, relative: { ">": { dir: 'parentNode', first: !0 }, " ": { dir: 'parentNode' }, "+": { dir: 'previousSibling', first: !0 }, "~": { dir: 'previousSibling' } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || '').replace(xe, be), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4); }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e; }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)); } }, filter: { TAG: function (e) { var t = e.replace(xe, be).toLowerCase(); return '*' === e ? function () { return !0; } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t; }; }, CLASS: function (e) { var t = z[e + ' ']; return t || (t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) && z(e, function (e) { return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || ''); }); }, ATTR: function (e, n, a) { return function (o) { var i = t.attr(o, e); return null == i ? '!=' === n : !n || (i += '', '=' === n ? i === a : '!=' === n ? i !== a : '^=' === n ? a && 0 === i.indexOf(a) : '*=' === n ? a && -1 < i.indexOf(a) : '$=' === n ? a && i.slice(-a.length) === a : '~=' === n ? -1 < (' ' + i.replace(oe, ' ') + ' ').indexOf(a) : '|=' == n && (i === a || i.slice(0, a.length + 1) === a + '-')); }; }, CHILD: function (e, t, n, a, o) { var i = 'nth' !== e.slice(0, 3), d = 'last' !== e.slice(-4), s = 'of-type' === t; return 1 === a && 0 === o ? function (e) { return !!e.parentNode; } : function (t, n, r) { var l, p, c, u, m, h, g = i == d ? 'previousSibling' : 'nextSibling', f = t.parentNode, y = s && t.nodeName.toLowerCase(), x = !r && !s, b = !1; if (f) {
                        if (i) {
                            for (; g;) {
                                for (u = t; u = u[g];)
                                    if (s ? u.nodeName.toLowerCase() === y : 1 === u.nodeType)
                                        return !1;
                                h = g = 'only' === e && !h && 'nextSibling';
                            }
                            return !0;
                        }
                        if (h = [d ? f.firstChild : f.lastChild], d && x) {
                            for (u = f, c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), l = p[e] || [], m = l[0] === F && l[1], b = m && l[2], u = m && f.childNodes[m]; u = ++m && u && u[g] || (b = m = 0) || h.pop();)
                                if (1 === u.nodeType && ++b && u === t) {
                                    p[e] = [F, m, b];
                                    break;
                                }
                        }
                        else if (x && (u = t, c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), l = p[e] || [], m = l[0] === F && l[1], b = m), !1 === b)
                            for (; (u = ++m && u && u[g] || (b = m = 0) || h.pop()) && !((s ? u.nodeName.toLowerCase() === y : 1 === u.nodeType) && ++b && (x && (c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), p[e] = [F, b]), u === t));)
                                ;
                        return b -= o, b === a || 0 == b % a && 0 <= b / a;
                    } }; }, PSEUDO: function (e, n) { var o, d = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e); return d[B] ? d(n) : 1 < d.length ? (o = [e, e, '', n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) { for (var a, o = d(e, n), s = o.length; s--;)
                        a = ee(e, o[s]), e[a] = !(t[a] = o[s]); }) : function (e) { return d(e, 0, o); }) : d; } }, pseudos: { not: a(function (e) { var t = [], n = [], o = k(e.replace(ie, '$1')); return o[B] ? a(function (e, t, n, a) { for (var d, s = o(e, null, a, []), r = e.length; r--;)
                        (d = s[r]) && (e[r] = !(t[r] = d)); }) : function (e, a, i) { return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop(); }; }), has: a(function (e) { return function (n) { return 0 < t(e, n).length; }; }), contains: a(function (e) { return e = e.replace(xe, be), function (t) { return -1 < (t.textContent || t.innerText || N(t)).indexOf(e); }; }), lang: a(function (e) { return pe.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(xe, be).toLowerCase(), function (t) { var n; do
                        if (n = q ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
                    while ((t = t.parentNode) && 1 === t.nodeType); return !1; }; }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id; }, root: function (e) { return e === j; }, focus: function (e) { return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex); }, enabled: function (e) { return !1 === e.disabled; }, disabled: function (e) { return !0 === e.disabled; }, checked: function (e) { var t = e.nodeName.toLowerCase(); return 'input' === t && !!e.checked || 'option' === t && !!e.selected; }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected; }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (6 > e.nodeType)
                            return !1; return !0; }, parent: function (e) { return !w.pseudos.empty(e); }, header: function (e) { return me.test(e.nodeName); }, input: function (e) { return ue.test(e.nodeName); }, button: function (e) { var t = e.nodeName.toLowerCase(); return 'input' === t && 'button' === e.type || 'button' === t; }, text: function (e) { var t; return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase()); }, first: p(function () { return [0]; }), last: p(function (e, t) { return [t - 1]; }), eq: p(function (e, t, n) { return [0 > n ? n + t : n]; }), even: p(function (e, t) { for (var n = 0; n < t; n += 2)
                        e.push(n); return e; }), odd: p(function (e, t) { for (var n = 1; n < t; n += 2)
                        e.push(n); return e; }), lt: p(function (e, t, n) { for (var a = 0 > n ? n + t : n; 0 <= --a;)
                        e.push(a); return e; }), gt: p(function (e, t, n) { for (var a = 0 > n ? n + t : n; ++a < t;)
                        e.push(a); return e; }) } }, w.pseudos.nth = w.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                w.pseudos[C] = r(C); for (C in { submit: !0, reset: !0 })
                w.pseudos[C] = l(C); return u.prototype = w.filters = w.pseudos, w.setFilters = new u, E = t.tokenize = function (e, n) { var a, o, i, d, s, r, l, p = X[e + ' ']; if (p)
                return n ? 0 : p.slice(0); for (s = e, r = [], l = w.preFilter; s;) {
                for (d in (!a || (o = de.exec(s))) && (o && (s = s.slice(o[0].length) || s), r.push(i = [])), a = !1, (o = se.exec(s)) && (a = o.shift(), i.push({ value: a, type: o[0].replace(ie, ' ') }), s = s.slice(a.length)), w.filter)
                    (o = ce[d].exec(s)) && (!l[d] || (o = l[d](o))) && (a = o.shift(), i.push({ value: a, type: d, matches: o }), s = s.slice(a.length));
                if (!a)
                    break;
            } return n ? s.length : s ? t.error(e) : X(e, r).slice(0); }, k = t.compile = function (e, t) { var n, a = [], o = [], i = $[e + ' ']; if (!i) {
                for (t || (t = E(e)), n = t.length; n--;)
                    i = b(t[n]), i[B] ? a.push(i) : o.push(i);
                i = $(e, v(o, a)), i.selector = e;
            } return i; }, S = t.select = function (e, t, n, a) { var o, i, d, s, r, l = 'function' == typeof e && e, p = !a && E(e = l.selector || e); if (n = n || [], 1 === p.length) {
                if (i = p[0] = p[0].slice(0), 2 < i.length && 'ID' === (d = i[0]).type && T.getById && 9 === t.nodeType && q && w.relative[i[1].type]) {
                    if (t = (w.find.ID(d.matches[0].replace(xe, be), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length);
                }
                for (o = ce.needsContext.test(e) ? 0 : i.length; o-- && (d = i[o], !w.relative[s = d.type]);)
                    if ((r = w.find[s]) && (a = r(d.matches[0].replace(xe, be), fe.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = a.length && m(i), !e)
                            return Q.apply(n, a), n;
                        break;
                    }
            } return (l || k(e, p))(a, t, !q, n, !t || fe.test(e) && c(t.parentNode) || t), n; }, T.sortStable = B.split('').sort(U).join('') === B, T.detectDuplicates = !!_, A(), T.sortDetached = o(function (e) { return 1 & e.compareDocumentPosition(H.createElement('div')); }), o(function (e) { return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href'); }) || d('type|href|height|width', function (e, t, n) { if (!n)
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2); }), T.attributes && o(function (e) { return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value'); }) || d('value', function (e, t, n) { if (!n && 'input' === e.nodeName.toLowerCase())
                return e.defaultValue; }), o(function (e) { return null == e.getAttribute('disabled'); }) || d(te, function (e, t, n) { var a; if (!n)
                return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null; }), t; }(o);
            be.find = Ne, be.expr = Ne.selectors, be.expr[':'] = be.expr.pseudos, be.uniqueSort = be.unique = Ne.uniqueSort, be.text = Ne.getText, be.isXMLDoc = Ne.isXML, be.contains = Ne.contains;
            var Ee = function (e, t, n) { for (var a = []; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (void 0 !== n && be(e).is(n))
                        break;
                    a.push(e);
                } return a; }, ke = function (e, t) { for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e); return n; }, Se = be.expr.match.needsContext, De = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, je = /^.[^:#\[\.,]*$/;
            be.filter = function (e, t, n) { var a = t[0]; return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === a.nodeType ? be.find.matchesSelector(a, e) ? [a] : [] : be.find.matches(e, be.grep(t, function (e) { return 1 === e.nodeType; })); }, be.fn.extend({ find: function (e) { var t, n = [], a = this, o = a.length; if ('string' != typeof e)
                    return this.pushStack(be(e).filter(function () { for (t = 0; t < o; t++)
                        if (be.contains(a[t], this))
                            return !0; })); for (t = 0; t < o; t++)
                    be.find(e, a[t], n); return n = this.pushStack(1 < o ? be.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n; }, filter: function (e) { return this.pushStack(r(this, e || [], !1)); }, not: function (e) { return this.pushStack(r(this, e || [], !0)); }, is: function (e) { return !!r(this, 'string' == typeof e && Se.test(e) ? be(e) : e || [], !1).length; } });
            var Le, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Ae = be.fn.init = function (e, t, n) { var a, o; if (!e)
                return this; if (n = n || Le, 'string' == typeof e) {
                if (a = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : _e.exec(e), a && (a[1] || !t)) {
                    if (a[1]) {
                        if (t = t instanceof be ? t[0] : t, be.merge(this, be.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : le, !0)), De.test(a[1]) && be.isPlainObject(t))
                            for (a in t)
                                be.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                        return this;
                    }
                    if (o = le.getElementById(a[2]), o && o.parentNode) {
                        if (o.id !== a[2])
                            return Le.find(e);
                        this.length = 1, this[0] = o;
                    }
                    return this.context = le, this.selector = e, this;
                }
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : be.isFunction(e) ? 'undefined' == typeof n.ready ? e(be) : n.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), be.makeArray(e, this)); };
            Ae.prototype = be.fn, Le = be(le);
            var He = /^(?:parents|prev(?:Until|All))/, qe = { children: !0, contents: !0, next: !0, prev: !0 };
            be.fn.extend({ has: function (e) { var t, n = be(e, this), a = n.length; return this.filter(function () { for (t = 0; t < a; t++)
                    if (be.contains(this, n[t]))
                        return !0; }); }, closest: function (e, t) { for (var n, a = 0, o = this.length, i = [], d = Se.test(e) || 'string' != typeof e ? be(e, t || this.context) : 0; a < o; a++)
                    for (n = this[a]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (d ? -1 < d.index(n) : 1 === n.nodeType && be.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        } return this.pushStack(1 < i.length ? be.uniqueSort(i) : i); }, index: function (e) { return e ? 'string' == typeof e ? be.inArray(this[0], be(e)) : be.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (e, t) { return this.pushStack(be.uniqueSort(be.merge(this.get(), be(e, t)))); }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)); } }), be.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null; }, parents: function (e) { return Ee(e, 'parentNode'); }, parentsUntil: function (e, t, n) { return Ee(e, 'parentNode', n); }, next: function (e) { return l(e, 'nextSibling'); }, prev: function (e) { return l(e, 'previousSibling'); }, nextAll: function (e) { return Ee(e, 'nextSibling'); }, prevAll: function (e) { return Ee(e, 'previousSibling'); }, nextUntil: function (e, t, n) { return Ee(e, 'nextSibling', n); }, prevUntil: function (e, t, n) { return Ee(e, 'previousSibling', n); }, siblings: function (e) { return ke((e.parentNode || {}).firstChild, e); }, children: function (e) { return ke(e.firstChild); }, contents: function (e) { return be.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : be.merge([], e.childNodes); } }, function (e, t) { be.fn[e] = function (n, a) { var o = be.map(this, t, n); return 'Until' !== e.slice(-5) && (a = n), a && 'string' == typeof a && (o = be.filter(a, o)), 1 < this.length && (!qe[e] && (o = be.uniqueSort(o)), He.test(e) && (o = o.reverse())), this.pushStack(o); }; });
            var Me = /\S+/g;
            be.Callbacks = function (e) { e = 'string' == typeof e ? p(e) : be.extend({}, e); var t, n, a, o, i = [], d = [], s = -1, r = function () { for (o = e.once, a = t = !0; d.length; s = -1)
                for (n = d.shift(); ++s < i.length;)
                    !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1); e.memory || (n = !1), t = !1, o && (n ? i = [] : i = ''); }, l = { add: function () { return i && (n && !t && (s = i.length - 1, d.push(n)), function t(n) { be.each(n, function (n, a) { be.isFunction(a) ? (!e.unique || !l.has(a)) && i.push(a) : a && a.length && 'string' !== be.type(a) && t(a); }); }(arguments), n && !t && r()), this; }, remove: function () { return be.each(arguments, function (e, t) { for (var n; -1 < (n = be.inArray(t, i, n));)
                    i.splice(n, 1), n <= s && s--; }), this; }, has: function (e) { return e ? -1 < be.inArray(e, i) : 0 < i.length; }, empty: function () { return i && (i = []), this; }, disable: function () { return o = d = [], i = n = '', this; }, disabled: function () { return !i; }, lock: function () { return o = !0, n || l.disable(), this; }, locked: function () { return !!o; }, fireWith: function (e, n) { return o || (n = n || [], n = [e, n.slice ? n.slice() : n], d.push(n), !t && r()), this; }, fire: function () { return l.fireWith(this, arguments), this; }, fired: function () { return !!a; } }; return l; }, be.extend({ Deferred: function (e) { var t = [['resolve', 'done', be.Callbacks('once memory'), 'resolved'], ['reject', 'fail', be.Callbacks('once memory'), 'rejected'], ['notify', 'progress', be.Callbacks('memory')]], n = 'pending', a = { state: function () { return n; }, always: function () { return o.done(arguments).fail(arguments), this; }, then: function () { var e = arguments; return be.Deferred(function (n) { be.each(t, function (t, i) { var d = be.isFunction(e[t]) && e[t]; o[i[1]](function () { var e = d && d.apply(this, arguments); e && be.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + 'With'](this === a ? n.promise() : this, d ? [e] : arguments); }); }), e = null; }).promise(); }, promise: function (e) { return null == e ? a : be.extend(e, a); } }, o = {}; return a.pipe = a.then, be.each(t, function (e, i) { var d = i[2], s = i[3]; a[i[1]] = d.add, s && d.add(function () { n = s; }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () { return o[i[0] + 'With'](this === o ? a : this, arguments), this; }, o[i[0] + 'With'] = d.fireWith; }), a.promise(o), e && e.call(o, o), o; }, when: function (e) { var t, n, a, o = 0, i = pe.call(arguments), d = i.length, s = 1 !== d || e && be.isFunction(e.promise) ? d : 0, r = 1 === s ? e : be.Deferred(), l = function (e, n, a) { return function (o) { n[e] = this, a[e] = 1 < arguments.length ? pe.call(arguments) : o, a === t ? r.notifyWith(n, a) : !--s && r.resolveWith(n, a); }; }; if (1 < d)
                    for (t = Array(d), n = Array(d), a = Array(d); o < d; o++)
                        i[o] && be.isFunction(i[o].promise) ? i[o].promise().progress(l(o, n, t)).done(l(o, a, i)).fail(r.reject) : --s; return s || r.resolveWith(a, i), r.promise(); } });
            var Oe;
            be.fn.ready = function (e) { return be.ready.promise().done(e), this; }, be.extend({ isReady: !1, readyWait: 1, holdReady: function (e) { e ? be.readyWait++ : be.ready(!0); }, ready: function (e) { (!0 === e ? !--be.readyWait : !be.isReady) && (be.isReady = !0, !0 !== e && 0 < --be.readyWait || (Oe.resolveWith(le, [be]), be.fn.triggerHandler && (be(le).triggerHandler('ready'), be(le).off('ready')))); } }), be.ready.promise = function (e) { if (!Oe)
                if (Oe = be.Deferred(), 'complete' === le.readyState || 'loading' !== le.readyState && !le.documentElement.doScroll)
                    o.setTimeout(be.ready);
                else if (le.addEventListener)
                    le.addEventListener('DOMContentLoaded', u), o.addEventListener('load', u);
                else {
                    le.attachEvent('onreadystatechange', u), o.attachEvent('onload', u);
                    var t = !1;
                    try {
                        t = null == o.frameElement && le.documentElement;
                    }
                    catch (t) { }
                    t && t.doScroll && function e() { if (!be.isReady) {
                        try {
                            t.doScroll('left');
                        }
                        catch (t) {
                            return o.setTimeout(e, 50);
                        }
                        c(), be.ready();
                    } }();
                } return Oe.promise(e); }, be.ready.promise();
            for (var Ie in be(ye))
                break;
            ye.ownFirst = '0' === Ie, ye.inlineBlockNeedsLayout = !1, be(function () { var e, t, n, a; n = le.getElementsByTagName('body')[0], n && n.style && (t = le.createElement('div'), a = le.createElement('div'), a.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(a).appendChild(t), 'undefined' != typeof t.style.zoom && (t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', ye.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(a)); }), function () { var e = le.createElement('div'); ye.deleteExpando = !0; try {
                delete e.test;
            }
            catch (t) {
                ye.deleteExpando = !1;
            } e = null; }();
            var Pe = function (e) { var t = be.noData[(e.nodeName + ' ').toLowerCase()], n = +e.nodeType || 1; return (1 == n || 9 == n) && (!t || !0 !== t && e.getAttribute('classid') === t); }, i = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Be = /([A-Z])/g;
            be.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' }, hasData: function (e) { return e = e.nodeType ? be.cache[e[be.expando]] : e[be.expando], !!e && !h(e); }, data: function (e, t, n) { return g(e, t, n); }, removeData: function (e, t) { return f(e, t); }, _data: function (e, t, n) { return g(e, t, n, !0); }, _removeData: function (e, t) { return f(e, t, !0); } }), be.fn.extend({ data: function (e, t) { var n, a, o, i = this[0], d = i && i.attributes; if (void 0 === e) {
                    if (this.length && (o = be.data(i), 1 === i.nodeType && !be._data(i, 'parsedAttrs'))) {
                        for (n = d.length; n--;)
                            d[n] && (a = d[n].name, 0 === a.indexOf('data-') && (a = be.camelCase(a.slice(5)), m(i, a, o[a])));
                        be._data(i, 'parsedAttrs', !0);
                    }
                    return o;
                } return 'object' == typeof e ? this.each(function () { be.data(this, e); }) : 1 < arguments.length ? this.each(function () { be.data(this, e, t); }) : i ? m(i, e, be.data(i, e)) : void 0; }, removeData: function (e) { return this.each(function () { be.removeData(this, e); }); } }), be.extend({ queue: function (e, t, n) { var a; if (e)
                    return t = (t || 'fx') + 'queue', a = be._data(e, t), n && (!a || be.isArray(n) ? a = be._data(e, t, be.makeArray(n)) : a.push(n)), a || []; }, dequeue: function (e, t) { t = t || 'fx'; var n = be.queue(e, t), a = n.length, o = n.shift(), i = be._queueHooks(e, t), d = function () { be.dequeue(e, t); }; 'inprogress' === o && (o = n.shift(), a--), o && ('fx' === t && n.unshift('inprogress'), delete i.stop, o.call(e, d, i)), !a && i && i.empty.fire(); }, _queueHooks: function (e, t) { var n = t + 'queueHooks'; return be._data(e, n) || be._data(e, n, { empty: be.Callbacks('once memory').add(function () { be._removeData(e, t + 'queue'), be._removeData(e, n); }) }); } }), be.fn.extend({ queue: function (e, t) { var n = 2; return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? be.queue(this[0], e) : void 0 === t ? this : this.each(function () { var n = be.queue(this, e, t); be._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && be.dequeue(this, e); }); }, dequeue: function (e) { return this.each(function () { be.dequeue(this, e); }); }, clearQueue: function (e) { return this.queue(e || 'fx', []); }, promise: function (e, t) { var n, a = 1, o = be.Deferred(), d = this, s = this.length, i = function () { --a || o.resolveWith(d, [d]); }; for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; s--;)
                    n = be._data(d[s], e + 'queueHooks'), n && n.empty && (a++, n.empty.add(i)); return i(), o.promise(t); } }), function () { var e; ye.shrinkWrapBlocks = function () { if (null != e)
                return e; e = !1; var t, n, a; if (n = le.getElementsByTagName('body')[0], n && n.style)
                return t = le.createElement('div'), a = le.createElement('div'), a.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(a).appendChild(t), 'undefined' != typeof t.style.zoom && (t.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', t.appendChild(le.createElement('div')).style.width = '5px', e = 3 !== t.offsetWidth), n.removeChild(a), e; }; }();
            var We = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Fe = new RegExp('^(?:([+-])=|)(' + We + ')([a-z%]*)$', 'i'), Re = ['Top', 'Right', 'Bottom', 'Left'], ze = function (e, t) { return e = t || e, 'none' === be.css(e, 'display') || !be.contains(e.ownerDocument, e); }, Xe = function (e, t, n, a, o, d, s) { var r = 0, i = e.length, l = null == n; if ('object' === be.type(n))
                for (r in o = !0, n)
                    Xe(e, t, r, n[r], !0, d, s);
            else if (void 0 !== a && (o = !0, be.isFunction(a) || (s = !0), l && (s ? (t.call(e, a), t = null) : (l = t, t = function (e, t, n) { return l.call(be(e), n); })), t))
                for (; r < i; r++)
                    t(e[r], n, s ? a : a.call(e[r], r, t(e[r], n))); return o ? e : l ? t.call(e) : i ? t(e[0], n) : d; }, $e = /^(?:checkbox|radio)$/i, Ue = /<([\w:-]+)/, Ge = /^$|\/(?:java|ecma)script/i, Ve = /^\s+/, Je = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
            (function () { var e = le.createElement('div'), t = le.createDocumentFragment(), n = le.createElement('input'); e.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', ye.leadingWhitespace = 3 === e.firstChild.nodeType, ye.tbody = !e.getElementsByTagName('tbody').length, ye.htmlSerialize = !!e.getElementsByTagName('link').length, ye.html5Clone = '<:nav></:nav>' !== le.createElement('nav').cloneNode(!0).outerHTML, n.type = 'checkbox', n.checked = !0, t.appendChild(n), ye.appendChecked = n.checked, e.innerHTML = '<textarea>x</textarea>', ye.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = le.createElement('input'), n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), e.appendChild(n), ye.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.noCloneEvent = !!e.addEventListener, e[be.expando] = 1, ye.attributes = !e.getAttribute(be.expando); })();
            var Ke = { option: [1, '<select multiple=\'multiple\'>', '</select>'], legend: [1, '<fieldset>', '</fieldset>'], area: [1, '<map>', '</map>'], param: [1, '<object>', '</object>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: ye.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'] };
            Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
            var Ye = /<|&#?\w+;/, Qe = /<tbody/i;
            (function () { var e, t, n = le.createElement('div'); for (e in { submit: !0, change: !0, focusin: !0 })
                t = 'on' + e, (ye[e] = t in o) || (n.setAttribute(t, 't'), ye[e] = !1 === n.attributes[t].expando); n = null; })();
            var Ze = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, at = /^([^.]*)(?:\.(.+)|)/;
            be.event = { global: {}, add: function (e, n, a, o, i) { var d, s, r, t, l, p, c, u, m, h, g, f = be._data(e); if (f) {
                    for (a.handler && (t = a, a = t.handler, i = t.selector), a.guid || (a.guid = be.guid++), (s = f.events) || (s = f.events = {}), (p = f.handle) || (p = f.handle = function (t) { return 'undefined' == typeof be || t && be.event.triggered === t.type ? void 0 : be.event.dispatch.apply(p.elem, arguments); }, p.elem = e), n = (n || '').match(Me) || [''], r = n.length; r--;)
                        (d = at.exec(n[r]) || [], m = g = d[1], h = (d[2] || '').split('.').sort(), !!m) && (l = be.event.special[m] || {}, m = (i ? l.delegateType : l.bindType) || m, l = be.event.special[m] || {}, c = be.extend({ type: m, origType: g, data: o, handler: a, guid: a.guid, selector: i, needsContext: i && be.expr.match.needsContext.test(i), namespace: h.join('.') }, t), (u = s[m]) || (u = s[m] = [], u.delegateCount = 0, (!l.setup || !1 === l.setup.call(e, o, h, p)) && (e.addEventListener ? e.addEventListener(m, p, !1) : e.attachEvent && e.attachEvent('on' + m, p))), l.add && (l.add.call(e, c), !c.handler.guid && (c.handler.guid = a.guid)), i ? u.splice(u.delegateCount++, 0, c) : u.push(c), be.event.global[m] = !0);
                    e = null;
                } }, remove: function (e, n, a, o, i) { var d, s, r, l, p, t, c, u, m, h, g, f = be.hasData(e) && be._data(e); if (f && (t = f.events)) {
                    for (n = (n || '').match(Me) || [''], p = n.length; p--;) {
                        if (r = at.exec(n[p]) || [], m = g = r[1], h = (r[2] || '').split('.').sort(), !m) {
                            for (m in t)
                                be.event.remove(e, m + n[p], a, o, !0);
                            continue;
                        }
                        for (c = be.event.special[m] || {}, m = (o ? c.delegateType : c.bindType) || m, u = t[m] || [], r = r[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = d = u.length; d--;)
                            s = u[d], (i || g === s.origType) && (!a || a.guid === s.guid) && (!r || r.test(s.namespace)) && (!o || o === s.selector || '**' === o && s.selector) && (u.splice(d, 1), s.selector && u.delegateCount--, c.remove && c.remove.call(e, s));
                        l && !u.length && ((!c.teardown || !1 === c.teardown.call(e, h, f.handle)) && be.removeEvent(e, m, f.handle), delete t[m]);
                    }
                    be.isEmptyObject(t) && (delete f.handle, be._removeData(e, 'events'));
                } }, trigger: function (e, t, n, a) { var d, s, r, l, p, c, u, i = [n || le], m = fe.call(e, 'type') ? e.type : e, h = fe.call(e, 'namespace') ? e.namespace.split('.') : []; if ((r = c = n = n || le, 3 !== n.nodeType && 8 !== n.nodeType) && !nt.test(m + be.event.triggered) && (-1 < m.indexOf('.') && (h = m.split('.'), m = h.shift(), h.sort()), s = 0 > m.indexOf(':') && 'on' + m, e = e[be.expando] ? e : new be.Event(m, 'object' == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = h.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : be.makeArray(t, [e]), p = be.event.special[m] || {}, a || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                    if (!a && !p.noBubble && !be.isWindow(n)) {
                        for (l = p.delegateType || m, nt.test(l + m) || (r = r.parentNode); r; r = r.parentNode)
                            i.push(r), c = r;
                        c === (n.ownerDocument || le) && i.push(c.defaultView || c.parentWindow || o);
                    }
                    for (u = 0; (r = i[u++]) && !e.isPropagationStopped();)
                        e.type = 1 < u ? l : p.bindType || m, d = (be._data(r, 'events') || {})[e.type] && be._data(r, 'handle'), d && d.apply(r, t), d = s && r[s], d && d.apply && Pe(r) && (e.result = d.apply(r, t), !1 === e.result && e.preventDefault());
                    if (e.type = m, !a && !e.isDefaultPrevented() && (!p._default || !1 === p._default.apply(i.pop(), t)) && Pe(n) && s && n[m] && !be.isWindow(n)) {
                        c = n[s], c && (n[s] = null), be.event.triggered = m;
                        try {
                            n[m]();
                        }
                        catch (t) { }
                        be.event.triggered = void 0, c && (n[s] = c);
                    }
                    return e.result;
                } }, dispatch: function (e) { e = be.event.fix(e); var t, n, a, o, i, d = [], s = pe.call(arguments), r = (be._data(this, 'events') || {})[e.type] || [], l = be.event.special[e.type] || {}; if (s[0] = e, e.delegateTarget = this, !(l.preDispatch && !1 === l.preDispatch.call(this, e))) {
                    for (d = be.event.handlers.call(this, e, r), t = 0; (o = d[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)
                            (!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, a = ((be.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== a && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result;
                } }, handlers: function (e, t) { var n, a, o, i, d = [], s = t.delegateCount, r = e.target; if (s && r.nodeType && ('click' !== e.type || isNaN(e.button) || 1 > e.button))
                    for (; r != this; r = r.parentNode || this)
                        if (1 === r.nodeType && (!0 !== r.disabled || 'click' !== e.type)) {
                            for (a = [], n = 0; n < s; n++)
                                i = t[n], o = i.selector + ' ', void 0 === a[o] && (a[o] = i.needsContext ? -1 < be(o, this).index(r) : be.find(o, this, null, [r]).length), a[o] && a.push(i);
                            a.length && d.push({ elem: r, handlers: a });
                        } return s < t.length && d.push({ elem: this, handlers: t.slice(s) }), d; }, fix: function (e) { if (e[be.expando])
                    return e; var t, n, a, o = e.type, i = e, d = this.fixHooks[o]; for (d || (this.fixHooks[o] = d = tt.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), a = d.props ? this.props.concat(d.props) : this.props, e = new be.Event(i), t = a.length; t--;)
                    n = a[t], e[n] = i[n]; return e.target || (e.target = i.srcElement || le), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, d.filter ? d.filter(e, i) : e; }, props: ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'detail', 'eventPhase', 'metaKey', 'relatedTarget', 'shiftKey', 'target', 'timeStamp', 'view', 'which'], fixHooks: {}, keyHooks: { props: ['char', 'charCode', 'key', 'keyCode'], filter: function (e, t) { return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e; } }, mouseHooks: { props: ['button', 'buttons', 'clientX', 'clientY', 'fromElement', 'offsetX', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY', 'toElement'], filter: function (e, t) { var n, a, o, i = t.button, d = t.fromElement; return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || le, o = a.documentElement, n = a.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && d && (e.relatedTarget = d === e.target ? t.toElement : d), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== E() && this.focus)
                            try {
                                return this.focus(), !1;
                            }
                            catch (t) { } }, delegateType: 'focusin' }, blur: { trigger: function () { if (this === E() && this.blur)
                            return this.blur(), !1; }, delegateType: 'focusout' }, click: { trigger: function () { if (be.nodeName(this, 'input') && 'checkbox' === this.type && this.click)
                            return this.click(), !1; }, _default: function (e) { return be.nodeName(e.target, 'a'); } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result); } } }, simulate: function (t, n, a) { var o = be.extend(new be.Event, a, { type: t, isSimulated: !0 }); be.event.trigger(o, null, n), o.isDefaultPrevented() && a.preventDefault(); } }, be.removeEvent = le.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n); } : function (e, t, n) { var a = 'on' + t; e.detachEvent && ('undefined' == typeof e[a] && (e[a] = null), e.detachEvent(a, n)); }, be.Event = function (e, t) { return this instanceof be.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : N) : this.type = e, t && be.extend(this, t), this.timeStamp = e && e.timeStamp || be.now(), this[be.expando] = !0) : new be.Event(e, t); }, be.Event.prototype = { constructor: be.Event, isDefaultPrevented: N, isPropagationStopped: N, isImmediatePropagationStopped: N, preventDefault: function () { var t = this.originalEvent; this.isDefaultPrevented = w, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1); }, stopPropagation: function () { var t = this.originalEvent; this.isPropagationStopped = w, !t || this.isSimulated || (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0); }, stopImmediatePropagation: function () { var t = this.originalEvent; this.isImmediatePropagationStopped = w, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation(); } }, be.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, t) { be.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, a = this, o = e.relatedTarget, i = e.handleObj; return o && (o === a || be.contains(a, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n; } }; }), ye.submit || (be.event.special.submit = { setup: function () { return !be.nodeName(this, 'form') && void be.event.add(this, 'click._submit keypress._submit', function (t) { var e = t.target, n = be.nodeName(e, 'input') || be.nodeName(e, 'button') ? be.prop(e, 'form') : void 0; n && !be._data(n, 'submit') && (be.event.add(n, 'submit._submit', function (e) { e._submitBubble = !0; }), be._data(n, 'submit', !0)); }); }, postDispatch: function (e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && be.event.simulate('submit', this.parentNode, e)); }, teardown: function () { return !be.nodeName(this, 'form') && void be.event.remove(this, '._submit'); } }), ye.change || (be.event.special.change = { setup: function () { return Ze.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (be.event.add(this, 'propertychange._change', function (e) { 'checked' === e.originalEvent.propertyName && (this._justChanged = !0); }), be.event.add(this, 'click._change', function (e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), be.event.simulate('change', this, e); })), !1) : void be.event.add(this, 'beforeactivate._change', function (t) { var e = t.target; Ze.test(e.nodeName) && !be._data(e, 'change') && (be.event.add(e, 'change._change', function (e) { !this.parentNode || e.isSimulated || e.isTrigger || be.event.simulate('change', this.parentNode, e); }), be._data(e, 'change', !0)); }); }, handle: function (e) { var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || 'radio' !== t.type && 'checkbox' !== t.type)
                    return e.handleObj.handler.apply(this, arguments); }, teardown: function () { return be.event.remove(this, '._change'), !Ze.test(this.nodeName); } }), ye.focusin || be.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) { var n = function (e) { be.event.simulate(t, e.target, be.event.fix(e)); }; be.event.special[t] = { setup: function () { var a = this.ownerDocument || this, o = be._data(a, t); o || a.addEventListener(e, n, !0), be._data(a, t, (o || 0) + 1); }, teardown: function () { var a = this.ownerDocument || this, o = be._data(a, t) - 1; o ? be._data(a, t, o) : (a.removeEventListener(e, n, !0), be._removeData(a, t)); } }; }), be.fn.extend({ on: function (e, t, n, a) { return k(this, e, t, n, a); }, one: function (e, t, n, a) { return k(this, e, t, n, a, 1); }, off: function (e, t, n) { var a, o; if (e && e.preventDefault && e.handleObj)
                    return a = e.handleObj, be(e.delegateTarget).off(a.namespace ? a.origType + '.' + a.namespace : a.origType, a.selector, a.handler), this; if ('object' == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this;
                } return (!1 === t || 'function' == typeof t) && (n = t, t = void 0), !1 === n && (n = N), this.each(function () { be.event.remove(this, e, n, t); }); }, trigger: function (e, t) { return this.each(function () { be.event.trigger(e, t, this); }); }, triggerHandler: function (e, t) { var n = this[0]; if (n)
                    return be.event.trigger(e, t, n, !0); } });
            var ot = / jQuery\d+="(?:null|\d+)"/g, it = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, st = /<script|<style|<link/i, rt = /checked\s*(?:[^=]|=\s*.checked.)/i, lt = /^true\/(.*)/, pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = x(le), ut = ct.appendChild(le.createElement('div'));
            be.extend({ htmlPrefilter: function (e) { return e.replace(dt, '<$1></$2>'); }, clone: function (e, t, n) { var a, o, d, s, i, r = be.contains(e.ownerDocument, e); if (ye.html5Clone || be.isXMLDoc(e) || !it.test('<' + e.nodeName + '>') ? d = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(d = ut.firstChild)), (!ye.noCloneEvent || !ye.noCloneChecked) && (1 === e.nodeType || 11 === e.nodeType) && !be.isXMLDoc(e))
                    for (a = b(d), i = b(e), s = 0; null != (o = i[s]); ++s)
                        a[s] && _(o, a[s]); if (t)
                    if (n)
                        for (i = i || b(e), a = a || b(d), s = 0; null != (o = i[s]); s++)
                            L(o, a[s]);
                    else
                        L(e, d); return a = b(d, 'script'), 0 < a.length && v(a, !r && b(e, 'script')), a = i = o = null, d; }, cleanData: function (e, t) { for (var n, a, o, d, s = 0, i = be.expando, r = be.cache, l = ye.attributes, p = be.event.special; null != (n = e[s]); s++)
                    if ((t || Pe(n)) && (o = n[i], d = o && r[o], d)) {
                        if (d.events)
                            for (a in d.events)
                                p[a] ? be.event.remove(n, a) : be.removeEvent(n, a, d.handle);
                        r[o] && (delete r[o], l || 'undefined' == typeof n.removeAttribute ? n[i] = void 0 : n.removeAttribute(i), re.push(o));
                    } } }), be.fn.extend({ domManip: A, detach: function (e) { return H(this, e, !0); }, remove: function (e) { return H(this, e); }, text: function (e) { return Xe(this, function (e) { return void 0 === e ? be.text(this) : this.empty().append((this[0] && this[0].ownerDocument || le).createTextNode(e)); }, null, e, arguments.length); }, append: function () { return A(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.appendChild(e);
                } }); }, prepend: function () { return A(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild);
                } }); }, before: function () { return A(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this); }); }, after: function () { return A(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling); }); }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && be.cleanData(b(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && be.nodeName(e, 'select') && (e.options.length = 0);
                } return this; }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return be.clone(this, e, t); }); }, html: function (e) { return Xe(this, function (e) { var t = this[0] || {}, n = 0, a = this.length; if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(ot, '') : void 0; if ('string' == typeof e && !st.test(e) && (ye.htmlSerialize || !it.test(e)) && (ye.leadingWhitespace || !Ve.test(e)) && !Ke[(Ue.exec(e) || ['', ''])[1].toLowerCase()]) {
                    e = be.htmlPrefilter(e);
                    try {
                        for (; n < a; n++)
                            t = this[n] || {}, 1 === t.nodeType && (be.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0;
                    }
                    catch (t) { }
                } t && this.empty().append(e); }, null, e, arguments.length); }, replaceWith: function () { var e = []; return A(this, arguments, function (t) { var n = this.parentNode; 0 > be.inArray(this, e) && (be.cleanData(b(this)), n && n.replaceChild(t, this)); }, e); } }), be.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, t) { be.fn[e] = function (e) { for (var n, a = 0, o = [], i = be(e), d = i.length - 1; a <= d; a++)
                n = a === d ? this : this.clone(!0), be(i[a])[t](n), ue.apply(o, n.get()); return this.pushStack(o); }; });
            var mt, ht = { HTML: 'block', BODY: 'block' }, gt = /^margin/, ft = new RegExp('^(' + We + ')(?!px)[a-z%]+$', 'i'), yt = function (e, t, n, a) { var o, i, d = {}; for (i in t)
                d[i] = e.style[i], e.style[i] = t[i]; for (i in o = n.apply(e, a || []), t)
                e.style[i] = d[i]; return o; }, xt = le.documentElement;
            (function () { function e() { var e, p, c = le.documentElement; c.appendChild(r), l.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', t = a = s = !1, n = d = !0, o.getComputedStyle && (p = o.getComputedStyle(l), t = '1%' !== (p || {}).top, s = '2px' === (p || {}).marginLeft, a = '4px' === (p || { width: '4px' }).width, l.style.marginRight = '50%', n = '4px' === (p || { marginRight: '4px' }).marginRight, e = l.appendChild(le.createElement('div')), e.style.cssText = l.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', e.style.marginRight = e.style.width = '0', l.style.width = '1px', d = !parseFloat((o.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = 'none', i = 0 === l.getClientRects().length, i && (l.style.display = '', l.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', l.childNodes[0].style.borderCollapse = 'separate', e = l.getElementsByTagName('td'), e[0].style.cssText = 'margin:0;border:0;padding:0;display:none', i = 0 === e[0].offsetHeight, i && (e[0].style.display = '', e[1].style.display = 'none', i = 0 === e[0].offsetHeight)), c.removeChild(r); } var t, n, a, i, d, s, r = le.createElement('div'), l = le.createElement('div'); l.style && (l.style.cssText = 'float:left;opacity:.5', ye.opacity = '0.5' === l.style.opacity, ye.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = 'content-box', l.cloneNode(!0).style.backgroundClip = '', ye.clearCloneStyle = 'content-box' === l.style.backgroundClip, r = le.createElement('div'), r.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', l.innerHTML = '', r.appendChild(l), ye.boxSizing = '' === l.style.boxSizing || '' === l.style.MozBoxSizing || '' === l.style.WebkitBoxSizing, be.extend(ye, { reliableHiddenOffsets: function () { return null == t && e(), i; }, boxSizingReliable: function () { return null == t && e(), a; }, pixelMarginRight: function () { return null == t && e(), n; }, pixelPosition: function () { return null == t && e(), t; }, reliableMarginRight: function () { return null == t && e(), d; }, reliableMarginLeft: function () { return null == t && e(), s; } })); })();
            var bt, vt, Ct = /^(top|right|bottom|left)$/;
            o.getComputedStyle ? (bt = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = o), t.getComputedStyle(e); }, vt = function (e, t, n) { var a, o, i, d, s = e.style; return n = n || bt(e), d = n ? n.getPropertyValue(t) || n[t] : void 0, '' !== d && void 0 !== d || be.contains(e.ownerDocument, e) || (d = be.style(e, t)), n && !ye.pixelMarginRight() && ft.test(d) && gt.test(t) && (a = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = d, d = n.width, s.width = a, s.minWidth = o, s.maxWidth = i), void 0 === d ? d : d + ''; }) : xt.currentStyle && (bt = function (e) { return e.currentStyle; }, vt = function (e, t, n) { var a, o, i, d, s = e.style; return n = n || bt(e), d = n ? n[t] : void 0, null == d && s && s[t] && (d = s[t]), ft.test(d) && !Ct.test(t) && (a = s.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), s.left = 'fontSize' === t ? '1em' : d, d = s.pixelLeft + 'px', s.left = a, i && (o.left = i)), void 0 === d ? d : d + '' || 'auto'; });
            var Tt = /alpha\([^)]*\)/i, wt = /opacity\s*=\s*([^)]*)/i, Nt = /^(none|table(?!-c[ea]).+)/, Et = new RegExp('^(' + We + ')(.*)$', 'i'), kt = { position: 'absolute', visibility: 'hidden', display: 'block' }, St = { letterSpacing: '0', fontWeight: '400' }, Dt = ['Webkit', 'O', 'Moz', 'ms'], jt = le.createElement('div').style;
            be.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) {
                            var n = vt(e, 'opacity');
                            return '' === n ? '1' : n;
                        } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: ye.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function (e, t, n, a) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, d, s = be.camelCase(t), r = e.style;
                    if (t = be.cssProps[s] || (be.cssProps[s] = I(s) || s), d = be.cssHooks[t] || be.cssHooks[s], void 0 !== n) {
                        if (i = typeof n, 'string' === i && (o = Fe.exec(n)) && o[1] && (n = y(e, t, o), i = 'number'), null == n || n !== n)
                            return;
                        if ('number' === i && (n += o && o[3] || (be.cssNumber[s] ? '' : 'px')), ye.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (r[t] = 'inherit'), !d || !('set' in d) || void 0 !== (n = d.set(e, n, a)))
                            try {
                                r[t] = n;
                            }
                            catch (t) { }
                    }
                    else
                        return d && 'get' in d && void 0 !== (o = d.get(e, !1, a)) ? o : r[t];
                } }, css: function (e, t, n, a) { var o, i, d, s = be.camelCase(t); return t = be.cssProps[s] || (be.cssProps[s] = I(s) || s), d = be.cssHooks[t] || be.cssHooks[s], d && 'get' in d && (i = d.get(e, !0, n)), void 0 === i && (i = vt(e, t, a)), 'normal' === i && t in St && (i = St[t]), '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i; } }), be.each(['height', 'width'], function (e, t) { be.cssHooks[t] = { get: function (e, n, a) { if (n)
                    return Nt.test(be.css(e, 'display')) && 0 === e.offsetWidth ? yt(e, kt, function () { return F(e, t, a); }) : F(e, t, a); }, set: function (e, n, a) { var o = a && bt(e); return B(e, n, a ? W(e, t, a, ye.boxSizing && 'border-box' === be.css(e, 'boxSizing', !1, o), o) : 0); } }; }), ye.opacity || (be.cssHooks.opacity = { get: function (e, t) { return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : t ? '1' : ''; }, set: function (e, t) { var n = e.style, a = e.currentStyle, o = be.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '', i = a && a.filter || n.filter || ''; n.zoom = 1, (1 <= t || '' === t) && '' === be.trim(i.replace(Tt, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || a && !a.filter) || (n.filter = Tt.test(i) ? i.replace(Tt, o) : i + ' ' + o); } }), be.cssHooks.marginRight = O(ye.reliableMarginRight, function (e, t) { if (t)
                return yt(e, { display: 'inline-block' }, vt, [e, 'marginRight']); }), be.cssHooks.marginLeft = O(ye.reliableMarginLeft, function (e, t) { if (t)
                return (parseFloat(vt(e, 'marginLeft')) || (be.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - yt(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left; }) : 0)) + 'px'; }), be.each({ margin: '', padding: '', border: 'Width' }, function (e, t) { be.cssHooks[e + t] = { expand: function (n) { for (var a = 0, o = {}, i = 'string' == typeof n ? n.split(' ') : [n]; 4 > a; a++)
                    o[e + Re[a] + t] = i[a] || i[a - 2] || i[0]; return o; } }, gt.test(e) || (be.cssHooks[e + t].set = B); }), be.fn.extend({ css: function (e, t) { return Xe(this, function (e, t, n) { var a, o, d = {}, s = 0; if (be.isArray(t)) {
                    for (a = bt(e), o = t.length; s < o; s++)
                        d[t[s]] = be.css(e, t[s], !1, a);
                    return d;
                } return void 0 === n ? be.css(e, t) : be.style(e, t, n); }, e, t, 1 < arguments.length); }, show: function () { return P(this, !0); }, hide: function () { return P(this); }, toggle: function (e) { return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () { ze(this) ? be(this).show() : be(this).hide(); }); } }), be.Tween = R, R.prototype = { constructor: R, init: function (e, t, n, a, o, i) { this.elem = e, this.prop = n, this.easing = o || be.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (be.cssNumber[n] ? '' : 'px'); }, cur: function () { var e = R.propHooks[this.prop]; return e && e.get ? e.get(this) : R.propHooks._default.get(this); }, run: function (e) { var t, n = R.propHooks[this.prop]; return this.pos = this.options.duration ? t = be.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this; } }, R.prototype.init.prototype = R.prototype, R.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = be.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0); }, set: function (e) { be.fx.step[e.prop] ? be.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[be.cssProps[e.prop]] || be.cssHooks[e.prop]) ? be.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now; } } }, R.propHooks.scrollTop = R.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now); } }, be.easing = { linear: function (e) { return e; }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2; }, _default: 'swing' }, be.fx = R.prototype.init, be.fx.step = {};
            var Lt, _t, At = /^(?:toggle|show|hide)$/, Ht = /queueHooks$/;
            be.Animation = be.extend(V, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return y(n.elem, e, Fe.exec(t), n), n; }] }, tweener: function (e, t) { be.isFunction(e) ? (t = e, e = ['*']) : e = e.match(Me); for (var n, a = 0, o = e.length; a < o; a++)
                    n = e[a], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t); }, prefilters: [U], prefilter: function (e, t) { t ? V.prefilters.unshift(e) : V.prefilters.push(e); } }), be.speed = function (e, t, n) { var a = e && 'object' == typeof e ? be.extend({}, e) : { complete: n || !n && t || be.isFunction(e) && e, duration: e, easing: n && t || t && !be.isFunction(t) && t }; return a.duration = be.fx.off ? 0 : 'number' == typeof a.duration ? a.duration : a.duration in be.fx.speeds ? be.fx.speeds[a.duration] : be.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = 'fx'), a.old = a.complete, a.complete = function () { be.isFunction(a.old) && a.old.call(this), a.queue && be.dequeue(this, a.queue); }, a; }, be.fn.extend({ fadeTo: function (e, t, n, a) { return this.filter(ze).css('opacity', 0).show().end().animate({ opacity: t }, e, n, a); }, animate: function (e, t, n, a) { var o = be.isEmptyObject(e), i = be.speed(t, n, a), d = function () { var t = V(this, be.extend({}, e), i); (o || be._data(this, 'finish')) && t.stop(!0); }; return d.finish = d, o || !1 === i.queue ? this.each(d) : this.queue(i.queue, d); }, stop: function (e, t, n) { var a = function (e) { var t = e.stop; delete e.stop, t(n); }; return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () { var t = !0, o = null != e && e + 'queueHooks', i = be.timers, d = be._data(this); if (o)
                    d[o] && d[o].stop && a(d[o]);
                else
                    for (o in d)
                        d[o] && d[o].stop && Ht.test(o) && a(d[o]); for (o = i.length; o--;)
                    i[o].elem === this && (null == e || i[o].queue === e) && (i[o].anim.stop(n), t = !1, i.splice(o, 1)); (t || !n) && be.dequeue(this, e); }); }, finish: function (e) { return !1 !== e && (e = e || 'fx'), this.each(function () { var t, n = be._data(this), a = n[e + 'queue'], o = n[e + 'queueHooks'], i = be.timers, d = a ? a.length : 0; for (n.finish = !0, be.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;)
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1)); for (t = 0; t < d; t++)
                    a[t] && a[t].finish && a[t].finish.call(this); delete n.finish; }); } }), be.each(['toggle', 'show', 'hide'], function (e, t) { var n = be.fn[t]; be.fn[t] = function (e, a, o) { return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(X(t, !0), e, a, o); }; }), be.each({ slideDown: X('show'), slideUp: X('hide'), slideToggle: X('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, t) { be.fn[e] = function (e, n, a) { return this.animate(t, e, n, a); }; }), be.timers = [], be.fx.tick = function () { var e, t = be.timers, n = 0; for (Lt = be.now(); n < t.length; n++)
                e = t[n], e() || t[n] !== e || t.splice(n--, 1); t.length || be.fx.stop(), Lt = void 0; }, be.fx.timer = function (e) { be.timers.push(e), e() ? be.fx.start() : be.timers.pop(); }, be.fx.interval = 13, be.fx.start = function () { _t || (_t = o.setInterval(be.fx.tick, be.fx.interval)); }, be.fx.stop = function () { o.clearInterval(_t), _t = null; }, be.fx.speeds = { slow: 600, fast: 200, _default: 400 }, be.fn.delay = function (e, t) { return e = be.fx ? be.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) { var a = o.setTimeout(t, e); n.stop = function () { o.clearTimeout(a); }; }); }, function () { var e, t = le.createElement('input'), n = le.createElement('div'), a = le.createElement('select'), o = a.appendChild(le.createElement('option')); n = le.createElement('div'), n.setAttribute('className', 't'), n.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', e = n.getElementsByTagName('a')[0], t.setAttribute('type', 'checkbox'), n.appendChild(t), e = n.getElementsByTagName('a')[0], e.style.cssText = 'top:1px', ye.getSetAttribute = 't' !== n.className, ye.style = /top/.test(e.getAttribute('style')), ye.hrefNormalized = '/a' === e.getAttribute('href'), ye.checkOn = !!t.value, ye.optSelected = o.selected, ye.enctype = !!le.createElement('form').enctype, a.disabled = !0, ye.optDisabled = !o.disabled, t = le.createElement('input'), t.setAttribute('value', ''), ye.input = '' === t.getAttribute('value'), t.value = 't', t.setAttribute('type', 'radio'), ye.radioValue = 't' === t.value; }();
            var qt = /\r/g, Mt = /[\x20\t\r\n\f]+/g;
            be.fn.extend({ val: function (e) { var t, n, a, o = this[0]; return arguments.length ? (a = be.isFunction(e), this.each(function (n) { var o; 1 !== this.nodeType || (o = a ? e.call(this, n, be(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : be.isArray(o) && (o = be.map(o, function (e) { return null == e ? '' : e + ''; })), t = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()], (!t || !('set' in t) || void 0 === t.set(this, o, 'value')) && (this.value = o)); })) : o ? (t = be.valHooks[o.type] || be.valHooks[o.nodeName.toLowerCase()], t && 'get' in t && void 0 !== (n = t.get(o, 'value'))) ? n : (n = o.value, 'string' == typeof n ? n.replace(qt, '') : null == n ? '' : n) : void 0; } }), be.extend({ valHooks: { option: { get: function (e) { var t = be.find.attr(e, 'value'); return null == t ? be.trim(be.text(e)).replace(Mt, ' ') : t; } }, select: { get: function (e) { for (var t, n, a = e.options, o = e.selectedIndex, d = 'select-one' === e.type || 0 > o, s = d ? null : [], r = d ? o + 1 : a.length, l = 0 > o ? r : d ? o : 0; l < r; l++)
                            if (n = a[l], (n.selected || l === o) && (ye.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) && (!n.parentNode.disabled || !be.nodeName(n.parentNode, 'optgroup'))) {
                                if (t = be(n).val(), d)
                                    return t;
                                s.push(t);
                            } return s; }, set: function (e, t) { for (var n, a, o = e.options, d = be.makeArray(t), s = o.length; s--;)
                            if (a = o[s], -1 < be.inArray(be.valHooks.option.get(a), d))
                                try {
                                    a.selected = n = !0;
                                }
                                catch (e) {
                                    a.scrollHeight;
                                }
                            else
                                a.selected = !1; return n || (e.selectedIndex = -1), o; } } } }), be.each(['radio', 'checkbox'], function () { be.valHooks[this] = { set: function (e, t) { if (be.isArray(t))
                    return e.checked = -1 < be.inArray(be(e).val(), t); } }, ye.checkOn || (be.valHooks[this].get = function (e) { return null === e.getAttribute('value') ? 'on' : e.value; }); });
            var Ot, It, Pt = be.expr.attrHandle, Bt = /^(?:checked|selected)$/i, Wt = ye.getSetAttribute, Ft = ye.input;
            be.fn.extend({ attr: function (e, t) { return Xe(this, be.attr, e, t, 1 < arguments.length); }, removeAttr: function (e) { return this.each(function () { be.removeAttr(this, e); }); } }), be.extend({ attr: function (e, t, n) { var a, o, i = e.nodeType; if (3 !== i && 8 !== i && 2 !== i)
                    return 'undefined' == typeof e.getAttribute ? be.prop(e, t, n) : (1 === i && be.isXMLDoc(e) || (t = t.toLowerCase(), o = be.attrHooks[t] || (be.expr.match.bool.test(t) ? It : Ot)), void 0 !== n) ? null === n ? void be.removeAttr(e, t) : o && 'set' in o && void 0 !== (a = o.set(e, n, t)) ? a : (e.setAttribute(t, n + ''), n) : o && 'get' in o && null !== (a = o.get(e, t)) ? a : (a = be.find.attr(e, t), null == a ? void 0 : a); }, attrHooks: { type: { set: function (e, t) { if (!ye.radioValue && 'radio' === t && be.nodeName(e, 'input')) {
                            var n = e.value;
                            return e.setAttribute('type', t), n && (e.value = n), t;
                        } } } }, removeAttr: function (e, t) { var n, a, o = 0, i = t && t.match(Me); if (i && 1 === e.nodeType)
                    for (; n = i[o++];)
                        a = be.propFix[n] || n, be.expr.match.bool.test(n) ? Ft && Wt || !Bt.test(n) ? e[a] = !1 : e[be.camelCase('default-' + n)] = e[a] = !1 : be.attr(e, n, ''), e.removeAttribute(Wt ? n : a); } }), It = { set: function (e, t, n) { return !1 === t ? be.removeAttr(e, n) : Ft && Wt || !Bt.test(n) ? e.setAttribute(!Wt && be.propFix[n] || n, n) : e[be.camelCase('default-' + n)] = e[n] = !0, n; } }, be.each(be.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = Pt[t] || be.find.attr; Pt[t] = Ft && Wt || !Bt.test(t) ? function (e, t, a) { var o, i; return a || (i = Pt[t], Pt[t] = o, o = null == n(e, t, a) ? null : t.toLowerCase(), Pt[t] = i), o; } : function (e, t, n) { if (!n)
                return e[be.camelCase('default-' + t)] ? t.toLowerCase() : null; }; }), Ft && Wt || (be.attrHooks.value = { set: function (e, t, n) { return be.nodeName(e, 'input') ? void (e.defaultValue = t) : Ot && Ot.set(e, t, n); } }), Wt || (Ot = { set: function (e, t, n) { var a = e.getAttributeNode(n); if (a || e.setAttributeNode(a = e.ownerDocument.createAttribute(n)), a.value = t += '', 'value' === n || t === e.getAttribute(n))
                    return t; } }, Pt.id = Pt.name = Pt.coords = function (e, t, n) { var a; if (!n)
                return (a = e.getAttributeNode(t)) && '' !== a.value ? a.value : null; }, be.valHooks.button = { get: function (e, t) { var n = e.getAttributeNode(t); if (n && n.specified)
                    return n.value; }, set: Ot.set }, be.attrHooks.contenteditable = { set: function (e, t, n) { Ot.set(e, '' !== t && t, n); } }, be.each(['width', 'height'], function (e, t) { be.attrHooks[t] = { set: function (e, n) { if ('' === n)
                    return e.setAttribute(t, 'auto'), n; } }; })), ye.style || (be.attrHooks.style = { get: function (e) { return e.style.cssText || void 0; }, set: function (e, t) { return e.style.cssText = t + ''; } });
            var Rt = /^(?:input|select|textarea|button|object)$/i, zt = /^(?:a|area)$/i;
            be.fn.extend({ prop: function (e, t) { return Xe(this, be.prop, e, t, 1 < arguments.length); }, removeProp: function (e) { return e = be.propFix[e] || e, this.each(function () { try {
                    this[e] = void 0, delete this[e];
                }
                catch (t) { } }); } }), be.extend({ prop: function (e, t, n) { var a, o, i = e.nodeType; if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && be.isXMLDoc(e) || (t = be.propFix[t] || t, o = be.propHooks[t]), void 0 === n ? o && 'get' in o && null !== (a = o.get(e, t)) ? a : e[t] : o && 'set' in o && void 0 !== (a = o.set(e, n, t)) ? a : e[t] = n; }, propHooks: { tabIndex: { get: function (e) { var t = be.find.attr(e, 'tabindex'); return t ? parseInt(t, 10) : Rt.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : -1; } } }, propFix: { "for": 'htmlFor', "class": 'className' } }), ye.hrefNormalized || be.each(['href', 'src'], function (e, t) { be.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4); } }; }), ye.optSelected || (be.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null; }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex); } }), be.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { be.propFix[this.toLowerCase()] = this; }), ye.enctype || (be.propFix.enctype = 'encoding');
            var Xt = /[\t\r\n\f]/g;
            be.fn.extend({ addClass: function (e) { var t, n, a, o, d, s, r, l = 0; if (be.isFunction(e))
                    return this.each(function (t) { be(this).addClass(e.call(this, t, J(this))); }); if ('string' == typeof e && e)
                    for (t = e.match(Me) || []; n = this[l++];)
                        if (o = J(n), a = 1 === n.nodeType && (' ' + o + ' ').replace(Xt, ' '), a) {
                            for (s = 0; d = t[s++];)
                                0 > a.indexOf(' ' + d + ' ') && (a += d + ' ');
                            r = be.trim(a), o !== r && be.attr(n, 'class', r);
                        } return this; }, removeClass: function (e) { var t, n, a, o, d, s, r, l = 0; if (be.isFunction(e))
                    return this.each(function (t) { be(this).removeClass(e.call(this, t, J(this))); }); if (!arguments.length)
                    return this.attr('class', ''); if ('string' == typeof e && e)
                    for (t = e.match(Me) || []; n = this[l++];)
                        if (o = J(n), a = 1 === n.nodeType && (' ' + o + ' ').replace(Xt, ' '), a) {
                            for (s = 0; d = t[s++];)
                                for (; -1 < a.indexOf(' ' + d + ' ');)
                                    a = a.replace(' ' + d + ' ', ' ');
                            r = be.trim(a), o !== r && be.attr(n, 'class', r);
                        } return this; }, toggleClass: function (e, t) { var n = typeof e; return 'boolean' == typeof t && 'string' == n ? t ? this.addClass(e) : this.removeClass(e) : be.isFunction(e) ? this.each(function (n) { be(this).toggleClass(e.call(this, n, J(this), t), t); }) : this.each(function () { var t, a, o, i; if ('string' == n)
                    for (a = 0, o = be(this), i = e.match(Me) || []; t = i[a++];)
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    (void 0 === e || 'boolean' == n) && (t = J(this), t && be._data(this, '__className__', t), be.attr(this, 'class', t || !1 === e ? '' : be._data(this, '__className__') || '')); }); }, hasClass: function (e) { var t, n, a = 0; for (t = ' ' + e + ' '; n = this[a++];)
                    if (1 === n.nodeType && -1 < (' ' + J(n) + ' ').replace(Xt, ' ').indexOf(t))
                        return !0; return !1; } }), be.each(['blur', 'focus', 'focusin', 'focusout', 'load', 'resize', 'scroll', 'unload', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'error', 'contextmenu'], function (e, t) { be.fn[t] = function (e, n) { return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t); }; }), be.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e); } });
            var $t = o.location, Ut = be.now(), Gt = /\?/, Vt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            be.parseJSON = function (e) { if (o.JSON && o.JSON.parse)
                return o.JSON.parse(e + ''); var t, n = null, a = be.trim(e + ''); return a && !be.trim(a.replace(Vt, function (e, a, o, i) { return (t && a && (n = 0), 0 === n) ? e : (t = o || a, n += !i - !o, ''); })) ? Function('return ' + a)() : be.error('Invalid JSON: ' + e); }, be.parseXML = function (e) { var t, n; if (!e || 'string' != typeof e)
                return null; try {
                o.DOMParser ? (n = new o.DOMParser, t = n.parseFromString(e, 'text/xml')) : (t = new o.ActiveXObject('Microsoft.XMLDOM'), t.async = 'false', t.loadXML(e));
            }
            catch (n) {
                t = void 0;
            } return t && t.documentElement && !t.getElementsByTagName('parsererror').length || be.error('Invalid XML: ' + e), t; };
            var Jt = /#.*$/, Kt = /([?&])_=[^&]*/, Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nn = {}, an = {}, on = '*/'.concat('*'), dn = $t.href, sn = tn.exec(dn.toLowerCase()) || [];
            be.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: dn, type: 'GET', isLocal: Qt.test(sn[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { "*": on, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { "* text": String, "text html": !0, "text json": be.parseJSON, "text xml": be.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Q(Q(e, be.ajaxSettings), t) : Q(be.ajaxSettings, e); }, ajaxPrefilter: K(nn), ajaxTransport: K(an), ajax: function (e, t) { function n(e, t, n, a) { var d, u, x, b, C, w = t; 2 === v || (v = 2, l && o.clearTimeout(l), c = void 0, r = a || '', T.readyState = 0 < e ? 4 : 0, d = 200 <= e && 300 > e || 304 === e, n && (b = Z(m, T, n)), b = ee(m, b, T, d), d ? (m.ifModified && (C = T.getResponseHeader('Last-Modified'), C && (be.lastModified[i] = C), C = T.getResponseHeader('etag'), C && (be.etag[i] = C)), 204 === e || 'HEAD' === m.type ? w = 'nocontent' : 304 === e ? w = 'notmodified' : (w = b.state, u = b.data, x = b.error, d = !x)) : (x = w, (e || !w) && (w = 'error', 0 > e && (e = 0))), T.status = e, T.statusText = (t || w) + '', d ? g.resolveWith(s, [u, w, T]) : g.rejectWith(s, [T, w, x]), T.statusCode(y), y = void 0, p && h.trigger(d ? 'ajaxSuccess' : 'ajaxError', [T, m, d ? u : x]), f.fireWith(s, [T, w]), p && (h.trigger('ajaxComplete', [T, m]), !--be.active && be.event.trigger('ajaxStop'))); } 'object' == typeof e && (t = e, e = void 0), t = t || {}; var a, d, i, r, l, p, c, u, m = be.ajaxSetup({}, t), s = m.context || m, h = m.context && (s.nodeType || s.jquery) ? be(s) : be.event, g = be.Deferred(), f = be.Callbacks('once memory'), y = m.statusCode || {}, x = {}, b = {}, v = 0, C = 'canceled', T = { readyState: 0, getResponseHeader: function (e) { var t; if (2 == v) {
                        if (!u)
                            for (u = {}; t = Yt.exec(r);)
                                u[t[1].toLowerCase()] = t[2];
                        t = u[e.toLowerCase()];
                    } return null == t ? null : t; }, getAllResponseHeaders: function () { return 2 == v ? r : null; }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return v || (e = b[n] = b[n] || e, x[e] = t), this; }, overrideMimeType: function (e) { return v || (m.mimeType = e), this; }, statusCode: function (e) { if (e)
                        if (2 > v)
                            for (var t in e)
                                y[t] = [y[t], e[t]];
                        else
                            T.always(e[T.status]); return this; }, abort: function (e) { var t = e || C; return c && c.abort(t), n(0, t), this; } }; if (g.promise(T).complete = f.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || dn) + '').replace(Jt, '').replace(en, sn[1] + '//'), m.type = t.method || t.type || m.method || m.type, m.dataTypes = be.trim(m.dataType || '*').toLowerCase().match(Me) || [''], null == m.crossDomain && (a = tn.exec(m.url.toLowerCase()), m.crossDomain = !!(a && (a[1] !== sn[1] || a[2] !== sn[2] || (a[3] || ('http:' === a[1] ? '80' : '443')) !== (sn[3] || ('http:' === sn[1] ? '80' : '443'))))), m.data && m.processData && 'string' != typeof m.data && (m.data = be.param(m.data, m.traditional)), Y(nn, m, t, T), 2 == v)
                    return T; for (d in p = be.event && m.global, p && 0 == be.active++ && be.event.trigger('ajaxStart'), m.type = m.type.toUpperCase(), m.hasContent = !Zt.test(m.type), i = m.url, m.hasContent || (m.data && (i = m.url += (Gt.test(i) ? '&' : '?') + m.data, delete m.data), !1 === m.cache && (m.url = Kt.test(i) ? i.replace(Kt, '$1_=' + Ut++) : i + (Gt.test(i) ? '&' : '?') + '_=' + Ut++)), m.ifModified && (be.lastModified[i] && T.setRequestHeader('If-Modified-Since', be.lastModified[i]), be.etag[i] && T.setRequestHeader('If-None-Match', be.etag[i])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader('Content-Type', m.contentType), T.setRequestHeader('Accept', m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ('*' === m.dataTypes[0] ? '' : ', ' + on + '; q=0.01') : m.accepts['*']), m.headers)
                    T.setRequestHeader(d, m.headers[d]); if (m.beforeSend && (!1 === m.beforeSend.call(s, T, m) || 2 == v))
                    return T.abort(); for (d in C = 'abort', { success: 1, error: 1, complete: 1 })
                    T[d](m[d]); if (c = Y(an, m, t, T), !c)
                    n(-1, 'No Transport');
                else {
                    if (T.readyState = 1, p && h.trigger('ajaxSend', [T, m]), 2 == v)
                        return T;
                    m.async && 0 < m.timeout && (l = o.setTimeout(function () { T.abort('timeout'); }, m.timeout));
                    try {
                        v = 1, c.send(x, n);
                    }
                    catch (t) {
                        if (2 > v)
                            n(-1, t);
                        else
                            throw t;
                    }
                } return T; }, getJSON: function (e, t, n) { return be.get(e, t, n, 'json'); }, getScript: function (e, t) { return be.get(e, void 0, t, 'script'); } }), be.each(['get', 'post'], function (e, t) { be[t] = function (e, n, a, o) { return be.isFunction(n) && (o = o || a, a = n, n = void 0), be.ajax(be.extend({ url: e, type: t, dataType: o, data: n, success: a }, be.isPlainObject(e) && e)); }; }), be._evalUrl = function (e) { return be.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 }); }, be.fn.extend({ wrapAll: function (e) { if (be.isFunction(e))
                    return this.each(function (t) { be(this).wrapAll(e.call(this, t)); }); if (this[0]) {
                    var t = be(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                        e = e.firstChild; return e; }).append(this);
                } return this; }, wrapInner: function (e) { return be.isFunction(e) ? this.each(function (t) { be(this).wrapInner(e.call(this, t)); }) : this.each(function () { var t = be(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e); }); }, wrap: function (e) { var t = be.isFunction(e); return this.each(function (n) { be(this).wrapAll(t ? e.call(this, n) : e); }); }, unwrap: function () { return this.parent().each(function () { be.nodeName(this, 'body') || be(this).replaceWith(this.childNodes); }).end(); } }), be.expr.filters.hidden = function (e) { return ye.reliableHiddenOffsets() ? 0 >= e.offsetWidth && 0 >= e.offsetHeight && !e.getClientRects().length : ne(e); }, be.expr.filters.visible = function (e) { return !be.expr.filters.hidden(e); };
            var rn = /%20/g, ln = /\[\]$/, pn = /\r?\n/g, cn = /^(?:submit|button|image|reset|file)$/i, un = /^(?:input|select|textarea|keygen)/i;
            be.param = function (e, t) { var n, a = [], o = function (e, t) { t = be.isFunction(t) ? t() : null == t ? '' : t, a[a.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t); }; if (void 0 === t && (t = be.ajaxSettings && be.ajaxSettings.traditional), be.isArray(e) || e.jquery && !be.isPlainObject(e))
                be.each(e, function () { o(this.name, this.value); });
            else
                for (n in e)
                    ae(n, e[n], t, o); return a.join('&').replace(rn, '+'); }, be.fn.extend({ serialize: function () { return be.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var e = be.prop(this, 'elements'); return e ? be.makeArray(e) : this; }).filter(function () { var e = this.type; return this.name && !be(this).is(':disabled') && un.test(this.nodeName) && !cn.test(e) && (this.checked || !$e.test(e)); }).map(function (e, t) { var n = be(this).val(); return null == n ? null : be.isArray(n) ? be.map(n, function (e) { return { name: t.name, value: e.replace(pn, '\r\n') }; }) : { name: t.name, value: n.replace(pn, '\r\n') }; }).get(); } }), be.ajaxSettings.xhr = void 0 === o.ActiveXObject ? oe : function () { return this.isLocal ? ie() : 8 < le.documentMode ? oe() : /^(get|post|head|put|delete|options)$/i.test(this.type) && oe() || ie(); };
            var mn = 0, hn = {}, gn = be.ajaxSettings.xhr();
            o.attachEvent && o.attachEvent('onunload', function () { for (var e in hn)
                hn[e](void 0, !0); }), ye.cors = !!gn && 'withCredentials' in gn, gn = ye.ajax = !!gn, gn && be.ajaxTransport(function (e) { if (!e.crossDomain || ye.cors) {
                var t;
                return { send: function (n, a) { var d, i = e.xhr(), s = ++mn; if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (d in e.xhrFields)
                            i[d] = e.xhrFields[d]; for (d in e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest'), n)
                        void 0 !== n[d] && i.setRequestHeader(d, n[d] + ''); i.send(e.hasContent && e.data || null), t = function (n, o) { var d, r, l; if (t && (o || 4 === i.readyState))
                        if (delete hn[s], t = void 0, i.onreadystatechange = be.noop, o)
                            4 !== i.readyState && i.abort();
                        else {
                            l = {}, d = i.status, 'string' == typeof i.responseText && (l.text = i.responseText);
                            try {
                                r = i.statusText;
                            }
                            catch (t) {
                                r = '';
                            }
                            d || !e.isLocal || e.crossDomain ? 1223 === d && (d = 204) : d = l.text ? 200 : 404;
                        } l && a(d, r, l, i.getAllResponseHeaders()); }, e.async ? 4 === i.readyState ? o.setTimeout(t) : i.onreadystatechange = hn[s] = t : t(); }, abort: function () { t && t(void 0, !0); } };
            } }), be.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return be.globalEval(e), e; } } }), be.ajaxPrefilter('script', function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1); }), be.ajaxTransport('script', function (e) { if (e.crossDomain) {
                var t, n = le.head || be('head')[0] || le.documentElement;
                return { send: function (a, o) { t = le.createElement('script'), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, !n && o(200, 'success')); }, n.insertBefore(t, n.firstChild); }, abort: function () { t && t.onload(void 0, !0); } };
            } });
            var fn = [], yn = /(=)\?(?=&|$)|\?\?/;
            be.ajaxSetup({ jsonp: 'callback', jsonpCallback: function () { var e = fn.pop() || be.expando + '_' + Ut++; return this[e] = !0, e; } }), be.ajaxPrefilter('json jsonp', function (e, t, n) { var a, i, d, s = !1 !== e.jsonp && (yn.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && yn.test(e.data) && 'data'); if (s || 'jsonp' === e.dataTypes[0])
                return a = e.jsonpCallback = be.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(yn, '$1' + a) : !1 !== e.jsonp && (e.url += (Gt.test(e.url) ? '&' : '?') + e.jsonp + '=' + a), e.converters['script json'] = function () { return d || be.error(a + ' was not called'), d[0]; }, e.dataTypes[0] = 'json', i = o[a], o[a] = function () { d = arguments; }, n.always(function () { void 0 === i ? be(o).removeProp(a) : o[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, fn.push(a)), d && be.isFunction(i) && i(d[0]), d = i = void 0; }), 'script'; }), be.parseHTML = function (e, t, n) { if (!e || 'string' != typeof e)
                return null; 'boolean' == typeof t && (n = t, t = !1), t = t || le; var a = De.exec(e), o = !n && []; return a ? [t.createElement(a[1])] : (a = T([e], t, o), o && o.length && be(o).remove(), be.merge([], a.childNodes)); };
            var xn = be.fn.load;
            be.fn.load = function (e, t, n) { if ('string' != typeof e && xn)
                return xn.apply(this, arguments); var a, o, i, d = this, s = e.indexOf(' '); return -1 < s && (a = be.trim(e.slice(s, e.length)), e = e.slice(0, s)), be.isFunction(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (o = 'POST'), 0 < d.length && be.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t }).done(function (e) { i = arguments, d.html(a ? be('<div>').append(be.parseHTML(e)).find(a) : e); }).always(n && function (e, t) { d.each(function () { n.apply(this, i || [e.responseText, t, e]); }); }), this; }, be.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) { be.fn[t] = function (e) { return this.on(t, e); }; }), be.expr.filters.animated = function (e) { return be.grep(be.timers, function (t) { return e === t.elem; }).length; }, be.offset = { setOffset: function (e, t, n) { var a, o, i, d, s, r, l, p = be.css(e, 'position'), c = be(e), u = {}; 'static' === p && (e.style.position = 'relative'), s = c.offset(), i = be.css(e, 'top'), r = be.css(e, 'left'), l = ('absolute' === p || 'fixed' === p) && -1 < be.inArray('auto', [i, r]), l ? (a = c.position(), d = a.top, o = a.left) : (d = parseFloat(i) || 0, o = parseFloat(r) || 0), be.isFunction(t) && (t = t.call(e, n, be.extend({}, s))), null != t.top && (u.top = t.top - s.top + d), null != t.left && (u.left = t.left - s.left + o), 'using' in t ? t.using.call(e, u) : c.css(u); } }, be.fn.extend({ offset: function (e) { if (arguments.length)
                    return void 0 === e ? this : this.each(function (t) { be.offset.setOffset(this, e, t); }); var t, n, a = { top: 0, left: 0 }, o = this[0], i = o && o.ownerDocument; if (i)
                    return (t = i.documentElement, !be.contains(t, o)) ? a : ('undefined' != typeof o.getBoundingClientRect && (a = o.getBoundingClientRect()), n = de(i), { top: a.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: a.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }); }, position: function () { if (this[0]) {
                    var e, t, n = { top: 0, left: 0 }, a = this[0];
                    return 'fixed' === be.css(a, 'position') ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), !be.nodeName(e[0], 'html') && (n = e.offset()), n.top += be.css(e[0], 'borderTopWidth', !0), n.left += be.css(e[0], 'borderLeftWidth', !0)), { top: t.top - n.top - be.css(a, 'marginTop', !0), left: t.left - n.left - be.css(a, 'marginLeft', !0) };
                } }, offsetParent: function () { return this.map(function () { for (var e = this.offsetParent; e && !be.nodeName(e, 'html') && 'static' === be.css(e, 'position');)
                    e = e.offsetParent; return e || xt; }); } }), be.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) { var n = /Y/.test(t); be.fn[e] = function (a) { return Xe(this, function (e, a, o) { var i = de(e); return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[a] : e[a] : void (i ? i.scrollTo(n ? be(i).scrollLeft() : o, n ? o : be(i).scrollTop()) : e[a] = o); }, e, a, arguments.length, null); }; }), be.each(['top', 'left'], function (e, t) { be.cssHooks[t] = O(ye.pixelPosition, function (e, n) { if (n)
                return n = vt(e, t), ft.test(n) ? be(e).position()[t] + 'px' : n; }); }), be.each({ Height: 'height', Width: 'width' }, function (e, t) { be.each({ padding: 'inner' + e, content: t, "": 'outer' + e }, function (n, a) { be.fn[a] = function (a, o) { var i = arguments.length && (n || 'boolean' != typeof a), d = n || (!0 === a || !0 === o ? 'margin' : 'border'); return Xe(this, function (t, n, a) { var o; return be.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, se(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e])) : void 0 === a ? be.css(t, n, d) : be.style(t, n, a, d); }, t, i ? a : void 0, i, null); }; }); }), be.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n); }, unbind: function (e, t) { return this.off(e, null, t); }, delegate: function (e, t, n, a) { return this.on(t, e, n, a); }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n); } }), be.fn.size = function () { return this.length; }, be.fn.andSelf = be.fn.addBack, n = [], a = function () { return be; }.apply(t, n), !(void 0 !== a && (e.exports = a));
            var bn = o.jQuery, vn = o.$;
            return be.noConflict = function (e) { return o.$ === be && (o.$ = vn), e && o.jQuery === be && (o.jQuery = bn), be; }, d || (o.jQuery = o.$ = be), be;
        });
    }, "./src/Components/autoComplete.ts": /*!****************************************!*\
     !*** ./src/Components/autoComplete.ts ***!
     \****************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        var a = this && this.__awaiter || function (e, t, n, a) { function o(e) { return e instanceof n ? e : new n(function (t) { t(e); }); } return new (n || (n = Promise))(function (n, i) { function d(e) { try {
            r(a.next(e));
        }
        catch (t) {
            i(t);
        } } function s(e) { try {
            r(a['throw'](e));
        }
        catch (t) {
            i(t);
        } } function r(e) { e.done ? n(e.value) : o(e.value).then(d, s); } r((a = a.apply(e, t || [])).next()); }); }, o = this && this.__generator || function (e, n) { function a(e) { return function (t) { return o([e, t]); }; } function o(a) { if (i)
            throw new TypeError('Generator is already executing.'); for (; l;)
            try {
                if (i = 1, d && (s = 2 & a[0] ? d['return'] : a[0] ? d['throw'] || ((s = d['return']) && s.call(d), 0) : d.next) && !(s = s.call(d, a[1])).done)
                    return s;
                switch ((d = 0, s) && (a = [2 & a[0], s.value]), a[0]) {
                    case 0:
                    case 1:
                        s = a;
                        break;
                    case 4: return l.label++, { value: a[1], done: !1 };
                    case 5:
                        l.label++, d = a[1], a = [0];
                        continue;
                    case 7:
                        a = l.ops.pop(), l.trys.pop();
                        continue;
                    default:
                        if ((s = l.trys, !(s = 0 < s.length && s[s.length - 1])) && (6 === a[0] || 2 === a[0])) {
                            l = 0;
                            continue;
                        }
                        if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                            l.label = a[1];
                            break;
                        }
                        if (6 === a[0] && l.label < s[1]) {
                            l.label = s[1], s = a;
                            break;
                        }
                        if (s && l.label < s[2]) {
                            l.label = s[2], l.ops.push(a);
                            break;
                        }
                        s[2] && l.ops.pop(), l.trys.pop();
                        continue;
                }
                a = n.call(e, l);
            }
            catch (t) {
                a = [6, t], d = 0;
            }
            finally {
                i = s = 0;
            } if (5 & a[0])
            throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; } var i, d, s, r, l = { label: 0, sent: function () { if (1 & s[0])
                throw s[1]; return s[1]; }, trys: [], ops: [] }; return r = { next: a(0), "throw": a(1), "return": a(2) }, 'function' == typeof Symbol && (r[Symbol.iterator] = function () { return this; }), r; };
        t.__esModule = !0;
        var i = n(/*! jquery */ './node_modules/jquery/dist/jquery.js'), d = n(/*! . */ './src/Components/index.ts'), s = n(/*! ../utils */ './src/utils.ts');
        t['default'] = s.withErrorHandling(function (e) { var t = e.options, n = e.value, r = e.onInputChange, l = s.createElement({ tagName: 'div', props: { id: s.elementIdGenerator.gererate(), className: 'auto-complete' } }), p = document.createElement('input'); p.id = s.elementIdGenerator.gererate(), n && (p.value = n.label); var c = function () { return document.getElementById(p.id); }, u = function (e) { c().value = e; }, m = function (e) { return a(this, void 0, void 0, function () { var t; return o(this, function (n) { switch (n.label) {
            case 0: return [4, r(e)];
            case 1: return t = n.sent(), h.innerHTML = '', t.forEach(function (e) { var t = s.createElement({ tagName: 'div' }); t.innerHTML = e.label, t.onclick = function () { u(e.label); }, h.appendChild(t); }), [2];
        } }); }); }; p.onkeydown = function () { m(this.value); }, p.onfocus = function () { document.getElementById(h.id).style.display = 'block'; }; var h = d.Dropdown({}); return h = s.getElementWithClassNames(h, ['auto-complete__dropdown']), h = s.getElementWithStyle(h, [{ key: 'display', value: 'none' }]), h.id = s.elementIdGenerator.gererate(), t.forEach(function (e) { var t = document.createElement('div'); t.onclick = function () { u(e.label); }, t.innerHTML = e.label, h.appendChild(t); }), i(document).click(function (t) { var e = document.getElementById(h.id); 'none' === e.style.display || e.contains(t.target) || c().contains(t.target) || (e.style.display = 'none'); }), l.appendChild(p), l.appendChild(h), l; }, 'AutoComplete');
    }, "./src/Components/dropdown.ts": /*!************************************!*\
    !*** ./src/Components/dropdown.ts ***!
    \************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../utils */ './src/utils.ts');
        t['default'] = a.withErrorHandling(function (e) { var t = e.children, n = a.createElement({ tagName: 'div' }); return n = a.getElementWithClassNames(n, ['didgah-dropdown']), t && n.appendChild(t), n; }, 'DropDown');
    }, "./src/Components/dynamicData/gride.ts": /*!*********************************************!*\
    !*** ./src/Components/dynamicData/gride.ts ***!
    \*********************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        var a = this && this.__assign || function () { return a = Object.assign || function (e) { for (var t, a = 1, o = arguments.length; a < o; a++)
            for (var n in t = arguments[a], t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e; }, a.apply(this, arguments); }, o = this && this.__spreadArrays || function () { for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length; for (var o = Array(e), i = 0, t = 0; t < n; t++)
            for (var d = arguments[t], a = 0, s = d.length; a < s; a++, i++)
                o[i] = d[a]; return o; };
        t.__esModule = !0;
        var i = n(/*! jquery */ './node_modules/jquery/dist/jquery.js'), d = n(/*! ../../utils */ './src/utils.ts'), s = n(/*! ./staticComponents */ './src/Components/dynamicData/staticComponents.ts'), r = n(/*! .. */ './src/Components/index.ts');
        t.mapIntoTD = function (e) { return e.map(function (e) { var t = d.createElement({ tagName: 'td', props: a({}, e.cellProps) }); return t.appendChild(e.input), t; }); }, t['default'] = d.withErrorHandling(function (e) { function n(e) { var t = document.getElementById(b); t.removeChild(t.childNodes[e]); } function l(e) { var t = r.Modal({ htmlSrc: './dynamic-data-modal.html', dialogArguments: { fields: g.fields, formData: C[e], changeRowData: p } }); document.getElementById('root').appendChild(t); } function p(e, t) { for (var n in C[e] = t, t)
            i('input[name=\'' + n + '\']').value = t[n]; } var c = e.headers, u = e.displayCellRenderer, m = e.editCellRenderer, h = e.rowsData, g = void 0 === h ? {} : h, f = e.initialFormData, y = void 0 === f ? [] : f, x = d.elementIdGenerator.gererate(), b = d.elementIdGenerator.gererate(), v = o(y.map(function (e, d) { return { renderer: o(t.mapIntoTD([s.removeCell(d, n)]), t.mapIntoTD(g.fields.map(function (e) { return u(a(a({}, e), { formData: y[d][e.name] })); })), t.mapIntoTD([s.settingCell(d, l)])) }; }), [s.addNewRow(function () { var e = r.Modal({ htmlSrc: './dynamic-data-modal.html', dialogArguments: { fields: g.fields, editCellRenderer: m } }); document.getElementById('root').appendChild(e); })]), C = o(y); return function () { var e = d.createElement({ tagName: 'table', props: { className: 'table-base-row', id: x, dir: 'rtl' } }), t = d.createElement({ tagName: 'thead' }), n = d.createElement({ tagName: 'tr' }), a = d.createElement({ tagName: 'tbody', props: { id: b } }); n.appendChild(d.createElement({ tagName: 'th' })); for (var o = 0, i = c; o < i.length; o++) {
            var s = i[o], r = d.createElement({ tagName: 'th' });
            r.innerHTML = s, n.appendChild(r);
        } for (var l = 0, p = v; l < p.length; l++) {
            for (var u, m = p[l], h = d.createElement({ tagName: 'tr', props: {} }), g = 0, f = m.renderer; g < f.length; g++)
                u = f[g], h.appendChild(u);
            a.appendChild(h);
        } return t.appendChild(n), e.appendChild(t), e.appendChild(a), e; }(); }, 'TableBasedRow');
    }, "./src/Components/dynamicData/staticComponents.ts": /*!********************************************************!*\
    !*** ./src/Components/dynamicData/staticComponents.ts ***!
    \********************************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), o = n(/*! ../../utils */ './src/utils.ts');
        t.addNewRow = function (e) { return { renderer: a.mapIntoTD([{ input: o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__add-button', type: 'button', value: '+', onclick: function () { e(); } } }) }]) }; }, t.removeCell = function (e, t) { return { input: o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__remove-button', type: 'button', value: 'x', onclick: function () { t(e); } } }), cellProps: { style: { width: '50px' } } }; }, t.settingCell = function (e, t) { return { input: o.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__setting-button', type: 'button', value: '...', onclick: function () { t(e); } } }) }; };
    }, "./src/Components/index.ts": /*!*********************************!*\
    !*** ./src/Components/index.ts ***!
    \*********************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ./table */ './src/Components/table.ts');
        t.Table = a['default'];
        var o = n(/*! ./tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
        t.TableBaseOnRow = o['default'];
        var i = n(/*! ./modal */ './src/Components/modal.ts');
        t.Modal = i['default'];
        var d = n(/*! ./select */ './src/Components/select.ts');
        t.Select = d['default'];
        var s = n(/*! ./dropdown */ './src/Components/dropdown.ts');
        t.Dropdown = s['default'];
        var r = n(/*! ./autoComplete */ './src/Components/autoComplete.ts');
        t.autoCompelete = r['default'];
        var l = n(/*! ./withLabel */ './src/Components/withLabel.ts');
        t.withLabel = l['default'];
    }, "./src/Components/modal.ts": /*!*********************************!*\
    !*** ./src/Components/modal.ts ***!
    \*********************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../utils */ './src/utils.ts');
        t['default'] = a.withErrorHandling(function (e) { var t = e.htmlSrc, n = e.dialogArguments, a = void 0 === n ? {} : n, o = e.height, i = void 0 === o ? 250 : o, d = e.width, s = void 0 === d ? 850 : d; window.showModalDialog(t, a, 'dialogHeight:' + i + 'px;dialogWidth:' + s + 'px'); }, 'Modal');
    }, "./src/Components/select.ts": /*!**********************************!*\
    !*** ./src/Components/select.ts ***!
    \**********************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../utils */ './src/utils.ts');
        t['default'] = a.withErrorHandling(function (e) { var t = e.options, n = e.value, o = e.name, i = a.createElement({ tagName: 'select', props: { value: n, name: o } }); return t.map(function (e) { var t = a.createElement({ tagName: 'option' }); t.setAttribute('value', e.value), t.innerHTML = e.label, i.appendChild(t); }), i; }, 'Select');
    }, "./src/Components/table.ts": /*!*********************************!*\
    !*** ./src/Components/table.ts ***!
    \*********************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../utils */ './src/utils.ts');
        t['default'] = a.withErrorHandling(function (e) { for (var t = e.dataSource, n = e.columns, o = n.map(function (e) { return e.dataIndex; }), i = a.createElement({ tagName: 'table' }), s = a.createElement({ tagName: 'thead' }), r = a.createElement({ tagName: 'tr' }), l = a.createElement({ tagName: 'tbody' }), p = 0, c = n; p < c.length; p++) {
            var u = c[p], m = a.createElement({ tagName: 'th' });
            m.innerHTML = u.title, r.appendChild(m);
        } for (var h = 0, g = t; h < g.length; h++) {
            for (var f, y = g[h], d = a.createElement({ tagName: 'tr' }), x = [], b = function (e) { var t = a.createElement({ tagName: 'td' }), o = n.find(function (t) { return t.dataIndex === e; }).renderer; if (o) {
                var i = o(y);
                a.isObjectDomElement(i) ? t.appendChild(i) : t.innerHTML = i;
            }
            else
                t.innerHTML = y[e]; x.push(t); }, v = 0, C = o; v < C.length; v++)
                f = C[v], b(f);
            for (var T, w = 0, N = x; w < N.length; w++)
                T = N[w], d.appendChild(T);
            l.appendChild(d);
        } return s.appendChild(r), i.appendChild(s), i.appendChild(l), i; }, 'Table');
    }, "./src/Components/tableBaseOnRow.ts": /*!******************************************!*\
    !*** ./src/Components/tableBaseOnRow.ts ***!
    \******************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        var a = this && this.__assign || function () { return a = Object.assign || function (e) { for (var t, a = 1, o = arguments.length; a < o; a++)
            for (var n in t = arguments[a], t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e; }, a.apply(this, arguments); };
        t.__esModule = !0;
        var o = n(/*! ../utils */ './src/utils.ts');
        t.mapIntoTD = function (e) { return e.map(function (e) { var t = o.createElement({ tagName: 'td', props: a({}, e.cellProps) }); return t.appendChild(e.input), t; }); }, t['default'] = o.withErrorHandling(function (e) { for (var t = e.rows, n = o.createElement({ tagName: 'table', props: { className: 'table-base-row' } }), a = o.createElement({ tagName: 'tbody' }), i = 0, d = t; i < d.length; i++) {
            for (var s, r = d[i], l = o.createElement({ tagName: 'tr', props: {} }), p = 0, c = r.renderer; p < c.length; p++)
                s = c[p], l.appendChild(s);
            a.appendChild(l);
        } return n.appendChild(a), n; }, 'TableBasedRow');
    }, "./src/Components/withLabel.ts": /*!*************************************!*\
    !*** ./src/Components/withLabel.ts ***!
    \*************************************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ../utils */ './src/utils.ts');
        t['default'] = a.withErrorHandling(function (e, t) { var n = a.createElement({ tagName: 'div', props: { className: 'with-label' } }), o = a.createElement({ tagName: 'label', props: { className: 'with-label__label' } }); return o.innerHTML = t, n.appendChild(o), n.appendChild(e), n; }, 'withLabel');
    }, "./src/main.ts": /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! ./Components/dynamicData/gride */ './src/Components/dynamicData/gride.ts'), o = n(/*! ./utils */ './src/utils.ts'), i = n(/*! ./Components */ './src/Components/index.ts');
        window.withLabel = i.withLabel, window.mapIntoTD = a.mapIntoTD, window.createElement = o.createElement, window.DynamicDataGrid = a['default'];
    }, "./src/utils.ts": /*!**********************!*\
    !*** ./src/utils.ts ***!
    \**********************/ /*! no static exports found */ function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var a = n(/*! jquery */ './node_modules/jquery/dist/jquery.js');
        t.container = document.getElementById('root'), t.isObjectDomElement = function (e) { return e.scopeName && 'HTML' === e.scopeName; }, t.getElementWithStyle = function (e, t) { var n = e.cloneNode(); return t.forEach(function (e) { n.style[e.key] = e.value; }), n; }, t.renderIntoRoot = function (e) { t.container.appendChild(e); }, t.getElementWithClassNames = function (e, t) { var n = e.cloneNode(!0); return t.forEach(function (e) { n.className += ' ' + e; }), n; }, t.elementIdGenerator = { busyIds: [], gererate: function () { var e = 10 * Math.random(); return 0 !== a('#' + e).length || this.busyIds.find(function (t) { return t === e; }) ? void this.gererate() : (this.busyIds.push(e), e.toString()); } }, t.createElement = function (e) { var n = e.tagName, o = e.props, i = e.onMount, d = document.createElement(n), s = t.elementIdGenerator; for (var r in o)
            if ('style' === r)
                for (var l in o[r])
                    d.style[l] = o[r][l];
            else
                d[r] = o[r]; return i && ((!o || !o.id) && (d.id = s.gererate()), a(d.id).ready(function () { i(); })), d; }, t.withErrorHandling = function (e, t) { return function () { for (var n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a]; try {
            return e.apply(void 0, n);
        }
        catch (n) {
            console.error('error happend in' + t, n);
        } }; }, t.formToJSON = function (e) { var t = {}; return a(e).find(':input[name]:enabled').each(function () { var e = a(this), n = e.attr('name'); t[n] = t[n] ? t[n] + ',' + e.val() : e.val(); }), t; };
    }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (e, t, n) { e.exports = n(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
