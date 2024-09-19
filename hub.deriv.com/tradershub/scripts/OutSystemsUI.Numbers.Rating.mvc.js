define("OutSystemsUI.Numbers.Rating.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure", "OutSystemsUI.controller$RatingRegisterCallback", "OutSystemsUI.controller$RatingCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$RatingInitialize", "OutSystemsUI.controller$RatingDestroy", "OutSystemsUI.controller$RatingChangeSize", "OutSystemsUI.controller$RatingChangeRatingValue", "OutSystemsUI.controller$RatingChangeRatingScale", "OutSystemsUI.controller$RatingChangeIsEdit", "OutSystemsUI.controller$RatingChangeExtendedClass"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure());
                    }, false, OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure),
                    this.attr("RatingValue", "ratingValueIn", "RatingValue", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, false),
                    this.attr("_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", "_ratingValueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("RatingScale", "ratingScaleIn", "RatingScale", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 5;
                    }, false),
                    this.attr("_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", "_ratingScaleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsEdit", "isEditIn", "IsEdit", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isEditInDataFetchStatus", "_isEditInDataFetchStatus", "_isEditInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Size", "sizeIn", "Size", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("RatingValue" in inputs) {
                this.variables.ratingValueIn = inputs.RatingValue;
                if ("_ratingValueInDataFetchStatus" in inputs) {
                    this.variables._ratingValueInDataFetchStatus = inputs._ratingValueInDataFetchStatus;
                }

            }

            if ("RatingScale" in inputs) {
                this.variables.ratingScaleIn = inputs.RatingScale;
                if ("_ratingScaleInDataFetchStatus" in inputs) {
                    this.variables._ratingScaleInDataFetchStatus = inputs._ratingScaleInDataFetchStatus;
                }

            }

            if ("IsEdit" in inputs) {
                this.variables.isEditIn = inputs.IsEdit;
                if ("_isEditInDataFetchStatus" in inputs) {
                    this.variables._isEditInDataFetchStatus = inputs._isEditInDataFetchStatus;
                }

            }

            if ("Size" in inputs) {
                this.variables.sizeIn = inputs.Size;
                if ("_sizeInDataFetchStatus" in inputs) {
                    this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
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

define("OutSystemsUI.Numbers.Rating.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Numbers.Rating.mvc$model", "OutSystemsUI.Numbers.Rating.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure", "OutSystemsUI.controller$RatingRegisterCallback", "OutSystemsUI.controller$RatingCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$RatingInitialize", "OutSystemsUI.controller$RatingDestroy", "OutSystemsUI.controller$RatingChangeSize", "OutSystemsUI.controller$RatingChangeRatingValue", "OutSystemsUI.controller$RatingChangeRatingScale", "OutSystemsUI.controller$RatingChangeIsEdit", "OutSystemsUI.controller$RatingChangeExtendedClass"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Numbers_Rating_mvc_model, OutSystemsUI_Numbers_Rating_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Numbers.Rating";
        }

        static getAttributes() {
            return {
                codeFunction: "Rating",
                functionKey: "5b620d10-93dc-4232-8db0-79fbc4bf83b9",
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
            return OutSystemsUI_Numbers_Rating_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Numbers_Rating_mvc_controller;
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
                extendedProperties: {
                    name: model.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "rating",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Rating"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "fieldset",
                _idProps: {
                    service: idService,
                    name: "Fieldset"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "wcag-hide-text"
                },
                tag: "legend",
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("arVVe3kmtEySH2hfvXjAOw#Value", "Rating"))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "icon-states",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "IconSates"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.filledState,
                style: "rating-item-filled",
                _idProps: {
                    service: idService,
                    name: "FilledState"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.halfState,
                    style: "rating-item-half",
                    _idProps: {
                        service: idService,
                        name: "HalfState"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.emptyState,
                    style: "rating-item-empty",
                    _idProps: {
                        service: idService,
                        name: "EmptyState"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })))));
        }
    }

    return View;
});
define("OutSystemsUI.Numbers.Rating.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Numbers.Rating.mvc$translationsResources", "OutSystemsUI.Numbers.Rating.mvc$controller.RegisterCallback.GetCallbackHandlerJS", "OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure", "OutSystemsUI.controller$RatingRegisterCallback", "OutSystemsUI.controller$RatingCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$RatingInitialize", "OutSystemsUI.controller$RatingDestroy", "OutSystemsUI.controller$RatingChangeSize", "OutSystemsUI.controller$RatingChangeRatingValue", "OutSystemsUI.controller$RatingChangeRatingScale", "OutSystemsUI.controller$RatingChangeIsEdit", "OutSystemsUI.controller$RatingChangeExtendedClass"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Numbers_Rating_mvc_TranslationsResources, OutSystemsUI_Numbers_Rating_mvc_controller_RegisterCallback_GetCallbackHandlerJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Numbers_Rating_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    initializedHandler$Action: function(ratingIdIn) {
                        ratingIdIn = (ratingIdIn === undefined) ? "" : ratingIdIn;
                        return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(ratingIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "InitializedHandler");
                    },
                    onSelectHandler$Action: function(ratingIdIn, valueIn) {
                        ratingIdIn = (ratingIdIn === undefined) ? "" : ratingIdIn;
                        valueIn = (valueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : valueIn;
                        return controller.executeActionInsideJSNode(controller._onSelectHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(ratingIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Decimal)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "OnSelectHandler");
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
            get _registerCallback$Action() {
                if (!(this.hasOwnProperty("__registerCallback$Action"))) {
                    this.__registerCallback$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RegisterCallback", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RegisterCallback");
                                span.setAttribute("outsystems.function.key", "53539d73-b016-454d-a464-0d732018b34f");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RegisterCallback");
                                callContext = controller.callContext(callContext);
                                var getCallbackHandlerJSResult = new OS.DataTypes.VariableHolder();
                                getCallbackHandlerJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandler", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetCallbackHandler");
                                        span.setAttribute("outsystems.function.key", "c0543a17-2259-43a9-a309-929c7db1184e");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Numbers_Rating_mvc_controller_RegisterCallback_GetCallbackHandlerJS, "GetCallbackHandler", "RegisterCallback", {
                                            OnInitializedHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                                            OnSelectHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.RegisterCallback$getCallbackHandlerJSResult"))();
                                            jsNodeResult.onInitializedHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnInitializedHandler, OS.DataTypes.DataTypes.Object);
                                            jsNodeResult.onSelectHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnSelectHandler, OS.DataTypes.DataTypes.Object);
                                            return jsNodeResult;
                                        }, {
                                            InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
                                            OnSelectHandler: controller.clientActionProxies.onSelectHandler$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: RatingRegisterInitializedCallback
                                OutSystemsUIController.default.ratingRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlerJSResult.value.onInitializedHandlerOut, callContext);
                                // Execute Action: RatingRegisterOnSelectCallback
                                OutSystemsUIController.default.ratingRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.onSelected, getCallbackHandlerJSResult.value.onSelectHandlerOut, callContext);
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "7d3cd0a9-811e-4b40-abb4-14445aa1b8cb");
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
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Rating", callContext);
                                // Execute Action: GenerateUniqueId
                                generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                                // Set Initial Configs
                                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                                // InternalConfigs.RatingScale = RatingScale
                                model.variables.internalConfigsVar.ratingScaleAttr = model.variables.ratingScaleIn;
                                // InternalConfigs.RatingValue = RatingValue
                                model.variables.internalConfigsVar.ratingValueAttr = model.variables.ratingValueIn;
                                // InternalConfigs.IsEdit = IsEdit
                                model.variables.internalConfigsVar.isEditAttr = model.variables.isEditIn;
                                // InternalConfigs.Size = Size
                                model.variables.internalConfigsVar.sizeAttr = model.variables.sizeIn;
                                // InternalConfigs.ExtendedClass = ExtendedClass
                                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                // JSON Serialize: Serialize_configs
                                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
                                // Execute Action: RatingCreate
                                OutSystemsUIController.default.ratingCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
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

            get _onSelectHandler$Action() {
                if (!(this.hasOwnProperty("__onSelectHandler$Action"))) {
                    this.__onSelectHandler$Action = function(ratingIdIn, valueIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSelectHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSelectHandler");
                                span.setAttribute("outsystems.function.key", "87ba2f83-4e3a-4783-a105-7760ab2b2494");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnSelectHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.OnSelectHandler$vars"))());
                                vars.value.ratingIdInLocal = ratingIdIn;
                                vars.value.valueInLocal = valueIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // InternalConfigs.RatingValue = Value
                                    model.variables.internalConfigsVar.ratingValueAttr = vars.value.valueInLocal;
                                    // Trigger Event: OnSelectValue
                                    return controller.onSelect$Action(vars.value.ratingIdInLocal, vars.value.valueInLocal, callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onSelectHandler$Action;
            }
            set _onSelectHandler$Action(value) {
                this.__onSelectHandler$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ab94f8d0-5183-4712-b3a4-7ea43e9f7ff1");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RatingInitialize
                                OutSystemsUIController.default.ratingInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                                // Execute Action: LogEnd
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Rating created", callContext);
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

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "b9b4e5d8-29df-4329-97ad-34959b7ca41f");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RatingDestroy
                                OutSystemsUIController.default.ratingDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
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
                                span.setAttribute("outsystems.function.key", "c6ee0d8b-03f8-4b01-b1e6-ad85f935a1bd");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                if ((((model.variables.ratingScaleIn > 0) && ((model.variables.ratingScaleIn) !== (model.variables.internalConfigsVar.ratingScaleAttr))))) {
                                    // InternalConfigs.RatingScale = RatingScale
                                    model.variables.internalConfigsVar.ratingScaleAttr = model.variables.ratingScaleIn;
                                    // Execute Action: RatingChangeRatingScale
                                    OutSystemsUIController.default.ratingChangeRatingScale$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.ratingScaleAttr, callContext);
                                }

                                if ((((OS.BuiltinFunctions.decimalToText(model.variables.ratingValueIn)) !== (OS.BuiltinFunctions.decimalToText(model.variables.internalConfigsVar.ratingValueAttr))))) {
                                    // InternalConfigs.RatingValue = RatingValue
                                    model.variables.internalConfigsVar.ratingValueAttr = model.variables.ratingValueIn;
                                    // Execute Action: RatingChangeRatingValue
                                    OutSystemsUIController.default.ratingChangeRatingValue$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.ratingValueAttr, callContext);
                                }

                                if ((((model.variables.isEditIn) !== (model.variables.internalConfigsVar.isEditAttr)))) {
                                    // InternalConfigs.IsEdit = IsEdit
                                    model.variables.internalConfigsVar.isEditAttr = model.variables.isEditIn;
                                    // Execute Action: RatingChangeIsEdit
                                    OutSystemsUIController.default.ratingChangeIsEdit$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.isEditAttr, callContext);
                                }

                                if ((((model.variables.sizeIn) !== (model.variables.internalConfigsVar.sizeAttr)))) {
                                    // InternalConfigs.Size = Size
                                    model.variables.internalConfigsVar.sizeAttr = model.variables.sizeIn;
                                    // Execute Action: RatingChangeSize
                                    OutSystemsUIController.default.ratingChangeSize$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.sizeAttr, callContext);
                                }

                                if ((((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
                                    // InternalConfigs.ExtendedClass = ExtendedClass
                                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                    // Execute Action: RatingChangeExtendedClass
                                    OutSystemsUIController.default.ratingChangeExtendedClass$Action(model.variables.internalConfigsVar.uniqueIdAttr, model.variables.internalConfigsVar.extendedClassAttr, callContext);
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

            get _initializedHandler$Action() {
                if (!(this.hasOwnProperty("__initializedHandler$Action"))) {
                    this.__initializedHandler$Action = function(ratingIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("InitializedHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "InitializedHandler");
                                span.setAttribute("outsystems.function.key", "e0c56d54-1695-4da9-bde8-73653b4fbf5e");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("InitializedHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.InitializedHandler$vars"))());
                                vars.value.ratingIdInLocal = ratingIdIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: Initialized
                                    return controller.initialized$Action(vars.value.ratingIdInLocal, callContext);
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


            registerCallback$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RegisterCallback__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RegisterCallback");
                        span.setAttribute("outsystems.function.key", "53539d73-b016-454d-a464-0d732018b34f");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "7d3cd0a9-811e-4b40-abb4-14445aa1b8cb");
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

            onSelectHandler$Action(ratingIdIn, valueIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSelectHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSelectHandler");
                        span.setAttribute("outsystems.function.key", "87ba2f83-4e3a-4783-a105-7760ab2b2494");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onSelectHandler$Action, callContext, ratingIdIn, valueIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "ab94f8d0-5183-4712-b3a4-7ea43e9f7ff1");
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

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "b9b4e5d8-29df-4329-97ad-34959b7ca41f");
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
                        span.setAttribute("outsystems.function.key", "c6ee0d8b-03f8-4b01-b1e6-ad85f935a1bd");
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

            initializedHandler$Action(ratingIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("InitializedHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializedHandler");
                        span.setAttribute("outsystems.function.key", "e0c56d54-1695-4da9-bde8-73653b4fbf5e");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, ratingIdIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onSelect$Action() {
                if (!(this.hasOwnProperty("_onSelect$Action"))) {
                    this._onSelect$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onSelect$Action;
            }
            set onSelect$Action(value) {
                this._onSelect$Action = value;
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
        Controller.registerVariableGroupType("OutSystemsUI.Numbers.Rating.RegisterCallback$getCallbackHandlerJSResult", [{
            name: "OnInitializedHandler",
            attrName: "onInitializedHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "OnSelectHandler",
            attrName: "onSelectHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Numbers.Rating.OnSelectHandler$vars", [{
            name: "RatingId",
            attrName: "ratingIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Value",
            attrName: "valueInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Decimal,
            defaultValue: function() {
                return OS.DataTypes.Decimal.defaultValue;
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Numbers.Rating.InitializedHandler$vars", [{
            name: "RatingId",
            attrName: "ratingIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Numbers.Rating.mvc$controller.RegisterCallback.GetCallbackHandlerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.OnInitializedHandler = $actions.InitializedHandler;
        $parameters.OnSelectHandler = $actions.OnSelectHandler;
    };
});


define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.ar", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "تقييم"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.de-DE", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Bewertung"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.en", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Rating"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.es", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Calificación"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.fr-CA", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Évaluation"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.fr-FR", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Évaluation"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.hi-IN", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "रेटिंग"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.it-IT", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Valutazione"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.ja-JP", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "評価"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.ko-KR", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "평가"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.nl", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Beoordeling"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.pt", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Avaliação"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.pt-BR", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Avaliação"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-CN", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "评级"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-Hans", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "评级"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-Hant", [], function() {
    return {
        "arVVe3kmtEySH2hfvXjAOw#Value": "評分"
    };
});

define("OutSystemsUI.Numbers.Rating.mvc$translationsResources", ["exports", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.ar", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.de-DE", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.en", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.es", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.fr-CA", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.fr-FR", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.hi-IN", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.it-IT", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.ja-JP", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.ko-KR", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.nl", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.pt", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.pt-BR", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-CN", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-Hans", "OutSystemsUI.Numbers.Rating.mvc$translationsResources.zh-Hant"], function(exports, OutSystemsUI_Numbers_Rating_mvc_translationsResources_ar, OutSystemsUI_Numbers_Rating_mvc_translationsResources_deDE, OutSystemsUI_Numbers_Rating_mvc_translationsResources_en, OutSystemsUI_Numbers_Rating_mvc_translationsResources_es, OutSystemsUI_Numbers_Rating_mvc_translationsResources_frCA, OutSystemsUI_Numbers_Rating_mvc_translationsResources_frFR, OutSystemsUI_Numbers_Rating_mvc_translationsResources_hiIN, OutSystemsUI_Numbers_Rating_mvc_translationsResources_itIT, OutSystemsUI_Numbers_Rating_mvc_translationsResources_jaJP, OutSystemsUI_Numbers_Rating_mvc_translationsResources_koKR, OutSystemsUI_Numbers_Rating_mvc_translationsResources_nl, OutSystemsUI_Numbers_Rating_mvc_translationsResources_pt, OutSystemsUI_Numbers_Rating_mvc_translationsResources_ptBR, OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhCN, OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhHans, OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhHant) {
    return {
        "ar": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_ar,
            "isRTL": true
        },
        "de-DE": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "en": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_en,
            "isRTL": false
        },
        "es": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_es,
            "isRTL": false
        },
        "fr-CA": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_frCA,
            "isRTL": false
        },
        "fr-FR": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "hi-IN": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_hiIN,
            "isRTL": false
        },
        "it-IT": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "ja-JP": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_jaJP,
            "isRTL": false
        },
        "ko-KR": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_koKR,
            "isRTL": false
        },
        "nl": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_nl,
            "isRTL": false
        },
        "pt": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_pt,
            "isRTL": false
        },
        "pt-BR": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_ptBR,
            "isRTL": false
        },
        "zh-CN": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhCN,
            "isRTL": false
        },
        "zh-Hans": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhHans,
            "isRTL": false
        },
        "zh-Hant": {
            "translations": OutSystemsUI_Numbers_Rating_mvc_translationsResources_zhHant,
            "isRTL": false
        }
    };
});