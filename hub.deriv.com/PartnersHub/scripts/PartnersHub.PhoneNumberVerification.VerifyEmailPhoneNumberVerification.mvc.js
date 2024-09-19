define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
                    this.attr("email", "emailIn", "email", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Input_Code: OS.Model.ValidationWidgetRecord
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
            if ("email" in inputs) {
                this.variables.emailIn = inputs.email;
                if ("_emailInDataFetchStatus" in inputs) {
                    this.variables._emailInDataFetchStatus = inputs._emailInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$model", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_model, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "PhoneNumberVerification.VerifyEmailPhoneNumberVerification";
        }

        static getAttributes() {
            return {
                codeFunction: "VerifyEmailPhoneNumberVerification",
                functionKey: "7a4a7b99-7292-4e53-84a2-cb1a230c9cc9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_controller;
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
                style: "display-flex flex-direction-column gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                text: [$text(getTranslation("B3lrFIwzEE6kXtLKNxbdzQ#Value", "Confirm it\'s you"))],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
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
            }, $text(getTranslation("Q5xGGMg4_Umu6dd_rTYEew#Value", "We\'ve sent a verification code to ")), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.emailIn,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailInDataFetchStatus)
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "margin-left: 0px;"
                },
                text: [$text(getTranslation("v5+MWDj2dkSNxfDF9HQMGA#Value", ". Enter the code or click the link in the email to verify that the account belongs to you."))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                prompt: "OTP code",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.codeVar, function(value) {
                    model.variables.codeVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Input_Code"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickResendEmail$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-weight: bold; text-decoration: underline;"
                },
                style: model.getCachedValue(idService.getId("Uut78pnzt0uDpuGhVc+ysQ.Style"), function() {
                    return ((model.variables.hasTimerStartedVar) ? ("resend-code-link--disabled") : (""));
                }, function() {
                    return model.variables.hasTimerStartedVar;
                }),
                value: model.getCachedValue(idService.getId("Uut78pnzt0uDpuGhVc+ysQ.Value"), function() {
                    return ("Resend code " + ((model.variables.hasTimerStartedVar) ? ((("in " + (model.variables.timerVar).toString()) + "s")) : ("")));
                }, function() {
                    return model.variables.hasTimerStartedVar;
                }, function() {
                    return model.variables.timerVar;
                }),
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
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
                    uuid: "10"
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
                    enabled: true,
                    title: "Verify",
                    Width: "100%"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickVerify$Action(model.variables.codeVar, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$controller.OnClickResendEmail.StartTimerJS", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_TranslationsResources, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_controller_OnClickResendEmail_StartTimerJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_TranslationsResources);
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
            get _setTimer$Action() {
                if (!(this.hasOwnProperty("__setTimer$Action"))) {
                    this.__setTimer$Action = function(newTimerIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetTimer", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetTimer");
                                span.setAttribute("outsystems.function.key", "0580dca0-e9e2-4cdc-ad3b-d5bb991a6a51");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetTimer");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.SetTimer$vars"))());
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

            get _onClickResendEmail$Action() {
                if (!(this.hasOwnProperty("__onClickResendEmail$Action"))) {
                    this.__onClickResendEmail$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickResendEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickResendEmail");
                                span.setAttribute("outsystems.function.key", "9c1136a7-ec0d-43fb-86d1-282efe363182");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickResendEmail");
                                callContext = controller.callContext(callContext);
                                var sendVerifyEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((!(model.variables.hasTimerStartedVar))) {
                                            OS.Logger.startActiveSpan("StartTimer", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "StartTimer");
                                                    span.setAttribute("outsystems.function.key", "bd6fb628-e8c5-4128-9b64-38d6f5f7bab6");
                                                    span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                    span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_controller_OnClickResendEmail_StartTimerJS, "StartTimer", "OnClickResendEmail", {
                                                        Timer: OS.DataConversion.JSNodeParamConverter.to((model.variables.timerVar).toString(), OS.DataTypes.DataTypes.Text)
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
                                            // Execute Action: SendVerifyEmail
                                            model.flush();
                                            return PartnersHubController.default.sendVerifyEmail$Action(function() {
                                                var rec = new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure();
                                                rec.verify_emailAttr = model.variables.emailIn;
                                                rec.typeAttr = "phone_number_verification";
                                                return rec;
                                            }(), callContext).then(function(value) {
                                                sendVerifyEmailVar.value = value;
                                            }).then(function() {
                                                // Check if SendVerifyEmail IsError
                                                if (((sendVerifyEmailVar.value.isErrorOut === true))) {
                                                    // Input_Code.Valid = False
                                                    model.widgets.get(idService.getId("Input_Code")).validAttr = false;
                                                    // Input_Code.ValidationMessage = SendVerifyEmail.ErrorMessage
                                                    model.widgets.get(idService.getId("Input_Code")).validationMessageAttr = sendVerifyEmailVar.value.errorMessageOut;
                                                }

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

                return this.__onClickResendEmail$Action;
            }
            set _onClickResendEmail$Action(value) {
                this.__onClickResendEmail$Action = value;
            }

            get _setHasTimerStarted$Action() {
                if (!(this.hasOwnProperty("__setHasTimerStarted$Action"))) {
                    this.__setHasTimerStarted$Action = function(hasTimerStarted2In, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetHasTimerStarted", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetHasTimerStarted");
                                span.setAttribute("outsystems.function.key", "b9552e43-0d30-4e25-b605-374527646560");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetHasTimerStarted");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.SetHasTimerStarted$vars"))());
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


            setTimer$Action(newTimerIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetTimer__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetTimer");
                        span.setAttribute("outsystems.function.key", "0580dca0-e9e2-4cdc-ad3b-d5bb991a6a51");
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

            onClickResendEmail$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickResendEmail__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickResendEmail");
                        span.setAttribute("outsystems.function.key", "9c1136a7-ec0d-43fb-86d1-282efe363182");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickResendEmail$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            setHasTimerStarted$Action(hasTimerStarted2In, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetHasTimerStarted__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetHasTimerStarted");
                        span.setAttribute("outsystems.function.key", "b9552e43-0d30-4e25-b605-374527646560");
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
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.SetTimer$vars", [{
            name: "NewTimer",
            attrName: "newTimerInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.SetHasTimerStarted$vars", [{
            name: "HasTimerStarted2",
            attrName: "hasTimerStarted2InLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$controller.OnClickResendEmail.StartTimerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const withTimer = (defaultTimer) => {
            let timer = defaultTimer
            return () => {
                const intervalId = setInterval(() => {
                    if (timer <= 0) {
                        $actions.SetHasTimerStarted(false)
                        $actions.SetTimer(60)
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


define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.de-DE", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Geben Sie den Code ein oder klicken Sie auf den Link in der E-Mail, um zu bestätigen, dass das Konto Ihnen gehört.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Wir haben einen Bestätigungscode gesendet an",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Bestätigen Sie, dass Sie es sind"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.es-ES", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Ingrese el código o haga clic en el enlace del correo electrónico para verificar que la cuenta le pertenece.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Hemos enviado un código de verificación a",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Confirma que eres tú"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.fr-FR", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Entrez le code ou cliquez sur le lien dans l\'e-mail pour vérifier que le compte vous appartient.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Nous avons envoyé un code de vérification à",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Confirmez que c\'est vous"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.it-IT", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Inserisci il codice o fai clic sul link nell\'email per verificare che l\'account appartenga a te.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Abbiamo inviato un codice di verifica a",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Conferma che sei tu"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.pl-PL", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Wprowadź kod lub kliknij link w e-mailu, aby potwierdzić, że konto należy do Ciebie.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Wysłaliśmy kod weryfikacyjny na",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Potwierdź, że to ty"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.pt-PT", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Insira o código ou clique no link no e-mail para verificar que a conta pertence a você.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Enviámos um código de verificação para",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Confirme que é você"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.ru-RU", [], function() {
    return {
        "v5+MWDj2dkSNxfDF9HQMGA#Value": "Введите код или нажмите на ссылку в электронной почте, чтобы подтвердить, что аккаунт принадлежит вам.",
        "Q5xGGMg4_Umu6dd_rTYEew#Value": "Мы отправили код подтверждения на",
        "B3lrFIwzEE6kXtLKNxbdzQ#Value": "Подтвердите, что это вы"
    };
});

define("PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources", ["exports", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.de-DE", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.es-ES", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.fr-FR", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.it-IT", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.pl-PL", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.pt-PT", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_deDE, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_esES, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_frFR, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_itIT, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_plPL, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_ptPT, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});