define("PartnersHub.Common.StatesList.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.controller", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SearchedState", "searchedStateVar", "SearchedState", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("FilteredStatesList", "filteredStatesListVar", "FilteredStatesList", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure());
                    }, false, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure),
                    this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure());
                    }, false, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure),
                    this.attr("NoSearchText", "noSearchTextVar", "NoSearchText", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Input_SearchedItem: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Common.StatesList.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.StatesList.mvc$model", "PartnersHub.Common.StatesList.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Search.mvc$view", "PartnersHub.Common.LoaderBlock.mvc$view", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Common_StatesList_mvc_model, PartnersHub_Common_StatesList_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_Search_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.StatesList";
        }

        static getAttributes() {
            return {
                codeFunction: "StatesList",
                functionKey: "8c1e50ea-52a8-4514-a967-86a64af8bb19",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Search_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_StatesList_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_StatesList_mvc_controller;
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
                    style: "margin-right: 16px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Interaction_Search_mvc_view, {
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
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0px"
                            },
                            inputType: /*Search*/ 8,
                            mandatory: false,
                            maxLength: 0,
                            onChange: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.onSearch$Action(model.variables.searchedStateVar, controller.callContext(eventHandlerContext));

                                ;
                            },
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchedStateVar, function(value) {
                                model.variables.searchedStateVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.searchedStateVar)]
            })), $if(((model.variables.filteredStatesListVar.states_listAttr.length > 0) && (model.variables.noSearchTextVar === false)), false, this, function() {
                return [React.createElement(OSWidgets.List, {
                    animateItems: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    source: model.variables.filteredStatesListVar.states_listAttr,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: [asPrimitiveValue(model.variables.filteredStatesListVar.states_listAttr.getCurrent(callContext.iterationContext).textAttr)]
                            }, React.createElement(OSWidgets.ListItem, {
                                extendedProperties: {
                                    style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickState$Action(model.variables.filteredStatesListVar.states_listAttr.getCurrent(callContext.iterationContext).textAttr, controller.callContext(eventHandlerContext));

                                    ;
                                },
                                style: "\"list-item\"",
                                triggerActionOnFullSwipeLeft: true,
                                triggerActionOnFullSwipeRight: true,
                                _idProps: {
                                    service: idService,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    leftActions: PlaceholderContent.Empty,
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 12px 20px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 8px;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-size: 15px; font-weight: normal;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            value: model.variables.filteredStatesListVar.states_listAttr.getCurrent(callContext.iterationContext).textAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Icon, {
                                            extendedProperties: {
                                                style: "color: #6A7178; cursor: pointer;"
                                            },
                                            icon: "angle-right",
                                            iconSize: /*Twotimes*/ 1,
                                            style: "icon",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }),
                                    rightActions: PlaceholderContent.Empty
                                }
                            }))];
                        }, callContext, idService, "1")
                    },
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin-top: 12px; text-align: center;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
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
                        uuid: "13",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            })));
        }
    }

    return View;
});
define("PartnersHub.Common.StatesList.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.StatesList.mvc$translationsResources", "PartnersHub.Common.StatesList.mvc$controller.OnSearch.JavaScript1JS", "PartnersHub.Common.StatesList.mvc$controller.OnReady.GetAuthTokenJS", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_StatesList_mvc_TranslationsResources, PartnersHub_Common_StatesList_mvc_controller_OnSearch_JavaScript1JS, PartnersHub_Common_StatesList_mvc_controller_OnReady_GetAuthTokenJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_StatesList_mvc_TranslationsResources);
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
            get _onSearch$Action() {
                if (!(this.hasOwnProperty("__onSearch$Action"))) {
                    this.__onSearch$Action = function(searchedItemArgIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSearch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSearch");
                                span.setAttribute("outsystems.function.key", "119b5873-bf4a-42cf-bdc0-cddbd6691462");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSearch");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnSearch$vars"))());
                                vars.value.searchedItemArgInLocal = searchedItemArgIn;
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var serializeStatesListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeStatesListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure))());
                                if (((OS.BuiltinFunctions.length(vars.value.searchedItemArgInLocal) > 0))) {
                                    // JSON Serialize: SerializeStatesList
                                    serializeStatesListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.filteredStatesListVar, false, false);
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "8f878789-171f-4577-8e6e-49b4292aba6a");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Common_StatesList_mvc_controller_OnSearch_JavaScript1JS, "JavaScript1", "OnSearch", {
                                                StatesList: OS.DataConversion.JSNodeParamConverter.to(serializeStatesListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                SearchedState: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchedItemArgInLocal, OS.DataTypes.DataTypes.Text),
                                                FilteredStatesList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                NoSearchedText: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnSearch$javaScript1JSResult"))();
                                                jsNodeResult.filteredStatesListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredStatesList, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.noSearchedTextOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NoSearchedText, OS.DataTypes.DataTypes.Boolean);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // NoSearchText = JavaScript1.NoSearchedText
                                    model.variables.noSearchTextVar = javaScript1JSResult.value.noSearchedTextOut;
                                    // JSON Deserialize: JSONDeserializeStatesListResponse
                                    jSONDeserializeStatesListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.filteredStatesListOut, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure, false);
                                    // FilteredStatesList = JSONDeserializeStatesListResponse.Data
                                    model.variables.filteredStatesListVar = jSONDeserializeStatesListResponseVar.value.dataOut;
                                } else {
                                    // FilteredStatesList = StatesListResponse
                                    model.variables.filteredStatesListVar = model.variables.statesListResponseVar;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onSearch$Action;
            }
            set _onSearch$Action(value) {
                this.__onSearch$Action = value;
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
                                span.setAttribute("outsystems.function.key", "45b3fac9-c18c-489b-93bf-98dd0e18e556");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var sendStatesListVar = new OS.DataTypes.VariableHolder();
                                var getAuthTokenJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    getAuthTokenJSResult.value = OS.Logger.startActiveSpan("GetAuthToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GetAuthToken");
                                            span.setAttribute("outsystems.function.key", "cbedcff9-7151-460d-aa7f-ce0a594bce2c");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Common_StatesList_mvc_controller_OnReady_GetAuthTokenJS, "GetAuthToken", "OnReady", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnReady$getAuthTokenJSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: MountDerivAPIClient
                                    PartnersHubController.default.mountDerivAPIClient$Action(callContext);
                                    // Execute Action: GetSettings
                                    model.flush();
                                    return RESTAPIWebsocketController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getAuthTokenJSResult.value.tokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                        getSettingsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: SendStatesList
                                        model.flush();
                                        return PartnersHubController.default.sendStatesList$Action(function() {
                                            var rec = new PartnersHubModel.ST_8401e8b399f219fdd97b12284d97703eStructure();
                                            rec.states_listAttr = getSettingsVar.value.responseOut.get_settingsAttr.country_codeAttr;
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            sendStatesListVar.value = value;
                                        });
                                    }).then(function() {
                                        // StatesListResponse = SendStatesList.StatesListResponse
                                        model.variables.statesListResponseVar = sendStatesListVar.value.statesListResponseOut;
                                        // FilteredStatesList = SendStatesList.StatesListResponse
                                        model.variables.filteredStatesListVar = sendStatesListVar.value.statesListResponseOut;
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "ce733a3e-46e4-442f-b47a-f8787b19ea05");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: MountDerivAPIClient
                                PartnersHubController.default.mountDerivAPIClient$Action(callContext);
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


            onSearch$Action(searchedItemArgIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSearch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSearch");
                        span.setAttribute("outsystems.function.key", "119b5873-bf4a-42cf-bdc0-cddbd6691462");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onSearch$Action, callContext, searchedItemArgIn);
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
                        span.setAttribute("outsystems.function.key", "45b3fac9-c18c-489b-93bf-98dd0e18e556");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "ce733a3e-46e4-442f-b47a-f8787b19ea05");
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

            get onClickState$Action() {
                if (!(this.hasOwnProperty("_onClickState$Action"))) {
                    this._onClickState$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickState$Action;
            }
            set onClickState$Action(value) {
                this._onClickState$Action = value;
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
        Controller.registerVariableGroupType("PartnersHub.Common.StatesList.OnSearch$vars", [{
            name: "SearchedItemArg",
            attrName: "searchedItemArgInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Common.StatesList.OnSearch$javaScript1JSResult", [{
            name: "FilteredStatesList",
            attrName: "filteredStatesListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "NoSearchedText",
            attrName: "noSearchedTextOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Common.StatesList.OnReady$getAuthTokenJSResult", [{
            name: "token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Common.StatesList.mvc$controller.OnSearch.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const statesListResponse = JSON.parse($parameters.StatesList);
        const searchedText = $parameters.SearchedState;

        // Filter the states_list based on the searchedText
        if (Array.isArray(statesListResponse.states_list)) {
            // Filter the states_list based on the searchedText
            statesListResponse.states_list = statesListResponse.states_list.filter(state =>
                state.text && state.text.toLowerCase().includes(searchedText.toLowerCase())
            );
        } else {
            $parameters.NoSearchedText = true
        }

        // Log the updated object to verify correct filtering
        console.log(statesListResponse);

        // Ensure to stringify the entire updated object, not just the states_list
        $parameters.FilteredStatesList = JSON.stringify(statesListResponse);
    };
});

define("PartnersHub.Common.StatesList.mvc$controller.OnReady.GetAuthTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token');

        if (token) {
            $parameters.token = token;
        }
    };
});


define("PartnersHub.Common.StatesList.mvc$translationsResources.de-DE", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Suche"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.es-ES", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Buscar"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.fr-FR", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Recherche"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.it-IT", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Cerca"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.pl-PL", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Szukaj"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.pt-PT", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Pesquisar"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources.ru-RU", [], function() {
    return {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Поиск"
    };
});

define("PartnersHub.Common.StatesList.mvc$translationsResources", ["exports", "PartnersHub.Common.StatesList.mvc$translationsResources.de-DE", "PartnersHub.Common.StatesList.mvc$translationsResources.es-ES", "PartnersHub.Common.StatesList.mvc$translationsResources.fr-FR", "PartnersHub.Common.StatesList.mvc$translationsResources.it-IT", "PartnersHub.Common.StatesList.mvc$translationsResources.pl-PL", "PartnersHub.Common.StatesList.mvc$translationsResources.pt-PT", "PartnersHub.Common.StatesList.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Common_StatesList_mvc_translationsResources_deDE, PartnersHub_Common_StatesList_mvc_translationsResources_esES, PartnersHub_Common_StatesList_mvc_translationsResources_frFR, PartnersHub_Common_StatesList_mvc_translationsResources_itIT, PartnersHub_Common_StatesList_mvc_translationsResources_plPL, PartnersHub_Common_StatesList_mvc_translationsResources_ptPT, PartnersHub_Common_StatesList_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Common_StatesList_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});