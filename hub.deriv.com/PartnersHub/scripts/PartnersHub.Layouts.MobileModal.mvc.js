define("PartnersHub.Layouts.MobileModal.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "SleepClientSide.controller", "SleepClientSide.controller$Sleep", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$SleepClientSide"], function(OSRuntimeCore, PartnersHubModel, SleepClientSideController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsModalOpenProxy", "isModalOpenProxyVar", "IsModalOpenProxy", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsModalOpen", "isModalOpenIn", "IsModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isModalOpenInDataFetchStatus", "_isModalOpenInDataFetchStatus", "_isModalOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {};
        }

    }

    class Model extends
    OS.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            return false;
        }
        setInputs(inputs) {
            if ("IsModalOpen" in inputs) {
                this.variables.isModalOpenIn = inputs.IsModalOpen;
                if ("_isModalOpenInDataFetchStatus" in inputs) {
                    this.variables._isModalOpenInDataFetchStatus = inputs._isModalOpenInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.MobileModal.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "SleepClientSide.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.MobileModal.mvc$model", "PartnersHub.Layouts.MobileModal.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "SleepClientSide.controller$Sleep", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$SleepClientSide"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, SleepClientSideController, React, OSView, PartnersHub_Layouts_MobileModal_mvc_model, PartnersHub_Layouts_MobileModal_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.MobileModal";
        }

        static getAttributes() {
            return {
                codeFunction: "MobileModal",
                functionKey: "dac4c064-5a32-4da6-8384-bf59cda60a3b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.MobileModal.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Layouts_MobileModal_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_MobileModal_mvc_controller;
        }

        get title() {


            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.isModalOpenProxyVar,
                style: "mobile-popup",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.mainContent,
                _idProps: {
                    service: idService,
                    name: "MainContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("PartnersHub.Layouts.MobileModal.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "SleepClientSide.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.MobileModal.mvc$translationsResources", "PartnersHub.Layouts.MobileModal.mvc$controller.OnParametersChanged.AttachHideAnimsJS", "PartnersHub.Layouts.MobileModal.mvc$controller.OnReady.OnClickOutsideJS", "SleepClientSide.controller$Sleep", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$SleepClientSide"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, SleepClientSideController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_MobileModal_mvc_TranslationsResources, PartnersHub_Layouts_MobileModal_mvc_controller_OnParametersChanged_AttachHideAnimsJS, PartnersHub_Layouts_MobileModal_mvc_controller_OnReady_OnClickOutsideJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_MobileModal_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    dispatchOnClickOutside$Action: function() {
                        return controller.executeActionInsideJSNode(controller._dispatchOnClickOutside$Action.bind(controller), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "DispatchOnClickOutside");
                    }
                };
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions

            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = [];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "3d9fa764-ac9b-4dd1-9d32-d524da203116");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    OS.Logger.startActiveSpan("AttachHideAnims", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "AttachHideAnims");
                                            span.setAttribute("outsystems.function.key", "fab3c749-0b46-4062-86b7-65957be57b54");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Layouts_MobileModal_mvc_controller_OnParametersChanged_AttachHideAnimsJS, "AttachHideAnims", "OnParametersChanged", {
                                                IsModalOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isModalOpenIn, OS.DataTypes.DataTypes.Boolean)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: Sleep
                                    model.flush();
                                    return SleepClientSideController.default.sleep$Action("250", callContext).then(function() {
                                        // Execute Action: SetIsModalOpenProxy
                                        controller._setIsModalOpenProxy$Action(model.variables.isModalOpenIn, callContext);
                                    });
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _dispatchOnClickOutside$Action() {
                if (!(this.hasOwnProperty("__dispatchOnClickOutside$Action"))) {
                    this.__dispatchOnClickOutside$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DispatchOnClickOutside", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DispatchOnClickOutside");
                                span.setAttribute("outsystems.function.key", "68fba5ab-e94d-430f-a2db-898979afb618");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("DispatchOnClickOutside");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnClickOutside
                                    return controller.onClickOutside$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__dispatchOnClickOutside$Action;
            }
            set _dispatchOnClickOutside$Action(value) {
                this.__dispatchOnClickOutside$Action = value;
            }

            get _setIsModalOpenProxy$Action() {
                if (!(this.hasOwnProperty("__setIsModalOpenProxy$Action"))) {
                    this.__setIsModalOpenProxy$Action = function(newIsModalOpenProxyIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetIsModalOpenProxy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetIsModalOpenProxy");
                                span.setAttribute("outsystems.function.key", "8158bc80-8115-4e05-a2c3-5b858a62d481");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetIsModalOpenProxy");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Layouts.MobileModal.SetIsModalOpenProxy$vars"))());
                                vars.value.newIsModalOpenProxyInLocal = newIsModalOpenProxyIn;
                                // IsModalOpenProxy = NewIsModalOpenProxy
                                model.variables.isModalOpenProxyVar = vars.value.newIsModalOpenProxyInLocal;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setIsModalOpenProxy$Action;
            }
            set _setIsModalOpenProxy$Action(value) {
                this.__setIsModalOpenProxy$Action = value;
            }

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "de8240bf-9473-4677-9f98-2b2ffbcbf40a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("OnClickOutside", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "OnClickOutside");
                                        span.setAttribute("outsystems.function.key", "f1a14bea-e3c3-4591-9094-65d0b1f94359");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Layouts_MobileModal_mvc_controller_OnReady_OnClickOutsideJS, "OnClickOutside", "OnReady", null, function($parameters) {}, {
                                            DispatchOnClickOutside: controller.clientActionProxies.dispatchOnClickOutside$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "3d9fa764-ac9b-4dd1-9d32-d524da203116");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            dispatchOnClickOutside$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DispatchOnClickOutside__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DispatchOnClickOutside");
                        span.setAttribute("outsystems.function.key", "68fba5ab-e94d-430f-a2db-898979afb618");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._dispatchOnClickOutside$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            setIsModalOpenProxy$Action(newIsModalOpenProxyIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetIsModalOpenProxy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetIsModalOpenProxy");
                        span.setAttribute("outsystems.function.key", "8158bc80-8115-4e05-a2c3-5b858a62d481");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setIsModalOpenProxy$Action, callContext, newIsModalOpenProxyIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "de8240bf-9473-4677-9f98-2b2ffbcbf40a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onClickOutside$Action() {
                if (!(this.hasOwnProperty("_onClickOutside$Action"))) {
                    this._onClickOutside$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickOutside$Action;
            }
            set onClickOutside$Action(value) {
                this._onClickOutside$Action = value;
            }


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = null;
                }

                return this._onInitializeEventHandler;
            }
            set onInitializeEventHandler(value) {
                this._onInitializeEventHandler = value;
            }

            get onReadyEventHandler() {
                if (!(this.hasOwnProperty("_onReadyEventHandler"))) {
                    this._onReadyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
                }

                return this._onReadyEventHandler;
            }
            set onReadyEventHandler(value) {
                this._onReadyEventHandler = value;
            }

            get onRenderEventHandler() {
                if (!(this.hasOwnProperty("_onRenderEventHandler"))) {
                    this._onRenderEventHandler = null;
                }

                return this._onRenderEventHandler;
            }
            set onRenderEventHandler(value) {
                this._onRenderEventHandler = value;
            }

            get onDestroyEventHandler() {
                if (!(this.hasOwnProperty("_onDestroyEventHandler"))) {
                    this._onDestroyEventHandler = null;
                }

                return this._onDestroyEventHandler;
            }
            set onDestroyEventHandler(value) {
                this._onDestroyEventHandler = value;
            }

            get onParametersChangedEventHandler() {
                if (!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onParametersChanged$Action(callContext);

                    };
                }

                return this._onParametersChangedEventHandler;
            }
            set onParametersChangedEventHandler(value) {
                this._onParametersChangedEventHandler = value;
            }

            get handleError() {
                if (!(this.hasOwnProperty("_handleError"))) {
                    this._handleError = function(ex) {
                        return controller.handleError(ex);
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.Layouts.MobileModal.SetIsModalOpenProxy$vars", [{
            name: "NewIsModalOpenProxy",
            attrName: "newIsModalOpenProxyInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Layouts.MobileModal.mvc$controller.OnParametersChanged.AttachHideAnimsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (!$parameters.IsModalOpen) {
            const node = document.getElementsByClassName('mobile-popup')[0]
            const backdrop = document.getElementsByClassName('popup-backdrop')[0]
            if (node && backdrop) {
                node.style.animation = "0.25s ease-out forwards hide-mobile-popup"
                backdrop.style.animation = "0.25s ease-out forwards hide-popup-backdrop"
            }
        }

    };
});

define("PartnersHub.Layouts.MobileModal.mvc$controller.OnReady.OnClickOutsideJS", [], function() {
    return function($actions, $roles, $public) {
        document.addEventListener('mousedown', e => {
            const node = document.getElementsByClassName('mobile-popup')[0]
            const backdrop = document.getElementsByClassName('popup-backdrop')[0]
            if (node && backdrop) {
                node.style.animation = "0.25s ease-out forwards hide-mobile-popup"
                backdrop.style.animation = "0.25s ease-out forwards hide-popup-backdrop"
                if (!node.contains(e.target)) {
                    setTimeout(() => $actions.DispatchOnClickOutside(), 250);
                }
            }
        })
    };
});


define("PartnersHub.Layouts.MobileModal.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});