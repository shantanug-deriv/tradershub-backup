define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Password", "passwordVar", "Password", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                CreatePasswordInput: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$model", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "CustomComponents.PasswordPolicy.PasswordPolicy.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_model, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.CFDCommission";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDCommission",
                functionKey: "af57d98b-3886-4cfb-8ce5-cdf0fb3e8572",
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
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("i9lXr4Y4+0yM5c3w+z6Fcg#Title", "CFDCommission");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
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
                        return [$if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; background: #fff; border-radius: 8px; display: flex; flex-direction: column; gap: 24px; padding: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [$text(getTranslation("w5Et4V_7ekuNEFI541nGmg#Value", "To enable CFDs commission, set up your MT5 password"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "gap: 10px;"
                                },
                                style: "password-input",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 0px;"
                                },
                                text: [$text(getTranslation("Hb9Gdw4u8Eeak153q49qYA#Value", "Password"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                    name: "DesktopPasswordField",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "z-index: 3;"
                                            },
                                            style: "password-input__icon--right",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Link, {
                                            enabled: true,
                                            extendedProperties: {
                                                style: "height: 24px;"
                                            },
                                            gridProperties: {
                                                width: "auto",
                                                marginLeft: "0"
                                            },
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onTogglePasswordVisibility$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if(!(model.variables.isPasswordVisibleVar), false, this, function() {
                                            return [React.createElement(OSWidgets.Image, {
                                                extendedProperties: {
                                                    style: "height: 24px;"
                                                },
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.ic_eye.png"),
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "8"
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
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })))];
                                    }),
                                    input: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "margin-bottom: 0px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline"
                                            },
                                            style: "",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Input, {
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            enabled: true,
                                            extendedProperties: {
                                                tabIndex: "2",
                                                autoFocus: "True",
                                                style: "border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 16px; height: 56px; margin-bottom: 0px; padding-bottom: 5px; padding-right: var(--space-xl); padding-top: 5px;"
                                            },
                                            gridProperties: {
                                                width: "430px"
                                            },
                                            inputType: /*Password*/ 1,
                                            mandatory: true,
                                            maxLength: 0,
                                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1", "Password"),
                                            style: model.getCachedValue(idService.getId("CreatePasswordInput.Style"), function() {
                                                return (((OS.BuiltinFunctions.length(model.variables.passwordVar) === 0)) ? ("password-input__field") : (((model.variables.isPasswordValidVar) ? ("password-input__field password-input__field--success") : ("password-input__field password-input__field--failure"))));
                                            }, function() {
                                                return model.variables.passwordVar;
                                            }, function() {
                                                return model.variables.isPasswordValidVar;
                                            }),
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function(value) {
                                                model.variables.passwordVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "CreatePasswordInput"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                            })), React.createElement(CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Password: model.variables.passwordVar,
                                    Length: 8
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
                                    uuid: "12",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "display: flex; height: 40px;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                isDefault: false,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                style: "",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $text(getTranslation("D7GIKBcNckmFNlI5AzX_eg#Value", "Create password"))))];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(PartnersHubClientVariables.getIsDesktop())]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "4ff82a9b-224c-47c9-8dfd-212736a7499f");
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
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("CreatePasswordInput"), callContext);

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
                                span.setAttribute("outsystems.function.key", "86dc92eb-aa35-491a-ad8c-c569c0bf3fca");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
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

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _primaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
                    this.__primaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PrimaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PrimaryButtononClick");
                                span.setAttribute("outsystems.function.key", "d81efb7d-2fd3-45f2-9e29-691c17a3d065");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PrimaryButtononClick");
                                callContext = controller.callContext(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__primaryButtononClick$Action;
            }
            set _primaryButtononClick$Action(value) {
                this.__primaryButtononClick$Action = value;
            }


            onTogglePasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnTogglePasswordVisibility");
                        span.setAttribute("outsystems.function.key", "4ff82a9b-224c-47c9-8dfd-212736a7499f");
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
                        span.setAttribute("outsystems.function.key", "86dc92eb-aa35-491a-ad8c-c569c0bf3fca");
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

            primaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PrimaryButtononClick");
                        span.setAttribute("outsystems.function.key", "d81efb7d-2fd3-45f2-9e29-691c17a3d065");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
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
                        return PartnersHub_RealAccountCreationFlowController.default.handleError(ex, this.callContext());
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


define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.de-DE", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Passwort erstellen",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Passwort",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Passwort",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Um die CFDs-Kommission zu aktivieren, richten Sie Ihr MT5-Passwort ein."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.es-ES", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Crear contraseña",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Contraseña",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Contraseña",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Para habilitar la comisión de CFDs, configura tu contraseña de MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.fr-FR", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Créer un mot de passe",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Mot de passe",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Mot de passe",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Pour activer la commission sur les CFD, configurez votre mot de passe MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.it-IT", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Crea password",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Password",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Password",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Per abilitare la commissione sui CFD, imposta la tua password MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.pl-PL", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Utwórz hasło",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Hasło",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Hasło",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Aby włączyć prowizję CFD, skonfiguruj swoje hasło MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.pt-PT", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Criar senha",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Senha",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Palavra-passe",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Para ativar a comissão de CFDs, configure a sua senha do MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.ru-RU", [], function() {
    return {
        "D7GIKBcNckmFNlI5AzX_eg#Value": "Создать пароль",
        "ryfwHuhUXEaeQiOWlRR9vQ#ValueExpression.1281629883.1": "Пароль",
        "Hb9Gdw4u8Eeak153q49qYA#Value": "Пароль",
        "w5Et4V_7ekuNEFI541nGmg#Value": "Чтобы активировать комиссию по CFD, настройте свой пароль MT5."
    };
});

define("PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.CFDCommission.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_CFDCommission_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});