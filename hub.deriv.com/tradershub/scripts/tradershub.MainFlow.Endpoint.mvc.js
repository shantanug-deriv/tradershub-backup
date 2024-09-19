define("tradershub.MainFlow.Endpoint.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure", "tradershub.model$RL_65125be14dfacc3673d277ed0ec6faeb"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("URL", "uRLVar", "URL", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("AppId", "appIdVar", "AppId", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("FeatureFlags", "featureFlagsVar", "FeatureFlags", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_65125be14dfacc3673d277ed0ec6faeb());
                    }, false, tradershubModel.RL_65125be14dfacc3673d277ed0ec6faeb)
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
                Input_URL: OS.Model.ValidationWidgetRecord,
                Input_AppId: OS.Model.ValidationWidgetRecord,
                Switch1: OS.Model.ValidationWidgetRecord
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

define("tradershub.MainFlow.Endpoint.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.Endpoint.mvc$model", "tradershub.MainFlow.Endpoint.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.SignupLayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure", "tradershub.model$RL_65125be14dfacc3673d277ed0ec6faeb"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_Endpoint_mvc_model, tradershub_MainFlow_Endpoint_mvc_controller, tradershubClientVariables, tradershub_Layouts_SignupLayoutTopMenu_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Endpoint";
        }

        static getAttributes() {
            return {
                codeFunction: "Endpoint",
                functionKey: "08443d37-9f2d-4a30-922c-a4072ffa3a61",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Endpoint.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_SignupLayoutTopMenu_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_Endpoint_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_Endpoint_mvc_controller;
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


            return "Endpoint | Deriv";
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
                                style: "background: ; height: auto; text-align: left;"
                            },
                            style: "modal ",
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
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Change API endpoint"), React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "border-width: 0px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: idService,
                                name: "Form1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_URL",
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "URL"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form1")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.uRLVar, function(value) {
                                model.variables.uRLVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_URL"
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
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_AppId",
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "App Id"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form1")
                            },
                            enabled: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.appIdVar, function(value) {
                                model.variables.appIdVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_AppId"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("Form1"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Save"))), React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: false,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.resetOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "btn",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Reset"), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: !(model.variables.featureFlagsVar.isEmpty),
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.TableRecords, {
                            showHeader: true,
                            source: model.variables.featureFlagsVar,
                            style: "table",
                            styleHeader: "table-header",
                            styleRow: "table-row",
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                headerRow: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.HeaderCell, {
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }, "Flag Name"), React.createElement(OSWidgets.HeaderCell, {
                                        extendedProperties: {
                                            style: "text-align: center"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }, "Enabled")];
                                }),
                                row: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.RowCell, {
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).nameAttr)]
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).nameAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.RowCell, {
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).enabledAttr)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Center*/ 2,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Switch, {
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        enabled: true,
                                        onChange: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.switchOnChange$Action(model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).nameAttr, controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: "switch",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).enabledAttr, function(value) {
                                            model.variables.featureFlagsVar.getCurrent(callContext.iterationContext).enabledAttr = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Switch1"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
                                }, callContext, idService, "1_0")
                            },
                            _dependencies: []
                        }))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.featureFlagsVar), asPrimitiveValue(model.variables.appIdVar), asPrimitiveValue(model.variables.uRLVar)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.Endpoint.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.Endpoint.mvc$controller.SaveOnClick.SaveWSURLJS", "tradershub.MainFlow.Endpoint.mvc$controller.OnReady.GetConfigJS", "tradershub.MainFlow.Endpoint.mvc$controller.ResetOnClick.ResetWSConfigJS", "tradershub.MainFlow.Endpoint.mvc$controller.SwitchOnChange.UpdateFeatureFlagByNameJS", "tradershub.model$ST_c9321e98763823c3fe8b25101ee9afbdStructure", "tradershub.model$RL_65125be14dfacc3673d277ed0ec6faeb"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_Endpoint_mvc_controller_SaveOnClick_SaveWSURLJS, tradershub_MainFlow_Endpoint_mvc_controller_OnReady_GetConfigJS, tradershub_MainFlow_Endpoint_mvc_controller_ResetOnClick_ResetWSConfigJS, tradershub_MainFlow_Endpoint_mvc_controller_SwitchOnChange_UpdateFeatureFlagByNameJS) {
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
            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "24964f40-1585-42af-9270-ab79bd32859f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    OS.FeedbackMessageService.showFeedbackMessage("Update success!", /*Success*/ 1);
                                    OS.Logger.startActiveSpan("SaveWSURL", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SaveWSURL");
                                            span.setAttribute("outsystems.function.key", "b3144945-09b0-4259-acb8-13f5fe8fb9e0");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_MainFlow_Endpoint_mvc_controller_SaveOnClick_SaveWSURLJS, "SaveWSURL", "SaveOnClick", {
                                                AppId: OS.DataConversion.JSNodeParamConverter.to(model.variables.appIdVar, OS.DataTypes.DataTypes.Text),
                                                URL: OS.DataConversion.JSNodeParamConverter.to(model.variables.uRLVar, OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
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

                return this.__saveOnClick$Action;
            }
            set _saveOnClick$Action(value) {
                this.__saveOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "6b71ac30-0993-407a-8ac2-b0cc6d4ad0dd");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getConfigJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeFlagListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_65125be14dfacc3673d277ed0ec6faeb))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Logger.startActiveSpan("GetConfig", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GetConfig");
                                            span.setAttribute("outsystems.function.key", "e468e45d-3ba4-43ec-be83-c0150dfb5b87");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_MainFlow_Endpoint_mvc_controller_OnReady_GetConfigJS, "GetConfig", "OnReady", {
                                                URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                AppId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                FeatureFlags: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Endpoint.OnReady$getConfigJSResult"))();
                                                jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.appIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AppId, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.featureFlagsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FeatureFlags, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        getConfigJSResult.value = results;
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeFlagList
                                        jSONDeserializeFlagListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getConfigJSResult.value.featureFlagsOut, tradershubModel.RL_65125be14dfacc3673d277ed0ec6faeb, false);
                                        // URL = GetConfig.URL
                                        model.variables.uRLVar = getConfigJSResult.value.uRLOut;
                                        // AppId = GetConfig.AppId
                                        model.variables.appIdVar = getConfigJSResult.value.appIdOut;
                                        // AppId = GetConfig.AppId
                                        tradershubClientVariables.setAppId(getConfigJSResult.value.appIdOut);
                                        // URL = GetConfig.URL
                                        tradershubClientVariables.setURL(getConfigJSResult.value.uRLOut);
                                        // FeatureFlags = JSONDeserializeFlagList.Data
                                        model.variables.featureFlagsVar = jSONDeserializeFlagListVar.value.dataOut;
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

            get _resetOnClick$Action() {
                if (!(this.hasOwnProperty("__resetOnClick$Action"))) {
                    this.__resetOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResetOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResetOnClick");
                                span.setAttribute("outsystems.function.key", "7324bba6-8178-4043-b82a-e5bc25c835b1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ResetOnClick");
                                callContext = controller.callContext(callContext);
                                // WebsocketURL = DefaultWebsocketURL
                                tradershubClientVariables.setWebsocketURL(tradershubClientVariables.getDefaultWebsocketURL());
                                OS.FeedbackMessageService.showFeedbackMessage("Reset success!", /*Success*/ 1);
                                OS.Logger.startActiveSpan("ResetWSConfig", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ResetWSConfig");
                                        span.setAttribute("outsystems.function.key", "4c1b0550-90a4-43ed-bace-ac4056664a43");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Endpoint_mvc_controller_ResetOnClick_ResetWSConfigJS, "ResetWSConfig", "ResetOnClick", null, function($parameters) {}, {}, {});
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

                return this.__resetOnClick$Action;
            }
            set _resetOnClick$Action(value) {
                this.__resetOnClick$Action = value;
            }

            get _switchOnChange$Action() {
                if (!(this.hasOwnProperty("__switchOnChange$Action"))) {
                    this.__switchOnChange$Action = function(flagNameIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SwitchOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SwitchOnChange");
                                span.setAttribute("outsystems.function.key", "a702c1bb-e919-4d28-bf36-142e3ec2e522");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SwitchOnChange");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Endpoint.SwitchOnChange$vars"))());
                                vars.value.flagNameInLocal = flagNameIn;
                                OS.Logger.startActiveSpan("UpdateFeatureFlagByName", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "UpdateFeatureFlagByName");
                                        span.setAttribute("outsystems.function.key", "87e0d895-d309-4cc0-b2b0-777eef0561a6");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_MainFlow_Endpoint_mvc_controller_SwitchOnChange_UpdateFeatureFlagByNameJS, "UpdateFeatureFlagByName", "SwitchOnChange", {
                                            FlagName: OS.DataConversion.JSNodeParamConverter.to(vars.value.flagNameInLocal, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
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

                return this.__switchOnChange$Action;
            }
            set _switchOnChange$Action(value) {
                this.__switchOnChange$Action = value;
            }


            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "24964f40-1585-42af-9270-ab79bd32859f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "6b71ac30-0993-407a-8ac2-b0cc6d4ad0dd");
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

            resetOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResetOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResetOnClick");
                        span.setAttribute("outsystems.function.key", "7324bba6-8178-4043-b82a-e5bc25c835b1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._resetOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            switchOnChange$Action(flagNameIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SwitchOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SwitchOnChange");
                        span.setAttribute("outsystems.function.key", "a702c1bb-e919-4d28-bf36-142e3ec2e522");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._switchOnChange$Action, callContext, flagNameIn);
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
        Controller.registerVariableGroupType("tradershub.MainFlow.Endpoint.OnReady$getConfigJSResult", [{
            name: "URL",
            attrName: "uRLOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AppId",
            attrName: "appIdOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "FeatureFlags",
            attrName: "featureFlagsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Endpoint.SwitchOnChange$vars", [{
            name: "FlagName",
            attrName: "flagNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.Endpoint.mvc$controller.SaveOnClick.SaveWSURLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const featureFlags = localStorage.featureFlags;
        localStorage.clear()

        localStorage.setItem('config.server_url', $parameters.URL)
        localStorage.setItem("ws-url", `wss://${$parameters.URL}/websockets/v3?app_id=${$parameters.AppId}&l=EN&brand=deriv`)
        localStorage.setItem('config.app_id', $parameters.AppId)
        localStorage.setItem('featureFlags', featureFlags)
        setTimeout(function() {
            location.reload()
        }, 1000)
    };
});

define("tradershub.MainFlow.Endpoint.mvc$controller.OnReady.GetConfigJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const url = localStorage.getItem('config.server_url')
            const appid = localStorage.getItem('config.app_id')

            $parameters.FeatureFlags = localStorage.featureFlags ?? JSON.stringify([])

            if (url && appid) {
                $parameters.URL = url;
                $parameters.AppId = appid;
            } else {
                $parameters.URL = "green.derivws.com";
                $parameters.AppId = location.hostname === "hub.deriv.com" ? "61554" : location.hostname.includes("dev-hub") ? "15438" : "53503";
            }

            $resolve()
        });
    };
});

define("tradershub.MainFlow.Endpoint.mvc$controller.ResetOnClick.ResetWSConfigJS", [], function() {
    return function($actions, $roles, $public) {
        const featureFlags = localStorage.featureFlags;
        localStorage.clear()
        localStorage.setItem('featureFlags', featureFlags)
        location.reload()
    };
});

define("tradershub.MainFlow.Endpoint.mvc$controller.SwitchOnChange.UpdateFeatureFlagByNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window?.toggleFeatureFlag($parameters.FlagName)
    };
});