define("tradershub.Common.RecoverPasswordRequest.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("Email", "emailVar", "Email", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
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
                RecoverPasswordForm: OS.Model.ValidationWidgetRecord,
                Input_Email: OS.Model.ValidationWidgetRecord
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

define("tradershub.Common.RecoverPasswordRequest.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.RecoverPasswordRequest.mvc$model", "tradershub.Common.RecoverPasswordRequest.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutBlank.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Common_RecoverPasswordRequest_mvc_model, tradershub_Common_RecoverPasswordRequest_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.RecoverPasswordRequest";
        }

        static getAttributes() {
            return {
                codeFunction: "RecoverPasswordRequest",
                functionKey: "3fea9ba6-0c6b-4fe7-ab2e-65022a9839c0",
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
            return [tradershub_Layouts_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_RecoverPasswordRequest_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_RecoverPasswordRequest_mvc_controller;
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


            return "Recover password";
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
                                name: "RecoverPasswordForm"
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
                                className: "margin-top-base text-neutral-8"
                            },
                            tag: "h5",
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Forgot your password?"), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Don\'t worry, we\'ll send you an email with instructions."))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-inputs margin-top-m",
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
                                validationParentId: idService.getId("RecoverPasswordForm")
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
                                        targetWidget: "Input_Email",
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
                                            validationParentId: idService.getId("RecoverPasswordForm")
                                        },
                                        enabled: true,
                                        extendedProperties: {
                                            tabIndex: "1"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Email*/ 7,
                                        mandatory: true,
                                        maxLength: 250,
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function(value) {
                                            model.variables.emailVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.emailVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-button margin-top-l",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
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
                                IsLoading: model.variables.isExecutingVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("RecoverPasswordForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "14",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                button: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            tabIndex: "2"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: true,
                                        onClick: function() {
                                            controller.validationService.validateWidget(idService.getId("RecoverPasswordForm"));
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.resetPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                                            });

                                            ;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "Reset password")];
                                })
                            },
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "margin-top-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Not in the right place?", React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": "Go to login page"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Go to login."))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.emailVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Common.RecoverPasswordRequest.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.controller"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_CommonController) {
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
            get sendResetPasswordEmail$ServerAction() {
                if (!(this.hasOwnProperty("_sendResetPasswordEmail$ServerAction"))) {
                    this._sendResetPasswordEmail$ServerAction = function(applicationNameIn, customerEmailIn, callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("SendResetPasswordEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendResetPasswordEmail");
                                span.setAttribute("outsystems.function.key", "82e5273e-87b6-4b68-8444-51cff0af2c32");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                var inputs = {
                                    ApplicationName: OS.DataConversion.ServerDataConverter.to(applicationNameIn, OS.DataTypes.DataTypes.Text),
                                    CustomerEmail: OS.DataConversion.ServerDataConverter.to(customerEmailIn, OS.DataTypes.DataTypes.Email)
                                };
                                return controller.callServerAction("SendResetPasswordEmail", "screenservices/tradershub/Common/RecoverPasswordRequest/ActionSendResetPasswordEmail", "ZQ3JIWE5Y0g+GWpXfIJc8A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail"))();
                                    executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._sendResetPasswordEmail$ServerAction;
            }
            set sendResetPasswordEmail$ServerAction(value) {
                this._sendResetPasswordEmail$ServerAction = value;
            }


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
            get _resetPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__resetPasswordOnClick$Action"))) {
                    this.__resetPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResetPasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResetPasswordOnClick");
                                span.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ResetPasswordOnClick");
                                callContext = controller.callContext(callContext);
                                var sendResetPasswordEmailVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("RecoverPasswordForm")).validAttr)) {
                                            // IsExecuting = True
                                            model.variables.isExecutingVar = true;
                                            // Execute Action: SendResetPasswordEmail
                                            model.flush();
                                            return controller.sendResetPasswordEmail$ServerAction(OS.BuiltinFunctions.getAppName(), model.variables.emailVar, callContext).then(function(value) {
                                                sendResetPasswordEmailVar.value = value;
                                            }).then(function() {
                                                // Success?
                                                if ((sendResetPasswordEmailVar.value.successOut)) {
                                                    // IsExecuting
                                                    // IsExecuting = False
                                                    model.variables.isExecutingVar = false;
                                                    // Destination: /tradershub/RecoverPasswordReset
                                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "RecoverPasswordReset", {
                                                        Email: OS.DataConversion.ServerDataConverter.to(model.variables.emailVar, OS.DataTypes.DataTypes.Email)
                                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                } else {
                                                    OS.FeedbackMessageService.showFeedbackMessage("An error has occured. Please try again later.", /*Error*/ 3);
                                                    // IsExecuting = False
                                                    model.variables.isExecutingVar = false;
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

                return this.__resetPasswordOnClick$Action;
            }
            set _resetPasswordOnClick$Action(value) {
                this.__resetPasswordOnClick$Action = value;
            }


            resetPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetPasswordOnClick");
                        span.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._resetPasswordOnClick$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail", [{
            name: "Success",
            attrName: "successOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});