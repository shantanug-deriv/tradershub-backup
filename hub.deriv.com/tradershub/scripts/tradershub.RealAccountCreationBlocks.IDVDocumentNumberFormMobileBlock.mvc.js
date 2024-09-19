define("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd());
                    }, false, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    supportedDocumentsVar: OS.DataTypes.ImmutableBase.getData(str)
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
                DocumentNumberForm: OS.Model.ValidationWidgetRecord,
                Input_DocumentName: OS.Model.ValidationWidgetRecord,
                Input_DocumentName2: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$model", "tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_model, tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "IDVDocumentNumberFormMobileBlock",
                functionKey: "d9288545-14d9-43d4-a071-7f0209866410",
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
            return tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller;
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
                style: "form",
                _idProps: {
                    service: idService,
                    name: "DocumentNumberForm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("6O1CWY7b2U2I0Tcm5vNODw.Style"), function() {
                    return ((model.widgets.get(idService.getId("Input_DocumentName")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-base"));
                }, function() {
                    return model.widgets.get(idService.getId("Input_DocumentName")).validAttr;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_DocumentName",
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: (tradershubClientVariables.getRealSignupIDVDocumentName() + " number"),
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("DocumentNumberForm")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: model.getCachedValue(idService.getId("Input_DocumentName.Prompt"), function() {
                    return (("Enter your " + OS.BuiltinFunctions.toLower(tradershubClientVariables.getRealSignupIDVDocumentName())) + " number");
                }, function() {
                    return tradershubClientVariables.getRealSignupIDVDocumentName();
                }),
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupIDVDocumentNumber(), function(value) {
                    tradershubClientVariables.setRealSignupIDVDocumentNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Input_DocumentName"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(((tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumberLabel()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: model.getCachedValue(idService.getId("Mwa7Ny+J0ES97l1YvyxViA.Style"), function() {
                        return ((model.widgets.get(idService.getId("Input_DocumentName2")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-base"));
                    }, function() {
                        return model.widgets.get(idService.getId("Input_DocumentName2")).validAttr;
                    }),
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
                    mandatory: true,
                    targetWidget: "Input_DocumentName2",
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: (tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumberLabel() + " number"),
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("DocumentNumberForm")
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Text*/ 0,
                    mandatory: true,
                    maxLength: 50,
                    prompt: (("Enter your " + tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumberLabel()) + " number"),
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), function(value) {
                        tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumber(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "Input_DocumentName2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "form-btn-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("DocumentNumberForm"));
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.nextOnClick$Action(controller.callContext(eventHandlerContext));
                    });

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Save"))));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller.OnReady.GetIDVCountryJS", "tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller.NextOnClick.ValidateIDVJS", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller_OnReady_GetIDVCountryJS, tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller_NextOnClick_ValidateIDVJS) {
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "5a9c92e4-bb13-44a7-b4aa-8c15d9673503");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeResidenceVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd))());
                                getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetIDVCountry");
                                        span.setAttribute("outsystems.function.key", "5c4958ab-37bc-4a0b-b82a-80d51184e86e");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller_OnReady_GetIDVCountryJS, "GetIDVCountry", "OnReady", {
                                            Response: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                            Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                            SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult"))();
                                            jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedDocuments, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializeResidence
                                jSONDeserializeResidenceVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getIDVCountryJSResult.value.supportedDocumentsOut, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd, false);
                                // SupportedDocuments = JSONDeserializeResidence.Data
                                model.variables.supportedDocumentsVar = jSONDeserializeResidenceVar.value.dataOut;
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

            get _nextOnClick$Action() {
                if (!(this.hasOwnProperty("__nextOnClick$Action"))) {
                    this.__nextOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextOnClick");
                                span.setAttribute("outsystems.function.key", "d068ecee-b849-449b-bc84-82631333ca56");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                var validateIDVJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeSupportedDocumentsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeIDVValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure))());
                                var jSONDeserializeIDVValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // JSON Serialize: JSONSerializeSupportedDocuments
                                    jSONSerializeSupportedDocumentsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
                                    return OS.Logger.startActiveSpan("ValidateIDV", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "ValidateIDV");
                                            span.setAttribute("outsystems.function.key", "590199e1-efbb-45ba-a729-bc90bc11fba2");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_RealAccountCreationBlocks_IDVDocumentNumberFormMobileBlock_mvc_controller_NextOnClick_ValidateIDVJS, "ValidateIDV", "NextOnClick", {
                                                AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeSupportedDocumentsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult"))();
                                                jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        validateIDVJSResult.value = results;
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeIDVValidationError
                                        jSONDeserializeIDVValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateIDVJSResult.value.validationErrorsOut, tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure, false);
                                        // JSON Deserialize: JSONDeserializeIDVValidFields
                                        jSONDeserializeIDVValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateIDVJSResult.value.validFieldsOut, tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure, false);
                                        // Input_DocumentName.Valid = JSONDeserializeIDVValidFields.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentName")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentName.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentName")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentName2.Valid = JSONDeserializeIDVValidFields.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentName2")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.additionalDocumentNumberAttr;
                                        // Input_DocumentName2.ValidationMessage = JSONDeserializeIDVValidationError.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentName2")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.additionalDocumentNumberAttr;
                                    }).then(function() {
                                        if ((model.widgets.get(idService.getId("DocumentNumberForm")).validAttr)) {
                                            // Destination: /tradershub/EmploymentDetails
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        }

                                    });
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__nextOnClick$Action;
            }
            set _nextOnClick$Action(value) {
                this.__nextOnClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "5a9c92e4-bb13-44a7-b4aa-8c15d9673503");
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

            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "d068ecee-b849-449b-bc84-82631333ca56");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._nextOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult", [{
            name: "SupportedDocuments",
            attrName: "supportedDocumentsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult", [{
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

define("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller.OnReady.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.Response).residence_list.find(c => c.value == $parameters.Citizenship)

        const supportedDocuments = Object.values(country.identity.services.idv.documents_supported)

        $parameters.SupportedDocuments = JSON.stringify(supportedDocuments)
    };
});

