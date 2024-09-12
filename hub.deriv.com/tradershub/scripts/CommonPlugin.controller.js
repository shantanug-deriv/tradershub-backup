define("CommonPlugin.controller$ConsoleLog", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$ConsoleLog.WriteToConsoleJS"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_ConsoleLog_WriteToConsoleJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.consoleLog$Action = function(componentIn, textIn, callContext) {
        return OS.Logger.startActiveSpan("ConsoleLog", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLog");
                span.setAttribute("outsystems.function.key", "c35d27cb-a320-4eeb-83d3-d469c3192e77");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.ConsoleLog$vars"))());
                vars.value.componentInLocal = componentIn;
                vars.value.textInLocal = textIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                try {
                    OS.Logger.startActiveSpan("WriteToConsole", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "WriteToConsole");
                            span.setAttribute("outsystems.function.key", "bfb166a0-02f5-4750-9981-faaca436aa60");
                            span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                            span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(CommonPlugin_controller_ConsoleLog_WriteToConsoleJS, "WriteToConsole", "ConsoleLog", {
                                Component: OS.DataConversion.JSNodeParamConverter.to(vars.value.componentInLocal, OS.DataTypes.DataTypes.Text),
                                Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                } catch (ex) {
                    (function() {
                        OS.Logger.debug("ConsoleLog.ConsoleLog", OS.Exceptions.getMessage(ex));
                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex, null, null, 1);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AllExceptions");
                                    span.setAttribute("outsystems.function.key", "9bf65634-9c93-41b7-8831-bc5aed552f65");
                                    span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                                    span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                                    span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                }

                                try {
                                    return;

                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        }

                        throw ex;
                    })();
                }

                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.ConsoleLog$vars", [{
        name: "Component",
        attrName: "componentInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Text",
        attrName: "textInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.clientActionProxies.consoleLog$Action = function(componentIn, textIn) {
        componentIn = (componentIn === undefined) ? "" : componentIn;
        textIn = (textIn === undefined) ? "" : textIn;
        return controller.executeActionInsideJSNode(CommonPluginController.default.consoleLog$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(componentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("CommonPlugin.controller$ConsoleLog.WriteToConsoleJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log('> ' + $parameters.Component + ': ' + $parameters.Text);
    };
});


define("CommonPlugin.controller$GetDeviceID", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetDeviceID.GetDeviceHwIdJS"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetDeviceID_GetDeviceHwIdJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.getDeviceID$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetDeviceID", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetDeviceID");
                span.setAttribute("outsystems.function.key", "8ce5aa0d-fbf8-4130-b781-ffd404bdff0d");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var getDeviceHwIdJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$outVars"))());
                getDeviceHwIdJSResult.value = OS.Logger.startActiveSpan("GetDeviceHwId", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetDeviceHwId");
                        span.setAttribute("outsystems.function.key", "1152799f-4ff5-496f-a80e-d3243dc38c9a");
                        span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                        span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CommonPlugin_controller_GetDeviceID_GetDeviceHwIdJS, "GetDeviceHwId", "GetDeviceID", {
                            deviceHwId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult"))();
                            jsNodeResult.deviceHwIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.deviceHwId, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // DeviceHwId = GetDeviceHwId.deviceHwId
                outVars.value.deviceHwIdOut = getDeviceHwIdJSResult.value.deviceHwIdOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$getDeviceHwIdJSResult", [{
        name: "deviceHwId",
        attrName: "deviceHwIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetDeviceID$outVars", [{
        name: "DeviceHwId",
        attrName: "deviceHwIdOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.clientActionProxies.getDeviceID$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.getDeviceID$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                DeviceHwId: OS.DataConversion.JSNodeParamConverter.to(actionResults.deviceHwIdOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("CommonPlugin.controller$GetDeviceID.GetDeviceHwIdJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.deviceHwId = device.uuid;
    };
});


define("CommonPlugin.controller$GetOperatingSystem", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetPlatform", "CommonPlugin.controller$ConsoleLog"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.getOperatingSystem$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetOperatingSystem", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetOperatingSystem");
                span.setAttribute("outsystems.function.key", "0ddcece8-e300-485d-a4a7-082d559d4f76");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getPlatformVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.GetOperatingSystem$outVars"))());
                try { // Execute Action: GetPlatform
                    getPlatformVar.value = CommonPluginController.default.getPlatform$Action(callContext);

                    if ((("android" === getPlatformVar.value.platformOut))) {
                        // Android
                        // OperatingSystemsId = Android
                        outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.android;
                    } else {
                        if (("ios" === getPlatformVar.value.platformOut)) {
                            // iOS
                            // OperatingSystemsId = iOS
                            outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.iOS;
                        } else {
                            // OperatingSystemsId = Other
                            outVars.value.operatingSystemsIdOut = CommonPluginModel.staticEntities.mobile_OperatingSystem.other;
                        }

                    }

                } catch (ex) {
                    (function() {
                        OS.Logger.debug("GetOperatingSystem.GetOperatingSystem", OS.Exceptions.getMessage(ex));
                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex, null, null, 1);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AllExceptions");
                                    span.setAttribute("outsystems.function.key", "2e4e2fb1-2cf6-4074-8949-c365e37cfdde");
                                    span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                                    span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                                    span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                }

                                try { // Execute Action: ConsoleLog
                                    CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
                                    return outVars.value;

                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        }

                        throw ex;
                    })();
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetOperatingSystem$outVars", [{
        name: "OperatingSystemsId",
        attrName: "operatingSystemsIdOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.clientActionProxies.getOperatingSystem$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.getOperatingSystem$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                OperatingSystemsId: actionResults.operatingSystemsIdOut
            };
        });
    };
});


