! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self)["@outsystems/pwa-service-worker-js"] = {})
}(this, (function(t) {
    "use strict";

    function e(t, e, r, n) {
        return new(r || (r = Promise))((function(o, i) {
            function s(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((n = n.apply(t, e || [])).next())
        }))
    }

    function r(t, e, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
    }

    function n(t, e, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
    }
    var o, i, s, a, c;
    "function" == typeof SuppressedError && SuppressedError;
    class l {
        constructor({
            workerScope: t,
            console: e = globalThis.console
        }) {
            o.add(this), i.set(this, void 0), s.set(this, void 0), n(this, i, t, "f"), n(this, s, e, "f")
        }
        debug(t) {
            return r(this, o, "m", a).call(this, t, "debug")
        }
        error(t, e) {
            return r(this, o, "m", a).call(this, `${t}: ${e}`, "error")
        }
    }
    i = new WeakMap, s = new WeakMap, o = new WeakSet, a = function(t, n) {
        return e(this, void 0, void 0, (function*() {
            const e = yield r(this, o, "m", c).call(this);
            e ? e.postMessage({
                kind: "log",
                severity: n,
                message: t
            }) : r(this, s, "f")[n](t)
        }))
    }, c = function() {
        return e(this, void 0, void 0, (function*() {
            try {
                const t = (yield r(this, i, "f").clients.matchAll({
                    type: "window"
                })).filter((t => "visible" === t.visibilityState));
                if (1 === t.length) return t[0]
            } catch (t) {
                r(this, s, "f").error(`Error getting client: ${t}`)
            }
        }))
    };
    const u = t => e(void 0, [t], void 0, (function*({
            workerScope: t,
            cacheStorage: e,
            appName: r,
            cacheName: n,
            appUrls: o,
            logger: i = new l({
                workerScope: t
            })
        }) {
            const s = yield e.open(n);
            return i.debug(`[install] ${n}/${r} adding all core components to cache`), yield s.addAll(o), t.skipWaiting()
        })),
        h = t => e(void 0, [t], void 0, (function*({
            request: t,
            cacheStorage: e,
            cacheName: r,
            urlMappings: n,
            uncacheableUrls: o,
            logger: i
        }) {
            const s = yield e.open(r), a = new URL(t.url).pathname, c = a in n ? n[a] : t;
            if (o.includes(a)) return console.debug(`[fetch] Skipping cache behavior for ${a}`), yield fetch(t);
            try {
                const e = yield s.match(c);
                return e ? (null == i || i.debug(`[fetch] Returning from ${r} cache: ${a}`), e) : (null == i || i.debug(`[fetch] Returning from server: ${a}`), yield fetch(t))
            } catch (t) {
                throw null == i || i.error(`[fetch] Error trying to use cache. ${t}`), t
            }
        })),
        p = t => e(void 0, [t], void 0, (function*({
            workerScope: t,
            cacheStorage: e,
            appName: r,
            versionToken: n,
            cacheName: o,
            logger: i = new l({
                workerScope: t
            })
        }) {
            try {
                const s = (yield e.keys()).filter((t => t.startsWith(r) && t !== o)).map((t => (i.debug(`[activate] deleting old cache key: ${t}`), e.delete(t))));
                yield Promise.all(s), i.debug(`[activate] ${r} activated with version token: ${n}`), yield t.clients.claim()
            } catch (t) {
                console.error(`[activate] Error in ${r} activation. ${null==t?void 0:t.toString()}`)
            }
        })),
        f = ["/v1/logs", "/v2/logs"];
    var d, g, y, v, _, m, b, T;
    class w {
        constructor({
            workerScope: t,
            cacheStorage: e,
            appName: r,
            versionToken: o,
            appUrls: i,
            appUrlMappings: s
        }) {
            d.set(this, void 0), g.set(this, void 0), y.set(this, void 0), v.set(this, void 0), _.set(this, void 0), m.set(this, void 0), b.set(this, void 0), T.set(this, void 0), n(this, d, t, "f"), n(this, g, e, "f"), n(this, y, r, "f"), n(this, _, o, "f"), n(this, v, `${r}-${o}`, "f"), n(this, m, i, "f"), n(this, b, s, "f"), n(this, T, new l({
                workerScope: t
            }), "f")
        }
        install(t) {
            return e(this, arguments, void 0, (function*(t, e = u) {
                try {
                    t.waitUntil(e({
                        workerScope: r(this, d, "f"),
                        cacheStorage: r(this, g, "f"),
                        appName: r(this, y, "f"),
                        cacheName: r(this, v, "f"),
                        appUrls: r(this, m, "f"),
                        logger: r(this, T, "f")
                    }))
                } catch (t) {
                    r(this, T, "f").error("Error installing service worker", t)
                }
            }))
        }
        fetch(t) {
            return e(this, arguments, void 0, (function*(t, e = h) {
                try {
                    t.respondWith(e({
                        request: t.request,
                        cacheStorage: r(this, g, "f"),
                        cacheName: r(this, v, "f"),
                        urlMappings: r(this, b, "f"),
                        uncacheableUrls: (n = r(this, y, "f"), f.map((t => `/${n}${t}`))),
                        logger: r(this, T, "f")
                    }))
                } catch (t) {
                    console.error(t)
                }
                var n
            }))
        }
        activate(t) {
            return e(this, arguments, void 0, (function*(t, e = p) {
                try {
                    t.waitUntil(e({
                        workerScope: r(this, d, "f"),
                        cacheStorage: r(this, g, "f"),
                        appName: r(this, y, "f"),
                        versionToken: r(this, _, "f"),
                        cacheName: r(this, v, "f"),
                        logger: r(this, T, "f")
                    }))
                } catch (t) {
                    r(this, T, "f").error("Error activating service worker", t)
                }
            }))
        }
    }
    d = new WeakMap, g = new WeakMap, y = new WeakMap, v = new WeakMap, _ = new WeakMap, m = new WeakMap, b = new WeakMap, T = new WeakMap;
    var E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function S(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var O = {
        exports: {}
    };
    ! function(t, e) {
        ! function(t) {
            function e(t, e, r, n) {
                function o(t) {
                    return t instanceof r ? t : new r((function(e) {
                        e(t)
                    }))
                }
                return new(r || (r = Promise))((function(r, i) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? r(t.value) : o(t.value).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            }

            function r(t, e, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
            }

            function n(t, e, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
            }
            "function" == typeof SuppressedError && SuppressedError;
            class o extends Error {
                constructor(t, e, r, n, o) {
                    super(t), this.errorCode = e, this.status = r ? `${r}` : "", this.response = n, this.category = o
                }
            }
            var i;
            t.ErrorCodes = void 0, (i = t.ErrorCodes || (t.ErrorCodes = {})).Communication_Default = "OS-CLRT-60900", i.Communication_Bad_Request = "OS-CLRT-60901", i.Communication_Unauthorized = "OS-CLRT-60902", i.Communication_Forbidden = "OS-CLRT-60903", i.Communication_Not_Found = "OS-CLRT-60904", i.Communication_Timeout = "OS-CLRT-60905", i.Communication_Internal_Server_Error = "OS-CLRT-60906", i.Communication_Unavailable = "OS-CLRT-60907";
            const s = {
                    400: t.ErrorCodes.Communication_Bad_Request,
                    401: t.ErrorCodes.Communication_Unauthorized,
                    403: t.ErrorCodes.Communication_Forbidden,
                    404: t.ErrorCodes.Communication_Not_Found,
                    408: t.ErrorCodes.Communication_Timeout,
                    500: t.ErrorCodes.Communication_Internal_Server_Error,
                    503: t.ErrorCodes.Communication_Unavailable
                },
                a = e => {
                    var r;
                    return null !== (r = s[`${e}`]) && void 0 !== r ? r : t.ErrorCodes.Communication_Default
                },
                c = "traceparent",
                l = "tracestate",
                u = "baggage",
                h = 512,
                p = ["code.function", "outsystems.function.key", "outsystems.function.type", "outsystems.runtime.screen", "outsystems.otel.access.visibility"];

            function f() {
                return e(this, arguments, void 0, (function*(t = {}, e) {
                    if (!e) return t;
                    const r = yield e();
                    return r ? d(r, t) : t
                }))
            }

            function d(t, e) {
                const r = Object.assign(Object.assign({}, e), {
                    [c]: g(t)
                });
                if (t.attributes) {
                    const e = y(t.attributes);
                    r[e.length > h ? u : l] = e
                }
                return r
            }

            function g(t) {
                return `00-${t.traceId}-${t.spanId}-${t.sampled?"01":"00"}`
            }

            function y(t) {
                return p.map((e => t[e] ? `${e}=${t[e]}` : void 0)).filter((t => void 0 !== t)).join(",")
            }
            var v;
            ! function(t) {
                t.FormUrlEncoded = "application/x-www-form-urlencoded", t.Json = "application/json"
            }(v || (v = {}));
            var _, m = v;
            ! function(t) {
                t[t.Unknown = 0] = "Unknown", t[t.Timeout = 1] = "Timeout", t[t.Unauthorized = 2] = "Unauthorized"
            }(_ || (_ = {}));
            var b = _,
                T = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== E ? E : "undefined" != typeof self ? self : {};

            function w(t) {
                return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
            }

            function O(t) {
                if (t.__esModule) return t;
                var e = t.default;
                if ("function" == typeof e) {
                    var r = function t() {
                        return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
                    };
                    r.prototype = e.prototype
                } else r = {};
                return Object.defineProperty(r, "__esModule", {
                    value: !0
                }), Object.keys(t).forEach((function(e) {
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    Object.defineProperty(r, e, n.get ? n : {
                        enumerable: !0,
                        get: function() {
                            return t[e]
                        }
                    })
                })), r
            }
            var k, C = Error,
                A = EvalError,
                I = RangeError,
                P = ReferenceError,
                L = SyntaxError,
                R = TypeError,
                j = URIError,
                x = function() {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var t = {},
                        e = Symbol("test"),
                        r = Object(e);
                    if ("string" == typeof e) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                    var n = 42;
                    for (e in t[e] = n, t) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                    var o = Object.getOwnPropertySymbols(t);
                    if (1 !== o.length || o[0] !== e) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var i = Object.getOwnPropertyDescriptor(t, e);
                        if (i.value !== n || !0 !== i.enumerable) return !1
                    }
                    return !0
                },
                N = "undefined" != typeof Symbol && Symbol,
                M = x,
                D = function() {
                    return "function" == typeof N && "function" == typeof Symbol && "symbol" == typeof N("foo") && "symbol" == typeof Symbol("bar") && M()
                },
                U = {
                    foo: {}
                },
                W = Object,
                B = function() {
                    return {
                        __proto__: U
                    }.foo === U.foo && !({
                            __proto__: null
                        }
                        instanceof W)
                },
                $ = "Function.prototype.bind called on incompatible ",
                F = Object.prototype.toString,
                H = Math.max,
                z = "[object Function]",
                V = function(t, e) {
                    for (var r = [], n = 0; n < t.length; n += 1) r[n] = t[n];
                    for (var o = 0; o < e.length; o += 1) r[o + t.length] = e[o];
                    return r
                },
                q = function(t, e) {
                    for (var r = [], n = e || 0, o = 0; n < t.length; n += 1, o += 1) r[o] = t[n];
                    return r
                },
                Z = function(t, e) {
                    for (var r = "", n = 0; n < t.length; n += 1) r += t[n], n + 1 < t.length && (r += e);
                    return r
                },
                G = function(t) {
                    var e = this;
                    if ("function" != typeof e || F.apply(e) !== z) throw new TypeError($ + e);
                    for (var r, n = q(arguments, 1), o = function() {
                            if (this instanceof r) {
                                var o = e.apply(this, V(n, arguments));
                                return Object(o) === o ? o : this
                            }
                            return e.apply(t, V(n, arguments))
                        }, i = H(0, e.length - n.length), s = [], a = 0; a < i; a++) s[a] = "$" + a;
                    if (r = Function("binder", "return function (" + Z(s, ",") + "){ return binder.apply(this,arguments); }")(o), e.prototype) {
                        var c = function() {};
                        c.prototype = e.prototype, r.prototype = new c, c.prototype = null
                    }
                    return r
                },
                X = G,
                K = Function.prototype.bind || X,
                Q = Function.prototype.call,
                J = Object.prototype.hasOwnProperty,
                Y = K.call(Q, J),
                tt = C,
                et = A,
                rt = I,
                nt = P,
                ot = L,
                it = R,
                st = j,
                at = Function,
                ct = function(t) {
                    try {
                        return at('"use strict"; return (' + t + ").constructor;")()
                    } catch (t) {}
                },
                lt = Object.getOwnPropertyDescriptor;
            if (lt) try {
                lt({}, "")
            } catch (t) {
                lt = null
            }
            var ut = function() {
                    throw new it
                },
                ht = lt ? function() {
                    try {
                        return ut
                    } catch (t) {
                        try {
                            return lt(arguments, "callee").get
                        } catch (t) {
                            return ut
                        }
                    }
                }() : ut,
                pt = D(),
                ft = B(),
                dt = Object.getPrototypeOf || (ft ? function(t) {
                    return t.__proto__
                } : null),
                gt = {},
                yt = "undefined" != typeof Uint8Array && dt ? dt(Uint8Array) : k,
                vt = {
                    __proto__: null,
                    "%AggregateError%": "undefined" == typeof AggregateError ? k : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? k : ArrayBuffer,
                    "%ArrayIteratorPrototype%": pt && dt ? dt([][Symbol.iterator]()) : k,
                    "%AsyncFromSyncIteratorPrototype%": k,
                    "%AsyncFunction%": gt,
                    "%AsyncGenerator%": gt,
                    "%AsyncGeneratorFunction%": gt,
                    "%AsyncIteratorPrototype%": gt,
                    "%Atomics%": "undefined" == typeof Atomics ? k : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? k : BigInt,
                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? k : BigInt64Array,
                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? k : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" == typeof DataView ? k : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": tt,
                    "%eval%": eval,
                    "%EvalError%": et,
                    "%Float32Array%": "undefined" == typeof Float32Array ? k : Float32Array,
                    "%Float64Array%": "undefined" == typeof Float64Array ? k : Float64Array,
                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? k : FinalizationRegistry,
                    "%Function%": at,
                    "%GeneratorFunction%": gt,
                    "%Int8Array%": "undefined" == typeof Int8Array ? k : Int8Array,
                    "%Int16Array%": "undefined" == typeof Int16Array ? k : Int16Array,
                    "%Int32Array%": "undefined" == typeof Int32Array ? k : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": pt && dt ? dt(dt([][Symbol.iterator]())) : k,
                    "%JSON%": "object" == typeof JSON ? JSON : k,
                    "%Map%": "undefined" == typeof Map ? k : Map,
                    "%MapIteratorPrototype%": "undefined" != typeof Map && pt && dt ? dt((new Map)[Symbol.iterator]()) : k,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" == typeof Promise ? k : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? k : Proxy,
                    "%RangeError%": rt,
                    "%ReferenceError%": nt,
                    "%Reflect%": "undefined" == typeof Reflect ? k : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? k : Set,
                    "%SetIteratorPrototype%": "undefined" != typeof Set && pt && dt ? dt((new Set)[Symbol.iterator]()) : k,
                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? k : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": pt && dt ? dt("" [Symbol.iterator]()) : k,
                    "%Symbol%": pt ? Symbol : k,
                    "%SyntaxError%": ot,
                    "%ThrowTypeError%": ht,
                    "%TypedArray%": yt,
                    "%TypeError%": it,
                    "%Uint8Array%": "undefined" == typeof Uint8Array ? k : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? k : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" == typeof Uint16Array ? k : Uint16Array,
                    "%Uint32Array%": "undefined" == typeof Uint32Array ? k : Uint32Array,
                    "%URIError%": st,
                    "%WeakMap%": "undefined" == typeof WeakMap ? k : WeakMap,
                    "%WeakRef%": "undefined" == typeof WeakRef ? k : WeakRef,
                    "%WeakSet%": "undefined" == typeof WeakSet ? k : WeakSet
                };
            if (dt) try {
                null.error
            } catch (t) {
                var _t = dt(dt(t));
                vt["%Error.prototype%"] = _t
            }
            var mt, bt, Tt = function t(e) {
                    var r;
                    if ("%AsyncFunction%" === e) r = ct("async function () {}");
                    else if ("%GeneratorFunction%" === e) r = ct("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === e) r = ct("async function* () {}");
                    else if ("%AsyncGenerator%" === e) {
                        var n = t("%AsyncGeneratorFunction%");
                        n && (r = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === e) {
                        var o = t("%AsyncGenerator%");
                        o && dt && (r = dt(o.prototype))
                    }
                    return vt[e] = r, r
                },
                wt = {
                    __proto__: null,
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                Et = K,
                St = Y,
                Ot = Et.call(Function.call, Array.prototype.concat),
                kt = Et.call(Function.apply, Array.prototype.splice),
                Ct = Et.call(Function.call, String.prototype.replace),
                At = Et.call(Function.call, String.prototype.slice),
                It = Et.call(Function.call, RegExp.prototype.exec),
                Pt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                Lt = /\\(\\)?/g,
                Rt = function(t) {
                    var e = At(t, 0, 1),
                        r = At(t, -1);
                    if ("%" === e && "%" !== r) throw new ot("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== e) throw new ot("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return Ct(t, Pt, (function(t, e, r, o) {
                        n[n.length] = r ? Ct(o, Lt, "$1") : e || t
                    })), n
                },
                jt = function(t, e) {
                    var r, n = t;
                    if (St(wt, n) && (n = "%" + (r = wt[n])[0] + "%"), St(vt, n)) {
                        var o = vt[n];
                        if (o === gt && (o = Tt(n)), void 0 === o && !e) throw new it("intrinsic " + t + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: n,
                            value: o
                        }
                    }
                    throw new ot("intrinsic " + t + " does not exist!")
                },
                xt = function(t, e) {
                    if ("string" != typeof t || 0 === t.length) throw new it("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" != typeof e) throw new it('"allowMissing" argument must be a boolean');
                    if (null === It(/^%?[^%]*%?$/, t)) throw new ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                    var r = Rt(t),
                        n = r.length > 0 ? r[0] : "",
                        o = jt("%" + n + "%", e),
                        i = o.name,
                        s = o.value,
                        a = !1,
                        c = o.alias;
                    c && (n = c[0], kt(r, Ot([0, 1], c)));
                    for (var l = 1, u = !0; l < r.length; l += 1) {
                        var h = r[l],
                            p = At(h, 0, 1),
                            f = At(h, -1);
                        if (('"' === p || "'" === p || "`" === p || '"' === f || "'" === f || "`" === f) && p !== f) throw new ot("property names with quotes must have matching quotes");
                        if ("constructor" !== h && u || (a = !0), St(vt, i = "%" + (n += "." + h) + "%")) s = vt[i];
                        else if (null != s) {
                            if (!(h in s)) {
                                if (!e) throw new it("base intrinsic for " + t + " exists, but the property is not available.");
                                return
                            }
                            if (lt && l + 1 >= r.length) {
                                var d = lt(s, h);
                                s = (u = !!d) && "get" in d && !("originalValue" in d.get) ? d.get : s[h]
                            } else u = St(s, h), s = s[h];
                            u && !a && (vt[i] = s)
                        }
                    }
                    return s
                },
                Nt = {
                    exports: {}
                };

            function Mt() {
                if (bt) return mt;
                bt = 1;
                var t = xt("%Object.defineProperty%", !0) || !1;
                if (t) try {
                    t({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    t = !1
                }
                return mt = t
            }
            var Dt = xt("%Object.getOwnPropertyDescriptor%", !0);
            if (Dt) try {
                Dt([], "length")
            } catch (t) {
                Dt = null
            }
            var Ut = Dt,
                Wt = Mt(),
                Bt = L,
                $t = R,
                Ft = Ut,
                Ht = function(t, e, r) {
                    if (!t || "object" != typeof t && "function" != typeof t) throw new $t("`obj` must be an object or a function`");
                    if ("string" != typeof e && "symbol" != typeof e) throw new $t("`property` must be a string or a symbol`");
                    if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new $t("`nonEnumerable`, if provided, must be a boolean or null");
                    if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new $t("`nonWritable`, if provided, must be a boolean or null");
                    if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new $t("`nonConfigurable`, if provided, must be a boolean or null");
                    if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new $t("`loose`, if provided, must be a boolean");
                    var n = arguments.length > 3 ? arguments[3] : null,
                        o = arguments.length > 4 ? arguments[4] : null,
                        i = arguments.length > 5 ? arguments[5] : null,
                        s = arguments.length > 6 && arguments[6],
                        a = !!Ft && Ft(t, e);
                    if (Wt) Wt(t, e, {
                        configurable: null === i && a ? a.configurable : !i,
                        enumerable: null === n && a ? a.enumerable : !n,
                        value: r,
                        writable: null === o && a ? a.writable : !o
                    });
                    else {
                        if (!s && (n || o || i)) throw new Bt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                        t[e] = r
                    }
                },
                zt = Mt(),
                Vt = function() {
                    return !!zt
                };
            Vt.hasArrayLengthDefineBug = function() {
                if (!zt) return null;
                try {
                    return 1 !== zt([], "length", {
                        value: 1
                    }).length
                } catch (t) {
                    return !0
                }
            };
            var qt = xt,
                Zt = Ht,
                Gt = Vt(),
                Xt = Ut,
                Kt = R,
                Qt = qt("%Math.floor%"),
                Jt = function(t, e) {
                    if ("function" != typeof t) throw new Kt("`fn` is not a function");
                    if ("number" != typeof e || e < 0 || e > 4294967295 || Qt(e) !== e) throw new Kt("`length` must be a positive 32-bit integer");
                    var r = arguments.length > 2 && !!arguments[2],
                        n = !0,
                        o = !0;
                    if ("length" in t && Xt) {
                        var i = Xt(t, "length");
                        i && !i.configurable && (n = !1), i && !i.writable && (o = !1)
                    }
                    return (n || o || !r) && (Gt ? Zt(t, "length", e, !0, !0) : Zt(t, "length", e)), t
                };
            Nt.exports,
                function(t) {
                    var e = K,
                        r = xt,
                        n = Jt,
                        o = R,
                        i = r("%Function.prototype.apply%"),
                        s = r("%Function.prototype.call%"),
                        a = r("%Reflect.apply%", !0) || e.call(s, i),
                        c = Mt(),
                        l = r("%Math.max%");
                    t.exports = function(t) {
                        if ("function" != typeof t) throw new o("a function is required");
                        var r = a(e, s, arguments);
                        return n(r, 1 + l(0, t.length - (arguments.length - 1)), !0)
                    };
                    var u = function() {
                        return a(e, i, arguments)
                    };
                    c ? c(t.exports, "apply", {
                        value: u
                    }) : t.exports.apply = u
                }(Nt);
            var Yt = Nt.exports,
                te = xt,
                ee = Yt,
                re = ee(te("String.prototype.indexOf")),
                ne = function(t, e) {
                    var r = te(t, !!e);
                    return "function" == typeof r && re(t, ".prototype.") > -1 ? ee(r) : r
                },
                oe = {},
                ie = O(Object.freeze({
                    __proto__: null,
                    default: oe
                })),
                se = "function" == typeof Map && Map.prototype,
                ae = Object.getOwnPropertyDescriptor && se ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                ce = se && ae && "function" == typeof ae.get ? ae.get : null,
                le = se && Map.prototype.forEach,
                ue = "function" == typeof Set && Set.prototype,
                he = Object.getOwnPropertyDescriptor && ue ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                pe = ue && he && "function" == typeof he.get ? he.get : null,
                fe = ue && Set.prototype.forEach,
                de = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                ge = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                ye = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                ve = Boolean.prototype.valueOf,
                _e = Object.prototype.toString,
                me = Function.prototype.toString,
                be = String.prototype.match,
                Te = String.prototype.slice,
                we = String.prototype.replace,
                Ee = String.prototype.toUpperCase,
                Se = String.prototype.toLowerCase,
                Oe = RegExp.prototype.test,
                ke = Array.prototype.concat,
                Ce = Array.prototype.join,
                Ae = Array.prototype.slice,
                Ie = Math.floor,
                Pe = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                Le = Object.getOwnPropertySymbols,
                Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                je = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                xe = "function" == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null,
                Ne = Object.prototype.propertyIsEnumerable,
                Me = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                    return t.__proto__
                } : null);

            function De(t, e) {
                if (t === 1 / 0 || t === -1 / 0 || t != t || t && t > -1e3 && t < 1e3 || Oe.call(/e/, e)) return e;
                var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof t) {
                    var n = t < 0 ? -Ie(-t) : Ie(t);
                    if (n !== t) {
                        var o = String(n),
                            i = Te.call(e, o.length + 1);
                        return we.call(o, r, "$&_") + "." + we.call(we.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return we.call(e, r, "$&_")
            }
            var Ue = ie,
                We = Ue.custom,
                Be = Qe(We) ? We : null,
                $e = function t(e, r, n, o) {
                    var i = r || {};
                    if (tr(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                    if (tr(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                    var s = !tr(i, "customInspect") || i.customInspect;
                    if ("boolean" != typeof s && "symbol" !== s) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                    if (tr(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                    if (tr(i, "numericSeparator") && "boolean" != typeof i.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                    var a = i.numericSeparator;
                    if (void 0 === e) return "undefined";
                    if (null === e) return "null";
                    if ("boolean" == typeof e) return e ? "true" : "false";
                    if ("string" == typeof e) return ur(e, i);
                    if ("number" == typeof e) {
                        if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
                        var c = String(e);
                        return a ? De(e, c) : c
                    }
                    if ("bigint" == typeof e) {
                        var l = String(e) + "n";
                        return a ? De(e, l) : l
                    }
                    var u = void 0 === i.depth ? 5 : i.depth;
                    if (void 0 === n && (n = 0), n >= u && u > 0 && "object" == typeof e) return ze(e) ? "[Array]" : "[Object]";
                    var h = yr(i, n);
                    if (void 0 === o) o = [];
                    else if (nr(o, e) >= 0) return "[Circular]";

                    function p(e, r, s) {
                        if (r && (o = Ae.call(o)).push(r), s) {
                            var a = {
                                depth: i.depth
                            };
                            return tr(i, "quoteStyle") && (a.quoteStyle = i.quoteStyle), t(e, a, n + 1, o)
                        }
                        return t(e, i, n + 1, o)
                    }
                    if ("function" == typeof e && !qe(e)) {
                        var f = rr(e),
                            d = _r(e, p);
                        return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (d.length > 0 ? " { " + Ce.call(d, ", ") + " }" : "")
                    }
                    if (Qe(e)) {
                        var g = je ? we.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Re.call(e);
                        return "object" != typeof e || je ? g : pr(g)
                    }
                    if (lr(e)) {
                        for (var y = "<" + Se.call(String(e.nodeName)), v = e.attributes || [], _ = 0; _ < v.length; _++) y += " " + v[_].name + "=" + Fe(He(v[_].value), "double", i);
                        return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + Se.call(String(e.nodeName)) + ">"
                    }
                    if (ze(e)) {
                        if (0 === e.length) return "[]";
                        var m = _r(e, p);
                        return h && !gr(m) ? "[" + vr(m, h) + "]" : "[ " + Ce.call(m, ", ") + " ]"
                    }
                    if (Ze(e)) {
                        var b = _r(e, p);
                        return "cause" in Error.prototype || !("cause" in e) || Ne.call(e, "cause") ? 0 === b.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ce.call(b, ", ") + " }" : "{ [" + String(e) + "] " + Ce.call(ke.call("[cause]: " + p(e.cause), b), ", ") + " }"
                    }
                    if ("object" == typeof e && s) {
                        if (Be && "function" == typeof e[Be] && Ue) return Ue(e, {
                            depth: u - n
                        });
                        if ("symbol" !== s && "function" == typeof e.inspect) return e.inspect()
                    }
                    if (or(e)) {
                        var w = [];
                        return le && le.call(e, (function(t, r) {
                            w.push(p(r, e, !0) + " => " + p(t, e))
                        })), dr("Map", ce.call(e), w, h)
                    }
                    if (ar(e)) {
                        var E = [];
                        return fe && fe.call(e, (function(t) {
                            E.push(p(t, e))
                        })), dr("Set", pe.call(e), E, h)
                    }
                    if (ir(e)) return fr("WeakMap");
                    if (cr(e)) return fr("WeakSet");
                    if (sr(e)) return fr("WeakRef");
                    if (Xe(e)) return pr(p(Number(e)));
                    if (Je(e)) return pr(p(Pe.call(e)));
                    if (Ke(e)) return pr(ve.call(e));
                    if (Ge(e)) return pr(p(String(e)));
                    if ("undefined" != typeof window && e === window) return "{ [object Window] }";
                    if (e === T) return "{ [object globalThis] }";
                    if (!Ve(e) && !qe(e)) {
                        var S = _r(e, p),
                            O = Me ? Me(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                            k = e instanceof Object ? "" : "null prototype",
                            C = !O && xe && Object(e) === e && xe in e ? Te.call(er(e), 8, -1) : k ? "Object" : "",
                            A = (O || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (C || k ? "[" + Ce.call(ke.call([], C || [], k || []), ": ") + "] " : "");
                        return 0 === S.length ? A + "{}" : h ? A + "{" + vr(S, h) + "}" : A + "{ " + Ce.call(S, ", ") + " }"
                    }
                    return String(e)
                };

            function Fe(t, e, r) {
                var n = "double" === (r.quoteStyle || e) ? '"' : "'";
                return n + t + n
            }

            function He(t) {
                return we.call(String(t), /"/g, "&quot;")
            }

            function ze(t) {
                return !("[object Array]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Ve(t) {
                return !("[object Date]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function qe(t) {
                return !("[object RegExp]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Ze(t) {
                return !("[object Error]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Ge(t) {
                return !("[object String]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Xe(t) {
                return !("[object Number]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Ke(t) {
                return !("[object Boolean]" !== er(t) || xe && "object" == typeof t && xe in t)
            }

            function Qe(t) {
                if (je) return t && "object" == typeof t && t instanceof Symbol;
                if ("symbol" == typeof t) return !0;
                if (!t || "object" != typeof t || !Re) return !1;
                try {
                    return Re.call(t), !0
                } catch (t) {}
                return !1
            }

            function Je(t) {
                if (!t || "object" != typeof t || !Pe) return !1;
                try {
                    return Pe.call(t), !0
                } catch (t) {}
                return !1
            }
            var Ye = Object.prototype.hasOwnProperty || function(t) {
                return t in this
            };

            function tr(t, e) {
                return Ye.call(t, e)
            }

            function er(t) {
                return _e.call(t)
            }

            function rr(t) {
                if (t.name) return t.name;
                var e = be.call(me.call(t), /^function\s*([\w$]+)/);
                return e ? e[1] : null
            }

            function nr(t, e) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] === e) return r;
                return -1
            }

            function or(t) {
                if (!ce || !t || "object" != typeof t) return !1;
                try {
                    ce.call(t);
                    try {
                        pe.call(t)
                    } catch (t) {
                        return !0
                    }
                    return t instanceof Map
                } catch (t) {}
                return !1
            }

            function ir(t) {
                if (!de || !t || "object" != typeof t) return !1;
                try {
                    de.call(t, de);
                    try {
                        ge.call(t, ge)
                    } catch (t) {
                        return !0
                    }
                    return t instanceof WeakMap
                } catch (t) {}
                return !1
            }

            function sr(t) {
                if (!ye || !t || "object" != typeof t) return !1;
                try {
                    return ye.call(t), !0
                } catch (t) {}
                return !1
            }

            function ar(t) {
                if (!pe || !t || "object" != typeof t) return !1;
                try {
                    pe.call(t);
                    try {
                        ce.call(t)
                    } catch (t) {
                        return !0
                    }
                    return t instanceof Set
                } catch (t) {}
                return !1
            }

            function cr(t) {
                if (!ge || !t || "object" != typeof t) return !1;
                try {
                    ge.call(t, ge);
                    try {
                        de.call(t, de)
                    } catch (t) {
                        return !0
                    }
                    return t instanceof WeakSet
                } catch (t) {}
                return !1
            }

            function lr(t) {
                return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
            }

            function ur(t, e) {
                if (t.length > e.maxStringLength) {
                    var r = t.length - e.maxStringLength,
                        n = "... " + r + " more character" + (r > 1 ? "s" : "");
                    return ur(Te.call(t, 0, e.maxStringLength), e) + n
                }
                return Fe(we.call(we.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, hr), "single", e)
            }

            function hr(t) {
                var e = t.charCodeAt(0),
                    r = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    } [e];
                return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Ee.call(e.toString(16))
            }

            function pr(t) {
                return "Object(" + t + ")"
            }

            function fr(t) {
                return t + " { ? }"
            }

            function dr(t, e, r, n) {
                return t + " (" + e + ") {" + (n ? vr(r, n) : Ce.call(r, ", ")) + "}"
            }

            function gr(t) {
                for (var e = 0; e < t.length; e++)
                    if (nr(t[e], "\n") >= 0) return !1;
                return !0
            }

            function yr(t, e) {
                var r;
                if ("\t" === t.indent) r = "\t";
                else {
                    if (!("number" == typeof t.indent && t.indent > 0)) return null;
                    r = Ce.call(Array(t.indent + 1), " ")
                }
                return {
                    base: r,
                    prev: Ce.call(Array(e + 1), r)
                }
            }

            function vr(t, e) {
                if (0 === t.length) return "";
                var r = "\n" + e.prev + e.base;
                return r + Ce.call(t, "," + r) + "\n" + e.prev
            }

            function _r(t, e) {
                var r = ze(t),
                    n = [];
                if (r) {
                    n.length = t.length;
                    for (var o = 0; o < t.length; o++) n[o] = tr(t, o) ? e(t[o], t) : ""
                }
                var i, s = "function" == typeof Le ? Le(t) : [];
                if (je) {
                    i = {};
                    for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a]
                }
                for (var c in t) tr(t, c) && (r && String(Number(c)) === c && c < t.length || je && i["$" + c] instanceof Symbol || (Oe.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
                if ("function" == typeof Le)
                    for (var l = 0; l < s.length; l++) Ne.call(t, s[l]) && n.push("[" + e(s[l]) + "]: " + e(t[s[l]], t));
                return n
            }
            var mr = xt,
                br = ne,
                Tr = $e,
                wr = R,
                Er = mr("%WeakMap%", !0),
                Sr = mr("%Map%", !0),
                Or = br("WeakMap.prototype.get", !0),
                kr = br("WeakMap.prototype.set", !0),
                Cr = br("WeakMap.prototype.has", !0),
                Ar = br("Map.prototype.get", !0),
                Ir = br("Map.prototype.set", !0),
                Pr = br("Map.prototype.has", !0),
                Lr = function(t, e) {
                    for (var r, n = t; null !== (r = n.next); n = r)
                        if (r.key === e) return n.next = r.next, r.next = t.next, t.next = r, r
                },
                Rr = function(t, e) {
                    var r = Lr(t, e);
                    return r && r.value
                },
                jr = function(t, e, r) {
                    var n = Lr(t, e);
                    n ? n.value = r : t.next = {
                        key: e,
                        next: t.next,
                        value: r
                    }
                },
                xr = function(t, e) {
                    return !!Lr(t, e)
                },
                Nr = function() {
                    var t, e, r, n = {
                        assert: function(t) {
                            if (!n.has(t)) throw new wr("Side channel does not contain " + Tr(t))
                        },
                        get: function(n) {
                            if (Er && n && ("object" == typeof n || "function" == typeof n)) {
                                if (t) return Or(t, n)
                            } else if (Sr) {
                                if (e) return Ar(e, n)
                            } else if (r) return Rr(r, n)
                        },
                        has: function(n) {
                            if (Er && n && ("object" == typeof n || "function" == typeof n)) {
                                if (t) return Cr(t, n)
                            } else if (Sr) {
                                if (e) return Pr(e, n)
                            } else if (r) return xr(r, n);
                            return !1
                        },
                        set: function(n, o) {
                            Er && n && ("object" == typeof n || "function" == typeof n) ? (t || (t = new Er), kr(t, n, o)) : Sr ? (e || (e = new Sr), Ir(e, n, o)) : (r || (r = {
                                key: {},
                                next: null
                            }), jr(r, n, o))
                        }
                    };
                    return n
                },
                Mr = String.prototype.replace,
                Dr = /%20/g,
                Ur = {
                    RFC1738: "RFC1738",
                    RFC3986: "RFC3986"
                },
                Wr = {
                    default: Ur.RFC3986,
                    formatters: {
                        RFC1738: function(t) {
                            return Mr.call(t, Dr, "+")
                        },
                        RFC3986: function(t) {
                            return String(t)
                        }
                    },
                    RFC1738: Ur.RFC1738,
                    RFC3986: Ur.RFC3986
                },
                Br = Wr,
                $r = Object.prototype.hasOwnProperty,
                Fr = Array.isArray,
                Hr = function() {
                    for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                    return t
                }(),
                zr = function(t) {
                    for (; t.length > 1;) {
                        var e = t.pop(),
                            r = e.obj[e.prop];
                        if (Fr(r)) {
                            for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                            e.obj[e.prop] = n
                        }
                    }
                },
                Vr = function(t, e) {
                    for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (r[n] = t[n]);
                    return r
                },
                qr = function t(e, r, n) {
                    if (!r) return e;
                    if ("object" != typeof r) {
                        if (Fr(e)) e.push(r);
                        else {
                            if (!e || "object" != typeof e) return [e, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !$r.call(Object.prototype, r)) && (e[r] = !0)
                        }
                        return e
                    }
                    if (!e || "object" != typeof e) return [e].concat(r);
                    var o = e;
                    return Fr(e) && !Fr(r) && (o = Vr(e, n)), Fr(e) && Fr(r) ? (r.forEach((function(r, o) {
                        if ($r.call(e, o)) {
                            var i = e[o];
                            i && "object" == typeof i && r && "object" == typeof r ? e[o] = t(i, r, n) : e.push(r)
                        } else e[o] = r
                    })), e) : Object.keys(r).reduce((function(e, o) {
                        var i = r[o];
                        return $r.call(e, o) ? e[o] = t(e[o], i, n) : e[o] = i, e
                    }), o)
                },
                Zr = 1024,
                Gr = {
                    arrayToObject: Vr,
                    assign: function(t, e) {
                        return Object.keys(e).reduce((function(t, r) {
                            return t[r] = e[r], t
                        }), t)
                    },
                    combine: function(t, e) {
                        return [].concat(t, e)
                    },
                    compact: function(t) {
                        for (var e = [{
                                obj: {
                                    o: t
                                },
                                prop: "o"
                            }], r = [], n = 0; n < e.length; ++n)
                            for (var o = e[n], i = o.obj[o.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                                var c = s[a],
                                    l = i[c];
                                "object" == typeof l && null !== l && -1 === r.indexOf(l) && (e.push({
                                    obj: i,
                                    prop: c
                                }), r.push(l))
                            }
                        return zr(e), t
                    },
                    decode: function(t, e, r) {
                        var n = t.replace(/\+/g, " ");
                        if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                        try {
                            return decodeURIComponent(n)
                        } catch (t) {
                            return n
                        }
                    },
                    encode: function(t, e, r, n, o) {
                        if (0 === t.length) return t;
                        var i = t;
                        if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === r) return escape(i).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                            return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                        }));
                        for (var s = "", a = 0; a < i.length; a += Zr) {
                            for (var c = i.length >= Zr ? i.slice(a, a + Zr) : i, l = [], u = 0; u < c.length; ++u) {
                                var h = c.charCodeAt(u);
                                45 === h || 46 === h || 95 === h || 126 === h || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === Br.RFC1738 && (40 === h || 41 === h) ? l[l.length] = c.charAt(u) : h < 128 ? l[l.length] = Hr[h] : h < 2048 ? l[l.length] = Hr[192 | h >> 6] + Hr[128 | 63 & h] : h < 55296 || h >= 57344 ? l[l.length] = Hr[224 | h >> 12] + Hr[128 | h >> 6 & 63] + Hr[128 | 63 & h] : (u += 1, h = 65536 + ((1023 & h) << 10 | 1023 & c.charCodeAt(u)), l[l.length] = Hr[240 | h >> 18] + Hr[128 | h >> 12 & 63] + Hr[128 | h >> 6 & 63] + Hr[128 | 63 & h])
                            }
                            s += l.join("")
                        }
                        return s
                    },
                    isBuffer: function(t) {
                        return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
                    },
                    isRegExp: function(t) {
                        return "[object RegExp]" === Object.prototype.toString.call(t)
                    },
                    maybeMap: function(t, e) {
                        if (Fr(t)) {
                            for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
                            return r
                        }
                        return e(t)
                    },
                    merge: qr
                },
                Xr = Nr,
                Kr = Gr,
                Qr = Wr,
                Jr = Object.prototype.hasOwnProperty,
                Yr = {
                    brackets: function(t) {
                        return t + "[]"
                    },
                    comma: "comma",
                    indices: function(t, e) {
                        return t + "[" + e + "]"
                    },
                    repeat: function(t) {
                        return t
                    }
                },
                tn = Array.isArray,
                en = Array.prototype.push,
                rn = function(t, e) {
                    en.apply(t, tn(e) ? e : [e])
                },
                nn = Date.prototype.toISOString,
                on = Qr.default,
                sn = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    arrayFormat: "indices",
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encodeDotInKeys: !1,
                    encoder: Kr.encode,
                    encodeValuesOnly: !1,
                    format: on,
                    formatter: Qr.formatters[on],
                    indices: !1,
                    serializeDate: function(t) {
                        return nn.call(t)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                an = function(t) {
                    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "symbol" == typeof t || "bigint" == typeof t
                },
                cn = {},
                ln = function t(e, r, n, o, i, s, a, c, l, u, h, p, f, d, g, y, v, _) {
                    for (var m = e, b = _, T = 0, w = !1; void 0 !== (b = b.get(cn)) && !w;) {
                        var E = b.get(e);
                        if (T += 1, void 0 !== E) {
                            if (E === T) throw new RangeError("Cyclic object value");
                            w = !0
                        }
                        void 0 === b.get(cn) && (T = 0)
                    }
                    if ("function" == typeof u ? m = u(r, m) : m instanceof Date ? m = f(m) : "comma" === n && tn(m) && (m = Kr.maybeMap(m, (function(t) {
                            return t instanceof Date ? f(t) : t
                        }))), null === m) {
                        if (s) return l && !y ? l(r, sn.encoder, v, "key", d) : r;
                        m = ""
                    }
                    if (an(m) || Kr.isBuffer(m)) return l ? [g(y ? r : l(r, sn.encoder, v, "key", d)) + "=" + g(l(m, sn.encoder, v, "value", d))] : [g(r) + "=" + g(String(m))];
                    var S, O = [];
                    if (void 0 === m) return O;
                    if ("comma" === n && tn(m)) y && l && (m = Kr.maybeMap(m, l)), S = [{
                        value: m.length > 0 ? m.join(",") || null : void 0
                    }];
                    else if (tn(u)) S = u;
                    else {
                        var k = Object.keys(m);
                        S = h ? k.sort(h) : k
                    }
                    var C = c ? r.replace(/\./g, "%2E") : r,
                        A = o && tn(m) && 1 === m.length ? C + "[]" : C;
                    if (i && tn(m) && 0 === m.length) return A + "[]";
                    for (var I = 0; I < S.length; ++I) {
                        var P = S[I],
                            L = "object" == typeof P && void 0 !== P.value ? P.value : m[P];
                        if (!a || null !== L) {
                            var R = p && c ? P.replace(/\./g, "%2E") : P,
                                j = tn(m) ? "function" == typeof n ? n(A, R) : A : A + (p ? "." + R : "[" + R + "]");
                            _.set(e, T);
                            var x = Xr();
                            x.set(cn, _), rn(O, t(L, j, n, o, i, s, a, c, "comma" === n && y && tn(m) ? null : l, u, h, p, f, d, g, y, v, x))
                        }
                    }
                    return O
                },
                un = function(t) {
                    if (!t) return sn;
                    if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== t.encodeDotInKeys && "boolean" != typeof t.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                    var e = t.charset || sn.charset;
                    if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = Qr.default;
                    if (void 0 !== t.format) {
                        if (!Jr.call(Qr.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                        r = t.format
                    }
                    var n, o = Qr.formatters[r],
                        i = sn.filter;
                    if (("function" == typeof t.filter || tn(t.filter)) && (i = t.filter), n = t.arrayFormat in Yr ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : sn.arrayFormat, "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                    var s = void 0 === t.allowDots ? !0 === t.encodeDotInKeys || sn.allowDots : !!t.allowDots;
                    return {
                        addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : sn.addQueryPrefix,
                        allowDots: s,
                        allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : sn.allowEmptyArrays,
                        arrayFormat: n,
                        charset: e,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : sn.charsetSentinel,
                        commaRoundTrip: t.commaRoundTrip,
                        delimiter: void 0 === t.delimiter ? sn.delimiter : t.delimiter,
                        encode: "boolean" == typeof t.encode ? t.encode : sn.encode,
                        encodeDotInKeys: "boolean" == typeof t.encodeDotInKeys ? t.encodeDotInKeys : sn.encodeDotInKeys,
                        encoder: "function" == typeof t.encoder ? t.encoder : sn.encoder,
                        encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : sn.encodeValuesOnly,
                        filter: i,
                        format: r,
                        formatter: o,
                        serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : sn.serializeDate,
                        skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : sn.skipNulls,
                        sort: "function" == typeof t.sort ? t.sort : null,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : sn.strictNullHandling
                    }
                },
                hn = function(t, e) {
                    var r, n = t,
                        o = un(e);
                    "function" == typeof o.filter ? n = (0, o.filter)("", n) : tn(o.filter) && (r = o.filter);
                    var i = [];
                    if ("object" != typeof n || null === n) return "";
                    var s = Yr[o.arrayFormat],
                        a = "comma" === s && o.commaRoundTrip;
                    r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
                    for (var c = Xr(), l = 0; l < r.length; ++l) {
                        var u = r[l];
                        o.skipNulls && null === n[u] || rn(i, ln(n[u], u, s, a, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, c))
                    }
                    var h = i.join(o.delimiter),
                        p = !0 === o.addQueryPrefix ? "?" : "";
                    return o.charsetSentinel && ("iso-8859-1" === o.charset ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : ""
                },
                pn = Gr,
                fn = Object.prototype.hasOwnProperty,
                dn = Array.isArray,
                gn = {
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decodeDotInKeys: !1,
                    decoder: pn.decode,
                    delimiter: "&",
                    depth: 5,
                    duplicates: "combine",
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                yn = function(t) {
                    return t.replace(/&#(\d+);/g, (function(t, e) {
                        return String.fromCharCode(parseInt(e, 10))
                    }))
                },
                vn = function(t, e) {
                    return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
                },
                _n = "utf8=%26%2310003%3B",
                mn = "utf8=%E2%9C%93",
                bn = function(t, e) {
                    var r, n = {
                            __proto__: null
                        },
                        o = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                        i = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                        s = o.split(e.delimiter, i),
                        a = -1,
                        c = e.charset;
                    if (e.charsetSentinel)
                        for (r = 0; r < s.length; ++r) 0 === s[r].indexOf("utf8=") && (s[r] === mn ? c = "utf-8" : s[r] === _n && (c = "iso-8859-1"), a = r, r = s.length);
                    for (r = 0; r < s.length; ++r)
                        if (r !== a) {
                            var l, u, h = s[r],
                                p = h.indexOf("]="),
                                f = -1 === p ? h.indexOf("=") : p + 1; - 1 === f ? (l = e.decoder(h, gn.decoder, c, "key"), u = e.strictNullHandling ? null : "") : (l = e.decoder(h.slice(0, f), gn.decoder, c, "key"), u = pn.maybeMap(vn(h.slice(f + 1), e), (function(t) {
                                return e.decoder(t, gn.decoder, c, "value")
                            }))), u && e.interpretNumericEntities && "iso-8859-1" === c && (u = yn(u)), h.indexOf("[]=") > -1 && (u = dn(u) ? [u] : u);
                            var d = fn.call(n, l);
                            d && "combine" === e.duplicates ? n[l] = pn.combine(n[l], u) : d && "last" !== e.duplicates || (n[l] = u)
                        } return n
                },
                Tn = function(t, e, r, n) {
                    for (var o = n ? e : vn(e, r), i = t.length - 1; i >= 0; --i) {
                        var s, a = t[i];
                        if ("[]" === a && r.parseArrays) s = r.allowEmptyArrays && "" === o ? [] : [].concat(o);
                        else {
                            s = r.plainObjects ? Object.create(null) : {};
                            var c = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                l = r.decodeDotInKeys ? c.replace(/%2E/g, ".") : c,
                                u = parseInt(l, 10);
                            r.parseArrays || "" !== l ? !isNaN(u) && a !== l && String(u) === l && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (s = [])[u] = o : "__proto__" !== l && (s[l] = o) : s = {
                                0: o
                            }
                        }
                        o = s
                    }
                    return o
                },
                wn = function(t, e, r, n) {
                    if (t) {
                        var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                            i = /(\[[^[\]]*])/,
                            s = /(\[[^[\]]*])/g,
                            a = r.depth > 0 && i.exec(o),
                            c = a ? o.slice(0, a.index) : o,
                            l = [];
                        if (c) {
                            if (!r.plainObjects && fn.call(Object.prototype, c) && !r.allowPrototypes) return;
                            l.push(c)
                        }
                        for (var u = 0; r.depth > 0 && null !== (a = s.exec(o)) && u < r.depth;) {
                            if (u += 1, !r.plainObjects && fn.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes) return;
                            l.push(a[1])
                        }
                        return a && l.push("[" + o.slice(a.index) + "]"), Tn(l, e, r, n)
                    }
                },
                En = function(t) {
                    if (!t) return gn;
                    if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (void 0 !== t.decodeDotInKeys && "boolean" != typeof t.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var e = void 0 === t.charset ? gn.charset : t.charset,
                        r = void 0 === t.duplicates ? gn.duplicates : t.duplicates;
                    if ("combine" !== r && "first" !== r && "last" !== r) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: void 0 === t.allowDots ? !0 === t.decodeDotInKeys || gn.allowDots : !!t.allowDots,
                        allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : gn.allowEmptyArrays,
                        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : gn.allowPrototypes,
                        allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : gn.allowSparse,
                        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : gn.arrayLimit,
                        charset: e,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : gn.charsetSentinel,
                        comma: "boolean" == typeof t.comma ? t.comma : gn.comma,
                        decodeDotInKeys: "boolean" == typeof t.decodeDotInKeys ? t.decodeDotInKeys : gn.decodeDotInKeys,
                        decoder: "function" == typeof t.decoder ? t.decoder : gn.decoder,
                        delimiter: "string" == typeof t.delimiter || pn.isRegExp(t.delimiter) ? t.delimiter : gn.delimiter,
                        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : gn.depth,
                        duplicates: r,
                        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : gn.interpretNumericEntities,
                        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : gn.parameterLimit,
                        parseArrays: !1 !== t.parseArrays,
                        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : gn.plainObjects,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : gn.strictNullHandling
                    }
                },
                Sn = w({
                    formats: Wr,
                    parse: function(t, e) {
                        var r = En(e);
                        if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};
                        for (var n = "string" == typeof t ? bn(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, i = Object.keys(n), s = 0; s < i.length; ++s) {
                            var a = i[s],
                                c = wn(a, n[a], r, "string" == typeof t);
                            o = pn.merge(o, c, r)
                        }
                        return !0 === r.allowSparse ? o : pn.compact(o)
                    },
                    stringify: hn
                });
            const On = ({
                    payload: t,
                    headers: e
                }) => !(!t || (null == e ? void 0 : e["content-type"])),
                kn = (t, e) => {
                    const r = null == e ? void 0 : e["content-type"];
                    return r ? r.toLowerCase().includes(m.FormUrlEncoded.toLowerCase()) ? m.FormUrlEncoded : r.toLowerCase().includes(m.Json.toLowerCase()) ? m.Json : void 0 : t
                },
                Cn = ({
                    payload: t,
                    contentType: e
                }) => e === m.FormUrlEncoded ? Sn.stringify(t) : e === m.Json ? JSON.stringify(t) : t,
                An = t => [...t].reduce(((t, [e, r]) => (t[e] = r, t)), {}),
                In = ({
                    responseHeaders: t,
                    localeHeader: e,
                    currentLocale: r,
                    setLocale: n
                }) => {
                    const o = e.toLowerCase(),
                        i = Object.keys(t).find((t => t.toLowerCase() === o)),
                        s = i ? t[i] : void 0;
                    s && r && s !== r && (null == n || n(s))
                },
                Pn = t => null == t ? void 0 : t.replace("outsystems://", "https://"),
                Ln = (t, e, r) => {
                    var n;
                    let o;
                    try {
                        t && (o = JSON.parse(t))
                    } catch (o) {
                        null === (n = null == e ? void 0 : e.clientError) || void 0 === n || n.call(e, {
                            error: o,
                            category: r,
                            clientMessage: `Could not parse response: ${t}`,
                            internalMessage: "Could not parse response."
                        })
                    }
                    return o
                },
                Rn = (t, e) => {
                    if (!e) return t;
                    const r = Sn.stringify(e);
                    if (r) {
                        const e = t.includes("?") ? "&" : "?";
                        return `${t}${e}${r}`
                    }
                    return t
                };

            function jn() {
                if ("undefined" != typeof window) return window;
                if (void 0 !== E) return E;
                if ("undefined" != typeof globalThis) return globalThis;
                if ("undefined" != typeof self) return self;
                throw new Error("unable to locate global object")
            }

            function xn(t, r, n) {
                return e(this, void 0, void 0, (function*() {
                    return (null == t ? void 0 : t.startActiveClientSpan) ? t.startActiveClientSpan(r, (t => e(this, void 0, void 0, (function*() {
                        try {
                            return yield n()
                        } finally {
                            null == t || t.end()
                        }
                    })))) : n()
                }))
            }
            const Nn = "os-auth-retry",
                Mn = ({
                    fetchClient: t,
                    getToken: r,
                    retryOnUnauthorizedResponse: n = !0
                }) => {
                    let o = t;
                    return r && (o = (o, i) => e(void 0, void 0, void 0, (function*() {
                        yield Dn({
                            config: i,
                            getToken: r
                        });
                        let e = yield t(o, i);
                        return n && (e.ok || (e = yield Un({
                            response: e,
                            fetchClient: t,
                            config: Object.assign({}, i),
                            getToken: r
                        }))), e
                    }))), o
                },
                Dn = t => e(void 0, [t], void 0, (function*({
                    config: t = {},
                    getToken: e
                }) {
                    var r;
                    const n = yield e();
                    return n && (t.headers = Object.assign(Object.assign({}, null !== (r = t.headers) && void 0 !== r ? r : {}), {
                        Authorization: n
                    })), t
                })),
                Un = t => e(void 0, [t], void 0, (function*({
                    response: t,
                    fetchClient: e,
                    config: r = {},
                    getToken: n
                }) {
                    var o;
                    if (401 !== t.status || "true" === t.headers.get(Nn)) return t;
                    const i = yield n(!0);
                    return i ? (r.headers = Object.assign(Object.assign({}, null !== (o = r.headers) && void 0 !== o ? o : {}), {
                        Authorization: i,
                        [Nn]: "true"
                    }), e(t.url, r)) : t
                }));
            var Wn, Bn, $n, Fn, Hn, zn, Vn, qn, Zn, Gn, Xn, Kn, Qn, Jn, Yn, to, eo, ro, no;
            const oo = "",
                io = 1e4,
                so = "",
                ao = "FetchHttpClient",
                co = t => e(void 0, void 0, void 0, (function*() {
                    const e = yield t.text();
                    return "" === e ? void 0 : JSON.parse(e)
                }));
            null !== (Wn = AbortSignal.timeout) && void 0 !== Wn || (AbortSignal.timeout = function(t) {
                const e = new AbortController;
                return setTimeout((() => e.abort()), t), e.signal
            });
            class lo {
                constructor({
                    baseUrl: t = oo,
                    headers: e = {},
                    localeHeader: r = so,
                    getLocale: o,
                    setLocale: i,
                    fetchClient: s = jn().fetch,
                    logger: a,
                    loadTrace: c,
                    getToken: l = (() => Promise.resolve(void 0))
                } = {}) {
                    Bn.add(this), $n.set(this, void 0), Fn.set(this, void 0), Hn.set(this, void 0), zn.set(this, void 0), Vn.set(this, void 0), qn.set(this, void 0), Zn.set(this, void 0), Gn.set(this, void 0), n(this, Fn, t, "f"), n(this, Hn, e, "f"), n(this, zn, r, "f"), n(this, Vn, o, "f"), n(this, qn, i, "f"), n(this, Gn, a, "f"), n(this, Zn, c, "f"), n(this, $n, this.addAuthInterceptors(s, l), "f")
                }
                addAuthInterceptors(t, e) {
                    return Mn({
                        fetchClient: t,
                        getToken: e
                    })
                }
                post(n) {
                    return e(this, arguments, void 0, (function*({
                        url: n,
                        payload: i,
                        params: s,
                        headers: a,
                        contentType: c = m.FormUrlEncoded,
                        timeout: l,
                        timeoutHandler: u,
                        useLocaleInfo: h = !1,
                        baseURL: p,
                        responseHandler: f
                    }) {
                        var d, g, y, v, _, b, T;
                        null === (g = null === (d = r(this, Gn, "f")) || void 0 === d ? void 0 : d.setActiveSpanAsNonAggregable) || void 0 === g || g.call(d);
                        const w = h ? null === (y = r(this, Vn, "f")) || void 0 === y ? void 0 : y.call(this) : void 0,
                            [E, S] = r(this, Bn, "m", Xn).call(this, n, p, s);
                        try {
                            null === (_ = null === (v = r(this, Gn, "f")) || void 0 === v ? void 0 : v.debug) || void 0 === _ || _.call(v, {
                                category: ao,
                                message: `POST ${S}`
                            });
                            const o = kn(c, a),
                                s = {
                                    body: i ? Cn({
                                        payload: i,
                                        contentType: o
                                    }) : void 0,
                                    headers: yield r(this, Bn, "m", ro).call(this, a, w, On({
                                        payload: i,
                                        headers: a
                                    }) ? c : void 0),
                                    method: "POST",
                                    signal: AbortSignal.timeout(l ? 1e3 * l : io)
                                },
                                p = () => e(this, void 0, void 0, (function*() {
                                    return r(this, $n, "f").call(this, E, s)
                                })),
                                d = yield xn(r(this, Gn, "f"), "POST", p);
                            if (!d.ok) throw yield r(this, Bn, "m", eo).call(this, d, n, "POST", u);
                            const g = yield co(d);
                            if (r(this, Bn, "m", Jn).call(this, d, h, w), "function" == typeof f) try {
                                const t = {};
                                d.headers.forEach(((e, r) => t[r] = e)), f({
                                    data: g,
                                    responseHeaders: t
                                })
                            } catch (e) {
                                null === (T = null === (b = r(this, Gn, "f")) || void 0 === b ? void 0 : b.error) || void 0 === T || T.call(b, {
                                    category: ao,
                                    message: `Handler Error: POST ${S}`,
                                    errorCode: t.ErrorCodes.Communication_Default,
                                    error: e
                                })
                            }
                            return g
                        } catch (t) {
                            throw t instanceof o ? t : yield r(this, Bn, "m", to).call(this, t, n, "POST", u)
                        }
                    }))
                }
                get(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        useLocaleInfo: i,
                        timeout: s,
                        timeoutHandler: a,
                        responseType: c = "json",
                        baseURL: l
                    }) {
                        const u = yield r(this, Bn, "m", Qn).call(this, {
                            url: t,
                            params: e,
                            headers: n,
                            useLocaleInfo: i,
                            timeout: s,
                            timeoutHandler: a,
                            baseURL: l
                        });
                        try {
                            return "blob" === c ? yield u.blob(): "json" === c ? yield co(u): Promise.resolve()
                        } catch (e) {
                            throw e instanceof o ? e : yield r(this, Bn, "m", to).call(this, e, t, "GET", a)
                        }
                    }))
                }
                getResponseUrl(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        useLocaleInfo: o,
                        timeout: i,
                        timeoutHandler: s,
                        baseURL: a
                    }) {
                        return (yield r(this, Bn, "m", Qn).call(this, {
                            url: t,
                            params: e,
                            headers: n,
                            useLocaleInfo: o,
                            timeout: i,
                            timeoutHandler: s,
                            baseURL: a
                        })).url
                    }))
                }
            }
            $n = new WeakMap, Fn = new WeakMap, Hn = new WeakMap, zn = new WeakMap, Vn = new WeakMap, qn = new WeakMap, Zn = new WeakMap, Gn = new WeakMap, Bn = new WeakSet, Xn = function(t, e, n) {
                var o;
                const i = null !== (o = Pn(t)) && void 0 !== o ? o : "",
                    s = Pn(e || r(this, Fn, "f")),
                    a = s && !t.includes("://") ? `${s.replace(/\/$/,"")}/${t.replace(/^\/+/,"")}` : i;
                return [Rn(a, n), i]
            }, Kn = function(t, n, o) {
                return e(this, void 0, void 0, (function*() {
                    r(this, Bn, "m", Yn).call(this, t, null == n ? void 0 : n.status) === b.Timeout && o && (yield o())
                }))
            }, Qn = function(t) {
                return e(this, arguments, void 0, (function*({
                    url: t,
                    params: n,
                    headers: i,
                    useLocaleInfo: s = !1,
                    timeout: a,
                    timeoutHandler: c,
                    baseURL: l
                }) {
                    var u, h, p, f, d;
                    null === (h = null === (u = r(this, Gn, "f")) || void 0 === u ? void 0 : u.setActiveSpanAsNonAggregable) || void 0 === h || h.call(u);
                    const g = s ? null === (p = r(this, Vn, "f")) || void 0 === p ? void 0 : p.call(this) : void 0,
                        [y, v] = r(this, Bn, "m", Xn).call(this, t, l, n);
                    try {
                        null === (d = null === (f = r(this, Gn, "f")) || void 0 === f ? void 0 : f.debug) || void 0 === d || d.call(f, {
                            category: ao,
                            message: `GET ${v}`
                        });
                        const n = {
                                headers: yield r(this, Bn, "m", ro).call(this, i, g),
                                signal: AbortSignal.timeout(a ? 1e3 * a : io)
                            },
                            o = () => e(this, void 0, void 0, (function*() {
                                return r(this, $n, "f").call(this, y, n)
                            })),
                            l = yield xn(r(this, Gn, "f"), "GET", o);
                        if (!l.ok) throw yield r(this, Bn, "m", eo).call(this, l, t, "GET", c);
                        return r(this, Bn, "m", Jn).call(this, l, s, g), l
                    } catch (e) {
                        throw e instanceof o ? e : yield r(this, Bn, "m", to).call(this, e, t, "GET", c)
                    }
                }))
            }, Jn = function(t, e, n) {
                e && r(this, qn, "f") && (null == t ? void 0 : t.headers) && In({
                    responseHeaders: An(t.headers.entries()),
                    localeHeader: r(this, zn, "f"),
                    currentLocale: n,
                    setLocale: r(this, qn, "f")
                })
            }, Yn = function(t, e) {
                return "TimeoutError" === (null == t ? void 0 : t.name) || "AbortError" === (null == t ? void 0 : t.name) || 408 === e ? b.Timeout : 401 === e ? b.Unauthorized : b.Unknown
            }, to = function(n, i, s, a) {
                return e(this, void 0, void 0, (function*() {
                    var e, c;
                    yield r(this, Bn, "m", Kn).call(this, n, void 0, a);
                    const l = t.ErrorCodes.Communication_Default;
                    return null === (c = null === (e = r(this, Gn, "f")) || void 0 === e ? void 0 : e.error) || void 0 === c || c.call(e, {
                        category: ao,
                        message: `${s} ${i} - ${n.message}`,
                        errorCode: l,
                        error: n
                    }), new o(`${s} ${i} - ${n.message}`, l, void 0, void 0, ao)
                }))
            }, eo = function(t, n, i, s) {
                return e(this, void 0, void 0, (function*() {
                    var e, c, l;
                    yield r(this, Bn, "m", Kn).call(this, void 0, t, s);
                    const u = a(null !== (e = t.status) && void 0 !== e ? e : "");
                    let h;
                    try {
                        h = yield t.text()
                    } catch (t) {}
                    return null === (l = null === (c = r(this, Gn, "f")) || void 0 === c ? void 0 : c.error) || void 0 === l || l.call(c, {
                        category: ao,
                        message: `${i} ${n} - ${t.status} ${t.statusText}`,
                        errorCode: u,
                        error: new Error(`Fetch ${i} Error - ${t.status} ${t.statusText}`)
                    }), new o(`${i} ${n} - ${t.status} ${t.statusText}`, u, t.status, h, ao)
                }))
            }, ro = function(t, e, n = void 0) {
                var o;
                const i = Object.assign(Object.assign(Object.assign(Object.assign({}, r(this, Hn, "f")), t), e ? {
                    [r(this, zn, "f")]: e
                } : {}), (null == t ? void 0 : t["content-type"]) || n ? {
                    "content-type": null !== (o = null == t ? void 0 : t["content-type"]) && void 0 !== o ? o : n
                } : {});
                return n && (i["content-type"] = n), r(this, Bn, "m", no).call(this, i)
            }, no = function(n) {
                return e(this, void 0, void 0, (function*() {
                    var e, o;
                    try {
                        return yield f(n, (() => {
                            var t;
                            return null === (t = r(this, Zn, "f")) || void 0 === t ? void 0 : t.call(this)
                        }))
                    } catch (n) {
                        null === (o = null === (e = r(this, Gn, "f")) || void 0 === e ? void 0 : e.error) || void 0 === o || o.call(e, {
                            category: ao,
                            message: "Error loading trace information",
                            errorCode: t.ErrorCodes.Communication_Default,
                            error: n
                        })
                    }
                    return n
                }))
            };
            class uo extends lo {
                addAuthInterceptors(t, e) {
                    return Mn({
                        fetchClient: t,
                        getToken: e,
                        retryOnUnauthorizedResponse: !1
                    })
                }
            }
            const ho = (t, e, r) => {
                    try {
                        return fo(t, e, r)
                    } catch (n) {
                        return go(t, e, r)
                    }
                },
                po = t => {
                    try {
                        return new URL(t), !0
                    } catch (t) {
                        return !1
                    }
                },
                fo = (t, e, r) => {
                    const n = po(null != e ? e : "") ? new URL(t, e) : new URL(t);
                    return Object.entries(null != r ? r : {}).forEach((([t, e]) => {
                        n.searchParams.append(t, null != e ? e : "")
                    })), n.toString()
                },
                go = (t, e, r) => {
                    const n = `${e||""}/${t}${r?"?":""}`;
                    let o = "";
                    return Object.entries(null != r ? r : {}).forEach((([t, e]) => {
                        o += `${o?"&":""}${t}=${encodeURIComponent(e)}`
                    })), `${n}${o}`.replace(/\/+/g, "/")
                };
            var yo, vo, _o, mo, bo, To, wo, Eo, So, Oo, ko, Co, Ao;
            const Io = "",
                Po = "NativeHttpClient",
                Lo = "";
            class Ro {
                constructor({
                    baseUrl: t = Io,
                    headers: e = {},
                    localeHeader: r = Lo,
                    getLocale: o,
                    setLocale: i,
                    httpClientInstance: s,
                    logger: a,
                    loadTrace: c,
                    getToken: l
                }) {
                    yo.add(this), vo.set(this, void 0), _o.set(this, void 0), mo.set(this, void 0), bo.set(this, void 0), To.set(this, void 0), wo.set(this, void 0), Eo.set(this, void 0), So.set(this, void 0), n(this, vo, r, "f"), n(this, _o, o, "f"), n(this, mo, i, "f"), n(this, bo, a, "f"), this.httpClientInstance = s, n(this, Eo, t, "f"), n(this, So, e, "f"), n(this, wo, c, "f"), n(this, To, null != l ? l : () => Promise.resolve(void 0), "f")
                }
                post(n) {
                    return e(this, arguments, void 0, (function*({
                        url: e,
                        payload: n,
                        params: o,
                        headers: i,
                        contentType: s = m.FormUrlEncoded,
                        timeout: a,
                        timeoutHandler: c,
                        useLocaleInfo: l,
                        baseURL: u,
                        responseHandler: h
                    }) {
                        var p, f, d;
                        const g = Cn({
                                payload: n,
                                contentType: s
                            }),
                            y = () => r(this, yo, "m", ko).call(this, {
                                method: "POST",
                                url: e,
                                params: o,
                                baseURL: u,
                                headers: i,
                                timeout: a,
                                timeoutHandler: c,
                                useLocaleInfo: l,
                                contentType: s,
                                payload: g
                            }),
                            v = yield xn(r(this, bo, "f"), "POST", y), _ = Ln(v.responseText, r(this, bo, "f"), Po);
                        if ("function" == typeof h) try {
                            h({
                                data: _,
                                responseHeaders: null !== (p = v.responseHeaders) && void 0 !== p ? p : {}
                            })
                        } catch (e) {
                            null === (d = null === (f = r(this, bo, "f")) || void 0 === f ? void 0 : f.error) || void 0 === d || d.call(f, {
                                category: Po,
                                message: `Handler Error: Post ${v.responseUrl}`,
                                errorCode: t.ErrorCodes.Communication_Default,
                                error: e
                            })
                        }
                        return _
                    }))
                }
                get(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        responseType: o = "json",
                        useLocaleInfo: i,
                        timeout: s,
                        timeoutHandler: a,
                        baseURL: c
                    }) {
                        const l = "blob" === o,
                            u = () => r(this, yo, "m", ko).call(this, {
                                method: "GET",
                                url: t,
                                params: e,
                                baseURL: c,
                                headers: n,
                                timeout: s,
                                timeoutHandler: a,
                                useLocaleInfo: i,
                                responseType: l ? "blob" : void 0
                            }),
                            h = yield xn(r(this, bo, "f"), "GET", u);
                        return l ? h.response : "none" !== o ? Ln(h.responseText, r(this, bo, "f"), Po) : void 0
                    }))
                }
                getResponseUrl(n) {
                    return e(this, arguments, void 0, (function*({
                        url: e,
                        params: n,
                        headers: o,
                        useLocaleInfo: i,
                        timeout: s,
                        timeoutHandler: a,
                        baseURL: c
                    }) {
                        var l, u;
                        const h = () => r(this, yo, "m", ko).call(this, {
                                method: "GET",
                                url: e,
                                params: n,
                                baseURL: c,
                                headers: o,
                                timeout: s,
                                timeoutHandler: a,
                                useLocaleInfo: i
                            }),
                            p = yield xn(r(this, bo, "f"), "GET", h);
                        if (!p.responseUrl) {
                            const e = new Error("Successful request came without a response URL");
                            throw null === (u = null === (l = r(this, bo, "f")) || void 0 === l ? void 0 : l.error) || void 0 === u || u.call(l, {
                                error: e,
                                category: Po,
                                message: "Successful request came without a response URL",
                                errorCode: t.ErrorCodes.Communication_Default
                            }), e
                        }
                        return p.responseUrl
                    }))
                }
            }
            vo = new WeakMap, _o = new WeakMap, mo = new WeakMap, bo = new WeakMap, To = new WeakMap, wo = new WeakMap, Eo = new WeakMap, So = new WeakMap, yo = new WeakSet, Oo = function(n, i, s, c, l) {
                return e(this, void 0, void 0, (function*() {
                    var e, u, h, p, f, d, g, y;
                    if (401 !== i.status || s) {
                        const t = null !== (f = null === (p = null === (h = i.status) || void 0 === h ? void 0 : h.toString) || void 0 === p ? void 0 : p.call(h)) && void 0 !== f ? f : "",
                            e = a(t),
                            s = new o(null !== (d = i.responseText) && void 0 !== d ? d : "Network Error", e, t, Ln(i.responseText, r(this, bo, "f"), Po), Po);
                        throw null === (y = null === (g = r(this, bo, "f")) || void 0 === g ? void 0 : g.error) || void 0 === y || y.call(g, {
                            error: s,
                            category: Po,
                            message: `${n} ${c}`,
                            errorCode: e
                        }), s
                    }
                    if (yield r(this, To, "f").call(this, !0)) return l(); {
                        const o = new Error("Unable to retrieve an authorization token");
                        throw null === (u = null === (e = r(this, bo, "f")) || void 0 === e ? void 0 : e.error) || void 0 === u || u.call(e, {
                            error: o,
                            category: Po,
                            message: `${n} ${c}`,
                            errorCode: t.ErrorCodes.Communication_Unauthorized
                        }), o
                    }
                }))
            }, ko = function n(o) {
                return e(this, void 0, void 0, (function*() {
                    var i, s, a;
                    null === (s = null === (i = r(this, bo, "f")) || void 0 === i ? void 0 : i.setActiveSpanAsNonAggregable) || void 0 === s || s.call(i);
                    const {
                        method: c,
                        url: l,
                        params: u,
                        baseURL: h,
                        payload: p,
                        headers: f,
                        useLocaleInfo: d,
                        timeout: g,
                        timeoutHandler: y,
                        isRetry: v,
                        contentType: _,
                        responseType: m
                    } = o, b = ho(l, null != h ? h : r(this, Eo, "f"), u), T = d ? null === (a = r(this, _o, "f")) || void 0 === a ? void 0 : a.call(this) : void 0, w = yield r(this, yo, "m", Co).call(this, {
                        headers: f,
                        locale: T,
                        contentType: _
                    });
                    return new Promise(((i, s) => {
                        var a, u;
                        const h = this.httpClientInstance.createRequest(c, b);
                        h.onError = t => e(this, void 0, void 0, (function*() {
                            try {
                                const e = yield r(this, yo, "m", Oo).call(this, c, t, !!v, b, (() => r(this, yo, "m", n).call(this, Object.assign(Object.assign({}, o), {
                                    isRetry: !0
                                }))));
                                i(e)
                            } catch (t) {
                                s(t)
                            }
                        })), h.onTimeout = () => {
                            var e, n;
                            null == y || y();
                            const o = new Error(`Request timed out: ${b}`);
                            null === (n = null === (e = r(this, bo, "f")) || void 0 === e ? void 0 : e.error) || void 0 === n || n.call(e, {
                                category: Po,
                                message: `POST ${b}`,
                                errorCode: t.ErrorCodes.Communication_Timeout,
                                error: o
                            }), s(o)
                        }, h.onSuccess = t => {
                            d && r(this, mo, "f") && t.responseHeaders && In({
                                responseHeaders: t.responseHeaders,
                                localeHeader: r(this, vo, "f"),
                                currentLocale: T,
                                setLocale: r(this, mo, "f")
                            }), i(t)
                        }, Object.entries(w).forEach((([t, e]) => {
                            h.setHeader(t, e)
                        })), g && h.setTimeout(1e3 * g), p && h.setBody(p), "blob" === m && (h.responseType = "blob"), null === (u = null === (a = r(this, bo, "f")) || void 0 === a ? void 0 : a.debug) || void 0 === u || u.call(a, {
                            category: Po,
                            message: `${c} ${l}`
                        }), h.send()
                    }))
                }))
            }, Co = function(t) {
                return e(this, arguments, void 0, (function*({
                    headers: t,
                    locale: e,
                    contentType: n
                }) {
                    var o;
                    const i = Object.assign(Object.assign(Object.assign({}, null !== (o = r(this, So, "f")) && void 0 !== o ? o : {}), t), e ? {
                        [r(this, vo, "f")]: e
                    } : {});
                    n && !i["content-type"] && (i["content-type"] = n);
                    const s = yield r(this, To, "f").call(this);
                    return s && (i.authorization = s), yield r(this, yo, "m", Ao).call(this, i)
                }))
            }, Ao = function(n) {
                return e(this, void 0, void 0, (function*() {
                    var e, o;
                    try {
                        return yield f(n, (() => {
                            var t;
                            return null === (t = r(this, wo, "f")) || void 0 === t ? void 0 : t.call(this)
                        }))
                    } catch (n) {
                        null === (o = null === (e = r(this, bo, "f")) || void 0 === e ? void 0 : e.error) || void 0 === o || o.call(e, {
                            category: Po,
                            message: "Error loading trace information",
                            errorCode: t.ErrorCodes.Communication_Default,
                            error: n
                        })
                    }
                    return n
                }))
            };
            class jo extends Error {
                constructor(t, e) {
                    const r = new.target.prototype;
                    super(`${t}: Status code '${e}'`), this.statusCode = e, this.__proto__ = r
                }
            }
            class xo extends Error {
                constructor(t = "A timeout occurred.") {
                    const e = new.target.prototype;
                    super(t), this.__proto__ = e
                }
            }
            class No extends Error {
                constructor(t = "An abort occurred.") {
                    const e = new.target.prototype;
                    super(t), this.__proto__ = e
                }
            }
            class Mo extends Error {
                constructor(t, e) {
                    const r = new.target.prototype;
                    super(t), this.transport = e, this.errorType = "UnsupportedTransportError", this.__proto__ = r
                }
            }
            class Do extends Error {
                constructor(t, e) {
                    const r = new.target.prototype;
                    super(t), this.transport = e, this.errorType = "DisabledTransportError", this.__proto__ = r
                }
            }
            class Uo extends Error {
                constructor(t, e) {
                    const r = new.target.prototype;
                    super(t), this.transport = e, this.errorType = "FailedToStartTransportError", this.__proto__ = r
                }
            }
            class Wo extends Error {
                constructor(t) {
                    const e = new.target.prototype;
                    super(t), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = e
                }
            }
            class Bo extends Error {
                constructor(t, e) {
                    const r = new.target.prototype;
                    super(t), this.innerErrors = e, this.__proto__ = r
                }
            }
            class $o {
                constructor(t, e, r) {
                    this.statusCode = t, this.statusText = e, this.content = r
                }
            }
            class Fo {
                get(t, e) {
                    return this.send({
                        ...e,
                        method: "GET",
                        url: t
                    })
                }
                post(t, e) {
                    return this.send({
                        ...e,
                        method: "POST",
                        url: t
                    })
                }
                delete(t, e) {
                    return this.send({
                        ...e,
                        method: "DELETE",
                        url: t
                    })
                }
                getCookieString(t) {
                    return ""
                }
            }
            var Ho;
            ! function(t) {
                t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None"
            }(Ho || (Ho = {}));
            class zo {
                constructor() {}
                log(t, e) {}
            }
            zo.instance = new zo;
            const Vo = "7.0.12";
            class qo {
                static isRequired(t, e) {
                    if (null == t) throw new Error(`The '${e}' argument is required.`)
                }
                static isNotEmpty(t, e) {
                    if (!t || t.match(/^\s*$/)) throw new Error(`The '${e}' argument should not be empty.`)
                }
                static isIn(t, e, r) {
                    if (!(t in e)) throw new Error(`Unknown ${r} value: ${t}.`)
                }
            }
            class Zo {
                static get isBrowser() {
                    return "object" == typeof window && "object" == typeof window.document
                }
                static get isWebWorker() {
                    return "object" == typeof self && "importScripts" in self
                }
                static get isReactNative() {
                    return "object" == typeof window && void 0 === window.document
                }
                static get isNode() {
                    return !this.isBrowser && !this.isWebWorker && !this.isReactNative
                }
            }

            function Go(t, e) {
                let r = "";
                return Ko(t) ? (r = `Binary data of length ${t.byteLength}`, e && (r += `. Content: '${Xo(t)}'`)) : "string" == typeof t && (r = `String data of length ${t.length}`, e && (r += `. Content: '${t}'`)), r
            }

            function Xo(t) {
                const e = new Uint8Array(t);
                let r = "";
                return e.forEach((t => {
                    r += `0x${t<16?"0":""}${t.toString(16)} `
                })), r.substr(0, r.length - 1)
            }

            function Ko(t) {
                return t && "undefined" != typeof ArrayBuffer && (t instanceof ArrayBuffer || t.constructor && "ArrayBuffer" === t.constructor.name)
            }
            async function Qo(t, e, r, n, o, i) {
                const s = {},
                    [a, c] = ei();
                s[a] = c, t.log(Ho.Trace, `(${e} transport) sending data. ${Go(o,i.logMessageContent)}.`);
                const l = Ko(o) ? "arraybuffer" : "text",
                    u = await r.post(n, {
                        content: o,
                        headers: {
                            ...s,
                            ...i.headers
                        },
                        responseType: l,
                        timeout: i.timeout,
                        withCredentials: i.withCredentials
                    });
                t.log(Ho.Trace, `(${e} transport) request complete. Response status: ${u.statusCode}.`)
            }

            function Jo(t) {
                return void 0 === t ? new ti(Ho.Information) : null === t ? zo.instance : void 0 !== t.log ? t : new ti(t)
            }
            class Yo {
                constructor(t, e) {
                    this._subject = t, this._observer = e
                }
                dispose() {
                    const t = this._subject.observers.indexOf(this._observer);
                    t > -1 && this._subject.observers.splice(t, 1), 0 === this._subject.observers.length && this._subject.cancelCallback && this._subject.cancelCallback().catch((t => {}))
                }
            }
            class ti {
                constructor(t) {
                    this._minLevel = t, this.out = console
                }
                log(t, e) {
                    if (t >= this._minLevel) {
                        const r = `[${(new Date).toISOString()}] ${Ho[t]}: ${e}`;
                        switch (t) {
                            case Ho.Critical:
                            case Ho.Error:
                                this.out.error(r);
                                break;
                            case Ho.Warning:
                                this.out.warn(r);
                                break;
                            case Ho.Information:
                                this.out.info(r);
                                break;
                            default:
                                this.out.log(r)
                        }
                    }
                }
            }

            function ei() {
                let t = "X-SignalR-User-Agent";
                return Zo.isNode && (t = "User-Agent"), [t, ri(Vo, ni(), ii(), oi())]
            }

            function ri(t, e, r, n) {
                let o = "Microsoft SignalR/";
                const i = t.split(".");
                return o += `${i[0]}.${i[1]}`, o += ` (${t}; `, o += e && "" !== e ? `${e}; ` : "Unknown OS; ", o += `${r}`, o += n ? `; ${n}` : "; Unknown Runtime Version", o += ")", o
            }

            function ni() {
                if (!Zo.isNode) return "";
                switch (process.platform) {
                    case "win32":
                        return "Windows NT";
                    case "darwin":
                        return "macOS";
                    case "linux":
                        return "Linux";
                    default:
                        return process.platform
                }
            }

            function oi() {
                if (Zo.isNode) return process.versions.node
            }

            function ii() {
                return Zo.isNode ? "NodeJS" : "Browser"
            }

            function si(t) {
                return t.stack ? t.stack : t.message ? t.message : `${t}`
            }

            function ai() {
                if ("undefined" != typeof globalThis) return globalThis;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== E) return E;
                throw new Error("could not find global")
            }
            class ci extends Fo {
                constructor(t) {
                    if (super(), this._logger = t, "undefined" == typeof fetch) {
                        const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                        this._jar = new(t("tough-cookie").CookieJar), this._fetchType = t("node-fetch"), this._fetchType = t("fetch-cookie")(this._fetchType, this._jar)
                    } else this._fetchType = fetch.bind(ai());
                    if ("undefined" == typeof AbortController) {
                        const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                        this._abortControllerType = t("abort-controller")
                    } else this._abortControllerType = AbortController
                }
                async send(t) {
                    if (t.abortSignal && t.abortSignal.aborted) throw new No;
                    if (!t.method) throw new Error("No method defined.");
                    if (!t.url) throw new Error("No url defined.");
                    const e = new this._abortControllerType;
                    let r;
                    t.abortSignal && (t.abortSignal.onabort = () => {
                        e.abort(), r = new No
                    });
                    let n, o = null;
                    if (t.timeout) {
                        const n = t.timeout;
                        o = setTimeout((() => {
                            e.abort(), this._logger.log(Ho.Warning, "Timeout from HTTP request."), r = new xo
                        }), n)
                    }
                    "" === t.content && (t.content = void 0), t.content && (t.headers = t.headers || {}, Ko(t.content) ? t.headers["Content-Type"] = "application/octet-stream" : t.headers["Content-Type"] = "text/plain;charset=UTF-8");
                    try {
                        n = await this._fetchType(t.url, {
                            body: t.content,
                            cache: "no-cache",
                            credentials: !0 === t.withCredentials ? "include" : "same-origin",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                ...t.headers
                            },
                            method: t.method,
                            mode: "cors",
                            redirect: "follow",
                            signal: e.signal
                        })
                    } catch (t) {
                        if (r) throw r;
                        throw this._logger.log(Ho.Warning, `Error from HTTP request. ${t}.`), t
                    } finally {
                        o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null)
                    }
                    if (!n.ok) {
                        const t = await li(n, "text");
                        throw new jo(t || n.statusText, n.status)
                    }
                    const i = li(n, t.responseType),
                        s = await i;
                    return new $o(n.status, n.statusText, s)
                }
                getCookieString(t) {
                    let e = "";
                    return Zo.isNode && this._jar && this._jar.getCookies(t, ((t, r) => e = r.join("; "))), e
                }
            }

            function li(t, e) {
                let r;
                switch (e) {
                    case "arraybuffer":
                        r = t.arrayBuffer();
                        break;
                    case "text":
                    default:
                        r = t.text();
                        break;
                    case "blob":
                    case "document":
                    case "json":
                        throw new Error(`${e} is not supported.`)
                }
                return r
            }
            class ui extends Fo {
                constructor(t) {
                    super(), this._logger = t
                }
                send(t) {
                    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new No) : t.method ? t.url ? new Promise(((e, r) => {
                        const n = new XMLHttpRequest;
                        n.open(t.method, t.url, !0), n.withCredentials = void 0 === t.withCredentials || t.withCredentials, n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "" === t.content && (t.content = void 0), t.content && (Ko(t.content) ? n.setRequestHeader("Content-Type", "application/octet-stream") : n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
                        const o = t.headers;
                        o && Object.keys(o).forEach((t => {
                            n.setRequestHeader(t, o[t])
                        })), t.responseType && (n.responseType = t.responseType), t.abortSignal && (t.abortSignal.onabort = () => {
                            n.abort(), r(new No)
                        }), t.timeout && (n.timeout = t.timeout), n.onload = () => {
                            t.abortSignal && (t.abortSignal.onabort = null), n.status >= 200 && n.status < 300 ? e(new $o(n.status, n.statusText, n.response || n.responseText)) : r(new jo(n.response || n.responseText || n.statusText, n.status))
                        }, n.onerror = () => {
                            this._logger.log(Ho.Warning, `Error from HTTP request. ${n.status}: ${n.statusText}.`), r(new jo(n.statusText, n.status))
                        }, n.ontimeout = () => {
                            this._logger.log(Ho.Warning, "Timeout from HTTP request."), r(new xo)
                        }, n.send(t.content)
                    })) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                }
            }
            class hi extends Fo {
                constructor(t) {
                    if (super(), "undefined" != typeof fetch || Zo.isNode) this._httpClient = new ci(t);
                    else {
                        if ("undefined" == typeof XMLHttpRequest) throw new Error("No usable HttpClient found.");
                        this._httpClient = new ui(t)
                    }
                }
                send(t) {
                    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new No) : t.method ? t.url ? this._httpClient.send(t) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                }
                getCookieString(t) {
                    return this._httpClient.getCookieString(t)
                }
            }
            class pi {
                static write(t) {
                    return `${t}${pi.RecordSeparator}`
                }
                static parse(t) {
                    if (t[t.length - 1] !== pi.RecordSeparator) throw new Error("Message is incomplete.");
                    const e = t.split(pi.RecordSeparator);
                    return e.pop(), e
                }
            }
            pi.RecordSeparatorCode = 30, pi.RecordSeparator = String.fromCharCode(pi.RecordSeparatorCode);
            class fi {
                writeHandshakeRequest(t) {
                    return pi.write(JSON.stringify(t))
                }
                parseHandshakeResponse(t) {
                    let e, r;
                    if (Ko(t)) {
                        const n = new Uint8Array(t),
                            o = n.indexOf(pi.RecordSeparatorCode);
                        if (-1 === o) throw new Error("Message is incomplete.");
                        const i = o + 1;
                        e = String.fromCharCode.apply(null, Array.prototype.slice.call(n.slice(0, i))), r = n.byteLength > i ? n.slice(i).buffer : null
                    } else {
                        const n = t,
                            o = n.indexOf(pi.RecordSeparator);
                        if (-1 === o) throw new Error("Message is incomplete.");
                        const i = o + 1;
                        e = n.substring(0, i), r = n.length > i ? n.substring(i) : null
                    }
                    const n = pi.parse(e),
                        o = JSON.parse(n[0]);
                    if (o.type) throw new Error("Expected a handshake response from the server.");
                    return [r, o]
                }
            }
            var di;
            ! function(t) {
                t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close"
            }(di || (di = {}));
            class gi {
                constructor() {
                    this.observers = []
                }
                next(t) {
                    for (const e of this.observers) e.next(t)
                }
                error(t) {
                    for (const e of this.observers) e.error && e.error(t)
                }
                complete() {
                    for (const t of this.observers) t.complete && t.complete()
                }
                subscribe(t) {
                    return this.observers.push(t), new Yo(this, t)
                }
            }
            const yi = 3e4,
                vi = 15e3;
            var _i;
            ! function(t) {
                t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting"
            }(_i || (_i = {}));
            class mi {
                constructor(t, e, r, n) {
                    this._nextKeepAlive = 0, this._freezeEventListener = () => {
                        this._logger.log(Ho.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")
                    }, qo.isRequired(t, "connection"), qo.isRequired(e, "logger"), qo.isRequired(r, "protocol"), this.serverTimeoutInMilliseconds = yi, this.keepAliveIntervalInMilliseconds = vi, this._logger = e, this._protocol = r, this.connection = t, this._reconnectPolicy = n, this._handshakeProtocol = new fi, this.connection.onreceive = t => this._processIncomingData(t), this.connection.onclose = t => this._connectionClosed(t), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = _i.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({
                        type: di.Ping
                    })
                }
                static create(t, e, r, n) {
                    return new mi(t, e, r, n)
                }
                get state() {
                    return this._connectionState
                }
                get connectionId() {
                    return this.connection && this.connection.connectionId || null
                }
                get baseUrl() {
                    return this.connection.baseUrl || ""
                }
                set baseUrl(t) {
                    if (this._connectionState !== _i.Disconnected && this._connectionState !== _i.Reconnecting) throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                    if (!t) throw new Error("The HubConnection url must be a valid url.");
                    this.connection.baseUrl = t
                }
                start() {
                    return this._startPromise = this._startWithStateTransitions(), this._startPromise
                }
                async _startWithStateTransitions() {
                    if (this._connectionState !== _i.Disconnected) return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
                    this._connectionState = _i.Connecting, this._logger.log(Ho.Debug, "Starting HubConnection.");
                    try {
                        await this._startInternal(), Zo.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = _i.Connected, this._connectionStarted = !0, this._logger.log(Ho.Debug, "HubConnection connected successfully.")
                    } catch (t) {
                        return this._connectionState = _i.Disconnected, this._logger.log(Ho.Debug, `HubConnection failed to start successfully because of error '${t}'.`), Promise.reject(t)
                    }
                }
                async _startInternal() {
                    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
                    const t = new Promise(((t, e) => {
                        this._handshakeResolver = t, this._handshakeRejecter = e
                    }));
                    await this.connection.start(this._protocol.transferFormat);
                    try {
                        const e = {
                            protocol: this._protocol.name,
                            version: this._protocol.version
                        };
                        if (this._logger.log(Ho.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(e)), this._logger.log(Ho.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await t, this._stopDuringStartError) throw this._stopDuringStartError;
                        this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage)
                    } catch (t) {
                        throw this._logger.log(Ho.Debug, `Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(t), t
                    }
                }
                async stop() {
                    const t = this._startPromise;
                    this._stopPromise = this._stopInternal(), await this._stopPromise;
                    try {
                        await t
                    } catch (t) {}
                }
                _stopInternal(t) {
                    return this._connectionState === _i.Disconnected ? (this._logger.log(Ho.Debug, `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === _i.Disconnecting ? (this._logger.log(Ho.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = _i.Disconnecting, this._logger.log(Ho.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(Ho.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = t || new No("The connection was stopped before the hub handshake could complete."), this.connection.stop(t)))
                }
                stream(t, ...e) {
                    const [r, n] = this._replaceStreamingParams(e), o = this._createStreamInvocation(t, e, n);
                    let i;
                    const s = new gi;
                    return s.cancelCallback = () => {
                        const t = this._createCancelInvocation(o.invocationId);
                        return delete this._callbacks[o.invocationId], i.then((() => this._sendWithProtocol(t)))
                    }, this._callbacks[o.invocationId] = (t, e) => {
                        e ? s.error(e) : t && (t.type === di.Completion ? t.error ? s.error(new Error(t.error)) : s.complete() : s.next(t.item))
                    }, i = this._sendWithProtocol(o).catch((t => {
                        s.error(t), delete this._callbacks[o.invocationId]
                    })), this._launchStreams(r, i), s
                }
                _sendMessage(t) {
                    return this._resetKeepAliveInterval(), this.connection.send(t)
                }
                _sendWithProtocol(t) {
                    return this._sendMessage(this._protocol.writeMessage(t))
                }
                send(t, ...e) {
                    const [r, n] = this._replaceStreamingParams(e), o = this._sendWithProtocol(this._createInvocation(t, e, !0, n));
                    return this._launchStreams(r, o), o
                }
                invoke(t, ...e) {
                    const [r, n] = this._replaceStreamingParams(e), o = this._createInvocation(t, e, !1, n);
                    return new Promise(((t, e) => {
                        this._callbacks[o.invocationId] = (r, n) => {
                            n ? e(n) : r && (r.type === di.Completion ? r.error ? e(new Error(r.error)) : t(r.result) : e(new Error(`Unexpected message type: ${r.type}`)))
                        };
                        const n = this._sendWithProtocol(o).catch((t => {
                            e(t), delete this._callbacks[o.invocationId]
                        }));
                        this._launchStreams(r, n)
                    }))
                }
                on(t, e) {
                    t && e && (t = t.toLowerCase(), this._methods[t] || (this._methods[t] = []), -1 === this._methods[t].indexOf(e) && this._methods[t].push(e))
                }
                off(t, e) {
                    if (!t) return;
                    t = t.toLowerCase();
                    const r = this._methods[t];
                    if (r)
                        if (e) {
                            const n = r.indexOf(e); - 1 !== n && (r.splice(n, 1), 0 === r.length && delete this._methods[t])
                        } else delete this._methods[t]
                }
                onclose(t) {
                    t && this._closedCallbacks.push(t)
                }
                onreconnecting(t) {
                    t && this._reconnectingCallbacks.push(t)
                }
                onreconnected(t) {
                    t && this._reconnectedCallbacks.push(t)
                }
                _processIncomingData(t) {
                    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (t = this._processHandshakeResponse(t), this._receivedHandshakeResponse = !0), t) {
                        const e = this._protocol.parseMessages(t, this._logger);
                        for (const t of e) switch (t.type) {
                            case di.Invocation:
                                this._invokeClientMethod(t);
                                break;
                            case di.StreamItem:
                            case di.Completion: {
                                const e = this._callbacks[t.invocationId];
                                if (e) {
                                    t.type === di.Completion && delete this._callbacks[t.invocationId];
                                    try {
                                        e(t)
                                    } catch (t) {
                                        this._logger.log(Ho.Error, `Stream callback threw error: ${si(t)}`)
                                    }
                                }
                                break
                            }
                            case di.Ping:
                                break;
                            case di.Close: {
                                this._logger.log(Ho.Information, "Close message received from server.");
                                const e = t.error ? new Error("Server returned an error on close: " + t.error) : void 0;
                                !0 === t.allowReconnect ? this.connection.stop(e) : this._stopPromise = this._stopInternal(e);
                                break
                            }
                            default:
                                this._logger.log(Ho.Warning, `Invalid message type: ${t.type}.`)
                        }
                    }
                    this._resetTimeoutPeriod()
                }
                _processHandshakeResponse(t) {
                    let e, r;
                    try {
                        [r, e] = this._handshakeProtocol.parseHandshakeResponse(t)
                    } catch (t) {
                        const e = "Error parsing handshake response: " + t;
                        this._logger.log(Ho.Error, e);
                        const r = new Error(e);
                        throw this._handshakeRejecter(r), r
                    }
                    if (e.error) {
                        const t = "Server returned handshake error: " + e.error;
                        this._logger.log(Ho.Error, t);
                        const r = new Error(t);
                        throw this._handshakeRejecter(r), r
                    }
                    return this._logger.log(Ho.Debug, "Server handshake complete."), this._handshakeResolver(), r
                }
                _resetKeepAliveInterval() {
                    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (new Date).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer())
                }
                _resetTimeoutPeriod() {
                    if (!(this.connection.features && this.connection.features.inherentKeepAlive || (this._timeoutHandle = setTimeout((() => this.serverTimeout()), this.serverTimeoutInMilliseconds), void 0 !== this._pingServerHandle))) {
                        let t = this._nextKeepAlive - (new Date).getTime();
                        t < 0 && (t = 0), this._pingServerHandle = setTimeout((async () => {
                            if (this._connectionState === _i.Connected) try {
                                await this._sendMessage(this._cachedPingMessage)
                            } catch {
                                this._cleanupPingTimer()
                            }
                        }), t)
                    }
                }
                serverTimeout() {
                    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
                }
                async _invokeClientMethod(t) {
                    const e = t.target.toLowerCase(),
                        r = this._methods[e];
                    if (!r) return this._logger.log(Ho.Warning, `No client method with the name '${e}' found.`), void(t.invocationId && (this._logger.log(Ho.Warning, `No result given for '${e}' method and invocation ID '${t.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(t.invocationId, "Client didn't provide a result.", null))));
                    const n = r.slice(),
                        o = !!t.invocationId;
                    let i, s, a;
                    for (const r of n) try {
                        const n = i;
                        i = await r.apply(this, t.arguments), o && i && n && (this._logger.log(Ho.Error, `Multiple results provided for '${e}'. Sending error to server.`), a = this._createCompletionMessage(t.invocationId, "Client provided multiple results.", null)), s = void 0
                    } catch (t) {
                        s = t, this._logger.log(Ho.Error, `A callback for the method '${e}' threw error '${t}'.`)
                    }
                    a ? await this._sendWithProtocol(a) : o ? (s ? a = this._createCompletionMessage(t.invocationId, `${s}`, null) : void 0 !== i ? a = this._createCompletionMessage(t.invocationId, null, i) : (this._logger.log(Ho.Warning, `No result given for '${e}' method and invocation ID '${t.invocationId}'.`), a = this._createCompletionMessage(t.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(a)) : i && this._logger.log(Ho.Error, `Result given for '${e}' method but server is not expecting a result.`)
                }
                _connectionClosed(t) {
                    this._logger.log(Ho.Debug, `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || t || new No("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(t || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === _i.Disconnecting ? this._completeClose(t) : this._connectionState === _i.Connected && this._reconnectPolicy ? this._reconnect(t) : this._connectionState === _i.Connected && this._completeClose(t)
                }
                _completeClose(t) {
                    if (this._connectionStarted) {
                        this._connectionState = _i.Disconnected, this._connectionStarted = !1, Zo.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
                        try {
                            this._closedCallbacks.forEach((e => e.apply(this, [t])))
                        } catch (e) {
                            this._logger.log(Ho.Error, `An onclose callback called with error '${t}' threw error '${e}'.`)
                        }
                    }
                }
                async _reconnect(t) {
                    const e = Date.now();
                    let r = 0,
                        n = void 0 !== t ? t : new Error("Attempting to reconnect due to a unknown error."),
                        o = this._getNextRetryDelay(r++, 0, n);
                    if (null === o) return this._logger.log(Ho.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), void this._completeClose(t);
                    if (this._connectionState = _i.Reconnecting, t ? this._logger.log(Ho.Information, `Connection reconnecting because of error '${t}'.`) : this._logger.log(Ho.Information, "Connection reconnecting."), 0 !== this._reconnectingCallbacks.length) {
                        try {
                            this._reconnectingCallbacks.forEach((e => e.apply(this, [t])))
                        } catch (e) {
                            this._logger.log(Ho.Error, `An onreconnecting callback called with error '${t}' threw error '${e}'.`)
                        }
                        if (this._connectionState !== _i.Reconnecting) return void this._logger.log(Ho.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.")
                    }
                    for (; null !== o;) {
                        if (this._logger.log(Ho.Information, `Reconnect attempt number ${r} will start in ${o} ms.`), await new Promise((t => {
                                this._reconnectDelayHandle = setTimeout(t, o)
                            })), this._reconnectDelayHandle = void 0, this._connectionState !== _i.Reconnecting) return void this._logger.log(Ho.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                        try {
                            if (await this._startInternal(), this._connectionState = _i.Connected, this._logger.log(Ho.Information, "HubConnection reconnected successfully."), 0 !== this._reconnectedCallbacks.length) try {
                                this._reconnectedCallbacks.forEach((t => t.apply(this, [this.connection.connectionId])))
                            } catch (t) {
                                this._logger.log(Ho.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${t}'.`)
                            }
                            return
                        } catch (t) {
                            if (this._logger.log(Ho.Information, `Reconnect attempt failed because of error '${t}'.`), this._connectionState !== _i.Reconnecting) return this._logger.log(Ho.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), void(this._connectionState === _i.Disconnecting && this._completeClose());
                            n = t instanceof Error ? t : new Error(t.toString()), o = this._getNextRetryDelay(r++, Date.now() - e, n)
                        }
                    }
                    this._logger.log(Ho.Information, `Reconnect retries have been exhausted after ${Date.now()-e} ms and ${r} failed attempts. Connection disconnecting.`), this._completeClose()
                }
                _getNextRetryDelay(t, e, r) {
                    try {
                        return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                            elapsedMilliseconds: e,
                            previousRetryCount: t,
                            retryReason: r
                        })
                    } catch (r) {
                        return this._logger.log(Ho.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${e}) threw error '${r}'.`), null
                    }
                }
                _cancelCallbacksWithError(t) {
                    const e = this._callbacks;
                    this._callbacks = {}, Object.keys(e).forEach((r => {
                        const n = e[r];
                        try {
                            n(null, t)
                        } catch (e) {
                            this._logger.log(Ho.Error, `Stream 'error' callback called with '${t}' threw error: ${si(e)}`)
                        }
                    }))
                }
                _cleanupPingTimer() {
                    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0)
                }
                _cleanupTimeout() {
                    this._timeoutHandle && clearTimeout(this._timeoutHandle)
                }
                _createInvocation(t, e, r, n) {
                    if (r) return 0 !== n.length ? {
                        arguments: e,
                        streamIds: n,
                        target: t,
                        type: di.Invocation
                    } : {
                        arguments: e,
                        target: t,
                        type: di.Invocation
                    }; {
                        const r = this._invocationId;
                        return this._invocationId++, 0 !== n.length ? {
                            arguments: e,
                            invocationId: r.toString(),
                            streamIds: n,
                            target: t,
                            type: di.Invocation
                        } : {
                            arguments: e,
                            invocationId: r.toString(),
                            target: t,
                            type: di.Invocation
                        }
                    }
                }
                _launchStreams(t, e) {
                    if (0 !== t.length) {
                        e || (e = Promise.resolve());
                        for (const r in t) t[r].subscribe({
                            complete: () => {
                                e = e.then((() => this._sendWithProtocol(this._createCompletionMessage(r))))
                            },
                            error: t => {
                                let n;
                                n = t instanceof Error ? t.message : t && t.toString ? t.toString() : "Unknown error", e = e.then((() => this._sendWithProtocol(this._createCompletionMessage(r, n))))
                            },
                            next: t => {
                                e = e.then((() => this._sendWithProtocol(this._createStreamItemMessage(r, t))))
                            }
                        })
                    }
                }
                _replaceStreamingParams(t) {
                    const e = [],
                        r = [];
                    for (let n = 0; n < t.length; n++) {
                        const o = t[n];
                        if (this._isObservable(o)) {
                            const i = this._invocationId;
                            this._invocationId++, e[i] = o, r.push(i.toString()), t.splice(n, 1)
                        }
                    }
                    return [e, r]
                }
                _isObservable(t) {
                    return t && t.subscribe && "function" == typeof t.subscribe
                }
                _createStreamInvocation(t, e, r) {
                    const n = this._invocationId;
                    return this._invocationId++, 0 !== r.length ? {
                        arguments: e,
                        invocationId: n.toString(),
                        streamIds: r,
                        target: t,
                        type: di.StreamInvocation
                    } : {
                        arguments: e,
                        invocationId: n.toString(),
                        target: t,
                        type: di.StreamInvocation
                    }
                }
                _createCancelInvocation(t) {
                    return {
                        invocationId: t,
                        type: di.CancelInvocation
                    }
                }
                _createStreamItemMessage(t, e) {
                    return {
                        invocationId: t,
                        item: e,
                        type: di.StreamItem
                    }
                }
                _createCompletionMessage(t, e, r) {
                    return e ? {
                        error: e,
                        invocationId: t,
                        type: di.Completion
                    } : {
                        invocationId: t,
                        result: r,
                        type: di.Completion
                    }
                }
            }
            const bi = [0, 2e3, 1e4, 3e4, null];
            class Ti {
                constructor(t) {
                    this._retryDelays = void 0 !== t ? [...t, null] : bi
                }
                nextRetryDelayInMilliseconds(t) {
                    return this._retryDelays[t.previousRetryCount]
                }
            }
            class wi {}
            wi.Authorization = "Authorization", wi.Cookie = "Cookie";
            class Ei extends Fo {
                constructor(t, e) {
                    super(), this._innerClient = t, this._accessTokenFactory = e
                }
                async send(t) {
                    let e = !0;
                    this._accessTokenFactory && (!this._accessToken || t.url && t.url.indexOf("/negotiate?") > 0) && (e = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(t);
                    const r = await this._innerClient.send(t);
                    return e && 401 === r.statusCode && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(t), await this._innerClient.send(t)) : r
                }
                _setAuthorizationHeader(t) {
                    t.headers || (t.headers = {}), this._accessToken ? t.headers[wi.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && t.headers[wi.Authorization] && delete t.headers[wi.Authorization]
                }
                getCookieString(t) {
                    return this._innerClient.getCookieString(t)
                }
            }
            var Si, Oi;
            (function(t) {
                t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling"
            })(Si || (Si = {})),
            function(t) {
                t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary"
            }(Oi || (Oi = {}));
            class ki {
                constructor() {
                    this._isAborted = !1, this.onabort = null
                }
                abort() {
                    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort())
                }
                get signal() {
                    return this
                }
                get aborted() {
                    return this._isAborted
                }
            }
            class Ci {
                constructor(t, e, r) {
                    this._httpClient = t, this._logger = e, this._pollAbort = new ki, this._options = r, this._running = !1, this.onreceive = null, this.onclose = null
                }
                get pollAborted() {
                    return this._pollAbort.aborted
                }
                async connect(t, e) {
                    if (qo.isRequired(t, "url"), qo.isRequired(e, "transferFormat"), qo.isIn(e, Oi, "transferFormat"), this._url = t, this._logger.log(Ho.Trace, "(LongPolling transport) Connecting."), e === Oi.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof(new XMLHttpRequest).responseType) throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                    const [r, n] = ei(), o = {
                        [r]: n,
                        ...this._options.headers
                    }, i = {
                        abortSignal: this._pollAbort.signal,
                        headers: o,
                        timeout: 1e5,
                        withCredentials: this._options.withCredentials
                    };
                    e === Oi.Binary && (i.responseType = "arraybuffer");
                    const s = `${t}&_=${Date.now()}`;
                    this._logger.log(Ho.Trace, `(LongPolling transport) polling: ${s}.`);
                    const a = await this._httpClient.get(s, i);
                    200 !== a.statusCode ? (this._logger.log(Ho.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new jo(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i)
                }
                async _poll(t, e) {
                    try {
                        for (; this._running;) try {
                            const r = `${t}&_=${Date.now()}`;
                            this._logger.log(Ho.Trace, `(LongPolling transport) polling: ${r}.`);
                            const n = await this._httpClient.get(r, e);
                            204 === n.statusCode ? (this._logger.log(Ho.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : 200 !== n.statusCode ? (this._logger.log(Ho.Error, `(LongPolling transport) Unexpected response code: ${n.statusCode}.`), this._closeError = new jo(n.statusText || "", n.statusCode), this._running = !1) : n.content ? (this._logger.log(Ho.Trace, `(LongPolling transport) data received. ${Go(n.content,this._options.logMessageContent)}.`), this.onreceive && this.onreceive(n.content)) : this._logger.log(Ho.Trace, "(LongPolling transport) Poll timed out, reissuing.")
                        } catch (t) {
                            this._running ? t instanceof xo ? this._logger.log(Ho.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = t, this._running = !1) : this._logger.log(Ho.Trace, `(LongPolling transport) Poll errored after shutdown: ${t.message}`)
                        }
                    } finally {
                        this._logger.log(Ho.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose()
                    }
                }
                async send(t) {
                    return this._running ? Qo(this._logger, "LongPolling", this._httpClient, this._url, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
                }
                async stop() {
                    this._logger.log(Ho.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
                    try {
                        await this._receiving, this._logger.log(Ho.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
                        const t = {},
                            [e, r] = ei();
                        t[e] = r;
                        const n = {
                            headers: {
                                ...t,
                                ...this._options.headers
                            },
                            timeout: this._options.timeout,
                            withCredentials: this._options.withCredentials
                        };
                        await this._httpClient.delete(this._url, n), this._logger.log(Ho.Trace, "(LongPolling transport) DELETE request sent.")
                    } finally {
                        this._logger.log(Ho.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose()
                    }
                }
                _raiseOnClose() {
                    if (this.onclose) {
                        let t = "(LongPolling transport) Firing onclose event.";
                        this._closeError && (t += " Error: " + this._closeError), this._logger.log(Ho.Trace, t), this.onclose(this._closeError)
                    }
                }
            }
            class Ai {
                constructor(t, e, r, n) {
                    this._httpClient = t, this._accessToken = e, this._logger = r, this._options = n, this.onreceive = null, this.onclose = null
                }
                async connect(t, e) {
                    return qo.isRequired(t, "url"), qo.isRequired(e, "transferFormat"), qo.isIn(e, Oi, "transferFormat"), this._logger.log(Ho.Trace, "(SSE transport) Connecting."), this._url = t, this._accessToken && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise(((r, n) => {
                        let o, i = !1;
                        if (e === Oi.Text) {
                            if (Zo.isBrowser || Zo.isWebWorker) o = new this._options.EventSource(t, {
                                withCredentials: this._options.withCredentials
                            });
                            else {
                                const e = this._httpClient.getCookieString(t),
                                    r = {};
                                r.Cookie = e;
                                const [n, i] = ei();
                                r[n] = i, o = new this._options.EventSource(t, {
                                    withCredentials: this._options.withCredentials,
                                    headers: {
                                        ...r,
                                        ...this._options.headers
                                    }
                                })
                            }
                            try {
                                o.onmessage = t => {
                                    if (this.onreceive) try {
                                        this._logger.log(Ho.Trace, `(SSE transport) data received. ${Go(t.data,this._options.logMessageContent)}.`), this.onreceive(t.data)
                                    } catch (t) {
                                        return void this._close(t)
                                    }
                                }, o.onerror = t => {
                                    i ? this._close() : n(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))
                                }, o.onopen = () => {
                                    this._logger.log(Ho.Information, `SSE connected to ${this._url}`), this._eventSource = o, i = !0, r()
                                }
                            } catch (t) {
                                return void n(t)
                            }
                        } else n(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"))
                    }))
                }
                async send(t) {
                    return this._eventSource ? Qo(this._logger, "SSE", this._httpClient, this._url, t, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
                }
                stop() {
                    return this._close(), Promise.resolve()
                }
                _close(t) {
                    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(t))
                }
            }
            class Ii {
                constructor(t, e, r, n, o, i) {
                    this._logger = r, this._accessTokenFactory = e, this._logMessageContent = n, this._webSocketConstructor = o, this._httpClient = t, this.onreceive = null, this.onclose = null, this._headers = i
                }
                async connect(t, e) {
                    let r;
                    return qo.isRequired(t, "url"), qo.isRequired(e, "transferFormat"), qo.isIn(e, Oi, "transferFormat"), this._logger.log(Ho.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory && (r = await this._accessTokenFactory()), new Promise(((n, o) => {
                        let i;
                        t = t.replace(/^http/, "ws");
                        const s = this._httpClient.getCookieString(t);
                        let a = !1;
                        if (Zo.isNode || Zo.isReactNative) {
                            const e = {},
                                [n, o] = ei();
                            e[n] = o, r && (e[wi.Authorization] = `Bearer ${r}`), s && (e[wi.Cookie] = s), i = new this._webSocketConstructor(t, void 0, {
                                headers: {
                                    ...e,
                                    ...this._headers
                                }
                            })
                        } else r && (t += (t.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(r)}`);
                        i || (i = new this._webSocketConstructor(t)), e === Oi.Binary && (i.binaryType = "arraybuffer"), i.onopen = e => {
                            this._logger.log(Ho.Information, `WebSocket connected to ${t}.`), this._webSocket = i, a = !0, n()
                        }, i.onerror = t => {
                            let e = null;
                            e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "There was an error with the transport", this._logger.log(Ho.Information, `(WebSockets transport) ${e}.`)
                        }, i.onmessage = t => {
                            if (this._logger.log(Ho.Trace, `(WebSockets transport) data received. ${Go(t.data,this._logMessageContent)}.`), this.onreceive) try {
                                this.onreceive(t.data)
                            } catch (t) {
                                return void this._close(t)
                            }
                        }, i.onclose = t => {
                            if (a) this._close(t);
                            else {
                                let e = null;
                                e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", o(new Error(e))
                            }
                        }
                    }))
                }
                send(t) {
                    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(Ho.Trace, `(WebSockets transport) sending data. ${Go(t,this._logMessageContent)}.`), this._webSocket.send(t), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
                }
                stop() {
                    return this._webSocket && this._close(void 0), Promise.resolve()
                }
                _close(t) {
                    this._webSocket && (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), this._webSocket = void 0), this._logger.log(Ho.Trace, "(WebSockets transport) socket closed."), this.onclose && (!this._isCloseEvent(t) || !1 !== t.wasClean && 1e3 === t.code ? t instanceof Error ? this.onclose(t) : this.onclose() : this.onclose(new Error(`WebSocket closed with status code: ${t.code} (${t.reason||"no reason given"}).`)))
                }
                _isCloseEvent(t) {
                    return t && "boolean" == typeof t.wasClean && "number" == typeof t.code
                }
            }
            const Pi = 100;
            class Li {
                constructor(t, e = {}) {
                    if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, qo.isRequired(t, "url"), this._logger = Jo(e.logger), this.baseUrl = this._resolveUrl(t), (e = e || {}).logMessageContent = void 0 !== e.logMessageContent && e.logMessageContent, "boolean" != typeof e.withCredentials && void 0 !== e.withCredentials) throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
                    e.withCredentials = void 0 === e.withCredentials || e.withCredentials, e.timeout = void 0 === e.timeout ? 1e5 : e.timeout;
                    let r = null,
                        n = null;
                    if (Zo.isNode && void 0 !== S) {
                        const t = "function" == typeof __webpack_require__ ? __non_webpack_require__ : S;
                        r = t("ws"), n = t("eventsource")
                    }
                    Zo.isNode || "undefined" == typeof WebSocket || e.WebSocket ? Zo.isNode && !e.WebSocket && r && (e.WebSocket = r) : e.WebSocket = WebSocket, Zo.isNode || "undefined" == typeof EventSource || e.EventSource ? Zo.isNode && !e.EventSource && void 0 !== n && (e.EventSource = n) : e.EventSource = EventSource, this._httpClient = new Ei(e.httpClient || new hi(this._logger), e.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = e, this.onreceive = null, this.onclose = null
                }
                async start(t) {
                    if (t = t || Oi.Binary, qo.isIn(t, Oi, "transferFormat"), this._logger.log(Ho.Debug, `Starting connection with transfer format '${Oi[t]}'.`), "Disconnected" !== this._connectionState) return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
                    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(t), await this._startInternalPromise, "Disconnecting" === this._connectionState) {
                        const t = "Failed to start the HttpConnection before stop() was called.";
                        return this._logger.log(Ho.Error, t), await this._stopPromise, Promise.reject(new No(t))
                    }
                    if ("Connected" !== this._connectionState) {
                        const t = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                        return this._logger.log(Ho.Error, t), Promise.reject(new No(t))
                    }
                    this._connectionStarted = !0
                }
                send(t) {
                    return "Connected" !== this._connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new ji(this.transport)), this._sendQueue.send(t))
                }
                async stop(t) {
                    return "Disconnected" === this._connectionState ? (this._logger.log(Ho.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`), Promise.resolve()) : "Disconnecting" === this._connectionState ? (this._logger.log(Ho.Debug, `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = "Disconnecting", this._stopPromise = new Promise((t => {
                        this._stopPromiseResolver = t
                    })), await this._stopInternal(t), void await this._stopPromise)
                }
                async _stopInternal(t) {
                    this._stopError = t;
                    try {
                        await this._startInternalPromise
                    } catch (t) {}
                    if (this.transport) {
                        try {
                            await this.transport.stop()
                        } catch (t) {
                            this._logger.log(Ho.Error, `HttpConnection.transport.stop() threw error '${t}'.`), this._stopConnection()
                        }
                        this.transport = void 0
                    } else this._logger.log(Ho.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")
                }
                async _startInternal(t) {
                    let e = this.baseUrl;
                    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
                    try {
                        if (this._options.skipNegotiation) {
                            if (this._options.transport !== Si.WebSockets) throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                            this.transport = this._constructTransport(Si.WebSockets), await this._startTransport(e, t)
                        } else {
                            let r = null,
                                n = 0;
                            do {
                                if (r = await this._getNegotiationResponse(e), "Disconnecting" === this._connectionState || "Disconnected" === this._connectionState) throw new No("The connection was stopped during negotiation.");
                                if (r.error) throw new Error(r.error);
                                if (r.ProtocolVersion) throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                if (r.url && (e = r.url), r.accessToken) {
                                    const t = r.accessToken;
                                    this._accessTokenFactory = () => t, this._httpClient._accessToken = t, this._httpClient._accessTokenFactory = void 0
                                }
                                n++
                            } while (r.url && n < Pi);
                            if (n === Pi && r.url) throw new Error("Negotiate redirection limit exceeded.");
                            await this._createTransport(e, this._options.transport, r, t)
                        }
                        this.transport instanceof Ci && (this.features.inherentKeepAlive = !0), "Connecting" === this._connectionState && (this._logger.log(Ho.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected")
                    } catch (t) {
                        return this._logger.log(Ho.Error, "Failed to start the connection: " + t), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(t)
                    }
                }
                async _getNegotiationResponse(t) {
                    const e = {},
                        [r, n] = ei();
                    e[r] = n;
                    const o = this._resolveNegotiateUrl(t);
                    this._logger.log(Ho.Debug, `Sending negotiation request: ${o}.`);
                    try {
                        const t = await this._httpClient.post(o, {
                            content: "",
                            headers: {
                                ...e,
                                ...this._options.headers
                            },
                            timeout: this._options.timeout,
                            withCredentials: this._options.withCredentials
                        });
                        if (200 !== t.statusCode) return Promise.reject(new Error(`Unexpected status code returned from negotiate '${t.statusCode}'`));
                        const r = JSON.parse(t.content);
                        return (!r.negotiateVersion || r.negotiateVersion < 1) && (r.connectionToken = r.connectionId), r
                    } catch (t) {
                        let e = "Failed to complete negotiation with the server: " + t;
                        return t instanceof jo && 404 === t.statusCode && (e += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(Ho.Error, e), Promise.reject(new Wo(e))
                    }
                }
                _createConnectUrl(t, e) {
                    return e ? t + (-1 === t.indexOf("?") ? "?" : "&") + `id=${e}` : t
                }
                async _createTransport(t, e, r, n) {
                    let o = this._createConnectUrl(t, r.connectionToken);
                    if (this._isITransport(e)) return this._logger.log(Ho.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = e, await this._startTransport(o, n), void(this.connectionId = r.connectionId);
                    const i = [],
                        s = r.availableTransports || [];
                    let a = r;
                    for (const r of s) {
                        const s = this._resolveTransportOrError(r, e, n);
                        if (s instanceof Error) i.push(`${r.transport} failed:`), i.push(s);
                        else if (this._isITransport(s)) {
                            if (this.transport = s, !a) {
                                try {
                                    a = await this._getNegotiationResponse(t)
                                } catch (t) {
                                    return Promise.reject(t)
                                }
                                o = this._createConnectUrl(t, a.connectionToken)
                            }
                            try {
                                return await this._startTransport(o, n), void(this.connectionId = a.connectionId)
                            } catch (t) {
                                if (this._logger.log(Ho.Error, `Failed to start the transport '${r.transport}': ${t}`), a = void 0, i.push(new Uo(`${r.transport} failed: ${t}`, Si[r.transport])), "Connecting" !== this._connectionState) {
                                    const t = "Failed to select transport before stop() was called.";
                                    return this._logger.log(Ho.Debug, t), Promise.reject(new No(t))
                                }
                            }
                        }
                    }
                    return i.length > 0 ? Promise.reject(new Bo(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."))
                }
                _constructTransport(t) {
                    switch (t) {
                        case Si.WebSockets:
                            if (!this._options.WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
                            return new Ii(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
                        case Si.ServerSentEvents:
                            if (!this._options.EventSource) throw new Error("'EventSource' is not supported in your environment.");
                            return new Ai(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
                        case Si.LongPolling:
                            return new Ci(this._httpClient, this._logger, this._options);
                        default:
                            throw new Error(`Unknown transport: ${t}.`)
                    }
                }
                _startTransport(t, e) {
                    return this.transport.onreceive = this.onreceive, this.transport.onclose = t => this._stopConnection(t), this.transport.connect(t, e)
                }
                _resolveTransportOrError(t, e, r) {
                    const n = Si[t.transport];
                    if (null == n) return this._logger.log(Ho.Debug, `Skipping transport '${t.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${t.transport}' because it is not supported by this client.`);
                    if (!Ri(e, n)) return this._logger.log(Ho.Debug, `Skipping transport '${Si[n]}' because it was disabled by the client.`), new Do(`'${Si[n]}' is disabled by the client.`, n);
                    if (!(t.transferFormats.map((t => Oi[t])).indexOf(r) >= 0)) return this._logger.log(Ho.Debug, `Skipping transport '${Si[n]}' because it does not support the requested transfer format '${Oi[r]}'.`), new Error(`'${Si[n]}' does not support ${Oi[r]}.`);
                    if (n === Si.WebSockets && !this._options.WebSocket || n === Si.ServerSentEvents && !this._options.EventSource) return this._logger.log(Ho.Debug, `Skipping transport '${Si[n]}' because it is not supported in your environment.'`), new Mo(`'${Si[n]}' is not supported in your environment.`, n);
                    this._logger.log(Ho.Debug, `Selecting transport '${Si[n]}'.`);
                    try {
                        return this._constructTransport(n)
                    } catch (t) {
                        return t
                    }
                }
                _isITransport(t) {
                    return t && "object" == typeof t && "connect" in t
                }
                _stopConnection(t) {
                    if (this._logger.log(Ho.Debug, `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`), this.transport = void 0, t = this._stopError || t, this._stopError = void 0, "Disconnected" !== this._connectionState) {
                        if ("Connecting" === this._connectionState) throw this._logger.log(Ho.Warning, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`);
                        if ("Disconnecting" === this._connectionState && this._stopPromiseResolver(), t ? this._logger.log(Ho.Error, `Connection disconnected with error '${t}'.`) : this._logger.log(Ho.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((t => {
                                this._logger.log(Ho.Error, `TransportSendQueue.stop() threw error '${t}'.`)
                            })), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
                            this._connectionStarted = !1;
                            try {
                                this.onclose && this.onclose(t)
                            } catch (e) {
                                this._logger.log(Ho.Error, `HttpConnection.onclose(${t}) threw error '${e}'.`)
                            }
                        }
                    } else this._logger.log(Ho.Debug, `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`)
                }
                _resolveUrl(t) {
                    if (0 === t.lastIndexOf("https://", 0) || 0 === t.lastIndexOf("http://", 0)) return t;
                    if (!Zo.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
                    const e = window.document.createElement("a");
                    return e.href = t, this._logger.log(Ho.Information, `Normalizing '${t}' to '${e.href}'.`), e.href
                }
                _resolveNegotiateUrl(t) {
                    const e = t.indexOf("?");
                    let r = t.substring(0, -1 === e ? t.length : e);
                    return "/" !== r[r.length - 1] && (r += "/"), r += "negotiate", r += -1 === e ? "" : t.substring(e), -1 === r.indexOf("negotiateVersion") && (r += -1 === e ? "?" : "&", r += "negotiateVersion=" + this._negotiateVersion), r
                }
            }

            function Ri(t, e) {
                return !t || 0 != (e & t)
            }
            class ji {
                constructor(t) {
                    this._transport = t, this._buffer = [], this._executing = !0, this._sendBufferedData = new xi, this._transportResult = new xi, this._sendLoopPromise = this._sendLoop()
                }
                send(t) {
                    return this._bufferData(t), this._transportResult || (this._transportResult = new xi), this._transportResult.promise
                }
                stop() {
                    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise
                }
                _bufferData(t) {
                    if (this._buffer.length && typeof this._buffer[0] != typeof t) throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof t}`);
                    this._buffer.push(t), this._sendBufferedData.resolve()
                }
                async _sendLoop() {
                    for (;;) {
                        if (await this._sendBufferedData.promise, !this._executing) {
                            this._transportResult && this._transportResult.reject("Connection stopped.");
                            break
                        }
                        this._sendBufferedData = new xi;
                        const t = this._transportResult;
                        this._transportResult = void 0;
                        const e = "string" == typeof this._buffer[0] ? this._buffer.join("") : ji._concatBuffers(this._buffer);
                        this._buffer.length = 0;
                        try {
                            await this._transport.send(e), t.resolve()
                        } catch (e) {
                            t.reject(e)
                        }
                    }
                }
                static _concatBuffers(t) {
                    const e = t.map((t => t.byteLength)).reduce(((t, e) => t + e)),
                        r = new Uint8Array(e);
                    let n = 0;
                    for (const e of t) r.set(new Uint8Array(e), n), n += e.byteLength;
                    return r.buffer
                }
            }
            class xi {
                constructor() {
                    this.promise = new Promise(((t, e) => [this._resolver, this._rejecter] = [t, e]))
                }
                resolve() {
                    this._resolver()
                }
                reject(t) {
                    this._rejecter(t)
                }
            }
            const Ni = "json";
            class Mi {
                constructor() {
                    this.name = Ni, this.version = 1, this.transferFormat = Oi.Text
                }
                parseMessages(t, e) {
                    if ("string" != typeof t) throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                    if (!t) return [];
                    null === e && (e = zo.instance);
                    const r = pi.parse(t),
                        n = [];
                    for (const t of r) {
                        const r = JSON.parse(t);
                        if ("number" != typeof r.type) throw new Error("Invalid payload.");
                        switch (r.type) {
                            case di.Invocation:
                                this._isInvocationMessage(r);
                                break;
                            case di.StreamItem:
                                this._isStreamItemMessage(r);
                                break;
                            case di.Completion:
                                this._isCompletionMessage(r);
                                break;
                            case di.Ping:
                            case di.Close:
                                break;
                            default:
                                e.log(Ho.Information, "Unknown message type '" + r.type + "' ignored.");
                                continue
                        }
                        n.push(r)
                    }
                    return n
                }
                writeMessage(t) {
                    return pi.write(JSON.stringify(t))
                }
                _isInvocationMessage(t) {
                    this._assertNotEmptyString(t.target, "Invalid payload for Invocation message."), void 0 !== t.invocationId && this._assertNotEmptyString(t.invocationId, "Invalid payload for Invocation message.")
                }
                _isStreamItemMessage(t) {
                    if (this._assertNotEmptyString(t.invocationId, "Invalid payload for StreamItem message."), void 0 === t.item) throw new Error("Invalid payload for StreamItem message.")
                }
                _isCompletionMessage(t) {
                    if (t.result && t.error) throw new Error("Invalid payload for Completion message.");
                    !t.result && t.error && this._assertNotEmptyString(t.error, "Invalid payload for Completion message."), this._assertNotEmptyString(t.invocationId, "Invalid payload for Completion message.")
                }
                _assertNotEmptyString(t, e) {
                    if ("string" != typeof t || "" === t) throw new Error(e)
                }
            }
            const Di = {
                trace: Ho.Trace,
                debug: Ho.Debug,
                info: Ho.Information,
                information: Ho.Information,
                warn: Ho.Warning,
                warning: Ho.Warning,
                error: Ho.Error,
                critical: Ho.Critical,
                none: Ho.None
            };

            function Ui(t) {
                const e = Di[t.toLowerCase()];
                if (void 0 !== e) return e;
                throw new Error(`Unknown log level: ${t}`)
            }
            class Wi {
                configureLogging(t) {
                    if (qo.isRequired(t, "logging"), Bi(t)) this.logger = t;
                    else if ("string" == typeof t) {
                        const e = Ui(t);
                        this.logger = new ti(e)
                    } else this.logger = new ti(t);
                    return this
                }
                withUrl(t, e) {
                    return qo.isRequired(t, "url"), qo.isNotEmpty(t, "url"), this.url = t, this.httpConnectionOptions = "object" == typeof e ? {
                        ...this.httpConnectionOptions,
                        ...e
                    } : {
                        ...this.httpConnectionOptions,
                        transport: e
                    }, this
                }
                withHubProtocol(t) {
                    return qo.isRequired(t, "protocol"), this.protocol = t, this
                }
                withAutomaticReconnect(t) {
                    if (this.reconnectPolicy) throw new Error("A reconnectPolicy has already been set.");
                    return t ? Array.isArray(t) ? this.reconnectPolicy = new Ti(t) : this.reconnectPolicy = t : this.reconnectPolicy = new Ti, this
                }
                build() {
                    const t = this.httpConnectionOptions || {};
                    if (void 0 === t.logger && (t.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                    const e = new Li(this.url, t);
                    return mi.create(e, this.logger || zo.instance, this.protocol || new Mi, this.reconnectPolicy)
                }
            }

            function Bi(t) {
                return void 0 !== t.log
            }

            function $i(t) {
                return e(this, void 0, void 0, (function*() {
                    var e;
                    return t && null !== (e = yield t()) && void 0 !== e ? e : ""
                }))
            }
            const Fi = ({
                builder: r = new Wi,
                hubEndpoint: n,
                appUrl: o,
                logger: i,
                getToken: s
            }) => {
                if (!n || !o) throw new Error("The AppUrl and HubEndpoint must be defined in order to use SignalR communications");
                const a = r.withUrl(new URL(n, o).href, {
                    accessTokenFactory: () => e(void 0, void 0, void 0, (function*() {
                        return (yield $i(s)).replace("Bearer ", "")
                    }))
                }).withAutomaticReconnect();
                return i && a.configureLogging({
                    log: (e, r) => {
                        var n, o;
                        switch (e) {
                            case Ho.Information:
                            case Ho.Trace:
                            case Ho.Debug:
                            case Ho.Warning:
                                null === (n = i.debug) || void 0 === n || n.call(i, {
                                    category: "SignalRHttpClient",
                                    message: `HubConnection ${r}`
                                });
                                break;
                            case Ho.Error:
                            case Ho.Critical:
                                null === (o = i.error) || void 0 === o || o.call(i, {
                                    category: "SignalRHttpClient",
                                    message: `Handler Error: HubConnection ${r}`,
                                    errorCode: t.ErrorCodes.Communication_Default,
                                    error: new Error(r)
                                })
                        }
                    }
                }), a.build()
            };
            var Hi, zi, Vi, qi, Zi, Gi, Xi, Ki;
            const Qi = "moduleservices/debugger/requestshub",
                Ji = "",
                Yi = "SignalRHttpClient";
            class ts {
                constructor({
                    appUrl: t,
                    localeHeader: e = Ji,
                    getLocale: r,
                    setLocale: o,
                    logger: i,
                    getToken: s
                }) {
                    Hi.add(this), zi.set(this, void 0), Vi.set(this, void 0), qi.set(this, void 0), Zi.set(this, void 0), Gi.set(this, void 0), Xi.set(this, void 0), n(this, Gi, Pn(t), "f"), n(this, zi, e, "f"), n(this, Vi, r, "f"), n(this, qi, o, "f"), n(this, Zi, i, "f"), n(this, Xi, s, "f")
                }
                executeRequest(n) {
                    return e(this, arguments, void 0, (function*({
                        url: e,
                        payload: n,
                        headers: i,
                        contentType: s = m.FormUrlEncoded,
                        useLocaleInfo: c = !1,
                        responseHandler: l,
                        hubConnectionBuilder: u = new Wi
                    }) {
                        var h, p, f, d, g, y, v, _, b, T, w, E, S, O;
                        null === (p = null === (h = r(this, Zi, "f")) || void 0 === h ? void 0 : h.setActiveSpanAsNonAggregable) || void 0 === p || p.call(h);
                        const k = Fi({
                                builder: u,
                                hubEndpoint: Qi,
                                appUrl: r(this, Gi, "f"),
                                logger: r(this, Zi, "f"),
                                getToken: r(this, Xi, "f")
                            }),
                            C = c ? null === (f = r(this, Vi, "f")) || void 0 === f ? void 0 : f.call(this) : void 0,
                            A = Object.assign(Object.assign(Object.assign({}, i), C ? {
                                [r(this, zi, "f")]: C
                            } : {}), On({
                                payload: n,
                                headers: i
                            }) ? {
                                "content-type": s
                            } : {});
                        try {
                            const i = n ? Cn({
                                payload: n,
                                contentType: s
                            }) : void 0;
                            yield k.start();
                            const u = yield k.invoke("ExecuteRequest", new URL(e, r(this, Gi, "f")).pathname, i, A);
                            yield k.stop(), null === (g = null === (d = r(this, Zi, "f")) || void 0 === d ? void 0 : d.debug) || void 0 === g || g.call(d, {
                                category: Yi,
                                message: `ExecuteRequest ${e}`
                            });
                            const h = Ln(null == u ? void 0 : u.ResponseBody, r(this, Zi, "f"), Yi);
                            if (200 !== (null == u ? void 0 : u.ResponseStatusCode)) {
                                const t = null !== (_ = null === (v = null === (y = null == u ? void 0 : u.ResponseStatusCode) || void 0 === y ? void 0 : y.toString) || void 0 === v ? void 0 : v.call(y)) && void 0 !== _ ? _ : "",
                                    e = a(t);
                                throw new o(null !== (T = null === (b = null == h ? void 0 : h.exception) || void 0 === b ? void 0 : b.message) && void 0 !== T ? T : "Network Error", null !== (E = null === (w = null == h ? void 0 : h.exception) || void 0 === w ? void 0 : w.errorCode) && void 0 !== E ? E : e, t, h, Yi)
                            }
                            if (c && r(this, qi, "f") && (null == u ? void 0 : u.ResponseHeaders) && In({
                                    responseHeaders: u.ResponseHeaders,
                                    localeHeader: r(this, zi, "f"),
                                    currentLocale: C,
                                    setLocale: r(this, qi, "f")
                                }), "function" == typeof l) try {
                                l({
                                    data: h,
                                    responseHeaders: null == u ? void 0 : u.ResponseHeaders
                                })
                            } catch (n) {
                                null === (O = null === (S = r(this, Zi, "f")) || void 0 === S ? void 0 : S.error) || void 0 === O || O.call(S, {
                                    category: Yi,
                                    message: `ExecuteRequest ${e}`,
                                    errorCode: t.ErrorCodes.Communication_Default,
                                    error: n
                                })
                            }
                            return h
                        } catch (t) {
                            throw yield null == k ? void 0 : k.stop(), r(this, Hi, "m", Ki).call(this, t, e)
                        }
                    }))
                }
            }
            var es, rs, ns;
            zi = new WeakMap, Vi = new WeakMap, qi = new WeakMap, Zi = new WeakMap, Gi = new WeakMap, Xi = new WeakMap, Hi = new WeakSet, Ki = function(e, n) {
                var i, s, c, l;
                let u, h = t.ErrorCodes.Communication_Default;
                return e instanceof o ? (h = a(null !== (i = e.status) && void 0 !== i ? i : ""), u = e) : u = new o(`ExecuteRequest ${n}`, h, void 0, void 0, Yi), null === (c = null === (s = r(this, Zi, "f")) || void 0 === s ? void 0 : s.error) || void 0 === c || c.call(s, {
                    category: Yi,
                    message: `ExecuteRequest ${n} - ${null!==(l=null==e?void 0:e.message)&&void 0!==l?l:""}`,
                    errorCode: h,
                    error: e
                }), u
            };
            const os = ({
                appUrl: t,
                localeHeader: e,
                getLocale: r,
                setLocale: n,
                logger: o,
                getToken: i
            }) => new ts({
                appUrl: t,
                localeHeader: e,
                getLocale: r,
                setLocale: n,
                logger: o,
                getToken: i
            });
            class is {
                constructor({
                    appUrl: t,
                    localeHeader: e,
                    getLocale: r,
                    setLocale: o,
                    logger: i,
                    getToken: s,
                    signalRClientInstance: a = os({
                        appUrl: t,
                        localeHeader: e,
                        getLocale: r,
                        setLocale: o,
                        logger: i,
                        getToken: s
                    }),
                    alternateHttpClientInstance: c
                }) {
                    es.set(this, void 0), rs.set(this, void 0), ns.set(this, void 0), n(this, es, a, "f"), n(this, rs, c, "f"), n(this, ns, i, "f")
                }
                post(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        payload: e,
                        headers: n,
                        contentType: o,
                        timeout: i,
                        timeoutHandler: s,
                        useLocaleInfo: a,
                        responseHandler: c
                    }) {
                        const l = () => r(this, es, "f").executeRequest({
                            url: t,
                            payload: e,
                            headers: n,
                            contentType: o,
                            useLocaleInfo: a,
                            timeout: i,
                            timeoutHandler: s,
                            responseHandler: c
                        });
                        return xn(r(this, ns, "f"), "POST", l)
                    }))
                }
                get(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        responseType: o,
                        useLocaleInfo: i,
                        timeout: s,
                        timeoutHandler: a,
                        baseURL: c
                    }) {
                        return r(this, rs, "f").get({
                            url: t,
                            params: e,
                            headers: n,
                            responseType: o,
                            useLocaleInfo: i,
                            timeout: s,
                            timeoutHandler: a,
                            baseURL: c
                        })
                    }))
                }
                getResponseUrl(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        useLocaleInfo: o,
                        timeout: i,
                        timeoutHandler: s,
                        baseURL: a
                    }) {
                        return r(this, rs, "f").getResponseUrl({
                            url: t,
                            params: e,
                            headers: n,
                            useLocaleInfo: o,
                            timeout: i,
                            timeoutHandler: s,
                            baseURL: a
                        })
                    }))
                }
            }
            var ss, as, cs, ls, us, hs, ps, fs, ds, gs, ys, vs;
            es = new WeakMap, rs = new WeakMap, ns = new WeakMap;
            const _s = "HttpClientWithHealthCheck",
                ms = 1800,
                bs = "ping",
                Ts = 30;
            class ws {
                constructor(t, {
                    isHealthy: e = !1,
                    healthCheckIntervalInSeconds: r = ms,
                    healthCheckEndpoint: o = bs,
                    healingTimeoutDelayInSeconds: i = Ts,
                    healthCheckNeededPathFilter: s,
                    logger: a
                } = {}) {
                    ss.add(this), as.set(this, void 0), cs.set(this, void 0), ls.set(this, void 0), us.set(this, void 0), hs.set(this, void 0), ps.set(this, void 0), fs.set(this, void 0), n(this, as, t, "f"), n(this, cs, 1e3 * r, "f"), n(this, ls, o, "f"), n(this, us, i, "f"), n(this, hs, s, "f"), e && n(this, ps, Date.now(), "f"), n(this, fs, a, "f")
                }
                setHealthCheckInterval(t) {
                    n(this, cs, 1e3 * t, "f")
                }
                post(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        payload: e,
                        params: n,
                        headers: o,
                        contentType: i,
                        timeout: s,
                        timeoutHandler: a,
                        useLocaleInfo: c,
                        baseURL: l,
                        responseHandler: u
                    }) {
                        return r(this, ss, "m", vs).call(this, (s => r(this, as, "f").post({
                            url: t,
                            payload: e,
                            params: n,
                            headers: o,
                            contentType: i,
                            timeout: s,
                            timeoutHandler: a,
                            useLocaleInfo: c,
                            baseURL: l,
                            responseHandler: u
                        })), t, l, s)
                    }))
                }
                get(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        useLocaleInfo: o,
                        timeout: i,
                        timeoutHandler: s,
                        responseType: a,
                        baseURL: c
                    }) {
                        return r(this, ss, "m", vs).call(this, (i => r(this, as, "f").get({
                            url: t,
                            params: e,
                            headers: n,
                            useLocaleInfo: o,
                            timeout: i,
                            timeoutHandler: s,
                            responseType: a,
                            baseURL: c
                        })), t, c, i)
                    }))
                }
                getResponseUrl(t) {
                    return e(this, arguments, void 0, (function*({
                        url: t,
                        params: e,
                        headers: n,
                        useLocaleInfo: o,
                        timeout: i,
                        timeoutHandler: s,
                        baseURL: a
                    }) {
                        return r(this, ss, "m", vs).call(this, (i => r(this, as, "f").getResponseUrl({
                            url: t,
                            params: e,
                            headers: n,
                            useLocaleInfo: o,
                            timeout: i,
                            timeoutHandler: s,
                            baseURL: a
                        })), t, a, i)
                    }))
                }
            }
            var Es, Ss, Os, ks;
            as = new WeakMap, cs = new WeakMap, ls = new WeakMap, us = new WeakMap, hs = new WeakMap, ps = new WeakMap, fs = new WeakMap, ss = new WeakSet, ds = function(t, e) {
                var n, o;
                const i = null === (o = null === (n = r(this, hs, "f")) || void 0 === n ? void 0 : n.isPathAcceptable(t, e)) || void 0 === o || o,
                    s = !r(this, ps, "f") || Date.now() - r(this, ps, "f") > r(this, cs, "f");
                return i && s
            }, gs = function() {
                return e(this, void 0, void 0, (function*() {
                    var t, e;
                    null === (e = null === (t = r(this, fs, "f")) || void 0 === t ? void 0 : t.debug) || void 0 === e || e.call(t, {
                        category: _s,
                        message: `Checking healthiness at ${r(this,ls,"f")}`
                    });
                    try {
                        return yield r(this, as, "f").get({
                            url: r(this, ls, "f"),
                            timeout: 2
                        }), n(this, ps, Date.now(), "f"), !0
                    } catch (t) {
                        return !1
                    }
                }))
            }, ys = function(t, n, o) {
                return e(this, void 0, void 0, (function*() {
                    return void 0 === o || !r(this, ss, "m", ds).call(this, t, n) || (yield r(this, ss, "m", gs).call(this)) ? o : o + r(this, us, "f")
                }))
            }, vs = function(t, o, i, s) {
                return e(this, void 0, void 0, (function*() {
                    const e = yield r(this, ss, "m", ys).call(this, o, i, s);
                    try {
                        return yield t(e)
                    } finally {
                        n(this, ps, Date.now(), "f")
                    }
                }))
            };
            class Cs {
                constructor({
                    acceptionRules: t = [],
                    rejectionRules: e = []
                } = {}) {
                    Es.add(this), Ss.set(this, void 0), Os.set(this, void 0), n(this, Ss, t, "f"), n(this, Os, e, "f")
                }
                isPathAcceptable(t, e) {
                    const n = (e ? `${e}/${t}` : t).replace(/\/+/g, "/"),
                        o = 0 === r(this, Ss, "f").length || r(this, Ss, "f").some((t => r(this, Es, "m", ks).call(this, t, n))),
                        i = r(this, Os, "f").some((t => r(this, Es, "m", ks).call(this, t, n)));
                    return o && !i
                }
            }
            Ss = new WeakMap, Os = new WeakMap, Es = new WeakSet, ks = function(t, e) {
                return t instanceof RegExp ? t.test(e) : !!t && e.startsWith(t)
            };
            const As = "1.9.3";
            t.CommunicationError = o, t.ContentType = m, t.DebuggerHttpClient = is, t.FetchHttpClient = lo, t.HttpClient = lo, t.HttpClientWithHealthCheck = ws, t.LoggerHttpClient = uo, t.NativeHttpClient = Ro, t.PathFilter = Cs, t.Version = As, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    }(0, O.exports);
    var k, C, A = O.exports,
        I = {},
        P = {
            exports: {}
        };

    function L() {
        return k || (k = 1, function(t, e) {
            ! function(t) {
                var e;
                t.FeatureKeys = void 0, (e = t.FeatureKeys || (t.FeatureKeys = {})).WebHttpClientForNative = "WebHttpClientForNative", e.OpenTelemetryTraces = "OpenTelemetryTraces", e.NoInstrumentationFactoryLogs = "NoInstrumentationFactoryLogs", e.WriteLogsOnConsoles = "WriteLogsOnConsoles", e.ServiceWorkerTraces = "ServiceWorkerTraces", e.EnableOTLV2TraceFormat = "EnableOTLV2TraceFormat";
                const r = {
                    ServiceWorkerTraces: "true",
                    EnableOTLV2TraceFormat: "true"
                };

                function n() {
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== E) return E;
                    if ("undefined" != typeof globalThis) return globalThis;
                    if ("undefined" != typeof self) return self;
                    throw new Error("unable to locate global object")
                }
                const o = "ft-",
                    i = n().sessionStorage,
                    s = [];
                class a {
                    static readValue(t, e = i) {
                        var r;
                        return null !== (r = null == e ? void 0 : e.getItem(this.getFeatureKey(t))) && void 0 !== r ? r : void 0
                    }
                    static isEnabled(t, {
                        featuresStorage: e = i,
                        features: n = s,
                        defaultValues: o = r
                    } = {}) {
                        var a;
                        const c = o[t],
                            l = null !== (a = this.readValue(t, e)) && void 0 !== a ? a : c,
                            u = "true" === (null == l ? void 0 : l.toLowerCase()),
                            h = u !== ("true" === (null == c ? void 0 : c.toLowerCase()));
                        return h && !n.includes(t) ? (console.warn(`FeaturesManager: Experimental flag "${t}" is overridden with value "${l}"`), n.push(t)) : !h && n.includes(t) && n.splice(n.indexOf(t), 1), u
                    }
                }
                a.getFeatureKey = t => `${o}${t}`;
                const c = "0.4.3";
                t.FeaturesManager = a, t.Version = c, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e)
        }(0, P.exports)), P.exports
    }! function(t) {
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            function(t, e, r) {
                function n(t, e, r, n) {
                    function o(t) {
                        return t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))
                    }
                    return new(r || (r = Promise))((function(r, i) {
                        function s(t) {
                            try {
                                c(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? r(t.value) : o(t.value).then(s, a)
                        }
                        c((n = n.apply(t, e || [])).next())
                    }))
                }

                function o(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                }

                function i(t, e, r, n, o) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Visibility = t.Version = t.Tracer = t.SpanKind = t.Logger = t.LogType = t.Log = t.KnownAttributes = t.InstrumentationFactory = void 0, "function" == typeof SuppressedError && SuppressedError;
                var s = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {},
                    a = "1.9.0",
                    c = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

                function l(t) {
                    var e = new Set([t]),
                        r = new Set,
                        n = t.match(c);
                    if (!n) return function() {
                        return !1
                    };
                    var o = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (null != o.prerelease) return function(e) {
                        return e === t
                    };

                    function i(t) {
                        return r.add(t), !1
                    }

                    function s(t) {
                        return e.add(t), !0
                    }
                    return function(t) {
                        if (e.has(t)) return !0;
                        if (r.has(t)) return !1;
                        var n = t.match(c);
                        if (!n) return i(t);
                        var a = {
                            major: +n[1],
                            minor: +n[2],
                            patch: +n[3],
                            prerelease: n[4]
                        };
                        return null != a.prerelease || o.major !== a.major ? i(t) : 0 === o.major ? o.minor === a.minor && o.patch <= a.patch ? s(t) : i(t) : o.minor <= a.minor ? s(t) : i(t)
                    }
                }
                var u = l(a),
                    h = a.split(".")[0],
                    p = Symbol.for("opentelemetry.js.api." + h),
                    f = s;

                function d(t, e, r, n) {
                    var o;
                    void 0 === n && (n = !1);
                    var i = f[p] = null !== (o = f[p]) && void 0 !== o ? o : {
                        version: a
                    };
                    if (!n && i[t]) {
                        var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
                        return r.error(s.stack || s.message), !1
                    }
                    return i.version !== a ? (s = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + t + " does not match previously registered API v" + a), r.error(s.stack || s.message), !1) : (i[t] = e, r.debug("@opentelemetry/api: Registered a global for " + t + " v" + a + "."), !0)
                }

                function g(t) {
                    var e, r, n = null === (e = f[p]) || void 0 === e ? void 0 : e.version;
                    if (n && u(n)) return null === (r = f[p]) || void 0 === r ? void 0 : r[t]
                }

                function y(t, e) {
                    e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + a + ".");
                    var r = f[p];
                    r && delete r[t]
                }
                var v, _ = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    m = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    b = function() {
                        function t(t) {
                            this._namespace = t.namespace || "DiagComponentLogger"
                        }
                        return t.prototype.debug = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return T("debug", this._namespace, t)
                        }, t.prototype.error = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return T("error", this._namespace, t)
                        }, t.prototype.info = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return T("info", this._namespace, t)
                        }, t.prototype.warn = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return T("warn", this._namespace, t)
                        }, t.prototype.verbose = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return T("verbose", this._namespace, t)
                        }, t
                    }();

                function T(t, e, r) {
                    var n = g("diag");
                    if (n) return r.unshift(e), n[t].apply(n, m([], _(r), !1))
                }

                function w(t, e) {
                    function r(r, n) {
                        var o = e[r];
                        return "function" == typeof o && t >= n ? o.bind(e) : function() {}
                    }
                    return t < v.NONE ? t = v.NONE : t > v.ALL && (t = v.ALL), e = e || {}, {
                        error: r("error", v.ERROR),
                        warn: r("warn", v.WARN),
                        info: r("info", v.INFO),
                        debug: r("debug", v.DEBUG),
                        verbose: r("verbose", v.VERBOSE)
                    }
                }! function(t) {
                    t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL"
                }(v || (v = {}));
                var S = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    O = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    k = "diag",
                    C = function() {
                        function t() {
                            function t(t) {
                                return function() {
                                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                    var n = g("diag");
                                    if (n) return n[t].apply(n, O([], S(e), !1))
                                }
                            }
                            var e = this,
                                r = function(t, r) {
                                    var n, o, i;
                                    if (void 0 === r && (r = {
                                            logLevel: v.INFO
                                        }), t === e) {
                                        var s = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                                        return e.error(null !== (n = s.stack) && void 0 !== n ? n : s.message), !1
                                    }
                                    "number" == typeof r && (r = {
                                        logLevel: r
                                    });
                                    var a = g("diag"),
                                        c = w(null !== (o = r.logLevel) && void 0 !== o ? o : v.INFO, t);
                                    if (a && !r.suppressOverrideMessage) {
                                        var l = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                                        a.warn("Current logger will be overwritten from " + l), c.warn("Current logger will overwrite one already registered from " + l)
                                    }
                                    return d("diag", c, e, !0)
                                };
                            e.setLogger = r, e.disable = function() {
                                y(k, e)
                            }, e.createComponentLogger = function(t) {
                                return new b(t)
                            }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
                        }
                        return t.instance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t
                    }(),
                    A = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    I = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    },
                    P = function() {
                        function t(t) {
                            this._entries = t ? new Map(t) : new Map
                        }
                        return t.prototype.getEntry = function(t) {
                            var e = this._entries.get(t);
                            if (e) return Object.assign({}, e)
                        }, t.prototype.getAllEntries = function() {
                            return Array.from(this._entries.entries()).map((function(t) {
                                var e = A(t, 2);
                                return [e[0], e[1]]
                            }))
                        }, t.prototype.setEntry = function(e, r) {
                            var n = new t(this._entries);
                            return n._entries.set(e, r), n
                        }, t.prototype.removeEntry = function(e) {
                            var r = new t(this._entries);
                            return r._entries.delete(e), r
                        }, t.prototype.removeEntries = function() {
                            for (var e, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                            var i = new t(this._entries);
                            try {
                                for (var s = I(n), a = s.next(); !a.done; a = s.next()) {
                                    var c = a.value;
                                    i._entries.delete(c)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    a && !a.done && (r = s.return) && r.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return i
                        }, t.prototype.clear = function() {
                            return new t
                        }, t
                    }(),
                    L = Symbol("BaggageEntryMetadata"),
                    R = C.instance();

                function j(t) {
                    return void 0 === t && (t = {}), new P(new Map(Object.entries(t)))
                }

                function x(t) {
                    return "string" != typeof t && (R.error("Cannot create baggage metadata from unknown type: " + typeof t), t = ""), {
                        __TYPE__: L,
                        toString: function() {
                            return t
                        }
                    }
                }

                function N(t) {
                    return Symbol.for(t)
                }
                var M, D, U = new(function() {
                        function t(e) {
                            var r = this;
                            r._currentContext = e ? new Map(e) : new Map, r.getValue = function(t) {
                                return r._currentContext.get(t)
                            }, r.setValue = function(e, n) {
                                var o = new t(r._currentContext);
                                return o._currentContext.set(e, n), o
                            }, r.deleteValue = function(e) {
                                var n = new t(r._currentContext);
                                return n._currentContext.delete(e), n
                            }
                        }
                        return t
                    }()),
                    W = (D = function(t, e) {
                        return D = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        }, D(t, e)
                    }, function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        D(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }),
                    B = function() {
                        function t() {}
                        return t.prototype.createGauge = function(t, e) {
                            return J
                        }, t.prototype.createHistogram = function(t, e) {
                            return Y
                        }, t.prototype.createCounter = function(t, e) {
                            return Q
                        }, t.prototype.createUpDownCounter = function(t, e) {
                            return tt
                        }, t.prototype.createObservableGauge = function(t, e) {
                            return rt
                        }, t.prototype.createObservableCounter = function(t, e) {
                            return et
                        }, t.prototype.createObservableUpDownCounter = function(t, e) {
                            return nt
                        }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
                    }(),
                    $ = function() {
                        function t() {}
                        return t
                    }(),
                    F = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.add = function(t, e) {}, e
                    }($),
                    H = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.add = function(t, e) {}, e
                    }($),
                    z = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.record = function(t, e) {}, e
                    }($),
                    V = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e.prototype.record = function(t, e) {}, e
                    }($),
                    q = function() {
                        function t() {}
                        return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
                    }(),
                    Z = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(q),
                    G = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(q),
                    X = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return W(e, t), e
                    }(q),
                    K = new B,
                    Q = new F,
                    J = new z,
                    Y = new V,
                    tt = new H,
                    et = new Z,
                    rt = new G,
                    nt = new X,
                    ot = {
                        get: function(t, e) {
                            if (null != t) return t[e]
                        },
                        keys: function(t) {
                            return null == t ? [] : Object.keys(t)
                        }
                    },
                    it = {
                        set: function(t, e, r) {
                            null != t && (t[e] = r)
                        }
                    },
                    st = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    at = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    ct = function() {
                        function t() {}
                        return t.prototype.active = function() {
                            return U
                        }, t.prototype.with = function(t, e, r) {
                            for (var n = [], o = 3; o < arguments.length; o++) n[o - 3] = arguments[o];
                            return e.call.apply(e, at([r], st(n), !1))
                        }, t.prototype.bind = function(t, e) {
                            return e
                        }, t.prototype.enable = function() {
                            return this
                        }, t.prototype.disable = function() {
                            return this
                        }, t
                    }(),
                    lt = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    ut = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    ht = "context",
                    pt = new ct,
                    ft = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalContextManager = function(t) {
                            return d(ht, t, C.instance())
                        }, t.prototype.active = function() {
                            return this._getContextManager().active()
                        }, t.prototype.with = function(t, e, r) {
                            for (var n, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                            return (n = this._getContextManager()).with.apply(n, ut([t, e, r], lt(o), !1))
                        }, t.prototype.bind = function(t, e) {
                            return this._getContextManager().bind(t, e)
                        }, t.prototype._getContextManager = function() {
                            return g(ht) || pt
                        }, t.prototype.disable = function() {
                            this._getContextManager().disable(), y(ht, C.instance())
                        }, t
                    }();
                ! function(t) {
                    t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED"
                }(M || (M = {}));
                var dt = "0000000000000000",
                    gt = "00000000000000000000000000000000",
                    yt = {
                        traceId: gt,
                        spanId: dt,
                        traceFlags: M.NONE
                    },
                    vt = function() {
                        function t(t) {
                            void 0 === t && (t = yt), this._spanContext = t
                        }
                        return t.prototype.spanContext = function() {
                            return this._spanContext
                        }, t.prototype.setAttribute = function(t, e) {
                            return this
                        }, t.prototype.setAttributes = function(t) {
                            return this
                        }, t.prototype.addEvent = function(t, e) {
                            return this
                        }, t.prototype.addLink = function(t) {
                            return this
                        }, t.prototype.addLinks = function(t) {
                            return this
                        }, t.prototype.setStatus = function(t) {
                            return this
                        }, t.prototype.updateName = function(t) {
                            return this
                        }, t.prototype.end = function(t) {}, t.prototype.isRecording = function() {
                            return !1
                        }, t.prototype.recordException = function(t, e) {}, t
                    }(),
                    _t = N("OpenTelemetry Context Key SPAN");

                function mt(t) {
                    return t.getValue(_t) || void 0
                }

                function bt() {
                    return mt(ft.getInstance().active())
                }

                function Tt(t, e) {
                    return t.setValue(_t, e)
                }

                function wt(t) {
                    return t.deleteValue(_t)
                }

                function Et(t, e) {
                    return Tt(t, new vt(e))
                }

                function St(t) {
                    var e;
                    return null === (e = mt(t)) || void 0 === e ? void 0 : e.spanContext()
                }
                var Ot = /^([0-9a-f]{32})$/i,
                    kt = /^[0-9a-f]{16}$/i;

                function Ct(t) {
                    return Ot.test(t) && t !== gt
                }

                function At(t) {
                    return kt.test(t) && t !== dt
                }

                function It(t) {
                    return Ct(t.traceId) && At(t.spanId)
                }

                function Pt(t) {
                    return new vt(t)
                }
                var Lt = ft.getInstance(),
                    Rt = function() {
                        function t() {}
                        return t.prototype.startSpan = function(t, e, r) {
                            if (void 0 === r && (r = Lt.active()), Boolean(null == e ? void 0 : e.root)) return new vt;
                            var n = r && St(r);
                            return jt(n) && It(n) ? new vt(n) : new vt
                        }, t.prototype.startActiveSpan = function(t, e, r, n) {
                            var o, i, s;
                            if (!(arguments.length < 2)) {
                                2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = r) : (o = e, i = r, s = n);
                                var a = null != i ? i : Lt.active(),
                                    c = this.startSpan(t, o, a),
                                    l = Tt(a, c);
                                return Lt.with(l, s, void 0, c)
                            }
                        }, t
                    }();

                function jt(t) {
                    return "object" == typeof t && "string" == typeof t.spanId && "string" == typeof t.traceId && "number" == typeof t.traceFlags
                }
                var xt, Nt, Mt, Dt = new Rt,
                    Ut = function() {
                        function t(t, e, r, n) {
                            this._provider = t, this.name = e, this.version = r, this.options = n
                        }
                        return t.prototype.startSpan = function(t, e, r) {
                            return this._getTracer().startSpan(t, e, r)
                        }, t.prototype.startActiveSpan = function(t, e, r, n) {
                            var o = this._getTracer();
                            return Reflect.apply(o.startActiveSpan, o, arguments)
                        }, t.prototype._getTracer = function() {
                            if (this._delegate) return this._delegate;
                            var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                            return t ? (this._delegate = t, this._delegate) : Dt
                        }, t
                    }(),
                    Wt = new(function() {
                        function t() {}
                        return t.prototype.getTracer = function(t, e, r) {
                            return new Rt
                        }, t
                    }()),
                    Bt = function() {
                        function t() {}
                        return t.prototype.getTracer = function(t, e, r) {
                            var n;
                            return null !== (n = this.getDelegateTracer(t, e, r)) && void 0 !== n ? n : new Ut(this, t, e, r)
                        }, t.prototype.getDelegate = function() {
                            var t;
                            return null !== (t = this._delegate) && void 0 !== t ? t : Wt
                        }, t.prototype.setDelegate = function(t) {
                            this._delegate = t
                        }, t.prototype.getDelegateTracer = function(t, e, r) {
                            var n;
                            return null === (n = this._delegate) || void 0 === n ? void 0 : n.getTracer(t, e, r)
                        }, t
                    }();
                (function(t) {
                    t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
                })(xt || (xt = {})),
                function(t) {
                    t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER"
                }(Nt || (Nt = {})),
                function(t) {
                    t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR"
                }(Mt || (Mt = {}));
                var $t = ft.getInstance(),
                    Ft = C.instance(),
                    Ht = new(function() {
                        function t() {}
                        return t.prototype.getMeter = function(t, e, r) {
                            return K
                        }, t
                    }()),
                    zt = "metrics",
                    Vt = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalMeterProvider = function(t) {
                            return d(zt, t, C.instance())
                        }, t.prototype.getMeterProvider = function() {
                            return g(zt) || Ht
                        }, t.prototype.getMeter = function(t, e, r) {
                            return this.getMeterProvider().getMeter(t, e, r)
                        }, t.prototype.disable = function() {
                            y(zt, C.instance())
                        }, t
                    }().getInstance(),
                    qt = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                            return t
                        }, t.prototype.fields = function() {
                            return []
                        }, t
                    }(),
                    Zt = N("OpenTelemetry Baggage Key");

                function Gt(t) {
                    return t.getValue(Zt) || void 0
                }

                function Xt() {
                    return Gt(ft.getInstance().active())
                }

                function Kt(t, e) {
                    return t.setValue(Zt, e)
                }

                function Qt(t) {
                    return t.deleteValue(Zt)
                }
                var Jt = "propagation",
                    Yt = new qt,
                    te = function() {
                        function t() {
                            this.createBaggage = j, this.getBaggage = Gt, this.getActiveBaggage = Xt, this.setBaggage = Kt, this.deleteBaggage = Qt
                        }
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalPropagator = function(t) {
                            return d(Jt, t, C.instance())
                        }, t.prototype.inject = function(t, e, r) {
                            return void 0 === r && (r = it), this._getGlobalPropagator().inject(t, e, r)
                        }, t.prototype.extract = function(t, e, r) {
                            return void 0 === r && (r = ot), this._getGlobalPropagator().extract(t, e, r)
                        }, t.prototype.fields = function() {
                            return this._getGlobalPropagator().fields()
                        }, t.prototype.disable = function() {
                            y(Jt, C.instance())
                        }, t.prototype._getGlobalPropagator = function() {
                            return g(Jt) || Yt
                        }, t
                    }().getInstance(),
                    ee = "trace",
                    re = function() {
                        function t() {
                            this._proxyTracerProvider = new Bt, this.wrapSpanContext = Pt, this.isSpanContextValid = It, this.deleteSpan = wt, this.getSpan = mt, this.getActiveSpan = bt, this.getSpanContext = St, this.setSpan = Tt, this.setSpanContext = Et
                        }
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalTracerProvider = function(t) {
                            var e = d(ee, this._proxyTracerProvider, C.instance());
                            return e && this._proxyTracerProvider.setDelegate(t), e
                        }, t.prototype.getTracerProvider = function() {
                            return g(ee) || this._proxyTracerProvider
                        }, t.prototype.getTracer = function(t, e) {
                            return this.getTracerProvider().getTracer(t, e)
                        }, t.prototype.disable = function() {
                            y(ee, C.instance()), this._proxyTracerProvider = new Bt
                        }, t
                    }().getInstance(),
                    ne = N("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

                function oe(t) {
                    return t.setValue(ne, !0)
                }

                function ie(t) {
                    return !0 === t.getValue(ne)
                }
                var se = "=",
                    ae = ";",
                    ce = ",",
                    le = "baggage",
                    ue = 180,
                    he = 4096,
                    pe = 8192,
                    fe = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    };

                function de(t) {
                    return t.reduce((function(t, e) {
                        var r = "" + t + ("" !== t ? ce : "") + e;
                        return r.length > pe ? t : r
                    }), "")
                }

                function ge(t) {
                    return t.getAllEntries().map((function(t) {
                        var e = fe(t, 2),
                            r = e[0],
                            n = e[1],
                            o = encodeURIComponent(r) + "=" + encodeURIComponent(n.value);
                        return void 0 !== n.metadata && (o += ae + n.metadata.toString()), o
                    }))
                }

                function ye(t) {
                    var e = t.split(ae);
                    if (!(e.length <= 0)) {
                        var r = e.shift();
                        if (r) {
                            var n = r.indexOf(se);
                            if (!(n <= 0)) {
                                var o, i = decodeURIComponent(r.substring(0, n).trim()),
                                    s = decodeURIComponent(r.substring(n + 1).trim());
                                return e.length > 0 && (o = x(e.join(ae))), {
                                    key: i,
                                    value: s,
                                    metadata: o
                                }
                            }
                        }
                    }
                }
                var ve = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e, r) {
                            var n = te.getBaggage(t);
                            if (n && !ie(t)) {
                                var o = de(ge(n).filter((function(t) {
                                    return t.length <= he
                                })).slice(0, ue));
                                o.length > 0 && r.set(e, le, o)
                            }
                        }, t.prototype.extract = function(t, e, r) {
                            var n = r.get(e, le),
                                o = Array.isArray(n) ? n.join(ce) : n;
                            if (!o) return t;
                            var i = {};
                            return 0 === o.length ? t : (o.split(ce).forEach((function(t) {
                                var e = ye(t);
                                if (e) {
                                    var r = {
                                        value: e.value
                                    };
                                    e.metadata && (r.metadata = e.metadata), i[e.key] = r
                                }
                            })), 0 === Object.entries(i).length ? t : te.setBaggage(t, te.createBaggage(i)))
                        }, t.prototype.fields = function() {
                            return [le]
                        }, t
                    }(),
                    _e = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    },
                    me = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    };

                function be(t) {
                    var e, r, n = {};
                    if ("object" != typeof t || null == t) return n;
                    try {
                        for (var o = _e(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
                            var s = me(i.value, 2),
                                a = s[0],
                                c = s[1];
                            Te(a) ? we(c) ? Array.isArray(c) ? n[a] = c.slice() : n[a] = c : Ft.warn("Invalid attribute value set for key: " + a) : Ft.warn("Invalid attribute key: " + a)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n
                }

                function Te(t) {
                    return "string" == typeof t && t.length > 0
                }

                function we(t) {
                    return null == t || (Array.isArray(t) ? Ee(t) : Se(t))
                }

                function Ee(t) {
                    var e, r, n;
                    try {
                        for (var o = _e(t), i = o.next(); !i.done; i = o.next()) {
                            var s = i.value;
                            if (null != s) {
                                if (!n) {
                                    if (Se(s)) {
                                        n = typeof s;
                                        continue
                                    }
                                    return !1
                                }
                                if (typeof s !== n) return !1
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return !0
                }

                function Se(t) {
                    switch (typeof t) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0
                    }
                    return !1
                }

                function Oe() {
                    return function(t) {
                        Ft.error(ke(t))
                    }
                }

                function ke(t) {
                    return "string" == typeof t ? t : JSON.stringify(Ce(t))
                }

                function Ce(t) {
                    for (var e = {}, r = t; null !== r;) Object.getOwnPropertyNames(r).forEach((function(t) {
                        if (!e[t]) {
                            var n = r[t];
                            n && (e[t] = String(n))
                        }
                    })), r = Object.getPrototypeOf(r);
                    return e
                }
                var Ae, Ie = Oe();

                function Pe(t) {
                    try {
                        Ie(t)
                    } catch (t) {}
                }! function(t) {
                    t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio"
                }(Ae || (Ae = {}));
                var Le = ",",
                    Re = ["OTEL_SDK_DISABLED"];

                function je(t) {
                    return Re.indexOf(t) > -1
                }
                var xe = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

                function Ne(t) {
                    return xe.indexOf(t) > -1
                }
                var Me = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

                function De(t) {
                    return Me.indexOf(t) > -1
                }
                var Ue = 1 / 0,
                    We = 128,
                    Be = 128,
                    $e = 128,
                    Fe = {
                        OTEL_SDK_DISABLED: !1,
                        CONTAINER_NAME: "",
                        ECS_CONTAINER_METADATA_URI_V4: "",
                        ECS_CONTAINER_METADATA_URI: "",
                        HOSTNAME: "",
                        KUBERNETES_SERVICE_HOST: "",
                        NAMESPACE: "",
                        OTEL_BSP_EXPORT_TIMEOUT: 3e4,
                        OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
                        OTEL_BSP_MAX_QUEUE_SIZE: 2048,
                        OTEL_BSP_SCHEDULE_DELAY: 5e3,
                        OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
                        OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
                        OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
                        OTEL_BLRP_SCHEDULE_DELAY: 5e3,
                        OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
                        OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
                        OTEL_EXPORTER_JAEGER_ENDPOINT: "",
                        OTEL_EXPORTER_JAEGER_PASSWORD: "",
                        OTEL_EXPORTER_JAEGER_USER: "",
                        OTEL_EXPORTER_OTLP_ENDPOINT: "",
                        OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
                        OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
                        OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
                        OTEL_EXPORTER_OTLP_HEADERS: "",
                        OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
                        OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
                        OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
                        OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
                        OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
                        OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
                        OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
                        OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
                        OTEL_LOG_LEVEL: v.INFO,
                        OTEL_NO_PATCH_MODULES: [],
                        OTEL_PROPAGATORS: ["tracecontext", "baggage"],
                        OTEL_RESOURCE_ATTRIBUTES: "",
                        OTEL_SERVICE_NAME: "",
                        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ue,
                        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: We,
                        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
                        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
                        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: Be,
                        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: $e,
                        OTEL_TRACES_EXPORTER: "",
                        OTEL_TRACES_SAMPLER: Ae.ParentBasedAlwaysOn,
                        OTEL_TRACES_SAMPLER_ARG: "",
                        OTEL_LOGS_EXPORTER: "",
                        OTEL_EXPORTER_OTLP_INSECURE: "",
                        OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
                        OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
                        OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
                        OTEL_EXPORTER_OTLP_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_COMPRESSION: "",
                        OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
                        OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
                        OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
                        OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
                        OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
                        OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
                        OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
                        OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
                        OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
                        OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
                        OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
                        OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
                        OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
                    };

                function He(t, e, r) {
                    if (void 0 !== r[t]) {
                        var n = String(r[t]);
                        e[t] = "true" === n.toLowerCase()
                    }
                }

                function ze(t, e, r, n, o) {
                    if (void 0 === n && (n = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== r[t]) {
                        var i = Number(r[t]);
                        isNaN(i) || (e[t] = i < n ? n : i > o ? o : i)
                    }
                }

                function Ve(t, e, r, n) {
                    void 0 === n && (n = Le);
                    var o = r[t];
                    "string" == typeof o && (e[t] = o.split(n).map((function(t) {
                        return t.trim()
                    })))
                }
                var qe = {
                    ALL: v.ALL,
                    VERBOSE: v.VERBOSE,
                    DEBUG: v.DEBUG,
                    INFO: v.INFO,
                    WARN: v.WARN,
                    ERROR: v.ERROR,
                    NONE: v.NONE
                };

                function Ze(t, e, r) {
                    var n = r[t];
                    if ("string" == typeof n) {
                        var o = qe[n.toUpperCase()];
                        null != o && (e[t] = o)
                    }
                }

                function Ge(t) {
                    var e = {};
                    for (var r in Fe) {
                        var n = r;
                        if ("OTEL_LOG_LEVEL" === n) Ze(n, e, t);
                        else if (je(n)) He(n, e, t);
                        else if (Ne(n)) ze(n, e, t);
                        else if (De(n)) Ve(n, e, t);
                        else {
                            var o = t[n];
                            null != o && (e[n] = String(o))
                        }
                    }
                    return e
                }
                var Xe = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {};

                function Ke() {
                    var t = Ge(Xe);
                    return Object.assign({}, Fe, t)
                }

                function Qe() {
                    return Ge(Xe)
                }
                var Je = performance,
                    Ye = "1.25.0";

                function tr(t) {
                    for (var e = {}, r = t.length, n = 0; n < r; n++) {
                        var o = t[n];
                        o && (e[String(o).toUpperCase().replace(/[-.]/g, "_")] = o)
                    }
                    return e
                }
                var er, rr = "exception.type",
                    nr = "exception.message",
                    or = "exception.stacktrace",
                    ir = "http.response_content_length",
                    sr = "http.response_content_length_uncompressed",
                    ar = rr,
                    cr = nr,
                    lr = or,
                    ur = ir,
                    hr = sr,
                    pr = tr(["aws.lambda.invoked_arn", "db.system", "db.connection_string", "db.user", "db.jdbc.driver_classname", "db.name", "db.statement", "db.operation", "db.mssql.instance_name", "db.cassandra.keyspace", "db.cassandra.page_size", "db.cassandra.consistency_level", "db.cassandra.table", "db.cassandra.idempotence", "db.cassandra.speculative_execution_count", "db.cassandra.coordinator.id", "db.cassandra.coordinator.dc", "db.hbase.namespace", "db.redis.database_index", "db.mongodb.collection", "db.sql.table", rr, nr, or, "exception.escaped", "faas.trigger", "faas.execution", "faas.document.collection", "faas.document.operation", "faas.document.time", "faas.document.name", "faas.time", "faas.cron", "faas.coldstart", "faas.invoked_name", "faas.invoked_provider", "faas.invoked_region", "net.transport", "net.peer.ip", "net.peer.port", "net.peer.name", "net.host.ip", "net.host.port", "net.host.name", "net.host.connection.type", "net.host.connection.subtype", "net.host.carrier.name", "net.host.carrier.mcc", "net.host.carrier.mnc", "net.host.carrier.icc", "peer.service", "enduser.id", "enduser.role", "enduser.scope", "thread.id", "thread.name", "code.function", "code.namespace", "code.filepath", "code.lineno", "http.method", "http.url", "http.target", "http.host", "http.scheme", "http.status_code", "http.flavor", "http.user_agent", "http.request_content_length", "http.request_content_length_uncompressed", ir, sr, "http.server_name", "http.route", "http.client_ip", "aws.dynamodb.table_names", "aws.dynamodb.consumed_capacity", "aws.dynamodb.item_collection_metrics", "aws.dynamodb.provisioned_read_capacity", "aws.dynamodb.provisioned_write_capacity", "aws.dynamodb.consistent_read", "aws.dynamodb.projection", "aws.dynamodb.limit", "aws.dynamodb.attributes_to_get", "aws.dynamodb.index_name", "aws.dynamodb.select", "aws.dynamodb.global_secondary_indexes", "aws.dynamodb.local_secondary_indexes", "aws.dynamodb.exclusive_start_table", "aws.dynamodb.table_count", "aws.dynamodb.scan_forward", "aws.dynamodb.segment", "aws.dynamodb.total_segments", "aws.dynamodb.count", "aws.dynamodb.scanned_count", "aws.dynamodb.attribute_definitions", "aws.dynamodb.global_secondary_index_updates", "messaging.system", "messaging.destination", "messaging.destination_kind", "messaging.temp_destination", "messaging.protocol", "messaging.protocol_version", "messaging.url", "messaging.message_id", "messaging.conversation_id", "messaging.message_payload_size_bytes", "messaging.message_payload_compressed_size_bytes", "messaging.operation", "messaging.consumer_id", "messaging.rabbitmq.routing_key", "messaging.kafka.message_key", "messaging.kafka.consumer_group", "messaging.kafka.client_id", "messaging.kafka.partition", "messaging.kafka.tombstone", "rpc.system", "rpc.service", "rpc.method", "rpc.grpc.status_code", "rpc.jsonrpc.version", "rpc.jsonrpc.request_id", "rpc.jsonrpc.error_code", "rpc.jsonrpc.error_message", "message.type", "message.id", "message.compressed_size", "message.uncompressed_size"]),
                    fr = "process.runtime.name",
                    dr = "service.name",
                    gr = "telemetry.sdk.name",
                    yr = "telemetry.sdk.language",
                    vr = "telemetry.sdk.version",
                    _r = "webjs",
                    mr = ((er = {})[gr] = "opentelemetry", er[fr] = "browser", er[yr] = _r, er[vr] = Ye, er);

                function br(t) {}
                var Tr, wr = 9,
                    Er = 6,
                    Sr = Math.pow(10, Er),
                    Or = Math.pow(10, wr);

                function kr(t) {
                    var e = t / 1e3;
                    return [Math.trunc(e), Math.round(t % 1e3 * Sr)]
                }

                function Cr() {
                    var t = Je.timeOrigin;
                    if ("number" != typeof t) {
                        var e = Je;
                        t = e.timing && e.timing.fetchStart
                    }
                    return t
                }

                function Ar(t) {
                    return Nr(kr(Cr()), kr("number" == typeof t ? t : Je.now()))
                }

                function Ir(t) {
                    if (jr(t)) return t;
                    if ("number" == typeof t) return t < Cr() ? Ar(t) : kr(t);
                    if (t instanceof Date) return kr(t.getTime());
                    throw TypeError("Invalid input type")
                }

                function Pr(t, e) {
                    var r = e[0] - t[0],
                        n = e[1] - t[1];
                    return n < 0 && (r -= 1, n += Or), [r, n]
                }

                function Lr(t) {
                    var e = wr,
                        r = "" + "0".repeat(e) + t[1] + "Z",
                        n = r.substr(r.length - e - 1);
                    return new Date(1e3 * t[0]).toISOString().replace("000Z", n)
                }

                function Rr(t) {
                    return t[0] * Or + t[1]
                }

                function jr(t) {
                    return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
                }

                function xr(t) {
                    return jr(t) || "number" == typeof t || t instanceof Date
                }

                function Nr(t, e) {
                    var r = [t[0] + e[0], t[1] + e[1]];
                    return r[1] >= Or && (r[1] -= Or, r[0] += 1), r
                }! function(t) {
                    t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED"
                }(Tr || (Tr = {}));
                var Mr = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    },
                    Dr = function() {
                        function t(t) {
                            var e;
                            void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map((function(t) {
                                return "function" == typeof t.fields ? t.fields() : []
                            })).reduce((function(t, e) {
                                return t.concat(e)
                            }), [])))
                        }
                        return t.prototype.inject = function(t, e, r) {
                            var n, o;
                            try {
                                for (var i = Mr(this._propagators), s = i.next(); !s.done; s = i.next()) {
                                    var a = s.value;
                                    try {
                                        a.inject(t, e, r)
                                    } catch (t) {
                                        Ft.warn("Failed to inject with " + a.constructor.name + ". Err: " + t.message)
                                    }
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    s && !s.done && (o = i.return) && o.call(i)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }, t.prototype.extract = function(t, e, r) {
                            return this._propagators.reduce((function(t, n) {
                                try {
                                    return n.extract(t, e, r)
                                } catch (t) {
                                    Ft.warn("Failed to inject with " + n.constructor.name + ". Err: " + t.message)
                                }
                                return t
                            }), t)
                        }, t.prototype.fields = function() {
                            return this._fields.slice()
                        }, t
                    }(),
                    Ur = "[_0-9a-z-*/]",
                    Wr = new RegExp("^(?:[a-z]" + Ur + "{0,255}|[a-z0-9]" + Ur + "{0,240}@[a-z]" + Ur + "{0,13})$"),
                    Br = /^[ -~]{0,255}[!-~]$/,
                    $r = /,|=/;

                function Fr(t) {
                    return Wr.test(t)
                }

                function Hr(t) {
                    return Br.test(t) && !$r.test(t)
                }
                var zr = 32,
                    Vr = 512,
                    qr = ",",
                    Zr = "=",
                    Gr = function() {
                        function t(t) {
                            this._internalState = new Map, t && this._parse(t)
                        }
                        return t.prototype.set = function(t, e) {
                            var r = this._clone();
                            return r._internalState.has(t) && r._internalState.delete(t), r._internalState.set(t, e), r
                        }, t.prototype.unset = function(t) {
                            var e = this._clone();
                            return e._internalState.delete(t), e
                        }, t.prototype.get = function(t) {
                            return this._internalState.get(t)
                        }, t.prototype.serialize = function() {
                            var t = this;
                            return this._keys().reduce((function(e, r) {
                                return e.push(r + Zr + t.get(r)), e
                            }), []).join(qr)
                        }, t.prototype._parse = function(t) {
                            t.length > Vr || (this._internalState = t.split(qr).reverse().reduce((function(t, e) {
                                var r = e.trim(),
                                    n = r.indexOf(Zr);
                                if (-1 !== n) {
                                    var o = r.slice(0, n),
                                        i = r.slice(n + 1, e.length);
                                    Fr(o) && Hr(i) && t.set(o, i)
                                }
                                return t
                            }), new Map), this._internalState.size > zr && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, zr))))
                        }, t.prototype._keys = function() {
                            return Array.from(this._internalState.keys()).reverse()
                        }, t.prototype._clone = function() {
                            var e = new t;
                            return e._internalState = new Map(this._internalState), e
                        }, t
                    }(),
                    Xr = "traceparent",
                    Kr = "tracestate",
                    Qr = "00",
                    Jr = new RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");

                function Yr(t) {
                    var e = Jr.exec(t);
                    return e ? "00" === e[1] && e[5] ? null : {
                        traceId: e[2],
                        spanId: e[3],
                        traceFlags: parseInt(e[4], 16)
                    } : null
                }
                var tn = function() {
                        function t() {}
                        return t.prototype.inject = function(t, e, r) {
                            var n = re.getSpanContext(t);
                            if (n && !ie(t) && It(n)) {
                                var o = Qr + "-" + n.traceId + "-" + n.spanId + "-0" + Number(n.traceFlags || M.NONE).toString(16);
                                r.set(e, Xr, o), n.traceState && r.set(e, Kr, n.traceState.serialize())
                            }
                        }, t.prototype.extract = function(t, e, r) {
                            var n = r.get(e, Xr);
                            if (!n) return t;
                            var o = Array.isArray(n) ? n[0] : n;
                            if ("string" != typeof o) return t;
                            var i = Yr(o);
                            if (!i) return t;
                            i.isRemote = !0;
                            var s = r.get(e, Kr);
                            if (s) {
                                var a = Array.isArray(s) ? s.join(",") : s;
                                i.traceState = new Gr("string" == typeof a ? a : void 0)
                            }
                            return re.setSpanContext(t, i)
                        }, t.prototype.fields = function() {
                            return [Xr, Kr]
                        }, t
                    }(),
                    en = "[object Object]",
                    rn = "[object Null]",
                    nn = "[object Undefined]",
                    on = Function.prototype.toString,
                    sn = on.call(Object),
                    an = pn(Object.getPrototypeOf, Object),
                    cn = Object.prototype,
                    ln = cn.hasOwnProperty,
                    un = Symbol ? Symbol.toStringTag : void 0,
                    hn = cn.toString;

                function pn(t, e) {
                    return function(r) {
                        return t(e(r))
                    }
                }

                function fn(t) {
                    if (!dn(t) || gn(t) !== en) return !1;
                    var e = an(t);
                    if (null === e) return !0;
                    var r = ln.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && on.call(r) === sn
                }

                function dn(t) {
                    return null != t && "object" == typeof t
                }

                function gn(t) {
                    return null == t ? void 0 === t ? nn : rn : un && un in Object(t) ? yn(t) : vn(t)
                }

                function yn(t) {
                    var e = ln.call(t, un),
                        r = t[un],
                        n = !1;
                    try {
                        t[un] = void 0, n = !0
                    } catch (t) {}
                    var o = hn.call(t);
                    return n && (e ? t[un] = r : delete t[un]), o
                }

                function vn(t) {
                    return hn.call(t)
                }
                var _n = 20;

                function mn() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var r = t.shift(), n = new WeakMap; t.length > 0;) r = Tn(r, t.shift(), 0, n);
                    return r
                }

                function bn(t) {
                    return En(t) ? t.slice() : t
                }

                function Tn(t, e, r, n) {
                    var o;
                    if (void 0 === r && (r = 0), !(r > _n)) {
                        if (r++, kn(t) || kn(e) || Sn(e)) o = bn(e);
                        else if (En(t)) {
                            if (o = t.slice(), En(e))
                                for (var i = 0, s = e.length; i < s; i++) o.push(bn(e[i]));
                            else if (On(e))
                                for (i = 0, s = (a = Object.keys(e)).length; i < s; i++) o[c = a[i]] = bn(e[c])
                        } else if (On(t))
                            if (On(e)) {
                                if (!Cn(t, e)) return e;
                                var a;
                                for (o = Object.assign({}, t), i = 0, s = (a = Object.keys(e)).length; i < s; i++) {
                                    var c, l = e[c = a[i]];
                                    if (kn(l)) void 0 === l ? delete o[c] : o[c] = l;
                                    else {
                                        var u = o[c],
                                            h = l;
                                        if (wn(t, c, n) || wn(e, c, n)) delete o[c];
                                        else {
                                            if (On(u) && On(h)) {
                                                var p = n.get(u) || [],
                                                    f = n.get(h) || [];
                                                p.push({
                                                    obj: t,
                                                    key: c
                                                }), f.push({
                                                    obj: e,
                                                    key: c
                                                }), n.set(u, p), n.set(h, f)
                                            }
                                            o[c] = Tn(o[c], l, r, n)
                                        }
                                    }
                                }
                            } else o = e;
                        return o
                    }
                }

                function wn(t, e, r) {
                    for (var n = r.get(t[e]) || [], o = 0, i = n.length; o < i; o++) {
                        var s = n[o];
                        if (s.key === e && s.obj === t) return !0
                    }
                    return !1
                }

                function En(t) {
                    return Array.isArray(t)
                }

                function Sn(t) {
                    return "function" == typeof t
                }

                function On(t) {
                    return !kn(t) && !En(t) && !Sn(t) && "object" == typeof t
                }

                function kn(t) {
                    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
                }

                function Cn(t, e) {
                    return !(!fn(t) || !fn(e))
                }
                var An = function(t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                        r = e && t[e],
                        n = 0;
                    if (r) return r.call(t);
                    if (t && "number" == typeof t.length) return {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                };

                function In(t, e) {
                    return "string" == typeof e ? t === e : !!t.match(e)
                }

                function Pn(t, e) {
                    var r, n;
                    if (!e) return !1;
                    try {
                        for (var o = An(e), i = o.next(); !i.done; i = o.next())
                            if (In(t, i.value)) return !0
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (n = o.return) && n.call(o)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return !1
                }
                var Ln = function() {
                        function t() {
                            var t = this;
                            this._promise = new Promise((function(e, r) {
                                t._resolve = e, t._reject = r
                            }))
                        }
                        return Object.defineProperty(t.prototype, "promise", {
                            get: function() {
                                return this._promise
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.resolve = function(t) {
                            this._resolve(t)
                        }, t.prototype.reject = function(t) {
                            this._reject(t)
                        }, t
                    }(),
                    Rn = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    jn = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    xn = function() {
                        function t(t, e) {
                            this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new Ln
                        }
                        return Object.defineProperty(t.prototype, "isCalled", {
                            get: function() {
                                return this._isCalled
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "promise", {
                            get: function() {
                                return this._deferred.promise
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.call = function() {
                            for (var t, e = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                            if (!this._isCalled) {
                                this._isCalled = !0;
                                try {
                                    Promise.resolve((t = this._callback).call.apply(t, jn([this._that], Rn(r), !1))).then((function(t) {
                                        return e._deferred.resolve(t)
                                    }), (function(t) {
                                        return e._deferred.reject(t)
                                    }))
                                } catch (t) {
                                    this._deferred.reject(t)
                                }
                            }
                            return this._deferred.promise
                        }, t
                    }();
                class Nn {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ar();
                        this.instant = t
                    }
                    static toISOString(t) {
                        return Lr(t.instant)
                    }
                    static toNanoSeconds(t) {
                        return Rr(t.instant)
                    }
                }
                var Mn, Dn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== E ? E : "undefined" != typeof self ? self : {},
                    Un = {
                        exports: {}
                    },
                    Wn = {
                        exports: {}
                    };

                function Bn() {
                    return Mn || (Mn = 1, function(t, e) {
                        ! function(e, r) {
                            t.exports = r()
                        }(0, (function() {
                            function t(t) {
                                return !isNaN(parseFloat(t)) && isFinite(t)
                            }

                            function e(t) {
                                return t.charAt(0).toUpperCase() + t.substring(1)
                            }

                            function r(t) {
                                return function() {
                                    return this[t]
                                }
                            }
                            var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                                o = ["columnNumber", "lineNumber"],
                                i = ["fileName", "functionName", "source"],
                                s = ["args"],
                                a = ["evalOrigin"],
                                c = n.concat(o, i, s, a);

                            function l(t) {
                                if (t)
                                    for (var r = 0; r < c.length; r++) void 0 !== t[c[r]] && this["set" + e(c[r])](t[c[r]])
                            }
                            l.prototype = {
                                getArgs: function() {
                                    return this.args
                                },
                                setArgs: function(t) {
                                    if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                                    this.args = t
                                },
                                getEvalOrigin: function() {
                                    return this.evalOrigin
                                },
                                setEvalOrigin: function(t) {
                                    if (t instanceof l) this.evalOrigin = t;
                                    else {
                                        if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                        this.evalOrigin = new l(t)
                                    }
                                },
                                toString: function() {
                                    var t = this.getFileName() || "",
                                        e = this.getLineNumber() || "",
                                        r = this.getColumnNumber() || "",
                                        n = this.getFunctionName() || "";
                                    return this.getIsEval() ? t ? "[eval] (" + t + ":" + e + ":" + r + ")" : "[eval]:" + e + ":" + r : n ? n + " (" + t + ":" + e + ":" + r + ")" : t + ":" + e + ":" + r
                                }
                            }, l.fromString = function(t) {
                                var e = t.indexOf("("),
                                    r = t.lastIndexOf(")"),
                                    n = t.substring(0, e),
                                    o = t.substring(e + 1, r).split(","),
                                    i = t.substring(r + 1);
                                if (0 === i.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                    a = s[1],
                                    c = s[2],
                                    u = s[3];
                                return new l({
                                    functionName: n,
                                    args: o || void 0,
                                    fileName: a,
                                    lineNumber: c || void 0,
                                    columnNumber: u || void 0
                                })
                            };
                            for (var u = 0; u < n.length; u++) l.prototype["get" + e(n[u])] = r(n[u]), l.prototype["set" + e(n[u])] = function(t) {
                                return function(e) {
                                    this[t] = Boolean(e)
                                }
                            }(n[u]);
                            for (var h = 0; h < o.length; h++) l.prototype["get" + e(o[h])] = r(o[h]), l.prototype["set" + e(o[h])] = function(e) {
                                return function(r) {
                                    if (!t(r)) throw new TypeError(e + " must be a Number");
                                    this[e] = Number(r)
                                }
                            }(o[h]);
                            for (var p = 0; p < i.length; p++) l.prototype["get" + e(i[p])] = r(i[p]), l.prototype["set" + e(i[p])] = function(t) {
                                return function(e) {
                                    this[t] = String(e)
                                }
                            }(i[p]);
                            return l
                        }))
                    }(Wn)), Wn.exports
                }! function(t, e) {
                    ! function(e, r) {
                        t.exports = r(Bn())
                    }(0, (function(t) {
                        var e = /(^|@)\S+:\d+/,
                            r = /^\s*at .*(\S+:\d+|\(native\))/m,
                            n = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(t) {
                                if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
                                if (t.stack && t.stack.match(r)) return this.parseV8OrIE(t);
                                if (t.stack) return this.parseFFOrSafari(t);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(t) {
                                if (-1 === t.indexOf(":")) return [t];
                                var e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
                                return [e[1], e[2] || void 0, e[3] || void 0]
                            },
                            parseV8OrIE: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !!t.match(r)
                                }), this).map((function(e) {
                                    e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var r = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        n = r.match(/ (\(.+\)$)/);
                                    r = n ? r.replace(n[0], "") : r;
                                    var o = this.extractLocation(n ? n[1] : r),
                                        i = n && r || void 0,
                                        s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                    return new t({
                                        functionName: i,
                                        fileName: s,
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !t.match(n)
                                }), this).map((function(e) {
                                    if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({
                                        functionName: e
                                    });
                                    var r = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        n = e.match(r),
                                        o = n && n[1] ? n[1] : void 0,
                                        i = this.extractLocation(e.replace(r, ""));
                                    return new t({
                                        functionName: o,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseOpera: function(t) {
                                return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                            },
                            parseOpera9: function(e) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), o = [], i = 2, s = n.length; i < s; i += 2) {
                                    var a = r.exec(n[i]);
                                    a && o.push(new t({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera10: function(e) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), o = [], i = 0, s = n.length; i < s; i += 2) {
                                    var a = r.exec(n[i]);
                                    a && o.push(new t({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera11: function(r) {
                                return r.stack.split("\n").filter((function(t) {
                                    return !!t.match(e) && !t.match(/^Error created at/)
                                }), this).map((function(e) {
                                    var r, n = e.split("@"),
                                        o = this.extractLocation(n.pop()),
                                        i = n.shift() || "",
                                        s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (r = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var a = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                                    return new t({
                                        functionName: s,
                                        args: a,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            }
                        }
                    }))
                }(Un);
                var $n, Fn, Hn, zn, Vn, qn, Zn, Gn = Un.exports;
                class Xn {
                    constructor(t) {
                        this.name = t.name, this.message = t.message, t.stack && (this.stack = o($n, $n, "m", Fn).call($n, t))
                    }
                }
                $n = Xn, Fn = function(t) {
                    const e = Gn.parse(t),
                        r = t,
                        n = (null == r ? void 0 : r.extraStack) ? `ExtraStack: ${r.extraStack}` : "",
                        o = e.map((t => t.source)).join("\n");
                    return `${t.name}: ${t.message}\n${o}\n${n}`
                };
                class Kn {
                    constructor(t) {
                        let {
                            type: e,
                            category: r,
                            message: n,
                            error: o,
                            visibility: i,
                            timestamp: s = new Nn,
                            span: a,
                            errorCode: c,
                            attributes: l
                        } = t;
                        this.type = e, this.category = r, this.message = n, o && (this.error = new Xn(o)), this.visibility = i, this.timestamp = s, this.span = a, this.errorCode = c, this.attributes = l
                    }
                }
                t.Log = Kn;
                const Qn = 5,
                    Jn = 10;
                class Yn {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
                        Hn.add(this), zn.set(this, void 0), i(this, zn, t, "f")
                    }
                    closeCircuit(t) {
                        o(this, zn, "f").delete(t)
                    }
                    run(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            const r = o(this, zn, "f").get(t);
                            return void 0 === r ? o(this, Hn, "m", qn).call(this, t, e) : r.iterationsUntilRetry > 0 ? (r.iterationsUntilRetry--, 2) : o(this, Hn, "m", Zn).call(this, t, r, e)
                        }))
                    }
                }
                zn = new WeakMap, Hn = new WeakSet, Vn = function(t) {
                    o(this, zn, "f").set(t, {
                        retriesFailed: 0,
                        iterationsUntilRetry: Qn
                    })
                }, qn = function(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            return yield e(), 0
                        } catch (e) {
                            return o(this, Hn, "m", Vn).call(this, t), console.debug(`Circuit breaker ${t} was opened: ${e}`), 1
                        }
                    }))
                }, Zn = function(t, e, r) {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            return yield r(), this.closeCircuit(t), console.debug(`Circuit breaker ${t} was closed`), 0
                        } catch (t) {
                            return e.retriesFailed++, e.iterationsUntilRetry = Math.min(e.retriesFailed * Qn, Jn), 1
                        }
                    }))
                };
                const to = new Error("request for lock canceled");
                var eo = function(t, e, r, n) {
                    function o(t) {
                        return t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))
                    }
                    return new(r || (r = Promise))((function(r, i) {
                        function s(t) {
                            try {
                                c(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? r(t.value) : o(t.value).then(s, a)
                        }
                        c((n = n.apply(t, e || [])).next())
                    }))
                };
                class ro {
                    constructor(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : to;
                        this._value = t, this._cancelError = e, this._queue = [], this._weightedWaiters = []
                    }
                    acquire() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
                        return new Promise(((r, n) => {
                            const o = {
                                    resolve: r,
                                    reject: n,
                                    weight: t,
                                    priority: e
                                },
                                i = oo(this._queue, (t => e <= t.priority)); - 1 === i && t <= this._value ? this._dispatchItem(o) : this._queue.splice(i + 1, 0, o)
                        }))
                    }
                    runExclusive(t) {
                        return eo(this, arguments, void 0, (function(t) {
                            var e = this;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return function*() {
                                const [o, i] = yield e.acquire(r, n);
                                try {
                                    return yield t(o)
                                } finally {
                                    i()
                                }
                            }()
                        }))
                    }
                    waitForUnlock() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
                        return this._couldLockImmediately(t, e) ? Promise.resolve() : new Promise((r => {
                            this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), no(this._weightedWaiters[t - 1], {
                                resolve: r,
                                priority: e
                            })
                        }))
                    }
                    isLocked() {
                        return this._value <= 0
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(t) {
                        this._value = t, this._dispatchQueue()
                    }
                    release() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
                        this._value += t, this._dispatchQueue()
                    }
                    cancel() {
                        this._queue.forEach((t => t.reject(this._cancelError))), this._queue = []
                    }
                    _dispatchQueue() {
                        for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
                    }
                    _dispatchItem(t) {
                        const e = this._value;
                        this._value -= t.weight, t.resolve([e, this._newReleaser(t.weight)])
                    }
                    _newReleaser(t) {
                        let e = !1;
                        return () => {
                            e || (e = !0, this.release(t))
                        }
                    }
                    _drainUnlockWaiters() {
                        if (0 === this._queue.length)
                            for (let t = this._value; t > 0; t--) {
                                const e = this._weightedWaiters[t - 1];
                                e && (e.forEach((t => t.resolve())), this._weightedWaiters[t - 1] = [])
                            } else {
                                const t = this._queue[0].priority;
                                for (let e = this._value; e > 0; e--) {
                                    const r = this._weightedWaiters[e - 1];
                                    if (!r) continue;
                                    const n = r.findIndex((e => e.priority <= t));
                                    (-1 === n ? r : r.splice(0, n)).forEach((t => t.resolve()))
                                }
                            }
                    }
                    _couldLockImmediately(t, e) {
                        return (0 === this._queue.length || this._queue[0].priority < e) && t <= this._value
                    }
                }

                function no(t, e) {
                    const r = oo(t, (t => e.priority <= t.priority));
                    t.splice(r + 1, 0, e)
                }

                function oo(t, e) {
                    for (let r = t.length - 1; r >= 0; r--)
                        if (e(t[r])) return r;
                    return -1
                }
                var io, so = function(t, e, r, n) {
                    function o(t) {
                        return t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))
                    }
                    return new(r || (r = Promise))((function(r, i) {
                        function s(t) {
                            try {
                                c(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? r(t.value) : o(t.value).then(s, a)
                        }
                        c((n = n.apply(t, e || [])).next())
                    }))
                };
                class ao {
                    constructor(t) {
                        this._semaphore = new ro(1, t)
                    }
                    acquire() {
                        return so(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return function*() {
                                const [, r] = yield t._semaphore.acquire(1, e);
                                return r
                            }()
                        }))
                    }
                    runExclusive(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return this._semaphore.runExclusive((() => t()), 1, e)
                    }
                    isLocked() {
                        return this._semaphore.isLocked()
                    }
                    waitForUnlock() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this._semaphore.waitForUnlock(1, t)
                    }
                    release() {
                        this._semaphore.isLocked() && this._semaphore.release()
                    }
                    cancel() {
                        return this._semaphore.cancel()
                    }
                }! function(t) {
                    t[t.Debug = 1] = "Debug", t[t.Info = 2] = "Info", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Trace = 5] = "Trace"
                }(io || (io = {}));
                const co = {
                    Debug: io.Debug,
                    Info: io.Info,
                    Warning: io.Warning,
                    Error: io.Error,
                    Trace: io.Trace
                };
                var lo = t.LogType = io;
                class uo {
                    constructor(t, e, r, n) {
                        this.logId = t, this.log = e, this.logType = r, this.transportId = n
                    }
                }
                const ho = "logger-offline-db",
                    po = "logs",
                    fo = "spans",
                    go = "byLogType",
                    yo = "byTransportId",
                    vo = "byAggregateSignature",
                    _o = "byParentId",
                    mo = "logType",
                    bo = "transportId",
                    To = "aggregateSignature",
                    wo = "parentId",
                    Eo = (t, e) => e.some((e => t instanceof e));
                let So, Oo;

                function ko() {
                    return So || (So = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
                }

                function Co() {
                    return Oo || (Oo = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
                }
                const Ao = new WeakMap,
                    Io = new WeakMap,
                    Po = new WeakMap,
                    Lo = new WeakMap,
                    Ro = new WeakMap;

                function jo(t) {
                    const e = new Promise(((e, r) => {
                        const n = () => {
                                t.removeEventListener("success", o), t.removeEventListener("error", i)
                            },
                            o = () => {
                                e(Wo(t.result)), n()
                            },
                            i = () => {
                                r(t.error), n()
                            };
                        t.addEventListener("success", o), t.addEventListener("error", i)
                    }));
                    return e.then((e => {
                        e instanceof IDBCursor && Ao.set(e, t)
                    })).catch((() => {})), Ro.set(e, t), e
                }

                function xo(t) {
                    if (Io.has(t)) return;
                    const e = new Promise(((e, r) => {
                        const n = () => {
                                t.removeEventListener("complete", o), t.removeEventListener("error", i), t.removeEventListener("abort", i)
                            },
                            o = () => {
                                e(), n()
                            },
                            i = () => {
                                r(t.error || new DOMException("AbortError", "AbortError")), n()
                            };
                        t.addEventListener("complete", o), t.addEventListener("error", i), t.addEventListener("abort", i)
                    }));
                    Io.set(t, e)
                }
                let No = {
                    get(t, e, r) {
                        if (t instanceof IDBTransaction) {
                            if ("done" === e) return Io.get(t);
                            if ("objectStoreNames" === e) return t.objectStoreNames || Po.get(t);
                            if ("store" === e) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return Wo(t[e])
                    },
                    set: (t, e, r) => (t[e] = r, !0),
                    has: (t, e) => t instanceof IDBTransaction && ("done" === e || "store" === e) || e in t
                };

                function Mo(t) {
                    No = t(No)
                }

                function Do(t) {
                    return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? Co().includes(t) ? function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return t.apply(Bo(this), r), Wo(Ao.get(this))
                    } : function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return Wo(t.apply(Bo(this), r))
                    } : function(e) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        const i = t.call(Bo(this), e, ...n);
                        return Po.set(i, e.sort ? e.sort() : [e]), Wo(i)
                    }
                }

                function Uo(t) {
                    return "function" == typeof t ? Do(t) : (t instanceof IDBTransaction && xo(t), Eo(t, ko()) ? new Proxy(t, No) : t)
                }

                function Wo(t) {
                    if (t instanceof IDBRequest) return jo(t);
                    if (Lo.has(t)) return Lo.get(t);
                    const e = Uo(t);
                    return e !== t && (Lo.set(t, e), Ro.set(e, t)), e
                }
                const Bo = t => Ro.get(t);

                function $o(t, e) {
                    let {
                        blocked: r,
                        upgrade: n,
                        blocking: o,
                        terminated: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const s = indexedDB.open(t, e),
                        a = Wo(s);
                    return n && s.addEventListener("upgradeneeded", (t => {
                        n(Wo(s.result), t.oldVersion, t.newVersion, Wo(s.transaction), t)
                    })), r && s.addEventListener("blocked", (t => r(t.oldVersion, t.newVersion, t))), a.then((t => {
                        i && t.addEventListener("close", (() => i())), o && t.addEventListener("versionchange", (t => o(t.oldVersion, t.newVersion, t)))
                    })).catch((() => {})), a
                }
                const Fo = ["get", "getKey", "getAll", "getAllKeys", "count"],
                    Ho = ["put", "add", "delete", "clear"],
                    zo = new Map;

                function Vo(t, e) {
                    if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
                    if (zo.get(e)) return zo.get(e);
                    const r = e.replace(/FromIndex$/, ""),
                        n = e !== r,
                        o = Ho.includes(r);
                    if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !o && !Fo.includes(r)) return;
                    const i = async function(t) {
                        const e = this.transaction(t, o ? "readwrite" : "readonly");
                        let i = e.store;
                        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) a[c - 1] = arguments[c];
                        return n && (i = i.index(a.shift())), (await Promise.all([i[r](...a), o && e.done]))[0]
                    };
                    return zo.set(e, i), i
                }
                var qo, Zo, Go, Xo, Ko, Qo, Jo, Yo, ti;
                Mo((t => ({
                    ...t,
                    get: (e, r, n) => Vo(e, r) || t.get(e, r, n),
                    has: (e, r) => !!Vo(e, r) || t.has(e, r)
                })));
                const ei = 100,
                    ri = "next",
                    ni = "prev";
                class oi {
                    constructor(t) {
                        let {
                            dbName: e,
                            tableName: r,
                            version: n,
                            indices: o,
                            cursorToRecord: s,
                            propertyKey: a
                        } = t;
                        qo.add(this), Zo.set(this, void 0), Go.set(this, void 0), Xo.set(this, void 0), Ko.set(this, void 0), Qo.set(this, void 0), Jo.set(this, void 0), i(this, Zo, e, "f"), i(this, Go, r, "f"), i(this, Ko, n, "f"), i(this, Qo, o, "f"), i(this, Jo, s, "f"), i(this, Xo, a, "f")
                    }
                    open() {
                        return n(this, void 0, void 0, (function*() {
                            const t = o(this, Go, "f"),
                                e = o(this, Qo, "f"),
                                r = {
                                    keyPath: o(this, Xo, "f"),
                                    autoIncrement: !o(this, Xo, "f")
                                };
                            return $o(o(this, Zo, "f"), o(this, Ko, "f"), {
                                upgrade(n, o) {
                                    if (o < 1) {
                                        const o = n.createObjectStore(t, r);
                                        for (const t of e) o.createIndex(t.name, t.field)
                                    }
                                }
                            })
                        }))
                    }
                    getAll() {
                        return n(this, arguments, void 0, (function() {
                            var t = this;
                            let {
                                maxRecords: e = ei,
                                sortAsc: r = !0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return function*() {
                                const n = yield t.open();
                                try {
                                    const i = n.transaction(o(t, Go, "f")).objectStore(o(t, Go, "f"));
                                    return yield o(t, qo, "m", Yo).call(t, yield i.openCursor(null, r ? ri : ni), e)
                                } finally {
                                    n.close()
                                }
                            }()
                        }))
                    }
                    getByIndex(t, e) {
                        return n(this, arguments, void 0, (function(t, e) {
                            var r = this;
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei,
                                i = arguments.length > 3 ? arguments[3] : void 0;
                            return function*() {
                                const s = yield r.open();
                                try {
                                    const a = s.transaction(o(r, Go, "f")).objectStore(o(r, Go, "f"));
                                    return yield o(r, qo, "m", Yo).call(r, yield a.index(t).openCursor(e), n, i)
                                } finally {
                                    s.close()
                                }
                            }()
                        }))
                    }
                    put(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = yield this.open();
                            try {
                                const r = e.transaction(o(this, Go, "f"), "readwrite").objectStore(o(this, Go, "f"));
                                for (const e of t) yield r.put(e)
                            } finally {
                                e.close()
                            }
                        }))
                    }
                    count() {
                        return n(this, void 0, void 0, (function*() {
                            const t = yield this.open();
                            try {
                                return yield t.count(o(this, Go, "f"))
                            } finally {
                                t.close()
                            }
                        }))
                    }
                    delete(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = yield this.open();
                            try {
                                yield e.delete(o(this, Go, "f"), t)
                            } finally {
                                e.close()
                            }
                        }))
                    }
                    deleteMultiple(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = yield this.open();
                            try {
                                const r = t.map((t => e.delete(o(this, Go, "f"), t)));
                                yield Promise.all(r)
                            } finally {
                                e.close()
                            }
                        }))
                    }
                    deleteByIndex(t, e) {
                        return n(this, arguments, void 0, (function(t, e) {
                            var r = this;
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei;
                            return function*() {
                                const i = yield r.open();
                                try {
                                    const s = i.transaction(o(r, Go, "f"), "readwrite").objectStore(o(r, Go, "f"));
                                    return yield o(r, qo, "m", ti).call(r, yield s.index(t).openCursor(e), n)
                                } finally {
                                    i.close()
                                }
                            }()
                        }))
                    }
                    deleteRecords() {
                        return n(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei;
                            return function*() {
                                const r = yield t.open();
                                try {
                                    const n = r.transaction(o(t, Go, "f"), "readwrite").objectStore(o(t, Go, "f"));
                                    return yield o(t, qo, "m", ti).call(t, yield n.openCursor(null, ri), e)
                                } finally {
                                    r.close()
                                }
                            }()
                        }))
                    }
                }
                Zo = new WeakMap, Go = new WeakMap, Xo = new WeakMap, Ko = new WeakMap, Qo = new WeakMap, Jo = new WeakMap, qo = new WeakSet, Yo = function(t) {
                    return n(this, arguments, void 0, (function(t) {
                        var e = this;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ei,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return function*() {
                            const i = [];
                            for (; t && i.length < r;) {
                                const r = o(e, Jo, "f").call(e, t);
                                n && !n(r) || i.push(r), t = yield t.continue()
                            }
                            return i
                        }()
                    }))
                }, ti = function(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        let r = 0;
                        for (; t && r < e;) yield t.delete(), r++, t = yield t.continue();
                        return r
                    }))
                };
                const ii = 1;
                class si extends oi {
                    constructor() {
                        super({
                            dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
                            tableName: po,
                            cursorToRecord: t => new uo(t.primaryKey, t.value.log, t.value.logType, t.value.transportId),
                            indices: [{
                                name: yo,
                                field: bo
                            }, {
                                name: go,
                                field: mo
                            }],
                            version: ii
                        })
                    }
                    getByTransportId(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return this.getByIndex("byTransportId", t, e)
                        }))
                    }
                    getByLogType(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return this.getByIndex("byLogType", t, e)
                        }))
                    }
                    putLog(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return this.put([{
                                log: t,
                                logType: t.type,
                                transportId: e
                            }])
                        }))
                    }
                    deleteByLogType(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return this.deleteByIndex("byLogType", t, e)
                        }))
                    }
                }
                var ai;
                const ci = 200,
                    li = 1e4;
                class ui {
                    constructor(t) {
                        let {
                            databaseName: e,
                            database: r = new si(e)
                        } = t;
                        ai.set(this, void 0), i(this, ai, r, "f")
                    }
                    readLogs(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").getAll({
                                sortAsc: !0,
                                maxRecords: t
                            })
                        }))
                    }
                    readLogsByTransport(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").getByTransportId(t, e)
                        }))
                    }
                    removeLogs(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").deleteMultiple(t)
                        }))
                    }
                    insertLog(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").putLog(t, e)
                        }))
                    }
                    countLogs() {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, ai, "f").count()
                        }))
                    }
                    isFull() {
                        return n(this, void 0, void 0, (function*() {
                            return (yield o(this, ai, "f").count()) >= li
                        }))
                    }
                    discardLogs() {
                        return n(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci;
                            return function*() {
                                const r = Object.keys(lo).filter((t => isNaN(Number(t))));
                                let n = e;
                                for (const e of r) {
                                    const r = co[e];
                                    if (n -= (yield o(t, ai, "f").deleteByLogType(r, n)), n <= 0) break
                                }
                                return n
                            }()
                        }))
                    }
                }
                ai = new WeakMap;
                var hi, pi, fi = {
                    exports: {}
                };
                ! function(t, e) {
                    ! function(t, r) {
                        r(e)
                    }(0, (function(t) {
                        function e(t, e, r, n) {
                            function o(t) {
                                return t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }))
                            }
                            return new(r || (r = Promise))((function(r, i) {
                                function s(t) {
                                    try {
                                        c(n.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function a(t) {
                                    try {
                                        c(n.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    t.done ? r(t.value) : o(t.value).then(s, a)
                                }
                                c((n = n.apply(t, e || [])).next())
                            }))
                        }

                        function r(t, e, r, n) {
                            if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                        }

                        function n(t, e, r, n, o) {
                            if ("m" === n) throw new TypeError("Private method is not writable");
                            if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            return "a" === n ? o.call(t, r) : o ? o.value = r : e.set(t, r), r
                        }
                        var o;
                        t.AggregationAttributes = void 0, (o = t.AggregationAttributes || (t.AggregationAttributes = {})).IsAggregateProxy = "outsystems.aggregation.proxy", o.AggregationSize = "outsystems.aggregation.size", o.IsOutlier = "outsystems.aggregation.outlier", o.AverageDuration = "outsystems.aggregation.duration.average", o.MaxDuration = "outsystems.aggregation.duration.max", o.MinDuration = "outsystems.aggregation.duration.min", o.IsNonAggregable = "osinternal.spanIsNonAggregable", o.ChildrenNames = "osinternal.childrenNames", o.functionKey = "outsystems.function.key";
                        const i = "NonAggregable";

                        function s(t, e) {
                            return t < e ? -1 : e < t ? 1 : 0
                        }

                        function a(e) {
                            return e.attributes[t.AggregationAttributes.functionKey]
                        }

                        function c(e, r, n) {
                            var o;
                            const a = e.name,
                                c = null == n ? void 0 : n(e),
                                l = null !== (o = e.attributes[t.AggregationAttributes.ChildrenNames]) && void 0 !== o ? o : [];
                            return l.sort(s), `${e.attributes[t.AggregationAttributes.IsNonAggregable]?`${i}.`:""}${r}.${a}.${c}(${l.join(",")})`
                        }

                        function l(e, r) {
                            return !(e.attributes[t.AggregationAttributes.IsNonAggregable] || r.some((e => e.attributes[t.AggregationAttributes.IsNonAggregable])))
                        }
                        const u = {
                            absolute: (t, e) => {
                                let {
                                    min: r,
                                    max: n
                                } = t;
                                return "number" == typeof r && e < r || "number" == typeof n && e > n
                            },
                            relative: (t, e, r) => {
                                let {
                                    min: n,
                                    max: o
                                } = t;
                                return u.absolute({
                                    min: "number" == typeof n ? r + n : void 0,
                                    max: "number" == typeof o ? r + o : void 0
                                }, e)
                            },
                            ratio: (t, e, r) => {
                                let {
                                    lower: n,
                                    upper: o,
                                    max: i,
                                    min: s
                                } = t;
                                return u.relative({
                                    min: "number" == typeof n ? Math.min(r * n, null != s ? s : 1 / 0) : void 0,
                                    max: "number" == typeof o ? Math.max(r * o, null != i ? i : -1 / 0) : void 0
                                }, e, r)
                            }
                        };

                        function h(t, e, r) {
                            return u[t.type](t, e, r)
                        }
                        var p, f, d, g, y, v, _, m, b, T, w;
                        class E {
                            constructor(t) {
                                p.set(this, void 0), n(this, p, t, "f")
                            }
                            isOutlier(t, e) {
                                for (const [n, o] of Object.entries(r(this, p, "f"))) {
                                    const r = t.attributes[n],
                                        i = e.attributes[n];
                                    if ((void 0 !== r || void 0 !== i) && (void 0 === r || void 0 === i || h(o, r, i))) return !0
                                }
                                return !1
                            }
                        }
                        p = new WeakMap;
                        class S {
                            constructor(e) {
                                let {
                                    storage: r,
                                    outlierDetector: o = new E({
                                        [t.AggregationAttributes.AverageDuration]: {
                                            type: "ratio",
                                            upper: .1,
                                            max: 5e7
                                        }
                                    }),
                                    getSpanObjectId: i = a
                                } = e;
                                f.add(this), d.set(this, void 0), g.set(this, void 0), y.set(this, void 0), n(this, d, r, "f"), n(this, g, o, "f"), n(this, y, i, "f")
                            }
                            aggregate(t, n) {
                                return e(this, void 0, void 0, (function*() {
                                    const e = yield r(this, d, "f").readSpansByParentId(t.spanId), o = r(this, f, "m", m).call(this, t);
                                    if (!l(o, e)) return void(yield r(this, d, "f").insertSpans([r(this, f, "m", T).call(this, o)], n));
                                    const i = yield r(this, f, "m", v).call(this, o, n);
                                    if (i)
                                        if (r(this, g, "f").isOutlier(o, i)) yield r(this, d, "f").insertSpans([r(this, f, "m", b).call(this, o)], n);
                                        else {
                                            const o = r(this, f, "m", _).call(this, t, i),
                                                s = r(this, f, "m", w).call(this, e, o);
                                            yield r(this, d, "f").insertSpans([o, ...s], n)
                                        }
                                    else yield r(this, d, "f").insertSpans([o], n)
                                }))
                            }
                        }
                        d = new WeakMap, g = new WeakMap, y = new WeakMap, f = new WeakSet, v = function(t, n) {
                            return e(this, void 0, void 0, (function*() {
                                const e = c(t, n, r(this, y, "f")),
                                    [o] = yield r(this, d, "f").readSpansByAggregateSignature(e);
                                return o
                            }))
                        }, _ = function(e, r) {
                            var n;
                            const o = null !== (n = r.attributes[t.AggregationAttributes.AggregationSize]) && void 0 !== n ? n : 1,
                                i = r.attributes[t.AggregationAttributes.AverageDuration],
                                s = r.attributes[t.AggregationAttributes.MaxDuration],
                                a = r.attributes[t.AggregationAttributes.MinDuration],
                                c = e.endTimeUnixNano - e.startTimeUnixNano;
                            return Object.assign(Object.assign({}, r), {
                                attributes: Object.assign(Object.assign({}, r.attributes), {
                                    [t.AggregationAttributes.IsAggregateProxy]: !0,
                                    [t.AggregationAttributes.AggregationSize]: o + 1,
                                    [t.AggregationAttributes.AverageDuration]: (i * o + c) / (o + 1),
                                    [t.AggregationAttributes.MaxDuration]: Math.max(s, c),
                                    [t.AggregationAttributes.MinDuration]: Math.min(a, c)
                                }),
                                parentSpanId: r.parentSpanId === e.spanId ? e.parentSpanId : r.parentSpanId
                            })
                        }, m = function(e) {
                            const r = e.endTimeUnixNano - e.startTimeUnixNano;
                            return Object.assign(Object.assign({}, e), {
                                attributes: Object.assign(Object.assign({}, e.attributes), {
                                    [t.AggregationAttributes.IsAggregateProxy]: !1,
                                    [t.AggregationAttributes.AverageDuration]: r,
                                    [t.AggregationAttributes.MaxDuration]: r,
                                    [t.AggregationAttributes.MinDuration]: r
                                })
                            })
                        }, b = function(e) {
                            return Object.assign(Object.assign({}, e), {
                                attributes: Object.assign(Object.assign({}, e.attributes), {
                                    [t.AggregationAttributes.IsOutlier]: !0,
                                    [t.AggregationAttributes.IsNonAggregable]: !0
                                })
                            })
                        }, T = function(e) {
                            return Object.assign(Object.assign({}, e), {
                                attributes: Object.assign(Object.assign({}, e.attributes), {
                                    [t.AggregationAttributes.IsNonAggregable]: !0
                                })
                            })
                        }, w = function(t, e) {
                            return t.flatMap((t => t.spanId !== e.spanId ? [Object.assign(Object.assign({}, t), {
                                parentSpanId: e.spanId
                            })] : []))
                        };
                        const O = "1.3.1";
                        t.SpanAggregator = S, t.ThresholdOutlierDetector = E, t.Version = O, t.makeAggregateSignature = c, Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }))
                }(0, fi.exports);
                class di {
                    constructor(t) {
                        let {
                            spanId: e,
                            span: r,
                            transportId: n,
                            aggregateSignature: o
                        } = t;
                        this.spanId = e, this.span = r, this.transportId = n, this.parentId = r.parentSpanId, this.aggregateSignature = null != o ? o : ""
                    }
                }
                const gi = 1;
                class yi extends oi {
                    constructor() {
                        super({
                            dbName: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
                            tableName: fo,
                            version: gi,
                            propertyKey: arguments.length > 1 ? arguments[1] : void 0,
                            cursorToRecord: t => new di({
                                spanId: t.primaryKey,
                                span: t.value.span,
                                transportId: t.value.transportId,
                                aggregateSignature: t.value.aggregateSignature
                            }),
                            indices: [{
                                name: yo,
                                field: bo
                            }, {
                                name: vo,
                                field: To
                            }, {
                                name: _o,
                                field: wo
                            }]
                        }), hi.add(this)
                    }
                    getByAggregateSignature(t, e) {
                        return this.getByIndex("byAggregateSignature", t, e)
                    }
                    getByParentId(t, e) {
                        return this.getByIndex("byParentId", t, e)
                    }
                    getByTransportId(t, e) {
                        return this.getByIndex("byTransportId", t, e)
                    }
                    getTopLevelByTransportId(t, e) {
                        return this.getByIndex("byTransportId", t, e, (t => void 0 === t.parentId))
                    }
                    putSpans(t, e) {
                        return this.put(t.map((t => o(this, hi, "m", pi).call(this, t, e))))
                    }
                }
                var vi;
                hi = new WeakSet, pi = function(t, e) {
                    return {
                        span: t,
                        transportId: e,
                        spanId: t.spanId,
                        aggregateSignature: fi.exports.makeAggregateSignature(t, e, (t => t.attributes["outsystems.function.key"])),
                        parentId: t.parentSpanId
                    }
                };
                const _i = 200,
                    mi = 1e4;
                class bi {
                    constructor(t) {
                        let {
                            databaseName: e,
                            autoincrement: r = !0,
                            database: n = (r ? new yi(e) : new yi(e, "spanId"))
                        } = t;
                        vi.set(this, void 0), i(this, vi, n, "f")
                    }
                    readSpans(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").getAll({
                                sortAsc: !0,
                                maxRecords: t
                            })
                        }))
                    }
                    readSpansByTransport(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            const r = yield o(this, vi, "f").getTopLevelByTransportId(t, e);
                            return r.length > 0 ? r : o(this, vi, "f").getByTransportId(t, e)
                        }))
                    }
                    readSpansByParentId(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").getByParentId(t, e)
                        }))
                    }
                    readSpansByAggregateSignature(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").getByAggregateSignature(t, e)
                        }))
                    }
                    removeSpans(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").deleteMultiple(t)
                        }))
                    }
                    insertSpan(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").putSpans([t], e)
                        }))
                    }
                    insertSerializableSpans(t, e) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").putSpans(t, e)
                        }))
                    }
                    countSpans() {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, vi, "f").count()
                        }))
                    }
                    isFull() {
                        return n(this, void 0, void 0, (function*() {
                            return (yield o(this, vi, "f").count()) >= mi
                        }))
                    }
                    discardSpans() {
                        return n(this, arguments, void 0, (function() {
                            var t = this;
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _i;
                            return function*() {
                                return o(t, vi, "f").deleteRecords(e)
                            }()
                        }))
                    }
                }

                function Ti(t) {
                    return new fi.exports.SpanAggregator({
                        storage: {
                            insertSpans: (e, r) => n(this, void 0, void 0, (function*() {
                                yield t.insertSerializableSpans(e, r)
                            })),
                            readSpansByAggregateSignature: e => n(this, void 0, void 0, (function*() {
                                return (yield t.readSpansByAggregateSignature(e)).map((t => t.span))
                            })),
                            readSpansByParentId: e => n(this, void 0, void 0, (function*() {
                                return (yield t.readSpansByParentId(e)).map((t => t.span))
                            }))
                        },
                        getSpanObjectId: t => t.attributes["outsystems.function.key"]
                    })
                }
                var wi, Ei, Si, Oi, ki, Ci, Ai, Ii, Pi;
                vi = new WeakMap;
                const Li = 100,
                    Ri = 1e3,
                    ji = new ao,
                    xi = new ao,
                    Ni = "logs",
                    Mi = "spans_v2",
                    Di = "spans";
                class Ui {
                    constructor(t) {
                        let {
                            databaseNameSuffix: e,
                            isOnline: r = (() => !0),
                            offlineLogsStorage: n = new ui({
                                databaseName: `${Ni}-${e}`
                            }),
                            offlineTracesStorage: o = new bi({
                                databaseName: `${Mi}-${e}`,
                                autoincrement: !1
                            }),
                            legacyOfflineTracesStorage: s = new bi({
                                databaseName: `${Di}-${e}`
                            }),
                            flushLegacyTraces: a = !1,
                            aggregateSpans: c = !1,
                            spanAggregator: l = Ti(o),
                            mutexDispatchLogs: u = ji,
                            mutexDispatchSpans: h = xi
                        } = t;
                        wi.set(this, void 0), Ei.set(this, void 0), Si.set(this, void 0), Oi.set(this, !0), ki.set(this, void 0), Ci.set(this, void 0), Ai.set(this, void 0), Ii.set(this, void 0), Pi.set(this, void 0), i(this, wi, n, "f"), i(this, Ei, o, "f"), i(this, Si, s, "f"), i(this, ki, r, "f"), i(this, Oi, a, "f"), i(this, Ci, c, "f"), i(this, Ai, l, "f"), i(this, Pi, u, "f"), i(this, Ii, h, "f")
                    }
                    setAggregateSpansStatus(t) {
                        i(this, Ci, t, "f")
                    }
                    writeLog(t, e) {
                        return n(this, arguments, void 0, (function(t, e) {
                            var r = this;
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Li;
                            return function*() {
                                try {
                                    (yield o(r, wi, "f").isFull()) && (yield o(r, wi, "f").discardLogs()), yield o(r, wi, "f").insertLog(t, e.getTransportId()), (yield o(r, wi, "f").countLogs()) >= n && (yield r.flushTransportLogs(e))
                                } catch (t) {
                                    console.debug("Error writing log to storage", t)
                                }
                            }()
                        }))
                    }
                    writeSpan(t, e) {
                        return n(this, arguments, void 0, (function(t, e) {
                            var r = this;
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri;
                            return function*() {
                                try {
                                    (yield o(r, Ei, "f").isFull()) && (yield o(r, Ei, "f").discardSpans()), yield o(r, Ii, "f").runExclusive((() => n(r, void 0, void 0, (function*() {
                                        o(this, Ci, "f") ? yield o(this, Ai, "f").aggregate(t, e.getTransportId()): yield o(this, Ei, "f").insertSpan(t, e.getTransportId())
                                    })))), (yield o(r, Ei, "f").countSpans()) >= i && (yield r.flushTransportSpans(e))
                                } catch (t) {
                                    console.debug("Error writing trace to storage", t)
                                }
                            }()
                        }))
                    }
                    processTransportLogs(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Li;
                            return function*() {
                                yield o(e, Pi, "f").runExclusive((() => n(e, void 0, void 0, (function*() {
                                    yield this.internalLogProcess(t, r, !0)
                                }))))
                            }()
                        }))
                    }
                    flushTransportLogs(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Li;
                            return function*() {
                                yield o(e, Pi, "f").runExclusive((() => n(e, void 0, void 0, (function*() {
                                    yield this.internalLogProcess(t, r, !1)
                                }))))
                            }()
                        }))
                    }
                    internalLogProcess(t, e, r) {
                        return n(this, void 0, void 0, (function*() {
                            if (!t.requiresConnectivity() || o(this, ki, "f").call(this)) try {
                                const n = r ? e : 1;
                                let i = yield o(this, wi, "f").readLogsByTransport(t.getTransportId(), e);
                                for (; i.length >= n;) yield t.writeAll(i.map((t => t.log))), yield o(this, wi, "f").removeLogs(i.map((t => t.logId))), i = yield o(this, wi, "f").readLogsByTransport(t.getTransportId(), e)
                            } catch (t) {
                                throw console.debug("Error in internal log processing", t), t
                            }
                        }))
                    }
                    processTransportSpans(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri;
                            return function*() {
                                yield o(e, Ii, "f").runExclusive((() => n(e, void 0, void 0, (function*() {
                                    yield this.internalSpanProcess(t, r, !0)
                                }))))
                            }()
                        }))
                    }
                    flushTransportSpans(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri;
                            return function*() {
                                yield o(e, Ii, "f").runExclusive((() => n(e, void 0, void 0, (function*() {
                                    yield this.internalSpanProcess(t, r, !1)
                                }))))
                            }()
                        }))
                    }
                    internalSpanProcess(t, e, r) {
                        return n(this, void 0, void 0, (function*() {
                            if (!t.requiresConnectivity() || o(this, ki, "f").call(this)) {
                                if (o(this, Oi, "f")) try {
                                    const r = yield this.writeSpansToTransport({
                                        transport: t,
                                        spansBatchSize: e,
                                        storage: o(this, Si, "f"),
                                        processCompleteBatchOnly: !1
                                    });
                                    i(this, Oi, r > 0, "f")
                                } catch (t) {
                                    console.warn("Error in processing legacy spans", t)
                                }
                                yield this.writeSpansToTransport({
                                    transport: t,
                                    spansBatchSize: e,
                                    processCompleteBatchOnly: r,
                                    storage: o(this, Ei, "f")
                                })
                            }
                        }))
                    }
                    writeSpansToTransport(t) {
                        return n(this, arguments, void 0, (function(t) {
                            let {
                                transport: e,
                                spansBatchSize: r,
                                processCompleteBatchOnly: n,
                                storage: o
                            } = t;
                            return function*() {
                                try {
                                    const t = n ? r : 1;
                                    let i = yield o.readSpansByTransport(e.getTransportId(), r);
                                    if (0 === i.length) return 0;
                                    for (; i.length >= t;) yield e.writeAll(i.map((t => t.span))), yield o.removeSpans(i.map((t => t.spanId))), i = yield o.readSpansByTransport(e.getTransportId(), r);
                                    return yield o.countSpans()
                                } catch (t) {
                                    throw console.debug("Error processing spans", t), t
                                }
                            }()
                        }))
                    }
                }
                wi = new WeakMap, Ei = new WeakMap, Si = new WeakMap, Oi = new WeakMap, ki = new WeakMap, Ci = new WeakMap, Ai = new WeakMap, Ii = new WeakMap, Pi = new WeakMap;
                const Wi = 6e4;
                class Bi {
                    constructor() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wi;
                        this.timerInterval = t, this.tasksToRun = new Map
                    }
                    scheduleNextRun() {
                        this.currentTaskTimeout && clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = setTimeout((() => this.runTask()), this.timerInterval)
                    }
                    runTask() {
                        return n(this, void 0, void 0, (function*() {
                            if (this.currentTaskTimeout) {
                                this.stop();
                                const t = Array.from(this.tasksToRun.values()).map((t => t()));
                                yield Promise.all(t), this.scheduleNextRun()
                            }
                        }))
                    }
                    start() {
                        this.scheduleNextRun()
                    }
                    stop() {
                        this.currentTaskTimeout && (clearTimeout(this.currentTaskTimeout), this.currentTaskTimeout = void 0)
                    }
                    addTask(t, e) {
                        this.tasksToRun.set(t, e)
                    }
                    deleteTask(t) {
                        this.tasksToRun.delete(t)
                    }
                    getTask(t) {
                        return this.tasksToRun.get(t)
                    }
                    setTimerInterval(t) {
                        this.timerInterval = t, this.start()
                    }
                }
                class $i {
                    constructor(t) {
                        let {
                            logTransports: e = [],
                            traceTransports: r = [],
                            databaseNameSuffix: o,
                            isOnline: i,
                            aggregateSpans: s,
                            offlineManager: a = new Ui({
                                databaseNameSuffix: o,
                                isOnline: i,
                                flushLegacyTraces: !0,
                                aggregateSpans: s
                            }),
                            taskScheduler: c = new Bi,
                            circuitBreakerRunner: l = new Yn
                        } = t;
                        this.logTransports = e, this.traceTransports = r, this.offlineManager = a, this.taskScheduler = c, this.circuitBreakerRunner = l, this.taskScheduler.addTask("flush-logs", (() => n(this, void 0, void 0, (function*() {
                            return this.flushLogs()
                        })))), this.taskScheduler.addTask("flush-spans", (() => n(this, void 0, void 0, (function*() {
                            return this.flushSpans()
                        })))), this.taskScheduler.start()
                    }
                    addLogTransport(t) {
                        const e = t.getTransportId(),
                            r = t => t.getTransportId() === e;
                        this.logTransports.some(r) || this.logTransports.push(t)
                    }
                    addTraceTransport(t) {
                        const e = t.getTransportId(),
                            r = t => t.getTransportId() === e;
                        this.traceTransports.some(r) || this.traceTransports.push(t)
                    }
                    removeLogTransport(t) {
                        const e = e => e.getTransportId() === t,
                            r = this.logTransports.findIndex(e); - 1 !== r && (this.logTransports.splice(r, 1), this.circuitBreakerRunner.closeCircuit(t))
                    }
                    removeTraceTransport(t) {
                        const e = e => e.getTransportId() === t,
                            r = this.traceTransports.findIndex(e); - 1 !== r && (this.traceTransports.splice(r, 1), this.circuitBreakerRunner.closeCircuit(t))
                    }
                    setAllLogTypeBaselines(t) {
                        for (const e of this.logTransports) e.setLogTypeBaseline(t)
                    }
                    setTagId(t) {
                        var e, r;
                        for (const r of this.traceTransports) null === (e = r.setTagId) || void 0 === e || e.call(r, t);
                        for (const e of this.logTransports) null === (r = e.setTagId) || void 0 === r || r.call(e, t)
                    }
                    setResourceAttributes(t) {
                        var e, r;
                        for (const r of this.traceTransports) null === (e = r.setResourceAttributes) || void 0 === e || e.call(r, t);
                        for (const e of this.logTransports) null === (r = e.setResourceAttributes) || void 0 === r || r.call(e, t)
                    }
                    enableTracing() {
                        for (const t of this.traceTransports) t.enableTracing()
                    }
                    disableTracing() {
                        for (const t of this.traceTransports) t.disableTracing()
                    }
                    flushLogs() {
                        return n(this, void 0, void 0, (function*() {
                            const t = this.logTransports.map((t => n(this, void 0, void 0, (function*() {
                                const e = t.getTransportId();
                                yield this.circuitBreakerRunner.run(e, (() => this.offlineManager.flushTransportLogs(t)))
                            }))));
                            yield Promise.all(t)
                        }))
                    }
                    flushSpans() {
                        return n(this, void 0, void 0, (function*() {
                            const t = this.traceTransports.map((t => n(this, void 0, void 0, (function*() {
                                const e = t.getTransportId();
                                yield this.circuitBreakerRunner.run(e, (() => t.hasWriteBuffer() || "function" != typeof t.flush ? this.offlineManager.flushTransportSpans(t) : t.flush()))
                            }))));
                            yield Promise.all(t)
                        }))
                    }
                    processLog(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = this.logTransports.filter((e => e.getLogTypeBaseline() <= t.type));
                            for (const r of e)
                                if (r.hasWriteBuffer()) yield this.offlineManager.writeLog(t, r);
                                else {
                                    const e = r.getTransportId();
                                    0 !== (yield this.circuitBreakerRunner.run(e, (() => r.write(t)))) && (yield this.offlineManager.writeLog(t, r))
                                }
                        }))
                    }
                    processSpan(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = this.traceTransports.filter((t => t.isTracingEnabled()));
                            for (const r of e)
                                if (r.hasWriteBuffer()) yield this.offlineManager.writeSpan(t, r);
                                else {
                                    const e = r.getTransportId();
                                    0 !== (yield this.circuitBreakerRunner.run(e, (() => r.write(t)))) && (yield this.offlineManager.writeSpan(t, r))
                                }
                        }))
                    }
                    setSchedulerTimerInterval(t) {
                        this.taskScheduler.setTimerInterval(t)
                    }
                    setAggregateSpansStatus(t) {
                        this.offlineManager.setAggregateSpansStatus(t)
                    }
                }
                var Fi;
                ! function(t) {
                    t[t.Internal = 0] = "Internal", t[t.External = 1] = "External", t[t.Client = 2] = "Client"
                }(Fi || (Fi = {}));
                var Hi = t.Visibility = Fi,
                    zi = "object" == typeof Dn && Dn && Dn.Object === Object && Dn,
                    Vi = zi,
                    qi = "object" == typeof self && self && self.Object === Object && self,
                    Zi = Vi || qi || Function("return this")(),
                    Gi = Zi.Symbol,
                    Xi = Gi,
                    Ki = Object.prototype,
                    Qi = Ki.hasOwnProperty,
                    Ji = Ki.toString,
                    Yi = Xi ? Xi.toStringTag : void 0;

                function ts(t) {
                    var e = Qi.call(t, Yi),
                        r = t[Yi];
                    try {
                        t[Yi] = void 0;
                        var n = !0
                    } catch (t) {}
                    var o = Ji.call(t);
                    return n && (e ? t[Yi] = r : delete t[Yi]), o
                }
                var es = ts,
                    rs = Object.prototype.toString;

                function ns(t) {
                    return rs.call(t)
                }
                var os = Gi,
                    is = es,
                    ss = ns,
                    as = "[object Null]",
                    cs = "[object Undefined]",
                    ls = os ? os.toStringTag : void 0;

                function us(t) {
                    return null == t ? void 0 === t ? cs : as : ls && ls in Object(t) ? is(t) : ss(t)
                }
                var hs = us;

                function ps(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
                var fs = ps,
                    ds = hs,
                    gs = fs,
                    ys = "[object AsyncFunction]",
                    vs = "[object Function]",
                    _s = "[object GeneratorFunction]",
                    ms = "[object Proxy]";

                function bs(t) {
                    if (!gs(t)) return !1;
                    var e = ds(t);
                    return e == vs || e == _s || e == ys || e == ms
                }
                var Ts, ws = bs,
                    Es = Zi["__core-js_shared__"],
                    Ss = (Ts = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ts : "";

                function Os(t) {
                    return !!Ss && Ss in t
                }
                var ks = Os,
                    Cs = Function.prototype.toString;

                function As(t) {
                    if (null != t) {
                        try {
                            return Cs.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                var Is = As,
                    Ps = ws,
                    Ls = ks,
                    Rs = fs,
                    js = Is,
                    xs = /[\\^$.*+?()[\]{}|]/g,
                    Ns = /^\[object .+?Constructor\]$/,
                    Ms = Function.prototype,
                    Ds = Object.prototype,
                    Us = Ms.toString,
                    Ws = Ds.hasOwnProperty,
                    Bs = RegExp("^" + Us.call(Ws).replace(xs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

                function $s(t) {
                    return !(!Rs(t) || Ls(t)) && (Ps(t) ? Bs : Ns).test(js(t))
                }

                function Fs(t, e) {
                    return null == t ? void 0 : t[e]
                }
                var Hs = $s,
                    zs = Fs;

                function Vs(t, e) {
                    var r = zs(t, e);
                    return Hs(r) ? r : void 0
                }
                var qs = Vs,
                    Zs = qs,
                    Gs = function() {
                        try {
                            var t = Zs(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }();

                function Xs(t, e, r) {
                    "__proto__" == e && Gs ? Gs(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r
                }
                var Ks = Xs;

                function Qs(t) {
                    return function(e, r, n) {
                        for (var o = -1, i = Object(e), s = n(e), a = s.length; a--;) {
                            var c = s[t ? a : ++o];
                            if (!1 === r(i[c], c, i)) break
                        }
                        return e
                    }
                }
                var Js = Qs();

                function Ys(t, e) {
                    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                    return n
                }
                var ta = Ys;

                function ea(t) {
                    return null != t && "object" == typeof t
                }
                var ra = ea,
                    na = hs,
                    oa = ra,
                    ia = "[object Arguments]";

                function sa(t) {
                    return oa(t) && na(t) == ia
                }
                var aa = sa,
                    ca = ra,
                    la = Object.prototype,
                    ua = la.hasOwnProperty,
                    ha = la.propertyIsEnumerable,
                    pa = aa(function() {
                        return arguments
                    }()) ? aa : function(t) {
                        return ca(t) && ua.call(t, "callee") && !ha.call(t, "callee")
                    },
                    fa = pa,
                    da = Array.isArray,
                    ga = {
                        exports: {}
                    };

                function ya() {
                    return !1
                }
                var va = ya;
                ! function(t, e) {
                    var r = Zi,
                        n = va,
                        o = e && !e.nodeType && e,
                        i = o && t && !t.nodeType && t,
                        s = i && i.exports === o ? r.Buffer : void 0,
                        a = (s ? s.isBuffer : void 0) || n;
                    t.exports = a
                }(ga, ga.exports);
                var _a = 9007199254740991,
                    ma = /^(?:0|[1-9]\d*)$/;

                function ba(t, e) {
                    var r = typeof t;
                    return !!(e = null == e ? _a : e) && ("number" == r || "symbol" != r && ma.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
                var Ta = ba,
                    wa = 9007199254740991;

                function Ea(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= wa
                }
                var Sa = Ea,
                    Oa = hs,
                    ka = Sa,
                    Ca = ra,
                    Aa = "[object Arguments]",
                    Ia = "[object Array]",
                    Pa = "[object Boolean]",
                    La = "[object Date]",
                    Ra = "[object Error]",
                    ja = "[object Function]",
                    xa = "[object Map]",
                    Na = "[object Number]",
                    Ma = "[object Object]",
                    Da = "[object RegExp]",
                    Ua = "[object Set]",
                    Wa = "[object String]",
                    Ba = "[object WeakMap]",
                    $a = "[object ArrayBuffer]",
                    Fa = "[object DataView]",
                    Ha = "[object Float64Array]",
                    za = "[object Int8Array]",
                    Va = "[object Int16Array]",
                    qa = "[object Int32Array]",
                    Za = "[object Uint8Array]",
                    Ga = "[object Uint8ClampedArray]",
                    Xa = "[object Uint16Array]",
                    Ka = "[object Uint32Array]",
                    Qa = {};

                function Ja(t) {
                    return Ca(t) && ka(t.length) && !!Qa[Oa(t)]
                }
                Qa["[object Float32Array]"] = Qa[Ha] = Qa[za] = Qa[Va] = Qa[qa] = Qa[Za] = Qa[Ga] = Qa[Xa] = Qa[Ka] = !0, Qa[Aa] = Qa[Ia] = Qa[$a] = Qa[Pa] = Qa[Fa] = Qa[La] = Qa[Ra] = Qa[ja] = Qa[xa] = Qa[Na] = Qa[Ma] = Qa[Da] = Qa[Ua] = Qa[Wa] = Qa[Ba] = !1;
                var Ya = Ja;

                function tc(t) {
                    return function(e) {
                        return t(e)
                    }
                }
                var ec = tc,
                    rc = {
                        exports: {}
                    };
                ! function(t, e) {
                    var r = zi,
                        n = e && !e.nodeType && e,
                        o = n && t && !t.nodeType && t,
                        i = o && o.exports === n && r.process,
                        s = function() {
                            try {
                                var t = o && o.require && o.require("util").types;
                                return t || i && i.binding && i.binding("util")
                            } catch (t) {}
                        }();
                    t.exports = s
                }(rc, rc.exports);
                var nc = Ya,
                    oc = ec,
                    ic = rc.exports,
                    sc = ic && ic.isTypedArray,
                    ac = sc ? oc(sc) : nc,
                    cc = ta,
                    lc = fa,
                    uc = da,
                    hc = ga.exports,
                    pc = Ta,
                    fc = ac,
                    dc = Object.prototype.hasOwnProperty;

                function gc(t, e) {
                    var r = uc(t),
                        n = !r && lc(t),
                        o = !r && !n && hc(t),
                        i = !r && !n && !o && fc(t),
                        s = r || n || o || i,
                        a = s ? cc(t.length, String) : [],
                        c = a.length;
                    for (var l in t) !e && !dc.call(t, l) || s && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || pc(l, c)) || a.push(l);
                    return a
                }
                var yc = gc,
                    vc = Object.prototype;

                function _c(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || vc)
                }
                var mc = _c;

                function bc(t, e) {
                    return function(r) {
                        return t(e(r))
                    }
                }
                var Tc = bc,
                    wc = Tc(Object.keys, Object),
                    Ec = mc,
                    Sc = wc,
                    Oc = Object.prototype.hasOwnProperty;

                function kc(t) {
                    if (!Ec(t)) return Sc(t);
                    var e = [];
                    for (var r in Object(t)) Oc.call(t, r) && "constructor" != r && e.push(r);
                    return e
                }
                var Cc = ws,
                    Ac = Sa;

                function Ic(t) {
                    return null != t && Ac(t.length) && !Cc(t)
                }
                var Pc = Ic,
                    Lc = yc,
                    Rc = kc,
                    jc = Pc;

                function xc(t) {
                    return jc(t) ? Lc(t) : Rc(t)
                }
                var Nc = xc,
                    Mc = Js,
                    Dc = Nc;

                function Uc(t, e) {
                    return t && Mc(t, e, Dc)
                }
                var Wc = Uc;

                function Bc() {
                    this.__data__ = [], this.size = 0
                }
                var $c = Bc;

                function Fc(t, e) {
                    return t === e || t != t && e != e
                }
                var Hc = Fc,
                    zc = Hc;

                function Vc(t, e) {
                    for (var r = t.length; r--;)
                        if (zc(t[r][0], e)) return r;
                    return -1
                }
                var qc = Vc,
                    Zc = qc,
                    Gc = Array.prototype.splice;

                function Xc(t) {
                    var e = this.__data__,
                        r = Zc(e, t);
                    return !(r < 0 || (r == e.length - 1 ? e.pop() : Gc.call(e, r, 1), --this.size, 0))
                }
                var Kc = qc;

                function Qc(t) {
                    var e = this.__data__,
                        r = Kc(e, t);
                    return r < 0 ? void 0 : e[r][1]
                }
                var Jc = qc;

                function Yc(t) {
                    return Jc(this.__data__, t) > -1
                }
                var tl = qc;

                function el(t, e) {
                    var r = this.__data__,
                        n = tl(r, t);
                    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
                }
                var rl = $c,
                    nl = Xc,
                    ol = Qc,
                    il = Yc,
                    sl = el;

                function al(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                al.prototype.clear = rl, al.prototype.delete = nl, al.prototype.get = ol, al.prototype.has = il, al.prototype.set = sl;
                var cl = al,
                    ll = cl;

                function ul() {
                    this.__data__ = new ll, this.size = 0
                }
                var hl = ul;

                function pl(t) {
                    var e = this.__data__,
                        r = e.delete(t);
                    return this.size = e.size, r
                }
                var fl = pl;

                function dl(t) {
                    return this.__data__.get(t)
                }
                var gl = dl;

                function yl(t) {
                    return this.__data__.has(t)
                }
                var vl = yl,
                    _l = qs(Zi, "Map"),
                    ml = qs(Object, "create"),
                    bl = ml;

                function Tl() {
                    this.__data__ = bl ? bl(null) : {}, this.size = 0
                }
                var wl = Tl;

                function El(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }
                var Sl = El,
                    Ol = ml,
                    kl = "__lodash_hash_undefined__",
                    Cl = Object.prototype.hasOwnProperty;

                function Al(t) {
                    var e = this.__data__;
                    if (Ol) {
                        var r = e[t];
                        return r === kl ? void 0 : r
                    }
                    return Cl.call(e, t) ? e[t] : void 0
                }
                var Il = Al,
                    Pl = ml,
                    Ll = Object.prototype.hasOwnProperty;

                function Rl(t) {
                    var e = this.__data__;
                    return Pl ? void 0 !== e[t] : Ll.call(e, t)
                }
                var jl = ml,
                    xl = "__lodash_hash_undefined__";

                function Nl(t, e) {
                    var r = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, r[t] = jl && void 0 === e ? xl : e, this
                }
                var Ml = wl,
                    Dl = Sl,
                    Ul = Il,
                    Wl = Rl,
                    Bl = Nl;

                function $l(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                $l.prototype.clear = Ml, $l.prototype.delete = Dl, $l.prototype.get = Ul, $l.prototype.has = Wl, $l.prototype.set = Bl;
                var Fl = $l,
                    Hl = cl,
                    zl = _l;

                function Vl() {
                    this.size = 0, this.__data__ = {
                        hash: new Fl,
                        map: new(zl || Hl),
                        string: new Fl
                    }
                }

                function ql(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }
                var Zl = ql;

                function Gl(t, e) {
                    var r = t.__data__;
                    return Zl(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                }
                var Xl = Gl;

                function Kl(t) {
                    var e = Xl(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }
                var Ql = Gl;

                function Jl(t) {
                    return Ql(this, t).get(t)
                }
                var Yl = Gl;

                function tu(t) {
                    return Yl(this, t).has(t)
                }
                var eu = Gl;

                function ru(t, e) {
                    var r = eu(this, t),
                        n = r.size;
                    return r.set(t, e), this.size += r.size == n ? 0 : 1, this
                }
                var nu = Vl,
                    ou = Kl,
                    iu = Jl,
                    su = tu,
                    au = ru;

                function cu(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                cu.prototype.clear = nu, cu.prototype.delete = ou, cu.prototype.get = iu, cu.prototype.has = su, cu.prototype.set = au;
                var lu = cu,
                    uu = cl,
                    hu = _l,
                    pu = lu,
                    fu = 200;

                function du(t, e) {
                    var r = this.__data__;
                    if (r instanceof uu) {
                        var n = r.__data__;
                        if (!hu || n.length < fu - 1) return n.push([t, e]), this.size = ++r.size, this;
                        r = this.__data__ = new pu(n)
                    }
                    return r.set(t, e), this.size = r.size, this
                }
                var gu = cl,
                    yu = hl,
                    vu = fl,
                    _u = gl,
                    mu = vl,
                    bu = du;

                function Tu(t) {
                    var e = this.__data__ = new gu(t);
                    this.size = e.size
                }
                Tu.prototype.clear = yu, Tu.prototype.delete = vu, Tu.prototype.get = _u, Tu.prototype.has = mu, Tu.prototype.set = bu;
                var wu = Tu,
                    Eu = "__lodash_hash_undefined__";

                function Su(t) {
                    return this.__data__.set(t, Eu), this
                }

                function Ou(t) {
                    return this.__data__.has(t)
                }
                var ku = lu,
                    Cu = Su,
                    Au = Ou;

                function Iu(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.__data__ = new ku; ++e < r;) this.add(t[e])
                }

                function Pu(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                        if (e(t[r], r, t)) return !0;
                    return !1
                }

                function Lu(t, e) {
                    return t.has(e)
                }
                Iu.prototype.add = Iu.prototype.push = Cu, Iu.prototype.has = Au;
                var Ru = Iu,
                    ju = Pu,
                    xu = Lu,
                    Nu = 1,
                    Mu = 2;

                function Du(t, e, r, n, o, i) {
                    var s = r & Nu,
                        a = t.length,
                        c = e.length;
                    if (a != c && !(s && c > a)) return !1;
                    var l = i.get(t),
                        u = i.get(e);
                    if (l && u) return l == e && u == t;
                    var h = -1,
                        p = !0,
                        f = r & Mu ? new Ru : void 0;
                    for (i.set(t, e), i.set(e, t); ++h < a;) {
                        var d = t[h],
                            g = e[h];
                        if (n) var y = s ? n(g, d, h, e, t, i) : n(d, g, h, t, e, i);
                        if (void 0 !== y) {
                            if (y) continue;
                            p = !1;
                            break
                        }
                        if (f) {
                            if (!ju(e, (function(t, e) {
                                    if (!xu(f, e) && (d === t || o(d, t, r, n, i))) return f.push(e)
                                }))) {
                                p = !1;
                                break
                            }
                        } else if (d !== g && !o(d, g, r, n, i)) {
                            p = !1;
                            break
                        }
                    }
                    return i.delete(t), i.delete(e), p
                }
                var Uu = Du,
                    Wu = Zi.Uint8Array;

                function Bu(t) {
                    var e = -1,
                        r = Array(t.size);
                    return t.forEach((function(t, n) {
                        r[++e] = [n, t]
                    })), r
                }

                function $u(t) {
                    var e = -1,
                        r = Array(t.size);
                    return t.forEach((function(t) {
                        r[++e] = t
                    })), r
                }
                var Fu = Gi,
                    Hu = Wu,
                    zu = Hc,
                    Vu = Uu,
                    qu = Bu,
                    Zu = $u,
                    Gu = 1,
                    Xu = 2,
                    Ku = "[object Boolean]",
                    Qu = "[object Date]",
                    Ju = "[object Error]",
                    Yu = "[object Map]",
                    th = "[object Number]",
                    eh = "[object RegExp]",
                    rh = "[object Set]",
                    nh = "[object String]",
                    oh = "[object Symbol]",
                    ih = "[object ArrayBuffer]",
                    sh = "[object DataView]",
                    ah = Fu ? Fu.prototype : void 0,
                    ch = ah ? ah.valueOf : void 0;

                function lh(t, e, r, n, o, i, s) {
                    switch (r) {
                        case sh:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                            t = t.buffer, e = e.buffer;
                        case ih:
                            return !(t.byteLength != e.byteLength || !i(new Hu(t), new Hu(e)));
                        case Ku:
                        case Qu:
                        case th:
                            return zu(+t, +e);
                        case Ju:
                            return t.name == e.name && t.message == e.message;
                        case eh:
                        case nh:
                            return t == e + "";
                        case Yu:
                            var a = qu;
                        case rh:
                            var c = n & Gu;
                            if (a || (a = Zu), t.size != e.size && !c) return !1;
                            var l = s.get(t);
                            if (l) return l == e;
                            n |= Xu, s.set(t, e);
                            var u = Vu(a(t), a(e), n, o, i, s);
                            return s.delete(t), u;
                        case oh:
                            if (ch) return ch.call(t) == ch.call(e)
                    }
                    return !1
                }
                var uh = lh;

                function hh(t, e) {
                    for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                    return t
                }
                var ph = hh,
                    fh = ph,
                    dh = da;

                function gh(t, e, r) {
                    var n = e(t);
                    return dh(t) ? n : fh(n, r(t))
                }
                var yh = gh;

                function vh(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
                        var s = t[r];
                        e(s, r, t) && (i[o++] = s)
                    }
                    return i
                }

                function _h() {
                    return []
                }
                var mh = _h,
                    bh = vh,
                    Th = mh,
                    wh = Object.prototype.propertyIsEnumerable,
                    Eh = Object.getOwnPropertySymbols,
                    Sh = Eh ? function(t) {
                        return null == t ? [] : (t = Object(t), bh(Eh(t), (function(e) {
                            return wh.call(t, e)
                        })))
                    } : Th,
                    Oh = yh,
                    kh = Sh,
                    Ch = Nc;

                function Ah(t) {
                    return Oh(t, Ch, kh)
                }
                var Ih = Ah,
                    Ph = 1,
                    Lh = Object.prototype.hasOwnProperty;

                function Rh(t, e, r, n, o, i) {
                    var s = r & Ph,
                        a = Ih(t),
                        c = a.length;
                    if (c != Ih(e).length && !s) return !1;
                    for (var l = c; l--;) {
                        var u = a[l];
                        if (!(s ? u in e : Lh.call(e, u))) return !1
                    }
                    var h = i.get(t),
                        p = i.get(e);
                    if (h && p) return h == e && p == t;
                    var f = !0;
                    i.set(t, e), i.set(e, t);
                    for (var d = s; ++l < c;) {
                        var g = t[u = a[l]],
                            y = e[u];
                        if (n) var v = s ? n(y, g, u, e, t, i) : n(g, y, u, t, e, i);
                        if (!(void 0 === v ? g === y || o(g, y, r, n, i) : v)) {
                            f = !1;
                            break
                        }
                        d || (d = "constructor" == u)
                    }
                    if (f && !d) {
                        var _ = t.constructor,
                            m = e.constructor;
                        _ == m || !("constructor" in t) || !("constructor" in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m || (f = !1)
                    }
                    return i.delete(t), i.delete(e), f
                }
                var jh = Rh,
                    xh = qs(Zi, "DataView"),
                    Nh = qs(Zi, "Promise"),
                    Mh = qs(Zi, "Set"),
                    Dh = qs(Zi, "WeakMap"),
                    Uh = xh,
                    Wh = _l,
                    Bh = Nh,
                    $h = Mh,
                    Fh = Dh,
                    Hh = hs,
                    zh = Is,
                    Vh = "[object Map]",
                    qh = "[object Object]",
                    Zh = "[object Promise]",
                    Gh = "[object Set]",
                    Xh = "[object WeakMap]",
                    Kh = "[object DataView]",
                    Qh = zh(Uh),
                    Jh = zh(Wh),
                    Yh = zh(Bh),
                    tp = zh($h),
                    ep = zh(Fh),
                    rp = Hh;
                (Uh && rp(new Uh(new ArrayBuffer(1))) != Kh || Wh && rp(new Wh) != Vh || Bh && rp(Bh.resolve()) != Zh || $h && rp(new $h) != Gh || Fh && rp(new Fh) != Xh) && (rp = function(t) {
                    var e = Hh(t),
                        r = e == qh ? t.constructor : void 0,
                        n = r ? zh(r) : "";
                    if (n) switch (n) {
                        case Qh:
                            return Kh;
                        case Jh:
                            return Vh;
                        case Yh:
                            return Zh;
                        case tp:
                            return Gh;
                        case ep:
                            return Xh
                    }
                    return e
                });
                var np = wu,
                    op = Uu,
                    ip = uh,
                    sp = jh,
                    ap = rp,
                    cp = da,
                    lp = ga.exports,
                    up = ac,
                    hp = 1,
                    pp = "[object Arguments]",
                    fp = "[object Array]",
                    dp = "[object Object]",
                    gp = Object.prototype.hasOwnProperty;

                function yp(t, e, r, n, o, i) {
                    var s = cp(t),
                        a = cp(e),
                        c = s ? fp : ap(t),
                        l = a ? fp : ap(e),
                        u = (c = c == pp ? dp : c) == dp,
                        h = (l = l == pp ? dp : l) == dp,
                        p = c == l;
                    if (p && lp(t)) {
                        if (!lp(e)) return !1;
                        s = !0, u = !1
                    }
                    if (p && !u) return i || (i = new np), s || up(t) ? op(t, e, r, n, o, i) : ip(t, e, c, r, n, o, i);
                    if (!(r & hp)) {
                        var f = u && gp.call(t, "__wrapped__"),
                            d = h && gp.call(e, "__wrapped__");
                        if (f || d) {
                            var g = f ? t.value() : t,
                                y = d ? e.value() : e;
                            return i || (i = new np), o(g, y, r, n, i)
                        }
                    }
                    return !!p && (i || (i = new np), sp(t, e, r, n, o, i))
                }
                var vp = yp,
                    _p = ra;

                function mp(t, e, r, n, o) {
                    return t === e || (null == t || null == e || !_p(t) && !_p(e) ? t != t && e != e : vp(t, e, r, n, mp, o))
                }
                var bp = mp,
                    Tp = wu,
                    wp = bp,
                    Ep = 1,
                    Sp = 2;

                function Op(t, e, r, n) {
                    var o = r.length,
                        i = o,
                        s = !n;
                    if (null == t) return !i;
                    for (t = Object(t); o--;) {
                        var a = r[o];
                        if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                    }
                    for (; ++o < i;) {
                        var c = (a = r[o])[0],
                            l = t[c],
                            u = a[1];
                        if (s && a[2]) {
                            if (void 0 === l && !(c in t)) return !1
                        } else {
                            var h = new Tp;
                            if (n) var p = n(l, u, c, t, e, h);
                            if (!(void 0 === p ? wp(u, l, Ep | Sp, n, h) : p)) return !1
                        }
                    }
                    return !0
                }
                var kp = fs;

                function Cp(t) {
                    return t == t && !kp(t)
                }
                var Ap = Cp,
                    Ip = Ap,
                    Pp = Nc;

                function Lp(t) {
                    for (var e = Pp(t), r = e.length; r--;) {
                        var n = e[r],
                            o = t[n];
                        e[r] = [n, o, Ip(o)]
                    }
                    return e
                }

                function Rp(t, e) {
                    return function(r) {
                        return null != r && r[t] === e && (void 0 !== e || t in Object(r))
                    }
                }
                var jp = Rp,
                    xp = Op,
                    Np = Lp,
                    Mp = jp;

                function Dp(t) {
                    var e = Np(t);
                    return 1 == e.length && e[0][2] ? Mp(e[0][0], e[0][1]) : function(r) {
                        return r === t || xp(r, t, e)
                    }
                }
                var Up = Dp,
                    Wp = hs,
                    Bp = ra,
                    $p = "[object Symbol]";

                function Fp(t) {
                    return "symbol" == typeof t || Bp(t) && Wp(t) == $p
                }
                var Hp = Fp,
                    zp = da,
                    Vp = Hp,
                    qp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    Zp = /^\w*$/;

                function Gp(t, e) {
                    if (zp(t)) return !1;
                    var r = typeof t;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !Vp(t)) || Zp.test(t) || !qp.test(t) || null != e && t in Object(e)
                }
                var Xp = Gp,
                    Kp = lu,
                    Qp = "Expected a function";

                function Jp(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(Qp);
                    var r = function() {
                        var n = arguments,
                            o = e ? e.apply(this, n) : n[0],
                            i = r.cache;
                        if (i.has(o)) return i.get(o);
                        var s = t.apply(this, n);
                        return r.cache = i.set(o, s) || i, s
                    };
                    return r.cache = new(Jp.Cache || Kp), r
                }
                Jp.Cache = Kp;
                var Yp = Jp,
                    tf = 500;

                function ef(t) {
                    var e = Yp(t, (function(t) {
                            return r.size === tf && r.clear(), t
                        })),
                        r = e.cache;
                    return e
                }
                var rf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    nf = /\\(\\)?/g,
                    of = ef((function(t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(rf, (function(t, r, n, o) {
                            e.push(n ? o.replace(nf, "$1") : r || t)
                        })), e
                    }));

                function sf(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
                    return o
                }
                var af = sf,
                    cf = Gi,
                    lf = af,
                    uf = da,
                    hf = Hp,
                    pf = 1 / 0,
                    ff = cf ? cf.prototype : void 0,
                    df = ff ? ff.toString : void 0;

                function gf(t) {
                    if ("string" == typeof t) return t;
                    if (uf(t)) return lf(t, gf) + "";
                    if (hf(t)) return df ? df.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -pf ? "-0" : e
                }
                var yf = gf;

                function vf(t) {
                    return null == t ? "" : yf(t)
                }
                var _f = da,
                    mf = Xp,
                    bf = of ,
                    Tf = vf;

                function wf(t, e) {
                    return _f(t) ? t : mf(t, e) ? [t] : bf(Tf(t))
                }
                var Ef = wf,
                    Sf = Hp,
                    Of = 1 / 0;

                function kf(t) {
                    if ("string" == typeof t || Sf(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -Of ? "-0" : e
                }
                var Cf = kf,
                    Af = Ef,
                    If = Cf;

                function Pf(t, e) {
                    for (var r = 0, n = (e = Af(e, t)).length; null != t && r < n;) t = t[If(e[r++])];
                    return r && r == n ? t : void 0
                }
                var Lf = Pf,
                    Rf = Lf;

                function jf(t, e, r) {
                    var n = null == t ? void 0 : Rf(t, e);
                    return void 0 === n ? r : n
                }

                function xf(t, e) {
                    return null != t && e in Object(t)
                }
                var Nf = Ef,
                    Mf = fa,
                    Df = da,
                    Uf = Ta,
                    Wf = Sa,
                    Bf = Cf;

                function $f(t, e, r) {
                    for (var n = -1, o = (e = Nf(e, t)).length, i = !1; ++n < o;) {
                        var s = Bf(e[n]);
                        if (!(i = null != t && r(t, s))) break;
                        t = t[s]
                    }
                    return i || ++n != o ? i : !!(o = null == t ? 0 : t.length) && Wf(o) && Uf(s, o) && (Df(t) || Mf(t))
                }
                var Ff = xf,
                    Hf = $f;

                function zf(t, e) {
                    return null != t && Hf(t, e, Ff)
                }
                var Vf = bp,
                    qf = jf,
                    Zf = zf,
                    Gf = Xp,
                    Xf = Ap,
                    Kf = jp,
                    Qf = Cf,
                    Jf = 1,
                    Yf = 2;

                function td(t, e) {
                    return Gf(t) && Xf(e) ? Kf(Qf(t), e) : function(r) {
                        var n = qf(r, t);
                        return void 0 === n && n === e ? Zf(r, t) : Vf(e, n, Jf | Yf)
                    }
                }

                function ed(t) {
                    return t
                }

                function rd(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
                var nd = Lf;

                function od(t) {
                    return function(e) {
                        return nd(e, t)
                    }
                }
                var id = rd,
                    sd = od,
                    ad = Xp,
                    cd = Cf;

                function ld(t) {
                    return ad(t) ? id(cd(t)) : sd(t)
                }
                var ud = Up,
                    hd = td,
                    pd = ed,
                    fd = da,
                    dd = ld;

                function gd(t) {
                    return "function" == typeof t ? t : null == t ? pd : "object" == typeof t ? fd(t) ? hd(t[0], t[1]) : ud(t) : dd(t)
                }
                var yd = gd,
                    vd = Ks,
                    _d = Wc,
                    md = yd;

                function bd(t, e) {
                    var r = {};
                    return e = md(e), _d(t, (function(t, n, o) {
                        vd(r, n, e(t, n, o))
                    })), r
                }
                var Td = bd,
                    wd = Ks,
                    Ed = Hc,
                    Sd = Object.prototype.hasOwnProperty;

                function Od(t, e, r) {
                    var n = t[e];
                    Sd.call(t, e) && Ed(n, r) && (void 0 !== r || e in t) || wd(t, e, r)
                }
                var kd = Od,
                    Cd = Ef,
                    Ad = Ta,
                    Id = fs,
                    Pd = Cf;

                function Ld(t, e, r, n) {
                    if (!Id(t)) return t;
                    for (var o = -1, i = (e = Cd(e, t)).length, s = i - 1, a = t; null != a && ++o < i;) {
                        var c = Pd(e[o]),
                            l = r;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                        if (o != s) {
                            var u = a[c];
                            void 0 === (l = n ? n(u, c, a) : void 0) && (l = Id(u) ? u : Ad(e[o + 1]) ? [] : {})
                        }
                        kd(a, c, l), a = a[c]
                    }
                    return t
                }
                var Rd = Lf,
                    jd = Ld,
                    xd = Ef;

                function Nd(t, e, r) {
                    for (var n = -1, o = e.length, i = {}; ++n < o;) {
                        var s = e[n],
                            a = Rd(t, s);
                        r(a, s) && jd(i, xd(s, t), a)
                    }
                    return i
                }
                var Md = Nd,
                    Dd = Tc(Object.getPrototypeOf, Object),
                    Ud = ph,
                    Wd = Dd,
                    Bd = Sh,
                    $d = mh,
                    Fd = Object.getOwnPropertySymbols ? function(t) {
                        for (var e = []; t;) Ud(e, Bd(t)), t = Wd(t);
                        return e
                    } : $d;

                function Hd(t) {
                    var e = [];
                    if (null != t)
                        for (var r in Object(t)) e.push(r);
                    return e
                }
                var zd = fs,
                    Vd = mc,
                    qd = Hd,
                    Zd = Object.prototype.hasOwnProperty;

                function Gd(t) {
                    if (!zd(t)) return qd(t);
                    var e = Vd(t),
                        r = [];
                    for (var n in t)("constructor" != n || !e && Zd.call(t, n)) && r.push(n);
                    return r
                }
                var Xd = yc,
                    Kd = Gd,
                    Qd = Pc;

                function Jd(t) {
                    return Qd(t) ? Xd(t, !0) : Kd(t)
                }
                var Yd = yh,
                    tg = Fd,
                    eg = Jd;

                function rg(t) {
                    return Yd(t, eg, tg)
                }
                var ng = af,
                    og = yd,
                    ig = Md,
                    sg = rg;

                function ag(t, e) {
                    if (null == t) return {};
                    var r = ng(sg(t), (function(t) {
                        return [t]
                    }));
                    return e = og(e), ig(t, r, (function(t, r) {
                        return e(t, r[0])
                    }))
                }
                var cg = ag;
                const lg = "OS-CLRT-00000",
                    ug = t => {
                        const e = Td(t, (t => t()));
                        return cg(e, (t => null != t))
                    },
                    hg = {
                        [Hi.Internal]: 1,
                        [Hi.External]: 2,
                        [Hi.Client]: 3
                    },
                    pg = t => {
                        var e, r, n;
                        const o = {};
                        return t.type === lo.Error && t.error && (o["exception.type"] = t.error.name, o["exception.message"] = yg(t.error.message), o["exception.stacktrace"] = null !== (e = t.error.stack) && void 0 !== e ? e : "", o["outsystems.error.code"] = null !== (n = null === (r = t.errorCode) || void 0 === r ? void 0 : r.toString()) && void 0 !== n ? n : lg.toString()), o
                    },
                    fg = t => {
                        const e = {},
                            r = t.span;
                        return r && (e.traceId = r.traceId, e.spanId = r.spanId), e
                    },
                    dg = t => {
                        const e = t => "boolean" == typeof t ? "boolValue" : "number" == typeof t ? t % 1 == 0 ? "intValue" : "doubleValue" : "stringValue";
                        return Object.entries(t).map((t => {
                            let [r, n] = t;
                            return {
                                key: r,
                                value: {
                                    [e(n)]: n
                                }
                            }
                        }))
                    },
                    gg = t => (t["http.url"] && (t["http.url"] = yg(t["http.url"])), t),
                    yg = t => t.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
                var vg, _g, mg;
                class bg {
                    constructor(t) {
                        let {
                            baseAttributes: e = {},
                            transportManager: r,
                            getTimestamp: n
                        } = t;
                        vg.set(this, void 0), _g.set(this, void 0), mg.set(this, void 0), i(this, vg, r, "f"), i(this, _g, n, "f"), i(this, mg, e, "f")
                    }
                    static build(t) {
                        return n(this, arguments, void 0, (function(t) {
                            let {
                                transports: e = [],
                                baseAttributes: r,
                                databaseNameSuffix: n,
                                transportManager: o = new $i({
                                    databaseNameSuffix: n,
                                    logTransports: e
                                }),
                                getTimestamp: i = (() => new Nn)
                            } = t;
                            return function*() {
                                return new bg({
                                    baseAttributes: r,
                                    transportManager: o,
                                    getTimestamp: i
                                })
                            }()
                        }))
                    }
                    addTransport(t) {
                        o(this, vg, "f").addLogTransport(t)
                    }
                    removeTransport(t) {
                        o(this, vg, "f").removeLogTransport(t)
                    }
                    setLogTypeBaseline() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo.Error;
                        o(this, vg, "f").setAllLogTypeBaselines(t)
                    }
                    flush() {
                        return n(this, void 0, void 0, (function*() {
                            o(this, vg, "f").flushLogs()
                        }))
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, vg, "f").setSchedulerTimerInterval(t)
                    }
                    error(t) {
                        let {
                            category: e,
                            message: r,
                            error: n,
                            errorCode: i,
                            visibility: s = Hi.Internal,
                            span: a,
                            attributes: c
                        } = t;
                        const l = new Kn({
                            type: lo.Error,
                            category: e,
                            message: r,
                            error: n,
                            visibility: s,
                            timestamp: o(this, _g, "f").call(this),
                            errorCode: i,
                            span: a,
                            attributes: Object.assign(Object.assign({}, ug(o(this, mg, "f"))), c)
                        });
                        o(this, vg, "f").processLog(l)
                    }
                    warning(t) {
                        let {
                            category: e,
                            message: r,
                            visibility: n = Hi.Internal,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kn({
                            type: lo.Warning,
                            category: e,
                            message: r,
                            visibility: n,
                            timestamp: o(this, _g, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, ug(o(this, mg, "f"))), s)
                        });
                        o(this, vg, "f").processLog(a)
                    }
                    info(t) {
                        let {
                            category: e,
                            message: r,
                            visibility: n = Hi.External,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kn({
                            type: lo.Info,
                            category: e,
                            message: r,
                            visibility: n,
                            timestamp: o(this, _g, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, ug(o(this, mg, "f"))), s)
                        });
                        o(this, vg, "f").processLog(a)
                    }
                    debug(t) {
                        let {
                            category: e,
                            message: r,
                            visibility: n = Hi.Internal,
                            span: i,
                            attributes: s
                        } = t;
                        const a = new Kn({
                            type: lo.Debug,
                            category: e,
                            message: r,
                            visibility: n,
                            timestamp: o(this, _g, "f").call(this),
                            span: i,
                            attributes: Object.assign(Object.assign({}, ug(o(this, mg, "f"))), s)
                        });
                        o(this, vg, "f").processLog(a)
                    }
                    log(t) {
                        return n(this, void 0, void 0, (function*() {
                            yield o(this, vg, "f").processLog(t)
                        }))
                    }
                }

                function Tg(t) {
                    return void 0 === t && (t = {}), "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }
                t.Logger = bg, vg = new WeakMap, _g = new WeakMap, mg = new WeakMap;
                var wg = "OT_ZONE_CONTEXT",
                    Eg = function() {
                        function t() {
                            this._enabled = !1, this._zoneCounter = 0
                        }
                        return t.prototype._activeContextFromZone = function(t) {
                            return t && t.get(wg) || U
                        }, t.prototype._bindFunction = function(t, e) {
                            var r = this,
                                n = function() {
                                    for (var n = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                                    return r.with(t, (function() {
                                        return e.apply(n, o)
                                    }))
                                };
                            return Object.defineProperty(n, "length", {
                                enumerable: !1,
                                configurable: !0,
                                writable: !1,
                                value: e.length
                            }), n
                        }, t.prototype._bindListener = function(t, e) {
                            var r = e;
                            return void 0 !== r.__ot_listeners || (r.__ot_listeners = {}, "function" == typeof r.addEventListener && (r.addEventListener = this._patchAddEventListener(r, r.addEventListener, t)), "function" == typeof r.removeEventListener && (r.removeEventListener = this._patchRemoveEventListener(r, r.removeEventListener))), e
                        }, t.prototype._createZoneName = function() {
                            this._zoneCounter++;
                            var t = Math.random();
                            return this._zoneCounter + "-" + t
                        }, t.prototype._createZone = function(t, e) {
                            var r;
                            return Zone.current.fork({
                                name: t,
                                properties: (r = {}, r[wg] = e, r)
                            })
                        }, t.prototype._getActiveZone = function() {
                            return Zone.current
                        }, t.prototype._patchAddEventListener = function(t, e, r) {
                            var n = this;
                            return function(o, i, s) {
                                void 0 === t.__ot_listeners && (t.__ot_listeners = {});
                                var a = t.__ot_listeners[o];
                                void 0 === a && (a = new WeakMap, t.__ot_listeners[o] = a);
                                var c = n.bind(r, i);
                                return a.set(i, c), e.call(this, o, c, s)
                            }
                        }, t.prototype._patchRemoveEventListener = function(t, e) {
                            return function(r, n) {
                                if (void 0 === t.__ot_listeners || void 0 === t.__ot_listeners[r]) return e.call(this, r, n);
                                var o = t.__ot_listeners[r],
                                    i = o.get(n);
                                return o.delete(n), e.call(this, r, i || n)
                            }
                        }, t.prototype.active = function() {
                            if (!this._enabled) return U;
                            var t = this._getActiveZone(),
                                e = this._activeContextFromZone(t);
                            return e || U
                        }, t.prototype.bind = function(t, e) {
                            return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : (Tg(e) && this._bindListener(t, e), e)
                        }, t.prototype.disable = function() {
                            return this._enabled = !1, this
                        }, t.prototype.enable = function() {
                            return this._enabled = !0, this
                        }, t.prototype.with = function(t, e, r) {
                            for (var n = [], o = 3; o < arguments.length; o++) n[o - 3] = arguments[o];
                            var i = this._createZoneName();
                            return this._createZone(i, t).run(e, r, n)
                        }, t
                    }();
                /**
                 * @license Angular v<unknown>
                 * (c) 2010-2024 Google LLC. https://angular.io/
                 * License: MIT
                 */
                const Sg = globalThis;

                function Og(t) {
                    return (Sg.__Zone_symbol_prefix || "__zone_symbol__") + t
                }

                function kg() {
                    const t = Sg.performance;

                    function e(e) {
                        t && t.mark && t.mark(e)
                    }

                    function r(e, r) {
                        t && t.measure && t.measure(e, r)
                    }
                    e("Zone");
                    class n {
                        static assertZonePatched() {
                            if (Sg.Promise !== k.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let t = n.current;
                            for (; t.parent;) t = t.parent;
                            return t
                        }
                        static get current() {
                            return A.zone
                        }
                        static get currentTask() {
                            return I
                        }
                        static __load_patch(t, o) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (k.hasOwnProperty(t)) {
                                const e = !0 === Sg[Og("forceDuplicateZoneCheck")];
                                if (!i && e) throw Error("Already loaded patch: " + t)
                            } else if (!Sg["__Zone_disable_" + t]) {
                                const i = "Zone:" + t;
                                e(i), k[t] = o(Sg, n, C), r(i, i)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        constructor(t, e) {
                            this._parent = t, this._name = e ? e.name || "unnamed" : "<root>", this._properties = e && e.properties || {}, this._zoneDelegate = new i(this, this._parent && this._parent._zoneDelegate, e)
                        }
                        get(t) {
                            const e = this.getZoneWith(t);
                            if (e) return e._properties[t]
                        }
                        getZoneWith(t) {
                            let e = this;
                            for (; e;) {
                                if (e._properties.hasOwnProperty(t)) return e;
                                e = e._parent
                            }
                            return null
                        }
                        fork(t) {
                            if (!t) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, t)
                        }
                        wrap(t, e) {
                            if ("function" != typeof t) throw new Error("Expecting function got: " + t);
                            const r = this._zoneDelegate.intercept(this, t, e),
                                n = this;
                            return function() {
                                return n.runGuarded(r, this, arguments, e)
                            }
                        }
                        run(t, e, r, n) {
                            A = {
                                parent: A,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, t, e, r, n)
                            } finally {
                                A = A.parent
                            }
                        }
                        runGuarded(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = arguments.length > 2 ? arguments[2] : void 0,
                                n = arguments.length > 3 ? arguments[3] : void 0;
                            A = {
                                parent: A,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, t, e, r, n)
                                } catch (t) {
                                    if (this._zoneDelegate.handleError(this, t)) throw t
                                }
                            } finally {
                                A = A.parent
                            }
                        }
                        runTask(t, e, r) {
                            if (t.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (t.zone || y).name + "; Execution: " + this.name + ")");
                            if (t.state === v && (t.type === O || t.type === S)) return;
                            const n = t.state != b;
                            n && t._transitionTo(b, m), t.runCount++;
                            const o = I;
                            I = t, A = {
                                parent: A,
                                zone: this
                            };
                            try {
                                t.type == S && t.data && !t.data.isPeriodic && (t.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, t, e, r)
                                } catch (t) {
                                    if (this._zoneDelegate.handleError(this, t)) throw t
                                }
                            } finally {
                                t.state !== v && t.state !== w && (t.type == O || t.data && t.data.isPeriodic ? n && t._transitionTo(m, b) : (t.runCount = 0, this._updateTaskCount(t, -1), n && t._transitionTo(v, b, v))), A = A.parent, I = o
                            }
                        }
                        scheduleTask(t) {
                            if (t.zone && t.zone !== this) {
                                let e = this;
                                for (; e;) {
                                    if (e === t.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);
                                    e = e.parent
                                }
                            }
                            t._transitionTo(_, v);
                            const e = [];
                            t._zoneDelegates = e, t._zone = this;
                            try {
                                t = this._zoneDelegate.scheduleTask(this, t)
                            } catch (e) {
                                throw t._transitionTo(w, _, v), this._zoneDelegate.handleError(this, e), e
                            }
                            return t._zoneDelegates === e && this._updateTaskCount(t, 1), t.state == _ && t._transitionTo(m, _), t
                        }
                        scheduleMicroTask(t, e, r, n) {
                            return this.scheduleTask(new s(E, t, e, r, n, void 0))
                        }
                        scheduleMacroTask(t, e, r, n, o) {
                            return this.scheduleTask(new s(S, t, e, r, n, o))
                        }
                        scheduleEventTask(t, e, r, n, o) {
                            return this.scheduleTask(new s(O, t, e, r, n, o))
                        }
                        cancelTask(t) {
                            if (t.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (t.zone || y).name + "; Execution: " + this.name + ")");
                            if (t.state === m || t.state === b) {
                                t._transitionTo(T, m, b);
                                try {
                                    this._zoneDelegate.cancelTask(this, t)
                                } catch (e) {
                                    throw t._transitionTo(w, T), this._zoneDelegate.handleError(this, e), e
                                }
                                return this._updateTaskCount(t, -1), t._transitionTo(v, T), t.runCount = 0, t
                            }
                        }
                        _updateTaskCount(t, e) {
                            const r = t._zoneDelegates; - 1 == e && (t._zoneDelegates = null);
                            for (let n = 0; n < r.length; n++) r[n]._updateTaskCount(t.type, e)
                        }
                    }
                    n.__symbol__ = Og;
                    const o = {
                        name: "",
                        onHasTask: (t, e, r, n) => t.hasTask(r, n),
                        onScheduleTask: (t, e, r, n) => t.scheduleTask(r, n),
                        onInvokeTask: (t, e, r, n, o, i) => t.invokeTask(r, n, o, i),
                        onCancelTask: (t, e, r, n) => t.cancelTask(r, n)
                    };
                    class i {
                        get zone() {
                            return this._zone
                        }
                        constructor(t, e, r) {
                            this._taskCounts = {
                                microTask: 0,
                                macroTask: 0,
                                eventTask: 0
                            }, this._zone = t, this._parentDelegate = e, this._forkZS = r && (r && r.onFork ? r : e._forkZS), this._forkDlgt = r && (r.onFork ? e : e._forkDlgt), this._forkCurrZone = r && (r.onFork ? this._zone : e._forkCurrZone), this._interceptZS = r && (r.onIntercept ? r : e._interceptZS), this._interceptDlgt = r && (r.onIntercept ? e : e._interceptDlgt), this._interceptCurrZone = r && (r.onIntercept ? this._zone : e._interceptCurrZone), this._invokeZS = r && (r.onInvoke ? r : e._invokeZS), this._invokeDlgt = r && (r.onInvoke ? e : e._invokeDlgt), this._invokeCurrZone = r && (r.onInvoke ? this._zone : e._invokeCurrZone), this._handleErrorZS = r && (r.onHandleError ? r : e._handleErrorZS), this._handleErrorDlgt = r && (r.onHandleError ? e : e._handleErrorDlgt), this._handleErrorCurrZone = r && (r.onHandleError ? this._zone : e._handleErrorCurrZone), this._scheduleTaskZS = r && (r.onScheduleTask ? r : e._scheduleTaskZS), this._scheduleTaskDlgt = r && (r.onScheduleTask ? e : e._scheduleTaskDlgt), this._scheduleTaskCurrZone = r && (r.onScheduleTask ? this._zone : e._scheduleTaskCurrZone), this._invokeTaskZS = r && (r.onInvokeTask ? r : e._invokeTaskZS), this._invokeTaskDlgt = r && (r.onInvokeTask ? e : e._invokeTaskDlgt), this._invokeTaskCurrZone = r && (r.onInvokeTask ? this._zone : e._invokeTaskCurrZone), this._cancelTaskZS = r && (r.onCancelTask ? r : e._cancelTaskZS), this._cancelTaskDlgt = r && (r.onCancelTask ? e : e._cancelTaskDlgt), this._cancelTaskCurrZone = r && (r.onCancelTask ? this._zone : e._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                            const n = r && r.onHasTask,
                                i = e && e._hasTaskZS;
                            (n || i) && (this._hasTaskZS = n ? r : o, this._hasTaskDlgt = e, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = this._zone, r.onScheduleTask || (this._scheduleTaskZS = o, this._scheduleTaskDlgt = e, this._scheduleTaskCurrZone = this._zone), r.onInvokeTask || (this._invokeTaskZS = o, this._invokeTaskDlgt = e, this._invokeTaskCurrZone = this._zone), r.onCancelTask || (this._cancelTaskZS = o, this._cancelTaskDlgt = e, this._cancelTaskCurrZone = this._zone))
                        }
                        fork(t, e) {
                            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, t, e) : new n(t, e)
                        }
                        intercept(t, e, r) {
                            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, t, e, r) : e
                        }
                        invoke(t, e, r, n, o) {
                            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, t, e, r, n, o) : e.apply(r, n)
                        }
                        handleError(t, e) {
                            return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, t, e)
                        }
                        scheduleTask(t, e) {
                            let r = e;
                            if (this._scheduleTaskZS) this._hasTaskZS && r._zoneDelegates.push(this._hasTaskDlgtOwner), r = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, t, e), r || (r = e);
                            else if (e.scheduleFn) e.scheduleFn(e);
                            else {
                                if (e.type != E) throw new Error("Task is missing scheduleFn.");
                                d(e)
                            }
                            return r
                        }
                        invokeTask(t, e, r, n) {
                            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, t, e, r, n) : e.callback.apply(r, n)
                        }
                        cancelTask(t, e) {
                            let r;
                            if (this._cancelTaskZS) r = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, t, e);
                            else {
                                if (!e.cancelFn) throw Error("Task is not cancelable");
                                r = e.cancelFn(e)
                            }
                            return r
                        }
                        hasTask(t, e) {
                            try {
                                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, t, e)
                            } catch (e) {
                                this.handleError(t, e)
                            }
                        }
                        _updateTaskCount(t, e) {
                            const r = this._taskCounts,
                                n = r[t],
                                o = r[t] = n + e;
                            if (o < 0) throw new Error("More tasks executed then were scheduled.");
                            if (0 == n || 0 == o) {
                                const e = {
                                    microTask: r.microTask > 0,
                                    macroTask: r.macroTask > 0,
                                    eventTask: r.eventTask > 0,
                                    change: t
                                };
                                this.hasTask(this._zone, e)
                            }
                        }
                    }
                    class s {
                        constructor(t, e, r, n, o, i) {
                            if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = e, this.data = n, this.scheduleFn = o, this.cancelFn = i, !r) throw new Error("callback is not defined");
                            this.callback = r;
                            const a = this;
                            t === O && n && n.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                                return s.invokeTask.call(Sg, a, this, arguments)
                            }
                        }
                        static invokeTask(t, e, r) {
                            t || (t = this), P++;
                            try {
                                return t.runCount++, t.zone.runTask(t, e, r)
                            } finally {
                                1 == P && g(), P--
                            }
                        }
                        get zone() {
                            return this._zone
                        }
                        get state() {
                            return this._state
                        }
                        cancelScheduleRequest() {
                            this._transitionTo(v, _)
                        }
                        _transitionTo(t, e, r) {
                            if (this._state !== e && this._state !== r) throw new Error(`${this.type} '${this.source}': can not transition to '${t}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`);
                            this._state = t, t == v && (this._zoneDelegates = null)
                        }
                        toString() {
                            return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                        }
                        toJSON() {
                            return {
                                type: this.type,
                                state: this.state,
                                source: this.source,
                                zone: this.zone.name,
                                runCount: this.runCount
                            }
                        }
                    }
                    const a = Og("setTimeout"),
                        c = Og("Promise"),
                        l = Og("then");
                    let u, h = [],
                        p = !1;

                    function f(t) {
                        if (u || Sg[c] && (u = Sg[c].resolve(0)), u) {
                            let e = u[l];
                            e || (e = u.then), e.call(u, t)
                        } else Sg[a](t, 0)
                    }

                    function d(t) {
                        0 === P && 0 === h.length && f(g), t && h.push(t)
                    }

                    function g() {
                        if (!p) {
                            for (p = !0; h.length;) {
                                const t = h;
                                h = [];
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e];
                                    try {
                                        r.zone.runTask(r, null, null)
                                    } catch (t) {
                                        C.onUnhandledError(t)
                                    }
                                }
                            }
                            C.microtaskDrainDone(), p = !1
                        }
                    }
                    const y = {
                            name: "NO ZONE"
                        },
                        v = "notScheduled",
                        _ = "scheduling",
                        m = "scheduled",
                        b = "running",
                        T = "canceling",
                        w = "unknown",
                        E = "microTask",
                        S = "macroTask",
                        O = "eventTask",
                        k = {},
                        C = {
                            symbol: Og,
                            currentZoneFrame: () => A,
                            onUnhandledError: L,
                            microtaskDrainDone: L,
                            scheduleMicroTask: d,
                            showUncaughtError: () => !n[Og("ignoreConsoleErrorUncaughtError")],
                            patchEventTarget: () => [],
                            patchOnProperties: L,
                            patchMethod: () => L,
                            bindArguments: () => [],
                            patchThen: () => L,
                            patchMacroTask: () => L,
                            patchEventPrototype: () => L,
                            isIEOrEdge: () => !1,
                            getGlobalObjects: () => {},
                            ObjectDefineProperty: () => L,
                            ObjectGetOwnPropertyDescriptor: () => {},
                            ObjectCreate: () => {},
                            ArraySlice: () => [],
                            patchClass: () => L,
                            wrapWithCurrentZone: () => L,
                            filterProperties: () => [],
                            attachOriginToPatched: () => L,
                            _redefineProperty: () => L,
                            patchCallbacks: () => L,
                            nativeScheduleMicroTask: f
                        };
                    let A = {
                            parent: null,
                            zone: new n(null, null)
                        },
                        I = null,
                        P = 0;

                    function L() {}
                    return r("Zone", "Zone"), n
                }

                function Cg() {
                    var t, e;
                    const r = globalThis,
                        n = !0 === r[Og("forceDuplicateZoneCheck")];
                    if (r.Zone && (n || "function" != typeof r.Zone.__symbol__)) throw new Error("Zone already loaded.");
                    return null !== (e = r[t = "Zone"]) && void 0 !== e || (r[t] = kg()), r.Zone
                }
                const Ag = Object.getOwnPropertyDescriptor,
                    Ig = Object.defineProperty,
                    Pg = Object.getPrototypeOf,
                    Lg = Object.create,
                    Rg = Array.prototype.slice,
                    jg = "addEventListener",
                    xg = "removeEventListener",
                    Ng = Og(jg),
                    Mg = Og(xg),
                    Dg = "true",
                    Ug = "false",
                    Wg = Og("");

                function Bg(t, e) {
                    return Zone.current.wrap(t, e)
                }

                function $g(t, e, r, n, o) {
                    return Zone.current.scheduleMacroTask(t, e, r, n, o)
                }
                const Fg = Og,
                    Hg = "undefined" != typeof window,
                    zg = Hg ? window : void 0,
                    Vg = Hg && zg || globalThis,
                    qg = "removeAttribute";

                function Zg(t, e) {
                    for (let r = t.length - 1; r >= 0; r--) "function" == typeof t[r] && (t[r] = Bg(t[r], e + "_" + r));
                    return t
                }

                function Gg(t, e) {
                    const r = t.constructor.name;
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n],
                            i = t[o];
                        if (i) {
                            if (!Xg(Ag(t, o))) continue;
                            t[o] = (t => {
                                const e = function() {
                                    return t.apply(this, Zg(arguments, r + "." + o))
                                };
                                return cy(e, t), e
                            })(i)
                        }
                    }
                }

                function Xg(t) {
                    return !t || !1 !== t.writable && !("function" == typeof t.get && void 0 === t.set)
                }
                const Kg = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                    Qg = !("nw" in Vg) && void 0 !== Vg.process && "[object process]" === Vg.process.toString(),
                    Jg = !Qg && !Kg && !(!Hg || !zg.HTMLElement),
                    Yg = void 0 !== Vg.process && "[object process]" === Vg.process.toString() && !Kg && !(!Hg || !zg.HTMLElement),
                    ty = {},
                    ey = function(t) {
                        if (!(t = t || Vg.event)) return;
                        let e = ty[t.type];
                        e || (e = ty[t.type] = Fg("ON_PROPERTY" + t.type));
                        const r = this || t.target || Vg,
                            n = r[e];
                        let o;
                        if (Jg && r === zg && "error" === t.type) {
                            const e = t;
                            o = n && n.call(this, e.message, e.filename, e.lineno, e.colno, e.error), !0 === o && t.preventDefault()
                        } else o = n && n.apply(this, arguments), null == o || o || t.preventDefault();
                        return o
                    };

                function ry(t, e, r) {
                    let n = Ag(t, e);
                    if (!n && r && Ag(r, e) && (n = {
                            enumerable: !0,
                            configurable: !0
                        }), !n || !n.configurable) return;
                    const o = Fg("on" + e + "patched");
                    if (t.hasOwnProperty(o) && t[o]) return;
                    delete n.writable, delete n.value;
                    const i = n.get,
                        s = n.set,
                        a = e.slice(2);
                    let c = ty[a];
                    c || (c = ty[a] = Fg("ON_PROPERTY" + a)), n.set = function(e) {
                        let r = this;
                        r || t !== Vg || (r = Vg), r && ("function" == typeof r[c] && r.removeEventListener(a, ey), s && s.call(r, null), r[c] = e, "function" == typeof e && r.addEventListener(a, ey, !1))
                    }, n.get = function() {
                        let r = this;
                        if (r || t !== Vg || (r = Vg), !r) return null;
                        const o = r[c];
                        if (o) return o;
                        if (i) {
                            let t = i.call(this);
                            if (t) return n.set.call(this, t), "function" == typeof r[qg] && r.removeAttribute(e), t
                        }
                        return null
                    }, Ig(t, e, n), t[o] = !0
                }

                function ny(t, e, r) {
                    if (e)
                        for (let n = 0; n < e.length; n++) ry(t, "on" + e[n], r);
                    else {
                        const e = [];
                        for (const r in t) "on" == r.slice(0, 2) && e.push(r);
                        for (let n = 0; n < e.length; n++) ry(t, e[n], r)
                    }
                }
                const oy = Fg("originalInstance");

                function iy(t) {
                    const e = Vg[t];
                    if (!e) return;
                    Vg[Fg(t)] = e, Vg[t] = function() {
                        const r = Zg(arguments, t);
                        switch (r.length) {
                            case 0:
                                this[oy] = new e;
                                break;
                            case 1:
                                this[oy] = new e(r[0]);
                                break;
                            case 2:
                                this[oy] = new e(r[0], r[1]);
                                break;
                            case 3:
                                this[oy] = new e(r[0], r[1], r[2]);
                                break;
                            case 4:
                                this[oy] = new e(r[0], r[1], r[2], r[3]);
                                break;
                            default:
                                throw new Error("Arg list too long.")
                        }
                    }, cy(Vg[t], e);
                    const r = new e((function() {}));
                    let n;
                    for (n in r) "XMLHttpRequest" === t && "responseBlob" === n || function(e) {
                        "function" == typeof r[e] ? Vg[t].prototype[e] = function() {
                            return this[oy][e].apply(this[oy], arguments)
                        } : Ig(Vg[t].prototype, e, {
                            set: function(r) {
                                "function" == typeof r ? (this[oy][e] = Bg(r, t + "." + e), cy(this[oy][e], r)) : this[oy][e] = r
                            },
                            get: function() {
                                return this[oy][e]
                            }
                        })
                    }(n);
                    for (n in e) "prototype" !== n && e.hasOwnProperty(n) && (Vg[t][n] = e[n])
                }

                function sy(t, e, r) {
                    let n = t;
                    for (; n && !n.hasOwnProperty(e);) n = Pg(n);
                    !n && t[e] && (n = t);
                    const o = Fg(e);
                    let i = null;
                    if (n && (!(i = n[o]) || !n.hasOwnProperty(o)) && (i = n[o] = n[e], Xg(n && Ag(n, e)))) {
                        const t = r(i, o, e);
                        n[e] = function() {
                            return t(this, arguments)
                        }, cy(n[e], i)
                    }
                    return i
                }

                function ay(t, e, r) {
                    let n = null;

                    function o(t) {
                        const e = t.data;
                        return e.args[e.cbIdx] = function() {
                            t.invoke.apply(this, arguments)
                        }, n.apply(e.target, e.args), t
                    }
                    n = sy(t, e, (t => function(e, n) {
                        const i = r(e, n);
                        return i.cbIdx >= 0 && "function" == typeof n[i.cbIdx] ? $g(i.name, n[i.cbIdx], i, o) : t.apply(e, n)
                    }))
                }

                function cy(t, e) {
                    t[Fg("OriginalDelegate")] = e
                }
                let ly = !1,
                    uy = !1;

                function hy() {
                    try {
                        const t = zg.navigator.userAgent;
                        if (-1 !== t.indexOf("MSIE ") || -1 !== t.indexOf("Trident/")) return !0
                    } catch (t) {}
                    return !1
                }

                function py() {
                    if (ly) return uy;
                    ly = !0;
                    try {
                        const t = zg.navigator.userAgent; - 1 === t.indexOf("MSIE ") && -1 === t.indexOf("Trident/") && -1 === t.indexOf("Edge/") || (uy = !0)
                    } catch (t) {}
                    return uy
                }
                let fy = !1;
                if ("undefined" != typeof window) try {
                    const t = Object.defineProperty({}, "passive", {
                        get: function() {
                            fy = !0
                        }
                    });
                    window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
                } catch (t) {
                    fy = !1
                }
                const dy = {
                        useG: !0
                    },
                    gy = {},
                    yy = {},
                    vy = new RegExp("^" + Wg + "(\\w+)(true|false)$"),
                    _y = Fg("propagationStopped");

                function my(t, e) {
                    const r = (e ? e(t) : t) + Ug,
                        n = (e ? e(t) : t) + Dg,
                        o = Wg + r,
                        i = Wg + n;
                    gy[t] = {}, gy[t][Ug] = o, gy[t][Dg] = i
                }

                function by(t, e, r, n) {
                    const o = n && n.add || jg,
                        i = n && n.rm || xg,
                        s = n && n.listeners || "eventListeners",
                        a = n && n.rmAll || "removeAllListeners",
                        c = Fg(o),
                        l = "." + o + ":",
                        u = "prependListener",
                        h = "." + u + ":",
                        p = function(t, e, r) {
                            if (t.isRemoved) return;
                            const n = t.callback;
                            let o;
                            "object" == typeof n && n.handleEvent && (t.callback = t => n.handleEvent(t), t.originalDelegate = n);
                            try {
                                t.invoke(t, e, [r])
                            } catch (t) {
                                o = t
                            }
                            const s = t.options;
                            if (s && "object" == typeof s && s.once) {
                                const n = t.originalDelegate ? t.originalDelegate : t.callback;
                                e[i].call(e, r.type, n, s)
                            }
                            return o
                        };

                    function f(r, n, o) {
                        if (!(n = n || t.event)) return;
                        const i = r || n.target || t,
                            s = i[gy[n.type][o ? Dg : Ug]];
                        if (s) {
                            const t = [];
                            if (1 === s.length) {
                                const e = p(s[0], i, n);
                                e && t.push(e)
                            } else {
                                const e = s.slice();
                                for (let r = 0; r < e.length && (!n || !0 !== n[_y]); r++) {
                                    const o = p(e[r], i, n);
                                    o && t.push(o)
                                }
                            }
                            if (1 === t.length) throw t[0];
                            for (let r = 0; r < t.length; r++) {
                                const n = t[r];
                                e.nativeScheduleMicroTask((() => {
                                    throw n
                                }))
                            }
                        }
                    }
                    const d = function(t) {
                            return f(this, t, !1)
                        },
                        g = function(t) {
                            return f(this, t, !0)
                        };

                    function y(e, r) {
                        if (!e) return !1;
                        let n = !0;
                        r && void 0 !== r.useG && (n = r.useG);
                        const p = r && r.vh;
                        let f = !0;
                        r && void 0 !== r.chkDup && (f = r.chkDup);
                        let y = !1;
                        r && void 0 !== r.rt && (y = r.rt);
                        let v = e;
                        for (; v && !v.hasOwnProperty(o);) v = Pg(v);
                        if (!v && e[o] && (v = e), !v) return !1;
                        if (v[c]) return !1;
                        const _ = r && r.eventNameToString,
                            m = {},
                            b = v[c] = v[o],
                            T = v[Fg(i)] = v[i],
                            w = v[Fg(s)] = v[s],
                            E = v[Fg(a)] = v[a];
                        let S;

                        function O(t, e) {
                            return !fy && "object" == typeof t && t ? !!t.capture : fy && e ? "boolean" == typeof t ? {
                                capture: t,
                                passive: !0
                            } : t ? "object" == typeof t && !1 !== t.passive ? {
                                ...t,
                                passive: !0
                            } : t : {
                                passive: !0
                            } : t
                        }
                        r && r.prepend && (S = v[Fg(r.prepend)] = v[r.prepend]);
                        const k = function(t) {
                                return S.call(m.target, m.eventName, t.invoke, m.options)
                            },
                            C = n ? function(t) {
                                if (!m.isExisting) return b.call(m.target, m.eventName, m.capture ? g : d, m.options)
                            } : function(t) {
                                return b.call(m.target, m.eventName, t.invoke, m.options)
                            },
                            A = n ? function(t) {
                                if (!t.isRemoved) {
                                    const e = gy[t.eventName];
                                    let r;
                                    e && (r = e[t.capture ? Dg : Ug]);
                                    const n = r && t.target[r];
                                    if (n)
                                        for (let e = 0; e < n.length; e++)
                                            if (n[e] === t) {
                                                n.splice(e, 1), t.isRemoved = !0, 0 === n.length && (t.allRemoved = !0, t.target[r] = null);
                                                break
                                            }
                                }
                                if (t.allRemoved) return T.call(t.target, t.eventName, t.capture ? g : d, t.options)
                            } : function(t) {
                                return T.call(t.target, t.eventName, t.invoke, t.options)
                            },
                            I = function(t, e) {
                                const r = typeof e;
                                return "function" === r && t.callback === e || "object" === r && t.originalDelegate === e
                            },
                            P = r && r.diff ? r.diff : I,
                            L = Zone[Fg("UNPATCHED_EVENTS")],
                            R = t[Fg("PASSIVE_EVENTS")],
                            j = function(e, o, i, s) {
                                let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                    c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                return function() {
                                    const l = this || t;
                                    let u = arguments[0];
                                    r && r.transferEventName && (u = r.transferEventName(u));
                                    let h = arguments[1];
                                    if (!h) return e.apply(this, arguments);
                                    if (Qg && "uncaughtException" === u) return e.apply(this, arguments);
                                    let d = !1;
                                    if ("function" != typeof h) {
                                        if (!h.handleEvent) return e.apply(this, arguments);
                                        d = !0
                                    }
                                    if (p && !p(e, h, l, arguments)) return;
                                    const g = fy && !!R && -1 !== R.indexOf(u),
                                        y = O(arguments[2], g),
                                        v = null == y ? void 0 : y.signal;
                                    if (null != v && v.aborted) return;
                                    if (L)
                                        for (let t = 0; t < L.length; t++)
                                            if (u === L[t]) return g ? e.call(l, u, h, y) : e.apply(this, arguments);
                                    const b = !!y && ("boolean" == typeof y || y.capture),
                                        T = !(!y || "object" != typeof y) && y.once,
                                        w = Zone.current;
                                    let E = gy[u];
                                    E || (my(u, _), E = gy[u]);
                                    const S = E[b ? Dg : Ug];
                                    let k, C = l[S],
                                        A = !1;
                                    if (C) {
                                        if (A = !0, f)
                                            for (let t = 0; t < C.length; t++)
                                                if (P(C[t], h)) return
                                    } else C = l[S] = [];
                                    const I = l.constructor.name,
                                        j = yy[I];
                                    j && (k = j[u]), k || (k = I + o + (_ ? _(u) : u)), m.options = y, T && (m.options.once = !1), m.target = l, m.capture = b, m.eventName = u, m.isExisting = A;
                                    const x = n ? dy : void 0;
                                    x && (x.taskData = m), v && (m.options.signal = void 0);
                                    const N = w.scheduleEventTask(k, h, x, i, s);
                                    if (v) {
                                        m.options.signal = v;
                                        const t = () => N.zone.cancelTask(N);
                                        e.call(v, "abort", t, {
                                            once: !0
                                        }), x && (x.removeAbortListener = () => v.removeEventListener("abort", t))
                                    }
                                    return m.target = null, x && (x.taskData = null), T && (y.once = !0), (fy || "boolean" != typeof N.options) && (N.options = y), N.target = l, N.capture = b, N.eventName = u, d && (N.originalDelegate = h), c ? C.unshift(N) : C.push(N), a ? l : void 0
                                }
                            };
                        return v[o] = j(b, l, C, A, y), S && (v[u] = j(S, h, k, A, y, !0)), v[i] = function() {
                            const e = this || t;
                            let n = arguments[0];
                            r && r.transferEventName && (n = r.transferEventName(n));
                            const o = arguments[2],
                                i = !!o && ("boolean" == typeof o || o.capture),
                                s = arguments[1];
                            if (!s) return T.apply(this, arguments);
                            if (p && !p(T, s, e, arguments)) return;
                            const a = gy[n];
                            let c;
                            a && (c = a[i ? Dg : Ug]);
                            const l = c && e[c];
                            if (l)
                                for (let t = 0; t < l.length; t++) {
                                    const r = l[t];
                                    if (P(r, s)) {
                                        l.splice(t, 1), r.isRemoved = !0, 0 !== l.length || (r.allRemoved = !0, e[c] = null, i || "string" != typeof n) || (e[Wg + "ON_PROPERTY" + n] = null);
                                        const o = r.data;
                                        return null != o && o.removeAbortListener && (o.removeAbortListener(), o.removeAbortListener = null), r.zone.cancelTask(r), y ? e : void 0
                                    }
                                }
                            return T.apply(this, arguments)
                        }, v[s] = function() {
                            const e = this || t;
                            let n = arguments[0];
                            r && r.transferEventName && (n = r.transferEventName(n));
                            const o = [],
                                i = Ty(e, _ ? _(n) : n);
                            for (let t = 0; t < i.length; t++) {
                                const e = i[t];
                                let r = e.originalDelegate ? e.originalDelegate : e.callback;
                                o.push(r)
                            }
                            return o
                        }, v[a] = function() {
                            const e = this || t;
                            let n = arguments[0];
                            if (n) {
                                r && r.transferEventName && (n = r.transferEventName(n));
                                const t = gy[n];
                                if (t) {
                                    const r = t[Ug],
                                        o = t[Dg],
                                        s = e[r],
                                        a = e[o];
                                    if (s) {
                                        const t = s.slice();
                                        for (let e = 0; e < t.length; e++) {
                                            const r = t[e];
                                            let o = r.originalDelegate ? r.originalDelegate : r.callback;
                                            this[i].call(this, n, o, r.options)
                                        }
                                    }
                                    if (a) {
                                        const t = a.slice();
                                        for (let e = 0; e < t.length; e++) {
                                            const r = t[e];
                                            let o = r.originalDelegate ? r.originalDelegate : r.callback;
                                            this[i].call(this, n, o, r.options)
                                        }
                                    }
                                }
                            } else {
                                const t = Object.keys(e);
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e],
                                        n = vy.exec(r);
                                    let o = n && n[1];
                                    o && "removeListener" !== o && this[a].call(this, o)
                                }
                                this[a].call(this, "removeListener")
                            }
                            if (y) return this
                        }, cy(v[o], b), cy(v[i], T), E && cy(v[a], E), w && cy(v[s], w), !0
                    }
                    let v = [];
                    for (let t = 0; t < r.length; t++) v[t] = y(r[t], n);
                    return v
                }

                function Ty(t, e) {
                    if (!e) {
                        const r = [];
                        for (let n in t) {
                            const o = vy.exec(n);
                            let i = o && o[1];
                            if (i && (!e || i === e)) {
                                const e = t[n];
                                if (e)
                                    for (let t = 0; t < e.length; t++) r.push(e[t])
                            }
                        }
                        return r
                    }
                    let r = gy[e];
                    r || (my(e), r = gy[e]);
                    const n = t[r[Ug]],
                        o = t[r[Dg]];
                    return n ? o ? n.concat(o) : n.slice() : o ? o.slice() : []
                }

                function wy(t, e) {
                    const r = t.Event;
                    r && r.prototype && e.patchMethod(r.prototype, "stopImmediatePropagation", (t => function(e, r) {
                        e[_y] = !0, t && t.apply(e, r)
                    }))
                }

                function Ey(t, e) {
                    e.patchMethod(t, "queueMicrotask", (t => function(t, e) {
                        Zone.current.scheduleMicroTask("queueMicrotask", e[0])
                    }))
                }
                const Sy = Fg("zoneTask");

                function Oy(t, e, r, n) {
                    let o = null,
                        i = null;
                    r += n;
                    const s = {};

                    function a(e) {
                        const r = e.data;
                        return r.args[0] = function() {
                            return e.invoke.apply(this, arguments)
                        }, r.handleId = o.apply(t, r.args), e
                    }

                    function c(e) {
                        return i.call(t, e.data.handleId)
                    }
                    o = sy(t, e += n, (r => function(o, i) {
                        if ("function" == typeof i[0]) {
                            const t = {
                                    isPeriodic: "Interval" === n,
                                    delay: "Timeout" === n || "Interval" === n ? i[1] || 0 : void 0,
                                    args: i
                                },
                                r = i[0];
                            i[0] = function() {
                                try {
                                    return r.apply(this, arguments)
                                } finally {
                                    t.isPeriodic || ("number" == typeof t.handleId ? delete s[t.handleId] : t.handleId && (t.handleId[Sy] = null))
                                }
                            };
                            const o = $g(e, i[0], t, a, c);
                            if (!o) return o;
                            const l = o.data.handleId;
                            return "number" == typeof l ? s[l] = o : l && (l[Sy] = o), l && l.ref && l.unref && "function" == typeof l.ref && "function" == typeof l.unref && (o.ref = l.ref.bind(l), o.unref = l.unref.bind(l)), "number" == typeof l || l ? l : o
                        }
                        return r.apply(t, i)
                    })), i = sy(t, r, (e => function(r, n) {
                        const o = n[0];
                        let i;
                        "number" == typeof o ? i = s[o] : (i = o && o[Sy], i || (i = o)), i && "string" == typeof i.type ? "notScheduled" !== i.state && (i.cancelFn && i.data.isPeriodic || 0 === i.runCount) && ("number" == typeof o ? delete s[o] : o && (o[Sy] = null), i.zone.cancelTask(i)) : e.apply(t, n)
                    }))
                }

                function ky(t, e) {
                    const {
                        isBrowser: r,
                        isMix: n
                    } = e.getGlobalObjects();
                    if (!r && !n || !t.customElements || !("customElements" in t)) return;
                    const o = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
                    e.patchCallbacks(e, t.customElements, "customElements", "define", o)
                }

                function Cy(t, e) {
                    if (Zone[e.symbol("patchEventTarget")]) return;
                    const {
                        eventNames: r,
                        zoneSymbolEventNames: n,
                        TRUE_STR: o,
                        FALSE_STR: i,
                        ZONE_SYMBOL_PREFIX: s
                    } = e.getGlobalObjects();
                    for (let t = 0; t < r.length; t++) {
                        const e = r[t],
                            a = s + (e + i),
                            c = s + (e + o);
                        n[e] = {}, n[e][i] = a, n[e][o] = c
                    }
                    const a = t.EventTarget;
                    return a && a.prototype ? (e.patchEventTarget(t, e, [a && a.prototype]), !0) : void 0
                }

                function Ay(t, e) {
                    e.patchEventPrototype(t, e)
                }

                function Iy(t, e, r) {
                    if (!r || 0 === r.length) return e;
                    const n = r.filter((e => e.target === t));
                    if (!n || 0 === n.length) return e;
                    const o = n[0].ignoreProperties;
                    return e.filter((t => -1 === o.indexOf(t)))
                }

                function Py(t, e, r, n) {
                    t && ny(t, Iy(t, e, r), n)
                }

                function Ly(t) {
                    return Object.getOwnPropertyNames(t).filter((t => t.startsWith("on") && t.length > 2)).map((t => t.substring(2)))
                }

                function Ry(t, e) {
                    if (Qg && !Yg) return;
                    if (Zone[t.symbol("patchEvents")]) return;
                    const r = e.__Zone_ignore_on_properties;
                    let n = [];
                    if (Jg) {
                        const t = window;
                        n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const e = hy() ? [{
                            target: t,
                            ignoreProperties: ["error"]
                        }] : [];
                        Py(t, Ly(t), r ? r.concat(e) : r, Pg(t))
                    }
                    n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let t = 0; t < n.length; t++) {
                        const o = e[n[t]];
                        o && o.prototype && Py(o.prototype, Ly(o.prototype), r)
                    }
                }

                function jy(t) {
                    t.__load_patch("legacy", (e => {
                        const r = e[t.__symbol__("legacyPatch")];
                        r && r()
                    })), t.__load_patch("timers", (t => {
                        const e = "set",
                            r = "clear";
                        Oy(t, e, r, "Timeout"), Oy(t, e, r, "Interval"), Oy(t, e, r, "Immediate")
                    })), t.__load_patch("requestAnimationFrame", (t => {
                        Oy(t, "request", "cancel", "AnimationFrame"), Oy(t, "mozRequest", "mozCancel", "AnimationFrame"), Oy(t, "webkitRequest", "webkitCancel", "AnimationFrame")
                    })), t.__load_patch("blocking", ((t, e) => {
                        const r = ["alert", "prompt", "confirm"];
                        for (let n = 0; n < r.length; n++) {
                            const o = r[n];
                            sy(t, o, ((r, n, o) => function(n, i) {
                                return e.current.run(r, t, i, o)
                            }))
                        }
                    })), t.__load_patch("EventTarget", ((t, e, r) => {
                        Ay(t, r), Cy(t, r);
                        const n = t.XMLHttpRequestEventTarget;
                        n && n.prototype && r.patchEventTarget(t, r, [n.prototype])
                    })), t.__load_patch("MutationObserver", ((t, e, r) => {
                        iy("MutationObserver"), iy("WebKitMutationObserver")
                    })), t.__load_patch("IntersectionObserver", ((t, e, r) => {
                        iy("IntersectionObserver")
                    })), t.__load_patch("FileReader", ((t, e, r) => {
                        iy("FileReader")
                    })), t.__load_patch("on_property", ((t, e, r) => {
                        Ry(r, t)
                    })), t.__load_patch("customElements", ((t, e, r) => {
                        ky(t, r)
                    })), t.__load_patch("XHR", ((t, e) => {
                        c(t);
                        const r = Fg("xhrTask"),
                            n = Fg("xhrSync"),
                            o = Fg("xhrListener"),
                            i = Fg("xhrScheduled"),
                            s = Fg("xhrURL"),
                            a = Fg("xhrErrorBeforeScheduled");

                        function c(t) {
                            const c = t.XMLHttpRequest;
                            if (!c) return;
                            const l = c.prototype;

                            function u(t) {
                                return t[r]
                            }
                            let h = l[Ng],
                                p = l[Mg];
                            if (!h) {
                                const e = t.XMLHttpRequestEventTarget;
                                if (e) {
                                    const t = e.prototype;
                                    h = t[Ng], p = t[Mg]
                                }
                            }
                            const f = "readystatechange",
                                d = "scheduled";

                            function g(t) {
                                const n = t.data,
                                    s = n.target;
                                s[i] = !1, s[a] = !1;
                                const c = s[o];
                                h || (h = s[Ng], p = s[Mg]), c && p.call(s, f, c);
                                const l = s[o] = () => {
                                    if (s.readyState === s.DONE)
                                        if (!n.aborted && s[i] && t.state === d) {
                                            const r = s[e.__symbol__("loadfalse")];
                                            if (0 !== s.status && r && r.length > 0) {
                                                const o = t.invoke;
                                                t.invoke = function() {
                                                    const r = s[e.__symbol__("loadfalse")];
                                                    for (let e = 0; e < r.length; e++) r[e] === t && r.splice(e, 1);
                                                    n.aborted || t.state !== d || o.call(t)
                                                }, r.push(t)
                                            } else t.invoke()
                                        } else n.aborted || !1 !== s[i] || (s[a] = !0)
                                };
                                return h.call(s, f, l), s[r] || (s[r] = t), w.apply(s, n.args), s[i] = !0, t
                            }

                            function y() {}

                            function v(t) {
                                const e = t.data;
                                return e.aborted = !0, E.apply(e.target, e.args)
                            }
                            const _ = sy(l, "open", (() => function(t, e) {
                                    return t[n] = 0 == e[2], t[s] = e[1], _.apply(t, e)
                                })),
                                m = "XMLHttpRequest.send",
                                b = Fg("fetchTaskAborting"),
                                T = Fg("fetchTaskScheduling"),
                                w = sy(l, "send", (() => function(t, r) {
                                    if (!0 === e.current[T]) return w.apply(t, r);
                                    if (t[n]) return w.apply(t, r); {
                                        const e = {
                                                target: t,
                                                url: t[s],
                                                isPeriodic: !1,
                                                args: r,
                                                aborted: !1
                                            },
                                            n = $g(m, y, e, g, v);
                                        t && !0 === t[a] && !e.aborted && n.state === d && n.invoke()
                                    }
                                })),
                                E = sy(l, "abort", (() => function(t, r) {
                                    const n = u(t);
                                    if (n && "string" == typeof n.type) {
                                        if (null == n.cancelFn || n.data && n.data.aborted) return;
                                        n.zone.cancelTask(n)
                                    } else if (!0 === e.current[b]) return E.apply(t, r)
                                }))
                        }
                    })), t.__load_patch("geolocation", (t => {
                        t.navigator && t.navigator.geolocation && Gg(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
                    })), t.__load_patch("PromiseRejectionEvent", ((t, e) => {
                        function r(e) {
                            return function(r) {
                                Ty(t, e).forEach((n => {
                                    const o = t.PromiseRejectionEvent;
                                    if (o) {
                                        const t = new o(e, {
                                            promise: r.promise,
                                            reason: r.rejection
                                        });
                                        n.invoke(t)
                                    }
                                }))
                            }
                        }
                        t.PromiseRejectionEvent && (e[Fg("unhandledPromiseRejectionHandler")] = r("unhandledrejection"), e[Fg("rejectionHandledHandler")] = r("rejectionhandled"))
                    })), t.__load_patch("queueMicrotask", ((t, e, r) => {
                        Ey(t, r)
                    }))
                }

                function xy(t) {
                    t.__load_patch("ZoneAwarePromise", ((t, e, r) => {
                        const n = Object.getOwnPropertyDescriptor,
                            o = Object.defineProperty;

                        function i(t) {
                            if (t && t.toString === Object.prototype.toString) {
                                const e = t.constructor && t.constructor.name;
                                return (e || "") + ": " + JSON.stringify(t)
                            }
                            return t ? t.toString() : Object.prototype.toString.call(t)
                        }
                        const s = r.symbol,
                            a = [],
                            c = !1 !== t[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                            l = s("Promise"),
                            u = s("then"),
                            h = "__creationTrace__";
                        r.onUnhandledError = t => {
                            if (r.showUncaughtError()) {
                                const e = t && t.rejection;
                                e ? console.error("Unhandled Promise rejection:", e instanceof Error ? e.message : e, "; Zone:", t.zone.name, "; Task:", t.task && t.task.source, "; Value:", e, e instanceof Error ? e.stack : void 0) : console.error(t)
                            }
                        }, r.microtaskDrainDone = () => {
                            for (; a.length;) {
                                const t = a.shift();
                                try {
                                    t.zone.runGuarded((() => {
                                        if (t.throwOriginal) throw t.rejection;
                                        throw t
                                    }))
                                } catch (t) {
                                    f(t)
                                }
                            }
                        };
                        const p = s("unhandledPromiseRejectionHandler");

                        function f(t) {
                            r.onUnhandledError(t);
                            try {
                                const r = e[p];
                                "function" == typeof r && r.call(this, t)
                            } catch (t) {}
                        }

                        function d(t) {
                            return t && t.then
                        }

                        function g(t) {
                            return t
                        }

                        function y(t) {
                            return U.reject(t)
                        }
                        const v = s("state"),
                            _ = s("value"),
                            m = s("finally"),
                            b = s("parentPromiseValue"),
                            T = s("parentPromiseState"),
                            w = "Promise.then",
                            E = null,
                            S = !0,
                            O = !1,
                            k = 0;

                        function C(t, e) {
                            return r => {
                                try {
                                    L(t, e, r)
                                } catch (e) {
                                    L(t, !1, e)
                                }
                            }
                        }
                        const A = function() {
                                let t = !1;
                                return function(e) {
                                    return function() {
                                        t || (t = !0, e.apply(null, arguments))
                                    }
                                }
                            },
                            I = "Promise resolved with itself",
                            P = s("currentTaskTrace");

                        function L(t, n, s) {
                            const l = A();
                            if (t === s) throw new TypeError(I);
                            if (t[v] === E) {
                                let u = null;
                                try {
                                    "object" != typeof s && "function" != typeof s || (u = s && s.then)
                                } catch (e) {
                                    return l((() => {
                                        L(t, !1, e)
                                    }))(), t
                                }
                                if (n !== O && s instanceof U && s.hasOwnProperty(v) && s.hasOwnProperty(_) && s[v] !== E) j(s), L(t, s[v], s[_]);
                                else if (n !== O && "function" == typeof u) try {
                                    u.call(s, l(C(t, n)), l(C(t, !1)))
                                } catch (e) {
                                    l((() => {
                                        L(t, !1, e)
                                    }))()
                                } else {
                                    t[v] = n;
                                    const l = t[_];
                                    if (t[_] = s, t[m] === m && n === S && (t[v] = t[T], t[_] = t[b]), n === O && s instanceof Error) {
                                        const t = e.currentTask && e.currentTask.data && e.currentTask.data[h];
                                        t && o(s, P, {
                                            configurable: !0,
                                            enumerable: !1,
                                            writable: !0,
                                            value: t
                                        })
                                    }
                                    for (let e = 0; e < l.length;) x(t, l[e++], l[e++], l[e++], l[e++]);
                                    if (0 == l.length && n == O) {
                                        t[v] = k;
                                        let n = s;
                                        try {
                                            throw new Error("Uncaught (in promise): " + i(s) + (s && s.stack ? "\n" + s.stack : ""))
                                        } catch (t) {
                                            n = t
                                        }
                                        c && (n.throwOriginal = !0), n.rejection = s, n.promise = t, n.zone = e.current, n.task = e.currentTask, a.push(n), r.scheduleMicroTask()
                                    }
                                }
                            }
                            return t
                        }
                        const R = s("rejectionHandledHandler");

                        function j(t) {
                            if (t[v] === k) {
                                try {
                                    const r = e[R];
                                    r && "function" == typeof r && r.call(this, {
                                        rejection: t[_],
                                        promise: t
                                    })
                                } catch (t) {}
                                t[v] = O;
                                for (let e = 0; e < a.length; e++) t === a[e].promise && a.splice(e, 1)
                            }
                        }

                        function x(t, e, r, n, o) {
                            j(t);
                            const i = t[v],
                                s = i ? "function" == typeof n ? n : g : "function" == typeof o ? o : y;
                            e.scheduleMicroTask(w, (() => {
                                try {
                                    const n = t[_],
                                        o = !!r && m === r[m];
                                    o && (r[b] = n, r[T] = i);
                                    const a = e.run(s, void 0, o && s !== y && s !== g ? [] : [n]);
                                    L(r, !0, a)
                                } catch (t) {
                                    L(r, !1, t)
                                }
                            }), r)
                        }
                        const N = "function ZoneAwarePromise() { [native code] }",
                            M = function() {},
                            D = t.AggregateError;
                        class U {
                            static toString() {
                                return N
                            }
                            static resolve(t) {
                                return t instanceof U ? t : L(new this(null), S, t)
                            }
                            static reject(t) {
                                return L(new this(null), O, t)
                            }
                            static withResolvers() {
                                const t = {};
                                return t.promise = new U(((e, r) => {
                                    t.resolve = e, t.reject = r
                                })), t
                            }
                            static any(t) {
                                if (!t || "function" != typeof t[Symbol.iterator]) return Promise.reject(new D([], "All promises were rejected"));
                                const e = [];
                                let r = 0;
                                try {
                                    for (let n of t) r++, e.push(U.resolve(n))
                                } catch (t) {
                                    return Promise.reject(new D([], "All promises were rejected"))
                                }
                                if (0 === r) return Promise.reject(new D([], "All promises were rejected"));
                                let n = !1;
                                const o = [];
                                return new U(((t, i) => {
                                    for (let s = 0; s < e.length; s++) e[s].then((e => {
                                        n || (n = !0, t(e))
                                    }), (t => {
                                        o.push(t), r--, 0 === r && (n = !0, i(new D(o, "All promises were rejected")))
                                    }))
                                }))
                            }
                            static race(t) {
                                let e, r, n = new this(((t, n) => {
                                    e = t, r = n
                                }));

                                function o(t) {
                                    e(t)
                                }

                                function i(t) {
                                    r(t)
                                }
                                for (let e of t) d(e) || (e = this.resolve(e)), e.then(o, i);
                                return n
                            }
                            static all(t) {
                                return U.allWithCallback(t)
                            }
                            static allSettled(t) {
                                return (this && this.prototype instanceof U ? this : U).allWithCallback(t, {
                                    thenCallback: t => ({
                                        status: "fulfilled",
                                        value: t
                                    }),
                                    errorCallback: t => ({
                                        status: "rejected",
                                        reason: t
                                    })
                                })
                            }
                            static allWithCallback(t, e) {
                                let r, n, o = new this(((t, e) => {
                                        r = t, n = e
                                    })),
                                    i = 2,
                                    s = 0;
                                const a = [];
                                for (let o of t) {
                                    d(o) || (o = this.resolve(o));
                                    const t = s;
                                    try {
                                        o.then((n => {
                                            a[t] = e ? e.thenCallback(n) : n, i--, 0 === i && r(a)
                                        }), (o => {
                                            e ? (a[t] = e.errorCallback(o), i--, 0 === i && r(a)) : n(o)
                                        }))
                                    } catch (t) {
                                        n(t)
                                    }
                                    i++, s++
                                }
                                return i -= 2, 0 === i && r(a), o
                            }
                            constructor(t) {
                                const e = this;
                                if (!(e instanceof U)) throw new Error("Must be an instanceof Promise.");
                                e[v] = E, e[_] = [];
                                try {
                                    const r = A();
                                    t && t(r(C(e, S)), r(C(e, O)))
                                } catch (t) {
                                    L(e, !1, t)
                                }
                            }
                            get[Symbol.toStringTag]() {
                                return "Promise"
                            }
                            get[Symbol.species]() {
                                return U
                            }
                            then(t, r) {
                                var n;
                                let o = null === (n = this.constructor) || void 0 === n ? void 0 : n[Symbol.species];
                                o && "function" == typeof o || (o = this.constructor || U);
                                const i = new o(M),
                                    s = e.current;
                                return this[v] == E ? this[_].push(s, i, t, r) : x(this, s, i, t, r), i
                            } catch (t) {
                                return this.then(null, t)
                            } finally(t) {
                                var r;
                                let n = null === (r = this.constructor) || void 0 === r ? void 0 : r[Symbol.species];
                                n && "function" == typeof n || (n = U);
                                const o = new n(M);
                                o[m] = m;
                                const i = e.current;
                                return this[v] == E ? this[_].push(i, o, t, t) : x(this, i, o, t, t), o
                            }
                        }
                        U.resolve = U.resolve, U.reject = U.reject, U.race = U.race, U.all = U.all;
                        const W = t[l] = t.Promise;
                        t.Promise = U;
                        const B = s("thenPatched");

                        function $(t) {
                            const e = t.prototype,
                                r = n(e, "then");
                            if (r && (!1 === r.writable || !r.configurable)) return;
                            const o = e.then;
                            e[u] = o, t.prototype.then = function(t, e) {
                                return new U(((t, e) => {
                                    o.call(this, t, e)
                                })).then(t, e)
                            }, t[B] = !0
                        }

                        function F(t) {
                            return function(e, r) {
                                let n = t.apply(e, r);
                                if (n instanceof U) return n;
                                let o = n.constructor;
                                return o[B] || $(o), n
                            }
                        }
                        return r.patchThen = $, W && ($(W), sy(t, "fetch", (t => F(t)))), Promise[e.__symbol__("uncaughtPromiseErrors")] = a, U
                    }))
                }

                function Ny(t) {
                    t.__load_patch("toString", (t => {
                        const e = Function.prototype.toString,
                            r = Fg("OriginalDelegate"),
                            n = Fg("Promise"),
                            o = Fg("Error"),
                            i = function() {
                                if ("function" == typeof this) {
                                    const i = this[r];
                                    if (i) return "function" == typeof i ? e.call(i) : Object.prototype.toString.call(i);
                                    if (this === Promise) {
                                        const r = t[n];
                                        if (r) return e.call(r)
                                    }
                                    if (this === Error) {
                                        const r = t[o];
                                        if (r) return e.call(r)
                                    }
                                }
                                return e.call(this)
                            };
                        i[r] = e, Function.prototype.toString = i;
                        const s = Object.prototype.toString,
                            a = "[object Promise]";
                        Object.prototype.toString = function() {
                            return "function" == typeof Promise && this instanceof Promise ? a : s.call(this)
                        }
                    }))
                }

                function My(t, e, r, n, o) {
                    const i = Zone.__symbol__(n);
                    if (e[i]) return;
                    const s = e[i] = e[n];
                    e[n] = function(i, a, c) {
                        return a && a.prototype && o.forEach((function(e) {
                            const o = `${r}.${n}::` + e,
                                i = a.prototype;
                            try {
                                if (i.hasOwnProperty(e)) {
                                    const r = t.ObjectGetOwnPropertyDescriptor(i, e);
                                    r && r.value ? (r.value = t.wrapWithCurrentZone(r.value, o), t._redefineProperty(a.prototype, e, r)) : i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                                } else i[e] && (i[e] = t.wrapWithCurrentZone(i[e], o))
                            } catch {}
                        })), s.call(e, i, a, c)
                    }, t.attachOriginToPatched(e[n], s)
                }

                function Dy(t) {
                    t.__load_patch("util", ((t, e, r) => {
                        const n = Ly(t);
                        r.patchOnProperties = ny, r.patchMethod = sy, r.bindArguments = Zg, r.patchMacroTask = ay;
                        const o = e.__symbol__("BLACK_LISTED_EVENTS"),
                            i = e.__symbol__("UNPATCHED_EVENTS");
                        t[i] && (t[o] = t[i]), t[o] && (e[o] = e[i] = t[o]), r.patchEventPrototype = wy, r.patchEventTarget = by, r.isIEOrEdge = py, r.ObjectDefineProperty = Ig, r.ObjectGetOwnPropertyDescriptor = Ag, r.ObjectCreate = Lg, r.ArraySlice = Rg, r.patchClass = iy, r.wrapWithCurrentZone = Bg, r.filterProperties = Iy, r.attachOriginToPatched = cy, r._redefineProperty = Object.defineProperty, r.patchCallbacks = My, r.getGlobalObjects = () => ({
                            globalSources: yy,
                            zoneSymbolEventNames: gy,
                            eventNames: n,
                            isBrowser: Jg,
                            isMix: Yg,
                            isNode: Qg,
                            TRUE_STR: Dg,
                            FALSE_STR: Ug,
                            ZONE_SYMBOL_PREFIX: Wg,
                            ADD_EVENT_LISTENER_STR: jg,
                            REMOVE_EVENT_LISTENER_STR: xg
                        })
                    }))
                }

                function Uy(t) {
                    xy(t), Ny(t), Dy(t)
                }
                const Wy = Cg();
                Uy(Wy), jy(Wy);
                var By = function() {
                        function t() {}
                        return t.prototype.emit = function(t) {}, t
                    }(),
                    $y = new(function() {
                        function t() {}
                        return t.prototype.getLogger = function(t, e, r) {
                            return new By
                        }, t
                    }()),
                    Fy = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof E ? E : {},
                    Hy = Symbol.for("io.opentelemetry.js.api.logs"),
                    zy = Fy;

                function Vy(t, e, r) {
                    return function(n) {
                        return n === t ? e : r
                    }
                }
                var qy = 1,
                    Zy = function() {
                        function t() {}
                        return t.getInstance = function() {
                            return this._instance || (this._instance = new t), this._instance
                        }, t.prototype.setGlobalLoggerProvider = function(t) {
                            return zy[Hy] ? this.getLoggerProvider() : (zy[Hy] = Vy(qy, t, $y), t)
                        }, t.prototype.getLoggerProvider = function() {
                            var t, e;
                            return null !== (e = null === (t = zy[Hy]) || void 0 === t ? void 0 : t.call(zy, qy)) && void 0 !== e ? e : $y
                        }, t.prototype.getLogger = function(t, e, r) {
                            return this.getLoggerProvider().getLogger(t, e, r)
                        }, t.prototype.disable = function() {
                            delete zy[Hy]
                        }, t
                    }().getInstance();

                function Gy(t) {
                    return "function" == typeof t
                }
                var Xy = console.error.bind(console);

                function Ky(t, e, r) {
                    var n = !!t[e] && t.propertyIsEnumerable(e);
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: n,
                        writable: !0,
                        value: r
                    })
                }

                function Qy(t) {
                    t && t.logger && (Gy(t.logger) ? Xy = t.logger : Xy("new logger isn't a function, not replacing"))
                }

                function Jy(t, e, r) {
                    if (t && t[e]) {
                        if (!r) return Xy("no wrapper function"), void Xy((new Error).stack);
                        if (Gy(t[e]) && Gy(r)) {
                            var n = t[e],
                                o = r(n, e);
                            return Ky(o, "__original", n), Ky(o, "__unwrap", (function() {
                                t[e] === o && Ky(t, e, n)
                            })), Ky(o, "__wrapped", !0), Ky(t, e, o), o
                        }
                        Xy("original object and wrapper must be functions")
                    } else Xy("no original function " + e + " to wrap")
                }

                function Yy(t, e, r) {
                    if (!t) return Xy("must provide one or more modules to patch"), void Xy((new Error).stack);
                    Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
                        e.forEach((function(e) {
                            Jy(t, e, r)
                        }))
                    })) : Xy("must provide one or more functions to wrap on modules")
                }

                function tv(t, e) {
                    return t && t[e] ? t[e].__unwrap ? t[e].__unwrap() : void Xy("no original to unwrap to -- has " + e + " already been unwrapped?") : (Xy("no function to unwrap."), void Xy((new Error).stack))
                }

                function ev(t, e) {
                    if (!t) return Xy("must provide one or more modules to patch"), void Xy((new Error).stack);
                    Array.isArray(t) || (t = [t]), e && Array.isArray(e) ? t.forEach((function(t) {
                        e.forEach((function(e) {
                            tv(t, e)
                        }))
                    })) : Xy("must provide one or more functions to unwrap on modules")
                }
                Qy.wrap = Jy, Qy.massWrap = Yy, Qy.unwrap = tv, Qy.massUnwrap = ev;
                var rv = Qy,
                    nv = function() {
                        return nv = Object.assign || function(t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }, nv.apply(this, arguments)
                    },
                    ov = function() {
                        function t(t, e, r) {
                            this.instrumentationName = t, this.instrumentationVersion = e, this._wrap = rv.wrap, this._unwrap = rv.unwrap, this._massWrap = rv.massWrap, this._massUnwrap = rv.massUnwrap, this._config = nv({
                                enabled: !0
                            }, r), this._diag = Ft.createComponentLogger({
                                namespace: t
                            }), this._tracer = re.getTracer(t, e), this._meter = Vt.getMeter(t, e), this._logger = Zy.getLogger(t, e), this._updateMetricInstruments()
                        }
                        return Object.defineProperty(t.prototype, "meter", {
                            get: function() {
                                return this._meter
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.setMeterProvider = function(t) {
                            this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
                        }, Object.defineProperty(t.prototype, "logger", {
                            get: function() {
                                return this._logger
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.setLoggerProvider = function(t) {
                            this._logger = t.getLogger(this.instrumentationName, this.instrumentationVersion)
                        }, t.prototype.getModuleDefinitions = function() {
                            var t, e = null !== (t = this.init()) && void 0 !== t ? t : [];
                            return Array.isArray(e) ? e : [e]
                        }, t.prototype._updateMetricInstruments = function() {}, t.prototype.getConfig = function() {
                            return this._config
                        }, t.prototype.setConfig = function(t) {
                            this._config = nv({}, t)
                        }, t.prototype.setTracerProvider = function(t) {
                            this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion)
                        }, Object.defineProperty(t.prototype, "tracer", {
                            get: function() {
                                return this._tracer
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype._runSpanCustomizationHook = function(t, e, r, n) {
                            if (t) try {
                                t(r, n)
                            } catch (t) {
                                this._diag.error("Error running span customization hook due to exception in handler", {
                                    triggerName: e
                                }, t)
                            }
                        }, t
                    }(),
                    iv = function() {
                        var t = function(e, r) {
                            return t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                            }, t(e, r)
                        };
                        return function(e, r) {
                            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }(),
                    sv = function(t) {
                        function e(e, r, n) {
                            var o = t.call(this, e, r, n) || this;
                            return o._config.enabled && o.enable(), o
                        }
                        return iv(e, t), e
                    }(ov);

                function av(t, e, r) {
                    var n, o;
                    try {
                        o = t()
                    } catch (t) {
                        n = t
                    } finally {
                        if (e(n, o), n && !r) throw n;
                        return o
                    }
                }

                function cv(t) {
                    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
                }
                var lv, uv = "exception",
                    hv = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    },
                    pv = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    fv = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    dv = function() {
                        function t(t, e, r, n, o, i, s, a, c, l) {
                            void 0 === s && (s = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                                code: Mt.UNSET
                            }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = r, this._spanContext = n, this.parentSpanId = i, this.kind = o, this.links = s;
                            var u = Date.now();
                            this._performanceStartTime = Je.now(), this._performanceOffset = u - (this._performanceStartTime + Cr()), this._startTimeProvided = null != a, this.startTime = this._getTime(null != a ? a : u), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != l && this.setAttributes(l), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
                        }
                        return t.prototype.spanContext = function() {
                            return this._spanContext
                        }, t.prototype.setAttribute = function(t, e) {
                            return null == e || this._isSpanEnded() ? this : 0 === t.length ? (Ft.warn("Invalid attribute key: " + t), this) : we(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this) : (Ft.warn("Invalid attribute value set for key: " + t), this)
                        }, t.prototype.setAttributes = function(t) {
                            var e, r;
                            try {
                                for (var n = hv(Object.entries(t)), o = n.next(); !o.done; o = n.next()) {
                                    var i = pv(o.value, 2),
                                        s = i[0],
                                        a = i[1];
                                    this.setAttribute(s, a)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (r = n.return) && r.call(n)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return this
                        }, t.prototype.addEvent = function(t, e, r) {
                            if (this._isSpanEnded()) return this;
                            if (0 === this._spanLimits.eventCountLimit) return Ft.warn("No events allowed."), this._droppedEventsCount++, this;
                            this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && Ft.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), xr(e) && (xr(r) || (r = e), e = void 0);
                            var n = be(e);
                            return this.events.push({
                                name: t,
                                attributes: n,
                                time: this._getTime(r),
                                droppedAttributesCount: 0
                            }), this
                        }, t.prototype.addLink = function(t) {
                            return this.links.push(t), this
                        }, t.prototype.addLinks = function(t) {
                            var e;
                            return (e = this.links).push.apply(e, fv([], pv(t), !1)), this
                        }, t.prototype.setStatus = function(t) {
                            return this._isSpanEnded() || (this.status = t), this
                        }, t.prototype.updateName = function(t) {
                            return this._isSpanEnded() || (this.name = t), this
                        }, t.prototype.end = function(t) {
                            this._isSpanEnded() ? Ft.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.") : (this._ended = !0, this.endTime = this._getTime(t), this._duration = Pr(this.startTime, this.endTime), this._duration[0] < 0 && (Ft.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && Ft.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this))
                        }, t.prototype._getTime = function(t) {
                            if ("number" == typeof t && t < Je.now()) return Ar(t + this._performanceOffset);
                            if ("number" == typeof t) return kr(t);
                            if (t instanceof Date) return kr(t.getTime());
                            if (jr(t)) return t;
                            if (this._startTimeProvided) return kr(Date.now());
                            var e = Je.now() - this._performanceStartTime;
                            return Nr(this.startTime, kr(e))
                        }, t.prototype.isRecording = function() {
                            return !1 === this._ended
                        }, t.prototype.recordException = function(t, e) {
                            var r = {};
                            "string" == typeof t ? r[cr] = t : t && (t.code ? r[ar] = t.code.toString() : t.name && (r[ar] = t.name), t.message && (r[cr] = t.message), t.stack && (r[lr] = t.stack)), r[ar] || r[cr] ? this.addEvent(uv, r, e) : Ft.warn("Failed to record an exception " + t)
                        }, Object.defineProperty(t.prototype, "duration", {
                            get: function() {
                                return this._duration
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ended", {
                            get: function() {
                                return this._ended
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "droppedAttributesCount", {
                            get: function() {
                                return this._droppedAttributesCount
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "droppedEventsCount", {
                            get: function() {
                                return this._droppedEventsCount
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "droppedLinksCount", {
                            get: function() {
                                return this._droppedLinksCount
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype._isSpanEnded = function() {
                            return this._ended && Ft.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
                        }, t.prototype._truncateToLimitUtil = function(t, e) {
                            return t.length <= e ? t : t.substr(0, e)
                        }, t.prototype._truncateToSize = function(t) {
                            var e = this,
                                r = this._attributeValueLengthLimit;
                            return r <= 0 ? (Ft.warn("Attribute value limit must be positive, got " + r), t) : "string" == typeof t ? this._truncateToLimitUtil(t, r) : Array.isArray(t) ? t.map((function(t) {
                                return "string" == typeof t ? e._truncateToLimitUtil(t, r) : t
                            })) : t
                        }, t
                    }();
                ! function(t) {
                    t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
                }(lv || (lv = {}));
                var gv = function() {
                        function t() {}
                        return t.prototype.shouldSample = function() {
                            return {
                                decision: lv.NOT_RECORD
                            }
                        }, t.prototype.toString = function() {
                            return "AlwaysOffSampler"
                        }, t
                    }(),
                    yv = function() {
                        function t() {}
                        return t.prototype.shouldSample = function() {
                            return {
                                decision: lv.RECORD_AND_SAMPLED
                            }
                        }, t.prototype.toString = function() {
                            return "AlwaysOnSampler"
                        }, t
                    }(),
                    vv = function() {
                        function t(t) {
                            var e, r, n, o;
                            this._root = t.root, this._root || (Pe(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new yv), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new yv, this._remoteParentNotSampled = null !== (r = t.remoteParentNotSampled) && void 0 !== r ? r : new gv, this._localParentSampled = null !== (n = t.localParentSampled) && void 0 !== n ? n : new yv, this._localParentNotSampled = null !== (o = t.localParentNotSampled) && void 0 !== o ? o : new gv
                        }
                        return t.prototype.shouldSample = function(t, e, r, n, o, i) {
                            var s = re.getSpanContext(t);
                            return s && It(s) ? s.isRemote ? s.traceFlags & M.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, r, n, o, i) : this._remoteParentNotSampled.shouldSample(t, e, r, n, o, i) : s.traceFlags & M.SAMPLED ? this._localParentSampled.shouldSample(t, e, r, n, o, i) : this._localParentNotSampled.shouldSample(t, e, r, n, o, i) : this._root.shouldSample(t, e, r, n, o, i)
                        }, t.prototype.toString = function() {
                            return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
                        }, t
                    }(),
                    _v = function() {
                        function t(t) {
                            void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
                        }
                        return t.prototype.shouldSample = function(t, e) {
                            return {
                                decision: Ct(e) && this._accumulate(e) < this._upperBound ? lv.RECORD_AND_SAMPLED : lv.NOT_RECORD
                            }
                        }, t.prototype.toString = function() {
                            return "TraceIdRatioBased{" + this._ratio + "}"
                        }, t.prototype._normalize = function(t) {
                            return "number" != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
                        }, t.prototype._accumulate = function(t) {
                            for (var e = 0, r = 0; r < t.length / 8; r++) {
                                var n = 8 * r;
                                e = (e ^ parseInt(t.slice(n, n + 8), 16)) >>> 0
                            }
                            return e
                        }, t
                    }(),
                    mv = Ke(),
                    bv = Ae.AlwaysOn,
                    Tv = 1;

                function wv() {
                    return {
                        sampler: Ev(mv),
                        forceFlushTimeoutMillis: 3e4,
                        generalLimits: {
                            attributeValueLengthLimit: Ke().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                            attributeCountLimit: Ke().OTEL_ATTRIBUTE_COUNT_LIMIT
                        },
                        spanLimits: {
                            attributeValueLengthLimit: Ke().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                            attributeCountLimit: Ke().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                            linkCountLimit: Ke().OTEL_SPAN_LINK_COUNT_LIMIT,
                            eventCountLimit: Ke().OTEL_SPAN_EVENT_COUNT_LIMIT,
                            attributePerEventCountLimit: Ke().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                            attributePerLinkCountLimit: Ke().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
                        }
                    }
                }

                function Ev(t) {
                    switch (void 0 === t && (t = Ke()), t.OTEL_TRACES_SAMPLER) {
                        case Ae.AlwaysOn:
                            return new yv;
                        case Ae.AlwaysOff:
                            return new gv;
                        case Ae.ParentBasedAlwaysOn:
                            return new vv({
                                root: new yv
                            });
                        case Ae.ParentBasedAlwaysOff:
                            return new vv({
                                root: new gv
                            });
                        case Ae.TraceIdRatio:
                            return new _v(Sv(t));
                        case Ae.ParentBasedTraceIdRatio:
                            return new vv({
                                root: new _v(Sv(t))
                            });
                        default:
                            return Ft.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + bv + '".'), new yv
                    }
                }

                function Sv(t) {
                    if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return Ft.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + Tv + "."), Tv;
                    var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
                    return isNaN(e) ? (Ft.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + Tv + "."), Tv) : e < 0 || e > 1 ? (Ft.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + Tv + "."), Tv) : e
                }

                function Ov(t) {
                    var e = {
                            sampler: Ev()
                        },
                        r = wv(),
                        n = Object.assign({}, r, e, t);
                    return n.generalLimits = Object.assign({}, r.generalLimits, t.generalLimits || {}), n.spanLimits = Object.assign({}, r.spanLimits, t.spanLimits || {}), n
                }

                function kv(t) {
                    var e, r, n, o, i, s, a, c, l, u, h, p, f = Object.assign({}, t.spanLimits),
                        d = Qe();
                    return f.attributeCountLimit = null !== (s = null !== (i = null !== (o = null !== (r = null === (e = t.spanLimits) || void 0 === e ? void 0 : e.attributeCountLimit) && void 0 !== r ? r : null === (n = t.generalLimits) || void 0 === n ? void 0 : n.attributeCountLimit) && void 0 !== o ? o : d.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== i ? i : d.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : We, f.attributeValueLengthLimit = null !== (p = null !== (h = null !== (u = null !== (c = null === (a = t.spanLimits) || void 0 === a ? void 0 : a.attributeValueLengthLimit) && void 0 !== c ? c : null === (l = t.generalLimits) || void 0 === l ? void 0 : l.attributeValueLengthLimit) && void 0 !== u ? u : d.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== h ? h : d.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== p ? p : Ue, Object.assign({}, t, {
                        spanLimits: f
                    })
                }
                var Cv = function() {
                        function t(t, e) {
                            this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
                            var r = Ke();
                            this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : r.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : r.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : r.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : r.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new xn(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Ft.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
                        }
                        return t.prototype.forceFlush = function() {
                            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
                        }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
                            this._shutdownOnce.isCalled || 0 != (t.spanContext().traceFlags & M.SAMPLED) && this._addToBuffer(t)
                        }, t.prototype.shutdown = function() {
                            return this._shutdownOnce.call()
                        }, t.prototype._shutdown = function() {
                            var t = this;
                            return Promise.resolve().then((function() {
                                return t.onShutdown()
                            })).then((function() {
                                return t._flushAll()
                            })).then((function() {
                                return t._exporter.shutdown()
                            }))
                        }, t.prototype._addToBuffer = function(t) {
                            if (this._finishedSpans.length >= this._maxQueueSize) return 0 === this._droppedSpansCount && Ft.debug("maxQueueSize reached, dropping spans"), void this._droppedSpansCount++;
                            this._droppedSpansCount > 0 && (Ft.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
                        }, t.prototype._flushAll = function() {
                            var t = this;
                            return new Promise((function(e, r) {
                                for (var n = [], o = 0, i = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize); o < i; o++) n.push(t._flushOneBatch());
                                Promise.all(n).then((function() {
                                    e()
                                })).catch(r)
                            }))
                        }, t.prototype._flushOneBatch = function() {
                            var t = this;
                            return this._clearTimer(), 0 === this._finishedSpans.length ? Promise.resolve() : new Promise((function(e, r) {
                                var n = setTimeout((function() {
                                    r(new Error("Timeout"))
                                }), t._exportTimeoutMillis);
                                $t.with(oe($t.active()), (function() {
                                    var o;
                                    t._finishedSpans.length <= t._maxExportBatchSize ? (o = t._finishedSpans, t._finishedSpans = []) : o = t._finishedSpans.splice(0, t._maxExportBatchSize);
                                    for (var i = function() {
                                            return t._exporter.export(o, (function(t) {
                                                var o;
                                                clearTimeout(n), t.code === Tr.SUCCESS ? e() : r(null !== (o = t.error) && void 0 !== o ? o : new Error("BatchSpanProcessor: span export failed"))
                                            }))
                                        }, s = null, a = 0, c = o.length; a < c; a++) {
                                        var l = o[a];
                                        l.resource.asyncAttributesPending && l.resource.waitForAsyncAttributes && (null != s || (s = []), s.push(l.resource.waitForAsyncAttributes()))
                                    }
                                    null === s ? i() : Promise.all(s).then(i, (function(t) {
                                        Pe(t), r(t)
                                    }))
                                }))
                            }))
                        }, t.prototype._maybeStartTimer = function() {
                            var t = this;
                            if (!this._isExporting) {
                                var e = function() {
                                    t._isExporting = !0, t._flushOneBatch().finally((function() {
                                        t._isExporting = !1, t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer())
                                    })).catch((function(e) {
                                        t._isExporting = !1, Pe(e)
                                    }))
                                };
                                if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                                void 0 === this._timer && (this._timer = setTimeout((function() {
                                    return e()
                                }), this._scheduledDelayMillis), br(this._timer))
                            }
                        }, t.prototype._clearTimer = function() {
                            void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
                        }, t
                    }(),
                    Av = function() {
                        var t = function(e, r) {
                            return t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                            }, t(e, r)
                        };
                        return function(e, r) {
                            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }(),
                    Iv = function(t) {
                        function e(e, r) {
                            var n = t.call(this, e, r) || this;
                            return n.onInit(r), n
                        }
                        return Av(e, t), e.prototype.onInit = function(t) {
                            var e = this;
                            !0 !== (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                                "hidden" === document.visibilityState && e.forceFlush()
                            }, this._pageHideListener = function() {
                                e.forceFlush()
                            }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
                        }, e.prototype.onShutdown = function() {
                            "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
                        }, e
                    }(Cv),
                    Pv = 8,
                    Lv = 16,
                    Rv = function() {
                        function t() {
                            this.generateTraceId = xv(Lv), this.generateSpanId = xv(Pv)
                        }
                        return t
                    }(),
                    jv = Array(32);

                function xv(t) {
                    return function() {
                        for (var e = 0; e < 2 * t; e++) jv[e] = Math.floor(16 * Math.random()) + 48, jv[e] >= 58 && (jv[e] += 39);
                        return String.fromCharCode.apply(null, jv.slice(0, 2 * t))
                    }
                }
                var Nv = function() {
                    function t(t, e, r) {
                        this._tracerProvider = r;
                        var n = Ov(e);
                        this._sampler = n.sampler, this._generalLimits = n.generalLimits, this._spanLimits = n.spanLimits, this._idGenerator = e.idGenerator || new Rv, this.resource = r.resource, this.instrumentationLibrary = t
                    }
                    return t.prototype.startSpan = function(t, e, r) {
                        var n, o, i;
                        void 0 === e && (e = {}), void 0 === r && (r = $t.active()), e.root && (r = re.deleteSpan(r));
                        var s = re.getSpan(r);
                        if (ie(r)) return Ft.debug("Instrumentation suppressed, returning Noop Span"), re.wrapSpanContext(yt);
                        var a, c, l, u = null == s ? void 0 : s.spanContext(),
                            h = this._idGenerator.generateSpanId();
                        u && re.isSpanContextValid(u) ? (a = u.traceId, c = u.traceState, l = u.spanId) : a = this._idGenerator.generateTraceId();
                        var p = null !== (n = e.kind) && void 0 !== n ? n : Nt.INTERNAL,
                            f = (null !== (o = e.links) && void 0 !== o ? o : []).map((function(t) {
                                return {
                                    context: t.context,
                                    attributes: be(t.attributes)
                                }
                            })),
                            d = be(e.attributes),
                            g = this._sampler.shouldSample(r, a, t, p, d, f);
                        c = null !== (i = g.traceState) && void 0 !== i ? i : c;
                        var y = {
                            traceId: a,
                            spanId: h,
                            traceFlags: g.decision === xt.RECORD_AND_SAMPLED ? M.SAMPLED : M.NONE,
                            traceState: c
                        };
                        if (g.decision === xt.NOT_RECORD) return Ft.debug("Recording is off, propagating context in a non-recording span"), re.wrapSpanContext(y);
                        var v = be(Object.assign(d, g.attributes));
                        return new dv(this, r, t, y, p, l, f, e.startTime, void 0, v)
                    }, t.prototype.startActiveSpan = function(t, e, r, n) {
                        var o, i, s;
                        if (!(arguments.length < 2)) {
                            2 === arguments.length ? s = e : 3 === arguments.length ? (o = e, s = r) : (o = e, i = r, s = n);
                            var a = null != i ? i : $t.active(),
                                c = this.startSpan(t, o, a),
                                l = re.setSpan(a, c);
                            return $t.with(l, s, void 0, c)
                        }
                    }, t.prototype.getGeneralLimits = function() {
                        return this._generalLimits
                    }, t.prototype.getSpanLimits = function() {
                        return this._spanLimits
                    }, t.prototype.getActiveSpanProcessor = function() {
                        return this._tracerProvider.getActiveSpanProcessor()
                    }, t
                }();

                function Mv() {
                    return "unknown_service"
                }
                var Dv, Uv = function() {
                        return Uv = Object.assign || function(t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return t
                        }, Uv.apply(this, arguments)
                    },
                    Wv = function(t, e, r, n) {
                        function o(t) {
                            return t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))
                        }
                        return new(r || (r = Promise))((function(r, i) {
                            function s(t) {
                                try {
                                    c(n.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function a(t) {
                                try {
                                    c(n.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(t) {
                                t.done ? r(t.value) : o(t.value).then(s, a)
                            }
                            c((n = n.apply(t, e || [])).next())
                        }))
                    },
                    Bv = function(t, e) {
                        var r, n, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function a(t) {
                            return function(e) {
                                return c([t, e])
                            }
                        }

                        function c(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }
                    },
                    $v = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    Fv = function() {
                        function t(t, e) {
                            var r, n = this;
                            this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (r = this._attributes) && void 0 !== r ? r : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then((function(t) {
                                return n._attributes = Object.assign({}, n._attributes, t), n.asyncAttributesPending = !1, t
                            }), (function(t) {
                                return Ft.debug("a resource's async attributes promise rejected: %s", t), n.asyncAttributesPending = !1, {}
                            }))
                        }
                        return t.empty = function() {
                            return t.EMPTY
                        }, t.default = function() {
                            var e;
                            return new t(((e = {})[dr] = Mv(), e[yr] = mr[yr], e[gr] = mr[gr], e[vr] = mr[vr], e))
                        }, Object.defineProperty(t.prototype, "attributes", {
                            get: function() {
                                var t;
                                return this.asyncAttributesPending && Ft.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.waitForAsyncAttributes = function() {
                            return Wv(this, void 0, void 0, (function() {
                                return Bv(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.merge = function(e) {
                            var r, n = this;
                            if (!e) return this;
                            var o = Uv(Uv({}, this._syncAttributes), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes);
                            if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new t(o);
                            var i = Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then((function(t) {
                                var r, o = $v(t, 2),
                                    i = o[0],
                                    s = o[1];
                                return Uv(Uv(Uv(Uv({}, n._syncAttributes), i), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes), s)
                            }));
                            return new t(o, i)
                        }, t.EMPTY = new t({}), t
                    }(),
                    Hv = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    },
                    zv = function() {
                        function t(t) {
                            this._spanProcessors = t
                        }
                        return t.prototype.forceFlush = function() {
                            var t, e, r = [];
                            try {
                                for (var n = Hv(this._spanProcessors), o = n.next(); !o.done; o = n.next()) {
                                    var i = o.value;
                                    r.push(i.forceFlush())
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (e = n.return) && e.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return new Promise((function(t) {
                                Promise.all(r).then((function() {
                                    t()
                                })).catch((function(e) {
                                    Pe(e || new Error("MultiSpanProcessor: forceFlush failed")), t()
                                }))
                            }))
                        }, t.prototype.onStart = function(t, e) {
                            var r, n;
                            try {
                                for (var o = Hv(this._spanProcessors), i = o.next(); !i.done; i = o.next()) i.value.onStart(t, e)
                            } catch (t) {
                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }, t.prototype.onEnd = function(t) {
                            var e, r;
                            try {
                                for (var n = Hv(this._spanProcessors), o = n.next(); !o.done; o = n.next()) o.value.onEnd(t)
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (r = n.return) && r.call(n)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                        }, t.prototype.shutdown = function() {
                            var t, e, r = [];
                            try {
                                for (var n = Hv(this._spanProcessors), o = n.next(); !o.done; o = n.next()) {
                                    var i = o.value;
                                    r.push(i.shutdown())
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (e = n.return) && e.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return new Promise((function(t, e) {
                                Promise.all(r).then((function() {
                                    t()
                                }), e)
                            }))
                        }, t
                    }(),
                    Vv = function() {
                        function t() {}
                        return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
                            return Promise.resolve()
                        }, t.prototype.forceFlush = function() {
                            return Promise.resolve()
                        }, t
                    }();
                ! function(t) {
                    t[t.resolved = 0] = "resolved", t[t.timeout = 1] = "timeout", t[t.error = 2] = "error", t[t.unresolved = 3] = "unresolved"
                }(Dv || (Dv = {}));
                var qv, Zv, Gv, Xv = function() {
                        function t(t) {
                            var e;
                            void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
                            var r = mn({}, wv(), kv(t));
                            this.resource = null !== (e = r.resource) && void 0 !== e ? e : Fv.empty(), this.resource = Fv.default().merge(this.resource), this._config = Object.assign({}, r, {
                                resource: this.resource
                            });
                            var n = this._buildExporterFromEnv();
                            if (void 0 !== n) {
                                var o = new Iv(n);
                                this.activeSpanProcessor = o
                            } else this.activeSpanProcessor = new Vv
                        }
                        return t.prototype.getTracer = function(t, e, r) {
                            var n = t + "@" + (e || "") + ":" + ((null == r ? void 0 : r.schemaUrl) || "");
                            return this._tracers.has(n) || this._tracers.set(n, new Nv({
                                name: t,
                                version: e,
                                schemaUrl: null == r ? void 0 : r.schemaUrl
                            }, this._config, this)), this._tracers.get(n)
                        }, t.prototype.addSpanProcessor = function(t) {
                            0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch((function(t) {
                                return Ft.error("Error while trying to shutdown current span processor", t)
                            })), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new zv(this._registeredSpanProcessors)
                        }, t.prototype.getActiveSpanProcessor = function() {
                            return this.activeSpanProcessor
                        }, t.prototype.register = function(t) {
                            void 0 === t && (t = {}), re.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && $t.setGlobalContextManager(t.contextManager), t.propagator && te.setGlobalPropagator(t.propagator)
                        }, t.prototype.forceFlush = function() {
                            var t = this._config.forceFlushTimeoutMillis,
                                e = this._registeredSpanProcessors.map((function(e) {
                                    return new Promise((function(r) {
                                        var n, o = setTimeout((function() {
                                            r(new Error("Span processor did not completed within timeout period of " + t + " ms")), n = Dv.timeout
                                        }), t);
                                        e.forceFlush().then((function() {
                                            clearTimeout(o), n !== Dv.timeout && (n = Dv.resolved, r(n))
                                        })).catch((function(t) {
                                            clearTimeout(o), n = Dv.error, r(t)
                                        }))
                                    }))
                                }));
                            return new Promise((function(t, r) {
                                Promise.all(e).then((function(e) {
                                    var n = e.filter((function(t) {
                                        return t !== Dv.resolved
                                    }));
                                    n.length > 0 ? r(n) : t()
                                })).catch((function(t) {
                                    return r([t])
                                }))
                            }))
                        }, t.prototype.shutdown = function() {
                            return this.activeSpanProcessor.shutdown()
                        }, t.prototype._getPropagator = function(t) {
                            var e;
                            return null === (e = this.constructor._registeredPropagators.get(t)) || void 0 === e ? void 0 : e()
                        }, t.prototype._getSpanExporter = function(t) {
                            var e;
                            return null === (e = this.constructor._registeredExporters.get(t)) || void 0 === e ? void 0 : e()
                        }, t.prototype._buildPropagatorFromEnv = function() {
                            var t = this,
                                e = Array.from(new Set(Ke().OTEL_PROPAGATORS)),
                                r = e.map((function(e) {
                                    var r = t._getPropagator(e);
                                    return r || Ft.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), r
                                })).reduce((function(t, e) {
                                    return e && t.push(e), t
                                }), []);
                            return 0 === r.length ? void 0 : 1 === e.length ? r[0] : new Dr({
                                propagators: r
                            })
                        }, t.prototype._buildExporterFromEnv = function() {
                            var t = Ke().OTEL_TRACES_EXPORTER;
                            if ("none" !== t && "" !== t) {
                                var e = this._getSpanExporter(t);
                                return e || Ft.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
                            }
                        }, t._registeredPropagators = new Map([
                            ["tracecontext", function() {
                                return new tn
                            }],
                            ["baggage", function() {
                                return new ve
                            }]
                        ]), t._registeredExporters = new Map, t
                    }(),
                    Kv = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            s = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    Qv = function(t, e, r) {
                        if (r || 2 === arguments.length)
                            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                        return t.concat(n || Array.prototype.slice.call(e))
                    },
                    Jv = function() {
                        function t() {
                            this._enabled = !1, this._currentContext = U
                        }
                        return t.prototype._bindFunction = function(t, e) {
                            void 0 === t && (t = U);
                            var r = this,
                                n = function() {
                                    for (var n = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                                    return r.with(t, (function() {
                                        return e.apply(n, o)
                                    }))
                                };
                            return Object.defineProperty(n, "length", {
                                enumerable: !1,
                                configurable: !0,
                                writable: !1,
                                value: e.length
                            }), n
                        }, t.prototype.active = function() {
                            return this._currentContext
                        }, t.prototype.bind = function(t, e) {
                            return void 0 === t && (t = this.active()), "function" == typeof e ? this._bindFunction(t, e) : e
                        }, t.prototype.disable = function() {
                            return this._currentContext = U, this._enabled = !1, this
                        }, t.prototype.enable = function() {
                            return this._enabled || (this._enabled = !0, this._currentContext = U), this
                        }, t.prototype.with = function(t, e, r) {
                            for (var n = [], o = 3; o < arguments.length; o++) n[o - 3] = arguments[o];
                            var i = this._currentContext;
                            this._currentContext = t || U;
                            try {
                                return e.call.apply(e, Qv([r], Kv(n), !1))
                            } finally {
                                this._currentContext = i
                            }
                        }, t
                    }(),
                    Yv = function() {
                        var t = function(e, r) {
                            return t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                            }, t(e, r)
                        };
                        return function(e, r) {
                            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }(),
                    t_ = function(t) {
                        function e(e) {
                            void 0 === e && (e = {});
                            var r = t.call(this, e) || this;
                            if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
                            if (e.propagator) throw "propagator should be defined in register method not in constructor";
                            return r
                        }
                        return Yv(e, t), e.prototype.register = function(e) {
                            void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new Jv), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e)
                        }, e
                    }(Xv);

                function e_() {
                    return Zv || (Zv = document.createElement("a")), Zv
                }

                function r_(t, e) {
                    return e in t
                }

                function n_(t, e, r, n) {
                    var o = void 0,
                        i = void 0;
                    r_(r, e) && "number" == typeof r[e] && (o = r[e]);
                    var s = n || qv.FETCH_START;
                    if (r_(r, s) && "number" == typeof r[s] && (i = r[s]), void 0 !== o && void 0 !== i && o >= i) return t.addEvent(e, o), t
                }

                function o_(t, e) {
                    n_(t, qv.FETCH_START, e), n_(t, qv.DOMAIN_LOOKUP_START, e), n_(t, qv.DOMAIN_LOOKUP_END, e), n_(t, qv.CONNECT_START, e), r_(e, "name") && e.name.startsWith("https:") && n_(t, qv.SECURE_CONNECTION_START, e), n_(t, qv.CONNECT_END, e), n_(t, qv.REQUEST_START, e), n_(t, qv.RESPONSE_START, e), n_(t, qv.RESPONSE_END, e);
                    var r = e[qv.ENCODED_BODY_SIZE];
                    void 0 !== r && t.setAttribute(ur, r);
                    var n = e[qv.DECODED_BODY_SIZE];
                    void 0 !== n && r !== n && t.setAttribute(hr, n)
                }

                function i_(t) {
                    return t.slice().sort((function(t, e) {
                        var r = t[qv.FETCH_START],
                            n = e[qv.FETCH_START];
                        return r > n ? 1 : r < n ? -1 : 0
                    }))
                }

                function s_() {
                    return "undefined" != typeof location ? location.origin : void 0
                }

                function a_(t, e, r, n, o, i) {
                    void 0 === o && (o = new WeakSet);
                    var s = u_(t),
                        a = l_(t = s.toString(), e, r, n, o, i);
                    if (0 === a.length) return {
                        mainRequest: void 0
                    };
                    if (1 === a.length) return {
                        mainRequest: a[0]
                    };
                    var c = i_(a);
                    if (s.origin !== s_() && c.length > 1) {
                        var l = c[0],
                            u = c_(c, l[qv.RESPONSE_END], r),
                            h = l[qv.RESPONSE_END];
                        return u[qv.FETCH_START] < h && (u = l, l = void 0), {
                            corsPreFlightRequest: l,
                            mainRequest: u
                        }
                    }
                    return {
                        mainRequest: a[0]
                    }
                }

                function c_(t, e, r) {
                    for (var n, o = Rr(r), i = Rr(Ir(e)), s = t[1], a = t.length, c = 1; c < a; c++) {
                        var l = t[c],
                            u = Rr(Ir(l[qv.FETCH_START])),
                            h = o - Rr(Ir(l[qv.RESPONSE_END]));
                        u >= i && (!n || h < n) && (n = h, s = l)
                    }
                    return s
                }

                function l_(t, e, r, n, o, i) {
                    var s = Rr(e),
                        a = Rr(r),
                        c = n.filter((function(e) {
                            var r = Rr(Ir(e[qv.FETCH_START])),
                                n = Rr(Ir(e[qv.RESPONSE_END]));
                            return e.initiatorType.toLowerCase() === (i || "xmlhttprequest") && e.name === t && r >= s && n <= a
                        }));
                    return c.length > 0 && (c = c.filter((function(t) {
                        return !o.has(t)
                    }))), c
                }

                function u_(t) {
                    if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
                    var e = e_();
                    return e.href = t, e
                }

                function h_(t, e) {
                    var r = e || [];
                    return ("string" == typeof r || r instanceof RegExp) && (r = [r]), u_(t).origin === s_() || r.some((function(e) {
                        return In(t, e)
                    }))
                }(function(t) {
                    t.CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart"
                })(qv || (qv = {})),
                function(t) {
                    t.COMPONENT = "component", t.HTTP_ERROR_NAME = "http.error_name", t.HTTP_STATUS_TEXT = "http.status_text"
                }(Gv || (Gv = {}));
                var p_, f_, d_, g_, y_, v_, __, m_ = "0.52.0",
                    b_ = function() {
                        var t = function(e, r) {
                            return t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                            }, t(e, r)
                        };
                        return function(e, r) {
                            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }(),
                    T_ = 300,
                    w_ = "object" == typeof process && "node" === (null === (p_ = process.release) || void 0 === p_ ? void 0 : p_.name),
                    E_ = function(t) {
                        function e(e) {
                            void 0 === e && (e = {});
                            var r = t.call(this, "@opentelemetry/instrumentation-fetch", m_, e) || this;
                            return r.component = "fetch", r.version = m_, r.moduleName = r.component, r._usedResources = new WeakSet, r._tasksCount = 0, r
                        }
                        return b_(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
                            var r = this.tracer.startSpan("CORS Preflight", {
                                startTime: e[qv.FETCH_START]
                            }, re.setSpan($t.active(), t));
                            this.getConfig().ignoreNetworkEvents || o_(r, e), r.end(e[qv.RESPONSE_END])
                        }, e.prototype._addFinalSpanAttributes = function(t, e) {
                            var r = u_(e.url);
                            t.setAttribute(pr.HTTP_STATUS_CODE, e.status), null != e.statusText && t.setAttribute(Gv.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(pr.HTTP_HOST, r.host), t.setAttribute(pr.HTTP_SCHEME, r.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute(pr.HTTP_USER_AGENT, navigator.userAgent)
                        }, e.prototype._addHeaders = function(t, e) {
                            if (!h_(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                                var r = {};
                                return te.inject($t.active(), r), void(Object.keys(r).length > 0 && this._diag.debug("headers inject skipped due to CORS policy"))
                            }
                            t instanceof Request || t.headers instanceof Headers || t.headers instanceof Map ? te.inject($t.active(), t.headers, {
                                set: function(t, e, r) {
                                    return t.set(e, "string" == typeof r ? r : String(r))
                                }
                            }) : (r = {}, te.inject($t.active(), r), t.headers = Object.assign({}, r, t.headers || {}))
                        }, e.prototype._clearResources = function() {
                            0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
                        }, e.prototype._createSpan = function(t, e) {
                            var r;
                            if (void 0 === e && (e = {}), !Pn(t, this.getConfig().ignoreUrls)) {
                                var n = (e.method || "GET").toUpperCase(),
                                    o = "HTTP " + n;
                                return this.tracer.startSpan(o, {
                                    kind: Nt.CLIENT,
                                    attributes: (r = {}, r[Gv.COMPONENT] = this.moduleName, r[pr.HTTP_METHOD] = n, r[pr.HTTP_URL] = t, r)
                                })
                            }
                            this._diag.debug("ignoring span as url matches ignored url")
                        }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, r) {
                            var n = e.entries;
                            if (!n.length) {
                                if (!performance.getEntriesByType) return;
                                n = performance.getEntriesByType("resource")
                            }
                            var o = a_(e.spanUrl, e.startTime, r, n, this._usedResources, "fetch");
                            if (o.mainRequest) {
                                var i = o.mainRequest;
                                this._markResourceAsUsed(i);
                                var s = o.corsPreFlightRequest;
                                s && (this._addChildSpan(t, s), this._markResourceAsUsed(s)), this.getConfig().ignoreNetworkEvents || o_(t, i)
                            }
                        }, e.prototype._markResourceAsUsed = function(t) {
                            this._usedResources.add(t)
                        }, e.prototype._endSpan = function(t, e, r) {
                            var n = this,
                                o = kr(Date.now()),
                                i = Ar();
                            this._addFinalSpanAttributes(t, r), setTimeout((function() {
                                var r;
                                null === (r = e.observer) || void 0 === r || r.disconnect(), n._findResourceAndAddNetworkEvents(t, e, i), n._tasksCount--, n._clearResources(), t.end(o)
                            }), T_)
                        }, e.prototype._patchConstructor = function() {
                            var t = this;
                            return function(e) {
                                var r = t;
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var o = this,
                                        i = u_(t[0] instanceof Request ? t[0].url : String(t[0])).href,
                                        s = t[0] instanceof Request ? t[0] : t[1] || {},
                                        a = r._createSpan(i, s);
                                    if (!a) return e.apply(this, t);
                                    var c = r._prepareSpanData(i);

                                    function l(t, e) {
                                        r._applyAttributesAfterFetch(t, s, e), r._endSpan(t, c, {
                                            status: e.status || 0,
                                            statusText: e.message,
                                            url: i
                                        })
                                    }

                                    function u(t, e) {
                                        r._applyAttributesAfterFetch(t, s, e), e.status >= 200 && e.status < 400 ? r._endSpan(t, c, e) : r._endSpan(t, c, {
                                            status: e.status,
                                            statusText: e.statusText,
                                            url: i
                                        })
                                    }

                                    function h(t, e, r) {
                                        try {
                                            var n = r.clone(),
                                                o = r.clone(),
                                                i = n.body;
                                            if (i) {
                                                var s = i.getReader(),
                                                    a = function() {
                                                        s.read().then((function(e) {
                                                            e.done ? u(t, o) : a()
                                                        }), (function(e) {
                                                            l(t, e)
                                                        }))
                                                    };
                                                a()
                                            } else u(t, r)
                                        } finally {
                                            e(r)
                                        }
                                    }

                                    function p(t, e, r) {
                                        try {
                                            l(t, r)
                                        } finally {
                                            e(r)
                                        }
                                    }
                                    return new Promise((function(t, n) {
                                        return $t.with(re.setSpan($t.active(), a), (function() {
                                            return r._addHeaders(s, i), r._tasksCount++, e.apply(o, s instanceof Request ? [s] : [i, s]).then(h.bind(o, a, t), p.bind(o, a, n))
                                        }))
                                    }))
                                }
                            }
                        }, e.prototype._applyAttributesAfterFetch = function(t, e, r) {
                            var n = this,
                                o = this.getConfig().applyCustomAttributesOnSpan;
                            o && av((function() {
                                return o(t, e, r)
                            }), (function(t) {
                                t && n._diag.error("applyCustomAttributesOnSpan", t)
                            }), !0)
                        }, e.prototype._prepareSpanData = function(t) {
                            var e = Ar(),
                                r = [];
                            if ("function" != typeof PerformanceObserver) return {
                                entries: r,
                                startTime: e,
                                spanUrl: t
                            };
                            var n = new PerformanceObserver((function(e) {
                                e.getEntries().forEach((function(e) {
                                    "fetch" === e.initiatorType && e.name === t && r.push(e)
                                }))
                            }));
                            return n.observe({
                                entryTypes: ["resource"]
                            }), {
                                entries: r,
                                observer: n,
                                startTime: e,
                                spanUrl: t
                            }
                        }, e.prototype.enable = function() {
                            w_ ? this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()") : (cv(fetch) && (this._unwrap(Xe, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(Xe, "fetch", this._patchConstructor()))
                        }, e.prototype.disable = function() {
                            w_ || (this._unwrap(Xe, "fetch"), this._usedResources = new WeakSet)
                        }, e
                    }(sv);

                function S_(t) {
                    const e = t.getSpanInformation(),
                        r = t.getContext();
                    return {
                        traceId: r.traceId,
                        spanId: r.spanId,
                        parentSpanId: e.parentSpanId,
                        name: e.name,
                        startTimeUnixNano: e.startTime,
                        endTimeUnixNano: e.endTime,
                        attributes: r.attributes,
                        kind: e.kind,
                        status: e.status
                    }
                }
                class O_ {
                    constructor(t) {
                        let {
                            transportManager: e,
                            promiseMap: r = new Map,
                            tracer: n
                        } = t;
                        f_.add(this), d_.set(this, void 0), g_.set(this, void 0), y_.set(this, 0), v_.set(this, void 0), i(this, d_, e, "f"), i(this, g_, r, "f"), i(this, v_, n, "f")
                    }
                    shutdown() {
                        return n(this, void 0, void 0, (function*() {
                            yield Promise.all(o(this, g_, "f").values())
                        }))
                    }
                    forceFlush() {
                        return n(this, void 0, void 0, (function*() {
                            yield Promise.all(o(this, g_, "f").values())
                        }))
                    }
                    onStart() {}
                    onEnd(t) {
                        const e = o(this, v_, "f").fromOTSpan(t);
                        o(this, f_, "m", __).call(this, e)
                    }
                }

                function k_(t, e) {
                    var r, n;
                    if (e) {
                        const o = null !== (n = null === (r = e.getSpanInformation()) || void 0 === r ? void 0 : r.childrenNames) && void 0 !== n ? n : [];
                        o.push(t), e.setAttribute(fi.exports.AggregationAttributes.ChildrenNames, o)
                    }
                }
                d_ = new WeakMap, g_ = new WeakMap, y_ = new WeakMap, v_ = new WeakMap, f_ = new WeakSet, __ = function(t) {
                    var e, r;
                    const s = (i(this, y_, (r = o(this, y_, "f"), e = r++, r), "f"), e),
                        a = S_(t),
                        c = () => n(this, void 0, void 0, (function*() {
                            yield o(this, d_, "f").processSpan(a), o(this, g_, "f").delete(s)
                        }));
                    o(this, g_, "f").set(s, c())
                };
                const C_ = t.KnownAttributes = {
                        Tag: "outsystems.log.message.tag",
                        Visibility: "outsystems.otel.access.visibility",
                        AccessType: "outsystems.otel.access.type",
                        ChildrenNames: fi.exports.AggregationAttributes.ChildrenNames,
                        IsNonAggregable: fi.exports.AggregationAttributes.IsNonAggregable
                    },
                    A_ = [C_.IsNonAggregable, C_.ChildrenNames];
                var I_, P_, L_, R_, j_, x_, N_, M_, D_, U_, W_, B_, $_, F_, H_, z_, V_, q_;
                class Z_ {
                    constructor(t) {
                        let {
                            visibility: e,
                            attributes: r = {},
                            span: n,
                            activateSpan: s,
                            explicitChildren: a = []
                        } = t;
                        I_.set(this, void 0), P_.set(this, void 0), L_.set(this, void 0), R_.set(this, void 0), i(this, I_, n, "f"), i(this, P_, s, "f"), i(this, R_, a, "f"), void 0 !== e && o(this, I_, "f").setAttribute(C_.Visibility, hg[e]), o(this, I_, "f").setAttributes(r), this.ended = new Promise((t => {
                            i(this, L_, t, "f")
                        }))
                    }
                    setAttribute(t, e) {
                        o(this, I_, "f").setAttribute(t, e)
                    }
                    setStatus(t, e) {
                        o(this, I_, "f").setStatus({
                            code: t,
                            message: e
                        })
                    }
                    raiseError(t, e) {
                        o(this, I_, "f").recordException(t), this.setStatus(2, e)
                    }
                    getContext() {
                        const t = o(this, I_, "f").spanContext();
                        return {
                            spanId: t.spanId,
                            traceId: t.traceId,
                            attributes: o(this, I_, "f").attributes,
                            sampled: Boolean(1 & t.traceFlags)
                        }
                    }
                    addEvent(t, e) {
                        o(this, I_, "f").addEvent(t, e)
                    }
                    end() {
                        return n(this, void 0, void 0, (function*() {
                            var t;
                            yield Promise.all(o(this, R_, "f").map((t => t.ended))), o(this, I_, "f").end(), null === (t = o(this, L_, "f")) || void 0 === t || t.call(this)
                        }))
                    }
                    fail() {
                        o(this, I_, "f").setStatus({
                            code: Mt.ERROR
                        })
                    }
                    getSpanInformation() {
                        return {
                            name: o(this, I_, "f").name,
                            kind: o(this, I_, "f").kind,
                            status: o(this, I_, "f").status.code,
                            parentSpanId: o(this, I_, "f").parentSpanId,
                            startTime: Nn.toNanoSeconds(new Nn(o(this, I_, "f").startTime)),
                            endTime: Nn.toNanoSeconds(new Nn(o(this, I_, "f").endTime)),
                            childrenNames: o(this, I_, "f").attributes[fi.exports.AggregationAttributes.ChildrenNames]
                        }
                    }
                    activate() {
                        return o(this, P_, "f").call(this)
                    }
                    addExplicitChild(t) {
                        o(this, R_, "f").push(t)
                    }
                }
                I_ = new WeakMap, P_ = new WeakMap, L_ = new WeakMap, R_ = new WeakMap;
                class G_ {
                    constructor(t) {
                        let {
                            transports: e,
                            baseAttributes: r = {},
                            staticAttributes: n = [],
                            databaseNameSuffix: s,
                            transportManager: a = new $i({
                                traceTransports: e,
                                databaseNameSuffix: s
                            }),
                            tracerProvider: c = new t_,
                            contextManager: l = new Eg,
                            tracer: u = c.getTracer("@outsystems/logger-js", "2.18.9"),
                            exporter: h,
                            enabled: p = !0,
                            getActiveSpan: f = (() => re.getActiveSpan()),
                            setSpan: d = ((t, e) => re.setSpan(t, e))
                        } = t;
                        j_.add(this), x_.set(this, void 0), N_.set(this, void 0), M_.set(this, void 0), D_.set(this, void 0), U_.set(this, void 0), W_.set(this, void 0), B_.set(this, void 0), $_.set(this, void 0), F_.set(this, void 0), i(this, x_, a, "f"), i(this, D_, u, "f"), i(this, M_, p, "f"), i(this, W_, f, "f"), i(this, N_, c, "f"), i(this, B_, d, "f"), i(this, U_, l, "f"), i(this, $_, r, "f"), i(this, F_, n, "f");
                        const g = null != h ? h : new O_({
                            transportManager: a,
                            tracer: this
                        });
                        o(this, N_, "f").register({
                            contextManager: l
                        }), o(this, N_, "f").addSpanProcessor(g)
                    }
                    addTransport(t) {
                        o(this, x_, "f").addTraceTransport(t)
                    }
                    removeTransport(t) {
                        o(this, x_, "f").removeTraceTransport(t)
                    }
                    startSpan(t, e, r, n) {
                        if (o(this, M_, "f")) {
                            k_(t, null != r ? r : o(this, W_, "f").call(this) ? this.fromOTSpan(o(this, W_, "f").call(this)) : void 0);
                            const i = r ? o(this, D_, "f").startSpan(t, {
                                    attributes: {},
                                    kind: n
                                }, r.activate()) : o(this, D_, "f").startSpan(t, {
                                    kind: n
                                }),
                                s = this.fromOTSpan(i, e);
                            return null == r || r.addExplicitChild(s), s
                        }
                    }
                    startActiveSpan(t, e, r, n, i) {
                        if (o(this, M_, "f")) {
                            const s = t => {
                                const o = this.fromOTSpan(t, r);
                                return null == n || n.addExplicitChild(o), e(o)
                            };
                            return n ? o(this, D_, "f").startActiveSpan(t, {
                                attributes: {},
                                kind: i
                            }, n.activate(), s) : o(this, D_, "f").startActiveSpan(t, {
                                kind: i
                            }, s)
                        }
                        return e(void 0)
                    }
                    getActiveSpan() {
                        const t = o(this, W_, "f").call(this);
                        return t ? this.fromOTSpan(t) : void 0
                    }
                    setStatus(t) {
                        i(this, M_, t, "f")
                    }
                    addBaseSpanAttributes(t) {
                        i(this, $_, Object.assign(Object.assign({}, o(this, $_, "f")), t), "f")
                    }
                    enableFetchInstrumentation() {
                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new E_).setTracerProvider(o(this, N_, "f"))
                    }
                    span(t) {
                        return n(this, void 0, void 0, (function*() {
                            yield o(this, x_, "f").processSpan(t)
                        }))
                    }
                    flush() {
                        return n(this, void 0, void 0, (function*() {
                            o(this, x_, "f").flushSpans()
                        }))
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, x_, "f").setSchedulerTimerInterval(t)
                    }
                    fromOTSpan(t, e) {
                        const r = o(this, j_, "m", H_).call(this, t);
                        return new Z_({
                            span: t,
                            attributes: ug(r),
                            activateSpan: () => o(this, B_, "f").call(this, o(this, U_, "f").active(), t),
                            visibility: e
                        })
                    }
                }
                t.Tracer = G_, x_ = new WeakMap, N_ = new WeakMap, M_ = new WeakMap, D_ = new WeakMap, U_ = new WeakMap, W_ = new WeakMap, B_ = new WeakMap, $_ = new WeakMap, F_ = new WeakMap, j_ = new WeakSet, H_ = function(t) {
                    const e = Object.assign({}, o(this, $_, "f"));
                    return void 0 === t.parentSpanId || Object.keys(e).forEach((t => {
                        o(this, F_, "f").includes(t) && delete e[t]
                    })), e
                };
                const X_ = "Application";
                class K_ {
                    constructor(t) {
                        let {
                            transportId: e,
                            logTypeBaseline: r = lo.Debug,
                            formatter: n,
                            transportConsole: o = console,
                            shouldWriteLogsOnConsoles: s = (() => !1)
                        } = t;
                        z_.add(this), V_.set(this, void 0), this.formatConsoleLog = t => {
                            var e, r, n, o;
                            const i = {
                                errorCode: t.type === lo.Error ? null !== (e = t.errorCode) && void 0 !== e ? e : lg : void 0,
                                category: null !== (r = t.category) && void 0 !== r ? r : X_,
                                message: null !== (o = null === (n = null == t ? void 0 : t.error) || void 0 === n ? void 0 : n.message) && void 0 !== o ? o : t.message,
                                timestamp: Nn.toISOString(t.timestamp)
                            };
                            return `${i.timestamp}:${i.errorCode?" "+i.errorCode:""} [${i.category}] ${i.message}`
                        }, this.transportId = e, this.logTypeBaseline = r, this.formatter = n, this.transportConsole = o, i(this, V_, s, "f")
                    }
                    getTransportId() {
                        return this.transportId
                    }
                    requiresConnectivity() {
                        return !1
                    }
                    hasWriteBuffer() {
                        return !1
                    }
                    getLogTypeBaseline() {
                        return this.logTypeBaseline
                    }
                    setLogTypeBaseline(t) {
                        this.logTypeBaseline = t
                    }
                    write(t) {
                        return n(this, void 0, void 0, (function*() {
                            if (!o(this, z_, "m", q_).call(this, t)) return;
                            const e = this.formatter ? this.formatter.format(t) : this.formatConsoleLog(t);
                            switch (t.type) {
                                case lo.Debug:
                                    this.transportConsole.debug(e);
                                    break;
                                case lo.Info:
                                    this.transportConsole.log(e);
                                    break;
                                case lo.Warning:
                                    this.transportConsole.warn(e);
                                    break;
                                case lo.Error:
                                    this.transportConsole.error(e, t.error);
                                    break;
                                default:
                                    this.transportConsole.log(e)
                            }
                        }))
                    }
                    writeAll(t) {
                        return n(this, void 0, void 0, (function*() {
                            for (const e of t) yield this.write(e)
                        }))
                    }
                }

                function Q_(t) {
                    const e = {};
                    return t.category && (e[C_.Tag] = t.category), e
                }
                V_ = new WeakMap, z_ = new WeakSet, q_ = function(t) {
                    return t.visibility === Hi.External || o(this, V_, "f").call(this)
                };
                class J_ {
                    format(t) {
                        var e, r;
                        const n = null !== (e = t.visibility) && void 0 !== e ? e : Hi.External,
                            o = pg(t),
                            i = Q_(t),
                            s = Object.assign(Object.assign(Object.assign({
                                [C_.Visibility]: hg[n]
                            }, o), i), t.attributes),
                            a = gg(s),
                            c = Nn.toISOString(t.timestamp);
                        return {
                            message: null !== (r = t.message) && void 0 !== r ? r : "",
                            attributes: a,
                            instant: c
                        }
                    }
                }
                const Y_ = {
                    [lo.Debug]: "logDebug",
                    [lo.Info]: "logInfo",
                    [lo.Warning]: "logWarning",
                    [lo.Error]: "logError",
                    [lo.Trace]: "logTrace"
                };
                class tm {
                    constructor(t) {
                        let {
                            transportId: e,
                            logTypeBaseline: r,
                            nativeLoggerV2: n,
                            formatter: o = new J_
                        } = t;
                        this.transportId = e, this.logTypeBaseline = r, this.nativeLoggerV2 = n, this.formatter = o
                    }
                    getTransportId() {
                        return this.transportId
                    }
                    requiresConnectivity() {
                        return !1
                    }
                    hasWriteBuffer() {
                        return !1
                    }
                    getLogTypeBaseline() {
                        return this.logTypeBaseline
                    }
                    setLogTypeBaseline(t) {
                        this.logTypeBaseline = t
                    }
                    write(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = this.formatter.format(t),
                                r = Y_[t.type];
                            return this.nativeLoggerV2[r](e)
                        }))
                    }
                    writeAll(t) {
                        return n(this, void 0, void 0, (function*() {
                            for (const e of t) yield this.write(e)
                        }))
                    }
                }
                var em, rm;
                const nm = 2e3,
                    om = {
                        [lo.Trace]: 1,
                        [lo.Debug]: 5,
                        [lo.Info]: 9,
                        [lo.Warning]: 13,
                        [lo.Error]: 17
                    },
                    im = {
                        [lo.Debug]: "Debug",
                        [lo.Info]: "Information",
                        [lo.Warning]: "Warning",
                        [lo.Error]: "Error",
                        [lo.Trace]: "Trace"
                    },
                    sm = t => {
                        const e = {
                            body: {
                                stringValue: ""
                            }
                        };
                        if (t.message) {
                            const r = t.message.length > nm ? `${t.message.substring(0,nm-3)}...` : t.message;
                            e.body = {
                                stringValue: r
                            }
                        }
                        return e
                    };
                class am {
                    constructor(t) {
                        let {
                            resourceAttributes: e = {},
                            formatVersion: r = "v1"
                        } = t;
                        em.set(this, void 0), rm.set(this, void 0), i(this, em, e, "f"), i(this, rm, r, "f")
                    }
                    setResourceAttributes(t) {
                        i(this, em, null != t ? t : {}, "f")
                    }
                    format(t) {
                        return this.formatAll([t])
                    }
                    formatAll(t) {
                        const e = Object.assign({
                                [C_.AccessType]: 3
                            }, o(this, em, "f")),
                            r = dg(e),
                            n = t.map((t => um(t)));
                        return "v1" === o(this, rm, "f") ? cm(n, r) : lm(n, r)
                    }
                }

                function cm(t, e) {
                    return {
                        resourceLogs: [{
                            resource: {
                                attributes: e
                            },
                            instrumentationLibraryLogs: [{
                                instrumentationLibrary: {
                                    name: "@outsystems/logger-js",
                                    version: "2.18.9"
                                },
                                logs: t
                            }]
                        }]
                    }
                }

                function lm(t, e) {
                    return {
                        resourceLogs: [{
                            resource: {
                                attributes: e
                            },
                            scopeLogs: [{
                                scope: {
                                    name: "@outsystems/logger-js",
                                    version: "2.18.9"
                                },
                                logRecords: t
                            }]
                        }]
                    }
                }

                function um(t) {
                    var e;
                    const r = null !== (e = t.visibility) && void 0 !== e ? e : Hi.External,
                        n = pg(t),
                        o = fg(t),
                        i = Q_(t),
                        s = Object.assign(Object.assign(Object.assign({
                            [C_.Visibility]: hg[r]
                        }, n), i), t.attributes),
                        a = gg(s),
                        c = dg(a),
                        l = om[t.type],
                        u = im[t.type],
                        h = Nn.toNanoSeconds(t.timestamp),
                        p = sm(t);
                    return Object.assign(Object.assign(Object.assign({}, p), o), {
                        timeUnixNano: h,
                        severityNumber: l,
                        severityText: u,
                        attributes: c
                    })
                }
                var hm, pm, fm, dm;
                em = new WeakMap, rm = new WeakMap;
                const gm = "/v1/logs",
                    ym = "/v2/logs";
                class vm {
                    constructor(t) {
                        let {
                            transportId: e,
                            resourceAttributes: n,
                            logTypeBaseline: o,
                            formatVersion: s = "v1",
                            logsEndpoint: a = ("v1" === s ? gm : ym),
                            logsCollectorBaseUrl: c,
                            tagId: l,
                            enableWriteBuffer: u = !0,
                            httpClient: h = new r.HttpClient({
                                baseUrl: c,
                                headers: l ? {
                                    "api-key": l,
                                    "tag-id": l
                                } : {}
                            }),
                            formatter: p = new am({
                                resourceAttributes: n,
                                formatVersion: s
                            })
                        } = t;
                        hm.add(this), pm.set(this, void 0), fm.set(this, void 0), this.transportId = e, this.logTypeBaseline = o, this.logsEndpoint = a, this.enableWriteBuffer = u, this.httpClient = h, this.formatter = p, i(this, pm, l, "f"), i(this, fm, c, "f")
                    }
                    getTransportId() {
                        return this.transportId
                    }
                    requiresConnectivity() {
                        return !0
                    }
                    hasWriteBuffer() {
                        return this.enableWriteBuffer
                    }
                    getLogTypeBaseline() {
                        return this.logTypeBaseline
                    }
                    setLogTypeBaseline(t) {
                        this.logTypeBaseline = t
                    }
                    setTagId(t) {
                        i(this, pm, t, "f")
                    }
                    setResourceAttributes(t) {
                        var e, r;
                        null === (r = (e = this.formatter).setResourceAttributes) || void 0 === r || r.call(e, t)
                    }
                    write(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, hm, "m", dm).call(this, this.formatter.format(t))
                        }))
                    }
                    writeAll(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, hm, "m", dm).call(this, this.formatter.formatAll(t))
                        }))
                    }
                }
                var _m, mm, bm, Tm, wm, Em, Sm, Om, km;
                pm = new WeakMap, fm = new WeakMap, hm = new WeakSet, dm = function(t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.httpClient.post({
                            url: this.logsEndpoint,
                            payload: t,
                            contentType: r.ContentType.Json,
                            headers: o(this, pm, "f") ? {
                                "api-key": o(this, pm, "f"),
                                "tag-id": o(this, pm, "f")
                            } : {},
                            baseURL: o(this, fm, "f")
                        })
                    }))
                };
                class Cm {
                    constructor() {
                        let {
                            resourceAttributes: t = {},
                            formatVersion: e = "v1"
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        _m.add(this), mm.set(this, void 0), bm.set(this, void 0), i(this, mm, t, "f"), i(this, bm, e, "f")
                    }
                    setResourceAttributes(t) {
                        i(this, mm, null != t ? t : {}, "f")
                    }
                    format(t) {
                        return this.formatAll([t])
                    }
                    formatAll(t) {
                        const e = Object.assign({
                                [C_.AccessType]: 3
                            }, o(this, mm, "f")),
                            r = dg(e),
                            n = t.map((t => {
                                const e = Object.assign({
                                        [C_.Visibility]: hg[Hi.External]
                                    }, o(this, _m, "m", Tm).call(this, t.attributes)),
                                    r = gg(e),
                                    n = dg(r);
                                return Object.assign({
                                    traceId: t.traceId,
                                    spanId: t.spanId,
                                    parentSpanId: t.parentSpanId,
                                    name: t.name,
                                    startTimeUnixNano: t.startTimeUnixNano,
                                    endTimeUnixNano: t.endTimeUnixNano,
                                    status: {
                                        code: 0 !== t.status ? t.status : 1
                                    },
                                    attributes: n
                                }, t.kind ? {
                                    kind: t.kind
                                } : {})
                            }));
                        return "v1" === o(this, bm, "f") ? Am(n, r) : Im(n, r)
                    }
                }

                function Am(t, e) {
                    return {
                        resourceSpans: [{
                            resource: {
                                attributes: e
                            },
                            instrumentationLibrarySpans: [{
                                instrumentationLibrary: {
                                    name: "@outsystems/logger-js",
                                    version: "2.18.9"
                                },
                                spans: t
                            }]
                        }]
                    }
                }

                function Im(t, e) {
                    return {
                        resourceSpans: [{
                            resource: {
                                attributes: e
                            },
                            scopeSpans: [{
                                scope: {
                                    name: "@outsystems/logger-js",
                                    version: "2.18.9"
                                },
                                spans: t
                            }]
                        }]
                    }
                }
                mm = new WeakMap, bm = new WeakMap, _m = new WeakSet, Tm = function(t) {
                    return Object.entries(t).reduce(((t, e) => {
                        let [r, n] = e;
                        return A_.includes(r) || (t[r] = n), t
                    }), {})
                };
                const Pm = "/v1/traces",
                    Lm = "/v2/traces";
                class Rm {
                    constructor(t) {
                        let {
                            transportId: e,
                            resourceAttributes: n,
                            enabled: o = !0,
                            formatVersion: s = "v1",
                            tracesEndpoint: a = ("v1" === s ? Pm : Lm),
                            tracesCollectorBaseUrl: c,
                            tagId: l,
                            enableWriteBuffer: u = !0,
                            httpClient: h = new r.HttpClient({
                                baseUrl: c,
                                headers: l ? {
                                    "api-key": l,
                                    "tag-id": l
                                } : {}
                            }),
                            formatter: p = new Cm({
                                resourceAttributes: n,
                                formatVersion: s
                            })
                        } = t;
                        wm.add(this), Em.set(this, void 0), Sm.set(this, void 0), Om.set(this, void 0), this.transportId = e, i(this, Em, o, "f"), this.tracesEndpoint = a, this.enableWriteBuffer = u, this.httpClient = h, this.formatter = p, i(this, Sm, l, "f"), i(this, Om, c, "f")
                    }
                    getTransportId() {
                        return this.transportId
                    }
                    isTracingEnabled() {
                        return o(this, Em, "f")
                    }
                    enableTracing() {
                        i(this, Em, !0, "f")
                    }
                    disableTracing() {
                        i(this, Em, !1, "f")
                    }
                    requiresConnectivity() {
                        return !0
                    }
                    hasWriteBuffer() {
                        return this.enableWriteBuffer
                    }
                    setTagId(t) {
                        i(this, Sm, t, "f")
                    }
                    setResourceAttributes(t) {
                        var e, r;
                        null === (r = (e = this.formatter).setResourceAttributes) || void 0 === r || r.call(e, t)
                    }
                    write(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, wm, "m", km).call(this, this.formatter.format(t))
                        }))
                    }
                    writeAll(t) {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, wm, "m", km).call(this, this.formatter.formatAll(t))
                        }))
                    }
                }
                var jm, xm, Nm, Mm, Dm, Um, Wm, Bm, $m, Fm, Hm, zm, Vm, qm, Zm, Gm, Xm, Km, Qm, Jm, Ym, tb, eb, rb;
                Em = new WeakMap, Sm = new WeakMap, Om = new WeakMap, wm = new WeakSet, km = function(t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.httpClient.post({
                            url: this.tracesEndpoint,
                            payload: t,
                            contentType: r.ContentType.Json,
                            headers: o(this, Sm, "f") ? {
                                "api-key": o(this, Sm, "f"),
                                "tag-id": o(this, Sm, "f")
                            } : {},
                            baseURL: o(this, Om, "f")
                        })
                    }))
                };
                class nb {
                    constructor() {
                        let {
                            sw: t,
                            container: e = navigator.serviceWorker
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        var r;
                        if (jm.set(this, void 0), xm.set(this, void 0), Nm.set(this, []), Mm.set(this, !1), !e) throw new Error("No service worker container available");
                        i(this, jm, null !== (r = null != t ? t : null == e ? void 0 : e.controller) && void 0 !== r ? r : void 0, "f"), i(this, xm, e, "f"), this.waitForSW()
                    }
                    get pendingMessages() {
                        return o(this, Nm, "f")
                    }
                    isServiceWorkerAvailable() {
                        return !!o(this, jm, "f") && "activated" === o(this, jm, "f").state
                    }
                    send(t, e) {
                        this.sendMessage({
                            kind: t,
                            data: e
                        })
                    }
                    sendMessage(t, e) {
                        var r;
                        this.isServiceWorkerAvailable() ? null === (r = o(this, jm, "f")) || void 0 === r || r.postMessage(t, e) : (o(this, Nm, "f").push({
                            message: t,
                            options: e
                        }), this.waitForSW())
                    }
                    waitForSW() {
                        return n(this, void 0, void 0, (function*() {
                            if (this.isServiceWorkerAvailable() || o(this, Mm, "f")) return;
                            i(this, Mm, !0, "f");
                            const {
                                active: t
                            } = yield o(this, xm, "f").ready;
                            i(this, jm, null != t ? t : void 0, "f"), i(this, Mm, !1, "f"), this.flushMessages()
                        }))
                    }
                    flushMessages() {
                        var t;
                        if (this.isServiceWorkerAvailable()) {
                            for (const {
                                    message: e,
                                    options: r
                                } of o(this, Nm, "f")) null === (t = o(this, jm, "f")) || void 0 === t || t.postMessage(e, r);
                            i(this, Nm, [], "f")
                        } else this.waitForSW()
                    }
                }
                jm = new WeakMap, xm = new WeakMap, Nm = new WeakMap, Mm = new WeakMap;
                class ob {
                    constructor(t) {
                        let {
                            transportId: e,
                            tagId: r,
                            collectorBaseUrl: n,
                            databaseSuffix: o,
                            swTransport: s = new nb,
                            enabled: a = !0,
                            attributes: c = {},
                            aggregateSpans: l = !1,
                            formatVersion: u = "v1"
                        } = t;
                        Dm.set(this, void 0), Um.set(this, void 0), Wm.set(this, void 0), Bm.set(this, void 0), $m.set(this, void 0), Fm.set(this, void 0), Hm.set(this, void 0), zm.set(this, void 0), Vm.set(this, void 0), i(this, Dm, e, "f"), i(this, Um, s, "f"), i(this, Vm, a, "f"), i(this, Wm, c, "f"), i(this, Bm, r, "f"), i(this, $m, n, "f"), i(this, Fm, o, "f"), i(this, Hm, l, "f"), i(this, zm, u, "f")
                    }
                    getTransportId() {
                        return o(this, Dm, "f")
                    }
                    requiresConnectivity() {
                        return !1
                    }
                    isTracingEnabled() {
                        return o(this, Vm, "f")
                    }
                    enableTracing() {
                        i(this, Vm, !0, "f")
                    }
                    disableTracing() {
                        i(this, Vm, !1, "f")
                    }
                    hasWriteBuffer() {
                        return !1
                    }
                    write(t) {
                        return o(this, Um, "f").send("Span", t), Promise.resolve()
                    }
                    writeAll(t) {
                        for (const e of t) o(this, Um, "f").send("Span", e);
                        return Promise.resolve()
                    }
                    flush() {
                        return o(this, Um, "f").send("Flush", {
                            kind: "Spans"
                        }), Promise.resolve()
                    }
                    initialize() {
                        o(this, Um, "f").send("SpansInitialization", {
                            databaseSuffix: o(this, Fm, "f"),
                            resourceAttributes: o(this, Wm, "f"),
                            collectorBaseUrl: o(this, $m, "f"),
                            apiKey: o(this, Bm, "f"),
                            aggregateSpans: o(this, Hm, "f"),
                            formatVersion: o(this, zm, "f")
                        })
                    }
                }
                Dm = new WeakMap, Um = new WeakMap, Wm = new WeakMap, Bm = new WeakMap, $m = new WeakMap, Fm = new WeakMap, Hm = new WeakMap, zm = new WeakMap, Vm = new WeakMap;
                class ib {
                    constructor(t) {
                        let {
                            databaseNameSuffix: r,
                            logTransports: n,
                            traceTransports: o,
                            baseLogAttributes: s = {},
                            baseSpanAttributes: a = {},
                            staticSpanAttributes: c = [],
                            isOnline: l,
                            aggregateSpans: u,
                            transportManager: h = new $i({
                                databaseNameSuffix: r,
                                logTransports: n,
                                traceTransports: o,
                                isOnline: l,
                                aggregateSpans: u
                            }),
                            tracerInstance: p,
                            loggerInstance: f
                        } = t;
                        qm.add(this), Zm.set(this, void 0), Gm.set(this, void 0), Xm.set(this, void 0), Km.set(this, void 0), Qm.set(this, void 0), Jm.set(this, void 0), Ym.set(this, void 0), tb.set(this, void 0), i(this, Zm, h, "f"), i(this, Gm, p, "f"), i(this, Xm, f, "f"), i(this, Km, (() => e.FeaturesManager.isEnabled(e.FeatureKeys.WriteLogsOnConsoles)), "f"), i(this, Qm, s, "f"), i(this, Jm, a, "f"), i(this, Ym, c, "f"), i(this, tb, r, "f")
                    }
                    init() {
                        return n(this, void 0, void 0, (function*() {
                            yield this.getLogger(), this.getTracer()
                        }))
                    }
                    getLogger() {
                        return n(this, void 0, void 0, (function*() {
                            return o(this, Xm, "f") || i(this, Xm, yield bg.build({
                                transportManager: o(this, Zm, "f"),
                                baseAttributes: o(this, Qm, "f")
                            }), "f"), o(this, Xm, "f")
                        }))
                    }
                    getTracer() {
                        return o(this, Gm, "f") || i(this, Gm, new G_({
                            transportManager: o(this, Zm, "f"),
                            baseAttributes: o(this, Jm, "f"),
                            staticAttributes: o(this, Ym, "f")
                        }), "f"), o(this, Gm, "f")
                    }
                    useNativeLoggerTransport(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                plugin: r,
                                logTypeBaseline: n
                            } = t;
                            return function*() {
                                (yield e.getLogger()).addTransport(new tm({
                                    transportId: "native-logger-transport",
                                    nativeLoggerV2: r,
                                    logTypeBaseline: n
                                }))
                            }()
                        }))
                    }
                    useOpenTelemetryLoggerTransport(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                resourceAttributes: r,
                                logTypeBaseline: n,
                                collectorBaseUrl: o,
                                tagId: i,
                                httpClient: s,
                                formatVersion: a
                            } = t;
                            return function*() {
                                (yield e.getLogger()).addTransport(new vm({
                                    transportId: "otel-logger-transport",
                                    resourceAttributes: r,
                                    logTypeBaseline: n,
                                    logsCollectorBaseUrl: o,
                                    tagId: i,
                                    httpClient: s,
                                    formatVersion: a
                                }))
                            }()
                        }))
                    }
                    useConsoleLoggerTransport(t) {
                        return n(this, void 0, void 0, (function*() {
                            (yield this.getLogger()).addTransport(new K_({
                                transportId: "console-transport",
                                logTypeBaseline: t,
                                shouldWriteLogsOnConsoles: o(this, Km, "f")
                            }))
                        }))
                    }
                    useServiceWorkerTracerTransport(t) {
                        let {
                            resourceAttributes: e,
                            enabled: r = !0,
                            collectorBaseUrl: n,
                            tagId: i,
                            swTransport: s,
                            aggregateSpans: a = !1,
                            formatVersion: c = "v1"
                        } = t;
                        const l = this.getTracer(),
                            u = new ob({
                                transportId: "sw-tracer-transport",
                                attributes: e,
                                enabled: r,
                                tagId: i,
                                collectorBaseUrl: n,
                                databaseSuffix: o(this, tb, "f"),
                                swTransport: s,
                                aggregateSpans: a,
                                formatVersion: c
                            });
                        u.initialize(), l.addTransport(u)
                    }
                    useOpenTelemetryTracerTransport(t) {
                        let {
                            resourceAttributes: e,
                            enabled: r = !0,
                            collectorBaseUrl: n,
                            tagId: o,
                            httpClient: i,
                            formatVersion: s
                        } = t;
                        const a = this.getTracer(),
                            c = new Rm({
                                transportId: "otel-tracer-transport",
                                resourceAttributes: e,
                                enabled: r,
                                tagId: o,
                                tracesCollectorBaseUrl: n,
                                httpClient: i,
                                formatVersion: s
                            });
                        a.addTransport(c)
                    }
                    useConsoleTracerTransport() {
                        return n(this, void 0, void 0, (function*() {
                            throw new Error("Not implemented")
                        }))
                    }
                    useFetchInstrumentation() {
                        this.getTracer().enableFetchInstrumentation()
                    }
                    setLogLevel(t) {
                        o(this, Zm, "f").setAllLogTypeBaselines(t)
                    }
                    setTracerStatus(t) {
                        this.getTracer().setStatus(t)
                    }
                    setTagId(t) {
                        o(this, Zm, "f").setTagId(t)
                    }
                    setAggregateSpansStatus(t) {
                        o(this, Zm, "f").setAggregateSpansStatus(t)
                    }
                    setResourceAttributes(t) {
                        o(this, Zm, "f").setResourceAttributes(t)
                    }
                    setSchedulerTimerInterval(t) {
                        o(this, Zm, "f").setSchedulerTimerInterval(t)
                    }
                    flushInstrumentationData() {
                        return n(this, void 0, void 0, (function*() {
                            yield Promise.all([o(this, Zm, "f").flushLogs(), o(this, Zm, "f").flushSpans()])
                        }))
                    }
                    logError(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                category: r,
                                message: n,
                                error: i,
                                errorCode: s,
                                visibility: a,
                                failSpan: c = !0,
                                attributes: l
                            } = t;
                            return function*() {
                                if (c) {
                                    const t = e.getTracer().getActiveSpan();
                                    null == t || t.fail()
                                }(yield e.getLogger()).error({
                                    category: r,
                                    message: n,
                                    error: i,
                                    errorCode: s,
                                    visibility: a,
                                    span: o(e, qm, "m", eb).call(e),
                                    attributes: l
                                })
                            }()
                        }))
                    }
                    logWarning(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                category: r,
                                message: n,
                                visibility: i,
                                attributes: s
                            } = t;
                            return function*() {
                                (yield e.getLogger()).warning({
                                    category: r,
                                    message: n,
                                    visibility: i,
                                    span: o(e, qm, "m", eb).call(e),
                                    attributes: s
                                })
                            }()
                        }))
                    }
                    logInfo(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                category: r,
                                message: n,
                                visibility: i,
                                attributes: s
                            } = t;
                            return function*() {
                                (yield e.getLogger()).info({
                                    category: r,
                                    message: n,
                                    visibility: i,
                                    span: o(e, qm, "m", eb).call(e),
                                    attributes: s
                                })
                            }()
                        }))
                    }
                    logDebug(t) {
                        return n(this, arguments, void 0, (function(t) {
                            var e = this;
                            let {
                                category: r,
                                message: n,
                                visibility: i,
                                attributes: s
                            } = t;
                            return function*() {
                                (yield e.getLogger()).debug({
                                    category: r,
                                    message: n,
                                    visibility: i,
                                    span: o(e, qm, "m", eb).call(e),
                                    attributes: s
                                })
                            }()
                        }))
                    }
                    log(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = yield this.getLogger();
                            yield e.log(t)
                        }))
                    }
                    span(t) {
                        return n(this, void 0, void 0, (function*() {
                            const e = this.getTracer();
                            yield e.span(t)
                        }))
                    }
                    flushLogs() {
                        return n(this, void 0, void 0, (function*() {
                            yield o(this, Zm, "f").flushLogs()
                        }))
                    }
                    flushSpans() {
                        return n(this, void 0, void 0, (function*() {
                            yield o(this, Zm, "f").flushSpans()
                        }))
                    }
                    startSpan(t, e, r, n) {
                        return this.getTracer().startSpan(t, e, r, n)
                    }
                    startActiveSpan(t, e, r, n, o) {
                        return this.getTracer().startActiveSpan(t, e, r, n, o)
                    }
                    getActiveSpan() {
                        return this.getTracer().getActiveSpan()
                    }
                }
                t.InstrumentationFactory = ib, Zm = new WeakMap, Gm = new WeakMap, Xm = new WeakMap, Km = new WeakMap, Qm = new WeakMap, Jm = new WeakMap, Ym = new WeakMap, tb = new WeakMap, qm = new WeakSet, eb = function() {
                        const t = this.getTracer().getActiveSpan();
                        return t ? S_(t) : void 0
                    },
                    function(t) {
                        t[t.Internal = 0] = "Internal", t[t.Client = 2] = "Client"
                    }(rb || (t.SpanKind = rb = {})), t.Version = "2.18.9"
            }(t, L(), A)
    }(I),
    function(t) {
        t.Log = "Log", t.LogsInitialization = "LogsInitialization", t.Span = "Span", t.SpansInitialization = "SpansInitialization", t.Flush = "Flush"
    }(C || (C = {}));
    const R = {};
    var j, x, N;

    function M(t) {
        return R[t]
    }

    function D(t, e) {
        const r = e();
        R[t] = r
    }! function(t) {
        t.InstrumentationFactory = "InstrumentationFactory"
    }(j || (j = {}));
    class U {
        constructor({
            spans: t = [],
            instrumentationConfig: e
        }) {
            x.set(this, void 0), N.set(this, void 0), n(this, x, t, "f"), n(this, N, e, "f")
        }
        processClientMessage(t) {
            return e(this, arguments, void 0, (function*({
                payload: t,
                instrumentationFactory: e = M(j.InstrumentationFactory),
                startSpanInstrumentation: r = (t => this.startSpanInstrumentation({
                    payload: t
                })),
                processSpan: n = (t => this.processSpan({
                    span: t
                }))
            }) {
                t.kind === C.SpansInitialization ? yield r(t.data): t.kind === C.Span ? yield n(t.data): t.kind === C.Flush && (yield null == e ? void 0 : e.flushSpans())
            }))
        }
        processSpan(t) {
            return e(this, arguments, void 0, (function*({
                span: t,
                instrumentationFactory: e = M(j.InstrumentationFactory)
            }) {
                e ? yield e.span(t): r(this, x, "f").push(t)
            }))
        }
        startSpanInstrumentation(t) {
            return e(this, void 0, void 0, (function*() {
                var e, {
                    payload: o,
                    fetchInstance: i = (null === (e = globalThis.fetch) || void 0 === e ? void 0 : e.bind(globalThis)),
                    factoryConfig: s = r(this, N, "f"),
                    createFactoryInstance: a = (t => new I.InstrumentationFactory({
                        databaseNameSuffix: t.databaseSuffix,
                        aggregateSpans: t.aggregateSpans
                    })),
                    updateFactoryConfig: c = (t => {
                        n(this, N, t, "f")
                    }),
                    setFactoryInstance: l = D,
                    setTransport: u = ((t, e, r) => this.setTracerTransport(t, e, r)),
                    processSpanFunction: h = ((t, e) => null == t ? void 0 : t.span(e))
                } = t;
                if (JSON.stringify(o) !== JSON.stringify(s)) {
                    const t = a(o);
                    l(j.InstrumentationFactory, (() => t)), u(t, o, i), c(o);
                    for (const e of r(this, x, "f")) yield h(t, e);
                    r(this, x, "f").length = 0
                }
            }))
        }
        setTracerTransport(t, e, r) {
            t.useOpenTelemetryTracerTransport({
                resourceAttributes: e.resourceAttributes,
                collectorBaseUrl: e.collectorBaseUrl,
                tagId: e.apiKey,
                enabled: !0,
                formatVersion: e.formatVersion,
                httpClient: new A.FetchHttpClient({
                    baseUrl: e.collectorBaseUrl,
                    headers: e.apiKey ? {
                        "api-key": e.apiKey,
                        "tag-id": e.apiKey
                    } : {},
                    fetchClient: r
                })
            })
        }
    }
    x = new WeakMap, N = new WeakMap;
    const W = ({
            event: t,
            logger: e,
            traceHandler: r,
            tracerWrapper: n
        }) => {
            try {
                t.waitUntil(r({
                    event: t,
                    logger: e,
                    tracerWrapper: n
                }))
            } catch (t) {
                e.error("Error handling Traces module message", t)
            }
        },
        B = t => e(void 0, [t], void 0, (function*({
            event: t,
            logger: e,
            tracerWrapper: r
        }) {
            yield null == r ? void 0 : r.processClientMessage({
                payload: t.data
            })
        }));
    t.Version = "0.5.12", t.startInstrumentationModule = ({
        workerScope: t,
        logger: e = new l({
            workerScope: t
        }),
        messageHandler: r = W,
        tracerWrapper: n = new U({})
    }) => {
        t.addEventListener("message", (t => {
            r({
                event: t,
                logger: e,
                traceHandler: B,
                tracerWrapper: n
            })
        }))
    }, t.startServiceWorker = ({
        workerScope: t,
        cacheStorage: e,
        appName: r,
        versionToken: n,
        appUrls: o,
        appUrlMappings: i
    }) => {
        const s = new w({
            workerScope: t,
            cacheStorage: e,
            appName: r,
            versionToken: n,
            appUrls: o,
            appUrlMappings: i
        });
        t.addEventListener("install", (t => {
            s.install(t)
        })), t.addEventListener("fetch", (t => {
            s.fetch(t)
        })), t.addEventListener("activate", (t => {
            s.activate(t)
        }))
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));