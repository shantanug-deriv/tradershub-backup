define("ConsoleLogMessages.controller$ConsoleLog", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.controller", "ConsoleLogMessages.controller$ConsoleLog.ConsoleLogJS", "ConsoleLogMessages.controller$ConsoleLog.ConsoleErrorJS", "ConsoleLogMessages.controller$ConsoleLog.ConsoleWarningJS"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel, ConsoleLogMessagesController, ConsoleLogMessages_controller_ConsoleLog_ConsoleLogJS, ConsoleLogMessages_controller_ConsoleLog_ConsoleErrorJS, ConsoleLogMessages_controller_ConsoleLog_ConsoleWarningJS) {
    var OS = OSRuntimeCore;
    ConsoleLogMessagesController.default.consoleLog$Action = function(consoleErrorTypeIdIn, callContext) {
        return OS.Logger.startActiveSpan("ConsoleLog", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLog");
                span.setAttribute("outsystems.function.key", "7a80e7c4-c96b-4a3c-a20f-4e8a6d53c1b0");
                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ConsoleLogMessages.ConsoleLog$vars"))());
                vars.value.consoleErrorTypeIdInLocal = consoleErrorTypeIdIn;
                if (((vars.value.consoleErrorTypeIdInLocal === ConsoleLogMessagesModel.staticEntities.consoleErrorType.warning))) {
                    OS.Logger.startActiveSpan("ConsoleWarning", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "ConsoleWarning");
                            span.setAttribute("outsystems.function.key", "f2564f05-7fa1-41e7-8f8c-10b8fc34eded");
                            span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                            span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLog_ConsoleWarningJS, "ConsoleWarning", "ConsoleLog", null, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                } else {
                    if ((vars.value.consoleErrorTypeIdInLocal === ConsoleLogMessagesModel.staticEntities.consoleErrorType.error)) {
                        OS.Logger.startActiveSpan("ConsoleError", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ConsoleError");
                                span.setAttribute("outsystems.function.key", "d6840347-5fa0-48a8-9777-f928c685891d");
                                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLog_ConsoleErrorJS, "ConsoleError", "ConsoleLog", null, function($parameters) {}, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    } else {
                        if ((vars.value.consoleErrorTypeIdInLocal === ConsoleLogMessagesModel.staticEntities.consoleErrorType.information)) {
                            OS.Logger.startActiveSpan("ConsoleLog", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ConsoleLog");
                                    span.setAttribute("outsystems.function.key", "4065b5eb-42c1-4630-939b-f92435166a36");
                                    span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                                    span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLog_ConsoleLogJS, "ConsoleLog", "ConsoleLog", null, function($parameters) {}, {}, {});
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
    var controller = ConsoleLogMessagesController.default;
    ConsoleLogMessagesController.default.constructor.registerVariableGroupType("ConsoleLogMessages.ConsoleLog$vars", [{
        name: "ConsoleErrorTypeId",
        attrName: "consoleErrorTypeIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    ConsoleLogMessagesController.default.clientActionProxies.consoleLog$Action = function(consoleErrorTypeIdIn) {
        consoleErrorTypeIdIn = (consoleErrorTypeIdIn === undefined) ? 0 : consoleErrorTypeIdIn;
        return controller.executeActionInsideJSNode(ConsoleLogMessagesController.default.consoleLog$Action.bind(controller, consoleErrorTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("ConsoleLogMessages.controller$ConsoleLog.ConsoleLogJS", [], function() {
    return function($actions, $roles, $public) {
        console.log('Hello, Console!');
    };
});

define("ConsoleLogMessages.controller$ConsoleLog.ConsoleErrorJS", [], function() {
    return function($actions, $roles, $public) {
        console.error(`I'm sorry, Santhi. I'm afraid I can't do that.`);
    };
});

define("ConsoleLogMessages.controller$ConsoleLog.ConsoleWarningJS", [], function() {
    return function($actions, $roles, $public) {
        console.warn('Abandon Hope All Ye Who Enter');
    };
});


define("ConsoleLogMessages.controller$ConsoleLogCustom", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.controller", "ConsoleLogMessages.controller$ConsoleLogCustom.ConsoleLogCustomJS"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel, ConsoleLogMessagesController, ConsoleLogMessages_controller_ConsoleLogCustom_ConsoleLogCustomJS) {
    var OS = OSRuntimeCore;
    ConsoleLogMessagesController.default.consoleLogCustom$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ConsoleLogCustom", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLogCustom");
                span.setAttribute("outsystems.function.key", "40916c7f-300b-44b2-9fbe-bdf806004bb3");
                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("ConsoleLogCustom", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ConsoleLogCustom");
                        span.setAttribute("outsystems.function.key", "9bd6d2b9-b693-47f9-b370-396d034d5fb5");
                        span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                        span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLogCustom_ConsoleLogCustomJS, "ConsoleLogCustom", "ConsoleLogCustom", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = ConsoleLogMessagesController.default;
    ConsoleLogMessagesController.default.clientActionProxies.consoleLogCustom$Action = function() {
        return controller.executeActionInsideJSNode(ConsoleLogMessagesController.default.consoleLogCustom$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("ConsoleLogMessages.controller$ConsoleLogCustom.ConsoleLogCustomJS", [], function() {
    return function($actions, $roles, $public) {
        const spacing = '5px';
        const styles =
            `padding: ${spacing}; background-color: darkblue; color: white; font-style: 
         italic; border: ${spacing} solid crimson; font-size: 2em;`;
        console.log('%cVariety is the spice of life', styles);
    };
});


define("ConsoleLogMessages.controller$ConsoleLogGroup", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.controller", "ConsoleLogMessages.controller$ConsoleLogGroup.ConsoleLogGroupJS"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel, ConsoleLogMessagesController, ConsoleLogMessages_controller_ConsoleLogGroup_ConsoleLogGroupJS) {
    var OS = OSRuntimeCore;
    ConsoleLogMessagesController.default.consoleLogGroup$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ConsoleLogGroup", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLogGroup");
                span.setAttribute("outsystems.function.key", "ea6f418a-073f-4d18-bc46-dcef79462d30");
                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("ConsoleLogGroup", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ConsoleLogGroup");
                        span.setAttribute("outsystems.function.key", "d8612ed1-c14a-4286-9ad5-001f330231b2");
                        span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                        span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLogGroup_ConsoleLogGroupJS, "ConsoleLogGroup", "ConsoleLogGroup", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = ConsoleLogMessagesController.default;
    ConsoleLogMessagesController.default.clientActionProxies.consoleLogGroup$Action = function() {
        return controller.executeActionInsideJSNode(ConsoleLogMessagesController.default.consoleLogGroup$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("ConsoleLogMessages.controller$ConsoleLogGroup.ConsoleLogGroupJS", [], function() {
    return function($actions, $roles, $public) {
        const label = 'Adolescent Irradiated Espionage Tortoises';
        console.group(label);
        console.info('Leo');
        console.info('Mike');
        console.info('Don');
        console.info('Raph');
        console.groupEnd(label);
    };
});


define("ConsoleLogMessages.controller$ConsoleLogJSON", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.controller", "ConsoleLogMessages.controller$ConsoleLogJSON.ConsoleLogJSONDataJS"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel, ConsoleLogMessagesController, ConsoleLogMessages_controller_ConsoleLogJSON_ConsoleLogJSONDataJS) {
    var OS = OSRuntimeCore;
    ConsoleLogMessagesController.default.consoleLogJSON$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ConsoleLogJSON", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLogJSON");
                span.setAttribute("outsystems.function.key", "efc67e07-9a7d-45b6-b44a-de6daa0d9faa");
                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("ConsoleLogJSONData", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ConsoleLogJSONData");
                        span.setAttribute("outsystems.function.key", "7e91d858-e81b-4b62-89f0-84864730066e");
                        span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                        span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLogJSON_ConsoleLogJSONDataJS, "ConsoleLogJSONData", "ConsoleLogJSON", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = ConsoleLogMessagesController.default;
    ConsoleLogMessagesController.default.clientActionProxies.consoleLogJSON$Action = function() {
        return controller.executeActionInsideJSNode(ConsoleLogMessagesController.default.consoleLogJSON$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("ConsoleLogMessages.controller$ConsoleLogJSON.ConsoleLogJSONDataJS", [], function() {
    return function($actions, $roles, $public) {
        // JSON object
        const data = {
            "name": "John",
            "age": 22,
            "city": "New York"
        }

        // accessing JSON object
        console.log(data);
    };
});


define("ConsoleLogMessages.controller$ConsoleLogTable", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.controller", "ConsoleLogMessages.controller$ConsoleLogTable.ConsoleLogTableJS"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel, ConsoleLogMessagesController, ConsoleLogMessages_controller_ConsoleLogTable_ConsoleLogTableJS) {
    var OS = OSRuntimeCore;
    ConsoleLogMessagesController.default.consoleLogTable$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ConsoleLogTable", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConsoleLogTable");
                span.setAttribute("outsystems.function.key", "5fd75772-30cf-4e2c-ae26-dfa049271d7b");
                span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("ConsoleLogTable", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ConsoleLogTable");
                        span.setAttribute("outsystems.function.key", "57c921dd-6a7a-4c9d-bde9-fa50e2630091");
                        span.setAttribute("outsystems.function.owner.name", "ConsoleLogMessages");
                        span.setAttribute("outsystems.function.owner.key", "c9323f2b-8a7e-4637-a0c1-89fe796c535c");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(ConsoleLogMessages_controller_ConsoleLogTable_ConsoleLogTableJS, "ConsoleLogTable", "ConsoleLogTable", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = ConsoleLogMessagesController.default;
    ConsoleLogMessagesController.default.clientActionProxies.consoleLogTable$Action = function() {
        return controller.executeActionInsideJSNode(ConsoleLogMessagesController.default.consoleLogTable$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("ConsoleLogMessages.controller$ConsoleLogTable.ConsoleLogTableJS", [], function() {
    return function($actions, $roles, $public) {
        console.table([{
            first: 'René',
            last: 'Magritte',
        }, {
            first: 'Chaim',
            last: 'Soutine',
            birthday: '18930113',
        }, {
            first: 'Henri',
            last: 'Matisse',
        }]);
    };
});


define("ConsoleLogMessages.controller", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel) {
    var OS = OSRuntimeCore;
    var ConsoleLogMessagesController = exports;
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
            return ConsoleLogMessagesController.default.defaultTimeout;
        }

    }

    ConsoleLogMessagesController.default = new Controller();
});