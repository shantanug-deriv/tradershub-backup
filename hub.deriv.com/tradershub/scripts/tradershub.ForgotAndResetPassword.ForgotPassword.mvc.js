define("tradershub.ForgotAndResetPassword.ForgotPassword.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Email", "emailVar", "Email", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    emailVar: OS.DataTypes.ImmutableBase.getData(str)
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
                Form2: OS.Model.ValidationWidgetRecord,
                Email_Input2: OS.Model.ValidationWidgetRecord,
                Form: OS.Model.ValidationWidgetRecord,
                Email_Input: OS.Model.ValidationWidgetRecord
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

define("tradershub.ForgotAndResetPassword.ForgotPassword.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.ForgotAndResetPassword.ForgotPassword.mvc$model", "tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_ForgotAndResetPassword_ForgotPassword_mvc_model, tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "ForgotAndResetPassword.ForgotPassword";
        }

        static getAttributes() {
            return {
                codeFunction: "ForgotPassword",
                functionKey: "f935cd27-63c5-471a-8cd3-928424115a1d",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.ForgotAndResetPassword.ForgotPassword.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view];
        }

        get modelFactory() {
            return tradershub_ForgotAndResetPassword_ForgotPassword_mvc_model;
        }

        get controllerFactory() {
            return tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller;
        }

        get title() {


            return "ForgotPassword";
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
                inputs: {
                    ExtendedClass: model.getCachedValue(idService.getId("R1o8uxgmpk+pfxcbcqtTPA.ExtendedClass"), function() {
                        return ((tradershubClientVariables.getResetPasswordEmailSent()) ? ("background-secondary-lightest") : ("background-neutral"));
                    }, function() {
                        return tradershubClientVariables.getResetPasswordEmailSent();
                    })
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
                        }, $if(tradershubClientVariables.getResetPasswordLinkExpired(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
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
                                    name: "HeaderContainer2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "bord display-flex align-items-center justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 18px; font-weight: bold;"
                                },
                                text: ["Link expired"],
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.clickOnClose$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "color: #F1F3F5; height: 2px; margin-bottom: 24px; margin-top: 12px;"
                                },
                                style: "border-bottom-s divider",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Divider2"
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
                                    name: "ContentContainer2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #4F575E;"
                                },
                                text: ["Make sure you\'re using the link in our latest email. Or enter your email below to receive a new link."],
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Form, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "\"form card\"",
                                _idProps: {
                                    service: idService,
                                    name: "Form2"
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
                                    style: "margin-top: px;"
                                },
                                text: ["Email"],
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                enabled: true,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: /*Email*/ 7,
                                mandatory: false,
                                maxLength: 50,
                                prompt: "Enter your email",
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function(value) {
                                    model.variables.emailVar = value;
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Email_Input2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
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
                                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: false,
                                onClick: function() {
                                    controller.validationService.validateWidget(idService.getId("Form2"));
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.sendEmailOnClick$Action(controller.callContext(eventHandlerContext));
                                    });

                                    ;
                                },
                                style: "btn btn-primary ",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 14px;"
                                },
                                text: ["Resend email"],
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))))))];
                        }, function() {
                            return [$if(tradershubClientVariables.getResetPasswordEmailSent(), false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-right: 16px; text-align: left;"
                                    },
                                    gridProperties: {
                                        marginLeft: "16px"
                                    },
                                    style: "display-flex justify-content-center flex-direction-column align-items-center gap-m",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 24px; font-weight: bold;"
                                    },
                                    text: ["We’ve sent you an email"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Image, {
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter",
                                        width: "128px"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email.png"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-bottom: 1px; text-align: center;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    text: ["Click the link in the email to reset your password."],
                                    _idProps: {
                                        service: idService,
                                        uuid: "23"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.reset$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "24"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: bold; text-decoration: underline;"
                                    },
                                    text: ["Didn’t receive the email?"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "26"
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
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Link, {
                                    enabled: true,
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("tradershub", "login", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "29"
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
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 18px; font-weight: bold;"
                                    },
                                    text: ["Forgot password"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "color: #F1F3F5; height: 2px; margin-bottom: 24px; margin-top: 12px;"
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
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, "We’ll email you instructions to reset your password."), React.createElement(OSWidgets.Form, {
                                    _validationProps: {
                                        validationService: validationService
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
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "36"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "margin-top: px;"
                                    },
                                    text: ["Email"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "37"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Input, {
                                    _validationProps: {
                                        validationService: validationService,
                                        validationParentId: idService.getId("Form")
                                    },
                                    enabled: true,
                                    extendedProperties: {
                                        style: "margin-bottom: 0px; margin-top: 8px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    inputType: /*Email*/ 7,
                                    mandatory: false,
                                    maxLength: 50,
                                    prompt: "Enter your email",
                                    style: "form-control",
                                    variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function(value) {
                                        model.variables.emailVar = value;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        name: "Email_Input"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    extendedProperties: {
                                        style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    isDefault: false,
                                    onClick: function() {
                                        controller.validationService.validateWidget(idService.getId("Form"));
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.sendEmailOnClick$Action(controller.callContext(eventHandlerContext));
                                        });

                                        ;
                                    },
                                    style: "btn btn-primary ",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "40"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px;"
                                    },
                                    text: ["Send email"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "41"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))))))];
                            })];
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getResetPasswordEmailSent()), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(tradershubClientVariables.getResetPasswordLinkExpired())]
            }));
        }
    }

    return View;
});
define("tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.ForgotAndResetPassword.controller", "tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller.SendEmailOnClick.ValidateEmailJS", "tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller.SendResetPasswordEmail.verify_email_payloadJS", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_ForgotAndResetPasswordController, tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller_SendEmailOnClick_ValidateEmailJS, tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller_SendResetPasswordEmail_verify_email_payloadJS) {
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
            get _reset$Action() {
                if (!(this.hasOwnProperty("__reset$Action"))) {
                    this.__reset$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Reset", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Reset");
                                span.setAttribute("outsystems.function.key", "7006f7ef-3f55-414b-aaf0-ba97045caf6b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Reset");
                                callContext = controller.callContext(callContext);
                                // ResetPasswordEmailSent = False
                                tradershubClientVariables.setResetPasswordEmailSent(false);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__reset$Action;
            }
            set _reset$Action(value) {
                this.__reset$Action = value;
            }

            get _clickOnClose$Action() {
                if (!(this.hasOwnProperty("__clickOnClose$Action"))) {
                    this.__clickOnClose$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ClickOnClose", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ClickOnClose");
                                span.setAttribute("outsystems.function.key", "88bcd105-aa01-4fdc-8c0f-ae888504be15");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ClickOnClose");
                                callContext = controller.callContext(callContext);
                                // ResetPasswordLinkExpired = False
                                tradershubClientVariables.setResetPasswordLinkExpired(false);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__clickOnClose$Action;
            }
            set _clickOnClose$Action(value) {
                this.__clickOnClose$Action = value;
            }

            get _sendEmailOnClick$Action() {
                if (!(this.hasOwnProperty("__sendEmailOnClick$Action"))) {
                    this.__sendEmailOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendEmailOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendEmailOnClick");
                                span.setAttribute("outsystems.function.key", "c4fecd5d-9631-479c-b8be-787caab11a59");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendEmailOnClick");
                                callContext = controller.callContext(callContext);
                                var validateEmailJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if (((OS.BuiltinFunctions.length(model.variables.emailVar) < 1))) {
                                            // Email_Input.Valid = False
                                            model.widgets.get(idService.getId("Email_Input")).validAttr = false;
                                            // Email_Input.ValidationMessage = "Email is required."
                                            model.widgets.get(idService.getId("Email_Input")).validationMessageAttr = "Email is required.";
                                        } else {
                                            validateEmailJSResult.value = OS.Logger.startActiveSpan("ValidateEmail", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "ValidateEmail");
                                                    span.setAttribute("outsystems.function.key", "126bcd74-8978-4641-8f6e-1f87ba3203a3");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller_SendEmailOnClick_ValidateEmailJS, "ValidateEmail", "SendEmailOnClick", {
                                                        Email: OS.DataConversion.JSNodeParamConverter.to(model.variables.emailVar, OS.DataTypes.DataTypes.Email),
                                                        IsEmailValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendEmailOnClick$validateEmailJSResult"))();
                                                        jsNodeResult.isEmailValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEmailValid, OS.DataTypes.DataTypes.Boolean);
                                                        return jsNodeResult;
                                                    }, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                            return OS.Flow.executeSequence(function() {
                                                if ((validateEmailJSResult.value.isEmailValidOut)) {
                                                    return OS.Flow.executeSequence(function() {
                                                        if ((model.widgets.get(idService.getId("Form")).validAttr)) {
                                                            // Execute Action: SendResetPasswordEmail
                                                            return controller._sendResetPasswordEmail$Action(model.variables.emailVar, callContext);
                                                        }

                                                    });
                                                } else {
                                                    // Email_Input.Valid = False
                                                    model.widgets.get(idService.getId("Email_Input")).validAttr = false;
                                                    // Email_Input.ValidationMessage = "That doesn't look like an email address."
                                                    model.widgets.get(idService.getId("Email_Input")).validationMessageAttr = "That doesn\'t look like an email address.";
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

                return this.__sendEmailOnClick$Action;
            }
            set _sendEmailOnClick$Action(value) {
                this.__sendEmailOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e794aa91-02da-40e5-b79e-2c4ede2a7d83");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // ResetPasswordEmailSent = False
                                tradershubClientVariables.setResetPasswordEmailSent(false);
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

            get _sendResetPasswordEmail$Action() {
                if (!(this.hasOwnProperty("__sendResetPasswordEmail$Action"))) {
                    this.__sendResetPasswordEmail$Action = function(userEmailIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendResetPasswordEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendResetPasswordEmail");
                                span.setAttribute("outsystems.function.key", "fa654e67-30d2-45df-9e4b-37f1ffb1275e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendResetPasswordEmail");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$vars"))());
                                vars.value.userEmailInLocal = userEmailIn;
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var verify_email_payloadJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    verify_email_payloadJSResult.value = OS.Logger.startActiveSpan("verify_email_payload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "verify_email_payload");
                                            span.setAttribute("outsystems.function.key", "a16c9536-cc9e-4dc4-9be0-37e4543063bd");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_ForgotAndResetPassword_ForgotPassword_mvc_controller_SendResetPasswordEmail_verify_email_payloadJS, "verify_email_payload", "SendResetPasswordEmail", {
                                                UserEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.userEmailInLocal, OS.DataTypes.DataTypes.Email),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$verify_email_payloadJSResult"))();
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
                                    return tradershubController.default.derivApiSendMessage$Action(verify_email_payloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                                            // ResetPasswordLinkExpired = True
                                            tradershubClientVariables.setResetPasswordLinkExpired(true);
                                        } else {
                                            // ResetPasswordEmailSent = True
                                            tradershubClientVariables.setResetPasswordEmailSent(true);
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

                return this.__sendResetPasswordEmail$Action;
            }
            set _sendResetPasswordEmail$Action(value) {
                this.__sendResetPasswordEmail$Action = value;
            }


            reset$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Reset__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Reset");
                        span.setAttribute("outsystems.function.key", "7006f7ef-3f55-414b-aaf0-ba97045caf6b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._reset$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            clickOnClose$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ClickOnClose__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ClickOnClose");
                        span.setAttribute("outsystems.function.key", "88bcd105-aa01-4fdc-8c0f-ae888504be15");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._clickOnClose$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            sendEmailOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendEmailOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendEmailOnClick");
                        span.setAttribute("outsystems.function.key", "c4fecd5d-9631-479c-b8be-787caab11a59");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendEmailOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "e794aa91-02da-40e5-b79e-2c4ede2a7d83");
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

            sendResetPasswordEmail$Action(userEmailIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendResetPasswordEmail__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendResetPasswordEmail");
                        span.setAttribute("outsystems.function.key", "fa654e67-30d2-45df-9e4b-37f1ffb1275e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendResetPasswordEmail$Action, callContext, userEmailIn);
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
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendEmailOnClick$validateEmailJSResult", [{
            name: "IsEmailValid",
            attrName: "isEmailValidOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$vars", [{
            name: "UserEmail",
            attrName: "userEmailInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Email,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$verify_email_payloadJSResult", [{
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

define("tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller.SendEmailOnClick.ValidateEmailJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
        $parameters.IsEmailValid = emailRegex.test($parameters.Email);
    };
});

define("tradershub.ForgotAndResetPassword.ForgotPassword.mvc$controller.SendResetPasswordEmail.verify_email_payloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            verify_email: $parameters.UserEmail,
            type: "reset_password"
        });

    };
});