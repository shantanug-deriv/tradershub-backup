define("PartnersHub.Signup.EmailVerificationBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Timer", "timerVar", "Timer", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 60;
                    }, false),
                    this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
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
            return {};
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Signup.EmailVerificationBlock.mvc$model", "PartnersHub.Signup.EmailVerificationBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Signup_EmailVerificationBlock_mvc_model, PartnersHub_Signup_EmailVerificationBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Signup.EmailVerificationBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "EmailVerificationBlock",
                functionKey: "5b38b58f-4aa4-4043-912d-cedebcafe98a",
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
            return PartnersHub_Signup_EmailVerificationBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Signup_EmailVerificationBlock_mvc_controller;
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
                text: [$text(getTranslation("nmZ5mUvyNEKM2qCLevum5Q#Value", "We\'ve sent a verification link to"))],
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
                value: PartnersHubClientVariables.getSignupEmail(),
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
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; margin-bottom: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "margin-bottom: 8px; margin-right: 8px;"
                },
                text: [$text(getTranslation("X44uz9A6JkW4bDTdx+u2Dw#Value", "Didn\'t get an email?"))],
                _idProps: {
                    service: idService,
                    uuid: "8"
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
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "cursor: pointer; font-weight: bold; text-decoration: underline;"
                    },
                    text: [$text(getTranslation("gmoJ9bRlBk2hPDhbG6xeKw#Value", "Resend email"))],
                    _idProps: {
                        service: idService,
                        uuid: "10"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "color: #adb5bd; font-weight: bold; text-decoration: underline;"
                    },
                    value: ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1", "Resend code in ") + (model.variables.timerVar).toString()) + OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1", " sec")),
                    _idProps: {
                        service: idService,
                        uuid: "11"
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
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
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
                    style: "display: block;"
                },
                text: [$text(getTranslation("Gti3g47eEU+oenmecSnO6Q#Value", " • Make sure you\'ve entered your email correctly."))],
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("kSn5sLsbmkmpruyoXIZ6LQ#Value", " • Check your spam folder."))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("EShNp62YjUep+kX04AAY+g#Value", " • Make sure the email isn’t blocked by firewalls or filters.")))))));
        }
    }

    return View;
});
define("PartnersHub.Signup.EmailVerificationBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources", "PartnersHub.Signup.EmailVerificationBlock.mvc$controller.OnClickTimer.JavaScript1JS"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Signup_EmailVerificationBlock_mvc_TranslationsResources, PartnersHub_Signup_EmailVerificationBlock_mvc_controller_OnClickTimer_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Signup_EmailVerificationBlock_mvc_TranslationsResources);
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
            get _onClickTimer$Action() {
                if (!(this.hasOwnProperty("__onClickTimer$Action"))) {
                    this.__onClickTimer$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickTimer", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickTimer");
                                span.setAttribute("outsystems.function.key", "2f4a9132-6c9b-40ca-ada0-c29fa7db91c5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickTimer");
                                callContext = controller.callContext(callContext);
                                // sent email notificaiton
                                OS.FeedbackMessageService.showFeedbackMessage("Email sent.", /*Success*/ 1);
                                if ((!(model.variables.hasTimerStartedVar))) {
                                    OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "3ba39bb3-075f-4f65-a4d9-5efd1b04a247");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Signup_EmailVerificationBlock_mvc_controller_OnClickTimer_JavaScript1JS, "JavaScript1", "OnClickTimer", {
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
                                span.setAttribute("outsystems.function.key", "6babdf96-6de0-4dea-bf78-44444866edeb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetTimer");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Signup.EmailVerificationBlock.SetTimer$vars"))());
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

            get _setHasTimerStarted$Action() {
                if (!(this.hasOwnProperty("__setHasTimerStarted$Action"))) {
                    this.__setHasTimerStarted$Action = function(hasTimerStarted2In, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetHasTimerStarted", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetHasTimerStarted");
                                span.setAttribute("outsystems.function.key", "a106d904-3a32-438e-b365-518f5be97ca6");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetHasTimerStarted");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Signup.EmailVerificationBlock.SetHasTimerStarted$vars"))());
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


            onClickTimer$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickTimer__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickTimer");
                        span.setAttribute("outsystems.function.key", "2f4a9132-6c9b-40ca-ada0-c29fa7db91c5");
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
                        span.setAttribute("outsystems.function.key", "6babdf96-6de0-4dea-bf78-44444866edeb");
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

            setHasTimerStarted$Action(hasTimerStarted2In, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetHasTimerStarted__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetHasTimerStarted");
                        span.setAttribute("outsystems.function.key", "a106d904-3a32-438e-b365-518f5be97ca6");
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
        Controller.registerVariableGroupType("PartnersHub.Signup.EmailVerificationBlock.SetTimer$vars", [{
            name: "NewTimer",
            attrName: "newTimerInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Signup.EmailVerificationBlock.SetHasTimerStarted$vars", [{
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

define("PartnersHub.Signup.EmailVerificationBlock.mvc$controller.OnClickTimer.JavaScript1JS", [], function() {
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


define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Stellen Sie sicher, dass die E-Mail nicht von Firewalls oder Filtern blockiert wird.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Überprüfen Sie Ihren Spam-Ordner.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Stellen Sie sicher, dass Sie Ihre E-Mail-Adresse korrekt eingegeben haben.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Code erneut senden in",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "Sekunde",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "E-Mail erneut senden",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Keine E-Mail erhalten?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Wir haben einen Bestätigungslink an Sie gesendet."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Asegúrate de que el correo electrónico no esté bloqueado por cortafuegos o filtros.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Verifica tu carpeta de spam.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Asegúrate de haber ingresado tu correo electrónico correctamente.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Reenviar código en",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "segundo",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Reenviar correo electrónico",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "¿No recibiste un correo electrónico?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Hemos enviado un enlace de verificación a usted."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Assurez-vous que l\'e-mail n\'est pas bloqué par des pare-feu ou des filtres.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Vérifiez votre dossier de spam.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Assurez-vous d\'avoir entré votre e-mail correctement.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Renvoyer le code dans",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "seconde",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Renvoyer l\'e-mail",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Vous n\'avez pas reçu d\'e-mail ?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Nous vous avons envoyé un lien de vérification."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Assicurati che l\'email non sia bloccata da firewall o filtri.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Controlla la tua cartella spam.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Assicurati di aver inserito correttamente la tua email.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Reinvia il codice in",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "secondo",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Invia nuovamente l\'email",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Non hai ricevuto un\'email?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Abbiamo inviato un link di verifica a te."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Upewnij się, że e-mail nie jest blokowany przez zapory lub filtry.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Sprawdź swój folder spam.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Upewnij się, że poprawnie wpisałeś swój adres e-mail.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Wyślij kod ponownie w",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "sekunda",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Wyślij e-mail ponownie",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Nie otrzymałeś e-maila?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Wysłaliśmy do Ciebie link weryfikacyjny."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Certifique-se de que o e-mail não está bloqueado por firewalls ou filtros.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Verifique a sua pasta de spam.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Certifique-se de que inseriu o seu e-mail corretamente.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Reenviar código em",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "segundo",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Reenviar e-mail",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Não recebeu um e-mail?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Enviámos um link de verificação para si."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "EShNp62YjUep+kX04AAY+g#Value": "Убедитесь, что электронное письмо не заблокировано брандмауэрами или фильтрами.",
        "kSn5sLsbmkmpruyoXIZ6LQ#Value": "Проверьте свою папку со спамом.",
        "Gti3g47eEU+oenmecSnO6Q#Value": "Убедитесь, что вы правильно ввели свой адрес электронной почты.",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.-831934195.1": "Повторно отправить код в",
        "etHx6o0xsEibhJs7jg1Onw#ValueExpression.1067057.1": "секунда",
        "gmoJ9bRlBk2hPDhbG6xeKw#Value": "Переслать электронное письмо",
        "X44uz9A6JkW4bDTdx+u2Dw#Value": "Не получили электронное письмо?",
        "nmZ5mUvyNEKM2qCLevum5Q#Value": "Мы отправили вам ссылку для подтверждения."
    };
});

define("PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources", ["exports", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.de-DE", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.es-ES", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.fr-FR", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.it-IT", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.pl-PL", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.pt-PT", "PartnersHub.Signup.EmailVerificationBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_deDE, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_esES, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_frFR, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_itIT, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_plPL, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_ptPT, PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Signup_EmailVerificationBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});