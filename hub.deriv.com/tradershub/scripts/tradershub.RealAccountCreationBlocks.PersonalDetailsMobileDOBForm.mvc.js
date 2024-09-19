define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel) {
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
                DobForm: OS.Model.ValidationWidgetRecord,
                Input_date: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$model", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_model, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.PersonalDetailsMobileDOBForm";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsMobileDOBForm",
                functionKey: "e61c528b-91e6-4fff-aa46-dcc9d93cf83c",
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
            return tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex flex-direction-column ",
                _idProps: {
                    service: idService,
                    name: "DobForm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
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
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "display-flex flex-direction-column gap-s position-relative",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_date",
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Date of birth"), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "input-flatpickr_mobile",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("DobForm")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 0,
                prompt: "dd/mm/yyyy",
                style: "form-control input_dateofbirth__mobile",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupDateofBirth(), function(value) {
                    tradershubClientVariables.setRealSignupDateofBirth(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_date"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "right: 16px; top: 40px;"
                },
                gridProperties: {
                    width: "24px"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                style: "position-absolute",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 4px; margin-top: 16px; padding: 16px;"
                },
                style: "display-flex full-width align-items-center gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: ["Enter your "],
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: ["date of birth"],
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [" exactly as it appears on your identity document."],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "full-width ",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 10px; font-weight: bold;"
                },
                text: ["Example:"],
                _idProps: {
                    service: idService,
                    uuid: "15"
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
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.content_1_.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "17"
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
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px; border-width: 0px;"
                },
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("DobForm"));
                    var eventHandlerContext = callContext.clone();
                    controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "btn btn-primary full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Next"))));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.SaveOnClick.ValidateJS", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.SaveOnClick.RudderStackJS", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.OnClick.OpenDatePickerJS", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.OnReady.InitializeFlatpickrJS", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_SaveOnClick_ValidateJS, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_SaveOnClick_RudderStackJS, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_OnClick_OpenDatePickerJS, tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_OnReady_InitializeFlatpickrJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {
                    datePickerOnSelected$Action: function(selectedDateTimeIn) {
                        selectedDateTimeIn = (selectedDateTimeIn === undefined) ? "" : selectedDateTimeIn;
                        return controller.executeActionInsideJSNode(controller._datePickerOnSelected$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(selectedDateTimeIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "DatePickerOnSelected");
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
            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "4349b087-b7a0-45f1-a603-7117297661c3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure))());
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "36489585-237b-4642-9647-7c9fabd0cc30");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "27e9e74a-6605-4a54-a7f1-7b960d353826");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.SaveOnClick$validateJSResult"))();
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
                                // Input_date.Valid = JSONDeserializePersonalDetailsValidFields.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_date")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.dateOfBirthAttr;
                                // Input_date.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_date")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.dateOfBirthAttr;
                                if ((model.widgets.get(idService.getId("DobForm")).validAttr)) {
                                    // RealSignupCurrentStep = 3
                                    tradershubClientVariables.setRealSignupCurrentStep(3);
                                    if ((tradershubClientVariables.getRealSignupIsIDVSupported())) {
                                        // Destination: /tradershub/IdentityVerification
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "identity-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        // Destination: /tradershub/EmploymentDetails
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    }

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

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "62796204-4d60-4569-8db3-df4e5dd95d59");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("OpenDatePicker", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "OpenDatePicker");
                                        span.setAttribute("outsystems.function.key", "1fa0e14c-813e-4011-abf0-87a0cfeae5bc");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_OnClick_OpenDatePickerJS, "OpenDatePicker", "OnClick", null, function($parameters) {}, {}, {});
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

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "8be16776-ba94-418f-aaf3-80100df2265c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("InitializeFlatpickr", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "InitializeFlatpickr");
                                        span.setAttribute("outsystems.function.key", "8e04fc49-92e5-458e-b9f4-63600a22775d");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_PersonalDetailsMobileDOBForm_mvc_controller_OnReady_InitializeFlatpickrJS, "InitializeFlatpickr", "OnReady", {
                                            Date: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {
                                            DatePickerOnSelected: controller.clientActionProxies.datePickerOnSelected$Action
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "b4425647-fc18-4104-8d5c-babc95095013");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // RealSignupDateofBirth = SelectedDateTime
                                tradershubClientVariables.setRealSignupDateofBirth(vars.value.selectedDateTimeInLocal);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__datePickerOnSelected$Action;
            }
            set _datePickerOnSelected$Action(value) {
                this.__datePickerOnSelected$Action = value;
            }


            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "4349b087-b7a0-45f1-a603-7117297661c3");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "62796204-4d60-4569-8db3-df4e5dd95d59");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8be16776-ba94-418f-aaf3-80100df2265c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "b4425647-fc18-4104-8d5c-babc95095013");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._datePickerOnSelected$Action, callContext, selectedDateTimeIn);
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.SaveOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            DateOfBirth: $parameters.DateOfBirth
        }

        // Calculate the date 18 years ago from today
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        const validationSchema = yup.object().shape({
            DateOfBirth: yup.string().required('Date of birth is required.').trim().matches(
                /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                'Date of birth must be in the format dd/mm/yyyy.'
            ).test('is-18-years-old', 'You must be at least 18 years old.', function(value) {
                if (!value) return false;
                const [day, month, year] = value.split('/').map(Number);
                const date = new Date(year, month - 1, day);
                return date <= eighteenYearsAgo;
            }),
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload)


        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "signup_modal_next_button_os",
        })
    };
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.OnClick.OpenDatePickerJS", [], function() {
    return function($actions, $roles, $public) {
        if (window.fp && window.fp.open) {
            !fp.isOpen && fp.open()
        }
    };
});

define("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.mvc$controller.OnReady.InitializeFlatpickrJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Create a new Date object for the current date
        var currentDate = new Date();

        // Subtract 18 years from the current date
        currentDate.setFullYear(currentDate.getFullYear() - 18);

        function formatDate(date) {
            // Extract the day, month, and year from the date object
            let day = date.getDate();
            let month = date.getMonth() + 1; // Months are zero-based in JavaScript
            let year = date.getFullYear();

            // Add leading zero to day and month if needed
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            // Format the date in dd/mm/yyyy
            return day + '/' + month + '/' + year;
        }

        if (flatpickr && document.getElementsByClassName("input_dateofbirth__mobile").length) {
            window.fp = flatpickr(".input-flatpickr_mobile", {
                disableMobile: "true",
                maxDate: currentDate.toISOString(),
                dateFormat: "d/m/Y",
                positionElement: document.getElementsByClassName("input_dateofbirth__mobile")[0],
                defaultDate: $parameters.Date,
                onChange: function(selectedDate) {
                    $actions.DatePickerOnSelected(formatDate(selectedDate[0]))
                }
            });
        }
    };
});