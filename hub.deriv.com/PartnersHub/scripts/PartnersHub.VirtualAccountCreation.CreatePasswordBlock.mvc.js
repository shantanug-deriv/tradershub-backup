define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.controller", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CreatePassword", "createPasswordVar", "CreatePassword", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e76ad42f067f0e001aaa1c3ada36905eStructure());
                    }, false, PartnersHubModel.ST_e76ad42f067f0e001aaa1c3ada36905eStructure),
                    this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("isLoading", "isLoadingIn", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                MobilePasswordField: OS.Model.ValidationWidgetRecord
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
            if ("isLoading" in inputs) {
                this.variables.isLoadingIn = inputs.isLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$model", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "CustomComponents.PasswordPolicy.PasswordPolicy.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_model, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "VirtualAccountCreation.CreatePasswordBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "CreatePasswordBlock",
                functionKey: "b113dab6-e06d-4b5d-96aa-d6f83607a2b9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.VirtualAccountCreation.CreatePasswordBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_controller;
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
                    style: "display: flex; flex-direction: column; padding: 0px;"
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
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1", "Password"),
                            style: model.getCachedValue(idService.getId("MobilePasswordField.Style"), function() {
                                return (((OS.BuiltinFunctions.length(model.variables.createPasswordVar.passwordAttr) === 0)) ? ("password-input__field") : (((model.variables.isPasswordValidVar) ? ("password-input__field password-input__field--success") : ("password-input__field password-input__field--failure"))));
                            }, function() {
                                return model.variables.createPasswordVar.passwordAttr;
                            }, function() {
                                return model.variables.isPasswordValidVar;
                            }),
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.createPasswordVar.passwordAttr, function(value) {
                                model.variables.createPasswordVar.passwordAttr = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "MobilePasswordField"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.createPasswordVar.passwordAttr)]
            })), React.createElement(CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    HasAtLeastOneSpecialCharacter: false,
                    Length: 8,
                    Password: model.variables.createPasswordVar.passwordAttr
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
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    isLoading: model.variables.isLoadingIn,
                    _isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus),
                    enabled: model.variables.isPasswordValidVar,
                    class: "create-password-button",
                    borderRadius: "50px",
                    Width: "100%",
                    title: "Create password"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.createPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "6",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources", "PartnersHub.model$ST_e76ad42f067f0e001aaa1c3ada36905eStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_TranslationsResources);
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
            get _createPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__createPasswordOnClick$Action"))) {
                    this.__createPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreatePasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreatePasswordOnClick");
                                span.setAttribute("outsystems.function.key", "07d87a4c-1d72-4075-9b84-801e36471b6b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CreatePasswordOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnSubmit
                                    return controller.onSubmit$Action(model.variables.createPasswordVar.passwordAttr, callContext);
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

            get _onPasswordCompliant$Action() {
                if (!(this.hasOwnProperty("__onPasswordCompliant$Action"))) {
                    this.__onPasswordCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnPasswordCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnPasswordCompliant");
                                span.setAttribute("outsystems.function.key", "332e8476-398f-4617-baa9-7ae339642229");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnPasswordCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.OnPasswordCompliant$vars"))());
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

            get _onTogglePasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onTogglePasswordVisibility$Action"))) {
                    this.__onTogglePasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnTogglePasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnTogglePasswordVisibility");
                                span.setAttribute("outsystems.function.key", "3e4378b8-5217-495f-8754-58dfc9009d99");
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
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("CreatePasswordField"), callContext);

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

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "c755cedb-2298-4b59-8422-9fea32f38add");
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


            createPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePasswordOnClick");
                        span.setAttribute("outsystems.function.key", "07d87a4c-1d72-4075-9b84-801e36471b6b");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            onPasswordCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnPasswordCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnPasswordCompliant");
                        span.setAttribute("outsystems.function.key", "332e8476-398f-4617-baa9-7ae339642229");
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

            onTogglePasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnTogglePasswordVisibility");
                        span.setAttribute("outsystems.function.key", "3e4378b8-5217-495f-8754-58dfc9009d99");
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

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "c755cedb-2298-4b59-8422-9fea32f38add");
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

            get onSubmit$Action() {
                if (!(this.hasOwnProperty("_onSubmit$Action"))) {
                    this._onSubmit$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onSubmit$Action;
            }
            set onSubmit$Action(value) {
                this._onSubmit$Action = value;
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
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.OnPasswordCompliant$vars", [{
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


define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Passwort"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Contraseña"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Mot de passe"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Password"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Hasło"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Palavra-passe"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Пароль"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources", ["exports", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.de-DE", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.es-ES", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.fr-FR", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.it-IT", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.pl-PL", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.pt-PT", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_deDE, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_esES, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_frFR, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_itIT, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_plPL, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_ptPT, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});