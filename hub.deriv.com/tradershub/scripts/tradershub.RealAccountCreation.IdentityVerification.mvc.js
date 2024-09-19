define("tradershub.RealAccountCreation.IdentityVerification.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure"], function(OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd());
                    }, false, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd),
                    this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
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
                Form: OS.Model.ValidationWidgetRecord,
                Input_DocumentType: OS.Model.ValidationWidgetRecord,
                Input_DocumentNumber: OS.Model.ValidationWidgetRecord,
                Input_DocumentNumber2: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreation.IdentityVerification.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.IdentityVerification.mvc$model", "tradershub.RealAccountCreation.IdentityVerification.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$view", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreation_IdentityVerification_mvc_model, tradershub_RealAccountCreation_IdentityVerification_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.IdentityVerification";
        }

        static getAttributes() {
            return {
                codeFunction: "IdentityVerification",
                functionKey: "9cdafaf0-1c53-43b2-b556-6f797c8eb81a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.IdentityVerification.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_IdentityVerification_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_IdentityVerification_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return "Identity verification | Deriv";
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
                    Title: "Identity verification",
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width identity-verification-list__desktop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form",
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                style: "color: #000;"
                            },
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.skipOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; text-decoration: underline;"
                            },
                            text: ["Skip"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: model.getCachedValue(idService.getId("Ft2vvm6xGEGcrU3GXJ5OcQ.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_DocumentType")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-xl"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_DocumentType")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_DocumentType",
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Document type"), React.createElement(OSWidgets.Dropdown, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            dropdownMode: /*Custom*/ 1,
                            emptyValue: "Select your document type",
                            enabled: true,
                            list: model.variables.supportedDocumentsVar,
                            mandatory: true,
                            onChange: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.input_DocumentTypeOnChange$Action(controller.callContext(eventHandlerContext));
                                });;
                            },
                            style: "dropdown",
                            values: function(elem) {
                                return elem.display_nameAttr;
                            },
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupIDVDocumentName(), function(value) {
                                tradershubClientVariables.setRealSignupIDVDocumentName(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_DocumentType"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: model.getCachedValue(idService.getId("CeRGFVzPhkygrIB3Z4Hy+A.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-l"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_DocumentNumber",
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            value: model.getCachedValue(idService.getId("MBPeVTgu00ikn35ZdN350Q.Value"), function() {
                                return (((OS.BuiltinFunctions.length(tradershubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((tradershubClientVariables.getRealSignupIDVDocumentName() + " number")) : ("Document number"));
                            }, function() {
                                return tradershubClientVariables.getRealSignupIDVDocumentName();
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: model.getCachedValue(idService.getId("Input_DocumentNumber.Prompt"), function() {
                                return (((OS.BuiltinFunctions.length(tradershubClientVariables.getRealSignupIDVDocumentName()) > 0)) ? ((("Enter your " + tradershubClientVariables.getRealSignupIDVDocumentName()) + " number")) : ("Enter your document number"));
                            }, function() {
                                return tradershubClientVariables.getRealSignupIDVDocumentName();
                            }),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupIDVDocumentNumber(), function(value) {
                                tradershubClientVariables.setRealSignupIDVDocumentNumber(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_DocumentNumber"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), $if((OS.BuiltinFunctions.length(model.variables.additionalDocumentLabelVar) > 0), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: model.getCachedValue(idService.getId("lsboBH3agEa9wnQe0bayHg.Style"), function() {
                                    return ((model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-l"));
                                }, function() {
                                    return model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr;
                                }),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Label, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: true,
                                targetWidget: "Input_DocumentNumber2",
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                value: (model.variables.additionalDocumentLabelVar + " number"),
                                _idProps: {
                                    service: idService,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form")
                                },
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: true,
                                maxLength: 0,
                                prompt: (("Enter your " + model.variables.additionalDocumentLabelVar) + " number"),
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), function(value) {
                                    tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumber(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Input_DocumentNumber2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "form-btn-container",
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
                                controller.validationService.validateWidget(idService.getId("Form"));
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
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "border-radius: 1px;"
                            },
                            text: ["Next"],
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width identity-verification-list__mobile",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_view, {
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
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "22",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber()), asPrimitiveValue(model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr), asPrimitiveValue(model.variables.additionalDocumentLabelVar), asPrimitiveValue(tradershubClientVariables.getRealSignupIDVDocumentNumber()), asPrimitiveValue(model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr), asPrimitiveValue(model.variables.supportedDocumentsVar), asPrimitiveValue(tradershubClientVariables.getRealSignupIDVDocumentName()), asPrimitiveValue(model.widgets.get(idService.getId("Input_DocumentType")).validAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.IdentityVerification.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.IdentityVerification.mvc$controller.OnReady.GetIDVCountry2JS", "tradershub.RealAccountCreation.IdentityVerification.mvc$controller.OnReady.GetIDVCountryJS", "tradershub.RealAccountCreation.IdentityVerification.mvc$controller.Input_DocumentTypeOnChange.JavaScript1JS", "tradershub.RealAccountCreation.IdentityVerification.mvc$controller.NextOnClick.ValidateIDVJS", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_5ee2e7ff29695cda8882106170100facStructure", "tradershub.model$ST_b9fa9c81e682aaa4746021d7919cd480Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_IdentityVerification_mvc_controller_OnReady_GetIDVCountry2JS, tradershub_RealAccountCreation_IdentityVerification_mvc_controller_OnReady_GetIDVCountryJS, tradershub_RealAccountCreation_IdentityVerification_mvc_controller_Input_DocumentTypeOnChange_JavaScript1JS, tradershub_RealAccountCreation_IdentityVerification_mvc_controller_NextOnClick_ValidateIDVJS) {
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
                                span.setAttribute("outsystems.function.key", "185e439b-b1d2-4685-a325-06c7d3ebfd23");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var getIDVCountry2JSResult = new OS.DataTypes.VariableHolder();
                                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeResidenceVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd))());
                                var jSONDeserializeResidence2Var = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((((tradershubClientVariables.getRawResidenceListResponse()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                            getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "GetIDVCountry");
                                                    span.setAttribute("outsystems.function.key", "74c1a47e-f0f5-4e93-aeda-0189185064c0");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_RealAccountCreation_IdentityVerification_mvc_controller_OnReady_GetIDVCountryJS, "GetIDVCountry", "OnReady", {
                                                        SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                        Response: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                                        Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                                        SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                        AdditionalDocumentLabel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountryJSResult"))();
                                                        jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedDocuments, OS.DataTypes.DataTypes.Text);
                                                        jsNodeResult.additionalDocumentLabelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentLabel, OS.DataTypes.DataTypes.Text);
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
                                            // AdditionalDocumentLabel = GetIDVCountry.AdditionalDocumentLabel
                                            model.variables.additionalDocumentLabelVar = getIDVCountryJSResult.value.additionalDocumentLabelOut;
                                        } else {
                                            // Execute Action: DerivApiSendMessage
                                            model.flush();
                                            return tradershubController.default.derivApiSendMessage$Action("", "residence_list", false, callContext).then(function(value) {
                                                derivApiSendMessageVar.value = value;
                                            }).then(function() {
                                                // RawResidenceListResponse = DerivApiSendMessage.Response
                                                tradershubClientVariables.setRawResidenceListResponse(derivApiSendMessageVar.value.responseOut);
                                                getIDVCountry2JSResult.value = OS.Logger.startActiveSpan("GetIDVCountry2", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "GetIDVCountry2");
                                                        span.setAttribute("outsystems.function.key", "138518ed-9175-409b-b9d7-262301695d60");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_IdentityVerification_mvc_controller_OnReady_GetIDVCountry2JS, "GetIDVCountry2", "OnReady", {
                                                            Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                                            Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                            SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                            SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                            AdditionalDocumentLabel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountry2JSResult"))();
                                                            jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedDocuments, OS.DataTypes.DataTypes.Text);
                                                            jsNodeResult.additionalDocumentLabelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentLabel, OS.DataTypes.DataTypes.Text);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // JSON Deserialize: JSONDeserializeResidence2
                                                jSONDeserializeResidence2Var.value.dataOut = OS.JSONUtils.deserializeFromJSON(getIDVCountry2JSResult.value.supportedDocumentsOut, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd, false);
                                                // SupportedDocuments = JSONDeserializeResidence2.Data
                                                model.variables.supportedDocumentsVar = jSONDeserializeResidence2Var.value.dataOut;
                                                // AdditionalDocumentLabel = GetIDVCountry2.AdditionalDocumentLabel
                                                model.variables.additionalDocumentLabelVar = getIDVCountry2JSResult.value.additionalDocumentLabelOut;
                                            });
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
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
                                span.setAttribute("outsystems.function.key", "4f73d4f9-d569-4fc0-9c5b-220f61efada1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // RealSignupCurrentStep = 3
                                tradershubClientVariables.setRealSignupCurrentStep(3);
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

            get _skipOnClick$Action() {
                if (!(this.hasOwnProperty("__skipOnClick$Action"))) {
                    this.__skipOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SkipOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SkipOnClick");
                                span.setAttribute("outsystems.function.key", "c20ad14c-1d8d-4bea-a286-9ca4ed03eed8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SkipOnClick");
                                callContext = controller.callContext(callContext);
                                // RealSignupSkippedIDV = True
                                tradershubClientVariables.setRealSignupSkippedIDV(true);
                                // Destination: /tradershub/EmploymentDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__skipOnClick$Action;
            }
            set _skipOnClick$Action(value) {
                this.__skipOnClick$Action = value;
            }

            get _input_DocumentTypeOnChange$Action() {
                if (!(this.hasOwnProperty("__input_DocumentTypeOnChange$Action"))) {
                    this.__input_DocumentTypeOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_DocumentTypeOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_DocumentTypeOnChange");
                                span.setAttribute("outsystems.function.key", "de19446b-6b5a-44ed-b667-aede24fcc569");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("Input_DocumentTypeOnChange");
                                callContext = controller.callContext(callContext);
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // JSON Serialize: JSONSerialize1
                                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
                                    return OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "7cdac7be-6744-4622-a2dc-94b0aee3ca4c");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_RealAccountCreation_IdentityVerification_mvc_controller_Input_DocumentTypeOnChange_JavaScript1JS, "JavaScript1", "Input_DocumentTypeOnChange", {
                                                SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                DocumentsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                AdditionalDocumentLabel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.Input_DocumentTypeOnChange$javaScript1JSResult"))();
                                                jsNodeResult.additionalDocumentLabelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentLabel, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        javaScript1JSResult.value = results;
                                    }).then(function() {
                                        // AdditionalDocumentLabel = JavaScript1.AdditionalDocumentLabel
                                        model.variables.additionalDocumentLabelVar = javaScript1JSResult.value.additionalDocumentLabelOut;
                                        // RealSignupIDVDocumentNumber = NullTextIdentifier
                                        tradershubClientVariables.setRealSignupIDVDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                                        // RealSignupIDVAdditionalDocumentNumber = NullTextIdentifier
                                        tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
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

                return this.__input_DocumentTypeOnChange$Action;
            }
            set _input_DocumentTypeOnChange$Action(value) {
                this.__input_DocumentTypeOnChange$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e493d082-514b-480e-9f14-952b1a1dcfa4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("NextOnClick");
                                callContext = controller.callContext(callContext);
                                var validateIDVJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeSupportedDocumentsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeIDVValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_5ee2e7ff29695cda8882106170100facStructure))());
                                var jSONDeserializeIDVValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_b9fa9c81e682aaa4746021d7919cd480Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // JSON Serialize: JSONSerializeSupportedDocuments
                                    jSONSerializeSupportedDocumentsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
                                    return OS.Logger.startActiveSpan("ValidateIDV", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "ValidateIDV");
                                            span.setAttribute("outsystems.function.key", "1f392b2d-d376-4b77-91fc-e8aaabdb72f9");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_RealAccountCreation_IdentityVerification_mvc_controller_NextOnClick_ValidateIDVJS, "ValidateIDV", "NextOnClick", {
                                                SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeSupportedDocumentsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                                ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.NextOnClick$validateIDVJSResult"))();
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
                                        // Input_DocumentNumber.Valid = JSONDeserializeIDVValidFields.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentNumber.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentNumberAttr;
                                        // Input_DocumentNumber2.Valid = JSONDeserializeIDVValidFields.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber2")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.additionalDocumentNumberAttr;
                                        // Input_DocumentNumber2.ValidationMessage = JSONDeserializeIDVValidationError.Data.AdditionalDocumentNumber
                                        model.widgets.get(idService.getId("Input_DocumentNumber2")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.additionalDocumentNumberAttr;
                                        // Input_DocumentType.Valid = JSONDeserializeIDVValidFields.Data.DocumentType
                                        model.widgets.get(idService.getId("Input_DocumentType")).validAttr = jSONDeserializeIDVValidFieldsVar.value.dataOut.documentTypeAttr;
                                        // Input_DocumentType.ValidationMessage = JSONDeserializeIDVValidationError.Data.DocumentType
                                        model.widgets.get(idService.getId("Input_DocumentType")).validationMessageAttr = jSONDeserializeIDVValidationErrorVar.value.dataOut.documentTypeAttr;
                                    }).then(function() {
                                        if ((model.widgets.get(idService.getId("Form")).validAttr)) {
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
                        span.setAttribute("outsystems.function.key", "185e439b-b1d2-4685-a325-06c7d3ebfd23");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "4f73d4f9-d569-4fc0-9c5b-220f61efada1");
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

            skipOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SkipOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SkipOnClick");
                        span.setAttribute("outsystems.function.key", "c20ad14c-1d8d-4bea-a286-9ca4ed03eed8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._skipOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            input_DocumentTypeOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_DocumentTypeOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_DocumentTypeOnChange");
                        span.setAttribute("outsystems.function.key", "de19446b-6b5a-44ed-b667-aede24fcc569");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._input_DocumentTypeOnChange$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            nextOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextOnClick");
                        span.setAttribute("outsystems.function.key", "e493d082-514b-480e-9f14-952b1a1dcfa4");
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
                        return tradershub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountry2JSResult", [{
            name: "SupportedDocuments",
            attrName: "supportedDocumentsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AdditionalDocumentLabel",
            attrName: "additionalDocumentLabelOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountryJSResult", [{
            name: "SupportedDocuments",
            attrName: "supportedDocumentsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AdditionalDocumentLabel",
            attrName: "additionalDocumentLabelOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.Input_DocumentTypeOnChange$javaScript1JSResult", [{
            name: "AdditionalDocumentLabel",
            attrName: "additionalDocumentLabelOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.NextOnClick$validateIDVJSResult", [{
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

define("tradershub.RealAccountCreation.IdentityVerification.mvc$controller.OnReady.GetIDVCountry2JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.Response).residence_list.find(c => c.value == $parameters.Citizenship)

        const supportedDocuments = Object.values(country.identity.services.idv.documents_supported)

        $parameters.SupportedDocuments = JSON.stringify(supportedDocuments)

        $parameters.AdditionalDocumentLabel = supportedDocuments.find(doc => doc.display_name === $parameters.SelectedDocument)?.additional?.display_name ?? ""

    };
});

define("tradershub.RealAccountCreation.IdentityVerification.mvc$controller.OnReady.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.Response).residence_list.find(c => c.value == $parameters.Citizenship)

        const supportedDocuments = Object.values(country.identity.services.idv.documents_supported)



        $parameters.SupportedDocuments = JSON.stringify(supportedDocuments)

        $parameters.AdditionalDocumentLabel = supportedDocuments.find(doc => doc.display_name === $parameters.SelectedDocument)?.additional?.display_name ?? ""

    };
});

define("tradershub.RealAccountCreation.IdentityVerification.mvc$controller.Input_DocumentTypeOnChange.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const document = JSON.parse($parameters.DocumentsList ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)
            $parameters.AdditionalDocumentLabel = document?.additional?.display_name ?? ""

            $resolve()
        });
    };
});

define("tradershub.RealAccountCreation.IdentityVerification.mvc$controller.NextOnClick.ValidateIDVJS", [], function() {
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

            let validationSchema;
            let isAdditionalDocumentRequired;
            let additionalDocumentValidationSchema;


            if ($parameters.SelectedDocument) {
                const document = JSON.parse($parameters.SupportedDocuments ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)

                validationSchema = yup.object().shape({
                    DocumentType: yup.string().required("Document type is required."),
                    DocumentNumber: yup.string().required(document.display_name + " number is requried.").matches(transformedRegex(document.format), document.display_name + " format is incorrect."),
                })
                isAdditionalDocumentRequired = Boolean(document?.additional)
                additionalDocumentValidationSchema = yup.object().shape({
                    AdditionalDocumentNumber: yup.string().required(document?.additional?.display_name + " number is requried.").matches(transformedRegex(document?.additional?.format ?? ''), document?.additional?.display_name + " format is incorrect."),
                })
            } else {
                validationSchema = yup.object().shape({
                    DocumentType: yup.string().required("Document type is required."),
                    DocumentNumber: yup.string().required("Document number is required.")
                })
            }


            const payload = {
                DocumentType: $parameters.SelectedDocument,
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