define("AppVersionCheck.controller$CheckAppVersionPlugin", ["exports", "@outsystems/runtime-core-js", "AppVersionCheck.model", "AppVersionCheck.controller", "CommonPlugin.controller", "CommonPlugin.model", "AppVersionCheck.controller$CheckAppVersionPlugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "AppVersionCheck.referencesHealth", "AppVersionCheck.referencesHealth$CommonPlugin", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure"], function(exports, OSRuntimeCore, AppVersionCheckModel, AppVersionCheckController, CommonPluginController, CommonPluginModel, AppVersionCheck_controller_CheckAppVersionPlugin_PluginIsLoadedJS) {
    var OS = OSRuntimeCore;
    AppVersionCheckController.default.checkAppVersionPlugin$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CheckAppVersionPlugin", function(span) {
            if (span) {
                span.setAttribute("code.function", "CheckAppVersionPlugin");
                span.setAttribute("outsystems.function.key", "1417d94b-069c-41eb-8790-2372c6cd14a1");
                span.setAttribute("outsystems.function.owner.name", "AppVersionCheck");
                span.setAttribute("outsystems.function.owner.key", "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
                var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("AppVersionCheck.CheckAppVersionPlugin$outVars"))());
                // Execute Action: IsCordovaDefined
                isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

                if ((isCordovaDefinedVar.value.isLoadedOut)) {
                    pluginIsLoadedJSResult.value = OS.Logger.startActiveSpan("PluginIsLoaded", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "PluginIsLoaded");
                            span.setAttribute("outsystems.function.key", "62da47f4-1803-421d-96ed-ba5116c2784b");
                            span.setAttribute("outsystems.function.owner.name", "AppVersionCheck");
                            span.setAttribute("outsystems.function.owner.key", "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(AppVersionCheck_controller_CheckAppVersionPlugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckAppVersionPlugin", {
                                IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("AppVersionCheck.CheckAppVersionPlugin$pluginIsLoadedJSResult"))();
                                jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    if ((pluginIsLoadedJSResult.value.isAvailableOut)) {
                        // Set Result
                        // IsAvailable = True
                        outVars.value.isAvailableOut = true;
                    } else {
                        // Set Output
                        // IsAvailable = False
                        outVars.value.isAvailableOut = false;
                        // Error.ErrorCode = 2
                        outVars.value.errorOut.errorCodeAttr = "2";
                        // Error.ErrorMessage = "Plugin is not loaded."
                        outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
                    }

                } else {
                    // Set Output
                    // IsAvailable = False
                    outVars.value.isAvailableOut = false;
                    // Error.ErrorCode = 1
                    outVars.value.errorOut.errorCodeAttr = "1";
                    // Error.ErrorMessage = "cordova is not defined"
                    outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = AppVersionCheckController.default;
    AppVersionCheckController.default.constructor.registerVariableGroupType("AppVersionCheck.CheckAppVersionPlugin$pluginIsLoadedJSResult", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    AppVersionCheckController.default.constructor.registerVariableGroupType("AppVersionCheck.CheckAppVersionPlugin$outVars", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure();
        },
        complexType: CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure
    }]);
    AppVersionCheckController.default.clientActionProxies.checkAppVersionPlugin$Action = function() {
        return controller.executeActionInsideJSNode(AppVersionCheckController.default.checkAppVersionPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
                Error: actionResults.errorOut
            };
        });
    };
});

define("AppVersionCheck.controller$CheckAppVersionPlugin.PluginIsLoadedJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (typeof(AppVersion) === "undefined" || typeof(AppVersion.version) === "undefined") {
            $parameters.IsAvailable = false;
        } else {
            $parameters.IsAvailable = true;
        }


    };
});


