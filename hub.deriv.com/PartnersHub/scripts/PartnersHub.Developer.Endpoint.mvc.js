define("PartnersHub.Developer.Endpoint.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "PartnersHub.controller$SetAppId", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ServerURL", "serverURLVar", "ServerURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("OAuthAppID2", "oAuthAppID2Var", "OAuthAppID2", true, false, OS.DataTypes.DataTypes.Text, function() {
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

define("PartnersHub.Developer.Endpoint.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Developer.Endpoint.mvc$model", "PartnersHub.Developer.Endpoint.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutEndpointPage.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "PartnersHub.controller$SetAppId", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Developer_Endpoint_mvc_model, PartnersHub_Developer_Endpoint_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutEndpointPage_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Developer.Endpoint";
        }

        static getAttributes() {
            return {
                codeFunction: "Endpoint",
                functionKey: "7b7d13a7-3209-4d57-ba43-275e8f5a99bc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Developer.Endpoint.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutEndpointPage_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Developer_Endpoint_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Developer_Endpoint_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("pxN9ewkyV026Qydej1qZvA#Title", "Endpoint");
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
                            text: [$text(getTranslation("xq6aFQV3i0GlkG17lS85RA#Value", "Change API Endpoint"))],
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
                        }, $text(getTranslation("DWYZMDPB40Oa+r4IbtgTyg#Value", "Server"))), React.createElement(OSWidgets.Input, {
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
                        }, $text(getTranslation("tYSnXt74LEe+5+sVcqPLpw#Value", "OAuth App ID"))), React.createElement(OSWidgets.Input, {
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
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.oAuthAppID2Var, function(value) {
                                model.variables.oAuthAppID2Var = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "OAuthAppID"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "color: #999; display: flex; font-size: 10px; margin-bottom: 4px; margin-top: 2px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "8px"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $text(getTranslation("jso1GJeBzkmbFB0QlMBT5Q#Value", "Register an ")), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "text-decoration: underline;"
                            },
                            text: [$text(getTranslation("ZIpQdKMSh029jJ2Kl8HJIg#Value", "app ID"))],
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-left: 4px;"
                            },
                            text: [$text(getTranslation("40bWnUM0M0qjslHd09SpUw#Value", "to use the above server for logging in."))],
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: false,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("Form1"));
                                var eventHandlerContext = callContext.clone();
                                controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "submit-button",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #fff; font-size: 14px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("KIeuFldrS0KldY+5Z10Nrw#Value", "Submit"))],
                            _idProps: {
                                service: idService,
                                uuid: "17"
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
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 14px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("z4E221d1vEeR43uMRxpE+A#Value", "Reset to original settings"))],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.oAuthAppID2Var), asPrimitiveValue(model.variables.serverURLVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Developer.Endpoint.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Developer.Endpoint.mvc$translationsResources", "PartnersHub.Developer.controller", "PartnersHub.Developer.Endpoint.mvc$controller.ResetEndpoint.JavaScript1JS", "PartnersHub.Developer.Endpoint.mvc$controller.ButtonOnClick.JavaScript1JS", "PartnersHub.Developer.Endpoint.mvc$controller.OnClick.JavaScript1JS", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SetServer", "PartnersHub.controller$SetAppId", "PartnersHub.controller$InitGrowthbook"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Developer_Endpoint_mvc_TranslationsResources, PartnersHub_DeveloperController, PartnersHub_Developer_Endpoint_mvc_controller_ResetEndpoint_JavaScript1JS, PartnersHub_Developer_Endpoint_mvc_controller_ButtonOnClick_JavaScript1JS, PartnersHub_Developer_Endpoint_mvc_controller_OnClick_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Developer_Endpoint_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "0fc4c384-7a07-47f3-a63e-c7aeeaf2ba55");
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
                                        span.setAttribute("outsystems.function.key", "4887aafa-54b0-480e-9451-199570a6a249");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Developer_Endpoint_mvc_controller_ResetEndpoint_JavaScript1JS, "JavaScript1", "ResetEndpoint", null, function($parameters) {}, {}, {});
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
                                span.setAttribute("outsystems.function.key", "3fcd7d5c-3a16-4ead-91e6-d8ac5fb5cb52");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                if (((model.widgets.get(idService.getId("OAuthAppID")).validAttr || model.widgets.get(idService.getId("Server")).validAttr))) {
                                    // Execute Action: SetServer
                                    PartnersHubController.default.setServer$Action(model.variables.serverURLVar, callContext);
                                    // Execute Action: SetAppId
                                    PartnersHubController.default.setAppId$Action(model.variables.oAuthAppID2Var, callContext);
                                    OS.FeedbackMessageService.showFeedbackMessage("Endpoint changed successfully", /*Success*/ 1);
                                    OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "a1fe6f86-8bb7-46e0-8a5b-519b36a3086b");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Developer_Endpoint_mvc_controller_ButtonOnClick_JavaScript1JS, "JavaScript1", "ButtonOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

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
                                span.setAttribute("outsystems.function.key", "78a20df2-e1b0-41e2-ba4e-a5bfb468b9a9");
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
                                    // OAuthAppID2 = AppId
                                    model.variables.oAuthAppID2Var = PartnersHubClientVariables.getAppId();
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

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "910421f9-c790-4ef8-a769-2ee2968bcbad");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "3472222f-f340-4e18-af30-2c71b5bc39e6");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Developer_Endpoint_mvc_controller_OnClick_JavaScript1JS, "JavaScript1", "OnClick", null, function($parameters) {}, {}, {});
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

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }


            resetEndpoint$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetEndpoint__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetEndpoint");
                        span.setAttribute("outsystems.function.key", "0fc4c384-7a07-47f3-a63e-c7aeeaf2ba55");
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
                        span.setAttribute("outsystems.function.key", "3fcd7d5c-3a16-4ead-91e6-d8ac5fb5cb52");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "78a20df2-e1b0-41e2-ba4e-a5bfb468b9a9");
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

            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "910421f9-c790-4ef8-a769-2ee2968bcbad");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
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

