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
        b.d(d, e, function (b) { return a[b]; }.bind(null, e)); return d; }, b.n = function (a) { var c = a && a.__esModule ? function () { return a['default']; } : function () { return a; }; return b.d(c, 'a', c), c; }, b.o = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b); }, b.p = '', b(b.s = 0); })({ "./src/main.ts": /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/ /*! no static exports found */ function () { document.getElementById('root').appendChild(window.DynamicDataTable({})); }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (a, b, c) { a.exports = c(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
