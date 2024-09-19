define("PartnersHub.ForgotPassword.ForgotPassword.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ForgotPasswordEmail", "forgotPasswordEmailVar", "ForgotPasswordEmail", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    forgotPasswordEmailVar: OS.DataTypes.ImmutableBase.getData(str)
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
                ResetPasswordEmailForm: OS.Model.ValidationWidgetRecord,
                EmailInput: OS.Model.ValidationWidgetRecord,
                ResetPasswordEmailForm2: OS.Model.ValidationWidgetRecord,
                EmailinputMobile: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.ForgotPassword.mvc$model", "PartnersHub.ForgotPassword.ForgotPassword.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_ForgotPassword_ForgotPassword_mvc_model, PartnersHub_ForgotPassword_ForgotPassword_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.ForgotPassword";
        }

        static getAttributes() {
            return {
                codeFunction: "ForgotPassword",
                functionKey: "bb171220-c824-47ef-90f5-daf3f0e40dd8",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.ForgotPassword.ForgotPassword.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_ForgotPassword_ForgotPassword_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_ForgotPassword_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("IBIXuyTI70eQ9drz8OQN2A#Title", "ForgotPassword");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutSignup_mvc_view, {
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
                    },
                    event$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.goBackEvent$Action(controller.callContext(eventHandlerContext));

                        ;
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
                        return [React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                desktopContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "background-color: #ffffff;"
                                        },
                                        style: "login-screen",
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
                                            style: "border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "420px"
                                        },
                                        style: "signup",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Form, {
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        extendedProperties: {
                                            style: "background-color: #fff; border-width: 0px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "form card",
                                        _idProps: {
                                            service: idService,
                                            name: "ResetPasswordEmailForm"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #333; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;"
                                        },
                                        text: [$text(getTranslation("YDh0MyyAak+VvW7qL38MXw#Value", "Forgot password"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 16px;"
                                        },
                                        text: [$text(getTranslation("rLgXlSTML0WrzZUE8llzYg#Value", "We’ll email you instructions to reset your password."))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Label, {
                                        extendedProperties: {
                                            style: "margin-top: 24px;"
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
                                            style: "color: #4F575E; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 0px;"
                                        },
                                        text: [$text(getTranslation("5zG3vVwLSUmzxK8J2_EDJQ#Value", "Email"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("ResetPasswordEmailForm")
                                        },
                                        enabled: true,
                                        extendedProperties: {
                                            style: "border-radius: 8px; height: 48px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Email*/ 7,
                                        mandatory: true,
                                        maxLength: 50,
                                        prompt: "Enter your email",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.forgotPasswordEmailVar, function(value) {
                                            model.variables.forgotPasswordEmailVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "EmailInput"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "border-radius: 100px; height: 48px;"
                                        },
                                        gridProperties: {
                                            width: "100%"
                                        },
                                        isDefault: true,
                                        onClick: function() {
                                            controller.validationService.validateWidget(idService.getId("ResetPasswordEmailForm"));
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.sendEmailEvent$Action(controller.callContext(eventHandlerContext));
                                            });

                                            ;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $text(getTranslation("vX58_Fqy6UG10yQ9Z1cm7w#Value", "Send email"))))))];
                                }),
                                tabletContent: PlaceholderContent.Empty,
                                mobileContent: new PlaceholderContent(function() {
                                    return [React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            HasBackButton: false,
                                            Title: "Forgot password",
                                            HasCloseIcon: false
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
                                            uuid: "13",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: "display: flex; justify-content: center;"
                                                    },
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "14"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-color: #fff; border-radius: 8px; margin-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline",
                                                        width: "100%"
                                                    },
                                                    style: "signup",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Form, {
                                                    _validationProps: {
                                                        validationService: validationService
                                                    },
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-width: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    style: "form card",
                                                    _idProps: {
                                                        service: idService,
                                                        name: "ResetPasswordEmailForm2"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Container, {
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
                                                }, React.createElement(OSWidgets.Text, {
                                                    extendedProperties: {
                                                        style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px;"
                                                    },
                                                    text: [$text(getTranslation("FWCTvECwVEi6umdPrnYO+g#Value", "We’ll email you instructions to reset your password."))],
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "18"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })), React.createElement(OSWidgets.Label, {
                                                    extendedProperties: {
                                                        style: "margin-top: 24px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "19"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Text, {
                                                    extendedProperties: {
                                                        style: "color: #4F575E; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 0px;"
                                                    },
                                                    text: [$text(getTranslation("sXKPoLUybE2FHFmsCMZ4yg#Value", "Email"))],
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "20"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })), React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("ResetPasswordEmailForm2")
                                                    },
                                                    enabled: true,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: /*Email*/ 7,
                                                    mandatory: true,
                                                    maxLength: 50,
                                                    prompt: "Enter your email",
                                                    style: "form-control",
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.forgotPasswordEmailVar, function(value) {
                                                        model.variables.forgotPasswordEmailVar = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "EmailinputMobile"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }), React.createElement(OSWidgets.Button, {
                                                    enabled: true,
                                                    extendedProperties: {
                                                        style: "border-radius: 100px; height: 40px;"
                                                    },
                                                    isDefault: true,
                                                    onClick: function() {
                                                        controller.validationService.validateWidget(idService.getId("ResetPasswordEmailForm2"));
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return controller.sendEmailEvent$Action(controller.callContext(eventHandlerContext));
                                                        });

                                                        ;
                                                    },
                                                    style: "btn btn-primary full-width",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "22"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, $text(getTranslation("0B5RuWgJTUiealfNUe3R0A#Value", "Send email"))))))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.forgotPasswordEmailVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.forgotPasswordEmailVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.forgotPasswordEmailVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.ForgotPassword.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources", "PartnersHub.ForgotPassword.controller", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_ForgotPassword_mvc_TranslationsResources, PartnersHub_ForgotPasswordController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_ForgotPassword_mvc_TranslationsResources);
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
            get _sendEmailEvent$Action() {
                if (!(this.hasOwnProperty("__sendEmailEvent$Action"))) {
                    this.__sendEmailEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendEmailEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendEmailEvent");
                                span.setAttribute("outsystems.function.key", "475c41c4-bddd-43e0-bcd5-98d46542bf6a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendEmailEvent");
                                callContext = controller.callContext(callContext);
                                var sendVerifyEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((((PartnersHubClientVariables.getIsDesktop()) ? (model.widgets.get(idService.getId("ResetPasswordEmailForm")).validAttr) : (model.widgets.get(idService.getId("ResetPasswordEmailForm2")).validAttr)))) {
                                            // ResetEmail = ForgotPasswordEmail
                                            PartnersHubClientVariables.setResetEmail(model.variables.forgotPasswordEmailVar);
                                            // Execute Action: SendVerifyEmail
                                            model.flush();
                                            return PartnersHubController.default.sendVerifyEmail$Action(function() {
                                                var rec = new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure();
                                                rec.verify_emailAttr = model.variables.forgotPasswordEmailVar;
                                                rec.typeAttr = "reset_password";
                                                return rec;
                                            }(), callContext).then(function(value) {
                                                sendVerifyEmailVar.value = value;
                                            }).then(function() {
                                                // Check if SendVerifyEmail IsError
                                                if ((sendVerifyEmailVar.value.isErrorOut)) {
                                                    OS.FeedbackMessageService.showFeedbackMessage(sendVerifyEmailVar.value.errorMessageOut, /*Error*/ 3);
                                                } else {
                                                    // Destination: /PartnersHub/VerificationEmailSent
                                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "VerificationEmailSent", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                }

                                            });
                                        } else {
                                            // EmailInput.ValidationMessage = "Email is invalid"
                                            model.widgets.get(idService.getId("EmailInput")).validationMessageAttr = "Email is invalid";
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

                return this.__sendEmailEvent$Action;
            }
            set _sendEmailEvent$Action(value) {
                this.__sendEmailEvent$Action = value;
            }

            get _goBackEvent$Action() {
                if (!(this.hasOwnProperty("__goBackEvent$Action"))) {
                    this.__goBackEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoBackEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoBackEvent");
                                span.setAttribute("outsystems.function.key", "92d1cca1-4e92-40f8-b40f-a137a4bc2229");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoBackEvent");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectToOauth
                                PartnersHubController.default.redirectToOauth$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__goBackEvent$Action;
            }
            set _goBackEvent$Action(value) {
                this.__goBackEvent$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ef2ea48d-3e81-4f73-9d3a-c3efbd7a49af");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            sendEmailEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendEmailEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendEmailEvent");
                        span.setAttribute("outsystems.function.key", "475c41c4-bddd-43e0-bcd5-98d46542bf6a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendEmailEvent$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            goBackEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoBackEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoBackEvent");
                        span.setAttribute("outsystems.function.key", "92d1cca1-4e92-40f8-b40f-a137a4bc2229");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goBackEvent$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "ef2ea48d-3e81-4f73-9d3a-c3efbd7a49af");
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
                        return PartnersHub_ForgotPasswordController.default.handleError(ex, this.callContext());
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


define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.de-DE", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "E-Mail senden",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "E-Mail",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Wir senden Ihnen Anweisungen zum Zurücksetzen Ihres Passworts per E-Mail.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "E-Mail senden",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "E-Mail",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Wir werden Ihnen Anweisungen zum Zurücksetzen Ihres Passworts per E-Mail senden.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Passwort vergessen"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.es-ES", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Enviar correo electrónico",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "Correo electrónico",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Te enviaremos instrucciones para restablecer tu contraseña por correo electrónico.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Enviar correo electrónico",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "Correo electrónico",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Te enviaremos por correo electrónico las instrucciones para restablecer tu contraseña.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Olvidé mi contraseña"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.fr-FR", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Envoyer un e-mail",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "E-mail",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Nous vous enverrons des instructions par e-mail pour réinitialiser votre mot de passe.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Envoyer un e-mail",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "E-mail",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Nous vous enverrons par e-mail des instructions pour réinitialiser votre mot de passe.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Mot de passe oublié"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.it-IT", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Inviare un\'email",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "Email",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Ti invieremo istruzioni per reimpostare la tua password via email.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Inviare un\'email",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "Email",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Ti invieremo un\'email con le istruzioni per reimpostare la tua password.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Password dimenticato"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.pl-PL", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Wyślij e-mail",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "E-mail",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Wyślemy Ci instrukcje dotyczące resetowania hasła na adres e-mail.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Wyślij e-mail",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "E-mail",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Wyślemy Ci instrukcje dotyczące resetowania hasła na adres e-mail.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Zapomniałem hasła"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.pt-PT", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Enviar e-mail",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "Email",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Enviaremos instruções para redefinir a sua senha por e-mail.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Enviar e-mail",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "Email",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Enviaremos por e-mail as instruções para redefinir a sua palavra-passe.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Esqueci a senha"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.ru-RU", [], function() {
    return {
        "0B5RuWgJTUiealfNUe3R0A#Value": "Отправить электронное письмо",
        "sXKPoLUybE2FHFmsCMZ4yg#Value": "Электронная почта",
        "FWCTvECwVEi6umdPrnYO+g#Value": "Мы отправим вам инструкции по сбросу пароля на электронную почту.",
        "vX58_Fqy6UG10yQ9Z1cm7w#Value": "Отправить электронное письмо",
        "5zG3vVwLSUmzxK8J2_EDJQ#Value": "Электронная почта",
        "rLgXlSTML0WrzZUE8llzYg#Value": "Мы отправим вам инструкции по сбросу пароля по электронной почте.",
        "YDh0MyyAak+VvW7qL38MXw#Value": "Забыли пароль"
    };
});

define("PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources", ["exports", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.de-DE", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.es-ES", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.fr-FR", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.it-IT", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.pl-PL", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.pt-PT", "PartnersHub.ForgotPassword.ForgotPassword.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_deDE, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_esES, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_frFR, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_itIT, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_plPL, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_ptPT, PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_ForgotPassword_ForgotPassword_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});