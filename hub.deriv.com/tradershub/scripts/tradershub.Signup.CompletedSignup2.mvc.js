define("tradershub.Signup.CompletedSignup2.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$SetAccountSettings", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_SignupLayoutTopMenu_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Flow", "flowIn", "Flow", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, false),
                    this.attr("_flowInDataFetchStatus", "_flowInDataFetchStatus", "_flowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = tradershub_Layouts_SignupLayoutTopMenu_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Flow" in inputs) {
                this.variables.flowIn = OS.DataConversion.ServerDataConverter.from(inputs.Flow, OS.DataTypes.DataTypes.Integer);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Signup.CompletedSignup2.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.CompletedSignup2.mvc$model", "tradershub.Signup.CompletedSignup2.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$SetAccountSettings", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Signup_CompletedSignup2_mvc_model, tradershub_Signup_CompletedSignup2_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.CompletedSignup2";
        }

        static getAttributes() {
            return {
                codeFunction: "CompletedSignup2",
                functionKey: "b8217501-8dd6-4285-a83f-a589512256c5",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CompletedSignup2.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view];
        }

        get modelFactory() {
            return tradershub_Signup_CompletedSignup2_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_CompletedSignup2_mvc_controller;
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


            return "Signup completed | Deriv";
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
                            style: "modal-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RightSideContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "height: auto; text-align: left;"
                            },
                            style: "modal",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            style: "display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px; text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.signup_success_illustration.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.flowIn === 1), false, this, function() {
                            return [React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 20px; font-weight: bold;"
                                },
                                text: ["Start your trading journey"],
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 20px; font-weight: bold; margin-bottom: 0px;"
                                },
                                text: ["Real trading in a few steps"],
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        })), $if((model.variables.flowIn === 2), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: ["Your demo account is ready."],
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
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
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.buttonOnClickRealAccount$Action(controller.callContext(eventHandlerContext));
                                });;
                            },
                            style: "btn btn-primary ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.flowIn === 1), false, this, function() {
                            return [React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: normal;"
                                },
                                text: ["Set up your real account"],
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: normal;"
                                },
                                text: ["Create real account"],
                                _idProps: {
                                    service: idService,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
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
                                try {
                                    OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                } catch (ex) {
                                    if (((ex.name) !== ("RedirectOccurredException"))) {
                                        throw ex;
                                    }

                                };
                            },
                            style: "btn",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: normal;"
                            },
                            text: ["Take me to demo"],
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.flowIn)]
            }));
        }
    }

    return View;
});
define("tradershub.Signup.CompletedSignup2.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.controller", "tradershub.Signup.CompletedSignup2.mvc$controller.OnInitialize.ParseURLJS", "tradershub.Signup.CompletedSignup2.mvc$controller.ButtonOnClickRealAccount.LandingCompanyPayloadJS", "tradershub.Signup.CompletedSignup2.mvc$controller.ButtonOnClickRealAccount.RudderStackJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.CheckLandingCompanyJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.SetAccountSettingsPayloadJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.GetIDVCountryJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.LandingCompanyPayloadJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.AuthorizePayloadJS", "tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.SyncLocalStorageJS", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$SetAccountSettings", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_SignupController, tradershub_Signup_CompletedSignup2_mvc_controller_OnInitialize_ParseURLJS, tradershub_Signup_CompletedSignup2_mvc_controller_ButtonOnClickRealAccount_LandingCompanyPayloadJS, tradershub_Signup_CompletedSignup2_mvc_controller_ButtonOnClickRealAccount_RudderStackJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_CheckLandingCompanyJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_SetAccountSettingsPayloadJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_GetIDVCountryJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_LandingCompanyPayloadJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_AuthorizePayloadJS, tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_SyncLocalStorageJS) {
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
                                span.setAttribute("outsystems.function.key", "27697958-66e7-4f42-909a-7d317b44e1a8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var parseURLJSResult = new OS.DataTypes.VariableHolder();
                                parseURLJSResult.value = OS.Logger.startActiveSpan("ParseURL", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ParseURL");
                                        span.setAttribute("outsystems.function.key", "68d2868d-939f-4090-b742-04584bfc3a81");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnInitialize_ParseURLJS, "ParseURL", "OnInitialize", {
                                            Flow: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnInitialize$parseURLJSResult"))();
                                            jsNodeResult.flowOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Flow, OS.DataTypes.DataTypes.Integer);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Flow = ParseURL.Flow
                                model.variables.flowIn = parseURLJSResult.value.flowOut;
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

            get _buttonOnClickRealAccount$Action() {
                if (!(this.hasOwnProperty("__buttonOnClickRealAccount$Action"))) {
                    this.__buttonOnClickRealAccount$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClickRealAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClickRealAccount");
                                span.setAttribute("outsystems.function.key", "2e1fd76a-031d-4cb3-9a2c-e3689e2bb34a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ButtonOnClickRealAccount");
                                callContext = controller.callContext(callContext);
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "f36ef93e-43c9-4385-9416-c80b0c99c8e3");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_ButtonOnClickRealAccount_RudderStackJS, "RudderStack", "ButtonOnClickRealAccount", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "LandingCompanyPayload");
                                            span.setAttribute("outsystems.function.key", "8fa7c385-673c-49bf-89db-85ca1a4f5146");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_ButtonOnClickRealAccount_LandingCompanyPayloadJS, "LandingCompanyPayload", "ButtonOnClickRealAccount", {
                                                CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.ButtonOnClickRealAccount$landingCompanyPayloadJSResult"))();
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
                                    return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        // RawLandingCompanyResponse = DerivApiSendMessage.Response
                                        tradershubClientVariables.setRawLandingCompanyResponse(derivApiSendMessageVar.value.responseOut);
                                    }).then(function() {
                                        if ((tradershubClientVariables.getIsEuUser())) {
                                            // Destination: /tradershub/
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2Fstaging-hub.deriv.com%2Ftradershub", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            // Destination: /tradershub/CurrencySelection
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__buttonOnClickRealAccount$Action;
            }
            set _buttonOnClickRealAccount$Action(value) {
                this.__buttonOnClickRealAccount$Action = value;
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
                                span.setAttribute("outsystems.function.key", "5f0209b6-2a6f-4825-8f43-e1413cbd0661");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var landingCompanyVar = new OS.DataTypes.VariableHolder();
                                var checkLandingCompanyJSResult = new OS.DataTypes.VariableHolder();
                                var setAccountSettingsPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                                var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: CleanupAfterSignup
                                    tradershubController.default.cleanupAfterSignup$Action(callContext);
                                    authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "AuthorizePayload");
                                            span.setAttribute("outsystems.function.key", "f280f35c-97bc-42f1-ae7f-991e8b764221");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_AuthorizePayloadJS, "AuthorizePayload", "OnReady", {
                                                AuthToken: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$authorizePayloadJSResult"))();
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
                                    return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                        derivApiSendMessageVar.value = value;
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeAuthorizeResponse
                                        jSONDeserializeAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure, false);
                                        checkLandingCompanyJSResult.value = OS.Logger.startActiveSpan("CheckLandingCompany", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "CheckLandingCompany");
                                                span.setAttribute("outsystems.function.key", "4b43bbca-1c9c-46a0-8c6d-85255c485bb3");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_CheckLandingCompanyJS, "CheckLandingCompany", "OnReady", {
                                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                    IsEU: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$checkLandingCompanyJSResult"))();
                                                    jsNodeResult.isEUOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEU, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // IsEuUser = CheckLandingCompany.IsEU
                                        tradershubClientVariables.setIsEuUser(checkLandingCompanyJSResult.value.isEUOut);
                                        setAccountSettingsPayloadJSResult.value = OS.Logger.startActiveSpan("SetAccountSettingsPayload", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "SetAccountSettingsPayload");
                                                span.setAttribute("outsystems.function.key", "7706e2fd-aa05-4ddc-8add-01cd62a59106");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_SetAccountSettingsPayloadJS, "SetAccountSettingsPayload", "OnReady", {
                                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$setAccountSettingsPayloadJSResult"))();
                                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // Execute Action: SetAccountSettings
                                        model.flush();
                                        return tradershubController.default.setAccountSettings$Action(setAccountSettingsPayloadJSResult.value.payloadOut, callContext);
                                    }).then(function() {
                                        OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "SyncLocalStorage");
                                                span.setAttribute("outsystems.function.key", "f7331485-18cd-4fd3-88fe-1a32537662de");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_SyncLocalStorageJS, "SyncLocalStorage", "OnReady", {
                                                    Token: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "GetIDVCountry");
                                                span.setAttribute("outsystems.function.key", "d94b3865-fcc2-408f-abe3-c7443ad2b3d6");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_GetIDVCountryJS, "GetIDVCountry", "OnReady", {
                                                    Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                                    IsIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$getIDVCountryJSResult"))();
                                                    jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsIDVSupported, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // RealSignupIsIDVSupported = GetIDVCountry.IsIDVSupported
                                        tradershubClientVariables.setRealSignupIsIDVSupported(getIDVCountryJSResult.value.isIDVSupportedOut);
                                        landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "LandingCompanyPayload");
                                                span.setAttribute("outsystems.function.key", "ec914c92-2cc9-48e7-b26d-a00ca40e946f");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Signup_CompletedSignup2_mvc_controller_OnReady_LandingCompanyPayloadJS, "LandingCompanyPayload", "OnReady", {
                                                    CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedResidence(), OS.DataTypes.DataTypes.Text),
                                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$landingCompanyPayloadJSResult"))();
                                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // Execute Action: LandingCompany
                                        model.flush();
                                        return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                            landingCompanyVar.value = value;
                                        });
                                    }).then(function() {
                                        // RawLandingCompanyResponse = LandingCompany.Response
                                        tradershubClientVariables.setRawLandingCompanyResponse(landingCompanyVar.value.responseOut);
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "27697958-66e7-4f42-909a-7d317b44e1a8");
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

            buttonOnClickRealAccount$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClickRealAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClickRealAccount");
                        span.setAttribute("outsystems.function.key", "2e1fd76a-031d-4cb3-9a2c-e3689e2bb34a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._buttonOnClickRealAccount$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "5f0209b6-2a6f-4825-8f43-e1413cbd0661");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnInitialize$parseURLJSResult", [{
            name: "Flow",
            attrName: "flowOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.ButtonOnClickRealAccount$landingCompanyPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$checkLandingCompanyJSResult", [{
            name: "IsEU",
            attrName: "isEUOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$setAccountSettingsPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$getIDVCountryJSResult", [{
            name: "IsIDVSupported",
            attrName: "isIDVSupportedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$landingCompanyPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Signup.CompletedSignup2.OnReady$authorizePayloadJSResult", [{
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

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnInitialize.ParseURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const urlParams = new URLSearchParams(window.location.search);
        $parameters.Flow = Number(urlParams.get('flow')) || 1;
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.ButtonOnClickRealAccount.LandingCompanyPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            landing_company: $parameters.CountryCode
        });

    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.ButtonOnClickRealAccount.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        rudderanalytics.identify({
            action: "signup_modal_open_os",
        })
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.CheckLandingCompanyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorizeResponse = JSON.parse($parameters.Response)

        $parameters.IsEU = authorizeResponse.authorize.upgradeable_landing_companies.includes("maltainvest") && authorizeResponse.authorize.upgradeable_landing_companies.length === 1
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.SetAccountSettingsPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            citizen: $parameters.Citizen
        })
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.Citizenship)

        $parameters.IsIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.LandingCompanyPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            landing_company: $parameters.CountryCode
        });

    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.Signup.CompletedSignup2.mvc$controller.OnReady.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const response = JSON.parse($parameters.Response)
        const accounts = {
            [response.authorize.loginid]: {
                ...response.authorize.account_list[0],
                token: $parameters.Token,
                email: response.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: response.authorize.landing_company_name,
                residence: response.authorize.country,
                balance: response.authorize.balance,
                accepted_bch: 0
            }
        }
        const activeLoginId = response.authorize.loginid

        let origin = `https://app.deriv.com`


        // Uncomment this if staging-app.deriv.com is needed
        // if (window.location.origin.includes('staging')) {
        //     origin = `https://staging-app.deriv.com`
        // }


        localStorage.setItem('client.accounts', JSON.stringify(accounts));

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: JSON.stringify(accounts),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: activeLoginId,
                },
                origin
            );
        }


    };
});