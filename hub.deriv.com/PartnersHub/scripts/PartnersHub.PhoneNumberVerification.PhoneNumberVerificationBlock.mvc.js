define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_7ceca022f8a0e753c145701ba5d76f4eStructure", "PartnersHub.controller$SendSetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PhoneNumberImpl", "phoneNumberImplVar", "PhoneNumberImpl", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsDirty", "isDirtyVar", "IsDirty", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("PhoneNumber2", "phoneNumber2In", "PhoneNumber2", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_phoneNumber2InDataFetchStatus", "_phoneNumber2InDataFetchStatus", "_phoneNumber2InDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                PhoneNumber: OS.Model.ValidationWidgetRecord
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
            if ("PhoneNumber2" in inputs) {
                this.variables.phoneNumber2In = inputs.PhoneNumber2;
                if ("_phoneNumber2InDataFetchStatus" in inputs) {
                    this.variables._phoneNumber2InDataFetchStatus = inputs._phoneNumber2InDataFetchStatus;
                }

            }

            if ("ErrorMessage" in inputs) {
                this.variables.errorMessageIn = inputs.ErrorMessage;
                if ("_errorMessageInDataFetchStatus" in inputs) {
                    this.variables._errorMessageInDataFetchStatus = inputs._errorMessageInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$model", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_7ceca022f8a0e753c145701ba5d76f4eStructure", "PartnersHub.controller$SendSetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_model, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "PhoneNumberVerification.PhoneNumberVerificationBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "PhoneNumberVerificationBlock",
                functionKey: "c5d4b8fd-24a2-410a-98e5-3d8aa2bc1fce",
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
            return [];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_controller;
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
                style: "display-flex flex-direction-column gap-base",
                _idProps: {
                    service: idService,
                    name: "Form1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "margin-top-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Enter your phone number to receive a verification code via WhatsApp or SMS."), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex align-items-center justify-content-space-between",
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Phone Number", React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickChangePhoneNumber$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                visible: model.variables.isDirtyVar,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                text: ["Save phone number"],
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: model.getCachedValue(idService.getId("PhoneNumber.Enabled"), function() {
                    return ((OS.BuiltinFunctions.length(model.variables.phoneNumber2In)) !== (0));
                }, function() {
                    return model.variables.phoneNumber2In;
                }),
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    width: "100%"
                },
                inputType: /*Text*/ 0,
                mandatory: false,
                maxLength: 0,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.phoneNumberOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "form-control ",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.phoneNumberImplVar, function(value) {
                    model.variables.phoneNumberImplVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "PhoneNumber"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneNumber2InDataFetchStatus)
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: model.getCachedValue(idService.getId("_FkSbpa9nEOjPDl8R321aQ.Enabled"), function() {
                    return ((OS.BuiltinFunctions.length(model.variables.phoneNumber2In)) !== (0));
                }, function() {
                    return model.variables.phoneNumber2In;
                }),
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form1"));
                    var eventHandlerContext = callContext.clone();
                    controller.onClickCarrier$Action("whatsapp", controller.callContext(eventHandlerContext));


                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneNumber2InDataFetchStatus)
            }, "Send via WhatsApp"), React.createElement(OSWidgets.Button, {
                enabled: model.getCachedValue(idService.getId("hkeUc1KvJEqrPHZpW4BVbg.Enabled"), function() {
                    return ((OS.BuiltinFunctions.length(model.variables.phoneNumber2In)) !== (0));
                }, function() {
                    return model.variables.phoneNumber2In;
                }),
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form1"));
                    var eventHandlerContext = callContext.clone();
                    controller.onClickCarrier$Action("sms", controller.callContext(eventHandlerContext));


                    ;
                },
                style: "btn",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneNumber2InDataFetchStatus)
            }, "Send via SMS"))));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$translationsResources", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_7ceca022f8a0e753c145701ba5d76f4eStructure", "PartnersHub.controller$SendSetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_TranslationsResources);
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
            get _phoneNumberOnChange$Action() {
                if (!(this.hasOwnProperty("__phoneNumberOnChange$Action"))) {
                    this.__phoneNumberOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PhoneNumberOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PhoneNumberOnChange");
                                span.setAttribute("outsystems.function.key", "2d1afcad-8cc6-42c2-ad3b-c7d96ac3b8fb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PhoneNumberOnChange");
                                callContext = controller.callContext(callContext);
                                // IsDirty = True
                                model.variables.isDirtyVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__phoneNumberOnChange$Action;
            }
            set _phoneNumberOnChange$Action(value) {
                this.__phoneNumberOnChange$Action = value;
            }

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "50e4db3e-0b25-4684-9c07-3eaef57529a3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                if (((OS.BuiltinFunctions.length(model.variables.errorMessageIn) > 0))) {
                                    // PhoneNumber.ValidationMessage = ErrorMessage
                                    model.widgets.get(idService.getId("PhoneNumber")).validationMessageAttr = model.variables.errorMessageIn;
                                    // PhoneNumber.Valid = False
                                    model.widgets.get(idService.getId("PhoneNumber")).validAttr = false;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _onClickChangePhoneNumber$Action() {
                if (!(this.hasOwnProperty("__onClickChangePhoneNumber$Action"))) {
                    this.__onClickChangePhoneNumber$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickChangePhoneNumber", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickChangePhoneNumber");
                                span.setAttribute("outsystems.function.key", "b72195ef-747e-4631-a874-7fd726364c4a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickChangePhoneNumber");
                                callContext = controller.callContext(callContext);
                                var sendGetSettingsVar = new OS.DataTypes.VariableHolder();
                                var sendSetSettingsVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendSetSettings
                                    model.flush();
                                    return PartnersHubController.default.sendSetSettings$Action(function() {
                                        var rec = new PartnersHubModel.ST_7ceca022f8a0e753c145701ba5d76f4eStructure();
                                        rec.phoneAttr = model.variables.phoneNumberImplVar;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendSetSettingsVar.value = value;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((sendSetSettingsVar.value.isErrorOut)) {
                                                // PhoneNumber.Valid = False
                                                model.widgets.get(idService.getId("PhoneNumber")).validAttr = false;
                                                // PhoneNumber.ValidationMessage = SendSetSettings.ErrorMessage
                                                model.widgets.get(idService.getId("PhoneNumber")).validationMessageAttr = sendSetSettingsVar.value.errorMessageOut;
                                            } else {
                                                // Execute Action: SendGetSettings
                                                model.flush();
                                                return PartnersHubController.default.sendGetSettings$Action(callContext).then(function(value) {
                                                    sendGetSettingsVar.value = value;
                                                }).then(function() {
                                                    // PhoneNumberImpl = SendGetSettings.GetSettingsResponse.Phone
                                                    model.variables.phoneNumberImplVar = sendGetSettingsVar.value.getSettingsResponseOut.phoneAttr;
                                                    OS.FeedbackMessageService.showFeedbackMessage("Phone Number is updated successfully", /*Success*/ 1);
                                                });
                                            }

                                        });
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

                return this.__onClickChangePhoneNumber$Action;
            }
            set _onClickChangePhoneNumber$Action(value) {
                this.__onClickChangePhoneNumber$Action = value;
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
                                span.setAttribute("outsystems.function.key", "f1008009-9e8b-4ea7-8d59-cffc69358a77");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // PhoneNumberImpl = PhoneNumber2
                                model.variables.phoneNumberImplVar = model.variables.phoneNumber2In;
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


            phoneNumberOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PhoneNumberOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PhoneNumberOnChange");
                        span.setAttribute("outsystems.function.key", "2d1afcad-8cc6-42c2-ad3b-c7d96ac3b8fb");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._phoneNumberOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "50e4db3e-0b25-4684-9c07-3eaef57529a3");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickChangePhoneNumber$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickChangePhoneNumber__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickChangePhoneNumber");
                        span.setAttribute("outsystems.function.key", "b72195ef-747e-4631-a874-7fd726364c4a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickChangePhoneNumber$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "f1008009-9e8b-4ea7-8d59-cffc69358a77");
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

            get onClickCarrier$Action() {
                if (!(this.hasOwnProperty("_onClickCarrier$Action"))) {
                    this._onClickCarrier$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickCarrier$Action;
            }
            set onClickCarrier$Action(value) {
                this._onClickCarrier$Action = value;
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onParametersChanged$Action(callContext);

                    };
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


define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});