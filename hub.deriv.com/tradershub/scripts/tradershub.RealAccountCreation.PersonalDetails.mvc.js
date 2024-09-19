define("tradershub.RealAccountCreation.PersonalDetails.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                DesktopForm: OS.Model.ValidationWidgetRecord,
                Input_FirstName: OS.Model.ValidationWidgetRecord,
                Input_LastName: OS.Model.ValidationWidgetRecord,
                Input_Date: OS.Model.ValidationWidgetRecord
            };
        }

    }

    class Model extends
    OS.Model.VariablelessViewModel {
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

define("tradershub.RealAccountCreation.PersonalDetails.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.PersonalDetails.mvc$model", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.mvc$view", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreation_PersonalDetails_mvc_model, tradershub_RealAccountCreation_PersonalDetails_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetails",
                functionKey: "1fc65b5f-a963-48e3-a979-461b18005b67",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetails.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_PersonalDetails_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_PersonalDetails_mvc_controller;
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


            return "Personal details | Deriv";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_RealAccountCreationLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Title: "Personal details"
                },
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
                            style: "full-width personal-details-section__desktop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "background-color: #E5F5FC; border-radius: 4px; height: 54px; padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "BlueContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                marginLeft: "7px"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: ["Enter your "],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: ["name"],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [" and "],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: ["date of birth"],
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [" exactly as it appears on your identity document."],
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FirstName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_FirstName",
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["First (and middle) name"],
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your first (and middle) name",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupFirstName(), function(value) {
                                tradershubClientVariables.setRealSignupFirstName(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_FirstName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LastName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_LastName",
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Last name"],
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your last name",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupLastName(), function(value) {
                                tradershubClientVariables.setRealSignupLastName(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_LastName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Birthdate"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Date",
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Date of birth"],
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "input-flatpickr position-relative",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("DesktopForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 0,
                            prompt: "dd/mm/yyyy",
                            style: "form-control input_dateofbirth",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupDateofBirth(), function(value) {
                                tradershubClientVariables.setRealSignupDateofBirth(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Date"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.iconOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "right: 16px; top: 12px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                            style: "position-absolute cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex align-items-center justify-content-center flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.namedob2.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            gridProperties: {
                                width: "100px"
                            },
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("DesktopForm"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next"))))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width personal-details-section__mobile",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_RealAccountCreationBlocks_PersonalDetailsMobile_mvc_view, {
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
                                uuid: "34",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupDateofBirth()), asPrimitiveValue(tradershubClientVariables.getRealSignupLastName()), asPrimitiveValue(tradershubClientVariables.getRealSignupFirstName())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.IconOnClick.OpenDatePickerJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.OnReady.InitializeFlatpickrJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.RudderStackJS", "tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.ValidateJS", "tradershub.model$ST_3a6e5c84ccd1db0dd256408ff639cec5Structure", "tradershub.model$ST_89997516e5fa7eccf341304acb63651bStructure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_IconOnClick_OpenDatePickerJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_OnReady_InitializeFlatpickrJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_RudderStackJS, tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {
                    datePickerOnSelected$Action: function(selectedDateTimeIn) {
                        selectedDateTimeIn = (selectedDateTimeIn === undefined) ? "" : selectedDateTimeIn;
                        return controller.executeActionInsideJSNode(controller._datePickerOnSelected$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(selectedDateTimeIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "DatePickerOnSelected");
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
            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // RealSignupDateofBirth = If
                                tradershubClientVariables.setRealSignupDateofBirth((((vars.value.selectedDateTimeInLocal === OS.BuiltinFunctions.nullTextIdentifier())) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (vars.value.selectedDateTimeInLocal)));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__datePickerOnSelected$Action;
            }
            set _datePickerOnSelected$Action(value) {
                this.__datePickerOnSelected$Action = value;
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
                                span.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // RealSignupCurrentStep = 2
                                tradershubClientVariables.setRealSignupCurrentStep(2);
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

            get _iconOnClick$Action() {
                if (!(this.hasOwnProperty("__iconOnClick$Action"))) {
                    this.__iconOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("IconOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "IconOnClick");
                                span.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("IconOnClick");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("OpenDatePicker", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "OpenDatePicker");
                                        span.setAttribute("outsystems.function.key", "7f0a9091-99eb-4d34-98d5-2345c0378e1e");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_IconOnClick_OpenDatePickerJS, "OpenDatePicker", "IconOnClick", null, function($parameters) {}, {}, {});
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

                return this.__iconOnClick$Action;
            }
            set _iconOnClick$Action(value) {
                this.__iconOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("InitializeFlatpickr", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "InitializeFlatpickr");
                                        span.setAttribute("outsystems.function.key", "702dfc7d-f688-453f-af2d-4047eddd24c6");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_OnReady_InitializeFlatpickrJS, "InitializeFlatpickr", "OnReady", {
                                            Date: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {
                                            DatePickerOnSelected: controller.clientActionProxies.datePickerOnSelected$Action
                                        }, {});
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "d6e47b07-5527-488c-956b-6461b8200a89");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                            FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                            LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.SaveOnClick$validateJSResult"))();
                                            jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidationError
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_89997516e5fa7eccf341304acb63651bStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_3a6e5c84ccd1db0dd256408ff639cec5Structure, false);
                                // Input_Date.Valid = JSONDeserializePersonalDetailsValidFields.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_Date")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.dateOfBirthAttr;
                                // Input_Date.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_Date")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.dateOfBirthAttr;
                                // Input_FirstName.Valid = JSONDeserializePersonalDetailsValidFields.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.firstNameAttr;
                                // Input_FirstName.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.firstNameAttr;
                                // Input_LastName.Valid = JSONDeserializePersonalDetailsValidFields.Data.LastName
                                model.widgets.get(idService.getId("Input_LastName")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.lastNameAttr;
                                // Input_LastName.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.LastName
                                model.widgets.get(idService.getId("Input_LastName")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.lastNameAttr;
                                // Input_FirstName.Valid = JSONDeserializePersonalDetailsValidFields.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.firstNameAttr;
                                // Input_FirstName.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.FirstName
                                model.widgets.get(idService.getId("Input_FirstName")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.firstNameAttr;
                                if ((model.widgets.get(idService.getId("DesktopForm")).validAttr)) {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "532db969-8e06-4e6a-b559-11bf23ccad06");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreation_PersonalDetails_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // RealSignupCurrentStep = 3
                                    tradershubClientVariables.setRealSignupCurrentStep(3);
                                    if ((tradershubClientVariables.getRealSignupIsIDVSupported())) {
                                        // Destination: /tradershub/IdentityVerification
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "identity-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        // Destination: /tradershub/EmploymentDetails
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    }

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


            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._datePickerOnSelected$Action, callContext, selectedDateTimeIn);
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
                        span.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88");
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

            iconOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("IconOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "IconOnClick");
                        span.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._iconOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20");
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

            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb");
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
                        return tradershub_RealAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.SaveOnClick$validateJSResult", [{
            name: "ValidationErrors",
            attrName: "validationErrorsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.IconOnClick.OpenDatePickerJS", [], function() {
    return function($actions, $roles, $public) {
        if (window.fp && window.fp.open) {
            !fp.isOpen && fp.open()
        }
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.OnReady.InitializeFlatpickrJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Create a new Date object for the current date
        var currentDate = new Date();

        // Subtract 18 years from the current date
        currentDate.setFullYear(currentDate.getFullYear() - 18);

        function formatDate(date) {
            // Extract the day, month, and year from the date object
            let day = date.getDate();
            let month = date.getMonth() + 1; // Months are zero-based in JavaScript
            let year = date.getFullYear();

            // Add leading zero to day and month if needed
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            // Format the date in dd/mm/yyyy
            return day + '/' + month + '/' + year;
        }

        if (flatpickr && document.getElementsByClassName("input_dateofbirth").length) {
            window.fp = flatpickr(".input-flatpickr", {
                disableMobile: "true",
                yearSelectorType: "select",
                maxDate: currentDate.toISOString(),
                positionElement: document.getElementsByClassName("input_dateofbirth")[0],
                dateFormat: "d/m/Y",
                altFormat: "d/m/Y",
                defaultDate: $parameters.Date,
                onChange: function(selectedDate) {
                    $actions.DatePickerOnSelected(formatDate(selectedDate[0]))
                }
            });
        }
    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_real_account_signup_form", {
            action: "step_passed",
            step_num: 1,
            step_codename: "personal_details",
            form_name: "real_account_signup_form_outsystems"
        });

    };
});

define("tradershub.RealAccountCreation.PersonalDetails.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            FirstName: $parameters.FirstName,
            LastName: $parameters.LastName,
            DateOfBirth: $parameters.DateOfBirth
        }

        // Calculate the date 18 years ago from today
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        const validationSchema = yup.object().shape({
            FirstName: yup.string()
                .noConsecutiveSpaces('First name must not contain consecutive spaces.')
                .validCharacters('First name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'First name must be at most 50 characters long.')
                .required('First (and middle) name is required.'),
            LastName: yup.string()
                .noConsecutiveSpaces('Last name must not contain consecutive spaces.')
                .validCharacters('Last name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Last name must be at most 50 characters long.')
                .required('Last name is required.'),
            DateOfBirth: yup.string().required('Date of birth is required.').trim().matches(
                /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                'Date of birth must be in the dd/mm/yyyy format.'
            ).test('is-18-years-old', 'You must be at least 18 years old.', function(value) {
                if (!value) return false;
                const [day, month, year] = value.split('/').map(Number);
                const date = new Date(year, month - 1, day);
                return date <= eighteenYearsAgo;
            }),
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});