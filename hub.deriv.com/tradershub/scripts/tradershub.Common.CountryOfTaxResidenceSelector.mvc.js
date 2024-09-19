define("tradershub.Common.CountryOfTaxResidenceSelector.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("ResidenceList", "residenceListIn", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("ResidenceList" in inputs) {
                this.variables.residenceListIn = inputs.ResidenceList;
                if ("_residenceListInDataFetchStatus" in inputs) {
                    this.variables._residenceListInDataFetchStatus = inputs._residenceListInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.CountryOfTaxResidenceSelector.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$model", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Search.mvc$view", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Common_CountryOfTaxResidenceSelector_mvc_model, tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Interaction_Search_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.CountryOfTaxResidenceSelector";
        }

        static getAttributes() {
            return {
                codeFunction: "CountryOfTaxResidenceSelector",
                functionKey: "04f5ac6c-5931-480d-8e1e-389c272225d8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.CountryOfTaxResidenceSelector.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Search_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_CountryOfTaxResidenceSelector_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller;
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
                                controller.onSearch$Action(model.variables.searchedResidenceVar, controller.callContext(eventHandlerContext));

                                ;
                            },
                            prompt: "Search",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchedResidenceVar, function(value) {
                                model.variables.searchedResidenceVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.searchedResidenceVar)]
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
                source: model.variables.filteredResidenceListVar,
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
                                controller.onClickCountry$Action(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr, model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr, controller.callContext(eventHandlerContext));

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
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                        },
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 400;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr,
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
                            _dependencies: [asPrimitiveValue(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller.OnSearch.SearchCountryJS", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller.OnReady.JavaScript1JS", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller_OnSearch_SearchCountryJS, tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller_OnReady_JavaScript1JS) {
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
            get _onSearch$Action() {
                if (!(this.hasOwnProperty("__onSearch$Action"))) {
                    this.__onSearch$Action = function(searchedItemArgIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSearch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSearch");
                                span.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSearch");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars"))());
                                vars.value.searchedItemArgInLocal = searchedItemArgIn;
                                var searchCountryJSResult = new OS.DataTypes.VariableHolder();
                                var serializeFilteredResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                if (((OS.BuiltinFunctions.length(vars.value.searchedItemArgInLocal) > 0))) {
                                    // JSON Serialize: SerializeFilteredResidenceList
                                    serializeFilteredResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.residenceListIn, false, false);
                                    searchCountryJSResult.value = OS.Logger.startActiveSpan("SearchCountry", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SearchCountry");
                                            span.setAttribute("outsystems.function.key", "7a1f9258-dca0-4f0b-b978-a43774a1fec3");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller_OnSearch_SearchCountryJS, "SearchCountry", "OnSearch", {
                                                ResidenceList: OS.DataConversion.JSNodeParamConverter.to(serializeFilteredResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                SearchedResidence: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchedItemArgInLocal, OS.DataTypes.DataTypes.Text),
                                                FilteredResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult"))();
                                                jsNodeResult.filteredResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredResidenceList, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // JSON Deserialize: JSONDeserializeResidenceListResponse
                                    jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(searchCountryJSResult.value.filteredResidenceListOut, tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                    // FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                    model.variables.filteredResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                } else {
                                    // FilteredResidenceList = SortedResidenceList
                                    model.variables.filteredResidenceListVar = model.variables.sortedResidenceListVar;
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setFocusVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.residenceListIn, false, false);
                                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "0a2ae31e-6b5a-4787-9df2-0bf5b668e89d");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Common_CountryOfTaxResidenceSelector_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                            ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                            CurrentResidence: OS.DataConversion.JSNodeParamConverter.to(model.variables.currentResidenceVar, OS.DataTypes.DataTypes.Text),
                                            SortedResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult"))();
                                            jsNodeResult.sortedResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SortedResidenceList, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializeResidenceListResponse
                                jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.sortedResidenceListOut, tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                // FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                model.variables.filteredResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                // SortedResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                model.variables.sortedResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
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


            onSearch$Action(searchedItemArgIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSearch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSearch");
                        span.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f");
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
        Controller.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars", [{
            name: "SearchedItemArg",
            attrName: "searchedItemArgInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult", [{
            name: "FilteredResidenceList",
            attrName: "filteredResidenceListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult", [{
            name: "SortedResidenceList",
            attrName: "sortedResidenceListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller.OnSearch.SearchCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceListResponse = JSON.parse($parameters.ResidenceList ?? JSON.stringify({}));


        const filteredResidenceListResponse = JSON.stringify({
            ...residenceListResponse,
            residence_list: residenceListResponse.filter(country => country["text"].toLowerCase().includes($parameters.SearchedResidence.toLowerCase()))
        });

        $parameters.FilteredResidenceList = filteredResidenceListResponse
    };
});

define("tradershub.Common.CountryOfTaxResidenceSelector.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceList = JSON.parse($parameters.ResidenceList)

        residenceList.sort((a, _) => (a.value === $parameters.CurrentResidence && a.disabled !== "DISABLED" ? -1 : 1))

        $parameters.SortedResidenceList = JSON.stringify({
            residence_list: residenceList
        })
    };
});