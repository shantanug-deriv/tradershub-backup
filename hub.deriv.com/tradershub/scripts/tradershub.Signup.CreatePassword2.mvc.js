define("tradershub.Signup.CreatePassword2.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$PostSignupActions", "tradershub.controller$CleanupAfterRealSignup", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure"], function(OSRuntimeCore, tradershubModel, tradershubController) {
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

define("tradershub.Signup.CreatePassword2.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.CreatePassword2.mvc$model", "tradershub.Signup.CreatePassword2.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.Common.PasswordPolicy.mvc$view", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$PostSignupActions", "tradershub.controller$CleanupAfterRealSignup", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Signup_CreatePassword2_mvc_model, tradershub_Signup_CreatePassword2_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets, tradershub_Common_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.CreatePassword2";
        }

        static getAttributes() {
            return {
                codeFunction: "CreatePassword2",
                functionKey: "609944cc-98be-46ba-b99c-ba649bf86e17",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CreatePassword2.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.JSCookie.js"];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view, tradershub_Common_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_CreatePassword2_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_CreatePassword2_mvc_controller;
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


            return "Create Password | Deriv";
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
                            style: "main-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "deriv-25years-logo-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LeftSideContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width11"
                            },
                            style: "password-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RightSideContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "content-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "back-arrow-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                style: "height: 20px;"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "citizenship2", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 24px; margin-top: 0px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "header-content-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
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
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            style: "back-arrow-mobile",
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "citizenship2", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 24px; margin-top: 0px;"
                            },
                            gridProperties: {
                                width: "24px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold; margin-left: 0px;"
                            },
                            style: "password-title",
                            text: ["Password"],
                            _idProps: {
                                service: idService,
                                uuid: "14"
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
                            style: model.getCachedValue(idService.getId("Oo_E6oDIh0+hYMfdnKKmWA.Style"), function() {
                                return ((model.widgets.get(idService.getId("Input_password")).validAttr) ? ("") : ("margin-bottom-l"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_password")).validAttr;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "position-relative",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "19"
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
                                })
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Password*/ 1,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your password",
                            style: model.getCachedValue(idService.getId("Input_password.Style"), function() {
                                return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("form-control input-field-error") : ("form-control input-field input-field"));
                            }, function() {
                                return model.widgets.get(idService.getId("Input_password")).validAttr;
                            }),
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function(value) {
                                model.variables.passwordVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $if(model.variables.showPasswordVar, false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.onClickShowPassword$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
                                style: model.getCachedValue(idService.getId("d6TDXpmCeU+W0c1mnu6JnA.Style"), function() {
                                    return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("position-absolute absolute-center-right eye-image-style-error") : ("position-absolute absolute-center-right eye-image-style"));
                                }, function() {
                                    return model.widgets.get(idService.getId("Input_password")).validAttr;
                                }),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Image, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.onClickShowPassword$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                                style: model.getCachedValue(idService.getId("C3W+6SAd5EiPTMhEB_W9Kw.Style"), function() {
                                    return (((model.widgets.get(idService.getId("Input_password")).validAttr === false)) ? ("position-absolute absolute-center-right eye-image-style-error") : ("position-absolute absolute-center-right eye-image-style"));
                                }, function() {
                                    return model.widgets.get(idService.getId("Input_password")).validAttr;
                                }),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline",
                                width: "fill"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_Common_PasswordPolicy_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Length: 8,
                                Type: "CREATE",
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
                                uuid: "24",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
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
                                    return controller.createPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                                });;
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Create password"],
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.showPasswordVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.widgets.get(idService.getId("Input_password")).validAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.Signup.CreatePassword2.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.controller", "tradershub.Signup.CreatePassword2.mvc$controller.CreatePasswordOnClick.RudderStackJS", "tradershub.Signup.CreatePassword2.mvc$controller.OnReady.RudderStackJS", "tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.LandingCompanyPayloadJS", "tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.RudderStackErrorJS", "tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.GetFlagFromGrowthbookJS", "tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.NewAccountVirtualPayloadJS", "tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.RudderStackSuccessJS", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$PostSignupActions", "tradershub.controller$CleanupAfterRealSignup", "tradershub.model$ST_eb286c497eeb9a2ab2c838f3628b06e8Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_SignupController, tradershub_Signup_CreatePassword2_mvc_controller_CreatePasswordOnClick_RudderStackJS, tradershub_Signup_CreatePassword2_mvc_controller_OnReady_RudderStackJS, tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_LandingCompanyPayloadJS, tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_RudderStackErrorJS, tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_GetFlagFromGrowthbookJS, tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_NewAccountVirtualPayloadJS, tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_RudderStackSuccessJS) {
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
            get _onClickShowPassword$Action() {
                if (!(this.hasOwnProperty("__onClickShowPassword$Action"))) {
                    this.__onClickShowPassword$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickShowPassword", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickShowPassword");
                                span.setAttribute("outsystems.function.key", "7dbc407b-6bea-4210-bc33-58bfe18dfc2d");
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

            get _passwordPolicyCompliant$Action() {
                if (!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
                    this.__passwordPolicyCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PasswordPolicyCompliant");
                                span.setAttribute("outsystems.function.key", "b1a3275c-a7e8-4db3-9afe-ed9270d609c8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PasswordPolicyCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword2.PasswordPolicyCompliant$vars"))());
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

            get _createPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__createPasswordOnClick$Action"))) {
                    this.__createPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreatePasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreatePasswordOnClick");
                                span.setAttribute("outsystems.function.key", "ce1a697c-0d8c-4dcc-9417-0e4e774ccbb7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CreatePasswordOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "dc2ab2d4-a9bb-42a0-97b6-dfae8a066e99");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreatePasswordOnClick_RudderStackJS, "RudderStack", "CreatePasswordOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.isPasswordValidVar)) {
                                            // Execute Action: CreateVirtualAccount
                                            return controller._createVirtualAccount$Action(model.variables.passwordVar, callContext);
                                        } else {
                                            if (((model.variables.passwordVar === ""))) {
                                                // Input_password.Valid = False
                                                model.widgets.get(idService.getId("Input_password")).validAttr = false;
                                                // Input_password.ValidationMessage = "Password is required."
                                                model.widgets.get(idService.getId("Input_password")).validationMessageAttr = "Password is required.";
                                            }

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

                return this.__createPasswordOnClick$Action;
            }
            set _createPasswordOnClick$Action(value) {
                this.__createPasswordOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "d1c8d583-aaa3-4379-abc2-129d09f97836");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "081b9930-1af9-45a4-a5f8-78140b39f544");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "f7bcf258-afc3-4567-a4ed-f26a7f0e4548");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

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

            get _createVirtualAccount$Action() {
                if (!(this.hasOwnProperty("__createVirtualAccount$Action"))) {
                    this.__createVirtualAccount$Action = function(newPasswordIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreateVirtualAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreateVirtualAccount");
                                span.setAttribute("outsystems.function.key", "fef0ab0b-acbd-4605-b251-3e71d13468d7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CreateVirtualAccount");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$vars"))());
                                vars.value.newPasswordInLocal = newPasswordIn;
                                var newAccountVirtualAPIVar = new OS.DataTypes.VariableHolder();
                                var postSignupActions2Var = new OS.DataTypes.VariableHolder();
                                var postSignupActionsVar = new OS.DataTypes.VariableHolder();
                                var landingCompanyAPIVar = new OS.DataTypes.VariableHolder();
                                var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var getFlagFromGrowthbookJSResult = new OS.DataTypes.VariableHolder();
                                var newAccountVirtualPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeNewAccountVirtualResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    newAccountVirtualPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountVirtualPayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "NewAccountVirtualPayload");
                                            span.setAttribute("outsystems.function.key", "c240fa35-2e55-4d39-8665-fdd45d281eb1");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_NewAccountVirtualPayloadJS, "NewAccountVirtualPayload", "CreateVirtualAccount", {
                                                VerificationCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getCode(), OS.DataTypes.DataTypes.Text),
                                                Residence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                                NewPassword: OS.DataConversion.JSNodeParamConverter.to(vars.value.newPasswordInLocal, OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$newAccountVirtualPayloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: NewAccountVirtualAPI
                                    model.flush();
                                    return tradershubController.default.derivApiSendMessage$Action(newAccountVirtualPayloadJSResult.value.payloadOut, "new_account_virtual", false, callContext).then(function(value) {
                                        newAccountVirtualAPIVar.value = value;
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeNewAccountVirtualResponse
                                        jSONDeserializeNewAccountVirtualResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(newAccountVirtualAPIVar.value.responseOut, tradershubModel.ST_eb286c497eeb9a2ab2c838f3628b06e8Structure, false);
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((newAccountVirtualAPIVar.value.isErrorOut)) {
                                                OS.Logger.startActiveSpan("RudderStackError", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "RudderStackError");
                                                        span.setAttribute("outsystems.function.key", "5509e190-bb09-412a-906c-105e94c5fed3");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_RudderStackErrorJS, "RudderStackError", "CreateVirtualAccount", null, function($parameters) {}, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // Destination: /tradershub/VerificationLinkExpired
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "link-expired", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                OS.Logger.startActiveSpan("RudderStackSuccess", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "RudderStackSuccess");
                                                        span.setAttribute("outsystems.function.key", "c9324433-36a6-47e2-8ca0-1669d169409e");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_RudderStackSuccessJS, "RudderStackSuccess", "CreateVirtualAccount", null, function($parameters) {}, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                // ActiveLoginId = JSONDeserializeNewAccountVirtualResponse.Data.New_account_virtual.Client_id
                                                tradershubClientVariables.setActiveLoginId(jSONDeserializeNewAccountVirtualResponseVar.value.dataOut.new_account_virtualAttr.client_idAttr);
                                                // AuthToken = JSONDeserializeNewAccountVirtualResponse.Data.New_account_virtual.Oauth_token
                                                tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountVirtualResponseVar.value.dataOut.new_account_virtualAttr.oauth_tokenAttr);
                                                // Execute Action: CleanStartForRealAccountCreation
                                                tradershubController.default.cleanupAfterRealSignup$Action(callContext);
                                                getFlagFromGrowthbookJSResult.value = OS.Logger.startActiveSpan("GetFlagFromGrowthbook", function(span) {
                                                    if (span) {
                                                        span.setAttribute("code.function", "GetFlagFromGrowthbook");
                                                        span.setAttribute("outsystems.function.key", "c2209b82-4473-4da2-bde9-ba93772b2508");
                                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                    }

                                                    try {
                                                        return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_GetFlagFromGrowthbookJS, "GetFlagFromGrowthbook", "CreateVirtualAccount", {
                                                            RedirectToDerivApp: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                        }, function($parameters) {
                                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$getFlagFromGrowthbookJSResult"))();
                                                            jsNodeResult.redirectToDerivAppOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RedirectToDerivApp, OS.DataTypes.DataTypes.Boolean);
                                                            return jsNodeResult;
                                                        }, {}, {});
                                                    } finally {
                                                        if (span) {
                                                            span.end();
                                                        }

                                                    }

                                                }, 1);
                                                return OS.Flow.executeSequence(function() {
                                                    if ((getFlagFromGrowthbookJSResult.value.redirectToDerivAppOut)) {
                                                        // InitializeRealSignup = False
                                                        tradershubClientVariables.setInitializeRealSignup(false);
                                                        // Execute Action: PostSignupActions
                                                        model.flush();
                                                        return tradershubController.default.postSignupActions$Action(true, callContext).then(function(value) {
                                                            postSignupActionsVar.value = value;
                                                        });
                                                    } else {
                                                        // Execute Action: PostSignupActions2
                                                        model.flush();
                                                        return tradershubController.default.postSignupActions$Action(false, callContext).then(function(value) {
                                                            postSignupActions2Var.value = value;
                                                        }).then(function() {
                                                            return OS.Flow.executeSequence(function() {
                                                                if ((!(postSignupActions2Var.value.isEUOut))) {
                                                                    landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function(span) {
                                                                        if (span) {
                                                                            span.setAttribute("code.function", "LandingCompanyPayload");
                                                                            span.setAttribute("outsystems.function.key", "299b6e27-7ef5-4310-92c8-fb45540f579b");
                                                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                                        }

                                                                        try {
                                                                            return controller.safeExecuteJSNode(tradershub_Signup_CreatePassword2_mvc_controller_CreateVirtualAccount_LandingCompanyPayloadJS, "LandingCompanyPayload", "CreateVirtualAccount", {
                                                                                CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                                            }, function($parameters) {
                                                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$landingCompanyPayloadJSResult"))();
                                                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                                                return jsNodeResult;
                                                                            }, {}, {});
                                                                        } finally {
                                                                            if (span) {
                                                                                span.end();
                                                                            }

                                                                        }

                                                                    }, 1);
                                                                    // Execute Action: LandingCompanyAPI
                                                                    model.flush();
                                                                    return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                                                        landingCompanyAPIVar.value = value;
                                                                    }).then(function() {
                                                                        // RawLandingCompanyResponse = LandingCompanyAPI.Response
                                                                        tradershubClientVariables.setRawLandingCompanyResponse(landingCompanyAPIVar.value.responseOut);
                                                                        // InitializeRealSignup = True
                                                                        tradershubClientVariables.setInitializeRealSignup(true);
                                                                        // Destination: /tradershub/CurrencySelection
                                                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                                    });
                                                                }

                                                            });
                                                        });
                                                    }

                                                });
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

                return this.__createVirtualAccount$Action;
            }
            set _createVirtualAccount$Action(value) {
                this.__createVirtualAccount$Action = value;
            }


            onClickShowPassword$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickShowPassword__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickShowPassword");
                        span.setAttribute("outsystems.function.key", "7dbc407b-6bea-4210-bc33-58bfe18dfc2d");
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

            passwordPolicyCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PasswordPolicyCompliant");
                        span.setAttribute("outsystems.function.key", "b1a3275c-a7e8-4db3-9afe-ed9270d609c8");
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

            createPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePasswordOnClick");
                        span.setAttribute("outsystems.function.key", "ce1a697c-0d8c-4dcc-9417-0e4e774ccbb7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._createPasswordOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "d1c8d583-aaa3-4379-abc2-129d09f97836");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "f7bcf258-afc3-4567-a4ed-f26a7f0e4548");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            createVirtualAccount$Action(newPasswordIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreateVirtualAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreateVirtualAccount");
                        span.setAttribute("outsystems.function.key", "fef0ab0b-acbd-4605-b251-3e71d13468d7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._createVirtualAccount$Action, callContext, newPasswordIn);
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
                        return tradershub_SignupController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.Signup.CreatePassword2.PasswordPolicyCompliant$vars", [{
            name: "IsValid",
            attrName: "isValidInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$vars", [{
            name: "NewPassword",
            attrName: "newPasswordInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$landingCompanyPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$getFlagFromGrowthbookJSResult", [{
            name: "RedirectToDerivApp",
            attrName: "redirectToDerivAppOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CreatePassword2.CreateVirtualAccount$newAccountVirtualPayloadJSResult", [{
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

define("tradershub.Signup.CreatePassword2.mvc$controller.CreatePasswordOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "password_button_clicked_os",
        })
    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.OnReady.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "password_screen_opened_os",
        })
    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.LandingCompanyPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            landing_company: $parameters.CountryCode
        });

    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.RudderStackErrorJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "signup_flow_error",
            form_name: "virtual_signup_form_outsystems",
            error_message: "account_creation_failed"
        })
    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.GetFlagFromGrowthbookJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window.Analytics) {
            $parameters.RedirectToDerivApp = Analytics.Analytics?.getFeatureValue("trigger_real_account_creation_highcode") ?? false
        }
    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.NewAccountVirtualPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
        const affiliate_token = getCookieValue('affiliate_tracking')

        $parameters.Payload = JSON.stringify({
            client_password: $parameters.NewPassword,
            verification_code: $parameters.VerificationCode,
            type: "trading",
            residence: $parameters.Residence,
            affiliate_token,
            ...cookies_value
        });

    };
});

define("tradershub.Signup.CreatePassword2.mvc$controller.CreateVirtualAccount.RudderStackSuccessJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "signup_done",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        })
    };
});