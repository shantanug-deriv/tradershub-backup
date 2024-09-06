define("DerivLogger.controller$ConsoleLog", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model", "DerivLogger.controller", "DerivLogger.controller$ConsoleLog.ConsoleErrorJS", "DerivLogger.controller$ConsoleLog.ConsoleWarningJS", "DerivLogger.controller$ConsoleLog.ConsoleLogJS"], function(exports, OSRuntimeCore, DerivLoggerModel, DerivLoggerController, DerivLogger_controller_ConsoleLog_ConsoleErrorJS, DerivLogger_controller_ConsoleLog_ConsoleWarningJS, DerivLogger_controller_ConsoleLog_ConsoleLogJS) {
    var OS = OSRuntimeCore;
    DerivLoggerController.default.consoleLog$Action = function(messageIn, consoleErrorTypeIdIn, callContext) {
        return OS.Logger.startActiveSpan("ConsoleLog", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLog");
                span.setAttribute("outsystems.function.key", "e2f8b8a5-ee74-4626-a173-bbe216185bcf");
                span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("DerivLogger.ConsoleLog$vars"))());
                vars.value.messageInLocal = messageIn;
                vars.value.consoleErrorTypeIdInLocal = consoleErrorTypeIdIn;
                if (((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.warning))) {
                    OS.Logger.startActiveSpan("ConsoleWarning", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "ConsoleWarning");
                            span.setAttribute("outsystems.function.key", "bf6592bc-1aef-4870-8ad7-45751683c39b");
                            span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                            span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLog_ConsoleWarningJS, "ConsoleWarning", "ConsoleLog", {
                                Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                } else {
                    if ((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.error)) {
                        OS.Logger.startActiveSpan("ConsoleError", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ConsoleError");
                                span.setAttribute("outsystems.function.key", "15283603-ef47-43b3-8c56-62dc688de6fb");
                                span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                                span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLog_ConsoleErrorJS, "ConsoleError", "ConsoleLog", {
                                    Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {}, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    } else {
                        if ((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.information)) {
                            OS.Logger.startActiveSpan("ConsoleLog", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ConsoleLog");
                                    span.setAttribute("outsystems.function.key", "d0a74f3e-fc2e-4714-8a43-c9d2c1d8afbc");
                                    span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                                    span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLog_ConsoleLogJS, "ConsoleLog", "ConsoleLog", {
                                        Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {}, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        } else {
                            // Raise Error: AbortActivityChangeException
                            throw new OS.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
                        }

                    }

                }

                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = DerivLoggerController.default;
    DerivLoggerController.default.constructor.registerVariableGroupType("DerivLogger.ConsoleLog$vars", [{
        name: "Message",
        attrName: "messageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ConsoleErrorTypeId",
        attrName: "consoleErrorTypeIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    DerivLoggerController.default.clientActionProxies.consoleLog$Action = function(messageIn, consoleErrorTypeIdIn) {
        messageIn = (messageIn === undefined) ? "" : messageIn;
        consoleErrorTypeIdIn = (consoleErrorTypeIdIn === undefined) ? 0 : consoleErrorTypeIdIn;
        return controller.executeActionInsideJSNode(DerivLoggerController.default.consoleLog$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), consoleErrorTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("DerivLogger.controller$ConsoleLog.ConsoleErrorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.error($parameters.Message);
    };
});

define("DerivLogger.controller$ConsoleLog.ConsoleWarningJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.warn($parameters.Message);
    };
});

define("DerivLogger.controller$ConsoleLog.ConsoleLogJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log($parameters.Message);
    };
});


define("DerivLogger.controller$ConsoleLogWithJSON", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model", "DerivLogger.controller", "DerivLogger.controller$ConsoleLogWithJSON.ConsoleWarningJS", "DerivLogger.controller$ConsoleLogWithJSON.ConsoleErrorJS", "DerivLogger.controller$ConsoleLogWithJSON.ConsoleLogJS"], function(exports, OSRuntimeCore, DerivLoggerModel, DerivLoggerController, DerivLogger_controller_ConsoleLogWithJSON_ConsoleWarningJS, DerivLogger_controller_ConsoleLogWithJSON_ConsoleErrorJS, DerivLogger_controller_ConsoleLogWithJSON_ConsoleLogJS) {
    var OS = OSRuntimeCore;
    DerivLoggerController.default.consoleLogWithJSON$Action = function(messageIn, jSONIn, consoleErrorTypeIdIn, callContext) {
        return OS.Logger.startActiveSpan("ConsoleLogWithJSON", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLogWithJSON");
                span.setAttribute("outsystems.function.key", "78d556b2-b25c-4559-a937-2c0f92d16178");
                span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("DerivLogger.ConsoleLogWithJSON$vars"))());
                vars.value.messageInLocal = messageIn;
                vars.value.jSONInLocal = jSONIn;
                vars.value.consoleErrorTypeIdInLocal = consoleErrorTypeIdIn;
                if (((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.warning))) {
                    OS.Logger.startActiveSpan("ConsoleWarning", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "ConsoleWarning");
                            span.setAttribute("outsystems.function.key", "5820d063-aeb6-4024-a596-19767ed071b2");
                            span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                            span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLogWithJSON_ConsoleWarningJS, "ConsoleWarning", "ConsoleLogWithJSON", {
                                JSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONInLocal, OS.DataTypes.DataTypes.Text),
                                Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                } else {
                    if ((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.error)) {
                        OS.Logger.startActiveSpan("ConsoleError", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ConsoleError");
                                span.setAttribute("outsystems.function.key", "70d0bf71-aa95-4209-8fe7-975d172058b4");
                                span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                                span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLogWithJSON_ConsoleErrorJS, "ConsoleError", "ConsoleLogWithJSON", {
                                    JSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONInLocal, OS.DataTypes.DataTypes.Text),
                                    Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {}, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    } else {
                        if ((vars.value.consoleErrorTypeIdInLocal === DerivLoggerModel.staticEntities.consoleErrorType.information)) {
                            OS.Logger.startActiveSpan("ConsoleLog", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ConsoleLog");
                                    span.setAttribute("outsystems.function.key", "fbae0ce4-79c8-49c2-8029-f03b2e611bfb");
                                    span.setAttribute("outsystems.function.owner.name", "DerivLogger");
                                    span.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(DerivLogger_controller_ConsoleLogWithJSON_ConsoleLogJS, "ConsoleLog", "ConsoleLogWithJSON", {
                                        JSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONInLocal, OS.DataTypes.DataTypes.Text),
                                        Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {}, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                        } else {
                            // Raise Error: AbortActivityChangeException
                            throw new OS.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
                        }

                    }

                }

                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = DerivLoggerController.default;
    DerivLoggerController.default.constructor.registerVariableGroupType("DerivLogger.ConsoleLogWithJSON$vars", [{
        name: "Message",
        attrName: "messageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "JSON",
        attrName: "jSONInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ConsoleErrorTypeId",
        attrName: "consoleErrorTypeIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    DerivLoggerController.default.clientActionProxies.consoleLogWithJSON$Action = function(messageIn, jSONIn, consoleErrorTypeIdIn) {
        messageIn = (messageIn === undefined) ? "" : messageIn;
        jSONIn = (jSONIn === undefined) ? "" : jSONIn;
        consoleErrorTypeIdIn = (consoleErrorTypeIdIn === undefined) ? 0 : consoleErrorTypeIdIn;
        return controller.executeActionInsideJSNode(DerivLoggerController.default.consoleLogWithJSON$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(jSONIn, OS.DataTypes.DataTypes.Text), consoleErrorTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("DerivLogger.controller$ConsoleLogWithJSON.ConsoleWarningJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.warn($parameters.Message, JSON.parse($parameters.JSON));
    };
});

define("DerivLogger.controller$ConsoleLogWithJSON.ConsoleErrorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.error($parameters.Message, JSON.parse($parameters.JSON));
    };
});

define("DerivLogger.controller$ConsoleLogWithJSON.ConsoleLogJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log($parameters.Message, JSON.parse($parameters.JSON));
    };
});


define("DerivLogger.controller", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model"], function(exports, OSRuntimeCore, DerivLoggerModel) {
    var OS = OSRuntimeCore;
    var DerivLoggerController = exports;
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
            return DerivLoggerController.default.defaultTimeout;
        }

    }

    DerivLoggerController.default = new Controller();
});