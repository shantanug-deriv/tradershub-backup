define("OutSystemsUI.Interaction.Search.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SearchCreate", "OutSystemsUI.controller$SearchInitialize", "OutSystemsUI.controller$SearchRegisterCallback", "OutSystemsUI.controller$SearchChangeTextProperty", "OutSystemsUI.controller$SearchDestroy"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure());
                    }, false, OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure),
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

define("OutSystemsUI.Interaction.Search.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.Search.mvc$model", "OutSystemsUI.Interaction.Search.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SearchCreate", "OutSystemsUI.controller$SearchInitialize", "OutSystemsUI.controller$SearchRegisterCallback", "OutSystemsUI.controller$SearchChangeTextProperty", "OutSystemsUI.controller$SearchDestroy"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_Search_mvc_model, OutSystemsUI_Interaction_Search_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Interaction.Search";
        }

        static getAttributes() {
            return {
                codeFunction: "Search",
                functionKey: "4fa4ad57-278f-47ec-9dd8-527c45a0eac9",
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
            return OutSystemsUI_Interaction_Search_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_Search_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        role: "search",
                        name: model.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-search",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.input,
                    style: "osui-search__input",
                    _idProps: {
                        service: idService,
                        name: "Input"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.Search.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.Search.mvc$translationsResources", "OutSystemsUI.Interaction.Search.mvc$controller.RegisterCallback.GetCallbackHandlersJS", "OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$SearchCreate", "OutSystemsUI.controller$SearchInitialize", "OutSystemsUI.controller$SearchRegisterCallback", "OutSystemsUI.controller$SearchChangeTextProperty", "OutSystemsUI.controller$SearchDestroy"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_Search_mvc_TranslationsResources, OutSystemsUI_Interaction_Search_mvc_controller_RegisterCallback_GetCallbackHandlersJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Interaction_Search_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    initializedHandler$Action: function(searchIdIn) {
                        searchIdIn = (searchIdIn === undefined) ? "" : searchIdIn;
                        return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
                                var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // Execute Action: LogStart
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Search", callContext);
                                // Execute Action: GenerateUniqueId
                                generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                                // Set Initial Configs
                                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                                // InternalConfigs.ExtendedClass = ExtendedClass
                                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                // JSON Serialize: Serialize_configs
                                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
                                // Execute Action: SearchCreate
                                OutSystemsUIController.default.searchCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
                                // Execute Action: RegisterCallback
                                controller._registerCallback$Action(callContext);
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
                                span.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SearchInitialize
                                OutSystemsUIController.default.searchInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                                // Execute Action: LogEnd
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Search created", callContext);
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

            get _registerCallback$Action() {
                if (!(this.hasOwnProperty("__registerCallback$Action"))) {
                    this.__registerCallback$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RegisterCallback", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RegisterCallback");
                                span.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RegisterCallback");
                                callContext = controller.callContext(callContext);
                                var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
                                getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetCallbackHandlers");
                                        span.setAttribute("outsystems.function.key", "9c432a08-c627-4b5d-91f6-501d1160194d");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Interaction_Search_mvc_controller_RegisterCallback_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallback", {
                                            Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult"))();
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
                                OutSystemsUIController.default.searchRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Initialized", getCallbackHandlersJSResult.value.initializedOut, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__registerCallback$Action;
            }
            set _registerCallback$Action(value) {
                this.__registerCallback$Action = value;
            }

            get _initializedHandler$Action() {
                if (!(this.hasOwnProperty("__initializedHandler$Action"))) {
                    this.__initializedHandler$Action = function(searchIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("InitializedHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "InitializedHandler");
                                span.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("InitializedHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars"))());
                                vars.value.searchIdInLocal = searchIdIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: Initialized
                                    return controller.initialized$Action(vars.value.searchIdInLocal, callContext);
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

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                if ((((model.variables.internalConfigsVar.extendedClassAttr) !== (model.variables.extendedClassIn)))) {
                                    // InternalConfigs.ExtendedClass = ExtendedClass
                                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                    // Execute Action: Update_ExtendedClass
                                    OutSystemsUIController.default.searchChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
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

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SearchDestroy
                                OutSystemsUIController.default.searchDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055");
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
                        span.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751");
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

            registerCallback$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RegisterCallback__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RegisterCallback");
                        span.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._registerCallback$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            initializedHandler$Action(searchIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("InitializedHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializedHandler");
                        span.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, searchIdIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c");
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

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172");
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
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult", [{
            name: "Initialized",
            attrName: "initializedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars", [{
            name: "SearchId",
            attrName: "searchIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Interaction.Search.mvc$controller.RegisterCallback.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Initialized = $actions.InitializedHandler;
    };
});


define("OutSystemsUI.Interaction.Search.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});