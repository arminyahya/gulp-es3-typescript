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
(function (modules) { function __webpack_require__(moduleId) { if (installedModules[moduleId])
    return installedModules[moduleId].exports; var module = installedModules[moduleId] = { i: moduleId, l: !1, exports: {} }; return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports; } var installedModules = {}; return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) { __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: !0, get: getter }); }, __webpack_require__.r = function (exports) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(exports, '__esModule', { value: !0 }); }, __webpack_require__.t = function (value, mode) { if (1 & mode && (value = __webpack_require__(value)), 8 & mode)
    return value; if (4 & mode && 'object' == typeof value && value && value.__esModule)
    return value; var ns = Object.create(null); if (__webpack_require__.r(ns), Object.defineProperty(ns, 'default', { enumerable: !0, value: value }), 2 & mode && 'string' != typeof value)
    for (var key in value)
        __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key)); return ns; }, __webpack_require__.n = function (module) { var getter = module && module.__esModule ? function () { return module['default']; } : function () { return module; }; return __webpack_require__.d(getter, 'a', getter), getter; }, __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); }, __webpack_require__.p = '', __webpack_require__(__webpack_require__.s = 0); })({ "./node_modules/jquery/dist/jquery.js": /*!********************************************!*\
      !*** ./node_modules/jquery/dist/jquery.js ***!
      \********************************************/ /*! no static exports found */ function (module, exports) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
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
        (function (global, factory) { 'object' == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function (w) { if (!w.document)
            throw new Error('jQuery requires a window with a document'); return factory(w); } : factory(global); })('undefined' == typeof window ? this : window, function (window, noGlobal) {
            function isArrayLike(obj) { var length = !!obj && 'length' in obj && obj.length, type = jQuery.type(obj); return !('function' === type || jQuery.isWindow(obj)) && ('array' === type || 0 === length || 'number' == typeof length && 0 < length && length - 1 in obj); }
            function winnow(elements, qualifier, not) { if (jQuery.isFunction(qualifier))
                return jQuery.grep(elements, function (elem, i) { return !!qualifier.call(elem, i, elem) !== not; }); if (qualifier.nodeType)
                return jQuery.grep(elements, function (elem) { return elem === qualifier !== not; }); if ('string' == typeof qualifier) {
                if (risSimple.test(qualifier))
                    return jQuery.filter(qualifier, elements, not);
                qualifier = jQuery.filter(qualifier, elements);
            } return jQuery.grep(elements, function (elem) { return -1 < jQuery.inArray(elem, qualifier) !== not; }); }
            function sibling(cur, dir) { do
                cur = cur[dir];
            while (cur && 1 !== cur.nodeType); return cur; }
            function createOptions(options) { var object = {}; return jQuery.each(options.match(rnotwhite) || [], function (_, flag) { object[flag] = !0; }), object; }
            function detach() { document.addEventListener ? (document.removeEventListener('DOMContentLoaded', completed), window.removeEventListener('load', completed)) : (document.detachEvent('onreadystatechange', completed), window.detachEvent('onload', completed)); }
            function completed() { (document.addEventListener || 'load' === window.event.type || 'complete' === document.readyState) && (detach(), jQuery.ready()); }
            function dataAttr(elem, key, data) { if (void 0 === data && 1 === elem.nodeType) {
                var name = 'data-' + key.replace(rmultiDash, '-$1').toLowerCase();
                if (data = elem.getAttribute(name), 'string' == typeof data) {
                    try {
                        data = 'true' === data || 'false' !== data && ('null' === data ? null : +data + '' === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data);
                    }
                    catch (e) { }
                    jQuery.data(elem, key, data);
                }
                else
                    data = void 0;
            } return data; }
            function isEmptyDataObject(obj) { for (var name in obj)
                if (!('data' === name && jQuery.isEmptyObject(obj[name])) && 'toJSON' !== name)
                    return !1; return !0; }
            function internalData(elem, name, data, pvt) { if (acceptData(elem)) {
                var internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey, ret, thisCache;
                if (id && cache[id] && (pvt || cache[id].data) || void 0 !== data || 'string' != typeof name)
                    return id || (isNode ? id = elem[internalKey] = deletedIds.pop() || jQuery.guid++ : id = internalKey), cache[id] || (cache[id] = isNode ? {} : { toJSON: jQuery.noop }), ('object' == typeof name || 'function' == typeof name) && (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (!thisCache.data && (thisCache.data = {}), thisCache = thisCache.data), void 0 !== data && (thisCache[jQuery.camelCase(name)] = data), 'string' == typeof name ? (ret = thisCache[name], null == ret && (ret = thisCache[jQuery.camelCase(name)])) : ret = thisCache, ret;
            } }
            function internalRemoveData(elem, name, pvt) { if (acceptData(elem)) {
                var isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando, thisCache, i;
                if (cache[id]) {
                    if (name && (thisCache = pvt ? cache[id] : cache[id].data, thisCache)) {
                        for (jQuery.isArray(name) ? name = name.concat(jQuery.map(name, jQuery.camelCase)) : (name in thisCache) ? name = [name] : (name = jQuery.camelCase(name), name = (name in thisCache) ? [name] : name.split(' ')), i = name.length; i--;)
                            delete thisCache[name[i]];
                        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache))
                            return;
                    }
                    !pvt && (delete cache[id].data, !isEmptyDataObject(cache[id])) || (isNode ? jQuery.cleanData([elem], !0) : support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = void 0);
                }
            } }
            function adjustCSS(elem, prop, valueParts, tween) { var scale = 1, maxIterations = 20, currentValue = tween ? function () { return tween.cur(); } : function () { return jQuery.css(elem, prop, ''); }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? '' : 'px'), initialInUnit = (jQuery.cssNumber[prop] || 'px' !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop)), adjusted; if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
                do
                    scale = scale || '.5', initialInUnit /= scale, jQuery.style(elem, prop, initialInUnit + unit);
                while (scale != (scale = currentValue() / initial) && 1 != scale && --maxIterations);
            } return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted; }
            function createSafeFragment(document) { var list = nodeNames.split('|'), safeFrag = document.createDocumentFragment(); if (safeFrag.createElement)
                for (; list.length;)
                    safeFrag.createElement(list.pop()); return safeFrag; }
            function getAll(context, tag) { var i = 0, found = 'undefined' == typeof context.getElementsByTagName ? 'undefined' == typeof context.querySelectorAll ? void 0 : context.querySelectorAll(tag || '*') : context.getElementsByTagName(tag || '*'), elems, elem; if (!found)
                for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++)
                    !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag)); return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found; }
            function setGlobalEval(elems, refElements) { for (var i = 0, elem; null != (elem = elems[i]); i++)
                jQuery._data(elem, 'globalEval', !refElements || jQuery._data(refElements[i], 'globalEval')); }
            function fixDefaultChecked(elem) { rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked); }
            function buildFragment(elems, context, scripts, selection, ignored) { for (var l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0, j, elem, contains, tmp, tag, tbody, wrap; i < l; i++)
                if (elem = elems[i], elem || 0 === elem)
                    if ('object' === jQuery.type(elem))
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                    else if (!rhtml.test(elem))
                        nodes.push(context.createTextNode(elem));
                    else {
                        for (tmp = tmp || safe.appendChild(context.createElement('div')), tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--;)
                            tmp = tmp.lastChild;
                        if (!support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !support.tbody)
                            for (elem = 'table' !== tag || rtbody.test(elem) ? '<table>' !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild, j = elem && elem.childNodes.length; j--;)
                                jQuery.nodeName(tbody = elem.childNodes[j], 'tbody') && !tbody.childNodes.length && elem.removeChild(tbody);
                        for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ''; tmp.firstChild;)
                            tmp.removeChild(tmp.firstChild);
                        tmp = safe.lastChild;
                    } for (tmp && safe.removeChild(tmp), support.appendChecked || jQuery.grep(getAll(nodes, 'input'), fixDefaultChecked), i = 0; elem = nodes[i++];) {
                if (selection && -1 < jQuery.inArray(elem, selection)) {
                    ignored && ignored.push(elem);
                    continue;
                }
                if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), 'script'), contains && setGlobalEval(tmp), scripts)
                    for (j = 0; elem = tmp[j++];)
                        rscriptType.test(elem.type || '') && scripts.push(elem);
            } return tmp = null, safe; }
            function returnTrue() { return !0; }
            function returnFalse() { return !1; }
            function safeActiveElement() { try {
                return document.activeElement;
            }
            catch (err) { } }
            function on(elem, types, selector, data, fn, one) { var origFn, type; if ('object' == typeof types) {
                for (type in 'string' != typeof selector && (data = data || selector, selector = void 0), types)
                    on(elem, type, selector, data, types[type], one);
                return elem;
            } if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ('string' == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), !1 === fn)
                fn = returnFalse;
            else if (!fn)
                return elem; return 1 === one && (origFn = fn, fn = function (event) { return jQuery().off(event), origFn.apply(this, arguments); }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function () { jQuery.event.add(this, types, fn, data, selector); }); }
            function manipulationTarget(elem, content) { return jQuery.nodeName(elem, 'table') && jQuery.nodeName(11 === content.nodeType ? content.firstChild : content, 'tr') ? elem.getElementsByTagName('tbody')[0] || elem.appendChild(elem.ownerDocument.createElement('tbody')) : elem; }
            function disableScript(elem) { return elem.type = (null !== jQuery.find.attr(elem, 'type')) + '/' + elem.type, elem; }
            function restoreScript(elem) { var match = rscriptTypeMasked.exec(elem.type); return match ? elem.type = match[1] : elem.removeAttribute('type'), elem; }
            function cloneCopyEvent(src, dest) { if (1 === dest.nodeType && jQuery.hasData(src)) {
                var oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events, type, i, l;
                if (events)
                    for (type in delete curData.handle, curData.events = {}, events)
                        for (i = 0, l = events[type].length; i < l; i++)
                            jQuery.event.add(dest, type, events[type][i]);
                curData.data && (curData.data = jQuery.extend({}, curData.data));
            } }
            function fixCloneNodeIssues(src, dest) { var nodeName, e, data; if (1 === dest.nodeType) {
                if (nodeName = dest.nodeName.toLowerCase(), !support.noCloneEvent && dest[jQuery.expando]) {
                    for (e in data = jQuery._data(dest), data.events)
                        jQuery.removeEvent(dest, e, data.handle);
                    dest.removeAttribute(jQuery.expando);
                }
                'script' === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : 'object' === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : 'input' === nodeName && rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : 'option' === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : ('input' === nodeName || 'textarea' === nodeName) && (dest.defaultValue = src.defaultValue);
            } }
            function domManip(collection, args, callback, ignored) { args = concat.apply([], args); var i = 0, l = collection.length, value = args[0], isFunction = jQuery.isFunction(value), first, node, hasScripts, scripts, doc, fragment; if (isFunction || 1 < l && 'string' == typeof value && !support.checkClone && rchecked.test(value))
                return collection.each(function (index) { var self = collection.eq(index); isFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored); }); if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
                for (scripts = jQuery.map(getAll(fragment, 'script'), disableScript), hasScripts = scripts.length; i < l; i++)
                    node = fragment, i != l - 1 && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, 'script'))), callback.call(collection[i], node, i);
                if (hasScripts)
                    for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++)
                        node = scripts[i], rscriptType.test(node.type || '') && !jQuery._data(node, 'globalEval') && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || '').replace(rcleanScript, '')));
                fragment = first = null;
            } return collection; }
            function remove(elem, selector, keepData) { for (var elems = selector ? jQuery.filter(selector, elem) : elem, i = 0, node; null != (node = elems[i]); i++)
                keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, 'script')), node.parentNode.removeChild(node)); return elem; }
            function actualDisplay(name, doc) { var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], 'display'); return elem.detach(), display; }
            function defaultDisplay(nodeName) { var doc = document, display = elemdisplay[nodeName]; return display || (display = actualDisplay(nodeName, doc), ('none' === display || !display) && (iframe = (iframe || jQuery('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display; }
            function addGetHookIf(conditionFn, hookFn) { return { get: function () { return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments); } }; }
            function vendorPropName(name) { if (name in emptyStyle)
                return name; for (var capName = name.charAt(0).toUpperCase() + name.slice(1), i = cssPrefixes.length; i--;)
                if (name = cssPrefixes[i] + capName, name in emptyStyle)
                    return name; }
            function showHide(elements, show) { for (var values = [], index = 0, length = elements.length, display, elem, hidden; index < length; index++)
                (elem = elements[index], !!elem.style) && (values[index] = jQuery._data(elem, 'olddisplay'), display = elem.style.display, show ? (!values[index] && 'none' === display && (elem.style.display = ''), '' === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, 'olddisplay', defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display && 'none' !== display || !hidden) && jQuery._data(elem, 'olddisplay', hidden ? display : jQuery.css(elem, 'display')))); for (index = 0; index < length; index++)
                (elem = elements[index], !!elem.style) && (show && 'none' !== elem.style.display && '' !== elem.style.display || (elem.style.display = show ? values[index] || '' : 'none')); return elements; }
            function setPositiveNumber(elem, value, subtract) { var matches = rnumsplit.exec(value); return matches ? _Mathmax(0, matches[1] - (subtract || 0)) + (matches[2] || 'px') : value; }
            function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) { for (var i = extra === (isBorderBox ? 'border' : 'content') ? 4 : 'width' === name ? 1 : 0, val = 0; 4 > i; i += 2)
                'margin' === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ('content' === extra && (val -= jQuery.css(elem, 'padding' + cssExpand[i], !0, styles)), 'margin' !== extra && (val -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', !0, styles))) : (val += jQuery.css(elem, 'padding' + cssExpand[i], !0, styles), 'padding' !== extra && (val += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', !0, styles))); return val; }
            function getWidthOrHeight(elem, name, extra) { var valueIsBorderBox = !0, val = 'width' === name ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing && 'border-box' === jQuery.css(elem, 'boxSizing', !1, styles); if (0 >= val || null == val) {
                if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), rnumnonpx.test(val))
                    return val;
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0;
            } return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? 'border' : 'content'), valueIsBorderBox, styles) + 'px'; }
            function Tween(elem, options, prop, end, easing) { return new Tween.prototype.init(elem, options, prop, end, easing); }
            function createFxNow() { return window.setTimeout(function () { fxNow = void 0; }), fxNow = jQuery.now(); }
            function genFx(type, includeWidth) { var attrs = { height: type }, i = 0, which; for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth)
                which = cssExpand[i], attrs['margin' + which] = attrs['padding' + which] = type; return includeWidth && (attrs.opacity = attrs.width = type), attrs; }
            function createTween(value, prop, animation) { for (var collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners['*']), index = 0, length = collection.length, tween; index < length; index++)
                if (tween = collection[index].call(animation, prop, value))
                    return tween; }
            function defaultPrefilter(elem, props, opts) { var anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, 'fxshow'), prop, value, toggle, tween, hooks, oldfire, display, checkDisplay; for (prop in opts.queue || (hooks = jQuery._queueHooks(elem, 'fx'), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function () { hooks.unqueued || oldfire(); }), hooks.unqueued++, anim.always(function () { anim.always(function () { hooks.unqueued--, jQuery.queue(elem, 'fx').length || hooks.empty.fire(); }); })), 1 === elem.nodeType && ('height' in props || 'width' in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, 'display'), checkDisplay = 'none' === display ? jQuery._data(elem, 'olddisplay') || defaultDisplay(elem.nodeName) : display, 'inline' === checkDisplay && 'none' === jQuery.css(elem, 'float') && (support.inlineBlockNeedsLayout && 'inline' !== defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = 'inline-block')), opts.overflow && (style.overflow = 'hidden', !support.shrinkWrapBlocks() && anim.always(function () { style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]; })), props)
                if (value = props[prop], rfxtypes.exec(value)) {
                    if (delete props[prop], toggle = toggle || 'toggle' === value, value === (hidden ? 'hide' : 'show'))
                        if ('show' === value && dataShow && void 0 !== dataShow[prop])
                            hidden = !0;
                        else
                            continue;
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                }
                else
                    display = void 0; if (!jQuery.isEmptyObject(orig))
                for (prop in dataShow ? 'hidden' in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, 'fxshow', {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function () { jQuery(elem).hide(); }), anim.done(function () { for (var prop in jQuery._removeData(elem, 'fxshow'), orig)
                    jQuery.style(elem, prop, orig[prop]); }), orig)
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = 'width' === prop || 'height' === prop ? 1 : 0));
            else
                'inline' === ('none' === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display); }
            function propFilter(props, specialEasing) { var index, name, easing, value, hooks; for (index in props)
                if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index != name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && 'expand' in hooks)
                    for (index in value = hooks.expand(value), delete props[name], value)
                        index in props || (props[index] = value[index], specialEasing[index] = easing);
                else
                    specialEasing[name] = easing; }
            function Animation(elem, properties, options) { var index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function () { delete tick.elem; }), tick = function () { if (stopped)
                return !1; for (var currentTime = fxNow || createFxNow(), remaining = _Mathmax(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++)
                animation.tweens[index].run(percent); return deferred.notifyWith(elem, [animation, percent, remaining]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [animation]), !1); }, animation = deferred.promise({ elem: elem, props: jQuery.extend({}, properties), opts: jQuery.extend(!0, { specialEasing: {}, easing: jQuery.easing._default }, options), originalProperties: properties, originalOptions: options, startTime: fxNow || createFxNow(), duration: options.duration, tweens: [], createTween: function (prop, end) { var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing); return animation.tweens.push(tween), tween; }, stop: function (gotoEnd) { var index = 0, length = gotoEnd ? animation.tweens.length : 0; if (stopped)
                    return this; for (stopped = !0; index < length; index++)
                    animation.tweens[index].run(1); return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this; } }), props = animation.props, result, stopped; for (propFilter(props, animation.opts.specialEasing); index < length; index++)
                if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts), result)
                    return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result; return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always); }
            function getClass(elem) { return jQuery.attr(elem, 'class') || ''; }
            function addToPrefiltersOrTransports(structure) { return function (dataTypeExpression, func) { 'string' != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = '*'); var i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [], dataType; if (jQuery.isFunction(func))
                for (; dataType = dataTypes[i++];)
                    '+' === dataType.charAt(0) ? (dataType = dataType.slice(1) || '*', (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func); }; }
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) { function inspect(dataType) { var selected; return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) { var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR); return 'string' != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1); }), selected; } var inspected = {}, seekingTransport = structure === transports; return inspect(options.dataTypes[0]) || !inspected['*'] && inspect('*'); }
            function ajaxExtend(target, src) { var flatOptions = jQuery.ajaxSettings.flatOptions || {}, deep, key; for (key in src)
                void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]); return deep && jQuery.extend(!0, target, deep), target; }
            function ajaxHandleResponses(s, jqXHR, responses) { for (var contents = s.contents, dataTypes = s.dataTypes, firstDataType, ct, finalDataType, type; '*' === dataTypes[0];)
                dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader('Content-Type')); if (ct)
                for (type in contents)
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    } if (dataTypes[0] in responses)
                finalDataType = dataTypes[0];
            else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    firstDataType || (firstDataType = type);
                }
                finalDataType = finalDataType || firstDataType;
            } return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]) : void 0; }
            function ajaxConvert(s, response, jqXHR, isSuccess) { var converters = {}, dataTypes = s.dataTypes.slice(), conv2, current, conv, tmp, prev; if (dataTypes[1])
                for (conv in s.converters)
                    converters[conv.toLowerCase()] = s.converters[conv]; for (current = dataTypes.shift(); current;)
                if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift(), current)
                    if ('*' === current)
                        current = prev;
                    else if ('*' !== prev && prev != current) {
                        if (conv = converters[prev + ' ' + current] || converters['* ' + current], !conv)
                            for (conv2 in converters)
                                if (tmp = conv2.split(' '), tmp[1] === current && (conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]], conv)) {
                                    !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0], dataTypes.unshift(tmp[1]));
                                    break;
                                }
                        if (!0 !== conv)
                            if (conv && s.throws)
                                response = conv(response);
                            else
                                try {
                                    response = conv(response);
                                }
                                catch (e) {
                                    return { state: 'parsererror', error: conv ? e : 'No conversion from ' + prev + ' to ' + current };
                                }
                    } return { state: 'success', data: response }; }
            function getDisplay(elem) { return elem.style && elem.style.display || jQuery.css(elem, 'display'); }
            function filterHidden(elem) { if (!jQuery.contains(elem.ownerDocument || document, elem))
                return !0; for (; elem && 1 === elem.nodeType;) {
                if ('none' === getDisplay(elem) || 'hidden' === elem.type)
                    return !0;
                elem = elem.parentNode;
            } return !1; }
            function buildParams(prefix, obj, traditional, add) { if (jQuery.isArray(obj))
                jQuery.each(obj, function (i, v) { traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + '[' + ('object' == typeof v && null != v ? i : '') + ']', v, traditional, add); });
            else if (!traditional && 'object' === jQuery.type(obj))
                for (var name in obj)
                    buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
            else
                add(prefix, obj); }
            function createStandardXHR() { try {
                return new window.XMLHttpRequest;
            }
            catch (e) { } }
            function createActiveXHR() { try {
                return new window.ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (e) { } }
            function getWindow(elem) { return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && (elem.defaultView || elem.parentWindow); }
            var _Mathmax = Math.max, deletedIds = [], document = window.document, slice = deletedIds.slice, concat = deletedIds.concat, push = deletedIds.push, indexOf = deletedIds.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {}, version = '1.12.4', jQuery = function (selector, context) { return new jQuery.fn.init(selector, context); }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (all, letter) { return letter.toUpperCase(); };
            jQuery.fn = jQuery.prototype = { jquery: version, constructor: jQuery, selector: '', length: 0, toArray: function () { return slice.call(this); }, get: function (num) { return null == num ? slice.call(this) : 0 > num ? this[num + this.length] : this[num]; }, pushStack: function (elems) { var ret = jQuery.merge(this.constructor(), elems); return ret.prevObject = this, ret.context = this.context, ret; }, each: function (callback) { return jQuery.each(this, callback); }, map: function (callback) { return this.pushStack(jQuery.map(this, function (elem, i) { return callback.call(elem, i, elem); })); }, slice: function () { return this.pushStack(slice.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (i) { var len = this.length, j = +i + (0 > i ? len : 0); return this.pushStack(0 <= j && j < len ? [this[j]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: push, sort: deletedIds.sort, splice: deletedIds.splice }, jQuery.extend = jQuery.fn.extend = function () { var target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1, src, copyIsArray, copy, name, options, clone; for ('boolean' == typeof target && (deep = target, target = arguments[i] || {}, i++), 'object' == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++)
                if (null != (options = arguments[i]))
                    for (name in options)
                        (src = target[name], copy = options[name], target !== copy) && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy)); return target; }, jQuery.extend({ expando: 'jQuery' + (version + Math.random()).replace(/\D/g, ''), isReady: !0, error: function (msg) { throw new Error(msg); }, noop: function () { }, isFunction: function (obj) { return 'function' === jQuery.type(obj); }, isArray: Array.isArray || function (obj) { return 'array' === jQuery.type(obj); }, isWindow: function (obj) { return null != obj && obj == obj.window; }, isNumeric: function (obj) { var realStringObj = obj && obj.toString(); return !jQuery.isArray(obj) && 0 <= realStringObj - parseFloat(realStringObj) + 1; }, isEmptyObject: function (obj) { for (var name in obj)
                    return !1; return !0; }, isPlainObject: function (obj) { if (!obj || 'object' !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj))
                    return !1; try {
                    if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'))
                        return !1;
                }
                catch (e) {
                    return !1;
                } if (!support.ownFirst)
                    for (var key in obj)
                        return hasOwn.call(obj, key); for (key in obj)
                    ; return void 0 == key || hasOwn.call(obj, key); }, type: function (obj) { return null == obj ? obj + '' : 'object' == typeof obj || 'function' == typeof obj ? class2type[toString.call(obj)] || 'object' : typeof obj; }, globalEval: function (data) { data && jQuery.trim(data) && (window.execScript || function (data) { window.eval.call(window, data); })(data); }, camelCase: function (string) { return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase); }, nodeName: function (elem, name) { return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase(); }, each: function (obj, callback) { var i = 0, length; if (isArrayLike(obj))
                    for (length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++)
                        ;
                else
                    for (i in obj)
                        if (!1 === callback.call(obj[i], i, obj[i]))
                            break; return obj; }, trim: function (text) { return null == text ? '' : (text + '').replace(rtrim, ''); }, makeArray: function (arr, results) { var ret = results || []; return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, 'string' == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret; }, inArray: function (elem, arr, i) { var len; if (arr) {
                    if (indexOf)
                        return indexOf.call(arr, elem, i);
                    for (len = arr.length, i = i ? 0 > i ? _Mathmax(0, len + i) : i : 0; i < len; i++)
                        if (i in arr && arr[i] === elem)
                            return i;
                } return -1; }, merge: function (first, second) { for (var len = +second.length, j = 0, i = first.length; j < len;)
                    first[i++] = second[j++]; if (len != len)
                    for (; void 0 !== second[j];)
                        first[i++] = second[j++]; return first.length = i, first; }, grep: function (elems, callback, invert) { for (var matches = [], i = 0, length = elems.length, callbackInverse; i < length; i++)
                    callbackInverse = !callback(elems[i], i), callbackInverse !== !invert && matches.push(elems[i]); return matches; }, map: function (elems, callback, arg) { var i = 0, ret = [], length, value; if (isArrayLike(elems))
                    for (length = elems.length; i < length; i++)
                        value = callback(elems[i], i, arg), null != value && ret.push(value);
                else
                    for (i in elems)
                        value = callback(elems[i], i, arg), null != value && ret.push(value); return concat.apply([], ret); }, guid: 1, proxy: function (fn, context) { var args, proxy, tmp; if ('string' == typeof context && (tmp = fn[context], context = fn, fn = tmp), !!jQuery.isFunction(fn))
                    return args = slice.call(arguments, 2), proxy = function () { return fn.apply(context || this, args.concat(slice.call(arguments))); }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy; }, now: function () { return +new Date; }, support: support }), 'function' == typeof Symbol && (jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator]), jQuery.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'], function (i, name) { class2type['[object ' + name + ']'] = name.toLowerCase(); });
            var Sizzle = /*!
            * Sizzle CSS Selector Engine v2.2.1
            * http://sizzlejs.com/
            *
            * Copyright jQuery Foundation and other contributors
            * Released under the MIT license
            * http://jquery.org/license
            *
            * Date: 2015-10-17
            */ function (window) { function Sizzle(selector, context, results, seed) { var newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9, m, i, elem, nid, nidselect, match, groups, newSelector; if (results = results || [], 'string' != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType)
                return results; if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
                if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                    if (!(m = match[1])) {
                        if (match[2])
                            return push.apply(results, context.getElementsByTagName(selector)), results;
                        if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName)
                            return push.apply(results, context.getElementsByClassName(m)), results;
                    }
                    else if (9 === nodeType) {
                        if (!(elem = context.getElementById(m)))
                            return results;
                        if (elem.id === m)
                            return results.push(elem), results;
                    }
                    else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m)
                        return results.push(elem), results;
                if (support.qsa && !compilerCache[selector + ' '] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    if (1 !== nodeType)
                        newContext = context, newSelector = selector;
                    else if ('object' !== context.nodeName.toLowerCase()) {
                        for ((nid = context.getAttribute('id')) ? nid = nid.replace(rescape, '\\$&') : context.setAttribute('id', nid = expando), groups = tokenize(selector), i = groups.length, nidselect = ridentifier.test(nid) ? '#' + nid : '[id=\'' + nid + '\']'; i--;)
                            groups[i] = nidselect + ' ' + toSelector(groups[i]);
                        newSelector = groups.join(','), newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    }
                    if (newSelector)
                        try {
                            return push.apply(results, newContext.querySelectorAll(newSelector)), results;
                        }
                        catch (qsaError) { }
                        finally {
                            nid === expando && context.removeAttribute('id');
                        }
                }
            } return select(selector.replace(rtrim, '$1'), context, results, seed); } function createCache() { function cache(key, value) { return keys.push(key + ' ') > Expr.cacheLength && delete cache[keys.shift()], cache[key + ' '] = value; } var keys = []; return cache; } function markFunction(fn) { return fn[expando] = !0, fn; } function assert(fn) { var div = document.createElement('div'); try {
                return !!fn(div);
            }
            catch (e) {
                return !1;
            }
            finally {
                div.parentNode && div.parentNode.removeChild(div), div = null;
            } } function addHandle(attrs, handler) { for (var arr = attrs.split('|'), i = arr.length; i--;)
                Expr.attrHandle[arr[i]] = handler; } function siblingCheck(a, b) { var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); if (diff)
                return diff; if (cur)
                for (; cur = cur.nextSibling;)
                    if (cur === b)
                        return -1; return a ? 1 : -1; } function createInputPseudo(type) { return function (elem) { var name = elem.nodeName.toLowerCase(); return 'input' === name && elem.type === type; }; } function createButtonPseudo(type) { return function (elem) { var name = elem.nodeName.toLowerCase(); return ('input' === name || 'button' === name) && elem.type === type; }; } function createPositionalPseudo(fn) { return markFunction(function (argument) { return argument = +argument, markFunction(function (seed, matches) { for (var matchIndexes = fn([], seed.length, argument), i = matchIndexes.length, j; i--;)
                seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j])); }); }); } function testContext(context) { return context && 'undefined' != typeof context.getElementsByTagName && context; } function setFilters() { } function toSelector(tokens) { for (var i = 0, len = tokens.length, selector = ''; i < len; i++)
                selector += tokens[i].value; return selector; } function addCombinator(matcher, combinator, base) { var dir = combinator.dir, checkNonElements = base && 'parentNode' === dir, doneName = done++; return combinator.first ? function (elem, context, xml) { for (; elem = elem[dir];)
                if (1 === elem.nodeType || checkNonElements)
                    return matcher(elem, context, xml); } : function (elem, context, xml) { var newCache = [dirruns, doneName], oldCache, uniqueCache, outerCache; if (xml) {
                for (; elem = elem[dir];)
                    if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml))
                        return !0;
            }
            else
                for (; elem = elem[dir];)
                    if (1 === elem.nodeType || checkNonElements) {
                        if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), (oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName)
                            return newCache[2] = oldCache[2];
                        if (uniqueCache[dir] = newCache, newCache[2] = matcher(elem, context, xml))
                            return !0;
                    } }; } function elementMatcher(matchers) { return 1 < matchers.length ? function (elem, context, xml) { for (var i = matchers.length; i--;)
                if (!matchers[i](elem, context, xml))
                    return !1; return !0; } : matchers[0]; } function multipleContexts(selector, contexts, results) { for (var i = 0, len = contexts.length; i < len; i++)
                Sizzle(selector, contexts[i], results); return results; } function condense(unmatched, map, filter, context, xml) { for (var newUnmatched = [], i = 0, len = unmatched.length, elem; i < len; i++)
                (elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), null != map && map.push(i)); return newUnmatched; } function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) { return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function (seed, results, context, xml) { var preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || '*', context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn, temp, i, elem; if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)
                    (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)); if (!seed)
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            else if (postFinder || preFilter) {
                if (postFinder) {
                    for (temp = [], i = matcherOut.length; i--;)
                        (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                    postFinder(null, matcherOut = [], temp, xml);
                }
                for (i = matcherOut.length; i--;)
                    (elem = matcherOut[i]) && -1 < (temp = postFinder ? indexOf(seed, elem) : preMap[i]) && (seed[temp] = !(results[temp] = elem));
            } }); } function matcherFromTokens(tokens) { for (var len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[' '], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) { return elem === checkContext; }, implicitRelative, !0), matchAnyContext = addCombinator(function (elem) { return -1 < indexOf(checkContext, elem); }, implicitRelative, !0), matchers = [function (elem, context, xml) { var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); return checkContext = null, ret; }], checkContext, matcher, j; i < len; i++)
                if (matcher = Expr.relative[tokens[i].type])
                    matchers = [addCombinator(elementMatcher(matchers), matcher)];
                else {
                    if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                        for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++)
                            ;
                        return setMatcher(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({ value: ' ' === tokens[i - 2].type ? '*' : '' })).replace(rtrim, '$1'), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                } return elementMatcher(matchers); } function matcherFromGroupMatchers(elementMatchers, setMatchers) { var bySet = 0 < setMatchers.length, byElement = 0 < elementMatchers.length, superMatcher = function (seed, context, xml, results, outermost) { var matchedCount = 0, i = '0', unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG('*', outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length, elem, j, matcher; for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                if (byElement && elem) {
                    for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++];)
                        if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                    outermost && (dirruns = dirrunsUnique);
                }
                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
            } if (matchedCount += i, bySet && i !== matchedCount) {
                for (j = 0; matcher = setMatchers[j++];)
                    matcher(unmatched, setMatched, context, xml);
                if (seed) {
                    if (0 < matchedCount)
                        for (; i--;)
                            unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                    setMatched = condense(setMatched);
                }
                push.apply(results, setMatched), outermost && !seed && 0 < setMatched.length && 1 < matchedCount + setMatchers.length && Sizzle.uniqueSort(results);
            } return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched; }; return bySet ? markFunction(superMatcher) : superMatcher; } var expando = 'sizzle' + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function (a, b) { return a === b && (hasDuplicate = !0), 0; }, MAX_NEGATIVE = -2147483648, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function (list, elem) { for (var i = 0, len = list.length; i < len; i++)
                if (list[i] === elem)
                    return i; return -1; }, booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', whitespace = '[\\x20\\t\\r\\n\\f]', identifier = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', rwhitespace = /[\x20\t\r\n\f]+/g, rtrim = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, rcomma = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, rcombinators = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, rattributeQuotes = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, rpseudo = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, ridentifier = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, matchExpr = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, funescape = function (_, escaped, escapedWhitespace) { var _StringfromCharCode = String.fromCharCode, high = '0x' + escaped - 65536; return high != high || escapedWhitespace ? escaped : 0 > high ? _StringfromCharCode(high + 65536) : _StringfromCharCode(55296 | high >> 10, 56320 | 1023 & high); }, unloadHandler = function () { setDocument(); }, i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains; try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType;
            }
            catch (e) {
                push = { apply: arr.length ? function (target, els) { push_native.apply(target, slice.call(els)); } : function (target, els) { for (var j = target.length, i = 0; target[j++] = els[i++];)
                        ; target.length = j - 1; } };
            } for (i in support = Sizzle.support = {}, isXML = Sizzle.isXML = function (elem) { var documentElement = elem && (elem.ownerDocument || elem).documentElement; return !!documentElement && 'HTML' !== documentElement.nodeName; }, setDocument = Sizzle.setDocument = function (node) { var doc = node ? node.ownerDocument || node : preferredDoc, hasCompare, parent; return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = document.documentElement, documentIsHTML = !isXML(document), (parent = document.defaultView) && parent.top !== parent && (parent.addEventListener ? parent.addEventListener('unload', unloadHandler, !1) : parent.attachEvent && parent.attachEvent('onunload', unloadHandler)), support.attributes = assert(function (div) { return div.className = 'i', !div.getAttribute('className'); }), support.getElementsByTagName = assert(function (div) { return div.appendChild(document.createComment('')), !div.getElementsByTagName('*').length; }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function (div) { return docElem.appendChild(div).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length; }), support.getById ? (Expr.find.ID = function (id, context) { if ('undefined' != typeof context.getElementById && documentIsHTML) {
                var m = context.getElementById(id);
                return m ? [m] : [];
            } }, Expr.filter.ID = function (id) { var attrId = id.replace(runescape, funescape); return function (elem) { return elem.getAttribute('id') === attrId; }; }) : (delete Expr.find.ID, Expr.filter.ID = function (id) { var attrId = id.replace(runescape, funescape); return function (elem) { var node = 'undefined' != typeof elem.getAttributeNode && elem.getAttributeNode('id'); return node && node.value === attrId; }; }), Expr.find.TAG = support.getElementsByTagName ? function (tag, context) { return 'undefined' == typeof context.getElementsByTagName ? support.qsa ? context.querySelectorAll(tag) : void 0 : context.getElementsByTagName(tag); } : function (tag, context) { var tmp = [], i = 0, results = context.getElementsByTagName(tag), elem; if ('*' === tag) {
                for (; elem = results[i++];)
                    1 === elem.nodeType && tmp.push(elem);
                return tmp;
            } return results; }, Expr.find.CLASS = support.getElementsByClassName && function (className, context) { if ('undefined' != typeof context.getElementsByClassName && documentIsHTML)
                return context.getElementsByClassName(className); }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function (div) { docElem.appendChild(div).innerHTML = '<a id=\'' + expando + '\'></a><select id=\'' + expando + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', div.querySelectorAll('[msallowcapture^=\'\']').length && rbuggyQSA.push('[*^$]=' + whitespace + '*(?:\'\'|"")'), div.querySelectorAll('[selected]').length || rbuggyQSA.push('\\[' + whitespace + '*(?:value|' + booleans + ')'), div.querySelectorAll('[id~=' + expando + '-]').length || rbuggyQSA.push('~='), div.querySelectorAll(':checked').length || rbuggyQSA.push(':checked'), div.querySelectorAll('a#' + expando + '+*').length || rbuggyQSA.push('.#.+[+~]'); }), assert(function (div) { var input = document.createElement('input'); input.setAttribute('type', 'hidden'), div.appendChild(input).setAttribute('name', 'D'), div.querySelectorAll('[name=d]').length && rbuggyQSA.push('name' + whitespace + '*[*^$|!~]?='), div.querySelectorAll(':enabled').length || rbuggyQSA.push(':enabled', ':disabled'), div.querySelectorAll('*,:x'), rbuggyQSA.push(',.*:'); })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function (div) { support.disconnectedMatch = matches.call(div, 'div'), matches.call(div, '[s!=\'\']:x'), rbuggyMatches.push('!=', ':(' + identifier + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ('\\[' + whitespace + '*(' + identifier + ')(?:' + whitespace + '*([*^$|!~]?=)' + whitespace + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + identifier + '))|)' + whitespace + '*\\]') + ')*)|.*)\\)|)'); }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|')), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join('|')), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) { var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode; return a === bup || !!(bup && 1 === bup.nodeType && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup))); } : function (a, b) { if (b)
                for (; b = b.parentNode;)
                    if (b === a)
                        return !0; return !1; }, sortOrder = hasCompare ? function (a, b) { if (a === b)
                return hasDuplicate = !0, 0; var compare = !a.compareDocumentPosition - !b.compareDocumentPosition; return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1); } : function (a, b) { if (a === b)
                return hasDuplicate = !0, 0; var i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b], cur; if (!aup || !bup)
                return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; if (aup === bup)
                return siblingCheck(a, b); for (cur = a; cur = cur.parentNode;)
                ap.unshift(cur); for (cur = b; cur = cur.parentNode;)
                bp.unshift(cur); for (; ap[i] === bp[i];)
                i++; return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0; }, document) : document; }, Sizzle.matches = function (expr, elements) { return Sizzle(expr, null, null, elements); }, Sizzle.matchesSelector = function (elem, expr) { if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, '=\'$1\']'), support.matchesSelector && documentIsHTML && !compilerCache[expr + ' '] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr)))
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType)
                        return ret;
                }
                catch (e) { } return 0 < Sizzle(expr, document, null, [elem]).length; }, Sizzle.contains = function (context, elem) { return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem); }, Sizzle.attr = function (elem, name) { (elem.ownerDocument || elem) !== document && setDocument(elem); var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0; return void 0 === val ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val; }, Sizzle.error = function (msg) { throw new Error('Syntax error, unrecognized expression: ' + msg); }, Sizzle.uniqueSort = function (results) { var duplicates = [], j = 0, i = 0, elem; if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                for (; elem = results[i++];)
                    elem === results[i] && (j = duplicates.push(i));
                for (; j--;)
                    results.splice(duplicates[j], 1);
            } return sortInput = null, results; }, getText = Sizzle.getText = function (elem) { var ret = '', i = 0, nodeType = elem.nodeType, node; if (!nodeType)
                for (; node = elem[i++];)
                    ret += getText(node);
            else if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                if ('string' == typeof elem.textContent)
                    return elem.textContent;
                for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                    ret += getText(elem);
            }
            else if (3 === nodeType || 4 === nodeType)
                return elem.nodeValue; return ret; }, Expr = Sizzle.selectors = { cacheLength: 50, createPseudo: markFunction, match: matchExpr, attrHandle: {}, find: {}, relative: { ">": { dir: 'parentNode', first: !0 }, " ": { dir: 'parentNode' }, "+": { dir: 'previousSibling', first: !0 }, "~": { dir: 'previousSibling' } }, preFilter: { ATTR: function (match) { return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || '').replace(runescape, funescape), '~=' === match[2] && (match[3] = ' ' + match[3] + ' '), match.slice(0, 4); }, CHILD: function (match) { return match[1] = match[1].toLowerCase(), 'nth' === match[1].slice(0, 3) ? (!match[3] && Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ('even' === match[3] || 'odd' === match[3])), match[5] = +(match[7] + match[8] || 'odd' === match[3])) : match[3] && Sizzle.error(match[0]), match; }, PSEUDO: function (match) { var unquoted = !match[6] && match[2], excess; return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || '' : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3)); } }, filter: { TAG: function (nodeNameSelector) { var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase(); return '*' === nodeNameSelector ? function () { return !0; } : function (elem) { return elem.nodeName && elem.nodeName.toLowerCase() === nodeName; }; }, CLASS: function (className) { var pattern = classCache[className + ' ']; return pattern || (pattern = new RegExp('(^|' + whitespace + ')' + className + '(' + whitespace + '|$)')) && classCache(className, function (elem) { return pattern.test('string' == typeof elem.className && elem.className || 'undefined' != typeof elem.getAttribute && elem.getAttribute('class') || ''); }); }, ATTR: function (name, operator, check) { return function (elem) { var result = Sizzle.attr(elem, name); return null == result ? '!=' === operator : !operator || (result += '', '=' === operator ? result === check : '!=' === operator ? result !== check : '^=' === operator ? check && 0 === result.indexOf(check) : '*=' === operator ? check && -1 < result.indexOf(check) : '$=' === operator ? check && result.slice(-check.length) === check : '~=' === operator ? -1 < (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) : '|=' == operator && (result === check || result.slice(0, check.length + 1) === check + '-')); }; }, CHILD: function (type, what, argument, first, last) { var simple = 'nth' !== type.slice(0, 3), forward = 'last' !== type.slice(-4), ofType = 'of-type' === what; return 1 === first && 0 === last ? function (elem) { return !!elem.parentNode; } : function (elem, context, xml) { var dir = simple == forward ? 'previousSibling' : 'nextSibling', parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1, cache, uniqueCache, outerCache, node, nodeIndex, start; if (parent) {
                        if (simple) {
                            for (; dir;) {
                                for (node = elem; node = node[dir];)
                                    if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType)
                                        return !1;
                                start = dir = 'only' === type && !start && 'nextSibling';
                            }
                            return !0;
                        }
                        if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                            for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                if (1 === node.nodeType && ++diff && node === elem) {
                                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                                    break;
                                }
                        }
                        else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), !1 === diff)
                            for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && !((ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) && ++diff && (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node === elem));)
                                ;
                        return diff -= last, diff === first || 0 == diff % first && 0 <= diff / first;
                    } }; }, PSEUDO: function (pseudo, argument) { var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error('unsupported pseudo: ' + pseudo), args; return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [pseudo, pseudo, '', argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) { for (var matched = fn(seed, argument), i = matched.length, idx; i--;)
                        idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i]); }) : function (elem) { return fn(elem, 0, args); }) : fn; } }, pseudos: { not: markFunction(function (selector) { var input = [], results = [], matcher = compile(selector.replace(rtrim, '$1')); return matcher[expando] ? markFunction(function (seed, matches, context, xml) { for (var unmatched = matcher(seed, null, xml, []), i = seed.length, elem; i--;)
                        (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem)); }) : function (elem, context, xml) { return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop(); }; }), has: markFunction(function (selector) { return function (elem) { return 0 < Sizzle(selector, elem).length; }; }), contains: markFunction(function (text) { return text = text.replace(runescape, funescape), function (elem) { return -1 < (elem.textContent || elem.innerText || getText(elem)).indexOf(text); }; }), lang: markFunction(function (lang) { return ridentifier.test(lang || '') || Sizzle.error('unsupported lang: ' + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function (elem) { var elemLang; do
                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))
                            return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + '-');
                    while ((elem = elem.parentNode) && 1 === elem.nodeType); return !1; }; }), target: function (elem) { var hash = window.location && window.location.hash; return hash && hash.slice(1) === elem.id; }, root: function (elem) { return elem === docElem; }, focus: function (elem) { return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex); }, enabled: function (elem) { return !1 === elem.disabled; }, disabled: function (elem) { return !0 === elem.disabled; }, checked: function (elem) { var nodeName = elem.nodeName.toLowerCase(); return 'input' === nodeName && !!elem.checked || 'option' === nodeName && !!elem.selected; }, selected: function (elem) { return elem.parentNode && elem.parentNode.selectedIndex, !0 === elem.selected; }, empty: function (elem) { for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                        if (6 > elem.nodeType)
                            return !1; return !0; }, parent: function (elem) { return !Expr.pseudos.empty(elem); }, header: function (elem) { return rheader.test(elem.nodeName); }, input: function (elem) { return rinputs.test(elem.nodeName); }, button: function (elem) { var name = elem.nodeName.toLowerCase(); return 'input' === name && 'button' === elem.type || 'button' === name; }, text: function (elem) { var attr; return 'input' === elem.nodeName.toLowerCase() && 'text' === elem.type && (null == (attr = elem.getAttribute('type')) || 'text' === attr.toLowerCase()); }, first: createPositionalPseudo(function () { return [0]; }), last: createPositionalPseudo(function (matchIndexes, length) { return [length - 1]; }), eq: createPositionalPseudo(function (matchIndexes, length, argument) { return [0 > argument ? argument + length : argument]; }), even: createPositionalPseudo(function (matchIndexes, length) { for (var i = 0; i < length; i += 2)
                        matchIndexes.push(i); return matchIndexes; }), odd: createPositionalPseudo(function (matchIndexes, length) { for (var i = 1; i < length; i += 2)
                        matchIndexes.push(i); return matchIndexes; }), lt: createPositionalPseudo(function (matchIndexes, length, argument) { for (var i = 0 > argument ? argument + length : argument; 0 <= --i;)
                        matchIndexes.push(i); return matchIndexes; }), gt: createPositionalPseudo(function (matchIndexes, length, argument) { for (var i = 0 > argument ? argument + length : argument; ++i < length;)
                        matchIndexes.push(i); return matchIndexes; }) } }, Expr.pseudos.nth = Expr.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                Expr.pseudos[i] = createInputPseudo(i); for (i in { submit: !0, reset: !0 })
                Expr.pseudos[i] = createButtonPseudo(i); return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function (selector, parseOnly) { var cached = tokenCache[selector + ' '], matched, match, tokens, type, soFar, groups, preFilters; if (cached)
                return parseOnly ? 0 : cached.slice(0); for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                for (type in (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({ value: matched, type: match[0].replace(rtrim, ' ') }), soFar = soFar.slice(matched.length)), Expr.filter)
                    (match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match))) && (matched = match.shift(), tokens.push({ value: matched, type: type, matches: match }), soFar = soFar.slice(matched.length));
                if (!matched)
                    break;
            } return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0); }, compile = Sizzle.compile = function (selector, match) { var setMatchers = [], elementMatchers = [], cached = compilerCache[selector + ' '], i; if (!cached) {
                for (match || (match = tokenize(selector)), i = match.length; i--;)
                    cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector;
            } return cached; }, select = Sizzle.select = function (selector, context, results, seed) { var compiled = 'function' == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector), i, tokens, token, type, find; if (results = results || [], 1 === match.length) {
                if (tokens = match[0] = match[0].slice(0), 2 < tokens.length && 'ID' === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                    if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context)
                        return results;
                    compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
                }
                for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                    if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                        if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector)
                            return push.apply(results, seed), results;
                        break;
                    }
            } return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), results; }, support.sortStable = expando.split('').sort(sortOrder).join('') === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function (div1) { return 1 & div1.compareDocumentPosition(document.createElement('div')); }), assert(function (div) { return div.innerHTML = '<a href=\'#\'></a>', '#' === div.firstChild.getAttribute('href'); }) || addHandle('type|href|height|width', function (elem, name, isXML) { if (!isXML)
                return elem.getAttribute(name, 'type' === name.toLowerCase() ? 1 : 2); }), support.attributes && assert(function (div) { return div.innerHTML = '<input/>', div.firstChild.setAttribute('value', ''), '' === div.firstChild.getAttribute('value'); }) || addHandle('value', function (elem, name, isXML) { if (!isXML && 'input' === elem.nodeName.toLowerCase())
                return elem.defaultValue; }), assert(function (div) { return null == div.getAttribute('disabled'); }) || addHandle(booleans, function (elem, name, isXML) { var val; if (!isXML)
                return !0 === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null; }), Sizzle; }(window);
            jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[':'] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
            var dir = function (elem, dir, until) { for (var matched = []; (elem = elem[dir]) && 9 !== elem.nodeType;)
                if (1 === elem.nodeType) {
                    if (void 0 !== until && jQuery(elem).is(until))
                        break;
                    matched.push(elem);
                } return matched; }, siblings = function (n, elem) { for (var matched = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== elem && matched.push(n); return matched; }, rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, risSimple = /^.[^:#\[\.,]*$/;
            jQuery.filter = function (expr, elems, not) { var elem = elems[0]; return not && (expr = ':not(' + expr + ')'), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) { return 1 === elem.nodeType; })); }, jQuery.fn.extend({ find: function (selector) { var ret = [], self = this, len = self.length, i; if ('string' != typeof selector)
                    return this.pushStack(jQuery(selector).filter(function () { for (i = 0; i < len; i++)
                        if (jQuery.contains(self[i], this))
                            return !0; })); for (i = 0; i < len; i++)
                    jQuery.find(selector, self[i], ret); return ret = this.pushStack(1 < len ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + ' ' + selector : selector, ret; }, filter: function (selector) { return this.pushStack(winnow(this, selector || [], !1)); }, not: function (selector) { return this.pushStack(winnow(this, selector || [], !0)); }, is: function (selector) { return !!winnow(this, 'string' == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length; } });
            var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function (selector, context, root) { var match, elem; if (!selector)
                return this; if (root = root || rootjQuery, 'string' == typeof selector) {
                if (match = '<' === selector.charAt(0) && '>' === selector.charAt(selector.length - 1) && 3 <= selector.length ? [null, selector, null] : rquickExpr.exec(selector), match && (match[1] || !context)) {
                    if (match[1]) {
                        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                            for (match in context)
                                jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this;
                    }
                    if (elem = document.getElementById(match[2]), elem && elem.parentNode) {
                        if (elem.id !== match[2])
                            return rootjQuery.find(selector);
                        this.length = 1, this[0] = elem;
                    }
                    return this.context = document, this.selector = selector, this;
                }
                return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
            } return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? 'undefined' == typeof root.ready ? selector(jQuery) : root.ready(selector) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this)); }, rootjQuery;
            init.prototype = jQuery.fn, rootjQuery = jQuery(document);
            var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
            jQuery.fn.extend({ has: function (target) { var targets = jQuery(target, this), len = targets.length, i; return this.filter(function () { for (i = 0; i < len; i++)
                    if (jQuery.contains(this, targets[i]))
                        return !0; }); }, closest: function (selectors, context) { for (var i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || 'string' != typeof selectors ? jQuery(selectors, context || this.context) : 0, cur; i < l; i++)
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                        if (11 > cur.nodeType && (pos ? -1 < pos.index(cur) : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        } return this.pushStack(1 < matched.length ? jQuery.uniqueSort(matched) : matched); }, index: function (elem) { return elem ? 'string' == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (selector, context) { return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context)))); }, addBack: function (selector) { return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector)); } }), jQuery.each({ parent: function (elem) { var parent = elem.parentNode; return parent && 11 !== parent.nodeType ? parent : null; }, parents: function (elem) { return dir(elem, 'parentNode'); }, parentsUntil: function (elem, i, until) { return dir(elem, 'parentNode', until); }, next: function (elem) { return sibling(elem, 'nextSibling'); }, prev: function (elem) { return sibling(elem, 'previousSibling'); }, nextAll: function (elem) { return dir(elem, 'nextSibling'); }, prevAll: function (elem) { return dir(elem, 'previousSibling'); }, nextUntil: function (elem, i, until) { return dir(elem, 'nextSibling', until); }, prevUntil: function (elem, i, until) { return dir(elem, 'previousSibling', until); }, siblings: function (elem) { return siblings((elem.parentNode || {}).firstChild, elem); }, children: function (elem) { return siblings(elem.firstChild); }, contents: function (elem) { return jQuery.nodeName(elem, 'iframe') ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes); } }, function (name, fn) { jQuery.fn[name] = function (until, selector) { var ret = jQuery.map(this, fn, until); return 'Until' !== name.slice(-5) && (selector = until), selector && 'string' == typeof selector && (ret = jQuery.filter(selector, ret)), 1 < this.length && (!guaranteedUnique[name] && (ret = jQuery.uniqueSort(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret); }; });
            var rnotwhite = /\S+/g;
            jQuery.Callbacks = function (options) { options = 'string' == typeof options ? createOptions(options) : jQuery.extend({}, options); var list = [], queue = [], firingIndex = -1, fire = function () { for (locked = options.once, fired = firing = !0; queue.length; firingIndex = -1)
                for (memory = queue.shift(); ++firingIndex < list.length;)
                    !1 === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse && (firingIndex = list.length, memory = !1); options.memory || (memory = !1), firing = !1, locked && (memory ? list = [] : list = ''); }, self = { add: function () { return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), function add(args) { jQuery.each(args, function (_, arg) { jQuery.isFunction(arg) ? (!options.unique || !self.has(arg)) && list.push(arg) : arg && arg.length && 'string' !== jQuery.type(arg) && add(arg); }); }(arguments), memory && !firing && fire()), this; }, remove: function () { return jQuery.each(arguments, function (_, arg) { for (var index; -1 < (index = jQuery.inArray(arg, list, index));)
                    list.splice(index, 1), index <= firingIndex && firingIndex--; }), this; }, has: function (fn) { return fn ? -1 < jQuery.inArray(fn, list) : 0 < list.length; }, empty: function () { return list && (list = []), this; }, disable: function () { return locked = queue = [], list = memory = '', this; }, disabled: function () { return !list; }, lock: function () { return locked = !0, memory || self.disable(), this; }, locked: function () { return !!locked; }, fireWith: function (context, args) { return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), !firing && fire()), this; }, fire: function () { return self.fireWith(this, arguments), this; }, fired: function () { return !!fired; } }, firing, memory, fired, locked; return self; }, jQuery.extend({ Deferred: function (func) { var tuples = [['resolve', 'done', jQuery.Callbacks('once memory'), 'resolved'], ['reject', 'fail', jQuery.Callbacks('once memory'), 'rejected'], ['notify', 'progress', jQuery.Callbacks('memory')]], state = 'pending', promise = { state: function () { return state; }, always: function () { return deferred.done(arguments).fail(arguments), this; }, then: function () { var fns = arguments; return jQuery.Deferred(function (newDefer) { jQuery.each(tuples, function (i, tuple) { var fn = jQuery.isFunction(fns[i]) && fns[i]; deferred[tuple[1]](function () { var returned = fn && fn.apply(this, arguments); returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments); }); }), fns = null; }).promise(); }, promise: function (obj) { return null == obj ? promise : jQuery.extend(obj, promise); } }, deferred = {}; return promise.pipe = promise.then, jQuery.each(tuples, function (i, tuple) { var list = tuple[2], stateString = tuple[3]; promise[tuple[1]] = list.add, stateString && list.add(function () { state = stateString; }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function () { return deferred[tuple[0] + 'With'](this === deferred ? promise : this, arguments), this; }, deferred[tuple[0] + 'With'] = list.fireWith; }), promise.promise(deferred), func && func.call(deferred, deferred), deferred; }, when: function (subordinate) { var i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = 1 === remaining ? subordinate : jQuery.Deferred(), updateFunc = function (i, contexts, values) { return function (value) { contexts[i] = this, values[i] = 1 < arguments.length ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : !--remaining && deferred.resolveWith(contexts, values); }; }, progressValues, progressContexts, resolveContexts; if (1 < length)
                    for (progressValues = Array(length), progressContexts = Array(length), resolveContexts = Array(length); i < length; i++)
                        resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject) : --remaining; return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise(); } });
            var readyList;
            jQuery.fn.ready = function (fn) { return jQuery.ready.promise().done(fn), this; }, jQuery.extend({ isReady: !1, readyWait: 1, holdReady: function (hold) { hold ? jQuery.readyWait++ : jQuery.ready(!0); }, ready: function (wait) { (!0 === wait ? !--jQuery.readyWait : !jQuery.isReady) && (jQuery.isReady = !0, !0 !== wait && 0 < --jQuery.readyWait || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler('ready'), jQuery(document).off('ready')))); } }), jQuery.ready.promise = function (obj) { if (!readyList)
                if (readyList = jQuery.Deferred(), 'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll)
                    window.setTimeout(jQuery.ready);
                else if (document.addEventListener)
                    document.addEventListener('DOMContentLoaded', completed), window.addEventListener('load', completed);
                else {
                    document.attachEvent('onreadystatechange', completed), window.attachEvent('onload', completed);
                    var top = !1;
                    try {
                        top = null == window.frameElement && document.documentElement;
                    }
                    catch (e) { }
                    top && top.doScroll && function doScrollCheck() { if (!jQuery.isReady) {
                        try {
                            top.doScroll('left');
                        }
                        catch (e) {
                            return window.setTimeout(doScrollCheck, 50);
                        }
                        detach(), jQuery.ready();
                    } }();
                } return readyList.promise(obj); }, jQuery.ready.promise();
            for (var i in jQuery(support))
                break;
            support.ownFirst = '0' === i, support.inlineBlockNeedsLayout = !1, jQuery(function () { var val, div, body, container; body = document.getElementsByTagName('body')[0], body && body.style && (div = document.createElement('div'), container = document.createElement('div'), container.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', body.appendChild(container).appendChild(div), 'undefined' != typeof div.style.zoom && (div.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth, val && (body.style.zoom = 1)), body.removeChild(container)); }), function () { var div = document.createElement('div'); support.deleteExpando = !0; try {
                delete div.test;
            }
            catch (e) {
                support.deleteExpando = !1;
            } div = null; }();
            var acceptData = function (elem) { var noData = jQuery.noData[(elem.nodeName + ' ').toLowerCase()], nodeType = +elem.nodeType || 1; return (1 == nodeType || 9 == nodeType) && (!noData || !0 !== noData && elem.getAttribute('classid') === noData); }, rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
            jQuery.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' }, hasData: function (elem) { return elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], !!elem && !isEmptyDataObject(elem); }, data: function (elem, name, data) { return internalData(elem, name, data); }, removeData: function (elem, name) { return internalRemoveData(elem, name); }, _data: function (elem, name, data) { return internalData(elem, name, data, !0); }, _removeData: function (elem, name) { return internalRemoveData(elem, name, !0); } }), jQuery.fn.extend({ data: function (key, value) { var elem = this[0], attrs = elem && elem.attributes, i, name, data; if (void 0 === key) {
                    if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, 'parsedAttrs'))) {
                        for (i = attrs.length; i--;)
                            attrs[i] && (name = attrs[i].name, 0 === name.indexOf('data-') && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                        jQuery._data(elem, 'parsedAttrs', !0);
                    }
                    return data;
                } return 'object' == typeof key ? this.each(function () { jQuery.data(this, key); }) : 1 < arguments.length ? this.each(function () { jQuery.data(this, key, value); }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0; }, removeData: function (key) { return this.each(function () { jQuery.removeData(this, key); }); } }), jQuery.extend({ queue: function (elem, type, data) { var queue; if (elem)
                    return type = (type || 'fx') + 'queue', queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []; }, dequeue: function (elem, type) { type = type || 'fx'; var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function () { jQuery.dequeue(elem, type); }; 'inprogress' === fn && (fn = queue.shift(), startLength--), fn && ('fx' === type && queue.unshift('inprogress'), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire(); }, _queueHooks: function (elem, type) { var key = type + 'queueHooks'; return jQuery._data(elem, key) || jQuery._data(elem, key, { empty: jQuery.Callbacks('once memory').add(function () { jQuery._removeData(elem, type + 'queue'), jQuery._removeData(elem, key); }) }); } }), jQuery.fn.extend({ queue: function (type, data) { var setter = 2; return 'string' != typeof type && (data = type, type = 'fx', setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function () { var queue = jQuery.queue(this, type, data); jQuery._queueHooks(this, type), 'fx' === type && 'inprogress' !== queue[0] && jQuery.dequeue(this, type); }); }, dequeue: function (type) { return this.each(function () { jQuery.dequeue(this, type); }); }, clearQueue: function (type) { return this.queue(type || 'fx', []); }, promise: function (type, obj) { var count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () { --count || defer.resolveWith(elements, [elements]); }, tmp; for ('string' != typeof type && (obj = type, type = void 0), type = type || 'fx'; i--;)
                    tmp = jQuery._data(elements[i], type + 'queueHooks'), tmp && tmp.empty && (count++, tmp.empty.add(resolve)); return resolve(), defer.promise(obj); } }), function () { var shrinkWrapBlocksVal; support.shrinkWrapBlocks = function () { if (null != shrinkWrapBlocksVal)
                return shrinkWrapBlocksVal; shrinkWrapBlocksVal = !1; var div, body, container; if (body = document.getElementsByTagName('body')[0], body && body.style)
                return div = document.createElement('div'), container = document.createElement('div'), container.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', body.appendChild(container).appendChild(div), 'undefined' != typeof div.style.zoom && (div.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', div.appendChild(document.createElement('div')).style.width = '5px', shrinkWrapBlocksVal = 3 !== div.offsetWidth), body.removeChild(container), shrinkWrapBlocksVal; }; }();
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i'), cssExpand = ['Top', 'Right', 'Bottom', 'Left'], isHidden = function (elem, el) { return elem = el || elem, 'none' === jQuery.css(elem, 'display') || !jQuery.contains(elem.ownerDocument, elem); }, access = function (elems, fn, key, value, chainable, emptyGet, raw) { var i = 0, length = elems.length, bulk = null == key; if ('object' === jQuery.type(key))
                for (i in chainable = !0, key)
                    access(elems, fn, i, key[i], !0, emptyGet, raw);
            else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function (elem, key, value) { return bulk.call(jQuery(elem), value); })), fn))
                for (; i < length; i++)
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key))); return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet; }, rcheckableType = /^(?:checkbox|radio)$/i, rtagName = /<([\w:-]+)/, rscriptType = /^$|\/(?:java|ecma)script/i, rleadingWhitespace = /^\s+/, nodeNames = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
            (function () { var div = document.createElement('div'), fragment = document.createDocumentFragment(), input = document.createElement('input'); div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName('tbody').length, support.htmlSerialize = !!div.getElementsByTagName('link').length, support.html5Clone = '<:nav></:nav>' !== document.createElement('nav').cloneNode(!0).outerHTML, input.type = 'checkbox', input.checked = !0, fragment.appendChild(input), support.appendChecked = input.checked, div.innerHTML = '<textarea>x</textarea>', support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, fragment.appendChild(div), input = document.createElement('input'), input.setAttribute('type', 'radio'), input.setAttribute('checked', 'checked'), input.setAttribute('name', 't'), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, support.noCloneEvent = !!div.addEventListener, div[jQuery.expando] = 1, support.attributes = !div.getAttribute(jQuery.expando); })();
            var wrapMap = { option: [1, '<select multiple=\'multiple\'>', '</select>'], legend: [1, '<fieldset>', '</fieldset>'], area: [1, '<map>', '</map>'], param: [1, '<object>', '</object>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'] };
            wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;
            var rhtml = /<|&#?\w+;/, rtbody = /<tbody/i;
            (function () { var div = document.createElement('div'), i, eventName; for (i in { submit: !0, change: !0, focusin: !0 })
                eventName = 'on' + i, (support[i] = eventName in window) || (div.setAttribute(eventName, 't'), support[i] = !1 === div.attributes[eventName].expando); div = null; })();
            var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
            jQuery.event = { global: {}, add: function (elem, types, handler, data, selector) { var elemData = jQuery._data(elem), tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType; if (elemData) {
                    for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function (e) { return 'undefined' == typeof jQuery || e && jQuery.event.triggered === e.type ? void 0 : jQuery.event.dispatch.apply(eventHandle.elem, arguments); }, eventHandle.elem = elem), types = (types || '').match(rnotwhite) || [''], t = types.length; t--;)
                        (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || '').split('.').sort(), !!type) && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({ type: type, origType: origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext: selector && jQuery.expr.match.needsContext.test(selector), namespace: namespaces.join('.') }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, (!special.setup || !1 === special.setup.call(elem, data, namespaces, eventHandle)) && (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent('on' + type, eventHandle))), special.add && (special.add.call(elem, handleObj), !handleObj.handler.guid && (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
                    elem = null;
                } }, remove: function (elem, types, handler, selector, mappedTypes) { var elemData = jQuery.hasData(elem) && jQuery._data(elem), j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType; if (elemData && (events = elemData.events)) {
                    for (types = (types || '').match(rnotwhite) || [''], t = types.length; t--;) {
                        if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || '').split('.').sort(), !type) {
                            for (type in events)
                                jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                            continue;
                        }
                        for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)'), origCount = j = handlers.length; j--;)
                            handleObj = handlers[j], (mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || '**' === selector && handleObj.selector) && (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                        origCount && !handlers.length && ((!special.teardown || !1 === special.teardown.call(elem, namespaces, elemData.handle)) && jQuery.removeEvent(elem, type, elemData.handle), delete events[type]);
                    }
                    jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, 'events'));
                } }, trigger: function (event, data, elem, onlyHandlers) { var eventPath = [elem || document], type = hasOwn.call(event, 'type') ? event.type : event, namespaces = hasOwn.call(event, 'namespace') ? event.namespace.split('.') : [], handle, ontype, cur, bubbleType, special, tmp, i; if ((cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType) && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf('.') && (namespaces = type.split('.'), type = namespaces.shift(), namespaces.sort()), ontype = 0 > type.indexOf(':') && 'on' + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, 'object' == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join('.'), event.rnamespace = event.namespace ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode)
                            eventPath.push(cur), tmp = cur;
                        tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                    for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped();)
                        event.type = 1 < i ? bubbleType : special.bindType || type, handle = (jQuery._data(cur, 'events') || {})[event.type] && jQuery._data(cur, 'handle'), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), !1 === event.result && event.preventDefault());
                    if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || !1 === special._default.apply(eventPath.pop(), data)) && acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        }
                        catch (e) { }
                        jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp);
                    }
                    return event.result;
                } }, dispatch: function (event) { event = jQuery.event.fix(event); var handlerQueue = [], args = slice.call(arguments), handlers = (jQuery._data(this, 'events') || {})[event.type] || [], special = jQuery.event.special[event.type] || {}, i, j, ret, matched, handleObj; if (args[0] = event, event.delegateTarget = this, !(special.preDispatch && !1 === special.preDispatch.call(this, event))) {
                    for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                        for (event.currentTarget = matched.elem, j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();)
                            (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && !1 === (event.result = ret) && (event.preventDefault(), event.stopPropagation()));
                    return special.postDispatch && special.postDispatch.call(this, event), event.result;
                } }, handlers: function (event, handlers) { var handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target, i, matches, sel, handleObj; if (delegateCount && cur.nodeType && ('click' !== event.type || isNaN(event.button) || 1 > event.button))
                    for (; cur != this; cur = cur.parentNode || this)
                        if (1 === cur.nodeType && (!0 !== cur.disabled || 'click' !== event.type)) {
                            for (matches = [], i = 0; i < delegateCount; i++)
                                handleObj = handlers[i], sel = handleObj.selector + ' ', void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? -1 < jQuery(sel, this).index(cur) : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                            matches.length && handlerQueue.push({ elem: cur, handlers: matches });
                        } return delegateCount < handlers.length && handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) }), handlerQueue; }, fix: function (event) { if (event[jQuery.expando])
                    return event; var type = event.type, originalEvent = event, fixHook = this.fixHooks[type], i, prop, copy; for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;)
                    prop = copy[i], event[prop] = originalEvent[prop]; return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event; }, props: ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'detail', 'eventPhase', 'metaKey', 'relatedTarget', 'shiftKey', 'target', 'timeStamp', 'view', 'which'], fixHooks: {}, keyHooks: { props: ['char', 'charCode', 'key', 'keyCode'], filter: function (event, original) { return null == event.which && (event.which = null == original.charCode ? original.keyCode : original.charCode), event; } }, mouseHooks: { props: ['button', 'buttons', 'clientX', 'clientY', 'fromElement', 'offsetX', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY', 'toElement'], filter: function (event, original) { var button = original.button, fromElement = original.fromElement, body, eventDoc, doc; return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event; } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== safeActiveElement() && this.focus)
                            try {
                                return this.focus(), !1;
                            }
                            catch (e) { } }, delegateType: 'focusin' }, blur: { trigger: function () { if (this === safeActiveElement() && this.blur)
                            return this.blur(), !1; }, delegateType: 'focusout' }, click: { trigger: function () { if (jQuery.nodeName(this, 'input') && 'checkbox' === this.type && this.click)
                            return this.click(), !1; }, _default: function (event) { return jQuery.nodeName(event.target, 'a'); } }, beforeunload: { postDispatch: function (event) { void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result); } } }, simulate: function (type, elem, event) { var e = jQuery.extend(new jQuery.Event, event, { type: type, isSimulated: !0 }); jQuery.event.trigger(e, null, elem), e.isDefaultPrevented() && event.preventDefault(); } }, jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) { elem.removeEventListener && elem.removeEventListener(type, handle); } : function (elem, type, handle) { var name = 'on' + type; elem.detachEvent && ('undefined' == typeof elem[name] && (elem[name] = null), elem.detachEvent(name, handle)); }, jQuery.Event = function (src, props) { return this instanceof jQuery.Event ? void (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && !1 === src.returnValue ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), this[jQuery.expando] = !0) : new jQuery.Event(src, props); }, jQuery.Event.prototype = { constructor: jQuery.Event, isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1); }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = returnTrue, !e || this.isSimulated || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0); }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation(); } }, jQuery.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (orig, fix) { jQuery.event.special[orig] = { delegateType: fix, bindType: fix, handle: function (event) { var target = this, related = event.relatedTarget, handleObj = event.handleObj, ret; return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret; } }; }), support.submit || (jQuery.event.special.submit = { setup: function () { return !jQuery.nodeName(this, 'form') && void jQuery.event.add(this, 'click._submit keypress._submit', function (e) { var elem = e.target, form = jQuery.nodeName(elem, 'input') || jQuery.nodeName(elem, 'button') ? jQuery.prop(elem, 'form') : void 0; form && !jQuery._data(form, 'submit') && (jQuery.event.add(form, 'submit._submit', function (event) { event._submitBubble = !0; }), jQuery._data(form, 'submit', !0)); }); }, postDispatch: function (event) { event._submitBubble && (delete event._submitBubble, this.parentNode && !event.isTrigger && jQuery.event.simulate('submit', this.parentNode, event)); }, teardown: function () { return !jQuery.nodeName(this, 'form') && void jQuery.event.remove(this, '._submit'); } }), support.change || (jQuery.event.special.change = { setup: function () { return rformElems.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (jQuery.event.add(this, 'propertychange._change', function (event) { 'checked' === event.originalEvent.propertyName && (this._justChanged = !0); }), jQuery.event.add(this, 'click._change', function (event) { this._justChanged && !event.isTrigger && (this._justChanged = !1), jQuery.event.simulate('change', this, event); })), !1) : void jQuery.event.add(this, 'beforeactivate._change', function (e) { var elem = e.target; rformElems.test(elem.nodeName) && !jQuery._data(elem, 'change') && (jQuery.event.add(elem, 'change._change', function (event) { !this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate('change', this.parentNode, event); }), jQuery._data(elem, 'change', !0)); }); }, handle: function (event) { var elem = event.target; if (this !== elem || event.isSimulated || event.isTrigger || 'radio' !== elem.type && 'checkbox' !== elem.type)
                    return event.handleObj.handler.apply(this, arguments); }, teardown: function () { return jQuery.event.remove(this, '._change'), !rformElems.test(this.nodeName); } }), support.focusin || jQuery.each({ focus: 'focusin', blur: 'focusout' }, function (orig, fix) { var handler = function (event) { jQuery.event.simulate(fix, event.target, jQuery.event.fix(event)); }; jQuery.event.special[fix] = { setup: function () { var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix); attaches || doc.addEventListener(orig, handler, !0), jQuery._data(doc, fix, (attaches || 0) + 1); }, teardown: function () { var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix) - 1; attaches ? jQuery._data(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), jQuery._removeData(doc, fix)); } }; }), jQuery.fn.extend({ on: function (types, selector, data, fn) { return on(this, types, selector, data, fn); }, one: function (types, selector, data, fn) { return on(this, types, selector, data, fn, 1); }, off: function (types, selector, fn) { var handleObj, type; if (types && types.preventDefault && types.handleObj)
                    return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + '.' + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this; if ('object' == typeof types) {
                    for (type in types)
                        this.off(type, selector, types[type]);
                    return this;
                } return (!1 === selector || 'function' == typeof selector) && (fn = selector, selector = void 0), !1 === fn && (fn = returnFalse), this.each(function () { jQuery.event.remove(this, types, fn, selector); }); }, trigger: function (type, data) { return this.each(function () { jQuery.event.trigger(type, data, this); }); }, triggerHandler: function (type, data) { var elem = this[0]; if (elem)
                    return jQuery.event.trigger(type, data, elem, !0); } });
            var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = /<(?:abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video)[\s/>]/i, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement('div'));
            jQuery.extend({ htmlPrefilter: function (html) { return html.replace(rxhtmlTag, '<$1></$2>'); }, clone: function (elem, dataAndEvents, deepDataAndEvents) { var inPage = jQuery.contains(elem.ownerDocument, elem), destElements, node, clone, i, srcElements; if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test('<' + elem.nodeName + '>') ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), (!support.noCloneEvent || !support.noCloneChecked) && (1 === elem.nodeType || 11 === elem.nodeType) && !jQuery.isXMLDoc(elem))
                    for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i)
                        destElements[i] && fixCloneNodeIssues(node, destElements[i]); if (dataAndEvents)
                    if (deepDataAndEvents)
                        for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++)
                            cloneCopyEvent(node, destElements[i]);
                    else
                        cloneCopyEvent(elem, clone); return destElements = getAll(clone, 'script'), 0 < destElements.length && setGlobalEval(destElements, !inPage && getAll(elem, 'script')), destElements = srcElements = node = null, clone; }, cleanData: function (elems, forceAcceptData) { for (var i = 0, internalKey = jQuery.expando, cache = jQuery.cache, attributes = support.attributes, special = jQuery.event.special, elem, type, id, data; null != (elem = elems[i]); i++)
                    if ((forceAcceptData || acceptData(elem)) && (id = elem[internalKey], data = id && cache[id], data)) {
                        if (data.events)
                            for (type in data.events)
                                special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        cache[id] && (delete cache[id], attributes || 'undefined' == typeof elem.removeAttribute ? elem[internalKey] = void 0 : elem.removeAttribute(internalKey), deletedIds.push(id));
                    } } }), jQuery.fn.extend({ domManip: domManip, detach: function (selector) { return remove(this, selector, !0); }, remove: function (selector) { return remove(this, selector); }, text: function (value) { return access(this, function (value) { return void 0 === value ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value)); }, null, value, arguments.length); }, append: function () { return domManip(this, arguments, function (elem) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                } }); }, prepend: function () { return domManip(this, arguments, function (elem) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                } }); }, before: function () { return domManip(this, arguments, function (elem) { this.parentNode && this.parentNode.insertBefore(elem, this); }); }, after: function () { return domManip(this, arguments, function (elem) { this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling); }); }, empty: function () { for (var i = 0, elem; null != (elem = this[i]); i++) {
                    for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;)
                        elem.removeChild(elem.firstChild);
                    elem.options && jQuery.nodeName(elem, 'select') && (elem.options.length = 0);
                } return this; }, clone: function (dataAndEvents, deepDataAndEvents) { return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function () { return jQuery.clone(this, dataAndEvents, deepDataAndEvents); }); }, html: function (value) { return access(this, function (value) { var elem = this[0] || {}, i = 0, l = this.length; if (void 0 === value)
                    return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, '') : void 0; if ('string' == typeof value && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++)
                            elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                        elem = 0;
                    }
                    catch (e) { }
                } elem && this.empty().append(value); }, null, value, arguments.length); }, replaceWith: function () { var ignored = []; return domManip(this, arguments, function (elem) { var parent = this.parentNode; 0 > jQuery.inArray(this, ignored) && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this)); }, ignored); } }), jQuery.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (name, original) { jQuery.fn[name] = function (selector) { for (var i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1, elems; i <= last; i++)
                elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get()); return this.pushStack(ret); }; });
            var elemdisplay = { HTML: 'block', BODY: 'block' }, rmargin = /^margin/, rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i'), swap = function (elem, options, callback, args) { var old = {}, ret, name; for (name in options)
                old[name] = elem.style[name], elem.style[name] = options[name]; for (name in ret = callback.apply(elem, args || []), options)
                elem.style[name] = old[name]; return ret; }, documentElement = document.documentElement, iframe;
            (function () { function computeStyleTests() { var documentElement = document.documentElement, contents, divStyle; documentElement.appendChild(container), div.style.cssText = '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = !1, pixelMarginRightVal = reliableMarginRightVal = !0, window.getComputedStyle && (divStyle = window.getComputedStyle(div), pixelPositionVal = '1%' !== (divStyle || {}).top, reliableMarginLeftVal = '2px' === (divStyle || {}).marginLeft, boxSizingReliableVal = '4px' === (divStyle || { width: '4px' }).width, div.style.marginRight = '50%', pixelMarginRightVal = '4px' === (divStyle || { marginRight: '4px' }).marginRight, contents = div.appendChild(document.createElement('div')), contents.style.cssText = div.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', contents.style.marginRight = contents.style.width = '0', div.style.width = '1px', reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight), div.removeChild(contents)), div.style.display = 'none', reliableHiddenOffsetsVal = 0 === div.getClientRects().length, reliableHiddenOffsetsVal && (div.style.display = '', div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', div.childNodes[0].style.borderCollapse = 'separate', contents = div.getElementsByTagName('td'), contents[0].style.cssText = 'margin:0;border:0;padding:0;display:none', reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = '', contents[1].style.display = 'none', reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight)), documentElement.removeChild(container); } var container = document.createElement('div'), div = document.createElement('div'), pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal; div.style && (div.style.cssText = 'float:left;opacity:.5', support.opacity = '0.5' === div.style.opacity, support.cssFloat = !!div.style.cssFloat, div.style.backgroundClip = 'content-box', div.cloneNode(!0).style.backgroundClip = '', support.clearCloneStyle = 'content-box' === div.style.backgroundClip, container = document.createElement('div'), container.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', div.innerHTML = '', container.appendChild(div), support.boxSizing = '' === div.style.boxSizing || '' === div.style.MozBoxSizing || '' === div.style.WebkitBoxSizing, jQuery.extend(support, { reliableHiddenOffsets: function () { return null == pixelPositionVal && computeStyleTests(), reliableHiddenOffsetsVal; }, boxSizingReliable: function () { return null == pixelPositionVal && computeStyleTests(), boxSizingReliableVal; }, pixelMarginRight: function () { return null == pixelPositionVal && computeStyleTests(), pixelMarginRightVal; }, pixelPosition: function () { return null == pixelPositionVal && computeStyleTests(), pixelPositionVal; }, reliableMarginRight: function () { return null == pixelPositionVal && computeStyleTests(), reliableMarginRightVal; }, reliableMarginLeft: function () { return null == pixelPositionVal && computeStyleTests(), reliableMarginLeftVal; } })); })();
            var rposition = /^(top|right|bottom|left)$/, getStyles, curCSS;
            window.getComputedStyle ? (getStyles = function (elem) { var view = elem.ownerDocument.defaultView; return view && view.opener || (view = window), view.getComputedStyle(elem); }, curCSS = function (elem, name, computed) { var style = elem.style, width, minWidth, maxWidth, ret; return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, '' !== ret && void 0 !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), computed && !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth), void 0 === ret ? ret : ret + ''; }) : documentElement.currentStyle && (getStyles = function (elem) { return elem.currentStyle; }, curCSS = function (elem, name, computed) { var style = elem.style, left, rs, rsLeft, ret; return computed = computed || getStyles(elem), ret = computed ? computed[name] : void 0, null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, rs = elem.runtimeStyle, rsLeft = rs && rs.left, rsLeft && (rs.left = elem.currentStyle.left), style.left = 'fontSize' === name ? '1em' : ret, ret = style.pixelLeft + 'px', style.left = left, rsLeft && (rs.left = rsLeft)), void 0 === ret ? ret : ret + '' || 'auto'; });
            var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/i, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp('^(' + pnum + ')(.*)$', 'i'), cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' }, cssNormalTransform = { letterSpacing: '0', fontWeight: '400' }, cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'], emptyStyle = document.createElement('div').style;
            jQuery.extend({ cssHooks: { opacity: { get: function (elem, computed) { if (computed) {
                            var ret = curCSS(elem, 'opacity');
                            return '' === ret ? '1' : ret;
                        } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: support.cssFloat ? 'cssFloat' : 'styleFloat' }, style: function (elem, name, value, extra) { if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                    var origName = jQuery.camelCase(name), style = elem.style, ret, type, hooks;
                    if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 !== value) {
                        if (type = typeof value, 'string' === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = 'number'), null == value || value !== value)
                            return;
                        if ('number' === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? '' : 'px')), support.clearCloneStyle || '' !== value || 0 !== name.indexOf('background') || (style[name] = 'inherit'), !hooks || !('set' in hooks) || void 0 !== (value = hooks.set(elem, value, extra)))
                            try {
                                style[name] = value;
                            }
                            catch (e) { }
                    }
                    else
                        return hooks && 'get' in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                } }, css: function (elem, name, extra, styles) { var origName = jQuery.camelCase(name), num, val, hooks; return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && 'get' in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), 'normal' === val && name in cssNormalTransform && (val = cssNormalTransform[name]), '' === extra || extra ? (num = parseFloat(val), !0 === extra || isFinite(num) ? num || 0 : val) : val; } }), jQuery.each(['height', 'width'], function (i, name) { jQuery.cssHooks[name] = { get: function (elem, computed, extra) { if (computed)
                    return rdisplayswap.test(jQuery.css(elem, 'display')) && 0 === elem.offsetWidth ? swap(elem, cssShow, function () { return getWidthOrHeight(elem, name, extra); }) : getWidthOrHeight(elem, name, extra); }, set: function (elem, value, extra) { var styles = extra && getStyles(elem); return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && 'border-box' === jQuery.css(elem, 'boxSizing', !1, styles), styles) : 0); } }; }), support.opacity || (jQuery.cssHooks.opacity = { get: function (elem, computed) { return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || '') ? .01 * parseFloat(RegExp.$1) + '' : computed ? '1' : ''; }, set: function (elem, value) { var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? 'alpha(opacity=' + 100 * value + ')' : '', filter = currentStyle && currentStyle.filter || style.filter || ''; style.zoom = 1, (1 <= value || '' === value) && '' === jQuery.trim(filter.replace(ralpha, '')) && style.removeAttribute && (style.removeAttribute('filter'), '' === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + ' ' + opacity); } }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) { if (computed)
                return swap(elem, { display: 'inline-block' }, curCSS, [elem, 'marginRight']); }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) { if (computed)
                return (parseFloat(curCSS(elem, 'marginLeft')) || (jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () { return elem.getBoundingClientRect().left; }) : 0)) + 'px'; }), jQuery.each({ margin: '', padding: '', border: 'Width' }, function (prefix, suffix) { jQuery.cssHooks[prefix + suffix] = { expand: function (value) { for (var i = 0, expanded = {}, parts = 'string' == typeof value ? value.split(' ') : [value]; 4 > i; i++)
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]; return expanded; } }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber); }), jQuery.fn.extend({ css: function (name, value) { return access(this, function (elem, name, value) { var map = {}, i = 0, styles, len; if (jQuery.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; i < len; i++)
                        map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map;
                } return void 0 === value ? jQuery.css(elem, name) : jQuery.style(elem, name, value); }, name, value, 1 < arguments.length); }, show: function () { return showHide(this, !0); }, hide: function () { return showHide(this); }, toggle: function (state) { return 'boolean' == typeof state ? state ? this.show() : this.hide() : this.each(function () { isHidden(this) ? jQuery(this).show() : jQuery(this).hide(); }); } }), jQuery.Tween = Tween, Tween.prototype = { constructor: Tween, init: function (elem, options, prop, end, easing, unit) { this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px'); }, cur: function () { var hooks = Tween.propHooks[this.prop]; return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this); }, run: function (percent) { var hooks = Tween.propHooks[this.prop], eased; return this.pos = this.options.duration ? eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this; } }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = { _default: { get: function (tween) { var result; return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ''), result && 'auto' !== result ? result : 0); }, set: function (tween) { jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 === tween.elem.nodeType && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now; } } }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function (tween) { tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now); } }, jQuery.easing = { linear: function (p) { return p; }, swing: function (p) { return .5 - Math.cos(p * Math.PI) / 2; }, _default: 'swing' }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
            var rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/, fxNow, timerId;
            jQuery.Animation = jQuery.extend(Animation, { tweeners: { "*": [function (prop, value) { var tween = this.createTween(prop, value); return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween; }] }, tweener: function (props, callback) { jQuery.isFunction(props) ? (callback = props, props = ['*']) : props = props.match(rnotwhite); for (var index = 0, length = props.length, prop; index < length; index++)
                    prop = props[index], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback); }, prefilters: [defaultPrefilter], prefilter: function (callback, prepend) { prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback); } }), jQuery.speed = function (speed, easing, fn) { var opt = speed && 'object' == typeof speed ? jQuery.extend({}, speed) : { complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing }; return opt.duration = jQuery.fx.off ? 0 : 'number' == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, (null == opt.queue || !0 === opt.queue) && (opt.queue = 'fx'), opt.old = opt.complete, opt.complete = function () { jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue); }, opt; }, jQuery.fn.extend({ fadeTo: function (speed, to, easing, callback) { return this.filter(isHidden).css('opacity', 0).show().end().animate({ opacity: to }, speed, easing, callback); }, animate: function (prop, speed, easing, callback) { var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function () { var anim = Animation(this, jQuery.extend({}, prop), optall); (empty || jQuery._data(this, 'finish')) && anim.stop(!0); }; return doAnimation.finish = doAnimation, empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation); }, stop: function (type, clearQueue, gotoEnd) { var stopQueue = function (hooks) { var stop = hooks.stop; delete hooks.stop, stop(gotoEnd); }; return 'string' != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && !1 !== type && this.queue(type || 'fx', []), this.each(function () { var dequeue = !0, index = null != type && type + 'queueHooks', timers = jQuery.timers, data = jQuery._data(this); if (index)
                    data[index] && data[index].stop && stopQueue(data[index]);
                else
                    for (index in data)
                        data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]); for (index = timers.length; index--;)
                    timers[index].elem === this && (null == type || timers[index].queue === type) && (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1)); (dequeue || !gotoEnd) && jQuery.dequeue(this, type); }); }, finish: function (type) { return !1 !== type && (type = type || 'fx'), this.each(function () { var data = jQuery._data(this), queue = data[type + 'queue'], hooks = data[type + 'queueHooks'], timers = jQuery.timers, length = queue ? queue.length : 0, index; for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;)
                    timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1)); for (index = 0; index < length; index++)
                    queue[index] && queue[index].finish && queue[index].finish.call(this); delete data.finish; }); } }), jQuery.each(['toggle', 'show', 'hide'], function (i, name) { var cssFn = jQuery.fn[name]; jQuery.fn[name] = function (speed, easing, callback) { return null == speed || 'boolean' == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback); }; }), jQuery.each({ slideDown: genFx('show'), slideUp: genFx('hide'), slideToggle: genFx('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (name, props) { jQuery.fn[name] = function (speed, easing, callback) { return this.animate(props, speed, easing, callback); }; }), jQuery.timers = [], jQuery.fx.tick = function () { var timers = jQuery.timers, i = 0, timer; for (fxNow = jQuery.now(); i < timers.length; i++)
                timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1); timers.length || jQuery.fx.stop(), fxNow = void 0; }, jQuery.fx.timer = function (timer) { jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop(); }, jQuery.fx.interval = 13, jQuery.fx.start = function () { timerId || (timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval)); }, jQuery.fx.stop = function () { window.clearInterval(timerId), timerId = null; }, jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }, jQuery.fn.delay = function (time, type) { return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || 'fx', this.queue(type, function (next, hooks) { var timeout = window.setTimeout(next, time); hooks.stop = function () { window.clearTimeout(timeout); }; }); }, function () { var input = document.createElement('input'), div = document.createElement('div'), select = document.createElement('select'), opt = select.appendChild(document.createElement('option')), a; div = document.createElement('div'), div.setAttribute('className', 't'), div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', a = div.getElementsByTagName('a')[0], input.setAttribute('type', 'checkbox'), div.appendChild(input), a = div.getElementsByTagName('a')[0], a.style.cssText = 'top:1px', support.getSetAttribute = 't' !== div.className, support.style = /top/.test(a.getAttribute('style')), support.hrefNormalized = '/a' === a.getAttribute('href'), support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement('form').enctype, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement('input'), input.setAttribute('value', ''), support.input = '' === input.getAttribute('value'), input.value = 't', input.setAttribute('type', 'radio'), support.radioValue = 't' === input.value; }();
            var rreturn = /\r/g, rspaces = /[\x20\t\r\n\f]+/g;
            jQuery.fn.extend({ val: function (value) { var elem = this[0], hooks, ret, isFunction; return arguments.length ? (isFunction = jQuery.isFunction(value), this.each(function (i) { var val; 1 !== this.nodeType || (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = '' : 'number' == typeof val ? val += '' : jQuery.isArray(val) && (val = jQuery.map(val, function (value) { return null == value ? '' : value + ''; })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], (!hooks || !('set' in hooks) || void 0 === hooks.set(this, val, 'value')) && (this.value = val)); })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && 'get' in hooks && void 0 !== (ret = hooks.get(elem, 'value'))) ? ret : (ret = elem.value, 'string' == typeof ret ? ret.replace(rreturn, '') : null == ret ? '' : ret) : void 0; } }), jQuery.extend({ valHooks: { option: { get: function (elem) { var val = jQuery.find.attr(elem, 'value'); return null == val ? jQuery.trim(jQuery.text(elem)).replace(rspaces, ' ') : val; } }, select: { get: function (elem) { for (var options = elem.options, index = elem.selectedIndex, one = 'select-one' === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0, value, option; i < max; i++)
                            if (option = options[i], (option.selected || i === index) && (support.optDisabled ? !option.disabled : null === option.getAttribute('disabled')) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, 'optgroup'))) {
                                if (value = jQuery(option).val(), one)
                                    return value;
                                values.push(value);
                            } return values; }, set: function (elem, value) { for (var options = elem.options, values = jQuery.makeArray(value), i = options.length, optionSet, option; i--;)
                            if (option = options[i], -1 < jQuery.inArray(jQuery.valHooks.option.get(option), values))
                                try {
                                    option.selected = optionSet = !0;
                                }
                                catch (_) {
                                    option.scrollHeight;
                                }
                            else
                                option.selected = !1; return optionSet || (elem.selectedIndex = -1), options; } } } }), jQuery.each(['radio', 'checkbox'], function () { jQuery.valHooks[this] = { set: function (elem, value) { if (jQuery.isArray(value))
                    return elem.checked = -1 < jQuery.inArray(jQuery(elem).val(), value); } }, support.checkOn || (jQuery.valHooks[this].get = function (elem) { return null === elem.getAttribute('value') ? 'on' : elem.value; }); });
            var attrHandle = jQuery.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input, nodeHook, boolHook;
            jQuery.fn.extend({ attr: function (name, value) { return access(this, jQuery.attr, name, value, 1 < arguments.length); }, removeAttr: function (name) { return this.each(function () { jQuery.removeAttr(this, name); }); } }), jQuery.extend({ attr: function (elem, name, value) { var nType = elem.nodeType, ret, hooks; if (3 !== nType && 8 !== nType && 2 !== nType)
                    return 'undefined' == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 !== value) ? null === value ? void jQuery.removeAttr(elem, name) : hooks && 'set' in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ''), value) : hooks && 'get' in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret); }, attrHooks: { type: { set: function (elem, value) { if (!support.radioValue && 'radio' === value && jQuery.nodeName(elem, 'input')) {
                            var val = elem.value;
                            return elem.setAttribute('type', value), val && (elem.value = val), value;
                        } } } }, removeAttr: function (elem, value) { var i = 0, attrNames = value && value.match(rnotwhite), name, propName; if (attrNames && 1 === elem.nodeType)
                    for (; name = attrNames[i++];)
                        propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase('default-' + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ''), elem.removeAttribute(getSetAttribute ? name : propName); } }), boolHook = { set: function (elem, value, name) { return !1 === value ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase('default-' + name)] = elem[name] = !0, name; } }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) { var getter = attrHandle[name] || jQuery.find.attr; attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) { var ret, handle; return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null == getter(elem, name, isXML) ? null : name.toLowerCase(), attrHandle[name] = handle), ret; } : function (elem, name, isXML) { if (!isXML)
                return elem[jQuery.camelCase('default-' + name)] ? name.toLowerCase() : null; }; }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = { set: function (elem, value, name) { return jQuery.nodeName(elem, 'input') ? void (elem.defaultValue = value) : nodeHook && nodeHook.set(elem, value, name); } }), getSetAttribute || (nodeHook = { set: function (elem, value, name) { var ret = elem.getAttributeNode(name); if (ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += '', 'value' === name || value === elem.getAttribute(name))
                    return value; } }, attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) { var ret; if (!isXML)
                return (ret = elem.getAttributeNode(name)) && '' !== ret.value ? ret.value : null; }, jQuery.valHooks.button = { get: function (elem, name) { var ret = elem.getAttributeNode(name); if (ret && ret.specified)
                    return ret.value; }, set: nodeHook.set }, jQuery.attrHooks.contenteditable = { set: function (elem, value, name) { nodeHook.set(elem, '' !== value && value, name); } }, jQuery.each(['width', 'height'], function (i, name) { jQuery.attrHooks[name] = { set: function (elem, value) { if ('' === value)
                    return elem.setAttribute(name, 'auto'), value; } }; })), support.style || (jQuery.attrHooks.style = { get: function (elem) { return elem.style.cssText || void 0; }, set: function (elem, value) { return elem.style.cssText = value + ''; } });
            var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
            jQuery.fn.extend({ prop: function (name, value) { return access(this, jQuery.prop, name, value, 1 < arguments.length); }, removeProp: function (name) { return name = jQuery.propFix[name] || name, this.each(function () { try {
                    this[name] = void 0, delete this[name];
                }
                catch (e) { } }); } }), jQuery.extend({ prop: function (elem, name, value) { var nType = elem.nodeType, ret, hooks; if (3 !== nType && 8 !== nType && 2 !== nType)
                    return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 === value ? hooks && 'get' in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name] : hooks && 'set' in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value; }, propHooks: { tabIndex: { get: function (elem) { var tabindex = jQuery.find.attr(elem, 'tabindex'); return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1; } } }, propFix: { "for": 'htmlFor', "class": 'className' } }), support.hrefNormalized || jQuery.each(['href', 'src'], function (i, name) { jQuery.propHooks[name] = { get: function (elem) { return elem.getAttribute(name, 4); } }; }), support.optSelected || (jQuery.propHooks.selected = { get: function (elem) { var parent = elem.parentNode; return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null; }, set: function (elem) { var parent = elem.parentNode; parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex); } }), jQuery.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { jQuery.propFix[this.toLowerCase()] = this; }), support.enctype || (jQuery.propFix.enctype = 'encoding');
            var rclass = /[\t\r\n\f]/g;
            jQuery.fn.extend({ addClass: function (value) { var i = 0, classes, elem, cur, curValue, clazz, j, finalValue; if (jQuery.isFunction(value))
                    return this.each(function (j) { jQuery(this).addClass(value.call(this, j, getClass(this))); }); if ('string' == typeof value && value)
                    for (classes = value.match(rnotwhite) || []; elem = this[i++];)
                        if (curValue = getClass(elem), cur = 1 === elem.nodeType && (' ' + curValue + ' ').replace(rclass, ' '), cur) {
                            for (j = 0; clazz = classes[j++];)
                                0 > cur.indexOf(' ' + clazz + ' ') && (cur += clazz + ' ');
                            finalValue = jQuery.trim(cur), curValue !== finalValue && jQuery.attr(elem, 'class', finalValue);
                        } return this; }, removeClass: function (value) { var i = 0, classes, elem, cur, curValue, clazz, j, finalValue; if (jQuery.isFunction(value))
                    return this.each(function (j) { jQuery(this).removeClass(value.call(this, j, getClass(this))); }); if (!arguments.length)
                    return this.attr('class', ''); if ('string' == typeof value && value)
                    for (classes = value.match(rnotwhite) || []; elem = this[i++];)
                        if (curValue = getClass(elem), cur = 1 === elem.nodeType && (' ' + curValue + ' ').replace(rclass, ' '), cur) {
                            for (j = 0; clazz = classes[j++];)
                                for (; -1 < cur.indexOf(' ' + clazz + ' ');)
                                    cur = cur.replace(' ' + clazz + ' ', ' ');
                            finalValue = jQuery.trim(cur), curValue !== finalValue && jQuery.attr(elem, 'class', finalValue);
                        } return this; }, toggleClass: function (value, stateVal) { var type = typeof value; return 'boolean' == typeof stateVal && 'string' == type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function (i) { jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal); }) : this.each(function () { var className, i, self, classNames; if ('string' == type)
                    for (i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];)
                        self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                else
                    (void 0 === value || 'boolean' == type) && (className = getClass(this), className && jQuery._data(this, '__className__', className), jQuery.attr(this, 'class', className || !1 === value ? '' : jQuery._data(this, '__className__') || '')); }); }, hasClass: function (selector) { var i = 0, className, elem; for (className = ' ' + selector + ' '; elem = this[i++];)
                    if (1 === elem.nodeType && -1 < (' ' + getClass(elem) + ' ').replace(rclass, ' ').indexOf(className))
                        return !0; return !1; } }), jQuery.each(['blur', 'focus', 'focusin', 'focusout', 'load', 'resize', 'scroll', 'unload', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'error', 'contextmenu'], function (i, name) { jQuery.fn[name] = function (data, fn) { return 0 < arguments.length ? this.on(name, null, data, fn) : this.trigger(name); }; }), jQuery.fn.extend({ hover: function (fnOver, fnOut) { return this.mouseenter(fnOver).mouseleave(fnOut || fnOver); } });
            var location = window.location, nonce = jQuery.now(), rquery = /\?/, rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            jQuery.parseJSON = function (data) { if (window.JSON && window.JSON.parse)
                return window.JSON.parse(data + ''); var depth = null, str = jQuery.trim(data + ''), requireNonComma; return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) { return (requireNonComma && comma && (depth = 0), 0 === depth) ? token : (requireNonComma = open || comma, depth += !close - !open, ''); })) ? Function('return ' + str)() : jQuery.error('Invalid JSON: ' + data); }, jQuery.parseXML = function (data) { var xml, tmp; if (!data || 'string' != typeof data)
                return null; try {
                window.DOMParser ? (tmp = new window.DOMParser, xml = tmp.parseFromString(data, 'text/xml')) : (xml = new window.ActiveXObject('Microsoft.XMLDOM'), xml.async = 'false', xml.loadXML(data));
            }
            catch (e) {
                xml = void 0;
            } return xml && xml.documentElement && !xml.getElementsByTagName('parsererror').length || jQuery.error('Invalid XML: ' + data), xml; };
            var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = '*/'.concat('*'), ajaxLocation = location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
            jQuery.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ajaxLocation, type: 'GET', isLocal: rlocalProtocol.test(ajaxLocParts[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { "*": allTypes, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { "* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (target, settings) { return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target); }, ajaxPrefilter: addToPrefiltersOrTransports(prefilters), ajaxTransport: addToPrefiltersOrTransports(transports), ajax: function (url, options) { function done(status, nativeStatusText, responses, headers) { var statusText = nativeStatusText, isSuccess, success, error, response, modified; 2 === state || (state = 2, timeoutTimer && window.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || '', jqXHR.readyState = 0 < status ? 4 : 0, isSuccess = 200 <= status && 300 > status || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader('Last-Modified'), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader('etag'), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || 'HEAD' === s.type ? statusText = 'nocontent' : 304 === status ? statusText = 'notmodified' : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = 'error', 0 > status && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + '', isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger('ajaxComplete', [jqXHR, s]), !--jQuery.active && jQuery.event.trigger('ajaxStop'))); } 'object' == typeof url && (options = url, url = void 0), options = options || {}; var s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks('once memory'), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = 'canceled', jqXHR = { readyState: 0, getResponseHeader: function (key) { var match; if (2 == state) {
                        if (!responseHeaders)
                            for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);)
                                responseHeaders[match[1].toLowerCase()] = match[2];
                        match = responseHeaders[key.toLowerCase()];
                    } return null == match ? null : match; }, getAllResponseHeaders: function () { return 2 == state ? responseHeadersString : null; }, setRequestHeader: function (name, value) { var lname = name.toLowerCase(); return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this; }, overrideMimeType: function (type) { return state || (s.mimeType = type), this; }, statusCode: function (map) { if (map)
                        if (2 > state)
                            for (var code in map)
                                statusCode[code] = [statusCode[code], map[code]];
                        else
                            jqXHR.always(map[jqXHR.status]); return this; }, abort: function (statusText) { var finalText = statusText || strAbort; return transport && transport.abort(finalText), done(0, finalText), this; } }, parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders; if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + '').replace(rhash, '').replace(rprotocol, ajaxLocParts[1] + '//'), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || '*').toLowerCase().match(rnotwhite) || [''], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || ('http:' === parts[1] ? '80' : '443')) !== (ajaxLocParts[3] || ('http:' === ajaxLocParts[1] ? '80' : '443'))))), s.data && s.processData && 'string' != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 == state)
                    return jqXHR; for (i in fireGlobals = jQuery.event && s.global, fireGlobals && 0 == jQuery.active++ && jQuery.event.trigger('ajaxStart'), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? '&' : '?') + s.data, delete s.data), !1 === s.cache && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, '$1_=' + nonce++) : cacheURL + (rquery.test(cacheURL) ? '&' : '?') + '_=' + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL])), (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader('Content-Type', s.contentType), jqXHR.setRequestHeader('Accept', s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ('*' === s.dataTypes[0] ? '' : ', ' + allTypes + '; q=0.01') : s.accepts['*']), s.headers)
                    jqXHR.setRequestHeader(i, s.headers[i]); if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || 2 == state))
                    return jqXHR.abort(); for (i in strAbort = 'abort', { success: 1, error: 1, complete: 1 })
                    jqXHR[i](s[i]); if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR), !transport)
                    done(-1, 'No Transport');
                else {
                    if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger('ajaxSend', [jqXHR, s]), 2 == state)
                        return jqXHR;
                    s.async && 0 < s.timeout && (timeoutTimer = window.setTimeout(function () { jqXHR.abort('timeout'); }, s.timeout));
                    try {
                        state = 1, transport.send(requestHeaders, done);
                    }
                    catch (e) {
                        if (2 > state)
                            done(-1, e);
                        else
                            throw e;
                    }
                } return jqXHR; }, getJSON: function (url, data, callback) { return jQuery.get(url, data, callback, 'json'); }, getScript: function (url, callback) { return jQuery.get(url, void 0, callback, 'script'); } }), jQuery.each(['get', 'post'], function (i, method) { jQuery[method] = function (url, data, callback, type) { return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax(jQuery.extend({ url: url, type: method, dataType: type, data: data, success: callback }, jQuery.isPlainObject(url) && url)); }; }), jQuery._evalUrl = function (url) { return jQuery.ajax({ url: url, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 }); }, jQuery.fn.extend({ wrapAll: function (html) { if (jQuery.isFunction(html))
                    return this.each(function (i) { jQuery(this).wrapAll(html.call(this, i)); }); if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function () { for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;)
                        elem = elem.firstChild; return elem; }).append(this);
                } return this; }, wrapInner: function (html) { return jQuery.isFunction(html) ? this.each(function (i) { jQuery(this).wrapInner(html.call(this, i)); }) : this.each(function () { var self = jQuery(this), contents = self.contents(); contents.length ? contents.wrapAll(html) : self.append(html); }); }, wrap: function (html) { var isFunction = jQuery.isFunction(html); return this.each(function (i) { jQuery(this).wrapAll(isFunction ? html.call(this, i) : html); }); }, unwrap: function () { return this.parent().each(function () { jQuery.nodeName(this, 'body') || jQuery(this).replaceWith(this.childNodes); }).end(); } }), jQuery.expr.filters.hidden = function (elem) { return support.reliableHiddenOffsets() ? 0 >= elem.offsetWidth && 0 >= elem.offsetHeight && !elem.getClientRects().length : filterHidden(elem); }, jQuery.expr.filters.visible = function (elem) { return !jQuery.expr.filters.hidden(elem); };
            var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
            jQuery.param = function (a, traditional) { var s = [], add = function (key, value) { value = jQuery.isFunction(value) ? value() : null == value ? '' : value, s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value); }, prefix; if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a))
                jQuery.each(a, function () { add(this.name, this.value); });
            else
                for (prefix in a)
                    buildParams(prefix, a[prefix], traditional, add); return s.join('&').replace(r20, '+'); }, jQuery.fn.extend({ serialize: function () { return jQuery.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var elements = jQuery.prop(this, 'elements'); return elements ? jQuery.makeArray(elements) : this; }).filter(function () { var type = this.type; return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type)); }).map(function (i, elem) { var val = jQuery(this).val(); return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) { return { name: elem.name, value: val.replace(rCRLF, '\r\n') }; }) : { name: elem.name, value: val.replace(rCRLF, '\r\n') }; }).get(); } }), jQuery.ajaxSettings.xhr = void 0 === window.ActiveXObject ? createStandardXHR : function () { return this.isLocal ? createActiveXHR() : 8 < document.documentMode ? createStandardXHR() : /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR(); };
            var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery.ajaxSettings.xhr();
            window.attachEvent && window.attachEvent('onunload', function () { for (var key in xhrCallbacks)
                xhrCallbacks[key](void 0, !0); }), support.cors = !!xhrSupported && 'withCredentials' in xhrSupported, xhrSupported = support.ajax = !!xhrSupported, xhrSupported && jQuery.ajaxTransport(function (options) { if (!options.crossDomain || support.cors) {
                var callback;
                return { send: function (headers, complete) { var xhr = options.xhr(), id = ++xhrId, i; if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                        for (i in options.xhrFields)
                            xhr[i] = options.xhrFields[i]; for (i in options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers['X-Requested-With'] || (headers['X-Requested-With'] = 'XMLHttpRequest'), headers)
                        void 0 !== headers[i] && xhr.setRequestHeader(i, headers[i] + ''); xhr.send(options.hasContent && options.data || null), callback = function (_, isAbort) { var status, statusText, responses; if (callback && (isAbort || 4 === xhr.readyState))
                        if (delete xhrCallbacks[id], callback = void 0, xhr.onreadystatechange = jQuery.noop, isAbort)
                            4 !== xhr.readyState && xhr.abort();
                        else {
                            responses = {}, status = xhr.status, 'string' == typeof xhr.responseText && (responses.text = xhr.responseText);
                            try {
                                statusText = xhr.statusText;
                            }
                            catch (e) {
                                statusText = '';
                            }
                            status || !options.isLocal || options.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404;
                        } responses && complete(status, statusText, responses, xhr.getAllResponseHeaders()); }, options.async ? 4 === xhr.readyState ? window.setTimeout(callback) : xhr.onreadystatechange = xhrCallbacks[id] = callback : callback(); }, abort: function () { callback && callback(void 0, !0); } };
            } }), jQuery.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (text) { return jQuery.globalEval(text), text; } } }), jQuery.ajaxPrefilter('script', function (s) { void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = 'GET', s.global = !1); }), jQuery.ajaxTransport('script', function (s) { if (s.crossDomain) {
                var head = document.head || jQuery('head')[0] || document.documentElement, script;
                return { send: function (_, callback) { script = document.createElement('script'), script.async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function (_, isAbort) { (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, !isAbort && callback(200, 'success')); }, head.insertBefore(script, head.firstChild); }, abort: function () { script && script.onload(void 0, !0); } };
            } });
            var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({ jsonp: 'callback', jsonpCallback: function () { var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce++; return this[callback] = !0, callback; } }), jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) { var jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? 'url' : 'string' == typeof s.data && 0 === (s.contentType || '').indexOf('application/x-www-form-urlencoded') && rjsonp.test(s.data) && 'data'), callbackName, overwritten, responseContainer; if (jsonProp || 'jsonp' === s.dataTypes[0])
                return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName), s.converters['script json'] = function () { return responseContainer || jQuery.error(callbackName + ' was not called'), responseContainer[0]; }, s.dataTypes[0] = 'json', overwritten = window[callbackName], window[callbackName] = function () { responseContainer = arguments; }, jqXHR.always(function () { void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0; }), 'script'; }), jQuery.parseHTML = function (data, context, keepScripts) { if (!data || 'string' != typeof data)
                return null; 'boolean' == typeof context && (keepScripts = context, context = !1), context = context || document; var parsed = rsingleTag.exec(data), scripts = !keepScripts && []; return parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)); };
            var _load = jQuery.fn.load;
            jQuery.fn.load = function (url, params, callback) { if ('string' != typeof url && _load)
                return _load.apply(this, arguments); var self = this, off = url.indexOf(' '), selector, type, response; return -1 < off && (selector = jQuery.trim(url.slice(off, url.length)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && 'object' == typeof params && (type = 'POST'), 0 < self.length && jQuery.ajax({ url: url, type: type || 'GET', dataType: 'html', data: params }).done(function (responseText) { response = arguments, self.html(selector ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector) : responseText); }).always(callback && function (jqXHR, status) { self.each(function () { callback.apply(this, response || [jqXHR.responseText, status, jqXHR]); }); }), this; }, jQuery.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (i, type) { jQuery.fn[type] = function (fn) { return this.on(type, fn); }; }), jQuery.expr.filters.animated = function (elem) { return jQuery.grep(jQuery.timers, function (fn) { return elem === fn.elem; }).length; }, jQuery.offset = { setOffset: function (elem, options, i) { var position = jQuery.css(elem, 'position'), curElem = jQuery(elem), props = {}, curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition; 'static' === position && (elem.style.position = 'relative'), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, 'top'), curCSSLeft = jQuery.css(elem, 'left'), calculatePosition = ('absolute' === position || 'fixed' === position) && -1 < jQuery.inArray('auto', [curCSSTop, curCSSLeft]), calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), 'using' in options ? options.using.call(elem, props) : curElem.css(props); } }, jQuery.fn.extend({ offset: function (options) { if (arguments.length)
                    return void 0 === options ? this : this.each(function (i) { jQuery.offset.setOffset(this, options, i); }); var box = { top: 0, left: 0 }, elem = this[0], doc = elem && elem.ownerDocument, docElem, win; if (doc)
                    return (docElem = doc.documentElement, !jQuery.contains(docElem, elem)) ? box : ('undefined' != typeof elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), win = getWindow(doc), { top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0) }); }, position: function () { if (this[0]) {
                    var parentOffset = { top: 0, left: 0 }, elem = this[0], offsetParent, offset;
                    return 'fixed' === jQuery.css(elem, 'position') ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), !jQuery.nodeName(offsetParent[0], 'html') && (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], 'borderTopWidth', !0), parentOffset.left += jQuery.css(offsetParent[0], 'borderLeftWidth', !0)), { top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', !0), left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', !0) };
                } }, offsetParent: function () { return this.map(function () { for (var offsetParent = this.offsetParent; offsetParent && !jQuery.nodeName(offsetParent, 'html') && 'static' === jQuery.css(offsetParent, 'position');)
                    offsetParent = offsetParent.offsetParent; return offsetParent || documentElement; }); } }), jQuery.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (method, prop) { var top = /Y/.test(prop); jQuery.fn[method] = function (val) { return access(this, function (elem, method, val) { var win = getWindow(elem); return void 0 === val ? win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method] : void (win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val); }, method, val, arguments.length, null); }; }), jQuery.each(['top', 'left'], function (i, prop) { jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) { if (computed)
                return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed; }); }), jQuery.each({ Height: 'height', Width: 'width' }, function (name, type) { jQuery.each({ padding: 'inner' + name, content: type, "": 'outer' + name }, function (defaultExtra, funcName) { jQuery.fn[funcName] = function (margin, value) { var chainable = arguments.length && (defaultExtra || 'boolean' != typeof margin), extra = defaultExtra || (!0 === margin || !0 === value ? 'margin' : 'border'); return access(this, function (elem, type, value) { var doc; return jQuery.isWindow(elem) ? elem.document.documentElement['client' + name] : 9 === elem.nodeType ? (doc = elem.documentElement, _Mathmax(elem.body['scroll' + name], doc['scroll' + name], elem.body['offset' + name], doc['offset' + name], doc['client' + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra); }, type, chainable ? margin : void 0, chainable, null); }; }); }), jQuery.fn.extend({ bind: function (types, data, fn) { return this.on(types, null, data, fn); }, unbind: function (types, fn) { return this.off(types, null, fn); }, delegate: function (selector, types, data, fn) { return this.on(types, selector, data, fn); }, undelegate: function (selector, types, fn) { return 1 === arguments.length ? this.off(selector, '**') : this.off(types, selector || '**', fn); } }), jQuery.fn.size = function () { return this.length; }, jQuery.fn.andSelf = jQuery.fn.addBack, __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return jQuery; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            var _jQuery = window.jQuery, _$ = window.$;
            return jQuery.noConflict = function (deep) { return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery; }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery;
        });
    }, "./src/Components/autoComplete.ts": /*!****************************************!*\
     !*** ./src/Components/autoComplete.ts ***!
     \****************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) { function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); } return new (P || (P = Promise))(function (resolve, reject) { function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } } function rejected(value) { try {
            step(generator['throw'](value));
        }
        catch (e) {
            reject(e);
        } } function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); } step((generator = generator.apply(thisArg, _arguments || [])).next()); }); }, __generator = this && this.__generator || function (thisArg, body) { function verb(n) { return function (v) { return step([n, v]); }; } function step(op) { if (f)
            throw new TypeError('Generator is already executing.'); for (; _;)
            try {
                if (f = 1, y && (t = 2 & op[0] ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                switch ((y = 0, t) && (op = [2 & op[0], t.value]), op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4: return _.label++, { value: op[1], done: !1 };
                    case 5:
                        _.label++, y = op[1], op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop(), _.trys.pop();
                        continue;
                    default:
                        if ((t = _.trys, !(t = 0 < t.length && t[t.length - 1])) && (6 === op[0] || 2 === op[0])) {
                            _ = 0;
                            continue;
                        }
                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (6 === op[0] && _.label < t[1]) {
                            _.label = t[1], t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2], _.ops.push(op);
                            break;
                        }
                        t[2] && _.ops.pop(), _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e], y = 0;
            }
            finally {
                f = t = 0;
            } if (5 & op[0])
            throw op[1]; return { value: op[0] ? op[1] : void 0, done: !0 }; } var _ = { label: 0, sent: function () { if (1 & t[0])
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g; return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, 'function' == typeof Symbol && (g[Symbol.iterator] = function () { return this; }), g; };
        exports.__esModule = !0;
        var $ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'), _1 = __webpack_require__(/*! . */ './src/Components/index.ts'), utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (_a) { var options = _a.options, value = _a.value, onInputChange = _a.onInputChange, autoCompleteWrap = utils_1.createElement({ tagName: 'div', props: { id: utils_1.elementIdGenerator.gererate(), className: 'auto-complete' } }), inputDom = document.createElement('input'); inputDom.id = utils_1.elementIdGenerator.gererate(), value && (inputDom.value = value.label); var getInput = function () { return document.getElementById(inputDom.id); }, setInputValue = function (value) { getInput().value = value; }, onInputTextChange = function (text) { return __awaiter(this, void 0, void 0, function () { var newOptions; return __generator(this, function (_a) { switch (_a.label) {
            case 0: return [4, onInputChange(text)];
            case 1: return newOptions = _a.sent(), dropdown.innerHTML = '', newOptions.forEach(function (option) { var listItem = utils_1.createElement({ tagName: 'div' }); listItem.innerHTML = option.label, listItem.onclick = function () { setInputValue(option.label); }, dropdown.appendChild(listItem); }), [2];
        } }); }); }; inputDom.onkeydown = function () { onInputTextChange(this.value); }, inputDom.onfocus = function () { document.getElementById(dropdown.id).style.display = 'block'; }; var dropdown = _1.Dropdown({}); return dropdown = utils_1.getElementWithClassNames(dropdown, ['auto-complete__dropdown']), dropdown = utils_1.getElementWithStyle(dropdown, [{ key: 'display', value: 'none' }]), dropdown.id = utils_1.elementIdGenerator.gererate(), options.forEach(function (option) { var listItem = document.createElement('div'); listItem.onclick = function () { setInputValue(option.label); }, listItem.innerHTML = option.label, dropdown.appendChild(listItem); }), $(document).click(function (e) { var getDropdown = document.getElementById(dropdown.id); 'none' === getDropdown.style.display || getDropdown.contains(e.target) || getInput().contains(e.target) || (getDropdown.style.display = 'none'); }), autoCompleteWrap.appendChild(inputDom), autoCompleteWrap.appendChild(dropdown), autoCompleteWrap; }, 'AutoComplete');
    }, "./src/Components/dialog.ts": /*!**********************************!*\
    !*** ./src/Components/dialog.ts ***!
    \**********************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (_a) { var htmlSrc = _a.htmlSrc, _b = _a.dialogArguments, dialogArguments = void 0 === _b ? {} : _b, _c = _a.height, height = void 0 === _c ? 250 : _c, _d = _a.width, width = void 0 === _d ? 850 : _d; window.showModalDialog(htmlSrc, dialogArguments, 'dialogHeight:' + height + 'px;dialogWidth:' + width + 'px'); }, 'Dialog');
    }, "./src/Components/dropdown.ts": /*!************************************!*\
    !*** ./src/Components/dropdown.ts ***!
    \************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (_a) { var children = _a.children, dropdown = utils_1.createElement({ tagName: 'div' }); return dropdown = utils_1.getElementWithClassNames(dropdown, ['didgah-dropdown']), children && dropdown.appendChild(children), dropdown; }, 'DropDown');
    }, "./src/Components/dynamicData/dynamicDataModal.ts": /*!********************************************************!*\
    !*** ./src/Components/dynamicData/dynamicDataModal.ts ***!
    \********************************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var simple_modal_1 = __webpack_require__(/*! ../simple-modal */ './src/Components/simple-modal.ts'), utils_1 = __webpack_require__(/*! ../../utils */ './src/utils.ts'), gride_1 = __webpack_require__(/*! ./gride */ './src/Components/dynamicData/gride.ts');
        exports['default'] = function (_a) { var fields = _a.fields, formData = _a.formData, editCellRenderer = _a.editCellRenderer, onSubmit = _a.onSubmit, modal = simple_modal_1['default'](), formId = utils_1.elementIdGenerator.gererate(), form = utils_1.createElement({ tagName: 'form', props: { id: formId } }); fields.map(function (field) { var wrap = utils_1.createElement({ tagName: 'div' }); if (field.formData = formData[field.name], field.Type.IsBundle) {
            var input = editCellRenderer(field).input;
            wrap.appendChild(gride_1['default'](input));
        }
        else
            wrap.appendChild(editCellRenderer(field).input); form.appendChild(wrap); }), modal.appendChild(form); var button = utils_1.createElement({ tagName: 'input', props: { type: 'submit', onclick: function () { onSubmit(utils_1.formToJSON('' + formId)), simple_modal_1.removeElement(formId); } } }); return modal.appendChild(button), modal; };
    }, "./src/Components/dynamicData/gride.ts": /*!*********************************************!*\
    !*** ./src/Components/dynamicData/gride.ts ***!
    \*********************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        var __assign = this && this.__assign || function () { return __assign = Object.assign || function (t) { for (var i = 1, n = arguments.length, s; i < n; i++)
            for (var p in s = arguments[i], s)
                Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]); return t; }, __assign.apply(this, arguments); }, __spreadArrays = this && this.__spreadArrays || function () { for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length; for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j]; return r; };
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../../utils */ './src/utils.ts'), staticComponents_1 = __webpack_require__(/*! ./staticComponents */ './src/Components/dynamicData/staticComponents.ts'), tableBaseOnRow_1 = __webpack_require__(/*! ../tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), dynamicDataModal_1 = __webpack_require__(/*! ./dynamicDataModal */ './src/Components/dynamicData/dynamicDataModal.ts');
        exports.toTD = function (data, currentDocument) { void 0 === currentDocument && (currentDocument = window.document); var td = utils_1.createElement({ tagName: 'td', props: __assign({}, data.cellProps) }); return td.appendChild(data.input), td; };
        exports['default'] = utils_1.withErrorHandling(function (_a) { function getRowElements(index) { return __spreadArrays([exports.toTD(staticComponents_1.removeCell(index, onRemove))], tableBaseOnRow_1.mapIntoTD(rowsData.fields.map(function (fieldData) { return __assign({}, displayCellRenderer(__assign(__assign({}, fieldData), { formData: formData[index][fieldData.name] }))); })), [exports.toTD(staticComponents_1.settingCell(index, onSetting))]); } function onAdd() { var modal = dynamicDataModal_1['default']({ fields: rowsData.fields, formData: formData, editCellRenderer: editCellRenderer, onSubmit: function (data) { formData.push(data), onUpdateFormData && onUpdateFormData(formData); var tr = utils_1.createElement({ tagName: 'tr', props: {} }), removeTd = exports.toTD(staticComponents_1.removeCell(formData.length - 1, onRemove)); tr.appendChild(removeTd); var _loop_1 = function (item) { var mainTd = exports.toTD(displayCellRenderer(__assign(__assign({}, rowsData.fields.find(function (field) { return field.name === item; })), { formData: data[item] }))); tr.appendChild(mainTd); }; for (var item in data)
                _loop_1(item); var settingTd = exports.toTD(staticComponents_1.settingCell(formData.length - 1, onSetting)); tr.appendChild(settingTd), document.getElementById(tableBodyId).insertBefore(tr, document.getElementById(tableBodyId).lastChild); } }); document.getElementById('root').appendChild(modal); } function onRemove(index) { formData.splice(index, 1), onUpdateFormData && onUpdateFormData(formData); var tableBody = document.getElementById(tableBodyId); tableBody.removeChild(tableBody.childNodes[index]); } function onSetting(index) { var modal = dynamicDataModal_1['default']({ fields: rowsData.fields, formData: formData[index], editCellRenderer: editCellRenderer, onSubmit: function (d) { changeRowData(index, d); } }); modal && document.getElementById('root').appendChild(modal); } function changeRowData(index, data) { formData[index] = data, onUpdateFormData && onUpdateFormData(formData); for (var tableBody = document.getElementById(tableBodyId), tr = utils_1.createElement({ tagName: 'tr' }), _i = 0, _a = getRowElements(index), td; _i < _a.length; _i++)
            td = _a[_i], tr.appendChild(td); tableBody.insertBefore(tr, tableBody.childNodes[index]), tableBody.removeChild(tableBody.childNodes[index + 1]); } var _b = _a.headers, headers = void 0 === _b ? [] : _b, displayCellRenderer = _a.displayCellRenderer, editCellRenderer = _a.editCellRenderer, _c = _a.rowsData, rowsData = void 0 === _c ? {} : _c, _d = _a.initialFormData, initialFormData = void 0 === _d ? [] : _d, onUpdateFormData = _a.onUpdateFormData, tableId = utils_1.elementIdGenerator.gererate(), tableBodyId = utils_1.elementIdGenerator.gererate(), formData = __spreadArrays(initialFormData), displayRows = function () { return __spreadArrays(formData.map(function (row, i) { return { renderer: getRowElements(i) }; }), [staticComponents_1.addNewRow(onAdd)]); }(); return function () { var tableDom = utils_1.createElement({ tagName: 'table', props: { className: 'table-base-row', id: tableId, dir: 'rtl' } }), tableHead = utils_1.createElement({ tagName: 'thead' }), tableheadrow = utils_1.createElement({ tagName: 'tr' }), tableBody = utils_1.createElement({ tagName: 'tbody', props: { id: tableBodyId } }); tableheadrow.appendChild(utils_1.createElement({ tagName: 'th' })); for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i], th = utils_1.createElement({ tagName: 'th' });
            th.innerHTML = header, tableheadrow.appendChild(th);
        } for (var _a = 0, displayRows_1 = displayRows; _a < displayRows_1.length; _a++) {
            for (var row = displayRows_1[_a], tr = utils_1.createElement({ tagName: 'tr', props: {} }), _b = 0, _c = row.renderer, td; _b < _c.length; _b++)
                td = _c[_b], tr.appendChild(td);
            tableBody.appendChild(tr);
        } return tableHead.appendChild(tableheadrow), tableDom.appendChild(tableHead), tableDom.appendChild(tableBody), tableDom; }(); }, 'DynamicData/Grid');
    }, "./src/Components/dynamicData/staticComponents.ts": /*!********************************************************!*\
    !*** ./src/Components/dynamicData/staticComponents.ts ***!
    \********************************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var tableBaseOnRow_1 = __webpack_require__(/*! ../tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), utils_1 = __webpack_require__(/*! ../../utils */ './src/utils.ts');
        exports.addNewRow = function (onAdd) { return { renderer: tableBaseOnRow_1.mapIntoTD([{ input: utils_1.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__add-button', type: 'button', value: '+', onclick: function () { onAdd(); } } }) }]) }; }, exports.removeCell = function (index, onRemove) { return { input: utils_1.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__remove-button', type: 'button', value: 'x', onclick: function () { onRemove(index); } } }), cellProps: { style: { width: '50px' } } }; }, exports.settingCell = function (index, onSetting) { return { input: utils_1.createElement({ tagName: 'input', props: { className: 'dynamic-table__row__setting-button', type: 'button', value: '...', onclick: function () { onSetting(index); } } }) }; };
    }, "./src/Components/index.ts": /*!*********************************!*\
    !*** ./src/Components/index.ts ***!
    \*********************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var table_1 = __webpack_require__(/*! ./table */ './src/Components/table.ts');
        exports.Table = table_1['default'];
        var tableBaseOnRow_1 = __webpack_require__(/*! ./tableBaseOnRow */ './src/Components/tableBaseOnRow.ts');
        exports.TableBaseOnRow = tableBaseOnRow_1['default'];
        var dialog_1 = __webpack_require__(/*! ./dialog */ './src/Components/dialog.ts');
        exports.Dialog = dialog_1['default'];
        var select_1 = __webpack_require__(/*! ./select */ './src/Components/select.ts');
        exports.Select = select_1['default'];
        var dropdown_1 = __webpack_require__(/*! ./dropdown */ './src/Components/dropdown.ts');
        exports.Dropdown = dropdown_1['default'];
        var autoComplete_1 = __webpack_require__(/*! ./autoComplete */ './src/Components/autoComplete.ts');
        exports.autoCompelete = autoComplete_1['default'];
        var withLabel_1 = __webpack_require__(/*! ./withLabel */ './src/Components/withLabel.ts');
        exports.withLabel = withLabel_1['default'];
    }, "./src/Components/select.ts": /*!**********************************!*\
    !*** ./src/Components/select.ts ***!
    \**********************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (_a) { var options = _a.options, value = _a.value, name = _a.name, select = utils_1.createElement({ tagName: 'select', props: { value: value, name: name } }); return options.map(function (option) { var domOption = utils_1.createElement({ tagName: 'option' }); domOption.setAttribute('value', option.value), domOption.innerHTML = option.label, select.appendChild(domOption); }), select; }, 'Select');
    }, "./src/Components/simple-modal.ts": /*!****************************************!*\
    !*** ./src/Components/simple-modal.ts ***!
    \****************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        function removeElement(id) { var element = document.getElementById(id); element.style.display = 'none'; }
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports.removeElement = removeElement, exports['default'] = function () { var modalId = utils_1.elementIdGenerator.gererate(), leftPosition = (.5 * window.screen.width - 300).toString() + 'px', wrap = utils_1.createElement({ tagName: 'div', props: { id: modalId, className: 'simple-modal' }, onMount: function () { document.getElementById('root'); } }), inner = utils_1.createElement({ tagName: 'div', props: { className: 'simple-modal__inner', style: { left: leftPosition } } }), close = utils_1.createElement({ tagName: 'input', props: { type: 'button', value: 'x', className: 'simple-modal__close', onclick: function () { removeElement(modalId); } } }); inner.appendChild(close); var content = utils_1.createElement({ tagName: 'div', props: { className: 'simple-modal__content' } }); return inner.appendChild(content), wrap.appendChild(inner), wrap; };
    }, "./src/Components/table.ts": /*!*********************************!*\
    !*** ./src/Components/table.ts ***!
    \*********************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (_a) { for (var dataSource = _a.dataSource, columns = _a.columns, dataToDisplay = columns.map(function (column) { return column.dataIndex; }), tableDom = utils_1.createElement({ tagName: 'table' }), tableHead = utils_1.createElement({ tagName: 'thead' }), tableheadrow = utils_1.createElement({ tagName: 'tr' }), tableBody = utils_1.createElement({ tagName: 'tbody' }), _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i], th = utils_1.createElement({ tagName: 'th' });
            th.innerHTML = column.title, tableheadrow.appendChild(th);
        } for (var _b = 0, dataSource_1 = dataSource; _b < dataSource_1.length; _b++) {
            for (var data_1 = dataSource_1[_b], tr = utils_1.createElement({ tagName: 'tr' }), tds = [], _loop_1 = function (d) { var td = utils_1.createElement({ tagName: 'td' }), renderer = columns.find(function (column) { return column.dataIndex === d; }).renderer; if (renderer) {
                var rendererOutput = renderer(data_1);
                utils_1.isObjectDomElement(rendererOutput) ? td.appendChild(rendererOutput) : td.innerHTML = rendererOutput;
            }
            else
                td.innerHTML = data_1[d]; tds.push(td); }, _c = 0, dataToDisplay_1 = dataToDisplay, d; _c < dataToDisplay_1.length; _c++)
                d = dataToDisplay_1[_c], _loop_1(d);
            for (var _d = 0, tds_1 = tds, td; _d < tds_1.length; _d++)
                td = tds_1[_d], tr.appendChild(td);
            tableBody.appendChild(tr);
        } return tableHead.appendChild(tableheadrow), tableDom.appendChild(tableHead), tableDom.appendChild(tableBody), tableDom; }, 'Table');
    }, "./src/Components/tableBaseOnRow.ts": /*!******************************************!*\
    !*** ./src/Components/tableBaseOnRow.ts ***!
    \******************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts'), gride_1 = __webpack_require__(/*! ./dynamicData/gride */ './src/Components/dynamicData/gride.ts');
        exports.mapIntoTD = function (data) { return void 0 === data && (data = []), data.map(function (item) { return gride_1.toTD(item); }); }, exports['default'] = utils_1.withErrorHandling(function (_a) { for (var rows = _a.rows, tableDom = utils_1.createElement({ tagName: 'table', props: { className: 'table-base-row' } }), tableBody = utils_1.createElement({ tagName: 'tbody' }), _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            for (var row = rows_1[_i], tr = utils_1.createElement({ tagName: 'tr', props: {} }), _b = 0, _c = row.renderer, td; _b < _c.length; _b++)
                td = _c[_b], tr.appendChild(td);
            tableBody.appendChild(tr);
        } return tableDom.appendChild(tableBody), tableDom; }, 'TableBasedRow');
    }, "./src/Components/withLabel.ts": /*!*************************************!*\
    !*** ./src/Components/withLabel.ts ***!
    \*************************************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var utils_1 = __webpack_require__(/*! ../utils */ './src/utils.ts');
        exports['default'] = utils_1.withErrorHandling(function (input, title, currentDocument) { void 0 === currentDocument && (currentDocument = window.document); var wrapper = utils_1.createElement({ tagName: 'div', props: { className: 'with-label' } }), label = utils_1.createElement({ tagName: 'label', props: { className: 'with-label__label' } }); return label.innerHTML = title, wrapper.appendChild(label), wrapper.appendChild(input), wrapper; }, 'withLabel');
    }, "./src/main.ts": /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var $ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'), gride_1 = __webpack_require__(/*! ./Components/dynamicData/gride */ './src/Components/dynamicData/gride.ts'), utils_1 = __webpack_require__(/*! ./utils */ './src/utils.ts'), Components_1 = __webpack_require__(/*! ./Components */ './src/Components/index.ts'), tableBaseOnRow_1 = __webpack_require__(/*! ./Components/tableBaseOnRow */ './src/Components/tableBaseOnRow.ts'), Didgah4DynamicDataLibrary = {};
        Didgah4DynamicDataLibrary.currentDocumentObj = utils_1.currentDocumentObj, Didgah4DynamicDataLibrary.elementIdGenerator = utils_1.elementIdGenerator, Didgah4DynamicDataLibrary.formToJSON = utils_1.formToJSON, Didgah4DynamicDataLibrary.dialogFormToJSON = utils_1.dialogFormToJSON, Didgah4DynamicDataLibrary.withLabel = Components_1.withLabel, Didgah4DynamicDataLibrary.mapIntoTD = tableBaseOnRow_1.mapIntoTD, Didgah4DynamicDataLibrary.createElement = utils_1.createElement, Didgah4DynamicDataLibrary.DynamicDataGrid = gride_1['default'], window.jQuery = $, window.Didgah4DynamicDataLibrary = Didgah4DynamicDataLibrary;
    }, "./src/utils.ts": /*!**********************!*\
    !*** ./src/utils.ts ***!
    \**********************/ /*! no static exports found */ function (module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = !0;
        var $ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js');
        exports.currentDocumentObj = { currentDocument: null, getCurrentDocument: function () { return this.currentDocument; }, setCurentDocument: function (doc) { this.currentDocument = doc; } }, exports.container = document.getElementById('root'), exports.isObjectDomElement = function (object) { return object.scopeName && 'HTML' === object.scopeName; }, exports.getElementWithStyle = function (element, styles) { var clonedObject = element.cloneNode(); return styles.forEach(function (style) { clonedObject.style[style.key] = style.value; }), clonedObject; }, exports.renderIntoRoot = function (element) { exports.container.appendChild(element); }, exports.getElementWithClassNames = function (element, classNames) { var clonedObject = element.cloneNode(!0); return classNames.forEach(function (className) { clonedObject.className += ' ' + className; }), clonedObject; }, exports.elementIdGenerator = { busyIds: [], gererate: function () { var id = 10 * Math.random(); return 0 !== $('#' + id).length || this.busyIds.find(function (item) { return item === id; }) ? void this.gererate() : (this.busyIds.push(id), id.toString()); } }, exports.createElement = function (_a) { var tagName = _a.tagName, props = _a.props, onMount = _a.onMount, element = window.document.createElement(tagName), idGenerator = exports.elementIdGenerator; for (var prop in props)
            if ('style' === prop)
                for (var style in props[prop])
                    element.style[style] = props[prop][style];
            else
                console.log(prop), element[prop] = props[prop]; return onMount && ((!props || !props.id) && (element.id = idGenerator.gererate()), $(element.id).ready(function () { onMount(); })), element; }, exports.withErrorHandling = function (component, componentName) { return function () { for (var args = [], _i = 0; _i < arguments.length; _i++)
            args[_i] = arguments[_i]; try {
            return component.apply(void 0, args);
        }
        catch (e) {
            alert('error happend in ' + componentName + ' ' + e.message || !1);
        } }; }, exports.formToJSON = function (selector) { var form = {}; return $(selector).find('input').each(function () { var self = $(this), name = self.attr('fieldName'); form[name] = form[name] ? form[name] + ',' + self.val() : self.val(); }), form; }, exports.dialogFormToJSON = function () { var form = {}; return $('input[type="text"]').each(function () { var self = $(this), name = self.attr('fieldName'); form[name] = form[name] ? form[name] + ',' + self.val() : self.val(); }), form; }, exports.importModule = function (url) { var refinedUrl = url; return new Promise(function (resolve, reject) { var script = document.createElement('script'); script.src = refinedUrl, script.async = !0, script.onload = function () { resolve(), script.remove(); }, script.onerror = function () { reject(new Error('Failed to load module script with URL ' + refinedUrl)), script.remove(); }, document.head.appendChild(script); }); };
    }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (module, exports, __webpack_require__) { module.exports = __webpack_require__(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
