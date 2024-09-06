define("SleepClientSide.controller$Sleep", ["exports", "@outsystems/runtime-core-js", "SleepClientSide.model", "SleepClientSide.controller", "SleepClientSide.controller$Sleep.SleepJS"], function(exports, OSRuntimeCore, SleepClientSideModel, SleepClientSideController, SleepClientSide_controller_Sleep_SleepJS) {
    var OS = OSRuntimeCore;
    SleepClientSideController.default.sleep$Action = function(msIn, callContext) {
        return OS.Logger.startActiveSpan("Sleep", function(span) {
            if (span) {
                span.setAttribute("code.function", "Sleep");
                span.setAttribute("outsystems.function.key", "83bd990a-60c4-4076-9460-e8353a3a97d1");
                span.setAttribute("outsystems.function.owner.name", "SleepClientSide");
                span.setAttribute("outsystems.function.owner.key", "3d61746a-11af-4a48-8f6c-ad4a5143a923");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("SleepClientSide.Sleep$vars"))());
                vars.value.msInLocal = msIn;
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("Sleep", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Sleep");
                            span.setAttribute("outsystems.function.key", "d66cc6b9-d3e8-48d2-8c7e-cd03ef87bf73");
                            span.setAttribute("outsystems.function.owner.name", "SleepClientSide");
                            span.setAttribute("outsystems.function.owner.key", "3d61746a-11af-4a48-8f6c-ad4a5143a923");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(SleepClientSide_controller_Sleep_SleepJS, "Sleep", "Sleep", {
                                ms: OS.DataConversion.JSNodeParamConverter.to(vars.value.msInLocal, OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
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
    var controller = SleepClientSideController.default;
    SleepClientSideController.default.constructor.registerVariableGroupType("SleepClientSide.Sleep$vars", [{
        name: "ms",
        attrName: "msInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    SleepClientSideController.default.clientActionProxies.sleep$Action = function(msIn) {
        msIn = (msIn === undefined) ? "" : msIn;
        return controller.executeActionInsideJSNode(SleepClientSideController.default.sleep$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(msIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("SleepClientSide.controller$Sleep.SleepJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            (async () => {
                await sleep($parameters.ms);
                $resolve();
            })();
        });
    };
});


define("SleepClientSide.controller", ["exports", "@outsystems/runtime-core-js", "SleepClientSide.model"], function(exports, OSRuntimeCore, SleepClientSideModel) {
    var OS = OSRuntimeCore;
    var SleepClientSideController = exports;
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
            return SleepClientSideController.default.defaultTimeout;
        }

    }

    SleepClientSideController.default = new Controller();
});