define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.controller$NextStepReal", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController) {
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
                Form2: OS.Model.ValidationWidgetRecord,
                Input_DateofBirth2: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$model", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DatePicker.mvc$view", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.controller$NextStepReal", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_model, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_DatePicker_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.DateOfBirthContainer";
        }

        static getAttributes() {
            return {
                codeFunction: "DateOfBirthContainer",
                functionKey: "44d3d838-4d21-46e2-82e6-8cf596972265",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [OutSystemsUI_Interaction_DatePicker_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_controller;
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
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "",
                _idProps: {
                    service: idService,
                    name: "Form2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 4px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("bAVdkOUNBUG_U9GkVV0i6Q#Value", "Date of birth")), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #bf333a; margin-left: 2px;"
                },
                text: ["*"],
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OutSystemsUI_Interaction_DatePicker_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    ShowTodayButton: true,
                    OptionalConfigs: model.getCachedValue(idService.getId("DatePicker.OptionalConfigs"), function() {
                        return function() {
                            var rec = new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure();
                            rec.initialDateAttr = OS.BuiltinFunctions.addYears(OS.BuiltinFunctions.currDate(), -18);
                            rec.maxDateAttr = OS.BuiltinFunctions.addYears(OS.BuiltinFunctions.currDate(), -18);
                            return rec;
                        }();
                    }),
                    DateFormat: "DD-MM-YYYY"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onSelected$Action: function(datePickerIdIn, selectedDateTimeIn) {
                        var eventHandlerContext = callContext.clone();
                        controller.datePickerOnSelected$Action(selectedDateTimeIn, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form2")
                },
                _idProps: {
                    service: idService,
                    name: "DatePicker",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    datepicker: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form2")
                            },
                            enabled: true,
                            extendedProperties: {
                                "aria-label": OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1", "Select a date")
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Date*/ 4,
                            mandatory: true,
                            maxLength: 0,
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1", "dd-mm-yyyy"),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Date, PartnersHubClientVariables.getRealSignupDateofBirth(), function(value) {
                                PartnersHubClientVariables.setRealSignupDateofBirth(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_DateofBirth2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    placeholder_SSPreview: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupDateofBirth())]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; background: var(--Semantic-Info-Light, #E5F5FC); border-radius: 4px; display: flex; gap: 8px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "font-size: 8px;"
                },
                gridProperties: {
                    width: "20px"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "margin-right: 4px;"
                },
                text: [$text(getTranslation("QI2aTs_TxE6cIF7ETUf9sg#Value", "Enter your"))],
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: bold; margin-right: 4px;"
                },
                text: [$text(getTranslation("R6QvSSYpZUKx2eKCmm6T+g#Value", "date of birth"))],
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $text(getTranslation("CmBHFZFxMUKb6n_wooOCMQ#Value", "exactly as it appears on your identity document.")))), React.createElement(OSWidgets.Image, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.dob.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; padding: 0px 16px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form2"));
                    var eventHandlerContext = callContext.clone();
                    controller.nextOnClick$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "\"btn\"",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("Rqe+i_NNF0udVEY3a2YZnA#Value", "Next"))],
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$controller.NextOnClick.ValidateJS", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.controller$NextStepReal", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_controller_NextOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_TranslationsResources);
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
            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "6085ee6e-602c-4035-8ae9-8b61e5459f68");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // RealSignupDateofBirth = SelectedDateTime
                                PartnersHubClientVariables.setRealSignupDateofBirth(OS.BuiltinFunctions.dateTimeToDate(vars.value.selectedDateTimeInLocal));
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

            get _nextOnClick$Action() {
                if (!(this.hasOwnProperty("__nextOnClick$Action"))) {
                    this.__nextOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnClick");
                                span.setAttribute("outsystems.function.key", "f5c67bb6-ca6c-46ad-bd23-b7147e2dc23e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "ba50ea77-672f-42e8-9fbc-45c0b79f98b0");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_controller_NextOnClick_ValidateJS, "Validate", "NextOnClick", {
                                            DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.dateToText(PartnersHubClientVariables.getRealSignupDateofBirth()), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.NextOnClick$validateJSResult"))();
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
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure, false);
                                // Input_DateofBirth2.Valid = JSONDeserializePersonalDetailsValidFields.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_DateofBirth2")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.dateOfBirthAttr;
                                // Input_DateofBirth2.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_DateofBirth2")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.dateOfBirthAttr;
                                if ((model.widgets.get(idService.getId("Form2")).validAttr)) {
                                    // Execute Action: NextStepReal
                                    PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
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


            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "6085ee6e-602c-4035-8ae9-8b61e5459f68");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "f5c67bb6-ca6c-46ad-bd23-b7147e2dc23e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.NextOnClick$validateJSResult", [{
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
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$controller.NextOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function convertToDateOfBirthFormat(yyyy_mm_dd) {
            const [year, month, day] = yyyy_mm_dd.split("-").map(Number);
            return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        }



        const payload = {
            DateOfBirth: convertToDateOfBirthFormat($parameters.DateOfBirth)
        }

        // Calculate the date 18 years ago from today
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        const validationSchema = yup.object().shape({
            DateOfBirth: yup.string().required('Date of birth is required.')
                .trim()
                .matches(
                    /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
                    'Date of birth must be in the format dd-mm-yyyy.'
                )
                .test('is-18-years-old', 'You must be at least 18 years old.', function(value) {
                    if (!value) return false;
                    const [day, month, year] = value.split('-').map(Number); // Note that - is being used here

                    // Create the Date object from the split values
                    const date = new Date(year, month - 1, day);

                    // Validate that the date in the past and at least 18 years ago
                    return date <= eighteenYearsAgo;
                }),
        });

        // Assuming validate is a function that validates
        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)
        $parameters.ValidFields = JSON.stringify(validFields)
    };
});


