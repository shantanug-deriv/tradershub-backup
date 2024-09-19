define("tradershub.ForgotAndResetPassword.ResetPassword.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$CleanupAfterResetPassword", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Password", "passwordVar", "Password", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("showPassword", "showPasswordVar", "showPassword", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
            return {
                Form: OS.Model.ValidationWidgetRecord,
                Input_password: OS.Model.ValidationWidgetRecord
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

define("tradershub.ForgotAndResetPassword.ResetPassword.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.ForgotAndResetPassword.ResetPassword.mvc$model", "tradershub.ForgotAndResetPassword.ResetPassword.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Common.PasswordPolicy.mvc$view", "tradershub.controller$CleanupAfterResetPassword", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_ForgotAndResetPassword_ResetPassword_mvc_model, tradershub_ForgotAndResetPassword_ResetPassword_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, tradershub_Common_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotAndResetPassword.ResetPassword";
        }

        static getAttributes() {
            return {
                codeFunction: "ResetPassword",
                functionKey: "8c12b147-48a6-4e00-b186-7fe617ec42b2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.ForgotAndResetPassword.ResetPassword.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, tradershub_Common_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return tradershub_ForgotAndResetPassword_ResetPassword_mvc_model;
        }

        get controllerFactory() {
            return tradershub_ForgotAndResetPassword_ResetPassword_mvc_controller;
        }

        get title() {


            return "ResetPassword";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_SignupLayoutTopMenu_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "background: ; height: auto; text-align: left;"
                            },
                            style: "modal ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
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
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column header-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "bord",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "login", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 14px; margin-right: 16px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: ["Reset Password"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "color: #F1F3F5; height: 2px; margin-bottom: 12px; margin-top: 12px;"
                            },
                            style: "border-bottom-s divider",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Divider"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column gap-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "border-width: 0px; margin-top: 8px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "\"form card\"",
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: model.getCachedValue(idService.getId("05mDpShmJUGOd30rPGLsww.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_password")).validAttr) ? ("") : ("margin-bottom-l"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_password")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "position-relative",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            enabled: true,
                            extendedProperties: {
                                type: model.getCachedValue(idService.getId("Input_password.type"), function() {
                                    return ((model.variables.showPasswordVar) ? ("text") : ("password"));
                                }, function() {
                                    return model.variables.showPasswordVar;
                                }),
                                style: "margin-bottom: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Password*/ 1,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your password",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function(value) {
                                model.variables.passwordVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickShowPassword$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer; right: 16px; top: 40%;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                            style: "position-absolute absolute-center-right ",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(tradershub_Common_PasswordPolicy_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Type: "CREATE",
                                Length: 8,
                                Password: model.variables.passwordVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                compliant$Action: function(isValidIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.passwordPolicyCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "15",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px;"
                            },
                            isDefault: true,
                            onClick: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.resetMyPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                                });;
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Reset my password"))))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_password")).validAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.ForgotAndResetPassword.ResetPassword.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.ForgotAndResetPassword.controller", "tradershub.ForgotAndResetPassword.ResetPassword.mvc$controller.SendNewPassword.reset_password_payloadJS", "tradershub.controller$CleanupAfterResetPassword", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_ForgotAndResetPasswordController, tradershub_ForgotAndResetPassword_ResetPassword_mvc_controller_SendNewPassword_reset_password_payloadJS) {
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
            get _passwordPolicyCompliant$Action() {
                if (!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
                    this.__passwordPolicyCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PasswordPolicyCompliant");
                                span.setAttribute("outsystems.function.key", "0f82ecea-8e17-439b-9ee1-4b6d644e0615");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PasswordPolicyCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.PasswordPolicyCompliant$vars"))());
                                vars.value.isValidInLocal = isValidIn;
                                // IsPasswordValid = IsValid
                                model.variables.isPasswordValidVar = vars.value.isValidInLocal;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__passwordPolicyCompliant$Action;
            }
            set _passwordPolicyCompliant$Action(value) {
                this.__passwordPolicyCompliant$Action = value;
            }

            get _onClickShowPassword$Action() {
                if (!(this.hasOwnProperty("__onClickShowPassword$Action"))) {
                    this.__onClickShowPassword$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickShowPassword", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickShowPassword");
                                span.setAttribute("outsystems.function.key", "2081c48a-42fd-42e9-95e0-2fdcd2ca8408");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickShowPassword");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.showPasswordVar)) {
                                    // showPassword = False
                                    model.variables.showPasswordVar = false;
                                } else {
                                    // showPassword = True
                                    model.variables.showPasswordVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickShowPassword$Action;
            }
            set _onClickShowPassword$Action(value) {
                this.__onClickShowPassword$Action = value;
            }

            get _sendNewPassword$Action() {
                if (!(this.hasOwnProperty("__sendNewPassword$Action"))) {
                    this.__sendNewPassword$Action = function(newPasswordIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendNewPassword", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendNewPassword");
                                span.setAttribute("outsystems.function.key", "3ffdf30b-aab9-432c-8988-1a04c5033c92");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendNewPassword");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$vars"))());
                                vars.value.newPasswordInLocal = newPasswordIn;
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var reset_password_payloadJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    reset_password_payloadJSResult.value = OS.Logger.startActiveSpan("reset_password_payload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "reset_password_payload");
                                            span.setAttribute("outsystems.function.key", "e3c260d4-d5dd-4754-b80c-c23ed11eb338");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_ForgotAndResetPassword_ResetPassword_mvc_controller_SendNewPassword_reset_password_payloadJS, "reset_password_payload", "SendNewPassword", {
                                                NewPassword: OS.DataConversion.JSNodeParamConverter.to(vars.value.newPasswordInLocal, OS.DataTypes.DataTypes.Text),
                                                VerificationCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCode(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$reset_password_payloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: DerivApiSendMessage
                                    model.flush();
                                    return tradershubController.default.derivApiSendMessage$Action(reset_password_payloadJSResult.value.payloadOut, "reset_password", false, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                                            // ResetPasswordEmailSent = False
                                            tradershubClientVariables.setResetPasswordEmailSent(false);
                                            // ResetPasswordLinkExpired = True
                                            tradershubClientVariables.setResetPasswordLinkExpired(true);
                                            // Destination: /tradershub/ForgotPassword
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "ForgotPassword", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            OS.FeedbackMessageService.showFeedbackMessage("Password has been updated!", /*Success*/ 1);
                                            // Execute Action: CleanupAfterResetPassword
                                            tradershubController.default.cleanupAfterResetPassword$Action(callContext);
                                            // Destination: /tradershub/LoginScreen
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__sendNewPassword$Action;
            }
            set _sendNewPassword$Action(value) {
                this.__sendNewPassword$Action = value;
            }

            get _resetMyPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__resetMyPasswordOnClick$Action"))) {
                    this.__resetMyPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResetMyPasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResetMyPasswordOnClick");
                                span.setAttribute("outsystems.function.key", "f845f332-ce0a-473c-a3b6-96edc2fdca50");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ResetMyPasswordOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.isPasswordValidVar)) {
                                            // Execute Action: SendNewPassword
                                            return controller._sendNewPassword$Action(model.variables.passwordVar, callContext);
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

                return this.__resetMyPasswordOnClick$Action;
            }
            set _resetMyPasswordOnClick$Action(value) {
                this.__resetMyPasswordOnClick$Action = value;
            }


            passwordPolicyCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PasswordPolicyCompliant");
                        span.setAttribute("outsystems.function.key", "0f82ecea-8e17-439b-9ee1-4b6d644e0615");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._passwordPolicyCompliant$Action, callContext, isValidIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickShowPassword$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickShowPassword__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickShowPassword");
                        span.setAttribute("outsystems.function.key", "2081c48a-42fd-42e9-95e0-2fdcd2ca8408");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickShowPassword$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            sendNewPassword$Action(newPasswordIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendNewPassword__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendNewPassword");
                        span.setAttribute("outsystems.function.key", "3ffdf30b-aab9-432c-8988-1a04c5033c92");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendNewPassword$Action, callContext, newPasswordIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            resetMyPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetMyPasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetMyPasswordOnClick");
                        span.setAttribute("outsystems.function.key", "f845f332-ce0a-473c-a3b6-96edc2fdca50");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._resetMyPasswordOnClick$Action, callContext);
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
                        return tradershub_ForgotAndResetPasswordController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.PasswordPolicyCompliant$vars", [{
            name: "IsValid",
            attrName: "isValidInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$vars", [{
            name: "NewPassword",
            attrName: "newPasswordInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$reset_password_payloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.ForgotAndResetPassword.ResetPassword.mvc$controller.SendNewPassword.reset_password_payloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            verification_code: $parameters.VerificationCode,
            new_password: $parameters.NewPassword
        })
    };
});