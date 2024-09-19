define("OutSystemsUI.Navigation.WizardItem.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model"], function(OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Status", "statusIn", "Status", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Status" in inputs) {
                this.variables.statusIn = inputs.Status;
                if ("_statusInDataFetchStatus" in inputs) {
                    this.variables._statusInDataFetchStatus = inputs._statusInDataFetchStatus;
                }

            }

            if ("UseTopLabel" in inputs) {
                this.variables.useTopLabelIn = inputs.UseTopLabel;
                if ("_useTopLabelInDataFetchStatus" in inputs) {
                    this.variables._useTopLabelInDataFetchStatus = inputs._useTopLabelInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Navigation.WizardItem.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Navigation.WizardItem.mvc$model", "OutSystemsUI.Navigation.WizardItem.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Navigation_WizardItem_mvc_model, OutSystemsUI_Navigation_WizardItem_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Navigation.WizardItem";
        }

        static getAttributes() {
            return {
                codeFunction: "WizardItem",
                functionKey: "a464a45b-2897-42b1-ab7d-a8ca3ccc3d1c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Navigation_WizardItem_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Navigation_WizardItem_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.triggerClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    },
                    onKeyPress: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.wizardItemOnKeypress$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    role: "tab",
                    tabIndex: model.getCachedValue(idService.getId("WizardWrapperItem.tabindex"), function() {
                        return ((((model.variables.statusIn === OutSystemsUIModel.staticEntities.steps.next)) ? (-1) : (0))).toString();
                    }, function() {
                        return model.variables.statusIn;
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("WizardWrapperItem.Style"), function() {
                    return (((("wizard-wrapper-item" + (((model.variables.statusIn === OS.BuiltinFunctions.nullTextIdentifier())) ? ("") : ((" " + model.variables.statusIn)))) + ((model.variables.useTopLabelIn) ? (" label-top") : (" label-bottom"))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.statusIn;
                }, function() {
                    return model.variables.useTopLabelIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "WizardWrapperItem"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statusInDataFetchStatus, model.variables._useTopLabelInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "wizard-item-icon-wrapper",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                style: "wizard-item-icon",
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.label,
                extendedProperties: {
                    "aria-current": model.getCachedValue(idService.getId("Label.aria-current"), function() {
                        return (((model.variables.statusIn === OutSystemsUIModel.staticEntities.steps.active)) ? ("step") : (""));
                    }, function() {
                        return model.variables.statusIn;
                    })
                },
                style: "wizard-item-label ph",
                _idProps: {
                    service: idService,
                    name: "Label"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("OutSystemsUI.Navigation.WizardItem.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Navigation.WizardItem.mvc$translationsResources", "OutSystemsUI.Navigation.WizardItem.mvc$controller.OnReady.SetAriaLabelJS", "OutSystemsUI.Navigation.WizardItem.mvc$controller.WizardItemOnKeypress.OnKeyPress_CheckEnterJS"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Navigation_WizardItem_mvc_TranslationsResources, OutSystemsUI_Navigation_WizardItem_mvc_controller_OnReady_SetAriaLabelJS, OutSystemsUI_Navigation_WizardItem_mvc_controller_WizardItemOnKeypress_OnKeyPress_CheckEnterJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Navigation_WizardItem_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    triggerClick$Action: function() {
                        return controller.executeActionInsideJSNode(controller._triggerClick$Action.bind(controller), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "TriggerClick");
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("SetAriaLabel", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "SetAriaLabel");
                                        span.setAttribute("outsystems.function.key", "5e15b99f-7182-4f9e-b579-f7aed8d10959");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Navigation_WizardItem_mvc_controller_OnReady_SetAriaLabelJS, "SetAriaLabel", "OnReady", {
                                            WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("WizardWrapperItem"), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
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

            get _triggerClick$Action() {
                if (!(this.hasOwnProperty("__triggerClick$Action"))) {
                    this.__triggerClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TriggerClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TriggerClick");
                                span.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TriggerClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnClick
                                    return controller.onClick$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__triggerClick$Action;
            }
            set _triggerClick$Action(value) {
                this.__triggerClick$Action = value;
            }

            get _wizardItemOnKeypress$Action() {
                if (!(this.hasOwnProperty("__wizardItemOnKeypress$Action"))) {
                    this.__wizardItemOnKeypress$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("WizardItemOnKeypress", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "WizardItemOnKeypress");
                                span.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("WizardItemOnKeypress");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("OnKeyPress_CheckEnter", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "OnKeyPress_CheckEnter");
                                        span.setAttribute("outsystems.function.key", "42174d82-1844-4efd-9901-f8b9db0600e7");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Navigation_WizardItem_mvc_controller_WizardItemOnKeypress_OnKeyPress_CheckEnterJS, "OnKeyPress_CheckEnter", "WizardItemOnKeypress", null, function($parameters) {}, {
                                            TriggerClick: controller.clientActionProxies.triggerClick$Action
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

                return this.__wizardItemOnKeypress$Action;
            }
            set _wizardItemOnKeypress$Action(value) {
                this.__wizardItemOnKeypress$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

            triggerClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TriggerClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TriggerClick");
                        span.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._triggerClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            wizardItemOnKeypress$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("WizardItemOnKeypress__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "WizardItemOnKeypress");
                        span.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._wizardItemOnKeypress$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onClick$Action() {
                if (!(this.hasOwnProperty("_onClick$Action"))) {
                    this._onClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClick$Action;
            }
            set onClick$Action(value) {
                this._onClick$Action = value;
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
                    this._onParametersChangedEventHandler = null;
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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Navigation.WizardItem.mvc$controller.OnReady.SetAriaLabelJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Set wizard elements
        var wizardWrapperItem = document.getElementById($parameters.WidgetId);
        var wizardItemLabel = wizardWrapperItem.querySelector('.wizard-item-label').textContent;

        // Set aria-label to wizard item wrapper
        wizardWrapperItem.setAttribute('aria-label', wizardItemLabel);
    };
});

define("OutSystemsUI.Navigation.WizardItem.mvc$controller.WizardItemOnKeypress.OnKeyPress_CheckEnterJS", [], function() {
    return function($actions, $roles, $public) {
        if (event.keyCode === 13) {
            $actions.TriggerClick()
        }
    };
});


define("OutSystemsUI.Navigation.WizardItem.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});