define("CommonPlugin.controller$GetPlatform", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetPlatform.RunCordovaJS", "CommonPlugin.controller$ConsoleLog"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetPlatform_RunCordovaJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.getPlatform$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetPlatform", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetPlatform");
                span.setAttribute("outsystems.function.key", "c35ba9a1-2e0b-4b5f-a2b5-c77d3709882d");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var runCordovaJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.GetPlatform$outVars"))());
                try {
                    runCordovaJSResult.value = OS.Logger.startActiveSpan("RunCordova", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "RunCordova");
                            span.setAttribute("outsystems.function.key", "7a4d9871-e03e-4201-9151-3c0023fb61e4");
                            span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                            span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(CommonPlugin_controller_GetPlatform_RunCordovaJS, "RunCordova", "GetPlatform", {
                                PlatformId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult"))();
                                jsNodeResult.platformIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PlatformId, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Platform = ToLower
                    outVars.value.platformOut = OS.BuiltinFunctions.toLower(runCordovaJSResult.value.platformIdOut);
                } catch (ex) {
                    (function() {
                        OS.Logger.debug("GetPlatform.GetPlatform", OS.Exceptions.getMessage(ex));
                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex, null, null, 1);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AllExceptions");
                                    span.setAttribute("outsystems.function.key", "7f1c3dc1-3711-4b66-9ea4-7a4776d91963");
                                    span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                                    span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                                    span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                }

                                try { // Execute Action: ConsoleLog
                                    CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
                                    return outVars.value;

                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        }

                        throw ex;
                    })();
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$runCordovaJSResult", [{
        name: "PlatformId",
        attrName: "platformIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetPlatform$outVars", [{
        name: "Platform",
        attrName: "platformOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.clientActionProxies.getPlatform$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.getPlatform$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Platform: OS.DataConversion.JSNodeParamConverter.to(actionResults.platformOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("CommonPlugin.controller$GetPlatform.RunCordovaJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.PlatformId = cordova.platformId;
    };
});


define("CommonPlugin.controller$GetUserAgent", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$GetUserAgent.GettingUAJS", "CommonPlugin.controller$ConsoleLog"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_GetUserAgent_GettingUAJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.getUserAgent$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetUserAgent", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetUserAgent");
                span.setAttribute("outsystems.function.key", "3b5c9047-8325-486c-95ed-b63beb268365");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var gettingUAJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$outVars"))());
                try {
                    gettingUAJSResult.value = OS.Logger.startActiveSpan("GettingUA", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "GettingUA");
                            span.setAttribute("outsystems.function.key", "87fa54ab-f667-4584-9a03-cf7ab66e736d");
                            span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                            span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(CommonPlugin_controller_GetUserAgent_GettingUAJS, "GettingUA", "GetUserAgent", {
                                UserAgent: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult"))();
                                jsNodeResult.userAgentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UserAgent, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // UserAgent = GettingUA.UserAgent
                    outVars.value.userAgentOut = gettingUAJSResult.value.userAgentOut;
                } catch (ex) {
                    (function() {
                        OS.Logger.debug("GetUserAgent.GetUserAgent", OS.Exceptions.getMessage(ex));
                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex, null, null, 1);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AllExceptions");
                                    span.setAttribute("outsystems.function.key", "5df45868-4e12-42d1-a272-1e19c6935c51");
                                    span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                                    span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                                    span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                }

                                try { // Execute Action: ConsoleLog
                                    CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
                                    return outVars.value;

                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        }

                        throw ex;
                    })();
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$gettingUAJSResult", [{
        name: "UserAgent",
        attrName: "userAgentOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.GetUserAgent$outVars", [{
        name: "UserAgent",
        attrName: "userAgentOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CommonPluginController.default.clientActionProxies.getUserAgent$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.getUserAgent$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                UserAgent: OS.DataConversion.JSNodeParamConverter.to(actionResults.userAgentOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("CommonPlugin.controller$GetUserAgent.GettingUAJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.UserAgent = navigator.userAgent;
    };
});


define("CommonPlugin.controller$InitPluginManager", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$InitPluginManager.InitScriptJS"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_InitPluginManager_InitScriptJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.initPluginManager$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitPluginManager", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitPluginManager");
                span.setAttribute("outsystems.function.key", "757925da-a635-4bf5-97e2-26bfdb5ef508");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("InitScript", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "InitScript");
                            span.setAttribute("outsystems.function.key", "72931d81-801f-406a-8a0c-b64a88bfba13");
                            span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                            span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(CommonPlugin_controller_InitPluginManager_InitScriptJS, "InitScript", "InitPluginManager", {
                                ScriptURL: OS.DataConversion.JSNodeParamConverter.to(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CommonPlugin.PluginManager.js"), OS.DataTypes.DataTypes.Text),
                                LegacyScriptURL: OS.DataConversion.JSNodeParamConverter.to(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CommonPlugin.Legacy_PluginManager.js"), OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {
                                RequireScript: OS.SystemActions.requireScript
                            }, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.clientActionProxies.initPluginManager$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.initPluginManager$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("CommonPlugin.controller$InitPluginManager.InitScriptJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            if (define !== undefined && require !== undefined) {
                $actions.RequireScript($parameters.LegacyScriptURL)
            }

            $actions.RequireScript($parameters.ScriptURL).then(function() {
                $resolve();
            });
        });
    };
});


define("CommonPlugin.controller$IsCordovaDefined", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.controller$IsCordovaDefined.CheckCordovaJS", "CommonPlugin.controller$ConsoleLog"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController, CommonPlugin_controller_IsCordovaDefined_CheckCordovaJS) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.isCordovaDefined$Action = function(callContext) {
        return OS.Logger.startActiveSpan("IsCordovaDefined", function(span) {
            if (span) {
                span.setAttribute("code.function", "IsCordovaDefined");
                span.setAttribute("outsystems.function.key", "8c87ec43-13fd-4b76-88db-6888733c440c");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var checkCordovaJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$outVars"))());
                try {
                    checkCordovaJSResult.value = OS.Logger.startActiveSpan("CheckCordova", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "CheckCordova");
                            span.setAttribute("outsystems.function.key", "aee26cbc-81f8-4f80-904e-c9e294dbb126");
                            span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                            span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(CommonPlugin_controller_IsCordovaDefined_CheckCordovaJS, "CheckCordova", "IsCordovaDefined", {
                                CordovaLoaded: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult"))();
                                jsNodeResult.cordovaLoadedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CordovaLoaded, OS.DataTypes.DataTypes.Boolean);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // IsLoaded = CheckCordova.CordovaLoaded
                    outVars.value.isLoadedOut = checkCordovaJSResult.value.cordovaLoadedOut;
                } catch (ex) {
                    (function() {
                        OS.Logger.debug("IsCordovaDefined.IsCordovaDefined", OS.Exceptions.getMessage(ex));
                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex, null, null, 1);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AllExceptions");
                                    span.setAttribute("outsystems.function.key", "bf2b641c-c4fc-45f1-825d-597463c5606a");
                                    span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                                    span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                                    span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                }

                                try { // Execute Action: ConsoleLog
                                    CommonPluginController.default.consoleLog$Action("CommonPlugins", allExceptionsVar.value.exceptionMessageAttr, callContext);
                                    return outVars.value;

                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        }

                        throw ex;
                    })();
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$checkCordovaJSResult", [{
        name: "CordovaLoaded",
        attrName: "cordovaLoadedOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.IsCordovaDefined$outVars", [{
        name: "IsLoaded",
        attrName: "isLoadedOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    CommonPluginController.default.clientActionProxies.isCordovaDefined$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.isCordovaDefined$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsLoaded: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoadedOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("CommonPlugin.controller$IsCordovaDefined.CheckCordovaJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (typeof(cordova) === "undefined")
            $parameters.CordovaLoaded = false;
        else
            $parameters.CordovaLoaded = true;
    };
});


define("CommonPlugin.controller$PublicStructs", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.controller", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure", "CommonPlugin.model$ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure"], function(exports, OSRuntimeCore, CommonPluginModel, CommonPluginController) {
    var OS = OSRuntimeCore;
    CommonPluginController.default.publicStructs$Action = function(callContext) {
        return OS.Logger.startActiveSpan("PublicStructs", function(span) {
            if (span) {
                span.setAttribute("code.function", "PublicStructs");
                span.setAttribute("outsystems.function.key", "0526454a-a53b-4160-b638-7c502e07f867");
                span.setAttribute("outsystems.function.owner.name", "CommonPlugin");
                span.setAttribute("outsystems.function.owner.key", "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CommonPlugin.PublicStructs$outVars"))());
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CommonPluginController.default;
    CommonPluginController.default.constructor.registerVariableGroupType("CommonPlugin.PublicStructs$outVars", [{
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure();
        },
        complexType: CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure
    }, {
        name: "PluginLicense",
        attrName: "pluginLicenseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure();
        },
        complexType: CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure
    }]);
    CommonPluginController.default.clientActionProxies.publicStructs$Action = function() {
        return controller.executeActionInsideJSNode(CommonPluginController.default.publicStructs$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Error: actionResults.errorOut,
                PluginLicense: actionResults.pluginLicenseOut
            };
        });
    };
});


define("CommonPlugin.controller", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    var CommonPluginController = exports;
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
            return CommonPluginController.default.defaultTimeout;
        }

    }

    CommonPluginController.default = new Controller();
});