define("AppVersionCheck.controller$GetVersionNumber", ["exports", "@outsystems/runtime-core-js", "AppVersionCheck.model", "AppVersionCheck.controller", "CommonPlugin.model", "AppVersionCheck.controller$GetVersionNumber.GetVersionJS", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure", "AppVersionCheck.referencesHealth", "AppVersionCheck.referencesHealth$CommonPlugin", "AppVersionCheck.controller$CheckAppVersionPlugin"], function(exports, OSRuntimeCore, AppVersionCheckModel, AppVersionCheckController, CommonPluginModel, AppVersionCheck_controller_GetVersionNumber_GetVersionJS) {
    var OS = OSRuntimeCore;
    AppVersionCheckController.default.getVersionNumber$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetVersionNumber", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetVersionNumber");
                span.setAttribute("outsystems.function.key", "0ad13653-0a4b-4cbc-9518-888bf9d75da7");
                span.setAttribute("outsystems.function.owner.name", "AppVersionCheck");
                span.setAttribute("outsystems.function.owner.key", "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var checkAppVersionPluginVar = new OS.DataTypes.VariableHolder();
                var getVersionJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("AppVersionCheck.GetVersionNumber$outVars"))());
                // Execute Action: CheckAppVersionPlugin
                checkAppVersionPluginVar.value = AppVersionCheckController.default.checkAppVersionPlugin$Action(callContext);

                // Available ?
                if ((checkAppVersionPluginVar.value.isAvailableOut)) {
                    getVersionJSResult.value = OS.Logger.startActiveSpan("GetVersion", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "GetVersion");
                            span.setAttribute("outsystems.function.key", "482c4def-cd73-4b1e-ac55-882a2f3a6b11");
                            span.setAttribute("outsystems.function.owner.name", "AppVersionCheck");
                            span.setAttribute("outsystems.function.owner.key", "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(AppVersionCheck_controller_GetVersionNumber_GetVersionJS, "GetVersion", "GetVersionNumber", {
                                Version: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                Build: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("AppVersionCheck.GetVersionNumber$getVersionJSResult"))();
                                jsNodeResult.versionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Version, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.buildOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Build, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Version = GetVersion.Version
                    outVars.value.versionOut = getVersionJSResult.value.versionOut;
                    // Build = GetVersion.Build
                    outVars.value.buildOut = getVersionJSResult.value.buildOut;
                } else {
                    // Version = ""
                    outVars.value.versionOut = "";
                    // Build = ""
                    outVars.value.buildOut = "";
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = AppVersionCheckController.default;
    AppVersionCheckController.default.constructor.registerVariableGroupType("AppVersionCheck.GetVersionNumber$getVersionJSResult", [{
        name: "Version",
        attrName: "versionOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Build",
        attrName: "buildOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    AppVersionCheckController.default.constructor.registerVariableGroupType("AppVersionCheck.GetVersionNumber$outVars", [{
        name: "Version",
        attrName: "versionOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Build",
        attrName: "buildOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    AppVersionCheckController.default.clientActionProxies.getVersionNumber$Action = function() {
        return controller.executeActionInsideJSNode(AppVersionCheckController.default.getVersionNumber$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Version: OS.DataConversion.JSNodeParamConverter.to(actionResults.versionOut, OS.DataTypes.DataTypes.Text),
                Build: OS.DataConversion.JSNodeParamConverter.to(actionResults.buildOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("AppVersionCheck.controller$GetVersionNumber.GetVersionJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Version = (AppVersion.version === undefined ? '' : AppVersion.version);
        $parameters.Build = (AppVersion.build === undefined ? '' : AppVersion.build);
    };
});


define("AppVersionCheck.controller", ["exports", "@outsystems/runtime-core-js", "AppVersionCheck.model"], function(exports, OSRuntimeCore, AppVersionCheckModel) {
    var OS = OSRuntimeCore;
    var AppVersionCheckController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
        }

        get clientActionProxies() {
            if (!(this.hasOwnProperty("_clientActionProxies"))) {
                this._clientActionProxies = {};
            }

            return this._clientActionProxies;
        }
        set clientActionProxies(value) {
            this._clientActionProxies = value;
        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {};
            }

            return this._roles;
        }
        set roles(value) {
            this._roles = value;
        }

        get defaultTimeout() {
            if (!(this.hasOwnProperty("_defaultTimeout"))) {
                this._defaultTimeout = 10;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return AppVersionCheckController.default.defaultTimeout;
        }

    }

    AppVersionCheckController.default = new Controller();
});