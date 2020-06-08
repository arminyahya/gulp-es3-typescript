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
(function (a) { function b(d) { if (c[d])
    return c[d].exports; var e = c[d] = { i: d, l: !1, exports: {} }; return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports; } var c = {}; return b.m = a, b.c = c, b.d = function (a, c, d) { b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d }); }, b.r = function (a) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(a, '__esModule', { value: !0 }); }, b.t = function (a, c) { if (1 & c && (a = b(a)), 8 & c)
    return a; if (4 & c && 'object' == typeof a && a && a.__esModule)
    return a; var d = Object.create(null); if (b.r(d), Object.defineProperty(d, 'default', { enumerable: !0, value: a }), 2 & c && 'string' != typeof a)
    for (var e in a)
        b.d(d, e, function (b) { return a[b]; }.bind(null, e)); return d; }, b.n = function (a) { var c = a && a.__esModule ? function () { return a['default']; } : function () { return a; }; return b.d(c, 'a', c), c; }, b.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b); }, b.p = '', b(b.s = 0); })({ "./src/anotherGrid.ts": /*!****************************!*\
      !*** ./src/anotherGrid.ts ***!
      \****************************/ /*! no static exports found */ function (a, b) {
        'use strict';
        b.__esModule = !0, b['default'] = function () { return { headers: ['a'], initialFormData: [{ a: 'Armin' }], displayCellRenderer: function () { var a = document.createElement('input'); return a.setAttribute('value', '??'), a.setAttribute('disabled', 'true'), { input: a, cellProps: {} }; }, editCellRenderer: function (a) { return { input: window.Didgah4DynamicDataLibrary.withLabel(window.Didgah4DynamicDataLibrary.createElement({ tagName: 'input', props: { value: a.formData || '', fieldName: a.name } }), a.name), cellProps: { colSpan: a.col } }; }, rowsData: { fields: [{ name: 'a', col: 1, Type: { IsBundle: !1 } }] } }; };
    }, "./src/main.ts": /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/ /*! no static exports found */ function (a, b, c) {
        'use strict';
        b.__esModule = !0;
        var e = c(/*! ./anotherGrid */ './src/anotherGrid.ts');
        window.jQuery(document).ready(function () { var a = window.Didgah4DynamicDataLibrary, b = a.DynamicDataGrid({ headers: ['countryname', 'countrycode', 'grid1'], initialFormData: [{ countryname: 'netherlands', countrycode: '20', grid1: 'stupid' }], displayCellRenderer: function (b) { return { input: a.createElement({ tagName: 'input', props: { value: b.formData, disabled: !0 } }), cellProps: { colSpan: b.col } }; }, editCellRenderer: function (b) { return b.Type.IsBundle ? { input: e['default'](), cellProps: { colSpan: b.col } } : { input: a.withLabel(a.createElement({ tagName: 'input', props: { value: b.formData || '', fieldName: b.name } }), b.name), cellProps: { colSpan: b.col } }; }, rowsData: { fields: [{ name: 'countryname', col: 1, Type: { IsBundle: !1 } }, { name: 'countrycode', col: 3, Type: { IsBundle: !1 } }, { name: 'grid1', col: 1, Type: { IsBundle: !0 } }] } }); document.getElementById('root').appendChild(b); });
    }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (a, b, c) { a.exports = c(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
