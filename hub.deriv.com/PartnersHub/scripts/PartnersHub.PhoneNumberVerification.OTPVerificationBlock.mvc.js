define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_1b66e77b43cfa957e304643e93df7a64Structure", "PartnersHub.controller$SendPhoneNumberVerify"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OTPCode", "oTPCodeVar", "OTPCode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Carrier", "carrierIn", "Carrier", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_carrierInDataFetchStatus", "_carrierInDataFetchStatus", "_carrierInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("PhoneNumber", "phoneNumberIn", "PhoneNumber", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                OTPCodeInput: OS.Model.ValidationWidgetRecord
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
            if ("Carrier" in inputs) {
                this.variables.carrierIn = inputs.Carrier;
                if ("_carrierInDataFetchStatus" in inputs) {
                    this.variables._carrierInDataFetchStatus = inputs._carrierInDataFetchStatus;
                }

            }

            if ("PhoneNumber" in inputs) {
                this.variables.phoneNumberIn = inputs.PhoneNumber;
                if ("_phoneNumberInDataFetchStatus" in inputs) {
                    this.variables._phoneNumberInDataFetchStatus = inputs._phoneNumberInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$model", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.Input.ControlledInput.mvc$view", "PartnersHub.model$ST_1b66e77b43cfa957e304643e93df7a64Structure", "PartnersHub.controller$SendPhoneNumberVerify"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_model, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_Input_ControlledInput_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "PhoneNumberVerification.OTPVerificationBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "OTPVerificationBlock",
                functionKey: "5de34606-6221-4611-a97a-2992485d1663",
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
            return [CustomComponents_Input_ControlledInput_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_controller;
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
            }, React.createElement(OSWidgets.Expression, {
                value: model.getCachedValue(idService.getId("gdiaPAjMmke2SIGU2ytfdA.Value"), function() {
                    return ((("Enter the 6-digit code sent to " + model.variables.phoneNumberIn) + " via ") + (((model.variables.carrierIn === "whatsapp")) ? ("Whatsapp.") : ("SMS.")));
                }, function() {
                    return model.variables.phoneNumberIn;
                }, function() {
                    return model.variables.carrierIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneNumberInDataFetchStatus, model.variables._carrierInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
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
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_Input_ControlledInput_mvc_view, {
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
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                _idProps: {
                    service: idService,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form1")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                width: "100%"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: false,
                            maxLength: 0,
                            prompt: "Enter 6-digit code",
                            style: "form-control ",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.oTPCodeVar, function(value) {
                                model.variables.oTPCodeVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "OTPCodeInput"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.oTPCodeVar)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickResendCode$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "color: #ADB5BD; cursor: pointer; font-weight: bold; text-decoration: underline;"
                },
                value: "Resend code in 60 sec",
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form1"));
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.onClickVerifyImpl$Action(controller.callContext(eventHandlerContext));
                    });

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("vQoJkjTA406ABKE+2dHP3A#Value", "Verify")))));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources", "PartnersHub.model$ST_1b66e77b43cfa957e304643e93df7a64Structure", "PartnersHub.controller$SendPhoneNumberVerify"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_TranslationsResources);
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
            get _onClickVerifyImpl$Action() {
                if (!(this.hasOwnProperty("__onClickVerifyImpl$Action"))) {
                    this.__onClickVerifyImpl$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickVerifyImpl", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickVerifyImpl");
                                span.setAttribute("outsystems.function.key", "944d21b4-6256-4158-819e-fa6b2d283972");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickVerifyImpl");
                                callContext = controller.callContext(callContext);
                                var sendPhoneNumberVerifyVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendPhoneNumberVerify
                                    model.flush();
                                    return PartnersHubController.default.sendPhoneNumberVerify$Action(function() {
                                        var rec = new PartnersHubModel.ST_1b66e77b43cfa957e304643e93df7a64Structure();
                                        rec.phone_number_verifyAttr = 1;
                                        rec.otpAttr = model.variables.oTPCodeVar;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendPhoneNumberVerifyVar.value = value;
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((sendPhoneNumberVerifyVar.value.isErrorOut)) {
                                                // OTPCodeInput.Valid = False
                                                model.widgets.get(idService.getId("OTPCodeInput")).validAttr = false;
                                                // OTPCodeInput.ValidationMessage = SendPhoneNumberVerify.ErrorMessage
                                                model.widgets.get(idService.getId("OTPCodeInput")).validationMessageAttr = sendPhoneNumberVerifyVar.value.errorMessageOut;
                                            } else {
                                                // Trigger Event: OnClickNextStep
                                                return controller.onClickNextStep$Action(callContext);
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

                return this.__onClickVerifyImpl$Action;
            }
            set _onClickVerifyImpl$Action(value) {
                this.__onClickVerifyImpl$Action = value;
            }


            onClickVerifyImpl$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickVerifyImpl__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickVerifyImpl");
                        span.setAttribute("outsystems.function.key", "944d21b4-6256-4158-819e-fa6b2d283972");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickVerifyImpl$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onClickNextStep$Action() {
                if (!(this.hasOwnProperty("_onClickNextStep$Action"))) {
                    this._onClickNextStep$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickNextStep$Action;
            }
            set onClickNextStep$Action(value) {
                this._onClickNextStep$Action = value;
            }

            get onClickResendCode$Action() {
                if (!(this.hasOwnProperty("_onClickResendCode$Action"))) {
                    this._onClickResendCode$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickResendCode$Action;
            }
            set onClickResendCode$Action(value) {
                this._onClickResendCode$Action = value;
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


define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Überprüfen"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Verificar"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Vérifier"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Verificare"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Weryfikuj"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Verificar"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "vQoJkjTA406ABKE+2dHP3A#Value": "Проверить"
    };
});

define("PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources", ["exports", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.de-DE", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.es-ES", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.fr-FR", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.it-IT", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.pl-PL", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.pt-PT", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_deDE, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_esES, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_frFR, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_itIT, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_plPL, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_ptPT, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});