define("OutSystemsUI.Interaction.DatePicker.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "OutSystemsUI.controller$SetServerDateFormat", "OutSystemsUI.controller$SetLocalLanguage", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$DatePickerCreate", "OutSystemsUI.controller$DatePickerInitialize", "OutSystemsUI.controller$DatePickerDestroy", "OutSystemsUI.controller$DatePickerChangeIntegerProperty", "OutSystemsUI.controller$DatePickerChangeDateTimeProperty", "OutSystemsUI.controller$DatePickerChangeTextProperty", "OutSystemsUI.controller$DatePickerChangeBooleanProperty", "OutSystemsUI.controller$DatePickerRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure());
                    }, false, OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure),
                    this.attr("DateFormat", "dateFormatIn", "DateFormat", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ShowTodayButton", "showTodayButtonIn", "ShowTodayButton", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_showTodayButtonInDataFetchStatus", "_showTodayButtonInDataFetchStatus", "_showTodayButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("TimeFormat", "timeFormatIn", "TimeFormat", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.datePickerTimeFormat.disabled;
                    }, false),
                    this.attr("_timeFormatInDataFetchStatus", "_timeFormatInDataFetchStatus", "_timeFormatInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure());
                    }, false, OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure),
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
            if ("DateFormat" in inputs) {
                this.variables.dateFormatIn = inputs.DateFormat;
                if ("_dateFormatInDataFetchStatus" in inputs) {
                    this.variables._dateFormatInDataFetchStatus = inputs._dateFormatInDataFetchStatus;
                }

            }

            if ("ShowTodayButton" in inputs) {
                this.variables.showTodayButtonIn = inputs.ShowTodayButton;
                if ("_showTodayButtonInDataFetchStatus" in inputs) {
                    this.variables._showTodayButtonInDataFetchStatus = inputs._showTodayButtonInDataFetchStatus;
                }

            }

            if ("TimeFormat" in inputs) {
                this.variables.timeFormatIn = inputs.TimeFormat;
                if ("_timeFormatInDataFetchStatus" in inputs) {
                    this.variables._timeFormatInDataFetchStatus = inputs._timeFormatInDataFetchStatus;
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

define("OutSystemsUI.Interaction.DatePicker.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.DatePicker.mvc$model", "OutSystemsUI.Interaction.DatePicker.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "OutSystemsUI.controller$SetServerDateFormat", "OutSystemsUI.controller$SetLocalLanguage", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$DatePickerCreate", "OutSystemsUI.controller$DatePickerInitialize", "OutSystemsUI.controller$DatePickerDestroy", "OutSystemsUI.controller$DatePickerChangeIntegerProperty", "OutSystemsUI.controller$DatePickerChangeDateTimeProperty", "OutSystemsUI.controller$DatePickerChangeTextProperty", "OutSystemsUI.controller$DatePickerChangeBooleanProperty", "OutSystemsUI.controller$DatePickerRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_DatePicker_mvc_model, OutSystemsUI_Interaction_DatePicker_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Interaction.DatePicker";
        }

        static getAttributes() {
            return {
                codeFunction: "DatePicker",
                functionKey: "21cf54a0-37ac-4322-adf9-0b8ddc77d237",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.Flatpickr.js", "scripts/OutSystemsUI.FlatpickrLocale.js", "scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Interaction_DatePicker_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_DatePicker_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.datepicker,
                extendedProperties: {
                    name: model.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-datepicker",
                _idProps: {
                    service: idService,
                    name: "Datepicker"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "osui-datepicker-a11y wcag-hide-text",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DatepickerAccessibilityInfo"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("68bAUht9Wk2x7G84V6IC7w#Value", "Use arrow down key to open the calendar; Use arrow keys to navigate through calendar days; Use cmd or ctrl + right or left arrow keys to navigate through months; Use cmd or ctrl + up or down arrow keys to navigate through years;"))), $if(true, false, this, function() {
                return [];
            }, function() {
                return [];
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.DatePicker.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources", "OutSystemsUI.Interaction.DatePicker.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "OutSystemsUI.controller$SetServerDateFormat", "OutSystemsUI.controller$SetLocalLanguage", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$DatePickerCreate", "OutSystemsUI.controller$DatePickerInitialize", "OutSystemsUI.controller$DatePickerDestroy", "OutSystemsUI.controller$DatePickerChangeIntegerProperty", "OutSystemsUI.controller$DatePickerChangeDateTimeProperty", "OutSystemsUI.controller$DatePickerChangeTextProperty", "OutSystemsUI.controller$DatePickerChangeBooleanProperty", "OutSystemsUI.controller$DatePickerRegisterCallback"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_DatePicker_mvc_TranslationsResources, OutSystemsUI_Interaction_DatePicker_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Interaction_DatePicker_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    onChangeDateHandler$Action: function(datepickerIdIn, selectedDateIn) {
                        datepickerIdIn = (datepickerIdIn === undefined) ? "" : datepickerIdIn;
                        selectedDateIn = (selectedDateIn === undefined) ? "" : selectedDateIn;
                        return controller.executeActionInsideJSNode(controller._onChangeDateHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(datepickerIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(selectedDateIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "OnChangeDateHandler");
                    },
                    initializedHandler$Action: function(datepickerIdIn) {
                        datepickerIdIn = (datepickerIdIn === undefined) ? "" : datepickerIdIn;
                        return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(datepickerIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "InitializedHandler");
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "282ed5cb-1998-4ea9-9dfb-3eebc3e7ca43");
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
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create DatePicker", callContext);
                                // Execute Action: GenerateUniqueId
                                generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

                                // Execute Action: SetServerDateFormat2
                                OutSystemsUIController.default.setServerDateFormat$Action(callContext);
                                // Execute Action: SetLocalLanguage
                                OutSystemsUIController.default.setLocalLanguage$Action(callContext);
                                // Set Initial Configs
                                // Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
                                model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                                // Internal_Configs.DateFormat = DateFormat
                                model.variables.internal_ConfigsVar.dateFormatAttr = model.variables.dateFormatIn;
                                // Internal_Configs.InitialDate = OptionalConfigs.InitialDate
                                model.variables.internal_ConfigsVar.initialDateAttr = model.variables.optionalConfigsIn.initialDateAttr;
                                // Internal_Configs.TimeFormat = TimeFormat
                                model.variables.internal_ConfigsVar.timeFormatAttr = model.variables.timeFormatIn;
                                // Internal_Configs.ShowTodayButton = ShowTodayButton
                                model.variables.internal_ConfigsVar.showTodayButtonAttr = model.variables.showTodayButtonIn;
                                // Internal_Configs.FirstWeekDay = OptionalConfigs.FirstWeekDay
                                model.variables.internal_ConfigsVar.firstWeekDayAttr = model.variables.optionalConfigsIn.firstWeekDayAttr;
                                // Internal_Configs.MinDate = OptionalConfigs.MinDate
                                model.variables.internal_ConfigsVar.minDateAttr = model.variables.optionalConfigsIn.minDateAttr;
                                // Internal_Configs.MaxDate = OptionalConfigs.MaxDate
                                model.variables.internal_ConfigsVar.maxDateAttr = model.variables.optionalConfigsIn.maxDateAttr;
                                // Internal_Configs.ShowWeekNumbers = OptionalConfigs.ShowWeekNumbers
                                model.variables.internal_ConfigsVar.showWeekNumbersAttr = model.variables.optionalConfigsIn.showWeekNumbersAttr;
                                // Internal_Configs.ExtendedClass = ExtendedClass
                                model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                if ((!(((model.variables.timeFormatIn) !== (OutSystemsUIModel.staticEntities.datePickerTimeFormat.disabled))))) {
                                    // Internal_Configs.InitialDate = DateTimeToDate
                                    model.variables.internal_ConfigsVar.initialDateAttr = OS.BuiltinFunctions.dateTimeToDate(model.variables.optionalConfigsIn.initialDateAttr);
                                    // Internal_Configs.MinDate = DateTimeToDate
                                    model.variables.internal_ConfigsVar.minDateAttr = OS.BuiltinFunctions.dateTimeToDate(model.variables.optionalConfigsIn.minDateAttr);
                                    // Internal_Configs.MaxDate = DateTimeToDate
                                    model.variables.internal_ConfigsVar.maxDateAttr = OS.BuiltinFunctions.dateTimeToDate(model.variables.optionalConfigsIn.maxDateAttr);
                                }

                                // JSON Serialize: Serialize_configs
                                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internal_ConfigsVar, true, false);
                                // Execute Action: DatePickerCreate
                                OutSystemsUIController.default.datePickerCreate$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, OutSystemsUIModel.staticEntities.datePickerCalendarType.single, OutSystemsUIModel.staticEntities.datePickerProvider.flatpickr, callContext);
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
                                span.setAttribute("outsystems.function.key", "509766f4-8b13-470f-a252-1a6e8cc4e085");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: DatePickerInitialize
                                OutSystemsUIController.default.datePickerInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
                                // Execute Action: LogEnd
                                OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "DatePicker created", callContext);
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

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "65299253-a347-4e02-8f7f-b50ec5fa92dc");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: DatePickerDestroy
                                OutSystemsUIController.default.datePickerDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
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

            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "71acdb81-17dd-4977-a11a-b17b0aca3920");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                // InitialDate?
                                if ((!(model.variables.optionalConfigsIn.initialDateAttr.equals(model.variables.internal_ConfigsVar.initialDateAttr)))) {
                                    // Set InitialDate
                                    // Internal_Configs.InitialDate = OptionalConfigs.InitialDate
                                    model.variables.internal_ConfigsVar.initialDateAttr = model.variables.optionalConfigsIn.initialDateAttr;
                                    // Execute Action: Update_InitialDate
                                    OutSystemsUIController.default.datePickerChangeDateTimeProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "InitialDate", model.variables.internal_ConfigsVar.initialDateAttr, callContext);
                                }

                                // MinDate?
                                if ((!(model.variables.optionalConfigsIn.minDateAttr.equals(model.variables.internal_ConfigsVar.minDateAttr)))) {
                                    // Set MinDate
                                    // Internal_Configs.MinDate = OptionalConfigs.MinDate
                                    model.variables.internal_ConfigsVar.minDateAttr = model.variables.optionalConfigsIn.minDateAttr;
                                    // Execute Action: Update_MinDate
                                    OutSystemsUIController.default.datePickerChangeDateTimeProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "MinDate", model.variables.internal_ConfigsVar.minDateAttr, callContext);
                                }

                                // MaxDate?
                                if ((!(model.variables.optionalConfigsIn.maxDateAttr.equals(model.variables.internal_ConfigsVar.maxDateAttr)))) {
                                    // Set MaxDate
                                    // Internal_Configs.MaxDate = OptionalConfigs.MaxDate
                                    model.variables.internal_ConfigsVar.maxDateAttr = model.variables.optionalConfigsIn.maxDateAttr;
                                    // Execute Action: Update_MaxDate
                                    OutSystemsUIController.default.datePickerChangeDateTimeProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "MaxDate", model.variables.internal_ConfigsVar.maxDateAttr, callContext);
                                }

                                // InputDateFormat?
                                if ((((model.variables.dateFormatIn) !== (model.variables.internal_ConfigsVar.dateFormatAttr)))) {
                                    // Set InputDateFormat
                                    // Internal_Configs.DateFormat = DateFormat
                                    model.variables.internal_ConfigsVar.dateFormatAttr = model.variables.dateFormatIn;
                                    // Execute Action: Update_DateFormat
                                    OutSystemsUIController.default.datePickerChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "DateFormat", model.variables.internal_ConfigsVar.dateFormatAttr, callContext);
                                }

                                // TimeFormat?
                                if ((((model.variables.timeFormatIn) !== (model.variables.internal_ConfigsVar.timeFormatAttr)))) {
                                    // Set TimeFormat
                                    // Internal_Configs.TimeFormat = TimeFormat
                                    model.variables.internal_ConfigsVar.timeFormatAttr = model.variables.timeFormatIn;
                                    // Execute Action: Update_TimeFormat
                                    OutSystemsUIController.default.datePickerChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "TimeFormat", model.variables.internal_ConfigsVar.timeFormatAttr, callContext);
                                }

                                // ShowTodayButton?
                                if ((((model.variables.showTodayButtonIn) !== (model.variables.internal_ConfigsVar.showTodayButtonAttr)))) {
                                    // Set ShowTodayButton
                                    // Internal_Configs.ShowTodayButton = ShowTodayButton
                                    model.variables.internal_ConfigsVar.showTodayButtonAttr = model.variables.showTodayButtonIn;
                                    // Execute Action: Update_ShowTodayButton
                                    OutSystemsUIController.default.datePickerChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ShowTodayButton", model.variables.internal_ConfigsVar.showTodayButtonAttr, callContext);
                                }

                                // FirstWeekDay?
                                if ((((model.variables.optionalConfigsIn.firstWeekDayAttr) !== (model.variables.internal_ConfigsVar.firstWeekDayAttr)))) {
                                    // Set FirstWeekDay
                                    // Internal_Configs.FirstWeekDay = OptionalConfigs.FirstWeekDay
                                    model.variables.internal_ConfigsVar.firstWeekDayAttr = model.variables.optionalConfigsIn.firstWeekDayAttr;
                                    // Execute Action: Update_FirstWeekDay
                                    OutSystemsUIController.default.datePickerChangeIntegerProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "FirstWeekDay", OS.BuiltinFunctions.integerToLongInteger(model.variables.internal_ConfigsVar.firstWeekDayAttr), callContext);
                                }

                                // ShowWeekNumbers?
                                if ((((model.variables.optionalConfigsIn.showWeekNumbersAttr) !== (model.variables.internal_ConfigsVar.showWeekNumbersAttr)))) {
                                    // Set ShowWeekNumbers
                                    // Internal_Configs.ShowWeekNumbers = OptionalConfigs.ShowWeekNumbers
                                    model.variables.internal_ConfigsVar.showWeekNumbersAttr = model.variables.optionalConfigsIn.showWeekNumbersAttr;
                                    // Execute Action: Update_ShowWeekNumbers
                                    OutSystemsUIController.default.datePickerChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ShowWeekNumbers", model.variables.internal_ConfigsVar.showWeekNumbersAttr, callContext);
                                }

                                // ExtendedClass?
                                if ((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
                                    // Set ExtendedClass
                                    // Internal_Configs.ExtendedClass = ExtendedClass
                                    model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                                    // Execute Action: Update_ExtendedClass
                                    OutSystemsUIController.default.datePickerChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
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

            get _initializedHandler$Action() {
                if (!(this.hasOwnProperty("__initializedHandler$Action"))) {
                    this.__initializedHandler$Action = function(datepickerIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("InitializedHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "InitializedHandler");
                                span.setAttribute("outsystems.function.key", "84a573e6-39ed-44fb-b867-927d30247b00");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("InitializedHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.InitializedHandler$vars"))());
                                vars.value.datepickerIdInLocal = datepickerIdIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: Initialized
                                    return controller.initialized$Action(vars.value.datepickerIdInLocal, callContext);
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

            get _onChangeDateHandler$Action() {
                if (!(this.hasOwnProperty("__onChangeDateHandler$Action"))) {
                    this.__onChangeDateHandler$Action = function(datepickerIdIn, selectedDateIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnChangeDateHandler", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnChangeDateHandler");
                                span.setAttribute("outsystems.function.key", "ebbac88b-1a19-43db-a66d-612813380efe");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnChangeDateHandler");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.OnChangeDateHandler$vars"))());
                                vars.value.datepickerIdInLocal = datepickerIdIn;
                                vars.value.selectedDateInLocal = selectedDateIn;
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: OnSelected
                                    return controller.onSelected$Action(vars.value.datepickerIdInLocal, OS.BuiltinFunctions.textToDateTime(vars.value.selectedDateInLocal), callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onChangeDateHandler$Action;
            }
            set _onChangeDateHandler$Action(value) {
                this.__onChangeDateHandler$Action = value;
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
                                span.setAttribute("outsystems.function.key", "fef1b6c3-ea51-46c3-a116-0f43c5f6d730");
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
                                        span.setAttribute("outsystems.function.key", "7adc8c68-c78b-47da-9055-ec889687ad27");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Interaction_DatePicker_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
                                            OnChange: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                                            OnInitialize: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.RegisterCallbacks$getCallbackHandlersJSResult"))();
                                            jsNodeResult.onChangeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnChange, OS.DataTypes.DataTypes.Object);
                                            jsNodeResult.onInitializeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnInitialize, OS.DataTypes.DataTypes.Object);
                                            return jsNodeResult;
                                        }, {
                                            OnChangeDateHandler: controller.clientActionProxies.onChangeDateHandler$Action,
                                            InitializedHandler: controller.clientActionProxies.initializedHandler$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: RegisterOnChange
                                OutSystemsUIController.default.datePickerRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.onChange, getCallbackHandlersJSResult.value.onChangeOut, callContext);
                                // Execute Action: RegisterOnInitialize
                                OutSystemsUIController.default.datePickerRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.onInitializeOut, callContext);
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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "282ed5cb-1998-4ea9-9dfb-3eebc3e7ca43");
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
                        span.setAttribute("outsystems.function.key", "509766f4-8b13-470f-a252-1a6e8cc4e085");
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

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "65299253-a347-4e02-8f7f-b50ec5fa92dc");
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

            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "71acdb81-17dd-4977-a11a-b17b0aca3920");
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

            initializedHandler$Action(datepickerIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("InitializedHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializedHandler");
                        span.setAttribute("outsystems.function.key", "84a573e6-39ed-44fb-b867-927d30247b00");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, datepickerIdIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onChangeDateHandler$Action(datepickerIdIn, selectedDateIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnChangeDateHandler__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnChangeDateHandler");
                        span.setAttribute("outsystems.function.key", "ebbac88b-1a19-43db-a66d-612813380efe");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onChangeDateHandler$Action, callContext, datepickerIdIn, selectedDateIn);
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
                        span.setAttribute("outsystems.function.key", "fef1b6c3-ea51-46c3-a116-0f43c5f6d730");
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

            get onSelected$Action() {
                if (!(this.hasOwnProperty("_onSelected$Action"))) {
                    this._onSelected$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onSelected$Action;
            }
            set onSelected$Action(value) {
                this._onSelected$Action = value;
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
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.InitializedHandler$vars", [{
            name: "DatepickerId",
            attrName: "datepickerIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.OnChangeDateHandler$vars", [{
            name: "DatepickerId",
            attrName: "datepickerIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SelectedDate",
            attrName: "selectedDateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.RegisterCallbacks$getCallbackHandlersJSResult", [{
            name: "OnChange",
            attrName: "onChangeOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "OnInitialize",
            attrName: "onInitializeOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Interaction.DatePicker.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.OnChange = $actions.OnChangeDateHandler;
        $parameters.OnInitialize = $actions.InitializedHandler;
    };
});


define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ar", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "استخدم مفتاح السهم للأسفل لفتح التقويم؛ استخدم مفاتيح الأسهم للتنقل في أيام التقويم؛ استخدم مفاتيح cmd أو ctrl + الأسهم اليمين أو اليسار للتنقل في الشهور؛ استخدم مفاتيح cmd أو ctrl + الأسهم للأعلى أو للأسفل للتنقل في السنوات؛"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.de-DE", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Verwenden Sie die Pfeiltaste nach unten, um den Kalender zu öffnen; Verwenden Sie die Pfeiltasten, um durch die Kalendertage zu navigieren; Verwenden Sie die Tasten cmd oder Strg + rechte oder linke Pfeiltasten, um durch die Monate zu navigieren; Verwenden Sie die Tasten cmd oder Strg + Pfeiltasten nach oben oder unten, um durch die Jahre zu navigieren;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.en", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use arrow down key to open the calendar; Use arrow keys to navigate through calendar days; Use cmd or ctrl + right or left arrow keys to navigate through months; Use cmd or ctrl + up or down arrow keys to navigate through years;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.es", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Usa la tecla de flecha hacia abajo para abrir el calendario; Usa las teclas de flecha para navegar por los días del calendario; Usa las teclas cmd o ctrl + flechas derecha o izquierda para navegar por los meses; Usa las teclas cmd o ctrl + flecha arriba o abajo para navegar por los años;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.fr-CA", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Utilisez la touche de flèche vers le bas pour ouvrir le calendrier ; Utilisez les touches de flèche pour naviguer dans les jours du calendrier ; Utilisez les touches cmd ou ctrl + flèches droite ou gauche pour naviguer dans les mois ; Utilisez les touches cmd ou ctrl + flèche vers le haut ou vers le bas pour naviguer dans les années;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.fr-FR", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Utilisez la touche flèche vers le bas pour ouvrir le calendrier ; Utilisez les touches flèches pour naviguer dans les jours du calendrier ; Utilisez les touches cmd ou ctrl + flèches de droite ou de gauche pour naviguer dans les mois ; Utilisez les touches cmd ou ctrl + flèche vers le haut ou vers le bas pour naviguer dans les années;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.hi-IN", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "कैलेंडर खोलने के लिए नीचे वाली तीर कुंजी दबाएं ;कैलेंडर के प्रतिदिनांक को  नेविगेट करने के लिए तीर कुंजियों का उपयोग करें ; महीनों को  नेविगेट करने के लिए Cmd या Ctrl + दाएँ या बाएँ तीर कुंजियों का उपयोग करें; वर्षों में नेविगेट करने के लिए cmd या Ctrl + ऊपर या नीचे तीर कुंजियों का उपयोग करें;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.it-IT", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Usa il tasto freccia giù per aprire il calendario; Usa le frecce per navigare tra i giorni del calendario; Usa i tasti cmd o ctrl + frecce destra o sinistra per navigare tra i mesi; Usa i tasti cmd o ctrl + frecce su o giù per navigare tra gli anni;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ja-JP", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "カレンダーを開くには下矢印キーを使用してください。カレンダーの日付を移動するには矢印キーを使用してください。月を移動するには cmd キーまたは ctrl キー + 右矢印キーまたは左矢印キーを使用してください。年を移動するには cmd キーまたは ctrl キー + 上下矢印キーを使用してください。"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ko-KR", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "달력을 열려면 아래 화살표 키를 사용하세요. 달력 날짜를 탐색하려면 화살키를 사용하세요. 월을 탐색하려면 cmd 키 또는 ctrl 키 + 오른쪽 또는 왼쪽 화살표 키를 사용하세요. 연도를 탐색하려면 cmd 키 또는 ctrl 키 + 위아래 화살표 키를 사용하세요."
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.nl", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Gebruik de pijltjestoets omlaag om de kalender te openen; Gebruik de pijltjestoetsen om door de kalenderdagen te navigeren; Gebruik cmd of ctrl + rechter of linker pijltjestoetsen om door de maanden te navigeren; Gebruik cmd of ctrl + omhoog of omlaag pijltjestoetsen om door de jaren te navigeren;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.pt", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use a tecla de seta para baixo para abrir o calendário; Use as teclas de seta para navegar pelos dias do calendário; Use as teclas cmd ou ctrl + setas direita ou esquerda para navegar pelos meses; Use as teclas cmd ou ctrl + seta para cima ou para baixo para navegar pelos anos;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.pt-BR", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use a tecla de seta para baixo para abrir o calendário; Use as teclas de seta para navegar pelos dias do calendário; Use as teclas cmd ou ctrl + setas direita ou esquerda para navegar pelos meses; Use as teclas cmd ou ctrl + seta para cima ou para baixo para navegar pelos anos;"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-CN", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "使用向下箭头键打开日历；使用箭头键浏览日历日期；使用 cmd 键或 ctrl 键 + 右箭头键或左箭头键浏览月份；使用 cmd 键或 ctrl 键 + 向上或向下箭头键浏览年份；"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-Hans", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "使用向下箭头键打开日历；使用箭头键浏览日历日期；使用 cmd 键或 ctrl 键 + 右箭头键或左箭头键浏览月份；使用 cmd 键或 ctrl 键 + 向上或向下箭头键浏览年份；"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-Hant", [], function() {
    return {
        "68bAUht9Wk2x7G84V6IC7w#Value": "使用向下箭頭鍵開啟日曆；使用箭頭鍵瀏覽日曆日期；使用 cmd 鍵或 ctrl 鍵 + 右箭頭鍵或左箭頭鍵瀏覽月份；使用 cmd 鍵或 ctrl 鍵 + 向上或向下箭頭鍵瀏覽年份；"
    };
});

define("OutSystemsUI.Interaction.DatePicker.mvc$translationsResources", ["exports", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ar", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.de-DE", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.en", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.es", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.fr-CA", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.fr-FR", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.hi-IN", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.it-IT", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ja-JP", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.ko-KR", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.nl", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.pt", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.pt-BR", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-CN", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-Hans", "OutSystemsUI.Interaction.DatePicker.mvc$translationsResources.zh-Hant"], function(exports, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_ar, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_deDE, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_en, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_es, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_frCA, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_frFR, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_hiIN, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_itIT, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_jaJP, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_koKR, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_nl, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_pt, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_ptBR, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhCN, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhHans, OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhHant) {
    return {
        "ar": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_ar,
            "isRTL": true
        },
        "de-DE": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "en": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_en,
            "isRTL": false
        },
        "es": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_es,
            "isRTL": false
        },
        "fr-CA": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_frCA,
            "isRTL": false
        },
        "fr-FR": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "hi-IN": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_hiIN,
            "isRTL": false
        },
        "it-IT": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "ja-JP": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_jaJP,
            "isRTL": false
        },
        "ko-KR": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_koKR,
            "isRTL": false
        },
        "nl": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_nl,
            "isRTL": false
        },
        "pt": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_pt,
            "isRTL": false
        },
        "pt-BR": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_ptBR,
            "isRTL": false
        },
        "zh-CN": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhCN,
            "isRTL": false
        },
        "zh-Hans": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhHans,
            "isRTL": false
        },
        "zh-Hant": {
            "translations": OutSystemsUI_Interaction_DatePicker_mvc_translationsResources_zhHant,
            "isRTL": false
        }
    };
});