define("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.mvc$controller.NextOnClick.ValidateIDVJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            function mergeSchema(...schemas) {
                const [first, ...rest] = schemas;

                const merged = rest.reduce(
                    (mergedSchemas, schema) => mergedSchemas.concat(schema),
                    first
                );

                return merged;
            }

            // Transform the flags to supported pattern (i.e "^(?i)G[a-zA-Z0-9]{7,9}$")
            function transformedRegex(pattern) {
                const caseInsensitiveRegex = /\(\?i\)/i;
                const isCaseInsensitive = caseInsensitiveRegex.test(pattern);
                const transformedPattern = pattern.replace(caseInsensitiveRegex, '');
                const flags = isCaseInsensitive ? 'i' : '';

                return new RegExp(transformedPattern, flags);
            }


            const document = JSON.parse($parameters.SupportedDocuments ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)

            const isAdditionalDocumentRequired = Boolean(document.additional)


            const validationSchema = yup.object().shape({
                DocumentNumber: yup.string().required(document.display_name + " is requried.").matches(transformedRegex(document.format), document.display_name + " format is incorrect."),
            })

            const additionalDocumentValidationSchema = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(document?.additional?.display_name + " is requried.").matches(transformedRegex(document?.additional?.format ?? ''), document?.additional?.display_name + " format is incorrect."),
            })

            const payload = {
                DocumentNumber: $parameters.DocumentNumber
            }

            if (isAdditionalDocumentRequired) {
                payload.AdditionalDocumentNumber = $parameters.AdditionalDocumentNumber
            }

            const {
                errors,
                validFields
            } = validate(isAdditionalDocumentRequired ? mergeSchema(validationSchema, additionalDocumentValidationSchema) : validationSchema, payload)

            $parameters.ValidationErrors = JSON.stringify(errors)

            $parameters.ValidFields = JSON.stringify(validFields)
            $resolve()
        });
    };
});