define("PartnersHub.Home.CompleteMyProfile.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUI_Numbers_ProgressBar_mvcModel) {
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.CompleteMyProfile.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.CompleteMyProfile.mvc$model", "PartnersHub.Home.CompleteMyProfile.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_Home_CompleteMyProfile_mvc_model, PartnersHub_Home_CompleteMyProfile_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Numbers_ProgressBar_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.CompleteMyProfile";
        }

        static getAttributes() {
            return {
                codeFunction: "CompleteMyProfile",
                functionKey: "77fd153f-1428-463d-ab51-f305d3b0dfae",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CompleteMyProfile.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Numbers_ProgressBar_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_CompleteMyProfile_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_CompleteMyProfile_mvc_controller;
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
                        var eventHandlerContext = callContext.clone();
                        controller.onClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "complete-my-profile",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: ["Complete my profile"],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Step ", React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.getCachedValue(idService.getId("5lO5Y__sL0CwhX2+9HxxdQ.Value"), function() {
                    return ((((PartnersHubClientVariables.getRealSignupCurrentStep()).toString() + "/") + (((PartnersHubClientVariables.getRealSignupIsIDVSupported()) ? (8) : (7))).toString()) + ":");
                }, function() {
                    return PartnersHubClientVariables.getRealSignupCurrentStep();
                }, function() {
                    return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                }),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "5px"
                },
                value: PartnersHubClientVariables.getCurrentStepTitle(),
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Progress: PartnersHubClientVariables.getProgressBarLength(),
                    ProgressColor: PartnersHubModel.staticEntities.color.primary,
                    Thickness: 10
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("PartnersHub.Home.CompleteMyProfile.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_CompleteMyProfile_mvc_TranslationsResources) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_CompleteMyProfile_mvc_TranslationsResources);
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
            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
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

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }


            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});