define("PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.Common.StatesList.mvc$model"], function(OSRuntimeCore, PartnersHubModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_Common_StatesList_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
    OS.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets || PartnersHub_Common_StatesList_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$model", "PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$controller", "PartnersHub.clientVariables", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.StatesList.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_model, PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_controller, PartnersHubClientVariables, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, OSWidgets, PartnersHub_Common_StatesList_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.StatesListScreen";
        }

        static getAttributes() {
            return {
                codeFunction: "StatesListScreen",
                functionKey: "b1865a3a-871f-421e-a318-234e8a857beb",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_StatesList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("OlqGsR+HHkKjGCNOioV76w#Title", "StatesListScreen");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "State/Province",
                    HasBackButton: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onBack$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.fullScreenMobileModalOnBack$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_StatesList_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {},
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClickState$Action: function(selectedStateIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.statesListOnClickCountry$Action(selectedStateIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_StatesListScreen_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
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
            get _statesListOnClickCountry$Action() {
                if (!(this.hasOwnProperty("__statesListOnClickCountry$Action"))) {
                    this.__statesListOnClickCountry$Action = function(selectedStateIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("StatesListOnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "StatesListOnClickCountry");
                                span.setAttribute("outsystems.function.key", "b2a62b14-84ac-4660-a50a-a728d12c91bd");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("StatesListOnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.StatesListScreen.StatesListOnClickCountry$vars"))());
                                vars.value.selectedStateInLocal = selectedStateIn;
                                // RealSignupStateProvince = SelectedState
                                PartnersHubClientVariables.setRealSignupStateProvince(vars.value.selectedStateInLocal);
                                // Destination: /PartnersHub/RealAccountCreation
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__statesListOnClickCountry$Action;
            }
            set _statesListOnClickCountry$Action(value) {
                this.__statesListOnClickCountry$Action = value;
            }

            get _fullScreenMobileModalOnBack$Action() {
                if (!(this.hasOwnProperty("__fullScreenMobileModalOnBack$Action"))) {
                    this.__fullScreenMobileModalOnBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                                span.setAttribute("outsystems.function.key", "fe2ae986-1d73-4647-9d1d-bb7edb82360a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FullScreenMobileModalOnBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/RealAccountCreation
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__fullScreenMobileModalOnBack$Action;
            }
            set _fullScreenMobileModalOnBack$Action(value) {
                this.__fullScreenMobileModalOnBack$Action = value;
            }


            statesListOnClickCountry$Action(selectedStateIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("StatesListOnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "StatesListOnClickCountry");
                        span.setAttribute("outsystems.function.key", "b2a62b14-84ac-4660-a50a-a728d12c91bd");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._statesListOnClickCountry$Action, callContext, selectedStateIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            fullScreenMobileModalOnBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                        span.setAttribute("outsystems.function.key", "fe2ae986-1d73-4647-9d1d-bb7edb82360a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._fullScreenMobileModalOnBack$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

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
                    this._onReadyEventHandler = null;
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
                        return PartnersHub_RealAccountCreationFlowController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.StatesListScreen.StatesListOnClickCountry$vars", [{
            name: "SelectedState",
            attrName: "selectedStateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreationFlow.StatesListScreen.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});