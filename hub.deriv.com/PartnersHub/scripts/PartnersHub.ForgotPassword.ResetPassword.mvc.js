define("PartnersHub.ForgotPassword.ResetPassword.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.Common.AlertBlock.mvc$model", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutSignup_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_Common_AlertBlock_mvcModel, PartnersHub_ForgotPassword_ResetPasswordBlock_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsPasswordReset", "isPasswordResetVar", "IsPasswordReset", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("Code", "codeIn", "Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = ((((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || PartnersHub_Common_AlertBlock_mvcModel.hasValidationWidgets) || PartnersHub_ForgotPassword_ResetPasswordBlock_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Code" in inputs) {
                this.variables.codeIn = OS.DataConversion.ServerDataConverter.from(inputs.Code, OS.DataTypes.DataTypes.Text);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.ResetPassword.mvc$model", "PartnersHub.ForgotPassword.ResetPassword.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "PartnersHub.Common.AlertBlock.mvc$view", "PartnersHub.ForgotPassword.ResetPasswordBlock.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_ForgotPassword_ResetPassword_mvc_model, PartnersHub_ForgotPassword_ResetPassword_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotPassword.ResetPassword";
        }

        static getAttributes() {
            return {
                codeFunction: "ResetPassword",
                functionKey: "c1140340-9607-439d-a785-5b51a4c424bd",
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
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_ForgotPassword_ResetPassword_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_ResetPassword_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("QAMUwQeWnUOnhVtRpMQkvQ#Title", "ResetPassword");
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
                                    }, $if(model.variables.isPasswordResetVar, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px; padding: 24px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "471px"
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
                                                title: "Success",
                                                description: "Your password is changed.",
                                                buttonTitle: "Continue",
                                                type: model.getCachedValue(idService.getId("aadn72I4FUCI6LVr1LxiVw.type"), function() {
                                                    return function() {
                                                        var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                        rec.isSuccessAttr = true;
                                                        return rec;
                                                    }();
                                                })
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                actionHandler$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.redirect$Action(controller.callContext(eventHandlerContext));

                                                    ;
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
                                        }))];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; margin-top: 0px; padding: 24px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline"
                                            },
                                            style: "signup",
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
                                                style: "align-items: center; display: flex; gap: 8px; margin-bottom: 16px;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.goBack$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "cursor: pointer;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.backicon2.png"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #333; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;"
                                            },
                                            text: [$text(getTranslation("htx1DHChDEqSTMjCvpDibQ#Value", "Reset password"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                verification_code: model.variables.codeIn
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onResetPasswordEvent$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onResetPassword$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "9",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }))];
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
                                            HasBackButton: true,
                                            Title: "Forgot password"
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onBack$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.goBack$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "10",
                                            alias: "5"
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
                                                        uuid: "11"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-color: #fff; border-radius: 8px; margin-top: 0px; padding: 16px 16px 0 16px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline",
                                                        width: "100%"
                                                    },
                                                    style: "signup",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "12"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, $if(model.variables.isPasswordResetVar, false, this, function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: "display: flex; flex-direction: column; padding: 24px 16px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "auto"
                                                        },
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            name: "AlertContainer2"
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
                                                            description: "Your password is changed.",
                                                            title: "Success",
                                                            type: model.getCachedValue(idService.getId("+zvp8wxX6EWsy80X3+g6fQ.type"), function() {
                                                                return function() {
                                                                    var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                                    rec.isSuccessAttr = true;
                                                                    return rec;
                                                                }();
                                                            }),
                                                            buttonTitle: "Continue"
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            actionHandler$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                controller.goToLogin$Action(controller.callContext(eventHandlerContext));

                                                                ;
                                                            }
                                                        },
                                                        _validationProps: {
                                                            validationService: validationService
                                                        },
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "14",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }))];
                                                }, function() {
                                                    return [React.createElement(PartnersHub_ForgotPassword_ResetPasswordBlock_mvc_view, {
                                                        getOwnerSpan: function() {
                                                            return _this.getChildSpan("render");
                                                        },
                                                        getOwnerDisposeSpan: function() {
                                                            return _this.getChildSpan("destroy");
                                                        },
                                                        inputs: {
                                                            verification_code: model.variables.codeIn
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onResetPasswordEvent$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                controller.onResetPassword$Action(controller.callContext(eventHandlerContext));

                                                                ;
                                                            }
                                                        },
                                                        _validationProps: {
                                                            validationService: validationService
                                                        },
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "15",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                })))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.codeIn), asPrimitiveValue(model.variables.isPasswordResetVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.codeIn), asPrimitiveValue(model.variables.isPasswordResetVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.codeIn), asPrimitiveValue(model.variables.isPasswordResetVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.ResetPassword.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources", "PartnersHub.ForgotPassword.controller", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_ResetPassword_mvc_TranslationsResources, PartnersHub_ForgotPasswordController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_ResetPassword_mvc_TranslationsResources);
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
            get _onResetPassword$Action() {
                if (!(this.hasOwnProperty("__onResetPassword$Action"))) {
                    this.__onResetPassword$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnResetPassword", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnResetPassword");
                                span.setAttribute("outsystems.function.key", "04daed36-5dac-4b04-8f00-13538724bcbf");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnResetPassword");
                                callContext = controller.callContext(callContext);
                                // IsPasswordReset = True
                                model.variables.isPasswordResetVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onResetPassword$Action;
            }
            set _onResetPassword$Action(value) {
                this.__onResetPassword$Action = value;
            }

            get _redirect$Action() {
                if (!(this.hasOwnProperty("__redirect$Action"))) {
                    this.__redirect$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("redirect", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "redirect");
                                span.setAttribute("outsystems.function.key", "5c0f24c5-b3a0-4e74-a3ea-e8157b1b365a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("redirect");
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

                return this.__redirect$Action;
            }
            set _redirect$Action(value) {
                this.__redirect$Action = value;
            }

            get _goToLogin$Action() {
                if (!(this.hasOwnProperty("__goToLogin$Action"))) {
                    this.__goToLogin$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoToLogin", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoToLogin");
                                span.setAttribute("outsystems.function.key", "6a6faf57-260a-45bc-ba32-dd568bf4871c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoToLogin");
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

                return this.__goToLogin$Action;
            }
            set _goToLogin$Action(value) {
                this.__goToLogin$Action = value;
            }

            get _goBack$Action() {
                if (!(this.hasOwnProperty("__goBack$Action"))) {
                    this.__goBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoBack");
                                span.setAttribute("outsystems.function.key", "6eebda0e-38e6-471a-bcde-0046926bd247");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/ForgotPassword
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "ForgotPassword", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__goBack$Action;
            }
            set _goBack$Action(value) {
                this.__goBack$Action = value;
            }


            onResetPassword$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnResetPassword__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnResetPassword");
                        span.setAttribute("outsystems.function.key", "04daed36-5dac-4b04-8f00-13538724bcbf");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onResetPassword$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            redirect$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("redirect__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "redirect");
                        span.setAttribute("outsystems.function.key", "5c0f24c5-b3a0-4e74-a3ea-e8157b1b365a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._redirect$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            goToLogin$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoToLogin__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoToLogin");
                        span.setAttribute("outsystems.function.key", "6a6faf57-260a-45bc-ba32-dd568bf4871c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goToLogin$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            goBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoBack");
                        span.setAttribute("outsystems.function.key", "6eebda0e-38e6-471a-bcde-0046926bd247");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goBack$Action, callContext);
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


define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.de-DE", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Passwort zurücksetzen"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.es-ES", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Restablecer contraseña"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.fr-FR", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Réinitialiser le mot de passe"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.it-IT", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Reimposta password"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.pl-PL", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Zresetuj hasło"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.pt-PT", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Redefinir palavra-passe"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.ru-RU", [], function() {
    return {
        "htx1DHChDEqSTMjCvpDibQ#Value": "Сбросить пароль"
    };
});

define("PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources", ["exports", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.de-DE", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.es-ES", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.fr-FR", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.it-IT", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.pl-PL", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.pt-PT", "PartnersHub.ForgotPassword.ResetPassword.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_deDE, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_esES, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_frFR, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_itIT, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_plPL, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_ptPT, PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_ForgotPassword_ResetPassword_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});