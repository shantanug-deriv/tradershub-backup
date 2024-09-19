define("PartnersHub.ForgotPassword.VerificationEmailSent.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutSignup_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel) {
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
                Model._hasValidationWidgetsValue = (((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.ForgotPassword.VerificationEmailSent.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.VerificationEmailSent.mvc$model", "PartnersHub.ForgotPassword.VerificationEmailSent.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_ForgotPassword_VerificationEmailSent_mvc_model, PartnersHub_ForgotPassword_VerificationEmailSent_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.VerificationEmailSent";
        }

        static getAttributes() {
            return {
                codeFunction: "VerificationEmailSent",
                functionKey: "1bb01e8e-fdbf-462b-a936-187b2f7ea535",
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
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_ForgotPassword_VerificationEmailSent_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_VerificationEmailSent_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("jh6wG7_9K0apNhh7L36lNQ#Title", "VerificationEmailSent");
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
                inputs: {
                    HasNoLogo: true,
                    BackgroundColor: "#f8f9fa"
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
                                            style: "background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; border-width: 1px; margin-top: 0px; padding: 24px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "fill"
                                        },
                                        style: "signup",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            UserEmail: PartnersHubClientVariables.getResetEmail()
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            resendEmailHandler$Action: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.reSendEmailEvent$Action(controller.callContext(eventHandlerContext));
                                                });;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "4",
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
                                            HasCloseIcon: false,
                                            IsHeaderVisible: false,
                                            Title: "",
                                            HasBackButton: false
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
                                                        style: "display: flex; justify-content: center; padding: 16px; position: relative;"
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
                                                        style: "background-color: #fff; border-color: #fff; border-radius: 8px; margin-top: 0px; padding-top: 50px;"
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
                                                }, React.createElement(PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_view, {
                                                    getOwnerSpan: function() {
                                                        return _this.getChildSpan("render");
                                                    },
                                                    getOwnerDisposeSpan: function() {
                                                        return _this.getChildSpan("destroy");
                                                    },
                                                    inputs: {
                                                        UserEmail: PartnersHubClientVariables.getResetEmail()
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        resendEmailHandler$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return controller.reSendEmailEvent$Action(controller.callContext(eventHandlerContext));
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
                                        _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getResetEmail())]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getResetEmail())]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getResetEmail())]
            }));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.VerificationEmailSent.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.VerificationEmailSent.mvc$translationsResources", "PartnersHub.ForgotPassword.controller", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_VerificationEmailSent_mvc_TranslationsResources, PartnersHub_ForgotPasswordController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_VerificationEmailSent_mvc_TranslationsResources);
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "378d9c64-af72-4be7-8d28-adf534c2565f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: MountDerivAPIClient
                                PartnersHubController.default.mountDerivAPIClient$Action(callContext);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "8a3dfc56-e38a-4f94-bc60-f46adc435df1");
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

            get _reSendEmailEvent$Action() {
                if (!(this.hasOwnProperty("__reSendEmailEvent$Action"))) {
                    this.__reSendEmailEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ReSendEmailEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ReSendEmailEvent");
                                span.setAttribute("outsystems.function.key", "d3f59e2c-e08c-4f11-84fd-b8cd1136fdf7");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ReSendEmailEvent");
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
                                            OS.FeedbackMessageService.showFeedbackMessage(sendVerifyEmailVar.value.errorMessageOut, /*Error*/ 3);
                                        } else {
                                            // IsResetEmailSent = True
                                            PartnersHubClientVariables.setIsResetEmailSent(true);
                                            OS.FeedbackMessageService.showFeedbackMessage("Email sent.", /*Success*/ 1);
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

                return this.__reSendEmailEvent$Action;
            }
            set _reSendEmailEvent$Action(value) {
                this.__reSendEmailEvent$Action = value;
            }


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "378d9c64-af72-4be7-8d28-adf534c2565f");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8a3dfc56-e38a-4f94-bc60-f46adc435df1");
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

            reSendEmailEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ReSendEmailEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ReSendEmailEvent");
                        span.setAttribute("outsystems.function.key", "d3f59e2c-e08c-4f11-84fd-b8cd1136fdf7");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._reSendEmailEvent$Action, callContext);
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


define("PartnersHub.ForgotPassword.VerificationEmailSent.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});