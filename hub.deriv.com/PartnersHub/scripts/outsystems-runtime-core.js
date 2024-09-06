! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@outsystems/logger-js"), require("@outsystems/settings-js"), require("@outsystems/auth-js"), require("@outsystems/communication-js")) : "function" == typeof define && define.amd ? define("@outsystems/runtime-core-js", ["exports", "@outsystems/logger-js", "@outsystems/settings-js", "@outsystems/auth-js", "@outsystems/communication-js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).OSRuntimeCore = {}, e.OSLogger, e.OSSettings, e.OSAuth, e.OSCommunication)
}(this, (function(e, t, r, n, i) {
    "use strict";

    function s(e, t, r, n) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
        else
            for (var o = e.length - 1; o >= 0; o--)(i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
        return s > 3 && a && Object.defineProperty(t, r, a), a
    }

    function a(e, t, r, n) {
        return new(r || (r = Promise))((function(i, s) {
            function a(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                    e(t)
                }))).then(a, o)
            }
            l((n = n.apply(e, t || [])).next())
        }))
    }

    function o(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
    }

    function l(e, t, r, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
    }
    var u;
    "function" == typeof SuppressedError && SuppressedError,
        function(e) {
            e[e.None = 0] = "None", e[e.Default = 1] = "Default", e[e.Fade = 2] = "Fade", e[e.SlideFromLeft = 3] = "SlideFromLeft", e[e.SlideFromRight = 4] = "SlideFromRight", e[e.SlideFromBottom = 5] = "SlideFromBottom", e[e.SlideFromTop = 6] = "SlideFromTop"
        }(u || (u = {}));
    var c = Object.freeze({
        __proto__: null,
        get TransitionAnimation() {
            return u
        }
    });
    const d = u;
    class h {
        constructor(e = "") {
            this.name = e
        }
    }
    const g = new h,
        m = new h("fade"),
        p = new h("slide-from-left"),
        f = new h("slide-from-right"),
        v = new h("slide-from-bottom"),
        y = new h("slide-from-top");
    let b = new h;

    function T(e) {
        b = e
    }

    function w(e, t) {
        if ("string" == typeof e) return new h(e);
        switch (e) {
            case d.None:
                return g;
            case d.Fade:
                return m;
            case d.SlideFromLeft:
                return p;
            case d.SlideFromRight:
                return f;
            case d.SlideFromBottom:
                return v;
            case d.SlideFromTop:
                return y;
            case d.Default:
                return b;
            default:
                return t
        }
    }
    var E = Object.freeze({
        __proto__: null,
        TransitionAnimation: d,
        Transition: h,
        get Default() {
            return b
        },
        setDefaultTransition: T,
        sanitizeTransition: function(e) {
            return new h(e ? e.name : "")
        },
        createTransition: w,
        reverseTransition: function(e) {
            if (!(null == e ? void 0 : e.name)) return new h("");
            switch (e.name) {
                case m.name:
                    return new h(m.name);
                case v.name:
                    return new h(y.name);
                case p.name:
                    return new h(f.name);
                case f.name:
                    return new h(p.name);
                case y.name:
                    return new h(v.name);
                default:
                    return new h(e.name + "-back")
            }
        }
    });
    const I = "";
    let A = {
        environmentKey: I,
        environmentName: I,
        applicationKey: I,
        applicationName: I,
        userProviderName: I,
        debugEnabled: !1,
        debugUseWebSockets: !1,
        homeModuleName: I,
        homeModuleKey: I,
        modules: {},
        homeModuleControllerName: I,
        homeModuleLanguageResourcesName: I,
        clientEntitiesModules: [],
        serverRequestTimeoutOverrideInSeconds: void 0,
        isWeb: !1,
        showWatermark: !1,
        buildServiceVersion: I,
        clientRuntimeVersion: I,
        appVersion: ""
    };

    function N(e) {
        A = e
    }

    function S() {
        return A.applicationKey
    }

    function D() {
        return A.applicationName
    }

    function R() {
        var e;
        return null !== (e = A.databaseName) && void 0 !== e ? e : ""
    }

    function C(e) {
        A.modules = e
    }

    function x() {
        var e;
        return null !== (e = A.modules) && void 0 !== e ? e : {}
    }

    function L(e) {
        const t = A.modules;
        return !(null == t ? void 0 : t[e]) && t && (t[e] = {
            moduleName: null,
            homeScreenName: null,
            splashScreenName: null,
            screens: [],
            staticEntities: {}
        }), null == t ? void 0 : t[e]
    }

    function O(e) {
        return (null == e ? void 0 : e.homeScreenName) ? B(e, e.homeScreenName) : (null == e ? void 0 : e.screens) && e.screens.length > 0 ? e.screens[0] : null
    }

    function _() {
        return A.clientEntitiesModules
    }

    function M() {
        return A.clientEntitiesModuleImporter
    }

    function U(e) {
        A.clientEntitiesModules = e
    }

    function F(e) {
        A.databaseName = e
    }

    function $() {
        return A.homeModuleName
    }

    function P() {
        return A.homeModuleKey
    }

    function V() {
        if (A.homeModuleName && A.modules) {
            const e = A.modules[A.homeModuleKey];
            return e || null
        }
        return null
    }

    function B(e, t) {
        for (const r of e.screens)
            if (r.screenName === t) return r;
        return null
    }

    function k() {
        return A.userProviderName
    }

    function z() {
        var e;
        return null !== (e = A.debugEnabled) && void 0 !== e && e
    }

    function H() {
        var e;
        return null !== (e = A.debugUseWebSockets) && void 0 !== e && e
    }

    function j() {
        return A.homeModuleControllerName
    }

    function q() {
        return A.homeModuleControllerImporter
    }

    function G() {
        return A.homeModuleLanguageResourcesName
    }

    function W() {
        return A.homeModuleLanguageResourcesImporter
    }

    function K() {
        return A.serverRequestTimeoutOverrideInSeconds
    }

    function J(e) {
        A.serverRequestTimeoutOverrideInSeconds = e
    }

    function Y() {
        var e;
        return w(d[null !== (e = A.defaultTransition) && void 0 !== e ? e : d.None])
    }

    function X() {
        return A.errorPageConfig
    }

    function Q() {
        var e;
        return null !== (e = A.isWeb) && void 0 !== e && e
    }

    function Z() {
        var e;
        return null !== (e = A.showWatermark) && void 0 !== e && e
    }

    function ee() {
        var e;
        return null !== (e = A.buildServiceVersion) && void 0 !== e ? e : I
    }

    function te() {
        var e;
        return null !== (e = A.clientRuntimeVersion) && void 0 !== e ? e : I
    }

    function re() {
        var e;
        return null !== (e = A.useESM) && void 0 !== e && e
    }

    function ne({
        applicationHomeModule: e = $
    } = {}) {
        var t, r;
        return `/${null!==(r=null===(t=("undefined"!=typeof window?window:globalThis).OutSystemsApp)||void 0===t?void 0:t.basePath)&&void 0!==r?r:e()}/`.replace(/\/(\/)+/gm, "/")
    }

    function ie({
        windowLocation: e = window.location,
        applicationHomeModule: t = $
    } = {}) {
        return `${e.protocol}//${e.host}${ne({applicationHomeModule:t})}`
    }

    function se() {
        return A.appVersion
    }
    var ae = Object.freeze({
        __proto__: null,
        setApplicationDefinition: N,
        getEnvironmentKey: function() {
            return A.environmentKey
        },
        getEnvironmentName: function() {
            return A.environmentName
        },
        getApplicationKey: S,
        getApplicationName: D,
        getDatabaseName: R,
        setModules: C,
        getModules: x,
        getModuleFromKey: L,
        getHomeScreen: O,
        getClientEntitiesModules: _,
        getClientEntitiesModuleImporter: M,
        setClientEntitiesModules: U,
        setDatabaseName: F,
        getHomeModuleName: $,
        getHomeModuleImporter: function() {
            return A.homeModuleImporter
        },
        getHomeModuleKey: P,
        getHomeModuleDefinition: V,
        getScreenDefinition: function(e, t) {
            for (const r of e.screens)
                if (r.screenUrl === t) return r;
            return null
        },
        getScreenDefinitionFromScreenName: B,
        getDefaultModuleHomeScreenURL: function() {
            const e = V(),
                t = O(e);
            return t ? `/${null==e?void 0:e.moduleName}/${t.screenUrl}` : null
        },
        getUserProviderName: k,
        isDebugEnabled: z,
        debugUseWebSockets: H,
        getHomeModuleControllerName: j,
        getHomeModuleControllerImporter: q,
        getHomeModuleLanguageResourcesName: G,
        getHomeModuleLanguageResourcesImporter: W,
        getServerRequestTimeoutOverrideInSeconds: K,
        setServerRequestTimeoutOverrideInSeconds: J,
        getDefaultTransition: Y,
        getErrorPageConfig: X,
        isWebApplication: Q,
        showWatermark: Z,
        getBuildServiceVersion: ee,
        getClientRuntimeVersion: te,
        useESM: re,
        moduleBelongsToApp: function(e) {
            var t, r;
            const n = null !== (t = A.modules) && void 0 !== t ? t : {};
            return (null === (r = Object.keys(n).map((e => n[e])).filter((t => t.moduleName === e))[0]) || void 0 === r ? void 0 : r.ownerAppKey) === S()
        },
        getBasePath: ne,
        getAppUrl: ie,
        getScreensDefinition: function() {
            return A.screensDefinition
        },
        getAppVersion: se
    });

    function oe(e) {
        if ("undefined" == typeof require) throw new Error("requirejs is not defined");
        return e ? require(e) : require
    }

    function le(e) {
        return oe().defined(e)
    }
    const ue = new Proxy({}, {
            get: (e, t) => {
                var r, n;
                return null === (n = null === (r = oe()) || void 0 === r ? void 0 : r.s) || void 0 === n ? void 0 : n[t]
            }
        }),
        ce = "$";

    function de(e) {
        return e.filter((e => "string" == typeof e)).length === e.length
    }
    const he = new class {
        constructor() {
            this.scriptMap = {}, this.baseUrl = ""
        }
        setErrorHandler(e) {
            this.errorHandler = e
        }
        loadModule(e, t, r) {
            return a(this, arguments, void 0, (function*(e, t, r, n = (e => import(e))) {
                var i;
                try {
                    let r;
                    if (de(e)) r = e.map((e => {
                        var t;
                        return n(null !== (t = this.scriptMap[e]) && void 0 !== t ? t : `${this.baseUrl?this.baseUrl+"/":""}${e}`)
                    }));
                    else {
                        if (! function(e) {
                                return e.filter((e => "function" == typeof e)).length === e.length
                            }(e)) throw new Error("'moduleNames' must be either a list of module names or module loaders. The list contains mixed elements.");
                        r = e.map((e => e()))
                    }
                    const i = yield Promise.all(r);
                    null == t || t(...i)
                } catch (e) {
                    null === (i = null != r ? r : this.errorHandler) || void 0 === i || i(e)
                }
            }))
        }
        configure(e, t = "scripts") {
            this.scriptMap = e, this.baseUrl = t
        }
    };

    function ge() {
        re() || me()
    }

    function me() {
        ! function() {
            var e;
            const t = null !== (e = ue.contexts) && void 0 !== e ? e : {};
            Object.keys(t).forEach((e => {
                const r = t[e];
                if (!r._osNameToUrlPatched) {
                    const e = r.nameToUrl;
                    r.nameToUrl = function(t, n, i) {
                        return t.indexOf(ce) > 0 && -1 === t.indexOf("?") && (t = t.split(ce, 2)[0]), e.apply(r, [t, n, i])
                    }, r._osNameToUrlPatched = !0
                }
            }))
        }()
    }

    function pe(e) {
        re() ? he.setErrorHandler(e) : function(e) {
            oe().onError = e
        }(e)
    }

    function fe(e, t, r, n = require, i) {
        var s;
        if (re()) he.loadModule(e, t, r, i);
        else if (de(e)) n(e, t, r);
        else {
            const e = new Error("A list of module names is required when ESM is switched off. The list of modules to load contains other type of elements.");
            null === (s = null != r ? r : oe().onError) || void 0 === s || s(e)
        }
    }

    function ve(e, t = "scripts") {
        if (re()) he.configure(e, t);
        else {
            const n = {
                baseUrl: t,
                paths: {},
                waitSeconds: 30
            };
            if (e) {
                for (const t in e) r = t, (oe().specified(r) || le(t)) && delete e[t];
                n.paths = e
            }! function(e) {
                oe().config(e)
            }(n), me()
        }
        var r
    }
    var ye = Object.freeze({
        __proto__: null,
        initialize: ge,
        setErrorHandler: pe,
        loadModule: fe,
        configure: ve
    });
    const be = new Map,
        Te = "Client Runtime Packages";
    let we;

    function Ee(e, t) {
        we = null, be.set(e, t)
    }
    const Ie = ({
        versionsMap: e = be,
        packageKey: t
    }) => {
        var r;
        return null !== (r = null == e ? void 0 : e.get(t)) && void 0 !== r ? r : null
    };
    var Ae, Ne = Object.freeze({
        __proto__: null,
        clientRuntimeKey: Te,
        registerPackage: Ee,
        getPackageVersion: Ie,
        toObject: function() {
            if (!we) {
                const e = {
                    "Client Runtime Packages": ""
                };
                be.forEach(((t, r) => {
                    t && r && (e[Te] += `${r}= ${t};`)
                })), we = e
            }
            return we
        }
    });
    ! function(e) {
        e[e.Persistent = 0] = "Persistent", e[e.Session = 1] = "Session"
    }(Ae || (Ae = {}));
    var Se = Ae;
    class De {
        get length() {
            return Object.keys(this.storageObj).length
        }
        clear() {
            this.storageObj = {}
        }
        getItem(e) {
            return this.storageObj.hasOwnProperty(e) ? this.storageObj[e] : null
        }
        key(e) {
            const t = Object.keys(this.storageObj);
            return e < t.length ? t[e] : null
        }
        removeItem(e) {
            this.storageObj.hasOwnProperty(e) && delete this.storageObj[e]
        }
        setItem(e, t) {
            this.storageObj[e] = t
        }
        constructor(e) {
            if (this.storageObj = {}, e) {
                let t = 0,
                    r = e.key(t);
                for (; null !== r;) this.storageObj[r] = e.getItem(r), r = e.key(++t)
            }
        }
    }
    const Re = "$OS_";
    let Ce = "OS";

    function xe() {
        return Ce
    }

    function Le(e) {
        Ce = e
    }
    const Oe = "undefined" == typeof window ? void 0 : window.localStorage,
        _e = "undefined" == typeof window ? void 0 : window.sessionStorage,
        Me = e => e === Se.Persistent ? Oe : _e;
    let Ue = $e(Se.Persistent) ? Me(Se.Persistent) : new De,
        Fe = $e(Se.Session) ? Me(Se.Session) : new De;

    function $e(e) {
        const t = Re + "test";
        try {
            const r = Me(e);
            r.setItem(t, "1");
            const n = "1" === r.getItem(t);
            return r.removeItem(t), n
        } catch (e) {
            return !1
        }
    }

    function Pe() {
        return Ue
    }

    function Ve() {
        return Fe
    }
    const Be = Object.freeze(Object());
    class ke {
        constructor(e, t, r, n) {
            this.storageType = e, this.key = t, this.defaultValue = r, this.getStorageName = () => xe(), this.clearCache(), n && (this.getStorageName = n)
        }
        get() {
            return this.getValue()
        }
        set(e) {
            this.setValueInStorage(e)
        }
        remove() {
            this.storage.removeItem(this.storageKey), this.clearCache()
        }
        isDefined() {
            const e = this.storage.getItem(this.storageKey);
            return null != e && "undefined" !== e
        }
        get storageKey() {
            return Re + this.getStorageName() + "$" + this.key
        }
        get storage() {
            return this.storageType === Se.Persistent ? Pe() : Ve()
        }
        getValue() {
            return this.cachedValue === Be && (this.cachedValue = this.getValueFromStorage()), this.cachedValue
        }
        getValueFromStorage() {
            const e = this.storage.getItem(this.storageKey);
            return null === e ? this.defaultValue : "undefined" === e || void 0 === e ? void 0 : JSON.parse(e)
        }
        setValueInStorage(e) {
            const t = this.storageKey,
                r = JSON.stringify(e),
                n = this.storage;
            if (!(null == n ? void 0 : n.setItem)) throw Error("The storage object for " + this.key + " is invalid.");
            try {
                n.setItem(t, r), this.cachedValue = e
            } catch (e) {
                if (!((i = this.storageType) === Se.Persistent && Ue !== Oe ? (console.warn("The localStorage is full... Proceding with a static Javascript object"), Ue = new De(Ue), 1) : i === Se.Session && Fe !== _e && (console.warn("The sessionStorage is full... Proceding with a static Javascript object"), Fe = new De(Fe), 1))) throw e;
                this.storage.setItem(t, r)
            }
            var i
        }
        clearCache() {
            this.cachedValue = Be
        }
    }
    var ze, He = Object.freeze({
        __proto__: null,
        StorageType: Se,
        DummyStorage: De,
        StorageObject: ke,
        setDefaultStorageNamespace: Le,
        getDefaultStorageNamespace: xe,
        getPersistentStorage: Pe,
        getSessionStorage: Ve,
        setCustomPersistentStorage: function(e) {
            Ue = e
        },
        setCustomSessionStorage: function(e) {
            Fe = e
        }
    });
    class je {
        constructor(e) {
            this._device = e
        }
        get device() {
            return this._device
        }
    }
    class qe {
        constructor(e, t, r, n, i, s, a, o) {
            this._platform = e, this._version = t, this._manufacturer = r, this._model = n, this._uuid = i, this._serial = s, this._cordova = a, this._isVirtual = o
        }
        get platform() {
            return this._platform
        }
        get version() {
            return this._version
        }
        get manufacturer() {
            return this._manufacturer
        }
        get model() {
            return this._model
        }
        get uuid() {
            return this._uuid
        }
        get serial() {
            return this._serial
        }
        get cordova() {
            return this._cordova
        }
        get isVirtual() {
            return this._isVirtual
        }
    }! function(e) {
        function t(e) {
            if (e) return {
                platform: e.platform,
                version: e.version,
                manufacturer: e.manufacturer,
                model: e.model,
                uuid: e.uuid,
                serial: e.serial,
                cordova: e.cordova,
                isVirtual: e.isVirtual
            }
        }
        e.serializeClientInfo = function(e) {
            const r = function(e) {
                if (!e) return;
                return {
                    device: e.device ? t(e.device) : void 0
                }
            }(e);
            if (r) return JSON.stringify(r)
        }, e.deserializeClientInfo = function(e) {
            let t;
            try {
                t = JSON.parse(e)
            } catch (e) {}
            if (t) return function(e) {
                if (!e) return;
                return new je(function(e) {
                    if (!e) return;
                    return new qe("string" == typeof e.platform ? e.platform : void 0, "string" == typeof e.version ? e.version : void 0, "string" == typeof e.manufacturer ? e.manufacturer : void 0, "string" == typeof e.model ? e.model : void 0, "string" == typeof e.uuid ? e.uuid : void 0, "string" == typeof e.serial ? e.serial : void 0, "string" == typeof e.cordova ? e.cordova : void 0, "boolean" == typeof e.isVirtual ? e.isVirtual : void 0)
                }(e.device))
            }(t)
        }
    }(ze || (ze = {}));
    const Ge = new ke(Se.Persistent, "ClientInfo");
    var We;

    function Ke(e, t, r = "") {
        return t === We.Exception || e instanceof t && ("" === r || !!e.specificType && e.specificType === r)
    }

    function Je(e) {
        if (void 0 === e) return "";
        if (e instanceof Error) return e.message;
        {
            const t = e.toString();
            return "[object SQLError]" === t ? e.message.toString() : t
        }
    }

    function Ye(e) {
        return (void 0 !== e.extraStack ? e.extraStack + "\r\n " : "") + (e.stack || "") || ""
    }

    function Xe(e) {
        var t, r, n;
        return {
            name: e.name,
            message: Je(e),
            stack: Ye(e),
            extraStack: null !== (t = e.extraStack) && void 0 !== t ? t : void 0,
            errorCode: null !== (r = e.errorCode) && void 0 !== r ? r : "OS-CLRT-00000",
            category: null !== (n = e.category) && void 0 !== n ? n : void 0
        }
    }

    function Qe(e) {
        return e.name ? e.specificType ? new We[e.name](e.specificType, e.message, e.extraStack, e.errorCode, e.category) : new We[e.name](e.message, e.extraStack, e.errorCode, e.category) : new We.Exception(e.message, e.extraStack, e.errorCode, e.category)
    }

    function Ze(e) {
        return Ke(e, We.SystemException)
    }

    function et(e) {
        return Ke(e, We.LicensingException)
    }! function(e) {
        e.CustomError = function(e) {
            const t = Error.call(this, e);
            "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, this.constructor.prototype) : t.__proto__ = this.constructor.prototype, "stack" in this && "" !== this.stack || (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = t.stack)
        }, e.CustomError.prototype = Error.prototype;
        class t extends e.CustomError {
            constructor(e, t, r, n) {
                super(null != e ? e : ""), this.extraStack = t, this.message = null != e ? e : "", this.name = "Exception", this.errorCode = r, this.category = n
            }
        }
        e.Exception = t;
        e.ServerException = class extends t {
            constructor(e, t, r, n) {
                super(t, r, n), this.specificType = e, this.name = e
            }
        };
        class r extends t {
            constructor(e, t, r, n) {
                super(t, r, n), this.specificType = e, this.name = e
            }
        }
        e.DataBaseException = r;
        e.OpenDatabaseException = class extends r {
            constructor(e, t, r) {
                super("OpenDatabaseException", e, t, r)
            }
        };
        e.CommunicationException = class extends t {
            constructor(e, t, r, n) {
                super(e, t, r, n), this.name = "CommunicationException"
            }
        };
        e.NumberOverflowException = class extends t {
            constructor(e, t) {
                super(e, t), this.name = "NumberOverflowException"
            }
            valueOf() {
                return this.name + ": " + this.message
            }
        };
        e.InvalidJavascriptType = class extends t {
            constructor(e, t) {
                super(e, t), this.name = "InvalidJavascriptType"
            }
            valueOf() {
                return this.name + ": " + this.message
            }
        };
        class n extends t {
            constructor(e, t, r) {
                super(e, t, r), this.name = "SecurityException"
            }
        }
        e.SecurityException = n;
        e.InvalidLoginException = class extends n {
            constructor(e, t, r) {
                super(e, t, r), this.name = "InvalidLoginException"
            }
        };
        e.NotRegisteredException = class extends n {
            constructor(e, t, r, n) {
                super(t, r, n), this.specificType = e, this.name = e
            }
        };
        class i extends t {
            constructor(e, t) {
                super(e, t), this.name = "SystemException"
            }
        }
        e.SystemException = i;
        class s extends i {
            constructor(e, t) {
                super(e, t), this.name = "IgnorableSystemException"
            }
        }
        e.IgnorableSystemException = s;
        e.ViewHasChangedException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "ViewHasChangedException"
            }
        };
        e.OutOfContextException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "OutOfContextException"
            }
        };
        e.RedirectOccurredException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "RedirectOccurredException"
            }
        };
        class a extends s {
            constructor(e, t) {
                super(e, t), this.name = "UnhandledOrIgnoredErrorInEventException"
            }
            get handleErrorResult() {
                return this._handleErrorResult
            }
            static create(e, t, r) {
                const n = new a(t, r);
                return n._handleErrorResult = e, n
            }
            static ignore(e) {
                if (!Ke(e, a)) throw e
            }
        }
        e.UnhandledOrIgnoredErrorInEventException = a;
        e.AbortedRequestException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "AbortedRequestException"
            }
        };
        e.ApplicationBackendUnavailableException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "ApplicationBackendUnavailableException"
            }
        };
        e.LicensingException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "LicensingException"
            }
        };
        e.IncompatibleProducerException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "IncompatibleProducerException"
            }
        };
        e.ControllerDisposedException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "ControllerDisposedException"
            }
        };
        e.AbortActivityChangeException = class extends t {
            constructor(e, t, r) {
                super(e, t, r), this.name = "AbortActivityChangeException"
            }
        };
        e.UserException = class extends t {
            constructor(e, t, r, n, i) {
                super(t, r, n, i), this.specificType = e, this.name = e
            }
        }
    }(We || (We = {}));
    var tt = Object.freeze({
        __proto__: null,
        get Exceptions() {
            return We
        },
        isInstanceOf: Ke,
        getMessage: Je,
        getStack: Ye,
        getExceptionInfo: Xe,
        getException: Qe,
        isSystem: Ze,
        isApplicationOffline: et
    });
    class rt {
        constructor(e) {
            this.returnValue = e
        }
    }
    const nt = new Object,
        it = new Object;

    function st(e) {
        const t = e;
        return t && "function" == typeof t.then && "function" == typeof t.catch
    }

    function at(e, t) {
        switch (t) {
            case it:
                return e();
            case nt:
                return;
            default:
                return Promise.reject(t)
        }
    }

    function ot(e) {
        return e() ? Promise.resolve(void 0) : ct()
    }

    function lt(e) {
        return new Promise(e)
    }

    function ut(e) {
        return Promise.resolve(e)
    }

    function ct() {
        return Promise.reject(nt)
    }

    function dt(e) {
        return ht(e)
    }

    function ht(e, t) {
        let r, n;
        const i = () => {
                throw n
            },
            s = () => {
                clearTimeout(t), t = window.setTimeout(i, 0)
            };

        function a(e, a) {
            return n ? a ? (clearTimeout(t), ht((() => a(n)))) : (s(), ht(i, t)) : ht(e ? () => e(r) : () => r)
        }
        try {
            r = e()
        } catch (e) {
            n = e, s()
        }
        return st(r) ? r : {
            then: function(e, t) {
                return a(e, t)
            },
            catch: function(e) {
                return a(void 0, e)
            }
        }
    }

    function gt(e, t = (e => Promise.reject(e)), r = (() => Promise.resolve(void 0))) {
        return dt(e).catch(t).then((e => dt(r).then((t => null != t ? t : e))), (e => dt(r).then((() => Promise.reject(e)))))
    }

    function mt(e, t) {
        return gt(e, t, void 0)
    }

    function pt(e, t) {
        return gt(e, void 0, t)
    }

    function ft(e, t) {
        return function r() {
            return ot(e).then(t).then(r, at.bind(null, r))
        }()
    }
    const vt = ft.bind(null, (() => !0));

    function yt(e) {
        return e instanceof rt ? e.returnValue : Promise.reject(e)
    }
    var bt, Tt = Object.freeze({
        __proto__: null,
        isPromiseCompatible: st,
        promise: lt,
        resolve: ut,
        breakAsync: ct,
        continueAsync: function() {
            return Promise.reject(it)
        },
        returnAsync: function(e) {
            return Promise.reject(new rt(e))
        },
        throwAsync: function(e) {
            return Promise.reject(e)
        },
        executeSequence: dt,
        tryCatchFinally: gt,
        tryCatch: mt,
        tryFinally: pt,
        executeAsyncFlow: function(e = (() => {})) {
            return dt(e).catch(yt)
        },
        whileAsync: ft,
        forEachAsync: function(e, t) {
            let r = 0;
            return ft((() => r < e.length), (() => {
                const n = e[r++];
                return t(n)
            }))
        },
        doWhileAsync: function(e, t) {
            function r() {
                return ot(e).then(n, at.bind(null, n))
            }

            function n() {
                return dt(t).then((() => ot(e))).then(n, at.bind(null, r))
            }
            return n()
        },
        whileTrueAsync: vt
    });
    ! function(e) {
        e[e.No = 0] = "No", e[e.Yes = 1] = "Yes", e[e.YesIfEmpty = 2] = "YesIfEmpty"
    }(bt || (bt = {}));
    var wt, Et = bt;
    ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.BINARY_DATA = 1] = "BINARY_DATA", e[e.BOOLEAN = 2] = "BOOLEAN", e[e.INTEGER = 3] = "INTEGER", e[e.LONGINTEGER = 4] = "LONGINTEGER", e[e.DECIMAL = 5] = "DECIMAL", e[e.DATE_TIME = 6] = "DATE_TIME", e[e.DATE = 7] = "DATE", e[e.TIME = 8] = "TIME", e[e.UNKNOWN = 9] = "UNKNOWN"
    }(wt || (wt = {}));
    var It, At, Nt, St, Dt = wt;
    ! function(e) {
        var t;
        (t = e.InitializationType || (e.InitializationType = {}))[t.Full = 0] = "Full", t[t.Minimal = 1] = "Minimal"
    }(It || (It = {})),
    function(e) {
        e.AutoNumber = Et, e.DBDataType = Dt
    }(At || (At = {})),
    function(e) {
        var t;
        (t = e.DataFetchStatus || (e.DataFetchStatus = {}))[t.Fetching = 0] = "Fetching", t[t.Fetched = 1] = "Fetched", t[t.Error = 2] = "Error"
    }(Nt || (Nt = {})),
    function(e) {
        ! function(e) {
            e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
        }(e.FeedbackMessageType || (e.FeedbackMessageType = {}))
    }(St || (St = {}));
    var Rt = Object.freeze({
        __proto__: null,
        get Application() {
            return It
        },
        get ClientDB() {
            return At
        },
        get Model() {
            return Nt
        },
        get FeedbackMessage() {
            return St
        }
    });

    function Ct(e, t) {
        void 0 === t && (t = {});
        for (var r = function(e) {
                for (var t = [], r = 0; r < e.length;) {
                    var n = e[r];
                    if ("*" !== n && "+" !== n && "?" !== n)
                        if ("\\" !== n)
                            if ("{" !== n)
                                if ("}" !== n)
                                    if (":" !== n)
                                        if ("(" !== n) t.push({
                                            type: "CHAR",
                                            index: r,
                                            value: e[r++]
                                        });
                                        else {
                                            var i = 1,
                                                s = "";
                                            if ("?" === e[o = r + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(o));
                                            for (; o < e.length;)
                                                if ("\\" !== e[o]) {
                                                    if (")" === e[o]) {
                                                        if (0 == --i) {
                                                            o++;
                                                            break
                                                        }
                                                    } else if ("(" === e[o] && (i++, "?" !== e[o + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(o));
                                                    s += e[o++]
                                                } else s += e[o++] + e[o++];
                                            if (i) throw new TypeError("Unbalanced pattern at ".concat(r));
                                            if (!s) throw new TypeError("Missing pattern at ".concat(r));
                                            t.push({
                                                type: "PATTERN",
                                                index: r,
                                                value: s
                                            }), r = o
                                        }
                    else {
                        for (var a = "", o = r + 1; o < e.length;) {
                            var l = e.charCodeAt(o);
                            if (!(l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || 95 === l)) break;
                            a += e[o++]
                        }
                        if (!a) throw new TypeError("Missing parameter name at ".concat(r));
                        t.push({
                            type: "NAME",
                            index: r,
                            value: a
                        }), r = o
                    } else t.push({
                        type: "CLOSE",
                        index: r,
                        value: e[r++]
                    });
                    else t.push({
                        type: "OPEN",
                        index: r,
                        value: e[r++]
                    });
                    else t.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++]
                    });
                    else t.push({
                        type: "MODIFIER",
                        index: r,
                        value: e[r++]
                    })
                }
                return t.push({
                    type: "END",
                    index: r,
                    value: ""
                }), t
            }(e), n = t.prefixes, i = void 0 === n ? "./" : n, s = "[^".concat(Lt(t.delimiter || "/#?"), "]+?"), a = [], o = 0, l = 0, u = "", c = function(e) {
                if (l < r.length && r[l].type === e) return r[l++].value
            }, d = function(e) {
                var t = c(e);
                if (void 0 !== t) return t;
                var n = r[l],
                    i = n.type,
                    s = n.index;
                throw new TypeError("Unexpected ".concat(i, " at ").concat(s, ", expected ").concat(e))
            }, h = function() {
                for (var e, t = ""; e = c("CHAR") || c("ESCAPED_CHAR");) t += e;
                return t
            }; l < r.length;) {
            var g = c("CHAR"),
                m = c("NAME"),
                p = c("PATTERN");
            if (m || p) {
                var f = g || ""; - 1 === i.indexOf(f) && (u += f, f = ""), u && (a.push(u), u = ""), a.push({
                    name: m || o++,
                    prefix: f,
                    suffix: "",
                    pattern: p || s,
                    modifier: c("MODIFIER") || ""
                })
            } else {
                var v = g || c("ESCAPED_CHAR");
                if (v) u += v;
                else if (u && (a.push(u), u = ""), c("OPEN")) {
                    f = h();
                    var y = c("NAME") || "",
                        b = c("PATTERN") || "",
                        T = h();
                    d("CLOSE"), a.push({
                        name: y || (b ? o++ : ""),
                        pattern: y && !b ? s : b,
                        prefix: f,
                        suffix: T,
                        modifier: c("MODIFIER") || ""
                    })
                } else d("END")
            }
        }
        return a
    }

    function xt(e, t) {
        return function(e, t) {
            void 0 === t && (t = {});
            var r = Ot(t),
                n = t.encode,
                i = void 0 === n ? function(e) {
                    return e
                } : n,
                s = t.validate,
                a = void 0 === s || s,
                o = e.map((function(e) {
                    if ("object" == typeof e) return new RegExp("^(?:".concat(e.pattern, ")$"), r)
                }));
            return function(t) {
                for (var r = "", n = 0; n < e.length; n++) {
                    var s = e[n];
                    if ("string" != typeof s) {
                        var l = t ? t[s.name] : void 0,
                            u = "?" === s.modifier || "*" === s.modifier,
                            c = "*" === s.modifier || "+" === s.modifier;
                        if (Array.isArray(l)) {
                            if (!c) throw new TypeError('Expected "'.concat(s.name, '" to not repeat, but got an array'));
                            if (0 === l.length) {
                                if (u) continue;
                                throw new TypeError('Expected "'.concat(s.name, '" to not be empty'))
                            }
                            for (var d = 0; d < l.length; d++) {
                                var h = i(l[d], s);
                                if (a && !o[n].test(h)) throw new TypeError('Expected all "'.concat(s.name, '" to match "').concat(s.pattern, '", but got "').concat(h, '"'));
                                r += s.prefix + h + s.suffix
                            }
                        } else if ("string" != typeof l && "number" != typeof l) {
                            if (!u) {
                                var g = c ? "an array" : "a string";
                                throw new TypeError('Expected "'.concat(s.name, '" to be ').concat(g))
                            }
                        } else {
                            h = i(String(l), s);
                            if (a && !o[n].test(h)) throw new TypeError('Expected "'.concat(s.name, '" to match "').concat(s.pattern, '", but got "').concat(h, '"'));
                            r += s.prefix + h + s.suffix
                        }
                    } else r += s
                }
                return r
            }
        }(Ct(e, t), t)
    }

    function Lt(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }

    function Ot(e) {
        return e && e.sensitive ? "" : "i"
    }

    function _t(e, t, r) {
        return function(e, t, r) {
            void 0 === r && (r = {});
            for (var n = r.strict, i = void 0 !== n && n, s = r.start, a = void 0 === s || s, o = r.end, l = void 0 === o || o, u = r.encode, c = void 0 === u ? function(e) {
                    return e
                } : u, d = r.delimiter, h = void 0 === d ? "/#?" : d, g = r.endsWith, m = "[".concat(Lt(void 0 === g ? "" : g), "]|$"), p = "[".concat(Lt(h), "]"), f = a ? "^" : "", v = 0, y = e; v < y.length; v++) {
                var b = y[v];
                if ("string" == typeof b) f += Lt(c(b));
                else {
                    var T = Lt(c(b.prefix)),
                        w = Lt(c(b.suffix));
                    if (b.pattern)
                        if (t && t.push(b), T || w)
                            if ("+" === b.modifier || "*" === b.modifier) {
                                var E = "*" === b.modifier ? "?" : "";
                                f += "(?:".concat(T, "((?:").concat(b.pattern, ")(?:").concat(w).concat(T, "(?:").concat(b.pattern, "))*)").concat(w, ")").concat(E)
                            } else f += "(?:".concat(T, "(").concat(b.pattern, ")").concat(w, ")").concat(b.modifier);
                    else "+" === b.modifier || "*" === b.modifier ? f += "((?:".concat(b.pattern, ")").concat(b.modifier, ")") : f += "(".concat(b.pattern, ")").concat(b.modifier);
                    else f += "(?:".concat(T).concat(w, ")").concat(b.modifier)
                }
            }
            if (l) i || (f += "".concat(p, "?")), f += r.endsWith ? "(?=".concat(m, ")") : "$";
            else {
                var I = e[e.length - 1],
                    A = "string" == typeof I ? p.indexOf(I[I.length - 1]) > -1 : void 0 === I;
                i || (f += "(?:".concat(p, "(?=").concat(m, "))?")), A || (f += "(?=".concat(p, "|").concat(m, ")"))
            }
            return new RegExp(f, Ot(r))
        }(Ct(e, r), t, r)
    }

    function Mt(e, t, r) {
        return e instanceof RegExp ? function(e, t) {
            if (!t) return e;
            for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, i = r.exec(e.source); i;) t.push({
                name: i[1] || n++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            }), i = r.exec(e.source);
            return e
        }(e, t) : Array.isArray(e) ? function(e, t, r) {
            var n = e.map((function(e) {
                return Mt(e, t, r).source
            }));
            return new RegExp("(?:".concat(n.join("|"), ")"), Ot(r))
        }(e, t, r) : _t(e, t, r)
    }
    class Ut {
        constructor(e, t) {
            this._groups = e, this._index = t - this._groups[0].length
        }
        get value() {
            return this._groups[0]
        }
        get index() {
            return this._index
        }
        get length() {
            return this._groups[0].length
        }
        get groups() {
            return this._groups
        }
    }

    function Ft(e, t, r = !1) {
        const n = [],
            i = new RegExp(t, "g" + (r ? "i" : ""));
        let s = i.exec(e);
        for (; s;) n.push(new Ut(s, i.lastIndex)), s = i.exec(e);
        return n
    }

    function $t(e, t, r = !1, n) {
        const i = Ft(e, t, r);
        let s = e,
            a = 0;
        for (let e = 0; e < i.length; e++) {
            const t = i[e],
                r = n(t);
            s = s.substr(0, t.index + a) + r + s.substr(a + t.index + t.length), a += r.length - t.length
        }
        return s
    }

    function Pt(e) {
        return e ? e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") : e
    }
    const Vt = (e, t, r) => {
            if (t.toLowerCase() === r.toLowerCase()) return e;
            const n = new RegExp(`^${Pt(t)}`, "i");
            return e.replace(n, r)
        },
        Bt = (e, t) => `${e}${t}`,
        kt = (e = window) => {
            var t, r;
            return null !== (r = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.href) && void 0 !== r ? r : ""
        },
        zt = (e = window) => {
            var t, r, n;
            return null !== (n = null === (r = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.protocol) || void 0 === r ? void 0 : r.replace(/:/g, "")) && void 0 !== n ? n : ""
        },
        Ht = e => e.replace(/([^:]\/)\/+/g, "$1"),
        jt = e => e.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
    var qt = Object.freeze({
        __proto__: null,
        replaceBasePath: Vt,
        buildURLFromVersionedResource: Bt,
        getCurrentUrl: kt,
        getHttpScheme: zt,
        sanitizeUrl: Ht,
        removeQueryParametersFromUrls: jt
    });

    function Gt(e) {
        return !!(null == e ? void 0 : e.OutSystemsNative)
    }
    const Wt = "Injector",
        Kt = {},
        Jt = {};

    function Yt(e, t) {
        try {
            ti(Wt, `Registering ${e} service`);
            const r = t();
            return Kt[e] = r, e in Jt && Jt[e].forEach((t => t(e, r))), !0
        } catch (t) {
            return ni(Wt, `Failed to initialize ${e} service: ${t}`), !1
        }
    }

    function Xt(e) {
        return Kt[e]
    }
    const Qt = {
        register: Yt,
        unregister: function(e) {
            delete Kt[e]
        },
        resolve: Xt,
        addRegistrationListener: function(e, t) {
            e in Jt ? Jt[e].push(t) : Jt[e] = [t]
        },
        removeRegistrationListener: function(e, t) {
            e in Jt && (Jt[e] = Jt[e].filter((e => e !== t)))
        }
    };
    var Zt;
    e.ServiceNames = void 0, (Zt = e.ServiceNames || (e.ServiceNames = {})).DeviceHelperClassProvider = "DeviceHelperClassProvider", Zt.ClientVariablesService = "ClientVariablesService", Zt.TranslationsService = "TranslationsService", Zt.LocaleService = "LocaleService", Zt.EntityService = "EntityService", Zt.GlobalExceptionHandler = "GlobalExceptionHandler", Zt.SettingsManager = "SettingsManager", Zt.AuthConfigsManager = "AuthConfigsManager", Zt.Auth = "Auth", Zt.HttpClient = "HttpClient", Zt.UnauthenticatedHttpClient = "UnauthenticatedHttpClient", Zt.DebuggerHttpClient = "DebuggerHttpClient", Zt.NonDebuggerHttpClient = "NonDebuggerHttpClient", Zt.LoggerHttpClient = "LoggerHttpClient", Zt.NativeStatus = "NativeStatus", Zt.LifecycleEventsManager = "LifecycleEventsManager", Zt.Debugger = "Debugger", Zt.InstrumentationFactory = "InstrumentationFactory";
    const er = "NativeStatus";
    class tr {
        constructor({
            win: e = window,
            isRunningOnNativeFn: t = ir,
            deviceReadyPromise: r = ur
        } = {}) {
            this.cachedReadyValue = null, this.win = e, this.isRunningOnNativeFn = t, this.deviceReadyPromise = r
        }
        raiseCordovaNotLoadedError() {
            const e = "Running on native but cordova wasn't loaded";
            throw ii(er, e, "OS-CLRT-00000", void 0, t.Visibility.External), new Error(e)
        }
        ensureIsReady() {
            return a(this, void 0, void 0, (function*() {
                return null === this.cachedReadyValue ? (ti(er, "Waiting for 'deviceready' event"), this.isRunningOnNativeFn() ? void 0 === this.win.cordova ? (this.cachedReadyValue = !1, this.raiseCordovaNotLoadedError()) : (yield this.deviceReadyPromise(), this.cachedReadyValue = !0, !0) : (ti(er, "'deviceready' event wait ignored"), this.cachedReadyValue = !0, !0)) : !!this.cachedReadyValue || this.raiseCordovaNotLoadedError()
            }))
        }
    }
    const rr = "Android",
        nr = "iOS",
        ir = (e = navigator) => !(!e || !new RegExp("OutSystemsApp", "i").test(e.userAgent)),
        sr = (e = window) => {
            var t;
            return null === (t = null == e ? void 0 : e.device) || void 0 === t ? void 0 : t.platform
        },
        ar = (e, t = ir, r = window) => t() && sr(r) === e,
        or = (e = ir, t = window) => ar(rr, e, t),
        lr = (e, t, r = document) => !!(null == r ? void 0 : r.addEventListener) && (r.addEventListener(e, t), !0),
        ur = (e = document) => new Promise(((t, r) => {
            lr("deviceready", (() => t()), e) || t()
        })),
        cr = () => {
            let t = Qt.resolve(e.ServiceNames.NativeStatus);
            return t || (Qt.register(e.ServiceNames.NativeStatus, (() => new tr)), t = Qt.resolve(e.ServiceNames.NativeStatus)), t.ensureIsReady()
        },
        dr = (e, t, ...r) => a(void 0, [e, t, ...r], void 0, (function*(e, t, r = cr, n = lr) {
            yield r(), n(e, t)
        })),
        hr = (e = or, t = navigator) => !!e() && (t.app.exitApp(), !0),
        gr = (...e) => a(void 0, [...e], void 0, (function*(e = cr, t = mr) {
            var r, n;
            try {
                yield e();
                const i = t();
                return null !== (n = null === (r = null == i ? void 0 : i.OutSystemsNative) || void 0 === r ? void 0 : r.OTLogger) && void 0 !== n ? n : null
            } catch (e) {
                return console.error("Native is not ready", e), null
            }
        })),
        mr = () => window;
    var pr = Object.freeze({
        __proto__: null,
        isRunningOnNative: ir,
        getPlatformName: sr,
        isAndroid: or,
        isIOS: (e = ir, t = window) => ar(nr, e, t),
        whenDeviceReady: ur,
        ensureNativeReady: cr,
        addNativeEventListener: dr,
        exitApp: hr,
        getNativeOTLogger: gr
    });
    const fr = e => a(void 0, [e], void 0, (function*({
            url: e,
            redirectUri: t,
            w: r,
            awaitNative: n
        }) {
            var i;
            const s = yield(e => a(void 0, [e], void 0, (function*({
                w: e = window,
                awaitNative: t = cr
            }) {
                if (yield t(), Gt(e) && e.OutSystemsNative.Auth) return e.OutSystemsNative.Auth;
                throw new Error("Could not find the OSAuth plugin.")
            })))({
                w: r,
                awaitNative: n
            });
            try {
                return yield s.startFlow(e, t)
            } catch (e) {
                throw ii("NativeAuthPlugin", null !== (i = e.message) && void 0 !== i ? i : "Error starting the external auth flow", "OS-CLRT-40100", e instanceof Error ? e : void 0), new Error("Error starting the external auth flow")
            }
        })),
        vr = "Navigation",
        yr = new RegExp("/([^/]*)"),
        br = new RegExp(/\/(\/)+/gm),
        Tr = 10,
        wr = 1e3,
        Er = ["localhost", "10.0.2.2"],
        Ir = "POP",
        Ar = [],
        Nr = [],
        Sr = new class {
            constructor() {
                this.stack = [], this.map = {}, this.counter = 0
            }
            push(e) {
                const t = this.counter++;
                return this.stack.push(t), this.map[t] = e, t
            }
            remove(e) {
                const t = this.stack.indexOf(e),
                    r = t > -1;
                return r && (this.stack.splice(t, 1), delete this.map[e]), r
            }
            pop() {
                if (0 === this.stack.length) throw new Error("IndexedStack: pop from empty stack.");
                const e = this.stack.pop(),
                    t = this.map[e];
                return delete this.map[e], t
            }
            clear() {
                this.stack = [], this.map = {}
            }
            get isEmpty() {
                return 0 === this.stack.length
            }
        };
    let Dr;

    function Rr(e) {
        if (!Cr(e)) throw new We.OutOfContextException
    }

    function Cr(e) {
        return !e || !e.isOutOfContext
    }

    function xr(e) {
        if (e) throw new We.RedirectOccurredException
    }

    function Lr(e) {
        Nr.push(e)
    }

    function Or() {
        return Nr[Nr.length - 1]
    }

    function _r() {
        return Nr.pop()
    }
    let Mr = !1,
        Ur = !1;

    function Fr(e = !1) {
        ti(vr, "Next navigation will force a reload..."), Mr = !0, Ur = e
    }
    let $r = () => {
        const {
            protocol: e,
            pathname: t,
            href: r,
            search: n
        } = window.location;
        return {
            protocol: e,
            pathname: t,
            href: r,
            search: n,
            hostname: window.location.hostname || window.location.host.split(":")[0]
        }
    };
    const Pr = e => {
        if (void 0 === e) return null;
        return Qr(window.location.search.substr(1))[e]
    };
    let Vr = (e, {
            getLocation: t = $r,
            getBasePath: r = ne
        } = {}) => {
            if (!("http:" === e.protocol || "https:" === e.protocol || "outsystems:" === e.protocol)) return !1;
            const n = t().hostname;
            if (n !== ("" !== e.hostname ? e.hostname : n)) return !1;
            const i = yr.exec(e.pathname);
            if (!i || i.length < 2) return !1;
            return new RegExp(`^${Pt(r())}`, "i").test(`${e.pathname}/`)
        },
        Br = function(e) {
            const t = document.createElement("a");
            return t.href = e, t
        },
        kr = !1;

    function zr() {
        return kr
    }
    let Hr = function(e, t = !1, r = !1) {
        t && (e = qr(e));
        const n = jt(e);
        ti(vr, `Reloading application with url: '${n}' (replace = ${r})`);
        const i = () => {
            r ? window.location.replace(e) : window.location.href = e
        };
        kr = !0, ai().then(i).catch(i)
    };

    function jr() {
        return "undefined" != typeof window && window.location.search.indexOf("_ts") >= 0
    }

    function qr(e) {
        const t = `${e.indexOf("?")<0?"?":"&"}_ts=${(new Date).valueOf()}`,
            r = e.indexOf("#");
        return r >= 0 ? [e.slice(0, r), t, e.slice(r)].join("") : `${e}${t}`
    }

    function Gr(e = !1) {
        const t = cn();
        Hr(t, e)
    }

    function Wr(e = !1) {
        Hr($r().href, e, !0)
    }

    function Kr(e) {
        return Sr.push(e)
    }

    function Jr(e) {
        Sr.remove(e)
    }

    function Yr(e) {
        Dr = e
    }
    const Xr = function(e) {
        let t, r = !1,
            n = "",
            i = e;
        const s = -1 !== e.indexOf(":") || 0 === e.indexOf("/"),
            a = i.indexOf("#"); - 1 !== a && (t = i.substr(a + 1).trim(), i = i.substr(0, a));
        const o = i.indexOf("?");
        if (-1 !== o && (n = i.substr(o + 1).trim(), i = i.substr(0, o)), s) {
            const e = Br(i);
            r = Vr(e), r && (i = e.pathname)
        } else i = function(e) {
            return cn(ne(), e)
        }(i), r = !0;
        return {
            url: e,
            isInternal: r,
            path: i,
            queryParams: Qr(n),
            hash: t
        }
    };

    function Qr(e) {
        const t = {};
        return e.length > 0 && e.split("&").forEach((e => {
            const r = e.split("=");
            if (2 === r.length) {
                const e = Zr(r[0]),
                    n = Zr(r[1]);
                t[e] = n
            }
        })), t
    }

    function Zr(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }

    function en(e, t, r) {
        return t.replace(/\/$/, "") === e || r.screens.some((r => Mt(cn(t, r.screenUrl)).test(e)))
    }

    function tn() {
        Q() && window.stop && "complete" === document.readyState && (ti(vr, "Stopping all currently pending resources."), window.stop())
    }

    function rn(e, r, n = null, i, s) {
        if (Rr(n), function(e) {
                const r = (new Date).getTime(),
                    n = r - wr;
                for (; Ar.length > 0 && Ar[0].timestamp < n;) Ar.shift();
                if (Ar.reduce((function(t, r) {
                        return r.url === e ? t + 1 : t
                    }), 0) < Tr) return Ar.push({
                    timestamp: r,
                    url: e
                }), !1;
                {
                    const r = jt(e);
                    return ri(vr, `Identified a recursive navigation to '${r}'.`, t.Visibility.Internal), !0
                }
            }(e)) throw Error("Too many redirects.");
        i || tn();
        const o = Xr(e);
        if (Nr && Or().goTo && o.isInternal) Or().goTo(o, r, s);
        else {
            if (ir() && Un({
                    url: e
                })) return function(e) {
                return a(this, void 0, void 0, (function*() {
                    var t, r, n;
                    const i = null !== (t = e.queryParams.redirect_uri) && void 0 !== t ? t : e.queryParams.post_logout_redirect_uri;
                    if (!i) throw new Error("Can't perform an external login without a redirect URI");
                    const s = yield fr({
                        url: e.url,
                        redirectUri: i
                    }), [a] = i.split("?"), o = ne(), l = null !== (n = null === (r = a.match(new RegExp(`${o}.*`))) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : "";
                    Hr(s ? `${l}?${s}` : l)
                }))
            }(o);
            Hr(e)
        }
        xr(i)
    }

    function nn(e, t, r) {
        Rr(t), r || tn(), Nr && Or().goBack ? Or().goBack(e) : window.history.back(), xr(r)
    }

    function sn(e, t, r) {
        Rr(t), r || tn(), Nr && Or().goForward ? Or().goForward(e) : window.history.forward(), xr(r)
    }

    function an(e, t, r) {
        return r + e.substring(t.length)
    }

    function on() {
        const e = $r();
        if ("http:" === e.protocol.toLocaleLowerCase()) {
            const t = e.hostname.toLocaleLowerCase();
            if (!Er.includes(t)) {
                const t = an(e.href, e.protocol, "https:");
                return Hr(t, !1, !0), !0
            }
            console.warn(vr, `Accessing through http://${t} is not supported. Please access the application using the hostname instead.`)
        }
        return !1
    }

    function ln(e) {
        return e.action.toUpperCase() === Ir
    }

    function un(e) {
        return "" === e || null == e
    }

    function cn(...e) {
        return (0 === e.length ? ne() : "/" + e.join("/")).replace(br, "/")
    }
    var dn;
    ! function(e) {
        let t = e => e;
        e.setUrlVersionProvider = function(e) {
            t = e
        }, e.getVersionedUrl = function(e) {
            return t(e)
        }
    }(dn || (dn = {}));
    var hn = Object.freeze({
        __proto__: null,
        NAVIGATE_TO_URL_ACTION: "PUSH",
        NAVIGATE_FROM_HISTORY_ACTION: Ir,
        SCREEN_URL_PART_SEPARATOR: "-",
        validateContext: Rr,
        isValidContext: Cr,
        throwRedirectOccurredExceptionIfNeeded: xr,
        setNavigationCallbacks: Lr,
        getNavigationCallbacks: Or,
        removeNavigationCallbacks: _r,
        forceReloadOnNextNavigation: Fr,
        willReloadInNextNavigation: function() {
            return Mr
        },
        resetReloadState: function(e = !1, t = !1) {
            Mr = e, Ur = t
        },
        getCurrentLocation: $r,
        getSearchParameterValue: Pr,
        urlBelongsToCurrentApplication: Vr,
        getLocationFromUrl: Br,
        hasPendingReload: zr,
        changeWindowLocation: Hr,
        currentLocationHasTimestamp: jr,
        addInvalidationSuffixToUrl: qr,
        reloadApplication: Gr,
        reloadCurrentLocation: Wr,
        registerBackNavigationHandler: Kr,
        unregisterBackNavigationHandler: Jr,
        registerNavigationHandler: Yr,
        getUrlInfo: Xr,
        onBeforeNavigate: function(e, t) {
            if (! function(e) {
                    var t;
                    if (e && Dr) try {
                        const r = (e, t, r) => rn(e, w(t, b), null, !1, r);
                        return null !== (t = Dr(e, r)) && void 0 !== t && t
                    } catch (e) {
                        const t = "Error while executing navigation callback";
                        return fi({
                            category: $(),
                            errorCode: "OS-CLRT-00000",
                            clientMessage: t,
                            internalMessage: t,
                            errorObj: e instanceof Error ? e : void 0
                        }), !1
                    }
                    return !0
                }(e.pathname + e.search)) return !1;
            const r = Mr;
            if (Mr && (Mr = !1), t && !Sr.isEmpty) {
                return mt(Sr.pop(), (e => {
                    ii($(), "Error while navigating back without an empty stack", "OS-CLRT-00000", e)
                })), !1
            }
            const n = ln(e);
            if (n || r) {
                const t = Xr(e.pathname),
                    i = x(),
                    s = ne();
                let a;
                if (t.isInternal) {
                    a = !0;
                    for (const e in i)
                        if (i.hasOwnProperty(e)) {
                            const r = t.url.replace(/\/$/, ""),
                                n = i[e];
                            if (en(r, cn(s), n) || n.moduleName !== $() && n.moduleName && en(r, n.moduleName, n)) {
                                a = !1;
                                break
                            }
                        }
                } else a = !1;
                if (r || a) {
                    let t;
                    if (a) t = cn();
                    else {
                        const r = e.search || "";
                        t = s === e.pathname && "" === r ? /\/$/.test(e.pathname) ? e.pathname : `${e.pathname}/` : e.pathname + r
                    }
                    return Hr(t, Ur, n), !a
                }
            }
            return Sr.clear(), !0
        },
        urlBelongsToPrefix: en,
        navigateTo: rn,
        navigateBack: nn,
        navigateForward: sn,
        switchUrlProtocol: an,
        ensureRequestSecurity: on,
        locationReachedFromHistory: ln,
        generateScreenURL: function(e, t, r) {
            let n, i = e,
                s = e;
            return "string" == typeof t ? (s = t, n = function(e, t, r) {
                const n = function(e, t) {
                        const r = Ct(t);
                        return Object.keys(e).filter((e => !r.some((t => "string" != typeof t && t.name === e)))).reduce(((t, r) => (t[r] = e[r], t)), {})
                    }(null != r ? r : {}, t),
                    i = (s = null != r ? r : {}, a = n, Object.keys(s).filter((e => "" !== s[e] && !(e in a))).reduce(((e, t) => (e[t] = s[t], e)), {}));
                var s, a;
                return function(e, t) {
                        const r = Ct(t),
                            n = r.filter((e => "string" != typeof e && "?" === e.modifier)).map((t => {
                                var r;
                                return {
                                    name: t.name,
                                    value: null !== (r = e[t.name]) && void 0 !== r ? r : ""
                                }
                            }));
                        let i, s = !1;
                        n.forEach((e => {
                            if (s && !un(e.value)) throw new Error(`Error processing optional parameters on path ${t}. The parameter ${i.name} has an empty value while ${e.name} has a non-empty value. All optional parameters before ${e.name} must have a value when ${e.name} has a value.`);
                            un(e.value) && (i = e, s = !0)
                        }))
                    }(i, t),
                    function(e, t, r, n) {
                        const i = Object.keys(n).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)).join("&");
                        try {
                            const n = xt(t, {
                                encode: e => encodeURIComponent(e)
                            })(r);
                            return function(e, t) {
                                const r = ne(),
                                    n = t.replace(/^\//, ""),
                                    i = $();
                                return e === i ? `${r}${n}` : `/${e}/${n}`
                            }(e, `${n}${i.length>0?`?${i}`:""}`)
                        } catch (r) {
                            const n = new RegExp('^Expected "(.*)" to be a string$', "g").exec(r.message);
                            if (n) {
                                const i = n[1];
                                return void fi({
                                    category: e,
                                    errorCode: "OS-CLRT-00000",
                                    clientMessage: `Error building URL for ${t}. Parameter ${i} is missing or has an empty value`,
                                    internalMessage: `Error building URL: parameter ${i} is missing or has an empty value`,
                                    errorObj: r instanceof Error ? r : void 0
                                })
                            }
                            throw r
                        }
                    }(e, t, i, n)
            }(i, s, r)) : (i = "", n = function(e, t) {
                const r = Object.keys(t).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&"),
                    n = `${e}${r.length>0?`?${r}`:""}`;
                return n
            }(s, r = t)), n
        },
        buildApplicationRelativeUrl: cn,
        get VersionedURL() {
            return dn
        }
    });

    function gn() {
        var e;
        const t = window;
        if (null === (e = null == t ? void 0 : t.OutSystemsNative) || void 0 === e ? void 0 : e.ApplicationInfo) return t.OutSystemsNative.ApplicationInfo
    }
    const mn = "Authentication",
        pn = "_RedirectLogin",
        fn = "_RedirectLogout",
        vn = e => a(void 0, [e], void 0, (function*({
            path: e,
            params: t = {
                isRunningOnNative: ir,
                getAppUrl: ie,
                getHost: () => {
                    var e;
                    return null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.host
                },
                getPlatform: () => sr(),
                getPackageId: () => a(void 0, void 0, void 0, (function*() {
                    return (yield((...e) => a(void 0, [...e], void 0, (function*({
                        nativeReady: e = cr,
                        nativeApplicationInfo: t = gn
                    } = {}) {
                        return yield e(), new Promise(((e, r) => {
                            const n = t();
                            return n ? n.getAppPackageIdentifier(e, r) : r(new Error("NativeAppInfo API is not available"))
                        }))
                    })))()).toLowerCase()
                })),
                getBasePath: ne
            }
        }) {
            var r, n, i, s, o;
            if (t.isRunningOnNative()) {
                const a = yield null === (r = t.getPackageId) || void 0 === r ? void 0 : r.call(t), o = null === (n = t.getHost) || void 0 === n ? void 0 : n.call(t), l = null === (i = t.getPlatform) || void 0 === i ? void 0 : i.call(t), u = null === (s = t.getBasePath) || void 0 === s ? void 0 : s.call(t);
                if (!a) throw new Error("Could not get the package id");
                if (!o) throw new Error("Could not get host name");
                if (!l) throw new Error("Could not get the platform");
                if (!u) throw new Error("Could not get the base path");
                return Ht(`${a}://${o}/${l}/${u}/${e}`)
            } {
                const r = null === (o = t.getAppUrl) || void 0 === o ? void 0 : o.call(t);
                if (!r) throw new Error("Could not get the application url");
                return Ht(`${r}/${e}`)
            }
        })),
        yn = e => a(void 0, void 0, void 0, (function*() {
            return vn({
                path: pn,
                params: e
            })
        })),
        bn = e => a(void 0, void 0, void 0, (function*() {
            return vn({
                path: fn,
                params: e
            })
        })),
        Tn = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                callbackUrl: i = "",
                redirectUrlParams: s,
                redirectUri: a = yn(s),
                authConfigs: o,
                auth: l = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.External, o)),
                actionName: u = "getExternalLoginUrl"
            } = void 0 === t ? {} : t;
            try {
                if (ti(mn, "Retrieving the external login url."), !l) throw Fn(u);
                const e = $n(u, l),
                    t = yield a;
                return e.getLoginUrl({
                    redirectUri: t,
                    callbackUrl: i
                })
            } catch (e) {
                throw ii(mn, "Error retrieving the external login url.", "OS-CLRT-40100", e), e
            }
        })),
        wn = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                callbackUrl: i = "",
                redirectUrlParams: s,
                redirectUri: a = yn(s),
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.External)),
                actionName: l = "externalLogin"
            } = void 0 === t ? {} : t;
            try {
                if (ti(mn, "External login flow started."), !o) throw Fn(l);
                const e = $n(l, o),
                    t = yield a;
                yield e.login({
                    redirectUri: t,
                    callbackUrl: i,
                    navigationHandler: rn
                })
            } catch (e) {
                throw ii(mn, "Error in the external login flow.", "OS-CLRT-40100", e), new We.InvalidLoginException("Login Failed", Ye(e))
            }
        })),
        En = t => a(void 0, void 0, void 0, (function*() {
            var r, i, {
                username: s,
                password: a,
                persistLogin: o,
                auth: l = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: u = "builtinLogin"
            } = t;
            try {
                if (ti(mn, "Builtin login flow started."), !l) throw Fn(u);
                return yield Pn(u, l).login({
                    username: s,
                    password: a,
                    persistLogin: o
                })
            } catch (e) {
                throw ii(mn, "Error in the builtin login flow.", null !== (i = e.errorCode) && void 0 !== i ? i : "OS-CLRT-40100", e), e
            }
        })),
        In = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                callbackUrl: n = "",
                redirectUrlParams: i,
                redirectUri: s = bn(i),
                auth: a = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance()),
                actionName: o = "logout"
            } = void 0 === t ? {} : t;
            try {
                if (ti(mn, "Logout flow started."), !a) throw Fn(o);
                const e = yield s;
                yield Pn(o, a, "Use GetExternalLogoutURL instead.").logout({
                    redirectUri: e
                })
            } catch (e) {
                throw ii(mn, "Error in the logout flow.", "OS-CLRT-40100", e), e
            }
        })),
        An = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                callbackUrl: i = "",
                redirectUrlParams: s,
                redirectUri: a = bn(s),
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.External)),
                actionName: l = "getExternalLogoutUrl"
            } = void 0 === t ? {} : t;
            try {
                if (ti(mn, "Retrieving the external logout url."), !o) throw Fn(l);
                const e = yield a;
                return yield $n(l, o).getLogoutUrl({
                    redirectUri: e,
                    callbackUrl: i
                })
            } catch (e) {
                throw ii(mn, "Error retrieving the external logout url.", "OS-CLRT-40100", e), e
            }
        })),
        Nn = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                auth: n = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance())
            } = void 0 === t ? {} : t;
            try {
                if (ti(mn, "Refresh flow started."), !n) throw Fn("refreshTokens");
                yield n.refreshTokens()
            } catch (e) {
                throw ii(mn, "Error in the refresh flow.", "OS-CLRT-40103", e), e
            }
        })),
        Sn = t => {
            var r, n, {
                auth: i = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance())
            } = void 0 === t ? {} : t;
            return null !== (n = null == i ? void 0 : i.getUserId()) && void 0 !== n ? n : ""
        },
        Dn = t => {
            var r, n, {
                auth: i = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance())
            } = void 0 === t ? {} : t;
            return null !== (n = null == i ? void 0 : i.isAuthenticated()) && void 0 !== n && n
        },
        Rn = t => {
            var r, {
                auth: i = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: s = "getPasswordComplexityPolicy"
            } = void 0 === t ? {} : t;
            try {
                if (!i) throw Fn(s);
                return Pn(s, i).getPasswordComplexityPolicy()
            } catch (e) {
                throw ii(mn, "Error getting the password complexity policy", "OS-CLRT-40100", e), e
            }
        },
        Cn = t => {
            var r, {
                password: i,
                auth: s = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: a = "validatePasswordComplexity"
            } = t;
            try {
                if (!s) throw Fn("validatePasswordComplexity");
                return Pn(a, s).validatePasswordComplexityPolicy(i)
            } catch (e) {
                throw ii(mn, "Error validating the password complexity", "OS-CLRT-40100", e), e
            }
        },
        xn = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                resetToken: s,
                newPassword: a,
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: l = "finishResetPassword"
            } = t;
            try {
                if (!o) throw Fn(l);
                return yield Pn(l, o).finishResetPassword({
                    username: i,
                    resetToken: s,
                    newPassword: a
                })
            } catch (e) {
                throw ii(mn, "Error finishing reset password", "OS-CLRT-40100", e), e
            }
        })),
        Ln = t => {
            var r, {
                auth: n = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance()),
                actionName: i = "isExternalUser"
            } = void 0 === t ? {} : t;
            try {
                if (!n) throw Fn(i);
                return n.isExternalUser()
            } catch (e) {
                throw ii(mn, "Error determining if user is external", "OS-CLRT-40100", e), e
            }
        },
        On = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                password: s,
                temporaryPassword: a,
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: l = "finishUserRegistration"
            } = t;
            try {
                if (!o) throw Fn(l);
                return yield Pn(l, o).confirmRegistration({
                    username: i,
                    password: s,
                    code: a
                })
            } catch (e) {
                throw ii(mn, "Error completing user registration", "OS-CLRT-40100", e), e
            }
        })),
        _n = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                oldPassword: s,
                newPassword: a,
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: l = "changePassword"
            } = t;
            try {
                if (!o) throw Fn("changePassword");
                return yield Pn(l, o).changePassword({
                    username: i,
                    oldPassword: s,
                    newPassword: a
                })
            } catch (e) {
                throw ii(mn, "Error changing password", "OS-CLRT-40100", e), e
            }
        })),
        Mn = t => a(void 0, void 0, void 0, (function*() {
            var r, {
                auth: n = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance()),
                actionName: i = "getUserProfile"
            } = void 0 === t ? {} : t;
            try {
                if (!n) throw Fn(i);
                return yield n.getUserInfo()
            } catch (e) {
                throw ii(mn, "Error getting user profile", "OS-CLRT-40100", e), e
            }
        })),
        Un = t => {
            var r, n, {
                url: i,
                auth: s = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance()),
                actionName: a = "isAuthEndpoint"
            } = t;
            try {
                return null !== (n = null == s ? void 0 : s.isAuthEndpoint(i)) && void 0 !== n && n
            } catch (e) {
                throw ii(mn, "Error checking if a url corresponds to an auth endpoint", "OS-CLRT-40100", e), e
            }
        },
        Fn = e => {
            const r = `Error '${e}': User is not authenticated.`,
                n = new Error(r);
            return ii(mn, r, "OS-CLRT-40100", n, t.Visibility.External), n
        },
        $n = (e, r, n) => {
            if (!(e => void 0 !== e.resumeLogin)(r)) {
                const r = `Error '${e}': only supported for external authentication. ${n}`,
                    i = new Error(r);
                throw ii(mn, r, "OS-CLRT-40100", i, t.Visibility.External), i
            }
            return r
        },
        Pn = (e, r, n) => {
            if (!(e => void 0 !== e.finishResetPassword)(r)) {
                const r = `Error '${e}': only supported for builtin authentication. ${n}`,
                    i = new Error(r);
                throw ii(mn, r, "OS-CLRT-40100", i, t.Visibility.External), i
            }
            return r
        };
    var Vn = Object.freeze({
        __proto__: null,
        LOGIN_REDIRECT_PATH: pn,
        LOGOUT_REDIRECT_PATH: fn,
        getExternalLoginUrl: Tn,
        externalLogin: wn,
        builtinLogin: En,
        resumeLogin: t => a(void 0, void 0, void 0, (function*() {
            var r, {
                url: i,
                redirectUrlParams: s,
                redirectUri: a = yn(s),
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.External)),
                actionName: l = "resumeLogin"
            } = t;
            try {
                if (ti(mn, "Login flow resumed."), !o) throw Fn(l);
                const e = yield a;
                return yield $n(l, o).resumeLogin({
                    url: i,
                    redirectUri: e
                })
            } catch (e) {
                throw ii(mn, "Error while resuming login.", "OS-CLRT-40100", e), new We.InvalidLoginException("Login Failed", Ye(e))
            }
        })),
        logout: In,
        getExternalLogoutUrl: An,
        resumeLogout: t => a(void 0, void 0, void 0, (function*() {
            var r, {
                url: i,
                auth: s = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.External)),
                actionName: a = "resumeLogout"
            } = t;
            try {
                if (ti(mn, "Logout flow resumed."), !s) throw Fn("resumeLogout");
                return yield $n(a, s).resumeLogout({
                    url: i
                })
            } catch (e) {
                throw ii(mn, "Error while resuming logout.", "OS-CLRT-40100", e), new We.InvalidLoginException("Logout Failed", Ye(e))
            }
        })),
        refreshTokens: Nn,
        getUserId: Sn,
        isAuthenticated: Dn,
        getPasswordComplexityPolicy: Rn,
        validatePasswordComplexity: Cn,
        resetPassword: t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                resetToken: s,
                newPassword: a,
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: l = "resetPassword"
            } = t;
            try {
                if (!o) throw Fn(l);
                return yield Pn(l, o).resetPassword({
                    username: i,
                    resetToken: s,
                    newPassword: a
                })
            } catch (e) {
                throw ii(mn, "Error resetting password", "OS-CLRT-40100", e), e
            }
        })),
        finishResetPassword: xn,
        isExternalUser: Ln,
        finishUserRegistration: On,
        sendResetPasswordEmail: t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                auth: s = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: a = "sendResetPasswordEmail"
            } = t;
            try {
                if (!s) throw Fn(a);
                return yield Pn(a, s).sendResetPasswordEmail({
                    username: i
                })
            } catch (e) {
                throw ii(mn, "Error sending reset password email", "OS-CLRT-40100", e), e
            }
        })),
        changePassword: _n,
        updateUser: t => a(void 0, void 0, void 0, (function*() {
            var r, {
                username: i,
                name: s,
                pictureUrl: a,
                auth: o = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance(n.AuthType.Builtin)),
                actionName: l = "updateUser"
            } = t;
            try {
                if (!o) throw Fn(l);
                return yield Pn(l, o).updateUser({
                    username: i,
                    name: s,
                    pictureUrl: a
                })
            } catch (e) {
                throw ii(mn, "Error updating user", "OS-CLRT-40100", e), e
            }
        })),
        getUserProfile: Mn,
        isAuthEndpoint: Un
    });
    const Bn = (e = navigator) => {
            var t;
            return null !== (t = null == e ? void 0 : e.userAgent) && void 0 !== t ? t : ""
        },
        kn = (e = window, t = globalThis) => null != e ? e : t;

    function zn(e = kn) {
        var t;
        const r = e();
        return (null == r ? void 0 : r.cordova) && (null === (t = null == r ? void 0 : r.navigator) || void 0 === t ? void 0 : t.connection) ? "none" !== r.navigator.connection.type : r.navigator.onLine
    }

    function Hn(e, t = window) {
        t.addEventListener("online", e)
    }
    var jn;
    e.SettingsNames = void 0, (jn = e.SettingsNames || (e.SettingsNames = {})).AuthNConfigs = "AuthNConfigs", jn.ForceXhrCommunication = "ForceXhrCommunication", jn.CanDisableAutoUpgrade = "CanDisableAutoUpgrade", jn.LogLevel = "LogLevel", jn.EnvironmentKey = "EnvironmentKey", jn.TenantID = "TenantID", jn.LoggerApiKey = "LoggerApiKey", jn.LoggingTagID = "LoggingTagID", jn.LoggerSchedulerTimeInterval = "LoggerSchedulerTimeInterval", jn.EnableOpenTelemetryTraces = "EnableOpenTelemetryTraces", jn.EnableSpanAggregation = "EnableSpanAggregation", jn.HealthCheckInterval = "HealthCheckInterval";
    const qn = {
            HealthCheckInterval: "1800",
            LogLevel: "Information"
        },
        Gn = "os_default_id",
        Wn = "DEV_";

    function Kn(e, t) {
        const r = function(e) {
            return Object.entries(e).reduce(((e, [t, r]) => (t.startsWith(Wn) && "string" == typeof r && (e[t.replace(Wn, "")] = r), e)), {})
        }(t);
        return Object.assign(Object.assign({}, e), r)
    }
    var Jn;
    const Yn = "SettingsManager",
        Xn = {
            Debug: t.LogType.Debug,
            Information: t.LogType.Info,
            Warning: t.LogType.Warning,
            Error: t.LogType.Error
        };
    class Qn {
        constructor({
            getBasePath: t,
            httpClient: r = Qt.resolve(e.ServiceNames.UnauthenticatedHttpClient),
            getAppKey: n = S,
            initialSettings: i = qn,
            settingsHash: s = "",
            overrideStorage: a = sessionStorage,
            cacheName: o = `${n()}-clientsettings`,
            cacheStorage: u = localStorage,
            onSettingsUpdated: c
        } = {}) {
            Jn.set(this, void 0), this.getBasePath = null != t ? t : () => ne(), this.httpClient = r, this.settingsValue = Kn(i, a), this.settingsHash = s, this.overrideStorage = a, this.cacheName = o, this.cacheStorage = u, l(this, Jn, c, "f")
        }
        update(e) {
            return a(this, void 0, void 0, (function*() {
                var t, r;
                try {
                    if (!e || this.settingsHash !== e) {
                        const e = yield this.httpClient.get({
                            url: "/moduleservices/clientsettingsinfo",
                            baseURL: null === (t = this.getBasePath) || void 0 === t ? void 0 : t.call(this)
                        });
                        if (e) {
                            const {
                                clientSettingsHash: t,
                                clientSettings: n
                            } = e;
                            this.settingsHash = t;
                            const i = Kn(n, this.overrideStorage);
                            this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), i), this.cacheSettings(n), null === (r = o(this, Jn, "f")) || void 0 === r || r.call(this, this)
                        } else this.fetchCachedSettings()
                    }
                } catch (e) {
                    ii(Yn, `Error retrieving settings from endpoint: ${e.message}`, "OS-CLRT-61001"), this.fetchCachedSettings()
                }
            }))
        }
        settingExists(e) {
            return Object.keys(this.settingsValue).includes(e)
        }
        cacheSettings(e) {
            this.cacheStorage.setItem(this.cacheName, JSON.stringify(e))
        }
        fetchCachedSettings() {
            try {
                const e = this.cacheStorage.getItem(this.cacheName);
                if (e) {
                    ti(Yn, "Loading client settings from cache");
                    const t = Kn(JSON.parse(e), this.overrideStorage);
                    this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), t)
                } else ni(Yn, "No settings stored in cache, keeping previous values")
            } catch (e) {
                ii(Yn, "Error retrieving settings from cache, keeping previous values", "OS-CLRT-61000", e)
            }
        }
        readString(e) {
            var t;
            return this.settingExists(e) ? null !== (t = this.settingsValue[e]) && void 0 !== t ? t : "" : (ti(Yn, `Value for setting ${e} was not found.`), "")
        }
        readNumber(e) {
            var t;
            return this.settingExists(e) ? null !== (t = Number(this.settingsValue[e])) && void 0 !== t ? t : 0 : (ti(Yn, `Value for setting ${e} was not found.`), 0)
        }
        readBool(e) {
            var t, r;
            return this.settingExists(e) ? null !== (r = "true" === (null === (t = this.settingsValue[e]) || void 0 === t ? void 0 : t.toLowerCase())) && void 0 !== r && r : (ti(Yn, `Value for setting ${e} was not found.`), false)
        }
        readLogLevel() {
            const e = this.settingsValue.LogLevel,
                r = Xn[e];
            return null != r ? r : t.LogType.Info
        }
    }
    Jn = new WeakMap;
    const Zn = (...r) => a(void 0, [...r], void 0, (function*({
            isRunningOnNative: r = ir(),
            basePath: n = ne,
            buildServiceVersion: i = ee,
            getUserId: s = Sn,
            getLibVersion: a = Ie,
            getHttpScheme: o = zt,
            getUserAgent: l = Bn,
            getCurrentUrl: u = kt,
            getNativeLogger: c = gr,
            getDatabaseSuffix: d = S,
            isOnlineMethod: h = zn,
            httpClient: g = Qt.resolve(e.ServiceNames.LoggerHttpClient)
        } = {}) {
            try {
                const m = Object.assign(Object.assign({}, hi(s, a, i)), {
                        "http.scheme": o,
                        "http.url": u,
                        "http.user_agent": l
                    }),
                    p = new t.InstrumentationFactory({
                        databaseNameSuffix: d(),
                        isOnline: h,
                        baseLogAttributes: m,
                        baseSpanAttributes: m,
                        staticSpanAttributes: ["http.scheme", "http.user_agent", "outsystems.client.runtime.core.version", "outsystems.client.runtime.widgets.version", "outsystems.client.runtime.reactview.version", "outsystems.compiler.version"]
                    });
                Qt.register(e.ServiceNames.InstrumentationFactory, (() => p)), yield p.init();
                const f = Xn[qn.LogLevel];
                if (r) {
                    const e = yield c();
                    e && p.useNativeLoggerTransport({
                        plugin: e,
                        logTypeBaseline: f
                    })
                } else p.useOpenTelemetryLoggerTransport({
                    resourceAttributes: {},
                    logTypeBaseline: f,
                    collectorBaseUrl: n(),
                    tagId: "",
                    httpClient: g,
                    formatVersion: "v2"
                });
                p.useConsoleLoggerTransport(f)
            } catch (e) {
                console.error("Error while initializing the logger.", e)
            }
        })),
        ei = t => a(void 0, [t], void 0, (function*({
            version: t,
            getCurrentScreenName: n = (() => ""),
            applicationName: i = D,
            applicationKey: s = S,
            clientRuntimeVersion: a = te,
            basePath: o = ne,
            getAppVersionMethod: l = se,
            isWebApplication: u = Q,
            usePwaServiceWorkerTracer: c = r.FeaturesManager.isEnabled(r.FeatureKeys.ServiceWorkerTraces),
            serviceWorkerContainer: d = navigator.serviceWorker,
            settingsManager: h = Qt.resolve(e.ServiceNames.SettingsManager),
            instrumentationFactory: g = Qt.resolve(e.ServiceNames.InstrumentationFactory),
            httpClient: m = Qt.resolve(e.ServiceNames.LoggerHttpClient)
        }) {
            try {
                g || (yield Zn(), g = Qt.resolve(e.ServiceNames.InstrumentationFactory)), g.setAggregateSpansStatus(null == h ? void 0 : h.readBool("EnableSpanAggregation")), g.setLogLevel(null == h ? void 0 : h.readLogLevel());
                const p = (null == h ? void 0 : h.readString("LoggingTagID")) || (null == h ? void 0 : h.readString("LoggerApiKey"));
                g.setTagId(p), g.getTracer().addBaseSpanAttributes({
                    "outsystems.runtime.screen": n
                });
                const f = r.FeaturesManager.isEnabled(r.FeatureKeys.EnableOTLV2TraceFormat) ? "v2" : "v1",
                    v = {
                        "service.name": "ClientRuntime",
                        "service.version": a(),
                        "outsystems.app.name": i(),
                        "outsystems.app.versiontoken": t,
                        "outsystems.app.key": s(),
                        "outsystems.env.key": null == h ? void 0 : h.readString("EnvironmentKey"),
                        "outsystems.tenant.key": null == h ? void 0 : h.readString("TenantID"),
                        "outsystems.app.version": l()
                    };
                g.setResourceAttributes(v), u() && (null == h ? void 0 : h.readBool("EnableOpenTelemetryTraces")) && (c && void 0 !== d ? g.useServiceWorkerTracerTransport({
                    resourceAttributes: v,
                    collectorBaseUrl: o(),
                    tagId: p,
                    enabled: !0,
                    aggregateSpans: null == h ? void 0 : h.readBool("EnableSpanAggregation"),
                    formatVersion: f
                }) : g.useOpenTelemetryTracerTransport({
                    resourceAttributes: v,
                    collectorBaseUrl: o(),
                    tagId: p,
                    enabled: !0,
                    httpClient: m,
                    formatVersion: f
                }));
                const y = null == h ? void 0 : h.readNumber("LoggerSchedulerTimeInterval");
                y > 0 && li(y, g)
            } catch (e) {
                console.error("Error while updating the logger configurations.", e)
            }
        })),
        ti = (t, r, n, i, ...s) => a(void 0, [t, r, n, i, ...s], void 0, (function*(t, r, n, i, s = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
            const a = gi(t),
                o = mi(r);
            si(s, null == s ? void 0 : s.logDebug, null != a ? a : "", null != o ? o : "") || (yield null == s ? void 0 : s.logDebug({
                category: a,
                message: mi(r),
                visibility: n,
                attributes: i
            }))
        })),
        ri = (t, r, n, i, ...s) => a(void 0, [t, r, n, i, ...s], void 0, (function*(t, r, n, i, s = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
            si(s, null == s ? void 0 : s.logInfo, t, r) || (yield null == s ? void 0 : s.logInfo({
                category: t,
                message: r,
                visibility: n,
                attributes: i
            }))
        })),
        ni = (t, r, n, i, ...s) => a(void 0, [t, r, n, i, ...s], void 0, (function*(t, r, n, i, s = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
            si(s, null == s ? void 0 : s.logWarning, t, r) || (yield null == s ? void 0 : s.logWarning({
                category: t,
                message: r,
                visibility: n,
                attributes: i
            }))
        })),
        ii = (r, n, i, s, o, l, ...u) => a(void 0, [r, n, i, s, o, l, ...u], void 0, (function*(r, n, i, s, a, o, l = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
            var u;
            const {
                error: c,
                message: d
            } = pi(n, s);
            if (!si(l, null == l ? void 0 : l.logError, r, null != d ? d : "")) {
                const e = ("OS-CLRT-00000" === i || null == i) && null !== (u = c.errorCode) && void 0 !== u ? u : i;
                r = null != r ? r : c.category, Ke(c, We.UserException) && (a = t.Visibility.Client), yield null == l ? void 0 : l.logError({
                    category: r,
                    message: d,
                    error: c,
                    errorCode: e,
                    visibility: a,
                    attributes: o
                })
            }
        })),
        si = (e, t, n, i) => (!e && r.FeaturesManager.isEnabled(r.FeatureKeys.NoInstrumentationFactoryLogs) ? console.warn(`No instrumentation factory: ${n} - ${i}`) : !t && r.FeaturesManager.isEnabled(r.FeatureKeys.NoInstrumentationFactoryLogs) && console.warn(`Factory function not defined: ${n} - ${i}`), !e || !t),
        ai = (...t) => a(void 0, [...t], void 0, (function*(t = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
            yield null == t ? void 0 : t.flushInstrumentationData()
        })),
        oi = (t, r = Qt.resolve(e.ServiceNames.InstrumentationFactory)) => {
            null == r || r.setLogLevel(t)
        },
        li = (t, r = Qt.resolve(e.ServiceNames.InstrumentationFactory)) => {
            null == r || r.setSchedulerTimerInterval(t)
        };

    function ui(t, r, n, i, s, a = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
        return a ? a.startActiveSpan(t, r, n, i, s) : r(void 0)
    }

    function ci(r = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
        const n = null == r ? void 0 : r.getActiveSpan();
        null == n || n.setAttribute(t.KnownAttributes.IsNonAggregable, "true")
    }

    function di(t, r, n, i, s = Qt.resolve(e.ServiceNames.InstrumentationFactory)) {
        return null == s ? void 0 : s.startSpan(t, r, n, i)
    }
    const hi = (e, t, r) => ({
            "enduser.id": e,
            "outsystems.client.runtime.core.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-core"
                })) && void 0 !== e ? e : ""
            },
            "outsystems.client.runtime.widgets.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-widgets"
                })) && void 0 !== e ? e : ""
            },
            "outsystems.client.runtime.reactview.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-view-framework-react"
                })) && void 0 !== e ? e : ""
            },
            "outsystems.compiler.version": () => {
                var e;
                return null !== (e = r()) && void 0 !== e ? e : ""
            }
        }),
        gi = e => {
            if (e) {
                if ("string" == typeof e) return e;
                {
                    const t = e.constructor.name;
                    return "Function" === t ? e.name : t
                }
            }
        },
        mi = e => {
            if (e) return "string" == typeof e ? e : e()
        },
        pi = (e, t) => {
            const r = null != t ? t : "string" == typeof e ? new Error(e) : e;
            let n = t && "string" == typeof e ? e : void 0;
            return r.message === n && (n = void 0), {
                error: r,
                message: n
            }
        },
        fi = ({
            category: r,
            errorCode: n,
            clientMessage: i,
            internalMessage: s,
            instrumentationFactory: a = Qt.resolve(e.ServiceNames.InstrumentationFactory),
            errorFn: o = ii,
            errorObj: l,
            attributes: u
        }) => Promise.all([ii(r, i, n, l, t.Visibility.Client, u, a), ii(r, s, n, void 0, t.Visibility.Internal, u, a)]);
    var vi = Object.freeze({
        __proto__: null,
        registerInstrumentationFactory: Zn,
        updateInstrumentationFactory: ei,
        debug: ti,
        log: ri,
        warning: ni,
        error: ii,
        flush: ai,
        setLogLevel: oi,
        setSchedulerTimerInterval: li,
        startActiveSpan: ui,
        setActiveSpanAsNonAggregable: ci,
        startSpan: di,
        clientError: fi
    });
    class yi {
        constructor(e) {
            this.callback = e
        }
    }
    class bi extends yi {
        constructor(e) {
            super(e), this.callback = e
        }
    }
    class Ti extends yi {
        constructor(e) {
            super(e), this.callback = e
        }
    }
    const wi = "TxExecutor";
    class Ei {
        constructor(e, t = !0) {
            this.tx = e, this.allowTraces = t, this.chain = [], this.pendingResult = null, this.hasPendingResult = !1, this.pendingError = null, this.hasPendingError = !1, this.parent = null
        }
        cloneForNext() {
            const e = new Ei(this.tx, this.allowTraces);
            return e.parent = this, e
        }
        andThen(e) {
            return this.hasPendingError || (this.chain.push(new bi(e)), this.triggerPendingResults()), this
        }
        withoutTraces(e) {
            return this.andThen(((t, r) => (t.allowTraces = !1, e(t, r))))
        }
        andThenAll(e) {
            return this.andThen(((t, r) => {
                const n = e(r);
                let i = t.feed(void 0);
                if (n)
                    for (let e = 0; e < n.length; e++) i = i.andThen(n[e]);
                return i.andThen((() => {}))
            }))
        }
        extractScalar(e) {
            const t = Object.keys(e);
            if (1 === t.length) {
                return e[t[0]]
            }
            throw new We.DataBaseException("", `Invalid use of 'extractScalar': the row should have a single column, but found '${t.join("', '")}'`)
        }
        executeScalar(e, t) {
            return this.executeQueryRaw(e, t).andThen(((e, t) => 0 === (null == t ? void 0 : t.rows.length) ? void 0 : this.extractScalar(null == t ? void 0 : t.rows.item(0))))
        }
        executeQuery(e, t, r) {
            return this.executeQueryRaw(e, r).andThen(((e, r) => {
                const n = new Array(r.rows.length);
                for (let e = 0; e < r.rows.length; e++) {
                    const i = r.rows.item(e);
                    n[e] = t(i)
                }
                return n
            }))
        }
        executeNonQuery(e, t) {
            return this.executeQueryRaw(e, t).andThen(((e, t) => {}))
        }
        executeQueryRaw(e, t) {
            const r = Ei.queryCount++,
                n = null != t ? t : [];
            return this.traceQuery(r, e, n), this.tx.executeSql(e, t, ((e, t) => {
                try {
                    this.continueWithNext(t)
                } catch (t) {
                    this.abortExplicitly(e, t)
                }
            }), ((e, t) => (ni(wi, `SQL command #${r} failed with error ${t.message}`), this.abort(t)))), this
        }
        feed(e) {
            return this.hasPendingResult = !0, this.pendingResult = e, this
        }
        onError(e) {
            return this.chain.push(new Ti(e)), this.triggerPendingError(), this
        }
        nextCallback(e) {
            for (let t = 0; t < this.chain.length; t++)
                if (e(this.chain[t])) {
                    const e = this.chain[t].callback;
                    return this.chain = this.chain.slice(t + 1, this.chain.length), e
                } return null
        }
        nextErrorCallback() {
            return this.nextCallback((e => e instanceof Ti))
        }
        hasErrorCallback() {
            return this.chain.some((e => e instanceof Ti))
        }
        nextSuccessCallback() {
            return this.nextCallback((e => e instanceof bi))
        }
        abort(e) {
            const t = this.nextErrorCallback();
            if (t) {
                this.pendingError = null, this.hasPendingError = !1;
                try {
                    let r = !1;
                    const n = t(e, (() => {
                        r = !0
                    }));
                    return r ? this.chain = [] : this.continueWithNext(n), r
                } catch (e) {
                    if (this.hasErrorCallback()) return this.abort(e);
                    if (this.parent) return this.parent.abort(e);
                    throw e
                }
            } else this.pendingError = e, this.hasPendingError = !0;
            return !this.parent || this.parent.abort(e)
        }
        abortExplicitly(e, t) {
            this.abort(t) && e.executeSql("ABORT_TRANSACTION", void 0, (() => {}), (() => !0))
        }
        continueWithNext(e) {
            if (this.hasPendingResult = !1, e instanceof Ei) e.andThen(((e, t) => {
                this.continueWithNext(t)
            }));
            else if (e instanceof Array && 0 !== e.length && e[0] instanceof Ei) {
                let t = 0;
                const r = () => {
                    t < e.length ? (e[t].andThen(r), t++) : this.continueWithNext(e)
                };
                r()
            } else {
                if (this.chain.length > 0) {
                    const t = this.nextSuccessCallback();
                    if (t) return void this.continueWithNext(this.tryNextItem(t, this.cloneForNext(), e))
                }
                this.hasPendingResult = !0, this.pendingResult = e
            }
        }
        tryNextItem(e, t, r) {
            try {
                return e(t, r)
            } catch (e) {
                this.abortExplicitly(this.tx, e)
            }
        }
        triggerPendingResults() {
            this.hasPendingResult && (this.hasPendingResult = !1, this.continueWithNext(this.pendingResult))
        }
        triggerPendingError() {
            this.hasPendingError && (this.hasPendingError = !1, this.abort(this.pendingError))
        }
        traceQuery(e, r, n) {
            this.allowTraces && ti(wi, (() => {
                const t = (n || []).map((e => String(e).substring(0, 80)));
                return `Executing SQL command #${e}: ${r} with arguments ${t}`
            }), t.Visibility.Client)
        }
        static
        for (e) {
            return new Ei(e)
        }
    }
    Ei.queryCount = 0;
    const Ii = "SqlDatabase";
    class Ai {
        constructor(e, t) {
            this.dbName = e, this.db = t, this.txCount = 0, this.setDispose()
        }
        setDispose() {
            const e = this.db;
            window && e && e.close && window.addEventListener("unload", (() => {
                this.debug(`Closing database ${this.name}`), e.close((() => this.debug(`Database ${this.name} closed successfully`)), (e => ii("SqlDatabase", `Database ${this.name} failed to close`, "OS-CLRT-60400", e)))
            }), !1)
        }
        get name() {
            return this.dbName
        }
        get isMock() {
            return !1
        }
        executeTransaction(e, t = !0) {
            return this.innerExecuteTransaction(e, !1, t)
        }
        executeReadTransaction(e, t = !0) {
            return this.innerExecuteTransaction(e, !0, t)
        }
        innerExecuteTransaction(e, t, r) {
            const n = t ? "READ" : "WRITE",
                i = t ? this.db.readTransaction : this.db.transaction,
                s = ++this.txCount;
            return lt(((t, a) => {
                let o, l;
                this.debug(`Opening local storage ${n} transaction #${s} on database ${this.name}`, r), i.call(this.db, (t => {
                    this.debug(`Executing local storage ${n} transaction #${s} on database ${this.name}`, r);
                    let i = Ei.for(t).feed(void 0);
                    return i = r ? i.andThen(e) : i.withoutTraces(e), i.andThen(((e, t) => o = t)).onError(((e, t) => {
                        l = e, t()
                    }))
                }), (e => {
                    l = l || e;
                    const t = (null == l ? void 0 : l.message) ? l : new Error(l),
                        i = `Rolled back local storage ${n} transaction #${s} on database ${this.name}: ${t.message}`;
                    return r && ni(Ii, i), a(new We.DataBaseException("", t.message.toString())), !0
                }), (() => {
                    this.debug(`Committed local storage ${n} transaction #${s} on database ${this.name}`, r), t(o)
                }))
            }))
        }
        testConnection() {
            let e = 0;
            return ri(Ii, "Starting to test on database connections. Performing #5 test queries.", t.Visibility.Internal), Promise.all(Array.apply(null, {
                length: 5
            }).map(((t, r) => new Promise((t => {
                this.executeTransaction((t => t.executeQueryRaw("SELECT 1").onError(((t, r) => {
                    Si(t), e++
                })))).catch((t => {
                    Si(t), e++
                })).then((() => {
                    t()
                }))
            }))))).then((() => {
                ri(Ii, `Finished tests on database connections. #${5-e} out of #5 successfull queries.`, t.Visibility.Internal)
            }))
        }
        debug(e, t = !0) {
            t && ti(Ii, e)
        }
    }
    class Ni {
        constructor(e) {
            this.dbName = e
        }
        get name() {
            return this.dbName
        }
        get isMock() {
            return !0
        }
        executeTransaction(e, t = !0) {
            return ut()
        }
        executeReadTransaction(e, t = !0) {
            return ut()
        }
        testConnection() {
            return Promise.resolve()
        }
    }

    function Si(e) {
        ii("Database", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407"), "undefined" != typeof SQLError && e instanceof SQLError ? ii("Database", `SQLError ${e.code}: ${e.message}`, "OS-CLRT-60407") : ii("Database", "Error while executing a transaction", "OS-CLRT-60400", e)
    }
    const Di = "Could not open database",
        Ri = "SqlDbProviderClass";
    const Ci = new class {
        constructor() {
            this.dbCache = {}
        }
        debug(e) {
            ti(Ri, e)
        }
        asSafeDbName(e) {
            return e || ""
        }
        openDb(e) {
            return e = this.asSafeDbName(e), lt(((t, r) => {
                this.dbCache[e] ? t(this.dbCache[e]) : cr().then((() => {
                    if ("undefined" == typeof window) return r(new We.SystemException("Database is only available in the browser/web view"));
                    const n = window;
                    if (ir())
                        if (n.sqlitePlugin) {
                            this.debug(`Opening database '${e}'`);
                            try {
                                n.sqlitePlugin.openDatabase({
                                    name: e,
                                    location: "default"
                                }, (n => {
                                    n ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Ai(e, n), t(this.dbCache[e])) : (ni(Ri, `Error opening database '${e}'`), r(new We.OpenDatabaseException(`${Di} '${e}'`)))
                                }), (t => {
                                    ni(Ri, `Error opening database '${e}' : ${t.message}`), r(new We.OpenDatabaseException(`${Di} '${e}': ${t.message.toString()}`))
                                }))
                            } catch (t) {
                                r(new We.OpenDatabaseException(`${Di} '${e}': ${t.message.toString()}`))
                            }
                        } else r(new We.OpenDatabaseException("No database driver available"));
                    else if (n.openDatabase) try {
                        this.debug(`Opening database '${e}'`);
                        const i = n.openDatabase(e, "1.0", e, 5242880);
                        i ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Ai(e, i), t(this.dbCache[e])) : (ni(Ri, `Error opening database '${e}'`), r(new We.OpenDatabaseException(`${Di} '${e}'`)))
                    } catch (t) {
                        r(new We.OpenDatabaseException(`${Di} '${e}': ${t.message.toString()}`))
                    } else {
                        const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            t = !!n.chrome,
                            i = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (e || t ? "" : ", or use Google Chrome or Safari web browsers") + ".";
                        alert(i), r(new We.SystemException(i))
                    }
                })).catch(r)
            }))
        }
        mockDb(e) {
            return ut(new Ni(e))
        }
    };
    var xi;
    ! function(e) {
        e[e.Full = 0] = "Full", e[e.Type = 1] = "Type", e[e.Length = 3] = "Length", e[e.Decimals = 5] = "Decimals"
    }(xi || (xi = {}));
    const Li = new class {
        tableExists(e, t) {
            return e.executeReadTransaction((e => e.executeScalar("SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = UPPER(?)", [t]).andThen(((e, t) => 0 !== t))))
        }
        columnExists(e, t, r) {
            return e.executeReadTransaction((e => e.executeScalar(`SELECT "${t}"."${r}" FROM "${t}" LIMIT 1`))).then((() => !0)).catch((() => !1))
        }
        dbTypeFromSchemaType(e) {
            switch ((e = e || "").toUpperCase()) {
                case "INTEGER":
                    return At.DBDataType.INTEGER;
                case "BIGINT":
                    return At.DBDataType.LONGINTEGER;
                case "REAL":
                    return At.DBDataType.DECIMAL;
                case "BOOLEAN":
                    return At.DBDataType.BOOLEAN;
                case "TEXT":
                    return At.DBDataType.TEXT;
                case "DATE":
                    return At.DBDataType.DATE;
                case "TIME":
                    return At.DBDataType.TIME;
                case "DATETIME":
                    return At.DBDataType.DATE_TIME;
                case "BLOB":
                    return At.DBDataType.BINARY_DATA;
                default:
                    return At.DBDataType.UNKNOWN
            }
        }
        pragmaToTableInfo(e, t, r) {
            return {
                tableName: e,
                idIsAutoNumber: (t = t || "").search(/INTEGER PRIMARY KEY AUTOINCREMENT/i) >= 0 ? At.AutoNumber.YesIfEmpty : At.AutoNumber.No,
                attributes: r.map((e => {
                    const t = Ft(e.type, "^([a-z]+)(\\(([0-9]+)(\\,([0-9]+))?\\))?$", !0).shift();
                    if (t) {
                        const r = this.dbTypeFromSchemaType(t.groups[1]);
                        return {
                            name: e.name,
                            columnName: e.name ? e.name.toUpperCase() : null,
                            type: r,
                            length: t.groups[3] ? parseInt(t.groups[3], 10) : void 0,
                            decimals: t.groups[5] ? parseInt(t.groups[5], 10) : void 0,
                            isEntityReference: "NULL" === e.dflt_value && this.isIdentifierUnderlyingType(r),
                            isPrimaryKey: 1 === e.pk
                        }
                    }
                }))
            }
        }
        isIdentifierUnderlyingType(e) {
            switch (e) {
                case At.DBDataType.INTEGER:
                case At.DBDataType.LONGINTEGER:
                case At.DBDataType.TEXT:
                    return !0;
                default:
                    return !1
            }
        }
        introspectTableInfo(e, t) {
            if (!ir()) return e.feed(null);
            let r;
            return e.executeScalar(`SELECT sql FROM sqlite_master WHERE type = 'table' AND name = '${t}'`).andThen(((e, t) => r = t)).andThen(((e, r) => e.executeQuery(`PRAGMA table_info('${t}')`, (e => e)))).andThen(((e, n) => this.pragmaToTableInfo(t, r, n)))
        }
    };
    /*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     */
    var Oi, _i, Mi = 9e15,
        Ui = 1e9,
        Fi = "0123456789abcdef",
        $i = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        Pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        Vi = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -Mi,
            maxE: Mi,
            crypto: !1
        },
        Bi = !0,
        ki = "[DecimalError] ",
        zi = ki + "Invalid argument: ",
        Hi = ki + "Precision limit exceeded",
        ji = ki + "crypto unavailable",
        qi = "[object Decimal]",
        Gi = Math.floor,
        Wi = Math.pow,
        Ki = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        Ji = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        Yi = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        Xi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Qi = 1e7,
        Zi = 7,
        es = $i.length - 1,
        ts = Pi.length - 1,
        rs = {
            toStringTag: qi
        };

    function ns(e) {
        var t, r, n, i = e.length - 1,
            s = "",
            a = e[0];
        if (i > 0) {
            for (s += a, t = 1; t < i; t++) n = e[t] + "", (r = Zi - n.length) && (s += ms(r)), s += n;
            a = e[t], (r = Zi - (n = a + "").length) && (s += ms(r))
        } else if (0 === a) return "0";
        for (; a % 10 == 0;) a /= 10;
        return s + a
    }

    function is(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(zi + e)
    }

    function ss(e, t, r, n) {
        var i, s, a, o;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return --t < 0 ? (t += Zi, i = 0) : (i = Math.ceil((t + 1) / Zi), t %= Zi), s = Wi(10, Zi - t), o = e[i] % s | 0, null == n ? t < 3 ? (0 == t ? o = o / 100 | 0 : 1 == t && (o = o / 10 | 0), a = r < 4 && 99999 == o || r > 3 && 49999 == o || 5e4 == o || 0 == o) : a = (r < 4 && o + 1 == s || r > 3 && o + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == Wi(10, t - 2) - 1 || (o == s / 2 || 0 == o) && 0 == (e[i + 1] / s / 100 | 0) : t < 4 ? (0 == t ? o = o / 1e3 | 0 : 1 == t ? o = o / 100 | 0 : 2 == t && (o = o / 10 | 0), a = (n || r < 4) && 9999 == o || !n && r > 3 && 4999 == o) : a = ((n || r < 4) && o + 1 == s || !n && r > 3 && o + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == Wi(10, t - 3) - 1, a
    }

    function as(e, t, r) {
        for (var n, i, s = [0], a = 0, o = e.length; a < o;) {
            for (i = s.length; i--;) s[i] *= t;
            for (s[0] += Fi.indexOf(e.charAt(a++)), n = 0; n < s.length; n++) s[n] > r - 1 && (void 0 === s[n + 1] && (s[n + 1] = 0), s[n + 1] += s[n] / r | 0, s[n] %= r)
        }
        return s.reverse()
    }
    rs.absoluteValue = rs.abs = function() {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), ls(e)
    }, rs.ceil = function() {
        return ls(new this.constructor(this), this.e + 1, 2)
    }, rs.clampedTo = rs.clamp = function(e, t) {
        var r = this,
            n = r.constructor;
        if (e = new n(e), t = new n(t), !e.s || !t.s) return new n(NaN);
        if (e.gt(t)) throw Error(zi + t);
        return r.cmp(e) < 0 ? e : r.cmp(t) > 0 ? t : new n(r)
    }, rs.comparedTo = rs.cmp = function(e) {
        var t, r, n, i, s = this,
            a = s.d,
            o = (e = new s.constructor(e)).d,
            l = s.s,
            u = e.s;
        if (!a || !o) return l && u ? l !== u ? l : a === o ? 0 : !a ^ l < 0 ? 1 : -1 : NaN;
        if (!a[0] || !o[0]) return a[0] ? l : o[0] ? -u : 0;
        if (l !== u) return l;
        if (s.e !== e.e) return s.e > e.e ^ l < 0 ? 1 : -1;
        for (t = 0, r = (n = a.length) < (i = o.length) ? n : i; t < r; ++t)
            if (a[t] !== o[t]) return a[t] > o[t] ^ l < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ l < 0 ? 1 : -1
    }, rs.cosine = rs.cos = function() {
        var e, t, r = this,
            n = r.constructor;
        return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + Zi, n.rounding = 1, r = function(e, t) {
            var r, n, i;
            if (t.isZero()) return t;
            n = t.d.length, n < 32 ? i = (1 / Is(4, r = Math.ceil(n / 3))).toString() : (r = 16, i = "2.3283064365386962890625e-10");
            e.precision += r, t = Es(e, 1, t.times(i), new e(1));
            for (var s = r; s--;) {
                var a = t.times(t);
                t = a.times(a).minus(a).times(8).plus(1)
            }
            return e.precision -= r, t
        }(n, As(n, r)), n.precision = e, n.rounding = t, ls(2 == _i || 3 == _i ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN)
    }, rs.cubeRoot = rs.cbrt = function() {
        var e, t, r, n, i, s, a, o, l, u, c = this,
            d = c.constructor;
        if (!c.isFinite() || c.isZero()) return new d(c);
        for (Bi = !1, (s = c.s * Wi(c.s * c, 1 / 3)) && Math.abs(s) != 1 / 0 ? n = new d(s.toString()) : (r = ns(c.d), (s = ((e = c.e) - r.length + 1) % 3) && (r += 1 == s || -2 == s ? "0" : "00"), s = Wi(r, 1 / 3), e = Gi((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (n = new d(r = s == 1 / 0 ? "5e" + e : (r = s.toExponential()).slice(0, r.indexOf("e") + 1) + e)).s = c.s), a = (e = d.precision) + 3;;)
            if (u = (l = (o = n).times(o).times(o)).plus(c), n = os(u.plus(c).times(o), u.plus(l), a + 2, 1), ns(o.d).slice(0, a) === (r = ns(n.d)).slice(0, a)) {
                if ("9999" != (r = r.slice(a - 3, a + 1)) && (i || "4999" != r)) {
                    +r && (+r.slice(1) || "5" != r.charAt(0)) || (ls(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
                    break
                }
                if (!i && (ls(o, e + 1, 0), o.times(o).times(o).eq(c))) {
                    n = o;
                    break
                }
                a += 4, i = 1
            } return Bi = !0, ls(n, e, d.rounding, t)
    }, rs.decimalPlaces = rs.dp = function() {
        var e, t = this.d,
            r = NaN;
        if (t) {
            if (r = ((e = t.length - 1) - Gi(this.e / Zi)) * Zi, e = t[e])
                for (; e % 10 == 0; e /= 10) r--;
            r < 0 && (r = 0)
        }
        return r
    }, rs.dividedBy = rs.div = function(e) {
        return os(this, new this.constructor(e))
    }, rs.dividedToIntegerBy = rs.divToInt = function(e) {
        var t = this.constructor;
        return ls(os(this, new t(e), 0, 1, 1), t.precision, t.rounding)
    }, rs.equals = rs.eq = function(e) {
        return 0 === this.cmp(e)
    }, rs.floor = function() {
        return ls(new this.constructor(this), this.e + 1, 3)
    }, rs.greaterThan = rs.gt = function(e) {
        return this.cmp(e) > 0
    }, rs.greaterThanOrEqualTo = rs.gte = function(e) {
        var t = this.cmp(e);
        return 1 == t || 0 === t
    }, rs.hyperbolicCosine = rs.cosh = function() {
        var e, t, r, n, i, s = this,
            a = s.constructor,
            o = new a(1);
        if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
        if (s.isZero()) return o;
        r = a.precision, n = a.rounding, a.precision = r + Math.max(s.e, s.sd()) + 4, a.rounding = 1, (i = s.d.length) < 32 ? t = (1 / Is(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), s = Es(a, 1, s.times(t), new a(1), !0);
        for (var l, u = e, c = new a(8); u--;) l = s.times(s), s = o.minus(l.times(c.minus(l.times(c))));
        return ls(s, a.precision = r, a.rounding = n, !0)
    }, rs.hyperbolicSine = rs.sinh = function() {
        var e, t, r, n, i = this,
            s = i.constructor;
        if (!i.isFinite() || i.isZero()) return new s(i);
        if (t = s.precision, r = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, (n = i.d.length) < 3) i = Es(s, 2, i, i, !0);
        else {
            e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e, i = Es(s, 2, i = i.times(1 / Is(5, e)), i, !0);
            for (var a, o = new s(5), l = new s(16), u = new s(20); e--;) a = i.times(i), i = i.times(o.plus(a.times(l.times(a).plus(u))))
        }
        return s.precision = t, s.rounding = r, ls(i, t, r, !0)
    }, rs.hyperbolicTangent = rs.tanh = function() {
        var e, t, r = this,
            n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, os(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s)
    }, rs.inverseCosine = rs.acos = function() {
        var e, t = this,
            r = t.constructor,
            n = t.abs().cmp(1),
            i = r.precision,
            s = r.rounding;
        return -1 !== n ? 0 === n ? t.isNeg() ? hs(r, i, s) : new r(0) : new r(NaN) : t.isZero() ? hs(r, i + 4, s).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = hs(r, i + 4, s).times(.5), r.precision = i, r.rounding = s, e.minus(t))
    }, rs.inverseHyperbolicCosine = rs.acosh = function() {
        var e, t, r = this,
            n = r.constructor;
        return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, Bi = !1, r = r.times(r).minus(1).sqrt().plus(r), Bi = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r)
    }, rs.inverseHyperbolicSine = rs.asinh = function() {
        var e, t, r = this,
            n = r.constructor;
        return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, Bi = !1, r = r.times(r).plus(1).sqrt().plus(r), Bi = !0, n.precision = e, n.rounding = t, r.ln())
    }, rs.inverseHyperbolicTangent = rs.atanh = function() {
        var e, t, r, n, i = this,
            s = i.constructor;
        return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ls(new s(i), e, t, !0) : (s.precision = r = n - i.e, i = os(i.plus(1), new s(1).minus(i), r + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(.5))) : new s(NaN)
    }, rs.inverseSine = rs.asin = function() {
        var e, t, r, n, i = this,
            s = i.constructor;
        return i.isZero() ? new s(i) : (t = i.abs().cmp(1), r = s.precision, n = s.rounding, -1 !== t ? 0 === t ? ((e = hs(s, r + 4, n).times(.5)).s = i.s, e) : new s(NaN) : (s.precision = r + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = r, s.rounding = n, i.times(2)))
    }, rs.inverseTangent = rs.atan = function() {
        var e, t, r, n, i, s, a, o, l, u = this,
            c = u.constructor,
            d = c.precision,
            h = c.rounding;
        if (u.isFinite()) {
            if (u.isZero()) return new c(u);
            if (u.abs().eq(1) && d + 4 <= ts) return (a = hs(c, d + 4, h).times(.25)).s = u.s, a
        } else {
            if (!u.s) return new c(NaN);
            if (d + 4 <= ts) return (a = hs(c, d + 4, h).times(.5)).s = u.s, a
        }
        for (c.precision = o = d + 10, c.rounding = 1, e = r = Math.min(28, o / Zi + 2 | 0); e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
        for (Bi = !1, t = Math.ceil(o / Zi), n = 1, l = u.times(u), a = new c(u), i = u; - 1 !== e;)
            if (i = i.times(l), s = a.minus(i.div(n += 2)), i = i.times(l), void 0 !== (a = s.plus(i.div(n += 2))).d[t])
                for (e = t; a.d[e] === s.d[e] && e--;);
        return r && (a = a.times(2 << r - 1)), Bi = !0, ls(a, c.precision = d, c.rounding = h, !0)
    }, rs.isFinite = function() {
        return !!this.d
    }, rs.isInteger = rs.isInt = function() {
        return !!this.d && Gi(this.e / Zi) > this.d.length - 2
    }, rs.isNaN = function() {
        return !this.s
    }, rs.isNegative = rs.isNeg = function() {
        return this.s < 0
    }, rs.isPositive = rs.isPos = function() {
        return this.s > 0
    }, rs.isZero = function() {
        return !!this.d && 0 === this.d[0]
    }, rs.lessThan = rs.lt = function(e) {
        return this.cmp(e) < 0
    }, rs.lessThanOrEqualTo = rs.lte = function(e) {
        return this.cmp(e) < 1
    }, rs.logarithm = rs.log = function(e) {
        var t, r, n, i, s, a, o, l, u = this,
            c = u.constructor,
            d = c.precision,
            h = c.rounding;
        if (null == e) e = new c(10), t = !0;
        else {
            if (r = (e = new c(e)).d, e.s < 0 || !r || !r[0] || e.eq(1)) return new c(NaN);
            t = e.eq(10)
        }
        if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new c(r && !r[0] ? -1 / 0 : 1 != u.s ? NaN : r ? 0 : 1 / 0);
        if (t)
            if (r.length > 1) s = !0;
            else {
                for (i = r[0]; i % 10 == 0;) i /= 10;
                s = 1 !== i
            } if (Bi = !1, a = bs(u, o = d + 5), n = t ? ds(c, o + 10) : bs(e, o), ss((l = os(a, n, o, 1)).d, i = d, h))
            do {
                if (a = bs(u, o += 10), n = t ? ds(c, o + 10) : bs(e, o), l = os(a, n, o, 1), !s) {
                    +ns(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = ls(l, d + 1, 0));
                    break
                }
            } while (ss(l.d, i += 10, h));
        return Bi = !0, ls(l, d, h)
    }, rs.minus = rs.sub = function(e) {
        var t, r, n, i, s, a, o, l, u, c, d, h, g = this,
            m = g.constructor;
        if (e = new m(e), !g.d || !e.d) return g.s && e.s ? g.d ? e.s = -e.s : e = new m(e.d || g.s !== e.s ? g : NaN) : e = new m(NaN), e;
        if (g.s != e.s) return e.s = -e.s, g.plus(e);
        if (u = g.d, h = e.d, o = m.precision, l = m.rounding, !u[0] || !h[0]) {
            if (h[0]) e.s = -e.s;
            else {
                if (!u[0]) return new m(3 === l ? -0 : 0);
                e = new m(g)
            }
            return Bi ? ls(e, o, l) : e
        }
        if (r = Gi(e.e / Zi), c = Gi(g.e / Zi), u = u.slice(), s = c - r) {
            for ((d = s < 0) ? (t = u, s = -s, a = h.length) : (t = h, r = c, a = u.length), s > (n = Math.max(Math.ceil(o / Zi), a) + 2) && (s = n, t.length = 1), t.reverse(), n = s; n--;) t.push(0);
            t.reverse()
        } else {
            for ((d = (n = u.length) < (a = h.length)) && (a = n), n = 0; n < a; n++)
                if (u[n] != h[n]) {
                    d = u[n] < h[n];
                    break
                } s = 0
        }
        for (d && (t = u, u = h, h = t, e.s = -e.s), a = u.length, n = h.length - a; n > 0; --n) u[a++] = 0;
        for (n = h.length; n > s;) {
            if (u[--n] < h[n]) {
                for (i = n; i && 0 === u[--i];) u[i] = Qi - 1;
                --u[i], u[n] += Qi
            }
            u[n] -= h[n]
        }
        for (; 0 === u[--a];) u.pop();
        for (; 0 === u[0]; u.shift()) --r;
        return u[0] ? (e.d = u, e.e = cs(u, r), Bi ? ls(e, o, l) : e) : new m(3 === l ? -0 : 0)
    }, rs.modulo = rs.mod = function(e) {
        var t, r = this,
            n = r.constructor;
        return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ls(new n(r), n.precision, n.rounding) : (Bi = !1, 9 == n.modulo ? (t = os(r, e.abs(), 0, 3, 1)).s *= e.s : t = os(r, e, 0, n.modulo, 1), t = t.times(e), Bi = !0, r.minus(t))
    }, rs.naturalExponential = rs.exp = function() {
        return ys(this)
    }, rs.naturalLogarithm = rs.ln = function() {
        return bs(this)
    }, rs.negated = rs.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, ls(e)
    }, rs.plus = rs.add = function(e) {
        var t, r, n, i, s, a, o, l, u, c, d = this,
            h = d.constructor;
        if (e = new h(e), !d.d || !e.d) return d.s && e.s ? d.d || (e = new h(e.d || d.s === e.s ? d : NaN)) : e = new h(NaN), e;
        if (d.s != e.s) return e.s = -e.s, d.minus(e);
        if (u = d.d, c = e.d, o = h.precision, l = h.rounding, !u[0] || !c[0]) return c[0] || (e = new h(d)), Bi ? ls(e, o, l) : e;
        if (s = Gi(d.e / Zi), n = Gi(e.e / Zi), u = u.slice(), i = s - n) {
            for (i < 0 ? (r = u, i = -i, a = c.length) : (r = c, n = s, a = u.length), i > (a = (s = Math.ceil(o / Zi)) > a ? s + 1 : a + 1) && (i = a, r.length = 1), r.reverse(); i--;) r.push(0);
            r.reverse()
        }
        for ((a = u.length) - (i = c.length) < 0 && (i = a, r = c, c = u, u = r), t = 0; i;) t = (u[--i] = u[i] + c[i] + t) / Qi | 0, u[i] %= Qi;
        for (t && (u.unshift(t), ++n), a = u.length; 0 == u[--a];) u.pop();
        return e.d = u, e.e = cs(u, n), Bi ? ls(e, o, l) : e
    }, rs.precision = rs.sd = function(e) {
        var t, r = this;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(zi + e);
        return r.d ? (t = gs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t
    }, rs.round = function() {
        var e = this,
            t = e.constructor;
        return ls(new t(e), e.e + 1, t.rounding)
    }, rs.sine = rs.sin = function() {
        var e, t, r = this,
            n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + Zi, n.rounding = 1, r = function(e, t) {
            var r, n = t.d.length;
            if (n < 3) return t.isZero() ? t : Es(e, 2, t, t);
            r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r, t = t.times(1 / Is(5, r)), t = Es(e, 2, t, t);
            for (var i, s = new e(5), a = new e(16), o = new e(20); r--;) i = t.times(t), t = t.times(s.plus(i.times(a.times(i).minus(o))));
            return t
        }(n, As(n, r)), n.precision = e, n.rounding = t, ls(_i > 2 ? r.neg() : r, e, t, !0)) : new n(NaN)
    }, rs.squareRoot = rs.sqrt = function() {
        var e, t, r, n, i, s, a = this,
            o = a.d,
            l = a.e,
            u = a.s,
            c = a.constructor;
        if (1 !== u || !o || !o[0]) return new c(!u || u < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
        for (Bi = !1, 0 == (u = Math.sqrt(+a)) || u == 1 / 0 ? (((t = ns(o)).length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = Gi((l + 1) / 2) - (l < 0 || l % 2), n = new c(t = u == 1 / 0 ? "5e" + l : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + l)) : n = new c(u.toString()), r = (l = c.precision) + 3;;)
            if (n = (s = n).plus(os(a, s, r + 2, 1)).times(.5), ns(s.d).slice(0, r) === (t = ns(n.d)).slice(0, r)) {
                if ("9999" != (t = t.slice(r - 3, r + 1)) && (i || "4999" != t)) {
                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (ls(n, l + 1, 1), e = !n.times(n).eq(a));
                    break
                }
                if (!i && (ls(s, l + 1, 0), s.times(s).eq(a))) {
                    n = s;
                    break
                }
                r += 4, i = 1
            } return Bi = !0, ls(n, l, c.rounding, e)
    }, rs.tangent = rs.tan = function() {
        var e, t, r = this,
            n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = os(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ls(2 == _i || 4 == _i ? r.neg() : r, e, t, !0)) : new n(NaN)
    }, rs.times = rs.mul = function(e) {
        var t, r, n, i, s, a, o, l, u, c = this,
            d = c.constructor,
            h = c.d,
            g = (e = new d(e)).d;
        if (e.s *= c.s, !(h && h[0] && g && g[0])) return new d(!e.s || h && !h[0] && !g || g && !g[0] && !h ? NaN : h && g ? 0 * e.s : e.s / 0);
        for (r = Gi(c.e / Zi) + Gi(e.e / Zi), (l = h.length) < (u = g.length) && (s = h, h = g, g = s, a = l, l = u, u = a), s = [], n = a = l + u; n--;) s.push(0);
        for (n = u; --n >= 0;) {
            for (t = 0, i = l + n; i > n;) o = s[i] + g[n] * h[i - n - 1] + t, s[i--] = o % Qi | 0, t = o / Qi | 0;
            s[i] = (s[i] + t) % Qi | 0
        }
        for (; !s[--a];) s.pop();
        return t ? ++r : s.shift(), e.d = s, e.e = cs(s, r), Bi ? ls(e, d.precision, d.rounding) : e
    }, rs.toBinary = function(e, t) {
        return Ns(this, 2, e, t)
    }, rs.toDecimalPlaces = rs.toDP = function(e, t) {
        var r = this,
            n = r.constructor;
        return r = new n(r), void 0 === e ? r : (is(e, 0, Ui), void 0 === t ? t = n.rounding : is(t, 0, 8), ls(r, e + r.e + 1, t))
    }, rs.toExponential = function(e, t) {
        var r, n = this,
            i = n.constructor;
        return void 0 === e ? r = us(n, !0) : (is(e, 0, Ui), void 0 === t ? t = i.rounding : is(t, 0, 8), r = us(n = ls(new i(n), e + 1, t), !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r
    }, rs.toFixed = function(e, t) {
        var r, n, i = this,
            s = i.constructor;
        return void 0 === e ? r = us(i) : (is(e, 0, Ui), void 0 === t ? t = s.rounding : is(t, 0, 8), r = us(n = ls(new s(i), e + i.e + 1, t), !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r
    }, rs.toFraction = function(e) {
        var t, r, n, i, s, a, o, l, u, c, d, h, g = this,
            m = g.d,
            p = g.constructor;
        if (!m) return new p(g);
        if (u = r = new p(1), n = l = new p(0), a = (s = (t = new p(n)).e = gs(m) - g.e - 1) % Zi, t.d[0] = Wi(10, a < 0 ? Zi + a : a), null == e) e = s > 0 ? t : u;
        else {
            if (!(o = new p(e)).isInt() || o.lt(u)) throw Error(zi + o);
            e = o.gt(t) ? s > 0 ? t : u : o
        }
        for (Bi = !1, o = new p(ns(m)), c = p.precision, p.precision = s = m.length * Zi * 2; d = os(o, t, 0, 1, 1), 1 != (i = r.plus(d.times(n))).cmp(e);) r = n, n = i, i = u, u = l.plus(d.times(i)), l = i, i = t, t = o.minus(d.times(i)), o = i;
        return i = os(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = g.s, h = os(u, n, s, 1).minus(g).abs().cmp(os(l, r, s, 1).minus(g).abs()) < 1 ? [u, n] : [l, r], p.precision = c, Bi = !0, h
    }, rs.toHexadecimal = rs.toHex = function(e, t) {
        return Ns(this, 16, e, t)
    }, rs.toNearest = function(e, t) {
        var r = this,
            n = r.constructor;
        if (r = new n(r), null == e) {
            if (!r.d) return r;
            e = new n(1), t = n.rounding
        } else {
            if (e = new n(e), void 0 === t ? t = n.rounding : is(t, 0, 8), !r.d) return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e
        }
        return e.d[0] ? (Bi = !1, r = os(r, e, 0, t, 1).times(e), Bi = !0, ls(r)) : (e.s = r.s, r = e), r
    }, rs.toNumber = function() {
        return +this
    }, rs.toOctal = function(e, t) {
        return Ns(this, 8, e, t)
    }, rs.toPower = rs.pow = function(e) {
        var t, r, n, i, s, a, o = this,
            l = o.constructor,
            u = +(e = new l(e));
        if (!(o.d && e.d && o.d[0] && e.d[0])) return new l(Wi(+o, u));
        if ((o = new l(o)).eq(1)) return o;
        if (n = l.precision, s = l.rounding, e.eq(1)) return ls(o, n, s);
        if ((t = Gi(e.e / Zi)) >= e.d.length - 1 && (r = u < 0 ? -u : u) <= 9007199254740991) return i = ps(l, o, r, n), e.s < 0 ? new l(1).div(i) : ls(i, n, s);
        if ((a = o.s) < 0) {
            if (t < e.d.length - 1) return new l(NaN);
            if (0 == (1 & e.d[t]) && (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length) return o.s = a, o
        }
        return (t = 0 != (r = Wi(+o, u)) && isFinite(r) ? new l(r + "").e : Gi(u * (Math.log("0." + ns(o.d)) / Math.LN10 + o.e + 1))) > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? a / 0 : 0) : (Bi = !1, l.rounding = o.s = 1, r = Math.min(12, (t + "").length), (i = ys(e.times(bs(o, n + r)), n)).d && ss((i = ls(i, n + 5, 1)).d, n, s) && (t = n + 10, +ns((i = ls(ys(e.times(bs(o, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ls(i, n + 1, 0))), i.s = a, Bi = !0, l.rounding = s, ls(i, n, s))
    }, rs.toPrecision = function(e, t) {
        var r, n = this,
            i = n.constructor;
        return void 0 === e ? r = us(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (is(e, 1, Ui), void 0 === t ? t = i.rounding : is(t, 0, 8), r = us(n = ls(new i(n), e, t), e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r
    }, rs.toSignificantDigits = rs.toSD = function(e, t) {
        var r = this.constructor;
        return void 0 === e ? (e = r.precision, t = r.rounding) : (is(e, 1, Ui), void 0 === t ? t = r.rounding : is(t, 0, 8)), ls(new r(this), e, t)
    }, rs.toString = function() {
        var e = this,
            t = e.constructor,
            r = us(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + r : r
    }, rs.truncated = rs.trunc = function() {
        return ls(new this.constructor(this), this.e + 1, 1)
    }, rs.valueOf = rs.toJSON = function() {
        var e = this,
            t = e.constructor,
            r = us(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() ? "-" + r : r
    };
    var os = function() {
        function e(e, t, r) {
            var n, i = 0,
                s = e.length;
            for (e = e.slice(); s--;) n = e[s] * t + i, e[s] = n % r | 0, i = n / r | 0;
            return i && e.unshift(i), e
        }

        function t(e, t, r, n) {
            var i, s;
            if (r != n) s = r > n ? 1 : -1;
            else
                for (i = s = 0; i < r; i++)
                    if (e[i] != t[i]) {
                        s = e[i] > t[i] ? 1 : -1;
                        break
                    } return s
        }

        function r(e, t, r, n) {
            for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
            for (; !e[0] && e.length > 1;) e.shift()
        }
        return function(n, i, s, a, o, l) {
            var u, c, d, h, g, m, p, f, v, y, b, T, w, E, I, A, N, S, D, R, C = n.constructor,
                x = n.s == i.s ? 1 : -1,
                L = n.d,
                O = i.d;
            if (!(L && L[0] && O && O[0])) return new C(n.s && i.s && (L ? !O || L[0] != O[0] : O) ? L && 0 == L[0] || !O ? 0 * x : x / 0 : NaN);
            for (l ? (g = 1, c = n.e - i.e) : (l = Qi, g = Zi, c = Gi(n.e / g) - Gi(i.e / g)), D = O.length, N = L.length, y = (v = new C(x)).d = [], d = 0; O[d] == (L[d] || 0); d++);
            if (O[d] > (L[d] || 0) && c--, null == s ? (E = s = C.precision, a = C.rounding) : E = o ? s + (n.e - i.e) + 1 : s, E < 0) y.push(1), m = !0;
            else {
                if (E = E / g + 2 | 0, d = 0, 1 == D) {
                    for (h = 0, O = O[0], E++;
                        (d < N || h) && E--; d++) I = h * l + (L[d] || 0), y[d] = I / O | 0, h = I % O | 0;
                    m = h || d < N
                } else {
                    for ((h = l / (O[0] + 1) | 0) > 1 && (O = e(O, h, l), L = e(L, h, l), D = O.length, N = L.length), A = D, T = (b = L.slice(0, D)).length; T < D;) b[T++] = 0;
                    (R = O.slice()).unshift(0), S = O[0], O[1] >= l / 2 && ++S;
                    do {
                        h = 0, (u = t(O, b, D, T)) < 0 ? (w = b[0], D != T && (w = w * l + (b[1] || 0)), (h = w / S | 0) > 1 ? (h >= l && (h = l - 1), 1 == (u = t(p = e(O, h, l), b, f = p.length, T = b.length)) && (h--, r(p, D < f ? R : O, f, l))) : (0 == h && (u = h = 1), p = O.slice()), (f = p.length) < T && p.unshift(0), r(b, p, T, l), -1 == u && (u = t(O, b, D, T = b.length)) < 1 && (h++, r(b, D < T ? R : O, T, l)), T = b.length) : 0 === u && (h++, b = [0]), y[d++] = h, u && b[0] ? b[T++] = L[A] || 0 : (b = [L[A]], T = 1)
                    } while ((A++ < N || void 0 !== b[0]) && E--);
                    m = void 0 !== b[0]
                }
                y[0] || y.shift()
            }
            if (1 == g) v.e = c, Oi = m;
            else {
                for (d = 1, h = y[0]; h >= 10; h /= 10) d++;
                v.e = d + c * g - 1, ls(v, o ? s + v.e + 1 : s, a, m)
            }
            return v
        }
    }();

    function ls(e, t, r, n) {
        var i, s, a, o, l, u, c, d, h, g = e.constructor;
        e: if (null != t) {
            if (!(d = e.d)) return e;
            for (i = 1, o = d[0]; o >= 10; o /= 10) i++;
            if ((s = t - i) < 0) s += Zi, a = t, l = (c = d[h = 0]) / Wi(10, i - a - 1) % 10 | 0;
            else if ((h = Math.ceil((s + 1) / Zi)) >= (o = d.length)) {
                if (!n) break e;
                for (; o++ <= h;) d.push(0);
                c = l = 0, i = 1, a = (s %= Zi) - Zi + 1
            } else {
                for (c = o = d[h], i = 1; o >= 10; o /= 10) i++;
                l = (a = (s %= Zi) - Zi + i) < 0 ? 0 : c / Wi(10, i - a - 1) % 10 | 0
            }
            if (n = n || t < 0 || void 0 !== d[h + 1] || (a < 0 ? c : c % Wi(10, i - a - 1)), u = r < 4 ? (l || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : l > 5 || 5 == l && (4 == r || n || 6 == r && (s > 0 ? a > 0 ? c / Wi(10, i - a) : 0 : d[h - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, u ? (t -= e.e + 1, d[0] = Wi(10, (Zi - t % Zi) % Zi), e.e = -t || 0) : d[0] = e.e = 0, e;
            if (0 == s ? (d.length = h, o = 1, h--) : (d.length = h + 1, o = Wi(10, Zi - s), d[h] = a > 0 ? (c / Wi(10, i - a) % Wi(10, a) | 0) * o : 0), u)
                for (;;) {
                    if (0 == h) {
                        for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
                        for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
                        s != o && (e.e++, d[0] == Qi && (d[0] = 1));
                        break
                    }
                    if (d[h] += o, d[h] != Qi) break;
                    d[h--] = 0, o = 1
                }
            for (s = d.length; 0 === d[--s];) d.pop()
        }
        return Bi && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e
    }

    function us(e, t, r) {
        if (!e.isFinite()) return Ts(e);
        var n, i = e.e,
            s = ns(e.d),
            a = s.length;
        return t ? (r && (n = r - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + ms(n) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + ms(-i - 1) + s, r && (n = r - a) > 0 && (s += ms(n))) : i >= a ? (s += ms(i + 1 - a), r && (n = r - i - 1) > 0 && (s = s + "." + ms(n))) : ((n = i + 1) < a && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (s += "."), s += ms(n))), s
    }

    function cs(e, t) {
        var r = e[0];
        for (t *= Zi; r >= 10; r /= 10) t++;
        return t
    }

    function ds(e, t, r) {
        if (t > es) throw Bi = !0, r && (e.precision = r), Error(Hi);
        return ls(new e($i), t, 1, !0)
    }

    function hs(e, t, r) {
        if (t > ts) throw Error(Hi);
        return ls(new e(Pi), t, r, !0)
    }

    function gs(e) {
        var t = e.length - 1,
            r = t * Zi + 1;
        if (t = e[t]) {
            for (; t % 10 == 0; t /= 10) r--;
            for (t = e[0]; t >= 10; t /= 10) r++
        }
        return r
    }

    function ms(e) {
        for (var t = ""; e--;) t += "0";
        return t
    }

    function ps(e, t, r, n) {
        var i, s = new e(1),
            a = Math.ceil(n / Zi + 4);
        for (Bi = !1;;) {
            if (r % 2 && Ss((s = s.times(t)).d, a) && (i = !0), 0 === (r = Gi(r / 2))) {
                r = s.d.length - 1, i && 0 === s.d[r] && ++s.d[r];
                break
            }
            Ss((t = t.times(t)).d, a)
        }
        return Bi = !0, s
    }

    function fs(e) {
        return 1 & e.d[e.d.length - 1]
    }

    function vs(e, t, r) {
        for (var n, i = new e(t[0]), s = 0; ++s < t.length;) {
            if (!(n = new e(t[s])).s) {
                i = n;
                break
            }
            i[r](n) && (i = n)
        }
        return i
    }

    function ys(e, t) {
        var r, n, i, s, a, o, l, u = 0,
            c = 0,
            d = 0,
            h = e.constructor,
            g = h.rounding,
            m = h.precision;
        if (!e.d || !e.d[0] || e.e > 17) return new h(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
        for (null == t ? (Bi = !1, l = m) : l = t, o = new h(.03125); e.e > -2;) e = e.times(o), d += 5;
        for (l += n = Math.log(Wi(2, d)) / Math.LN10 * 2 + 5 | 0, r = s = a = new h(1), h.precision = l;;) {
            if (s = ls(s.times(e), l, 1), r = r.times(++c), ns((o = a.plus(os(s, r, l, 1))).d).slice(0, l) === ns(a.d).slice(0, l)) {
                for (i = d; i--;) a = ls(a.times(a), l, 1);
                if (null != t) return h.precision = m, a;
                if (!(u < 3 && ss(a.d, l - n, g, u))) return ls(a, h.precision = m, g, Bi = !0);
                h.precision = l += 10, r = s = o = new h(1), c = 0, u++
            }
            a = o
        }
    }

    function bs(e, t) {
        var r, n, i, s, a, o, l, u, c, d, h, g = 1,
            m = e,
            p = m.d,
            f = m.constructor,
            v = f.rounding,
            y = f.precision;
        if (m.s < 0 || !p || !p[0] || !m.e && 1 == p[0] && 1 == p.length) return new f(p && !p[0] ? -1 / 0 : 1 != m.s ? NaN : p ? 0 : m);
        if (null == t ? (Bi = !1, c = y) : c = t, f.precision = c += 10, n = (r = ns(p)).charAt(0), !(Math.abs(s = m.e) < 15e14)) return u = ds(f, c + 2, y).times(s + ""), m = bs(new f(n + "." + r.slice(1)), c - 10).plus(u), f.precision = y, null == t ? ls(m, y, v, Bi = !0) : m;
        for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;) n = (r = ns((m = m.times(e)).d)).charAt(0), g++;
        for (s = m.e, n > 1 ? (m = new f("0." + r), s++) : m = new f(n + "." + r.slice(1)), d = m, l = a = m = os(m.minus(1), m.plus(1), c, 1), h = ls(m.times(m), c, 1), i = 3;;) {
            if (a = ls(a.times(h), c, 1), ns((u = l.plus(os(a, new f(i), c, 1))).d).slice(0, c) === ns(l.d).slice(0, c)) {
                if (l = l.times(2), 0 !== s && (l = l.plus(ds(f, c + 2, y).times(s + ""))), l = os(l, new f(g), c, 1), null != t) return f.precision = y, l;
                if (!ss(l.d, c - 10, v, o)) return ls(l, f.precision = y, v, Bi = !0);
                f.precision = c += 10, u = a = m = os(d.minus(1), d.plus(1), c, 1), h = ls(m.times(m), c, 1), i = o = 1
            }
            l = u, i += 2
        }
    }

    function Ts(e) {
        return String(e.s * e.s / 0)
    }

    function ws(e, t) {
        var r, n, i;
        for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; 48 === t.charCodeAt(n); n++);
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if (t = t.slice(n, i)) {
            if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % Zi, r < 0 && (n += Zi), n < i) {
                for (n && e.d.push(+t.slice(0, n)), i -= Zi; n < i;) e.d.push(+t.slice(n, n += Zi));
                t = t.slice(n), n = Zi - t.length
            } else n -= i;
            for (; n--;) t += "0";
            e.d.push(+t), Bi && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
        } else e.e = 0, e.d = [0];
        return e
    }

    function Es(e, t, r, n, i) {
        var s, a, o, l, u = e.precision,
            c = Math.ceil(u / Zi);
        for (Bi = !1, l = r.times(r), o = new e(n);;) {
            if (a = os(o.times(l), new e(t++ * t++), u, 1), o = i ? n.plus(a) : n.minus(a), n = os(a.times(l), new e(t++ * t++), u, 1), void 0 !== (a = o.plus(n)).d[c]) {
                for (s = c; a.d[s] === o.d[s] && s--;);
                if (-1 == s) break
            }
            s = o, o = n, n = a, a = s
        }
        return Bi = !0, a.d.length = c + 1, a
    }

    function Is(e, t) {
        for (var r = e; --t;) r *= e;
        return r
    }

    function As(e, t) {
        var r, n = t.s < 0,
            i = hs(e, e.precision, 1),
            s = i.times(.5);
        if ((t = t.abs()).lte(s)) return _i = n ? 4 : 1, t;
        if ((r = t.divToInt(i)).isZero()) _i = n ? 3 : 2;
        else {
            if ((t = t.minus(r.times(i))).lte(s)) return _i = fs(r) ? n ? 2 : 3 : n ? 4 : 1, t;
            _i = fs(r) ? n ? 1 : 4 : n ? 3 : 2
        }
        return t.minus(i).abs()
    }

    function Ns(e, t, r, n) {
        var i, s, a, o, l, u, c, d, h, g = e.constructor,
            m = void 0 !== r;
        if (m ? (is(r, 1, Ui), void 0 === n ? n = g.rounding : is(n, 0, 8)) : (r = g.precision, n = g.rounding), e.isFinite()) {
            for (m ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, (a = (c = us(e)).indexOf(".")) >= 0 && (c = c.replace(".", ""), (h = new g(1)).e = c.length - a, h.d = as(us(h), 10, i), h.e = h.d.length), s = l = (d = as(c, 10, i)).length; 0 == d[--l];) d.pop();
            if (d[0]) {
                if (a < 0 ? s-- : ((e = new g(e)).d = d, e.e = s, d = (e = os(e, h, r, n, 0, i)).d, s = e.e, u = Oi), a = d[r], o = i / 2, u = u || void 0 !== d[r + 1], u = n < 4 ? (void 0 !== a || u) && (0 === n || n === (e.s < 0 ? 3 : 2)) : a > o || a === o && (4 === n || u || 6 === n && 1 & d[r - 1] || n === (e.s < 0 ? 8 : 7)), d.length = r, u)
                    for (; ++d[--r] > i - 1;) d[r] = 0, r || (++s, d.unshift(1));
                for (l = d.length; !d[l - 1]; --l);
                for (a = 0, c = ""; a < l; a++) c += Fi.charAt(d[a]);
                if (m) {
                    if (l > 1)
                        if (16 == t || 8 == t) {
                            for (a = 16 == t ? 4 : 3, --l; l % a; l++) c += "0";
                            for (l = (d = as(c, i, t)).length; !d[l - 1]; --l);
                            for (a = 1, c = "1."; a < l; a++) c += Fi.charAt(d[a])
                        } else c = c.charAt(0) + "." + c.slice(1);
                    c = c + (s < 0 ? "p" : "p+") + s
                } else if (s < 0) {
                    for (; ++s;) c = "0" + c;
                    c = "0." + c
                } else if (++s > l)
                    for (s -= l; s--;) c += "0";
                else s < l && (c = c.slice(0, s) + "." + c.slice(s))
            } else c = m ? "0p+0" : "0";
            c = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + c
        } else c = Ts(e);
        return e.s < 0 ? "-" + c : c
    }

    function Ss(e, t) {
        if (e.length > t) return e.length = t, !0
    }

    function Ds(e) {
        return new this(e).abs()
    }

    function Rs(e) {
        return new this(e).acos()
    }

    function Cs(e) {
        return new this(e).acosh()
    }

    function xs(e, t) {
        return new this(e).plus(t)
    }

    function Ls(e) {
        return new this(e).asin()
    }

    function Os(e) {
        return new this(e).asinh()
    }

    function _s(e) {
        return new this(e).atan()
    }

    function Ms(e) {
        return new this(e).atanh()
    }

    function Us(e, t) {
        e = new this(e), t = new this(t);
        var r, n = this.precision,
            i = this.rounding,
            s = n + 4;
        return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = t.s < 0 ? hs(this, n, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (r = hs(this, s, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = s, this.rounding = 1, r = this.atan(os(e, t, s, 1)), t = hs(this, s, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(os(e, t, s, 1)) : (r = hs(this, s, 1).times(t.s > 0 ? .25 : .75)).s = e.s : r = new this(NaN), r
    }

    function Fs(e) {
        return new this(e).cbrt()
    }

    function $s(e) {
        return ls(e = new this(e), e.e + 1, 2)
    }

    function Ps(e, t, r) {
        return new this(e).clamp(t, r)
    }

    function Vs(e) {
        if (!e || "object" != typeof e) throw Error(ki + "Object expected");
        var t, r, n, i = !0 === e.defaults,
            s = ["precision", 1, Ui, "rounding", 0, 8, "toExpNeg", -Mi, 0, "toExpPos", 0, Mi, "maxE", 0, Mi, "minE", -Mi, 0, "modulo", 0, 9];
        for (t = 0; t < s.length; t += 3)
            if (r = s[t], i && (this[r] = Vi[r]), void 0 !== (n = e[r])) {
                if (!(Gi(n) === n && n >= s[t + 1] && n <= s[t + 2])) throw Error(zi + r + ": " + n);
                this[r] = n
            } if (r = "crypto", i && (this[r] = Vi[r]), void 0 !== (n = e[r])) {
            if (!0 !== n && !1 !== n && 0 !== n && 1 !== n) throw Error(zi + r + ": " + n);
            if (n) {
                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(ji);
                this[r] = !0
            } else this[r] = !1
        }
        return this
    }

    function Bs(e) {
        return new this(e).cos()
    }

    function ks(e) {
        return new this(e).cosh()
    }

    function zs(e, t) {
        return new this(e).div(t)
    }

    function Hs(e) {
        return new this(e).exp()
    }

    function js(e) {
        return ls(e = new this(e), e.e + 1, 3)
    }

    function qs() {
        var e, t, r = new this(0);
        for (Bi = !1, e = 0; e < arguments.length;)
            if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
            else {
                if (t.s) return Bi = !0, new this(1 / 0);
                r = t
            } return Bi = !0, r.sqrt()
    }

    function Gs(e) {
        return e instanceof ga || e && e.toStringTag === qi || !1
    }

    function Ws(e) {
        return new this(e).ln()
    }

    function Ks(e, t) {
        return new this(e).log(t)
    }

    function Js(e) {
        return new this(e).log(2)
    }

    function Ys(e) {
        return new this(e).log(10)
    }

    function Xs() {
        return vs(this, arguments, "lt")
    }

    function Qs() {
        return vs(this, arguments, "gt")
    }

    function Zs(e, t) {
        return new this(e).mod(t)
    }

    function ea(e, t) {
        return new this(e).mul(t)
    }

    function ta(e, t) {
        return new this(e).pow(t)
    }

    function ra(e) {
        var t, r, n, i, s = 0,
            a = new this(1),
            o = [];
        if (void 0 === e ? e = this.precision : is(e, 1, Ui), n = Math.ceil(e / Zi), this.crypto)
            if (crypto.getRandomValues)
                for (t = crypto.getRandomValues(new Uint32Array(n)); s < n;)(i = t[s]) >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : o[s++] = i % 1e7;
            else {
                if (!crypto.randomBytes) throw Error(ji);
                for (t = crypto.randomBytes(n *= 4); s < n;)(i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (o.push(i % 1e7), s += 4);
                s = n / 4
            }
        else
            for (; s < n;) o[s++] = 1e7 * Math.random() | 0;
        for (n = o[--s], e %= Zi, n && e && (i = Wi(10, Zi - e), o[s] = (n / i | 0) * i); 0 === o[s]; s--) o.pop();
        if (s < 0) r = 0, o = [0];
        else {
            for (r = -1; 0 === o[0]; r -= Zi) o.shift();
            for (n = 1, i = o[0]; i >= 10; i /= 10) n++;
            n < Zi && (r -= Zi - n)
        }
        return a.e = r, a.d = o, a
    }

    function na(e) {
        return ls(e = new this(e), e.e + 1, this.rounding)
    }

    function ia(e) {
        return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
    }

    function sa(e) {
        return new this(e).sin()
    }

    function aa(e) {
        return new this(e).sinh()
    }

    function oa(e) {
        return new this(e).sqrt()
    }

    function la(e, t) {
        return new this(e).sub(t)
    }

    function ua() {
        var e = 0,
            t = arguments,
            r = new this(t[e]);
        for (Bi = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
        return Bi = !0, ls(r, this.precision, this.rounding)
    }

    function ca(e) {
        return new this(e).tan()
    }

    function da(e) {
        return new this(e).tanh()
    }

    function ha(e) {
        return ls(e = new this(e), e.e + 1, 1)
    }
    rs[Symbol.for("nodejs.util.inspect.custom")] = rs.toString, rs[Symbol.toStringTag] = "Decimal";
    var ga = rs.constructor = function e(t) {
        var r, n, i;

        function s(e) {
            var t, r, n, i = this;
            if (!(i instanceof s)) return new s(e);
            if (i.constructor = s, Gs(e)) return i.s = e.s, void(Bi ? !e.d || e.e > s.maxE ? (i.e = NaN, i.d = null) : e.e < s.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
            if ("number" === (n = typeof e)) {
                if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
                if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
                    for (t = 0, r = e; r >= 10; r /= 10) t++;
                    return void(Bi ? t > s.maxE ? (i.e = NaN, i.d = null) : t < s.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]))
                }
                return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : ws(i, e.toString())
            }
            if ("string" !== n) throw Error(zi + e);
            return 45 === (r = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === r && (e = e.slice(1)), i.s = 1), Xi.test(e) ? ws(i, e) : function(e, t) {
                var r, n, i, s, a, o, l, u, c;
                if (t.indexOf("_") > -1) {
                    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Xi.test(t)) return ws(e, t)
                } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                if (Ji.test(t)) r = 16, t = t.toLowerCase();
                else if (Ki.test(t)) r = 2;
                else {
                    if (!Yi.test(t)) throw Error(zi + t);
                    r = 8
                }
                for ((s = t.search(/p/i)) > 0 ? (l = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), a = (s = t.indexOf(".")) >= 0, n = e.constructor, a && (s = (o = (t = t.replace(".", "")).length) - s, i = ps(n, new n(r), s, 2 * s)), s = c = (u = as(t, r, Qi)).length - 1; 0 === u[s]; --s) u.pop();
                return s < 0 ? new n(0 * e.s) : (e.e = cs(u, c), e.d = u, Bi = !1, a && (e = os(e, i, 4 * o)), l && (e = e.times(Math.abs(l) < 54 ? Wi(2, l) : ga.pow(2, l))), Bi = !0, e)
            }(i, e)
        }
        if (s.prototype = rs, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = Vs, s.clone = e, s.isDecimal = Gs, s.abs = Ds, s.acos = Rs, s.acosh = Cs, s.add = xs, s.asin = Ls, s.asinh = Os, s.atan = _s, s.atanh = Ms, s.atan2 = Us, s.cbrt = Fs, s.ceil = $s, s.clamp = Ps, s.cos = Bs, s.cosh = ks, s.div = zs, s.exp = Hs, s.floor = js, s.hypot = qs, s.ln = Ws, s.log = Ks, s.log10 = Ys, s.log2 = Js, s.max = Xs, s.min = Qs, s.mod = Zs, s.mul = ea, s.pow = ta, s.random = ra, s.round = na, s.sign = ia, s.sin = sa, s.sinh = aa, s.sqrt = oa, s.sub = la, s.sum = ua, s.tan = ca, s.tanh = da, s.trunc = ha, void 0 === t && (t = {}), t && !0 !== t.defaults)
            for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < i.length;) t.hasOwnProperty(n = i[r++]) || (t[n] = this[n]);
        return s.config(t), s
    }(Vi);
    $i = new ga($i), Pi = new ga(Pi);
    var ma, pa = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        fa = {
            exports: {}
        };
    ! function(e) {
        ! function(t) {
            function r(e) {
                return e.prototype.toFormat = function(e, t, r) {
                    if (!this.e && 0 !== this.e) return this.toString();
                    var n, i, s, a, o, l, u, c, d, h, g, m, p, f, v, y = this.format || {},
                        b = this.constructor.format || {};
                    if (e != o ? "object" == typeof e ? (r = e, e = o) : t != o ? "object" == typeof t ? (r = t, t = o) : "object" != typeof r && (r = {}) : r = {} : r = {}, c = (n = this.toFixed(e, t).split("."))[0], d = n[1], l = (u = this.s < 0 ? c.slice(1) : c).length, (h = r.decimalSeparator) == o && (h = y.decimalSeparator) == o && (h = b.decimalSeparator) == o && (h = "."), (g = r.groupSeparator) == o && (g = y.groupSeparator) == o && (g = b.groupSeparator), g && ((m = r.groupSize) == o && (m = y.groupSize) == o && (m = b.groupSize) == o && (m = 0), (p = r.secondaryGroupSize) == o && (p = y.secondaryGroupSize) == o && (p = b.secondaryGroupSize) == o && (p = 0), p ? (i = +p, l -= s = +m) : (i = +m, s = +p), i > 0 && l > 0)) {
                        for (a = l % i || i, c = u.substr(0, a); a < l; a += i) c += g + u.substr(a, i);
                        s > 0 && (c += g + u.slice(a)), this.s < 0 && (c = "-" + c)
                    }
                    return d ? ((f = r.fractionGroupSeparator) == o && (f = y.fractionGroupSeparator) == o && (f = b.fractionGroupSeparator), f && ((v = r.fractionGroupSize) == o && (v = y.fractionGroupSize) == o && (v = b.fractionGroupSize) == o && (v = 0), (v = +v) && (d = d.replace(new RegExp("\\d{" + v + "}\\B", "g"), "$&" + f))), c + h + d) : c
                }, e.format = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0
                }, e
            }
            e.exports ? e.exports = r : (t || (t = "undefined" != typeof self && self && self.self == self ? self : window), noConflict = t.toFormat, r.noConflict = function() {
                return t.toFormat = noConflict, r
            }, t.toFormat = r)
        }(pa)
    }(fa), (0, fa.exports)(ga),
    function(e) {
        e[e.roundUp = 0] = "roundUp", e[e.roundDown = 1] = "roundDown", e[e.roundCeil = 2] = "roundCeil", e[e.roundFloor = 3] = "roundFloor", e[e.roundHalfUp = 4] = "roundHalfUp", e[e.roundHalfDown = 5] = "roundHalfDown", e[e.roundHalfEven = 6] = "roundHalfEven", e[e.roundHalfCeil = 7] = "roundHalfCeil", e[e.roundHalfFloor = 8] = "roundHalfFloor"
    }(ma || (ma = {}));
    const va = ga.config({
        precision: 30,
        toExpNeg: -1024,
        toExpPos: 1024,
        rounding: ga.ROUND_HALF_EVEN
    });
    class ya {
        constructor(e) {
            this.add = this.plus, this.sub = this.minus, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqualTo, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqualTo;
            const t = ya.unwrapInputValue(e);
            this.internalValue = new va(t)
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e
        }
        static max(e, t) {
            const [r, n] = [ya.unwrapInputValue(e), ya.unwrapInputValue(t)], i = va.max(r, n);
            return new ya(i)
        }
        static min(e, t) {
            const [r, n] = [ya.unwrapInputValue(e), ya.unwrapInputValue(t)], i = va.min(r, n);
            return new ya(i)
        }
        abs() {
            const e = this.internalValue.abs();
            return new ya(e)
        }
        neg() {
            const e = this.internalValue.neg();
            return new ya(e)
        }
        sqrt() {
            const e = this.internalValue.sqrt();
            return new ya(e)
        }
        trunc() {
            const e = this.internalValue.trunc();
            return new ya(e)
        }
        round() {
            const e = this.internalValue.round();
            return new ya(e)
        }
        isNaN() {
            return this.internalValue.isNaN()
        }
        isInteger() {
            return this.internalValue.isInteger()
        }
        decimalPlaces() {
            return this.internalValue.decimalPlaces()
        }
        plus(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.plus(t);
            return new ya(r)
        }
        minus(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.minus(t);
            return new ya(r)
        }
        times(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.times(t);
            return new ya(r)
        }
        div(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.div(t);
            return new ya(r)
        }
        pow(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.pow(t);
            return new ya(r)
        }
        mod(e) {
            const t = ya.unwrapInputValue(e),
                r = this.internalValue.mod(t);
            return new ya(r)
        }
        equals(e) {
            const t = ya.unwrapInputValue(e);
            return this.internalValue.equals(t)
        }
        lessThan(e) {
            const t = ya.unwrapInputValue(e);
            return this.internalValue.lessThan(t)
        }
        lessThanOrEqualTo(e) {
            const t = ya.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqualTo(t)
        }
        greaterThan(e) {
            const t = ya.unwrapInputValue(e);
            return this.internalValue.greaterThan(t)
        }
        greaterThanOrEqualTo(e) {
            const t = ya.unwrapInputValue(e);
            return this.internalValue.greaterThanOrEqualTo(t)
        }
        toString() {
            return this.internalValue.toString()
        }
        toNumber() {
            return this.internalValue.toNumber()
        }
        valueOf() {
            return this.internalValue.valueOf()
        }
        toFixed(e) {
            return this.internalValue.toFixed(e)
        }
        toFormat(...e) {
            return this.internalValue.toFormat(...e)
        }
        toDecimalPlaces(e) {
            const t = this.internalValue.toDecimalPlaces(e);
            return new ya(t)
        }
    }
    ya.rounding = va.rounding, ya.defaultValue = new ya(0);
    const ba = {};

    function Ta(e, t) {
        const r = ba[e];
        if (void 0 !== r) return r;
        const n = e.replace(new RegExp("[" + t.join("") + "]", "gi"), "").substr(0, 1),
            i = [];
        let s;
        for (s = 0; s < t.length; s++) i.push({
            index: e.toLowerCase().indexOf(t[s]),
            character: t[s],
            length: e.replace(new RegExp("[^" + t[s] + "]", "gi"), "").length
        });
        i.sort(((e, t) => e.index < t.index ? -1 : 1));
        const a = {
            format: e,
            separator: n,
            parts: {},
            regExp: "^"
        };
        for (s = 0; s < i.length; s++) {
            let t = "";
            switch (i[s].character.toLowerCase()) {
                case "h":
                case "m":
                case "d":
                    t = "1,2";
                    break;
                case "s":
                    a.regExp += "(?" + n, t = "1,2";
                    break;
                default:
                    t = i[s].length
            }
            s > 0 && (a.regExp += "\\" + n), a.regExp += "([0-9]{" + t + "})" + ("s" === i[s].character ? ")?" : ""), a.parts[i[s].character + "Index"] = s, a.parts[i[s].character + "Format"] = e.slice(i[s].index, i[s].index + i[s].length)
        }
        return a.regExp += "$", ba[e] = a, a
    }
    class wa {
        static getDayName(e) {
            return wa.DayNames[e]
        }
        static getShortDayName(e) {
            return wa.DayNames[e].slice(0, 3)
        }
        static getMonthName(e) {
            return wa.MonthNames[e - 1]
        }
        static getShortMonthName(e) {
            return wa.MonthNames[e - 1].slice(0, 3)
        }
        static get12HourNotation(e) {
            return e < 12 ? "AM" : "PM"
        }
        static getTimezoneInformationFull(e) {
            return e = -e, wa.getTimezoneSignal(e) + wa.padLeadingZeros(Math.floor(e / 60).toString(), 2) + ":" + wa.padLeadingZeros(Math.floor(e % 60).toString(), 2)
        }
        static getTimezoneInformationHoursFull(e) {
            return e = -e, wa.getTimezoneSignal(e) + wa.padLeadingZeros(Math.floor(e / 60).toString(), 2)
        }
        static getTimezoneInformationHoursShort(e) {
            return e = -e, wa.getTimezoneSignal(e) + Math.floor(e / 60)
        }
        static getTimezoneSignal(e) {
            return e < 0 ? "-" : "+"
        }
        static padLeadingZeros(e, t) {
            let r = e || "";
            for (; r.length < t;) r = "0" + r;
            return r
        }
        static removeTrailingZeros(e) {
            return (e || "").replace(/0+$/gm, "")
        }
        constructor(e, t, r = " ", n = "") {
            this.dateFmt = function(e) {
                return Ta(e, ["y", "m", "d"])
            }(e), this.timeFmt = function(e) {
                return Ta(e, ["h", "m", "s"])
            }(t), this.dateTimeSep = r, this.tzInformation = n
        }
        get dateFormat() {
            return this.dateFmt.format
        }
        get timeFormat() {
            return this.timeFmt.format
        }
        get dateTimeFormat() {
            return this.dateFmt.format + this.dateTimeSeparator + this.timeFmt.format
        }
        getRegExpForDate() {
            return new RegExp(this.dateFmt.regExp, "i")
        }
        get yearIndexForDate() {
            return this.dateFmt.parts.yIndex
        }
        get monthIndexForDate() {
            return this.dateFmt.parts.mIndex
        }
        get dayIndexForDate() {
            return this.dateFmt.parts.dIndex
        }
        get yearFormatForDate() {
            return this.dateFmt.parts.yFormat
        }
        get monthFormatForDate() {
            return this.dateFmt.parts.mFormat
        }
        get dayFormatForDate() {
            return this.dateFmt.parts.dFormat
        }
        get dateSeparator() {
            return this.dateFmt.separator
        }
        getRegExpForTime() {
            return new RegExp(this.timeFmt.regExp, "i")
        }
        get hoursIndexForTime() {
            return this.timeFmt.parts.hIndex
        }
        get minutesIndexForTime() {
            return this.timeFmt.parts.mIndex
        }
        get secondsIndexForTime() {
            return this.timeFmt.parts.sIndex
        }
        get timeSeparator() {
            return this.timeFmt.separator
        }
        get dateTimeSeparator() {
            return this.dateTimeSep
        }
        getRegExpForDateTime() {
            return new RegExp(this.dateFmt.regExp.substring(0, this.dateFmt.regExp.length - 1) + this.dateTimeSeparator + this.timeFmt.regExp.substring(1, this.timeFmt.regExp.length - 1) + this.tzInformation + "$", "i")
        }
        get yearIndexForDateTime() {
            return this.dateFmt.parts.yIndex
        }
        get monthIndexForDateTime() {
            return this.dateFmt.parts.mIndex
        }
        get dayIndexForDateTime() {
            return this.dateFmt.parts.dIndex
        }
        get hoursIndexForDateTime() {
            return this.timeFmt.parts.hIndex + 3
        }
        get hoursFormatForTime() {
            return this.timeFmt.parts.hFormat
        }
        get minutesFormatForTime() {
            return this.timeFmt.parts.mFormat
        }
        get secondsFormatForTime() {
            return this.timeFmt.parts.sFormat
        }
        get minutesIndexForDateTime() {
            return this.timeFmt.parts.mIndex + 3
        }
        get secondsIndexForDateTime() {
            return this.timeFmt.parts.sIndex + 3
        }
    }
    wa.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], wa.MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    class Ea {
        constructor(e, t) {
            this.decimalSep = e, this.groupSep = t, this.generateFormatRegExps(e, t)
        }
        generateFormatRegExps(e, t) {
            const r = "\\" + e,
                n = "(([0-9]{1,3}(" + (t ? "\\" + t : "") + "[0-9]{3})*)|([0-9]+))",
                i = "[0-9]+";
            this.integerFmtRegExp = "^[-]?" + n + "$", this.decimalFmtRegExp = "^[-]?((" + n + "(" + r + "(" + i + ")?)?)|((" + n + ")?" + r + i + "))$"
        }
        get decimalSeparator() {
            return this.decimalSep
        }
        get groupSeparator() {
            return this.groupSep
        }
        getRegExpForInteger() {
            return new RegExp(this.integerFmtRegExp, "i")
        }
        getRegExpForDecimal() {
            return new RegExp(this.decimalFmtRegExp, "i")
        }
        getRegExpForJSNumber() {
            return new RegExp("^-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$", "i")
        }
    }
    class Ia {
        constructor(e, t) {
            this.defaultDateTimeFormats = [new wa("yyyy-MM-dd", "HH:mm:ss"), new wa("yyyy-MM-dd", "HH:mm:ss"), new wa("yyyy/MM/dd", "HH:mm:ss"), new wa("yyyy.MM.dd", "HH:mm:ss")], this.defaultNumberFmt = t, this.currentNumberFmt = t, this.defaultDateTimeFormats[0] = e
        }
        get defaultDateTimeFormat() {
            return this.defaultDateTimeFormats[0]
        }
        get dateTimeFormats() {
            return this.defaultDateTimeFormats
        }
        set dateTimeFormat(e) {
            this.defaultDateTimeFormats[0] = e
        }
        get defaultNumberFormat() {
            return this.defaultNumberFmt
        }
        get numberFormat() {
            return this.currentNumberFmt
        }
        set numberFormat(e) {
            this.currentNumberFmt = e
        }
    }
    var Aa = Object.freeze({
        __proto__: null,
        DateTimeFormatInfo: wa,
        NumberFormatInfo: Ea,
        ApplicationFormatInfo: Ia
    });

    function Na(e) {
        let t = e.length;
        const r = new Array(t);
        for (; t-- > 0;) r[t] = e[t];
        return r
    }

    function Sa(e) {
        const t = Object.keys(e);

        function r(e) {
            t.forEach((t => {
                this[t] = e[t]
            }))
        }
        const n = class {
            constructor(t) {
                this._ = null != t ? t : e
            }
            get(e) {
                return this._[e]
            }
            set(e, t) {
                const i = new r(this._);
                return i[e] = t, new n(i)
            }
            toJS() {
                const e = {};
                return t.forEach((t => {
                    e[t] = this._[t]
                })), e
            }
        };
        return n
    }
    const Da = 128;
    class Ra {
        constructor(e, t) {
            if (void 0 !== t) this._values = e, this._lengths = t;
            else if (void 0 !== e) {
                const t = Ra.fromJS(e);
                this._values = t._values, this._lengths = t._lengths
            } else this._values = [], this._lengths = []
        }
        clear() {
            return new Ra
        }
        clone() {
            return this
        }
        count() {
            let e = 0,
                t = this._lengths.length;
            for (; t-- > 0;) e += this._lengths[t];
            return e
        }
        isEmpty() {
            return 0 === this._lengths.length
        }
        get(e) {
            let t = 0,
                r = e;
            const n = this._lengths.length;
            for (; t < n && e >= 0;) {
                if (r < this._lengths[t]) return this._values[t][r];
                r -= this._lengths[t], t++
            }
        }
        set(e, t) {
            let r = 0,
                n = e;
            const i = Na(this._values),
                s = this._lengths,
                a = s.length;
            for (; r < a && e >= 0;) {
                if (n < this._lengths[r]) return i[r] = Na(i[r]), i[r][n] = t, new Ra(i, s);
                n -= s[r], r++
            }
        }
        push(e) {
            let t, r, n = this._values.length - 1;
            n < 0 ? (n = 0, t = [
                []
            ], r = [0]) : (t = Na(this._values), r = Na(this._lengths));
            const i = t[n];
            if (i.length < Da) {
                const s = i.length,
                    a = new Array(s + 1);
                let o = s;
                for (; o-- > 0;) a[o] = i[o];
                a[s] = e, t[n] = a, r[n]++
            } else {
                const n = [e];
                t.push(n), r.push(1)
            }
            return new Ra(t, r)
        }
        insert(e, t) {
            let r = 0,
                n = e;
            const i = Na(this._values),
                s = Na(this._lengths);
            let a = s.length;
            for (; r < a && n >= 0;) {
                if (n < s[r]) {
                    if (s[r] === Da) {
                        const e = 64,
                            t = Da - e;
                        s.splice(r, 1, e, t);
                        const n = new Array(e),
                            o = new Array(t);
                        for (let t = 0; t < e; t++) n[t] = i[r][t];
                        for (let n = 0, s = e; n < t;) o[n++] = i[r][s++];
                        i.splice(r, 1, n, o), a++;
                        continue
                    }
                    let e = 0;
                    const o = s[r],
                        l = new Array(o + 1),
                        u = i[r];
                    for (; e < n; e++) l[e] = u[e];
                    l[n] = t;
                    let c = e + 1;
                    for (; e < o;) l[c++] = u[e++];
                    return s[r]++, i[r] = l, new Ra(i, s)
                }
                n -= s[r], r++
            }
            return s.push(1), i.push([t]), new Ra(i, s)
        }
        remove(e) {
            let t = 0,
                r = e;
            const n = Na(this._lengths),
                i = Na(this._values),
                s = n.length;
            for (; t < s && r >= 0;) {
                if (r < n[t]) {
                    const e = --n[t],
                        s = new Array(e);
                    let a = 0,
                        o = 0;
                    for (; a < e;) a === r && o++, s[a++] = i[t][o++];
                    return i[t] = s, 0 === n[t] && (n.splice(t, 1), i.splice(t, 1)), new Ra(i, n)
                }
                r -= n[t], t++
            }
        }
        reduce(e, t) {
            for (let r = 0; r < this._values.length; r++) {
                const n = this._values[r];
                for (let r = 0; r < n.length; r++) t = e(t, n[r])
            }
            return t
        }
        map(e) {
            const t = new Array(this.count());
            let r = 0;
            for (let n = 0; n < this._values.length; n++) {
                const i = this._values[n];
                for (let n = 0; n < i.length; n++) t[r] = e(i[n], r), r++
            }
            return t
        }
        pushAll(e) {
            if (0 === e.length) return this;
            const t = new Ra(e),
                r = this._values.concat(t._values),
                n = this._lengths.concat(t._lengths);
            return new Ra(r, n)
        }
        forEach(e) {
            for (let t = 0; t < this._values.length; t++) {
                const r = this._values[t];
                for (let t = 0; t < r.length; t++) e(r[t])
            }
        }
        addFromOther(e) {
            if (0 === e.count()) return this;
            if (0 === this._values.length) return e;
            const t = new Array(this._lengths.length + e._lengths.length),
                r = new Array(this._values.length + e._values.length);
            let n = 0,
                i = 0;
            for (; n < this._values.length;) r[n] = this._values[n], t[n] = this._lengths[n], n++;
            for (; i < e._values.length;) r[n] = e._values[i], t[n] = e._lengths[i], n++, i++;
            return new Ra(r, t)
        }
        static fromJS(e) {
            const t = 0 | Math.ceil(e.length / Da),
                r = new Array(t),
                n = new Array(t);
            let i = 0,
                s = 0;
            for (let a = 0; a < t; a++) {
                s = e.length - i;
                const t = s > Da ? Da : s;
                n[a] = t, r[a] = new Array(t);
                for (let n = 0; n < t; n++) r[a][n] = e[i + n];
                i += t
            }
            return new Ra(r, n)
        }
    }
    var Ca = Object.freeze({
            __proto__: null,
            defineRecordClass: Sa,
            ImmutableList: Ra
        }),
        xa = Oa,
        La = null;
    try {
        La = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
    } catch (e) {}

    function Oa(e, t, r) {
        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!r
    }

    function _a(e) {
        return !0 === (e && e.__isLong__)
    }
    Oa.prototype.__isLong__, Object.defineProperty(Oa.prototype, "__isLong__", {
        value: !0
    }), Oa.isLong = _a;
    var Ma = {},
        Ua = {};

    function Fa(e, t) {
        var r, n, i;
        return t ? (i = 0 <= (e >>>= 0) && e < 256) && (n = Ua[e]) ? n : (r = Pa(e, (0 | e) < 0 ? -1 : 0, !0), i && (Ua[e] = r), r) : (i = -128 <= (e |= 0) && e < 128) && (n = Ma[e]) ? n : (r = Pa(e, e < 0 ? -1 : 0, !1), i && (Ma[e] = r), r)
    }

    function $a(e, t) {
        if (isNaN(e)) return t ? Wa : Ga;
        if (t) {
            if (e < 0) return Wa;
            if (e >= Ha) return Qa
        } else {
            if (e <= -ja) return Za;
            if (e + 1 >= ja) return Xa
        }
        return e < 0 ? $a(-e, t).neg() : Pa(e % za | 0, e / za | 0, t)
    }

    function Pa(e, t, r) {
        return new Oa(e, t, r)
    }
    Oa.fromInt = Fa, Oa.fromNumber = $a, Oa.fromBits = Pa;
    var Va = Math.pow;

    function Ba(e, t, r) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return Ga;
        if ("number" == typeof t ? (r = t, t = !1) : t = !!t, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
        var n;
        if ((n = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === n) return Ba(e.substring(1), t, r).neg();
        for (var i = $a(Va(r, 8)), s = Ga, a = 0; a < e.length; a += 8) {
            var o = Math.min(8, e.length - a),
                l = parseInt(e.substring(a, a + o), r);
            if (o < 8) {
                var u = $a(Va(r, o));
                s = s.mul(u).add($a(l))
            } else s = (s = s.mul(i)).add($a(l))
        }
        return s.unsigned = t, s
    }

    function ka(e, t) {
        return "number" == typeof e ? $a(e, t) : "string" == typeof e ? Ba(e, t) : Pa(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
    }
    Oa.fromString = Ba, Oa.fromValue = ka;
    var za = 4294967296,
        Ha = za * za,
        ja = Ha / 2,
        qa = Fa(1 << 24),
        Ga = Fa(0);
    Oa.ZERO = Ga;
    var Wa = Fa(0, !0);
    Oa.UZERO = Wa;
    var Ka = Fa(1);
    Oa.ONE = Ka;
    var Ja = Fa(1, !0);
    Oa.UONE = Ja;
    var Ya = Fa(-1);
    Oa.NEG_ONE = Ya;
    var Xa = Pa(-1, 2147483647, !1);
    Oa.MAX_VALUE = Xa;
    var Qa = Pa(-1, -1, !0);
    Oa.MAX_UNSIGNED_VALUE = Qa;
    var Za = Pa(0, -2147483648, !1);
    Oa.MIN_VALUE = Za;
    var eo = Oa.prototype;
    eo.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }, eo.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * za + (this.low >>> 0) : this.high * za + (this.low >>> 0)
    }, eo.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.eq(Za)) {
                var t = $a(e),
                    r = this.div(t),
                    n = r.mul(t).sub(this);
                return r.toString(e) + n.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        for (var i = $a(Va(e, 6), this.unsigned), s = this, a = "";;) {
            var o = s.div(i),
                l = (s.sub(o.mul(i)).toInt() >>> 0).toString(e);
            if ((s = o).isZero()) return l + a;
            for (; l.length < 6;) l = "0" + l;
            a = "" + l + a
        }
    }, eo.getHighBits = function() {
        return this.high
    }, eo.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }, eo.getLowBits = function() {
        return this.low
    }, eo.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }, eo.getNumBitsAbs = function() {
        if (this.isNegative()) return this.eq(Za) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
        return 0 != this.high ? t + 33 : t + 1
    }, eo.isZero = function() {
        return 0 === this.high && 0 === this.low
    }, eo.eqz = eo.isZero, eo.isNegative = function() {
        return !this.unsigned && this.high < 0
    }, eo.isPositive = function() {
        return this.unsigned || this.high >= 0
    }, eo.isOdd = function() {
        return 1 == (1 & this.low)
    }, eo.isEven = function() {
        return 0 == (1 & this.low)
    }, eo.equals = function(e) {
        return _a(e) || (e = ka(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
    }, eo.eq = eo.equals, eo.notEquals = function(e) {
        return !this.eq(e)
    }, eo.neq = eo.notEquals, eo.ne = eo.notEquals, eo.lessThan = function(e) {
        return this.comp(e) < 0
    }, eo.lt = eo.lessThan, eo.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }, eo.lte = eo.lessThanOrEqual, eo.le = eo.lessThanOrEqual, eo.greaterThan = function(e) {
        return this.comp(e) > 0
    }, eo.gt = eo.greaterThan, eo.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }, eo.gte = eo.greaterThanOrEqual, eo.ge = eo.greaterThanOrEqual, eo.compare = function(e) {
        if (_a(e) || (e = ka(e)), this.eq(e)) return 0;
        var t = this.isNegative(),
            r = e.isNegative();
        return t && !r ? -1 : !t && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }, eo.comp = eo.compare, eo.negate = function() {
        return !this.unsigned && this.eq(Za) ? Za : this.not().add(Ka)
    }, eo.neg = eo.negate, eo.add = function(e) {
        _a(e) || (e = ka(e));
        var t = this.high >>> 16,
            r = 65535 & this.high,
            n = this.low >>> 16,
            i = 65535 & this.low,
            s = e.high >>> 16,
            a = 65535 & e.high,
            o = e.low >>> 16,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return c += (d += i + (65535 & e.low)) >>> 16, u += (c += n + o) >>> 16, l += (u += r + a) >>> 16, l += t + s, Pa((c &= 65535) << 16 | (d &= 65535), (l &= 65535) << 16 | (u &= 65535), this.unsigned)
    }, eo.subtract = function(e) {
        return _a(e) || (e = ka(e)), this.add(e.neg())
    }, eo.sub = eo.subtract, eo.multiply = function(e) {
        if (this.isZero()) return Ga;
        if (_a(e) || (e = ka(e)), La) return Pa(La.mul(this.low, this.high, e.low, e.high), La.get_high(), this.unsigned);
        if (e.isZero()) return Ga;
        if (this.eq(Za)) return e.isOdd() ? Za : Ga;
        if (e.eq(Za)) return this.isOdd() ? Za : Ga;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(qa) && e.lt(qa)) return $a(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16,
            r = 65535 & this.high,
            n = this.low >>> 16,
            i = 65535 & this.low,
            s = e.high >>> 16,
            a = 65535 & e.high,
            o = e.low >>> 16,
            l = 65535 & e.low,
            u = 0,
            c = 0,
            d = 0,
            h = 0;
        return d += (h += i * l) >>> 16, c += (d += n * l) >>> 16, d &= 65535, c += (d += i * o) >>> 16, u += (c += r * l) >>> 16, c &= 65535, u += (c += n * o) >>> 16, c &= 65535, u += (c += i * a) >>> 16, u += t * l + r * o + n * a + i * s, Pa((d &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (c &= 65535), this.unsigned)
    }, eo.mul = eo.multiply, eo.divide = function(e) {
        if (_a(e) || (e = ka(e)), e.isZero()) throw Error("division by zero");
        var t, r, n;
        if (La) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? Pa((this.unsigned ? La.div_u : La.div_s)(this.low, this.high, e.low, e.high), La.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? Wa : Ga;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return Wa;
            if (e.gt(this.shru(1))) return Ja;
            n = Wa
        } else {
            if (this.eq(Za)) return e.eq(Ka) || e.eq(Ya) ? Za : e.eq(Za) ? Ka : (t = this.shr(1).div(e).shl(1)).eq(Ga) ? e.isNegative() ? Ka : Ya : (r = this.sub(e.mul(t)), n = t.add(r.div(e)));
            if (e.eq(Za)) return this.unsigned ? Wa : Ga;
            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            n = Ga
        }
        for (r = this; r.gte(e);) {
            t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            for (var i = Math.ceil(Math.log(t) / Math.LN2), s = i <= 48 ? 1 : Va(2, i - 48), a = $a(t), o = a.mul(e); o.isNegative() || o.gt(r);) o = (a = $a(t -= s, this.unsigned)).mul(e);
            a.isZero() && (a = Ka), n = n.add(a), r = r.sub(o)
        }
        return n
    }, eo.div = eo.divide, eo.modulo = function(e) {
        return _a(e) || (e = ka(e)), La ? Pa((this.unsigned ? La.rem_u : La.rem_s)(this.low, this.high, e.low, e.high), La.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
    }, eo.mod = eo.modulo, eo.rem = eo.modulo, eo.not = function() {
        return Pa(~this.low, ~this.high, this.unsigned)
    }, eo.and = function(e) {
        return _a(e) || (e = ka(e)), Pa(this.low & e.low, this.high & e.high, this.unsigned)
    }, eo.or = function(e) {
        return _a(e) || (e = ka(e)), Pa(this.low | e.low, this.high | e.high, this.unsigned)
    }, eo.xor = function(e) {
        return _a(e) || (e = ka(e)), Pa(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }, eo.shiftLeft = function(e) {
        return _a(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? Pa(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : Pa(0, this.low << e - 32, this.unsigned)
    }, eo.shl = eo.shiftLeft, eo.shiftRight = function(e) {
        return _a(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? Pa(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : Pa(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }, eo.shr = eo.shiftRight, eo.shiftRightUnsigned = function(e) {
        if (_a(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
        var t = this.high;
        return e < 32 ? Pa(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : Pa(32 === e ? t : t >>> e - 32, 0, this.unsigned)
    }, eo.shru = eo.shiftRightUnsigned, eo.shr_u = eo.shiftRightUnsigned, eo.toSigned = function() {
        return this.unsigned ? Pa(this.low, this.high, !1) : this
    }, eo.toUnsigned = function() {
        return this.unsigned ? this : Pa(this.low, this.high, !0)
    }, eo.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }, eo.toBytesLE = function() {
        var e = this.high,
            t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }, eo.toBytesBE = function() {
        var e = this.high,
            t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }, Oa.fromBytes = function(e, t, r) {
        return r ? Oa.fromBytesLE(e, t) : Oa.fromBytesBE(e, t)
    }, Oa.fromBytesLE = function(e, t) {
        return new Oa(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t)
    }, Oa.fromBytesBE = function(e, t) {
        return new Oa(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t)
    };
    class to {
        constructor(e, t, r) {
            this.neg = this.negate, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqual, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqual, this.internalValue = new xa(e, t, r)
        }
        static fromNumber(e) {
            const t = new to(0);
            return t.internalValue = xa.fromNumber(e), t
        }
        static fromString(e) {
            const t = new to(0);
            return t.internalValue = xa.fromString(e), t
        }
        static fromValue(e) {
            const t = "object" == typeof e ? e.internalValue : e,
                r = new to(0);
            return r.internalValue = xa.fromValue(t), r
        }
        static fromObject(e) {
            const t = xa.fromValue(e);
            return to.fromString(t.toString())
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e
        }
        negate() {
            const e = this.internalValue.negate();
            return to.fromObject(e)
        }
        add(e) {
            const t = to.unwrapInputValue(e),
                r = this.internalValue.add(t);
            return to.fromObject(r)
        }
        sub(e) {
            const t = to.unwrapInputValue(e),
                r = this.internalValue.sub(t);
            return to.fromObject(r)
        }
        mul(e) {
            const t = to.unwrapInputValue(e),
                r = this.internalValue.mul(t);
            return to.fromObject(r)
        }
        div(e) {
            const t = to.unwrapInputValue(e),
                r = this.internalValue.div(t);
            return to.fromObject(r)
        }
        and(e) {
            const t = to.unwrapInputValue(e),
                r = this.internalValue.and(t);
            return to.fromObject(r)
        }
        equals(e) {
            const t = to.unwrapInputValue(e);
            return this.internalValue.equals(t)
        }
        lessThan(e) {
            const t = to.unwrapInputValue(e);
            return this.internalValue.lessThan(t)
        }
        lessThanOrEqual(e) {
            const t = to.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqual(t)
        }
        greaterThan(e) {
            const t = to.unwrapInputValue(e);
            return this.internalValue.greaterThan(t)
        }
        greaterThanOrEqual(e) {
            const t = to.unwrapInputValue(e);
            return this.internalValue.greaterThanOrEqual(t)
        }
        toNumber() {
            return this.internalValue.toNumber()
        }
        toString() {
            return this.internalValue.toString()
        }
        valueOf() {
            return this.internalValue.valueOf()
        }
    }
    to.defaultValue = to.fromObject(xa.ZERO), to.MIN_VALUE = to.fromObject(xa.MIN_VALUE), to.MAX_VALUE = to.fromObject(xa.MAX_VALUE);
    const ro = "outsystems-";

    function no(e, t) {
        if (t = null != t ? t : ro, "object" != typeof e || null === e) return;
        const r = {};
        for (const [n, i] of Object.entries(e)) r[t + n] = i;
        return r
    }

    function io(e, t) {
        const r = (t = null != t ? t : ro).toLowerCase();
        if ("object" != typeof e || null === e) return {};
        const n = {};
        for (const [i, s] of Object.entries(e)) i.toLowerCase().startsWith(r) && (n[i.substring(t.length)] = s);
        return n
    }
    var so = Object.freeze({
        __proto__: null,
        buildCustomHeaders: no,
        extractCustomHeaders: io
    });
    const ao = "Communication",
        oo = t => a(void 0, [t], void 0, (function*({
            url: t,
            params: r,
            headers: n,
            responseType: i,
            useLocaleInfo: s,
            timeout: a,
            timeoutHandler: o,
            baseURL: l,
            httpClient: u = Qt.resolve(e.ServiceNames.HttpClient)
        }) {
            if (!u) throw new Error("Could not resolve the http client instance.");
            try {
                return yield u.get({
                    url: t,
                    params: r,
                    headers: n,
                    responseType: i,
                    useLocaleInfo: s,
                    timeout: a,
                    timeoutHandler: o,
                    baseURL: l
                })
            } catch (e) {
                throw po(e)
            }
        })),
        lo = e => co(e) || ho(e),
        uo = e => null !== e && "object" == typeof e && "boolean" == typeof e.hasApiVersionChanged && "boolean" == typeof e.hasModuleVersionChanged,
        co = e => null !== e && "object" == typeof e && (!e.hasOwnProperty("exception") || void 0 === e.exception) && "string" == typeof e.clientSettingsHash && "boolean" == typeof e.shouldRefreshToken && uo(e.versionInfo),
        ho = e => null !== e && "object" == typeof e && "object" == typeof e.exception && "string" == typeof e.clientSettingsHash && ("number" == typeof e.status || void 0 === e.status) && "boolean" == typeof e.shouldRefreshToken && uo(e.versionInfo),
        go = t => a(void 0, [t], void 0, (function*({
            url: t,
            payload: r,
            params: n,
            headers: s,
            contentType: a,
            timeout: o,
            timeoutHandler: l,
            useLocaleInfo: u,
            baseURL: c,
            responseHandler: d,
            refreshAuthTokens: h = Nn,
            httpClient: g = Qt.resolve(e.ServiceNames.HttpClient),
            lifecycleEventsManager: m = Qt.resolve(e.ServiceNames.LifecycleEventsManager),
            actionOrAggregateName: p
        }) {
            if (!g) throw new Error("Could not resolve the http client instance.");
            const f = no(s),
                v = Object.assign(Object.assign({}, f), {
                    "content-type": "application/json; charset=UTF-8"
                });
            let y = [];
            try {
                const e = yield g.post({
                    url: t,
                    payload: r,
                    params: n,
                    headers: v,
                    contentType: null != a ? a : i.ContentType.Json,
                    timeout: o,
                    timeoutHandler: l,
                    useLocaleInfo: u,
                    baseURL: c,
                    responseHandler: mo(d)
                });
                if ((null == e ? void 0 : e.shouldRefreshToken) && (yield h()), y = (e => {
                        const t = [];
                        if (lo(e) && !e.versionInfo.hasModuleVersionChanged && e.versionInfo.hasApiVersionChanged) {
                            const e = "The application was unable to make a request to the server - the API version changed, but the module version did not.";
                            t.push({
                                clientMessage: e,
                                internalMessage: e
                            })
                        }
                        return t
                    })(e), lo(e) && fo(e, ((e, t) => null == m ? void 0 : m.onNewVersion(e, t))), ho(e)) throw vo(e, p);
                return null == e ? void 0 : e.data
            } catch (e) {
                throw po(e)
            } finally {
                for (const {
                        clientMessage: e,
                        internalMessage: t
                    }
                    of y) fi({
                    category: ao,
                    clientMessage: e,
                    internalMessage: t,
                    errorCode: i.ErrorCodes.Communication_Internal_Server_Error
                })
            }
        })),
        mo = e => {
            if ("function" == typeof e) return ({
                data: t,
                responseHeaders: r
            }) => {
                const n = io(r);
                e({
                    data: t,
                    responseHeaders: n
                })
            }
        },
        po = e => {
            var r, n, s, a, o, l;
            if ("OS-CLRT-40103" === e.errorCode) throw ii(ao, "User is not logged in", e.errorCode, e, t.Visibility.Internal), new We.SecurityException("Not authorized", Ye(e));
            if ((l = e.errorCode) && Object.values(i.ErrorCodes).includes(l)) {
                const t = null !== (n = null === (r = e.response) || void 0 === r ? void 0 : r.exception) && void 0 !== n ? n : e;
                throw new We.CommunicationException(`CommunicationException: ${null!==(s=t.message)&&void 0!==s?s:e.message}`, Ye(t), e.errorCode, e.category)
            }
            return e.errorCode = null !== (a = e.errorCode) && void 0 !== a ? a : i.ErrorCodes.Communication_Default, e.category = null !== (o = e.category) && void 0 !== o ? o : ao, e
        },
        fo = (e, t) => {
            if (e.versionInfo.hasModuleVersionChanged) {
                if (e.versionInfo.hasApiVersionChanged) throw t(!0, !!e.versionInfo.isAutoUpgradeEnabled), new We.ViewHasChangedException("View has changed.");
                t(!1, !!e.versionInfo.isAutoUpgradeEnabled)
            }
        },
        vo = (e, t) => {
            var r;
            const n = Qe(e.exception),
                s = `Post request ${t?`issued by '${t}' `:""}failed: ${n.message}`,
                a = {};
            return e.status && (a["http.status_code"] = e.status), fi({
                category: ao,
                clientMessage: s,
                internalMessage: "Post request failed",
                errorCode: null !== (r = n.errorCode) && void 0 !== r ? r : i.ErrorCodes.Communication_Default,
                errorObj: n,
                attributes: a
            }), n
        };
    var yo = Object.freeze({
        __proto__: null,
        get: oo,
        getResponseUrl: t => a(void 0, [t], void 0, (function*({
            url: t,
            params: r,
            headers: n,
            useLocaleInfo: i,
            timeout: s,
            timeoutHandler: a,
            baseURL: o,
            httpClient: l = Qt.resolve(e.ServiceNames.HttpClient)
        }) {
            if (!l) throw new Error("Could not resolve the http client instance.");
            return l.getResponseUrl({
                url: t,
                params: r,
                headers: n,
                useLocaleInfo: i,
                timeout: s,
                timeoutHandler: a,
                baseURL: o
            })
        })),
        post: go
    });
    const bo = "__cache";

    function To(e, t) {
        return null == e ? t : e
    }
    var wo;
    ! function(e) {
        e[e.Integer = 0] = "Integer", e[e.LongInteger = 1] = "LongInteger", e[e.Decimal = 2] = "Decimal", e[e.Currency = 3] = "Currency", e[e.Text = 4] = "Text", e[e.PhoneNumber = 5] = "PhoneNumber", e[e.Email = 6] = "Email", e[e.Boolean = 7] = "Boolean", e[e.Date = 8] = "Date", e[e.DateTime = 9] = "DateTime", e[e.Time = 10] = "Time", e[e.Record = 11] = "Record", e[e.RecordList = 12] = "RecordList", e[e.BinaryData = 13] = "BinaryData", e[e.Object = 14] = "Object"
    }(wo || (wo = {}));
    const Eo = e => {
        switch (e) {
            case wo.Integer:
                return "Integer";
            case wo.LongInteger:
                return "Long Integer";
            case wo.Decimal:
                return "Decimal";
            case wo.Currency:
                return "Currency";
            case wo.Text:
                return "Text";
            case wo.PhoneNumber:
                return "Phone Number";
            case wo.Email:
                return "Email";
            case wo.Boolean:
                return "Boolean";
            case wo.Date:
                return "Date";
            case wo.DateTime:
                return "Date Time";
            case wo.Time:
                return "Time";
            case wo.Record:
                return "Record";
            case wo.RecordList:
                return "List";
            case wo.BinaryData:
                return "Binary Data";
            case wo.Object:
                return "Object";
            default:
                return `Unknown: ${e}`
        }
    };
    class Io {
        constructor(e, t, r) {
            this._url = t, this.getOfflineContent = r, this._cachedBlob = null, this.authenticatedUrlsRegex = [/screenservices\/.*\/_BinaryContent\/.*/], "undefined" != typeof Blob && e instanceof Blob ? (this._cachedBlob = e, this.getOfflineContent = () => this._content ? Promise.resolve(this._content) : Io.blobToBase64(this._cachedBlob)) : this._content = e || null
        }
        get url() {
            return this._url
        }
        set url(e) {
            this._url = e, this.clearCachedBlob()
        }
        get cachedBlob() {
            return this._cachedBlob
        }
        get content() {
            return this._content
        }
        set content(e) {
            this._content = e, this.clearCachedBlob()
        }
        needsAuthentication() {
            var e;
            const t = null !== (e = this._url) && void 0 !== e ? e : "";
            return this.authenticatedUrlsRegex.some((e => e.test(t)))
        }
        loadBlobData() {
            return a(this, void 0, void 0, (function*() {
                var e;
                const t = yield oo({
                    url: null !== (e = this._url) && void 0 !== e ? e : "",
                    responseType: "blob"
                });
                return null != t ? t : new Blob
            }))
        }
        loadContent() {
            return a(this, void 0, void 0, (function*() {
                return this.needsAuthentication() ? this.loadBlobData().then((e => (this._cachedBlob = e, Promise.resolve(this)))) : this.getOfflineContent ? this.getOfflineContent().then((e => (this.content = e, Promise.resolve(this)))) : dt((() => this))
            }))
        }
        hasContent() {
            return !!(this._url && !this.needsAuthentication() || this._content)
        }
        fastEquals(e) {
            return e && this.constructor === e.constructor && this._url === e._url && this._content === e._content && (!!this.getOfflineContent && !!e.getOfflineContent || !this.getOfflineContent && !e.getOfflineContent)
        }
        base64toHex(e) {
            const t = atob(e);
            let r = "";
            for (let e = 0; e < t.length; e++) {
                const n = t.charCodeAt(e).toString(16);
                r += 2 === n.length ? n : "0" + n
            }
            return r
        }
        getContentType() {
            if (this._content) {
                const e = this.base64toHex(this._content.substr(0, 16));
                return "00000100" === e.substr(0, 8) ? "image/x-icon" : "ffd8ffdb" === e.substr(0, 8) || "ffd8ffe0" === e.substr(0, 8) || "ffd8ffe1" === e.substr(0, 8) ? "image/jpeg" : "49492a00" === e.substr(0, 8) || "4d4d002a" === e.substr(0, 8) ? "image/tiff" : "424d" === e.substr(0, 4) ? "image/bmp" : "474946" === e.substr(0, 6) ? "image/gif" : "89504e47" === e.substr(0, 8) ? "image/png" : "application/octet-stream"
            }
            return null
        }
        toDataURI() {
            return this._content ? `data:${this.getContentType()};base64,${this._content}` : null
        }
        toBlob() {
            var e;
            if (!this._cachedBlob && this._content) {
                const t = null !== (e = this.getContentType()) && void 0 !== e ? e : void 0;
                this._cachedBlob = Io.base64toBlob(this._content, t)
            }
            return this._cachedBlob
        }
        toArrayBuffer() {
            return this._content ? Io.base64ToArrayBuffer(this._content) : null
        }
        get length() {
            const e = this.toBlob();
            return e ? e.size : 0
        }
        static blobToBase64(e) {
            return new Promise(((t, r) => {
                const n = new FileReader;
                n.readAsDataURL(e), n.onload = () => {
                    const e = n.result;
                    t(e.substring(e.indexOf(",") + 1))
                }, n.onerror = () => {
                    r(n.error)
                }
            }))
        }
        static base64toBlob(e, t = "", r = 512) {
            const n = atob((e || "").replace(/\s/g, "")),
                i = [];
            for (let e = 0; e < n.length; e += r) {
                const t = n.slice(e, e + r),
                    s = new Array(t.length);
                for (let e = 0; e < t.length; e++) s[e] = t.charCodeAt(e);
                const a = new Uint8Array(s);
                i.push(a)
            }
            return new Blob(i, {
                type: t
            })
        }
        static base64ToArrayBuffer(e) {
            return Uint8Array.from(atob(e), (e => e.charCodeAt(0))).buffer
        }
        clearCachedBlob() {
            this._cachedBlob = null
        }
    }
    Io.defaultValue = new Io;
    class Ao {
        static get defaultValue() {
            return Ao.defaultValueField
        }
        constructor(e, t, r, n, i, s, a) {
            if (0 === arguments.length) this.date = new Date(1900, 0, 1, 0, 0, 0, 0);
            else if (1 === arguments.length)
                if (e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)) {
                    const t = e.getTime();
                    isNaN(t) ? this.date = new Date(1900, 0, 1, 0, 0, 0, 0) : this.date = new Date(t)
                } else this.date = new Date(e);
            else To(e, 1900) < 100 ? (this.date = new Date(100, 0, 1, 0, 0, 0, 0), this.date.setFullYear(To(e, 1900)), this.date.setMonth(To(t, 1) - 1), this.date.setDate(To(r, 1)), this.date.setHours(To(n, 0)), this.date.setMinutes(To(i, 0)), this.date.setSeconds(To(s, 0)), this.date.setMilliseconds(To(a, 0))) : this.date = new Date(To(e, 1900), To(t, 1) - 1, To(r, 1), To(n, 0), To(i, 0), To(s, 0), To(a, 0))
        }
        get year() {
            return this.date.getFullYear()
        }
        get month() {
            return this.date.getMonth() + 1
        }
        get day() {
            return this.date.getDate()
        }
        get hours() {
            return this.date.getHours()
        }
        get minutes() {
            return this.date.getMinutes()
        }
        get seconds() {
            return this.date.getSeconds()
        }
        get milliseconds() {
            return this.date.getMilliseconds()
        }
        get weekDay() {
            return this.date.getDay()
        }
        addYears(e) {
            const t = new Ao(this.year + e, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return 2 === this.month && 29 === this.day && 3 === t.month ? new Ao(t.year, 2, 28, t.hours, t.minutes, t.seconds, t.milliseconds) : t
        }
        daysInMonth(e, t) {
            return new Date(t, e, 0).getDate()
        }
        addMonths(e) {
            const t = new Ao(this.year, this.month + e, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return t.day === this.day ? t : new Ao(t.year, t.month - 1, this.daysInMonth(t.month - 1, t.year), t.hours, t.minutes, t.seconds, t.milliseconds)
        }
        addDays(e) {
            return new Ao(this.year, this.month, this.day + e, this.hours, this.minutes, this.seconds, this.milliseconds)
        }
        addHours(e) {
            return new Ao(this.year, this.month, this.day, this.hours + e, this.minutes, this.seconds, this.milliseconds)
        }
        addMinutes(e) {
            return new Ao(this.year, this.month, this.day, this.hours, this.minutes + e, this.seconds, this.milliseconds)
        }
        addSeconds(e) {
            return new Ao(this.year, this.month, this.day, this.hours, this.minutes, this.seconds + e, this.milliseconds)
        }
        addMilliseconds(e) {
            return new Ao(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds + e)
        }
        equals(e) {
            return !!e && this.date.getTime() === e.date.getTime()
        }
        eq(e) {
            return this.equals(e)
        }
        greaterThan(e) {
            return this.date > e.date
        }
        gt(e) {
            return this.greaterThan(e)
        }
        greaterThanOrEqualTo(e) {
            return this.date >= e.date
        }
        gte(e) {
            return this.greaterThanOrEqualTo(e)
        }
        lessThan(e) {
            return this.date < e.date
        }
        lt(e) {
            return this.lessThan(e)
        }
        lessThanOrEqualTo(e) {
            return this.date <= e.date
        }
        lte(e) {
            return this.lessThanOrEqualTo(e)
        }
        toNative() {
            return new Date(this.date.getTime())
        }
        getTime() {
            return this.date.getTime()
        }
        valueOf() {
            return this.date.valueOf()
        }
        static fromISODate(e) {
            return No.RFC3339_DATEPART.test(e) ? Ao.internalFromUTCWithoutConversion(e + "T00:00:00Z") : Ao.defaultValue
        }
        toISODate() {
            return this.toString(No.RFC3339_DATEPART_FORMAT)
        }
        static fromISOTime(e) {
            return No.RFC3339_TIMEPART.test(e) ? Ao.internalFromUTCWithoutConversion("1900-01-01T" + e + "Z") : Ao.defaultValue
        }
        toISOTime() {
            return this.toString(No.RFC3339_TIMEPART_FORMAT)
        }
        static fromISODateTime(e) {
            if ("" === (e = e || "") || e.indexOf("1900-01-01") >= 0 && e.indexOf("00:00:00") >= 0) return Ao.defaultValue;
            if (e.indexOf("T") > 0 && !/([+\-]\d{2}((:\d{2})|(\d{2})?)|Z)$/.test(e)) return Ao.internalFromUTCWithoutConversion(e.trim() + "Z");
            e = e.replace(/([+-]\d{2})$/, (function(e) {
                return e + "00"
            }));
            const t = Date.parse(e);
            return isNaN(t) ? Ao.defaultValue : new Ao(t)
        }
        static internalFromUTCWithoutConversion(e) {
            const t = Date.parse(e);
            if (!isNaN(t)) {
                const e = new Date(t);
                return new Ao(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
            }
            return Ao.defaultValue
        }
        getMillisecondsString() {
            return (this.milliseconds / 1e3).toFixed(3).substring(2, 5)
        }
        toString(e) {
            return void 0 === e ? this.equals(Ao.defaultValue) ? "1900-01-01T00:00:00" : this.date.toISOString() : e.replace(/(\\.)|dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|ff?f?|FF?F?|\.FF?F?|tt?|zz?z?/g, (e => {
                if (0 === e.indexOf("\\")) return e.substring(1);
                switch (e) {
                    case "hh":
                    case "h":
                        const t = this.hours < 13 ? this.hours : this.hours - 12;
                        return wa.padLeadingZeros((0 === this.hours ? 12 : t).toString(), e.length);
                    case "HH":
                    case "H":
                        return wa.padLeadingZeros(this.hours.toString(), e.length);
                    case "mm":
                    case "m":
                        return wa.padLeadingZeros(this.minutes.toString(), e.length);
                    case "ss":
                    case "s":
                        return wa.padLeadingZeros(this.seconds.toString(), e.length);
                    case "fff":
                        return this.getMillisecondsString();
                    case "ff":
                        return this.getMillisecondsString().substring(0, 2);
                    case "f":
                        return this.getMillisecondsString().substring(0, 1);
                    case ".FFF":
                    case ".FF":
                    case ".F":
                        return 0 === this.milliseconds ? "" : "." + wa.removeTrailingZeros(this.getMillisecondsString());
                    case "FFF":
                        return wa.removeTrailingZeros(this.getMillisecondsString());
                    case "FF":
                        return wa.removeTrailingZeros(this.getMillisecondsString()).substring(0, 2);
                    case "F":
                        return wa.removeTrailingZeros(this.getMillisecondsString()).substring(0, 1);
                    case "yyyy":
                    case "yyy":
                        const r = this.year.toString();
                        return "0" === r.charAt(0) ? this.year.toString().substring(1) : r;
                    case "yy":
                        return this.year.toString().substring(2, 4);
                    case "y":
                        return Number(this.year.toString().substring(2, 4)).toString();
                    case "dddd":
                        return wa.getDayName(this.weekDay);
                    case "ddd":
                        return wa.getShortDayName(this.weekDay);
                    case "dd":
                    case "d":
                        return wa.padLeadingZeros(this.day.toString(), e.length);
                    case "MMMM":
                        return wa.getMonthName(this.month);
                    case "MMM":
                        return wa.getShortMonthName(this.month);
                    case "MM":
                    case "M":
                        return wa.padLeadingZeros(this.month.toString(), e.length);
                    case "t":
                        return wa.get12HourNotation(this.hours).substring(0, 1);
                    case "tt":
                        return wa.get12HourNotation(this.hours);
                    case "zzz":
                        return wa.getTimezoneInformationFull(this.date.getTimezoneOffset());
                    case "zz":
                        return wa.getTimezoneInformationHoursFull(this.date.getTimezoneOffset());
                    case "z":
                        return wa.getTimezoneInformationHoursShort(this.date.getTimezoneOffset());
                    default:
                        return e
                }
            }))
        }
    }
    var No;
    Ao.defaultValueField = new Ao,
        function(e) {
            e.RFC3339_TIMEPART = /^([01][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9](\.\d+)?)?$/, e.RFC3339_DATEPART = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])$/, e.RFC3339_TIMEPART_FORMAT = "HH:mm:ss", e.RFC3339_DATEPART_FORMAT = "yyyy-MM-dd", e.MIN_INTEGER_VALUE = -2147483648, e.MAX_INTEGER_VALUE = 2147483647, e.MIN_LONGINTEGER_VALUE = to.MIN_VALUE, e.MAX_LONGINTEGER_VALUE = to.MAX_VALUE, e.MIN_DECIMAL_VALUE = new ya("2").pow(96).neg(), e.MAX_DECIMAL_VALUE = new ya("2").pow(96).minus(1), e.MIN_DATE_VALUE = new Ao(1753, 1, 1), e.MAX_DATE_VALUE = new Ao(9999, 12, 31), e.MIN_TIME_VALUE = Ao.defaultValue, e.MAX_TIME_VALUE = Ao.defaultValue.addHours(23).addMinutes(59).addSeconds(59), e.MIN_DATETIME_VALUE = new Ao(1753, 1, 1, 0, 0, 0), e.MAX_DATETIME_VALUE = new Ao(9999, 12, 31, 23, 59, 59), e.DEFAULT_INTEGER = 0, e.DEFAULT_LONGINTEGER = to.defaultValue, e.DEFAULT_DECIMAL = ya.defaultValue, e.DEFAULT_CURRENCY = ya.defaultValue, e.DEFAULT_TEXT = "", e.DEFAULT_PHONENUMBER = "", e.DEFAULT_EMAIL = "", e.DEFAULT_BOOLEAN = !1, e.DEFAULT_DATE = Ao.defaultValue, e.DEFAULT_DATETIME = Ao.defaultValue, e.DEFAULT_TIME = Ao.defaultValue, e.DEFAULT_BINARYDATA = Io.defaultValue, e.DEFAULT_OBJECT = null, e.FORMAT = new Ia(new wa("yyyy-MM-dd", "HH:mm:ss"), new Ea(".", "")), e.ISO_DATE_FORMAT_REGEXP = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])([T ]\d{2}:\d{2}(:\d{2}(\.\d+)?(([+\-]\d{2}((:\d{2})|(\d{2})?))|Z)?)?)?$/i
        }(No || (No = {}));
    class So {
        constructor() {
            this.map = {}
        }
        getItem(e) {
            return this.map[e]
        }
        setItem(e, t) {
            this.map[e] = t
        }
        invalidate(e) {
            void 0 === e ? this.map = {} : this.setItem(e, void 0)
        }
        clone() {
            const e = new So;
            for (const t in this.map) e.setItem(t, this.map[t]);
            return e
        }
    }
    class Do {
        constructor() {
            this.list = []
        }
        getItem(e) {
            if (!(e >= this.length)) return this.list[e]
        }
        append(e) {
            this.list.push(e)
        }
        appendMultiple(e) {
            this.list = this.list.concat(new Array(e))
        }
        setItem(e, t) {
            this.list[e] = t
        }
        insert(e, t) {
            this.list.splice(e, 0, t)
        }
        invalidate(e) {
            void 0 === e ? this.list = [] : this.list.splice(e, 1)
        }
        get length() {
            return this.list.length
        }
    }

    function Ro(e, t) {
        if ("string" == typeof e) {
            const r = t;
            return e.localeCompare(r)
        }
        return "number" == typeof e ? e - t : "boolean" == typeof e ? !e && t ? -1 : e && !t ? 1 : 0 : e.lessThan(t) ? -1 : e.greaterThan(t) ? 1 : 0
    }

    function Co(e, t) {
        return e && t && t.equals instanceof Function ? t.equals(e) : t === e
    }

    function xo(e) {
        switch (e) {
            case wo.Integer:
                return No.DEFAULT_INTEGER;
            case wo.LongInteger:
                return No.DEFAULT_LONGINTEGER;
            case wo.Decimal:
                return No.DEFAULT_DECIMAL;
            case wo.Currency:
                return No.DEFAULT_CURRENCY;
            case wo.Text:
                return No.DEFAULT_TEXT;
            case wo.PhoneNumber:
                return No.DEFAULT_PHONENUMBER;
            case wo.Email:
                return No.DEFAULT_EMAIL;
            case wo.Date:
                return No.DEFAULT_DATE;
            case wo.DateTime:
                return No.DEFAULT_DATETIME;
            case wo.Time:
                return No.DEFAULT_TIME;
            case wo.Boolean:
                return No.DEFAULT_BOOLEAN;
            case wo.BinaryData:
                return No.DEFAULT_BINARYDATA;
            case wo.Object:
                return No.DEFAULT_OBJECT;
            default:
                throw new TypeError("Records and Record lists are not basic types")
        }
    }
    class Lo {
        constructor(e, t, r, n, i) {
            if (this.emptyListItem = e, this.data = null != t ? t : new Ra, this.itemIds = null != r ? r : new Ra, this._itemIdSeed = null != n ? n : 0, this._modelId = i || Lo.nextModelId++, t && !r)
                for (let e = 0, t = this.data.count(); e < t; e++) this.itemIds = this.itemIds.push(this._itemIdSeed), this._itemIdSeed = this._itemIdSeed + 1 | 0
        }
        get modelId() {
            return this._modelId
        }
        push(e) {
            return new Lo(this.emptyListItem, this.data.push(e), this.itemIds.push(this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId)
        }
        addFromOther(e) {
            return new Lo(this.emptyListItem, this.data.addFromOther(e.data), this.itemIds.pushAll(e.data.map((() => this._itemIdSeed++))), this._itemIdSeed, this._modelId)
        }
        pushAll(e) {
            return new Lo(this.emptyListItem, this.data.pushAll(e), this.itemIds.pushAll(e.map((() => this._itemIdSeed++))), this._itemIdSeed, this._modelId)
        }
        remove(e) {
            return new Lo(this.emptyListItem, this.data.remove(e), this.itemIds.remove(e), this._itemIdSeed, this._modelId)
        }
        insert(e, t) {
            return new Lo(this.emptyListItem, this.data.insert(e, t), this.itemIds.insert(e, this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId)
        }
        sort(e, t, r) {
            const n = this.data.map(((r, n) => ({
                    item: e(n),
                    itemId: this.itemIds.get(n),
                    by: t(e(n))
                }))),
                i = r ? 1 : -1;
            n.sort(((e, t) => i * Ro(e.by, t.by)));
            const s = Ra.fromJS(n.map((e => e.item))),
                a = Ra.fromJS(n.map((e => e.itemId)));
            return new Lo(this.emptyListItem, s, a, this._itemIdSeed, this._modelId)
        }
        getEmptyListItem() {
            return this.emptyListItem
        }
        setEmptyListItem(e) {
            return new Lo(e, this.data, this.itemIds, this._itemIdSeed, this._modelId)
        }
        get(e) {
            return this.data.get(e)
        }
        getId(e) {
            return `${this.modelId}_${this.itemIds.get(e)}`
        }
        count() {
            return this.data.count()
        }
        isEmpty() {
            return this.data.isEmpty()
        }
        set(e, t) {
            return new Lo(this.emptyListItem, this.data.set(e, t), this.itemIds, this._itemIdSeed, this._modelId)
        }
        clear() {
            return new Lo(this.emptyListItem, this.data.clear(), this.itemIds.clear(), this._itemIdSeed, this._modelId)
        }
        forEach(e) {
            this.data.forEach(e)
        }
        reduce(e, t) {
            return this.data.reduce(e, t)
        }
        static fromJS(e, t) {
            return new Lo(t, Ra.fromJS(e))
        }
        static fromJSON(e, t) {
            return new Lo(t, Ra.fromJS(e))
        }
        clone() {
            return new Lo(this.emptyListItem, this.data.clone(), this.itemIds.clone(), this._itemIdSeed)
        }
    }
    Lo.nextModelId = 1;
    class Oo {
        constructor() {
            this.writePropagateHandler = this.defaultWritePropagate, this.propagationParent = this
        }
        static getData(e) {
            if (void 0 !== e && e.constructor !== Lo) return e.data
        }
        static setPropagationHandler(e, t, r, n) {
            e.writePropagateHandler = n, Oo.setPropagationParent(e, t), Oo.setPropagationKey(e, r)
        }
        static setPropagationParent(e, t) {
            e.propagationParent = t
        }
        static setPropagationKey(e, t) {
            e.propagationKey = t
        }
        writePropagate(e, t) {
            var r;
            if ((null === (r = this.data) || void 0 === r ? void 0 : r.constructor) !== (null == e ? void 0 : e.constructor)) throw new Error("Unexpected new data type");
            this.data = e, this.writePropagateHandler.apply(this.propagationParent, [this.propagationKey, e, t])
        }
        defaultWritePropagate(e, t, r) {
            this.onDefaultWritePropagate(r)
        }
        onDefaultWritePropagate(e) {}
    }
    class _o extends Oo {
        constructor(e, t) {
            super(), this.cache = null != t ? t : new So, this.data = e || this.constructor.createDefaultData()
        }
        static createDefaultData() {
            const e = this.RecordClass;
            if (e) return new e
        }
        getBasicProperty(e) {
            return this.data.get(e)
        }
        setBasicProperty(e, t, r, n) {
            this.data.get(e) !== t && (_o.checkType(r, t, n), this.writePropagate(this.data.set(e, t), this.cache), this.onPropertyValueChanged(e))
        }
        onPropertyValueChanged(e) {}
        getComplexProperty(e, t) {
            let r = this.cache.getItem(e);
            if (r) return _o.setPropagationParent(r, this), r;
            const n = this.data.get(e),
                i = this.cache.getItem(e + bo);
            return r = new t(n, i || null), this.cache.setItem(e, r), i && this.cache.invalidate(e + bo), _o.setPropagationHandler(r, this, e, this.internalSetComplexProperty), r
        }
        setComplexProperty(e, t, r, n) {
            this.setProperties([{
                name: e,
                value: t,
                expectedType: r,
                valueType: n,
                isBasicType: !1
            }])
        }
        internalSetComplexProperty(e, t, r) {
            this.internalSetProperties([{
                name: e,
                value: t,
                isBasicType: !1
            }], r)
        }
        setProperties(e) {
            var t;
            const r = [];
            for (const n of e) {
                const e = null !== (t = _o.getData(n.value)) && void 0 !== t ? t : n.value;
                this.data.get(n.name) !== e && (void 0 !== n.expectedType && _o.checkType(n.expectedType, n.value, n.valueType), r.push({
                    name: n.name,
                    value: e,
                    isBasicType: n.isBasicType
                }))
            }
            r.length > 0 && this.internalSetProperties(r)
        }
        internalSetProperties(e, t) {
            let r = this.data;
            const n = this.cloneCache();
            for (const i of e) r = r.set(i.name, i.value), i.isBasicType || (n.invalidate(i.name), n.invalidate(i.name + bo), t && n.setItem(i.name + bo, t));
            this.writePropagate(r, n);
            for (const t of e) this.onPropertyValueChanged(t.name)
        }
        cloneCache() {
            return this.cache.clone()
        }
        onDefaultWritePropagate(e) {
            this.cache = e
        }
        static checkType(e, t, r) {
            switch (e) {
                case wo.Integer:
                    _o.ensureValidInteger(t);
                    break;
                case wo.LongInteger:
                    _o.ensureValidLongInteger(t);
                    break;
                case wo.Decimal:
                case wo.Currency:
                    _o.ensureValidDecimal(t);
                    break;
                case wo.Text:
                case wo.PhoneNumber:
                    _o.ensureValidText(t);
                    break;
                case wo.Email:
                    _o.ensureValidEmail(t);
                    break;
                case wo.Boolean:
                    _o.ensureValidBoolean(t);
                    break;
                case wo.Date:
                    _o.ensureValidDate(t);
                    break;
                case wo.Time:
                    _o.ensureValidTime(t);
                    break;
                case wo.DateTime:
                    _o.ensureValidDateTime(t);
                    break;
                case wo.Record:
                case wo.RecordList:
                    _o.ensureValidComplexType(t, r);
                    break;
                case wo.BinaryData:
                    _o.ensureValidBinaryData(t);
                    break;
                case wo.Object:
                    break;
                default:
                    throw new TypeError("Unexpected data type: " + e)
            }
        }
        static ensureValidBinaryData(e) {
            if (!("string" == typeof e || e instanceof Io)) throw new TypeError("Expecting a Binary Data, found: " + e)
        }
        static ensureValidInteger(e) {
            if ("number" != typeof e || isNaN(e) || e % 1 != 0) throw new TypeError("Expecting an Integer, found: " + e);
            if (e < No.MIN_INTEGER_VALUE) throw new TypeError("Integers must be greater than " + No.MIN_INTEGER_VALUE + ", found: " + e);
            if (e > No.MAX_INTEGER_VALUE) throw new TypeError("Integers must be lower than " + No.MAX_INTEGER_VALUE + ", found: " + e)
        }
        static ensureValidLongInteger(e) {
            if (!e || e.constructor !== to) throw new TypeError("Expecting a LongInteger, found: " + e);
            if (e.lessThan(No.MIN_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be greater than " + No.MIN_LONGINTEGER_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(No.MAX_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be lower than " + No.MAX_LONGINTEGER_VALUE.toString() + ", found: " + e.toString())
        }
        static ensureValidDecimal(e) {
            if (!e || e.constructor !== ya) throw new TypeError(`Expecting a Decimal, found: ${e}`);
            if (e.lessThan(No.MIN_DECIMAL_VALUE)) throw new TypeError("Decimals must be greater than " + No.MIN_DECIMAL_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(No.MAX_DECIMAL_VALUE)) throw new TypeError("Decimals must be lower than " + No.MAX_DECIMAL_VALUE.toString() + ", found: " + e.toString())
        }
        static ensureValidText(e) {
            if ("string" != typeof e) throw new TypeError(`Expecting a Text, found: ${e}`)
        }
        static ensureValidEmail(e) {
            if ("string" != typeof e) throw new TypeError(`Expecting an Email, found: ${e}`)
        }
        static ensureValidBoolean(e) {
            if ("boolean" != typeof e) throw new TypeError(`Expecting a Boolean, found: ${e}`)
        }
        static ensureValidDate(e) {
            if (!e || e.constructor !== Ao) throw new TypeError(`Expecting a Date, found: ${e}`)
        }
        static ensureValidTime(e) {
            if (!e || e.constructor !== Ao) throw new TypeError(`Expecting a Time, found: ${e}`)
        }
        static ensureValidDateTime(e) {
            if (!e || e.constructor !== Ao) throw new TypeError(`Expecting a DateTime, found: ${e}`)
        }
        static ensureValidComplexType(e, t) {
            if (e) {
                if (e.constructor === t) return;
                if (void 0 !== e.isCompatibleWith) {
                    if (e.isCompatibleWith(t)) return;
                    throw new TypeError(`Expecting a ${t.name} type, found:  ${e.constructor.name}`)
                }
            }
            throw new TypeError(`Expecting a Record or RecordList, found: ${e}`)
        }
        replaceWith(e) {
            const t = _o.getData(e);
            this.writePropagate(t, new So)
        }
        fastEquals(e) {
            return this === e
        }
        equals(e) {
            return !(!e || this.constructor !== e.constructor)
        }
        static defineRecordClass(e) {
            return Sa(e)
        }
        clone() {
            return new(0, this.constructor)(this.data, this.cloneCache())
        }
    }
    class Mo {
        constructor(e, t, r, n, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = r, this.mandatory = n, this.ignoreForServer = i, this.dataType = s, this.optimizeList = o, this.complexType = l, this.defaultValue = a()
        }
    }
    class Uo {
        constructor(e, t, r, n, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = r, this.mandatory = n, this.ignoreForServer = i, this.dataType = s, this.defaultValueGetter = a, this.optimizeList = o, this.complexType = l
        }
        get defaultValue() {
            return this.defaultValueGetter()
        }
    }
    class Fo extends _o {
        static get isGenericRecordType() {
            return !0
        }
        getAttributes() {
            return this.constructor.Attributes || []
        }
        static getAttributes() {
            return this.Attributes || []
        }
        static isAnonymousRecord() {
            return this._isAnonymousRecord
        }
        constructor(e, t) {
            super(e, t)
        }
        static attr(e, t, r, n, i, s, a, o = !0, l) {
            let u;
            return "boolean" != typeof o ? (l = o, u = !0) : u = o, s === wo.DateTime || s === wo.Date || s === wo.Time ? new Uo(e, t, r, n, i, s, a, u, l) : new Mo(e, t, r, n, i, s, a, u, l)
        }
        static attributesToDeclare() {
            return []
        }
        static init() {
            const e = this,
                t = e.attributesToDeclare();
            e.Attributes = t, t.forEach((t => {
                t.attrName in e.prototype || (t.dataType === wo.Record || t.dataType === wo.RecordList ? e.defineComplexProperty(t.attrName, t.dataType, t.complexType) : e.defineBasicProperty(t.attrName, t.dataType))
            })), e.RecordClass = _o.defineRecordClass(t.reduce(((e, t) => (e[t.attrName] = null, e)), {})), e.prototype.equals = function(e) {
                let r = Fo.prototype.equals.call(this, e);
                return t.forEach((t => {
                    var n;
                    (n = t.dataType) === wo.Record || n === wo.RecordList || n === wo.LongInteger || n === wo.Decimal || n === wo.Currency || n === wo.DateTime || n === wo.Time || n === wo.Date ? r && (r = this[t.attrName].equals(e[t.attrName])) : r && (r = this[t.attrName] === e[t.attrName])
                })), r
            }
        }
        static createDefaultData() {
            const e = this,
                t = e.RecordClass;
            if (t) {
                const r = {};
                for (const t of e.Attributes) t.dataType === wo.Record || t.dataType === wo.RecordList ? r[t.attrName] = _o.getData(t.defaultValue) : r[t.attrName] = t.defaultValue;
                return new t(r)
            }
        }
        static defineBasicProperty(e, t) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.getBasicProperty(e)
                },
                set: function(r) {
                    this.setBasicProperty(e, r, t)
                }
            })
        }
        static defineComplexProperty(e, t, r) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.getComplexProperty(e, r)
                },
                set: function(n) {
                    this.setComplexProperty(e, n, t, r)
                }
            })
        }
        static isCompatibleWith(e) {
            return this === e || this.isAnonymousRecord() && e.isAnonymousRecord() && this.UniqueId === e.UniqueId
        }
        isCompatibleWith(e) {
            return e.prototype instanceof Fo && this.constructor.isCompatibleWith(e)
        }
        getNonSerializableAttributes() {
            return this.getAttributes().filter((e => e.dataType === wo.Object)).map((e => e.attrName))
        }
    }
    Fo.UniqueId = "", Fo._isAnonymousRecord = !1;
    class $o extends Oo {
        static getItemType() {
            return this.itemType
        }
        getCache() {
            return null
        }
        newItem(e) {
            throw new Error("@abstract")
        }
        resetEmptyListItem() {
            this.data = this.data.setEmptyListItem(this.newItem())
        }
        get emptyListItem() {
            return this.isEmpty ? this.data.getEmptyListItem() : this.data.get(0)
        }
        set emptyListItem(e) {
            if (this.isEmpty) {
                if (this.data.getEmptyListItem() === e) return;
                this.writePropagate(this.data.setEmptyListItem(e), this.getCache())
            } else {
                if (this.data.get(0) === e) return;
                this.writePropagate(this.data.set(0, e), this.getCache())
            }
        }
        get modelId() {
            return this.data.modelId
        }
        get isEmpty() {
            return this.data.isEmpty()
        }
        get length() {
            return this.data.count()
        }
        isValidIndex(e, t = !1) {
            return e % 1 == 0 && e >= 0 && e < this.length + (t ? 1 : 0)
        }
        checkIndex(e, t = !1) {
            if (!this.isValidIndex(e, t)) {
                let t = "Index out of bounds. Index " + e + " for ";
                throw this.isEmpty ? t += "empty list." : t += "bounds [0, " + (this.length - 1) + "].", new Error(t)
            }
        }
        idOf(e) {
            return this.checkIndex(e), this.data.getId(e)
        }
        append(e) {
            this.writePropagate(this.data.push(e), this.getCache())
        }
        appendAll(e) {
            e.length > 0 && this.writePropagate(this.data.addFromOther(e.data), this.getCache())
        }
        pushAll(e) {
            e.length > 0 && this.writePropagate(this.data.pushAll(e), this.getCache())
        }
        insert(e, t) {
            this.checkIndex(e, !0), this.writePropagate(this.data.insert(e, t), this.getCache())
        }
        remove(e) {
            this.checkIndex(e), 1 === this.length && this.resetEmptyListItem(), this.writePropagate(this.data.remove(e), this.getCache())
        }
        clear() {
            this.resetEmptyListItem(), this.writePropagate(this.data.clear(), this.getCache())
        }
        indexOf(e) {
            for (let t = 0; t < this.length; t++)
                if (e(this.getItem(t))) return t;
            return -1
        }
        any(e) {
            return -1 !== this.indexOf(e)
        }
        all(e) {
            return !this.any((t => !e(t)))
        }
        filter(e) {
            const t = new this.constructor,
                r = [];
            for (let t = 0; t < this.length; t++) {
                const n = this.getItem(t);
                e(n) && r.push(n)
            }
            return t.pushAll(r), t
        }
        distinct() {
            const e = new this.constructor,
                t = new Array;
            for (let r = 0; r < this.length; r++) {
                const n = this.getItem(r);
                let i = !0;
                for (let e = 0; e < t.length; e++)
                    if (Co(n, this.getItem(t[e]))) {
                        i = !1;
                        break
                    } i && (t.push(r), e.append(n))
            }
            return e
        }
        sort(e, t) {
            const r = [];
            for (let e = 0; e < this.length; e++) r[e] = this.getItem(e);
            const n = t ? 1 : -1;
            r.sort(((t, r) => n * Ro(e(t), e(r)))), this.clear(), this.pushAll(r)
        }
        getCurrent(e) {
            if (this.isEmpty) return this.emptyListItem;
            {
                const t = this.getCurrentRowNumber(e);
                return this.getItem(t)
            }
        }
        getCurrentRowNumber(e) {
            return e.getCurrentRowNumber(this)
        }
        getItem(e) {
            return this.checkIndex(e), this.data.get(e)
        }
        setCurrent(e, t) {
            if (this.isEmpty) this.emptyListItem = t;
            else {
                const r = this.getCurrentRowNumber(e);
                this.setItem(r, t)
            }
        }
        setItem(e, t) {
            this.checkIndex(e), this.data.get(e) !== t && this.writePropagate(this.data.set(e, t), this.getCache())
        }
        fastEquals(e) {
            return this === e
        }
        equals(e) {
            if (!e || this.constructor !== e.constructor || this.length !== e.length) return !1;
            if (this.isEmpty) {
                return Co(this.emptyListItem, e.emptyListItem)
            }
            for (let t = 0; t < this.length; t++) {
                if (!Co(this.getItem(t), e.getItem(t))) return !1
            }
            return !0
        }
    }
    class Po extends $o {
        constructor(e) {
            super(), this.data = e || new Lo(this.newItem())
        }
        static get isBasicTypeListType() {
            return !0
        }
        static getTypeDefaultValue() {
            throw new Error("Not implemented: getTypeDefaultValue")
        }
        newItem() {
            return this.constructor.getTypeDefaultValue()
        }
        clone() {
            return new(0, this.constructor)(this.data.clone())
        }
    }
    class Vo extends $o {
        constructor(e, t) {
            if (super(), this._recordType = this.constructor.getItemType(), !this._recordType) throw new TypeError("GenericRecordLists must define a RecordType");
            this.data = e || new Lo(Fo.getData(this.newItem())), this.cache = null != t ? t : new Do
        }
        static get isGenericRecordListType() {
            return !0
        }
        getCache() {
            return this.cache
        }
        newItem(e) {
            return new(this.getRecordType())(e)
        }
        resetEmptyListItem() {
            this.data = this.data.setEmptyListItem(Fo.getData(this.newItem()))
        }
        getRecordType() {
            return this._recordType
        }
        get emptyListItem() {
            return this.internalGetItem(0, this.isEmpty)
        }
        set emptyListItem(e) {
            this.isEmpty ? this.internalSetEmptyListItem(0, e) : this.internalSetItem(0, e)
        }
        append(e) {
            this.isEmpty && this.cache.invalidate(0), super.append(Fo.getData(e)), this.cache.append(void 0)
        }
        appendAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.appendAll(e), this.cache.appendMultiple(e.length)
        }
        pushAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.pushAll(e.map((e => _o.getData(e)))), this.cache.appendMultiple(e.length)
        }
        insert(e, t) {
            this.checkIndex(e, !0), this.isEmpty && this.cache.invalidate(0), super.insert(e, Fo.getData(t)), this.cache.insert(e, void 0)
        }
        getItem(e) {
            return this.internalGetItem(e, !1)
        }
        internalGetItem(e, t) {
            t || this.checkIndex(e);
            let r = this.cache.getItem(e);
            return r ? (Vo.setPropagationParent(r, this), Vo.setPropagationKey(r, e), r) : (t ? (r = this.newItem(this.data.getEmptyListItem()), Vo.setPropagationHandler(r, this, e, this.internalSetEmptyListItem)) : (r = this.newItem(this.data.get(e)), Vo.setPropagationHandler(r, this, e, this.internalSetItem)), this.cache.setItem(e, r), r)
        }
        setItem(e, t) {
            this.internalSetItem(e, t)
        }
        internalSetItem(e, t, r) {
            var n;
            const i = null !== (n = Fo.getData(t)) && void 0 !== n ? n : t;
            this.checkIndex(e), this.data.get(e) !== i && (this.writePropagate(this.data.set(e, i), this.cache), this.cache.setItem(e, void 0))
        }
        internalSetEmptyListItem(e, t, r) {
            var n;
            const i = null !== (n = Fo.getData(t)) && void 0 !== n ? n : t;
            this.data.getEmptyListItem() !== i && (this.writePropagate(this.data.setEmptyListItem(i), this.cache), this.cache.setItem(e, void 0))
        }
        remove(e) {
            super.remove(e), this.cache.invalidate(e)
        }
        clear() {
            super.clear(), this.cache.invalidate()
        }
        readAll(e, t) {
            const r = [];
            for (let n = 0; n < t.length; n++) {
                const i = this.newItem();
                e(i, t.item(n)), r.push(i)
            }
            this.pushAll(r)
        }
        clone() {
            return new(0, this.constructor)(this.data.clone())
        }
        static isCompatibleWith(e) {
            return this === e || this.getItemType().isCompatibleWith(e.getItemType())
        }
        isCompatibleWith(e) {
            return e.prototype instanceof Vo && this.constructor.isCompatibleWith(e)
        }
    }
    class Bo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_INTEGER
        }
    }
    Bo.itemType = wo.Integer;
    class ko extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_LONGINTEGER
        }
    }
    ko.itemType = wo.LongInteger;
    class zo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_DATE
        }
    }
    zo.itemType = wo.Date;
    class Ho extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_DATETIME
        }
    }
    Ho.itemType = wo.DateTime;
    class jo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_TIME
        }
    }
    jo.itemType = wo.Time;
    class qo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_DECIMAL
        }
    }
    qo.itemType = wo.Decimal;
    class Go extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_CURRENCY
        }
    }
    Go.itemType = wo.Currency;
    class Wo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_EMAIL
        }
    }
    Wo.itemType = wo.Email;
    class Ko extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_PHONENUMBER
        }
    }
    Ko.itemType = wo.PhoneNumber;
    class Jo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_BOOLEAN
        }
    }
    Jo.itemType = wo.Boolean;
    class Yo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_BINARYDATA
        }
    }
    Yo.itemType = wo.BinaryData;
    class Xo extends Po {
        constructor(e) {
            super(e)
        }
        static getTypeDefaultValue() {
            return No.DEFAULT_TEXT
        }
    }
    Xo.itemType = wo.Text;
    class Qo {
        constructor(e) {
            this.varValue = e
        }
        get value() {
            return this.varValue
        }
        set value(e) {
            this.setValue(e)
        }
        setValue(e) {
            this.varValue = e
        }
    }

    function Zo() {
        return e => {
            const t = e;
            void 0 !== t.init && t.init()
        }
    }
    let el = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("JSON", "jSONOut", "jSONOut", !0, !0, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    el = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], el);
    let tl = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("ExceptionMessage", "exceptionMessageAttr", "exceptionMessageAttr", !0, !0, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    tl = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], tl);
    class rl {
        constructor() {
            this.typeDefinitions = new Map, this.typeCache = new Map
        }
        isTypeRegistered(e) {
            return void 0 !== this.typeDefinitions.get(e)
        }
        registerTypeDefinition(e, t) {
            this.typeDefinitions.set(e, t)
        }
        getType(e) {
            const t = this.typeCache.get(e);
            if (t) return t;
            const r = this.typeDefinitions.get(e);
            if (!r) throw new TypeError(`Type ${e} was not registered`);
            let n = class extends Fo {
                constructor(e, t) {
                    super(e, t)
                }
                static attributesToDeclare() {
                    return r ? r.map((e => {
                        var t, r, n;
                        return this.attr(e.name, e.attrName, e.nameForJson || e.attrName, null !== (t = e.mandatory) && void 0 !== t && t, null === (r = e.ignoreForServer) || void 0 === r || r, e.dataType, e.defaultValue, null === (n = e.optimizeList) || void 0 === n || n, e.complexType)
                    })).concat(super.attributesToDeclare()) : []
                }
            };
            return n = s([e => {
                const t = e;
                void 0 !== t.init && t.init()
            }], n), this.typeCache.set(e, n), n
        }
    }
    class nl extends rl {
        constructor(e, t, r) {
            super(), this.mainAttributeName = e, this.mainAttributeAttrName = t, this.additionalAttributes = r
        }
        registerTypeDefinition(e, t) {
            throw new Error("Invalid operation")
        }
        createMainAttributeInfo(e) {
            return {
                name: this.mainAttributeName,
                attrName: this.mainAttributeAttrName,
                mandatory: !0,
                dataType: this.getDataType(e),
                defaultValue: this.getDefaultValue(e),
                complexType: this.getComplexType(e)
            }
        }
        registerTypeIfNeeded(e) {
            if (!this.isTypeRegistered(e)) {
                let t = [this.createMainAttributeInfo(e)];
                this.additionalAttributes && (t = t.concat(this.additionalAttributes)), super.registerTypeDefinition(e, t)
            }
        }
        getType(e) {
            return this.registerTypeIfNeeded(e), super.getType(e)
        }
    }
    class il extends nl {
        constructor(e, t, r) {
            super(e, t, r)
        }
        getDataType(e) {
            return e
        }
        getDefaultValue(e) {
            return () => xo(e)
        }
        getComplexType(e) {}
    }
    class sl extends nl {
        constructor(e, t, r) {
            super(e, t, r)
        }
        getDataType(e) {
            return wo.Record
        }
        getDefaultValue(e) {
            return () => Oo.getData(new e)
        }
        getComplexType(e) {
            return e
        }
    }
    var al;
    ! function(e) {
        function t(e) {
            return e && e.constructor === ya
        }

        function r(e) {
            return "string" == typeof e
        }

        function n(e) {
            return "boolean" == typeof e
        }

        function i(e) {
            return s(e) && !isNaN(e)
        }

        function s(e) {
            return "number" == typeof e
        }

        function a(e) {
            return e && e.constructor === to
        }

        function o(e) {
            return e instanceof Ao
        }

        function l(e) {
            return o(e) && !isNaN(e.getTime())
        }

        function u(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }
        e.isDecimal = t, e.isBinaryData = function(e) {
            var t;
            return (null === (t = null == e ? void 0 : e.value) || void 0 === t ? void 0 : t.constructor) === Io
        }, e.isValidDecimal = function(e) {
            return t(e) && !e.isNaN()
        }, e.isWithinDecimalRange = function(e) {
            return No.MIN_DECIMAL_VALUE.lessThanOrEqualTo(e) && No.MAX_DECIMAL_VALUE.greaterThanOrEqualTo(e)
        }, e.isText = r, e.isBoolean = n, e.isBasicType = function(e) {
            return r(e) || s(e) || n(e) || o(e) || a(e) || t(e)
        }, e.isValidInteger = function(e) {
            return i(e) && e % 1 == 0
        }, e.isValidJsNumber = i, e.isJsNumber = s, e.isWithinIntegerRange = function(e) {
            return e >= No.MIN_INTEGER_VALUE && e <= No.MAX_INTEGER_VALUE
        }, e.isValidLongInteger = function(e) {
            return a(e)
        }, e.isLongInteger = a, e.isValidDate = function(e) {
            return l(e) && e.hours === No.DEFAULT_DATE.hours && e.minutes === No.DEFAULT_DATE.minutes && e.seconds === No.DEFAULT_DATE.seconds
        }, e.isValidTime = function(e) {
            return l(e) && e.year === No.DEFAULT_TIME.year && e.month === No.DEFAULT_TIME.month && e.day === No.DEFAULT_TIME.day
        }, e.isDateTime = o, e.isValidDateTime = l, e.isJsDate = u, e.isValidJsDate = function(e) {
            return u(e) && !isNaN(e.getTime())
        }, e.hasBinaryDataInterface = function(e) {
            return !!e && (void 0 !== e.content || void 0 !== e.url)
        };
        const c = 9007199254740991,
            d = -9007199254740991;
        e.ensureNumberInsideBounds = function(e) {
            let t = "",
                r = "";
            if (e.greaterThan(c)) t = "maximum", r = c.toString();
            else {
                if (!e.lessThan(d)) return;
                t = "minimum", r = d.toString()
            }
            const n = `Unable to convert ${e.toString()} to the Javascript Number type since exceeds the ${t} value allowed which is ${r}.`;
            throw new We.NumberOverflowException(n)
        }, e.ensureNumberPrecision = function(e) {
            if (e.decimalPlaces() > 16) {
                const t = `Unable to convert ${e.toString()} to the Javascript Number type because it will lead to precision loss. The maximum safe number of digits after the decimal point is 16.`;
                throw new We.NumberOverflowException(t)
            }
        };
        class h {
            static get None() {
                return ""
            }
            static get Minimum() {
                return "minimum"
            }
            static get Maximum() {
                return "maximum"
            }
        }

        function g(e, t, r, n) {
            let i = h.None,
                s = "";
            const a = Math.max(t, d),
                o = Math.min(r, c);
            if (e < a) i = h.Minimum, s = a.toString();
            else {
                if (!(e > o)) return;
                i = h.Maximum, s = o.toString()
            }
            throw new We.NumberOverflowException(function(e, t, r, n) {
                return `Unable to convert ${e} to the ${t} type since it exceeds the ${r} value allowed which is ${n}.`
            }(e.toString(), n, i, s))
        }
        e.ensureIntegerInsideBounds = function(e) {
            g(e, No.MIN_INTEGER_VALUE, No.MAX_INTEGER_VALUE, "Integer")
        }, e.ensureLongIntegerInsideBounds = function(e) {
            g(e, No.MIN_LONGINTEGER_VALUE.toNumber(), No.MAX_LONGINTEGER_VALUE.toNumber(), "Long Integer")
        }, e.ensureDecimalInsideBounds = function(e) {
            g(e, No.MIN_DECIMAL_VALUE.toNumber(), No.MAX_DECIMAL_VALUE.toNumber(), "Decimal")
        }
    }(al || (al = {}));
    var ol = Object.freeze({
        __proto__: null,
        get DataTypes() {
            return wo
        },
        mapDataTypeToName: Eo,
        Decimal: ya,
        LongInteger: to,
        BinaryData: Io,
        DateTime: Ao,
        get Constants() {
            return No
        },
        Cache: So,
        ListCache: Do,
        compare: Ro,
        equals: Co,
        areBinaryNulls: function(e, t) {
            return !e.hasContent() && !t.hasContent()
        },
        defaultForType: xo,
        ImmutableListWithTracking: Lo,
        ImmutableBase: Oo,
        Record: _o,
        GenericRecord: Fo,
        List: $o,
        BasicTypeList: Po,
        GenericRecordList: Vo,
        IntegerList: Bo,
        LongIntegerList: ko,
        DateList: zo,
        DateTimeList: Ho,
        TimeList: jo,
        DecimalList: qo,
        CurrencyList: Go,
        EmailList: Wo,
        PhoneNumberList: Ko,
        BooleanList: Jo,
        BinaryDataList: Yo,
        TextList: Xo,
        BasicVariableHolder: Qo,
        VariableHolder: class extends Qo {
            constructor(e) {
                super(e)
            }
            setValue(e) {
                super.setValue(e ? e.clone() : e)
            }
        },
        RecordWithStaticConstructor: Zo,
        get JSONSerializeOutputType() {
            return el
        },
        get ErrorHandlerOutputType() {
            return tl
        },
        RecordTypeFactory: rl,
        TypeKeyedTypeFactory: nl,
        BasicTypeKeyedTypeFactory: il,
        ComplexTypeKeyedTypeFactory: sl,
        get TypeValidations() {
            return al
        }
    });
    const ll = "Authorization";
    var ul = Object.freeze({
        __proto__: null,
        ensureUserHasRole: t => {
            var r, n, i, {
                roles: s,
                auth: a = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance())
            } = t;
            if (!(null == a ? void 0 : a.isAuthenticated())) throw ti(ll, "Not authorized: User is not logged in"), new We.SecurityException("Not authorized", "User is not logged in");
            if (!s.find((e => !!e && a.hasRole(e.roleKey)))) throw ti(ll, "Not authorized: No roles found on current user"), null !== (i = null === (n = s[s.length - 1]) || void 0 === n ? void 0 : n.roleException) && void 0 !== i ? i : new We.SecurityException("Not authorized", "User doesn't have the required role")
        },
        hasRole: t => {
            var r, {
                roleKey: n,
                auth: i = (null === (r = Qt.resolve(e.ServiceNames.Auth)) || void 0 === r ? void 0 : r.getInstance())
            } = t;
            return (null == i ? void 0 : i.isAuthenticated()) ? i.hasRole(n) : (ti(ll, "Not authorized: User is not logged in"), !1)
        }
    });

    function cl(e = No.FORMAT.defaultDateTimeFormat) {
        return {
            year: parseInt(RegExp["$" + (e.yearIndexForDate + 1)], 10),
            month: parseInt(RegExp["$" + (e.monthIndexForDate + 1)], 10),
            day: parseInt(RegExp["$" + (e.dayIndexForDate + 1)], 10)
        }
    }

    function dl(e = No.FORMAT.defaultDateTimeFormat) {
        const t = parseInt(RegExp["$" + (e.secondsIndexForTime + 1)], 10);
        return {
            hours: parseInt(RegExp["$" + (e.hoursIndexForTime + 1)], 10),
            minutes: parseInt(RegExp["$" + (e.minutesIndexForTime + 1)], 10),
            seconds: isNaN(t) ? 0 : t
        }
    }

    function hl(e = No.FORMAT.defaultDateTimeFormat) {
        const t = parseInt(RegExp["$" + (e.secondsIndexForDateTime + 1)], 10);
        return {
            year: parseInt(RegExp["$" + (e.yearIndexForDateTime + 1)], 10),
            month: parseInt(RegExp["$" + (e.monthIndexForDateTime + 1)], 10),
            day: parseInt(RegExp["$" + (e.dayIndexForDateTime + 1)], 10),
            hours: parseInt(RegExp["$" + (e.hoursIndexForDateTime + 1)], 10),
            minutes: parseInt(RegExp["$" + (e.minutesIndexForDateTime + 1)], 10),
            seconds: isNaN(t) ? 0 : t
        }
    }
    const gl = `[${String.fromCharCode(55296)}-${String.fromCharCode(56319)}]`,
        ml = new RegExp(gl, "g");

    function pl(e) {
        const t = e.match(ml);
        return e.length - (t ? t.length : 0)
    }

    function fl(e, t, r) {
        var n;
        let i = pl(e);
        if (!(t >= 0 && r > 0 && i > t)) return No.DEFAULT_TEXT;
        i = Math.min(i - t, r);
        const s = e.match(ml) ? null === (n = e.match(new RegExp("(" + gl + ".|.){" + t + "}((" + gl + ".|.){" + i + "})"))) || void 0 === n ? void 0 : n[2] : e.substring(t, t + i);
        return null != s ? s : ""
    }

    function vl(e) {
        const t = new Date(e.getTime());
        return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t.getTime()
    }

    function yl(e, t, r, n = !1) {
        const i = r <= 36e5,
            s = r <= 6e4,
            a = r <= 1e3,
            o = bl(e, i, s, a).toNative(),
            l = bl(t, i, s, a).toNative(),
            u = Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), 0),
            c = Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate(), l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), 0),
            d = n ? vl(l) - vl(o) : c - u;
        return Math.floor(d / r)
    }

    function bl(e, t, r, n) {
        return new Ao(e.year, e.month, e.day, t ? e.hours : 0, r ? e.minutes : 0, n ? e.seconds : 0)
    }

    function Tl(e, t, r) {
        const n = new Ao(1900, 1, 1, e, t, r);
        return n.hours === e && n.minutes === t && n.seconds === r
    }

    function wl(e, t, r, n, i, s) {
        const a = new Ao(e, t, r, n, i, s);
        return a.year === e && a.month === t && a.day === r && a.hours === n && a.minutes === i && a.seconds === s
    }

    function El(e) {
        return e ? 1 : 0
    }

    function Il(e) {
        return e ? to.fromNumber(1) : to.fromNumber(0)
    }

    function Al(e) {
        return new ya(e ? 1 : 0)
    }

    function Nl(e) {
        return !0 === e ? "True" : !1 === e ? "False" : No.DEFAULT_TEXT
    }

    function Sl(e) {
        return new Ao(e.year, e.month, e.day)
    }

    function Dl(e) {
        return new Ao(1900, 1, 1, e.hours, e.minutes, e.seconds)
    }

    function Rl(e) {
        return e.toString(No.FORMAT.defaultDateTimeFormat.dateTimeFormat)
    }

    function Cl(e) {
        return e.toString(No.FORMAT.defaultDateTimeFormat.dateFormat)
    }

    function xl(e) {
        return al.isValidDecimal(e) ? e.toString() : No.DEFAULT_TEXT
    }

    function Ll(e) {
        return e.gte(No.MIN_INTEGER_VALUE) && e.lte(No.MAX_INTEGER_VALUE)
    }

    function Ol(e) {
        return Ll(e) ? e.round().toNumber() : No.DEFAULT_INTEGER
    }

    function _l(e) {
        return e.gte(No.MIN_LONGINTEGER_VALUE.toString()) && e.lte(No.MAX_LONGINTEGER_VALUE.toString())
    }

    function Ml(e) {
        return _l(e) ? to.fromString(e.round().toString()) : No.DEFAULT_LONGINTEGER
    }

    function Ul(e) {
        return al.isWithinIntegerRange(e.toNumber())
    }

    function Fl(e) {
        return al.isValidLongInteger(e) ? e.toString() : No.DEFAULT_TEXT
    }

    function $l(e) {
        return al.isValidInteger(e) ? e.toString() : No.DEFAULT_TEXT
    }

    function Pl(e, t) {
        let r = t.getRegExpForDate().test(e);
        if (r) {
            const e = cl(t),
                n = new Ao(e.year, e.month, e.day);
            r = n.year === e.year && n.month === e.month && n.day === e.day
        }
        return r
    }

    function Vl(e, t) {
        if (!Pl(e, t)) return Ao.defaultValue;
        const r = cl(t);
        return new Ao(r.year, r.month, r.day)
    }

    function Bl(e, t) {
        let r = t.getRegExpForDateTime().test(e);
        if (r) {
            const e = hl(t);
            r = wl(e.year, e.month, e.day, e.hours, e.minutes, e.seconds)
        }
        return r
    }

    function kl(e, t) {
        if (!Bl(e, t)) return Ao.defaultValue;
        const r = hl(t);
        return new Ao(r.year, r.month, r.day, r.hours, r.minutes, r.seconds)
    }

    function zl(e) {
        return -1 !== e.toUpperCase().indexOf("T")
    }

    function Hl(e) {
        return -1 !== e.indexOf(" ")
    }

    function jl(e) {
        const t = e.toUpperCase().search("T| ");
        return -1 !== t && (e = e.substring(0, t)), e
    }

    function ql(e) {
        const t = No.FORMAT.dateTimeFormats;
        e = jl(e);
        for (let r = 0; r < t.length; ++r)
            if (Pl(e, t[r])) return !0;
        return !1
    }

    function Gl(e) {
        const t = No.FORMAT.dateTimeFormats;
        e = jl(e);
        for (let r = 0; r < t.length; ++r) {
            const n = Vl(e, t[r]);
            if (!n.eq(Ao.defaultValue)) return n
        }
        return Ao.defaultValue
    }

    function Wl(e) {
        return !zl(e) || !isNaN(Date.parse(e))
    }

    function Kl(e) {
        const t = No.FORMAT.dateTimeFormats;
        if (zl(e)) return Wl(e);
        Hl(e) || (e += " 00:00:00");
        for (let r = 0; r < t.length; ++r)
            if (Bl(e, t[r])) return !0;
        return !1
    }

    function Jl(e) {
        const t = No.FORMAT.dateTimeFormats;
        if (zl(e)) return Ao.fromISODateTime(e);
        Hl(e) || (e += " 00:00:00");
        for (let r = 0; r < t.length; ++r) {
            const n = kl(e, t[r]);
            if (!n.eq(Ao.defaultValue)) return n
        }
        return Ao.defaultValue
    }

    function Yl(e) {
        const t = e.indexOf(" ");
        return -1 !== t && (e = e.substring(t + 1, e.length)), e
    }

    function Xl(e, t = No.FORMAT.defaultDateTimeFormat) {
        if (zl(e)) return Wl(e);
        Hl(e) && (e = Yl(e));
        let r = t.getRegExpForTime().test(e);
        if (r) {
            const e = dl(t);
            r = Tl(e.hours, e.minutes, e.seconds)
        }
        return r
    }

    function Ql(e) {
        if (zl(e)) {
            const t = Ao.fromISODateTime(e);
            return new Ao(1900, 1, 1, t.hours, t.minutes, t.seconds, t.milliseconds)
        }
        return Hl(e) && (e = Yl(e)),
            function(e, t) {
                if (!Xl(e, t)) return Ao.defaultValue;
                const r = dl(t);
                return new Ao(1900, 1, 1, r.hours, r.minutes, r.seconds)
            }(e, No.FORMAT.defaultDateTimeFormat)
    }

    function Zl(e) {
        return e.toString(No.FORMAT.defaultDateTimeFormat.timeFormat)
    }

    function eu(e) {
        if (No.FORMAT.numberFormat.getRegExpForInteger().test(e)) {
            const t = parseInt(e, 10);
            if (!isNaN(t) && t >= No.MIN_INTEGER_VALUE && t <= No.MAX_INTEGER_VALUE) return t
        }
        return null
    }

    function tu(e) {
        if (No.FORMAT.numberFormat.getRegExpForDecimal().test(e)) {
            const t = new ya(e);
            if (!t.isNaN() && t.gte(No.MIN_DECIMAL_VALUE) && t.lte(No.MAX_DECIMAL_VALUE)) return t
        }
        return null
    }

    function ru(e) {
        if (!No.FORMAT.numberFormat.getRegExpForInteger().test(e)) return null;
        const t = "-" === e.charAt(0);
        if (t && e.length < No.MIN_LONGINTEGER_VALUE.toString().length || !t && e.length < No.MAX_LONGINTEGER_VALUE.toString().length || _l(new ya(e))) try {
            return to.fromString(e)
        } catch (e) {}
        return null
    }

    function nu(e) {
        return null !== tu(e)
    }

    function iu(e) {
        return null === tu(e) ? No.DEFAULT_DECIMAL : new ya(e)
    }

    function su(e) {
        return null !== eu(e)
    }

    function au(e) {
        const t = eu(e);
        return null === t ? No.DEFAULT_INTEGER : t
    }

    function ou(e) {
        return null !== ru(e)
    }

    function lu(e) {
        const t = ru(e);
        return null === t ? No.DEFAULT_LONGINTEGER : t
    }

    function uu(e) {
        return "true" === e.toLowerCase()
    }

    function cu(e) {
        if ("number" == typeof e || al.isLongInteger(e) || al.isDecimal(e)) return new ya(e.toString()).round().toNumber();
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Integer'")
    }

    function du(e) {
        if ("number" == typeof e || al.isLongInteger(e) || al.isDecimal(e)) return to.fromString(new ya(e.toString()).round().toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'LongInteger'")
    }

    function hu(e) {
        if ("number" == typeof e || al.isLongInteger(e) || al.isDecimal(e)) return new ya(e.toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Decimal'")
    }

    function gu(e, t, r) {
        if (e instanceof Ao || "[object Date]" === Object.prototype.toString.call(e)) {
            const n = new Ao(e.getTime()),
                i = t ? n.year : 1900,
                s = t ? n.month : 1,
                a = t ? n.day : 1,
                o = r ? n.hours : 0,
                l = r ? n.minutes : 0,
                u = r ? n.seconds : 0;
            return new Ao(i, s, a, o, l, u)
        }
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'DateTime'")
    }

    function mu(e, t, r, n) {
        return t < 0 ? No.DEFAULT_TEXT : (r.length > 1 && (r = r.substr(0, 1)), n.length > 1 && (n = n.substr(0, 1)), e.toFormat(t, ya.rounding, {
            decimalSeparator: r,
            groupSeparator: n
        }))
    }
    const pu = "[a-zA-Z0-9.!#$%&'*+\\-/=?^_`{|}~]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*",
        fu = "([0-9a-zA-Z\\\\= ]*|=\\?([^?]*)\\?([qQbB])\\?([^?]*)\\?=)",
        vu = new RegExp("^" + pu + "$"),
        yu = new RegExp("^" + fu + "[ ]*<" + pu + ">$"),
        bu = new RegExp('^\\"' + fu + '\\"[ ]*<' + pu + ">$");
    var Tu = Object.freeze({
        __proto__: null,
        abs: function(e) {
            const t = e.abs();
            return t.isNaN() ? No.DEFAULT_DECIMAL : t
        },
        mod: function(e, t) {
            const r = e.mod(t);
            return r.isNaN() ? No.DEFAULT_DECIMAL : r
        },
        power: function(e, t) {
            const r = e.pow(t);
            return r.isNaN() ? No.DEFAULT_DECIMAL : r
        },
        round: function(e, t = 0) {
            const r = e.toDecimalPlaces(t);
            return r.isNaN() ? No.DEFAULT_DECIMAL : r
        },
        sqrt: function(e) {
            try {
                const t = e.sqrt();
                return t.isNaN() ? No.DEFAULT_DECIMAL : t
            } catch (e) {
                return No.DEFAULT_DECIMAL
            }
        },
        trunc: function(e) {
            const t = e.trunc();
            return t.isNaN() ? No.DEFAULT_DECIMAL : t
        },
        max: function(e, t) {
            const r = ya.max(e, t);
            return r.isNaN() ? No.DEFAULT_DECIMAL : r
        },
        min: function(e, t) {
            const r = ya.min(e, t);
            return r.isNaN() ? No.DEFAULT_DECIMAL : r
        },
        sign: function(e) {
            const t = new ya(0);
            return e.eq(t) || e.isNaN() ? No.DEFAULT_INTEGER : e > t ? 1 : -1
        },
        chr: function(e) {
            return e >= 0 && e <= 65535 ? String.fromCharCode(e) : No.DEFAULT_TEXT
        },
        concat: function(e, t) {
            return (e || "") + (t || "")
        },
        encodeHtml: function(e) {
            return void 0 === e ? "" : function(e) {
                if (void 0 === e || "" === e) return e;
                const t = [],
                    r = " ".charCodeAt(0),
                    n = "\n".charCodeAt(0);
                e.charCodeAt(0) === r ? t[0] = " " : t[0] = e.charAt(0);
                for (let i = 1; i < e.length - 1; ++i) e.charCodeAt(i) !== r || e.charCodeAt(i - 1) !== n && e.charCodeAt(i + 1) !== r ? t[i] = e.charAt(i) : t[i] = " ";
                return 1 !== e.length && (e.charCodeAt(e.length - 1) === r ? t[e.length - 1] = " " : t[e.length - 1] = e.charAt(e.length - 1)), t.join("")
            }(function(e) {
                const t = [];
                for (let r = 0; r < e.length; ++r) {
                    const n = e.charCodeAt(r);
                    60 === n ? t.push("&lt;") : 62 === n ? t.push("&gt;") : 38 === n ? t.push("&amp;") : 34 === n ? t.push("&quot;") : 39 === n ? t.push("&#39;") : n >= 160 && n <= 255 ? t.push("&#" + n + ";") : t.push(e.charAt(r))
                }
                return t.join("")
            }(e)).replace(/\r/g, "").replace(/&#13;/g, "").replace(/\n/g, "<br/>").replace(/&#10;/g, "<br/>")
        },
        encodeJavascript: function(e) {
            return e.replace(/\\/g, "\\x5c").replace(/'/g, "\\x27").replace(/\"/g, "\\x22").replace("&", "\\x26").replace("<", "\\x3c").replace(/>/g, "\\x3e").replace(/\r/g, "\\r").replace(/\n/g, "\\n")
        },
        encodeUrl: function(e) {
            return encodeURIComponent(e).replace(/'/g, "%27").replace(/%20/g, "+")
        },
        index: function(e, t, r, n, i) {
            var s;
            try {
                if (0 === t.length || r < 0 || r > pl(e)) return -1;
                let a;
                i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), r && r > 0 && (a = null === (s = e.match(new RegExp("(" + gl + ".|.){" + r + "}"))) || void 0 === s ? void 0 : s[0].length);
                const o = n ? e.lastIndexOf(t, a || e.length) : e.indexOf(t, a || 0);
                return o < 0 ? -1 : pl(e.substr(0, o))
            } catch (e) {
                return -1
            }
        },
        length: pl,
        replace: function(e, t, r) {
            const n = t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            return e.replace(new RegExp(n, "g"), r)
        },
        substr: fl,
        toLower: function(e) {
            return e.toLowerCase()
        },
        toUpper: function(e) {
            return e.toUpperCase()
        },
        trim: function(e) {
            return e.trim()
        },
        trimStart: function(e) {
            let t = 0;
            for (;
                " " === e[t];) t++;
            return e.substr(t)
        },
        trimEnd: function(e) {
            let t = e.length - 1;
            for (;
                " " === e[t];) t--;
            return e.substr(0, t + 1)
        },
        like: function(e, t) {
            if (!t) return !1;
            const r = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/%/g, ".*").replace(/_/g, ".");
            return RegExp(`^${r}$`, "gi").test(e)
        },
        addDays: function(e, t) {
            return e.addDays(t)
        },
        addHours: function(e, t) {
            return e.addHours(t)
        },
        addMinutes: function(e, t) {
            return e.addMinutes(t)
        },
        addSeconds: function(e, t) {
            return e.addSeconds(t)
        },
        addYears: function(e, t) {
            return e.addYears(t)
        },
        addMonths: function(e, t) {
            return e.addMonths(t)
        },
        buildDateTime: function(e, t) {
            return new Ao(e.year, e.month, e.day, t.hours, t.minutes, t.seconds, t.milliseconds)
        },
        currDate: function() {
            const e = new Ao(new Date);
            return new Ao(e.year, e.month, e.day)
        },
        currDateTime: function() {
            return new Ao(new Date)
        },
        currTime: function() {
            const e = new Ao(new Date);
            return new Ao(1900, 1, 1, e.hours, e.minutes, e.seconds)
        },
        dayOfWeek: function(e) {
            return e.weekDay
        },
        diffDays: function(e, t) {
            return yl(e, t, 864e5, !0)
        },
        diffHours: function(e, t) {
            return yl(e, t, 36e5)
        },
        diffMinutes: function(e, t) {
            return yl(e, t, 6e4)
        },
        diffSeconds: function(e, t) {
            return yl(e, t, 1e3)
        },
        year: function(e) {
            return e.year
        },
        month: function(e) {
            return e.month
        },
        day: function(e) {
            return e.day
        },
        hour: function(e) {
            return e.hours
        },
        minute: function(e) {
            return e.minutes
        },
        second: function(e) {
            return e.seconds
        },
        newDate: function(e, t, r) {
            return wl(e, t, r, 0, 0, 0) ? new Ao(e, t, r) : No.DEFAULT_DATE
        },
        newDateTime: function(e, t, r, n, i, s) {
            return wl(e, t, r, n, i, s) ? new Ao(e, t, r, n, i, s) : No.DEFAULT_DATETIME
        },
        newTime: function(e, t, r) {
            return Tl(e, t, r) ? new Ao(1900, 1, 1, e, t, r) : No.DEFAULT_TIME
        },
        booleanToInteger: El,
        booleanToLongInteger: Il,
        booleanToDecimal: Al,
        booleanToText: Nl,
        dateTimeToDate: Sl,
        dateTimeToTime: Dl,
        dateTimeToText: Rl,
        dateToText: Cl,
        dateToDateTime: function(e) {
            return e
        },
        decimalToBoolean: function(e) {
            return !e.eq(new ya(0))
        },
        decimalToText: xl,
        decimalToIntegerValidate: Ll,
        decimalToInteger: Ol,
        decimalToLongIntegerValidate: _l,
        decimalToLongInteger: Ml,
        longIntegerToDecimal: function(e) {
            return new ya(e.toString())
        },
        longIntegerToIntegerValidate: Ul,
        longIntegerToInteger: function(e) {
            const t = e.toNumber();
            return al.isWithinIntegerRange(t) ? t : No.DEFAULT_INTEGER
        },
        longIntegerToIdentifier: function(e) {
            return e
        },
        longIntegerToText: Fl,
        identifierToInteger: function(e) {
            return e
        },
        identifierToLongInteger: function(e) {
            return e
        },
        identifierToText: function(e) {
            return e
        },
        integerToLongInteger: function(e) {
            return to.fromNumber(e)
        },
        integerToIdentifier: function(e) {
            return e
        },
        integerToBoolean: function(e) {
            return 0 !== e
        },
        integerToText: $l,
        integerToDecimal: function(e) {
            return new ya(e)
        },
        nullIdentifier: function() {
            return 0
        },
        nullTextIdentifier: function() {
            return ""
        },
        nullDate: function() {
            return No.DEFAULT_DATE
        },
        nullObject: function() {
            return null
        },
        nullBinary: function() {
            return No.DEFAULT_BINARYDATA
        },
        textToDateValidate: ql,
        textToDate: Gl,
        textToDateTimeValidate: Kl,
        textToDateTime: Jl,
        textToTimeValidate: Xl,
        textToTime: Ql,
        timeToText: Zl,
        textToDecimalValidate: nu,
        textToDecimal: iu,
        textToIntegerValidate: su,
        textToInteger: au,
        textToLongIntegerValidate: ou,
        textToLongInteger: lu,
        textToBoolean: uu,
        textToIdentifier: function(e) {
            return e
        },
        objectToInteger: cu,
        objectToLongInteger: du,
        objectToBoolean: function(e) {
            if ("boolean" == typeof e) return e;
            throw new TypeError("Cannot convert type '" + typeof e + "' to 'Boolean'")
        },
        objectToDecimal: hu,
        objectToText: function(e) {
            if ("string" == typeof e) return e;
            throw new TypeError("Cannot convert type '" + typeof e + "' to 'Text'")
        },
        objectToDate: function(e) {
            return gu(e, !0, !1)
        },
        objectToTime: function(e) {
            return gu(e, !1, !0)
        },
        objectToDateTime: function(e) {
            return gu(e, !0, !0)
        },
        toObject: function(e) {
            return e
        },
        formatDateTime: function(e, t) {
            return e.toString(t)
        },
        formatCurrency: function(e, t, r, n, i) {
            const s = mu(e, r, n, i);
            return s === No.DEFAULT_TEXT ? No.DEFAULT_TEXT : t + s
        },
        formatDecimal: mu,
        formatPercent: function(e, t, r) {
            try {
                return t < 0 ? "" : (r.length > 1 && (r = r.substr(0, 1)), e.times(100).toFormat(t, ya.rounding, {
                    decimalSeparator: r,
                    groupSeparator: ""
                }) + "%")
            } catch (e) {
                return ""
            }
        },
        formatPhoneNumber: function(e, t, r, n, i, s, a) {
            try {
                return /^\d+$/.test(e) ? e.length !== t + r + n ? e : i + e.substr(0, t) + s + e.substr(t, r) + a + e.substr(t + r, n) : e
            } catch (e) {
                return ""
            }
        },
        formatText: function(e, t, r, n, i) {
            try {
                const s = pl(e);
                if (s < t) {
                    i = fl(i, 0, 1);
                    let r = t - s;
                    for (; r-- > 0;) n ? e = i + e : e += i;
                    return e
                }
                return s > r ? fl(e, n ? s - r : 0, r) : e
            } catch (e) {
                return ""
            }
        },
        emailAddressValidate: function(e) {
            return "" === e || !/\.@/.test(e) && (vu.test(e) || yu.test(e) || bu.test(e))
        },
        getCurrentLocale: function({
            localeService: t = Xt(e.ServiceNames.LocaleService)
        } = {}) {
            return t ? t.getCurrentLocale() : No.DEFAULT_TEXT
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        getAppName: function() {
            return D()
        },
        getBookmarkableURL: function() {
            return window.location.href
        },
        getOwnerURLPath: function() {
            return cn()
        },
        getUserId: function() {
            const e = Sn();
            return ti("RolesInfo", `Checking User's ID: ${e}`), e
        },
        iif: function(e, t, r) {
            return e ? t : r
        }
    });
    const wu = {
        [wo.Integer]: Dt.INTEGER,
        [wo.LongInteger]: Dt.LONGINTEGER,
        [wo.Decimal]: Dt.DECIMAL,
        [wo.Currency]: Dt.DECIMAL,
        [wo.Text]: Dt.TEXT,
        [wo.PhoneNumber]: Dt.TEXT,
        [wo.Email]: Dt.TEXT,
        [wo.Boolean]: Dt.BOOLEAN,
        [wo.Date]: Dt.DATE,
        [wo.DateTime]: Dt.DATE_TIME,
        [wo.Time]: Dt.TIME,
        [wo.Record]: Dt.UNKNOWN,
        [wo.RecordList]: Dt.UNKNOWN,
        [wo.BinaryData]: Dt.BINARY_DATA,
        [wo.Object]: Dt.UNKNOWN
    };

    function Eu(e) {
        switch (e) {
            case Dt.INTEGER:
            case Dt.LONGINTEGER:
            case Dt.DECIMAL:
            case Dt.TEXT:
            case Dt.BOOLEAN:
            case Dt.DATE:
            case Dt.DATE_TIME:
            case Dt.TIME:
            case Dt.BINARY_DATA:
                return xo(Iu(e));
            default:
                throw new We.DataBaseException("", `Unable to determine default value for type ${Au(e)}`)
        }
    }

    function Iu(e) {
        switch (e) {
            case Dt.TEXT:
                return wo.Text;
            case Dt.BINARY_DATA:
                return wo.BinaryData;
            case Dt.BOOLEAN:
                return wo.Boolean;
            case Dt.DATE:
                return wo.Date;
            case Dt.DATE_TIME:
                return wo.DateTime;
            case Dt.TIME:
                return wo.Time;
            case Dt.DECIMAL:
                return wo.Decimal;
            case Dt.INTEGER:
                return wo.Integer;
            case Dt.LONGINTEGER:
                return wo.LongInteger;
            default:
                throw new Error(`Missing case for conversion of DB data type '${e}' to a model data type.`)
        }
    }

    function Au(e) {
        const t = Iu(e);
        return wo[t]
    }

    function Nu(e) {
        const t = wu[e];
        return null != t ? t : Dt.UNKNOWN
    }

    function Su(e) {
        return !!e.isGenericRecordType
    }

    function Du(e) {
        return !!e.isGenericRecordListType
    }

    function Ru(e) {
        return !!e.isBasicTypeListType
    }
    var Cu, xu, Lu, Ou, _u;
    ! function(e) {
        const t = new Map,
            r = new Map;

        function n(e, t) {
            switch (t) {
                case wo.Integer:
                    return e;
                case wo.LongInteger:
                    return Fl(e);
                case wo.Decimal:
                case wo.Currency:
                    return xl(e);
                case wo.Text:
                case wo.PhoneNumber:
                case wo.Email:
                    return e;
                case wo.Date:
                    return e.toISODate();
                case wo.DateTime:
                    return e.toString();
                case wo.Time:
                    return e.toISOTime();
                case wo.Boolean:
                    return e;
                case wo.Record:
                case wo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case wo.BinaryData:
                    return "string" == typeof e ? e : e.content;
                case wo.Object:
                default:
                    return e
            }
        }

        function i(e, t) {
            switch (t) {
                case wo.Integer:
                    return al.ensureIntegerInsideBounds(e), 0 | e;
                case wo.LongInteger:
                    return "string" == typeof e ? to.fromString(e) : to.fromNumber(e);
                case wo.Decimal:
                case wo.Currency:
                    return new ya(e || "0");
                case wo.Boolean:
                    return "string" == typeof e ? uu(e) : e;
                case wo.Text:
                case wo.PhoneNumber:
                case wo.Email:
                    return void 0 === e ? "" : e + "";
                case wo.Date:
                    return e instanceof Date ? new Ao(e) : Ao.fromISODate(e);
                case wo.DateTime:
                    return e instanceof Date ? new Ao(e) : Ao.fromISODateTime(e);
                case wo.Time:
                    return e instanceof Date ? new Ao(e) : Ao.fromISOTime(e);
                case wo.Record:
                case wo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case wo.BinaryData:
                    return al.hasBinaryDataInterface(e) ? new Io(e.content, e.url) : new Io(e);
                case wo.Object:
                default:
                    return e
            }
        }
        e.to = function e(r, i = wo.Record, s = !1, a = !1) {
            if (null == r) return;
            let o, l = wo.Record;
            if ("number" != typeof i ? (a = !0 === s, o = i, l = wo.Record) : (l = i, "boolean" != typeof s && (o = s)), r instanceof Fo) {
                const i = r,
                    s = i.constructor;
                let l = t.get(s);
                if (!l) {
                    const r = i.getAttributes();
                    l = (t, i, s) => r.reduce(((a, o, l) => (o.ignoreForServer || (o.dataType === wo.Record || o.dataType === wo.RecordList ? a[o.name] = e(t[o.attrName], i, o.optimizeList && s) : o.dataType !== wo.Object && (a[o.name] = n(t[o.attrName], r[l].dataType))), a)), {}), t.set(s, l)
                }
                return l(r, o, a)
            }
            if (r instanceof $o) {
                const t = r,
                    n = t.constructor.getItemType(),
                    i = {
                        List: []
                    };
                if (a && o) {
                    if (t.length > 0 && o) {
                        const s = o.iterationContext.getCurrentRowNumber(r);
                        i.List.push(e(t.getItem(s), n, o, a))
                    }
                } else
                    for (let r = 0; r < t.length; r++) i.List.push(e(t.getItem(r), n));
                return t.isEmpty && (i.EmptyListItem = e(t.emptyListItem, n, o, a)), i
            }
            return l !== wo.Object ? n(r, l) : void 0
        }, e.from = function e(t, n) {
            if (Su(n)) {
                const s = n;
                let a = r.get(s);
                if (!a) {
                    const t = s.getAttributes();
                    a = r => {
                        null != r || (r = {});
                        const n = t.reduce(((n, s, a) => (s.dataType === wo.Record || s.dataType === wo.RecordList ? n[s.attrName] = Fo.getData(e(r[s.name], t[a].complexType)) : s.dataType === wo.BinaryData ? n[s.attrName] = i({
                            content: r[s.name],
                            url: r[`_${s.name}URL`]
                        }, t[a].dataType) : n[s.attrName] = i(r[s.name], t[a].dataType), n)), {});
                        return new s(new s.RecordClass(n))
                    }, r.set(s, a)
                }
                return a(t)
            }
            if (Du(n) || Ru(n)) {
                if (void 0 === n.getItemType() || null === n.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                const r = new n;
                return 0 === t.List.length ? r.emptyListItem = e(t.EmptyListItem, n.getItemType()) : r.pushAll(t.List.map((t => e(t, n.getItemType())))), r
            }
            return i(t, n)
        }
    }(Cu || (Cu = {})),
    function(e) {
        function t(e) {
            return !!(al.isValidJsNumber(e) && e >= No.MIN_INTEGER_VALUE && e <= No.MAX_INTEGER_VALUE) || (al.isLongInteger(e) ? Ul(e) : al.isDecimal(e) ? Ll(e) : al.isText(e) ? su(e) : !!al.isBoolean(e))
        }

        function r(e) {
            return !!al.isValidJsNumber(e) || (!!al.isValidLongInteger(e) || (al.isValidDecimal(e) ? _l(e) : al.isText(e) ? ou(e) : !!al.isBoolean(e)))
        }

        function n(e) {
            return !!al.isValidJsNumber(e) || (!!(al.isValidDecimal(e) && No.MIN_DECIMAL_VALUE.lte(e) && No.MAX_DECIMAL_VALUE.gte(e)) || (!!al.isValidLongInteger(e) || (al.isText(e) ? nu(e) : !!al.isBoolean(e))))
        }

        function i(e) {
            return al.isJsNumber(e) ? al.isValidJsNumber(e) : al.isLongInteger(e) ? al.isValidLongInteger(e) : al.isDecimal(e) ? al.isValidDecimal(e) : !!al.isText(e) || (!!al.isBoolean(e) || (al.isDateTime(e) ? al.isValidDateTime(e) : !!al.isJsDate(e) && al.isValidJsDate(e)))
        }

        function s(e) {
            return i(e)
        }

        function a(e) {
            return al.isJsNumber(e) ? al.isValidJsNumber(e) : al.isLongInteger(e) ? al.isValidLongInteger(e) : al.isDecimal(e) ? al.isValidDecimal(e) : al.isText(e) ? /^(true|false)$/gi.test(e) : !!al.isBoolean(e)
        }

        function o(e) {
            if (al.isValidDateTime(e) && e.gte(No.MIN_DATE_VALUE) && e.lte(No.MAX_DATE_VALUE)) return !0;
            if (al.isValidJsDate(e) && new Ao(e).gte(No.MIN_DATE_VALUE) && new Ao(e).lte(No.MAX_DATE_VALUE)) return !0;
            if (al.isText(e)) {
                if (No.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new Ao(new Date(e));
                    return t.gte(No.MIN_DATE_VALUE) && t.lte(No.MAX_DATE_VALUE)
                }
                if (ql(e)) {
                    const t = Gl(e);
                    return t.gte(No.MIN_DATE_VALUE) && t.lte(No.MAX_DATE_VALUE)
                }
                return !1
            }
            return !1
        }

        function l(e) {
            return !!al.isValidDateTime(e) || (!!al.isValidJsDate(e) || !!al.isText(e) && (!(!No.RFC3339_TIMEPART.test(e) && !No.ISO_DATE_FORMAT_REGEXP.test(e)) || Xl(e)))
        }

        function u(e) {
            if (al.isValidDateTime(e) && e.gte(No.MIN_DATETIME_VALUE) && e.lte(No.MAX_DATETIME_VALUE)) return !0;
            if (al.isValidJsDate(e) && new Ao(e).gte(No.MIN_DATETIME_VALUE) && new Ao(e).lte(No.MAX_DATETIME_VALUE)) return !0;
            if (al.isText(e)) {
                if (No.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new Ao(new Date(e));
                    return t.gte(No.MIN_DATETIME_VALUE) && t.lte(No.MAX_DATETIME_VALUE)
                }
                if (Kl(e)) {
                    const t = Jl(e);
                    return t.gte(No.MIN_DATETIME_VALUE) && t.lte(No.MAX_DATETIME_VALUE)
                }
                return !1
            }
            return !1
        }

        function c(e) {
            if (n(e)) {
                if (al.isJsNumber(e)) return hu(e);
                if (al.isLongInteger(e)) return hu(e);
                if (al.isDecimal(e)) return hu(e);
                if (al.isText(e) && "" !== e) return iu(e);
                if (al.isBoolean(e)) return Al(e)
            }
            return No.DEFAULT_DECIMAL
        }

        function d(e) {
            if (i(e)) {
                if (al.isJsNumber(e)) return al.isValidInteger(e) ? $l(e) : xl(new ya(e));
                if (al.isLongInteger(e)) return Fl(e);
                if (al.isDecimal(e)) return xl(e);
                if (al.isText(e)) return e;
                if (al.isBoolean(e)) return Nl(e);
                if (al.isValidDate(e)) return Cl(e);
                if (al.isValidTime(e)) return Zl(e);
                if (al.isDateTime(e)) return Rl(e);
                if (al.isJsDate(e)) {
                    const t = new Ao(e);
                    return al.isValidDate(t) ? Cl(t) : al.isValidTime(t) ? Zl(t) : Rl(t)
                }
            }
            return No.DEFAULT_TEXT
        }
        e.isConvertibleTo = function(e, c) {
            switch (c) {
                case wo.Integer:
                    return t(e);
                case wo.LongInteger:
                    return r(e);
                case wo.Decimal:
                    return n(e);
                case wo.Currency:
                    return function(e) {
                        return n(e)
                    }(e);
                case wo.Text:
                    return i(e);
                case wo.PhoneNumber:
                    return function(e) {
                        return i(e)
                    }(e);
                case wo.Email:
                    return s(e);
                case wo.Boolean:
                    return a(e);
                case wo.Date:
                    return o(e);
                case wo.Time:
                    return l(e);
                case wo.DateTime:
                    return u(e);
                case wo.BinaryData:
                    return function(e) {
                        return al.isBinaryData(e)
                    }(e);
                default:
                    return !1
            }
        }, e.isDefault = function(e) {
            return al.isValidJsNumber(e) && e === No.DEFAULT_INTEGER || al.isValidLongInteger(e) && e.equals(No.DEFAULT_LONGINTEGER) || al.isValidDecimal(e) && e.equals(No.DEFAULT_DECIMAL) || al.isText(e) && e === No.DEFAULT_TEXT || al.isBoolean(e) && e === No.DEFAULT_BOOLEAN || al.isValidDateTime(e) && e.equals(No.DEFAULT_DATETIME)
        }, e.convertTo = function(e, n) {
            switch (n) {
                case wo.Integer:
                    return function(e) {
                        if (t(e)) {
                            if (al.isJsNumber(e)) return cu(e);
                            if (al.isLongInteger(e)) return cu(e);
                            if (al.isDecimal(e)) return cu(e);
                            if (al.isText(e) && "" !== e) return au(e);
                            if (al.isBoolean(e)) return El(e)
                        }
                        return No.DEFAULT_INTEGER
                    }(e);
                case wo.LongInteger:
                    return function(e) {
                        if (r(e)) {
                            if (al.isJsNumber(e)) return du(e);
                            if (al.isLongInteger(e)) return du(e);
                            if (al.isDecimal(e)) return du(e);
                            if (al.isText(e) && "" !== e) return lu(e);
                            if (al.isBoolean(e)) return Il(e)
                        }
                        return No.DEFAULT_LONGINTEGER
                    }(e);
                case wo.Decimal:
                    return c(e);
                case wo.Currency:
                    return function(e) {
                        return c(e)
                    }(e);
                case wo.Text:
                    return d(e);
                case wo.PhoneNumber:
                    return function(e) {
                        return d(e)
                    }(e);
                case wo.Email:
                    return function(e) {
                        return s(e) && al.isText(e) ? e : No.DEFAULT_EMAIL
                    }(e);
                case wo.Boolean:
                    return function(e) {
                        if (a(e)) {
                            if (al.isJsNumber(e)) return 0 !== e;
                            if (al.isLongInteger(e)) return !e.eq(0);
                            if (al.isDecimal(e)) return !e.eq(0);
                            if (al.isText(e) && "" !== e) return !/^(false)$/gi.test(e);
                            if (al.isBoolean(e)) return e
                        }
                        return No.DEFAULT_BOOLEAN
                    }(e);
                case wo.Date:
                    return function(e) {
                        if (o(e)) {
                            if (al.isDateTime(e)) {
                                const t = e;
                                return new Ao(t.year, t.month, t.day)
                            }
                            if (al.isJsDate(e)) {
                                const t = e;
                                return new Ao(t.getFullYear(), t.getMonth() + 1, t.getDate())
                            }
                            if (al.isText(e) && "" !== e) return No.RFC3339_DATEPART.test(e) ? Ao.fromISODate(e) : No.ISO_DATE_FORMAT_REGEXP.test(e) ? Sl(Ao.fromISODateTime(e)) : Gl(e)
                        }
                        return No.DEFAULT_DATE
                    }(e);
                case wo.Time:
                    return function(e) {
                        if (l(e)) {
                            if (al.isDateTime(e)) {
                                const t = e;
                                return new Ao(null, null, null, t.hours, t.minutes, t.seconds, t.milliseconds)
                            }
                            if (al.isJsDate(e)) {
                                const t = e;
                                return new Ao(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds())
                            }
                            if (al.isText(e) && "" !== e) return No.RFC3339_TIMEPART.test(e) ? Ao.fromISOTime(e) : No.ISO_DATE_FORMAT_REGEXP.test(e) ? Dl(Ao.fromISODateTime(e)) : Ql(e)
                        }
                        return No.DEFAULT_TIME
                    }(e);
                case wo.DateTime:
                    return function(e) {
                        if (u(e)) {
                            if (al.isDateTime(e)) {
                                const t = e;
                                return new Ao(t.year, t.month, t.day, t.hours, t.minutes, t.seconds, t.milliseconds)
                            }
                            if (al.isJsDate(e)) return new Ao(e);
                            if (al.isText(e) && "" !== e) return No.ISO_DATE_FORMAT_REGEXP.test(e) ? Ao.fromISODateTime(e) : Jl(e)
                        }
                        return No.DEFAULT_DATETIME
                    }(e);
                case wo.BinaryData:
                    return e;
                default:
                    return null
            }
        }, e.typeConvertRecord = function(e, t, r) {
            return r(e, t)
        }, e.typeConvertRecordList = function(e, t, r) {
            let n = 0;
            for (; n < e.length;) t.append(r(e.getItem(n), t.newItem())), n++;
            return t
        }
    }(xu || (xu = {})),
    function(e) {
        function t(e) {
            return e - e % 1
        }
        e.to = function(e, t) {
            return function(e, t) {
                switch (t) {
                    case wo.Integer:
                        return e;
                    case wo.LongInteger:
                        const t = e;
                        return al.ensureNumberInsideBounds(t), t.toNumber();
                    case wo.Decimal:
                    case wo.Currency:
                        const r = e;
                        return al.ensureNumberPrecision(r), al.ensureNumberInsideBounds(r), r.toNumber();
                    case wo.Text:
                    case wo.PhoneNumber:
                    case wo.Email:
                        return e;
                    case wo.Date:
                    case wo.DateTime:
                    case wo.Time:
                        return e.toNative();
                    case wo.Boolean:
                        return e;
                    case wo.Record:
                    case wo.RecordList:
                        throw new TypeError("Records and Record lists are not basic types");
                    case wo.BinaryData:
                        return "string" == typeof e ? e : e.content;
                    case wo.Object:
                    default:
                        return e
                }
            }(e, t)
        }, e.from = function(e, r) {
            return function(e, r) {
                switch (r) {
                    case wo.Integer:
                        if (al.isValidJsNumber(e)) return al.ensureIntegerInsideBounds(e), t(e);
                        break;
                    case wo.LongInteger:
                        if (al.isValidJsNumber(e)) return al.ensureLongIntegerInsideBounds(e), to.fromNumber(t(e));
                        break;
                    case wo.Decimal:
                    case wo.Currency:
                        if (al.isValidJsNumber(e)) return al.ensureDecimalInsideBounds(e), new ya(e);
                        break;
                    case wo.Boolean:
                        if (al.isBoolean(e)) return e;
                        break;
                    case wo.Text:
                    case wo.PhoneNumber:
                    case wo.Email:
                        if (al.isText(e)) return e;
                        if (al.isValidJsNumber(e)) return al.ensureDecimalInsideBounds(e), xl(new ya(e));
                        if (al.isBoolean(e)) return Nl(e);
                        break;
                    case wo.Date:
                        if (al.isValidJsDate(e)) {
                            const t = e;
                            return new Ao(t.getFullYear(), t.getMonth() + 1, t.getDate())
                        }
                        break;
                    case wo.DateTime:
                        if (al.isValidJsDate(e)) return new Ao(e);
                        break;
                    case wo.Time:
                        if (al.isValidJsDate(e)) {
                            const t = e;
                            return new Ao(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
                        }
                        break;
                    case wo.BinaryData:
                        return al.hasBinaryDataInterface(e) ? new Io(e.content, e.url) : new Io(e);
                    case wo.Object:
                        return e
                }
                throw new We.InvalidJavascriptType(`Cannot assign a JavaScript ${typeof e} with value ${null==e?JSON.stringify(e):e.toString()} to an output parameter of type ${wo[r]}`)
            }(e, r)
        }
    }(Lu || (Lu = {})),
    function(e) {
        const t = new Map;

        function r(e, t, r, n = !0, i, s = !1) {
            if (!1 !== n || s || !Co(e, r)) switch (t) {
                case wo.Time:
                    return e.toISOTime();
                case wo.Date:
                    return e.toISODate();
                case wo.DateTime:
                    return !0 === i ? "" + Math.floor(e.getTime() / 1e3) : e.toString().replace(/\.\d+/, "");
                case wo.LongInteger:
                    const t = e;
                    return al.ensureNumberInsideBounds(t), t.toNumber();
                case wo.Decimal:
                case wo.Currency:
                    const r = e;
                    return al.ensureNumberPrecision(r), al.ensureNumberInsideBounds(r), r.toNumber();
                case wo.Record:
                case wo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case wo.BinaryData:
                    return "string" == typeof e ? e : e.content;
                default:
                    return e
            }
        }

        function n({
            value: e,
            serializeDefaultValues: t = !0,
            useUnixDateFormat: i = !1,
            dataType: s = wo.Record,
            defaultValue: a,
            enforceDefaultValueSerializationAtThisLevel: o = !1
        }) {
            if (null != e) return e instanceof Fo ? function(e, t, i, s = !1) {
                const a = e.getAttributes().reduce(((s, a) => {
                    if (a.dataType === wo.Record || a.dataType === wo.RecordList) {
                        const r = n({
                            value: e[a.attrName],
                            serializeDefaultValues: t,
                            useUnixDateFormat: i
                        });
                        r && (s[a.nameForJson] = r)
                    } else {
                        const n = r(e[a.attrName], a.dataType, a.defaultValue, t, i);
                        void 0 !== n && (s[a.nameForJson] = n)
                    }
                    return s
                }), {});
                if (0 !== Object.keys(a).length || s) return a
            }(e, null != t && t, null != i && i, o) : e instanceof $o ? function(e, t, r, i = !1) {
                const s = [],
                    a = e.constructor.getItemType();
                for (let i = 0; i < e.length; i++) s.push(n({
                    value: e.getItem(i),
                    serializeDefaultValues: t,
                    useUnixDateFormat: r,
                    dataType: a,
                    enforceDefaultValueSerializationAtThisLevel: !0
                }));
                if (s.length > 0 || t || i) return s
            }(e, null != t && t, null != i && i, o) : r(e, s, null != a ? a : xo(s), t, i, o)
        }

        function i(e, t, r, n) {
            if (null == e) return r;
            switch (t) {
                case wo.Integer:
                    return function(e) {
                        let t;
                        No.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new ya(e) : No.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new ya(+e));
                        if (void 0 === t || !t.isInteger() || !Ll(t)) throw new We.Exception("Could not convert '" + e + "' to Integer");
                        return Ol(t)
                    }(e);
                case wo.LongInteger:
                    return function(e) {
                        let t;
                        No.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new ya(e) : No.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new ya(+e));
                        if (void 0 === t || !t.isInteger() || !_l(t)) throw new We.Exception("Could not convert '" + e + "' to Long Integer");
                        return Ml(t)
                    }(e);
                case wo.Currency:
                case wo.Decimal:
                    return function(e) {
                        let t;
                        No.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new ya(e) : No.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new ya(+e));
                        if (void 0 === t || t.lt(No.MIN_DECIMAL_VALUE) || t.gt(No.MAX_DECIMAL_VALUE)) throw new We.Exception("Could not convert '" + e + "' to Decimal");
                        return t
                    }(e);
                case wo.DateTime:
                    return function(e, t) {
                        if (!t) {
                            if (!xu.isConvertibleTo(e, wo.DateTime)) throw new We.Exception("Could not convert '" + e + "' to DateTime");
                            return Cu.from(e, wo.DateTime)
                        }
                        e instanceof Date && (e = new Ao(e.getTime()));
                        try {
                            return new Ao(1e3 * +e)
                        } catch (t) {
                            throw new We.Exception("Could not convert '" + e + "' to DateTime")
                        }
                    }(e, n);
                default:
                    return Cu.from(e, t)
            }
        }
        e.to = n, e.from = function e(r, n, s, a) {
            if (Su(n)) {
                const a = n;
                let o = t.get(a);
                if (!o) {
                    const r = a.getAttributes();
                    o = (t, s) => {
                        null != t || (t = {});
                        const a = r.reduce(((n, a, o) => ("" !== a.nameForJson && (a.dataType === wo.Record || a.dataType === wo.RecordList ? n[a.attrName] = Fo.getData(e(t[a.nameForJson], r[o].complexType, s)) : n[a.attrName] = i(t[a.nameForJson], r[o].dataType, r[o].defaultValue, s)), n)), {});
                        return new n(new n.RecordClass(a))
                    }, t.set(a, o)
                }
                return o(r, s)
            }
            if (Du(n) || Ru(n)) {
                if (void 0 === n.getItemType() || null === n.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                let t = r;
                if (null == t && (t = []), t.constructor !== Array) throw new TypeError("Could not convert '" + t + "' to List");
                const i = new n;
                return i.pushAll(t.map((t => e(t, n.getItemType(), s)))), i
            }
            return i(r, n, void 0 === a ? xo(n) : a, s)
        }
    }(Ou || (Ou = {})),
    function(e) {
        e.typeDefaultValue = Eu, e.convertToModelDataType = Iu, e.typeDisplayName = Au;
        const t = "1900-01-01 00:00:00",
            r = new Map;

        function n(e) {
            const t = wu[e];
            return void 0 === t ? At.DBDataType.UNKNOWN : t
        }

        function i(t, r, i, s) {
            return e.deserializeFromDB(t["o" + r], n(s))
        }

        function s(t, r, i, s) {
            return e.deserializeFromDB(t[i], n(s))
        }

        function a(e, t) {
            const r = t.length,
                n = e.toString();
            return t.substr(0, Math.max(0, r - n.length)) + n
        }
        e.from = function e(t, n, a, o) {
            var l;
            if (Su(n)) {
                const l = t,
                    u = n,
                    c = a;
                let d = r.get(u);
                if (!d) {
                    const t = u.getAttributes();
                    d = (r, i, s, a) => {
                        const o = {};
                        return a && a.length > 0 ? (t.forEach((e => {
                            e.dataType !== wo.RecordList && (o[e.attrName] = null)
                        })), a.forEach((n => {
                            const a = t.filter((e => e.attrName === n))[0];
                            a.complexType ? o[n] = e(r, a.complexType, i) : o[n] = s(r, i.value++, a.name, a.dataType)
                        }))) : t.forEach(((a, l) => {
                            a.dataType !== wo.RecordList && (a.dataType === wo.Record && n.isAnonymousRecord() ? o[a.attrName] = e(r, t[l].complexType, i) : o[a.attrName] = s(r, i.value++, t[l].name, t[l].dataType))
                        })), new n.RecordClass(o)
                    }, r.set(u, d)
                }
                return d(l, c, n.isAnonymousRecord() ? s : i, o)
            }
            if (Du(n)) {
                if (void 0 === n.getItemType() || null === n.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                const e = t,
                    r = n.getItemType(),
                    i = a,
                    s = new n,
                    o = [];
                for (let t = 0; t < e.length; t++) o.push(new r(i(null, e.item(t))));
                return s.pushAll(o), s
            } {
                const e = n;
                throw new Error(`Unable to read data from Local Storage. Unknown type ${null!==(l=null==e?void 0:e.name)&&void 0!==l?l:e}`)
            }
        }, e.serializeToDB = function(r, n) {
            if (n.isEntityReference && Co(r, e.typeDefaultValue(n.type))) return null;
            switch (n.type) {
                case At.DBDataType.INTEGER:
                    return r;
                case At.DBDataType.LONGINTEGER:
                    return r ? r.toString() : null;
                case At.DBDataType.DECIMAL:
                    const e = r;
                    return n.decimals ? e.toFixed(n.decimals) : e.toString();
                case At.DBDataType.TEXT:
                    return r;
                case At.DBDataType.BOOLEAN:
                    return r ? 1 : 0;
                case At.DBDataType.DATE_TIME:
                    let i = r.toNative();
                    return r.eq(Ao.defaultValue) ? t : (i = r.toNative(), a(i.getUTCFullYear(), "0000") + "-" + a(i.getUTCMonth() + 1, "00") + "-" + a(i.getUTCDate(), "00") + " " + a(i.getUTCHours(), "00") + ":" + a(i.getUTCMinutes(), "00") + ":" + a(i.getUTCSeconds(), "00"));
                case At.DBDataType.DATE:
                    const s = r.toNative();
                    return a(s.getFullYear(), "0000") + "-" + a(s.getMonth() + 1, "00") + "-" + a(s.getDate(), "00");
                case At.DBDataType.TIME:
                    const o = r.toNative();
                    return "1900-01-01 " + a(o.getHours(), "00") + ":" + a(o.getMinutes(), "00") + ":" + a(o.getSeconds(), "00");
                case At.DBDataType.BINARY_DATA:
                    const l = r;
                    return void 0 === l.content ? null : l.content;
                default:
                    throw new We.DataBaseException("", `Unable to serialize ${r} to a database value.`)
            }
        }, e.deserializeFromDB = function(r, n) {
            if (null === r) return e.typeDefaultValue(n);
            switch (n) {
                case At.DBDataType.INTEGER:
                    return r;
                case At.DBDataType.LONGINTEGER:
                    return to.fromValue(r);
                case At.DBDataType.DECIMAL:
                    return new ya(r);
                case At.DBDataType.TEXT:
                    return r;
                case At.DBDataType.BOOLEAN:
                    return 0 !== r;
                case At.DBDataType.DATE_TIME:
                case At.DBDataType.DATE:
                case At.DBDataType.TIME:
                    const e = /^((\d{4})-(\d{2})-(\d{2}))?\s?((\d{2}):(\d{2}):(\d{2}))?$/.exec(r),
                        i = new Date;
                    switch (n) {
                        case At.DBDataType.DATE_TIME:
                            if (r === t) return Ao.defaultValue;
                            i.setUTCFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setUTCHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0);
                            break;
                        case At.DBDataType.DATE:
                            i.setFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setHours(0, 0, 0, 0);
                            break;
                        case At.DBDataType.TIME:
                            i.setFullYear(1900, 0, 1), i.setHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0)
                    }
                    return new Ao(i);
                case At.DBDataType.BINARY_DATA:
                    return new Io(r);
                default:
                    throw new We.DataBaseException("", "Unable to deserialize " + r + " to a runtime value.")
            }
        }, e.deserializeLazyBinaryFromDB = function(e) {
            return new Io(void 0, void 0, e)
        }
    }(_u || (_u = {}));
    var Mu = Object.freeze({
        __proto__: null,
        get ServerDataConverter() {
            return Cu
        },
        get JSConversions() {
            return xu
        },
        get JSNodeParamConverter() {
            return Lu
        },
        get JSONConverter() {
            return Ou
        },
        get LocalStorageConverter() {
            return _u
        }
    });
    const Uu = "BACKUP_";

    function Fu(e) {}
    var $u, Pu, Vu, Bu;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New"
    }($u || ($u = {})),
    function(e) {
        const t = [{
            columnName: "Id",
            options: "INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL"
        }, {
            columnName: "Key",
            options: "UNIQUE NOT NULL"
        }, {
            columnName: "Value"
        }];
        e.TABLE_NAME = "OSSYS_PERSISTENTKEYVALUE";
        const r = `"${t.map((e=>e.columnName)).join('", "')}"`,
            n = t.map((e => "'" + e.columnName + (e.options ? "' " + e.options : "'"))).join(", ");

        function i(t) {
            return t.executeNonQuery(`CREATE TABLE IF NOT EXISTS "${e.TABLE_NAME}" (${n})`)
        }
        e.initialize = function(t, r) {
            return e.storage = new s(r), i(t)
        }, e.create = i;
        class s {
            constructor(e) {
                this.db = e
            }
            isReady() {
                return Promise.resolve(!0)
            }
            getValue(t) {
                return this.db.executeTransaction((r => r.executeScalar(`SELECT VALUE FROM ${e.TABLE_NAME} WHERE Key = ?`, [t])))
            }
            setValue(t, n) {
                return this.db.executeTransaction((i => i.executeNonQuery(`INSERT OR REPLACE INTO ${e.TABLE_NAME} (${r}) VALUES (COALESCE((SELECT Id FROM ${e.TABLE_NAME} WHERE Key = ?), null), ?, ?)`, [t, t, n])))
            }
        }
        e.PersistentKeyValueStorage = s
    }(Pu || (Pu = {})),
    function(e) {
        const t = "Metamodel";

        function r(e, t) {
            return !! function(e, t) {
                if (void 0 === e) return !0;
                if (e === t) return !1;
                switch (e) {
                    case At.DBDataType.BOOLEAN:
                        return t !== At.DBDataType.INTEGER && t !== At.DBDataType.LONGINTEGER;
                    case At.DBDataType.INTEGER:
                        return t !== At.DBDataType.LONGINTEGER && t !== At.DBDataType.TEXT;
                    case At.DBDataType.LONGINTEGER:
                        return t !== At.DBDataType.TEXT;
                    default:
                        return !0
                }
            }(e.type, t.type) || (!e.isEntityReference != !t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length))
        }

        function n(t, r, n, i) {
            if (n) {
                const s = function(e, t) {
                    const r = e.name.toLowerCase(),
                        n = t.attributes.filter((e => e.name.toLowerCase() === r));
                    return 0 === n.length ? null : n[0]
                }(r, n);
                if (null !== s) {
                    if (i && (null == s ? void 0 : s.type) === At.DBDataType.DATE_TIME) {
                        const n = i.attrs[r.name.toLowerCase()];
                        if (n) return e.upgradeDbValue(t, n, r)
                    }
                    return e.upgradeDbValue(t, s, r)
                }
            }
            const s = i.attrs[r.name.toLowerCase()];
            return s ? e.upgradeDbValue(t, s, r) : t
        }

        function i(e, t, r = !1, n = null) {
            let i, s = t;
            return n && t.type === At.DBDataType.DATE_TIME && (s = n), i = e.isPrimaryKey && s.isPrimaryKey && r ? !!(At.DBDataType.INTEGER !== e.type && At.DBDataType.LONGINTEGER !== e.type || At.DBDataType.INTEGER !== s.type && At.DBDataType.LONGINTEGER !== s.type) : e.type !== s.type, i || s.type !== At.DBDataType.DECIMAL && s.length !== e.length || s.type !== At.DBDataType.DECIMAL && s.decimals !== e.decimals || !s.isEntityReference != !e.isEntityReference && !e.isPrimaryKey
        }! function(e) {
            const r = "OSSYS_ENTITY",
                n = `${Uu}${r}`,
                i = [{
                    name: "SS_Key"
                }, {
                    name: "Module_SS_Key"
                }, {
                    name: "Name"
                }, {
                    name: "Physical_Table_name"
                }, {
                    name: "Hash"
                }, {
                    name: "Extra_Info",
                    defaultValue: "'{\"attrs\":{}}'"
                }, {
                    name: "Upgrade_Status",
                    defaultValue: (0).toString()
                }],
                s = `"${i.map((e=>e.name)).join('", "')}"`;

            function a(e, t) {
                return e.executeNonQuery(`CREATE TABLE IF NOT EXISTS "${t}" (${s}, UNIQUE (SS_Key, Module_SS_Key))`)
            }

            function o(e, t) {
                let r = !0;
                const n = i.map((e => `"ent"."${e.name}"`));
                return e.executeQueryRaw(`SELECT ${n.join(", ")} FROM "${t}" "ent" LIMIT 0`).onError((e => {
                    r = !1
                })).andThen((() => r))
            }

            function l(e, t, i) {
                return u(e, r, t, i).andThen((e => u(e, n, t, i)))
            }

            function u(e, t, r, n) {
                let i = !1;
                return e.feed(null).andThenAll((() => [e => e.executeNonQuery(`SELECT "ent"."${r}" FROM ${t} "ent" LIMIT 0`).onError((e => {
                    i = !0
                })), e => i ? e.executeNonQuery(`ALTER TABLE ${t} ADD "${r}"`).andThen((e => n ? e.executeNonQuery(`UPDATE ${t} SET "${r}" = ${n}`) : e.feed(null))) : e.feed(null)]))
            }

            function c(e) {
                ti(t, `Extracting metadata for table ${e.tableName} (${e.name})`);
                const r = {
                    v: 0,
                    idIsAutoNumber: e.idIsAutoNumber,
                    attrs: {}
                };
                for (const t of e.attributes) r.attrs[t.name.toLowerCase()] = d(t);
                return r
            }

            function d(e) {
                const t = {
                    type: e.type
                };
                return void 0 !== e.decimals && (t.decimals = e.decimals), void 0 !== e.length && (t.length = e.length), e.isPrimaryKey && (t.isPrimaryKey = e.isPrimaryKey), e.isEntityReference && (t.isEntityReference = e.isEntityReference), t
            }
            e.getDefaultMetaData = function() {
                return {
                    v: -1,
                    attrs: {}
                }
            }, e.create = function(e) {
                return a(e, r).andThen((e => a(e, `${Uu}${r}`)))
            }, e.innerCreate = a, e.verifyColumns = function(e) {
                return o(e, r).andThen((e => o(e, n)))
            }, e.innerVerifyColumns = o, e.addMissingColumns = function(e) {
                return e.feed(null).andThenAll((e => i.map((e => t => l(t, e.name, e.defaultValue)))))
            }, e.addColumnIfNeeded = l, e.copyMetaInfo = function(e, t, i) {
                const a = i ? n : r,
                    o = i ? r : n;
                let l = e.executeNonQuery(`DELETE FROM ${o} WHERE Physical_Table_name = ?`, [t]).andThen((e => e.executeNonQuery(`INSERT INTO ${o}(${s}) SELECT ${s} FROM ${a} WHERE Physical_Table_name = ?`, [t])));
                return i && (l = l.andThen((e => e.executeNonQuery(`DELETE FROM ${a} WHERE Physical_Table_name = ?`, [t])))), l
            }, e.extractEntityMetadata = c, e.updateEntity = function(e, n, i) {
                const s = c(n);
                ti(t, `Updating metadata for table ${n.tableName} (${n.name})`);
                const a = new Ku;
                return a.add("Hash", At.DBDataType.TEXT, n.hash), a.add("Name", At.DBDataType.TEXT, n.name), a.add("Physical_Table_name", At.DBDataType.TEXT, n.tableName), a.add("Extra_Info", At.DBDataType.TEXT, JSON.stringify(s)), a.add("Key", At.DBDataType.TEXT, n.key), a.add("ModuleKey", At.DBDataType.TEXT, i), e.executeNonQuery(`UPDATE ${r} SET Hash = ?, Name = ?, Physical_Table_name = ?, Extra_Info = ? WHERE SS_Key = ? AND Module_SS_Key = ?`, a.toArray())
            }, e.insertEntity = function(e, t, n) {
                const i = c(t),
                    s = new Ku;
                return s.add("Key", At.DBDataType.TEXT, t.key), s.add("ModuleKey", At.DBDataType.TEXT, n), s.add("Name", At.DBDataType.TEXT, t.name), s.add("TableName", At.DBDataType.TEXT, t.tableName), s.add("Hash", At.DBDataType.TEXT, t.hash), s.add("Extra_Info", At.DBDataType.TEXT, JSON.stringify(i)), s.add("Upgrade_Status", At.DBDataType.TEXT, 3), e.executeNonQuery(`INSERT INTO ${r}(SS_Key, Module_SS_Key, Name, Physical_Table_name, Hash, Extra_Info, Upgrade_Status) VALUES (?, ?, ?, ?, ?, ?, ?)`, s.toArray())
            }
        }(e.Metamodel || (e.Metamodel = {})), e.upgradeDbValue = function(e, t, n) {
            if (r(t, n)) {
                const r = _u.deserializeFromDB(e, t.type),
                    i = _u.convertToModelDataType(n.type),
                    s = function(e, t, r, n) {
                        let i = e,
                            s = t;
                        const a = function(e) {
                                switch (e) {
                                    case At.DBDataType.TEXT:
                                        return "Text";
                                    case At.DBDataType.BINARY_DATA:
                                        return "Binary Data";
                                    case At.DBDataType.BOOLEAN:
                                        return "Boolean";
                                    case At.DBDataType.INTEGER:
                                        return "Integer";
                                    case At.DBDataType.LONGINTEGER:
                                        return "Long Integer";
                                    case At.DBDataType.DECIMAL:
                                        return "Decimal";
                                    case At.DBDataType.DATE_TIME:
                                        return "DateTime";
                                    case At.DBDataType.DATE:
                                        return "Date";
                                    case At.DBDataType.TIME:
                                        return "Time";
                                    default:
                                        return "Unknown"
                                }
                            }(r),
                            o = wo[n];
                        "string" == typeof e && e && (i = e.substr(0, 50) + ` (length:${e.length})`);
                        if (al.isText(t)) {
                            const e = t;
                            s = e.substr(0, 50) + ` (length:${e.length})`
                        }
                        if (t instanceof Io) {
                            const e = t.content;
                            s = e.substr(0, 50) + ` (length:${e.length})`
                        }
                        return `convert databaseValue:'${i}'/deserializedValue:'${s}' from type ${a} to ${o}`
                    }(e, r, t.type, i);
                if (xu.isConvertibleTo(r, i)) {
                    const e = xu.convertTo(r, i),
                        t = _u.serializeToDB(e, n);
                    return Wu(t, n, s), t
                }
                throw new We.DataBaseException("", `Unable to ${s}.`)
            }
            return e
        }, e.upgradeDbRecord = function(e, t, r, i) {
            const s = {};
            for (const t of Object.keys(e)) s[t.toLowerCase()] = e[t];
            ! function(e, t) {
                var r;
                for (const n of t.attributes) {
                    const t = n.name.toLowerCase();
                    if (void 0 === e[t]) {
                        const i = null !== (r = n.default) && void 0 !== r ? r : _u.typeDefaultValue(n.type);
                        e[t] = _u.serializeToDB(i, n)
                    }
                }
            }(s, t);
            const a = {};
            for (const e of t.attributes) try {
                const t = e.name.toLowerCase(),
                    o = s[t];
                a[t] = n(o, e, r, i)
            } catch (t) {
                throw new We.DataBaseException("", `Unable to upgrade attribute '${e.name}' data type to '${_u.typeDisplayName(e.type)}':\n${Je(t)}`)
            }
            return a
        }, e.requiresFullUpgrade = function(e, t, r) {
            let n;
            if (n = t ? t.idIsAutoNumber : r.idIsAutoNumber, n !== e.idIsAutoNumber) return !0;
            return function(e, t, r) {
                const n = {};
                for (const t of e.attributes) {
                    const e = t.name.toLowerCase();
                    n[e] = {}, n[e].entityAttribute = t
                }
                for (const e of Object.keys(r.attrs)) {
                    const t = e.toLowerCase();
                    n[t] = n[t] || {}, n[t].dbMetaAttribute = r.attrs[e]
                }
                if (t)
                    for (const e of t.attributes) {
                        const t = null == e ? void 0 : e.name.toLowerCase();
                        n[t] = n[t] || {}, n[t].dbAttribute = e
                    }
                return Object.keys(n).map((e => n[e]))
            }(e, t, r).some((e => !e.entityAttribute || (e.dbAttribute || e.dbMetaAttribute ? function(e, t, r, n = !1) {
                if (t) {
                    return !(void 0 === r || void 0 === r.type || r.type === e.type) || i(e, t, n, r) || !t.isPrimaryKey != !e.isPrimaryKey
                }
                return i(e, r, n) || !r.isPrimaryKey != !e.isPrimaryKey
            }(e.entityAttribute, e.dbAttribute, e.dbMetaAttribute, n !== At.AutoNumber.No) : e.entityAttribute.isPrimaryKey)))
        }
    }(Vu || (Vu = {})),
    function(e) {
        e[e.Auto = 0] = "Auto", e[e.Single = 1] = "Single", e[e.Bulk = 2] = "Bulk"
    }(Bu || (Bu = {}));
    const ku = new il("Id", "idOut"),
        zu = new sl("Record", "recordOut"),
        Hu = "WebSQLStorage";
    class ju {
        constructor() {}
        getDatabase() {
            return this._db ? Promise.resolve(this._db) : (this.dbReadyPromise || (this.dbReadyPromise = new Promise((e => {
                this.onDbInit = () => e(this._db)
            }))), this.dbReadyPromise)
        }
        initDb(e) {
            ti(Hu, `Setting platform database to '${e?e.name:"none"}'`), this._db = e, this.onDbInit && (this.onDbInit(), this.onDbInit = null)
        }
        clearDb() {
            this._db = null
        }
        initModule(e, t, r) {
            return this.recoverBackupTables(t, e, r).andThen((t => 0 === e.length ? t.feed(null) : this.dropInconsistentTables(t, e, r))).andThen((t => this.backupDeletedTables(t, e, r))).andThen((e => {
                const t = new Ku;
                return t.add("ModuleKey", At.DBDataType.TEXT, r), e.executeQuery("SELECT SS_Key, Hash, Extra_Info FROM OSSYS_ENTITY WHERE Module_SS_Key = ?", (e => ({
                    hash: e.Hash,
                    extraInfo: JSON.parse(e.Extra_Info || "{}"),
                    ssKey: e.SS_Key
                })), t.toArray())
            })).andThenAll((t => e.map((e => {
                const n = t.filter((t => t.ssKey === e.key));
                return t => this.createOrUpgradeTable(t, e, 1 === n.length ? n[0] : void 0, r)
            }))))
        }
        initMetamodel(e) {
            return Vu.Metamodel.create(e).andThen((e => Vu.Metamodel.verifyColumns(e))).andThen(((e, t) => {
                if (!t) return Vu.Metamodel.addMissingColumns(e)
            }))
        }
        createOrUpgradeTable(e, t, r, n) {
            ti(Hu, `Checking the status of table ${t.tableName} (${t.name})`), r || (r = {
                hash: null,
                extraInfo: Vu.Metamodel.getDefaultMetaData()
            });
            const {
                hash: i,
                extraInfo: s
            } = r;
            return i ? i !== t.hash ? Li.introspectTableInfo(e, t.tableName).andThen(((e, r) => Vu.requiresFullUpgrade(t, r, s) ? (ti(Hu, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), this.recreateTable(e, t, r, n, s)) : (ti(this, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), this.upgradeTable(e, t, r, n, s)))) : (ti(Hu, `Table ${t.tableName} (${t.name}) exists and is up to date`), null) : (ti(Hu, `Table ${t.tableName} (${t.name}) does not exist and will be created`), this.createTable(e, t, n).andThen((e => Vu.Metamodel.insertEntity(e, t, n))))
        }
        recreateTable(e, t, r, n, i) {
            return e.executeQuery(`SELECT * FROM "${t.tableName}"`, (e => e)).onError((e => {
                throw ni(Hu, `Unable to upgrade the definition of entity '${t.name}':\n${Je(e)}`), new We.DataBaseException("", `Unable to upgrade the definition of entity '${t.name}':\n${Je(e)}`)
            })).andThen(((e, s) => this.backupTable(e, t.tableName, 2).andThen((e => this.createTable(e, t, n))).andThenAll((() => s.map((e => {
                const n = Vu.upgradeDbRecord(e, t, r, i),
                    s = new Ku(!0);
                for (const e of t.attributes) s.add(e.name, e.type, n[e.name.toLowerCase()]);
                return e => e.executeNonQuery(t.insert.sql, s.toArray())
            })))))).andThen((e => Vu.Metamodel.updateEntity(e, t, n)))
        }
        upgradeTable(e, t, r, n, i, s = null) {
            return e.feed(null).andThenAll((() => {
                const e = t.attributes.filter((e => r ? !r.attributes.some((t => e.name === t.name)) : !Object.keys(i.attrs).some((t => t === e.name.toLowerCase()))));
                return ti(this, `Entity '${t.name}' - newAttributes - ${JSON.stringify(e)} - hash - ${s} - info.hash - ${t.hash}`), e.map((e => r => {
                    let n = r.executeNonQuery(e.addColumn.sql);
                    if (void 0 !== e.default) {
                        const r = new Ku;
                        r.add("value", e.type, e.default), n = n.andThen((n => n.executeNonQuery(`UPDATE "${t.tableName}" SET "${e.name}" = ?`, r.toArray())))
                    }
                    return n
                }))
            })).andThen((e => Vu.Metamodel.updateEntity(e, t, n)))
        }
        switchModule(e, t) {
            return this.dropBackupTables(e, t)
        }
        recoverBackupTables(e, t, r) {
            return this.doForEachTable(e, (e => (ti(Hu, `Recovering table ${e}`), t.filter((t => t.tableName === e)), t => this.recoverBackupTable(t, e))), r, "Upgrade_Status <> 0")
        }
        dropInconsistentTables(e, t, r) {
            return this.doForEachTable(e, (e => (ti(this, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => this.dropTableIfExists(t, e).andThen((t => t.executeNonQuery(`DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${e}'`))))), r, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND SS_Key IN (${t.map((e=>"'"+e.key+"'")).join(", ")}) AND Physical_Table_name NOT IN (${t.map((e=>"'"+e.tableName+"'")).join(", ")})`))
        }
        dropBackupTables(e, t) {
            return this.doForEachTable(e, (e => (ti(Hu, `Dropping table ${e}`), t => this.dropBackupTable(t, e))), t, "Upgrade_Status <> 0")
        }
        backupDeletedTables(e, t, r) {
            return this.doForEachTable(e, (e => (ti(Hu, `Backing up old table ${e}`), t => this.backupTable(t, e, 1))), r, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND Physical_Table_name NOT IN (${t.map((e=>"'"+e.tableName+"'")).join(", ")})`))
        }
        doForEachTable(e, t, r, n) {
            let i = `SELECT Physical_Table_name as name FROM OSSYS_ENTITY WHERE Module_SS_Key = '${r}'`;
            return n && (i += " AND " + n), e.executeQuery(i, (e => e.name)).andThenAll((e => {
                const r = [];
                return e.forEach((e => {
                    r.push(t(e))
                })), r
            }))
        }
        dropTableIfExists(e, t) {
            return e.executeNonQuery(`DROP TABLE IF EXISTS "${t}"`)
        }
        createTable(e, t, r) {
            return ti(Hu, `createTable '${t.createTable.sql}'`), e.executeNonQuery(t.createTable.sql)
        }
        backupTable(e, t, r) {
            return ti(Hu, `backupTable '${t}'`), Vu.Metamodel.copyMetaInfo(e, t, !1).andThen((e => this.dropTableIfExists(e, this.getBackupTableName(t)))).andThen((e => this.renameTableAndSetStatus(e, t, this.getBackupTableName(t), t, r)))
        }
        recoverBackupTable(e, t) {
            let r = !0;
            return this.dropTableIfExists(e, t).andThen((e => e.executeScalar(`SELECT 1 FROM ${this.getBackupTableName(t)}`))).onError((e => {
                e && (r = !1)
            })).andThen((e => {
                if (r) return this.renameTableAndSetStatus(e, this.getBackupTableName(t), t, t, 0)
            })).andThen((e => Vu.Metamodel.copyMetaInfo(e, t, !0)))
        }
        dropBackupTable(e, t) {
            return this.dropTableIfExists(e, this.getBackupTableName(t)).andThen((e => e.executeScalar(`SELECT Upgrade_Status FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'`))).andThen(((e, r) => e.executeNonQuery(1 === r ? `DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'` : `UPDATE OSSYS_ENTITY SET Upgrade_Status = 0 WHERE upper(Physical_Table_name) = '${t}'`))).andThen((e => e.executeNonQuery(`DELETE FROM ${Uu}OSSYS_ENTITY WHERE Physical_Table_name = ?`, [t])))
        }
        renameTableAndSetStatus(e, t, r, n, i) {
            return ti(Hu, `renameTableAndSetStatus '${n} to ${r}'`), this.renameTable(e, t, r).andThen((e => this.setTableUpgradeStatus(e, n, i)))
        }
        renameTable(e, t, r) {
            return e.executeNonQuery(`ALTER TABLE "${t}" RENAME TO "${r}"`)
        }
        setTableUpgradeStatus(e, t, r) {
            return e.executeNonQuery(`UPDATE OSSYS_ENTITY SET Upgrade_Status = ${r} WHERE upper(Physical_Table_name) = '${t}'`)
        }
        getBackupTableName(e) {
            return Uu + e
        }
        executeNonQuery(e, t) {
            return this.getDatabase().then((r => r.executeTransaction((r => r.executeNonQuery(e, null == t ? void 0 : t.toArray())))))
        }
        executeQuery(e, t, r, n) {
            return this.getDatabase().then((i => i.executeReadTransaction((i => i.executeQueryRaw(e, null == n ? void 0 : n.toArray()).andThen(((e, n) => _u.from(n.rows, t, r)))))))
        }
        rawExecuteQuery(e, t, r) {
            return this.getDatabase().then((n => n.executeReadTransaction((n => n.executeQueryRaw(e, null == r ? void 0 : r.toArray()).andThen(((e, r) => {
                const n = new Array(r.rows.length);
                for (let e = 0; e < r.rows.length; e++) {
                    const i = r.rows.item(e);
                    n[e] = t(i)
                }
                return n
            }))))))
        }
        executeCount(e, t) {
            return this.getDatabase().then((r => r.executeReadTransaction((r => r.executeScalar(e, null == t ? void 0 : t.toArray()).andThen(((e, t) => _u.deserializeFromDB(t, At.DBDataType.LONGINTEGER)))))))
        }
        rawExecuteScalar(e, t) {
            return this.getDatabase().then((r => r.executeReadTransaction((r => r.executeQueryRaw(e, null == t ? void 0 : t.toArray()).andThen(((e, t) => 0 === t.rows.length ? null : function(e) {
                for (const t in e)
                    if (e.hasOwnProperty(t)) return e[t];
                return null
            }(t.rows.item(0))))))))
        }
        create(e, t) {
            return Gu(e, t, "create"), this.getDatabase().then((r => r.executeTransaction((r => this.createInner(r, e, t, !0)))))
        }
        createInner(e, t, r, n) {
            var i, s;
            const a = null === (s = (i = t.insert).getArguments) || void 0 === s ? void 0 : s.call(i, r);
            return e.executeQueryRaw(t.insert.sql, null == a ? void 0 : a.toArray()).andThen(((e, i) => {
                if (null === t.getIdAttribute()) return null;
                (t.idIsAutoNumber === At.AutoNumber.No || t.idIsAutoNumber === At.AutoNumber.YesIfEmpty && !t.hasNullId(r)) && (n = !1);
                const s = t.getIdAttribute().type,
                    a = _u.convertToModelDataType(s),
                    o = new(ku.getType(a));
                let l;
                return l = n ? _u.deserializeFromDB(i.insertId, s) : t.getIdFromRecord(r), o.idOut = l, o
            }))
        }
        update(e, t) {
            var r, n;
            Gu(e, t, "update");
            const i = null === (n = (r = e.update).getArguments) || void 0 === n ? void 0 : n.call(r, t);
            return this.executeNonQuery(e.update.sql, i)
        }
        createOrUpdate(e, t) {
            return this.getDatabase().then((r => r.executeTransaction((r => this.createOrUpdateInner(r, e, t, !0)))))
        }
        createOrUpdateInner(e, t, r, n) {
            var i, s;
            if (Gu(t, r, "create or update"), t.hasNullId(r)) return this.createInner(e, t, r, !0);
            const a = null === (s = (i = t.upsert).getArguments) || void 0 === s ? void 0 : s.call(i, r);
            return e.executeQueryRaw(t.upsert.sql, null == a ? void 0 : a.toArray()).andThen(((e, n) => {
                const i = t.getIdFromRecord(r),
                    s = t.getIdAttribute().type,
                    a = _u.convertToModelDataType(s),
                    o = new(ku.getType(a));
                return o.idOut = i, o
            }))
        }
        createOrUpdateAll(e, t) {
            return this.getDatabase().then((r => r.executeTransaction((r => ju.ForceCreateOrUpdateAllMethod === Bu.Bulk || ju.ForceCreateOrUpdateAllMethod === Bu.Auto && 0 === e.attributes.filter((e => e.type === At.DBDataType.BINARY_DATA)).length ? this.createOrUpdateAllBulk(r, e, t) : this.createOrUpdateAllSingle(r, e, t))).then(Fu)))
        }
        createOrUpdateAllBulk(e, t, r) {
            var n, i, s, a;
            const o = [],
                l = (e, t) => o.push((r => r.executeQueryRaw(e, t))),
                u = Math.floor(ju.MaxQueryParameters / t.attributes.length);
            if (0 === u) return this.createOrUpdateAllSingle(e, t, r);
            const c = Math.ceil(r.length / u);
            for (let e = 0; e < c; e++) {
                let o = [],
                    c = 0;
                for (; c < u;) {
                    const s = e * u + c;
                    if (s === r.length) break;
                    const a = r.getItem(s);
                    Gu(t, a, "create or update"), o = o.concat(null === (i = (n = t.upsert).getArguments) || void 0 === i ? void 0 : i.call(n, a).toArray()), c++
                }
                l(null === (a = (s = t.upsert).getBulkSql) || void 0 === a ? void 0 : a.call(s, c), o)
            }
            return e.feed(null).andThenAll((() => o))
        }
        createOrUpdateAllSingle(e, t, r) {
            const n = [],
                i = e => n.push((r => this.createOrUpdateInner(r, t, e, !1)));
            for (let e = 0; e < r.length; e++) {
                i(r.getItem(e))
            }
            return e.feed(null).andThenAll((() => n))
        }
        get(e, t) {
            const r = e.getIdAttribute(),
                n = new Ku;
            return n.add(r.name, r.type, t), this.rawExecuteQuery(e.select.sql, e.dbRecordToRecord, n).then((r => {
                if (0 === r.length) throw new We.DataBaseException("", `${e.name} with id ${t} was not found`);
                {
                    const e = new(zu.getType(r[0].constructor));
                    return e.recordOut = r[0], e
                }
            }))
        }
        delete(e, t) {
            const r = e.getIdAttribute(),
                n = new Ku;
            return n.add(r.name, r.type, t), this.executeNonQuery(e.delete.sql, n)
        }
        deleteAll(e) {
            return this.executeNonQuery(e.deleteAll.sql)
        }
        getBinary(e, t, r) {
            const n = e.getIdAttribute(),
                i = n.name,
                s = n.type,
                a = `SELECT "${t}" FROM "${e.tableName}" WHERE "${i}" = ?`,
                o = new Ku;
            return o.add(i, s, r), _u.deserializeLazyBinaryFromDB((() => this.getDatabase().then((e => e.executeReadTransaction((e => e.executeScalar(a, o.toArray())))))))
        }
        replaceEntityReferencesInOrderBy(e, t, r) {
            let n = Ft(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (n.length > 0) {
                const e = n[0];
                throw new We.DataBaseException("", `'${e.groups[2]+e.groups[3]}' found in 'Order By' parameter is a reserved prefix`)
            }
            if ("" !== e && (n = Ft(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== n.length || n[0].value !== e)) throw new We.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = $t(e, "(\\{\\w+\\}|\\w+\\.)", !1, (e => this.replaceEntityNameInOrderBy(e, t, r)));
            return i = $t(i, "(\\[\\w+\\])", !1, (e => this.replaceAttributeName(e))), i
        }
        replaceEntityNameInOrderBy(e, t, r) {
            let n = "";
            const i = this.getEntityNameFromMatch(e);
            let s = !1;
            for (let e = 0; e < t.length; e++)
                if (t[e].toLowerCase() === i.toLowerCase()) {
                    s = !0, n = '"' + r[e] + '"';
                    break
                } if (!s) throw new We.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
            return "." === e.value.charAt(e.value.length - 1) ? n + "." : n
        }
        replaceAttributeName(e) {
            const t = e.value.substr(1, e.value.length - 2);
            return t ? ('"' === t.charAt(0) ? "" : '"') + t + ('"' === t.charAt(t.length - 1) ? "" : '"') : ""
        }
        getEntityNameFromMatch(e) {
            return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2)
        }
        getOrderByColumnsWithoutDuplicates(e) {
            return this.filterDuplicateOrderByColumns(e).join(", ")
        }
        filterDuplicateOrderByColumns(e) {
            const t = new Array,
                r = {};
            return e.forEach((e => {
                const n = e.trim();
                if ("" !== n) {
                    const e = n.replace(new RegExp("\b((ASC)|(DESC))$", "im"), "").replace('"', "").replace("[", "").replace("]", "").trim().toLowerCase();
                    !0 !== r[e] && (t.push(n), r[e] = !0)
                }
            })), t
        }
    }
    ju.MaxQueryParameters = 500, ju.ForceCreateOrUpdateAllMethod = Bu.Auto;
    const qu = new ju;

    function Gu(e, t, r) {
        const n = e.getAllAttributesFromRecord(t).toArray();
        for (let t = 0; t < e.attributes.length; t++) {
            const i = e.attributes[t];
            Wu(n[t], i, `${r} '${e.name}.${i.name}'`)
        }
    }

    function Wu(e, t, r) {
        if (t.type === At.DBDataType.TEXT) {
            if (null === e || void 0 === t.length) return;
            const n = e.length - t.length;
            if (n > 0) throw new We.DataBaseException("", `Unable to ${r} because it exceeds the maximum allowed length by ${n} characters.`)
        } else if (t.type === At.DBDataType.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const n = e.split(".")[0].length - (t.length - t.decimals);
            if (n > 0) throw new We.DataBaseException("", `Unable to ${r} because it exceeds the maximum allowed length by ${n} characters.`)
        }
    }
    class Ku {
        constructor(e) {
            this.skipConversion = e, this.argumentList = [], this.existingArguments = {}
        }
        add(e, t, r, n, i, s) {
            if (!this.existingArguments[e])
                if (this.existingArguments[e] = !0, void 0 === r) this.argumentList.push(null);
                else {
                    let e;
                    e = this.skipConversion ? r : _u.serializeToDB(r, {
                        type: t,
                        length: n,
                        decimals: i,
                        isEntityReference: s
                    }), this.argumentList.push(e)
                }
        }
        toArray() {
            return this.argumentList
        }
    }
    var Ju = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: Uu,
        get PersistentKeyValue() {
            return Pu
        },
        get Upgrades() {
            return Vu
        },
        WebSQLStorage: ju,
        webSQLStorageInstance: qu,
        Entity: class {
            constructor(e, t, r) {
                this.storage = e, this.info = t, this.moduleKey = r, this.getBinary = (e, t, r) => r.hasContent() ? r : this.storage.getBinary(this.info, e, t)
            }
            getStorage() {
                return this.storage
            }
            getInfo() {
                return this.info
            }
            create(e) {
                return this.storage.create(this.info, e)
            }
            createOrUpdate(e) {
                return this.storage.createOrUpdate(this.info, e)
            }
            createOrUpdateAll(e) {
                return this.storage.createOrUpdateAll(this.info, e)
            }
            update(e) {
                return this.storage.update(this.info, e)
            }
            get(e) {
                return this.storage.get(this.info, e)
            }
            delete(e) {
                return this.storage.delete(this.info, e)
            }
            deleteAll() {
                return this.storage.deleteAll(this.info)
            }
        },
        QueryArgumentsList: Ku
    });
    const Yu = "_error.html",
        Xu = {
            errorCode: "UNHANDLED"
        },
        Qu = {
            errorCode: "IGNORED"
        },
        Zu = "ErrorHandling",
        ec = {
            errorPageMessage: new ke(Se.Session, "ErrorPageMessage", ""),
            errorPageExtraMessage: new ke(Se.Session, "ErrorPageExtraMessage", ""),
            errorPageExceptionInfo: new ke(Se.Session, "ErrorPageExceptionInfo")
        };

    function tc(e, r = "", n = "", i) {
        var s, a;
        if (!zr() && (e && (oc(e) ? lc(e) : ii(null !== (s = e.category) && void 0 !== s ? s : Zu, e.message || "Navigating to Error page", null !== (a = e.errorCode) && void 0 !== a ? a : "OS-CLRT-00000", e, t.Visibility.External)), Cr(i))) {
            const t = dn.getVersionedUrl(Yu);
            ec.errorPageMessage.set(r), ec.errorPageExtraMessage.set(n), e ? ec.errorPageExceptionInfo.set(Xe(e)) : ec.errorPageExceptionInfo.remove(), Hr(t)
        }
    }

    function rc(e, t) {
        var r;
        const n = X();
        tc(e, (null === (r = null == n ? void 0 : n.messages) || void 0 === r ? void 0 : r.incompatibleProducer) || e.message, void 0, t)
    }

    function nc(e) {
        var t;
        const r = X();
        tc(void 0, (null === (t = null == r ? void 0 : r.messages) || void 0 === t ? void 0 : t.appOffline) || "This application is temporarily unavailable. Try reloading or contact the administrator.", void 0, e)
    }

    function ic(e, r) {
        ti(Zu, "Error thrown by the application: " + e, t.Visibility.Client), et(e) ? nc(r) : Ke(e, We.IncompatibleProducerException) ? rc(e, r) : tc(e, void 0, void 0, r)
    }

    function sc(e, t) {
        return !!Ke(e, We.IgnorableSystemException) || !!et(e) && (nc(t), !0)
    }

    function ac(e) {
        return e === Xu || e === Qu
    }

    function oc(e) {
        return e && "string" == typeof e.requireType
    }

    function lc(e) {
        var r;
        let n = "OS-CLRT-RJS-00000",
            i = t.Visibility.Internal;
        if ("timeout" === e.requireType) n = "OS-CLRT-RJS-00005";
        else if ("mismatch" === e.requireType) n = -1 !== e.message.indexOf("anonymous define()") ? "OS-CLRT-RJS-00004" : "OS-CLRT-RJS-00003", i = t.Visibility.External;
        else if ("scripterror" === e.requireType) {
            n = /Script error for.*?, needed by:.*/gm.test(e.message) ? "OS-CLRT-RJS-00002" : "OS-CLRT-RJS-00001", i = t.Visibility.External
        }
        ii(Zu, null !== (r = e.message) && void 0 !== r ? r : "Error loading script by RequireJS", n, e, i)
    }
    var uc = Object.freeze({
        __proto__: null,
        ERROR_PAGE_HTML: Yu,
        UNHANDLED_ERROR_RESULT: Xu,
        IGNORED_ERROR_RESULT: Qu,
        ErrorHandlingStorage: ec,
        navigateToErrorPage: tc,
        navigateToIncompatibleProducer: rc,
        navigateToAppOffline: nc,
        handleError: ic,
        defaultErrorHandler: function(e, t, r = ((e, t) => ic(e, t)), n = ((e, t) => sc(e, t))) {
            return Je(e) && ni(Zu, Je(e)), e instanceof We.NotRegisteredException ? (wn({
                callbackUrl: ne()
            }), Xu) : n(e, t) ? Qu : (r(e, t), Xu)
        },
        ignoreError: sc,
        isSpecialHandleErrorResult: ac,
        isRequireJSError: oc,
        reportRequireJSError: lc
    });
    let cc, dc, hc = !0;

    function gc(e) {
        hc = e
    }

    function mc(e, t, r = !0, n = "", i = !0, s) {
        if (!hc) return;
        const a = () => cc.showMessage(e, t, r, n, i, s);
        cc ? a() : dc = a
    }

    function pc() {
        if (!hc) return;
        cc ? cc.closeMessage() : dc = null
    }
    var fc, vc, yc, bc, Tc = Object.freeze({
        __proto__: null,
        registerFeedbackMessageService: function(e) {
            cc = e, dc && (dc(), dc = null)
        },
        setEnabled: gc,
        showFeedbackMessage: mc,
        closeFeedbackMessage: pc
    });
    class wc {
        constructor() {
            fc.set(this, 0)
        }
        create() {
            return l(this, fc, o(this, fc, "f") + 1, "f"), o(this, fc, "f")
        }
        shouldAbort(e) {
            return e !== o(this, fc, "f")
        }
    }

    function Ec(e, t, r) {
        return (...n) => a(this, void 0, void 0, (function*() {
            ! function(e, t, r) {
                const {
                    responseHandler: n
                } = r[0];
                r[0].responseHandler = (...r) => {
                    e.shouldAbort(t) || null == n || n(...r)
                }
            }(e, t, n);
            try {
                if (e.shouldAbort(t)) return {
                    completed: !1
                };
                const i = yield r(...n);
                return e.shouldAbort(t) ? {
                    completed: !1
                } : {
                    completed: !0,
                    data: i
                }
            } catch (r) {
                if (e.shouldAbort(t)) return {
                    completed: !1
                };
                throw r
            }
        }))
    }
    fc = new WeakMap;
    class Ic {
        constructor() {
            vc.add(this), yc.set(this, new Map)
        }
        create(e, t = go) {
            const r = o(this, vc, "m", bc).call(this, e),
                n = r.create();
            return {
                ref: n,
                post: Ec(r, n, t)
            }
        }
    }
    yc = new WeakMap, vc = new WeakSet, bc = function(e) {
        let t = o(this, yc, "f").get(e);
        return t || (t = new wc, o(this, yc, "f").set(e, t)), t
    };
    const Ac = "ResourceCache";
    class Nc {
        constructor() {
            this.isCaching = !1, this.errorMessages = [], this.onFinishListeners = [], this.onErrorListeners = [], this.onProgressListeners = []
        }
        onFinish() {
            this.isCaching = !1, this.onFinishListeners.forEach((e => e())), this.onFinishListeners = [], this.onErrorListeners = [], this.onProgressListeners = []
        }
        onError(e) {
            this.errorMessages.push(e), this.onErrorListeners.forEach((t => t(e)))
        }
        onProgress(e, t) {
            this.onProgressListeners.forEach((r => r(e, t)))
        }
        listen(e, t, r) {
            this.errorMessages.length > 0 && t && t(this.errorMessages.join("\n")), !this.isCaching && e && e(), this.isCaching && (e && this.onFinishListeners.push(e), t && this.onErrorListeners.push(t), r && this.onProgressListeners.push(r))
        }
        start(e) {
            return new Promise(((t, r) => {
                if (!this.isCaching) try {
                    this.isCaching = !0, this.errorMessages = [], this.innerStart(e)
                } catch (e) {
                    return this.onError(e.message), void r(e.message)
                }
                const n = {
                    finished: !1
                };
                this.listen((() => {
                    n.finished || (n.finished = !0, t())
                }), (e => {
                    n.finished || (n.finished = !0, r(e))
                }), null)
            }))
        }
        switch (e) {
            this.innerSwitch(e)
        }
    }
    class Sc extends Nc {
        constructor() {
            super(), this.isNativeReady = !1, this.isCacheAvailable = !1, cr().then((() => {
                this.isNativeReady = !0, this.isCacheAvailable = "undefined" != typeof OSCache, this.isCacheAvailable ? (OSCache.addEventListener("onfinish", (e => this.onFinish())), OSCache.addEventListener("onerror", (e => this.onError(e.message))), OSCache.addEventListener("onprogress", (e => this.onProgress(e.loaded, e.total)))) : console.error(Ac, Sc.OSCacheNotFoundMessage)
            }), (e => {
                console.error(Ac, "OSCache was not initialized because Cordova was not loaded.", e)
            }))
        }
        checkOSCacheAndDeferCall(e, t) {
            return this.isNativeReady ? !!this.isCacheAvailable || (e && this.onError(Sc.OSCacheNotFoundMessage), !1) : (cr().then(t), !1)
        }
        getCacheName() {
            return "Native Cache"
        }
        innerStart(e) {
            if (!this.checkOSCacheAndDeferCall(!0, (() => this.innerStart(e)))) return;
            const t = ne(),
                r = `/${$()}/`,
                n = [];
            for (const i of Object.getOwnPropertyNames(e.urlVersions)) n.push(Bt(Vt(i, r, t), e.urlVersions[i]));
            OSCache.startCaching(e.versionToken, n, e.urlMappings, e.urlMappingsNoCache)
        }
        innerSwitch(e) {
            if (this.checkOSCacheAndDeferCall(!1, (() => this.innerSwitch(e)))) try {
                OSCache.switchToVersion(e)
            } catch (e) {
                console.error(Ac, e)
            }
        }
    }
    Sc.OSCacheNotFoundMessage = "OSCache not found (is a native plugin missing?)";
    class Dc extends Nc {
        constructor(e = oo) {
            super(), this.requested = 0, this.resourceQueue = [], this.count = 0, this.total = 0, this.getMethod = e
        }
        getCacheName() {
            return "Preloader"
        }
        innerStart(e) {
            if (this.isOngoing()) return;
            if (this.count = this.requested = this.total = 0, this.resources = e.urlVersions, !this.resources) return;
            if (this.resourceQueue = Object.getOwnPropertyNames(this.resources), this.total = this.resourceQueue.length, this.resourceQueue.length <= 0) return;
            const t = `/${$()}/`;
            for (let e = 0; e < Dc.DefaultWindowSize; ++e) this.prefetchNext(t, "")
        }
        innerSwitch(e) {}
        isOngoing() {
            return this.requested > 0 || this.resourceQueue.length > 0
        }
        request(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                try {
                    yield this.getMethod({
                        url: e,
                        timeout: Dc.DefaultResourceTimeout,
                        responseType: "none"
                    })
                } catch (t) {
                    this.onError && this.onError(`Failed to load resource '${e}'.`)
                }
                this.onProgress && this.onProgress(++this.count, this.total), this.requested--, 0 === this.resourceQueue.length && 0 === this.requested ? this.onFinish && this.onFinish() : this.resourceQueue.length > 0 && this.prefetchNext(t, r)
            }))
        }
        prefetchNext(e, t) {
            const r = this.resourceQueue.pop();
            if (!r) throw new Error("No resource to fetch next.");
            const n = Bt(Vt(r, e, t), this.resources[r]);
            this.request(n, e, t), this.requested++
        }
    }
    Dc.DefaultWindowSize = 2, Dc.DefaultResourceTimeout = 2e4;
    class Rc extends Nc {
        getCacheName() {
            return "Dummy"
        }
        innerStart(e) {
            this.onFinish()
        }
        innerSwitch(e) {}
    }
    let Cc = "undefined" == typeof document ? new Rc : ir() ? new Sc : new Dc;
    var xc, Lc;
    ! function(e) {
        e[e.TransitionStart = 0] = "TransitionStart", e[e.TransitionEnd = 1] = "TransitionEnd", e[e.NavigationStart = 2] = "NavigationStart"
    }(xc || (xc = {})),
    function(e) {
        e[e.Success = 0] = "Success", e[e.Failure = 1] = "Failure"
    }(Lc || (Lc = {}));
    let Oc = 0;
    const _c = (() => {
        const e = [],
            t = Object.keys(xc).length / 2;
        for (let r = 0; r < t; r++) e.push({});
        return e
    })();
    var Mc;
    ! function(e) {
        function t(e, t, r = !1) {
            const n = "_" + Oc++;
            return _c[e][n] = {
                listenOnce: r,
                callback: t
            }, {
                type: e,
                id: n
            }
        }

        function r(e, t) {
            return delete _c[e][t]
        }
        e.listen = t, e.listenOnce = function(e, r) {
            return t(e, r, !0)
        }, e.unregister = function(e) {
            return e && r(e.type, e.id)
        }, e.dispatch = function(e) {
            let t;
            const n = _c[e.type];
            for (const i in n) {
                const s = n[i];
                s.listenOnce && r(e.type, i);
                const a = s.callback(e.args);
                void 0 !== a && (t = a)
            }
            return t
        }
    }(Mc || (Mc = {}));
    var Uc = Object.freeze({
        __proto__: null,
        get EventType() {
            return xc
        },
        get TransitionEndResult() {
            return Lc
        },
        get EventDispatcher() {
            return Mc
        }
    });

    function Fc(e) {
        return "name" in e && "registerInitializer" in e && "initialize" in e && "initializerCleanup" in e && "testConnection" in e && "close" in e && "executeReadTransaction" in e && "executeTransaction" in e && "executeUpgradeTransaction" in e
    }
    class $c extends Error {
        constructor({
            message: e,
            errorCode: t,
            category: r
        }) {
            super(e), this.errorCode = t, this.category = r
        }
    }
    const Pc = "moduleservices",
        Vc = `${Pc}/moduleinfo`,
        Bc = `${Pc}/moduleversioninfo`;
    class kc {
        constructor({
            getBasePath: e = (() => ne()),
            getMethod: t = oo,
            prefetchedVersion: r
        } = {}) {
            this.getBasePath = null != e ? e : () => ne(), this.getMethod = t, this.prefetchedVersion = r
        }
        init() {
            return a(this, void 0, void 0, (function*() {
                try {
                    this.prefetchedVersion = yield this.getLatestVersion()
                } catch (e) {
                    ti("ManifestLoader", `Failed to prefetch latest version. ${e}`)
                }
            }))
        }
        getVersionTokenParameter(e) {
            return e ? `?${e}` : ""
        }
        getPrefetchedVersion() {
            return this.prefetchedVersion
        }
        getLatestManifest(e, t) {
            return this.getManifest(e, t)
        }
        getCachedManifest(e) {
            return this.getManifest("cached", e)
        }
        getManifest(t) {
            return a(this, arguments, void 0, (function*(t, r = Qt.resolve(e.ServiceNames.UnauthenticatedHttpClient)) {
                var n;
                const i = `${Vc}${this.getVersionTokenParameter(t)}`;
                return null !== (n = yield this.getMethod({
                    url: i,
                    timeout: 1e4,
                    baseURL: this.getBasePath(),
                    httpClient: r
                })) && void 0 !== n ? n : {}
            }))
        }
        getLatestVersion() {
            return a(this, arguments, void 0, (function*(t = (new Date).getTime().toString(), r = Qt.resolve(e.ServiceNames.HttpClient)) {
                var n;
                const i = `${Bc}?${t}`;
                return null !== (n = yield this.getMethod({
                    url: i,
                    timeout: 1e4,
                    baseURL: this.getBasePath(),
                    httpClient: r
                })) && void 0 !== n ? n : {}
            }))
        }
    }

    function zc() {
        return a(this, void 0, void 0, (function*() {
            const e = yield function() {
                return a(this, void 0, void 0, (function*() {
                    try {
                        return yield cr(), Gt(window) ? window.OutSystemsNative.Prebundle : null
                    } catch (e) {
                        return null
                    }
                }))
            }();
            return e ? new Promise(((t, r) => {
                e.getManifest(t, r)
            })) : null
        }))
    }
    const Hc = "undefined" != typeof __PERFORMANCE;

    function jc(e) {
        Hc && __PERFORMANCE.start(e)
    }

    function qc(e) {
        Hc && __PERFORMANCE.end(e)
    }
    var Gc = Object.freeze({
        __proto__: null,
        start: jc,
        end: qc,
        dump: function() {
            if (Hc) return __PERFORMANCE.dump()
        },
        clear: function() {
            if (Hc) return __PERFORMANCE.clear()
        }
    });
    const Wc = "VersionsManager",
        Kc = "__";
    var Jc, Yc;
    ! function(e) {
        e[e.Generic = 0] = "Generic", e[e.Resources = 1] = "Resources", e[e.DataModel = 2] = "DataModel"
    }(Jc || (Jc = {})),
    function(e) {
        e[e.Idle = 0] = "Idle", e[e.Upgrading = 1] = "Upgrading", e[e.UpgradeSuccess = 2] = "UpgradeSuccess", e[e.UpgradeFailed = 3] = "UpgradeFailed"
    }(Yc || (Yc = {}));
    const Xc = {
            applicationInfo: new ke(Se.Persistent, "ApplicationInfo"),
            upgradeStatus: new ke(Se.Session, "UpgradeStatus", 0)
        },
        Qc = e => {
            const t = e.lastIndexOf(Kc);
            return -1 !== t ? e.substring(0, t) : e.replace(".js", "")
        },
        Zc = (e, t) => `/${t}/${e}`,
        ed = (e, t, r) => r ? r[Zc(e, t)] : void 0,
        td = (e, t, r = !1) => {
            const n = ((e, t) => {
                    let r = e.replace(/(.*)(\?[^?]+)$/, "$1").replace(/(.*)(\.[^.]+)$/, "$1");
                    return t && (r = r.replace(/(.*)(__[^_]+)$/, "$1")), r
                })(e, r),
                i = Pt(n),
                s = Pt((e => {
                    const t = e.indexOf("?"),
                        r = e.substring(0, t >= 0 ? t : void 0);
                    return r.substring(r.lastIndexOf("."))
                })(e)),
                a = Pt(Kc),
                o = new RegExp(`${i}${a}.*${s}$`),
                l = t ? Object.keys(t).find((e => o.exec(e))) : void 0;
            return l ? {
                matchedUrlVersion: l,
                relativeUrlWithoutHashAndExtension: n
            } : r ? {} : td(e, t, !0)
        },
        rd = (e, t, r = !1, n = $, i = ne) => {
            const s = n(),
                a = i(),
                o = ((e, t, r) => {
                    const {
                        matchedUrlVersion: n,
                        relativeUrlWithoutHashAndExtension: i
                    } = td(e, t);
                    if (r && n && i) {
                        const e = n.lastIndexOf(Kc);
                        return `${i}${n.substring(e)}`
                    }
                    return e
                })(e, t, r),
                l = ed(o, s, t);
            if (l) {
                const e = Bt(Zc(o, s), null != l ? l : "");
                return Vt(e, `/${s}/`, a)
            }
            return o
        };
    class nd {
        constructor({
            manifestLoader: e = new kc
        } = {}) {
            this._isAutoUpgradeEnabled = !0, this.checkedCachedInfoConsistency = !1, this.manifestLoader = e
        }
        get cachedAppInfo() {
            let e = Xc.applicationInfo.get();
            if (e && !this.checkedCachedInfoConsistency) {
                try {
                    nd.validateApplicationInfo(e)
                } catch (t) {
                    e = void 0, Xc.applicationInfo.remove()
                }
                this.checkedCachedInfoConsistency = !0
            }
            return e
        }
        set cachedAppInfo(e) {
            Xc.applicationInfo.set(e)
        }
        get currentAppInfo() {
            var e, t;
            return null !== (t = null === (e = this.fetchedApplicationInfo) || void 0 === e ? void 0 : e.manifest) && void 0 !== t ? t : this.cachedAppInfo
        }
        get upgradeStatus() {
            return Xc.upgradeStatus.get()
        }
        set upgradeStatus(e) {
            Xc.upgradeStatus.set(e)
        }
        initializeManifestLoader() {
            return this.manifestLoader.init()
        }
        initialize() {
            return a(this, void 0, void 0, (function*() {
                ti(Wc, "Initializing VersionsManager"), this.initialUpgradeStatus = this.upgradeStatus;
                if (!$()) return Promise.reject(Error("Home module not defined!"));
                this.enableBackgroundCheckForNewVersions(), this.fetchedApplicationInfo = yield this.fetchApplicationManifest()
            }))
        }
        upgradeVersion(e, r) {
            return a(this, void 0, void 0, (function*() {
                this.onVersionReady = r.onVersionReady || (() => {}), this.onUpgradeFinished = r.onUpgradeFinished || (e => {}), this.onNewVersionDetected = !this.isUpgradeDisabled && r.onNewVersionDetected || (e => Promise.resolve());
                const n = r.onAppInfoReady || (e => {}),
                    i = this.fetchedApplicationInfo.manifest,
                    s = this.fetchedApplicationInfo.isFromPrebundle;
                if (n(i), ve(((e, t, r = $, n = ne) => {
                        const i = `/${r()}/`,
                            s = n();
                        return Object.keys(e).filter((e => /\.js$/i.test(e))).reduce(((t, r) => {
                            const n = e[r],
                                a = Vt(r, i, s),
                                o = a.split("/"),
                                l = Qc(o[o.length - 1]);
                            return t.hasOwnProperty(l) || (t[l] = Bt(a, n)), t
                        }), {})
                    })(i.manifest.urlVersions, i.manifest.versionToken)), this.isNewVersion(i.manifest, s)) {
                    if (!this.isUpgradeDisabled && this.usingStaleIndex(i)) return Wr(!0), ri(Wc, "Reloading application - index.html was changed in the server", t.Visibility.Internal), !1;
                    yield this.upgrade(i, e)
                } else this.initDataModel(e);
                return !0
            }))
        }
        initDataModel(e) {
            ti(Wc, "Initializing data model"), e.then((e => this.upgradeDataModel(e).then((() => this.switchDataModel(e))).then((() => {
                this.onVersionReady()
            })))).then((() => this.setUpgradeStatus(0))).catch((e => this.handleInitError(e)))
        }
        cacheResourcesInBackground(e) {
            return ti(Wc, "Caching resources in the background..."), this.fetchApplicationManifest(!1).then((({
                manifest: t,
                isFromPrebundle: r
            }) => {
                const n = this.usingStaleIndex(t);
                if (e && e(n), Fr(n), this.isNewVersion(t.manifest, r)) return this.upgradeResources(t)
            })).catch((e => ni(Wc, `Error caching resources for new version in the background: ${e}`)))
        }
        getResourceVersionToken(e, t) {
            if (this.currentAppInfo) return ed(e, t, this.currentAppInfo.manifest.urlVersions)
        }
        isNewVersion(e, t) {
            const r = e.versionToken,
                n = this.getLastApplicationVersionToken(),
                i = r !== n;
            if (this.canDisableNativeAutoUpgrade) {
                const e = this.isAutoUpgradeEnabled,
                    s = i && (e || t);
                return ti(Wc, (() => i ? `Version check found a new version '${r}' from ${t?"prebundle":"server"} with auto-upgrade ${e?"enabled":"disabled"} and decided it is ${s?"":"not "}upgradable. Current version has token '${n}'` : `Version check found the same version '${r}'.`)), s
            }
            return i
        }
        getLastApplicationVersionToken(e = !1) {
            var t;
            if (e && (null === (t = this.fetchedApplicationInfo) || void 0 === t ? void 0 : t.manifest)) return this.fetchedApplicationInfo.manifest.manifest.versionToken;
            const r = this.cachedAppInfo;
            return r ? r.manifest.versionToken : ""
        }
        getVersionToken(e, t) {
            return this.getResourceVersionToken(e, t)
        }
        getVersionedUrl(e) {
            var t, r;
            return rd(e, null === (t = this.currentAppInfo) || void 0 === t ? void 0 : t.manifest.urlVersions, null === (r = this.currentAppInfo) || void 0 === r ? void 0 : r.manifest.cdnUrlVersioning)
        }
        static getJSONParseErrorMessage(e = "") {
            return "Error parsing manifest JSON " + (e ? `, missing or invalid field: ${e}.` : ".")
        }
        static validateApplicationInfo(e) {
            if (!e) throw Error(this.getJSONParseErrorMessage());
            if (!e.manifest) throw Error(this.getJSONParseErrorMessage("manifest"));
            const t = e.manifest;
            if (!t.versionToken || "string" != typeof t.versionToken) throw Error(this.getJSONParseErrorMessage("manifest.versionToken"));
            if (!t.urlVersions || "object" != typeof t.urlVersions) throw Error(this.getJSONParseErrorMessage("manifest.urlVersions"));
            if (!t.urlMappings || "object" != typeof t.urlMappings) throw Error(this.getJSONParseErrorMessage("manifest.urlMappings"));
            if (!t.urlMappingsNoCache || "object" != typeof t.urlMappingsNoCache) throw Error(this.getJSONParseErrorMessage("manifest.urlMappingsNoCache"));
            if (!e.data) throw Error(this.getJSONParseErrorMessage("data"));
            const r = e.data;
            if (!r.modules || "object" != typeof r.modules) throw Error(this.getJSONParseErrorMessage("data.modules"))
        }
        getLatestVersionFromServer() {
            return a(this, arguments, void 0, (function*(e = !1) {
                var t;
                const r = yield e && this.manifestLoader.getPrefetchedVersion() || this.manifestLoader.getLatestVersion();
                return this.canDisableNativeAutoUpgrade && (this._isAutoUpgradeEnabled = null !== (t = r.isAutoUpgradeEnabled) && void 0 !== t && t), r.versionToken || ii(Wc, "Error retrieving version token from module version info.", "OS-CLRT-60301"), r
            }))
        }
        checkForNewVersion() {
            this.isUpgradeDisabled || this.isUpgradingVersion || !Xc.applicationInfo.isDefined() || this.getLatestVersionFromServer(!1).then((e => {
                this.getLastApplicationVersionToken() !== e.versionToken && this.isAutoUpgradeEnabled && this.onNewVersionDetected(!1, this.isAutoUpgradeEnabled)
            }), (e => {
                ni(Wc, `Error checking for new version: ${e}`)
            }))
        }
        upgrade(e, t) {
            return a(this, void 0, void 0, (function*() {
                ti(Wc, "New application version detected, starting upgrade..."), this.setUpgradeStatus(1);
                const r = this.supportsResourceCache().then((t => t ? this.upgradeResources(e).catch((e => this.handleUpgradeError(e, 1, Promise.resolve(void 0)))) : Promise.resolve())),
                    n = t.then((e => this.upgradeDataModel(e))).catch((e => this.handleUpgradeError(e, 2, r)));
                yield Promise.all([r, n]).then((() => {
                    1 === this.upgradeStatus && this.commitNewVersion(e, t).then((e => {
                        e && this.onVersionReady()
                    }))
                })).catch((e => this.handleUpgradeError(e)))
            }))
        }
        supportsResourceCache() {
            return a(this, void 0, void 0, (function*() {
                var e;
                if (Q()) {
                    const t = !!(null === (e = V()) || void 0 === e ? void 0 : e.splashScreenName);
                    return ti(Wc, "Web app - Resource pre-caching is " + (t ? "enabled" : "disabled")), t
                } {
                    const e = yield this.serviceWorkerIsAvailable(), t = ir() || !e;
                    return ti(Wc, "Mobile app - Pre-caching resources with " + (t ? "Resource Cache" : "Service Worker")), t
                }
            }))
        }
        serviceWorkerIsAvailable() {
            return a(this, void 0, void 0, (function*() {
                try {
                    if (!("serviceWorker" in navigator)) return !1;
                    return null !== (yield navigator.serviceWorker.getRegistrations())
                } catch (e) {
                    return !1
                }
            }))
        }
        commitNewVersion(e, t) {
            return t.then((e => this.switchDataModel(e))).then((() => this.switchResourcesVersion(e.manifest.versionToken))).then((() => {
                const t = !this.cachedAppInfo;
                return this.cachedAppInfo = e, this.setUpgradeStatus(t ? 0 : 2), !0
            }))
        }
        setManifestLoader(e) {
            this.manifestLoader = e
        }
        upgradeResources(e) {
            return jc("VersionsManager upgradeResources"), pt((() => Cc.start(e.manifest)), (() => qc("VersionsManager upgradeResources")))
        }
        upgradeDataModel(t) {
            return jc("VersionsManager upgradeDataModel"), Fc(t) ? (ti(Wc, `Initializing data model on ${t.engineName} database.`), pt((() => a(this, void 0, void 0, (function*() {
                const r = yield this.getAllEntityModules(), n = Qt.resolve(e.ServiceNames.EntityService);
                for (const e of r) n.registerInitializer(e.getEntityInfos());
                yield t.initialize()
            }))), (() => qc("VersionsManager upgradeDataModel")))) : (ti(Wc, "Initializing data model on SQLite/WebSQL database."), pt((() => this.doForEachClientEntitiesModule(t, ((e, t) => t.init(e)))), (() => qc("VersionsManager upgradeDataModel"))))
        }
        getAllEntityModules() {
            const e = [],
                t = M(),
                r = t ? [t] : _();
            if (r)
                for (const t of r) ti(Wc, `Fetching entity module '${t}'.`), e.push(new Promise(((e, r) => {
                    fe([t], (t => e(t)), r)
                })));
            return Promise.all(e)
        }
        doForEachClientEntitiesModule(e, t) {
            return e.isMock ? Promise.resolve() : this.getAllEntityModules().then((r => e.executeTransaction((e => e.feed(null).andThenAll((() => r.map((e => r => t(r, e)))))))))
        }
        switchResourcesVersion(e) {
            Cc.switch(e)
        }
        switchDataModel(e) {
            return Fc(e) ? (ti(Wc, "Finishing initialization of data model on IndexedDB database."), e.initializerCleanup()) : (ti(Wc, "Finishing initialization of data model on SQLite/WebSQL database."), this.doForEachClientEntitiesModule(e, ((e, t) => t.switch(e))))
        }
        handleInitError(e) {
            const r = this.isUpgradeDisabled ? "Upgrade failed and rollback isn't possible at this time" : "Unable to load the data model";
            ii(Wc, r, "OS-CLRT-60303", e, t.Visibility.External), ic(e)
        }
        handleUpgradeError(e, r = 0, n = Promise.resolve(void 0)) {
            return Ke(e, We.OpenDatabaseException) ? (ii(Wc, "Upgrade failed - unable to open the database.", "OS-CLRT-60302", e), ic(e), Promise.resolve(void 0)) : zr() || 3 === this.initialUpgradeStatus ? 3 === this.initialUpgradeStatus ? (ic(e), Promise.resolve(void 0)) : (ni(Wc, "Upgrade failed - ignoring error due to concurrent navigation."), 3 !== this.upgradeStatus && this.setUpgradeStatus(0), Promise.resolve(void 0)) : (ii(Wc, "Upgrade failed - rolling back to previous application version.", "OS-CLRT-60302", e, t.Visibility.External), this.rollBackApplicationVersion(r, n))
        }
        get isUpgradingVersion() {
            return 1 === this.upgradeStatus
        }
        setUpgradeStatus(e, t = 0) {
            return this.upgradeStatus = e, ti(Wc, "Upgrade status changed to: " + e), 2 === e ? this.onUpgradeFinished(!0) : 3 === e ? this.onUpgradeFinished(!1, t) : void 0
        }
        rollBackApplicationVersion(e, t) {
            return this.loadCachedManifest().then((({
                manifest: r
            }) => {
                if (this.setUpgradeStatus(3, e), 1 !== e) return t.then((() => Cc.start(r.manifest)))
            })).then((() => {
                Gr(!1)
            })).catch((e => {
                ic(e)
            }))
        }
        get isUpgradeDisabled() {
            return 3 === this.upgradeStatus
        }
        get isAutoUpgradeEnabled() {
            return this._isAutoUpgradeEnabled
        }
        get canDisableNativeAutoUpgrade() {
            return Qt.resolve(e.ServiceNames.SettingsManager).readBool("CanDisableAutoUpgrade") && ir() && this.isRunningCachedIndex()
        }
        isRunningCachedIndex() {
            const e = OSManifestLoader.indexVersionToken,
                t = this.getIndexVersion(this.cachedAppInfo);
            return !!t && e === t
        }
        usingStaleIndex(e) {
            if (jr()) return !1;
            return (OSManifestLoader.indexVersionToken || this.getIndexVersion(this.cachedAppInfo)) !== this.getIndexVersion(e)
        }
        getIndexVersion(e) {
            if (!e) return "";
            const t = ed("index.html", $(), e.manifest.urlVersions);
            return t ? t.substr(1) : ""
        }
        loadCachedManifest() {
            return a(this, void 0, void 0, (function*() {
                var e;
                if (this.canDisableNativeAutoUpgrade) {
                    const t = this.innerLoadPrebundledManifest(),
                        r = this.innerLoadCachedManifest();
                    let n = null,
                        i = null,
                        s = null;
                    try {
                        n = yield t
                    } catch (t) {
                        ni(Wc, `Error loading prebundled manifest: ${null!==(e=null==t?void 0:t.message)&&void 0!==e?e:t}`)
                    }
                    try {
                        i = yield r
                    } catch (e) {
                        s = e
                    }
                    try {
                        i = yield this.innerLoadCachedManifest()
                    } catch (e) {
                        s = e
                    }
                    if (!(null == n ? void 0 : n.manifest.versionSequence)) {
                        if (i) return {
                            manifest: i,
                            isFromPrebundle: !1
                        };
                        throw s
                    }
                    return i && i.manifest.versionSequence >= n.manifest.versionSequence ? {
                        manifest: i,
                        isFromPrebundle: !1
                    } : {
                        manifest: n,
                        isFromPrebundle: !0
                    }
                }
                return {
                    manifest: yield this.innerLoadCachedManifest(),
                    isFromPrebundle: !1
                }
            }))
        }
        innerLoadCachedManifest() {
            return a(this, void 0, void 0, (function*() {
                if (yield this.ensureCachedManifest(), this.cachedAppInfo) return this.cachedAppInfo;
                {
                    const e = yield this.manifestLoader.getCachedManifest();
                    return nd.validateApplicationInfo(e), e
                }
            }))
        }
        innerLoadPrebundledManifest() {
            return zc()
        }
        ensureCachedManifest() {
            if (ir() || this.cachedAppInfo) return Promise.resolve(void 0);
            {
                this.setUpgradeStatus(0);
                const e = new $c({
                    message: "No cached manifest found. It's not possible to rollback to a previous version.",
                    errorCode: "OS-CLRT-60304"
                });
                return Promise.reject(e)
            }
        }
        getLatestManifestFromServer(e) {
            return this.manifestLoader.getLatestManifest(e).then((e => (nd.validateApplicationInfo(e), {
                manifest: e,
                isFromPrebundle: !1
            })))
        }
        fetchApplicationManifest(e = !0) {
            return jc("VersionsManager fetchApplicationManifest"), this.isUpgradeDisabled ? this.loadCachedManifest() : this.getLatestVersionFromServer(e).then((e => this.isNewVersion(e, !1) ? this.getLatestManifestFromServer(e.versionToken) : this.loadCachedManifest())).catch((() => this.loadCachedManifest())).then((e => (qc("VersionsManager fetchApplicationManifest"), e)))
        }
        enableBackgroundCheckForNewVersions() {
            let e = !1;
            Mc.listen(xc.NavigationStart, (() => e = !0)), Mc.listen(xc.TransitionEnd, (() => {
                e = !1, setTimeout((() => {
                    e || this.checkForNewVersion()
                }), 1e3)
            }))
        }
    }
    const id = new nd;

    function sd(e, t) {
        ri("Public", `'${e}' is deprecated and will be removed on the next version. Consider using '${t}' instead.`)
    }
    const ad = Tu;
    var od, ld, ud, cd, dd, hd;
    ! function(e) {
        e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
    }(od || (od = {})),
    function(e) {
        e.showFeedbackMessage = function(e, t, r = !0, n, i = !0, s) {
            return mc(e, function(e) {
                switch (e) {
                    case od.Info:
                        return 0;
                    case od.Success:
                        return 1;
                    case od.Warning:
                        return 2;
                    case od.Error:
                        return 3;
                    default:
                        throw new Error("Don't know how to convert " + e)
                }
            }(t), r, n, i, s)
        }, e.closeFeedbackMessage = function() {
            return pc()
        }
    }(ld || (ld = {}));
    class gd {
        constructor(e) {
            this._model = e
        }
        setWidgetAsInvalid(e, t) {
            var r;
            const n = null === (r = this._model) || void 0 === r ? void 0 : r.widgets.get(e);
            n.validAttr = !1, n.validationMessageAttr = t
        }
        setWidgetAsValid(e) {
            var t;
            const r = null === (t = this._model) || void 0 === t ? void 0 : t.widgets.get(e);
            r.validAttr = !0, r.validationMessageAttr = ""
        }
        isWidgetValid(e) {
            var t;
            return !0 === (null === (t = this._model) || void 0 === t ? void 0 : t.widgets.get(e)).validAttr
        }
    }! function(e) {
        e.whenReady = function() {
            return ur()
        }
    }(ud || (ud = {})),
    function(e) {
        e.isUpgradingVersion = function() {
            return id.isUpgradingVersion
        }, e.listen = function(e) {
            ti("ApplicationLifecycle", "Registering listeners for the application load process."), e && (e.onLoadComplete && wm.waitForAppReady().then((() => {
                var t;
                return null === (t = e.onLoadComplete) || void 0 === t ? void 0 : t.call(e)
            })), e.onUpgradeProgress && Cc.listen(null, null, ((t, r) => {
                var n;
                return null === (n = e.onUpgradeProgress) || void 0 === n ? void 0 : n.call(e, t, r)
            })))
        }
    }(cd || (cd = {}));
    class md {
        constructor(e) {
            this._context = e
        }
        navigateTo(e, t, r) {
            rn(e, this.getTransitionObject(t, b), this._context, !1, r)
        }
        navigateBack(e) {
            nn(this.getTransitionObject(e), this._context, !1)
        }
        navigateForward(e) {
            sn(this.getTransitionObject(e), this._context, !1)
        }
        navigatedFromHistory() {
            return ($d.activeScreen ? $d.activeScreen.modelContext : {
                viewName: "",
                navigatedFromHistory: !1,
                viewWasRestoredFromCache: !1
            }).navigatedFromHistory
        }
        registerBackNavigationHandler(e) {
            return Kr(e)
        }
        unregisterBackNavigationHandler(e) {
            Jr(e)
        }
        registerNavigationHandler(e) {
            return Yr(e)
        }
        getTransitionObject(e, t = null) {
            return w(e, t)
        }
    }! function(e) {
        e.log = function(e, r) {
            ri(e, r, t.Visibility.Client)
        }, e.error = function(e, r, n) {
            ii(e, r, void 0, n, t.Visibility.Client)
        }
    }(dd || (dd = {}));
    class pd {
        constructor(e) {
            this._model = e
        }
        static get ActiveScreenCssClass() {
            return "active-screen"
        }
        getCurrentScreenRootElement() {
            return document.querySelector("." + pd.ActiveScreenCssClass)
        }
        render() {
            return new Promise((e => {
                requestAnimationFrame((() => {
                    setTimeout(e, 1)
                }))
            }))
        }
        wasCurrentViewRestoredFromCache() {
            return !!this._model && this._model.context.viewWasRestoredFromCache
        }
        registerDeviceClassGetter(t) {
            return Yt(e.ServiceNames.DeviceHelperClassProvider, (() => t))
        }
    }
    class fd {
        static getCurrentContext() {
            const e = Vd();
            return {
                applicationKey: S() || "",
                applicationName: D() || "",
                screenKey: e ? e.screenKey : "",
                screenName: e ? e.screenName : "",
                isReady: wm.isReady
            }
        }
    }
    class vd {
        static get Instance() {
            return vd
        }
        static get isUpgradingVersion() {
            return sd("ApplicationLoad.isUpgradingVersion", "ApplicationLifecycle.isUpgradingVersion()"), cd.isUpgradingVersion()
        }
        static listen(e) {
            sd("ApplicationLoad.listen()", "ApplicationLifecycle.listen()"), cd.listen(e)
        }
    }! function(e) {
        e.showOutSystemsWatermark = function() {
            return Z()
        }
    }(hd || (hd = {}));
    var yd, bd = Object.freeze({
        __proto__: null,
        BuiltinFunctions: ad,
        get FeedbackMessageType() {
            return od
        },
        get FeedbackMessage() {
            return ld
        },
        Validation: gd,
        get Device() {
            return ud
        },
        get ApplicationLifecycle() {
            return cd
        },
        Navigation: md,
        get Logger() {
            return dd
        },
        View: pd,
        ApplicationContext: fd,
        ApplicationLoad: vd,
        get Branding() {
            return hd
        }
    });
    class Td {
        constructor(e, t) {
            this._model = e, this._navigationContext = t
        }
        get BuiltinFunctions() {
            return Tu
        }
        get Validation() {
            return this._validation || (this._validation = new gd(this._model)), this._validation
        }
        get FeedbackMessage() {
            return ld
        }
        get Device() {
            return ud
        }
        get ApplicationLifecycle() {
            return cd
        }
        get ApplicationContext() {
            return fd
        }
        get ApplicationLoad() {
            return vd
        }
        get Navigation() {
            return this._navigation || (this._navigation = new md(this._navigationContext)), this._navigation
        }
        get Logger() {
            return dd
        }
        get View() {
            return this._view || (this._view = new pd(this._model)), this._view
        }
        get Branding() {
            return hd
        }
    }! function(e) {
        e[e.Block = 0] = "Block", e[e.IteratorItem = 1] = "IteratorItem", e[e.None = 2] = "None"
    }(yd || (yd = {}));
    const wd = "-";
    class Ed {
        constructor(e, t = "", r = yd.None, n = null) {
            switch (this._ownerService = e, r) {
                case yd.Block:
                    this._namespace = "b";
                    break;
                case yd.IteratorItem:
                    this._namespace = "l";
                    break;
                default:
                    this._namespace = ""
            }
            if (this._namespace += t, e) {
                const t = n ? n + wd : "";
                this._namespace = e.namespace + this._namespace + wd + t
            } else this._namespace && (this._namespace = this._namespace + wd)
        }
        getId(e) {
            return e ? this.namespace + e : null
        }
        static nameFromId(e) {
            return e.substring(e.lastIndexOf(wd) + 1)
        }
        get namespace() {
            return this._namespace
        }
        get ownerService() {
            return this._ownerService
        }
    }
    var Id = Object.freeze({
        __proto__: null,
        get NamespaceKind() {
            return yd
        },
        WidgetIdService: Ed
    });
    class Ad {
        constructor(e, t) {
            this.model = e, this.messagesProvider = t, this.updatingValidations = !1, this.disposed = !1, e.hasValidationWidgets && (this.widgets = {}, this.widgetChildren = {}, this.oldModelWidgets = this.model.widgets, this.model.subscribeWrites((() => {
                this.updatingValidations || this.oldModelWidgets === this.model.widgets || this.recalculateAggregatorsState(""), this.oldModelWidgets = this.model.widgets
            }), !0))
        }
        getWidgetRecord(e) {
            return this.model.widgets.get(e)
        }
        updateWidgetValidationsProperties(e, t, r) {
            const n = this.updatingValidations;
            this.updatingValidations = !0;
            try {
                if (e.isWebBlockInstance) {
                    e.valid = t
                } else {
                    const n = this.getWidgetRecord(e.getId());
                    n.validAttr !== t && (n.validAttr = t), void 0 !== r && n.validationMessageAttr !== r && (n.validationMessageAttr = r)
                }
            } finally {
                this.updatingValidations = n
            }
        }
        validateWidget(e) {
            let t = !0;
            for (const r in this.widgetChildren[e]) !0 !== this.validateWidget(r) && (t = !1);
            const r = this.widgets[e];
            if (r) {
                let e;
                r.isValidationAggregator ? e = new Nd(t) : r.validate && (e = r.validate()), e && (this.updateWidgetValidationsProperties(r, e.valid, e.validationMessage), e.valid || (t = !1))
            }
            return t
        }
        recalculateAggregatorsState(e) {
            let t = !0;
            for (const r in this.widgetChildren[e]) this.recalculateAggregatorsState(r) || (t = !1);
            const r = this.widgets[e];
            if (r) {
                if (r.isWebBlockInstance) return r.valid;
                if (!r.isValidationAggregator) return this.getWidgetRecord(e).validAttr;
                this.updateWidgetValidationsProperties(r, t)
            }
            return t
        }
        register(e) {
            if (this.model.hasValidationWidgets && e) {
                const t = e.getId();
                if (t) {
                    this.widgets[t] = e;
                    const r = e.validationParentId || "";
                    let n = this.widgetChildren[r];
                    if (n || (n = {}, this.widgetChildren[r] = n), n[t] = 1, !e.isWebBlockInstance) {
                        const r = e,
                            n = this.model.widgets.create(t);
                        n.generationNode = r.generationNode, this.model.widgets.add(n)
                    }
                }
            }
        }
        unregister(e) {
            if (!e || this.disposed || !this.model.hasValidationWidgets) return;
            const t = this.widgets[e],
                r = (t ? t.validationParentId : null) || "";
            delete this.widgets[e], delete this.widgetChildren[r][e], t && this.model.widgets.remove(e)
        }
        isRegistered(e) {
            return !!this.widgets && void 0 !== this.widgets[e]
        }
        validate(e) {
            if (!this.model.hasValidationWidgets) return !0;
            let t = this.validateWidget(e || "");
            return e && (t = this.recalculateAggregatorsState("")), this.model.flush(), t
        }
        getMandatoryValueMessage() {
            return this.messagesProvider.getMandatoryValueMessage()
        }
        getInvalidValueMessage(e) {
            return this.messagesProvider.getInvalidValueMessage(e)
        }
        getNameById(e) {
            return Ed.nameFromId(e)
        }
        getWidgetChildren() {
            return this.widgetChildren
        }
        dispose() {
            this.disposed = !0
        }
    }
    class Nd {
        constructor(e, t) {
            this.valid = e, this.validationMessage = t
        }
        get valid() {
            return this._valid
        }
        set valid(e) {
            this._valid = null == e || e
        }
        get validationMessage() {
            return this._validationMessage
        }
        set validationMessage(e) {
            this._validationMessage = e || ""
        }
    }
    var Sd = Object.freeze({
        __proto__: null,
        ValidationService: Ad,
        ValidationResult: Nd
    });
    const Dd = () => {};
    class Rd {
        constructor(e, t) {
            this.controllerClass = e, this.messagesProvider = t
        }
        create(e, t) {
            return new this.controllerClass(e, this.messagesProvider, t)
        }
        static executeWithNavigationCallbacks(e, t, r) {
            Lr(t);
            return pt(e, (() => {
                t.dispose(r), _r()
            }))
        }
        initialize(e, t, r, n, i, s) {
            return a(this, void 0, void 0, (function*() {
                const a = $d.activeScreen,
                    o = a ? a.callContext() : r.callContext();
                try {
                    Dn() && (yield new Promise((e => {
                        new Td(null, null).ApplicationLifecycle.listen({
                            onLoadComplete: e
                        })
                    })), yield Mn()), this.controllerClass.checkPermissions()
                } catch (e) {
                    const t = {
                        permissionsOk: !1
                    };
                    return Rd.executeWithNavigationCallbacks((() => r.handleError(e, o)), n, o).then((() => t), (e => t))
                }
                const l = t.create(e),
                    u = this.create(l, new Ed(null));
                u.setAsActiveScreen();
                const c = Rd.executeWithNavigationCallbacks((() => u.fireInitialize({
                        rootSpan: s
                    })), i, u.callContext()),
                    d = {
                        permissionsOk: !0,
                        controller: u,
                        model: l
                    };
                return c.then((() => d), (e => Ke(e, We.UnhandledOrIgnoredErrorInEventException) && e.handleErrorResult === Xu ? {
                    permissionsOk: !0
                } : d))
            }))
        }
        get activeScreenController() {
            return $d.activeScreen
        }
    }
    class Cd {
        constructor() {
            this._iterationContext = new xd, this._id = ++Cd.currentId
        }
        get id() {
            return this._id
        }
        get viewName() {
            return this._viewName
        }
        get timeout() {
            return this._timeout
        }
        get iterationContext() {
            return this._iterationContext
        }
        set iterationContext(e) {
            this._iterationContext = e
        }
        withViewName(e) {
            return this._viewName !== e ? this.innerClone({
                _viewName: {
                    value: e
                }
            }) : this
        }
        withTimeout(e) {
            return this._timeout !== e ? this.innerClone({
                _timeout: {
                    value: e
                }
            }) : this
        }
        clone() {
            const e = this.innerClone();
            return e._id = ++Cd.currentId, e
        }
        innerClone(e) {
            const t = Object.create(this, null != e ? e : {});
            return t.iterationContext = this.iterationContext.clone(), t
        }
        get isOutOfContext() {
            return !!$d.activeScreen && this.viewName !== $d.activeScreen.viewName
        }
    }
    Cd.currentId = 0;
    class xd {
        getCurrentRowNumber(e) {
            const t = this.getIterator(e);
            return t ? t.currentRowNumber : 0
        }
        setCurrentRowNumber(e, t) {
            this.getIteratorForSet(e).currentRowNumber = t
        }
        isBeingIterated(e) {
            const t = this.getIterator(e);
            return !!t && t.isBeingIterated
        }
        registerIterationStart(e) {
            const t = this.getIteratorForSet(e);
            if (t.isBeingIterated) throw new Error("List is already being iterated in this context");
            t.currentRowNumber = e.length - 1, t.isBeingIterated = !0
        }
        registerIterationEnd(e) {
            const t = this.getIteratorForSet(e);
            if (!t.isBeingIterated) throw new Error("List was redefined while being iterated");
            t.isBeingIterated = !1
        }
        getIterator(e) {
            return this.iterators ? this.iterators.get(e.modelId) : null
        }
        getIteratorForSet(e) {
            this.iterators || (this.iterators = new Map);
            let t = this.getIterator(e);
            return t || (t = {
                currentRowNumber: 0,
                isBeingIterated: !1
            }, this.iterators.set(e.modelId, t)), t
        }
        clone() {
            const e = new xd;
            return this.iterators && (e.iterators = function(e, t) {
                const r = new Map;
                return e.forEach(((e, n) => {
                    const i = t(e);
                    r.set(n, i)
                })), r
            }(this.iterators, (e => Object.create(e)))), e
        }
    }
    const Ld = new rl,
        Od = new sl("Data", "dataOut"),
        _d = new sl("List", "listOut", [{
            name: "Count",
            attrName: "countOut",
            mandatory: !0,
            dataType: wo.LongInteger,
            defaultValue: () => to.defaultValue
        }]),
        Md = "BaseController";
    class Ud {
        constructor(t) {
            if (this.isExecutingJSNode = !1, this.localeChangeHandler = t => {
                    var r;
                    const n = Qt.resolve(e.ServiceNames.TranslationsService),
                        i = Qt.resolve(e.ServiceNames.LocaleService);
                    if (n) {
                        (null !== (r = t.localeFamily) && void 0 !== r ? r : [t.localeCode]).forEach((e => {
                            var t, r;
                            this.translationResources[e] ? (ti(Md, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), i.setCurrentLocaleRTL(null !== (r = this.translationResources[e].isRTL) && void 0 !== r && r)) : ti(Md, `No translations found for ${e} locale.`)
                        }))
                    }
                }, this.translationResources = null != t ? t : this.translationResources, this.translationResources) {
                const t = Qt.resolve(e.ServiceNames.LocaleService);
                if (t) {
                    const e = t.getCurrentLocale(),
                        r = t.getCurrentLocaleFamily();
                    this.localeChangeHandler({
                        localeCode: e,
                        localeFamily: r
                    }), ti(Md, "Subscribing handler for locale service."), t.subscribe(this.localeChangeHandler)
                }
            }
        }
        get publicApiHelper() {
            return this._publicApiHelper || (this._publicApiHelper = this.createPublicApiHelper()), this._publicApiHelper
        }
        getDefaultTimeout() {
            throw new Error("Controllers must implement getDefaultTimeout")
        }
        createPublicApiHelper() {
            return new Td(null, this.callContext())
        }
        get default() {
            return this
        }
        get controller() {
            return this
        }
        callContext(e = new Cd) {
            return e
        }
        safeExecuteJSNode(e, t, r, n, i, s, a, o = !1) {
            const l = e => {
                    const n = `Check the JavaScript node '${t}' of the action '${r}'.`;
                    throw ((e = e || new Error(n)) instanceof We.NumberOverflowException || e instanceof We.InvalidJavascriptType) && (e.message = e.message + " " + n), e
                },
                u = this.isExecutingJSNode,
                c = (n ? [n] : []).concat(s, a, this.publicApiHelper);
            e = e.bind(null, ...c);
            try {
                if (this.isExecutingJSNode = !0, o) return e().then((() => i(n))).catch(l);
                try {
                    return e(), i(n)
                } catch (e) {
                    l(e)
                }
            } finally {
                this.isExecutingJSNode = u
            }
        }
        safeExecuteAsyncJSNode(e, t, r, n, i, s, a) {
            return this.safeExecuteJSNode(e, t, r, n, i, s, a, !0)
        }
        executeActionInsideJSNode(e, r, n = Dd, i = Dd, s = "") {
            const a = e => {
                if (!sc(e, r)) throw e
            };
            try {
                if (s) try {
                    this.ensureControllerAlive(s)
                } catch (e) {
                    throw ii("Controller", `Invalid call of action '${s}'`, "OS-CLRT-60801", e, t.Visibility.External), e
                }
                const o = e(r);
                return o instanceof Promise ? o.then((e => (i(), n(e)))).catch((e => {
                    i(), a(e)
                })) : n(o)
            } catch (e) {
                a(e)
            } finally {
                this.isExecutingJSNode || i()
            }
        }
        getInitialPayloadObject(e, t) {
            return {
                versionInfo: {
                    moduleVersion: id.getLastApplicationVersionToken(!0),
                    apiVersion: t
                },
                viewName: e.viewName ? e.viewName : "*"
            }
        }
        getEffectiveTimeoutForServerCall(e) {
            const t = K();
            return (null != e ? e : 0) || (null != t ? t : 0) || this.getDefaultTimeout()
        }
        callServerAction(e, t, r, n, i, s, a, o = !1) {
            return this.innerCallServerAction(e, t, r, n, i, s, a, o)
        }
        innerCallServerAction(e, t, r, n, i, s, a, o = !1) {
            const l = this.getEffectiveTimeoutForServerCall(i.timeout),
                u = this.getInitialPayloadObject(i, r);
            u.inputParameters = n;
            const c = "The timeout of " + l + "s was reached while executing this server action.";
            return go({
                url: t,
                payload: u,
                timeout: l,
                timeoutHandler: () => Promise.resolve((() => {
                    throw ni(e, c), new We.Exception(c, e)
                })()),
                responseHandler: Ud.createPostResponseHandler(a),
                headers: s,
                useLocaleInfo: o,
                actionOrAggregateName: e
            }).then((e => e || {})).catch((t => {
                throw t.extraStack = e, t
            }))
        }
        static checkPermissions() {
            throw new Error("Screen Controllers must implement checkPermissions")
        }
        static handlePostResponse(t) {
            const r = Qt.resolve(e.ServiceNames.ClientVariablesService);
            r && r.checkSessionExpires();
            const n = Qt.resolve(e.ServiceNames.SettingsManager);
            if (n && void 0 !== t.clientSettingsHash && null !== t.clientSettingsHash) {
                n.update(t.clientSettingsHash), oi(n.readLogLevel());
                const e = n.readNumber("LoggerSchedulerTimeInterval");
                e > 0 && li(e)
            }
        }
        static createPostResponseHandler(e) {
            return ({
                data: t,
                responseHeaders: r
            }) => {
                Ud.handlePostResponse(t), e && e(t, r)
            }
        }
        executeClientAggregate(e, t) {
            return dt((() => e())).then((e => {
                const r = t();
                r.listOut = e.list, r.countOut = e.count
            }))
        }
        ensureControllerAlive(e) {}
        static getJSONDeserializeOutputType(e) {
            return Od.getType(e)
        }
        static getAggregateOutputType(e) {
            return _d.getType(e)
        }
        static registerVariableGroupType(e, t) {
            Ld.registerTypeDefinition(e, t)
        }
        static getVariableGroupType(e) {
            return Ld.getType(e)
        }
    }
    const Fd = "BaseViewController";
    class $d extends Ud {
        fireEvent(e) {
            return dt((() => {
                if (e) return e.call(this, this.callContext())
            })).then((e => {
                if (ac(e)) throw We.UnhandledOrIgnoredErrorInEventException.create(e)
            }))
        }
        fireEventAndForget(e) {
            this.fireEvent(e).catch(We.UnhandledOrIgnoredErrorInEventException.ignore)
        }
        constructor(t, r, n, i) {
            super(i), this.model = t, this.messagesProvider = r, this._idService = n, this.instanceId = $d.globalInstanceId++, this.isDisposed = !1, this.shouldSendClientVarsToDataSources = !1, this.fetchReadySources = e => {
                const t = [];
                (void 0 === e ? this.dataFetchActionNames : this.dataFetchDependentsGraph[e]).forEach((r => {
                    e && this.dataFetchDependencies[r]--, 0 === this.dataFetchDependencies[r] && t.push(r)
                })), t.forEach((e => {
                    this.remainingFetchesCount++, this.dataFetchDependencies[e] = -1, this.executeDataFetchAction(e).then((() => this.fetchReadySources(e)))
                }))
            }, this.clientVariablesHandler = e => {
                this.model.clientVariablesGeneration++, this.model.scheduleFlush()
            }, this.localeDependencyHandler = e => {
                this.model.currentLocale = e.localeCode, this.model.scheduleFlush()
            };
            const s = Qt.resolve(e.ServiceNames.LocaleService);
            this.linearRequest = new Ic, s && this.translationResources && (this.model.currentLocale = s.getCurrentLocale()), this.validationServiceInstance = new Ad(t, r)
        }
        createPublicApiHelper() {
            return new Td(this.model, this.callContext())
        }
        static get activeScreen() {
            return $d.activeScreenInstance
        }
        setAsActiveScreen() {
            $d.activeScreenInstance = this
        }
        callContext(e) {
            return super.callContext(e).withViewName(this.viewName)
        }
        get validationService() {
            return this.validationServiceInstance
        }
        get viewName() {
            var e;
            return null === (e = this.modelContext) || void 0 === e ? void 0 : e.viewName
        }
        fetchData() {
            let e = !1;
            ti(Fd, "Using Improved data fetching with dependencies"), e = this.innerFetchDataWithDependencies(), e && this.model.flush()
        }
        executeDataFetchAction(e) {
            return ti(Fd, "Fetching " + e), dt((() => this[e]())).then((() => {
                this.remainingFetchesCount--, clearTimeout(this.flushTimeoutHandle), ti(Fd, "Fetched " + e), this.remainingFetchesCount > 0 ? this.flushTimeoutHandle = window.setTimeout((() => this.model.flush()), 50) : this.model.flush()
            }), (e => {
                this.remainingFetchesCount--, this.model.flush(), this.handleError(e)
            }))
        }
        innerFetchDataWithDependencies() {
            return !(!this.dataFetchActionNames || 0 === this.dataFetchActionNames.length) && (this.dataFetchDependencies = Object.assign({}, this.dataFetchDependenciesOriginal), this.flushTimeoutHandle = 0, this.remainingFetchesCount = 0, this.fetchReadySources(), !0)
        }
        get idService() {
            return this._idService
        }
        fireInitialize() {
            return a(this, arguments, void 0, (function*({
                rootSpan: r,
                startActiveSpan: n = ui,
                setAttributeToSpan: i = this.setAttributesToSpan
            } = {}) {
                const s = Qt.resolve(e.ServiceNames.ClientVariablesService);
                s && s.subscribe(this.clientVariablesHandler);
                const o = Qt.resolve(e.ServiceNames.LocaleService);
                if (o && o.subscribe(this.localeDependencyHandler), !r) return yield this.fireEvent(this.onInitializeEventHandler), void this.fetchData();
                const l = r.getContext().attributes;
                yield n(`${r.getSpanInformation().name}__initialize`, (e => a(this, void 0, void 0, (function*() {
                    try {
                        i(e, l), yield this.fireEvent(this.onInitializeEventHandler)
                    } finally {
                        null == e || e.end()
                    }
                    this.fetchData()
                }))), t.Visibility.Internal, r)
            }))
        }
        setAttributesToSpan(e, t) {
            var r, n, i;
            e && t && (e.setAttribute("code.function", t["code.function"]), e.setAttribute("outsystems.function.key", null !== (r = t["outsystems.function.key"]) && void 0 !== r ? r : ""), e.setAttribute("outsystems.function.owner.name", null !== (n = t["outsystems.function.owner.name"]) && void 0 !== n ? n : ""), e.setAttribute("outsystems.function.owner.key", null !== (i = t["outsystems.function.owner.key"]) && void 0 !== i ? i : ""), e.setAttribute("outsystems.function.type", t["outsystems.function.type"]), t.screen && e.setAttribute("outsystems.runtime.screen", t["outsystems.runtime.screen"]))
        }
        fireAfterViewReady() {
            this.fireEvent(this.onReadyEventHandler).then((() => this.fireEvent(this.onRenderEventHandler))).catch(We.UnhandledOrIgnoredErrorInEventException.ignore)
        }
        fireAfterInputsChanged() {
            this.fireEventAndForget(this.onParametersChangedEventHandler)
        }
        fireAfterViewRender(e = !1) {
            if (this.onRenderEventHandler) return this.fireEvent((r => {
                if (!e) return this.onRenderEventHandler(r);
                ii("View", `Render loop avoided. This is likely due to the model of the screen/block '${this.viewName}' being changed inside its 'On Render' client action. Avoid changes to the model inside 'On Render' client actions.`, "OS-CLRT-60800", void 0, t.Visibility.External)
            }))
        }
        fireAfterViewDestroy({
            clientVariablesService: t = Qt.resolve(e.ServiceNames.ClientVariablesService),
            localeService: r = Qt.resolve(e.ServiceNames.LocaleService)
        } = {}) {
            t && t.unsubscribe(this.clientVariablesHandler), r && r.unsubscribe(this.localeDependencyHandler), this.fireEventAndForget(this.onDestroyEventHandler)
        }
        registerClientAction(e, t) {
            this[e] = t
        }
        innerCallAggregate(e, t, r, n, i, s, a, o, l, u, c, d, h = !1) {
            const g = this.getEffectiveTimeoutForServerCall(o);
            return ti(Fd, `Calling ${e} aggregate with start index endpoint`), this.callServerDataSource(e, t, r, s, a, (e => {
                e.inputParameters = {
                    StartIndex: i,
                    MaxRecords: n
                }
            }), g, l, u, c, d, h)
        }
        callAggregateWithStartIndexAndClientVars(e, t, r, n, i, s, a, o, l, u, c, d, h = !1) {
            return this.innerCallAggregate(e, t, r, n, i, s, a, o, l, u, c, d, h)
        }
        callAggregateWithStartIndex(e, t, r, n, i, s, a, o, l, u, c) {
            return this.innerCallAggregate(e, t, r, n, i, s, a, o, l, u, c)
        }
        callAggregate(e, t, r, n, i, s, a, o, l, u) {
            return this.innerCallAggregate(e, t, r, n, 0, i, s, a, o, l, u)
        }
        callDataAction(e, t, r, n, i, s, a, o, l, u, c = !1) {
            return this.innerCallDataAction(e, t, r, n, i, s, a, o, l, u, c)
        }
        innerCallDataAction(e, t, r, n, i, s, a, o, l, u, c = !1) {
            const d = this.getEffectiveTimeoutForServerCall(s);
            return this.callServerDataSource(e, t, r, n, i, void 0, d, a, o, l, u, c)
        }
        callServerDataSource(e, t, r, n, i, s = void 0, a = 0, o, l, u, c, d = !1) {
            const h = this.getInitialPayloadObject(this.callContext(), r);
            ti(Fd, `Calling ${e} data source with optimized on payload`), h.screenData = {
                variables: Cu.to(this.model.variables, u, !0)
            }, s && s(h), this.shouldSendClientVarsToDataSources && c && (h.clientVariables = c.serialize()), n(0);
            return lt(((r, s) => this.linearRequest.create(e).post({
                url: t,
                payload: h,
                timeout: a,
                timeoutHandler: () => Promise.resolve((() => {
                    const t = `The timeout of ${a}s was reached while fetching this screen data.`;
                    throw ni(e, t), new We.Exception(t)
                })()),
                responseHandler: Ud.createPostResponseHandler(l),
                headers: o,
                useLocaleInfo: d
            }).then((e => this.handleServerDataSourceResponse({
                res: e,
                reject: s,
                resolve: r,
                setDataFromJS: i,
                setDataFetchStatus: n
            }))).catch((e => {
                const t = Ke(e, We.ViewHasChangedException) || Ke(e, We.AbortedRequestException);
                if (!this.isDisposed) return t || n(2), s(e)
            }))))
        }
        handleServerDataSourceResponse({
            res: e,
            reject: t,
            resolve: r,
            setDataFromJS: n,
            setDataFetchStatus: i
        }) {
            if (!this.isDisposed) {
                if (e.completed) {
                    return n(e.data), i(1), r()
                }
                return t(new We.AbortedRequestException)
            }
        }
        handleError(e) {
            throw new Error("@abstract")
        }
        safeExecuteAsyncJSNode(e, t, r, n, i, s, a) {
            return this.model.flush(), super.safeExecuteAsyncJSNode(e, t, r, n, i, s, a)
        }
        executeActionInsideJSNode(e, t, r = Dd, n = Dd, i = "UNKNOWN") {
            return super.executeActionInsideJSNode(e, t, r, (() => {
                n(), this.model.flush()
            }), i)
        }
        dispose() {
            this.validationService.dispose(), this.isDisposed = !0
        }
        ensureControllerAlive(e) {
            if (this.isDisposed) {
                const t = new We.ControllerDisposedException(`Invalid call of the '${e}' client action of the '${this.viewName}' since the latter is not currently active. This is likely due to a platform's client action being used as an event handler or in a setTimeout function. Consider removing this call by using the 'On Destroy' event of the screen/block or moving your logic to a global client action.`);
                throw ni("Controller", t.message), t
            }
        }
        safeExecuteClientAction(e, t, ...r) {
            return gt((() => e.apply(this, r.concat(this.callContext(t)))), (e => this.handleError(e)), (() => this.model.flush()))
        }
        get modelContext() {
            return this.model.context
        }
        executeScreenClientAggregate(e, t, r) {
            return dt((() => (t().dataFetchStatusAttr = 0, e()))).then((e => {
                if (!this.isDisposed) return t().bulkSet(e.list, 1, e.count), dt(r)
            }), (e => {
                if (!this.isDisposed) throw t().dataFetchStatusAttr = 2, e
            }))
        }
        static downloadBinary(e, t) {
            const r = e.toBlob() || new Blob([]),
                n = document.createElement("a");
            n.style.display = "none", document.body.appendChild(n), r.type && (n.type = r.type);
            const i = window.URL.createObjectURL(r);
            n.href = i, n.download = t, n.click(), setTimeout((() => window.URL.revokeObjectURL(i)), 500), n.remove()
        }
    }
    $d.globalInstanceId = 0;
    var Pd = Object.freeze({
        __proto__: null,
        ControllerFactory: Rd,
        CallContext: Cd,
        IterationContext: xd,
        BaseController: Ud,
        BaseModuleController: class extends Ud {
            constructor() {
                super(...arguments), this.fireApplicationResumeSingletonCallback = this.fireApplicationResume.bind(this)
            }
            registerEventHandler(e, t, r) {
                r((() => new Promise(((t, r) => {
                    fe([e], t, r)
                })).then((() => {
                    const e = this[t],
                        n = () => Promise.resolve().then((() => e.call(this)));
                    return r(n), n()
                }))))
            }
            registerOnApplicationReadyHandler(e, t) {
                this.registerEventHandler(e, t, (e => this.onApplicationReadyHandler = e))
            }
            registerOnApplicationResumeHandler(e, t) {
                this.registerEventHandler(e, t, (e => this.onApplicationResumeHandler = e))
            }
            fireApplicationReady() {
                return this.onApplicationReadyHandler ? this.onApplicationReadyHandler().then((() => this.setupOnApplicationResumeListener())) : (this.setupOnApplicationResumeListener(), Promise.resolve(void 0))
            }
            setupOnApplicationResumeListener() {
                this.onApplicationResumeHandler && dr("resume", this.fireApplicationResumeSingletonCallback)
            }
            fireApplicationResume() {
                return this.onApplicationResumeHandler ? this.onApplicationResumeHandler() : Promise.resolve(void 0)
            }
        },
        BaseViewController: $d
    });
    const Vd = () => {
            const e = $d.activeScreen;
            if (e) {
                const t = L(P());
                if (t) return B(t, e.viewName)
            }
            return null
        },
        Bd = () => {
            var e;
            const t = Vd();
            return null !== (e = null == t ? void 0 : t.screenName.split(".").pop()) && void 0 !== e ? e : ""
        },
        kd = (...e) => a(void 0, [...e], void 0, (function*({
            application: e = wm,
            initType: t = 0,
            executeRequiredScripts: r
        } = {}) {
            if (yield ei({
                    version: id.getLastApplicationVersionToken(),
                    getCurrentScreenName: Bd
                }), 1 === t) return !0;
            const n = e.initializeDatabase();
            let i = !1,
                s = () => {
                    i = !0
                };
            const a = new Promise((e => {
                    if (i) e();
                    else {
                        const t = s;
                        s = () => {
                            t(), e()
                        }
                    }
                })),
                o = a.then((() => e.triggerApplicationReadyEvent())),
                l = {
                    onVersionReady: () => {
                        n.then((t => e.onDatabaseReady(t))).then((() => a)).then((() => o)).then((() => e.onApplicationReady()))
                    },
                    onUpgradeFinished: (t, r) => e.onUpgradeFinished(t, r),
                    onNewVersionDetected: (t, r) => e.onNewVersionDetected(t, r),
                    onAppInfoReady: t => e.onAppInfoReady(t)
                };
            return yield e.tryUpgrade(n, l, s, r)
        }));

    function zd() {
        return a(this, void 0, void 0, (function*() {
            try {
                return yield cr(), Gt(window) ? window.OutSystemsNative.Http : null
            } catch (e) {
                return null
            }
        }))
    }

    function Hd() {
        return a(this, void 0, void 0, (function*() {
            const t = yield zd(), r = Qt.resolve(e.ServiceNames.SettingsManager);
            return !(null == r ? void 0 : r.readBool("ForceXhrCommunication")) && !!t
        }))
    }

    function jd() {
        var t;
        if (!Qt.resolve(e.ServiceNames.SettingsManager).readBool("EnableOpenTelemetryTraces")) return;
        const r = Qt.resolve(e.ServiceNames.InstrumentationFactory);
        if (!r) return;
        const n = r.getActiveSpan();
        if (!n) return;
        const i = n.getContext();
        if (!i) return;
        const s = Object.keys(null !== (t = i.attributes) && void 0 !== t ? t : {}).reduce(((e, t) => {
            var r;
            return "function" == typeof(null === (r = i.attributes[t]) || void 0 === r ? void 0 : r.toString) && (e[t] = i.attributes[t].toString()), e
        }), {});
        return {
            spanId: i.spanId,
            traceId: i.traceId,
            attributes: s,
            sampled: i.sampled
        }
    }
    const qd = ro + "locale";

    function Gd() {
        const t = Xt(e.ServiceNames.LocaleService);
        if (t) return t.getCurrentLocale()
    }

    function Wd(t) {
        const r = Xt(e.ServiceNames.LocaleService);
        r && r.setCurrentLocale(t)
    }
    const Kd = {
            isHealthy: !0,
            healthCheckIntervalInSeconds: Number.POSITIVE_INFINITY,
            healthCheckEndpoint: "/moduleservices/ping",
            healingTimeoutDelayInSeconds: 30
        },
        Jd = (e, t, r) => {
            const n = t ? new i.PathFilter({
                acceptionRules: [t, /^[^/]/],
                rejectionRules: [/^[a-z0-9]+:\/\//i]
            }) : void 0;
            return new i.HttpClientWithHealthCheck(e, Object.assign(Object.assign({}, Kd), {
                healthCheckNeededPathFilter: n,
                logger: r
            }))
        };
    class Yd {
        static getHttpClientLogger(e = vi) {
            return {
                setActiveSpanAsNonAggregable: () => e.setActiveSpanAsNonAggregable(),
                debug: ({
                    category: t,
                    message: r
                }) => e.debug(null != t ? t : "", null != r ? r : ""),
                error: ({
                    category: r,
                    message: n,
                    errorCode: s,
                    error: a
                }) => e.error(null != r ? r : "", null != n ? n : "", null != s ? s : i.ErrorCodes.Communication_Default, a, t.Visibility.Internal),
                clientError: ({
                    category: t,
                    clientMessage: r,
                    internalMessage: n,
                    errorCode: s,
                    error: a
                }) => e.clientError({
                    category: null != t ? t : "",
                    clientMessage: null != r ? r : "",
                    internalMessage: null != n ? n : "",
                    errorCode: null != s ? s : i.ErrorCodes.Communication_Default,
                    errorObj: a
                }),
                startActiveClientSpan: (r, n) => e.startActiveSpan(r, n, t.Visibility.Internal, void 0, t.SpanKind.Client)
            }
        }
        static build() {
            return a(this, arguments, void 0, (function*({
                baseUrl: e,
                headers: t,
                localeHeader: n,
                getLocale: s,
                setLocale: a,
                logger: o = this.getHttpClientLogger(),
                usesNativeHttpPlugin: l = Hd,
                getNativeHttpPluginInstance: u = zd,
                loadTrace: c = jd,
                getToken: d,
                withHealthCheck: h = !1,
                healthCheckPathScope: g
            } = {}) {
                let m;
                if (!r.FeaturesManager.isEnabled(r.FeatureKeys.WebHttpClientForNative) && (yield l())) {
                    const r = yield u();
                    if (!r) {
                        const e = new Error("Unable to get native http plugin instance.");
                        throw null == o || o.error({
                            category: "HttpClientFactory",
                            message: e.message,
                            error: e
                        }), e
                    }
                    m = new i.NativeHttpClient({
                        baseUrl: e,
                        headers: t,
                        localeHeader: n,
                        getLocale: s,
                        setLocale: a,
                        logger: o,
                        httpClientInstance: r,
                        loadTrace: c,
                        getToken: d
                    })
                } else m = new i.HttpClient({
                    baseUrl: e,
                    headers: t,
                    localeHeader: n,
                    getLocale: s,
                    setLocale: a,
                    logger: o,
                    loadTrace: c,
                    getToken: d
                });
                return h ? Jd(m, g, o) : m
            }))
        }
        static buildWithDebugger({
            alternateHttpClient: e,
            appUrl: t,
            localeHeader: r,
            getLocale: n,
            setLocale: s,
            logger: a = {
                setActiveSpanAsNonAggregable: () => ci(),
                debug: ({
                    category: e,
                    message: t
                }) => ti(null != e ? e : "", null != t ? t : ""),
                error: ({
                    category: e,
                    message: t,
                    error: r
                }) => ii(null != e ? e : "", null != t ? t : "", "OS-CLRT-00000", r)
            },
            getToken: o,
            withHealthCheck: l = !1,
            healthCheckPathScope: u
        }) {
            if (t) {
                const c = new i.DebuggerHttpClient({
                    appUrl: t,
                    localeHeader: r,
                    getLocale: n,
                    setLocale: s,
                    logger: a,
                    alternateHttpClientInstance: e,
                    getToken: o
                });
                return l ? Jd(c, u, a) : c
            }
            return e
        }
        static buildLoggerHttpClient({
            baseUrl: e,
            headers: t,
            localeHeader: r,
            getLocale: n,
            setLocale: s,
            loadTrace: a = jd,
            getToken: o
        } = {}) {
            return new i.LoggerHttpClient({
                baseUrl: e,
                headers: t,
                localeHeader: r,
                getLocale: n,
                setLocale: s,
                loadTrace: a,
                getToken: o
            })
        }
        static updateHealthCheckConfig(e, {
            healthCheckIntervalInSeconds: t
        } = {}) {
            if (e instanceof i.HttpClientWithHealthCheck) {
                const r = void 0 === t || t < 0 ? Number.POSITIVE_INFINITY : t;
                e.setHealthCheckInterval(r)
            }
        }
    }
    const Xd = (t, r) => a(void 0, [t, r], void 0, (function*(t, {
        applicationDefinition: r,
        application: n = wm
    }) {
        on(), r.useESM || function(e = globalThis) {
            try {
                ! function(e) {
                    const t = e.requirejs,
                        r = e.define;
                    if (!t || "function" != typeof r) return;
                    const n = "OutSystems/ClientRuntime/Main",
                        i = "@outsystems/runtime-core-js";
                    t.defined(n) || (r(n, [i], (function(e) {
                        return e
                    })), t([n]))
                }(e)
            } catch (e) {
                console.error("Failed to apply RequireJS fix", e)
            }
        }(), n.setApplicationDefinition(r), yield Zn(), yield(t => a(void 0, void 0, void 0, (function*() {
            const r = yield Yd.build({
                withHealthCheck: !0,
                healthCheckPathScope: ne()
            });
            t.register(e.ServiceNames.UnauthenticatedHttpClient, (() => r));
            const n = yield Yd.build({
                baseUrl: ne(),
                getToken: bm,
                getLocale: () => {
                    var e;
                    return null !== (e = Gd()) && void 0 !== e ? e : null
                },
                setLocale: e => Wd(e),
                localeHeader: qd,
                withHealthCheck: !0,
                healthCheckPathScope: ne()
            });
            if (t.register(e.ServiceNames.HttpClient, (() => n)), z() && H()) {
                const r = Yd.buildWithDebugger({
                    alternateHttpClient: n,
                    appUrl: ie(),
                    getToken: bm,
                    getLocale: () => {
                        var e;
                        return null !== (e = Gd()) && void 0 !== e ? e : null
                    },
                    setLocale: e => Wd(e),
                    localeHeader: qd,
                    withHealthCheck: !0
                });
                t.register(e.ServiceNames.DebuggerHttpClient, (() => r)), t.register(e.ServiceNames.NonDebuggerHttpClient, (() => n));
                const i = t.resolve(e.ServiceNames.Debugger);
                (null == i ? void 0 : i.isSessionActive()) && t.register(e.ServiceNames.HttpClient, (() => t.resolve(e.ServiceNames.DebuggerHttpClient)))
            }
            const i = Yd.buildLoggerHttpClient({
                baseUrl: ne(),
                getToken: e => bm(e, !1),
                getLocale: () => {
                    var e;
                    return null !== (e = Gd()) && void 0 !== e ? e : null
                },
                setLocale: e => Wd(e),
                localeHeader: qd
            });
            t.register(e.ServiceNames.LoggerHttpClient, (() => i))
        })))(t)
    }));
    class Qd {
        static addKey(e) {
            this.cache[e] = {
                components: {}
            }, this.cacheKeys.push(e);
            const t = this.cacheKeys.length - Qd.MaxCacheSize;
            if (t > 0)
                for (let e = 0; e < t; e++) this.removeKey(this.cacheKeys[e])
        }
        static removeKey(e) {
            delete this.cache[e], this.cacheKeys.splice(this.cacheKeys.indexOf(e), 1)
        }
        static save(e, t, r, n) {
            this.cache[e] || this.addKey(e), this.cache[e].components[t] = {
                state: r,
                customProperties: n
            }
        }
        static load(e, t) {
            const r = Qd.loadScreenCache(e);
            return r ? r.components[t] : null
        }
        static loadScreenCache(e) {
            return this.cache[e] || void 0
        }
        static clear(e) {
            e ? this.cache[e] && this.removeKey(e) : (this.cache = {}, this.cacheKeys = [])
        }
    }
    Qd.MaxCacheSize = 20, Qd.cache = {}, Qd.cacheKeys = [];
    var Zd = Object.freeze({
        __proto__: null,
        ScreenStateCache: Qd
    });
    const eh = "ServiceWorker",
        th = e => "log" === e.kind,
        rh = e => window.location.origin === e,
        nh = ({
            log: e,
            loggerMethods: r
        }) => {
            if ("error" === e.severity) r.error(eh, e.message, e.errorCode, e.error, t.Visibility.External);
            else if ("info" === e.severity) r.info(eh, e.message, t.Visibility.External);
            else {
                (0, r[e.severity])(eh, e.message)
            }
        },
        ih = "Argument 'handler' cannot be null or undefined";
    class sh {
        constructor(e, t) {
            this.moduleName = e, this.context = t, this.subscribers = []
        }
        subscribe(e) {
            if (!e) throw new Error(ih);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return !1;
            return this.subscribers.push(e), ti(this.moduleName, `Subscribing handler for ${this.context}`), !0
        }
        unsubscribe(e) {
            if (!e) throw new Error(ih);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return this.subscribers.splice(t, 1), ti(this.moduleName, `Unsubscribing handler for ${this.context}`), !0;
            return !1
        }
        publish(e) {
            for (const t of this.subscribers) t(e);
            ti(this.moduleName, `Notifying subscribers for ${this.context}`)
        }
    }
    const ah = "true",
        oh = "false";

    function lh(e) {
        return `Unsupported data type (${e}) for client variable`
    }

    function uh(e, t) {
        if (null == e) throw new TypeError(`Value ${e} is not a valid value for a client variable.`);
        if (! function(e, t) {
                switch (t) {
                    case wo.Integer:
                        return al.isValidInteger(e);
                    case wo.LongInteger:
                        return al.isValidLongInteger(e);
                    case wo.Decimal:
                    case wo.Currency:
                        return al.isValidDecimal(e);
                    case wo.Boolean:
                        return al.isBoolean(e);
                    case wo.Text:
                    case wo.PhoneNumber:
                    case wo.Email:
                        return al.isText(e);
                    case wo.Date:
                        return al.isValidDate(e);
                    case wo.DateTime:
                        return al.isValidDateTime(e);
                    case wo.Time:
                        return al.isValidTime(e);
                    default:
                        const r = lh(Eo(t));
                        throw new TypeError(r)
                }
            }(e, t)) {
            const r = Eo(t);
            throw new TypeError(`Value ${e} is not a valid value for a client variable of the specified type (${r}).`)
        }
        switch (t) {
            case wo.Integer:
            case wo.LongInteger:
            case wo.Decimal:
            case wo.Currency:
                return e.toString();
            case wo.Boolean:
                return e ? ah : oh;
            case wo.Text:
            case wo.PhoneNumber:
            case wo.Email:
                return e;
            case wo.Date:
                return e.toISODate();
            case wo.DateTime:
                return e.toString();
            case wo.Time:
                return e.toISOTime();
            default:
                throw new TypeError(lh(`${t}`))
        }
    }
    const ch = "Client Variables",
        dh = "$SESSION_USER_ID";

    function hh(e) {
        return null == e
    }
    class gh {
        constructor(e) {
            this.namespace = e, this.publisher = new sh(ch, e), this.fullKeyMatcher = new RegExp(`^${Pt(Re)}${Pt(this.namespace)}\\$[^$]*\\$ClientVars\\$`), this.checkSessionExpires(), this.innerSetVariable(dh, "", wo.Text, Sn())
        }
        subscribe(e) {
            return this.publisher.subscribe(e)
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e)
        }
        getFullKey(e, t) {
            return `${Re}${this.namespace}$${t}$ClientVars$${e}`
        }
        getVariable(e, t, r, n) {
            return this.checkSessionExpires(), this.innerGetVariable(e, t, r, n)
        }
        innerGetVariable(e, t, r, n) {
            const i = window.localStorage.getItem(this.getFullKey(e, t));
            return ti(ch, `Reading Client Variable ${e} of module ${t} for ${this.namespace}`), hh(i) ? hh(n) ? xo(r) : n : function(e, t) {
                switch (t) {
                    case wo.Integer:
                        const t = Number(e);
                        return al.isValidInteger(t) && al.isWithinIntegerRange(t) ? t : No.DEFAULT_INTEGER;
                    case wo.LongInteger:
                        if (!e) return No.DEFAULT_LONGINTEGER;
                        const r = to.fromString(e);
                        return al.isValidLongInteger(r) ? r : No.DEFAULT_LONGINTEGER;
                    case wo.Decimal:
                        if (!e) return No.DEFAULT_DECIMAL;
                        const n = new ya(e);
                        return al.isValidDecimal(n) && al.isWithinDecimalRange(n) ? n : No.DEFAULT_DECIMAL;
                    case wo.Currency:
                        if (!e) return No.DEFAULT_CURRENCY;
                        const i = new ya(e);
                        return al.isValidDecimal(i) && al.isWithinDecimalRange(i) ? i : No.DEFAULT_CURRENCY;
                    case wo.Boolean:
                        return e === ah || e !== oh && No.DEFAULT_BOOLEAN;
                    case wo.Text:
                        return al.isText(e) ? e : No.DEFAULT_TEXT;
                    case wo.PhoneNumber:
                        return al.isText(e) ? e : No.DEFAULT_PHONENUMBER;
                    case wo.Email:
                        return al.isText(e) ? e : No.DEFAULT_EMAIL;
                    case wo.Date:
                        const s = Ao.fromISODate(e);
                        return al.isValidDate(s) ? s : No.DEFAULT_DATE;
                    case wo.DateTime:
                        const a = Ao.fromISODateTime(e);
                        return al.isValidDateTime(a) ? a : No.DEFAULT_DATETIME;
                    case wo.Time:
                        const o = Ao.fromISOTime(e);
                        return al.isValidTime(o) ? o : No.DEFAULT_TIME;
                    case wo.Record:
                        throw new TypeError(lh("Record"));
                    case wo.RecordList:
                        throw new TypeError(lh("List"));
                    case wo.BinaryData:
                        throw new TypeError(lh("Binary Data"));
                    case wo.Object:
                        throw new TypeError(lh("Object"));
                    default:
                        throw new TypeError(lh(`Unknown: ${e}`))
                }
            }(i, r)
        }
        setVariable(e, t, r, n) {
            this.checkSessionExpires(), this.innerSetVariable(e, t, r, n), this.publisher.publish({
                key: e,
                module: t,
                value: n
            })
        }
        innerSetVariable(e, t, r, n) {
            window.localStorage.setItem(this.getFullKey(e, t), uh(n, r)), ti(ch, `Set Client Variable ${e} of module ${t} for ${this.namespace}`)
        }
        removeAllVariables() {
            const e = [];
            for (let t = 0; t < window.localStorage.length; t++) {
                const r = window.localStorage.key(t);
                r && this.fullKeyMatcher.test(r) && e.push(r)
            }
            if (e.length > 0) {
                for (const t of e) window.localStorage.removeItem(t);
                this.publisher.publish()
            }
        }
        checkSessionExpires() {
            const e = this.innerGetVariable(dh, "", wo.Text);
            Sn() !== e && ("" !== e && (ti(ch, `Removing all Client Variables for user provider ${this.namespace}`), this.removeAllVariables()), this.innerSetVariable(dh, "", wo.Text, Sn()))
        }
    }
    const mh = "BACKUP_",
        ph = "OSSYS_ENTITY";

    function fh(e) {
        return e ? e.toUpperCase() : e
    }

    function vh(e, t) {
        var r;
        return null !== (r = e.attributes.filter((e => (null == e ? void 0 : e.name) === t.name))[0]) && void 0 !== r ? r : null
    }

    function yh(e) {
        var t;
        return null !== (t = bh(e)[0]) && void 0 !== t ? t : null
    }

    function bh(e) {
        return e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey))
    }

    function Th(e) {
        const t = bh(e);
        return t.length > 0 ? t.map((e => {
            var t;
            return null !== (t = null == e ? void 0 : e.columnName) && void 0 !== t ? t : null
        })) : null
    }

    function wh(e, t) {
        const r = yh(e);
        return r && t.getAttributes().filter((e => e.name === r.name))[0] || null
    }

    function Eh(e, t) {
        const r = yh(e);
        if (!r) return null;
        const n = t.getAttributes().filter((e => e.name === r.name))[0];
        return n ? t[n.attrName] : null
    }
    var Ih = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: mh,
        METADATA_TABLE_NAME: ph,
        formatObjectName: fh,
        getMatchingColumn: vh,
        getIdentifierColumn: yh,
        getIdentifierColumns: bh,
        getIdentifierColumnNames: Th,
        getIdentifierAttribute: wh,
        getIdentifierValue: Eh,
        hasNullIdentifier: function(e, t) {
            const r = yh(e);
            if (!r) return !0;
            const n = t.getAttributes().filter((e => e.name === r.name))[0];
            return !n || Co(t[n.attrName], xo(n.dataType))
        }
    });
    const Ah = {
            tableName: ph,
            idIsAutoNumber: Et.No,
            attributes: [{
                name: "Key",
                columnName: "KEY",
                type: Dt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "ModuleKey",
                columnName: "MODULEKEY",
                type: Dt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "UpgradeStatus",
                columnName: "UPGRADESTATUS",
                type: Dt.INTEGER
            }, {
                name: "Name",
                columnName: "NAME",
                type: Dt.TEXT
            }, {
                name: "TableName",
                columnName: "TABLENAME",
                type: Dt.TEXT
            }, {
                name: "Hash",
                columnName: "HASH",
                type: Dt.TEXT
            }, {
                name: "ExtraInfo",
                columnName: "EXTRAINFO",
                type: Dt.TEXT
            }]
        },
        Nh = Object.assign(Object.assign({}, Ah), {
            tableName: `${mh}${ph}`
        }),
        Sh = "MetadataTableInitializer",
        Dh = {
            isNeeded: e => a(void 0, void 0, void 0, (function*() {
                return !(yield e.existsTable(Ah))
            })),
            run: e => a(void 0, void 0, void 0, (function*() {
                ti(Sh, "Running initializer for entity meta info table."), yield e.createTable(Ah), yield e.createTable(Nh), ti(Sh, "Initializer for entity meta info table ran successfully.")
            }))
        };
    var Rh;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New"
    }(Rh || (Rh = {}));
    var Ch = Rh;

    function xh(e, t, r) {
        for (const n of t.getAttributes()) Lh(t[n.attrName], vh(e, n), `${r} '${e.tableName}.${n.name}'`)
    }

    function Lh(e, t, r) {
        if (t.type === Dt.TEXT && void 0 !== t.length) {
            if (!e) return;
            const n = e.length - t.length;
            if (n > 0) throw new We.DataBaseException("", `Unable to ${r} because it exceeds the maximum allowed length by ${n} characters.`)
        } else if (t.type === Dt.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const n = e.trunc().abs().toString().length - (t.length - t.decimals);
            if (n > 0) throw new We.DataBaseException("", `Unable to ${r} because it exceeds the maximum allowed length by ${n} characters.`)
        }
    }
    const Oh = "EntityModelUtils";

    function _h(e) {
        return e[0]
    }

    function Mh(e, t) {
        return a(this, void 0, void 0, (function*() {
            return yield e.findRecords(Ah, {
                MODULEKEY: t
            })
        }))
    }

    function Uh(e, t, r, n) {
        return a(this, void 0, void 0, (function*() {
            var i;
            let s;
            ti(Oh, `Checking the status of table ${t.tableName} (${t.name})`);
            let o = {};
            if (r && (s = r.HASH, o = JSON.parse(null !== (i = r.EXTRAINFO) && void 0 !== i ? i : "{}")), s) {
                if (s !== t.hash) return function(e, t) {
                    if (t.idIsAutoNumber !== e.idIsAutoNumber) return !0;
                    const r = function(e, t) {
                        var r, n;
                        const i = {};
                        for (const t of e.attributes) {
                            const e = t.columnName;
                            i[e] = {}, i[e].entityAttr = t
                        }
                        for (const e of Object.keys(null !== (r = t.attrs) && void 0 !== r ? r : {})) i[e] = i[e] || {}, i[e].metadataAttr = null === (n = t.attrs) || void 0 === n ? void 0 : n[e];
                        return Object.keys(i).map((e => i[e]))
                    }(e, t);
                    return r.some((e => !e.entityAttr || (e.metadataAttr ? function(e, t) {
                        return function(e, t) {
                            return e.type !== t.type || t.length !== e.length || t.decimals !== e.decimals || !!t.isEntityReference != !!e.isEntityReference && !e.isPrimaryKey
                        }(e, t) || !t.isPrimaryKey != !e.isPrimaryKey
                    }(e.entityAttr, e.metadataAttr) : e.entityAttr.isPrimaryKey)))
                }(t, o) ? (ti(Oh, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), Gh(e, t, o, n)) : (ti(Oh, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), function(e, t, r, n) {
                    return a(this, void 0, void 0, (function*() {
                        var i;
                        const s = t.attributes.filter((e => {
                            var t;
                            return !Object.keys(null !== (t = r.attrs) && void 0 !== t ? t : {}).some((t => t === e.columnName))
                        }));
                        ti(Oh, `Upgrading table ${t.tableName} (${t.name}) with new attributes (${JSON.stringify(s)}) and new hash (${t.hash})`);
                        for (const r of s) {
                            const s = n.serialize(null !== (i = r.default) && void 0 !== i ? i : Eu(r.type), r);
                            yield e.addColumn(t, Object.assign(Object.assign({}, r), {
                                serializedDefault: s
                            }))
                        }
                        yield qh(e, t)
                    }))
                }(e, t, o, n));
                ti(Oh, `Table ${t.tableName} (${t.name}) exists and is up to date`)
            } else ti(Oh, `Table ${t.tableName} (${t.name}) does not exist and will be created`), yield jh(e, t, n), yield function(e, t) {
                return a(this, void 0, void 0, (function*() {
                    const r = Yh(t);
                    r.UPGRADESTATUS = Ch.New, ti(Oh, `Creating metadata for table ${t.tableName} (${t.name})`), yield e.insertRecord(Ah, r)
                }))
            }(e, t)
        }))
    }

    function Fh(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            return Vh(e, (e => (ti(Oh, `Recovering table ${e} from backup`), t => function(e, t) {
                return a(this, void 0, void 0, (function*() {
                    yield kh(e, t);
                    (yield e.existsTable(Hh(t))) && (yield zh(e, Hh(t), t, t, Ch.Unchanged)), yield Jh(e, t, !0)
                }))
            }(t, e))), r, (e => e.UPGRADESTATUS !== Ch.Unchanged))
        }))
    }

    function $h(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            return Vh(e, (e => (ti(Oh, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => function(e, t) {
                return a(this, void 0, void 0, (function*() {
                    yield kh(e, t);
                    const r = _h(yield e.findRecords(Ah, {
                        TABLENAME: t
                    }));
                    r && (yield e.removeRecord(Ah, [r.KEY, r.MODULEKEY]))
                }))
            }(t, e))), r, (e => {
                const r = e.UPGRADESTATUS === Ch.Unchanged,
                    n = t.some((t => t.key === e.KEY)),
                    i = !t.some((t => t.tableName === e.TABLENAME)),
                    s = 0 === t.length || n && i;
                return r && s
            }))
        }))
    }

    function Ph(e, t) {
        return Vh(e, (e => (ti(Oh, `Dropping backup table for ${e}`), t => function(e, t) {
            return a(this, void 0, void 0, (function*() {
                yield kh(e, Hh(t));
                const r = _h(yield e.findRecords(Ah, {
                    TABLENAME: t
                }));
                r && (r.UPGRADESTATUS === Ch.Deleted ? yield e.removeRecord(Ah, [r.KEY, r.MODULEKEY]): (r.UPGRADESTATUS = Ch.Unchanged, yield e.updateRecord(Ah, r)));
                const n = _h(yield e.findRecords(Nh, {
                    TABLENAME: t
                }));
                n && (yield e.removeRecord(Nh, [n.KEY, n.MODULEKEY]))
            }))
        }(t, e))), t, (e => e.UPGRADESTATUS !== Ch.Unchanged))
    }

    function Vh(e, t, r, n) {
        return a(this, void 0, void 0, (function*() {
            const i = yield e.findRecords(Ah, {
                MODULEKEY: r
            });
            let s = [];
            if (n)
                for (const e of i) n(e) && s.push(e);
            else s = i;
            for (const r of s) yield t(r.TABLENAME)(e)
        }))
    }

    function Bh(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            return ti(Oh, `Backing up table '${t}'`), yield Jh(e, t, !1), yield kh(e, Hh(t)), zh(e, t, Hh(t), t, r)
        }))
    }

    function kh(e, t) {
        return e.deleteTableIfExists(t)
    }

    function zh(e, t, r, n, i) {
        return a(this, void 0, void 0, (function*() {
            return ti(Oh, `Renaming table '${t}' to '${r}' and setting status to ${Ch[i]}`), yield function(e, t, r) {
                    return e.renameTable(t, r)
                }(e, t, r),
                function(e, t, r) {
                    return a(this, void 0, void 0, (function*() {
                        const n = _h(yield e.findRecords(Ah, {
                            TABLENAME: t
                        }));
                        return n.UPGRADESTATUS = r, e.updateRecord(Ah, n)
                    }))
                }(e, n, i)
        }))
    }

    function Hh(e) {
        return `${mh}${e}`
    }

    function jh(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            return ti(Oh, `Creating table ${t.tableName} (${t.name})`), e.createTable(Object.assign(Object.assign({}, t), {
                attributes: [...t.attributes.map((e => {
                    var t;
                    return Object.assign(Object.assign({}, e), {
                        serializedDefault: r.serialize(null !== (t = e.default) && void 0 !== t ? t : Eu(e.type), e)
                    })
                }))]
            }))
        }))
    }

    function qh(e, t) {
        return a(this, void 0, void 0, (function*() {
            ti(Oh, `Updating metadata for table ${t.tableName} (${t.name})`);
            const r = yield e.getRecord(Ah, [t.key, t.moduleKey]), n = Yh(t);
            n.UPGRADESTATUS = r.UPGRADESTATUS, n.LASTIDENTIFIER = r.LASTIDENTIFIER, yield e.updateRecord(Ah, n)
        }))
    }

    function Gh(e, t, r, n) {
        return a(this, void 0, void 0, (function*() {
            try {
                const i = yield e.getAllRecords(t);
                yield Bh(e, t.tableName, Ch.Recreated), yield jh(e, t, n);
                for (const s of i) {
                    const i = Wh(s, t, r, n);
                    yield e.insertRecord(t, i)
                }
                yield qh(e, t)
            } catch (e) {
                const r = `Unable to upgrade the definition of entity '${t.name}':\n${Je(e)}`;
                throw ni(Oh, r), new We.DataBaseException("", r)
            }
        }))
    }

    function Wh(e, t, r, n) {
        const i = {};
        for (const s of t.attributes) try {
            const t = s.columnName,
                a = e[t];
            i[t] = Kh(a, s, r, n)
        } catch (e) {
            throw new We.DataBaseException("", `Unable to upgrade attribute '${s.name}' data type to '${Au(s.type)}':\n${Je(e)}`)
        }
        return function(e, t, r) {
            var n;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (void 0 === e[t]) {
                    const s = null !== (n = i.default) && void 0 !== n ? n : Eu(i.type);
                    e[t] = r.serialize(s, i)
                }
            }
        }(i, t, n), i
    }

    function Kh(e, t, r, n) {
        var i;
        const s = null === (i = r.attrs) || void 0 === i ? void 0 : i[t.columnName];
        return s ? function(e, t, r, n) {
            if (n.isConversionNeeded(t, r)) {
                const i = n.deserialize(e, t),
                    s = Iu(r.type),
                    a = function(e, t) {
                        const r = wo[Iu(e.type)],
                            n = wo[Iu(t.type)];
                        return `convert column '${t.name}' from type ${r} to ${n}`
                    }(t, r);
                if (xu.isConvertibleTo(i, s)) {
                    const e = xu.convertTo(i, s);
                    Lh(e, r, a);
                    return n.serialize(e, r)
                }
                throw new We.DataBaseException("", `Unable to ${a}.`)
            }
            return e
        }(e, s, t, n) : e
    }

    function Jh(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            const n = r ? Nh : Ah,
                i = r ? Ah : Nh,
                s = _h(yield e.findRecords(i, {
                    TABLENAME: t
                }));
            s && (yield e.removeRecord(i, [s.KEY, s.MODULEKEY]));
            const a = _h(yield e.findRecords(n, {
                TABLENAME: t
            }));
            if (a && (yield e.insertRecord(i, a)), r) {
                const r = _h(yield e.findRecords(n, {
                    TABLENAME: t
                }));
                r && (yield e.removeRecord(n, [r.KEY, r.MODULEKEY]))
            }
        }))
    }

    function Yh(e) {
        const t = function(e) {
                const t = {};
                return e.attributes.forEach((e => {
                    t[e.columnName] = {
                        type: e.type,
                        isPrimaryKey: e.isPrimaryKey,
                        length: e.length,
                        decimals: e.decimals,
                        isEntityReference: e.isEntityReference
                    }
                })), {
                    v: 2,
                    idIsAutoNumber: e.idIsAutoNumber,
                    attrs: t
                }
            }(e),
            r = yh(e),
            n = (null == r ? void 0 : r.type) === Dt.INTEGER ? 0 : "0";
        return {
            KEY: e.key,
            MODULEKEY: e.moduleKey,
            UPGRADESTATUS: Ch.Unchanged,
            NAME: e.name,
            TABLENAME: e.tableName,
            HASH: e.hash,
            LASTIDENTIFIER: r && e.idIsAutoNumber !== Et.No ? n : void 0,
            EXTRAINFO: JSON.stringify(t)
        }
    }
    const Xh = "EntityModelInitializer";
    class Qh {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t
        }
        isNeeded(e) {
            return a(this, void 0, void 0, (function*() {
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(Ah))) return !0;
                    const t = _h(this.entityInfos).moduleKey,
                        r = yield Mh(e, t);
                    for (const e of this.entityInfos) {
                        const t = _h(r.filter((t => t.KEY === e.key)));
                        if (!t || t.HASH !== e.hash || t.UPGRADESTATUS !== Ch.Unchanged || t.TABLENAME !== e.tableName) return !0
                    }
                    for (const e of r)
                        if (!this.entityInfos.some((t => t.key === e.KEY))) return !0
                }
                return !1
            }))
        }
        run(e) {
            return a(this, void 0, void 0, (function*() {
                if (!this.hasEntityInfos()) return;
                const t = _h(this.entityInfos).moduleKey;
                ti(Xh, `Running initializer for entities of module '${t}'.`), yield Fh(e, this.entityInfos, t), this.entityInfos.length > 0 && (yield $h(e, this.entityInfos, t)), yield function(e, t, r) {
                    return a(this, void 0, void 0, (function*() {
                        return Vh(e, (e => (ti(Oh, `Backing up table ${e} before deletion`), t => Bh(t, e, Ch.Deleted))), r, (e => e.UPGRADESTATUS === Ch.Unchanged && !t.some((t => t.tableName === e.TABLENAME))))
                    }))
                }(e, this.entityInfos, t);
                const r = yield Mh(e, t);
                for (const t of this.entityInfos) {
                    const n = t,
                        i = _h(r.filter((e => e.KEY === n.key)));
                    yield Uh(e, n, i, this.serializer)
                }
                ti(Xh, `Initializer for entities of module '${t}' ran successfully.`)
            }))
        }
        cleanup(e) {
            return a(this, void 0, void 0, (function*() {
                if (!this.hasEntityInfos()) return;
                const t = _h(this.entityInfos).moduleKey;
                ti(Xh, `Running initializer cleanup for entities of module '${t}'.`), yield Ph(e, t), ti(Xh, `Initializer cleanup for entities of module '${t}' ran successfully.`)
            }))
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0
        }
    }
    const Zh = new il("Id", "idOut"),
        eg = new sl("Record", "recordOut"),
        tg = "EntityService";
    class rg {
        constructor(e) {
            this._serializer = e
        }
        get database() {
            return this._database
        }
        get serializer() {
            return this._serializer
        }
        setDatabase(e) {
            ti(tg, "Registering initializer for entity meta info table."), this._database = e, this._database.registerInitializer(Dh)
        }
        getDatabase() {
            return this.databasePromise || (this.databasePromise = new Promise((e => {
                this.releaseDatabaseForUse = () => e(this.database)
            }))), this.databasePromise
        }
        registerInitializer(e) {
            if (e && e.length > 0) {
                ti(tg, `Registering initializer for entities of module '${e[0].moduleKey}'.`);
                const t = new Qh(e, this.serializer);
                this.database.registerInitializer(t)
            }
        }
        setReady() {
            ti(tg, "Releasing the database as ready for use."), this.databasePromise ? this.releaseDatabaseForUse() : this.databasePromise = Promise.resolve(this.database)
        }
        static wrap(e, t) {
            const r = t.getAttributes()[0],
                n = new t;
            return n[r.attrName] = e, n
        }
        static unwrap(e) {
            const t = e.getAttributes()[0];
            return e[t.attrName]
        }
        static getWrappedType(e) {
            return e.getAttributes()[0].complexType
        }
        create(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase(), n = rg.unwrap(t);
                let i;
                xh(e, n, "create");
                try {
                    i = yield r.executeTransaction((t => this.innerCreate(t, e, n)), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
                if (null === i) return null;
                const s = wh(e, n),
                    a = new(Zh.getType(s.dataType));
                return a.idOut = i, a
            }))
        }
        innerCreate(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yield e.insertRecord(t, this.serializer.serialize(r, t)), i = yh(t);
                return i ? this.serializer.deserialize(n, i) : null
            }))
        }
        update(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase(), n = rg.unwrap(t);
                xh(e, n, "update");
                try {
                    yield r.executeTransaction((t => this.innerUpdate(t, e, n)), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
        innerUpdate(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                return e.updateRecord(t, this.serializer.serialize(r, t))
            }))
        }
        createOrUpdate(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase(), n = rg.unwrap(t);
                let i;
                xh(e, n, "create or update");
                try {
                    i = yield r.executeTransaction((t => this.innerCreateOrUpdate(t, e, n)), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
                const s = wh(e, n),
                    a = new(Zh.getType(s.dataType));
                return a.idOut = i, a
            }))
        }
        innerCreateOrUpdate(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yield e.upsertRecord(t, this.serializer.serialize(r, t)), i = yh(t);
                return i ? this.serializer.deserialize(n, i) : null
            }))
        }
        createOrUpdateAll(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase(), n = [];
                for (let r = 0; r < t.length; r++) {
                    const i = t.getItem(r),
                        s = rg.unwrap(i);
                    xh(e, s, "create or update"), n.push(s)
                }
                try {
                    yield r.executeTransaction((t => a(this, void 0, void 0, (function*() {
                        return this.innerCreateOrUpdateAll(t, e, n)
                    }))), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
        innerCreateOrUpdateAll(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                return e.upsertAllRecords(t, r.map((e => this.serializer.serialize(e, t))))
            }))
        }
        get(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase();
                let n = null;
                try {
                    n = yield r.executeReadTransaction((r => a(this, void 0, void 0, (function*() {
                        return this.innerGet(r, e, t)
                    }))), !0, [e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
                if (n) {
                    const t = new(eg.getType(e.implicitAnonymousType));
                    return t.recordOut = rg.wrap(n, e.implicitAnonymousType), t
                }
                throw new We.DataBaseException("", `${e.tableName} with id ${t} was not found`)
            }))
        }
        innerGet(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yh(t),
                    i = yield e.getRecord(t, this.serializer.serialize(r, n));
                return i ? this.serializer.deserialize(i, t, rg.getWrappedType(t.implicitAnonymousType)) : null
            }))
        }
        delete(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase();
                try {
                    yield r.executeTransaction((r => this.innerDelete(r, e, t)), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
        innerDelete(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yh(t);
                return e.removeRecord(t, this.serializer.serialize(r, n))
            }))
        }
        deleteAll(e) {
            return a(this, void 0, void 0, (function*() {
                const t = yield this.getDatabase();
                try {
                    yield t.executeTransaction((t => this.innerDeleteAll(t, e)), !0, [Ah, e])
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
        innerDeleteAll(e, t) {
            return a(this, void 0, void 0, (function*() {
                return e.removeAllRecords(t)
            }))
        }
    }
    const ng = "1900-01-01 00:00:00",
        ig = "Serializer";
    class sg {
        static get NULLDATE_IN_DB() {
            return ng
        }
        static maskValue(e, t) {
            const r = t.length,
                n = e.toString();
            return t.substr(0, Math.max(0, r - n.length)) + n
        }
        static maskFourZeroes(e) {
            return sg.maskValue(e, "0000")
        }
        static maskTwoZeroes(e) {
            return sg.maskValue(e, "00")
        }
        constructor() {
            this.serializers = new Map, this.deserializers = new Map, this.serializers.set(Dt.BINARY_DATA, ((e, t) => this.serializeBinaryData(e, t))), this.serializers.set(Dt.BOOLEAN, ((e, t) => this.serializeBoolean(e, t))), this.serializers.set(Dt.DATE, ((e, t) => this.serializeDate(e, t))), this.serializers.set(Dt.DATE_TIME, ((e, t) => this.serializeDateTime(e, t))), this.serializers.set(Dt.DECIMAL, ((e, t) => this.serializeDecimal(e, t))), this.serializers.set(Dt.INTEGER, ((e, t) => this.serializeInteger(e, t))), this.serializers.set(Dt.LONGINTEGER, ((e, t) => this.serializeLongInteger(e, t))), this.serializers.set(Dt.TEXT, ((e, t) => this.serializeText(e, t))), this.serializers.set(Dt.TIME, ((e, t) => this.serializeTime(e, t))), this.deserializers.set(Dt.BINARY_DATA, ((e, t) => this.deserializeBinaryData(e, t))), this.deserializers.set(Dt.BOOLEAN, ((e, t) => this.deserializeBoolean(e, t))), this.deserializers.set(Dt.DATE, ((e, t) => this.deserializeDate(e, t))), this.deserializers.set(Dt.DATE_TIME, ((e, t) => this.deserializeDateTime(e, t))), this.deserializers.set(Dt.DECIMAL, ((e, t) => this.deserializeDecimal(e, t))), this.deserializers.set(Dt.INTEGER, ((e, t) => this.deserializeInteger(e, t))), this.deserializers.set(Dt.LONGINTEGER, ((e, t) => this.deserializeLongInteger(e, t))), this.deserializers.set(Dt.TEXT, ((e, t) => this.deserializeText(e, t))), this.deserializers.set(Dt.TIME, ((e, t) => this.deserializeTime(e, t)))
        }
        serialize(e, t, r = Et.No) {
            return e instanceof Fo ? this.serializeRecord(e, t) : this.serializeBasicType(e, t, r)
        }
        serializeRecord(e, t) {
            ti(ig, "Starting to serialize a record");
            const r = {};
            return e.getAttributes().forEach((n => {
                const i = vh(t, n);
                r[i.columnName] = this.serializeBasicType(e[n.attrName], i, i.isPrimaryKey ? t.idIsAutoNumber : Et.No)
            })), ti(ig, "Finished serializing a record"), r
        }
        serializeInteger(e, t) {
            return null != e ? e : 0
        }
        serializeText(e, t) {
            return null != e ? e : ""
        }
        serializeBoolean(e, t) {
            return e ? 1 : 0
        }
        serializeLongInteger(e, t) {
            return e ? e.toString() : "0"
        }
        serializeDecimal(e, t) {
            return t.decimals ? e.toFixed(t.decimals) : e.toString()
        }
        serializeDate(e, t) {
            const r = e.toNative();
            return sg.maskFourZeroes(r.getFullYear()) + "-" + sg.maskTwoZeroes(r.getMonth() + 1) + "-" + sg.maskTwoZeroes(r.getDate())
        }
        serializeTime(e, t) {
            const r = e.toNative();
            return sg.maskTwoZeroes(r.getHours()) + ":" + sg.maskTwoZeroes(r.getMinutes()) + ":" + sg.maskTwoZeroes(r.getSeconds())
        }
        serializeDateTime(e, t) {
            if (e.eq(Ao.defaultValue)) return ng;
            const r = e.toNative();
            return sg.maskFourZeroes(r.getUTCFullYear()) + "-" + sg.maskTwoZeroes(r.getUTCMonth() + 1) + "-" + sg.maskTwoZeroes(r.getUTCDate()) + " " + sg.maskTwoZeroes(r.getUTCHours()) + ":" + sg.maskTwoZeroes(r.getUTCMinutes()) + ":" + sg.maskTwoZeroes(r.getUTCSeconds())
        }
        innerSerializeBasicType(e, t, r) {}
        serializeBasicType(e, t, r) {
            if (ti(ig, `Serializing a value of type ${t.type}`), !this.serializers.has(t.type)) throw new We.DataBaseException("", `Unable to serialize ${t.type} to a database value.`);
            const n = this.innerSerializeBasicType(e, t, r);
            if (void 0 !== n) return n;
            return this.serializers.get(t.type)(e, t)
        }
        deserialize(e, t, r) {
            return r ? this.deserializeRecord(e, t, r) : this.deserializeBasicType(e, t)
        }
        deserializeRecord(e, t, r) {
            const n = new r;
            return r.getAttributes().forEach((r => {
                const i = vh(t, r);
                n[r.attrName] = this.deserializeBasicType(e[i.columnName], i)
            })), n
        }
        deserializeInteger(e, t) {
            return e
        }
        deserializeLongInteger(e, t) {
            return to.fromValue(e)
        }
        deserializeDecimal(e, t) {
            return new ya(e)
        }
        deserializeText(e, t) {
            return e
        }
        deserializeBoolean(e, t) {
            return 0 !== e
        }
        deserializeDateTime(e, t) {
            if (e === ng) return Ao.defaultValue;
            const r = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                n = new Date;
            return n.setUTCFullYear(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10)), n.setUTCHours(parseInt(r[4], 10) || 0, parseInt(r[5], 10) || 0, parseInt(r[6], 10) || 0, 0), new Ao(n)
        }
        deserializeDate(e, t) {
            const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e),
                n = new Date;
            return n.setFullYear(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10)), n.setHours(0, 0, 0, 0), new Ao(n)
        }
        deserializeTime(e, t) {
            const r = /^(\d{2}):(\d{2}):(\d{2})$/.exec(e),
                n = new Date;
            return n.setFullYear(1900, 0, 1), n.setHours(parseInt(r[1], 10) || 0, parseInt(r[2], 10) || 0, parseInt(r[3], 10) || 0, 0), new Ao(n)
        }
        innerDeserializeBasicType(e, t) {}
        deserializeBasicType(e, t) {
            if (!this.deserializers.has(t.type)) throw new We.DataBaseException("", `Unable to deserialize ${t} to a runtime value.`);
            const r = this.innerDeserializeBasicType(e, t);
            if (void 0 !== r) return r;
            if (null === e) return Eu(t.type);
            return this.deserializers.get(t.type)(e, t)
        }
    }
    class ag extends sg {
        serializeBinaryData(e, t) {
            return e.toArrayBuffer() || null
        }
        deserializeBinaryData(e, t) {
            const r = e instanceof ArrayBuffer ? new Blob([e]) : e;
            return new Io(r)
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || (!!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length))
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Dt.BOOLEAN:
                    return t !== Dt.INTEGER;
                case Dt.LONGINTEGER:
                    return t !== Dt.TEXT;
                default:
                    return !0
            }
        }
    }
    var og = Object.freeze({
        __proto__: null,
        default: ag
    });
    const lg = "IndexedDBMetadataV2Upgrader";
    class ug {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t, this.VERSION = 2
        }
        isNeeded(e) {
            return a(this, void 0, void 0, (function*() {
                var t, r;
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(Ah))) return !1;
                    const n = _h(this.entityInfos).moduleKey,
                        i = yield Mh(e, n);
                    for (const e of this.entityInfos) {
                        const n = _h(i.filter((t => t.KEY === e.key)));
                        if (n && (null !== (r = JSON.parse(null !== (t = n.EXTRAINFO) && void 0 !== t ? t : "{}").v) && void 0 !== r ? r : 0) < this.VERSION) return !0
                    }
                }
                return !1
            }))
        }
        run(e) {
            return a(this, void 0, void 0, (function*() {
                var t;
                if (!this.hasEntityInfos()) return;
                const r = _h(this.entityInfos).moduleKey,
                    n = yield Mh(e, r);
                for (const i of this.entityInfos) {
                    ti(lg, `Running initializer for entities of module '${r}'.`);
                    const s = _h(n.filter((e => e.KEY === i.key)));
                    let a = {},
                        o = !0,
                        l = !0;
                    s && (a = JSON.parse(null !== (t = s.EXTRAINFO) && void 0 !== t ? t : "{}"), o = s.UPGRADESTATUS === Ch.Unchanged, l = s.UPGRADESTATUS === Ch.Recreated), o ? (ti(this, `Table ${i.tableName} (${i.name}) exists and will be fully upgraded`), yield Gh(e, i, a, this.serializer)) : ti(lg, `Table ${i.tableName} (${i.name}) exists and will be skipped`), (l || o) && i.attributes.some((e => e.isEntityReference)) ? (ti(this, `Table ${i.tableName} (${i.name}) exists and have its defaults upgraded`), yield this.upgradeDefaults(e, i, a, this.serializer)) : ti(lg, `Table ${i.tableName} (${i.name}) wasn't upgraded`)
                }
            }))
        }
        cleanup(e) {
            return a(this, void 0, void 0, (function*() {
                if (!this.hasEntityInfos()) return;
                const t = _h(this.entityInfos).moduleKey;
                ti(lg, `Running initializer cleanup for entities of module '${t}'.`), yield Ph(e, t), ti(lg, `Initializer cleanup for entities of module '${t}' ran successfully.`)
            }))
        }
        upgradeDefaults(e, t, r, n) {
            return a(this, void 0, void 0, (function*() {
                try {
                    const r = yield e.getAllRecords(t);
                    for (const e of r) this.fillWithDefaultsIfNull(e, t, n);
                    yield e.upsertAllRecords(t, r)
                } catch (e) {
                    const r = `Unable to upgrade the definition of entity '${t.name}':\n${Je(e)}`;
                    throw ni(lg, r), new We.DataBaseException("", r)
                }
            }))
        }
        fillWithDefaultsIfNull(e, t, r) {
            var n;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (i.isEntityReference && null === e[t]) {
                    const s = null !== (n = i.default) && void 0 !== n ? n : Eu(i.type);
                    e[t] = r.serialize(s, i)
                }
            }
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0
        }
    }
    class cg extends rg {
        constructor() {
            super(new ag)
        }
        executeAggregate(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield this.getDatabase();
                try {
                    return yield r.executeQuery(e, !0, t)
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
        innerCreate(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yield this.getMetadataRecord(e, t), i = wh(t, r), s = r.clone();
                if (t.idIsAutoNumber === Et.YesIfEmpty) {
                    const a = this.getRecordIdAndUpdateLastIdentifier(n, t, r);
                    yield this.updateMetadataTable(e, n), s[i.attrName] = a
                }
                return yield e.insertRecord(t, this.serializer.serialize(s, t)), i ? s[i.attrName] : null
            }))
        }
        getRecordIdAndUpdateLastIdentifier(e, t, r) {
            const n = yh(t),
                i = wh(t, r);
            let s = Eh(t, r);
            if (t.idIsAutoNumber === Et.YesIfEmpty) {
                let t = void 0 !== e.LASTIDENTIFIER ? this.serializer.deserialize(e.LASTIDENTIFIER, n) : xo(i.dataType);
                Co(s, xo(i.dataType)) ? (t instanceof to ? t = t.add(1) : "number" == typeof t && (t += 1), s = t, e.LASTIDENTIFIER = this.serializer.serialize(s, n)) : Ro(s, t) > 0 && (e.LASTIDENTIFIER = this.serializer.serialize(s, n))
            }
            return s
        }
        innerCreateOrUpdate(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = r.clone();
                if (t.idIsAutoNumber === Et.YesIfEmpty) {
                    const i = yield this.getMetadataRecord(e, t), s = this.getRecordIdAndUpdateLastIdentifier(i, t, r);
                    yield this.updateMetadataTable(e, i);
                    n[wh(t, r).attrName] = s
                }
                const i = yield e.upsertRecord(t, this.serializer.serialize(n, t)), s = yh(t);
                return s ? this.serializer.deserialize(i, s) : null
            }))
        }
        innerCreateOrUpdateAll(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = yield this.getMetadataRecord(e, t);
                let i;
                const s = r.map((e => {
                    i = null != i ? i : wh(t, e);
                    const r = e.clone();
                    if (t.idIsAutoNumber === Et.YesIfEmpty) {
                        const s = this.getRecordIdAndUpdateLastIdentifier(n, t, e);
                        r[i.attrName] = s
                    }
                    return this.serializer.serialize(r, t)
                }));
                return yield this.updateMetadataTable(e, n), e.upsertAllRecords(t, s)
            }))
        }
        registerInitializer(e) {
            if (super.registerInitializer(e), e && e.length > 0) {
                ti("IndexedDBEntityService", `Registering V2 upgrader for entities of module '${e[0].moduleKey}'.`);
                const t = new ug(e, this.serializer);
                this.database.registerInitializer(t)
            }
        }
        getMetadataRecord(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = yield e.getRecord(Ah, [t.key, t.moduleKey]);
                if (!r) throw new Error(`Unable to fetch record with key ${t.key} and moduleKey ${t.moduleKey} from \n                metadata table ${Ah.tableName}.`);
                return r
            }))
        }
        updateMetadataTable(e, t) {
            return a(this, void 0, void 0, (function*() {
                if (void 0 !== t.LASTIDENTIFIER) return e.updateRecord(Ah, t)
            }))
        }
    }
    const dg = {
            tableName: ph,
            idIsAutoNumber: Et.No,
            attributes: [{
                name: "SS_Key",
                columnName: "SS_Key",
                type: Dt.TEXT
            }, {
                name: "Module_SS_Key",
                columnName: "Module_SS_Key",
                type: Dt.TEXT
            }, {
                name: "Name",
                columnName: "Name",
                type: Dt.TEXT
            }, {
                name: "Physical_Table_name",
                columnName: "Physical_Table_name",
                type: Dt.TEXT
            }, {
                name: "Hash",
                columnName: "Hash",
                type: Dt.TEXT
            }, {
                name: "Extra_Info",
                columnName: "Extra_Info",
                type: Dt.TEXT
            }, {
                name: "Upgrade_Status",
                columnName: "Upgrade_Status",
                type: Dt.INTEGER
            }]
        },
        hg = Object.assign(Object.assign({}, dg), {
            tableName: `${mh}${ph}`
        });

    function gg(e, t, r) {
        return a(this, void 0, void 0, (function*() {
            const n = (yield e.getAllRecords(t)).map((e => function(e) {
                const t = JSON.parse(e.Extra_Info),
                    r = {
                        v: 2,
                        idIsAutoNumber: t.idIsAutoNumber,
                        attrs: Object.keys(t.attrs).reduce(((e, r) => (e[r.toUpperCase()] = t.attrs[r], e)), {})
                    };
                return {
                    KEY: e.SS_Key,
                    MODULEKEY: e.Module_SS_Key,
                    UPGRADESTATUS: e.Upgrade_Status,
                    NAME: e.Name,
                    TABLENAME: e.Physical_Table_name,
                    HASH: e.Hash,
                    EXTRAINFO: JSON.stringify(r)
                }
            }(e)));
            yield e.deleteTableIfExists(t), yield e.createTable(r), yield e.upsertAllRecords(r, n)
        }))
    }
    const mg = {
        isNeeded: e => a(void 0, void 0, void 0, (function*() {
            const t = e;
            let r = !1;
            return (yield e.existsTable(dg)) && (r = yield t.executeQuery((e => {
                var t, r, n, i;
                return r = e, n = dg.tableName, i = null === (t = dg.attributes[0]) || void 0 === t ? void 0 : t.columnName, new Promise((e => {
                    r.executeSql(`SELECT "${n}"."${i}" FROM "${n}" LIMIT 1`, void 0, (() => {
                        e(!0)
                    }), (() => (e(!1), !1)))
                }))
            }))), r
        })),
        run: e => a(void 0, void 0, void 0, (function*() {
            const t = [{
                v0TableInfo: dg,
                v2TableInfo: Ah
            }, {
                v0TableInfo: hg,
                v2TableInfo: Nh
            }].map((({
                v0TableInfo: t,
                v2TableInfo: r
            }) => gg(e, t, r)));
            yield Promise.all(t)
        })),
        cleanup: e => a(void 0, void 0, void 0, (function*() {
            yield e.deleteTableIfExists(dg), yield e.deleteTableIfExists(hg), yield e.renameTable(`${Ah.tableName}_V2`, Ah.tableName), yield e.renameTable(`${Nh.tableName}_V2`, Nh.tableName)
        }))
    };
    class pg {
        constructor() {
            pg.lastUpgraderRegistered = this
        }
        isNeeded(e) {
            return a(this, void 0, void 0, (function*() {
                let t = !1;
                return pg.lastUpgraderRegistered === this && (t = yield mg.isNeeded(e)), t
            }))
        }
        run(e) {
            return a(this, void 0, void 0, (function*() {
                const t = [{
                    v2TableInfo: Ah,
                    v0TableInfo: dg
                }, {
                    v2TableInfo: Nh,
                    v0TableInfo: hg
                }].map((({
                    v2TableInfo: t,
                    v0TableInfo: r
                }) => this.migrateToV0(e, t, r)));
                yield Promise.all(t)
            }))
        }
        migrateToV0(e, t, r) {
            return a(this, void 0, void 0, (function*() {
                const n = (yield e.getAllRecords(t)).map((e => function(e) {
                    const t = JSON.parse(e.EXTRAINFO),
                        r = {
                            v: 0,
                            idIsAutoNumber: t.idIsAutoNumber,
                            attrs: Object.keys(t.attrs).reduce(((e, r) => (e[r.toLowerCase()] = t.attrs[r], e)), {})
                        };
                    return {
                        SS_Key: e.KEY,
                        Module_SS_Key: e.MODULEKEY,
                        Name: e.NAME,
                        Physical_Table_name: e.TABLENAME,
                        Hash: e.HASH,
                        Extra_Info: JSON.stringify(r),
                        Upgrade_Status: e.UPGRADESTATUS
                    }
                }(e)));
                yield e.deleteTableIfExists(`${t.tableName}_V2`), yield e.renameTable(t.tableName, `${t.tableName}_V2`), yield e.createTable(r), yield e.upsertAllRecords(r, n)
            }))
        }
        cleanup() {
            return a(this, void 0, void 0, (function*() {
                pg.lastUpgraderRegistered = null
            }))
        }
    }
    class fg extends sg {
        constructor() {
            super(...arguments), this.fromMethodCache = new Map, this.attributeReaderImplementation = (e, t, r, n) => {
                const i = {
                    type: Nu(n)
                };
                return this.deserialize(e["o" + t], i)
            }, this.namedAttributeReaderImplementation = (e, t, r, n) => {
                const i = {
                    type: Nu(n)
                };
                return this.deserialize(e[r], i)
            }, this.deserializeAggregate = (e, t, r, n) => {
                var i;
                if (this.isGenericRecordType(t)) {
                    const i = e,
                        s = t,
                        a = r;
                    let o = this.fromMethodCache.get(s);
                    if (!o) {
                        const e = s.getAttributes();
                        o = this.makeConverterFunction({
                            attributes: e,
                            fromLocalStorage: this.deserializeAggregate,
                            dataType: t
                        }), this.fromMethodCache.set(s, o)
                    }
                    return o(i, a, this.getAttributeReaderImplementation(t), n)
                }
                if (this.isGenericRecordListType(t)) {
                    const n = new t,
                        i = e,
                        s = r,
                        a = [];
                    for (let e = 0; e < i.length; e++) a.push(n.newItem(s(null, i.item(e))));
                    return n.pushAll(a), n
                } {
                    const e = t;
                    throw new Error(`Unable to read data from Local Storage. Unknown type ${null!==(i=null==e?void 0:e.name)&&void 0!==i?i:e}`)
                }
            }
        }
        isGenericRecordType(e) {
            return !!e.isGenericRecordType
        }
        isGenericRecordListType(e) {
            return !!e.isGenericRecordListType
        }
        getAttributeReaderImplementation(e) {
            return e.isAnonymousRecord() ? this.namedAttributeReaderImplementation : this.attributeReaderImplementation
        }
        makeAttributesDeclaration(e, t) {
            t.forEach((t => {
                t.dataType !== wo.RecordList && (e[t.attrName] = null)
            }))
        }
        makeDeserializerForEachAttribute({
            data: e,
            attributes: t,
            dataType: r,
            row: n,
            indexRef: i,
            readerImplementation: s,
            fromLocalStorage: a
        }) {
            t.forEach(((o, l) => {
                o.dataType !== wo.RecordList && (o.dataType === wo.Record && r.isAnonymousRecord() ? e[o.attrName] = a(n, o.complexType, i) : e[o.attrName] = s(n, i.value++, t[l].name, t[l].dataType))
            }))
        }
        makeConverterFunction({
            attributes: e,
            fromLocalStorage: t,
            dataType: r
        }) {
            return (n, i, s, a) => {
                const o = {};
                return a && a.length > 0 ? (this.makeAttributesDeclaration(o, e), a.forEach((r => {
                    const a = e.filter((function(e) {
                        return e.attrName === r
                    }))[0];
                    a.complexType ? o[r] = t(n, a.complexType, i) : o[r] = s(n, i.value++, a.name, a.dataType)
                }))) : this.makeDeserializerForEachAttribute({
                    data: o,
                    attributes: e,
                    dataType: r,
                    row: n,
                    indexRef: i,
                    readerImplementation: s,
                    fromLocalStorage: t
                }), new r.RecordClass(o)
            }
        }
        serializeDateTime(e, t) {
            if (e.eq(Ao.defaultValue)) return sg.NULLDATE_IN_DB;
            const r = e.toNative();
            return sg.maskFourZeroes(r.getUTCFullYear()) + "-" + sg.maskTwoZeroes(r.getUTCMonth() + 1) + "-" + sg.maskTwoZeroes(r.getUTCDate()) + " " + sg.maskTwoZeroes(r.getUTCHours()) + ":" + sg.maskTwoZeroes(r.getUTCMinutes()) + ":" + sg.maskTwoZeroes(r.getUTCSeconds())
        }
        serializeBinaryData(e, t) {
            return void 0 === e.content ? null : e.content
        }
        deserializeDateTime(e, t) {
            if (e === sg.NULLDATE_IN_DB) return Ao.defaultValue;
            const r = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                n = new Date;
            return n.setUTCFullYear(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10)), n.setUTCHours(parseInt(r[4], 10) || 0, parseInt(r[5], 10) || 0, parseInt(r[6], 10) || 0, 0), new Ao(n)
        }
        deserializeBinaryData(e, t) {
            return new Io(e)
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || (!!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length))
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Dt.BOOLEAN:
                    return t !== Dt.INTEGER && t !== Dt.LONGINTEGER;
                case Dt.INTEGER:
                    return t !== Dt.LONGINTEGER && t !== Dt.TEXT;
                case Dt.LONGINTEGER:
                    return t !== Dt.TEXT;
                default:
                    return !0
            }
        }
        innerSerializeBasicType(e, t, r) {
            return ti("WebSQLSerializer", `WebSQL serializing a value of type ${t.type}`), t.isPrimaryKey && r === Et.YesIfEmpty && Co(e, Eu(t.type)) || t.isEntityReference && Co(e, Eu(t.type)) ? null : void 0
        }
    }
    var vg = Object.freeze({
        __proto__: null,
        default: fg
    });
    class yg extends rg {
        constructor() {
            super(new fg), this.isMetadataV2UpgraderRegistered = !1
        }
        registerInitializer(e) {
            this.isMetadataV2UpgraderRegistered || (this.database.registerInitializer(mg), this.isMetadataV2UpgraderRegistered = !0), super.registerInitializer(e), this.database.registerInitializer(new pg)
        }
        executeAggregate(e) {
            return a(this, void 0, void 0, (function*() {
                const t = yield this.getDatabase();
                try {
                    return yield t.executeQuery(e)
                } catch (e) {
                    throw new We.DataBaseException("", e.message, e.stack)
                }
            }))
        }
    }
    class bg {
        constructor({
            onNewVersionHandler: e
        } = {}) {
            this.onNewVersionHandler = e
        }
        setOnNewVersionHandler(e) {
            this.onNewVersionHandler = e
        }
        onNewVersion(e, t) {
            return a(this, void 0, void 0, (function*() {
                this.onNewVersionHandler ? this.onNewVersionHandler(e, t) : ni("LifecycleHandlers", "onNewVersion triggered without handler defined.")
            }))
        }
    }
    const Tg = "en-US",
        wg = !1,
        Eg = /^[A-z]{2,3}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;
    class Ig {
        constructor(e) {
            this.currentLocaleStorage = new ke(Se.Persistent, "CurrentLocale", void 0, k), this.publisher = new sh("Locale Service", e)
        }
        subscribe(e) {
            return this.publisher.subscribe(e)
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e)
        }
        getCurrentLocale() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.localeCode) && void 0 !== t ? t : Tg
        }
        setCurrentLocale(t) {
            const r = Xt(e.ServiceNames.TranslationsService);
            if (r && r.clear(), !this.isValidLocale(t)) throw new Error(`Value '${t}' isn't a valid locale.`);
            {
                const e = {
                    localeCode: t,
                    isRTL: wg
                };
                this.currentLocaleStorage.set(e)
            }
            const n = this.getCurrentLocaleFamily();
            this.publisher.publish({
                localeCode: t,
                localeFamily: n
            })
        }
        getCurrentLocaleFamily() {
            var e;
            const t = [],
                r = null !== (e = this.getCurrentLocale()) && void 0 !== e ? e : "";
            return r.indexOf("-") > 0 && t.push(r.split("-")[0]), t.push(r), t
        }
        isValidLocale(e) {
            return Eg.test(e)
        }
        isCurrentLocaleRTL() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.isRTL) && void 0 !== t ? t : wg
        }
        setCurrentLocaleRTL(e) {
            var t;
            const r = null !== (t = this.currentLocaleStorage.get()) && void 0 !== t ? t : {
                localeCode: Tg,
                isRTL: wg
            };
            r.isRTL = e, this.currentLocaleStorage.set(r)
        }
    }
    var Ag = Object.freeze({
        __proto__: null,
        default: Ig
    });
    const Ng = "MappingWithDefaultService";
    class Sg {
        constructor() {
            this.messages = {}
        }
        getMessage(e, t) {
            ti(Ng, `Getting message for key ${e} with default message ${t}`);
            const r = this.messages[e];
            return null != r ? r : t
        }
        setMessage(e, t) {
            ti(Ng, `Setting message for key ${e} with value ${t}`), this.messages[e] = t
        }
        add(e) {
            if (!e) throw new Error("Messages cannot either null or undefined");
            const t = Object.keys(e);
            ti(Ng, `Adding ${t.length} messages`), t.forEach((t => this.setMessage(t, e[t])))
        }
        clear() {
            ti(Ng, "Clearing cached messages"), this.messages = {}
        }
    }
    const Dg = "Application",
        Rg = (t, ...r) => a(void 0, [t, ...r], void 0, (function*(t, {
            dateTimeFormat: r,
            numberFormat: n,
            application: i = wm
        } = {}) {
            Le(S());
            const s = Lg();
            (({
                serviceWorker: e = navigator.serviceWorker,
                loggerMethods: t = {
                    debug: ti,
                    info: ri,
                    warning: ni,
                    error: ii
                }
            } = {}) => {
                e ? e.addEventListener("message", (e => {
                    rh(e.origin) ? th(e.data) && nh({
                        log: e.data,
                        loggerMethods: t
                    }) : ti(eh, "The received message is not from a secure Service Worker and will be ignored")
                })) : ni(eh, "Service Worker API is not available")
            })(), ti(Dg, "Initializing Application"), t.register(e.ServiceNames.LifecycleEventsManager, (() => new bg({
                onNewVersionHandler: (e, t) => i.onNewVersionDetected(e, t)
            }))), pe((e => {
                if (id.isUpgradingVersion && !Ze(e)) return ni(Dg, "RequireJS error during upgrade, treating as an upgrade error."), void id.handleUpgradeError(e, 1);
                ic(e)
            })), Qd.clear(), T(Y()), Cg(r, n), yield s, t.register(e.ServiceNames.ClientVariablesService, (() => new gh(k()))), Og(t), t.register(e.ServiceNames.TranslationsService, (() => new Sg)), t.register(e.ServiceNames.LocaleService, (() => new Ig($()))), xg()
        })),
        Cg = (e, t) => {
            e && (No.FORMAT.dateTimeFormat = e), t && (No.FORMAT.numberFormat = t)
        },
        xg = () => {
            const e = kn();
            e && (Object.defineProperty(e, "OutSystemsApp", {
                value: {
                    get public() {
                        var e;
                        return new Td(null, null === (e = $d.activeScreen) || void 0 === e ? void 0 : e.callContext())
                    }
                },
                configurable: !0
            }), e.dispatchEvent(new Event("ospublicapiready")))
        },
        Lg = () => a(void 0, void 0, void 0, (function*() {
            (yield Hd()) && (yield zd())
        })),
        Og = t => {
            ir() ? t.register(e.ServiceNames.EntityService, (() => new yg)) : t.register(e.ServiceNames.EntityService, (() => new cg))
        },
        _g = "/moduleservices/auth/configs",
        Mg = "AuthConfigsManager",
        Ug = "os-runtime-authconfigs";
    class Fg {
        constructor({
            httpClient: t = Qt.resolve(e.ServiceNames.UnauthenticatedHttpClient),
            initialConfigs: r,
            getBasePath: n = (() => ne()),
            cacheName: i = "os-builtin-authconfigs",
            cacheStorage: s = localStorage
        } = {}) {
            var a;
            this.isOnlineListenerRegistered = !1, this.httpClient = t, this.getBasePath = n, this.cacheStorage = s, ((e, t, r) => {
                const n = e.getItem(t);
                n && (e.setItem(r, n), e.removeItem(t))
            })(this.cacheStorage, i, Ug), this.cacheName = Ug, this.authConfigs = null !== (a = null != r ? r : this.fetchCachedConfigs()) && void 0 !== a ? a : []
        }
        cacheConfigs(e) {
            this.cacheStorage.setItem(this.cacheName, JSON.stringify(e))
        }
        fetchCachedConfigs() {
            try {
                const e = this.cacheStorage.getItem(this.cacheName);
                if (e) return JSON.parse(e);
                ni(Mg, "No auth configs stored in cache")
            } catch (e) {
                ii(Mg, "Error retrieving auth configs from cache", "OS-CLRT-40100", e)
            }
        }
        update() {
            return a(this, arguments, void 0, (function*(t = Hn, r = Qt.resolve(e.ServiceNames.Auth)) {
                var n;
                try {
                    const e = yield this.httpClient.get({
                        url: _g,
                        baseURL: this.getBasePath()
                    }), t = null == e ? void 0 : e.authConfigurations;
                    if (!Array.isArray(t)) throw new Error("Did not receive an array of configurations");
                    if (this.authConfigs = t, this.cacheConfigs(this.authConfigs), !(null === (n = r.getInstance()) || void 0 === n ? void 0 : n.isAuthenticated())) {
                        const [e] = this.readAuthConfigs(Gn);
                        e && r.updateConfig(e.configs)
                    }
                } catch (e) {
                    ii(Mg, "Error while fetching auth configs", "OS-CLRT-40100", e), this.isOnlineListenerRegistered || (t((() => a(this, void 0, void 0, (function*() {
                        return this.update()
                    })))), this.isOnlineListenerRegistered = !0)
                }
            }))
        }
        readAuthConfigs(e, {
            suppressExternalWarnings: r = !1
        } = {}) {
            try {
                e !== Gn || this.authConfigs.find((e => e.type === Gn)) || (ni(Mg, `${Gn} not available, fallback to cognito`), e = "cognito");
                const n = e ? this.authConfigs.filter((t => t.type === e)) : this.authConfigs;
                if (n.length < 1) {
                    return ni(_g, `No identity provider configurations found${e?` for type "${e}"`:""}.`, r ? t.Visibility.Internal : t.Visibility.External), []
                }
                return n.map((e => {
                    var t, r, n, i, s, a, o, l, u, c, d, h, g;
                    return {
                        key: e.key,
                        type: e.type,
                        kc_hint: null !== (t = e.kc_hint) && void 0 !== t ? t : "cognito",
                        configs: {
                            identityProvider: null !== (r = e.kc_hint) && void 0 !== r ? r : e.type,
                            scope: "openid",
                            clientId: null !== (n = e.configs.amplifyClientId) && void 0 !== n ? n : e.configs.clientId,
                            poolId: e.configs.poolId,
                            region: e.configs.region,
                            tenantId: e.configs.tenantId,
                            passwordComplexityPolicy: {
                                minimumLength: null !== (s = null === (i = e.configs.passwordPolicy) || void 0 === i ? void 0 : i.minimumLength) && void 0 !== s ? s : 12,
                                lowerCaseLetterRequired: null === (o = null === (a = e.configs.passwordPolicy) || void 0 === a ? void 0 : a.requireLowercase) || void 0 === o || o,
                                upperCaseLetterRequired: null === (u = null === (l = e.configs.passwordPolicy) || void 0 === l ? void 0 : l.requireUppercase) || void 0 === u || u,
                                numberRequired: null === (d = null === (c = e.configs.passwordPolicy) || void 0 === c ? void 0 : c.requireNumbers) || void 0 === d || d,
                                specialCharacterRequired: null === (g = null === (h = e.configs.passwordPolicy) || void 0 === h ? void 0 : h.requireSymbols) || void 0 === g || g
                            }
                        }
                    }
                }))
            } catch (e) {
                return ni(Mg, "Couldn't read auth configurations"), []
            }
        }
    }
    const $g = {
            info: ({
                category: e,
                message: r
            }) => {
                ri(null != e ? e : "", null != r ? r : "", t.Visibility.Internal)
            },
            error: ({
                category: e,
                message: t,
                error: r,
                code: n,
                visibility: i
            }) => {
                var s;
                ii(null != e ? e : "", null != t ? t : "", null !== (s = n) && void 0 !== s ? s : "OS-CLRT-40100", r, i)
            },
            warning: ({
                category: e,
                message: t
            }) => {
                ni(null != e ? e : "", null != t ? t : "")
            },
            debug: ({
                category: e,
                message: t
            }) => {
                ti(null != e ? e : "", null != t ? t : "")
            }
        },
        Pg = t => a(void 0, void 0, void 0, (function*() {
            t.register(e.ServiceNames.AuthConfigsManager, (() => new Fg));
            const r = t.resolve(e.ServiceNames.AuthConfigsManager),
                [i] = r.readAuthConfigs(Gn, {
                    suppressExternalWarnings: !0
                });
            t.register(e.ServiceNames.Auth, (() => {
                var r;
                return new n.AuthFactory({
                    appKey: S(),
                    appUrl: ne(),
                    region: null == i ? void 0 : i.configs.region,
                    poolId: null == i ? void 0 : i.configs.poolId,
                    clientId: null == i ? void 0 : i.configs.clientId,
                    scope: "openid",
                    identityProvider: null !== (r = null == i ? void 0 : i.kc_hint) && void 0 !== r ? r : null == i ? void 0 : i.type,
                    passwordComplexityPolicy: null == i ? void 0 : i.configs.passwordComplexityPolicy,
                    logger: $g,
                    httpClient: t.resolve(e.ServiceNames.UnauthenticatedHttpClient),
                    isOnline: () => zn()
                })
            })), yield r.update()
        }));
    class Vg {
        constructor(e, t) {
            this.databaseName = e, this.databaseEngineName = t, this.isInitialized = !1, this.allInitializers = [], this.initializersToRun = []
        }
        get name() {
            return this.databaseName
        }
        get engineName() {
            var e;
            return null !== (e = this.databaseEngineName) && void 0 !== e ? e : "Unknown"
        }
        registerInitializer(e) {
            if (this.isInitialized) throw new We.DataBaseException("", `Cannot register a database initializer on the already initialized database '${this.name}'`);
            this.allInitializers.push(e)
        }
        initialize() {
            return a(this, void 0, void 0, (function*() {
                if (this.isInitialized) throw new We.DataBaseException("", `Cannot initialize the already initialized database '${this.name}'`);
                this.markInitialized(), yield this.identifyNeededInitializers(), yield this.runNeededInitializers()
            }))
        }
        initializerCleanup() {
            return a(this, void 0, void 0, (function*() {
                if (!this.isInitialized) throw new We.DataBaseException("", `Cannot perform database initializer cleanup on the non-initialized database '${this.name}'`);
                yield this.cleanupNeededInitializers()
            }))
        }
        identifyNeededInitializers() {
            return a(this, void 0, void 0, (function*() {
                this.allInitializers && this.allInitializers.length > 0 && (yield this.executeReadTransaction((e => a(this, void 0, void 0, (function*() {
                    for (const t of this.allInitializers)(yield t.isNeeded(e)) && this.initializersToRun.push(t)
                }))))), this.releaseUnneededInitializers()
            }))
        }
        runNeededInitializers() {
            return a(this, void 0, void 0, (function*() {
                this.initializersToRun.length > 0 && (yield this.executeUpgradeTransaction((e => a(this, void 0, void 0, (function*() {
                    for (const t of this.initializersToRun) yield t.run(e)
                })))))
            }))
        }
        cleanupNeededInitializers() {
            return a(this, void 0, void 0, (function*() {
                this.initializersToRun.length > 0 && (yield this.executeUpgradeTransaction((e => a(this, void 0, void 0, (function*() {
                    for (const t of this.initializersToRun) t.cleanup && (yield t.cleanup(e))
                })))), this.releaseNeededInitializers())
            }))
        }
        markInitialized() {
            this.isInitialized = !0
        }
        releaseUnneededInitializers() {
            this.allInitializers = []
        }
        releaseNeededInitializers() {
            this.initializersToRun = []
        }
    }

    function Bg(e, t) {
        if (null !== t) return t
    }

    function kg(e) {
        const t = e.replace(/(?:"([^\\"]|\\.)*")|(?:'([^\\']|\\.)*')|(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(\w+)\s*:/g, (function(e, t, r, n, i) {
            return n ? '"' + n + '"' : r ? '"' + e.substring(1, e.length - 1) + '"' : i ? '"' + i + '":' : e
        }));
        return JSON.parse(t)
    }

    function zg(e, t = 3, r, n, i) {
        r = null != r ? r : Hg, t = isNaN(+t) ? 1 : t;
        const s = new WeakMap;
        return JSON.stringify(function e(t, n, a, o, l) {
            var u;
            return t && "object" == typeof t ? (l = s.has(t), s.set(t, !0), o = Array.isArray(t), l ? a = null !== (u = null == i ? void 0 : i(t)) && void 0 !== u ? u : null : JSON.stringify(t, (function(i, s) {
                if (o || n > 0) {
                    if (r && (s = r(i, s)), !i) return o = Array.isArray(s), t = s;
                    (a = a || (o ? [] : {}))[i] = e(s, o ? n : n - 1)
                }
            })), void 0 === a ? o ? [] : "(...)" : a) : t
        }(e, t), null, n)
    }

    function Hg(e, t) {
        if ("" === e) {
            if (Array.isArray(t)) {
                let e = t;
                return e.length >= 10 && (e = e.slice(0, 9), e.push("(...)")), e
            }
            const e = function(e, t) {
                let r = 0,
                    n = !1;
                const i = Object.keys(e).reduce((function(i, s) {
                    return r++, r <= t ? i[s] = e[s] : n = !0, i
                }), {});
                n && (i["..."] = "(...)");
                return i
            }(t, 10);
            return e
        }
        if ("string" == typeof t) {
            const e = t;
            return e.length > 25 ? e.substring(0, 19) + " (...)" : e
        }
        return t
    }
    var jg = Object.freeze({
        __proto__: null,
        serializeToJSON: function(e, t, r, n) {
            const i = Ou.to({
                value: e,
                serializeDefaultValues: t,
                useUnixDateFormat: r,
                dataType: n,
                enforceDefaultValueSerializationAtThisLevel: !0
            });
            return JSON.stringify(i, Bg)
        },
        deserializeFromJSON: function(e, t, r) {
            try {
                let n;
                return e && (n = kg(e)), Ou.from(n, t, r)
            } catch (e) {
                throw "Failed to deserialize JSON to " + t.name + ": " + e.message
            }
        },
        filterJSONValues: Bg,
        parseJSON: kg,
        mergeJS: function e(t, r) {
            let n, i, s, a;
            for (const o in r) {
                n = t[o], i = r[o];
                i && n && ("object" == typeof i || (s = Array.isArray(i))) ? (s ? (s = !1, a = Array.isArray(n) ? n : []) : a = "object" == typeof n ? n : {}, t[o] = e(a, i)) : void 0 !== i && (t[o] = i)
            }
            return t
        },
        serializeObjectForLog: zg
    });
    const qg = "IndexedDBTransactionWithoutObjectStores";
    class Gg {
        constructor(e, t) {
            this.allowTraces = e, this.database = t, this.allowTraces && ti(qg, `Starting transaction ${this.transactionId} over ${t.objectStoreNames.length} store(s)`)
        }
        createTable(e) {
            return new Promise((t => {
                var r, n, i;
                this.debug(`Creating table '${e.tableName}'`);
                const s = Th(e),
                    a = this.database.createObjectStore(e.tableName, {
                        autoIncrement: !s,
                        keyPath: s
                    });
                this.debug(`Creating columns for '${e.tableName}' table`);
                for (let t = 0; t < e.attributes.length; t++) this.debug(`Creating column '${null===(r=e.attributes[t])||void 0===r?void 0:r.name}'`), a.createIndex(null === (n = e.attributes[t]) || void 0 === n ? void 0 : n.columnName, null === (i = e.attributes[t]) || void 0 === i ? void 0 : i.columnName);
                t()
            }))
        }
        deleteTableIfExists(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise(((e, r) => {
                if (this.debug(`Deleting table '${t}'`), !this.database.objectStoreNames.contains(t)) return this.debug(`Table '${t}' does not exist`), e();
                try {
                    this.database.deleteObjectStore(t), this.debug(`Table '${t}' deleted successfuly`)
                } catch (e) {
                    return this.warning(`Error deleting table '${t}'`, e), r(e)
                }
                e()
            }))
        }
        existsTable(e) {
            const t = "string" == typeof e ? e : e.tableName;
            return Promise.resolve(this.database.objectStoreNames.contains(t))
        }
        renameTable(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        addColumn(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        existsColumn(e, t) {
            return a(this, void 0, void 0, (function*() {
                throw new Error("You can't execute this method on a database without object stores.")
            }))
        }
        getRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        insertRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        updateRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        upsertRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        upsertAllRecords(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        removeRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        removeAllRecords(e) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        findRecords(e, t) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        getAllRecords(e) {
            throw new Error("You can't execute this method on a database without object stores.")
        }
        debug(e) {
            this.allowTraces && ti(qg, `${e} on transaction ${this.transactionId}`, t.Visibility.Client)
        }
        warning(e, r) {
            ni(qg, `${e} on transaction ${this.transactionId}${r?`: ${r.message}`:""}`, t.Visibility.Client)
        }
    }

    function Wg(e, t) {
        const r = e.trim();
        if ("" === r) return [];
        {
            const e = Ft(r, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0);
            if (1 !== e.length || e[0].value !== r) throw new We.DataBaseException("", "Invalid syntax in 'Order By' parameter.")
        }
        let n = $t(r, "(\\{\\w+\\}|\\w+\\.)", !1, (e => function(e, t) {
            const r = function(e) {
                    return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2)
                }(e),
                n = t.some((e => e.toLowerCase() === r.toLowerCase())) ? r : "";
            if ("" === n) throw new We.DataBaseException("", `'${r}' found in 'Order By' parameter is an invalid Entity`);
            return "." === e.value.charAt(e.value.length - 1) ? n + "." : n
        }(e, t)));
        n = $t(n, "(\\[\\w+\\])", !1, (e => e.value.substr(1, e.value.length - 2)));
        return n.split(/, ?/).map((e => {
            const t = e.trim().split(" "),
                r = 2 !== t.length || "asc" === t[1].toLowerCase();
            return {
                attributeParts: t[0].split("."),
                isAscending: r
            }
        }))
    }

    function Kg(e) {
        e.stopPropagation(), e.preventDefault()
    }

    function Jg(e) {
        return a(this, void 0, void 0, (function*() {
            if (e instanceof $o)
                for (let t = 0; t < e.length; t++) {
                    const r = e.getItem(t);
                    yield Yg(r)
                } else e instanceof Fo && (yield Yg(e))
        }))
    }

    function Yg(e) {
        return a(this, void 0, void 0, (function*() {
            const t = e.getAttributes().map((t => a(this, void 0, void 0, (function*() {
                const r = e[t.attrName];
                if (t.dataType === wo.Record) yield Yg(r);
                else if (t.dataType === wo.BinaryData) {
                    const e = r;
                    yield e.loadContent()
                }
            }))));
            yield Promise.all(t)
        }))
    }
    var Xg = Object.freeze({
        __proto__: null,
        markEventAsHandled: Kg,
        loadBinaryDataContent: Jg,
        getDynamicSortsObjGenerator: function(e, t) {
            const r = Wg(e, t);
            return e => r.map((t => {
                let r = e;
                for (let e = 0; e < t.attributeParts.length; e++) {
                    const i = (n = t.attributeParts[e], n.charAt(0).toLowerCase() + n.substr(1) + "Attr").toLowerCase(),
                        s = r.getAttributes().filter((e => e.attrName.toLowerCase() === i));
                    if (0 === s.length) throw new We.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t.attributeParts.join(".")}`);
                    r = r[s[0].attrName]
                }
                var n;
                return {
                    value: r,
                    isAscending: t.isAscending
                }
            }))
        }
    });
    const Qg = "IndexedDBTransaction";
    class Zg extends Gg {
        set onComplete(e) {
            this.transaction.oncomplete = () => (this.allowTraces && ti(Qg, `Committing transaction ${this.transactionId}`), e())
        }
        set onAbort(e) {
            this.transaction.onabort = () => (ni(Qg, `Aborting transaction ${this.transactionId}: ${this.transaction.error}`), e(this.transaction.error))
        }
        executeQuery(e) {
            return e(this.transaction)
        }
        constructor(e, t, r) {
            super(e, r), this.transaction = t, Zg.lastTransactionId = (Zg.lastTransactionId + 1) % 1e12, this.transactionId = Zg.lastTransactionId + 1
        }
        renameTable(e, t) {
            return a(this, void 0, void 0, (function*() {
                this.transaction.objectStore(e).name = t
            }))
        }
        getRecord(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Getting record with keys '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).get(Zg.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`), r(i.result || null)
                }, i.onerror = r => {
                    this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, this.transaction.error), Kg(r), n(this.transaction.error)
                }
            }))
        }
        removeRecord(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).delete(Zg.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Deleted record with key '${t}' from table '${e.tableName}' successfully`), r()
                }, i.onerror = r => {
                    this.warning(`Error deleting record with key '${t}' from table '${e.tableName}'`, i.error), Kg(r), n(i.error)
                }
            }))
        }
        removeAllRecords(e) {
            return new Promise(((t, r) => {
                this.debug(`Deleting all records from table '${e.tableName}'`);
                const n = this.transaction.objectStore(e.tableName).clear();
                n.onsuccess = () => {
                    this.debug(`Deleted all records from table '${e.tableName}' successfully`), t()
                }, n.onerror = t => {
                    this.warning(`Error deleting all records from table '${e.tableName}'`, n.error), Kg(t), r(n.error)
                }
            }))
        }
        insertRecord(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Inserting record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).add(t);
                i.onsuccess = () => {
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), r(Zg.unwrapKeyIfNeeded(i))
                }, i.onerror = t => {
                    this.warning(`Error inserting record on table '${e.tableName}'`, i.error), Kg(t), n(i.error)
                }
            }))
        }
        upsertRecord(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Adding/Updating record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).put(t);
                i.onsuccess = () => {
                    this.debug(`Added/Updated record on table '${e.tableName}' successfully`), r(Zg.unwrapKeyIfNeeded(i))
                }, i.onerror = t => {
                    this.warning(`Error adding/updating record on table '${e.tableName}'`, i.error), Kg(t), n(i.error)
                }
            }))
        }
        upsertAllRecords(e, t) {
            return a(this, void 0, void 0, (function*() {
                this.debug(`Adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}'`);
                try {
                    for (const r of t) yield this.upsertRecord(e, r);
                    this.debug(`Added/updated ${null==t?void 0:t.length} record(s) on table '${e.tableName}' successfully`)
                } catch (r) {
                    throw this.warning(`Error adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}'`, r), r
                }
            }))
        }
        updateRecord(e, t) {
            return a(this, void 0, void 0, (function*() {
                return new Promise(((r, n) => {
                    const i = Th(e);
                    if (0 === (null == i ? void 0 : i.length)) {
                        const t = new Error(`Cannot perform an update on table '${e.tableName}' since it has no primary key column`);
                        return this.warning(t.message), n(t)
                    }
                    this.debug(`Checking if record exists on table '${e.tableName}'`);
                    const s = this.transaction.objectStore(e.tableName).get(null == i ? void 0 : i.map((e => t[e])));
                    s.onsuccess = () => {
                        try {
                            if (!s.result) {
                                const t = new Error(`Record to update does not exist on table '${e.tableName}'`);
                                return this.warning(t.message), n(t)
                            }
                            this.debug(`Updating record on table '${e.tableName}'`);
                            const i = this.transaction.objectStore(e.tableName).put(t);
                            i.onsuccess = () => {
                                this.debug(`Updated record on table '${e.tableName}' successfully`), r()
                            }, i.onerror = t => {
                                this.warning(`Error updating record on table '${e.tableName}'`, i.error), Kg(t), n(i.error)
                            }
                        } catch (t) {
                            this.warning(`Error updating record on table '${e.tableName}'`, t), n(t)
                        }
                    }, s.onerror = t => {
                        this.warning(`Error checking if record exists on table '${e.tableName}'`, s.error), Kg(t), n(s.error)
                    }
                }))
            }))
        }
        addColumn(e, t) {
            return a(this, void 0, void 0, (function*() {
                yield new Promise(((r, n) => {
                    this.debug(`Adding column '${zg(t)}' on table '${e.tableName}'`);
                    try {
                        this.transaction.objectStore(e.tableName).createIndex(t.columnName, t.columnName), r()
                    } catch (r) {
                        this.warning(`Error adding column '${zg(t)}' on table '${e.tableName}'`, r), n(r)
                    }
                }));
                const r = yield this.getAllRecords(e);
                for (const n of r) n[t.columnName] = t.serializedDefault, yield this.upsertRecord(e, n)
            }))
        }
        existsColumn(e, t) {
            return a(this, void 0, void 0, (function*() {
                return new Promise(((r, n) => {
                    this.debug(`Checking if column '${t}' exists on table '${e}'`);
                    try {
                        r(this.transaction.objectStoreNames.contains(e) && this.transaction.objectStore(e).indexNames.contains(t))
                    } catch (r) {
                        this.warning(`Error checking if column '${t}' exists on table '${e}'`, r), n(r)
                    }
                }))
            }))
        }
        findRecords(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Searching for all records on table '${e.tableName}' that match the specified criteria.`);
                const i = [],
                    s = bh(e).length > 0,
                    a = this.transaction.objectStore(e.tableName).openCursor();
                a.onsuccess = () => {
                    const n = a.result;
                    if (n) {
                        let e = n.value;
                        s || (e = Object.assign(Object.assign({}, e), {
                            $KEY: n.primaryKey
                        }));
                        Object.keys(t).reduce(((r, n) => r && t.hasOwnProperty(n) && e[fh(n)] === t[n]), !0) && i.push(e), n.continue()
                    } else this.debug(`Search on table '${e.tableName}' found ${i.length} record(s) matching the specified criteria.`), r(i)
                }, a.onerror = t => {
                    this.warning(`Error searching for records on table '${e.tableName}'`, a.error), Kg(t), n(a.error)
                }
            }))
        }
        getAllRecords(e) {
            return new Promise(((t, r) => {
                this.debug(`Getting all records from table '${e.tableName}'`);
                const n = this.transaction.objectStore(e.tableName).getAll();
                n.onsuccess = () => {
                    this.debug(`Retrieved all the records from table '${e.tableName}'`), t(n.result)
                }, n.onerror = t => {
                    this.warning(`Error retrieving all the records from table '${e.tableName}'`, n.error), Kg(t), r(n.error)
                }
            }))
        }
        static wrapKeyIfNeeded(e, t) {
            return bh(t).length > 0 ? e instanceof Array ? e : [e] : e
        }
        static unwrapKeyIfNeeded(e) {
            return e.result instanceof Array ? e.result[0] : e.result
        }
    }
    Zg.lastTransactionId = 0;
    const em = "IndexedDBDatabase";
    class tm extends Vg {
        static asSafeDbName(e) {
            return e || ""
        }
        static executeTransactionPromiseWithRetry(e) {
            return a(this, arguments, void 0, (function*(e, t = 3) {
                let r, n = !0,
                    i = 0;
                for (; n;) {
                    i++;
                    try {
                        r = yield new Promise(e), n = !1
                    } catch (e) {
                        if (!/the transaction is inactive or finished/i.test(e.message) || i >= t) throw e
                    }
                }
                return r
            }))
        }
        static open(e, t) {
            return e = this.asSafeDbName(e), new Promise(((r, n) => {
                if (this.cache[e]) r(this.cache[e]);
                else {
                    if ("undefined" == typeof window) return n(new We.SystemException("Database is only available in the browser/web view"));
                    if (!("indexedDB" in window)) return ti(em, "This browser doesn't support IndexedDB"), n(new We.SystemException("This browser doesn't support IndexedDB"));
                    if (i = navigator.userAgent, /^((?!chrome|android).)*safari/i.test(i) && function(e) {
                            try {
                                return e.self !== e.top
                            } catch (e) {
                                return !0
                            }
                        }(window)) {
                        const e = "Your app requires native access to a Local Storage database that is not available in your browser while using an iframe.\nPlease test your app in your mobile device or use Google Chrome";
                        return alert(e), n(new We.SystemException(e))
                    }
                    ti(em, `Opening database '${e}' on IndexedDB`);
                    const s = window.indexedDB.open(e);
                    s.onsuccess = () => {
                        ti(em, `Database '${e}' opened successfully with version '${s.result.version}'`);
                        const n = s.result;
                        this.cache[e] = new tm(e, n, t), r(this.cache[e])
                    }, s.onerror = () => {
                        ni(em, `Error opening database '${e}'`), n(new We.OpenDatabaseException(`Could not open database '${e}'`))
                    }
                }
                var i
            }))
        }
        constructor(e, t, r) {
            super(e, "IndexedDB"), this.databaseImplementation = t, this.onNewDatabaseVersionDetected = r, this.setOnVersionChangeEvent()
        }
        setOnVersionChangeEvent() {
            this.databaseImplementation.onversionchange = () => {
                this.databaseImplementation.close(), this.onNewDatabaseVersionDetected && this.onNewDatabaseVersionDetected()
            }
        }
        close() {
            return ti(em, `Closing database ${this.name} with version '${this.databaseImplementation.version}'`), this.databaseImplementation.close(), delete tm.cache[this.name], Promise.resolve()
        }
        testConnection() {
            return Promise.resolve()
        }
        executeQuery(e, t = !0, r) {
            return this.executeReadTransaction((t => t.executeQuery(e)), t, r)
        }
        executeTransaction(e, t = !0, r) {
            return this.innerExecuteDMLTransaction(e, t, "readwrite", r)
        }
        executeReadTransaction(e, t = !0, r) {
            return this.innerExecuteDMLTransaction(e, t, "readonly", r)
        }
        innerExecuteDMLTransaction(e, t, r, n) {
            return 0 === this.databaseImplementation.objectStoreNames.length ? this.innerExecuteIDBTransactionWithoutObjectStores(e, t) : this.innerExecuteIDBTransaction(e, t, r, n)
        }
        innerExecuteIDBTransaction(e, t, r, n) {
            return tm.executeTransactionPromiseWithRetry(((i, s) => a(this, void 0, void 0, (function*() {
                let o = null,
                    l = null;
                const u = n ? n.map((e => e.tableName)) : [];
                if (0 === u.length)
                    for (let e = 0; e < this.databaseImplementation.objectStoreNames.length; e++) u.push(this.databaseImplementation.objectStoreNames.item(e));
                const c = this.databaseImplementation.transaction(u, r),
                    d = new Zg(t, c, this.databaseImplementation);
                d.onComplete = () => a(this, void 0, void 0, (function*() {
                    yield Jg(o), i(o)
                })), d.onAbort = e => s(null != l ? l : e);
                try {
                    o = yield e(d)
                } catch (e) {
                    l = e, null == c || c.abort()
                }
            }))))
        }
        innerExecuteIDBTransactionWithoutObjectStores(e, t) {
            return e(new Gg(t, this.databaseImplementation))
        }
        executeUpgradeTransaction(e) {
            return a(this, arguments, void 0, (function*(e, t = !0) {
                return new Promise(((r, n) => {
                    let i = null,
                        s = null;
                    const a = this.databaseImplementation.version;
                    this.databaseImplementation.close();
                    const o = window.indexedDB.open(this.name, a + 1);
                    o.onsuccess = () => (this.debug(`Database '${this.name}' opened successfully with version '${a+1}'`, t), this.databaseImplementation = o.result, this.setOnVersionChangeEvent(), r(i)), o.onerror = () => (ni(em, `Error opening '${this.name}' database with version '${a+1}'`), n(null != s ? s : o.error)), o.onupgradeneeded = () => {
                        this.debug(`Upgrading database '${this.name}' with version '${a+1}'`, t), this.databaseImplementation = o.result;
                        const r = new Zg(t, o.transaction, o.result);
                        r.onAbort = e => s = null != s ? s : e, e(r).then((e => i = e)).catch((e => {
                            var t;
                            s = e, null === (t = o.transaction) || void 0 === t || t.abort()
                        }))
                    }
                }))
            }))
        }
        debug(e, t = !0) {
            t && ti(em, e)
        }
    }
    var rm;
    tm.cache = {},
        function(e) {
            e[e.Read = 0] = "Read", e[e.Write = 1] = "Write", e[e.Upgrade = 2] = "Upgrade"
        }(rm || (rm = {}));
    var nm = rm;
    const im = new Map;

    function sm(e) {
        var t;
        return null !== (t = im.get(e)) && void 0 !== t ? t : ""
    }
    im.set(Dt.BINARY_DATA, "BLOB"), im.set(Dt.BOOLEAN, "BOOLEAN"), im.set(Dt.DATE, "DATE"), im.set(Dt.DATE_TIME, "DATETIME"), im.set(Dt.DECIMAL, "REAL"), im.set(Dt.INTEGER, "INTEGER"), im.set(Dt.LONGINTEGER, "BIGINT"), im.set(Dt.TEXT, "TEXT"), im.set(Dt.TIME, "TIME");
    const am = "The transaction is read-only",
        om = "The database is not running a version change transaction",
        lm = "WebSQLTransaction";
    class um {
        get transactionId() {
            return this._transactionId
        }
        constructor(e, t, r) {
            this.allowTraces = e, this.transaction = t, this.mode = r, um.lastTransactionId = (um.lastTransactionId + 1) % 1e12, this._transactionId = um.lastTransactionId + 1, this.allowTraces && ti(lm, `Starting transaction ${this.transactionId}`)
        }
        executeQuery(e) {
            return e(this.transaction)
        }
        getColumnDeclaration(e, t) {
            let r, n = `${sm(t.type)}`;
            if (t.isPrimaryKey) {
                if (e.idIsAutoNumber === Et.YesIfEmpty || e.idIsAutoNumber === Et.Yes) return t.type === Dt.LONGINTEGER && (n = `${sm(Dt.INTEGER)}`), n += " PRIMARY KEY AUTOINCREMENT NOT NULL", {
                    declaration: `"${t.columnName}" ${n}`
                };
                r = `"${t.columnName}"`
            }
            if (t.length && (n += `(${t.length}${t.decimals?","+t.decimals:""})`), void 0 !== t.serializedDefault) {
                let e = t.serializedDefault;
                "string" == typeof e && (e = `'${e.replace("'","''")}'`), n += ` DEFAULT ${e}`
            }
            return {
                declaration: `"${t.columnName}" ${n}`,
                primaryKeyDeclaration: r
            }
        }
        createTable(e) {
            return new Promise(((t, r) => {
                if (this.debug(`Creating table '${e.tableName}'`), this.mode < nm.Upgrade) {
                    const t = new Error(om);
                    return this.warning(`Error creating table '${e.tableName}'`, t), r(t)
                }
                const n = e.attributes.map((t => this.getColumnDeclaration(e, t))),
                    i = n.filter((e => !!e.primaryKeyDeclaration)).map((e => e.primaryKeyDeclaration)),
                    s = n.map((e => e.declaration));
                i.length > 0 && s.push(`PRIMARY KEY (${i.join(",")})`), this.transaction.executeSql(`CREATE TABLE "${e.tableName}" (${s.join(",")})`, void 0, ((r, n) => {
                    this.debug(`Table '${e.tableName}' created with success`), t()
                }), ((t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error creating table '${e.tableName}'`, i), r(i), !1
                }))
            }))
        }
        deleteTableIfExists(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise(((e, r) => {
                if (this.debug(`Deleting table '${t}'`), this.mode < nm.Upgrade) {
                    const e = new Error(om);
                    return this.warning(`Error deleting table '${t}'`, e), r(e)
                }
                this.transaction.executeSql(`DROP TABLE IF EXISTS "${t}"`, void 0, ((r, n) => {
                    this.debug(`Table '${t}' deleted with success`), e()
                }), ((e, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error deleting table '${t}'`, i), r(i), !1
                }))
            }))
        }
        renameTable(e, t) {
            return new Promise(((r, n) => a(this, void 0, void 0, (function*() {
                if (this.debug(`Renaming table '${e}'`), this.mode < nm.Upgrade) {
                    const t = new Error(om);
                    return this.warning(`Error renaming table '${e}'`, t), n(t)
                }
                this.transaction.executeSql(`ALTER TABLE "${e}" RENAME TO "${t}"`, void 0, ((n, i) => {
                    this.debug(`Table '${e}' renamed to '${t}' with success`), r()
                }), ((t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error renaming table '${e}'`, i), n(i), !1
                }))
            }))))
        }
        existsTable(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise(((e, r) => {
                this.debug(`Checking if table '${t}' exists`);
                this.transaction.executeSql(`SELECT * FROM sqlite_master WHERE type = 'table' AND UPPER(name) = UPPER("${t}")`, void 0, ((r, n) => {
                    this.debug(`Table '${t}' checked with success`), e(n.rows.length > 0)
                }), ((e, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error checking if table '${t}' exists`, i), r(i), !1
                }))
            }))
        }
        addColumn(e, t) {
            return new Promise(((r, n) => a(this, void 0, void 0, (function*() {
                const i = zg(t);
                if (this.debug(`Adding column '${i}' on table '${e.tableName}'`), this.mode < nm.Upgrade) {
                    const e = new Error(om);
                    return this.warning(`Error adding column '${i}'`, e), n(e)
                }
                const s = (e, t) => {
                        this.debug(`Column '${i}' added with success`), r()
                    },
                    a = (e, t) => {
                        const r = new Error(t.message.toString());
                        return this.warning(`Error adding column '${i}'`, r), n(r), !1
                    };
                this.transaction.executeSql(`ALTER TABLE "${e.tableName}" ADD ${this.getColumnDeclaration(e,t).declaration}`, void 0, ((r, n) => {
                    r.executeSql(`UPDATE "${e.tableName}" SET "${t.columnName}" = ?`, [t.serializedDefault], s, a)
                }), a)
            }))))
        }
        existsColumn(e, t) {
            return new Promise((r => {
                this.debug(`Checking if column '${t}' exists on table '${e}'`);
                this.transaction.executeSql(`SELECT "${e}"."${t}" FROM "${e}" LIMIT 0`, void 0, (() => {
                    this.debug(`Column '${t}' exists on table '${e}'`), r(!0)
                }), (() => (this.debug(`Column '${t}' does not exist on table '${e}'`), r(!1), !1)))
            }))
        }
        getRecord(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Getting record with keys '${t}' from table '${e.tableName}'`);
                const i = um.wrapKeyIfNeeded(t),
                    s = e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                    a = `"${e.tableName}"`,
                    o = [...i],
                    l = e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey)).map((e => `"${null==e?void 0:e.columnName}" = ?`)).join(" and ");
                this.transaction.executeSql(`SELECT ${s} FROM ${a} WHERE ${l}`, o, ((n, i) => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`);
                    const s = um.convertSQLResultSetToDatabaseRecord(e, i);
                    r(s.length > 0 ? s[0] : null)
                }), ((r, i) => {
                    const s = new Error(i.message.toString());
                    return this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, s), n(s), !1
                }))
            }))
        }
        insertRecord(e, t) {
            return new Promise(((r, n) => {
                if (this.debug(`Inserting record on table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    return this.warning(`Error inserting record on table '${e.tableName}'`, t), n(t)
                }
                const i = e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey)),
                    s = e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                    a = um.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map((e => void 0 === t[null == e ? void 0 : e.columnName] ? null : t[null == e ? void 0 : e.columnName]));
                this.transaction.executeSql(`INSERT INTO ${o} (${s}) VALUES (${a})`, l, ((n, s) => {
                    var a, o;
                    let l;
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Et.No || e.idIsAutoNumber === Et.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, r(l)
                }), ((t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error inserting record on table '${e.tableName}'`, i), n(i), !1
                }))
            }))
        }
        updateRecord(e, t) {
            return new Promise(((r, n) => {
                if (this.debug(`Updating record on table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    return this.warning(`Error updating record on table '${e.tableName}'`, t), n(t)
                }
                const i = e.attributes.filter((e => !(null == e ? void 0 : e.isPrimaryKey))),
                    s = e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey)),
                    a = i.map((e => `"${null==e?void 0:e.columnName}" = ?`)).join(", "),
                    o = s.map((e => `"${null==e?void 0:e.columnName}" = ?`)).join(" and "),
                    l = `"${e.tableName}"`,
                    u = [];
                i.forEach((e => u.push(t[null == e ? void 0 : e.columnName]))), s.forEach((e => u.push(t[null == e ? void 0 : e.columnName])));
                this.transaction.executeSql(`UPDATE ${l} SET ${a} WHERE ${o}`, u, ((t, n) => {
                    0 === n.rowsAffected ? this.debug(`Record to update does not exist on table '${e.tableName}'`) : this.debug(`Updated record on table '${e.tableName}' successfully`), r()
                }), ((t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error updating record on table '${e.tableName}'`, i), n(i), !1
                }))
            }))
        }
        upsertRecord(e, t) {
            return new Promise(((r, n) => {
                if (this.debug(`Adding/updating record on table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, t), n(t)
                }
                const i = e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey)),
                    s = e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                    a = um.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map((e => t[null == e ? void 0 : e.columnName]));
                this.transaction.executeSql(`INSERT OR REPLACE INTO ${o} (${s}) VALUES (${a})`, l, ((n, s) => {
                    var a, o;
                    let l;
                    this.debug(`Added/updated record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Et.No || e.idIsAutoNumber === Et.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, r(l)
                }), ((t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, i), n(i), !1
                }))
            }))
        }
        upsertAllRecords(e, t) {
            return a(this, void 0, void 0, (function*() {
                if (this.debug(`Adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    throw this.warning(`Error adding/updating records on table '${e.tableName}'`, t), t
                }
                try {
                    e.attributes.some((e => (null == e ? void 0 : e.type) === Dt.BINARY_DATA)) ? yield this.innerUpsertAllSingle(e, t): yield this.innerUpsertAllBulk(e, t), this.debug(`Added/updated ${null==t?void 0:t.length} record(s) on table '${e.tableName}' successfully`)
                } catch (r) {
                    throw this.warning(`Error adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}'`, r), r
                }
            }))
        }
        innerUpsertAllSingle(e, t) {
            return a(this, void 0, void 0, (function*() {
                this.debug(`Adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}' one by one`);
                for (const r of t) yield this.upsertRecord(e, r)
            }))
        }
        innerUpsertAllBulk(e, t) {
            return a(this, void 0, void 0, (function*() {
                const r = Math.floor(um.MaxQueryParameters / e.attributes.length);
                if (0 === r) return this.innerUpsertAllSingle(e, t);
                const n = [],
                    i = Math.ceil(t.length / r);
                this.debug(`Adding/updating ${null==t?void 0:t.length} record(s) on table '${e.tableName}' in ${i} chunk(s) of ${r} record(s) each`);
                for (let s = 0; s < i; s++) {
                    const i = [];
                    let a = 0;
                    for (; a < r;) {
                        const n = s * r + a;
                        if (n === t.length) break;
                        const o = t[n];
                        e.attributes.forEach((e => i.push(o[null == e ? void 0 : e.columnName]))), a++
                    }
                    const o = this.createUpsertBulkQuery(e, a);
                    n.push({
                        query: o,
                        argList: i
                    })
                }
                let s = 0;
                for (const t of n) this.debug(`Adding/updating chunk ${++s} of ${i} on table '${e.tableName}'`), yield this.wrapExecuteSqlOnPromise(t, e)
            }))
        }
        wrapExecuteSqlOnPromise(e, t) {
            return new Promise(((r, n) => {
                this.transaction.executeSql(e.query, e.argList, ((e, n) => {
                    this.debug(`Added/Updated bulk of records on table '${t.tableName}' successfully`), r()
                }), ((e, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error adding/updating bulk of records on table '${t.tableName}'`, i), n(i), !1
                }))
            }))
        }
        createUpsertBulkQuery(e, t) {
            const r = e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                n = `"${e.tableName}"`,
                i = `(${um.concatenateMultipleTimes("?",e.attributes.length,", ")})`;
            return `INSERT OR REPLACE INTO ${n} (${r}) VALUES ${um.concatenateMultipleTimes(i,t,", ")}`
        }
        removeRecord(e, t) {
            return new Promise(((r, n) => {
                if (this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    return this.warning(`Error deleting record from table '${e.tableName}'`, t), n(t)
                }
                const i = um.wrapKeyIfNeeded(t),
                    s = `"${e.tableName}"`,
                    a = [...i],
                    o = e.attributes.filter((e => null == e ? void 0 : e.isPrimaryKey)).map((e => `"${null==e?void 0:e.columnName}" = ?`)).join(" AND ");
                this.transaction.executeSql(`DELETE FROM ${s} WHERE ${""===o?"ROWID = ?":o}`, a, ((n, i) => {
                    this.debug(`Deleted record with key '${t}' from table '${e.tableName}' successfully`), r()
                }), ((r, i) => {
                    const s = new Error(i.message.toString());
                    return this.warning(`Error deleting record with key '${t}' from table '${e.tableName}'`, s), n(s), !1
                }))
            }))
        }
        removeAllRecords(e) {
            return new Promise(((t, r) => {
                if (this.debug(`Deleting all records from table '${e.tableName}'`), this.mode < nm.Write) {
                    const t = new Error(am);
                    return this.warning(`Error deleting all records from table '${e.tableName}'`, t), r(t)
                }
                const n = `"${e.tableName}"`;
                this.transaction.executeSql(`DELETE FROM ${n}`, void 0, ((r, n) => {
                    this.debug(`Deleted all records from table '${e.tableName}' successfully`), t()
                }), ((t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error deleting all records from table '${e.tableName}'`, i), r(i), !1
                }))
            }))
        }
        findRecords(e, t) {
            return new Promise(((r, n) => {
                this.debug(`Searching for all records on table '${e.tableName}' that match the specified criteria`);
                const i = (bh(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                    s = `"${e.tableName}"`;
                let a = "";
                const o = [];
                for (const e in t)
                    if (t.hasOwnProperty(e)) {
                        a += `${a.length>0?" AND ":""}"${fh(e)}" = ?`, o.push(t[e])
                    } this.transaction.executeSql(`SELECT ${i} FROM ${s} WHERE ${a}`, o, ((t, n) => {
                    this.debug(`Search on table '${e.tableName}' found ${n.rows.length} record(s) matching the specified criteria`);
                    const i = um.convertSQLResultSetToDatabaseRecord(e, n);
                    r(i)
                }), ((t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error searching for records on table '${e.tableName}'\r\n${i}`, i), n(i), !1
                }))
            }))
        }
        getAllRecords(e) {
            return new Promise(((t, r) => {
                this.debug(`Getting all records on table '${e.tableName}'`);
                const n = (bh(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map((e => `"${null==e?void 0:e.columnName}"`)).join(", "),
                    i = `"${e.tableName}"`;
                this.transaction.executeSql(`SELECT ${n} FROM ${i}`, void 0, ((r, n) => {
                    this.debug(`Retrieved all records from table '${e.tableName}' successfully`);
                    const i = um.convertSQLResultSetToDatabaseRecord(e, n);
                    t(i)
                }), ((t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error retrieving all records from table '${e.tableName}'`, i), r(i), !1
                }))
            }))
        }
        debug(e) {
            this.allowTraces && ti(lm, `${e} on transaction ${this.transactionId}`)
        }
        warning(e, r) {
            ni(lm, `${e} on transaction ${this.transactionId}${r?`: ${r.message}`:""}`, t.Visibility.Client)
        }
        static wrapKeyIfNeeded(e) {
            return e instanceof Array ? e : [e]
        }
        static convertSQLResultSetToDatabaseRecord(e, t) {
            const r = bh(e).length > 0,
                n = [];
            if (t.rows.length > 0)
                for (let i = 0; i < t.rows.length; i++) {
                    const s = t.rows.item(i),
                        a = {};
                    r || (a.$KEY = s.ROWID), e.attributes.forEach((e => {
                        a[null == e ? void 0 : e.columnName] = s[null == e ? void 0 : e.columnName]
                    })), n.push(a)
                }
            return n
        }
        static concatenateMultipleTimes(e, t, r) {
            return Array.apply(null, new Array(t)).map((() => e)).join(`${r}`)
        }
    }
    um.MaxQueryParameters = 500, um.lastTransactionId = 0;
    const cm = "Could not open database",
        dm = "WebSQLDatabase";
    class hm extends Vg {
        static open(e) {
            return a(this, void 0, void 0, (function*() {
                return this.cache[e] || (this.cache[e] = yield hm.innerOpen(e)), this.cache[e]
            }))
        }
        static innerOpen(e) {
            return a(this, void 0, void 0, (function*() {
                if ("undefined" == typeof window) throw new We.SystemException("Database is only available in the browser/web view");
                return ir() ? hm.openPluginDatabase(e) : hm.isWebSQLSupported() ? hm.openWebSQLDatabase(e) : void hm.throwDatabaseRequiredError()
            }))
        }
        static openPluginDatabase(e) {
            return a(this, void 0, void 0, (function*() {
                yield cr();
                const t = window;
                if (t.sqlitePlugin) return ti(hm, `Opening database '${e}'`), new Promise(((r, n) => {
                    try {
                        t.sqlitePlugin.openDatabase({
                            name: e,
                            location: "default"
                        }, (t => {
                            t ? (ti(hm, `Database '${e}' opened successfully`), r(new hm(e, t))) : (ni(dm, `Error opening database '${e}'`), n(new We.OpenDatabaseException(`${cm} '${e}'`)))
                        }), (t => {
                            ni(dm, `Error opening database '${e}' ${t.message}`), n(new We.OpenDatabaseException(`${cm} '${e}': ${t.message.toString()}`))
                        }))
                    } catch (t) {
                        n(new We.OpenDatabaseException(`${cm} '${e}': ${t.message.toString()}`))
                    }
                }));
                throw new We.OpenDatabaseException("No database driver available")
            }))
        }
        static openWebSQLDatabase(e) {
            const t = window;
            let r;
            try {
                ti(hm, `Opening database '${e}'`), r = t.openDatabase(e, "1.0", e, 5242880)
            } catch (t) {
                throw new We.OpenDatabaseException(`${cm} '${e}': ${t.message.toString()}`)
            }
            if (r) return ti(hm, `Database '${e}' opened successfully`), new hm(e, r);
            throw ni(dm, `Error opening database '${e}'`), new We.OpenDatabaseException(`${cm} '${e}'`)
        }
        static isWebSQLSupported() {
            return !!window.openDatabase
        }
        static throwDatabaseRequiredError() {
            const e = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (!!window.chrome ? "" : ", or use Google Chrome web browser") + ".";
            throw alert(e), new We.SystemException(e)
        }
        constructor(e, t) {
            super(e, "WebSQL"), this.databaseImplementation = t
        }
        testConnection() {
            return a(this, void 0, void 0, (function*() {
                let e = 0;
                ri(dm, "Starting to test on database connections. Performing #5 test queries.", t.Visibility.Internal), yield Promise.all(Array.apply(null, new Array(5)).map((() => new Promise((t => a(this, void 0, void 0, (function*() {
                    try {
                        yield this.executeTransaction((e => e.executeQuery((e => new Promise(((t, r) => {
                            e.executeSql("SELECT 1", void 0, (() => t()), ((e, t) => (r(new Error(t.message.toString())), !1)))
                        }))))))
                    } catch (t) {
                        e++, ii("WebSQLDatabase", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407", t)
                    } finally {
                        t()
                    }
                }))))))), ri(dm, `Finished tests on database connections. #${5-e} out of #5 successfull queries.`, t.Visibility.Internal)
            }))
        }
        close() {
            return this.databaseImplementation = null, delete hm.cache[this.name], Promise.resolve()
        }
        executeQuery(e, t = !0) {
            return this.executeReadTransaction((t => t.executeQuery(e)), t)
        }
        executeTransaction(e, t = !0, r) {
            return this.innerExecuteTransaction(e, nm.Write, t, r)
        }
        executeReadTransaction(e, t = !0, r) {
            return this.innerExecuteTransaction(e, nm.Read, t, r)
        }
        executeUpgradeTransaction(e, t = !0) {
            return this.innerExecuteTransaction(e, nm.Upgrade, t)
        }
        innerExecuteTransaction(e, r, n = !0, i) {
            return new Promise(((i, s) => {
                let o, l, u;
                this.innerExecuteTransactionInMode(r === nm.Read, (t => a(this, void 0, void 0, (function*() {
                    o = new um(n, t, r);
                    try {
                        l = yield e(o)
                    } catch (e) {
                        u = e, t.executeSql("ABORT_TRANSACTION", void 0, (() => {}), (() => !0))
                    }
                }))), (e => {
                    const r = null != u ? u : new Error(e.message.toString());
                    n && ni(dm, `Aborting transaction ${null==o?void 0:o.transactionId}: ${r}`, t.Visibility.Client), s(r)
                }), (() => {
                    this.debug(`Committing transaction ${null==o?void 0:o.transactionId}`, n), i(l)
                }))
            }))
        }
        innerExecuteTransactionInMode(e, t, r, n) {
            var i, s;
            e ? null === (i = this.databaseImplementation) || void 0 === i || i.readTransaction(t, r, n) : null === (s = this.databaseImplementation) || void 0 === s || s.transaction(t, r, n)
        }
        debug(e, t = !0) {
            t && ti(dm, e)
        }
    }
    hm.cache = {};
    const gm = (...e) => a(void 0, [...e], void 0, (function*(e = id) {
            yield e.initializeManifestLoader(), yield e.initialize()
        })),
        mm = (t, ...r) => a(void 0, [t, ...r], void 0, (function*(t, {
            onSettingsUpdated: r
        } = {}) {
            t.register(e.ServiceNames.SettingsManager, (() => new Qn({
                onSettingsUpdated: r
            })));
            const n = t.resolve(e.ServiceNames.SettingsManager);
            yield n.update()
        }));
    var pm, fm;
    const vm = "Application",
        ym = {
            hasRenderedSplashInSession: new ke(Se.Session, "HasRenderedSplashInSession", !1),
            pendingUpgradeFeedback: new ke(Se.Session, "PendingUpgradeFeedback")
        },
        bm = (t, r, n) => a(void 0, void 0, void 0, (function*() {
            var i;
            if (void 0 === n && (n = null === (i = Qt.resolve(e.ServiceNames.Auth)) || void 0 === i ? void 0 : i.getInstance()), n) return yield n.getValidAccessToken(t, r)
        }));
    class Tm {
        constructor() {
            pm.add(this), this.showingSplashScreen = !1, this.isApplicationReady = !1
        }
        setApplicationDefinition(e) {
            N(e), F(e.applicationKey), ir() && function(e) {
                a(this, arguments, void 0, (function*({
                    version: e,
                    ensureReady: r = cr,
                    getNativeAppInfo: n = gn
                }) {
                    yield r();
                    const i = n();
                    if ("function" == typeof(null == i ? void 0 : i.setOSApplicationVersion)) try {
                        i.setOSApplicationVersion(e)
                    } catch (e) {
                        yield ri("Native", "Failed to set app version", t.Visibility.Internal)
                    }
                }))
            }({
                version: e.appVersion
            })
        }
        tryUpgrade(e, t, r, n) {
            return a(this, void 0, void 0, (function*() {
                const i = yield id.upgradeVersion(e, t);
                return i && (yield null == n ? void 0 : n(), r()), i
            }))
        }
        processInitializationError(e, t) {
            if (0 !== e) throw t;
            this.handleError(t)
        }
        initialize(e, t = 0, r, n, i) {
            return jc("Application initialize"), gt((() => a(this, void 0, void 0, (function*() {
                yield Xd(Qt, {
                    applicationDefinition: e,
                    application: this
                });
                const s = Rg(Qt, {
                        dateTimeFormat: r,
                        numberFormat: n
                    }),
                    a = mm(Qt, {
                        onSettingsUpdated: o(this, pm, "m", fm)
                    }),
                    l = Pg(Qt),
                    u = gm();
                return yield Promise.all([s, a, l, u]), yield kd({
                    initType: t,
                    executeRequiredScripts: i,
                    application: this
                })
            }))), (e => this.processInitializationError(t, e)), (() => qc("Application initialize")))
        }
        triggerApplicationReadyEvent() {
            var e;
            const t = null !== (e = q()) && void 0 !== e ? e : j();
            if (t) return ti(vm, "Calling application ready event handler for " + $()), new Promise(((e, r) => {
                fe([t], e, r)
            })).then((e => e.default.fireApplicationReady())).catch((e => {
                this.handleError(e)
            }))
        }
        initializeDatabase() {
            return a(this, void 0, void 0, (function*() {
                let t;
                ti(vm, "Initializing application database.");
                const r = Q(),
                    n = ir();
                if (r || "28f21196-030a-4be2-8241-5a4888fb3ca5" === P()) ti(vm, "Initializing database mock for NativeAppBuilder."), t = Ci.mockDb(R());
                else {
                    let r;
                    n ? (ti(vm, "Initializing WebSQL database service."), r = hm.open(R())) : (ti(vm, "Initializing IndexDB database service."), r = tm.open(R(), (() => this.onNewVersionDetected(!0)))), t = r.then((t => a(this, void 0, void 0, (function*() {
                        ti(vm, "Initializing entity service");
                        return Qt.resolve(e.ServiceNames.EntityService).setDatabase(t), t
                    }))))
                }
                return t
            }))
        }
        onDatabaseReady(t) {
            if (Fc(t)) {
                Qt.resolve(e.ServiceNames.EntityService).setReady()
            } else qu.initDb(t);
            ti(vm, "Database initialized successfully")
        }
        onNewVersionDetected(e, t) {
            const r = (null != t ? t : id.isAutoUpgradeEnabled) || !ir();
            ti(vm, "New version detected, currentViewHasChanged = " + e);
            let n = !0;
            if (e && r) {
                this.disableDocument();
                const e = () => Hr(cn(), n, !0),
                    t = e => e.getApplicationUpgradeRequiredMessage(this.canLoseDataInUpgrade());
                this.showFeedbackMessage(t, 2, "upgrade-required", e).then((() => gc(!1)))
            }
            return r ? id.cacheResourcesInBackground((e => {
                n = e
            })) : Promise.resolve()
        }
        onAppInfoReady(e) {
            try {
                jc("Application onAppInfoReady"), this.updateServerRequestTimeoutOverrideInSeconds(e), this.updateApplicationInfo(e), this.updateClientInfo()
            } finally {
                qc("Application onAppInfoReady")
            }
        }
        updateServerRequestTimeoutOverrideInSeconds(e) {
            var t;
            J(null === (t = e.data) || void 0 === t ? void 0 : t.serverRequestTimeoutOverrideInSeconds)
        }
        updateApplicationInfo(e) {
            var t, r;
            C(null === (t = e.data) || void 0 === t ? void 0 : t.modules), U(null === (r = e.data) || void 0 === r ? void 0 : r.entityModuleNames)
        }
        updateClientInfo() {
            cr().then((() => function() {
                const e = window.device;
                if (e) {
                    const t = new je(new qe(e.platform, e.version, e.manufacturer, e.model, e.uuid, e.serial, e.cordova, e.isVirtual));
                    Ge.set(ze.serializeClientInfo(t))
                }
            }())).catch((e => ni(vm, `Client info update failed: ${e}`)))
        }
        shouldRenderSplashScreen() {
            const e = V();
            return !!((null == e ? void 0 : e.splashScreenName) && e.splashScreenName.length > 0) && !ym.hasRenderedSplashInSession.get()
        }
        disableDocument() {
            const e = document.createElement("div");
            e.classList.add("background-backdrop"), document.body.classList.add("disable-scroll"), document.body.appendChild(e)
        }
        canLoseDataInUpgrade() {
            return document.getElementsByTagName("form").length > 0
        }
        onUpgradeFinished(e, t) {
            e ? ti(vm, "Upgrade finished successfully") : ni(vm, `Upgrade failed with reason: ${t}`);
            const r = {
                success: e,
                failReason: t
            };
            e && !this.isShowingSplashScreen ? this.showUpgradeFeedback(r) : ym.pendingUpgradeFeedback.set(r)
        }
        waitForAppReady() {
            return this.isApplicationReady ? Promise.resolve(void 0) : (this.appReadyPromise || (this.appReadyPromise = new Promise((e => {
                this.onReady = () => e()
            }))), this.appReadyPromise)
        }
        onApplicationReady() {
            ti(vm, "Application ready"), qc("Application ready"), ai(), this.isApplicationReady = !0, this.onReady && (this.onReady(), this.onReady = null)
        }
        showUpgradeFeedback(e) {
            let t, r, n;
            if (e.success) r = 0, t = e => e.getApplicationUpgradeCompleteMessage(), n = "upgrade-success";
            else switch (r = 2, n = "upgrade-error", e.failReason) {
                case 1:
                    t = e => e.getApplicationUpgradeFailedOnResourcesMessage();
                    break;
                case 2:
                    t = e => e.getApplicationUpgradeFailedOnDataModelMessage();
                    break;
                default:
                    t = e => e.getApplicationUpgradeFailedUnknownMessage()
            }
            this.showFeedbackMessage(t, r, n)
        }
        showFeedbackMessage(e, t, r = "", n) {
            return new Promise((i => {
                var s;
                fe([null !== (s = W()) && void 0 !== s ? s : G()], (s => {
                    const a = e(s);
                    a && mc(a, t, !0, r, !0, n), i()
                }))
            }))
        }
        get isReady() {
            return this.isApplicationReady
        }
        get isShowingSplashScreen() {
            return this.showingSplashScreen
        }
        set isShowingSplashScreen(e) {
            e && ym.hasRenderedSplashInSession.set(!0), this.showingSplashScreen = e
        }
        handleError(e, t) {
            ic(e, t)
        }
        exit() {
            return !ir() || hr()
        }
        registerDefaultErrorHandler(t) {
            return Qt.register(e.ServiceNames.GlobalExceptionHandler, t)
        }
    }
    pm = new WeakSet, fm = function(t) {
        const r = t.readNumber("HealthCheckInterval");
        [Qt.resolve(e.ServiceNames.HttpClient), Qt.resolve(e.ServiceNames.UnauthenticatedHttpClient), Qt.resolve(e.ServiceNames.DebuggerHttpClient), Qt.resolve(e.ServiceNames.NonDebuggerHttpClient)].forEach((e => Yd.updateHealthCheckConfig(e, {
            healthCheckIntervalInSeconds: r
        })))
    };
    const wm = new Tm;
    dn.setUrlVersionProvider(id.getVersionedUrl.bind(id));
    var Em = Object.freeze({
        __proto__: null,
        ApplicationStorage: ym,
        getToken: bm,
        Application: Tm,
        default: wm
    });
    const Im = "There was an error processing your request.",
        Am = "",
        Nm = "RELOAD",
        Sm = "#error-screen-message-text",
        Dm = "#error-screen-message-text-extra",
        Rm = "#error-screen-message-reload-button",
        Cm = "#error-screen-spinner",
        xm = "#exception-detail",
        Lm = "#error-screen-show-detail-button",
        Om = "#error-screen-exception-message",
        _m = "#error-screen-exception-stack",
        Mm = "#exception-detail-text";

    function Um(e) {
        var t, r, n;
        const i = ec.errorPageMessage.get(),
            s = ec.errorPageExtraMessage.get(),
            a = ec.errorPageExceptionInfo.get();
        if (a) {
            let r = a.message;
            const n = Ye(a);
            if (n && (r += "\n" + n), console.error(r), "undefined" != typeof document && document.querySelector) {
                document.querySelector(Om).innerHTML = null !== (t = a.message) && void 0 !== t ? t : "";
                document.querySelector(_m).innerHTML = n;
                if (document.querySelector(Lm).addEventListener("click", (() => function() {
                        if ("undefined" != typeof document && document.querySelector) {
                            const e = document.querySelector(Lm),
                                t = document.querySelector(Mm);
                            t.hidden ? (e.innerHTML = "Hide Detail", t.hidden = !1) : (e.innerHTML = "Show Detail", t.hidden = !0)
                        }
                    }())), null == e ? void 0 : e.showExceptionStack) {
                    document.querySelector(xm).style.display = "block"
                }
            }
        }
        if ("undefined" != typeof document && document.querySelector) {
            const t = null === (r = null == e ? void 0 : e.messages) || void 0 === r ? void 0 : r.defaultMessage,
                a = null == e ? void 0 : e.extraMessage;
            document.querySelector(Sm).innerHTML = i || t || Im;
            document.querySelector(Dm).innerHTML = s || a || Am;
            const o = document.querySelector(Rm);
            o.innerHTML = null !== (n = null == e ? void 0 : e.reloadLabel) && void 0 !== n ? n : Nm, o.addEventListener("click", (() => function() {
                if ("undefined" != typeof document && document.querySelector) {
                    document.querySelector(Rm).style.display = "none";
                    document.querySelector(Cm).style.display = "inline-block"
                }
                setTimeout((() => {
                    Gr()
                }), 2e3)
            }()))
        }
    }
    var Fm = Object.freeze({
        __proto__: null,
        initializeErrorPage: function(e, r, n = Um) {
            return Promise.resolve().then((() => r.initialize(e, 1).then((() => {
                var r;
                n(e.errorPageConfig);
                try {
                    const e = ec.errorPageExceptionInfo.get(),
                        n = e ? e.message : ec.errorPageMessage.get();
                    ii("ErrorScreen", `${n}`, null !== (r = null == e ? void 0 : e.errorCode) && void 0 !== r ? r : "OS-CLRT-00000", void 0, t.Visibility.Client)
                } catch (e) {
                    ii("ErrorScreen", "Unable to retrieve error details", "OS-CLRT-00000")
                }
                ai()
            })).catch((e => {
                console.error(e)
            }))))
        }
    });
    const $m = "BaseMessagesProvider";
    var Pm;
    ! function(e) {
        e.MandatoryValue = "Validation.Mandatory", e.InvalidValuePrefix = "Validation.", e.UpgradeComplete = "UpgradeComplete", e.UpgradeRequiredDataLoss = "UpgradeRequiredDataLoss", e.UpgradeRequired = "UpgradeRequired", e.UpgradeFailedOnResources = "AppInitError.Resources", e.UpgradeFailedOnDataModel = "AppInitError.DataModel", e.UpgradeFailed = "AppInitError.Generic"
    }(Pm || (Pm = {}));
    var Vm = Object.freeze({
        __proto__: null,
        get ModuleMessageKeys() {
            return Pm
        },
        BaseMessagesProvider: class {
            constructor(t) {
                if (this.messages = {}, this.localeChangeHandler = t => {
                        var r;
                        const n = Qt.resolve(e.ServiceNames.TranslationsService),
                            i = Qt.resolve(e.ServiceNames.LocaleService);
                        if (n) {
                            (null !== (r = t.localeFamily) && void 0 !== r ? r : [t.localeCode]).forEach((e => {
                                var t, r;
                                this.translationResources[e] ? (ti($m, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), i.setCurrentLocaleRTL(null !== (r = this.translationResources[e].isRTL) && void 0 !== r && r)) : ti($m, `No translations found for ${e} locale.`)
                            }))
                        }
                    }, this.translationResources = null != t ? t : this.translationResources, this.translationResources) {
                    const t = Qt.resolve(e.ServiceNames.LocaleService);
                    if (t) {
                        const e = t.getCurrentLocale(),
                            r = t.getCurrentLocaleFamily();
                        this.localeChangeHandler({
                            localeCode: e,
                            localeFamily: r
                        }), ti($m, "Subscribing handler for locale service."), t.subscribe(this.localeChangeHandler)
                    }
                }
            }
            getMandatoryValueMessage() {
                return this.getMessage(Pm.MandatoryValue, "Required Value!")
            }
            getInvalidValueMessage(e) {
                return this.getMessage(Pm.InvalidValuePrefix + wo[e], "Invalid Value!")
            }
            getApplicationUpgradeCompleteMessage() {
                return this.getMessage(Pm.UpgradeComplete, "")
            }
            getApplicationUpgradeRequiredMessage(e) {
                return e ? this.getMessage(Pm.UpgradeRequiredDataLoss, "") : this.getMessage(Pm.UpgradeRequired, "")
            }
            getApplicationUpgradeFailedOnResourcesMessage() {
                return this.getMessage(Pm.UpgradeFailedOnResources, "")
            }
            getApplicationUpgradeFailedOnDataModelMessage() {
                return this.getMessage(Pm.UpgradeFailedOnDataModel, "")
            }
            getApplicationUpgradeFailedUnknownMessage() {
                return this.getMessage(Pm.UpgradeFailed, "")
            }
            getMessage(t, r) {
                var n;
                const i = null !== (n = this.messages[t]) && void 0 !== n ? n : r,
                    s = Qt.resolve(e.ServiceNames.TranslationsService);
                return s ? s.getMessage(t, i) : i
            }
            setMessage(e, t) {
                this.messages[e] = t
            }
        }
    });
    const Bm = "idAttr",
        km = "nameAttr",
        zm = "validAttr",
        Hm = "validationMessageAttr";
    class jm {
        constructor(e, t, r, n) {
            this.type = e, this._value = t, this.setter = r, this.model = n
        }
        get value() {
            return this._value
        }
        set value(e) {
            const t = xu.convertTo(e, this.type);
            this.setter(t), this.model.flush()
        }
        isAcceptable(e) {
            return xu.isConvertibleTo(e, this.type)
        }
        fastEquals(e) {
            return e && this.constructor === e.constructor && this.value === e.value
        }
        equals(e) {
            return e && this.constructor === e.constructor && Co(this.value, e.value)
        }
    }
    class qm extends _o {
        constructor(e) {
            super(e)
        }
        get idAttr() {
            return this.getBasicProperty(Bm)
        }
        set idAttr(e) {
            this.setBasicProperty(Bm, e, wo.Text)
        }
        get nameAttr() {
            return this.getBasicProperty(km)
        }
        set nameAttr(e) {
            this.setBasicProperty(km, e, wo.Text)
        }
        get generationNode() {
            return this.getBasicProperty(qm.WidgetGenerationNodeAttributeName)
        }
        set generationNode(e) {
            this.setBasicProperty(qm.WidgetGenerationNodeAttributeName, e, wo.Object)
        }
        asReadOnly() {
            return {
                idAttr: this.idAttr,
                nameAttr: this.nameAttr
            }
        }
        refreshGeneration() {
            this.generationNode && (this.generationNode.generation = Zm.currentGeneration)
        }
    }
    qm.WidgetGenerationNodeAttributeName = "widgetGenerationNode", qm.RecordClass = _o.defineRecordClass({
        idAttr: "",
        nameAttr: "",
        widgetGenerationNode: null
    });
    class Gm extends qm {
        constructor(e) {
            super(e)
        }
        get validAttr() {
            return this.getBasicProperty(zm)
        }
        set validAttr(e) {
            this.setBasicProperty(zm, e, wo.Boolean)
        }
        get validationMessageAttr() {
            return this.getBasicProperty(Hm)
        }
        set validationMessageAttr(e) {
            this.setBasicProperty(Hm, e, wo.Text)
        }
        onPropertyValueChanged(e) {
            e !== zm && e !== Hm || this.refreshGeneration()
        }
        asReadOnly() {
            return {
                idAttr: (e = this.data).get(Bm),
                nameAttr: e.get(km),
                validAttr: e.get(zm),
                validationMessageAttr: e.get(Hm)
            };
            var e
        }
    }
    Gm.RecordClass = (() => {
        const e = (new qm.RecordClass).toJS();
        return e.validAttr = !0, e.validationMessageAttr = "", _o.defineRecordClass(e)
    })();
    class Wm extends _o {
        constructor(e) {
            super(e), this.widgetsIdToRecord = this.data.get(Wm.WidgetRecordsAttribute), this.widgetsIdToRecordDataCache = this.data.get(Wm.WidgetRecordsDataCacheAttribute)
        }
        static createDefaultData() {
            return new Wm.RecordClass({
                records: new Map,
                recordsCache: new Map
            })
        }
        static getWidgetsType() {
            return {}
        }
        getWidgetsType() {
            return this.constructor.getWidgetsType()
        }
        getWidgetRecordType(e) {
            return this.getWidgetsType()[e] || qm
        }
        get(e) {
            let t = this.widgetsIdToRecord.get(e);
            return t || (t = this.create(e), this.add(t), t)
        }
        set(e, t) {
            this.widgetsIdToRecord.set(e, t), this.widgetsIdToRecordDataCache.delete(e), this.writePropagate(this.data, null)
        }
        internalSet(e, t) {
            this.widgetsIdToRecord.delete(e), this.widgetsIdToRecordDataCache.set(e, t), this.writePropagate(this.data, null)
        }
        create(e) {
            const t = Ed.nameFromId(e),
                r = new(this.getWidgetRecordType(t))(this.widgetsIdToRecordDataCache.get(e));
            return r.idAttr = e, r.nameAttr = t, r
        }
        add(e) {
            Wm.setPropagationHandler(e, this, e.idAttr, this.internalSet), this.widgetsIdToRecordDataCache.delete(e.idAttr), this.widgetsIdToRecord.set(e.idAttr, e)
        }
        remove(e) {
            this.widgetsIdToRecord.delete(e), this.widgetsIdToRecordDataCache.delete(e), this.writePropagate(this.data, null)
        }
    }
    Wm.WidgetRecordsAttribute = "records", Wm.WidgetRecordsDataCacheAttribute = "recordsCache", Wm.RecordClass = _o.defineRecordClass({
        records: null,
        recordsCache: null
    });
    class Km extends Fo {
        get dataFetchStatusAttr() {
            return this.getBasicProperty(Km.DataFetchStatusAttributeName)
        }
        set dataFetchStatusAttr(e) {
            this.setBasicProperty(Km.DataFetchStatusAttributeName, e, wo.Integer)
        }
        get isDataFetchedAttr() {
            return 1 === this.dataFetchStatusAttr
        }
        get hasFetchErrorAttr() {
            return 2 === this.dataFetchStatusAttr
        }
        static attributesToDeclare() {
            return [Fo.attr("DataFetchStatus", Km.DataFetchStatusAttributeName, "", !0, !1, wo.Integer, (() => 0))].concat(super.attributesToDeclare())
        }
        replaceWith(e) {
            const t = new this.constructor(_o.getData(e));
            t.dataFetchStatusAttr = this.dataFetchStatusAttr, this.writePropagate(_o.getData(t), new So)
        }
    }
    Km.DataFetchStatusAttributeName = "dataFetchStatusAttr";
    class Jm extends Km {
        get listOut() {
            return this.getComplexProperty(Jm.ListOutAttributeName, this.getRecordListType())
        }
        set listOut(e) {
            this.setComplexProperty(Jm.ListOutAttributeName, e, wo.RecordList, this.getRecordListType())
        }
        get countOut() {
            return this.getBasicProperty(Jm.CountOutAttributeName)
        }
        set countOut(e) {
            this.setBasicProperty(Jm.CountOutAttributeName, e, wo.LongInteger)
        }
        bulkSet(e, t, r) {
            const n = [{
                name: Jm.ListOutAttributeName,
                value: e,
                isBasicType: !1
            }, {
                name: Km.DataFetchStatusAttributeName,
                value: t,
                isBasicType: !0
            }];
            void 0 !== r && n.push({
                name: Jm.CountOutAttributeName,
                value: r,
                isBasicType: !0
            }), this.setProperties(n)
        }
        getRecordListType() {
            return this.constructor.RecordListType
        }
        static attributesToDeclare() {
            return [Fo.attr("List", Jm.ListOutAttributeName, "List", !0, !1, wo.RecordList, (() => !1), !0, this.RecordListType), Fo.attr("Count", Jm.CountOutAttributeName, "Count", !0, !1, wo.LongInteger, (() => to.defaultValue))].concat(super.attributesToDeclare())
        }
        static init() {
            if (!this.RecordListType) throw new TypeError("AggregateRecords must define a RecordListType");
            super.init()
        }
    }
    Jm.ListOutAttributeName = "listOut", Jm.CountOutAttributeName = "countOut";
    class Ym extends _o {
        constructor(e) {
            super(), this._context = e, this.writeSubscriptions = [], this.cachedValues = {}, this.modified = !1
        }
        static createDefaultData() {
            const e = this.newVariablesRecord(),
                t = this.newWidgetsRecord();
            return new Ym.RecordClass({
                variables: _o.getData(e),
                widgets: _o.getData(t),
                clientVariablesGeneration: 0,
                currentLocale: null
            })
        }
        onDefaultWritePropagate(e) {
            super.onDefaultWritePropagate(e), this.modified = !0, this.innerFlush(!0)
        }
        cloneCache() {
            return this.cache
        }
        get isModified() {
            return this.modified
        }
        scheduleFlush() {
            this.pendingFlush || (this.pendingFlush = window.setTimeout((() => this.flush()), 0))
        }
        flush() {
            this.pendingFlush && (clearTimeout(this.pendingFlush), this.pendingFlush = void 0), this.modified && (this.modified = !1, Zm.currentGeneration++, this.innerFlush(!1), ti("BaseViewModel", "Flushing model"))
        }
        innerFlush(e) {
            for (let t = 0; t < this.writeSubscriptions.length; t++) {
                const r = this.writeSubscriptions[t];
                r.immediate === e && r.handler(this)
            }
        }
        subscribeWrites(e, t = !1) {
            return !(!this.hasVariables && !this.hasValidationWidgets && null === this.currentLocale && void 0 === this.currentLocale || !e) && (this.writeSubscriptions.push({
                handler: e,
                immediate: t
            }), !0)
        }
        unsubscribeWrites(e) {
            if (e) {
                let t = -1;
                for (let r = 0, n = this.writeSubscriptions.length; r < n; r++)
                    if (this.writeSubscriptions[r].handler === e) {
                        t = r;
                        break
                    } if (t >= 0) return this.writeSubscriptions.splice(t, 1), !0
            }
            return !1
        }
        clearSubscriptions() {
            this.writeSubscriptions = []
        }
        static get hasVariables() {
            return !0
        }
        get hasVariables() {
            return this.constructor.hasVariables
        }
        static getVariablesRecordConstructor() {
            throw new Error("@abstract")
        }
        static newVariablesRecord(e) {
            return this.hasVariables ? new(this.getVariablesRecordConstructor())(e) : void 0
        }
        getVariables() {
            const e = this.constructor;
            if (this.hasVariables) return this.getComplexProperty(Ym.VariablesPropertyName, e.getVariablesRecordConstructor());
            throw new Error("Model does not contain variables")
        }
        get variables() {
            return this.getVariables()
        }
        set variables(e) {
            const t = this.constructor;
            this.setComplexProperty(Ym.VariablesPropertyName, e, wo.Record, t.getVariablesRecordConstructor())
        }
        get clientVariablesGeneration() {
            return this.getBasicProperty(Ym.ClientVariablesGenerationPropertyName)
        }
        set clientVariablesGeneration(e) {
            this.setBasicProperty(Ym.ClientVariablesGenerationPropertyName, e, wo.Integer)
        }
        static get hasValidationWidgets() {
            return !0
        }
        get hasValidationWidgets() {
            return this.constructor.hasValidationWidgets
        }
        get currentLocale() {
            return this.getBasicProperty(Ym.CurrentLocalePropertyName)
        }
        set currentLocale(e) {
            this.currentLocale !== e && this.clearCachedValues(), this.setBasicProperty(Ym.CurrentLocalePropertyName, e, wo.Text)
        }
        static getWidgetsRecordConstructor() {
            throw new Error("@abstract")
        }
        static newWidgetsRecord(e) {
            return this.hasValidationWidgets ? new(this.getWidgetsRecordConstructor())(e) : void 0
        }
        getWidgets() {
            const e = this.constructor;
            if (this.hasValidationWidgets) return this.getComplexProperty(Ym.WidgetsPropertyName, e.getWidgetsRecordConstructor());
            throw new Error("Model does not contain validation widgets")
        }
        get widgets() {
            return this.getWidgets()
        }
        set widgets(e) {
            this.setComplexProperty(Ym.WidgetsPropertyName, e, wo.Object)
        }
        hasCachedValue(e) {
            return this.cachedValues.hasOwnProperty(e)
        }
        getCachedValue(e, t, ...r) {
            let n = this.cachedValues[e];
            const i = r.map(((e, t) => {
                try {
                    return e()
                } catch (e) {
                    return Ym.InvalidValue
                }
            }));
            return void 0 !== n && r.length === n.args.length && i.every(((e, t) => e === n.args[t])) || (n = {
                args: i,
                value: t()
            }, this.cachedValues[e] = n), n.value
        }
        clearCachedValues() {
            this.cachedValues = {}
        }
        createVariable(e, t, r) {
            return new jm(e, t, r, this)
        }
        fromOther(e) {
            this.fromImmutableData(e.data)
        }
        toImmutableData() {
            return this.data
        }
        fromImmutableData(e) {
            this.data = e, this.writePropagate(this.data, this.cache), this.cache.invalidate()
        }
        setInputs(e) {
            throw new Error("@abstract")
        }
        get widgetsGenerationsTree() {
            return this._widgetsGenerationsTree || (this._widgetsGenerationsTree = new Zm), this._widgetsGenerationsTree
        }
        getReadOnlyWidgetRecord(e) {
            return this.widgets.get(e).asReadOnly()
        }
        get context() {
            return this._context
        }
        sanitize(e) {
            let t = e;
            if (this.hasVariables) {
                if (e.constructor !== this.data.constructor) throw new Error("Expected data to be the same type of this model data");
                const r = this.variables.getNonSerializableAttributes();
                if (r.length > 0) {
                    let e = t.get(Ym.VariablesPropertyName);
                    r.forEach((t => e = e.set(t, null))), t = t.set(Ym.VariablesPropertyName, e)
                }
            }
            return t
        }
    }
    Ym.VariablesPropertyName = "variables", Ym.WidgetsPropertyName = "widgets", Ym.ClientVariablesGenerationPropertyName = "clientVariablesGeneration", Ym.CurrentLocalePropertyName = "currentLocale", Ym.InvalidValue = new Object, Ym.RecordClass = _o.defineRecordClass({
        variables: null,
        widgets: null,
        clientVariablesGeneration: 0,
        currentLocale: null
    });
    class Xm extends Ym {
        static get hasVariables() {
            return !1
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs() {}
        static create(e, t, r) {
            return new Xm({
                viewName: e,
                navigatedFromHistory: t,
                viewWasRestoredFromCache: r
            })
        }
    }
    class Qm {
        constructor(e) {
            this._parent = e, this._generation = e ? e.generation : 0
        }
        get parent() {
            return this._parent
        }
        get generation() {
            return this._generation
        }
        set generation(e) {
            this.generation < e && (this._generation = e, this.parent && (this.parent.generation = e))
        }
        addChild() {
            return new Qm(this)
        }
    }
    class Zm {
        constructor() {
            this._root = new Qm(null), this._root.generation = Zm.currentGeneration, Zm.currentGeneration++
        }
        get root() {
            return this._root
        }
        static get currentGeneration() {
            return Zm.generation
        }
        static set currentGeneration(e) {
            Zm.generation = e
        }
    }
    Zm.generation = 0;
    var ep = Object.freeze({
        __proto__: null,
        Variable: jm,
        WidgetRecord: qm,
        ValidationWidgetRecord: Gm,
        BaseWidgetRecordMap: Wm,
        DataSourceRecord: Km,
        AggregateRecord: Jm,
        BaseViewModel: Ym,
        calculateDataFetchStatus: function(...e) {
            let t = 1;
            for (const r of e) switch (r) {
                case 2:
                    return 2;
                case 0:
                    t = 0
            }
            return t
        },
        VariablelessViewModel: class extends Ym {
            static get hasVariables() {
                return !1
            }
            setInputs() {}
        },
        DummyViewModel: Xm,
        ModelFactory: class {
            constructor(e) {
                this.modelClass = e
            }
            create(e) {
                return this.modelClass.hasVariables || this.modelClass.hasValidationWidgets ? new this.modelClass(e) : new Xm(e)
            }
            get hasValidationWidgets() {
                return this.modelClass.hasValidationWidgets
            }
        }
    });

    function tp(e) {
        const t = e.trim().split(" ")[0].split(".");
        return t[t.length - 1].replace(/["]+/g, "")
    }
    var rp = Object.freeze({
        __proto__: null,
        replaceEntityReferencesInOrderBy: function(e, t, r) {
            let n = Ft(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (n.length > 0) {
                const e = n[0];
                throw new We.DataBaseException("", `'${e.groups[2]+e.groups[3]}' found in 'Order By' parameter is a reserved prefix`)
            }
            if ("" !== e && (n = Ft(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== n.length || n[0].value !== e)) throw new We.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = $t(e, "(\\{\\w+\\}|\\w+\\.)", !1, (e => function(e, t, r) {
                let n = "";
                const i = function(e) {
                    return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2)
                }(e);
                let s = !1;
                for (let e = 0; e < t.length; e++)
                    if (t[e].toLowerCase() === i.toLowerCase()) {
                        s = !0, n = '"' + r[e] + '"';
                        break
                    } if (!s) throw new We.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
                return "." === e.value.charAt(e.value.length - 1) ? n + "." : n
            }(e, t, r)));
            return i = $t(i, "(\\[\\w+\\])", !1, (e => function(e) {
                const t = e.value.substr(1, e.value.length - 2);
                return t ? ('"' === t.charAt(0) ? "" : '"') + t + ('"' === t.charAt(t.length - 1) ? "" : '"') : ""
            }(e))), i
        },
        getOrderByColumnsWithoutDuplicates: function(e) {
            return function(e) {
                const t = [],
                    r = {};
                return e.forEach((e => {
                    const n = e.trim();
                    if ("" !== n) {
                        const e = n.replace(new RegExp("\b((ASC)|(DESC))$", "im"), "").replace('"', "").replace("[", "").replace("]", "").trim().toLowerCase();
                        !0 !== r[e] && (t.push(n), r[e] = !0)
                    }
                })), t
            }(e).join(", ")
        },
        validateQueryOrderBy: function(e, t) {
            return t.forEach((t => {
                const r = tp(t);
                for (let t = 0; t < e.length; t++) {
                    if (e[t].attributes.some((e => e.name.toLowerCase() === r.toLowerCase()))) return !0
                }
                throw new We.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t}`)
            })), !0
        },
        getAttributeFromOrderBy: tp
    });

    function np(...e) {
        return !0
    }

    function ip(e, t) {
        return e && t && !al.isBasicType(e) ? e.fastEquals instanceof Function ? e.fastEquals(t) : Co(e, t) : e === t
    }
    var sp = Object.freeze({
        __proto__: null,
        getHashCode: function(e) {
            let t = 0;
            const r = e.length;
            if (0 === r) return t;
            for (let n = 0; n < r; n++) {
                t = (t << 5) - t + e.charCodeAt(n), t |= 0
            }
            return t
        },
        shallowEquals: function(e, t, r = np) {
            if (e === t) return !0;
            if (null === e || null === t || "object" != typeof e || "object" != typeof t) return !1;
            const n = Object.keys(e),
                i = Object.keys(t);
            if (n.length !== i.length) return !1;
            const s = Object.prototype.hasOwnProperty.bind(t);
            for (let i = 0; i < n.length; i++) {
                const a = n[i];
                if (r(e, a)) {
                    if (!s(a)) return !1;
                    if (!ip(e[a], t[a])) return !1
                }
            }
            return !0
        },
        arrayShallowEquals: function(e, t) {
            if (e === t) return !0;
            if (!(null !== e && null !== t && e instanceof Array && t instanceof Array)) return !1;
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++)
                if (!ip(e[r], t[r])) return !1;
            return !0
        },
        assign: function(e, ...t) {
            if (null == e) throw new TypeError("ObjectHelper.assign target cannot be null or undefined");
            const r = Object(e),
                n = Object.prototype.hasOwnProperty;
            for (const e of t) {
                if (null == e) continue;
                const t = Object(e);
                for (const e in t) n.call(t, e) && (r[e] = t[e])
            }
            return r
        },
        isEmptyObject: function(e) {
            return !e || 0 === Object.keys(e).length
        },
        roughSizeOf: function(e) {
            const t = [],
                r = [e];
            let n = 0;
            for (; r.length;) {
                const e = r.pop();
                switch (typeof e) {
                    case "boolean":
                        n += 4;
                        break;
                    case "number":
                        n += 8;
                        break;
                    case "string":
                        n += 2 * e.length;
                        break;
                    case "object":
                        if (-1 !== t.indexOf(e)) continue;
                        t.push(e), Array.isArray(e) || (n += 2 * Object.keys(e).length);
                        for (const t in e) {
                            let n = null;
                            try {
                                n = e[t]
                            } catch (e) {}
                            n && r.push(n)
                        }
                }
            }
            return n
        },
        concatenateMultipleTimes: function(e, t, r) {
            let n = e;
            for (let e = 0; e < r; e++) n += t;
            return n
        }
    });
    let ap = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, wo.Boolean, (() => !1)), this.attr("TooManyFailedAttempts", "tooManyFailedAttemptsAttr", "tooManyFailedAttempts", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    ap = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], ap);
    let op = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "changePasswordFailureReason", !0, !1, wo.Record, (() => Oo.getData(new ap)), ap)].concat(super.attributesToDeclare())
        }
    };
    op = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], op);
    let lp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    lp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], lp);
    let up = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("MinimumLength", "minimumLengthAttr", "minimumLength", !0, !1, wo.Integer, (() => xo(wo.Integer))), this.attr("UpperCaseLetterRequired", "upperCaseLetterRequiredAttr", "upperCaseLetterRequired", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("LowerCaseLetterRequired", "lowerCaseLetterRequiredAttr", "lowerCaseLetterRequired", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("NumberRequired", "numberRequiredAttr", "numberRequired", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("SpecialCharacterRequired", "specialCharacterRequiredAttr", "specialCharacterRequired", !0, !1, wo.Boolean, (() => xo(wo.Boolean)))].concat(super.attributesToDeclare())
        }
    };
    up = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], up);
    let cp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("IsValid", "isValidAttr", "isValid", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("MissingMinimumLength", "missingMinimumLengthAttr", "missingMinimumLength", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("MissingUpperCaseLetter", "missingUpperCaseLetterAttr", "missingUpperCaseLetter", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("MissingLowerCaseLetter", "missingLowerCaseLetterAttr", "missingLowerCaseLetter", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("MissingNumber", "missingNumberAttr", "missingNumber", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("MissingSpecialCharacter", "missingSpecialCharacterAttr", "missingSpecialCharacter", !0, !1, wo.Boolean, (() => xo(wo.Boolean)))].concat(super.attributesToDeclare())
        }
    };
    cp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], cp);
    let dp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("UserId", "userIdAttr", "userId", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("finishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "finishUserRegistrationFailureReason", !0, !1, wo.Record, (() => Oo.getData(new lp)), lp)].concat(super.attributesToDeclare())
        }
    };
    dp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], dp);
    let hp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidPhotoURL", "invalidPhotoURLAttr", "invalidPhotoURL", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    hp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], hp);
    let gp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "updateUserFailureReason", !0, !1, wo.Record, (() => Oo.getData(new hp)), hp)].concat(super.attributesToDeclare())
        }
    };
    gp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], gp);
    let mp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Email", "emailAttr", "email", !0, !1, wo.Email, (() => xo(wo.Email))), this.attr("Name", "nameAttr", "name", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    mp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], mp);
    let pp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, wo.Boolean, (() => !1)), this.attr("TooManyFailedLoginAttempts", "tooManyFailedLoginAttemptsAttr", "tooManyFailedLoginAttempts", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    pp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], pp);
    let fp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("UserId", "userIdAttr", "userId", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "userLoginFailureReason", !0, !1, wo.Record, (() => Oo.getData(new pp)), pp), this.attr("retryAfterSeconds", "retryAfterSecondsAttr", "retryAfterSeconds", !0, !1, wo.Integer, (() => xo(wo.Integer)))].concat(super.attributesToDeclare())
        }
    };
    fp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], fp);
    let vp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, wo.Boolean, (() => !1)), this.attr("UsernameAlreadyExists", "usernameAlreadyExistsAttr", "usernameAlreadyExists", !0, !1, wo.Boolean, (() => !1)), this.attr("UserAlreadyRegistered", "userAlreadyRegisteredAttr", "userAlreadyRegistered", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    vp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], vp);
    let yp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "startUserRegistrationFailureReason", !0, !1, wo.Record, (() => Oo.getData(new vp)), vp), this.attr("TemporaryPassword", "temporaryPasswordAttr", "temporaryPassword", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("UserId", "userIdAttr", "userId", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    yp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], yp);
    let bp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Name", "nameAttr", "name", !0, !1, wo.Text, (() => xo(wo.Text))), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    bp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], bp);
    let Tp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("HasRole", "hasRoleOut", "hasRole", !0, !1, wo.Boolean, (() => xo(wo.Boolean)))].concat(super.attributesToDeclare())
        }
    };
    Tp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], Tp);
    let wp = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, wo.Boolean, (() => !1)), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, wo.Boolean, (() => !1))].concat(super.attributesToDeclare())
        }
    };
    wp = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], wp);
    let Ep = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "finishResetPasswordFailureReason", !0, !1, wo.Record, (() => Oo.getData(new wp)), wp)].concat(super.attributesToDeclare())
        }
    };
    Ep = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], Ep);
    let Ip = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, wo.Boolean, (() => xo(wo.Boolean))), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    var Ap;
    Ip = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], Ip);
    let Np = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("FileName", "fileNameAttr", "FileName", !1, !1, wo.Text, (() => xo(wo.Text))), this.attr("FileContent", "fileContentAttr", "FileContent", !1, !1, wo.BinaryData, (() => xo(wo.BinaryData))), this.attr("MimeType", "mimeTypeAttr", "MimeType", !1, !1, wo.Text, (() => xo(wo.Text)))].concat(super.attributesToDeclare())
        }
    };
    Np = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], Np);
    let Sp = Ap = class extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Attachment", "attachmentAttr", "Attachment", !1, !1, wo.Record, (() => Oo.getData(new Np)), Np)].concat(Fo.attributesToDeclare())
        }
    };
    Sp._isAnonymousRecord = !0, Sp.fromStructure = function(e) {
        return new Ap(new Ap.RecordClass({
            attachmentAttr: Oo.getData(e)
        }))
    }, Sp = Ap = s([e => {
        const t = e;
        void 0 !== t.init && t.init()
    }], Sp);
    class Dp extends Vo {
        constructor(e) {
            super(e)
        }
    }
    Dp.itemType = Np;
    class Rp extends Vo {
        constructor(e) {
            super(e)
        }
    }
    Rp.itemType = Sp;
    var Cp = Object.freeze({
        __proto__: null,
        get AttachmentRec() {
            return Np
        },
        get AttachmentRecord() {
            return Sp
        },
        AttachmentList: Dp,
        AttachmentRecordList: Rp,
        get ChangePasswordFailureReasonRec() {
            return ap
        },
        get ChangePasswordResultRec() {
            return op
        },
        get FinishUserRegistrationFailureReasonRec() {
            return lp
        },
        get PasswordComplexityPolicyRec() {
            return up
        },
        get PasswordValidationResultRec() {
            return cp
        },
        get FinishUserRegistrationResultRec() {
            return dp
        },
        get UpdateUserFailureReasonRec() {
            return hp
        },
        get UpdateUserResultRec() {
            return gp
        },
        get UserInfoRec() {
            return mp
        },
        get UserLoginFailureReasonRec() {
            return pp
        },
        get UserLoginResultRec() {
            return fp
        },
        get StartUserRegistrationResultRec() {
            return yp
        },
        get StartUserRegistrationFailureReasonRec() {
            return vp
        },
        get UserUpdateInfoRec() {
            return bp
        },
        get HasRoleResultRec() {
            return Tp
        },
        get FinishResetPasswordResultRec() {
            return Ep
        },
        get FinishResetPasswordFailureReasonRec() {
            return wp
        },
        get StartResetPasswordResultRec() {
            return Ip
        }
    });
    const xp = "data-os-finished",
        Lp = "ScriptsManager",
        Op = new Map;
    let _p = !1,
        Mp = null;

    function Up(e) {
        return e.replace(/.*\//, "").replace(/(.*)__.*/, "$1")
    }

    function Fp(e, t) {
        const r = Up(e),
            n = di(r, void 0, t);
        null == n || n.setAttribute("code.function", r), null == n || n.setAttribute("outsystems.function.type", "REQUIRED_SCRIPT");
        const i = null == t ? void 0 : t.getContext().attributes["outsystems.function.key"];
        i && (null == n || n.setAttribute("outsystems.function.owner.key", i));
        const s = null == t ? void 0 : t.getContext().attributes["code.function"];
        return s && (null == n || n.setAttribute("outsystems.function.owner.name", s)), n
    }

    function $p(e, {
        parentSpan: t,
        dom: r = document
    } = {}) {
        Pp("Adding script", e),
            function() {
                if (_p) return;
                _p = !0, Object.defineProperty(define, "amd", {
                    get: Vp.bind(this, define.amd),
                    configurable: !0
                })
            }();
        const n = Op.get(e);
        if (n) return Pp("Script already added", e), n.promise;
        const i = Fp(e, t),
            s = r.createElement("script");
        s.async = !1, s.setAttribute("src", e), s.setAttribute(xp, "false");
        const a = new Promise(((t, n) => {
            const a = () => {
                s.setAttribute(xp, "true"), null == i || i.end()
            };
            s.onerror = s.onabort = t => {
                a(), n(`Error adding script '${e}' to document '${r.baseURI}'`)
            }, s.onload = r => {
                Pp("Script added", e), a(), t(r)
            }
        }));
        return (null == Mp ? void 0 : Mp.domElement.parentNode) ? Mp.domElement.parentNode.insertBefore(s, Mp.domElement.nextSibling) : r.head.appendChild(s), null == i || i.activate(), Op.set(e, {
            promise: a,
            domElement: s
        }), Mp = Op.get(e), a
    }

    function Pp(e, t) {
        const r = jt(document.baseURI);
        ti(Lp, `${e} '${t}' : document '${r}'`)
    }

    function Vp(e) {
        const t = document.currentScript;
        if (!(null == t ? void 0 : t.hasAttribute(xp))) return e
    }
    var Bp = Object.freeze({
        __proto__: null,
        clearScripts: function() {
            Op.clear(), Mp = null
        },
        getScriptName: Up,
        createScriptSpan: Fp,
        addScript: $p,
        scheduleCustomJsLoading: function(e, t, {
            parentSpan: r,
            dom: n = document
        } = {}) {
            return Promise.all(e.map((e => $p(e, {
                parentSpan: r,
                dom: n
            }).catch(t))))
        }
    });
    const kp = new sl("DuplicatedList", "duplicatedListOut"),
        zp = new sl("FilteredList", "filteredListOut"),
        Hp = new sl("DistinctList", "distinctListOut"),
        jp = new il("ExternalLoginURL", "externalLoginURLOut"),
        qp = new sl("UserLoginResult", "userLoginResultOut"),
        Gp = new il("ExternalLogoutURL", "externalLogoutURLOut"),
        Wp = new sl("PasswordComplexityPolicy", "passwordComplexityPolicyOut"),
        Kp = new sl("PasswordValidationResult", "passwordValidationResultOut");
    new sl("ResetPasswordResult", "resetPasswordResultOut");
    const Jp = new il("IsExternalUser", "isExternalUserOut"),
        Yp = new sl("RegistrationResult", "registrationResultOut"),
        Xp = new sl("ChangePasswordResult", "changePasswordResultOut");
    new sl("UpdateUserResult", "updateUserResultOut");
    const Qp = new sl("UserInfo", "userInfoOut"),
        Zp = new sl("FinishResetPasswordResult", "finishResetPasswordResultOut");
    class ef {
        constructor() {}
        getCurrentRowNumber(e) {
            return 0
        }
        setCurrentRowNumber(e, t) {}
        isBeingIterated(e) {
            return !1
        }
        registerIterationStart(e) {}
        registerIterationEnd(e) {}
        getIterator(e) {
            return null
        }
        clone() {
            return this
        }
    }

    function tf(e, t, r) {
        if (t.isBeingIterated(e)) throw new Error("List is being iterated: " + r + " is not allowed")
    }

    function rf(e, t, r, n) {
        tf(e, t, r);
        try {
            return t.registerIterationStart(e), n()
        } finally {
            t.registerIterationEnd(e)
        }
    }

    function nf(e) {
        return e ? e.iterationContext : new ef
    }
    class sf extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Result", "resultOut", "resultOut", !0, !0, wo.Boolean, (() => {}))].concat(super.attributesToDeclare())
        }
    }
    sf._constructor = void sf.init();
    class af extends Fo {
        constructor(e, t) {
            super(e, t)
        }
        static attributesToDeclare() {
            return [this.attr("Position", "positionOut", "positionOut", !0, !0, wo.Integer, (() => {}))].concat(super.attributesToDeclare())
        }
    }

    function of(e) {
        const r = Ye(e),
            n = jt(e.message);
        switch (ii("Login SystemAction", n, e.errorCode, e, t.Visibility.Internal), e.errorCode) {
            case "OS-CLRT-40109":
                return new We.InvalidLoginException("Identity provider configurations missing.", r);
            case "OS-ID-BIZ-40021":
                return new We.InvalidLoginException("Error retrieving token from identity provider.", r);
            default:
                return new We.InvalidLoginException("Login Failed.", r)
        }
    }

    function lf(e, t) {
        const r = e instanceof Error ? e.message : e;
        fi({
            category: "SystemAction",
            clientMessage: `Error in ${t}: ${"string"==typeof r?r:"Unknown error"}`,
            internalMessage: `Error in ${t}`,
            errorCode: "OS-CLRT-00000",
            errorObj: e instanceof Error ? e : void 0
        })
    }

    function uf(e, r, n) {
        const i = di(e, t.Visibility.External);
        null == i || i.setAttribute("code.function", e), null == i || i.setAttribute("outsystems.function.key", r), null == i || i.setAttribute("outsystems.function.owner.name", "(System)"), null == i || i.setAttribute("outsystems.function.owner.key", "478870b9-2d60-4f73-9eb3-7cd8b994a737"), null == i || i.setAttribute("outsystems.function.type", "CLIENT_SYSTEM_ACTION");
        try {
            return n(i)
        } finally {
            null == i || i.end()
        }
    }
    af._constructor = void af.init();
    var cf = Object.freeze({
        __proto__: null,
        listAppend: function(e, t, r) {
            return uf("ListAppend", "aa5b021e-e937-4b80-a2b3-c95b4339a11d", (() => {
                try {
                    const n = nf(r);
                    tf(e, n, "append"), e.append(t)
                } catch (e) {
                    throw lf(e, "listAppend"), e
                }
            }))
        },
        listClear: function(e, t) {
            return uf("ListClear", "c534e5bd-7032-4d4c-97e1-abbf1dee3fbf", (() => {
                try {
                    const r = nf(t);
                    tf(e, r, "clear"), e.clear(), r.setCurrentRowNumber(e, 0)
                } catch (e) {
                    throw lf(e, "listClear"), e
                }
            }))
        },
        listInsert: function(e, t, r, n) {
            return uf("ListInsert", "6c6663d0-5b99-492d-80a5-284def1ceb8c", (() => {
                try {
                    const i = nf(n);
                    tf(e, i, "insert"), e.insert(r, t);
                    const s = i.getCurrentRowNumber(e);
                    e.length > 1 && r <= s && i.setCurrentRowNumber(e, s + 1)
                } catch (e) {
                    throw lf(e, "listInsert"), e
                }
            }))
        },
        listRemove: function(e, t, r) {
            return uf("ListRemove", "9a0ebe10-cdee-4774-9179-e3c439bb0d3a", (() => {
                try {
                    const n = nf(r);
                    tf(e, n, "remove");
                    const i = 1 === e.length;
                    let s;
                    i && (s = e.getItem(0)), e.remove(t), i && (e.emptyListItem = s);
                    const a = n.getCurrentRowNumber(e);
                    t < a ? n.setCurrentRowNumber(e, a - 1) : t === e.length && n.setCurrentRowNumber(e, Math.max(0, e.length - 1))
                } catch (e) {
                    throw lf(e, "listRemove"), e
                }
            }))
        },
        listAppendAll: function(e, t, r) {
            return uf("ListAppendAll", "cfed0293-97ed-42f7-8d5a-5a2582ecb1da", (() => {
                try {
                    const n = nf(r);
                    tf(e, n, "appendAll"), e.appendAll(t)
                } catch (e) {
                    throw lf(e, "listAppendAll"), e
                }
            }))
        },
        listDuplicate: function(e, t) {
            return uf("ListDuplicate", "dbe15950-87da-4517-88b4-14c83bbe7d94", (() => {
                try {
                    const r = nf(t);
                    tf(e, r, "duplicate");
                    const n = new(kp.getType(e.constructor));
                    return n.duplicatedListOut = e.clone(), n
                } catch (e) {
                    throw lf(e, "listDuplicate"), e
                }
            }))
        },
        listDistinct: function(e, t) {
            return uf("ListDistinct", "b54c6849-3ce4-455a-af15-ad7a37c9899f", (() => {
                try {
                    const r = nf(t);
                    return rf(e, r, "distinct", (() => {
                        const t = new(Hp.getType(e.constructor));
                        return t.distinctListOut = e.distinct(), t
                    }))
                } catch (e) {
                    throw lf(e, "listDistinct"), e
                }
            }))
        },
        listAll: function(e, t, r) {
            return uf("ListAll", "22f2c626-25d5-4457-bbe7-94261470862e", (() => {
                try {
                    const n = nf(r);
                    return rf(e, n, "all", (() => {
                        const r = new sf;
                        return r.resultOut = e.all(t), r
                    }))
                } catch (e) {
                    throw lf(e, "listAll"), e
                }
            }))
        },
        listAny: function(e, t, r) {
            return uf("ListAny", "d562e8a9-e680-48d3-8274-1e7e5437e4f8", (() => {
                try {
                    const n = nf(r);
                    return rf(e, n, "any", (() => {
                        const r = new sf;
                        return r.resultOut = e.any(t), r
                    }))
                } catch (e) {
                    throw lf(e, "listAny"), e
                }
            }))
        },
        listFilter: function(e, t, r) {
            return uf("ListFilter", "5137c152-4d59-48f6-b86e-b6b8e7b1e160", (() => {
                try {
                    const n = nf(r);
                    return rf(e, n, "filter", (() => {
                        const r = new(zp.getType(e.constructor));
                        return r.filteredListOut = e.filter(t), r
                    }))
                } catch (e) {
                    throw lf(e, "listFilter"), e
                }
            }))
        },
        listSort: function(e, t, r, n) {
            return uf("ListSort", "c7db4ad0-51cc-44e5-aa36-50546face388", (() => {
                try {
                    const i = nf(n);
                    return rf(e, i, "sort", (() => {
                        e.sort(t, r)
                    }))
                } catch (e) {
                    throw lf(e, "listSort"), e
                }
            }))
        },
        listIndexOf: function(e, t, r) {
            return uf("ListIndexOf", "763a5d96-a42e-49b6-8129-b46525912667", (() => {
                try {
                    const n = nf(r);
                    return rf(e, n, "indexOf", (() => {
                        const r = new af;
                        return r.positionOut = e.indexOf(t), r
                    }))
                } catch (e) {
                    throw lf(e, "listIndexOf"), e
                }
            }))
        },
        requireScript: function(e, t) {
            return uf("RequireScript", "388d4655-dd1c-4c5c-8d46-f420d0fe02a1", (t => {
                try {
                    return $p(dn.getVersionedUrl(e), {
                        parentSpan: t
                    })
                } catch (e) {
                    throw lf(e, "requireScript"), e
                }
            }))
        },
        logMessage: function(e, r, n) {
            return uf("LogMessage", "8c126211-5b78-442b-8a4d-fc2f72d10ef2", (() => {
                ri(r, e, t.Visibility.Client)
            }))
        },
        setCurrentLocale: function(t, r, n = Qt) {
            return uf("SetCurrentLocale", "f2708145-60c0-49dc-9a1a-8b0f1fae5dce", (() => {
                try {
                    const r = n.resolve(e.ServiceNames.LocaleService);
                    if (!r) {
                        const e = new Error("Undefined locale service: can't set current locale.");
                        throw lf(e, "setCurrentLocale"), e
                    }
                    r.setCurrentLocale(t)
                } catch (e) {
                    throw lf(e, "setCurrentLocale"), e
                }
            }))
        },
        getExternalLoginURL: function(t, r, n) {
            return a(this, arguments, void 0, (function*(t, r, n, i = Tn, s = Qt.resolve(e.ServiceNames.AuthConfigsManager)) {
                return uf("GetExternalLoginURL", "da6adf2c-ff63-4d63-a90e-a58819b503eb", (() => a(this, void 0, void 0, (function*() {
                    const e = "" === t ? void 0 : t,
                        n = new(jp.getType(wo.Text)),
                        [a] = s.readAuthConfigs(r);
                    if (!a) {
                        const e = new Error(`The given identity provider '${r}' does not exist.`);
                        throw lf(e, "getExternalLoginURL"), e
                    }
                    return n.externalLoginURLOut = yield i({
                        callbackUrl: e,
                        authConfigs: r ? Object.assign(Object.assign({}, a.configs), {
                            identityProvider: a.kc_hint
                        }) : void 0
                    }), n
                }))))
            }))
        },
        login: function(e, t, r, i) {
            return a(this, arguments, void 0, (function*(e, t, r, i, s = En) {
                return uf("Login", "477c9f29-36c5-42a9-b910-3e5d70c7427e", (() => a(this, void 0, void 0, (function*() {
                    const i = new(qp.getType(fp));
                    try {
                        i.userLoginResultOut.userIdAttr = yield s({
                            username: e,
                            password: t,
                            persistLogin: r
                        }), i.userLoginResultOut.successAttr = !0
                    } catch (e) {
                        const t = e;
                        if (i.userLoginResultOut.userIdAttr = "", i.userLoginResultOut.successAttr = !1, i.userLoginResultOut.retryAfterSecondsAttr = 10, t.name === n.FailureReasons.InvalidCredentials) i.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr = !0;
                        else {
                            if (t.name !== n.FailureReasons.TooManyFailedAttempts) throw of(t);
                            i.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr = !0
                        }
                    }
                    return i
                }))))
            }))
        },
        logout: function(e, t) {
            return a(this, arguments, void 0, (function*(e, t, r = In) {
                return uf("Logout", "41ac3c1a-dffd-4b4f-acc0-fa439a975601", (() => r({
                    callbackUrl: "string" == typeof e ? e : ""
                })))
            }))
        },
        getExternalLogoutURL: function(e, t) {
            return a(this, arguments, void 0, (function*(e, t, r = An) {
                return uf("GetExternalLogoutURL", "c5bd52b6-817c-4268-9d9b-7d2bfe7228fe", (() => a(this, void 0, void 0, (function*() {
                    const t = "" === e ? void 0 : e,
                        n = new(Gp.getType(wo.Text));
                    return n.externalLogoutURLOut = yield r({
                        callbackUrl: t
                    }), n
                }))))
            }))
        },
        getPasswordComplexityPolicy: function(e, t = Rn) {
            return uf("GetPasswordComplexityPolicy", "dc6941b3-7f13-4266-92a7-afc438918f3f", (() => {
                const e = new(Wp.getType(up)),
                    r = t();
                return e.passwordComplexityPolicyOut.minimumLengthAttr = r.minimumLength, e.passwordComplexityPolicyOut.lowerCaseLetterRequiredAttr = r.lowerCaseLetterRequired, e.passwordComplexityPolicyOut.upperCaseLetterRequiredAttr = r.upperCaseLetterRequired, e.passwordComplexityPolicyOut.numberRequiredAttr = r.numberRequired, e.passwordComplexityPolicyOut.specialCharacterRequiredAttr = r.specialCharacterRequired, e
            }))
        },
        validatePasswordComplexity: function(e, t, r = Cn) {
            return uf("ValidatePasswordComplexity", "e11739ec-bce8-4f6c-a952-886e102ecac5", (() => {
                const t = new(Kp.getType(cp)),
                    n = r({
                        password: e
                    });
                return t.passwordValidationResultOut.isValidAttr = n.isValid, t.passwordValidationResultOut.missingMinimumLengthAttr = n.missingMinimumLength, t.passwordValidationResultOut.missingUpperCaseLetterAttr = n.missingUpperCaseLetter, t.passwordValidationResultOut.missingLowerCaseLetterAttr = n.missingLowerCaseLetter, t.passwordValidationResultOut.missingNumberAttr = n.missingNumber, t.passwordValidationResultOut.missingSpecialCharacterAttr = n.missingSpecialCharacter, t
            }))
        },
        finishResetPassword: function(e, t, r, i) {
            return a(this, arguments, void 0, (function*(e, t, r, i, s = xn) {
                return uf("FinishResetPassword", "4c9a2d55-1e48-4a73-b6dd-197773173c84", (() => a(this, void 0, void 0, (function*() {
                    const i = new(Zp.getType(Ep));
                    if (!t) return i.finishResetPasswordResultOut.successAttr = !1, i.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidVerificationCodeAttr = !0, i;
                    if (!e) return i.finishResetPasswordResultOut.successAttr = !1, i.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidEmailAttr = !0, i;
                    try {
                        yield s({
                            username: e,
                            resetToken: t,
                            newPassword: r
                        }), i.finishResetPasswordResultOut.successAttr = !0
                    } catch (e) {
                        const t = e;
                        i.finishResetPasswordResultOut.successAttr = !1;
                        const r = i.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr;
                        t.name === n.FailureReasons.PasswordComplexityPolicyFailed ? r.passwordComplexityPolicyFailedAttr = !0 : t.name === n.FailureReasons.InvalidToken ? r.invalidVerificationCodeAttr = !0 : t.name === n.FailureReasons.InvalidCredentials && (r.invalidEmailAttr = !0)
                    }
                    return i
                }))))
            }))
        },
        isExternalUser: function(e, t = Ln) {
            return uf("IsExternalUser", "5365bc0e-70f6-4e7f-90bf-6c6e12da81bb", (() => {
                const e = new(Jp.getType(wo.Boolean));
                return e.isExternalUserOut = t(), e
            }))
        },
        finishUserRegistration: function(e, t, r, i) {
            return a(this, arguments, void 0, (function*(e, t, r, i, s = On, o = Sn) {
                return uf("FinishUserRegistration", "44a8850b-2e2d-4f19-9ea4-e5f40a050b5b", (() => a(this, void 0, void 0, (function*() {
                    const i = new(Yp.getType(dp));
                    if (!r) return i.registrationResultOut.successAttr = !1, i.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidVerificationCodeAttr = !0, i;
                    if (!e) return i.registrationResultOut.successAttr = !1, i.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidEmailAttr = !0, i;
                    try {
                        yield s({
                            username: e,
                            password: t,
                            temporaryPassword: r
                        }), i.registrationResultOut.successAttr = !0, i.registrationResultOut.userIdAttr = o()
                    } catch (e) {
                        const t = e;
                        i.registrationResultOut.successAttr = !1, t.name === n.FailureReasons.PasswordComplexityPolicyFailed ? i.registrationResultOut.finishUserRegistrationFailureReasonAttr.passwordComplexityPolicyFailedAttr = !0 : t.name === n.FailureReasons.InvalidToken ? i.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidVerificationCodeAttr = !0 : t.name === n.FailureReasons.InvalidCredentials && (i.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidEmailAttr = !0)
                    }
                    return i
                }))))
            }))
        },
        changePassword: function(e, t, r, i) {
            return a(this, arguments, void 0, (function*(e, t, r, i, s = _n) {
                return uf("ChangePassword", "b17b5077-e564-4145-b640-9fcb359cbb07", (() => a(this, void 0, void 0, (function*() {
                    const i = new(Xp.getType(op));
                    try {
                        yield s({
                            username: e,
                            oldPassword: r,
                            newPassword: t
                        }), i.changePasswordResultOut.successAttr = !0
                    } catch (e) {
                        const t = e;
                        i.changePasswordResultOut.successAttr = !1, t.name === n.FailureReasons.PasswordComplexityPolicyFailed ? i.changePasswordResultOut.changePasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr = !0 : t.name === n.FailureReasons.InvalidCredentials ? i.changePasswordResultOut.changePasswordFailureReasonAttr.invalidCredentialsAttr = !0 : t.name === n.FailureReasons.TooManyFailedAttempts && (i.changePasswordResultOut.changePasswordFailureReasonAttr.tooManyFailedAttemptsAttr = !0)
                    }
                    return i
                }))))
            }))
        },
        getUserProfile: function(e) {
            return a(this, arguments, void 0, (function*(e, t = Mn) {
                return uf("GetUserProfile", "a4d7f4ef-399a-4294-8ab4-cf1437699fe3", (() => a(this, void 0, void 0, (function*() {
                    const e = new(Qp.getType(mp)),
                        r = yield t();
                    return e.userInfoOut.emailAttr = r.username, e.userInfoOut.nameAttr = r.name, e.userInfoOut.photoURLAttr = r.pictureUrl, e
                }))))
            }))
        }
    });
    var df, hf = Object.freeze({
            __proto__: null,
            StringUtils: class {
                static safeParseInt(e) {
                    let t = e;
                    return e && !isNaN(Number(e)) && (t = parseInt(e, 10)), t
                }
            }
        }),
        gf = Object.freeze({
            __proto__: null
        });
    ! function(e) {
        e[e.Normal = 0] = "Normal", e[e.AtFunctionReturn = 1] = "AtFunctionReturn", e[e.BetweenAssignments = 2] = "BetweenAssignments"
    }(df || (df = {}));
    const mf = "ccid",
        pf = "dbg-stop",
        ff = "dbg-bkp";
    var vf, yf;
    ! function(e) {
        e[e.StepOver = 0] = "StepOver", e[e.StepInto = 1] = "StepInto", e[e.StepOut = 2] = "StepOut", e[e.Continue = 3] = "Continue", e[e.ContinueToHere = 4] = "ContinueToHere", e[e.None = 5] = "None"
    }(vf || (vf = {})),
    function(e) {
        e[e.Unprepared = 0] = "Unprepared", e[e.WaitingForClient = 1] = "WaitingForClient", e[e.Prepared = 2] = "Prepared"
    }(yf || (yf = {}));
    class bf {
        constructor(e = null, t = null, r = null, n = null) {
            this.moduleKey = e, this.objectKey = t, this.compoundKey = r, this.debuggerHash = n
        }
        init(e) {
            if (!e) return;
            const t = e.split(bf.SeparatorChar);
            this.moduleKey = t[0], this.objectKey = t[1], this.compoundKey = t.length > 2 && t[2] ? t[2] : null, this.debuggerHash = t.length > 3 && t[3] ? t[3] : null
        }
        static parse(e) {
            if (!e) return null;
            try {
                const t = new bf;
                return t.init(e), t
            } catch (e) {
                return null
            }
        }
        equals(e) {
            return !!e && (e.moduleKey === this.moduleKey && e.objectKey === this.objectKey)
        }
        toString(e = !1) {
            var t;
            return e ? this.moduleKey + bf.SeparatorChar + (this.objectKey || "") + bf.SeparatorChar + (this.compoundKey || "") + bf.SeparatorChar + (this.debuggerHash || "") : this.moduleKey + bf.SeparatorChar + (null !== (t = this.objectKey) && void 0 !== t ? t : "")
        }
    }
    bf.SeparatorChar = ":";
    class Tf {
        constructor(e = vf.None, t = -1) {
            this._commandType = e, this._stackLevel = t
        }
        resetCommandState() {
            this._commandType = vf.None, this._stackLevel = -1
        }
        get commandType() {
            return this._commandType
        }
        set commandType(e) {
            this._commandType = e
        }
        get stackLevel() {
            return this._stackLevel
        }
        set stackLevel(e) {
            this._stackLevel = e
        }
    }
    class wf {
        constructor(e, t, r, n, i) {
            this.elementKey = e, this.moduleName = t, this.elementName = r, this.elementType = n, this.varBag = i, this.currentBreakpoint = null, this.previousBreakpoint = null, this.breakpointType = null, this.extraInfo = null, this.functionLeft = ""
        }
        refreshLocalState(e, t, r) {
            this.previousBreakpoint = this.currentBreakpoint, this.currentBreakpoint = e, this.breakpointType = t, this.extraInfo = r
        }
    }
    class Ef {
        constructor() {
            this.callStack = new Array, this._command = new Tf, this._continueToHereBreakpoint = void 0, this._stopImmediately = !1
        }
        pushCallOnStack(e, t, r, n, i) {
            this.callStack.push(new wf(e, t, r, n, i))
        }
        popCallOnStack() {
            const e = this.callStack.pop(),
                t = this.peekLastCallOnStack();
            return this.callStack.length > 0 && t && (t.functionLeft = null == e ? void 0 : e.elementName), e
        }
        peekLastCallOnStack() {
            if (!(this.callStack.length <= 0)) return this.callStack[this.callStack.length - 1]
        }
        getCallOnStack(e) {
            if (!(e < 0 || e >= this.callStack.length)) return this.callStack[e];
            If("The received stack level is not valid. Received '" + e + "', current thread stack length '" + this.callStack.length + "'")
        }
        refreshLastCallOnStack(e, t, r) {
            var n;
            null === (n = this.peekLastCallOnStack()) || void 0 === n || n.refreshLocalState(e, t, r)
        }
        set command(e) {
            this._command = e
        }
        get command() {
            return this._command
        }
        get stackLevel() {
            return this.callStack.length
        }
        get stopImmediately() {
            return this._stopImmediately
        }
        set stopImmediately(e) {
            this._stopImmediately = e || !1
        }
        get continueToBreakpoint() {
            return this._continueToHereBreakpoint
        }
        set continueToBreakpoint(e) {
            this._continueToHereBreakpoint = e
        }
        get threadStartName() {
            return this._threadStartName || ""
        }
        set threadStartName(e) {
            this._threadStartName = e
        }
        getThreadStack() {
            return this.callStack.map((e => {
                var t;
                return {
                    currentBreakpoint: null !== e.currentBreakpoint && void 0 !== e.currentBreakpoint ? e.currentBreakpoint.toString(!0) : null,
                    previousBreakpoint: null !== e.previousBreakpoint && void 0 !== e.previousBreakpoint ? e.previousBreakpoint.toString(!0) : null,
                    breakpointType: null !== (t = e.breakpointType) && void 0 !== t ? t : df.Normal,
                    extraInfo: e.extraInfo,
                    elementKey: null !== e.elementKey && void 0 !== e.elementKey ? e.elementKey.toString(!0) : null,
                    elementName: e.elementName,
                    elementType: e.elementType,
                    functionLeft: e.functionLeft,
                    moduleName: e.moduleName
                }
            }))
        }
    }

    function If(e, t) {
        ti("Debugger", e, t)
    }
    const Af = /^([0-9]+)$/,
        Nf = /\[[^\]]*[^0-9\]]+[^\]]*\]/;
    class Sf {
        constructor() {
            this.isInSession = !1, this.breakpoints = new Map, this.callContexts = new Map, this.initializationStatus = yf.Unprepared, this._pauseOnAllExceptions = !1, this.exceptionsMap = new Map, this.pausedOnAnException = !1, this.allowedModules = new Map
        }
        get BreakpointType() {
            return df
        }
        isPausedOnException() {
            return this.pausedOnAnException
        }
        get version() {
            return 3
        }
        isSessionActive() {
            return this.isInSession
        }
        startSession() {
            if (this.isInSession) return void If("Debugger is already in session");
            this.pendingInitializationHandler && (this.initializationStatus = yf.Prepared, this.pendingInitializationHandler(), this.pendingInitializationHandler = null), this.isInSession = !0;
            const t = Qt.resolve(e.ServiceNames.DebuggerHttpClient);
            t && Qt.register(e.ServiceNames.HttpClient, (() => t))
        }
        endSession() {
            if (!this.isInSession) return void If("Can't end an nonexisting session");
            this.isInSession = !1;
            const t = Qt.resolve(e.ServiceNames.NonDebuggerHttpClient);
            t && Qt.register(e.ServiceNames.HttpClient, (() => t))
        }
        addBreakpoint(e) {
            null !== bf.parse(e) ? this.breakpoints.get(e) ? If(`Breakpoint with id '${e}' already registered`) : this.breakpoints.set(e, !0) : If(`Cannot convert '${e}' to a BreakpointId`)
        }
        addBreakpoints(e) {
            e.forEach((e => this.addBreakpoint(e)))
        }
        allowBreakpointsFromModule(e) {
            this.allowedModules.get(e) ? If(`Application with key '${e}' is already allowed`) : this.allowedModules.set(e, !0)
        }
        removeBreakpoint(e) {
            null !== bf.parse(e) ? this.breakpoints.delete(e) || If(`Breakpoint with id '${e}'  isn't registered`) : If(`Cannot convert '${e}' to a BreakpointId`)
        }
        clearBreakpoints() {
            this.breakpoints.clear()
        }
        push(e, t, r, n, i, s) {
            if (!this.isInSession) return;
            const a = bf.parse(e);
            if (!a) return void If(`Error when parsing breakpointId '${e}'`);
            let o = this.callContexts.get(i);
            o || (o = new Ef, this.callContexts.set(i, o)), o.pushCallOnStack(a, t, r, n, s)
        }
        pop(e, t) {
            if (!this.isInSession) return;
            const r = bf.parse(e);
            if (!r) return void If(`Error when parsing breakpointId '${e}'`);
            const n = this.callContexts.get(t);
            if (!n) return void If(`There is no action to end to callContextId '${t.toString()}'`);
            const i = n.peekLastCallOnStack();
            (null == i ? void 0 : i.elementKey.equals(r)) ? (n.popCallOnStack(), n.stackLevel <= 0 && (this.callContexts.delete(t), this.exceptionsMap.delete(t))) : If(`Action to end didn't match to current running action. Running action key: '${null==i?void 0:i.elementKey.toString()}', tried to end: '${r.toString()}'`)
        }
        stepInto(e) {
            this.fillCommandByCallContextId(e, vf.StepInto)
        }
        stepOver(e) {
            this.fillCommandByCallContextId(e, vf.StepOver)
        }
        stepOut(e) {
            this.fillCommandByCallContextId(e, vf.StepOut)
        }
        continue (e) {
            this.fillCommandByCallContextId(e, vf.Continue)
        }
        continueToHere(e, t) {
            const r = bf.parse(e);
            if (!r) return void If(`Error when parsing breakpointId '${e}'`);
            this.fillCommandByCallContextId(t, vf.ContinueToHere);
            const n = this.callContexts.get(t);
            n && (n.continueToBreakpoint = r)
        }
        pauseOnAllExceptions(e) {
            this._pauseOnAllExceptions = e
        }
        fillCommandByCallContextId(e, t) {
            if (!this.isInSession) return void If("Cannot preform debug actions out of a session context");
            const r = this.callContexts.get(e);
            r ? (r.command.commandType = t, r.command.stackLevel = r.stackLevel) : If(`No match for callContextId '${e}'`)
        }
        handleFunctionCall(e, t, r) {
            var n;
            const i = e();
            if (!this.isInSession) return i;
            const s = this.callContexts.get(r);
            if (!s) return If(`There is no callContext registered with Id '${r}'`), i;
            const a = s.getCallOnStack(s.stackLevel - 1),
                o = null !== (n = null == a ? void 0 : a.currentBreakpoint) && void 0 !== n ? n : null == a ? void 0 : a.elementKey;
            return o && this.handleBreakpoint(o.toString(!0), r, df.AtFunctionReturn, Df.to(i, null == a ? void 0 : a.varBag.callContext, null, null, t)), i
        }
        handleBreakpoint(e, t, r = df.Normal, n) {
            if (!this.isInSession) return !0;
            const i = bf.parse(e);
            if (!i) return If(`Error when parsing breakpointId '${e}'`), !0;
            const s = this.callContexts.get(t);
            if (!s) return If(`Trying to handle breakpoint with id '${e}', \n                but there is no callContext registered with Id '${t}'`), !0;
            if (s.refreshLastCallOnStack(i, r, n), !this.allowedModules.get(i.moduleKey)) return ti("Debugger", `Skipping breakpoint '${e}' because breakpoints from app with key '${i.moduleKey}' are to be ignored.`), !0;
            if (s.stopImmediately || this.breakpoints.get(e) && s.command.commandType !== vf.ContinueToHere && r === df.Normal) return s.stopImmediately = !1, this.resetStateAndCallDebugger(s, t), !0;
            switch (s.command.commandType) {
                case vf.StepInto:
                    this.resetStateAndCallDebugger(s, t);
                    break;
                case vf.StepOut:
                    s.stackLevel < s.command.stackLevel && this.resetStateAndCallDebugger(s, t);
                    break;
                case vf.StepOver:
                    s.stackLevel <= s.command.stackLevel && r === df.Normal && this.resetStateAndCallDebugger(s, t);
                    break;
                case vf.ContinueToHere:
                    i.equals(s.continueToBreakpoint) && r === df.Normal && (s.continueToBreakpoint = void 0, this.resetStateAndCallDebugger(s, t))
            }
            return !0
        }
        resetStateAndCallDebugger(e, t) {
            e.command.resetCommandState(), this.callDebugger(t)
        }
        handleException(e, r) {
            if (!this.isInSession) return;
            if (Ze(e)) return;
            const n = this.callContexts.get(r),
                i = Je(e);
            if (!n) return void If(`Trying to handle Exception with message '${i}', but there is no callContext registered with Id '${r}'`, t.Visibility.Client);
            if (e !== this.exceptionsMap.get(r) && (this.exceptionsMap.set(r, e), this._pauseOnAllExceptions)) {
                this.pausedOnAnException = !0;
                try {
                    this.callDebugger(r)
                } finally {
                    this.pausedOnAnException = !1
                }
            }
        }
        getExceptionMessage(e) {
            if (!this.getThreadState(e)) return;
            const t = this.exceptionsMap.get(e);
            if (void 0 !== t) return Je(t);
            If(`There is no Exception associated to callContext with Id '${e}'`)
        }
        getThreadState(e) {
            if (!this.isInSession) return void If("Cannot perform debug actions out of a session context");
            const t = this.callContexts.get(e);
            if (t) return t;
            If(`There is no callContext registered with Id '${e}'`)
        }
        getThreadStack(e) {
            const t = this.getThreadState(e);
            if (t) return t.getThreadStack()
        }
        parse(e) {
            return bf.parse(e)
        }
        initialize(t) {
            switch (this.initializationStatus) {
                case yf.WaitingForClient:
                    return Promise.reject("Debugger already waiting for client initialization");
                case yf.Prepared:
                    return Promise.reject("Debugger already initialized")
            }
            return void 0 === t && (t = !!Pr("_waitForClient")), Qt.register(e.ServiceNames.Debugger, (() => this)), new Promise(((e, r) => {
                t && !this.isInSession ? (this.initializationStatus = yf.WaitingForClient, this.pendingInitializationHandler = e) : (this.initializationStatus = yf.Prepared, e())
            }))
        }
        registerMetaInfo(e) {
            this.metaInfoMap || (this.metaInfoMap = new Map);
            for (const t in e) e.hasOwnProperty(t) && !this.metaInfoMap.get(t) && this.metaInfoMap.set(t, e[t])
        }
        getRuntimeExpression(e, t) {
            if (!this.metaInfoMap) return void If("MetaInfo not registered yet.");
            const r = this.metaInfoMap.get(e);
            if (r) return r;
            If(`There is no mapping defined for variable with the key '${e}', that was evaluated in the context of the action with the key '${t}'.`)
        }
        innerEvaluateVariable(e, t, r, n) {
            const i = this.getThreadState(e);
            if (!i) return;
            const s = i.getCallOnStack(t);
            if (!s) return;
            const a = this.getRuntimeExpression(n, r);
            if (!a) return void If(`Failed to get runtime variable expression. CallContextId '${e}', stackLevel '${t}'`);
            let o;
            try {
                o = a.getter(s.varBag, s.varBag.idService)
            } catch (e) {} finally {
                void 0 === o && If(`Couldn't evaluate variable with key '${n}', that was evaluated in the context of the action with key: '${r}' stackLevel: '${t}' callContextId: '${e}'.`)
            }
            return o
        }
        splitPath(e) {
            if (!Nf.test(e)) return e ? e.split(/[.\[\]]/).filter((e => "" !== e)).slice(1) : void 0
        }
        evaluateVariable(e, t, r, n, i, s) {
            if ("" === n && "$return" === i) {
                const r = this.getThreadState(e);
                if (!r) return;
                const n = r.getCallOnStack(t);
                if (!n) return;
                return n.extraInfo
            }
            const a = this.innerEvaluateVariable(e, t, r, n);
            if (void 0 === a) return;
            if (Nf.test(i)) return;
            const o = this.callContexts.get(e),
                l = null == o ? void 0 : o.getCallOnStack(t),
                u = this.getRuntimeExpression(n, r),
                c = this.splitPath(i);
            return Df.to(a, null == l ? void 0 : l.varBag.callContext, c, s, null == u ? void 0 : u.dataType)
        }
        getRequestHeaders(e) {
            if (!this.isInSession) return;
            const t = this.callContexts.get(e);
            if (!t) return void If(`There is no callContext registered with Id '${e}'`);
            const r = {};
            r[mf] = String(e);
            const n = t.command;
            return n && n.commandType === vf.StepInto ? r[pf] = "true" : t.continueToBreakpoint && n.commandType === vf.ContinueToHere && (r[ff] = String(t.continueToBreakpoint)), r
        }
        lookupCaseInsensitive(e, t) {
            const r = t.toLowerCase(),
                n = Object.keys(e).find((e => e.toLowerCase() === r));
            return n ? e[n] : void 0
        }
        processResponseHeaders(e, t) {
            if (!this.isInSession) return;
            const r = this.getThreadState(e);
            if (t && r)
                if ("true" === (this.lookupCaseInsensitive(t, pf) || "").toLowerCase()) r.stopImmediately = !0;
                else if (this.lookupCaseInsensitive(t, ff)) {
                const e = this.lookupCaseInsensitive(t, ff);
                r.command.commandType = vf.ContinueToHere, r.continueToBreakpoint = bf.parse(e)
            } else r.command.commandType === vf.StepInto && (r.command.commandType = vf.Continue)
        }
        getThreadStartName(e) {
            var t;
            return null === (t = this.getThreadState(e)) || void 0 === t ? void 0 : t.threadStartName
        }
        setThreadStartName(e, t) {
            if (!this.isInSession) return;
            if (!this.callContexts) return void If("No call context dictionary initialized yet");
            if (!this.callContexts.get(e)) return void If("No thread state for this context id");
            const r = this.callContexts.get(e);
            r && (r.threadStartName = t)
        }
    }
    var Df;
    ! function(e) {
        function t(e, t) {
            return void 0 === e && (e = null), {
                value: e,
                type: wo[t]
            }
        }
        e.to = function e(r, n, i, s = -1, a) {
            const o = Math.max(-1, (null != s ? s : 0) - 1);
            if (r instanceof Fo) {
                const a = r;
                let l = a.getAttributes();
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), r instanceof Km) {
                        const a = r;
                        if ("HasFetchError" === t) return e(a.hasFetchErrorAttr, n, i, s, wo.Boolean);
                        if ("IsDataFetched" === t) return e(a.isDataFetchedAttr, n, i, s, wo.Boolean)
                    }
                    if (l = l.filter((e => e.name === t)), 0 === l.length) return void If(`No attribute matching the given path '${t}'.`);
                    {
                        const t = l[0];
                        return e(a[t.attrName], n, i, s, t.dataType)
                    }
                }
                if (0 === s) return t(null, wo.Record);
                const u = {};
                for (const t of l) u[t.name] = e(a[t.attrName], n, i, o, t.dataType);
                if (r instanceof Km) {
                    const t = r;
                    delete u.DataFetchStatus, u.IsDataFetched = e(t.isDataFetchedAttr, n, i, s, wo.Boolean), u.HasFetchError = e(t.hasFetchErrorAttr, n, i, s, wo.Boolean)
                }
                return t(u, wo.Record)
            }
            if (r instanceof $o) {
                const a = r;
                let l;
                a.constructor.getItemType && (l = a.constructor.getItemType());
                const u = n.iterationContext.getCurrentRowNumber(a);
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "CurrentRowNumber" === t) return e(u, n, i, s, wo.Integer);
                    if ("Current" === t) return e(a.isEmpty ? a.emptyListItem : a.getItem(u), n, i, s, l);
                    if ("Empty" === t) return e(a.isEmpty, n, i, s, wo.Boolean);
                    if ("Length" === t) return e(a.length, n, i, s, wo.Integer);
                    {
                        const r = Af.exec(t);
                        if (r) {
                            const t = parseInt(r[1], 10);
                            return t >= 0 && t < a.length ? e(a.getItem(t), n, i, s, l) : void If(`Index out of bounds '${t}'.`)
                        }
                        return void If(`No '${t}' attribute on Type 'List'.`)
                    }
                }
                if (0 === s) return t(null, wo.RecordList);
                const c = {
                    CurrentRowNumber: e(u, n, i, o, wo.Integer),
                    Current: e(a.isEmpty ? a.emptyListItem : a.getItem(u), n, i, o, l),
                    Empty: e(a.isEmpty, n, i, o, wo.Boolean),
                    Length: e(a.length, n, i, o, wo.Integer)
                };
                for (let t = 0; t < a.length; t++) c["[" + t + "]"] = e(a.getItem(t), n, i, o, l);
                return t(c, wo.RecordList)
            }
            if (r instanceof qm) {
                if (0 === s) return t(null, wo.Record);
                const a = r;
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "Id" === t) return e(a.idAttr, n, i, s, wo.Text);
                    if (a instanceof Gm) {
                        if ("Valid" === t) return e(a.validAttr, n, i, s, wo.Boolean);
                        if ("ValidationMessage" === t) return e(a.validationMessageAttr, n, i, s, wo.Text)
                    }
                    return void If(`No attribute matching the given path '${t}'.`)
                }
                const l = {
                    Id: e(a.idAttr, n, i, o, wo.Text)
                };
                return a instanceof Gm && (l.Valid = e(a.validAttr, n, i, o, wo.Boolean), l.ValidationMessage = e(a.validationMessageAttr, n, i, o, wo.Text)), t(l, wo.Record)
            }
            return void 0 !== a ? i && i.length > 0 ? void If(`Cannot perform a inner evaluation to a Basic Type. Trying to evaluate '${i[0]}' for a variable of type '${wo[a]}'.`) : function(e, r) {
                switch (r) {
                    case wo.Integer:
                    case wo.Text:
                    case wo.PhoneNumber:
                    case wo.Email:
                    case wo.Boolean:
                        return t(e, r);
                    case wo.LongInteger:
                    case wo.Decimal:
                    case wo.Currency:
                        return t(e.toString(), r);
                    case wo.Date:
                        return t(e.toISODate(), r);
                    case wo.DateTime:
                        return t(e.toString(), r);
                    case wo.Time:
                        return t(e.toISOTime(), r);
                    case wo.BinaryData:
                        return t(e.length, r);
                    case wo.Object:
                        return t(null, r);
                    case wo.Record:
                        return void If("Record is not a basic type");
                    case wo.RecordList:
                        return void If("RecordList is not a basic type");
                    default:
                        return void If(`Unknown data type ${r}`)
                }
            }(r, a) : void If("Variable Type didn't match any case. " + typeof r)
        }
    }(Df || (Df = {}));
    const Rf = "6.18.8";
    Ee("client-runtime-core", Rf);
    ("undefined" != typeof window ? window : global).OutSystemsDebugger = new class extends Sf {
        callDebugger(e) {
            const t = kn(),
                r = t.callContextId;
            try {
                t.callContextId = e;
                debugger
            } finally {
                t.callContextId = r
            }
        }
    };
    var Cf = Object.freeze({
            __proto__: null,
            get CommandType() {
                return vf
            },
            get InitializationStatus() {
                return yf
            },
            BreakpointId: bf,
            DebugCommand: Tf,
            LocalState: wf,
            ThreadState: Ef,
            DebuggerBase: Sf,
            get DebuggerDataConverter() {
                return Df
            },
            Version: Rf
        }),
        xf = Object.freeze({
            __proto__: null
        }),
        Lf = Object.freeze({
            __proto__: null
        });
    ge();
    const Of = "6.18.8";
    Ee("client-runtime-core", Of), e.Application = Em, e.ApplicationInfo = ae, e.Authentication = Vn, e.Authorization = ul, e.BuiltinFunctions = Tu, e.ClientVariables = xf, e.Communication = yo, e.CommunicationHeaders = so, e.Controller = Pd, e.DataConversion = Mu, e.DataTypes = ol, e.DebuggerAPI = Lf, e.DebuggerBase = Cf, e.Entities = Ju, e.ErrorHandling = uc, e.ErrorScreen = Fm, e.EventDispatcher = Uc, e.Exceptions = tt, e.FeedbackMessageService = Tc, e.Flow = Tt, e.Format = Aa, e.IndexedDBSerializer = og, e.IndexedDBUtils = Xg, e.Injector = Qt, e.Interfaces = Rt, e.JSONUtils = jg, e.LanguageResources = Vm, e.LightImmutable = Ca, e.LocaleService = Ag, e.Logger = vi, e.MappingWithDefaultService = gf, e.Model = ep, e.NativeHelper = pr, e.Navigation = hn, e.ObjectExtensions = sp, e.Performance = Gc, e.Public = bd, e.RequireManager = ye, e.ScreenStateCache = Zd, e.ScriptsManager = Bp, e.StorageProvider = He, e.StringUtils = hf, e.SystemActions = cf, e.SystemStructures = Cp, e.TableInfoUtils = Ih, e.TransitionAnimation = c, e.Transitions = E, e.UrlUtils = qt, e.Validation = Sd, e.Version = Of, e.VersionDefinition = Ne, e.WebSQLSerializer = vg, e.WebSQLUtils = rp, e.WidgetNaming = Id, e.runPostInitialization = kd, e.runPreInitialization = Xd, e.useAuthConfigsManager = Pg, e.useBaseApplication = Rg, e.useSettingsManager = mm, e.useVersionsManager = gm, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));