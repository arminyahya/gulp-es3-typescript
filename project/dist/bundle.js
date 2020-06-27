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
        __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key)); return ns; }, __webpack_require__.n = function (module) { var getter = module && module.__esModule ? function () { return module['default']; } : function () { return module; }; return __webpack_require__.d(getter, 'a', getter), getter; }, __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); }, __webpack_require__.p = '', __webpack_require__(__webpack_require__.s = 0); })({ "./src/main.ts": /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/ /*! no static exports found */ function (module, exports) {
        'use strict';
        exports.__esModule = !0;
    }, 0: /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/ /*! no static exports found */ function (module, exports, __webpack_require__) { module.exports = __webpack_require__(/*! ./src/main.ts */ './src/main.ts'); } });
//# sourceMappingURL=bundle.js.map
