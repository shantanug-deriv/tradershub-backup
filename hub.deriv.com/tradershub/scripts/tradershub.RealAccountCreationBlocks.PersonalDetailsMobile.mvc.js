define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel) {
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
            return {
                NameForm: OS.Model.ValidationWidgetRecord,
                Input_FirstName: OS.Model.ValidationWidgetRecord,
                Input_LastName: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$model", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_model, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.PersonalDetailsMobile";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsMobile",
                functionKey: "dbfca696-91b3-42d4-9476-b0c44b06bc53",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller;
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
                style: "full-width personal-details-section__mobile",
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
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "",
                _idProps: {
                    service: idService,
                    name: "NameForm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "flex-1 display-flex flex-direction-column",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_FirstName",
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "margin-bottom: 0px;"
                },
                text: ["First (and middle) name"],
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("NameForm")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your first (and middle) name",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupFirstName(), function(value) {
                    tradershubClientVariables.setRealSignupFirstName(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_FirstName"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "display-flex flex-direction-column gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_LastName",
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Last name"), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("NameForm")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "Enter your last name",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupLastName(), function(value) {
                    tradershubClientVariables.setRealSignupLastName(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_LastName"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 4px; margin-top: 16px; padding: 16px;"
                },
                style: "display-flex full-width gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: ["Enter your "],
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: ["name"],
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [" exactly as it appears on your identity document."],
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 10px; font-weight: bold;"
                },
                text: ["Example:"],
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 8px; text-align: center;"
                },
                style: "full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.content.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px; border-width: 0px;"
                },
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("NameForm"));
                    var eventHandlerContext = callContext.clone();
                    controller.onClickNext$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "btn btn-primary full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "",
                text: ["Next"],
                _idProps: {
                    service: idService,
                    uuid: "23"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller.OnClickNext.ValidateJS", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller.OnClickNext.RudderStackJS", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller_OnClickNext_ValidateJS, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller_OnClickNext_RudderStackJS) {
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
            get _onClickNext$Action() {
                if (!(this.hasOwnProperty("__onClickNext$Action"))) {
                    this.__onClickNext$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickNext", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickNext");
                                span.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickNext");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure))());
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "c48ebec9-653b-4310-bca5-d103b331f154");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller_OnClickNext_RudderStackJS, "RudderStack", "OnClickNext", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "ac22c591-ee80-438a-8a1c-8b9ced1bfb28");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_controller_OnClickNext_ValidateJS, "Validate", "OnClickNext", {
                                            FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                            LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult"))();
                                            jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidationError
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure, false);
                                // Input_FirstName.Valid = JSONDeserializePersonalDetailsValidFields.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.firstNameAttr;
                                // Input_FirstName.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.firstNameAttr;
                                // Input_LastName.Valid = JSONDeserializePersonalDetailsValidFields.Data.LastName
                                model.widgets.get(idService.getId("Input_LastName")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.lastNameAttr;
                                // Input_LastName.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.LastName
                                model.widgets.get(idService.getId("Input_LastName")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.lastNameAttr;
                                if ((model.widgets.get(idService.getId("NameForm")).validAttr)) {
                                    // Destination: /tradershub/PersonalDetailsDateOfBirth
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "personal-details/dob", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickNext$Action;
            }
            set _onClickNext$Action(value) {
                this.__onClickNext$Action = value;
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
                                span.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
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


            onClickNext$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickNext__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickNext");
                        span.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickNext$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult", [{
            name: "ValidationErrors",
            attrName: "validationErrorsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller.OnClickNext.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            FirstName: $parameters.FirstName,
            LastName: $parameters.LastName,
        }

        const validationSchema = yup.object().shape({
            FirstName: yup.string()
                .noConsecutiveSpaces('First name must not contain consecutive spaces.')
                .validCharacters('First name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'First name must be at most 50 characters long.')
                .required('First (and middle) name is required.'),
            LastName: yup.string()
                .noConsecutiveSpaces('Last name must not contain consecutive spaces.')
                .validCharacters('Last name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Last name must be at most 50 characters long.')
                .required('Last name is required.')
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload)


        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$controller.OnClickNext.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "signup_modal_next_button_os",
        })
    };
});