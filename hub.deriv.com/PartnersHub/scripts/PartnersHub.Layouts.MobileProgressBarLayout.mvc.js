define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Numbers_ProgressBar_mvcModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("BackStep", "backStepIn", "BackStep", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, false),
                    this.attr("_backStepInDataFetchStatus", "_backStepInDataFetchStatus", "_backStepInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = ((OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets || CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("BackStep" in inputs) {
                this.variables.backStepIn = inputs.BackStep;
                if ("_backStepInDataFetchStatus" in inputs) {
                    this.variables._backStepInDataFetchStatus = inputs._backStepInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$model", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Layouts_MobileProgressBarLayout_mvc_model, PartnersHub_Layouts_MobileProgressBarLayout_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.MobileProgressBarLayout";
        }

        static getAttributes() {
            return {
                codeFunction: "MobileProgressBarLayout",
                functionKey: "9120c7c0-65b0-4d0e-97b7-1c9f7deeb6cc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.MobileProgressBarLayout.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_MobileProgressBarLayout_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_MobileProgressBarLayout_mvc_controller;
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
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; background: #fff; display: flex; justify-content: space-between;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProgressBarMobileHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickBack$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "margin-top: 5px;"
                },
                gridProperties: {
                    marginLeft: "15px"
                },
                visible: (PartnersHubClientVariables.getCurrentStepperPage() > 1),
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.backicon2.png"),
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
                    style: "background: #fff; margin-top: 5px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "95%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
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
                    OptionalConfigs: model.getCachedValue(idService.getId("hEY8LH1bJkaFT0LzcqP+IA.OptionalConfigs"), function() {
                        return function() {
                            var rec = new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure();
                            return rec;
                        }();
                    }),
                    Thickness: 8,
                    ProgressColor: PartnersHubModel.staticEntities.color.primary,
                    Progress: PartnersHubClientVariables.getProgressBarLength()
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
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            })), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickClose$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer; font-weight: normal; margin-right: 10px; margin-top: 4px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Content2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: "main"
                },
                style: "wrapper-container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.mainContent2,
                style: "main-container",
                _idProps: {
                    service: idService,
                    name: "MainContent2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; max-width: 400px; padding: 16px;"
                },
                showPopup: model.variables.isExitModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "display-flex flex-direction-column",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("PUZk8rTKV0S6uWyOIu9xxQ#Value", "Exit profile setup?"))],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("2iMvGgd9qEuJciPIJfkzRw#Value", "Complete the setup to access custom commission plans."))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Width: "100%",
                    height: "40px",
                    title: "Finish setup",
                    enabled: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "17",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(CustomComponents_ButtonVariants_SecondaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    title: "Exit",
                    Width: "100%",
                    height: "40px",
                    BorderColor: "#FF444F",
                    TextColor: "FF444F"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.secondaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "18",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_MobileProgressBarLayout_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_MobileProgressBarLayout_mvc_TranslationsResources);
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
            get _primaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
                    this.__primaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PrimaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PrimaryButtononClick");
                                span.setAttribute("outsystems.function.key", "8a9917ba-fea5-457e-bd8b-898e88483567");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PrimaryButtononClick");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__primaryButtononClick$Action;
            }
            set _primaryButtononClick$Action(value) {
                this.__primaryButtononClick$Action = value;
            }

            get _onClickBack$Action() {
                if (!(this.hasOwnProperty("__onClickBack$Action"))) {
                    this.__onClickBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBack");
                                span.setAttribute("outsystems.function.key", "e12a45cb-7d73-4144-bead-be4c88d4591f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBack");
                                callContext = controller.callContext(callContext);
                                // ProgressBarLength = If
                                PartnersHubClientVariables.setProgressBarLength((((PartnersHubClientVariables.getProgressBarLength() > 0)) ? ((PartnersHubClientVariables.getProgressBarLength() - (9 * model.variables.backStepIn))) : (0)));
                                // CurrentStepperPage = CurrentStepperPage - BackStep
                                PartnersHubClientVariables.setCurrentStepperPage((PartnersHubClientVariables.getCurrentStepperPage() - model.variables.backStepIn));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickBack$Action;
            }
            set _onClickBack$Action(value) {
                this.__onClickBack$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e7bf86eb-716a-4569-aa24-2af0b073cb9a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: AddFavicon
                                addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.ico", callContext);

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

            get _secondaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__secondaryButtononClick$Action"))) {
                    this.__secondaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SecondaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SecondaryButtononClick");
                                span.setAttribute("outsystems.function.key", "ef8bcef9-2850-47e7-bfa1-6e9ff9456491");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SecondaryButtononClick");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__secondaryButtononClick$Action;
            }
            set _secondaryButtononClick$Action(value) {
                this.__secondaryButtononClick$Action = value;
            }

            get _onClickClose$Action() {
                if (!(this.hasOwnProperty("__onClickClose$Action"))) {
                    this.__onClickClose$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickClose", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickClose");
                                span.setAttribute("outsystems.function.key", "f4fcae6e-91b9-493d-a302-8178d4945b3a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickClose");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = True
                                model.variables.isExitModalOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickClose$Action;
            }
            set _onClickClose$Action(value) {
                this.__onClickClose$Action = value;
            }


            primaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PrimaryButtononClick");
                        span.setAttribute("outsystems.function.key", "8a9917ba-fea5-457e-bd8b-898e88483567");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBack");
                        span.setAttribute("outsystems.function.key", "e12a45cb-7d73-4144-bead-be4c88d4591f");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickBack$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "e7bf86eb-716a-4569-aa24-2af0b073cb9a");
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

            secondaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SecondaryButtononClick");
                        span.setAttribute("outsystems.function.key", "ef8bcef9-2850-47e7-bfa1-6e9ff9456491");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._secondaryButtononClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickClose$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickClose__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickClose");
                        span.setAttribute("outsystems.function.key", "f4fcae6e-91b9-493d-a302-8178d4945b3a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickClose$Action, callContext);
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
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.de-DE", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Vervollständigen Sie die Einrichtung, um auf benutzerdefinierte Provisionspläne zuzugreifen.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Profilausgang einrichten?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.es-ES", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Complete la configuración para acceder a planes de comisiones personalizados.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "¿Configurar el perfil de salida?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.fr-FR", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Complétez la configuration pour accéder aux plans de commission personnalisés.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Configurer le profil de sortie ?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.it-IT", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Completa la configurazione per accedere ai piani di commissione personalizzati.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Impostazione del profilo di uscita?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.pl-PL", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Ukończ konfigurację, aby uzyskać dostęp do niestandardowych planów prowizji.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Ustawienie profilu wyjścia?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.pt-PT", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Complete a configuração para aceder a planos de comissões personalizados.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Configurar perfil de saída?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.ru-RU", [], function() {
    return {
        "2iMvGgd9qEuJciPIJfkzRw#Value": "Завершите настройку, чтобы получить доступ к пользовательским планам комиссий.",
        "PUZk8rTKV0S6uWyOIu9xxQ#Value": "Настройка профиля выхода?"
    };
});

define("PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources", ["exports", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.de-DE", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.es-ES", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.it-IT", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_deDE, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_esES, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_frFR, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_itIT, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_plPL, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_ptPT, PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Layouts_MobileProgressBarLayout_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});