define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.de-DE", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Nächste",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "genau wie es auf Ihrem Ausweisdokument erscheint.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "Geburtsdatum",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Geben Sie Ihre",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "tt-mm-jjjj",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Geburtsdatum"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.es-ES", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Siguiente",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "exactamente como aparece en su documento de identidad.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "fecha de nacimiento",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Introduzca su",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "dd-mm-yyyy",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Fecha de nacimiento"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.fr-FR", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Suivant",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "exactement comme il apparaît sur votre document d\'identité.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "date de naissance",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Entrez votre",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "jj-mm-aaaa",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Date de naissance"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.it-IT", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Prossimo",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "esattamente come appare sul tuo documento d\'identità.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "data di nascita",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Inserisci il tuo",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "gg-mm-aaaa",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Data di nascita"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.pl-PL", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Następny",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "dokładnie tak, jak jest to napisane w Twoim dokumencie tożsamości.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "data urodzenia",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Wprowadź swój",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "dd-mm-rrrr",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Data urodzenia"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.pt-PT", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Próximo",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "exatamente como aparece no seu documento de identidade.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "data de nascimento",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Insira o seu",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "dd-mm-aaaa",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Data de nascimento"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.ru-RU", [], function() {
    return {
        "Rqe+i_NNF0udVEY3a2YZnA#Value": "Следующий",
        "CmBHFZFxMUKb6n_wooOCMQ#Value": "точно так, как указано в вашем удостоверении личности.",
        "R6QvSSYpZUKx2eKCmm6T+g#Value": "дата рождения",
        "QI2aTs_TxE6cIF7ETUf9sg#Value": "Введите ваш",
        "1wIXIAE1yUC7CgI2awV25w#Value.1002767249.1": "Select a date",
        "w5xC+s7g0UaCuq6+6RZViA#ValueExpression.-591733248.1": "дд-мм-гггг",
        "bAVdkOUNBUG_U9GkVV0i6Q#Value": "Дата рождения"
    };
});

define("PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});