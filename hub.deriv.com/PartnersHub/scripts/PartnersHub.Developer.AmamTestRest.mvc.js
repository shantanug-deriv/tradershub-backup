define("PartnersHub.Developer.AmamTestRest.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ServerURL", "serverURLVar", "ServerURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("UserToken", "userTokenVar", "UserToken", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Form1: OS.Model.ValidationWidgetRecord,
                Server: OS.Model.ValidationWidgetRecord,
                OAuthAppID: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Developer.AmamTestRest.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Developer.AmamTestRest.mvc$model", "PartnersHub.Developer.AmamTestRest.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutEndpointPage.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Developer_AmamTestRest_mvc_model, PartnersHub_Developer_AmamTestRest_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutEndpointPage_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Developer.AmamTestRest";
        }

        static getAttributes() {
            return {
                codeFunction: "AmamTestRest",
                functionKey: "dbcde4a1-1941-4755-aedf-371ddec41526",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Developer.AmamTestRest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutEndpointPage_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Developer_AmamTestRest_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Developer_AmamTestRest_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("oeTN20EZVUeu3zcd3sQVJg#Title", "AmamTestRest");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutEndpointPage_mvc_view, {
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
                        return [React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "display: flex; justify-content: center;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "Form1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 12px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "auto"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("HWpQT2_xsE6CBFCvVr23vw#Value", "Change API Endpoint"))],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("668BiAtrh0qFEzyWTJVN_w#Value", "Server"))), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form1")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: false,
                            maxLength: 50,
                            prompt: "Server",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.serverURLVar, function(value) {
                                model.variables.serverURLVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Server"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #999; font-size: 10px; margin-left: 8px;"
                            },
                            text: ["e.g. green.derivws.com"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 4px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("jidQpjar20yZW+MM7GCMNA#Value", "User token"))), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form1")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: false,
                            maxLength: 50,
                            prompt: "User token",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userTokenVar, function(value) {
                                model.variables.userTokenVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "OAuthAppID"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: false,
                            onClick: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
                                });;
                            },
                            style: "submit-button",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #fff; font-size: 14px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("U3Ya9XVpsE6UksqzSCPWsA#Value", "Submit"))],
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Button, {
                            enabled: true,
                            gridProperties: {
                                marginLeft: "0"
                            },
                            isDefault: false,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.resetEndpoint$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "reset-button",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 14px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("uvD7belHcUSyXMrGZJWW8w#Value", "Reset to original settings"))],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.userTokenVar), asPrimitiveValue(model.variables.serverURLVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Developer.AmamTestRest.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources", "PartnersHub.Developer.controller", "PartnersHub.Developer.AmamTestRest.mvc$controller.ResetEndpoint.JavaScript1JS", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Developer_AmamTestRest_mvc_TranslationsResources, PartnersHub_DeveloperController, PartnersHub_Developer_AmamTestRest_mvc_controller_ResetEndpoint_JavaScript1JS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Developer_AmamTestRest_mvc_TranslationsResources);
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
            get _resetEndpoint$Action() {
                if (!(this.hasOwnProperty("__resetEndpoint$Action"))) {
                    this.__resetEndpoint$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResetEndpoint", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResetEndpoint");
                                span.setAttribute("outsystems.function.key", "3fa97c87-61f0-4344-b87e-6b0f1f8ded08");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ResetEndpoint");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetDefaultAppId
                                PartnersHubController.default.setDefaultAppId$Action(true, callContext);
                                // Execute Action: SetServer
                                PartnersHubController.default.setServer$Action("green.derivws.com", callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "580bd52f-98d3-41c6-8093-fa01fd92f8ac");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Developer_AmamTestRest_mvc_controller_ResetEndpoint_JavaScript1JS, "JavaScript1", "ResetEndpoint", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                OS.FeedbackMessageService.showFeedbackMessage("Endpoint resetted", /*Success*/ 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__resetEndpoint$Action;
            }
            set _resetEndpoint$Action(value) {
                this.__resetEndpoint$Action = value;
            }

            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "89570bd6-cfde-4686-b066-33abe76787e5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                var authorizeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: Authorize
                                    model.flush();
                                    return RESTAPIWebsocketController.default.authorize$Action(function() {
                                        var rec = new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure();
                                        rec.authorizeAttr = model.variables.userTokenVar;
                                        return rec;
                                    }(), model.variables.serverURLVar, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                        authorizeVar.value = value;
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

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e987d91b-e437-40d5-a9a2-2373ce321862");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // ServerURL = Server
                                    model.variables.serverURLVar = PartnersHubClientVariables.getServer();
                                    // UserToken = AppId
                                    model.variables.userTokenVar = PartnersHubClientVariables.getAppId();
                                    // Execute Action: InitGrowthbook
                                    model.flush();
                                    return PartnersHubController.default.initGrowthbook$Action("", false, callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            resetEndpoint$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetEndpoint__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetEndpoint");
                        span.setAttribute("outsystems.function.key", "3fa97c87-61f0-4344-b87e-6b0f1f8ded08");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._resetEndpoint$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            buttonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "89570bd6-cfde-4686-b066-33abe76787e5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "e987d91b-e437-40d5-a9a2-2373ce321862");
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
                        return PartnersHub_DeveloperController.default.handleError(ex, this.callContext());
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

define("PartnersHub.Developer.AmamTestRest.mvc$controller.ResetEndpoint.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.location.reload()
    };
});


define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.de-DE", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Auf die ursprünglichen Einstellungen zurücksetzen",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Einreichen",
        "jidQpjar20yZW+MM7GCMNA#Value": "Benutzertoken",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Server",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "API-Endpunkt ändern"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.es-ES", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Restablecer a la configuración original",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Enviar",
        "jidQpjar20yZW+MM7GCMNA#Value": "Token de usuario",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Servidor",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Cambiar el punto final de la API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.fr-FR", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Réinitialiser aux paramètres d\'origine",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Soumettre",
        "jidQpjar20yZW+MM7GCMNA#Value": "Jeton utilisateur",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Serveur",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Changer le point de terminaison de l\'API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.it-IT", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Ripristina le impostazioni originali",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Inviare",
        "jidQpjar20yZW+MM7GCMNA#Value": "Token utente",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Server",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Cambiare l\'endpoint dell\'API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.pl-PL", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Przywróć ustawienia fabryczne",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Zatwierdź",
        "jidQpjar20yZW+MM7GCMNA#Value": "Token użytkownika",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Serwer",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Zmień punkt końcowy API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.pt-PT", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Restaurar para as configurações originais",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Enviar",
        "jidQpjar20yZW+MM7GCMNA#Value": "Token de utilizador",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Servidor",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Alterar o endpoint da API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources.ru-RU", [], function() {
    return {
        "uvD7belHcUSyXMrGZJWW8w#Value": "Сбросить до заводских настроек",
        "U3Ya9XVpsE6UksqzSCPWsA#Value": "Отправить",
        "jidQpjar20yZW+MM7GCMNA#Value": "Токен пользователя",
        "668BiAtrh0qFEzyWTJVN_w#Value": "Сервер",
        "HWpQT2_xsE6CBFCvVr23vw#Value": "Изменить конечную точку API"
    };
});

define("PartnersHub.Developer.AmamTestRest.mvc$translationsResources", ["exports", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.de-DE", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.es-ES", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.fr-FR", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.it-IT", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.pl-PL", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.pt-PT", "PartnersHub.Developer.AmamTestRest.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_deDE, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_esES, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_frFR, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_itIT, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_plPL, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_ptPT, PartnersHub_Developer_AmamTestRest_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Developer_AmamTestRest_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});