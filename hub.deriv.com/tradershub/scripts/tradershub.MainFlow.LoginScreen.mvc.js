define("tradershub.MainFlow.LoginScreen.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("email", "emailVar", "email", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false),
                    this.attr("password", "passwordVar", "password", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("showPassword", "showPasswordVar", "showPassword", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                LoginForm: OS.Model.ValidationWidgetRecord,
                Input_Email: OS.Model.ValidationWidgetRecord,
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

define("tradershub.MainFlow.LoginScreen.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.LoginScreen.mvc$model", "tradershub.MainFlow.LoginScreen.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "tradershub.Signup.SocialLogin.mvc$view"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_LoginScreen_mvc_model, tradershub_MainFlow_LoginScreen_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.LoginScreen";
        }

        static getAttributes() {
            return {
                codeFunction: "LoginScreen",
                functionKey: "d6079e1b-8d08-4eb5-98a7-3f0e576b5c05",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.LoginScreen.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_LoginScreen_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_LoginScreen_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return "Login";
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
                                style: "text-align: left;"
                            },
                            style: "display-flex justify-content-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-content-container full-width",
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
                                style: "color: #414652; font-size: 14px; margin-bottom: 24px; margin-right: 16px; margin-top: 16px; text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: 700; margin-bottom: 24px;"
                            },
                            text: ["Welcome back", React.createElement("br")],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "border-width: 0px; padding: 0px 16px 0px 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: idService,
                                name: "LoginForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: model.getCachedValue(idService.getId("jG8BgVJONkKZLh8llmcyiA.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_Email")).validAttr) ? ("") : ("margin-bottom-l"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_Email")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Email",
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Email"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("LoginForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "margin-bottom: 6px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Email*/ 7,
                            mandatory: true,
                            maxLength: 0,
                            prompt: "Enter your email",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function(value) {
                                model.variables.emailVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Email"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            style: model.getCachedValue(idService.getId("5wu2tfuqV0KLDrEwLqvGzg.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_password")).validAttr) ? ("") : ("margin-bottom-l"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_password")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_password",
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Password"), React.createElement(OSWidgets.Container, {
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
                                validationParentId: idService.getId("LoginForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                type: model.getCachedValue(idService.getId("Input_password.type"), function() {
                                    return ((model.variables.showPasswordVar) ? ("text") : ("password"));
                                }, function() {
                                    return model.variables.showPasswordVar;
                                }),
                                style: "margin-bottom: 10px;"
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
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: right;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "ForgotPassword", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-weight: bold; text-decoration: underline;"
                            },
                            text: ["Forgot password?"],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px;"
                            },
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("LoginForm"));
                                var eventHandlerContext = callContext.clone();
                                controller.onClickLogin$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Log in"))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "22",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-left: 16px; margin-right: 16px;"
                            },
                            text: ["Or continue with"],
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "25",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_Signup_SocialLogin_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                showPasskey: true
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
                                uuid: "27",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 16px; padding: 16px;"
                            },
                            style: "display-flex justify-content-center column-gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Don\'t have an account yet?", React.createElement(OSWidgets.Link, {
                            enabled: true,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "signup", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-weight: bold; text-decoration: underline;"
                            },
                            text: ["Create a new account"],
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_password")).validAttr), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_Email")).validAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.LoginScreen.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController) {
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
            get _onClickLogin$Action() {
                if (!(this.hasOwnProperty("__onClickLogin$Action"))) {
                    this.__onClickLogin$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLogin", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLogin");
                                span.setAttribute("outsystems.function.key", "771f15ef-f29d-44fd-b4fa-8f60b8d557bd");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickLogin");
                                callContext = controller.callContext(callContext);
                                if (!((((model.widgets.get(idService.getId("LoginForm")).validAttr && model.widgets.get(idService.getId("Input_Email")).validAttr) && model.widgets.get(idService.getId("Input_password")).validAttr)))) {
                                    // Input_Email.ValidationMessage = "Email is required."
                                    model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "Email is required.";
                                    // Input_password.ValidationMessage = "Password is required."
                                    model.widgets.get(idService.getId("Input_password")).validationMessageAttr = "Password is required.";
                                    if ((!(OS.BuiltinFunctions.emailAddressValidate(model.variables.emailVar)))) {
                                        // Input_Email.Valid = False
                                        model.widgets.get(idService.getId("Input_Email")).validAttr = false;
                                        // Input_Email.ValidationMessage = "Not a valid email."
                                        model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "Not a valid email.";
                                    }

                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickLogin$Action;
            }
            set _onClickLogin$Action(value) {
                this.__onClickLogin$Action = value;
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
                                span.setAttribute("outsystems.function.key", "900d59a2-126d-426f-af9c-af96742a0c0f");
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


            onClickLogin$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLogin__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLogin");
                        span.setAttribute("outsystems.function.key", "771f15ef-f29d-44fd-b4fa-8f60b8d557bd");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickLogin$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "900d59a2-126d-426f-af9c-af96742a0c0f");
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
                        return tradershub_MainFlowController.default.handleError(ex, this.callContext());
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

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});