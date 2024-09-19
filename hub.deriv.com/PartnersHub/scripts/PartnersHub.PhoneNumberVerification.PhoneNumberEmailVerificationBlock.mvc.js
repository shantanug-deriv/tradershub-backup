define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Code", "codeVar", "Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Timer", "timerVar", "Timer", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 60;
                    }, false),
                    this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("Email", "emailIn", "Email", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Input_TextVar: OS.Model.ValidationWidgetRecord
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
            if ("Email" in inputs) {
                this.variables.emailIn = inputs.Email;
                if ("_emailInDataFetchStatus" in inputs) {
                    this.variables._emailInDataFetchStatus = inputs._emailInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$model", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.Input.ControlledInput.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_model, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_Input_ControlledInput_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "PhoneNumberVerification.PhoneNumberEmailVerificationBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "PhoneNumberEmailVerificationBlock",
                functionKey: "48e53365-a14f-48d9-a802-5f84bfcc8741",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_Input_ControlledInput_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller;
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
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 24px; justify-content: center;"
                },
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
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "font-size: 96px;"
                },
                gridProperties: {
                    width: "96px"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.email.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "font-weight: bold; text-align: center;"
                },
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [$text(getTranslation("zErnXc+8rkejGu1pau+Mkw#Value", "We\'ve sent a verification code to"))],
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    marginLeft: "4px"
                },
                value: model.variables.emailIn,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
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
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "7",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            gridProperties: {
                                width: "100%"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: false,
                            maxLength: 50,
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1", "Enter 6-digit code"),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.codeVar, function(value) {
                                model.variables.codeVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_TextVar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.codeVar)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
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
                    enabled: true,
                    title: "Verify"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickVerifyImpl$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "10",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; margin-bottom: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "margin-right: 8px;"
                },
                text: [$text(getTranslation("cSOfWaac4EuZB2yHtv8uug#Value", "Didn\'t receive code?"))],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if(!(model.variables.hasTimerStartedVar), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onClickTimer$Action(controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    extendedProperties: {
                        style: "cursor: pointer;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "cursor: pointer; font-weight: bold; text-decoration: underline;"
                    },
                    text: [$text(getTranslation("h0PBgujWUEC88S0ttmjwkA#Value", "Resend code"))],
                    _idProps: {
                        service: idService,
                        uuid: "15"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "color: #adb5bd; font-weight: bold; text-decoration: underline;"
                    },
                    value: ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1", "Resend code in ") + (model.variables.timerVar).toString()) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1", " sec")),
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "display: block;"
                },
                text: [$text(getTranslation("q9Ce0nJ7LE2y1iDV05opbw#Value", " • Make sure you\'ve entered your email correctly."))],
                _idProps: {
                    service: idService,
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("rKpSsbFKDkuJdwtE_LVClA#Value", " • Check your spam folder."))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("EZAjLJFDH06o8UEIYyToBw#Value", " • Make sure the email isn’t blocked by firewalls or filters.")))))));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller.OnClickVerifyImpl.JavaScript1JS", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller.OnClickTimer.JavaScript1JS"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_TranslationsResources, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller_OnClickVerifyImpl_JavaScript1JS, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller_OnClickTimer_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    setHasTimerStarted$Action: function(hasTimerStarted2In) {
                        hasTimerStarted2In = (hasTimerStarted2In === undefined) ? false : hasTimerStarted2In;
                        return controller.executeActionInsideJSNode(controller._setHasTimerStarted$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hasTimerStarted2In, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "SetHasTimerStarted");
                    },
                    setTimer$Action: function(newTimerIn) {
                        newTimerIn = (newTimerIn === undefined) ? 0 : newTimerIn;
                        return controller.executeActionInsideJSNode(controller._setTimer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newTimerIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "SetTimer");
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
            get _setHasTimerStarted$Action() {
                if (!(this.hasOwnProperty("__setHasTimerStarted$Action"))) {
                    this.__setHasTimerStarted$Action = function(hasTimerStarted2In, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetHasTimerStarted", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetHasTimerStarted");
                                span.setAttribute("outsystems.function.key", "22a062a0-84b8-489c-a090-62fa1f99b606");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetHasTimerStarted");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.SetHasTimerStarted$vars"))());
                                vars.value.hasTimerStarted2InLocal = hasTimerStarted2In;
                                // HasTimerStarted = HasTimerStarted2
                                model.variables.hasTimerStartedVar = vars.value.hasTimerStarted2InLocal;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setHasTimerStarted$Action;
            }
            set _setHasTimerStarted$Action(value) {
                this.__setHasTimerStarted$Action = value;
            }

            get _onClickVerifyImpl$Action() {
                if (!(this.hasOwnProperty("__onClickVerifyImpl$Action"))) {
                    this.__onClickVerifyImpl$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickVerifyImpl", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickVerifyImpl");
                                span.setAttribute("outsystems.function.key", "624d061a-3e5f-4d03-abec-914c7f63a47c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickVerifyImpl");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "4ceca81a-e9bc-4853-9c22-90b987b15be6");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller_OnClickVerifyImpl_JavaScript1JS, "JavaScript1", "OnClickVerifyImpl", {
                                                stuff: OS.DataConversion.JSNodeParamConverter.to(model.variables.codeVar, OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Trigger Event: DispatchOnClickVerifyEvent
                                    return controller.onClickVerify$Action(model.variables.codeVar, callContext);
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

            get _onClickTimer$Action() {
                if (!(this.hasOwnProperty("__onClickTimer$Action"))) {
                    this.__onClickTimer$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickTimer", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickTimer");
                                span.setAttribute("outsystems.function.key", "7eced3e7-e0a1-489d-beaa-91338b9e2eb5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickTimer");
                                callContext = controller.callContext(callContext);
                                if ((!(model.variables.hasTimerStartedVar))) {
                                    OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "2702954e-1aed-4fe4-b51e-fdc818168d45");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_controller_OnClickTimer_JavaScript1JS, "JavaScript1", "OnClickTimer", {
                                                Timer: OS.DataConversion.JSNodeParamConverter.to(model.variables.timerVar, OS.DataTypes.DataTypes.Integer)
                                            }, function($parameters) {}, {
                                                SetHasTimerStarted: controller.clientActionProxies.setHasTimerStarted$Action,
                                                SetTimer: controller.clientActionProxies.setTimer$Action
                                            }, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickTimer$Action;
            }
            set _onClickTimer$Action(value) {
                this.__onClickTimer$Action = value;
            }

            get _setTimer$Action() {
                if (!(this.hasOwnProperty("__setTimer$Action"))) {
                    this.__setTimer$Action = function(newTimerIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetTimer", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetTimer");
                                span.setAttribute("outsystems.function.key", "9d48af79-a812-442d-b3bd-4c9a62d6aa27");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetTimer");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.SetTimer$vars"))());
                                vars.value.newTimerInLocal = newTimerIn;
                                // Timer = NewTimer
                                model.variables.timerVar = vars.value.newTimerInLocal;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setTimer$Action;
            }
            set _setTimer$Action(value) {
                this.__setTimer$Action = value;
            }


            setHasTimerStarted$Action(hasTimerStarted2In, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetHasTimerStarted__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetHasTimerStarted");
                        span.setAttribute("outsystems.function.key", "22a062a0-84b8-489c-a090-62fa1f99b606");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setHasTimerStarted$Action, callContext, hasTimerStarted2In);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickVerifyImpl$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickVerifyImpl__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickVerifyImpl");
                        span.setAttribute("outsystems.function.key", "624d061a-3e5f-4d03-abec-914c7f63a47c");
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

            onClickTimer$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickTimer__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickTimer");
                        span.setAttribute("outsystems.function.key", "7eced3e7-e0a1-489d-beaa-91338b9e2eb5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickTimer$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setTimer$Action(newTimerIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetTimer__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetTimer");
                        span.setAttribute("outsystems.function.key", "9d48af79-a812-442d-b3bd-4c9a62d6aa27");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setTimer$Action, callContext, newTimerIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onClickVerify$Action() {
                if (!(this.hasOwnProperty("_onClickVerify$Action"))) {
                    this._onClickVerify$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickVerify$Action;
            }
            set onClickVerify$Action(value) {
                this._onClickVerify$Action = value;
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
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.SetHasTimerStarted$vars", [{
            name: "HasTimerStarted2",
            attrName: "hasTimerStarted2InLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.SetTimer$vars", [{
            name: "NewTimer",
            attrName: "newTimerInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller.OnClickVerifyImpl.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        console.log("block", $parameters.stuff)
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$controller.OnClickTimer.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const withTimer = (defaultTimer) => {
            let timer = defaultTimer
            return () => {
                const intervalId = setInterval(() => {
                    if (timer <= 0) {
                        $actions.SetHasTimerStarted(false)
                        $actions.SetTimer(defaultTimer)
                        clearInterval(intervalId)
                    } else {
                        $actions.SetTimer(timer - 1)
                        timer -= 1
                    }
                }, 1000)
            }
        }

        const startTimer = withTimer($parameters.Timer)
        startTimer()

        $actions.SetHasTimerStarted(true)
    };
});


define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Stellen Sie sicher, dass die E-Mail nicht von Firewalls oder Filtern blockiert wird.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Überprüfen Sie Ihren Spam-Ordner.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Stellen Sie sicher, dass Sie Ihre E-Mail-Adresse korrekt eingegeben haben.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Code erneut senden in",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Code erneut senden",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Haben Sie den Code nicht erhalten?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Geben Sie den 6-stelligen Code ein",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Wir haben einen Bestätigungscode an Sie gesendet."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Asegúrate de que el correo electrónico no esté bloqueado por firewalls o filtros.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Verifica tu carpeta de spam.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Asegúrate de haber ingresado tu correo electrónico correctamente.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Reenviar código en",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Reenviar código",
        "cSOfWaac4EuZB2yHtv8uug#Value": "¿No recibiste el código?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Introduzca el código de 6 dígitos",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Hemos enviado un código de verificación a usted."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Assurez-vous que l\'e-mail n\'est pas bloqué par des pare-feu ou des filtres.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Vérifiez votre dossier de spam.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Assurez-vous d\'avoir correctement saisi votre adresse e-mail.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Renvoyer le code dans",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Renvoie le code",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Vous n\'avez pas reçu le code ?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Entrez le code à 6 chiffres",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Nous avons envoyé un code de vérification à vous."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Assicurati che l\'email non sia bloccata da firewall o filtri.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Controlla la tua cartella spam.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Assicurati di aver inserito correttamente la tua email.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Invia nuovamente il codice in",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Invia nuovamente il codice",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Non hai ricevuto il codice?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Inserisci il codice di 6 cifre",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Abbiamo inviato un codice di verifica a te."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Upewnij się, że e-mail nie jest blokowany przez zapory ogniowe lub filtry.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Sprawdź swój folder spam.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Upewnij się, że poprawnie wpisałeś swój adres e-mail.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Wyślij kod ponownie w",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Wyślij kod ponownie",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Nie otrzymałeś kodu?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Wprowadź 6-cyfrowy kod",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Wysłaliśmy kod weryfikacyjny do Ciebie."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Certifique-se de que o e-mail não está bloqueado por firewalls ou filtros.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Verifique a sua pasta de spam.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Certifique-se de que inseriu corretamente o seu e-mail.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Reenviar código em",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "sec",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Reenviar código",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Não recebeu o código?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Insira o código de 6 dígitos",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Enviámos um código de verificação para você."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "EZAjLJFDH06o8UEIYyToBw#Value": "Убедитесь, что электронное письмо не заблокировано брандмауэрами или фильтрами.",
        "rKpSsbFKDkuJdwtE_LVClA#Value": "Проверьте свою папку со спамом.",
        "q9Ce0nJ7LE2y1iDV05opbw#Value": "Убедитесь, что вы правильно ввели свой адрес электронной почты.",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.-831934195.1": "Повторно отправить код в",
        "t2V+7ijrtUC1usZPy65eUg#ValueExpression.1067057.1": "сек",
        "h0PBgujWUEC88S0ttmjwkA#Value": "Отправить код повторно",
        "cSOfWaac4EuZB2yHtv8uug#Value": "Код не пришёл?",
        "Q9u_dsn2akyRVs7oPoyu_Q#ValueExpression.24546143.1": "Введите 6-значный код",
        "zErnXc+8rkejGu1pau+Mkw#Value": "Мы отправили вам код подтверждения."
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources", ["exports", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.de-DE", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.es-ES", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.fr-FR", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.it-IT", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.pl-PL", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.pt-PT", "PartnersHub.PhoneNumberVerification.PhoneNumberEmailVerificationBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_deDE, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_esES, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_frFR, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_itIT, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_plPL, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_ptPT, PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberEmailVerificationBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});