define("PartnersHub.Developer.Endpoint.mvc$controller.ResetEndpoint.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.location.reload()
    };
});

define("PartnersHub.Developer.Endpoint.mvc$controller.ButtonOnClick.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.location.reload()
    };
});

define("PartnersHub.Developer.Endpoint.mvc$controller.OnClick.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.open("https://api.deriv.com/")
    };
});


define("PartnersHub.Developer.Endpoint.mvc$translationsResources.de-DE", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Auf die Werkseinstellungen zurücksetzen",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Einreichen",
        "40bWnUM0M0qjslHd09SpUw#Value": "um den oben genannten Server zum Einloggen zu verwenden.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "App-ID",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Registrieren Sie ein",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "OAuth-App-ID",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Server",
        "xq6aFQV3i0GlkG17lS85RA#Value": "API-Endpunkt ändern"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.es-ES", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Restablecer a la configuración original",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Enviar",
        "40bWnUM0M0qjslHd09SpUw#Value": "para usar el servidor anterior para iniciar sesión.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID de la aplicación",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Regístrate en",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID de la aplicación OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Servidor",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Cambiar el punto final de la API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.fr-FR", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Réinitialiser aux paramètres d\'origine",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Soumettre",
        "40bWnUM0M0qjslHd09SpUw#Value": "pour utiliser le serveur ci-dessus pour se connecter.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID de l\'application",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Inscrivez-vous à",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID de l\'application OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Serveur",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Changer le point de terminaison de l\'API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.it-IT", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Ripristina le impostazioni originali",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Inviare",
        "40bWnUM0M0qjslHd09SpUw#Value": "per utilizzare il server sopra per accedere.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID dell\'app",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Registrati a",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID dell\'app OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Server",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Cambiare l\'endpoint dell\'API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.pl-PL", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Przywróć ustawienia fabryczne",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Zatwierdź",
        "40bWnUM0M0qjslHd09SpUw#Value": "aby korzystać z powyższego serwera do logowania.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID aplikacji",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Zarejestruj się na",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID aplikacji OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Serwer",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Zmień punkt końcowy API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.pt-PT", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Reiniciar para as configurações originais",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Submeter",
        "40bWnUM0M0qjslHd09SpUw#Value": "para usar o servidor acima para fazer login.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID da app",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Registe-se em",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID da aplicação OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Servidor",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Alterar o endpoint da API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources.ru-RU", [], function() {
    return {
        "z4E221d1vEeR43uMRxpE+A#Value": "Сбросить до заводских настроек",
        "KIeuFldrS0KldY+5Z10Nrw#Value": "Отправить",
        "40bWnUM0M0qjslHd09SpUw#Value": "чтобы использовать указанный выше сервер для входа.",
        "ZIpQdKMSh029jJ2Kl8HJIg#Value": "ID приложения",
        "jso1GJeBzkmbFB0QlMBT5Q#Value": "Зарегистрируйтесь на",
        "tYSnXt74LEe+5+sVcqPLpw#Value": "ID приложения OAuth",
        "DWYZMDPB40Oa+r4IbtgTyg#Value": "Сервер",
        "xq6aFQV3i0GlkG17lS85RA#Value": "Изменить конечную точку API"
    };
});

define("PartnersHub.Developer.Endpoint.mvc$translationsResources", ["exports", "PartnersHub.Developer.Endpoint.mvc$translationsResources.de-DE", "PartnersHub.Developer.Endpoint.mvc$translationsResources.es-ES", "PartnersHub.Developer.Endpoint.mvc$translationsResources.fr-FR", "PartnersHub.Developer.Endpoint.mvc$translationsResources.it-IT", "PartnersHub.Developer.Endpoint.mvc$translationsResources.pl-PL", "PartnersHub.Developer.Endpoint.mvc$translationsResources.pt-PT", "PartnersHub.Developer.Endpoint.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Developer_Endpoint_mvc_translationsResources_deDE, PartnersHub_Developer_Endpoint_mvc_translationsResources_esES, PartnersHub_Developer_Endpoint_mvc_translationsResources_frFR, PartnersHub_Developer_Endpoint_mvc_translationsResources_itIT, PartnersHub_Developer_Endpoint_mvc_translationsResources_plPL, PartnersHub_Developer_Endpoint_mvc_translationsResources_ptPT, PartnersHub_Developer_Endpoint_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Developer_Endpoint_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});