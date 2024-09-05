(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("@outsystems/communication-js", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.outsystemsCommunicationJs = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Version = _exports.PathFilter = _exports.NativeHttpClient = _exports.LoggerHttpClient = _exports.HttpClientWithHealthCheck = _exports.HttpClient = _exports.FetchHttpClient = _exports.ErrorCodes = _exports.DebuggerHttpClient = _exports.ContentType = _exports.CommunicationError = void 0;
  _exports.isNetworkOrServerError = ii;
  function e(e, t, o, r) {
    return new (o || (o = Promise))(function (n, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        var t;
        e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function (e) {
          e(t);
        })).then(s, a);
      }
      c((r = r.apply(e, t || [])).next());
    });
  }
  function t(e, t, o, r) {
    if ("a" === o && !r) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === o ? r : "a" === o ? r.call(e) : r ? r.value : t.get(e);
  }
  function o(e, t, o, r, n) {
    if ("m" === r) throw new TypeError("Private method is not writable");
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === r ? n.call(e, o) : n ? n.value = o : t.set(e, o), o;
  }
  "function" == typeof SuppressedError && SuppressedError;
  class r extends Error {
    constructor(e, t, o, r, n) {
      super(e), this.errorCode = t, this.status = o ? `${o}` : "", this.response = r, this.category = n;
    }
  }
  _exports.CommunicationError = r;
  var n;
  !function (e) {
    e.Communication_Default = "OS-CLRT-60900", e.Communication_Bad_Request = "OS-CLRT-60901", e.Communication_Unauthorized = "OS-CLRT-60902", e.Communication_Forbidden = "OS-CLRT-60903", e.Communication_Not_Found = "OS-CLRT-60904", e.Communication_Timeout = "OS-CLRT-60905", e.Communication_Internal_Server_Error = "OS-CLRT-60906", e.Communication_Unavailable = "OS-CLRT-60907";
  }(n || (_exports.ErrorCodes = n = {}));
  const i = {
      400: n.Communication_Bad_Request,
      401: n.Communication_Unauthorized,
      403: n.Communication_Forbidden,
      404: n.Communication_Not_Found,
      408: n.Communication_Timeout,
      500: n.Communication_Internal_Server_Error,
      503: n.Communication_Unavailable
    },
    s = e => {
      var t;
      return null !== (t = i[`${e}`]) && void 0 !== t ? t : n.Communication_Default;
    },
    a = "traceparent",
    c = "tracestate",
    l = "baggage",
    u = 512,
    h = ["code.function", "outsystems.function.key", "outsystems.function.type", "outsystems.runtime.screen", "outsystems.otel.access.visibility"];
  function p() {
    return e(this, arguments, void 0, function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let t = arguments.length > 1 ? arguments[1] : undefined;
      return function* () {
        if (!t) return e;
        const o = yield t();
        return o ? function (e, t) {
          const o = Object.assign(Object.assign({}, t), {
            [a]: d(e)
          });
          if (e.attributes) {
            const t = function (e) {
              return h.map(t => e[t] ? `${t}=${e[t]}` : void 0).filter(e => void 0 !== e).join(",");
            }(e.attributes);
            o[t.length > u ? l : c] = t;
          }
          return o;
        }(o, e) : e;
      }();
    });
  }
  function d(e) {
    return `00-${e.traceId}-${e.spanId}-${e.sampled ? "01" : "00"}`;
  }
  var f;
  !function (e) {
    e.FormUrlEncoded = "application/x-www-form-urlencoded", e.Json = "application/json";
  }(f || (f = {}));
  var g,
    y = _exports.ContentType = f;
  !function (e) {
    e[e.Unknown = 0] = "Unknown", e[e.Timeout = 1] = "Timeout", e[e.Unauthorized = 2] = "Unauthorized";
  }(g || (g = {}));
  var m = g,
    v = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function _(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function b(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
      var o = function e() {
        return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      o.prototype = t.prototype;
    } else o = {};
    return Object.defineProperty(o, "__esModule", {
      value: !0
    }), Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(o, t, r.get ? r : {
        enumerable: !0,
        get: function () {
          return e[t];
        }
      });
    }), o;
  }
  var w,
    S = Error,
    C = EvalError,
    E = RangeError,
    k = ReferenceError,
    T = SyntaxError,
    I = TypeError,
    P = URIError,
    R = "undefined" != typeof Symbol && Symbol,
    A = function () {
      if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var e = {},
        t = Symbol("test"),
        o = Object(t);
      if ("string" == typeof t) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(o)) return !1;
      for (t in e[t] = 42, e) return !1;
      if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
      if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
      var r = Object.getOwnPropertySymbols(e);
      if (1 !== r.length || r[0] !== t) return !1;
      if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (42 !== n.value || !0 !== n.enumerable) return !1;
      }
      return !0;
    },
    j = {
      foo: {}
    },
    O = Object,
    $ = Object.prototype.toString,
    D = Math.max,
    x = function (e, t) {
      for (var o = [], r = 0; r < e.length; r += 1) o[r] = e[r];
      for (var n = 0; n < t.length; n += 1) o[n + e.length] = t[n];
      return o;
    },
    L = function (e) {
      var t = this;
      if ("function" != typeof t || "[object Function]" !== $.apply(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
      for (var o, r = function (e, t) {
          for (var o = [], r = t, n = 0; r < e.length; r += 1, n += 1) o[n] = e[r];
          return o;
        }(arguments, 1), n = D(0, t.length - r.length), i = [], s = 0; s < n; s++) i[s] = "$" + s;
      if (o = Function("binder", "return function (" + function (e, t) {
        for (var o = "", r = 0; r < e.length; r += 1) o += e[r], r + 1 < e.length && (o += t);
        return o;
      }(i, ",") + "){ return binder.apply(this,arguments); }")(function () {
        if (this instanceof o) {
          var n = t.apply(this, x(r, arguments));
          return Object(n) === n ? n : this;
        }
        return t.apply(e, x(r, arguments));
      }), t.prototype) {
        var a = function () {};
        a.prototype = t.prototype, o.prototype = new a(), a.prototype = null;
      }
      return o;
    },
    H = Function.prototype.bind || L,
    U = Function.prototype.call,
    M = Object.prototype.hasOwnProperty,
    W = H.call(U, M),
    N = S,
    F = C,
    q = E,
    B = k,
    z = T,
    K = I,
    G = P,
    J = Function,
    V = function (e) {
      try {
        return J('"use strict"; return (' + e + ").constructor;")();
      } catch (e) {}
    },
    Q = Object.getOwnPropertyDescriptor;
  if (Q) try {
    Q({}, "");
  } catch (e) {
    Q = null;
  }
  var X = function () {
      throw new K();
    },
    Y = Q ? function () {
      try {
        return X;
      } catch (e) {
        try {
          return Q(arguments, "callee").get;
        } catch (e) {
          return X;
        }
      }
    }() : X,
    Z = "function" == typeof R && "function" == typeof Symbol && "symbol" == typeof R("foo") && "symbol" == typeof Symbol("bar") && A(),
    ee = {
      __proto__: j
    }.foo === j.foo && !({
      __proto__: null
    } instanceof O),
    te = Object.getPrototypeOf || (ee ? function (e) {
      return e.__proto__;
    } : null),
    oe = {},
    re = "undefined" != typeof Uint8Array && te ? te(Uint8Array) : w,
    ne = {
      __proto__: null,
      "%AggregateError%": "undefined" == typeof AggregateError ? w : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? w : ArrayBuffer,
      "%ArrayIteratorPrototype%": Z && te ? te([][Symbol.iterator]()) : w,
      "%AsyncFromSyncIteratorPrototype%": w,
      "%AsyncFunction%": oe,
      "%AsyncGenerator%": oe,
      "%AsyncGeneratorFunction%": oe,
      "%AsyncIteratorPrototype%": oe,
      "%Atomics%": "undefined" == typeof Atomics ? w : Atomics,
      "%BigInt%": "undefined" == typeof BigInt ? w : BigInt,
      "%BigInt64Array%": "undefined" == typeof BigInt64Array ? w : BigInt64Array,
      "%BigUint64Array%": "undefined" == typeof BigUint64Array ? w : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": "undefined" == typeof DataView ? w : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": N,
      "%eval%": eval,
      "%EvalError%": F,
      "%Float32Array%": "undefined" == typeof Float32Array ? w : Float32Array,
      "%Float64Array%": "undefined" == typeof Float64Array ? w : Float64Array,
      "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? w : FinalizationRegistry,
      "%Function%": J,
      "%GeneratorFunction%": oe,
      "%Int8Array%": "undefined" == typeof Int8Array ? w : Int8Array,
      "%Int16Array%": "undefined" == typeof Int16Array ? w : Int16Array,
      "%Int32Array%": "undefined" == typeof Int32Array ? w : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Z && te ? te(te([][Symbol.iterator]())) : w,
      "%JSON%": "object" == typeof JSON ? JSON : w,
      "%Map%": "undefined" == typeof Map ? w : Map,
      "%MapIteratorPrototype%": "undefined" != typeof Map && Z && te ? te(new Map()[Symbol.iterator]()) : w,
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": "undefined" == typeof Promise ? w : Promise,
      "%Proxy%": "undefined" == typeof Proxy ? w : Proxy,
      "%RangeError%": q,
      "%ReferenceError%": B,
      "%Reflect%": "undefined" == typeof Reflect ? w : Reflect,
      "%RegExp%": RegExp,
      "%Set%": "undefined" == typeof Set ? w : Set,
      "%SetIteratorPrototype%": "undefined" != typeof Set && Z && te ? te(new Set()[Symbol.iterator]()) : w,
      "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? w : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Z && te ? te(""[Symbol.iterator]()) : w,
      "%Symbol%": Z ? Symbol : w,
      "%SyntaxError%": z,
      "%ThrowTypeError%": Y,
      "%TypedArray%": re,
      "%TypeError%": K,
      "%Uint8Array%": "undefined" == typeof Uint8Array ? w : Uint8Array,
      "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? w : Uint8ClampedArray,
      "%Uint16Array%": "undefined" == typeof Uint16Array ? w : Uint16Array,
      "%Uint32Array%": "undefined" == typeof Uint32Array ? w : Uint32Array,
      "%URIError%": G,
      "%WeakMap%": "undefined" == typeof WeakMap ? w : WeakMap,
      "%WeakRef%": "undefined" == typeof WeakRef ? w : WeakRef,
      "%WeakSet%": "undefined" == typeof WeakSet ? w : WeakSet
    };
  if (te) try {
    null.error;
  } catch (e) {
    var ie = te(te(e));
    ne["%Error.prototype%"] = ie;
  }
  var se,
    ae,
    ce = function e(t) {
      var o;
      if ("%AsyncFunction%" === t) o = V("async function () {}");else if ("%GeneratorFunction%" === t) o = V("function* () {}");else if ("%AsyncGeneratorFunction%" === t) o = V("async function* () {}");else if ("%AsyncGenerator%" === t) {
        var r = e("%AsyncGeneratorFunction%");
        r && (o = r.prototype);
      } else if ("%AsyncIteratorPrototype%" === t) {
        var n = e("%AsyncGenerator%");
        n && te && (o = te(n.prototype));
      }
      return ne[t] = o, o;
    },
    le = {
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
    ue = H,
    he = W,
    pe = ue.call(Function.call, Array.prototype.concat),
    de = ue.call(Function.apply, Array.prototype.splice),
    fe = ue.call(Function.call, String.prototype.replace),
    ge = ue.call(Function.call, String.prototype.slice),
    ye = ue.call(Function.call, RegExp.prototype.exec),
    me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    ve = /\\(\\)?/g,
    _e = function (e, t) {
      var o,
        r = e;
      if (he(le, r) && (r = "%" + (o = le[r])[0] + "%"), he(ne, r)) {
        var n = ne[r];
        if (n === oe && (n = ce(r)), void 0 === n && !t) throw new K("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return {
          alias: o,
          name: r,
          value: n
        };
      }
      throw new z("intrinsic " + e + " does not exist!");
    },
    be = function (e, t) {
      if ("string" != typeof e || 0 === e.length) throw new K("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof t) throw new K('"allowMissing" argument must be a boolean');
      if (null === ye(/^%?[^%]*%?$/, e)) throw new z("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var o = function (e) {
          var t = ge(e, 0, 1),
            o = ge(e, -1);
          if ("%" === t && "%" !== o) throw new z("invalid intrinsic syntax, expected closing `%`");
          if ("%" === o && "%" !== t) throw new z("invalid intrinsic syntax, expected opening `%`");
          var r = [];
          return fe(e, me, function (e, t, o, n) {
            r[r.length] = o ? fe(n, ve, "$1") : t || e;
          }), r;
        }(e),
        r = o.length > 0 ? o[0] : "",
        n = _e("%" + r + "%", t),
        i = n.name,
        s = n.value,
        a = !1,
        c = n.alias;
      c && (r = c[0], de(o, pe([0, 1], c)));
      for (var l = 1, u = !0; l < o.length; l += 1) {
        var h = o[l],
          p = ge(h, 0, 1),
          d = ge(h, -1);
        if (('"' === p || "'" === p || "`" === p || '"' === d || "'" === d || "`" === d) && p !== d) throw new z("property names with quotes must have matching quotes");
        if ("constructor" !== h && u || (a = !0), he(ne, i = "%" + (r += "." + h) + "%")) s = ne[i];else if (null != s) {
          if (!(h in s)) {
            if (!t) throw new K("base intrinsic for " + e + " exists, but the property is not available.");
            return;
          }
          if (Q && l + 1 >= o.length) {
            var f = Q(s, h);
            s = (u = !!f) && "get" in f && !("originalValue" in f.get) ? f.get : s[h];
          } else u = he(s, h), s = s[h];
          u && !a && (ne[i] = s);
        }
      }
      return s;
    },
    we = {
      exports: {}
    };
  function Se() {
    if (ae) return se;
    ae = 1;
    var e = be("%Object.defineProperty%", !0) || !1;
    if (e) try {
      e({}, "a", {
        value: 1
      });
    } catch (t) {
      e = !1;
    }
    return se = e;
  }
  var Ce = be("%Object.getOwnPropertyDescriptor%", !0);
  if (Ce) try {
    Ce([], "length");
  } catch (e) {
    Ce = null;
  }
  var Ee = Ce,
    ke = Se(),
    Te = T,
    Ie = I,
    Pe = Ee,
    Re = Se(),
    Ae = function () {
      return !!Re;
    };
  Ae.hasArrayLengthDefineBug = function () {
    if (!Re) return null;
    try {
      return 1 !== Re([], "length", {
        value: 1
      }).length;
    } catch (e) {
      return !0;
    }
  };
  var je = be,
    Oe = function (e, t, o) {
      if (!e || "object" != typeof e && "function" != typeof e) throw new Ie("`obj` must be an object or a function`");
      if ("string" != typeof t && "symbol" != typeof t) throw new Ie("`property` must be a string or a symbol`");
      if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new Ie("`nonEnumerable`, if provided, must be a boolean or null");
      if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new Ie("`nonWritable`, if provided, must be a boolean or null");
      if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new Ie("`nonConfigurable`, if provided, must be a boolean or null");
      if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new Ie("`loose`, if provided, must be a boolean");
      var r = arguments.length > 3 ? arguments[3] : null,
        n = arguments.length > 4 ? arguments[4] : null,
        i = arguments.length > 5 ? arguments[5] : null,
        s = arguments.length > 6 && arguments[6],
        a = !!Pe && Pe(e, t);
      if (ke) ke(e, t, {
        configurable: null === i && a ? a.configurable : !i,
        enumerable: null === r && a ? a.enumerable : !r,
        value: o,
        writable: null === n && a ? a.writable : !n
      });else {
        if (!s && (r || n || i)) throw new Te("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        e[t] = o;
      }
    },
    $e = Ae(),
    De = Ee,
    xe = I,
    Le = je("%Math.floor%"),
    He = function (e, t) {
      if ("function" != typeof e) throw new xe("`fn` is not a function");
      if ("number" != typeof t || t < 0 || t > 4294967295 || Le(t) !== t) throw new xe("`length` must be a positive 32-bit integer");
      var o = arguments.length > 2 && !!arguments[2],
        r = !0,
        n = !0;
      if ("length" in e && De) {
        var i = De(e, "length");
        i && !i.configurable && (r = !1), i && !i.writable && (n = !1);
      }
      return (r || n || !o) && ($e ? Oe(e, "length", t, !0, !0) : Oe(e, "length", t)), e;
    };
  !function (e) {
    var t = H,
      o = be,
      r = He,
      n = I,
      i = o("%Function.prototype.apply%"),
      s = o("%Function.prototype.call%"),
      a = o("%Reflect.apply%", !0) || t.call(s, i),
      c = Se(),
      l = o("%Math.max%");
    e.exports = function (e) {
      if ("function" != typeof e) throw new n("a function is required");
      var o = a(t, s, arguments);
      return r(o, 1 + l(0, e.length - (arguments.length - 1)), !0);
    };
    var u = function () {
      return a(t, i, arguments);
    };
    c ? c(e.exports, "apply", {
      value: u
    }) : e.exports.apply = u;
  }(we);
  var Ue = be,
    Me = we.exports,
    We = Me(Ue("String.prototype.indexOf")),
    Ne = b(Object.freeze({
      __proto__: null,
      default: {}
    })),
    Fe = "function" == typeof Map && Map.prototype,
    qe = Object.getOwnPropertyDescriptor && Fe ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Be = Fe && qe && "function" == typeof qe.get ? qe.get : null,
    ze = Fe && Map.prototype.forEach,
    Ke = "function" == typeof Set && Set.prototype,
    Ge = Object.getOwnPropertyDescriptor && Ke ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    Je = Ke && Ge && "function" == typeof Ge.get ? Ge.get : null,
    Ve = Ke && Set.prototype.forEach,
    Qe = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    Xe = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    Ye = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    Ze = Boolean.prototype.valueOf,
    et = Object.prototype.toString,
    tt = Function.prototype.toString,
    ot = String.prototype.match,
    rt = String.prototype.slice,
    nt = String.prototype.replace,
    it = String.prototype.toUpperCase,
    st = String.prototype.toLowerCase,
    at = RegExp.prototype.test,
    ct = Array.prototype.concat,
    lt = Array.prototype.join,
    ut = Array.prototype.slice,
    ht = Math.floor,
    pt = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    dt = Object.getOwnPropertySymbols,
    ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    gt = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    yt = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === gt || "symbol") ? Symbol.toStringTag : null,
    mt = Object.prototype.propertyIsEnumerable,
    vt = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
      return e.__proto__;
    } : null);
  function _t(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || at.call(/e/, t)) return t;
    var o = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
      var r = e < 0 ? -ht(-e) : ht(e);
      if (r !== e) {
        var n = String(r),
          i = rt.call(t, n.length + 1);
        return nt.call(n, o, "$&_") + "." + nt.call(nt.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return nt.call(t, o, "$&_");
  }
  var bt = Ne,
    wt = bt.custom,
    St = It(wt) ? wt : null;
  function Ct(e, t, o) {
    var r = "double" === (o.quoteStyle || t) ? '"' : "'";
    return r + e + r;
  }
  function Et(e) {
    return nt.call(String(e), /"/g, "&quot;");
  }
  function kt(e) {
    return !("[object Array]" !== At(e) || yt && "object" == typeof e && yt in e);
  }
  function Tt(e) {
    return !("[object RegExp]" !== At(e) || yt && "object" == typeof e && yt in e);
  }
  function It(e) {
    if (gt) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !ft) return !1;
    try {
      return ft.call(e), !0;
    } catch (e) {}
    return !1;
  }
  var Pt = Object.prototype.hasOwnProperty || function (e) {
    return e in this;
  };
  function Rt(e, t) {
    return Pt.call(e, t);
  }
  function At(e) {
    return et.call(e);
  }
  function jt(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var o = 0, r = e.length; o < r; o++) if (e[o] === t) return o;
    return -1;
  }
  function Ot(e, t) {
    if (e.length > t.maxStringLength) {
      var o = e.length - t.maxStringLength,
        r = "... " + o + " more character" + (o > 1 ? "s" : "");
      return Ot(rt.call(e, 0, t.maxStringLength), t) + r;
    }
    return Ct(nt.call(nt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $t), "single", t);
  }
  function $t(e) {
    var t = e.charCodeAt(0),
      o = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[t];
    return o ? "\\" + o : "\\x" + (t < 16 ? "0" : "") + it.call(t.toString(16));
  }
  function Dt(e) {
    return "Object(" + e + ")";
  }
  function xt(e) {
    return e + " { ? }";
  }
  function Lt(e, t, o, r) {
    return e + " (" + t + ") {" + (r ? Ht(o, r) : lt.call(o, ", ")) + "}";
  }
  function Ht(e, t) {
    if (0 === e.length) return "";
    var o = "\n" + t.prev + t.base;
    return o + lt.call(e, "," + o) + "\n" + t.prev;
  }
  function Ut(e, t) {
    var o = kt(e),
      r = [];
    if (o) {
      r.length = e.length;
      for (var n = 0; n < e.length; n++) r[n] = Rt(e, n) ? t(e[n], e) : "";
    }
    var i,
      s = "function" == typeof dt ? dt(e) : [];
    if (gt) {
      i = {};
      for (var a = 0; a < s.length; a++) i["$" + s[a]] = s[a];
    }
    for (var c in e) Rt(e, c) && (o && String(Number(c)) === c && c < e.length || gt && i["$" + c] instanceof Symbol || (at.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
    if ("function" == typeof dt) for (var l = 0; l < s.length; l++) mt.call(e, s[l]) && r.push("[" + t(s[l]) + "]: " + t(e[s[l]], e));
    return r;
  }
  var Mt = be,
    Wt = function (e, t) {
      var o = Ue(e, !!t);
      return "function" == typeof o && We(e, ".prototype.") > -1 ? Me(o) : o;
    },
    Nt = function e(t, o, r, n) {
      var i = o || {};
      if (Rt(i, "quoteStyle") && "single" !== i.quoteStyle && "double" !== i.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (Rt(i, "maxStringLength") && ("number" == typeof i.maxStringLength ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : null !== i.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var s = !Rt(i, "customInspect") || i.customInspect;
      if ("boolean" != typeof s && "symbol" !== s) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (Rt(i, "indent") && null !== i.indent && "\t" !== i.indent && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (Rt(i, "numericSeparator") && "boolean" != typeof i.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var a = i.numericSeparator;
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("boolean" == typeof t) return t ? "true" : "false";
      if ("string" == typeof t) return Ot(t, i);
      if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var c = String(t);
        return a ? _t(t, c) : c;
      }
      if ("bigint" == typeof t) {
        var l = String(t) + "n";
        return a ? _t(t, l) : l;
      }
      var u = void 0 === i.depth ? 5 : i.depth;
      if (void 0 === r && (r = 0), r >= u && u > 0 && "object" == typeof t) return kt(t) ? "[Array]" : "[Object]";
      var h = function (e, t) {
        var o;
        if ("\t" === e.indent) o = "\t";else {
          if (!("number" == typeof e.indent && e.indent > 0)) return null;
          o = lt.call(Array(e.indent + 1), " ");
        }
        return {
          base: o,
          prev: lt.call(Array(t + 1), o)
        };
      }(i, r);
      if (void 0 === n) n = [];else if (jt(n, t) >= 0) return "[Circular]";
      function p(t, o, s) {
        if (o && (n = ut.call(n)).push(o), s) {
          var a = {
            depth: i.depth
          };
          return Rt(i, "quoteStyle") && (a.quoteStyle = i.quoteStyle), e(t, a, r + 1, n);
        }
        return e(t, i, r + 1, n);
      }
      if ("function" == typeof t && !Tt(t)) {
        var d = function (e) {
            if (e.name) return e.name;
            var t = ot.call(tt.call(e), /^function\s*([\w$]+)/);
            if (t) return t[1];
            return null;
          }(t),
          f = Ut(t, p);
        return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (f.length > 0 ? " { " + lt.call(f, ", ") + " }" : "");
      }
      if (It(t)) {
        var g = gt ? nt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ft.call(t);
        return "object" != typeof t || gt ? g : Dt(g);
      }
      if (function (e) {
        if (!e || "object" != typeof e) return !1;
        if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) return !0;
        return "string" == typeof e.nodeName && "function" == typeof e.getAttribute;
      }(t)) {
        for (var y = "<" + st.call(String(t.nodeName)), m = t.attributes || [], _ = 0; _ < m.length; _++) y += " " + m[_].name + "=" + Ct(Et(m[_].value), "double", i);
        return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + st.call(String(t.nodeName)) + ">";
      }
      if (kt(t)) {
        if (0 === t.length) return "[]";
        var b = Ut(t, p);
        return h && !function (e) {
          for (var t = 0; t < e.length; t++) if (jt(e[t], "\n") >= 0) return !1;
          return !0;
        }(b) ? "[" + Ht(b, h) + "]" : "[ " + lt.call(b, ", ") + " ]";
      }
      if (function (e) {
        return !("[object Error]" !== At(e) || yt && "object" == typeof e && yt in e);
      }(t)) {
        var w = Ut(t, p);
        return "cause" in Error.prototype || !("cause" in t) || mt.call(t, "cause") ? 0 === w.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + lt.call(w, ", ") + " }" : "{ [" + String(t) + "] " + lt.call(ct.call("[cause]: " + p(t.cause), w), ", ") + " }";
      }
      if ("object" == typeof t && s) {
        if (St && "function" == typeof t[St] && bt) return bt(t, {
          depth: u - r
        });
        if ("symbol" !== s && "function" == typeof t.inspect) return t.inspect();
      }
      if (function (e) {
        if (!Be || !e || "object" != typeof e) return !1;
        try {
          Be.call(e);
          try {
            Je.call(e);
          } catch (e) {
            return !0;
          }
          return e instanceof Map;
        } catch (e) {}
        return !1;
      }(t)) {
        var S = [];
        return ze && ze.call(t, function (e, o) {
          S.push(p(o, t, !0) + " => " + p(e, t));
        }), Lt("Map", Be.call(t), S, h);
      }
      if (function (e) {
        if (!Je || !e || "object" != typeof e) return !1;
        try {
          Je.call(e);
          try {
            Be.call(e);
          } catch (e) {
            return !0;
          }
          return e instanceof Set;
        } catch (e) {}
        return !1;
      }(t)) {
        var C = [];
        return Ve && Ve.call(t, function (e) {
          C.push(p(e, t));
        }), Lt("Set", Je.call(t), C, h);
      }
      if (function (e) {
        if (!Qe || !e || "object" != typeof e) return !1;
        try {
          Qe.call(e, Qe);
          try {
            Xe.call(e, Xe);
          } catch (e) {
            return !0;
          }
          return e instanceof WeakMap;
        } catch (e) {}
        return !1;
      }(t)) return xt("WeakMap");
      if (function (e) {
        if (!Xe || !e || "object" != typeof e) return !1;
        try {
          Xe.call(e, Xe);
          try {
            Qe.call(e, Qe);
          } catch (e) {
            return !0;
          }
          return e instanceof WeakSet;
        } catch (e) {}
        return !1;
      }(t)) return xt("WeakSet");
      if (function (e) {
        if (!Ye || !e || "object" != typeof e) return !1;
        try {
          return Ye.call(e), !0;
        } catch (e) {}
        return !1;
      }(t)) return xt("WeakRef");
      if (function (e) {
        return !("[object Number]" !== At(e) || yt && "object" == typeof e && yt in e);
      }(t)) return Dt(p(Number(t)));
      if (function (e) {
        if (!e || "object" != typeof e || !pt) return !1;
        try {
          return pt.call(e), !0;
        } catch (e) {}
        return !1;
      }(t)) return Dt(p(pt.call(t)));
      if (function (e) {
        return !("[object Boolean]" !== At(e) || yt && "object" == typeof e && yt in e);
      }(t)) return Dt(Ze.call(t));
      if (function (e) {
        return !("[object String]" !== At(e) || yt && "object" == typeof e && yt in e);
      }(t)) return Dt(p(String(t)));
      if ("undefined" != typeof window && t === window) return "{ [object Window] }";
      if (t === v) return "{ [object globalThis] }";
      if (!function (e) {
        return !("[object Date]" !== At(e) || yt && "object" == typeof e && yt in e);
      }(t) && !Tt(t)) {
        var E = Ut(t, p),
          k = vt ? vt(t) === Object.prototype : t instanceof Object || t.constructor === Object,
          T = t instanceof Object ? "" : "null prototype",
          I = !k && yt && Object(t) === t && yt in t ? rt.call(At(t), 8, -1) : T ? "Object" : "",
          P = (k || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (I || T ? "[" + lt.call(ct.call([], I || [], T || []), ": ") + "] " : "");
        return 0 === E.length ? P + "{}" : h ? P + "{" + Ht(E, h) + "}" : P + "{ " + lt.call(E, ", ") + " }";
      }
      return String(t);
    },
    Ft = I,
    qt = Mt("%WeakMap%", !0),
    Bt = Mt("%Map%", !0),
    zt = Wt("WeakMap.prototype.get", !0),
    Kt = Wt("WeakMap.prototype.set", !0),
    Gt = Wt("WeakMap.prototype.has", !0),
    Jt = Wt("Map.prototype.get", !0),
    Vt = Wt("Map.prototype.set", !0),
    Qt = Wt("Map.prototype.has", !0),
    Xt = function (e, t) {
      for (var o, r = e; null !== (o = r.next); r = o) if (o.key === t) return r.next = o.next, o.next = e.next, e.next = o, o;
    },
    Yt = String.prototype.replace,
    Zt = /%20/g,
    eo = "RFC3986",
    to = {
      default: eo,
      formatters: {
        RFC1738: function (e) {
          return Yt.call(e, Zt, "+");
        },
        RFC3986: function (e) {
          return String(e);
        }
      },
      RFC1738: "RFC1738",
      RFC3986: eo
    },
    oo = to,
    ro = Object.prototype.hasOwnProperty,
    no = Array.isArray,
    io = function () {
      for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      return e;
    }(),
    so = function (e, t) {
      for (var o = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (o[r] = e[r]);
      return o;
    },
    ao = 1024,
    co = {
      arrayToObject: so,
      assign: function (e, t) {
        return Object.keys(t).reduce(function (e, o) {
          return e[o] = t[o], e;
        }, e);
      },
      combine: function (e, t) {
        return [].concat(e, t);
      },
      compact: function (e) {
        for (var t = [{
            obj: {
              o: e
            },
            prop: "o"
          }], o = [], r = 0; r < t.length; ++r) for (var n = t[r], i = n.obj[n.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
          var c = s[a],
            l = i[c];
          "object" == typeof l && null !== l && -1 === o.indexOf(l) && (t.push({
            obj: i,
            prop: c
          }), o.push(l));
        }
        return function (e) {
          for (; e.length > 1;) {
            var t = e.pop(),
              o = t.obj[t.prop];
            if (no(o)) {
              for (var r = [], n = 0; n < o.length; ++n) void 0 !== o[n] && r.push(o[n]);
              t.obj[t.prop] = r;
            }
          }
        }(t), e;
      },
      decode: function (e, t, o) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === o) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(r);
        } catch (e) {
          return r;
        }
      },
      encode: function (e, t, o, r, n) {
        if (0 === e.length) return e;
        var i = e;
        if ("symbol" == typeof e ? i = Symbol.prototype.toString.call(e) : "string" != typeof e && (i = String(e)), "iso-8859-1" === o) return escape(i).replace(/%u[0-9a-f]{4}/gi, function (e) {
          return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
        });
        for (var s = "", a = 0; a < i.length; a += ao) {
          for (var c = i.length >= ao ? i.slice(a, a + ao) : i, l = [], u = 0; u < c.length; ++u) {
            var h = c.charCodeAt(u);
            45 === h || 46 === h || 95 === h || 126 === h || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || n === oo.RFC1738 && (40 === h || 41 === h) ? l[l.length] = c.charAt(u) : h < 128 ? l[l.length] = io[h] : h < 2048 ? l[l.length] = io[192 | h >> 6] + io[128 | 63 & h] : h < 55296 || h >= 57344 ? l[l.length] = io[224 | h >> 12] + io[128 | h >> 6 & 63] + io[128 | 63 & h] : (u += 1, h = 65536 + ((1023 & h) << 10 | 1023 & c.charCodeAt(u)), l[l.length] = io[240 | h >> 18] + io[128 | h >> 12 & 63] + io[128 | h >> 6 & 63] + io[128 | 63 & h]);
          }
          s += l.join("");
        }
        return s;
      },
      isBuffer: function (e) {
        return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
      },
      isRegExp: function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      },
      maybeMap: function (e, t) {
        if (no(e)) {
          for (var o = [], r = 0; r < e.length; r += 1) o.push(t(e[r]));
          return o;
        }
        return t(e);
      },
      merge: function e(t, o, r) {
        if (!o) return t;
        if ("object" != typeof o) {
          if (no(t)) t.push(o);else {
            if (!t || "object" != typeof t) return [t, o];
            (r && (r.plainObjects || r.allowPrototypes) || !ro.call(Object.prototype, o)) && (t[o] = !0);
          }
          return t;
        }
        if (!t || "object" != typeof t) return [t].concat(o);
        var n = t;
        return no(t) && !no(o) && (n = so(t, r)), no(t) && no(o) ? (o.forEach(function (o, n) {
          if (ro.call(t, n)) {
            var i = t[n];
            i && "object" == typeof i && o && "object" == typeof o ? t[n] = e(i, o, r) : t.push(o);
          } else t[n] = o;
        }), t) : Object.keys(o).reduce(function (t, n) {
          var i = o[n];
          return ro.call(t, n) ? t[n] = e(t[n], i, r) : t[n] = i, t;
        }, n);
      }
    },
    lo = function () {
      var e,
        t,
        o,
        r = {
          assert: function (e) {
            if (!r.has(e)) throw new Ft("Side channel does not contain " + Nt(e));
          },
          get: function (r) {
            if (qt && r && ("object" == typeof r || "function" == typeof r)) {
              if (e) return zt(e, r);
            } else if (Bt) {
              if (t) return Jt(t, r);
            } else if (o) return function (e, t) {
              var o = Xt(e, t);
              return o && o.value;
            }(o, r);
          },
          has: function (r) {
            if (qt && r && ("object" == typeof r || "function" == typeof r)) {
              if (e) return Gt(e, r);
            } else if (Bt) {
              if (t) return Qt(t, r);
            } else if (o) return function (e, t) {
              return !!Xt(e, t);
            }(o, r);
            return !1;
          },
          set: function (r, n) {
            qt && r && ("object" == typeof r || "function" == typeof r) ? (e || (e = new qt()), Kt(e, r, n)) : Bt ? (t || (t = new Bt()), Vt(t, r, n)) : (o || (o = {
              key: {},
              next: null
            }), function (e, t, o) {
              var r = Xt(e, t);
              r ? r.value = o : e.next = {
                key: t,
                next: e.next,
                value: o
              };
            }(o, r, n));
          }
        };
      return r;
    },
    uo = co,
    ho = to,
    po = Object.prototype.hasOwnProperty,
    fo = {
      brackets: function (e) {
        return e + "[]";
      },
      comma: "comma",
      indices: function (e, t) {
        return e + "[" + t + "]";
      },
      repeat: function (e) {
        return e;
      }
    },
    go = Array.isArray,
    yo = Array.prototype.push,
    mo = function (e, t) {
      yo.apply(e, go(t) ? t : [t]);
    },
    vo = Date.prototype.toISOString,
    _o = ho.default,
    bo = {
      addQueryPrefix: !1,
      allowDots: !1,
      allowEmptyArrays: !1,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encodeDotInKeys: !1,
      encoder: uo.encode,
      encodeValuesOnly: !1,
      format: _o,
      formatter: ho.formatters[_o],
      indices: !1,
      serializeDate: function (e) {
        return vo.call(e);
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
    wo = {},
    So = function e(t, o, r, n, i, s, a, c, l, u, h, p, d, f, g, y, m, v) {
      for (var _, b = t, w = v, S = 0, C = !1; void 0 !== (w = w.get(wo)) && !C;) {
        var E = w.get(t);
        if (S += 1, void 0 !== E) {
          if (E === S) throw new RangeError("Cyclic object value");
          C = !0;
        }
        void 0 === w.get(wo) && (S = 0);
      }
      if ("function" == typeof u ? b = u(o, b) : b instanceof Date ? b = d(b) : "comma" === r && go(b) && (b = uo.maybeMap(b, function (e) {
        return e instanceof Date ? d(e) : e;
      })), null === b) {
        if (s) return l && !y ? l(o, bo.encoder, m, "key", f) : o;
        b = "";
      }
      if ("string" == typeof (_ = b) || "number" == typeof _ || "boolean" == typeof _ || "symbol" == typeof _ || "bigint" == typeof _ || uo.isBuffer(b)) return l ? [g(y ? o : l(o, bo.encoder, m, "key", f)) + "=" + g(l(b, bo.encoder, m, "value", f))] : [g(o) + "=" + g(String(b))];
      var k,
        T = [];
      if (void 0 === b) return T;
      if ("comma" === r && go(b)) y && l && (b = uo.maybeMap(b, l)), k = [{
        value: b.length > 0 ? b.join(",") || null : void 0
      }];else if (go(u)) k = u;else {
        var I = Object.keys(b);
        k = h ? I.sort(h) : I;
      }
      var P = c ? o.replace(/\./g, "%2E") : o,
        R = n && go(b) && 1 === b.length ? P + "[]" : P;
      if (i && go(b) && 0 === b.length) return R + "[]";
      for (var A = 0; A < k.length; ++A) {
        var j = k[A],
          O = "object" == typeof j && void 0 !== j.value ? j.value : b[j];
        if (!a || null !== O) {
          var $ = p && c ? j.replace(/\./g, "%2E") : j,
            D = go(b) ? "function" == typeof r ? r(R, $) : R : R + (p ? "." + $ : "[" + $ + "]");
          v.set(t, S);
          var x = lo();
          x.set(wo, v), mo(T, e(O, D, r, n, i, s, a, c, "comma" === r && y && go(b) ? null : l, u, h, p, d, f, g, y, m, x));
        }
      }
      return T;
    },
    Co = co,
    Eo = Object.prototype.hasOwnProperty,
    ko = Array.isArray,
    To = {
      allowDots: !1,
      allowEmptyArrays: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decodeDotInKeys: !1,
      decoder: Co.decode,
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
    Io = function (e) {
      return e.replace(/&#(\d+);/g, function (e, t) {
        return String.fromCharCode(parseInt(t, 10));
      });
    },
    Po = function (e, t) {
      return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
    },
    Ro = function (e, t, o, r) {
      if (e) {
        var n = o.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
          i = /(\[[^[\]]*])/g,
          s = o.depth > 0 && /(\[[^[\]]*])/.exec(n),
          a = s ? n.slice(0, s.index) : n,
          c = [];
        if (a) {
          if (!o.plainObjects && Eo.call(Object.prototype, a) && !o.allowPrototypes) return;
          c.push(a);
        }
        for (var l = 0; o.depth > 0 && null !== (s = i.exec(n)) && l < o.depth;) {
          if (l += 1, !o.plainObjects && Eo.call(Object.prototype, s[1].slice(1, -1)) && !o.allowPrototypes) return;
          c.push(s[1]);
        }
        return s && c.push("[" + n.slice(s.index) + "]"), function (e, t, o, r) {
          for (var n = r ? t : Po(t, o), i = e.length - 1; i >= 0; --i) {
            var s,
              a = e[i];
            if ("[]" === a && o.parseArrays) s = o.allowEmptyArrays && ("" === n || o.strictNullHandling && null === n) ? [] : [].concat(n);else {
              s = o.plainObjects ? Object.create(null) : {};
              var c = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                l = o.decodeDotInKeys ? c.replace(/%2E/g, ".") : c,
                u = parseInt(l, 10);
              o.parseArrays || "" !== l ? !isNaN(u) && a !== l && String(u) === l && u >= 0 && o.parseArrays && u <= o.arrayLimit ? (s = [])[u] = n : "__proto__" !== l && (s[l] = n) : s = {
                0: n
              };
            }
            n = s;
          }
          return n;
        }(c, t, o, r);
      }
    },
    Ao = function (e, t) {
      var o,
        r = e,
        n = function (e) {
          if (!e) return bo;
          if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
          if (void 0 !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
          if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
          var t = e.charset || bo.charset;
          if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var o = ho.default;
          if (void 0 !== e.format) {
            if (!po.call(ho.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            o = e.format;
          }
          var r,
            n = ho.formatters[o],
            i = bo.filter;
          if (("function" == typeof e.filter || go(e.filter)) && (i = e.filter), r = e.arrayFormat in fo ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : bo.arrayFormat, "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
          var s = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || bo.allowDots : !!e.allowDots;
          return {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : bo.addQueryPrefix,
            allowDots: s,
            allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : bo.allowEmptyArrays,
            arrayFormat: r,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : bo.charsetSentinel,
            commaRoundTrip: e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? bo.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : bo.encode,
            encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : bo.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : bo.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : bo.encodeValuesOnly,
            filter: i,
            format: o,
            formatter: n,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : bo.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : bo.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : bo.strictNullHandling
          };
        }(t);
      "function" == typeof n.filter ? r = (0, n.filter)("", r) : go(n.filter) && (o = n.filter);
      var i = [];
      if ("object" != typeof r || null === r) return "";
      var s = fo[n.arrayFormat],
        a = "comma" === s && n.commaRoundTrip;
      o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
      for (var c = lo(), l = 0; l < o.length; ++l) {
        var u = o[l];
        n.skipNulls && null === r[u] || mo(i, So(r[u], u, s, a, n.allowEmptyArrays, n.strictNullHandling, n.skipNulls, n.encodeDotInKeys, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, c));
      }
      var h = i.join(n.delimiter),
        p = !0 === n.addQueryPrefix ? "?" : "";
      return n.charsetSentinel && ("iso-8859-1" === n.charset ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), h.length > 0 ? p + h : "";
    },
    jo = function (e, t) {
      var o = function (e) {
        if (!e) return To;
        if (void 0 !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== e.decodeDotInKeys && "boolean" != typeof e.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var t = void 0 === e.charset ? To.charset : e.charset,
          o = void 0 === e.duplicates ? To.duplicates : e.duplicates;
        if ("combine" !== o && "first" !== o && "last" !== o) throw new TypeError("The duplicates option must be either combine, first, or last");
        return {
          allowDots: void 0 === e.allowDots ? !0 === e.decodeDotInKeys || To.allowDots : !!e.allowDots,
          allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : To.allowEmptyArrays,
          allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : To.allowPrototypes,
          allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : To.allowSparse,
          arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : To.arrayLimit,
          charset: t,
          charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : To.charsetSentinel,
          comma: "boolean" == typeof e.comma ? e.comma : To.comma,
          decodeDotInKeys: "boolean" == typeof e.decodeDotInKeys ? e.decodeDotInKeys : To.decodeDotInKeys,
          decoder: "function" == typeof e.decoder ? e.decoder : To.decoder,
          delimiter: "string" == typeof e.delimiter || Co.isRegExp(e.delimiter) ? e.delimiter : To.delimiter,
          depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : To.depth,
          duplicates: o,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : To.interpretNumericEntities,
          parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : To.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : To.plainObjects,
          strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : To.strictNullHandling
        };
      }(t);
      if ("" === e || null == e) return o.plainObjects ? Object.create(null) : {};
      for (var r = "string" == typeof e ? function (e, t) {
          var o = {
              __proto__: null
            },
            r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
          r = r.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
          var n,
            i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            s = r.split(t.delimiter, i),
            a = -1,
            c = t.charset;
          if (t.charsetSentinel) for (n = 0; n < s.length; ++n) 0 === s[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[n] ? c = "utf-8" : "utf8=%26%2310003%3B" === s[n] && (c = "iso-8859-1"), a = n, n = s.length);
          for (n = 0; n < s.length; ++n) if (n !== a) {
            var l,
              u,
              h = s[n],
              p = h.indexOf("]="),
              d = -1 === p ? h.indexOf("=") : p + 1;
            -1 === d ? (l = t.decoder(h, To.decoder, c, "key"), u = t.strictNullHandling ? null : "") : (l = t.decoder(h.slice(0, d), To.decoder, c, "key"), u = Co.maybeMap(Po(h.slice(d + 1), t), function (e) {
              return t.decoder(e, To.decoder, c, "value");
            })), u && t.interpretNumericEntities && "iso-8859-1" === c && (u = Io(u)), h.indexOf("[]=") > -1 && (u = ko(u) ? [u] : u);
            var f = Eo.call(o, l);
            f && "combine" === t.duplicates ? o[l] = Co.combine(o[l], u) : f && "last" !== t.duplicates || (o[l] = u);
          }
          return o;
        }(e, o) : e, n = o.plainObjects ? Object.create(null) : {}, i = Object.keys(r), s = 0; s < i.length; ++s) {
        var a = i[s],
          c = Ro(a, r[a], o, "string" == typeof e);
        n = Co.merge(n, c, o);
      }
      return !0 === o.allowSparse ? n : Co.compact(n);
    },
    Oo = _({
      formats: to,
      parse: jo,
      stringify: Ao
    });
  const $o = _ref => {
      let {
        payload: e,
        headers: t
      } = _ref;
      return !(!e || (null == t ? void 0 : t["content-type"]));
    },
    Do = _ref2 => {
      let {
        payload: e,
        contentType: t
      } = _ref2;
      return t === y.FormUrlEncoded ? Oo.stringify(e) : t === y.Json ? JSON.stringify(e) : e;
    },
    xo = _ref3 => {
      let {
        responseHeaders: e,
        localeHeader: t,
        currentLocale: o,
        setLocale: r
      } = _ref3;
      const n = t.toLowerCase(),
        i = Object.keys(e).find(e => e.toLowerCase() === n),
        s = i ? e[i] : void 0;
      s && o && s !== o && (null == r || r(s));
    },
    Lo = e => null == e ? void 0 : e.replace("outsystems://", "https://"),
    Ho = (e, t, o) => {
      var r;
      let n;
      try {
        e && (n = JSON.parse(e));
      } catch (n) {
        null === (r = null == t ? void 0 : t.clientError) || void 0 === r || r.call(t, {
          error: n,
          category: o,
          clientMessage: `Could not parse response: ${e}`,
          internalMessage: "Could not parse response."
        });
      }
      return n;
    },
    Uo = (e, t) => {
      if (!t) return e;
      const o = Oo.stringify(t);
      if (o) {
        const t = e.includes("?") ? "&" : "?";
        return `${e}${t}${o}`;
      }
      return e;
    };
  function Mo() {
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof self) return self;
    throw new Error("unable to locate global object");
  }
  function Wo(t, o, r) {
    return e(this, void 0, void 0, function* () {
      return (null == t ? void 0 : t.startActiveClientSpan) ? t.startActiveClientSpan(o, t => e(this, void 0, void 0, function* () {
        try {
          return yield r();
        } finally {
          null == t || t.end();
        }
      })) : r();
    });
  }
  const No = "os-auth-retry",
    Fo = _ref4 => {
      let {
        fetchClient: t,
        getToken: o,
        retryOnUnauthorizedResponse: r = !0
      } = _ref4;
      let n = t;
      return o && (n = (n, i) => e(void 0, void 0, void 0, function* () {
        yield qo({
          config: i,
          getToken: o
        });
        let e = yield t(n, i);
        return r && (e.ok || (e = yield Bo({
          response: e,
          fetchClient: t,
          config: Object.assign({}, i),
          getToken: o
        }))), e;
      })), n;
    },
    qo = t => e(void 0, [t], void 0, function (_ref5) {
      let {
        config: e = {},
        getToken: t
      } = _ref5;
      return function* () {
        var o;
        const r = yield t();
        return r && (e.headers = Object.assign(Object.assign({}, null !== (o = e.headers) && void 0 !== o ? o : {}), {
          Authorization: r
        })), e;
      }();
    }),
    Bo = t => e(void 0, [t], void 0, function (_ref6) {
      let {
        response: e,
        fetchClient: t,
        config: o = {},
        getToken: r
      } = _ref6;
      return function* () {
        var n;
        if (401 !== e.status || "true" === e.headers.get(No)) return e;
        const i = yield r(!0);
        return i ? (o.headers = Object.assign(Object.assign({}, null !== (n = o.headers) && void 0 !== n ? n : {}), {
          Authorization: i,
          [No]: "true"
        }), t(e.url, o)) : e;
      }();
    });
  var zo, Ko, Go, Jo, Vo, Qo, Xo, Yo, Zo, er, tr, or, rr, nr, ir, sr, ar, cr, lr, ur;
  const hr = "FetchHttpClient",
    pr = t => e(void 0, void 0, void 0, function* () {
      const e = yield t.text();
      return "" === e ? void 0 : JSON.parse(e);
    });
  null !== (zo = AbortSignal.timeout) && void 0 !== zo || (AbortSignal.timeout = function (e) {
    const t = new AbortController();
    return setTimeout(() => t.abort(), e), t.signal;
  });
  let dr = class {
    constructor() {
      let {
        baseUrl: e = "",
        headers: t = {},
        localeHeader: r = "",
        getLocale: n,
        setLocale: i,
        fetchClient: s = Mo().fetch,
        logger: a,
        loadTrace: c,
        getToken: l = () => Promise.resolve(void 0)
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Ko.add(this), Go.set(this, void 0), Jo.set(this, void 0), Vo.set(this, void 0), Qo.set(this, void 0), Xo.set(this, void 0), Yo.set(this, void 0), Zo.set(this, void 0), er.set(this, void 0), o(this, Jo, e, "f"), o(this, Vo, t, "f"), o(this, Qo, r, "f"), o(this, Xo, n, "f"), o(this, Yo, i, "f"), o(this, er, a, "f"), o(this, Zo, c, "f"), o(this, Go, this.addAuthInterceptors(s, l), "f");
    }
    addAuthInterceptors(e, t) {
      return Fo({
        fetchClient: e,
        getToken: t
      });
    }
    post(o) {
      return e(this, arguments, void 0, function (_ref7) {
        var _this = this;
        let {
          url: o,
          payload: i,
          params: s,
          headers: a,
          contentType: c = y.FormUrlEncoded,
          timeout: l,
          timeoutHandler: u,
          useLocaleInfo: h = !1,
          baseURL: p,
          responseHandler: d
        } = _ref7;
        return function* () {
          var f, g, m, v, _, b, w;
          null === (g = null === (f = t(_this, er, "f")) || void 0 === f ? void 0 : f.setActiveSpanAsNonAggregable) || void 0 === g || g.call(f);
          const S = h ? null === (m = t(_this, Xo, "f")) || void 0 === m ? void 0 : m.call(_this) : void 0,
            [C, E] = t(_this, Ko, "m", tr).call(_this, o, p, s);
          try {
            null === (_ = null === (v = t(_this, er, "f")) || void 0 === v ? void 0 : v.debug) || void 0 === _ || _.call(v, {
              category: hr,
              message: `POST ${E}`
            });
            const r = ((e, t) => {
                const o = null == t ? void 0 : t["content-type"];
                return o ? o.toLowerCase().includes(y.FormUrlEncoded.toLowerCase()) ? y.FormUrlEncoded : o.toLowerCase().includes(y.Json.toLowerCase()) ? y.Json : void 0 : e;
              })(c, a),
              s = {
                body: i ? Do({
                  payload: i,
                  contentType: r
                }) : void 0,
                headers: yield t(_this, Ko, "m", lr).call(_this, a, S, $o({
                  payload: i,
                  headers: a
                }) ? c : void 0),
                method: "POST",
                signal: AbortSignal.timeout(l ? 1e3 * l : 1e4)
              },
              p = () => e(_this, void 0, void 0, function* () {
                return t(this, Go, "f").call(this, C, s);
              }),
              f = yield Wo(t(_this, er, "f"), "POST", p);
            if (!f.ok) throw yield t(_this, Ko, "m", ar).call(_this, f, o, "POST", u);
            const g = yield pr(f);
            if (t(_this, Ko, "m", nr).call(_this, f, h, S), "function" == typeof d) try {
              const e = {};
              f.headers.forEach((t, o) => e[o] = t), d({
                data: g,
                responseHeaders: e
              });
            } catch (e) {
              null === (w = null === (b = t(_this, er, "f")) || void 0 === b ? void 0 : b.error) || void 0 === w || w.call(b, {
                category: hr,
                message: `Handler Error: POST ${E}`,
                errorCode: n.Communication_Default,
                error: e
              });
            }
            return g;
          } catch (e) {
            throw e instanceof r ? e : yield t(_this, Ko, "m", sr).call(_this, e, o, "POST", u);
          }
        }();
      });
    }
    get(o) {
      return e(this, arguments, void 0, function (_ref8) {
        var _this2 = this;
        let {
          url: e,
          params: o,
          headers: n,
          useLocaleInfo: i,
          timeout: s,
          timeoutHandler: a,
          responseType: c = "json",
          baseURL: l
        } = _ref8;
        return function* () {
          const u = yield t(_this2, Ko, "m", rr).call(_this2, {
            url: e,
            params: o,
            headers: n,
            useLocaleInfo: i,
            timeout: s,
            timeoutHandler: a,
            baseURL: l
          });
          try {
            return "blob" === c ? yield u.blob() : "json" === c ? yield pr(u) : Promise.resolve();
          } catch (o) {
            throw o instanceof r ? o : yield t(_this2, Ko, "m", sr).call(_this2, o, e, "GET", a);
          }
        }();
      });
    }
    getResponseUrl(o) {
      return e(this, arguments, void 0, function (_ref9) {
        var _this3 = this;
        let {
          url: e,
          params: o,
          headers: r,
          useLocaleInfo: n,
          timeout: i,
          timeoutHandler: s,
          baseURL: a
        } = _ref9;
        return function* () {
          return (yield t(_this3, Ko, "m", rr).call(_this3, {
            url: e,
            params: o,
            headers: r,
            useLocaleInfo: n,
            timeout: i,
            timeoutHandler: s,
            baseURL: a
          })).url;
        }();
      });
    }
  };
  _exports.HttpClient = _exports.FetchHttpClient = dr;
  Go = new WeakMap(), Jo = new WeakMap(), Vo = new WeakMap(), Qo = new WeakMap(), Xo = new WeakMap(), Yo = new WeakMap(), Zo = new WeakMap(), er = new WeakMap(), Ko = new WeakSet(), tr = function (e, o, r) {
    var n;
    const i = null !== (n = Lo(e)) && void 0 !== n ? n : "",
      s = Lo(o || t(this, Jo, "f")),
      a = s && !e.includes("://") ? `${s.replace(/\/$/, "")}/${e.replace(/^\/+/, "")}` : i;
    return [Uo(a, r), i];
  }, or = function (t, o) {
    return e(this, void 0, void 0, function* () {
      t === m.Timeout && o && (yield o());
    });
  }, rr = function (o) {
    return e(this, arguments, void 0, function (_ref10) {
      var _this4 = this;
      let {
        url: o,
        params: n,
        headers: i,
        useLocaleInfo: s = !1,
        timeout: a,
        timeoutHandler: c,
        baseURL: l
      } = _ref10;
      return function* () {
        var u, h, p, d, f;
        null === (h = null === (u = t(_this4, er, "f")) || void 0 === u ? void 0 : u.setActiveSpanAsNonAggregable) || void 0 === h || h.call(u);
        const g = s ? null === (p = t(_this4, Xo, "f")) || void 0 === p ? void 0 : p.call(_this4) : void 0,
          [y, m] = t(_this4, Ko, "m", tr).call(_this4, o, l, n);
        try {
          null === (f = null === (d = t(_this4, er, "f")) || void 0 === d ? void 0 : d.debug) || void 0 === f || f.call(d, {
            category: hr,
            message: `GET ${m}`
          });
          const r = {
              headers: yield t(_this4, Ko, "m", lr).call(_this4, i, g),
              signal: AbortSignal.timeout(a ? 1e3 * a : 1e4)
            },
            n = () => e(_this4, void 0, void 0, function* () {
              return t(this, Go, "f").call(this, y, r);
            }),
            l = yield Wo(t(_this4, er, "f"), "GET", n);
          if (!l.ok) throw yield t(_this4, Ko, "m", ar).call(_this4, l, o, "GET", c);
          return t(_this4, Ko, "m", nr).call(_this4, l, s, g), l;
        } catch (e) {
          throw e instanceof r ? e : yield t(_this4, Ko, "m", sr).call(_this4, e, o, "GET", c);
        }
      }();
    });
  }, nr = function (e, o, r) {
    var n;
    o && t(this, Yo, "f") && (null == e ? void 0 : e.headers) && xo({
      responseHeaders: (n = e.headers.entries(), [...n].reduce((e, _ref11) => {
        let [t, o] = _ref11;
        return e[t] = o, e;
      }, {})),
      localeHeader: t(this, Qo, "f"),
      currentLocale: r,
      setLocale: t(this, Yo, "f")
    });
  }, ir = function (e, t) {
    return "TimeoutError" === (null == e ? void 0 : e.name) || "AbortError" === (null == e ? void 0 : e.name) || 408 === t ? m.Timeout : 401 === t ? m.Unauthorized : m.Unknown;
  }, sr = function (o, i, s, a) {
    return e(this, void 0, void 0, function* () {
      var e, c;
      const l = t(this, Ko, "m", ir).call(this, o);
      yield t(this, Ko, "m", or).call(this, l, a);
      let u = n.Communication_Default;
      return l === m.Timeout ? u = n.Communication_Timeout : l === m.Unauthorized && (u = n.Communication_Unauthorized), null === (c = null === (e = t(this, er, "f")) || void 0 === e ? void 0 : e.error) || void 0 === c || c.call(e, {
        category: hr,
        message: `${s} ${i} - ${o.message}`,
        errorCode: u,
        error: o
      }), new r(`${s} ${i} - ${o.message}`, u, void 0, void 0, hr);
    });
  }, ar = function (o, n, i, a) {
    return e(this, void 0, void 0, function* () {
      var e, c, l;
      const u = t(this, Ko, "m", ir).call(this, void 0, o.status);
      yield t(this, Ko, "m", or).call(this, u, a);
      const h = s(null !== (e = o.status) && void 0 !== e ? e : ""),
        p = yield t(this, Ko, "m", cr).call(this, o);
      return null === (l = null === (c = t(this, er, "f")) || void 0 === c ? void 0 : c.error) || void 0 === l || l.call(c, {
        category: hr,
        message: `${i} ${n} - ${o.status} ${o.statusText}`,
        errorCode: h,
        error: new Error(`Fetch ${i} Error - ${o.status} ${o.statusText}`)
      }), new r(`${i} ${n} - ${o.status} ${o.statusText}`, h, o.status, p, hr);
    });
  }, cr = function (t) {
    return e(this, void 0, void 0, function* () {
      try {
        const e = /application\/.*json/i,
          o = t.headers.get("content-type");
        return o && e.test(o) ? yield t.json() : yield t.text();
      } catch (e) {
        return;
      }
    });
  }, lr = function (e, o) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
    var n;
    const i = Object.assign(Object.assign(Object.assign(Object.assign({}, t(this, Vo, "f")), e), o ? {
      [t(this, Qo, "f")]: o
    } : {}), (null == e ? void 0 : e["content-type"]) || r ? {
      "content-type": null !== (n = null == e ? void 0 : e["content-type"]) && void 0 !== n ? n : r
    } : {});
    return r && (i["content-type"] = r), t(this, Ko, "m", ur).call(this, i);
  }, ur = function (o) {
    return e(this, void 0, void 0, function* () {
      var e, r;
      try {
        return yield p(o, () => {
          var e;
          return null === (e = t(this, Zo, "f")) || void 0 === e ? void 0 : e.call(this);
        });
      } catch (o) {
        null === (r = null === (e = t(this, er, "f")) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, {
          category: hr,
          message: "Error loading trace information",
          errorCode: n.Communication_Default,
          error: o
        });
      }
      return o;
    });
  };
  class fr extends dr {
    addAuthInterceptors(e, t) {
      return Fo({
        fetchClient: e,
        getToken: t,
        retryOnUnauthorizedResponse: !1
      });
    }
  }
  _exports.LoggerHttpClient = fr;
  const gr = (e, t, o) => {
      const r = (e => {
        try {
          return new URL(e), !0;
        } catch (e) {
          return !1;
        }
      })(null != t ? t : "") ? new URL(e, t) : new URL(e);
      return Object.entries(null != o ? o : {}).forEach(_ref12 => {
        let [e, t] = _ref12;
        r.searchParams.append(e, null != t ? t : "");
      }), r.toString();
    },
    yr = (e, t, o) => {
      const r = `${t || ""}/${e}${o ? "?" : ""}`;
      let n = "";
      return Object.entries(null != o ? o : {}).forEach(_ref13 => {
        let [e, t] = _ref13;
        n += `${n ? "&" : ""}${e}=${encodeURIComponent(t)}`;
      }), `${r}${n}`.replace(/\/+/g, "/");
    };
  var mr, vr, _r, br, wr, Sr, Cr, Er, kr, Tr, Ir, Pr, Rr;
  const Ar = "NativeHttpClient";
  class jr {
    constructor(_ref14) {
      let {
        baseUrl: e = "",
        headers: t = {},
        localeHeader: r = "",
        getLocale: n,
        setLocale: i,
        httpClientInstance: s,
        logger: a,
        loadTrace: c,
        getToken: l
      } = _ref14;
      mr.add(this), vr.set(this, void 0), _r.set(this, void 0), br.set(this, void 0), wr.set(this, void 0), Sr.set(this, void 0), Cr.set(this, void 0), Er.set(this, void 0), kr.set(this, void 0), o(this, vr, r, "f"), o(this, _r, n, "f"), o(this, br, i, "f"), o(this, wr, a, "f"), this.httpClientInstance = s, o(this, Er, e, "f"), o(this, kr, t, "f"), o(this, Cr, c, "f"), o(this, Sr, null != l ? l : () => Promise.resolve(void 0), "f");
    }
    post(o) {
      return e(this, arguments, void 0, function (_ref15) {
        var _this5 = this;
        let {
          url: e,
          payload: o,
          params: r,
          headers: i,
          contentType: s = y.FormUrlEncoded,
          timeout: a,
          timeoutHandler: c,
          useLocaleInfo: l,
          baseURL: u,
          responseHandler: h
        } = _ref15;
        return function* () {
          var p, d, f;
          const g = Do({
              payload: o,
              contentType: s
            }),
            m = yield Wo(t(_this5, wr, "f"), "POST", () => t(_this5, mr, "m", Ir).call(_this5, {
              method: "POST",
              url: e,
              params: r,
              baseURL: u,
              headers: i,
              timeout: a,
              timeoutHandler: c,
              useLocaleInfo: l,
              contentType: s,
              payload: g
            })),
            v = Ho(m.responseText, t(_this5, wr, "f"), Ar);
          if ("function" == typeof h) try {
            h({
              data: v,
              responseHeaders: null !== (p = m.responseHeaders) && void 0 !== p ? p : {}
            });
          } catch (e) {
            null === (f = null === (d = t(_this5, wr, "f")) || void 0 === d ? void 0 : d.error) || void 0 === f || f.call(d, {
              category: Ar,
              message: `Handler Error: Post ${m.responseUrl}`,
              errorCode: n.Communication_Default,
              error: e
            });
          }
          return v;
        }();
      });
    }
    get(o) {
      return e(this, arguments, void 0, function (_ref16) {
        var _this6 = this;
        let {
          url: e,
          params: o,
          headers: r,
          responseType: n = "json",
          useLocaleInfo: i,
          timeout: s,
          timeoutHandler: a,
          baseURL: c
        } = _ref16;
        return function* () {
          const l = "blob" === n,
            u = yield Wo(t(_this6, wr, "f"), "GET", () => t(_this6, mr, "m", Ir).call(_this6, {
              method: "GET",
              url: e,
              params: o,
              baseURL: c,
              headers: r,
              timeout: s,
              timeoutHandler: a,
              useLocaleInfo: i,
              responseType: l ? "blob" : void 0
            }));
          return l ? u.response : "none" !== n ? Ho(u.responseText, t(_this6, wr, "f"), Ar) : void 0;
        }();
      });
    }
    getResponseUrl(o) {
      return e(this, arguments, void 0, function (_ref17) {
        var _this7 = this;
        let {
          url: e,
          params: o,
          headers: r,
          useLocaleInfo: i,
          timeout: s,
          timeoutHandler: a,
          baseURL: c
        } = _ref17;
        return function* () {
          var l, u;
          const h = yield Wo(t(_this7, wr, "f"), "GET", () => t(_this7, mr, "m", Ir).call(_this7, {
            method: "GET",
            url: e,
            params: o,
            baseURL: c,
            headers: r,
            timeout: s,
            timeoutHandler: a,
            useLocaleInfo: i
          }));
          if (!h.responseUrl) {
            const e = new Error("Successful request came without a response URL");
            throw null === (u = null === (l = t(_this7, wr, "f")) || void 0 === l ? void 0 : l.error) || void 0 === u || u.call(l, {
              error: e,
              category: Ar,
              message: "Successful request came without a response URL",
              errorCode: n.Communication_Default
            }), e;
          }
          return h.responseUrl;
        }();
      });
    }
  }
  _exports.NativeHttpClient = jr;
  vr = new WeakMap(), _r = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Er = new WeakMap(), kr = new WeakMap(), mr = new WeakSet(), Tr = function (o, i, a, c, l) {
    return e(this, void 0, void 0, function* () {
      var e, u, h, p, d, f, g, y;
      if (401 !== i.status || a) {
        const e = null !== (d = null === (p = null === (h = i.status) || void 0 === h ? void 0 : h.toString) || void 0 === p ? void 0 : p.call(h)) && void 0 !== d ? d : "",
          n = s(e),
          a = new r(null !== (f = i.responseText) && void 0 !== f ? f : "Network Error", n, e, Ho(i.responseText, t(this, wr, "f"), Ar), Ar);
        throw null === (y = null === (g = t(this, wr, "f")) || void 0 === g ? void 0 : g.error) || void 0 === y || y.call(g, {
          error: a,
          category: Ar,
          message: `${o} ${c}`,
          errorCode: n
        }), a;
      }
      if (yield t(this, Sr, "f").call(this, !0)) return l();
      {
        const r = new Error("Unable to retrieve an authorization token");
        throw null === (u = null === (e = t(this, wr, "f")) || void 0 === e ? void 0 : e.error) || void 0 === u || u.call(e, {
          error: r,
          category: Ar,
          message: `${o} ${c}`,
          errorCode: n.Communication_Unauthorized
        }), r;
      }
    });
  }, Ir = function o(r) {
    return e(this, void 0, void 0, function* () {
      var i, s, a;
      null === (s = null === (i = t(this, wr, "f")) || void 0 === i ? void 0 : i.setActiveSpanAsNonAggregable) || void 0 === s || s.call(i);
      const {
          method: c,
          url: l,
          params: u,
          baseURL: h,
          payload: p,
          headers: d,
          useLocaleInfo: f,
          timeout: g,
          timeoutHandler: y,
          isRetry: m,
          contentType: v,
          responseType: _
        } = r,
        b = ((e, t, o) => {
          try {
            return gr(e, t, o);
          } catch (r) {
            return yr(e, t, o);
          }
        })(l, null != h ? h : t(this, Er, "f"), u),
        w = f ? null === (a = t(this, _r, "f")) || void 0 === a ? void 0 : a.call(this) : void 0,
        S = yield t(this, mr, "m", Pr).call(this, {
          headers: d,
          locale: w,
          contentType: v
        });
      return new Promise((i, s) => {
        var a, u;
        const h = this.httpClientInstance.createRequest(c, b);
        h.onError = n => e(this, void 0, void 0, function* () {
          try {
            const e = yield t(this, mr, "m", Tr).call(this, c, n, !!m, b, () => t(this, mr, "m", o).call(this, Object.assign(Object.assign({}, r), {
              isRetry: !0
            })));
            i(e);
          } catch (e) {
            s(e);
          }
        }), h.onTimeout = () => {
          var e, o;
          null == y || y();
          const r = new Error(`Request timed out: ${b}`);
          null === (o = null === (e = t(this, wr, "f")) || void 0 === e ? void 0 : e.error) || void 0 === o || o.call(e, {
            category: Ar,
            message: `POST ${b}`,
            errorCode: n.Communication_Timeout,
            error: r
          }), s(r);
        }, h.onSuccess = e => {
          f && t(this, br, "f") && e.responseHeaders && xo({
            responseHeaders: e.responseHeaders,
            localeHeader: t(this, vr, "f"),
            currentLocale: w,
            setLocale: t(this, br, "f")
          }), i(e);
        }, Object.entries(S).forEach(_ref18 => {
          let [e, t] = _ref18;
          h.setHeader(e, t);
        }), g && h.setTimeout(1e3 * g), p && h.setBody(p), "blob" === _ && (h.responseType = "blob"), null === (u = null === (a = t(this, wr, "f")) || void 0 === a ? void 0 : a.debug) || void 0 === u || u.call(a, {
          category: Ar,
          message: `${c} ${l}`
        }), h.send();
      });
    });
  }, Pr = function (o) {
    return e(this, arguments, void 0, function (_ref19) {
      var _this8 = this;
      let {
        headers: e,
        locale: o,
        contentType: r
      } = _ref19;
      return function* () {
        var n;
        const i = Object.assign(Object.assign(Object.assign({}, null !== (n = t(_this8, kr, "f")) && void 0 !== n ? n : {}), e), o ? {
          [t(_this8, vr, "f")]: o
        } : {});
        r && !i["content-type"] && (i["content-type"] = r);
        const s = yield t(_this8, Sr, "f").call(_this8);
        return s && (i.authorization = s), yield t(_this8, mr, "m", Rr).call(_this8, i);
      }();
    });
  }, Rr = function (o) {
    return e(this, void 0, void 0, function* () {
      var e, r;
      try {
        return yield p(o, () => {
          var e;
          return null === (e = t(this, Cr, "f")) || void 0 === e ? void 0 : e.call(this);
        });
      } catch (o) {
        null === (r = null === (e = t(this, wr, "f")) || void 0 === e ? void 0 : e.error) || void 0 === r || r.call(e, {
          category: Ar,
          message: "Error loading trace information",
          errorCode: n.Communication_Default,
          error: o
        });
      }
      return o;
    });
  };
  class Or extends Error {
    constructor(e, t) {
      const o = new.target.prototype;
      super(`${e}: Status code '${t}'`), this.statusCode = t, this.__proto__ = o;
    }
  }
  class $r extends Error {
    constructor() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "A timeout occurred.";
      const t = new.target.prototype;
      super(e), this.__proto__ = t;
    }
  }
  class Dr extends Error {
    constructor() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "An abort occurred.";
      const t = new.target.prototype;
      super(e), this.__proto__ = t;
    }
  }
  class xr extends Error {
    constructor(e, t) {
      const o = new.target.prototype;
      super(e), this.transport = t, this.errorType = "UnsupportedTransportError", this.__proto__ = o;
    }
  }
  class Lr extends Error {
    constructor(e, t) {
      const o = new.target.prototype;
      super(e), this.transport = t, this.errorType = "DisabledTransportError", this.__proto__ = o;
    }
  }
  class Hr extends Error {
    constructor(e, t) {
      const o = new.target.prototype;
      super(e), this.transport = t, this.errorType = "FailedToStartTransportError", this.__proto__ = o;
    }
  }
  class Ur extends Error {
    constructor(e) {
      const t = new.target.prototype;
      super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = t;
    }
  }
  class Mr extends Error {
    constructor(e, t) {
      const o = new.target.prototype;
      super(e), this.innerErrors = t, this.__proto__ = o;
    }
  }
  class Wr {
    constructor(e, t, o) {
      this.statusCode = e, this.statusText = t, this.content = o;
    }
  }
  class Nr {
    get(e, t) {
      return this.send({
        ...t,
        method: "GET",
        url: e
      });
    }
    post(e, t) {
      return this.send({
        ...t,
        method: "POST",
        url: e
      });
    }
    delete(e, t) {
      return this.send({
        ...t,
        method: "DELETE",
        url: e
      });
    }
    getCookieString(e) {
      return "";
    }
  }
  var Fr;
  !function (e) {
    e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
  }(Fr || (Fr = {}));
  class qr {
    constructor() {}
    log(e, t) {}
  }
  qr.instance = new qr();
  const Br = "7.0.12";
  class zr {
    static isRequired(e, t) {
      if (null == e) throw new Error(`The '${t}' argument is required.`);
    }
    static isNotEmpty(e, t) {
      if (!e || e.match(/^\s*$/)) throw new Error(`The '${t}' argument should not be empty.`);
    }
    static isIn(e, t, o) {
      if (!(e in t)) throw new Error(`Unknown ${o} value: ${e}.`);
    }
  }
  class Kr {
    static get isBrowser() {
      return "object" == typeof window && "object" == typeof window.document;
    }
    static get isWebWorker() {
      return "object" == typeof self && "importScripts" in self;
    }
    static get isReactNative() {
      return "object" == typeof window && void 0 === window.document;
    }
    static get isNode() {
      return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
    }
  }
  function Gr(e, t) {
    let o = "";
    return Jr(e) ? (o = `Binary data of length ${e.byteLength}`, t && (o += `. Content: '${function (e) {
      const t = new Uint8Array(e);
      let o = "";
      return t.forEach(e => {
        o += `0x${e < 16 ? "0" : ""}${e.toString(16)} `;
      }), o.substr(0, o.length - 1);
    }(e)}'`)) : "string" == typeof e && (o = `String data of length ${e.length}`, t && (o += `. Content: '${e}'`)), o;
  }
  function Jr(e) {
    return e && "undefined" != typeof ArrayBuffer && (e instanceof ArrayBuffer || e.constructor && "ArrayBuffer" === e.constructor.name);
  }
  async function Vr(e, t, o, r, n, i) {
    const s = {},
      [a, c] = Yr();
    s[a] = c, e.log(Fr.Trace, `(${t} transport) sending data. ${Gr(n, i.logMessageContent)}.`);
    const l = Jr(n) ? "arraybuffer" : "text",
      u = await o.post(r, {
        content: n,
        headers: {
          ...s,
          ...i.headers
        },
        responseType: l,
        timeout: i.timeout,
        withCredentials: i.withCredentials
      });
    e.log(Fr.Trace, `(${t} transport) request complete. Response status: ${u.statusCode}.`);
  }
  class Qr {
    constructor(e, t) {
      this._subject = e, this._observer = t;
    }
    dispose() {
      const e = this._subject.observers.indexOf(this._observer);
      e > -1 && this._subject.observers.splice(e, 1), 0 === this._subject.observers.length && this._subject.cancelCallback && this._subject.cancelCallback().catch(e => {});
    }
  }
  class Xr {
    constructor(e) {
      this._minLevel = e, this.out = console;
    }
    log(e, t) {
      if (e >= this._minLevel) {
        const o = `[${new Date().toISOString()}] ${Fr[e]}: ${t}`;
        switch (e) {
          case Fr.Critical:
          case Fr.Error:
            this.out.error(o);
            break;
          case Fr.Warning:
            this.out.warn(o);
            break;
          case Fr.Information:
            this.out.info(o);
            break;
          default:
            this.out.log(o);
        }
      }
    }
  }
  function Yr() {
    let e = "X-SignalR-User-Agent";
    return Kr.isNode && (e = "User-Agent"), [e, Zr(Br, en(), on(), tn())];
  }
  function Zr(e, t, o, r) {
    let n = "Microsoft SignalR/";
    const i = e.split(".");
    return n += `${i[0]}.${i[1]}`, n += ` (${e}; `, n += t && "" !== t ? `${t}; ` : "Unknown OS; ", n += `${o}`, n += r ? `; ${r}` : "; Unknown Runtime Version", n += ")", n;
  }
  function en() {
    if (!Kr.isNode) return "";
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  }
  function tn() {
    if (Kr.isNode) return process.versions.node;
  }
  function on() {
    return Kr.isNode ? "NodeJS" : "Browser";
  }
  function rn(e) {
    return e.stack ? e.stack : e.message ? e.message : `${e}`;
  }
  class nn extends Nr {
    constructor(e) {
      if (super(), this._logger = e, "undefined" == typeof fetch) {
        const e = "function" == typeof __webpack_require__ ? __non_webpack_require__ : require;
        this._jar = new (e("tough-cookie").CookieJar)(), this._fetchType = e("node-fetch"), this._fetchType = e("fetch-cookie")(this._fetchType, this._jar);
      } else this._fetchType = fetch.bind(function () {
        if ("undefined" != typeof globalThis) return globalThis;
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("could not find global");
      }());
      if ("undefined" == typeof AbortController) {
        const e = "function" == typeof __webpack_require__ ? __non_webpack_require__ : require;
        this._abortControllerType = e("abort-controller");
      } else this._abortControllerType = AbortController;
    }
    async send(e) {
      if (e.abortSignal && e.abortSignal.aborted) throw new Dr();
      if (!e.method) throw new Error("No method defined.");
      if (!e.url) throw new Error("No url defined.");
      const t = new this._abortControllerType();
      let o;
      e.abortSignal && (e.abortSignal.onabort = () => {
        t.abort(), o = new Dr();
      });
      let r,
        n = null;
      if (e.timeout) {
        const r = e.timeout;
        n = setTimeout(() => {
          t.abort(), this._logger.log(Fr.Warning, "Timeout from HTTP request."), o = new $r();
        }, r);
      }
      "" === e.content && (e.content = void 0), e.content && (e.headers = e.headers || {}, Jr(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
      try {
        r = await this._fetchType(e.url, {
          body: e.content,
          cache: "no-cache",
          credentials: !0 === e.withCredentials ? "include" : "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...e.headers
          },
          method: e.method,
          mode: "cors",
          redirect: "follow",
          signal: t.signal
        });
      } catch (e) {
        if (o) throw o;
        throw this._logger.log(Fr.Warning, `Error from HTTP request. ${e}.`), e;
      } finally {
        n && clearTimeout(n), e.abortSignal && (e.abortSignal.onabort = null);
      }
      if (!r.ok) {
        const e = await sn(r, "text");
        throw new Or(e || r.statusText, r.status);
      }
      const i = sn(r, e.responseType),
        s = await i;
      return new Wr(r.status, r.statusText, s);
    }
    getCookieString(e) {
      let t = "";
      return Kr.isNode && this._jar && this._jar.getCookies(e, (e, o) => t = o.join("; ")), t;
    }
  }
  function sn(e, t) {
    let o;
    switch (t) {
      case "arraybuffer":
        o = e.arrayBuffer();
        break;
      case "text":
      default:
        o = e.text();
        break;
      case "blob":
      case "document":
      case "json":
        throw new Error(`${t} is not supported.`);
    }
    return o;
  }
  class an extends Nr {
    constructor(e) {
      super(), this._logger = e;
    }
    send(e) {
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Dr()) : e.method ? e.url ? new Promise((t, o) => {
        const r = new XMLHttpRequest();
        r.open(e.method, e.url, !0), r.withCredentials = void 0 === e.withCredentials || e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "" === e.content && (e.content = void 0), e.content && (Jr(e.content) ? r.setRequestHeader("Content-Type", "application/octet-stream") : r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
        const n = e.headers;
        n && Object.keys(n).forEach(e => {
          r.setRequestHeader(e, n[e]);
        }), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
          r.abort(), o(new Dr());
        }), e.timeout && (r.timeout = e.timeout), r.onload = () => {
          e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? t(new Wr(r.status, r.statusText, r.response || r.responseText)) : o(new Or(r.response || r.responseText || r.statusText, r.status));
        }, r.onerror = () => {
          this._logger.log(Fr.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), o(new Or(r.statusText, r.status));
        }, r.ontimeout = () => {
          this._logger.log(Fr.Warning, "Timeout from HTTP request."), o(new $r());
        }, r.send(e.content);
      }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }
  }
  class cn extends Nr {
    constructor(e) {
      if (super(), "undefined" != typeof fetch || Kr.isNode) this._httpClient = new nn(e);else {
        if ("undefined" == typeof XMLHttpRequest) throw new Error("No usable HttpClient found.");
        this._httpClient = new an(e);
      }
    }
    send(e) {
      return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new Dr()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
    }
    getCookieString(e) {
      return this._httpClient.getCookieString(e);
    }
  }
  class ln {
    static write(e) {
      return `${e}${ln.RecordSeparator}`;
    }
    static parse(e) {
      if (e[e.length - 1] !== ln.RecordSeparator) throw new Error("Message is incomplete.");
      const t = e.split(ln.RecordSeparator);
      return t.pop(), t;
    }
  }
  ln.RecordSeparatorCode = 30, ln.RecordSeparator = String.fromCharCode(ln.RecordSeparatorCode);
  class un {
    writeHandshakeRequest(e) {
      return ln.write(JSON.stringify(e));
    }
    parseHandshakeResponse(e) {
      let t, o;
      if (Jr(e)) {
        const r = new Uint8Array(e),
          n = r.indexOf(ln.RecordSeparatorCode);
        if (-1 === n) throw new Error("Message is incomplete.");
        const i = n + 1;
        t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, i))), o = r.byteLength > i ? r.slice(i).buffer : null;
      } else {
        const r = e,
          n = r.indexOf(ln.RecordSeparator);
        if (-1 === n) throw new Error("Message is incomplete.");
        const i = n + 1;
        t = r.substring(0, i), o = r.length > i ? r.substring(i) : null;
      }
      const r = ln.parse(t),
        n = JSON.parse(r[0]);
      if (n.type) throw new Error("Expected a handshake response from the server.");
      return [o, n];
    }
  }
  var hn;
  !function (e) {
    e[e.Invocation = 1] = "Invocation", e[e.StreamItem = 2] = "StreamItem", e[e.Completion = 3] = "Completion", e[e.StreamInvocation = 4] = "StreamInvocation", e[e.CancelInvocation = 5] = "CancelInvocation", e[e.Ping = 6] = "Ping", e[e.Close = 7] = "Close";
  }(hn || (hn = {}));
  class pn {
    constructor() {
      this.observers = [];
    }
    next(e) {
      for (const t of this.observers) t.next(e);
    }
    error(e) {
      for (const t of this.observers) t.error && t.error(e);
    }
    complete() {
      for (const e of this.observers) e.complete && e.complete();
    }
    subscribe(e) {
      return this.observers.push(e), new Qr(this, e);
    }
  }
  var dn;
  !function (e) {
    e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Connected = "Connected", e.Disconnecting = "Disconnecting", e.Reconnecting = "Reconnecting";
  }(dn || (dn = {}));
  class fn {
    constructor(e, t, o, r) {
      this._nextKeepAlive = 0, this._freezeEventListener = () => {
        this._logger.log(Fr.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
      }, zr.isRequired(e, "connection"), zr.isRequired(t, "logger"), zr.isRequired(o, "protocol"), this.serverTimeoutInMilliseconds = 3e4, this.keepAliveIntervalInMilliseconds = 15e3, this._logger = t, this._protocol = o, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new un(), this.connection.onreceive = e => this._processIncomingData(e), this.connection.onclose = e => this._connectionClosed(e), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = dn.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({
        type: hn.Ping
      });
    }
    static create(e, t, o, r) {
      return new fn(e, t, o, r);
    }
    get state() {
      return this._connectionState;
    }
    get connectionId() {
      return this.connection && this.connection.connectionId || null;
    }
    get baseUrl() {
      return this.connection.baseUrl || "";
    }
    set baseUrl(e) {
      if (this._connectionState !== dn.Disconnected && this._connectionState !== dn.Reconnecting) throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
      if (!e) throw new Error("The HubConnection url must be a valid url.");
      this.connection.baseUrl = e;
    }
    start() {
      return this._startPromise = this._startWithStateTransitions(), this._startPromise;
    }
    async _startWithStateTransitions() {
      if (this._connectionState !== dn.Disconnected) return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
      this._connectionState = dn.Connecting, this._logger.log(Fr.Debug, "Starting HubConnection.");
      try {
        await this._startInternal(), Kr.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = dn.Connected, this._connectionStarted = !0, this._logger.log(Fr.Debug, "HubConnection connected successfully.");
      } catch (e) {
        return this._connectionState = dn.Disconnected, this._logger.log(Fr.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
      }
    }
    async _startInternal() {
      this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
      const e = new Promise((e, t) => {
        this._handshakeResolver = e, this._handshakeRejecter = t;
      });
      await this.connection.start(this._protocol.transferFormat);
      try {
        const t = {
          protocol: this._protocol.name,
          version: this._protocol.version
        };
        if (this._logger.log(Fr.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(t)), this._logger.log(Fr.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError) throw this._stopDuringStartError;
        this.connection.features.inherentKeepAlive || (await this._sendMessage(this._cachedPingMessage));
      } catch (e) {
        throw this._logger.log(Fr.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(e), e;
      }
    }
    async stop() {
      const e = this._startPromise;
      this._stopPromise = this._stopInternal(), await this._stopPromise;
      try {
        await e;
      } catch (e) {}
    }
    _stopInternal(e) {
      return this._connectionState === dn.Disconnected ? (this._logger.log(Fr.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve()) : this._connectionState === dn.Disconnecting ? (this._logger.log(Fr.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = dn.Disconnecting, this._logger.log(Fr.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(Fr.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new Dr("The connection was stopped before the hub handshake could complete."), this.connection.stop(e)));
    }
    stream(e) {
      for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        t[_key - 1] = arguments[_key];
      }
      const [o, r] = this._replaceStreamingParams(t),
        n = this._createStreamInvocation(e, t, r);
      let i;
      const s = new pn();
      return s.cancelCallback = () => {
        const e = this._createCancelInvocation(n.invocationId);
        return delete this._callbacks[n.invocationId], i.then(() => this._sendWithProtocol(e));
      }, this._callbacks[n.invocationId] = (e, t) => {
        t ? s.error(t) : e && (e.type === hn.Completion ? e.error ? s.error(new Error(e.error)) : s.complete() : s.next(e.item));
      }, i = this._sendWithProtocol(n).catch(e => {
        s.error(e), delete this._callbacks[n.invocationId];
      }), this._launchStreams(o, i), s;
    }
    _sendMessage(e) {
      return this._resetKeepAliveInterval(), this.connection.send(e);
    }
    _sendWithProtocol(e) {
      return this._sendMessage(this._protocol.writeMessage(e));
    }
    send(e) {
      for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        t[_key2 - 1] = arguments[_key2];
      }
      const [o, r] = this._replaceStreamingParams(t),
        n = this._sendWithProtocol(this._createInvocation(e, t, !0, r));
      return this._launchStreams(o, n), n;
    }
    invoke(e) {
      for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        t[_key3 - 1] = arguments[_key3];
      }
      const [o, r] = this._replaceStreamingParams(t),
        n = this._createInvocation(e, t, !1, r);
      return new Promise((e, t) => {
        this._callbacks[n.invocationId] = (o, r) => {
          r ? t(r) : o && (o.type === hn.Completion ? o.error ? t(new Error(o.error)) : e(o.result) : t(new Error(`Unexpected message type: ${o.type}`)));
        };
        const r = this._sendWithProtocol(n).catch(e => {
          t(e), delete this._callbacks[n.invocationId];
        });
        this._launchStreams(o, r);
      });
    }
    on(e, t) {
      e && t && (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), -1 === this._methods[e].indexOf(t) && this._methods[e].push(t));
    }
    off(e, t) {
      if (!e) return;
      e = e.toLowerCase();
      const o = this._methods[e];
      if (o) if (t) {
        const r = o.indexOf(t);
        -1 !== r && (o.splice(r, 1), 0 === o.length && delete this._methods[e]);
      } else delete this._methods[e];
    }
    onclose(e) {
      e && this._closedCallbacks.push(e);
    }
    onreconnecting(e) {
      e && this._reconnectingCallbacks.push(e);
    }
    onreconnected(e) {
      e && this._reconnectedCallbacks.push(e);
    }
    _processIncomingData(e) {
      if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
        const t = this._protocol.parseMessages(e, this._logger);
        for (const e of t) switch (e.type) {
          case hn.Invocation:
            this._invokeClientMethod(e);
            break;
          case hn.StreamItem:
          case hn.Completion:
            {
              const t = this._callbacks[e.invocationId];
              if (t) {
                e.type === hn.Completion && delete this._callbacks[e.invocationId];
                try {
                  t(e);
                } catch (e) {
                  this._logger.log(Fr.Error, `Stream callback threw error: ${rn(e)}`);
                }
              }
              break;
            }
          case hn.Ping:
            break;
          case hn.Close:
            {
              this._logger.log(Fr.Information, "Close message received from server.");
              const t = e.error ? new Error("Server returned an error on close: " + e.error) : void 0;
              !0 === e.allowReconnect ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
              break;
            }
          default:
            this._logger.log(Fr.Warning, `Invalid message type: ${e.type}.`);
        }
      }
      this._resetTimeoutPeriod();
    }
    _processHandshakeResponse(e) {
      let t, o;
      try {
        [o, t] = this._handshakeProtocol.parseHandshakeResponse(e);
      } catch (e) {
        const t = "Error parsing handshake response: " + e;
        this._logger.log(Fr.Error, t);
        const o = new Error(t);
        throw this._handshakeRejecter(o), o;
      }
      if (t.error) {
        const e = "Server returned handshake error: " + t.error;
        this._logger.log(Fr.Error, e);
        const o = new Error(e);
        throw this._handshakeRejecter(o), o;
      }
      return this._logger.log(Fr.Debug, "Server handshake complete."), this._handshakeResolver(), o;
    }
    _resetKeepAliveInterval() {
      this.connection.features.inherentKeepAlive || (this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
    }
    _resetTimeoutPeriod() {
      if (!(this.connection.features && this.connection.features.inherentKeepAlive || (this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds), void 0 !== this._pingServerHandle))) {
        let e = this._nextKeepAlive - new Date().getTime();
        e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === dn.Connected) try {
            await this._sendMessage(this._cachedPingMessage);
          } catch {
            this._cleanupPingTimer();
          }
        }, e);
      }
    }
    serverTimeout() {
      this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    }
    async _invokeClientMethod(e) {
      const t = e.target.toLowerCase(),
        o = this._methods[t];
      if (!o) return this._logger.log(Fr.Warning, `No client method with the name '${t}' found.`), void (e.invocationId && (this._logger.log(Fr.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null))));
      const r = o.slice(),
        n = !!e.invocationId;
      let i, s, a;
      for (const o of r) try {
        const r = i;
        i = await o.apply(this, e.arguments), n && i && r && (this._logger.log(Fr.Error, `Multiple results provided for '${t}'. Sending error to server.`), a = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), s = void 0;
      } catch (e) {
        s = e, this._logger.log(Fr.Error, `A callback for the method '${t}' threw error '${e}'.`);
      }
      a ? await this._sendWithProtocol(a) : n ? (s ? a = this._createCompletionMessage(e.invocationId, `${s}`, null) : void 0 !== i ? a = this._createCompletionMessage(e.invocationId, null, i) : (this._logger.log(Fr.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`), a = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(a)) : i && this._logger.log(Fr.Error, `Result given for '${t}' method but server is not expecting a result.`);
    }
    _connectionClosed(e) {
      this._logger.log(Fr.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new Dr("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === dn.Disconnecting ? this._completeClose(e) : this._connectionState === dn.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === dn.Connected && this._completeClose(e);
    }
    _completeClose(e) {
      if (this._connectionStarted) {
        this._connectionState = dn.Disconnected, this._connectionStarted = !1, Kr.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
        try {
          this._closedCallbacks.forEach(t => t.apply(this, [e]));
        } catch (t) {
          this._logger.log(Fr.Error, `An onclose callback called with error '${e}' threw error '${t}'.`);
        }
      }
    }
    async _reconnect(e) {
      const t = Date.now();
      let o = 0,
        r = void 0 !== e ? e : new Error("Attempting to reconnect due to a unknown error."),
        n = this._getNextRetryDelay(o++, 0, r);
      if (null === n) return this._logger.log(Fr.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), void this._completeClose(e);
      if (this._connectionState = dn.Reconnecting, e ? this._logger.log(Fr.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(Fr.Information, "Connection reconnecting."), 0 !== this._reconnectingCallbacks.length) {
        try {
          this._reconnectingCallbacks.forEach(t => t.apply(this, [e]));
        } catch (t) {
          this._logger.log(Fr.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`);
        }
        if (this._connectionState !== dn.Reconnecting) return void this._logger.log(Fr.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
      }
      for (; null !== n;) {
        if (this._logger.log(Fr.Information, `Reconnect attempt number ${o} will start in ${n} ms.`), await new Promise(e => {
          this._reconnectDelayHandle = setTimeout(e, n);
        }), this._reconnectDelayHandle = void 0, this._connectionState !== dn.Reconnecting) return void this._logger.log(Fr.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        try {
          if (await this._startInternal(), this._connectionState = dn.Connected, this._logger.log(Fr.Information, "HubConnection reconnected successfully."), 0 !== this._reconnectedCallbacks.length) try {
            this._reconnectedCallbacks.forEach(e => e.apply(this, [this.connection.connectionId]));
          } catch (e) {
            this._logger.log(Fr.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
          }
          return;
        } catch (e) {
          if (this._logger.log(Fr.Information, `Reconnect attempt failed because of error '${e}'.`), this._connectionState !== dn.Reconnecting) return this._logger.log(Fr.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), void (this._connectionState === dn.Disconnecting && this._completeClose());
          r = e instanceof Error ? e : new Error(e.toString()), n = this._getNextRetryDelay(o++, Date.now() - t, r);
        }
      }
      this._logger.log(Fr.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${o} failed attempts. Connection disconnecting.`), this._completeClose();
    }
    _getNextRetryDelay(e, t, o) {
      try {
        return this._reconnectPolicy.nextRetryDelayInMilliseconds({
          elapsedMilliseconds: t,
          previousRetryCount: e,
          retryReason: o
        });
      } catch (o) {
        return this._logger.log(Fr.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${o}'.`), null;
      }
    }
    _cancelCallbacksWithError(e) {
      const t = this._callbacks;
      this._callbacks = {}, Object.keys(t).forEach(o => {
        const r = t[o];
        try {
          r(null, e);
        } catch (t) {
          this._logger.log(Fr.Error, `Stream 'error' callback called with '${e}' threw error: ${rn(t)}`);
        }
      });
    }
    _cleanupPingTimer() {
      this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
    }
    _cleanupTimeout() {
      this._timeoutHandle && clearTimeout(this._timeoutHandle);
    }
    _createInvocation(e, t, o, r) {
      if (o) return 0 !== r.length ? {
        arguments: t,
        streamIds: r,
        target: e,
        type: hn.Invocation
      } : {
        arguments: t,
        target: e,
        type: hn.Invocation
      };
      {
        const o = this._invocationId;
        return this._invocationId++, 0 !== r.length ? {
          arguments: t,
          invocationId: o.toString(),
          streamIds: r,
          target: e,
          type: hn.Invocation
        } : {
          arguments: t,
          invocationId: o.toString(),
          target: e,
          type: hn.Invocation
        };
      }
    }
    _launchStreams(e, t) {
      if (0 !== e.length) {
        t || (t = Promise.resolve());
        for (const o in e) e[o].subscribe({
          complete: () => {
            t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o)));
          },
          error: e => {
            let r;
            r = e instanceof Error ? e.message : e && e.toString ? e.toString() : "Unknown error", t = t.then(() => this._sendWithProtocol(this._createCompletionMessage(o, r)));
          },
          next: e => {
            t = t.then(() => this._sendWithProtocol(this._createStreamItemMessage(o, e)));
          }
        });
      }
    }
    _replaceStreamingParams(e) {
      const t = [],
        o = [];
      for (let r = 0; r < e.length; r++) {
        const n = e[r];
        if (this._isObservable(n)) {
          const i = this._invocationId;
          this._invocationId++, t[i] = n, o.push(i.toString()), e.splice(r, 1);
        }
      }
      return [t, o];
    }
    _isObservable(e) {
      return e && e.subscribe && "function" == typeof e.subscribe;
    }
    _createStreamInvocation(e, t, o) {
      const r = this._invocationId;
      return this._invocationId++, 0 !== o.length ? {
        arguments: t,
        invocationId: r.toString(),
        streamIds: o,
        target: e,
        type: hn.StreamInvocation
      } : {
        arguments: t,
        invocationId: r.toString(),
        target: e,
        type: hn.StreamInvocation
      };
    }
    _createCancelInvocation(e) {
      return {
        invocationId: e,
        type: hn.CancelInvocation
      };
    }
    _createStreamItemMessage(e, t) {
      return {
        invocationId: e,
        item: t,
        type: hn.StreamItem
      };
    }
    _createCompletionMessage(e, t, o) {
      return t ? {
        error: t,
        invocationId: e,
        type: hn.Completion
      } : {
        invocationId: e,
        result: o,
        type: hn.Completion
      };
    }
  }
  const gn = [0, 2e3, 1e4, 3e4, null];
  class yn {
    constructor(e) {
      this._retryDelays = void 0 !== e ? [...e, null] : gn;
    }
    nextRetryDelayInMilliseconds(e) {
      return this._retryDelays[e.previousRetryCount];
    }
  }
  class mn {}
  mn.Authorization = "Authorization", mn.Cookie = "Cookie";
  class vn extends Nr {
    constructor(e, t) {
      super(), this._innerClient = e, this._accessTokenFactory = t;
    }
    async send(e) {
      let t = !0;
      this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
      const o = await this._innerClient.send(e);
      return t && 401 === o.statusCode && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : o;
    }
    _setAuthorizationHeader(e) {
      e.headers || (e.headers = {}), this._accessToken ? e.headers[mn.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[mn.Authorization] && delete e.headers[mn.Authorization];
    }
    getCookieString(e) {
      return this._innerClient.getCookieString(e);
    }
  }
  var _n, bn;
  !function (e) {
    e[e.None = 0] = "None", e[e.WebSockets = 1] = "WebSockets", e[e.ServerSentEvents = 2] = "ServerSentEvents", e[e.LongPolling = 4] = "LongPolling";
  }(_n || (_n = {})), function (e) {
    e[e.Text = 1] = "Text", e[e.Binary = 2] = "Binary";
  }(bn || (bn = {}));
  class wn {
    constructor(e, t, o) {
      this._httpClient = e, this._logger = t, this._pollAbort = new class {
        constructor() {
          this._isAborted = !1, this.onabort = null;
        }
        abort() {
          this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
        }
        get signal() {
          return this;
        }
        get aborted() {
          return this._isAborted;
        }
      }(), this._options = o, this._running = !1, this.onreceive = null, this.onclose = null;
    }
    get pollAborted() {
      return this._pollAbort.aborted;
    }
    async connect(e, t) {
      if (zr.isRequired(e, "url"), zr.isRequired(t, "transferFormat"), zr.isIn(t, bn, "transferFormat"), this._url = e, this._logger.log(Fr.Trace, "(LongPolling transport) Connecting."), t === bn.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof new XMLHttpRequest().responseType) throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
      const [o, r] = Yr(),
        n = {
          [o]: r,
          ...this._options.headers
        },
        i = {
          abortSignal: this._pollAbort.signal,
          headers: n,
          timeout: 1e5,
          withCredentials: this._options.withCredentials
        };
      t === bn.Binary && (i.responseType = "arraybuffer");
      const s = `${e}&_=${Date.now()}`;
      this._logger.log(Fr.Trace, `(LongPolling transport) polling: ${s}.`);
      const a = await this._httpClient.get(s, i);
      200 !== a.statusCode ? (this._logger.log(Fr.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new Or(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, i);
    }
    async _poll(e, t) {
      try {
        for (; this._running;) try {
          const o = `${e}&_=${Date.now()}`;
          this._logger.log(Fr.Trace, `(LongPolling transport) polling: ${o}.`);
          const r = await this._httpClient.get(o, t);
          204 === r.statusCode ? (this._logger.log(Fr.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : 200 !== r.statusCode ? (this._logger.log(Fr.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new Or(r.statusText || "", r.statusCode), this._running = !1) : r.content ? (this._logger.log(Fr.Trace, `(LongPolling transport) data received. ${Gr(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(Fr.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (e) {
          this._running ? e instanceof $r ? this._logger.log(Fr.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e, this._running = !1) : this._logger.log(Fr.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
        }
      } finally {
        this._logger.log(Fr.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
      }
    }
    async send(e) {
      return this._running ? Vr(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    async stop() {
      this._logger.log(Fr.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
      try {
        await this._receiving, this._logger.log(Fr.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
        const e = {},
          [t, o] = Yr();
        e[t] = o;
        const r = {
          headers: {
            ...e,
            ...this._options.headers
          },
          timeout: this._options.timeout,
          withCredentials: this._options.withCredentials
        };
        await this._httpClient.delete(this._url, r), this._logger.log(Fr.Trace, "(LongPolling transport) DELETE request sent.");
      } finally {
        this._logger.log(Fr.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
      }
    }
    _raiseOnClose() {
      if (this.onclose) {
        let e = "(LongPolling transport) Firing onclose event.";
        this._closeError && (e += " Error: " + this._closeError), this._logger.log(Fr.Trace, e), this.onclose(this._closeError);
      }
    }
  }
  class Sn {
    constructor(e, t, o, r) {
      this._httpClient = e, this._accessToken = t, this._logger = o, this._options = r, this.onreceive = null, this.onclose = null;
    }
    async connect(e, t) {
      return zr.isRequired(e, "url"), zr.isRequired(t, "transferFormat"), zr.isIn(t, bn, "transferFormat"), this._logger.log(Fr.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((o, r) => {
        let n,
          i = !1;
        if (t === bn.Text) {
          if (Kr.isBrowser || Kr.isWebWorker) n = new this._options.EventSource(e, {
            withCredentials: this._options.withCredentials
          });else {
            const t = this._httpClient.getCookieString(e),
              o = {};
            o.Cookie = t;
            const [r, i] = Yr();
            o[r] = i, n = new this._options.EventSource(e, {
              withCredentials: this._options.withCredentials,
              headers: {
                ...o,
                ...this._options.headers
              }
            });
          }
          try {
            n.onmessage = e => {
              if (this.onreceive) try {
                this._logger.log(Fr.Trace, `(SSE transport) data received. ${Gr(e.data, this._options.logMessageContent)}.`), this.onreceive(e.data);
              } catch (e) {
                return void this._close(e);
              }
            }, n.onerror = e => {
              i ? this._close() : r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
            }, n.onopen = () => {
              this._logger.log(Fr.Information, `SSE connected to ${this._url}`), this._eventSource = n, i = !0, o();
            };
          } catch (e) {
            return void r(e);
          }
        } else r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
      });
    }
    async send(e) {
      return this._eventSource ? Vr(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    stop() {
      return this._close(), Promise.resolve();
    }
    _close(e) {
      this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
    }
  }
  class Cn {
    constructor(e, t, o, r, n, i) {
      this._logger = o, this._accessTokenFactory = t, this._logMessageContent = r, this._webSocketConstructor = n, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = i;
    }
    async connect(e, t) {
      let o;
      return zr.isRequired(e, "url"), zr.isRequired(t, "transferFormat"), zr.isIn(t, bn, "transferFormat"), this._logger.log(Fr.Trace, "(WebSockets transport) Connecting."), this._accessTokenFactory && (o = await this._accessTokenFactory()), new Promise((r, n) => {
        let i;
        e = e.replace(/^http/, "ws");
        const s = this._httpClient.getCookieString(e);
        let a = !1;
        if (Kr.isNode || Kr.isReactNative) {
          const t = {},
            [r, n] = Yr();
          t[r] = n, o && (t[mn.Authorization] = `Bearer ${o}`), s && (t[mn.Cookie] = s), i = new this._webSocketConstructor(e, void 0, {
            headers: {
              ...t,
              ...this._headers
            }
          });
        } else o && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(o)}`);
        i || (i = new this._webSocketConstructor(e)), t === bn.Binary && (i.binaryType = "arraybuffer"), i.onopen = t => {
          this._logger.log(Fr.Information, `WebSocket connected to ${e}.`), this._webSocket = i, a = !0, r();
        }, i.onerror = e => {
          let t = null;
          t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : "There was an error with the transport", this._logger.log(Fr.Information, `(WebSockets transport) ${t}.`);
        }, i.onmessage = e => {
          if (this._logger.log(Fr.Trace, `(WebSockets transport) data received. ${Gr(e.data, this._logMessageContent)}.`), this.onreceive) try {
            this.onreceive(e.data);
          } catch (e) {
            return void this._close(e);
          }
        }, i.onclose = e => {
          if (a) this._close(e);else {
            let t = null;
            t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", n(new Error(t));
          }
        };
      });
    }
    send(e) {
      return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(Fr.Trace, `(WebSockets transport) sending data. ${Gr(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
    }
    stop() {
      return this._webSocket && this._close(void 0), Promise.resolve();
    }
    _close(e) {
      this._webSocket && (this._webSocket.onclose = () => {}, this._webSocket.onmessage = () => {}, this._webSocket.onerror = () => {}, this._webSocket.close(), this._webSocket = void 0), this._logger.log(Fr.Trace, "(WebSockets transport) socket closed."), this.onclose && (!this._isCloseEvent(e) || !1 !== e.wasClean && 1e3 === e.code ? e instanceof Error ? this.onclose(e) : this.onclose() : this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)));
    }
    _isCloseEvent(e) {
      return e && "boolean" == typeof e.wasClean && "number" == typeof e.code;
    }
  }
  class En {
    constructor(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o;
      if (this._stopPromiseResolver = () => {}, this.features = {}, this._negotiateVersion = 1, zr.isRequired(e, "url"), this._logger = void 0 === (o = t.logger) ? new Xr(Fr.Information) : null === o ? qr.instance : void 0 !== o.log ? o : new Xr(o), this.baseUrl = this._resolveUrl(e), (t = t || {}).logMessageContent = void 0 !== t.logMessageContent && t.logMessageContent, "boolean" != typeof t.withCredentials && void 0 !== t.withCredentials) throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
      t.withCredentials = void 0 === t.withCredentials || t.withCredentials, t.timeout = void 0 === t.timeout ? 1e5 : t.timeout;
      let r = null,
        n = null;
      if (Kr.isNode && "undefined" != typeof require) {
        const e = "function" == typeof __webpack_require__ ? __non_webpack_require__ : require;
        r = e("ws"), n = e("eventsource");
      }
      Kr.isNode || "undefined" == typeof WebSocket || t.WebSocket ? Kr.isNode && !t.WebSocket && r && (t.WebSocket = r) : t.WebSocket = WebSocket, Kr.isNode || "undefined" == typeof EventSource || t.EventSource ? Kr.isNode && !t.EventSource && void 0 !== n && (t.EventSource = n) : t.EventSource = EventSource, this._httpClient = new vn(t.httpClient || new cn(this._logger), t.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = t, this.onreceive = null, this.onclose = null;
    }
    async start(e) {
      if (e = e || bn.Binary, zr.isIn(e, bn, "transferFormat"), this._logger.log(Fr.Debug, `Starting connection with transfer format '${bn[e]}'.`), "Disconnected" !== this._connectionState) return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
      if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, "Disconnecting" === this._connectionState) {
        const e = "Failed to start the HttpConnection before stop() was called.";
        return this._logger.log(Fr.Error, e), await this._stopPromise, Promise.reject(new Dr(e));
      }
      if ("Connected" !== this._connectionState) {
        const e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
        return this._logger.log(Fr.Error, e), Promise.reject(new Dr(e));
      }
      this._connectionStarted = !0;
    }
    send(e) {
      return "Connected" !== this._connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new kn(this.transport)), this._sendQueue.send(e));
    }
    async stop(e) {
      return "Disconnected" === this._connectionState ? (this._logger.log(Fr.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve()) : "Disconnecting" === this._connectionState ? (this._logger.log(Fr.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise) : (this._connectionState = "Disconnecting", this._stopPromise = new Promise(e => {
        this._stopPromiseResolver = e;
      }), await this._stopInternal(e), void (await this._stopPromise));
    }
    async _stopInternal(e) {
      this._stopError = e;
      try {
        await this._startInternalPromise;
      } catch (e) {}
      if (this.transport) {
        try {
          await this.transport.stop();
        } catch (e) {
          this._logger.log(Fr.Error, `HttpConnection.transport.stop() threw error '${e}'.`), this._stopConnection();
        }
        this.transport = void 0;
      } else this._logger.log(Fr.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
    }
    async _startInternal(e) {
      let t = this.baseUrl;
      this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
      try {
        if (this._options.skipNegotiation) {
          if (this._options.transport !== _n.WebSockets) throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
          this.transport = this._constructTransport(_n.WebSockets), await this._startTransport(t, e);
        } else {
          let o = null,
            r = 0;
          do {
            if (o = await this._getNegotiationResponse(t), "Disconnecting" === this._connectionState || "Disconnected" === this._connectionState) throw new Dr("The connection was stopped during negotiation.");
            if (o.error) throw new Error(o.error);
            if (o.ProtocolVersion) throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
            if (o.url && (t = o.url), o.accessToken) {
              const e = o.accessToken;
              this._accessTokenFactory = () => e, this._httpClient._accessToken = e, this._httpClient._accessTokenFactory = void 0;
            }
            r++;
          } while (o.url && r < 100);
          if (100 === r && o.url) throw new Error("Negotiate redirection limit exceeded.");
          await this._createTransport(t, this._options.transport, o, e);
        }
        this.transport instanceof wn && (this.features.inherentKeepAlive = !0), "Connecting" === this._connectionState && (this._logger.log(Fr.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
      } catch (e) {
        return this._logger.log(Fr.Error, "Failed to start the connection: " + e), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(e);
      }
    }
    async _getNegotiationResponse(e) {
      const t = {},
        [o, r] = Yr();
      t[o] = r;
      const n = this._resolveNegotiateUrl(e);
      this._logger.log(Fr.Debug, `Sending negotiation request: ${n}.`);
      try {
        const e = await this._httpClient.post(n, {
          content: "",
          headers: {
            ...t,
            ...this._options.headers
          },
          timeout: this._options.timeout,
          withCredentials: this._options.withCredentials
        });
        if (200 !== e.statusCode) return Promise.reject(new Error(`Unexpected status code returned from negotiate '${e.statusCode}'`));
        const o = JSON.parse(e.content);
        return (!o.negotiateVersion || o.negotiateVersion < 1) && (o.connectionToken = o.connectionId), o;
      } catch (e) {
        let t = "Failed to complete negotiation with the server: " + e;
        return e instanceof Or && 404 === e.statusCode && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(Fr.Error, t), Promise.reject(new Ur(t));
      }
    }
    _createConnectUrl(e, t) {
      return t ? e + (-1 === e.indexOf("?") ? "?" : "&") + `id=${t}` : e;
    }
    async _createTransport(e, t, o, r) {
      let n = this._createConnectUrl(e, o.connectionToken);
      if (this._isITransport(t)) return this._logger.log(Fr.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = t, await this._startTransport(n, r), void (this.connectionId = o.connectionId);
      const i = [],
        s = o.availableTransports || [];
      let a = o;
      for (const o of s) {
        const s = this._resolveTransportOrError(o, t, r);
        if (s instanceof Error) i.push(`${o.transport} failed:`), i.push(s);else if (this._isITransport(s)) {
          if (this.transport = s, !a) {
            try {
              a = await this._getNegotiationResponse(e);
            } catch (e) {
              return Promise.reject(e);
            }
            n = this._createConnectUrl(e, a.connectionToken);
          }
          try {
            return await this._startTransport(n, r), void (this.connectionId = a.connectionId);
          } catch (e) {
            if (this._logger.log(Fr.Error, `Failed to start the transport '${o.transport}': ${e}`), a = void 0, i.push(new Hr(`${o.transport} failed: ${e}`, _n[o.transport])), "Connecting" !== this._connectionState) {
              const e = "Failed to select transport before stop() was called.";
              return this._logger.log(Fr.Debug, e), Promise.reject(new Dr(e));
            }
          }
        }
      }
      return i.length > 0 ? Promise.reject(new Mr(`Unable to connect to the server with any of the available transports. ${i.join(" ")}`, i)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    }
    _constructTransport(e) {
      switch (e) {
        case _n.WebSockets:
          if (!this._options.WebSocket) throw new Error("'WebSocket' is not supported in your environment.");
          return new Cn(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
        case _n.ServerSentEvents:
          if (!this._options.EventSource) throw new Error("'EventSource' is not supported in your environment.");
          return new Sn(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
        case _n.LongPolling:
          return new wn(this._httpClient, this._logger, this._options);
        default:
          throw new Error(`Unknown transport: ${e}.`);
      }
    }
    _startTransport(e, t) {
      return this.transport.onreceive = this.onreceive, this.transport.onclose = e => this._stopConnection(e), this.transport.connect(e, t);
    }
    _resolveTransportOrError(e, t, o) {
      const r = _n[e.transport];
      if (null == r) return this._logger.log(Fr.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
      if (!function (e, t) {
        return !e || 0 != (t & e);
      }(t, r)) return this._logger.log(Fr.Debug, `Skipping transport '${_n[r]}' because it was disabled by the client.`), new Lr(`'${_n[r]}' is disabled by the client.`, r);
      if (!(e.transferFormats.map(e => bn[e]).indexOf(o) >= 0)) return this._logger.log(Fr.Debug, `Skipping transport '${_n[r]}' because it does not support the requested transfer format '${bn[o]}'.`), new Error(`'${_n[r]}' does not support ${bn[o]}.`);
      if (r === _n.WebSockets && !this._options.WebSocket || r === _n.ServerSentEvents && !this._options.EventSource) return this._logger.log(Fr.Debug, `Skipping transport '${_n[r]}' because it is not supported in your environment.'`), new xr(`'${_n[r]}' is not supported in your environment.`, r);
      this._logger.log(Fr.Debug, `Selecting transport '${_n[r]}'.`);
      try {
        return this._constructTransport(r);
      } catch (e) {
        return e;
      }
    }
    _isITransport(e) {
      return e && "object" == typeof e && "connect" in e;
    }
    _stopConnection(e) {
      if (this._logger.log(Fr.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, "Disconnected" !== this._connectionState) {
        if ("Connecting" === this._connectionState) throw this._logger.log(Fr.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
        if ("Disconnecting" === this._connectionState && this._stopPromiseResolver(), e ? this._logger.log(Fr.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(Fr.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch(e => {
          this._logger.log(Fr.Error, `TransportSendQueue.stop() threw error '${e}'.`);
        }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
          this._connectionStarted = !1;
          try {
            this.onclose && this.onclose(e);
          } catch (t) {
            this._logger.log(Fr.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`);
          }
        }
      } else this._logger.log(Fr.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
    }
    _resolveUrl(e) {
      if (0 === e.lastIndexOf("https://", 0) || 0 === e.lastIndexOf("http://", 0)) return e;
      if (!Kr.isBrowser) throw new Error(`Cannot resolve '${e}'.`);
      const t = window.document.createElement("a");
      return t.href = e, this._logger.log(Fr.Information, `Normalizing '${e}' to '${t.href}'.`), t.href;
    }
    _resolveNegotiateUrl(e) {
      const t = e.indexOf("?");
      let o = e.substring(0, -1 === t ? e.length : t);
      return "/" !== o[o.length - 1] && (o += "/"), o += "negotiate", o += -1 === t ? "" : e.substring(t), -1 === o.indexOf("negotiateVersion") && (o += -1 === t ? "?" : "&", o += "negotiateVersion=" + this._negotiateVersion), o;
    }
  }
  class kn {
    constructor(e) {
      this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Tn(), this._transportResult = new Tn(), this._sendLoopPromise = this._sendLoop();
    }
    send(e) {
      return this._bufferData(e), this._transportResult || (this._transportResult = new Tn()), this._transportResult.promise;
    }
    stop() {
      return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
    }
    _bufferData(e) {
      if (this._buffer.length && typeof this._buffer[0] != typeof e) throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
      this._buffer.push(e), this._sendBufferedData.resolve();
    }
    async _sendLoop() {
      for (;;) {
        if (await this._sendBufferedData.promise, !this._executing) {
          this._transportResult && this._transportResult.reject("Connection stopped.");
          break;
        }
        this._sendBufferedData = new Tn();
        const e = this._transportResult;
        this._transportResult = void 0;
        const t = "string" == typeof this._buffer[0] ? this._buffer.join("") : kn._concatBuffers(this._buffer);
        this._buffer.length = 0;
        try {
          await this._transport.send(t), e.resolve();
        } catch (t) {
          e.reject(t);
        }
      }
    }
    static _concatBuffers(e) {
      const t = e.map(e => e.byteLength).reduce((e, t) => e + t),
        o = new Uint8Array(t);
      let r = 0;
      for (const t of e) o.set(new Uint8Array(t), r), r += t.byteLength;
      return o.buffer;
    }
  }
  class Tn {
    constructor() {
      this.promise = new Promise((e, t) => [this._resolver, this._rejecter] = [e, t]);
    }
    resolve() {
      this._resolver();
    }
    reject(e) {
      this._rejecter(e);
    }
  }
  class In {
    constructor() {
      this.name = "json", this.version = 1, this.transferFormat = bn.Text;
    }
    parseMessages(e, t) {
      if ("string" != typeof e) throw new Error("Invalid input for JSON hub protocol. Expected a string.");
      if (!e) return [];
      null === t && (t = qr.instance);
      const o = ln.parse(e),
        r = [];
      for (const e of o) {
        const o = JSON.parse(e);
        if ("number" != typeof o.type) throw new Error("Invalid payload.");
        switch (o.type) {
          case hn.Invocation:
            this._isInvocationMessage(o);
            break;
          case hn.StreamItem:
            this._isStreamItemMessage(o);
            break;
          case hn.Completion:
            this._isCompletionMessage(o);
            break;
          case hn.Ping:
          case hn.Close:
            break;
          default:
            t.log(Fr.Information, "Unknown message type '" + o.type + "' ignored.");
            continue;
        }
        r.push(o);
      }
      return r;
    }
    writeMessage(e) {
      return ln.write(JSON.stringify(e));
    }
    _isInvocationMessage(e) {
      this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), void 0 !== e.invocationId && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
    }
    _isStreamItemMessage(e) {
      if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), void 0 === e.item) throw new Error("Invalid payload for StreamItem message.");
    }
    _isCompletionMessage(e) {
      if (e.result && e.error) throw new Error("Invalid payload for Completion message.");
      !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
    }
    _assertNotEmptyString(e, t) {
      if ("string" != typeof e || "" === e) throw new Error(t);
    }
  }
  const Pn = {
    trace: Fr.Trace,
    debug: Fr.Debug,
    info: Fr.Information,
    information: Fr.Information,
    warn: Fr.Warning,
    warning: Fr.Warning,
    error: Fr.Error,
    critical: Fr.Critical,
    none: Fr.None
  };
  class Rn {
    configureLogging(e) {
      if (zr.isRequired(e, "logging"), void 0 !== e.log) this.logger = e;else if ("string" == typeof e) {
        const t = function (e) {
          const t = Pn[e.toLowerCase()];
          if (void 0 !== t) return t;
          throw new Error(`Unknown log level: ${e}`);
        }(e);
        this.logger = new Xr(t);
      } else this.logger = new Xr(e);
      return this;
    }
    withUrl(e, t) {
      return zr.isRequired(e, "url"), zr.isNotEmpty(e, "url"), this.url = e, this.httpConnectionOptions = "object" == typeof t ? {
        ...this.httpConnectionOptions,
        ...t
      } : {
        ...this.httpConnectionOptions,
        transport: t
      }, this;
    }
    withHubProtocol(e) {
      return zr.isRequired(e, "protocol"), this.protocol = e, this;
    }
    withAutomaticReconnect(e) {
      if (this.reconnectPolicy) throw new Error("A reconnectPolicy has already been set.");
      return e ? Array.isArray(e) ? this.reconnectPolicy = new yn(e) : this.reconnectPolicy = e : this.reconnectPolicy = new yn(), this;
    }
    build() {
      const e = this.httpConnectionOptions || {};
      if (void 0 === e.logger && (e.logger = this.logger), !this.url) throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
      const t = new En(this.url, e);
      return fn.create(t, this.logger || qr.instance, this.protocol || new In(), this.reconnectPolicy);
    }
  }
  const An = _ref20 => {
    let {
      builder: t = new Rn(),
      hubEndpoint: o,
      appUrl: r,
      logger: i,
      getToken: s
    } = _ref20;
    if (!o || !r) throw new Error("The AppUrl and HubEndpoint must be defined in order to use SignalR communications");
    const a = t.withUrl(new URL(o, r).href, {
      accessTokenFactory: () => e(void 0, void 0, void 0, function* () {
        const t = yield function (t) {
          return e(this, void 0, void 0, function* () {
            var e;
            return t && null !== (e = yield t()) && void 0 !== e ? e : "";
          });
        }(s);
        return t.replace("Bearer ", "");
      })
    }).withAutomaticReconnect();
    return i && a.configureLogging({
      log: (e, t) => {
        var o, r;
        switch (e) {
          case Fr.Information:
          case Fr.Trace:
          case Fr.Debug:
          case Fr.Warning:
            null === (o = i.debug) || void 0 === o || o.call(i, {
              category: "SignalRHttpClient",
              message: `HubConnection ${t}`
            });
            break;
          case Fr.Error:
          case Fr.Critical:
            null === (r = i.error) || void 0 === r || r.call(i, {
              category: "SignalRHttpClient",
              message: `Handler Error: HubConnection ${t}`,
              errorCode: n.Communication_Default,
              error: new Error(t)
            });
        }
      }
    }), a.build();
  };
  var jn, On, $n, Dn, xn, Ln, Hn, Un;
  const Mn = "SignalRHttpClient";
  class Wn {
    constructor(_ref21) {
      let {
        appUrl: e,
        localeHeader: t = "",
        getLocale: r,
        setLocale: n,
        logger: i,
        getToken: s
      } = _ref21;
      jn.add(this), On.set(this, void 0), $n.set(this, void 0), Dn.set(this, void 0), xn.set(this, void 0), Ln.set(this, void 0), Hn.set(this, void 0), o(this, Ln, Lo(e), "f"), o(this, On, t, "f"), o(this, $n, r, "f"), o(this, Dn, n, "f"), o(this, xn, i, "f"), o(this, Hn, s, "f");
    }
    executeRequest(o) {
      return e(this, arguments, void 0, function (_ref22) {
        var _this9 = this;
        let {
          url: e,
          payload: o,
          headers: i,
          contentType: a = y.FormUrlEncoded,
          useLocaleInfo: c = !1,
          responseHandler: l,
          hubConnectionBuilder: u = new Rn()
        } = _ref22;
        return function* () {
          var h, p, d, f, g, m, v, _, b, w, S, C, E, k;
          null === (p = null === (h = t(_this9, xn, "f")) || void 0 === h ? void 0 : h.setActiveSpanAsNonAggregable) || void 0 === p || p.call(h);
          const T = An({
              builder: u,
              hubEndpoint: "moduleservices/debugger/requestshub",
              appUrl: t(_this9, Ln, "f"),
              logger: t(_this9, xn, "f"),
              getToken: t(_this9, Hn, "f")
            }),
            I = c ? null === (d = t(_this9, $n, "f")) || void 0 === d ? void 0 : d.call(_this9) : void 0,
            P = Object.assign(Object.assign(Object.assign({}, i), I ? {
              [t(_this9, On, "f")]: I
            } : {}), $o({
              payload: o,
              headers: i
            }) ? {
              "content-type": a
            } : {});
          try {
            const i = o ? Do({
              payload: o,
              contentType: a
            }) : void 0;
            yield T.start();
            const u = yield T.invoke("ExecuteRequest", new URL(e, t(_this9, Ln, "f")).pathname, i, P);
            yield T.stop(), null === (g = null === (f = t(_this9, xn, "f")) || void 0 === f ? void 0 : f.debug) || void 0 === g || g.call(f, {
              category: Mn,
              message: `ExecuteRequest ${e}`
            });
            const h = Ho(null == u ? void 0 : u.ResponseBody, t(_this9, xn, "f"), Mn);
            if (!(null == u ? void 0 : u.ResponseStatusCode) || u.ResponseStatusCode < 200 || u.ResponseStatusCode > 299) {
              const e = null !== (_ = null === (v = null === (m = null == u ? void 0 : u.ResponseStatusCode) || void 0 === m ? void 0 : m.toString) || void 0 === v ? void 0 : v.call(m)) && void 0 !== _ ? _ : "",
                t = s(e);
              throw new r(null !== (w = null === (b = null == h ? void 0 : h.exception) || void 0 === b ? void 0 : b.message) && void 0 !== w ? w : "Network Error", null !== (C = null === (S = null == h ? void 0 : h.exception) || void 0 === S ? void 0 : S.errorCode) && void 0 !== C ? C : t, e, h, Mn);
            }
            if (c && t(_this9, Dn, "f") && (null == u ? void 0 : u.ResponseHeaders) && xo({
              responseHeaders: u.ResponseHeaders,
              localeHeader: t(_this9, On, "f"),
              currentLocale: I,
              setLocale: t(_this9, Dn, "f")
            }), "function" == typeof l) try {
              l({
                data: h,
                responseHeaders: null == u ? void 0 : u.ResponseHeaders
              });
            } catch (o) {
              null === (k = null === (E = t(_this9, xn, "f")) || void 0 === E ? void 0 : E.error) || void 0 === k || k.call(E, {
                category: Mn,
                message: `ExecuteRequest ${e}`,
                errorCode: n.Communication_Default,
                error: o
              });
            }
            return h;
          } catch (o) {
            throw yield null == T ? void 0 : T.stop(), t(_this9, jn, "m", Un).call(_this9, o, e);
          }
        }();
      });
    }
  }
  var Nn, Fn, qn;
  On = new WeakMap(), $n = new WeakMap(), Dn = new WeakMap(), xn = new WeakMap(), Ln = new WeakMap(), Hn = new WeakMap(), jn = new WeakSet(), Un = function (e, o) {
    var i, a, c, l;
    let u,
      h = n.Communication_Default;
    return e instanceof r ? (h = s(null !== (i = e.status) && void 0 !== i ? i : ""), u = e) : u = new r(`ExecuteRequest ${o}`, h, void 0, void 0, Mn), null === (c = null === (a = t(this, xn, "f")) || void 0 === a ? void 0 : a.error) || void 0 === c || c.call(a, {
      category: Mn,
      message: `ExecuteRequest ${o} - ${null !== (l = null == e ? void 0 : e.message) && void 0 !== l ? l : ""}`,
      errorCode: h,
      error: e
    }), u;
  };
  const Bn = _ref23 => {
    let {
      appUrl: e,
      localeHeader: t,
      getLocale: o,
      setLocale: r,
      logger: n,
      getToken: i
    } = _ref23;
    return new Wn({
      appUrl: e,
      localeHeader: t,
      getLocale: o,
      setLocale: r,
      logger: n,
      getToken: i
    });
  };
  class zn {
    constructor(_ref24) {
      let {
        appUrl: e,
        localeHeader: t,
        getLocale: r,
        setLocale: n,
        logger: i,
        getToken: s,
        signalRClientInstance: a = Bn({
          appUrl: e,
          localeHeader: t,
          getLocale: r,
          setLocale: n,
          logger: i,
          getToken: s
        }),
        alternateHttpClientInstance: c
      } = _ref24;
      Nn.set(this, void 0), Fn.set(this, void 0), qn.set(this, void 0), o(this, Nn, a, "f"), o(this, Fn, c, "f"), o(this, qn, i, "f");
    }
    post(o) {
      return e(this, arguments, void 0, function (_ref25) {
        var _this10 = this;
        let {
          url: e,
          payload: o,
          headers: r,
          contentType: n,
          timeout: i,
          timeoutHandler: s,
          useLocaleInfo: a,
          responseHandler: c
        } = _ref25;
        return function* () {
          return Wo(t(_this10, qn, "f"), "POST", () => t(_this10, Nn, "f").executeRequest({
            url: e,
            payload: o,
            headers: r,
            contentType: n,
            useLocaleInfo: a,
            timeout: i,
            timeoutHandler: s,
            responseHandler: c
          }));
        }();
      });
    }
    get(o) {
      return e(this, arguments, void 0, function (_ref26) {
        var _this11 = this;
        let {
          url: e,
          params: o,
          headers: r,
          responseType: n,
          useLocaleInfo: i,
          timeout: s,
          timeoutHandler: a,
          baseURL: c
        } = _ref26;
        return function* () {
          return t(_this11, Fn, "f").get({
            url: e,
            params: o,
            headers: r,
            responseType: n,
            useLocaleInfo: i,
            timeout: s,
            timeoutHandler: a,
            baseURL: c
          });
        }();
      });
    }
    getResponseUrl(o) {
      return e(this, arguments, void 0, function (_ref27) {
        var _this12 = this;
        let {
          url: e,
          params: o,
          headers: r,
          useLocaleInfo: n,
          timeout: i,
          timeoutHandler: s,
          baseURL: a
        } = _ref27;
        return function* () {
          return t(_this12, Fn, "f").getResponseUrl({
            url: e,
            params: o,
            headers: r,
            useLocaleInfo: n,
            timeout: i,
            timeoutHandler: s,
            baseURL: a
          });
        }();
      });
    }
  }
  _exports.DebuggerHttpClient = zn;
  var Kn, Gn, Jn, Vn, Qn, Xn, Yn, Zn, ei, ti, oi, ri;
  Nn = new WeakMap(), Fn = new WeakMap(), qn = new WeakMap();
  class ni {
    constructor(e) {
      let {
        isHealthy: t = !1,
        healthCheckIntervalInSeconds: r = 1800,
        healthCheckEndpoint: n = "ping",
        healingTimeoutDelayInSeconds: i = 30,
        healthCheckNeededPathFilter: s,
        logger: a
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Kn.add(this), Gn.set(this, void 0), Jn.set(this, void 0), Vn.set(this, void 0), Qn.set(this, void 0), Xn.set(this, void 0), Yn.set(this, void 0), Zn.set(this, void 0), o(this, Gn, e, "f"), o(this, Jn, 1e3 * r, "f"), o(this, Vn, n, "f"), o(this, Qn, i, "f"), o(this, Xn, s, "f"), t && o(this, Yn, Date.now(), "f"), o(this, Zn, a, "f");
    }
    setHealthCheckInterval(e) {
      o(this, Jn, 1e3 * e, "f");
    }
    post(o) {
      return e(this, arguments, void 0, function (_ref28) {
        var _this13 = this;
        let {
          url: e,
          payload: o,
          params: r,
          headers: n,
          contentType: i,
          timeout: s,
          timeoutHandler: a,
          useLocaleInfo: c,
          baseURL: l,
          responseHandler: u
        } = _ref28;
        return function* () {
          return t(_this13, Kn, "m", ri).call(_this13, s => t(_this13, Gn, "f").post({
            url: e,
            payload: o,
            params: r,
            headers: n,
            contentType: i,
            timeout: s,
            timeoutHandler: a,
            useLocaleInfo: c,
            baseURL: l,
            responseHandler: u
          }), e, l, s);
        }();
      });
    }
    get(o) {
      return e(this, arguments, void 0, function (_ref29) {
        var _this14 = this;
        let {
          url: e,
          params: o,
          headers: r,
          useLocaleInfo: n,
          timeout: i,
          timeoutHandler: s,
          responseType: a,
          baseURL: c
        } = _ref29;
        return function* () {
          return t(_this14, Kn, "m", ri).call(_this14, i => t(_this14, Gn, "f").get({
            url: e,
            params: o,
            headers: r,
            useLocaleInfo: n,
            timeout: i,
            timeoutHandler: s,
            responseType: a,
            baseURL: c
          }), e, c, i);
        }();
      });
    }
    getResponseUrl(o) {
      return e(this, arguments, void 0, function (_ref30) {
        var _this15 = this;
        let {
          url: e,
          params: o,
          headers: r,
          useLocaleInfo: n,
          timeout: i,
          timeoutHandler: s,
          baseURL: a
        } = _ref30;
        return function* () {
          return t(_this15, Kn, "m", ri).call(_this15, i => t(_this15, Gn, "f").getResponseUrl({
            url: e,
            params: o,
            headers: r,
            useLocaleInfo: n,
            timeout: i,
            timeoutHandler: s,
            baseURL: a
          }), e, a, i);
        }();
      });
    }
  }
  _exports.HttpClientWithHealthCheck = ni;
  function ii(e) {
    return e.errorCode === n.Communication_Timeout || e.errorCode === n.Communication_Unavailable || e.errorCode === n.Communication_Internal_Server_Error;
  }
  var si, ai, ci, li;
  Gn = new WeakMap(), Jn = new WeakMap(), Vn = new WeakMap(), Qn = new WeakMap(), Xn = new WeakMap(), Yn = new WeakMap(), Zn = new WeakMap(), Kn = new WeakSet(), ei = function (e, o) {
    var r, n;
    const i = null === (n = null === (r = t(this, Xn, "f")) || void 0 === r ? void 0 : r.isPathAcceptable(e, o)) || void 0 === n || n,
      s = !t(this, Yn, "f") || Date.now() - t(this, Yn, "f") > t(this, Jn, "f");
    return i && s;
  }, ti = function () {
    return e(this, void 0, void 0, function* () {
      var e, r;
      null === (r = null === (e = t(this, Zn, "f")) || void 0 === e ? void 0 : e.debug) || void 0 === r || r.call(e, {
        category: "HttpClientWithHealthCheck",
        message: `Checking healthiness at ${t(this, Vn, "f")}`
      });
      try {
        return yield t(this, Gn, "f").get({
          url: t(this, Vn, "f"),
          timeout: 2
        }), o(this, Yn, Date.now(), "f"), !0;
      } catch (e) {
        return !1;
      }
    });
  }, oi = function (o, r, n) {
    return e(this, void 0, void 0, function* () {
      if (void 0 === n) return n;
      return !t(this, Kn, "m", ei).call(this, o, r) || (yield t(this, Kn, "m", ti).call(this)) ? n : n + t(this, Qn, "f");
    });
  }, ri = function (r, n, i, s) {
    return e(this, void 0, void 0, function* () {
      const e = yield t(this, Kn, "m", oi).call(this, n, i, s);
      try {
        return yield r(e);
      } finally {
        o(this, Yn, Date.now(), "f");
      }
    });
  };
  class ui {
    constructor() {
      let {
        acceptionRules: e = [],
        rejectionRules: t = []
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      si.add(this), ai.set(this, void 0), ci.set(this, void 0), o(this, ai, e, "f"), o(this, ci, t, "f");
    }
    isPathAcceptable(e, o) {
      const r = (o ? `${o}/${e}` : e).replace(/\/+/g, "/"),
        n = 0 === t(this, ai, "f").length || t(this, ai, "f").some(e => t(this, si, "m", li).call(this, e, r)),
        i = t(this, ci, "f").some(e => t(this, si, "m", li).call(this, e, r));
      return n && !i;
    }
  }
  _exports.PathFilter = ui;
  ai = new WeakMap(), ci = new WeakMap(), si = new WeakSet(), li = function (e, t) {
    return e instanceof RegExp ? e.test(t) : !!e && t.startsWith(e);
  };
  const hi = _exports.Version = "1.10.2";
});
