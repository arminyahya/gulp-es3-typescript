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
    return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var o in e)
        n.d(r, o, function (t) { return e[t]; }.bind(null, o)); return r; }, n.n = function (e) { var t = e && e.__esModule ? function () { return e["default"]; } : function () { return e; }; return n.d(t, "a", t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = "", n(n.s = 0); }([function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(1), o = r.createElement({ tagName: "form", props: { action: "/action_page.php" } }), a = r.createElement({ tagName: "input", props: { id: "111", type: "text", name: "username" } }), u = r.createElement({ tagName: "input", props: { type: "submit", style: { backgroundColor: "black" } } });
        o.appendChild(a), o.appendChild(u), r.renderIntoRoot(o);
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0, t.container = document.getElementById("root"), t.isObjectDomElement = function (e) { return e.scopeName && "HTML" === e.scopeName; }, t.getElementWithStyle = function (e, t) { var n = e.cloneNode(); return t.forEach((function (e) { n.style[e.key] = e.value; })), n; }, t.renderIntoRoot = function (e) { t.container.appendChild(e); }, t.getElementWithClassNames = function (e, t) { var n = e.cloneNode(); return t.forEach((function (e) { n.className += " " + e; })), n; }, t.elementIdGenerator = { id: 0, gererate: function () { return this.id++, this.id.toString(); } }, t.createElement = function (e) { var t = e.tagName, n = e.props, r = document.createElement(t); for (var o in n)
            if ("style" === o)
                for (var a in n[o])
                    r.style[a] = n[o][a];
            else
                r[o] = n[o]; return r; };
    }]);
//# sourceMappingURL=bundle.js.map
