define("PartnersHub.ForgotPassword.TokenExpired.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.Common.AlertBlock.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutSignup_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_Common_AlertBlock_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
    OS.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return VariablesRecord;
        }

        static getWidgetsRecordConstructor() {
            return WidgetsRecord;
        }

        static get hasValidationWidgets() {
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || PartnersHub_Common_AlertBlock_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.ForgotPassword.TokenExpired.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.TokenExpired.mvc$model", "PartnersHub.ForgotPassword.TokenExpired.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "PartnersHub.Common.AlertBlock.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_ForgotPassword_TokenExpired_mvc_model, PartnersHub_ForgotPassword_TokenExpired_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.TokenExpired";
        }

        static getAttributes() {
            return {
                codeFunction: "TokenExpired",
                functionKey: "25d4875a-79d8-4246-bcc7-86b55cb5187f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_ForgotPassword_TokenExpired_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_TokenExpired_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("WofUJdh5RkK8x4a1XLUYfw#Title", "TokenExpired");
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
                        controller.closePage$Action(controller.callContext(eventHandlerContext));

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
                                            style: "background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px; padding: 24px 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "388px"
                                        },
                                        style: "signup",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(PartnersHub_Common_AlertBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            title: "Email verification link expired",
                                            description: "Request a new one.",
                                            type: model.getCachedValue(idService.getId("AlertTokenExpired.type"), function() {
                                                return function() {
                                                    var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                    rec.isWarningAttr = true;
                                                    return rec;
                                                }();
                                            })
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            actionHandler$Action: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.sendEmailEvent$Action(controller.callContext(eventHandlerContext));
                                                });;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            name: "AlertTokenExpired",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })))];
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
                                            HasCloseIcon: true,
                                            Title: "Link expired"
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClose$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.closePage$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "5",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: "display: flex; justify-content: center; padding: 100px 16px;"
                                                    },
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
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(PartnersHub_Common_AlertBlock_mvc_view, {
                                                    getOwnerSpan: function() {
                                                        return _this.getChildSpan("render");
                                                    },
                                                    getOwnerDisposeSpan: function() {
                                                        return _this.getChildSpan("destroy");
                                                    },
                                                    inputs: {
                                                        title: "Email verification link expired",
                                                        type: model.getCachedValue(idService.getId("h4uyvPKkFU2oIGn2kKbqKA.type"), function() {
                                                            return function() {
                                                                var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                                rec.isWarningAttr = true;
                                                                return rec;
                                                            }();
                                                        }),
                                                        description: "Request a new one."
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        actionHandler$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return controller.sendEmailEvent$Action(controller.callContext(eventHandlerContext));
                                                            });;
                                                        }
                                                    },
                                                    _validationProps: {
                                                        validationService: validationService
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "8",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })))];
                                            })
                                        },
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.TokenExpired.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.TokenExpired.mvc$translationsResources", "PartnersHub.ForgotPassword.controller", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_TokenExpired_mvc_TranslationsResources, PartnersHub_ForgotPasswordController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_TokenExpired_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "80164ba5-d48e-4ba2-a005-615d59734e09");
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

            get _sendEmailEvent$Action() {
                if (!(this.hasOwnProperty("__sendEmailEvent$Action"))) {
                    this.__sendEmailEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendEmailEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendEmailEvent");
                                span.setAttribute("outsystems.function.key", "8a483d62-efe5-47b8-9630-719194bc2149");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendEmailEvent");
                                callContext = controller.callContext(callContext);
                                var sendVerifyEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendVerifyEmail
                                    model.flush();
                                    return PartnersHubController.default.sendVerifyEmail$Action(function() {
                                        var rec = new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure();
                                        rec.verify_emailAttr = PartnersHubClientVariables.getResetEmail();
                                        rec.typeAttr = "reset_password";
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendVerifyEmailVar.value = value;
                                    }).then(function() {
                                        if ((sendVerifyEmailVar.value.isErrorOut)) {
                                            // IsResetEmailSent = False
                                            PartnersHubClientVariables.setIsResetEmailSent(false);
                                            // IsSnackBarVisible = True
                                            PartnersHubClientVariables.setIsSnackBarVisible(true);
                                            OS.FeedbackMessageService.showFeedbackMessage(sendVerifyEmailVar.value.errorMessageOut, /*Error*/ 3);
                                        } else {
                                            // IsResetEmailSent = True
                                            PartnersHubClientVariables.setIsResetEmailSent(true);
                                            OS.FeedbackMessageService.showFeedbackMessage("Email sent", /*Success*/ 1);
                                            // Destination: /PartnersHub/VerificationEmailSent
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "VerificationEmailSent", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

            get _closePage$Action() {
                if (!(this.hasOwnProperty("__closePage$Action"))) {
                    this.__closePage$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ClosePage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ClosePage");
                                span.setAttribute("outsystems.function.key", "a9b0bd0d-e6c3-4106-bef4-8c512c2dc93c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ClosePage");
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

                return this.__closePage$Action;
            }
            set _closePage$Action(value) {
                this.__closePage$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "80164ba5-d48e-4ba2-a005-615d59734e09");
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

            sendEmailEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendEmailEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendEmailEvent");
                        span.setAttribute("outsystems.function.key", "8a483d62-efe5-47b8-9630-719194bc2149");
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

            closePage$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ClosePage__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ClosePage");
                        span.setAttribute("outsystems.function.key", "a9b0bd0d-e6c3-4106-bef4-8c512c2dc93c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closePage$Action, callContext);
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


define("PartnersHub.ForgotPassword.TokenExpired.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});