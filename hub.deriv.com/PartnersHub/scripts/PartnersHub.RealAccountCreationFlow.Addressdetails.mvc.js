define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StatesListResponse", "statesListResponseIn", "StatesListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure());
                    }, false, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure),
                    this.attr("_statesListResponseInDataFetchStatus", "_statesListResponseInDataFetchStatus", "_statesListResponseInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                Form1: OS.Model.ValidationWidgetRecord,
                Address: OS.Model.ValidationWidgetRecord,
                TownCity: OS.Model.ValidationWidgetRecord,
                Dropdown1: OS.Model.ValidationWidgetRecord,
                Input2: OS.Model.ValidationWidgetRecord,
                Input1: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {
            if ("StatesListResponse" in inputs) {
                this.variables.statesListResponseIn = inputs.StatesListResponse;
                if ("_statesListResponseInDataFetchStatus" in inputs) {
                    this.variables._statesListResponseInDataFetchStatus = inputs._statesListResponseInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$model", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_model, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.Addressdetails";
        }

        static getAttributes() {
            return {
                codeFunction: "Addressdetails",
                functionKey: "0093037a-f0a0-416b-ae05-98b6eb89ca5f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.Addressdetails.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 24px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "\"form card\"",
                _idProps: {
                    service: idService,
                    name: "Form1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("zHHcoTVxk0CRNWD9hfFEWA#Value", "Address"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your address",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupAddress(), function(value) {
                    PartnersHubClientVariables.setRealSignupAddress(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Address"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("vMrtBlSaikylH2KAcEW6IA#Value", "Town/City"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your town/city",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTownCity(), function(value) {
                    PartnersHubClientVariables.setRealSignupTownCity(value);
                }),
                _idProps: {
                    service: idService,
                    name: "TownCity"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "margin-bottom: 6px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("oXf1D8XdYEu4kkW1oi+PEQ#Value", "State/Province (optional)"))), React.createElement(OSWidgets.Dropdown, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    dropdownMode: /*Custom*/ 1,
                    emptyValue: "Select your state/province",
                    enabled: (model.variables.statesListResponseIn.states_listAttr.length > 0),
                    list: model.variables.statesListResponseIn.states_listAttr,
                    mandatory: false,
                    style: "dropdown",
                    values: function(elem) {
                        return elem.textAttr;
                    },
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupStateProvince(), function(value) {
                        PartnersHubClientVariables.setRealSignupStateProvince(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "Dropdown1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statesListResponseInDataFetchStatus),
                    list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statesListResponseInDataFetchStatus),
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.Expression, {
                                value: model.variables.statesListResponseIn.states_listAttr.getCurrent(callContext.iterationContext).textAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statesListResponseInDataFetchStatus),
                                _dependencies: []
                            })];
                        }, callContext, idService, "1")
                    },
                    _dependencies: [asPrimitiveValue(model.variables._statesListResponseInDataFetchStatus)]
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("VflU1Ll_2kKj16bUwcatLA#Value", "State/Province (optional)"))), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        AlignIconRight: true
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        }
                    },
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    _idProps: {
                        service: idService,
                        uuid: "14",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        icon: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "angle-down",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        input: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form1")
                                },
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.input2OnClick$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: false,
                                maxLength: 50,
                                prompt: "Select your state/province",
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupStateProvince(), function(value) {
                                    PartnersHubClientVariables.setRealSignupStateProvince(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Input2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupStateProvince())]
                }))];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("k8QD9Tu5pEKxQ8W5PhXhZg#Value", "Postal/ZIP code (optional)"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: false,
                maxLength: 50,
                prompt: "Enter your postal/ZIP code",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupPostalZip(), function(value) {
                    PartnersHubClientVariables.setRealSignupPostalZip(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; justify-content: flex-end;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form1"));
                    var eventHandlerContext = callContext.clone();
                    controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "next-step-button",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-weight: bold;"
                },
                text: [$text(getTranslation("CF8ZgUr5U06MNfq+GKepag#Value", "Next"))],
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_TranslationsResources);
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
            get _input2OnClick$Action() {
                if (!(this.hasOwnProperty("__input2OnClick$Action"))) {
                    this.__input2OnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input2OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input2OnClick");
                                span.setAttribute("outsystems.function.key", "95c0041e-dfbd-4ebb-9de2-9f0c40dcdd00");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input2OnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/StatesListScreen
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "StatesListScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__input2OnClick$Action;
            }
            set _input2OnClick$Action(value) {
                this.__input2OnClick$Action = value;
            }

            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "c487737d-cb6a-479b-b438-8e55401b109d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // Execute Action: NextStepReal
                                    PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
                                } else {
                                    // Address.ValidationMessage = "Address is required."
                                    model.widgets.get(idService.getId("Address")).validationMessageAttr = "Address is required.";
                                    // TownCity.ValidationMessage = "Town/City is required."
                                    model.widgets.get(idService.getId("TownCity")).validationMessageAttr = "Town/City is required.";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__saveOnClick$Action;
            }
            set _saveOnClick$Action(value) {
                this.__saveOnClick$Action = value;
            }


            input2OnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input2OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input2OnClick");
                        span.setAttribute("outsystems.function.key", "95c0041e-dfbd-4ebb-9de2-9f0c40dcdd00");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input2OnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "c487737d-cb6a-479b-b438-8e55401b109d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
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


define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.de-DE", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Nächste",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Postleitzahl (optional)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Bundesland (optional)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Bundesland (optional)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Stadt",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Adresse"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.es-ES", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Siguiente",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Código postal (opcional)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Estado/Provincia (opcional)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Estado/Provincia (opcional)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Ciudad",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Dirección"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.fr-FR", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Suivant",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Code postal (facultatif)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "État/Province (optionnel)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "État/Province (optionnel)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Ville",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Adresse"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.it-IT", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Successivo",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Codice postale (opzionale)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Stato/Provincia (opzionale)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Stato/Provincia (opzionale)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Città",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Indirizzo"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.pl-PL", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Następny",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Kod pocztowy (opcjonalnie)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Stan/Województwo (opcjonalnie)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Stan/Provincia (opcjonalnie)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Miasto",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Adres"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.pt-PT", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Próximo",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Código postal (opcional)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Estado/Província (opcional)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Estado/Província (opcional)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Cidade",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Endereço"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.ru-RU", [], function() {
    return {
        "CF8ZgUr5U06MNfq+GKepag#Value": "Далее",
        "k8QD9Tu5pEKxQ8W5PhXhZg#Value": "Почтовый индекс (по желанию)",
        "VflU1Ll_2kKj16bUwcatLA#Value": "Штат/Провинция (по желанию)",
        "oXf1D8XdYEu4kkW1oi+PEQ#Value": "Штат/Провинция (необязательно)",
        "vMrtBlSaikylH2KAcEW6IA#Value": "Город",
        "zHHcoTVxk0CRNWD9hfFEWA#Value": "Адрес"
    };
});

define("PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});