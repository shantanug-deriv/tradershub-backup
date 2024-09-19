define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.controller", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.model$ST_589441840ccb78b5cd4edd1d387aefc9Structure", "PartnersHub.controller$SendResetPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NewPassword", "newPasswordVar", "NewPassword", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e76ad42f067f0e001aaa1c3ada36905eStructure());
                    }, false, PartnersHubModel.ST_e76ad42f067f0e001aaa1c3ada36905eStructure),
                    this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("EmailVerificationCode", "emailVerificationCodeVar", "EmailVerificationCode", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false),
                    this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("width", "widthIn", "width", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "100%";
                    }, false),
                    this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("verification_code", "verification_codeIn", "verification_code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_verification_codeInDataFetchStatus", "_verification_codeInDataFetchStatus", "_verification_codeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                NewPasswordField: OS.Model.ValidationWidgetRecord
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
            if ("width" in inputs) {
                this.variables.widthIn = inputs.width;
                if ("_widthInDataFetchStatus" in inputs) {
                    this.variables._widthInDataFetchStatus = inputs._widthInDataFetchStatus;
                }

            }

            if ("verification_code" in inputs) {
                this.variables.verification_codeIn = inputs.verification_code;
                if ("_verification_codeInDataFetchStatus" in inputs) {
                    this.variables._verification_codeInDataFetchStatus = inputs._verification_codeInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$model", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "CustomComponents.PasswordPolicy.PasswordPolicy.mvc$view", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.model$ST_589441840ccb78b5cd4edd1d387aefc9Structure", "PartnersHub.controller$SendResetPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_model, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "ForgotPassword.ResetPasswordBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "ResetPasswordBlock",
                functionKey: "0d7b38dd-05fe-492d-9169-cdced55a711b",
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
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_controller;
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
                    style: ("display: flex; flex-direction: column; padding: 0px;" + model.variables.widthIn)
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
                    style: "margin-bottom: 0px; margin-top: 0px;"
                },
                style: "password-input",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    AlignIconRight: true
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
                    name: "CreatePasswordField",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onTogglePasswordVisibility$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer; font-size: 18px; height: 18px; margin-right: 10px;"
                            },
                            gridProperties: {
                                width: "18px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.ic_eye.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedEvents: {
                                onFocus: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onRender$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; height: 50px; margin-bottom: 16px; margin-top: 16px; padding: 5px 16px 5px 16px;"
                            },
                            gridProperties: {
                                width: "100%"
                            },
                            inputType: /*Password*/ 1,
                            mandatory: true,
                            maxLength: 0,
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1", "Enter your password "),
                            style: model.getCachedValue(idService.getId("NewPasswordField.Style"), function() {
                                return (((OS.BuiltinFunctions.length(model.variables.newPasswordVar.passwordAttr) === 0)) ? ("password-input__field") : (((model.variables.isPasswordValidVar) ? ("password-input__field password-input__field--success") : ("password-input__field password-input__field--failure"))));
                            }, function() {
                                return model.variables.newPasswordVar.passwordAttr;
                            }, function() {
                                return model.variables.isPasswordValidVar;
                            }),
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.newPasswordVar.passwordAttr, function(value) {
                                model.variables.newPasswordVar.passwordAttr = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "NewPasswordField"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.newPasswordVar.passwordAttr)]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "padding: 0 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Length: 8,
                    Password: model.variables.newPasswordVar.passwordAttr,
                    HasAtLeastOneSpecialCharacter: false
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    compliant$Action: function(isValidIn) {
                        var eventHandlerContext = callContext.clone();
                        controller.onPasswordCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "6",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Button, {
                enabled: (model.variables.isPasswordValidVar && ((model.variables.emailVerificationCodeVar) !== (""))),
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; background-color: #ff4450; border: none; border-radius: 50px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; margin-top: 24px; max-height: 48px; min-height: 48px; padding: 12px 16px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.resetPasswordhandler$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "\"btn\"",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #fcfcfc; font-weight: bold;"
                },
                text: [$text(getTranslation("tHI2NXdZ20KpxxsrLfXSaA#Value", "Reset my password"))],
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.model$ST_589441840ccb78b5cd4edd1d387aefc9Structure", "PartnersHub.controller$SendResetPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_TranslationsResources);
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
            get _onTogglePasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onTogglePasswordVisibility$Action"))) {
                    this.__onTogglePasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnTogglePasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnTogglePasswordVisibility");
                                span.setAttribute("outsystems.function.key", "10e55de9-6b64-4610-a044-744117a3f4b2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnTogglePasswordVisibility");
                                callContext = controller.callContext(callContext);
                                var showPasswordVar = new OS.DataTypes.VariableHolder();
                                // IsPasswordVisible = notIsPasswordVisible
                                model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
                                // Execute Action: ShowPassword
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("NewPasswordField"), callContext);

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onTogglePasswordVisibility$Action;
            }
            set _onTogglePasswordVisibility$Action(value) {
                this.__onTogglePasswordVisibility$Action = value;
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
                                span.setAttribute("outsystems.function.key", "13d0bd07-e0cb-4a03-b530-bfd1c77bd30d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetVerificationCode
                                controller._setVerificationCode$Action(callContext);
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

            get _onPasswordCompliant$Action() {
                if (!(this.hasOwnProperty("__onPasswordCompliant$Action"))) {
                    this.__onPasswordCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnPasswordCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnPasswordCompliant");
                                span.setAttribute("outsystems.function.key", "50908f5f-2bfe-4338-b9ae-6eada79644c1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnPasswordCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.ForgotPassword.ResetPasswordBlock.OnPasswordCompliant$vars"))());
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

                return this.__onPasswordCompliant$Action;
            }
            set _onPasswordCompliant$Action(value) {
                this.__onPasswordCompliant$Action = value;
            }

            get _resetPasswordhandler$Action() {
                if (!(this.hasOwnProperty("__resetPasswordhandler$Action"))) {
                    this.__resetPasswordhandler$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResetPasswordhandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResetPasswordhandler");
                                span.setAttribute("outsystems.function.key", "62e09e4e-29d0-4f92-8a75-e1efd845d7cb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ResetPasswordhandler");
                                callContext = controller.callContext(callContext);
                                var sendResetPasswordVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendResetPassword
                                    model.flush();
                                    return PartnersHubController.default.sendResetPassword$Action(function() {
                                        var rec = new PartnersHubModel.ST_589441840ccb78b5cd4edd1d387aefc9Structure();
                                        rec.reset_passwordAttr = 1;
                                        rec.new_passwordAttr = model.variables.newPasswordVar.passwordAttr;
                                        rec.verification_codeAttr = model.variables.emailVerificationCodeVar;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendResetPasswordVar.value = value;
                                    }).then(function() {
                                        // Is There Any Errors?
                                        return OS.Flow.executeSequence(function() {
                                            if ((sendResetPasswordVar.value.isErrorOut)) {
                                                // is the error "InvalidToken" ?
                                                if (((sendResetPasswordVar.value.errorCodeOut === "InvalidToken"))) {
                                                    // Destination: /PartnersHub/TokenExpired
                                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "TokenExpired", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                } else {
                                                    // show the error to the user
                                                    OS.FeedbackMessageService.showFeedbackMessage(model.variables.errorMessageVar, /*Info*/ 0);
                                                }

                                            } else {
                                                // Trigger Event: SetIsEmailSentToTrue
                                                return controller.onResetPasswordEvent$Action(callContext);
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

                return this.__resetPasswordhandler$Action;
            }
            set _resetPasswordhandler$Action(value) {
                this.__resetPasswordhandler$Action = value;
            }

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "8d65f041-886b-4f53-bdf1-0d17e84c9fde");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
            }

            get _setVerificationCode$Action() {
                if (!(this.hasOwnProperty("__setVerificationCode$Action"))) {
                    this.__setVerificationCode$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetVerificationCode", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetVerificationCode");
                                span.setAttribute("outsystems.function.key", "d88f19f4-6501-4469-808e-6105e18f3e2b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetVerificationCode");
                                callContext = controller.callContext(callContext);
                                // EmailVerificationCode = verification_code
                                model.variables.emailVerificationCodeVar = model.variables.verification_codeIn;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setVerificationCode$Action;
            }
            set _setVerificationCode$Action(value) {
                this.__setVerificationCode$Action = value;
            }


            onTogglePasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnTogglePasswordVisibility");
                        span.setAttribute("outsystems.function.key", "10e55de9-6b64-4610-a044-744117a3f4b2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onTogglePasswordVisibility$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "13d0bd07-e0cb-4a03-b530-bfd1c77bd30d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            onPasswordCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnPasswordCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnPasswordCompliant");
                        span.setAttribute("outsystems.function.key", "50908f5f-2bfe-4338-b9ae-6eada79644c1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onPasswordCompliant$Action, callContext, isValidIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            resetPasswordhandler$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetPasswordhandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetPasswordhandler");
                        span.setAttribute("outsystems.function.key", "62e09e4e-29d0-4f92-8a75-e1efd845d7cb");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._resetPasswordhandler$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "8d65f041-886b-4f53-bdf1-0d17e84c9fde");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setVerificationCode$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetVerificationCode__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetVerificationCode");
                        span.setAttribute("outsystems.function.key", "d88f19f4-6501-4469-808e-6105e18f3e2b");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setVerificationCode$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onResetPasswordEvent$Action() {
                if (!(this.hasOwnProperty("_onResetPasswordEvent$Action"))) {
                    this._onResetPasswordEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onResetPasswordEvent$Action;
            }
            set onResetPasswordEvent$Action(value) {
                this._onResetPasswordEvent$Action = value;
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
        Controller.registerVariableGroupType("PartnersHub.ForgotPassword.ResetPasswordBlock.OnPasswordCompliant$vars", [{
            name: "IsValid",
            attrName: "isValidInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Setzen Sie mein Passwort zurück",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Geben Sie Ihr Passwort ein"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Restablecer mi contraseña",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Introduzca su contraseña"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Réinitialiser mon mot de passe",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Entrez votre mot de passe"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Reimposta la mia password",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Inserisci la tua password"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Zresetuj moje hasło",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Wprowadź swoje hasło"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Redefinir a minha palavra-passe",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Insira a sua senha"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "tHI2NXdZ20KpxxsrLfXSaA#Value": "Сбросить мой пароль",
        "+512wBgDnUWwPwxRl_kTfg#ValueExpression.-1310854240.1": "Введите ваш пароль"
    };
});

define("PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources", ["exports", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.de-DE", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.es-ES", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.fr-FR", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.it-IT", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.pl-PL", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.pt-PT", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_deDE, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_esES, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_frFR, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_itIT, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_plPL, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_ptPT, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});