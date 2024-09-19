define("OutSystemsUI.Utilities.ButtonLoading.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure());
                    }, false, OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure),
                    this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

            if ("ShowLabelOnLoading" in inputs) {
                this.variables.showLabelOnLoadingIn = inputs.ShowLabelOnLoading;
                if ("_showLabelOnLoadingInDataFetchStatus" in inputs) {
                    this.variables._showLabelOnLoadingInDataFetchStatus = inputs._showLabelOnLoadingInDataFetchStatus;
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

define("OutSystemsUI.Utilities.ButtonLoading.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Utilities.ButtonLoading.mvc$model", "OutSystemsUI.Utilities.ButtonLoading.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_ButtonLoading_mvc_model, OutSystemsUI_Utilities_ButtonLoading_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Utilities.ButtonLoading";
        }

        static getAttributes() {
            return {
                codeFunction: "ButtonLoading",
                functionKey: "b6fb29b1-5745-4f43-b887-e98b7a5eb5d1",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Utilities_ButtonLoading_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Utilities_ButtonLoading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.button,
                extendedProperties: {
                    name: model.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: idService,
                    name: "Button"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Utilities.ButtonLoading.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.ButtonLoading.mvc$translationsResources", "OutSystemsUI.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_ButtonLoading_mvc_TranslationsResources, OutSystemsUI_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Utilities_ButtonLoading_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    initializedHandler$Action: function(buttonLoadingIdIn) {
                        buttonLoadingIdIn = (buttonLoadingIdIn === undefined) ? "" : buttonLoadingIdIn;
                        return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(buttonLoadingIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "InitializedHandler");
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
            get _initializedHandler$Action() {
                if (!(this.hasOwnProperty("__initializedHandler$Action"))) {
                    this.__initializedHandler$Action = function(buttonLoadingIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("InitializedHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "InitializedHandler");
                                span.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("InitializedHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars"))());
                                vars.value.buttonLoadingIdInLocal = buttonLoadingIdIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: Initialized
                                    return controller.initialized$Action(vars.value.buttonLoadingIdInLocal, callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__initializedHandler$Action;
            }
            set _initializedHandler$Action(value) {
                this.__initializedHandler$Action = value;
            }

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: ButtonLoadingDestroy
                                OutSystemsUIController.default.buttonLoadingDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onDestroy$Action;
            }
            set _onDestroy$Action(value) {
                this.__onDestroy$Action = value;
            }

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                // IsLoading?
                                if ((((model.variables.isLoadingIn) !== (model.variables.internal_ConfigsVar.isLoadingAttr)))) {
                                    // Set IsLoading
                                    // Internal_Configs.IsLoading = IsLoading
                                    model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
                                    // Execute Action: Update_IsLoading
                                    OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", model.variables.isLoadingIn, callContext);
                                }

                                // ShowLoadingAndLabel?
                                if ((((model.variables.showLabelOnLoadingIn) !== (model.variables.internal_ConfigsVar.showLoadingAndLabelAttr)))) {
                                    // Set ShowLoadingAndLabel
                                    // Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
                                    model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
                                    // Execute Action: Update_IsVisible
                                    OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", model.variables.internal_ConfigsVar.showLoadingAndLabelAttr, callContext);
                                }

                                // ExtendedClass?
                                if ((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
                                    // Set ExtendedClass
                                    // Internal_Configs.ExtendedClass = ExtendedClass
                                    model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                    // Execute Action: Update_ExtendedClass
                                    OutSystemsUIController.default.buttonLoadingChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _registerCallbacks$Action() {
                if (!(this.hasOwnProperty("__registerCallbacks$Action"))) {
                    this.__registerCallbacks$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RegisterCallbacks", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RegisterCallbacks");
                                span.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RegisterCallbacks");
                                callContext = controller.callContext(callContext);
                                var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
                                getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetCallbackHandlers");
                                        span.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
                                            Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"))();
                                            jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
                                            return jsNodeResult;
                                        }, {
                                            InitializedHandler: controller.clientActionProxies.initializedHandler$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: RegisterOnInitialize
                                OutSystemsUIController.default.buttonLoadingRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__registerCallbacks$Action;
            }
            set _registerCallbacks$Action(value) {
                this.__registerCallbacks$Action = value;
            }

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: LogStart
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create ButtonLoading", callContext);
                                // Execute Action: GenerateUniqueId
                                generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

                                // Set Internal Configs
                                // Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
                                model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                                // Internal_Configs.IsLoading = IsLoading
                                model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
                                // Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
                                model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
                                // Internal_Configs.ExtendedClass = ExtendedClass
                                model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                // Execute Action: ButtonLoadingCreate
                                OutSystemsUIController.default.buttonLoadingCreate$Action(model.variables.internal_ConfigsVar, callContext);
                                // Execute Action: RegisterCallbacks
                                controller._registerCallbacks$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: ButtonLoadingInitialize
                                OutSystemsUIController.default.buttonLoadingInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
                                // Execute Action: LogEnd
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "ButtonLoading created", callContext);
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


            initializedHandler$Action(buttonLoadingIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("InitializedHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializedHandler");
                        span.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, buttonLoadingIdIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            registerCallbacks$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RegisterCallbacks");
                        span.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5");
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

            get initialized$Action() {
                if (!(this.hasOwnProperty("_initialized$Action"))) {
                    this._initialized$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._initialized$Action;
            }
            set initialized$Action(value) {
                this._initialized$Action = value;
            }


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
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
                    this._onDestroyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onDestroy$Action(callContext);

                    };
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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
            name: "ButtonLoadingId",
            attrName: "buttonLoadingIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
            name: "Initialized",
            attrName: "initializedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Initialized = $actions.InitializedHandler;
    };
});


define("OutSystemsUI.Utilities.ButtonLoading.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});