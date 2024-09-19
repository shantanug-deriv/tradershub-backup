define("tradershub.FinancialAssessmentFlow.Occupation.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsRequired", "isRequiredVar", "IsRequired", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    isRequiredVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                RadioGroup: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.FinancialAssessmentFlow.Occupation.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.FinancialAssessmentFlow.Occupation.mvc$model", "tradershub.FinancialAssessmentFlow.Occupation.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$view"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_FinancialAssessmentFlow_Occupation_mvc_model, tradershub_FinancialAssessmentFlow_Occupation_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.Occupation";
        }

        static getAttributes() {
            return {
                codeFunction: "Occupation",
                functionKey: "3e17e8dd-3ad2-429e-97ce-2a7c6edcad28",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.Occupation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_FinancialAssessmentFlow_Occupation_mvc_model;
        }

        get controllerFactory() {
            return tradershub_FinancialAssessmentFlow_Occupation_mvc_controller;
        }

        get title() {


            return "Occupation";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_RealAccountCreationLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "Financial assessment",
                    HideTitle: true
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                QuestionText: "Occupation",
                                IsRequired: model.variables.isRequiredVar,
                                Page: "3/8"
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.RadioGroup, {
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        enabled: true,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.radioGroupOnClick$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: false,
                                        style: "radio-group",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getFinancialAssessmentOccupation(), function(value) {
                                            tradershubClientVariables.setFinancialAssessmentOccupation(value);
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Chief Executives, Senior Officials and Legislators",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "ChiefExecutives_SeniorOfficialsandLegislators"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Chief Executives, Senior Officials, and Legislators"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Managers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Managers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Managers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Professionals",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Professionals"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Professionals"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Clerks",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Clerks"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Clerks"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Personal Care, Sales and Service Workers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "PersonalCare_SalesandServiceWorkers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Personal Care, Sales and Service Workers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Agricultural, Forestry and Fishery Workers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Agricultural_ForestryandFisheryWorkers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Agricultural, Forestry and Fishery Workers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Craft, Metal, Electrical and Electronics Workers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Craft_Metal_ElectricalandElectronicsWorkers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Craft, Metal, Electrical and Electronics Workers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Plant and Machine Operators and Assemblers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "PlantandMachineOperatorsandAssemblers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Plant and Machine Operators and Assemblers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Cleaners and Helpers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "CleanersandHelpers"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Cleaners and Helpers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Mining, Construction, Manufacturing and Transport Workers",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Mining_Construction_ManufacturingandTransportWorke"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Mining, Construction, Manufacturing and Transport Workers"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Armed Forces",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "ArmedForces"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Armed Forces"), React.createElement(OSWidgets.RadioButton, {
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Students",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Students"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Students")), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "btn-container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        isDefault: false,
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.nextOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Next"))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentOccupation())]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getFinancialAssessmentOccupation()), asPrimitiveValue(model.variables.isRequiredVar)]
            }));
        }
    }

    return View;
});
define("tradershub.FinancialAssessmentFlow.Occupation.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.FinancialAssessmentFlow.controller"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_FinancialAssessmentFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
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
            get _radioGroupOnClick$Action() {
                if (!(this.hasOwnProperty("__radioGroupOnClick$Action"))) {
                    this.__radioGroupOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RadioGroupOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RadioGroupOnClick");
                                span.setAttribute("outsystems.function.key", "33547f77-0c5b-4ba9-98ed-c06acab8f415");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RadioGroupOnClick");
                                callContext = controller.callContext(callContext);
                                // IsRequired = False
                                model.variables.isRequiredVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__radioGroupOnClick$Action;
            }
            set _radioGroupOnClick$Action(value) {
                this.__radioGroupOnClick$Action = value;
            }

            get _nextOnClick$Action() {
                if (!(this.hasOwnProperty("__nextOnClick$Action"))) {
                    this.__nextOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnClick");
                                span.setAttribute("outsystems.function.key", "3914997f-f7a4-4dda-9dba-be060750f96c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                if (((tradershubClientVariables.getFinancialAssessmentOccupation() === OS.BuiltinFunctions.nullTextIdentifier()))) {
                                    // IsRequired = True
                                    model.variables.isRequiredVar = true;
                                } else {
                                    // Destination: /tradershub/SourceOfWealth
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "financial-assessment/source-of-wealth", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__nextOnClick$Action;
            }
            set _nextOnClick$Action(value) {
                this.__nextOnClick$Action = value;
            }


            radioGroupOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RadioGroupOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RadioGroupOnClick");
                        span.setAttribute("outsystems.function.key", "33547f77-0c5b-4ba9-98ed-c06acab8f415");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._radioGroupOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "3914997f-f7a4-4dda-9dba-be060750f96c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._nextOnClick$Action, callContext);
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
                        return tradershub_FinancialAssessmentFlowController.default.handleError(ex, this.callContext());
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});