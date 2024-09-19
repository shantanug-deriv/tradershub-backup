define("tradershub.Common.StateSelector.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FilteredStatesList", "filteredStatesListVar", "FilteredStatesList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db());
                    }, false, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db),
                    this.attr("SearchKeyword", "searchKeywordVar", "SearchKeyword", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("StatesList2", "statesList2Var", "StatesList2", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db());
                    }, false, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db),
                    this.attr("StatesList", "statesListIn", "StatesList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db());
                    }, false, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db),
                    this.attr("_statesListInDataFetchStatus", "_statesListInDataFetchStatus", "_statesListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        setInputs(inputs) {
            if ("StatesList" in inputs) {
                this.variables.statesListIn = inputs.StatesList;
                if ("_statesListInDataFetchStatus" in inputs) {
                    this.variables._statesListInDataFetchStatus = inputs._statesListInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.StateSelector.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.StateSelector.mvc$model", "tradershub.Common.StateSelector.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Search.mvc$view", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Common_StateSelector_mvc_model, tradershub_Common_StateSelector_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Interaction_Search_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.StateSelector";
        }

        static getAttributes() {
            return {
                codeFunction: "StateSelector",
                functionKey: "f71357c2-9559-4edb-b5ca-ca38420aa89c",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.StateSelector.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Search_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_StateSelector_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_StateSelector_mvc_controller;
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
                    style: "background-color: #fff;"
                },
                style: "display-flex flex-direction-column",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
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
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "wcag-hide-text",
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Search input"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 14px; margin-bottom: 8px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Search*/ 8,
                            mandatory: false,
                            maxLength: 0,
                            onChange: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.onSearch$Action(model.variables.searchKeywordVar, controller.callContext(eventHandlerContext));

                                ;
                            },
                            prompt: "Search",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchKeywordVar, function(value) {
                                model.variables.searchKeywordVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.searchKeywordVar)]
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "height: calc(100vh - 140px); overflow-y: scroll;"
                },
                style: "country-list-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.List, {
                animateItems: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.filteredStatesListVar,
                style: "list list-group residence-list ",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.ListItem, {
                            extendedProperties: {
                                style: "cursor: pointer; height: fit-content;"
                            },
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.onClickCountry$Action(model.variables.filteredStatesListVar.getCurrent(callContext.iterationContext).valueAttr, model.variables.filteredStatesListVar.getCurrent(callContext.iterationContext).textAttr, controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "margin-y-base",
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
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 500;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: model.variables.filteredStatesListVar.getCurrent(callContext.iterationContext).textAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                rightActions: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.filteredStatesListVar.getCurrent(callContext.iterationContext).textAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("tradershub.Common.StateSelector.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.StateSelector.mvc$controller.OnSearch.SearchCountryJS", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Common_StateSelector_mvc_controller_OnSearch_SearchCountryJS) {
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setFocusVar = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.statesListIn, false, false);
                                // FilteredStatesList = StatesList
                                model.variables.filteredStatesListVar = model.variables.statesListIn;
                                // StatesList2 = StatesList
                                model.variables.statesList2Var = model.variables.statesListIn;
                                // Execute Action: SetFocus
                                setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Input_SearchedItem"), callContext);

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _onSearch$Action() {
                if (!(this.hasOwnProperty("__onSearch$Action"))) {
                    this.__onSearch$Action = function(searchedItemArgIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSearch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSearch");
                                span.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSearch");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars"))());
                                vars.value.searchedItemArgInLocal = searchedItemArgIn;
                                var searchCountryJSResult = new OS.DataTypes.VariableHolder();
                                var serializeFilteredResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db))());
                                if (((OS.BuiltinFunctions.length(vars.value.searchedItemArgInLocal) > 0))) {
                                    // JSON Serialize: SerializeFilteredResidenceList
                                    serializeFilteredResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.statesListIn, false, false);
                                    searchCountryJSResult.value = OS.Logger.startActiveSpan("SearchCountry", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SearchCountry");
                                            span.setAttribute("outsystems.function.key", "89c3d12b-efb6-4bf9-8522-680133c31874");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Common_StateSelector_mvc_controller_OnSearch_SearchCountryJS, "SearchCountry", "OnSearch", {
                                                SearchedState: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchedItemArgInLocal, OS.DataTypes.DataTypes.Text),
                                                StatesList: OS.DataConversion.JSNodeParamConverter.to(serializeFilteredResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                FilteredStatesList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult"))();
                                                jsNodeResult.filteredStatesListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredStatesList, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // JSON Deserialize: JSONDeserializeResidenceListResponse
                                    jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(searchCountryJSResult.value.filteredStatesListOut, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db, false);
                                    // FilteredStatesList = JSONDeserializeResidenceListResponse.Data
                                    model.variables.filteredStatesListVar = jSONDeserializeResidenceListResponseVar.value.dataOut;
                                } else {
                                    // FilteredStatesList = StatesList2
                                    model.variables.filteredStatesListVar = model.variables.statesList2Var;
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


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onSearch$Action(searchedItemArgIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSearch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSearch");
                        span.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            get onClickCountry$Action() {
                if (!(this.hasOwnProperty("_onClickCountry$Action"))) {
                    this._onClickCountry$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickCountry$Action;
            }
            set onClickCountry$Action(value) {
                this._onClickCountry$Action = value;
            }

            get onClickBack$Action() {
                if (!(this.hasOwnProperty("_onClickBack$Action"))) {
                    this._onClickBack$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickBack$Action;
            }
            set onClickBack$Action(value) {
                this._onClickBack$Action = value;
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars", [{
            name: "SearchedItemArg",
            attrName: "searchedItemArgInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult", [{
            name: "FilteredStatesList",
            attrName: "filteredStatesListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Common.StateSelector.mvc$controller.OnSearch.SearchCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const statesList = JSON.parse($parameters.StatesList ?? JSON.stringify([]));

        $parameters.FilteredStatesList = JSON.stringify(statesList.filter(state => state["text"].toLowerCase().includes($parameters.SearchedState.toLowerCase())))
    };
});