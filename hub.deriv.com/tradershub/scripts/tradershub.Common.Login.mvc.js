define("tradershub.Common.Login.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "OutSystemsUI.controller$FeedbackMessageClose", "tradershub.controller$DoLogin"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, OutSystemsUIController, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserEmail", "userEmailVar", "UserEmail", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Password", "passwordVar", "Password", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Input_Username: OS.Model.ValidationWidgetRecord,
                Input_Password: OS.Model.ValidationWidgetRecord
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

define("tradershub.Common.Login.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.Login.mvc$model", "tradershub.Common.Login.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutBlank.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "OutSystemsUI.controller$FeedbackMessageClose", "tradershub.controller$DoLogin"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Common_Login_mvc_model, tradershub_Common_Login_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.Login";
        }

        static getAttributes() {
            return {
                codeFunction: "Login",
                functionKey: "aa6a2f48-0824-4f02-bbe3-20b08d067bf1",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_Login_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_Login_mvc_controller;
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


            return "Log in";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_LayoutBlank_mvc_view, {
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-screen",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            style: "login-form",
                            _idProps: {
                                service: idService,
                                name: "LoginForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "login-logo",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 100px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Logo.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                className: "margin-top-base"
                            },
                            tag: "h1",
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            style: "heading5 text-neutral-8",
                            value: model.getCachedValue(idService.getId("fm5_YjxcK025dT1H7+DVeg.Value"), function() {
                                return OS.BuiltinFunctions.getAppName();
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-inputs margin-top-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
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
                                validationService: validationService,
                                validationParentId: idService.getId("LoginForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                label: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: true,
                                        targetWidget: "Input_Username",
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Email")];
                                }),
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("LoginForm")
                                        },
                                        enabled: true,
                                        extendedProperties: {
                                            tabIndex: "1"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Text*/ 0,
                                        mandatory: true,
                                        maxLength: 250,
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userEmailVar, function(value) {
                                            model.variables.userEmailVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_Username"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.userEmailVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-base password-input",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
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
                                validationService: validationService,
                                validationParentId: idService.getId("LoginForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "14",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                label: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: true,
                                        targetWidget: "Input_Password",
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Password")];
                                }),
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                            validationService: validationService,
                                            validationParentId: idService.getId("LoginForm")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "16",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            icon: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Link, {
                                                    enabled: true,
                                                    onClick: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        controller.onTogglePasswordVisibility$Action(controller.callContext(eventHandlerContext));

                                                        ;
                                                    },
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "17"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, $if(model.variables.isPasswordVisibleVar, false, this, function() {
                                                    return [React.createElement(OSWidgets.Icon, {
                                                        icon: "eye-slash",
                                                        iconSize: /*FontSize*/ 0,
                                                        style: "icon",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                }, function() {
                                                    return [React.createElement(OSWidgets.Icon, {
                                                        icon: "eye",
                                                        iconSize: /*FontSize*/ 0,
                                                        style: "icon",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                }))];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("LoginForm")
                                                    },
                                                    enabled: true,
                                                    extendedProperties: {
                                                        tabIndex: "2",
                                                        style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: /*Password*/ 1,
                                                    mandatory: true,
                                                    maxLength: 0,
                                                    style: "form-control login-password",
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function(value) {
                                                        model.variables.passwordVar = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Input_Password"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-l",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": "Forgot password? Click here to recover it"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "RecoverPasswordRequest", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                "aria-label": "Forgot your password? Click here to recover it"
                            },
                            text: ["Forgot your password?"],
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-button margin-top-l",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: model.variables.isExecutingVar,
                                ShowLabelOnLoading: true
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("LoginForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "26",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                button: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            tabIndex: "4"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: true,
                                        onClick: function() {
                                            controller.validationService.validateWidget(idService.getId("LoginForm"));
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.loginOnClick$Action(controller.callContext(eventHandlerContext));
                                            });

                                            ;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "Log in")];
                                })
                            },
                            _dependencies: []
                        }))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.userEmailVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Common.Login.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "OutSystemsUI.controller$FeedbackMessageClose", "tradershub.controller$DoLogin"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_CommonController) {
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "14355f2d-bb2f-44a7-acd2-29acfb5b2ded");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Logged User?
                                if (((((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _onTogglePasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onTogglePasswordVisibility$Action"))) {
                    this.__onTogglePasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnTogglePasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnTogglePasswordVisibility");
                                span.setAttribute("outsystems.function.key", "26c085d1-acb2-40e4-8d40-9d907dc2e86d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnTogglePasswordVisibility");
                                callContext = controller.callContext(callContext);
                                var showPasswordVar = new OS.DataTypes.VariableHolder();
                                // IsPasswordVisible = notIsPasswordVisible
                                model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
                                // Execute Action: ShowPassword
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action("", callContext);

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

            get _loginOnClick$Action() {
                if (!(this.hasOwnProperty("__loginOnClick$Action"))) {
                    this.__loginOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LoginOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LoginOnClick");
                                span.setAttribute("outsystems.function.key", "fb636e0c-5502-414e-8a4e-7a424b00b5b4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("LoginOnClick");
                                callContext = controller.callContext(callContext);
                                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                                var checktradershubRoleVar = new OS.DataTypes.VariableHolder();
                                var doLoginVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("LoginForm")).validAttr)) {
                                            // IsExecuting = true
                                            // IsExecuting = True
                                            model.variables.isExecutingVar = true;
                                            // Execute Action: FeedbackMessageClose
                                            OutSystemsUIController.default.feedbackMessageClose$Action(callContext);
                                            // Execute Action: DoLogin
                                            model.flush();
                                            return tradershubController.default.doLogin$Action(model.variables.userEmailVar, model.variables.passwordVar, callContext).then(function(value) {
                                                doLoginVar.value = value;
                                            }).then(function() {
                                                // Success?
                                                return OS.Flow.executeSequence(function() {
                                                    if ((doLoginVar.value.successOut)) {
                                                        // Execute Action: ChecktradershubRole
                                                        checktradershubRoleVar.value = tradershubController.default.checktradershubRole$Action(callContext);

                                                        // Has Role?
                                                        return OS.Flow.executeSequence(function() {
                                                            if ((checktradershubRoleVar.value.hasRoleOut)) {
                                                                // Destination: /tradershub/
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((tradershubClientVariables.getLastURL() === "")) ? (OS.BuiltinFunctions.getOwnerURLPath()) : (tradershubClientVariables.getLastURL())), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
                                                            } else {
                                                                // Clear Password
                                                                // Password = ""
                                                                model.variables.passwordVar = "";
                                                                // IsExecuting = false
                                                                // IsExecuting = False
                                                                model.variables.isExecutingVar = false;
                                                                // ErrorMessage
                                                                OS.FeedbackMessageService.showFeedbackMessage("No permissions.", /*Error*/ 3);
                                                                // Execute Action: Logout
                                                                model.flush();
                                                                return OS.SystemActions.logout(callContext);
                                                            }

                                                        });
                                                    } else {
                                                        // Clear Password
                                                        // Password = ""
                                                        model.variables.passwordVar = "";
                                                        // IsExecuting = false
                                                        // IsExecuting = False
                                                        model.variables.isExecutingVar = false;
                                                        // ErrorMessage
                                                        OS.FeedbackMessageService.showFeedbackMessage(doLoginVar.value.errorMessageOut, /*Error*/ 3);
                                                    }

                                                });
                                            });
                                        }

                                    });
                                }).catch(function(ex) {
                                    OS.Logger.debug("Login.LoginOnClick", OS.Exceptions.getMessage(ex));
                                    // Handle Error: AllExceptions
                                    if (!(OS.Exceptions.isSystem(ex))) {
                                        OS.Logger.error(null, ex, null, null, 1);
                                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "AllExceptions");
                                                span.setAttribute("outsystems.function.key", "599d7676-eda3-4dbe-a7d9-f1bd2acf9a02");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                            }

                                            return OS.Flow.tryFinally(function() {
                                                return OS.Flow.executeAsyncFlow(function() {
                                                    // Clear Password
                                                    // Password = ""
                                                    model.variables.passwordVar = "";
                                                    // IsExecuting = false
                                                    // IsExecuting = False
                                                    model.variables.isExecutingVar = false;
                                                    OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
                                                    return OS.Flow.returnAsync();

                                                });
                                            }, function() {
                                                if (span) {
                                                    span.end();
                                                }

                                            });
                                        }, 1);
                                    }

                                    throw ex;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__loginOnClick$Action;
            }
            set _loginOnClick$Action(value) {
                this.__loginOnClick$Action = value;
            }


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "14355f2d-bb2f-44a7-acd2-29acfb5b2ded");
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

            onTogglePasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnTogglePasswordVisibility");
                        span.setAttribute("outsystems.function.key", "26c085d1-acb2-40e4-8d40-9d907dc2e86d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            loginOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LoginOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LoginOnClick");
                        span.setAttribute("outsystems.function.key", "fb636e0c-5502-414e-8a4e-7a424b00b5b4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._loginOnClick$Action, callContext);
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
                        return tradershub_CommonController.default.handleError(ex, this.callContext());
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