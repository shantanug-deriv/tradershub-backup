define("OutSystemsUI.Interaction.DropdownSearch.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "OutSystemsUI.controller$DropdownDestroy", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$DropdownCreate", "OutSystemsUI.controller$DropdownInitialize", "OutSystemsUI.controller$DropdownChangeTextProperty", "OutSystemsUI.controller$DropdownChangeBooleanProperty", "OutSystemsUI.controller$DropdownRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure());
                    }, false, OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure),
                    this.attr("NoOptionsText_Default", "noOptionsText_DefaultVar", "NoOptionsText_Default", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, false),
                    this.attr("NoResultsText_Default", "noResultsText_DefaultVar", "NoResultsText_Default", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, false),
                    this.attr("Prompt_Default", "prompt_DefaultVar", "Prompt_Default", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Select...";
                    }, false),
                    this.attr("SearchPrompt_Default", "searchPrompt_DefaultVar", "SearchPrompt_Default", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Search...";
                    }, false),
                    this.attr("OptionsList", "optionsListIn", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, false, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("StartingSelection", "startingSelectionIn", "StartingSelection", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, false, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Prompt", "promptIn", "Prompt", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Select...";
                    }, false),
                    this.attr("_promptInDataFetchStatus", "_promptInDataFetchStatus", "_promptInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure());
                    }, false, OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure),
                    this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return false;
        }
        setInputs(inputs) {
            if ("OptionsList" in inputs) {
                this.variables.optionsListIn = inputs.OptionsList;
                if ("_optionsListInDataFetchStatus" in inputs) {
                    this.variables._optionsListInDataFetchStatus = inputs._optionsListInDataFetchStatus;
                }

            }

            if ("StartingSelection" in inputs) {
                this.variables.startingSelectionIn = inputs.StartingSelection;
                if ("_startingSelectionInDataFetchStatus" in inputs) {
                    this.variables._startingSelectionInDataFetchStatus = inputs._startingSelectionInDataFetchStatus;
                }

            }

            if ("Prompt" in inputs) {
                this.variables.promptIn = inputs.Prompt;
                if ("_promptInDataFetchStatus" in inputs) {
                    this.variables._promptInDataFetchStatus = inputs._promptInDataFetchStatus;
                }

            }

            if ("OptionalConfigs" in inputs) {
                this.variables.optionalConfigsIn = inputs.OptionalConfigs;
                if ("_optionalConfigsInDataFetchStatus" in inputs) {
                    this.variables._optionalConfigsInDataFetchStatus = inputs._optionalConfigsInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Interaction.DropdownSearch.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$model", "OutSystemsUI.Interaction.DropdownSearch.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "OutSystemsUI.controller$DropdownDestroy", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$DropdownCreate", "OutSystemsUI.controller$DropdownInitialize", "OutSystemsUI.controller$DropdownChangeTextProperty", "OutSystemsUI.controller$DropdownChangeBooleanProperty", "OutSystemsUI.controller$DropdownRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_DropdownSearch_mvc_model, OutSystemsUI_Interaction_DropdownSearch_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Interaction.DropdownSearch";
        }

        static getAttributes() {
            return {
                codeFunction: "DropdownSearch",
                functionKey: "b808428c-a355-4da5-ae16-6203477cd31c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.Virtualselect.js", "scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Interaction_DropdownSearch_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_DropdownSearch_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        name: model.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-dropdown-search",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "DropdownSearch"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.DropdownSearch.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.DropdownSearch.mvc$translationsResources", "OutSystemsUI.Interaction.DropdownSearch.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "OutSystemsUI.controller$DropdownDestroy", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$DropdownCreate", "OutSystemsUI.controller$DropdownInitialize", "OutSystemsUI.controller$DropdownChangeTextProperty", "OutSystemsUI.controller$DropdownChangeBooleanProperty", "OutSystemsUI.controller$DropdownRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_DropdownSearch_mvc_TranslationsResources, OutSystemsUI_Interaction_DropdownSearch_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Interaction_DropdownSearch_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    initializedHandler$Action: function(dropdownSearchIdIn) {
                        dropdownSearchIdIn = (dropdownSearchIdIn === undefined) ? "" : dropdownSearchIdIn;
                        return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownSearchIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "InitializedHandler");
                    },
                    onSelectHandler$Action: function(dropdownSearchIdIn, selectedOptionsJSONIn) {
                        dropdownSearchIdIn = (dropdownSearchIdIn === undefined) ? "" : dropdownSearchIdIn;
                        selectedOptionsJSONIn = (selectedOptionsJSONIn === undefined) ? "" : selectedOptionsJSONIn;
                        return controller.executeActionInsideJSNode(controller._onSelectHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownSearchIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(selectedOptionsJSONIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "OnSelectHandler");
                    }
                };
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
            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: DropdownDestroy
                                OutSystemsUIController.default.dropdownDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onDestroy$Action;
            }
            set _onDestroy$Action(value) {
                this.__onDestroy$Action = value;
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
                                span.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
                                var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // Execute Action: LogStart
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Dropdown Search", callContext);
                                // Execute Action: GenerateUniqueId
                                generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                                // Set Initial Configs
                                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                                // InternalConfigs.OptionsList = OptionsList
                                model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
                                // InternalConfigs.StartingSelection = StartingSelection
                                model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
                                // InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
                                model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
                                // InternalConfigs.Prompt = If
                                model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
                                // InternalConfigs.NoResultsText = If
                                model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
                                // InternalConfigs.SearchPrompt = If
                                model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
                                // InternalConfigs.AllowMultipleSelection = OptionalConfigs.AllowMultipleSelection
                                model.variables.internalConfigsVar.allowMultipleSelectionAttr = model.variables.optionalConfigsIn.allowMultipleSelectionAttr;
                                // InternalConfigs.ExtendedClass = ExtendedClass
                                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                // InternalConfigs.NoOptionsText = If
                                model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
                                // JSON Serialize: Serialize_configs
                                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
                                // Execute Action: DropdownCreate
                                OutSystemsUIController.default.dropdownCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.dropdownType.search, OutSystemsUIModel.staticEntities.dropdownProvider.virtualSelect, serialize_configsVar.value.jSONOut, callContext);
                                // Execute Action: RegisterCallbacks
                                controller._registerCallbacks$Action(callContext);
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
                                span.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: DropdownInitialize
                                OutSystemsUIController.default.dropdownInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                                // Execute Action: LogEnd
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Dropdown Search created", callContext);
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

            get _initializedHandler$Action() {
                if (!(this.hasOwnProperty("__initializedHandler$Action"))) {
                    this.__initializedHandler$Action = function(dropdownSearchIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("InitializedHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "InitializedHandler");
                                span.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("InitializedHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars"))());
                                vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: Initialized
                                    return controller.initialized$Action(vars.value.dropdownSearchIdInLocal, callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__initializedHandler$Action;
            }
            set _initializedHandler$Action(value) {
                this.__initializedHandler$Action = value;
            }

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                var optionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var internalConfigs_StartingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var startingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var internalConfigs_OptionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                // JSON Serialize: OptionsListJSON
                                optionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsListIn, false, false);
                                // JSON Serialize: InternalConfigs_OptionsListJSON
                                internalConfigs_OptionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.optionsListAttr, false, false);
                                // OptionsList?
                                if ((((optionsListJSONVar.value.jSONOut) !== (internalConfigs_OptionsListJSONVar.value.jSONOut)))) {
                                    // Set OptionsList
                                    // InternalConfigs.OptionsList = OptionsList
                                    model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
                                    // Execute Action: Update_OptionsList
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", optionsListJSONVar.value.jSONOut, callContext);
                                }

                                // JSON Serialize: StartingSelectionJSON
                                startingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.startingSelectionIn, false, false);
                                // JSON Serialize: InternalConfigs_StartingSelectionJSON
                                internalConfigs_StartingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.startingSelectionAttr, false, false);
                                // StartingSelection?
                                if ((((startingSelectionJSONVar.value.jSONOut) !== (internalConfigs_StartingSelectionJSONVar.value.jSONOut)))) {
                                    // InternalConfigs.StartingSelection = StartingSelection
                                    model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
                                    // Execute Action: Update_StartingSelection
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", startingSelectionJSONVar.value.jSONOut, callContext);
                                }

                                // Prompt?
                                if ((((model.variables.promptIn) !== (model.variables.internalConfigsVar.promptAttr)))) {
                                    // Set Prompt
                                    // InternalConfigs.Prompt = If
                                    model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
                                    // Execute Action: Update_Prompt
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Prompt", model.variables.internalConfigsVar.promptAttr, callContext);
                                }

                                // IsDisabled?
                                if ((((model.variables.optionalConfigsIn.isDisabledAttr) !== (model.variables.internalConfigsVar.isDisabledAttr)))) {
                                    // Set IsDisabled
                                    // InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
                                    model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
                                    // Execute Action: Update_IsDisabled
                                    OutSystemsUIController.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", model.variables.internalConfigsVar.isDisabledAttr, callContext);
                                }

                                // NoResultsText?
                                if ((((model.variables.optionalConfigsIn.noResultsTextAttr) !== (model.variables.internalConfigsVar.noResultsTextAttr)))) {
                                    // Set NoResultsText
                                    // InternalConfigs.NoResultsText = If
                                    model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
                                    // Execute Action: Update_NoResultsText
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", model.variables.internalConfigsVar.noResultsTextAttr, callContext);
                                }

                                // NoOptionsText?
                                if ((((model.variables.optionalConfigsIn.noOptionsTextAttr) !== (model.variables.internalConfigsVar.noOptionsTextAttr)))) {
                                    // Set NoOptionsText
                                    // InternalConfigs.NoOptionsText = If
                                    model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
                                    // Execute Action: Update_NoOptionsText
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", model.variables.internalConfigsVar.noOptionsTextAttr, callContext);
                                }

                                // SearchPrompt?
                                if ((((model.variables.optionalConfigsIn.searchPromptAttr) !== (model.variables.internalConfigsVar.searchPromptAttr)))) {
                                    // Set SearchPrompt
                                    // InternalConfigs.SearchPrompt = If
                                    model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
                                    // Execute Action: Update_SearchPrompt
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", model.variables.internalConfigsVar.searchPromptAttr, callContext);
                                }

                                // AllowMultipleSelection?
                                if ((((model.variables.optionalConfigsIn.allowMultipleSelectionAttr) !== (model.variables.internalConfigsVar.allowMultipleSelectionAttr)))) {
                                    // Set AllowMultipleSelection
                                    // InternalConfigs.AllowMultipleSelection = OptionalConfigs.AllowMultipleSelection
                                    model.variables.internalConfigsVar.allowMultipleSelectionAttr = model.variables.optionalConfigsIn.allowMultipleSelectionAttr;
                                    // Execute Action: Update_AllowMultipleSelection
                                    OutSystemsUIController.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", model.variables.internalConfigsVar.allowMultipleSelectionAttr, callContext);
                                }

                                // ExtendedClass?
                                if ((((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
                                    // Set ExtendedClass
                                    // InternalConfigs.ExtendedClass = ExtendedClass
                                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                    // Execute Action: Update_ExtendedClass
                                    OutSystemsUIController.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
            }

            get _onSelectHandler$Action() {
                if (!(this.hasOwnProperty("__onSelectHandler$Action"))) {
                    this.__onSelectHandler$Action = function(dropdownSearchIdIn, selectedOptionsJSONIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSelectHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSelectHandler");
                                span.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnSelectHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars"))());
                                vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
                                vars.value.selectedOptionsJSONInLocal = selectedOptionsJSONIn;
                                var jSONDeserializeDropdownOptionVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // JSON Deserialize: JSONDeserializeDropdownOption
                                    jSONDeserializeDropdownOptionVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.selectedOptionsJSONInLocal, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b, false);
                                    // Trigger Event: OnChanged
                                    return controller.onChanged$Action(vars.value.dropdownSearchIdInLocal, jSONDeserializeDropdownOptionVar.value.dataOut, callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onSelectHandler$Action;
            }
            set _onSelectHandler$Action(value) {
                this.__onSelectHandler$Action = value;
            }

            get _registerCallbacks$Action() {
                if (!(this.hasOwnProperty("__registerCallbacks$Action"))) {
                    this.__registerCallbacks$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RegisterCallbacks", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RegisterCallbacks");
                                span.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RegisterCallbacks");
                                callContext = controller.callContext(callContext);
                                var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
                                getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetCallbackHandlers");
                                        span.setAttribute("outsystems.function.key", "e042847c-74b0-49ac-b76b-1a6c2c1e5522");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Interaction_DropdownSearch_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
                                            OnSelected: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                                            Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"))();
                                            jsNodeResult.onSelectedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnSelected, OS.DataTypes.DataTypes.Object);
                                            jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
                                            return jsNodeResult;
                                        }, {
                                            InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
                                            OnSelectHandler: controller.clientActionProxies.onSelectHandler$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: RegisterOnSelected
                                OutSystemsUIController.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.onSelected, getCallbackHandlersJSResult.value.onSelectedOut, callContext);
                                // Execute Action: RegisterOnInitialize
                                OutSystemsUIController.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__registerCallbacks$Action;
            }
            set _registerCallbacks$Action(value) {
                this.__registerCallbacks$Action = value;
            }


            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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
                        span.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

            initializedHandler$Action(dropdownSearchIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("InitializedHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializedHandler");
                        span.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, dropdownSearchIdIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onSelectHandler$Action(dropdownSearchIdIn, selectedOptionsJSONIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSelectHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSelectHandler");
                        span.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onSelectHandler$Action, callContext, dropdownSearchIdIn, selectedOptionsJSONIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            registerCallbacks$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RegisterCallbacks");
                        span.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get initialized$Action() {
                if (!(this.hasOwnProperty("_initialized$Action"))) {
                    this._initialized$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._initialized$Action;
            }
            set initialized$Action(value) {
                this._initialized$Action = value;
            }

            get onChanged$Action() {
                if (!(this.hasOwnProperty("_onChanged$Action"))) {
                    this._onChanged$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onChanged$Action;
            }
            set onChanged$Action(value) {
                this._onChanged$Action = value;
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
                    this._onDestroyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onDestroy$Action(callContext);

                    };
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

                        return controller.onParametersChanged$Action(callContext);

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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars", [{
            name: "DropdownSearchId",
            attrName: "dropdownSearchIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars", [{
            name: "DropdownSearchId",
            attrName: "dropdownSearchIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SelectedOptionsJSON",
            attrName: "selectedOptionsJSONInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
            name: "OnSelected",
            attrName: "onSelectedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "Initialized",
            attrName: "initializedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Interaction.DropdownSearch.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Initialized = $actions.InitializedHandler;
        $parameters.OnSelected = $actions.OnSelectHandler;
    };
});


define("OutSystemsUI.Interaction.DropdownSearch.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});