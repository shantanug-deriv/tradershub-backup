(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["OSCommonPlugin"] = factory();
    else
        root["OSCommonPlugin"] = factory();
})(self, () => {
    return /******/ (() => { // webpackBootstrap
        /******/
        "use strict";
        /******/ // The require scope
        /******/
        var __webpack_require__ = {};
        /******/
        /************************************************************************/
        /******/
        /* webpack/runtime/define property getters */
        /******/
        (() => {
            /******/ // define getter functions for harmony exports
            /******/
            __webpack_require__.d = (exports, definition) => {
                /******/
                for (var key in definition) {
                    /******/
                    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: definition[key]
                        });
                        /******/
                    }
                    /******/
                }
                /******/
            };
            /******/
        })();
        /******/
        /******/
        /* webpack/runtime/hasOwnProperty shorthand */
        /******/
        (() => {
            /******/
            __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
            /******/
        })();
        /******/
        /******/
        /* webpack/runtime/make namespace object */
        /******/
        (() => {
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = (exports) => {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                    });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
                /******/
            };
            /******/
        })();
        /******/
        /************************************************************************/
        var __webpack_exports__ = {};
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */
        __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            PluginManager: () => ( /* binding */ PluginManager)
            /* harmony export */
        });
        var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function(receiver, state, kind, f) {
            if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        var _PluginManagerClass_plugin;
        class PluginManagerClass {
            constructor() {
                _PluginManagerClass_plugin.set(this, {});
            }
            createScope(pluginName, onReadyCallback, onDestroyCallback) {
                if (typeof(__classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName]) === "undefined") {
                    __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName] = {};
                }
                let currentScope = __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].activeScope;
                if (currentScope !== undefined) {
                    console.log("Pushing active scope back");
                    __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].previousScope = currentScope;
                    currentScope._isActive = false;
                }
                currentScope = {
                    _isActive: true,
                    _onReadyCallback: onReadyCallback,
                    _onDestroyCallback: onDestroyCallback,
                    newCallback: function(callback) {
                        return function() {
                            if (currentScope._isActive) {
                                return callback(...arguments);
                            }
                            console.log("Ignoring callback called on previous scope");
                        };
                    }
                };
                __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].activeScope = currentScope;
                console.log("About to run _onReady");
                currentScope._onReadyCallback(currentScope);
            };
            destroyScope(pluginName) {
                if (typeof(__classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName]) === "undefined") {
                    return;
                }
                let currentScope = __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].previousScope;
                if (typeof(currentScope) === "undefined") {
                    currentScope = __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].activeScope;
                    __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].activeScope = undefined;
                    console.log("About to run onDestroy for active scope");
                } else {
                    __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].previousScope = undefined;
                    console.log("About to run onDestroy for previous scope");
                }
                if (currentScope) {
                    currentScope._onDestroyCallback(currentScope);
                }
            };
            scope(pluginName) {
                return __classPrivateFieldGet(this, _PluginManagerClass_plugin, "f")[pluginName].activeScope;
            };
        }
        _PluginManagerClass_plugin = new WeakMap();
        const PluginManager = new PluginManagerClass();

        /******/
        return __webpack_exports__;
        /******/
    })();
});