define("tradershub.RealAccountCreation.AddressDetails.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "tradershub.controller", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure", "tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure", "tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StateList", "stateListVar", "StateList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db());
                    }, false, tradershubModel.RL_f8f18d18d5de26fb445609e3f88624db)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    stateListVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                AddressForm: OS.Model.ValidationWidgetRecord,
                Input_Address: OS.Model.ValidationWidgetRecord,
                Input_Town: OS.Model.ValidationWidgetRecord,
                Input_PostCode: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreation.AddressDetails.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.AddressDetails.mvc$model", "tradershub.RealAccountCreation.AddressDetails.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure", "tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure", "tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreation_AddressDetails_mvc_model, tradershub_RealAccountCreation_AddressDetails_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_DropdownSearch_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AddressDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "AddressDetails",
                functionKey: "c192c1c8-435d-4216-9380-1178631fcbe3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.AddressDetails.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_AddressDetails_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_AddressDetails_mvc_controller;
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


            return "Address details | Deriv";
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
                    Title: "Address details"
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
                        return [React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: idService,
                                name: "AddressForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AddressContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Address",
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px; margin-bottom: 0px;"
                            },
                            text: ["Address"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("AddressForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 70,
                            prompt: "Enter your address",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupAddress(), function(value) {
                                tradershubClientVariables.setRealSignupAddress(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Address"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 0px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TownContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Town",
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px;"
                            },
                            text: ["Town/City"],
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("AddressForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your town/city",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupAddressTown(), function(value) {
                                tradershubClientVariables.setRealSignupAddressTown(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Town"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 0px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "StateContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            targetWidget: "Input_PostCode",
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #4F575E;"
                            },
                            text: ["State/Province"],
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OutSystemsUI_Interaction_DropdownSearch_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Prompt: "Select your state/province",
                                StartingSelection: model.getCachedValue(idService.getId("Kl2O0Uukbkm8F27POdRd6Q.StartingSelection"), function() {
                                    return function() {
                                        var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
                                        list.pushAll([function() {
                                            var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
                                            rec.valueAttr = tradershubClientVariables.getRealSignupAddressState();
                                            rec.labelAttr = tradershubClientVariables.getRealSignupAddressStateLabel();
                                            return rec;
                                        }()]);
                                        return list;
                                    }();
                                }, function() {
                                    return tradershubClientVariables.getRealSignupAddressState();
                                }, function() {
                                    return tradershubClientVariables.getRealSignupAddressStateLabel();
                                }),
                                OptionsList: model.getCachedValue(idService.getId("Kl2O0Uukbkm8F27POdRd6Q.OptionsList"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.stateListVar, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                        target.valueAttr = source.valueAttr;
                                        target.labelAttr = source.textAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.stateListVar;
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onChanged$Action: function(dropdownSearchIdIn, selectedOptionListIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.dropdownSearchOnChanged$Action(selectedOptionListIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("AddressForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "14",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "PostalContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            targetWidget: "Input_PostCode",
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Postal/ZIP code"],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("AddressForm")
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: false,
                            maxLength: 50,
                            prompt: "Enter your postal/ZIP code",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupAddressPostCode(), function(value) {
                                tradershubClientVariables.setRealSignupAddressPostCode(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_PostCode"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("AddressForm"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next")))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupAddressPostCode()), asPrimitiveValue(model.variables.stateListVar), asPrimitiveValue(tradershubClientVariables.getRealSignupAddressStateLabel()), asPrimitiveValue(tradershubClientVariables.getRealSignupAddressState()), asPrimitiveValue(tradershubClientVariables.getRealSignupAddressTown()), asPrimitiveValue(tradershubClientVariables.getRealSignupAddress())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.AddressDetails.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.RudderStackJS", "tradershub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.ValidateJS", "tradershub.RealAccountCreation.AddressDetails.mvc$controller.OnReady.GenerateStatesListPayloadJS", "tradershub.RealAccountCreation.AddressDetails.mvc$controller.OnReady.JavaScript1JS", "tradershub.model$ST_27f8ec64ca98713144ae178da75c54abStructure", "tradershub.model$RL_f8f18d18d5de26fb445609e3f88624db", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure", "tradershub.model$ST_771888a7c88d31c2c35d9cb462eaf9dfStructure", "tradershub.model$ST_69d197f741008559fd9136ea6f31ca4cStructure", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$DerivApiSendMessage"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_RudderStackJS, tradershub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_ValidateJS, tradershub_RealAccountCreation_AddressDetails_mvc_controller_OnReady_GenerateStatesListPayloadJS, tradershub_RealAccountCreation_AddressDetails_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore;
    {
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
                                span.setAttribute("outsystems.function.key", "6f9e94d4-3c62-4c4f-a37c-41fb176ce39f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeAddressDetailsValidFieldVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure))());
                                var jSONDeserializeAddressDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure))());
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "6cb03280-85b0-49f1-bc16-25ed89122ab2");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "81a637db-5c06-428b-8f7f-25faab977fbf");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_AddressDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            Address: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                                            PostCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressPostCode(), OS.DataTypes.DataTypes.Text),
                                            Town: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressTown(), OS.DataTypes.DataTypes.Text),
                                            State: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressState(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult"))();
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
                                // JSON Deserialize: JSONDeserializeAddressDetailsValidationError
                                jSONDeserializeAddressDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_771888a7c88d31c2c35d9cb462eaf9dfStructure, false);
                                // JSON Deserialize: JSONDeserializeAddressDetailsValidField
                                jSONDeserializeAddressDetailsValidFieldVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_a99e5b4d6b08ee1b808de2fbce23bf4fStructure, false);
                                // Input_Address.Valid = JSONDeserializeAddressDetailsValidField.Data.Address
                                model.widgets.get(idService.getId("Input_Address")).validAttr = jSONDeserializeAddressDetailsValidFieldVar.value.dataOut.addressAttr;
                                // Input_Address.ValidationMessage = JSONDeserializeAddressDetailsValidationError.Data.Address
                                model.widgets.get(idService.getId("Input_Address")).validationMessageAttr = jSONDeserializeAddressDetailsValidationErrorVar.value.dataOut.addressAttr;
                                // Input_Town.Valid = JSONDeserializeAddressDetailsValidField.Data.Town
                                model.widgets.get(idService.getId("Input_Town")).validAttr = jSONDeserializeAddressDetailsValidFieldVar.value.dataOut.townAttr;
                                // Input_Town.ValidationMessage = JSONDeserializeAddressDetailsValidationError.Data.Town
                                model.widgets.get(idService.getId("Input_Town")).validationMessageAttr = jSONDeserializeAddressDetailsValidationErrorVar.value.dataOut.townAttr;
                                // Input_PostCode.Valid = JSONDeserializeAddressDetailsValidField.Data.PostCode
                                model.widgets.get(idService.getId("Input_PostCode")).validAttr = jSONDeserializeAddressDetailsValidFieldVar.value.dataOut.postCodeAttr;
                                // Input_PostCode.ValidationMessage = JSONDeserializeAddressDetailsValidationError.Data.PostCode
                                model.widgets.get(idService.getId("Input_PostCode")).validationMessageAttr = jSONDeserializeAddressDetailsValidationErrorVar.value.dataOut.postCodeAttr;
                                if ((model.widgets.get(idService.getId("AddressForm")).validAttr)) {
                                    // Destination: /tradershub/TermsOfUse
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "terms-of-use", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "83ae9daa-d5d3-4dbc-8353-32289f447ff2");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var jSONDeserializeStatesListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure))());
                                // RealSignupCurrentStep = If
                                tradershubClientVariables.setRealSignupCurrentStep(((tradershubClientVariables.getRealSignupIsIDVSupported()) ? (5) : (4)));
                                if ((((tradershubClientVariables.getRealSignupStateList()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                    // JSON Deserialize: JSONDeserializeStatesListResponse
                                    jSONDeserializeStatesListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRealSignupStateList(), tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure, false);
                                    // StateList = JSONDeserializeStatesListResponse.Data.States_list
                                    model.variables.stateListVar = jSONDeserializeStatesListResponseVar.value.dataOut.states_listAttr;
                                }

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

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedOptionListIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "b8756b88-cabb-44d4-8b4a-67ec03e34bbc");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
                                // RealSignupAddressState = SelectedOptionList.Current.Value
                                tradershubClientVariables.setRealSignupAddressState(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                // RealSignupAddressStateLabel = SelectedOptionList.Current.Label
                                tradershubClientVariables.setRealSignupAddressStateLabel(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).labelAttr);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dropdownSearchOnChanged$Action;
            }
            set _dropdownSearchOnChanged$Action(value) {
                this.__dropdownSearchOnChanged$Action = value;
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
                                span.setAttribute("outsystems.function.key", "c2350cf8-4bc5-446c-8649-331397ef63ae");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                                var generateStatesListPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeStatesListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendGetSetting
                                    model.flush();
                                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                                        sendGetSettingVar.value = value;
                                    }).then(function() {
                                        generateStatesListPayloadJSResult.value = OS.Logger.startActiveSpan("GenerateStatesListPayload", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "GenerateStatesListPayload");
                                                span.setAttribute("outsystems.function.key", "57f35cac-0dec-4626-b2c8-7c6c500728f1");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_RealAccountCreation_AddressDetails_mvc_controller_OnReady_GenerateStatesListPayloadJS, "GenerateStatesListPayload", "OnReady", {
                                                    CountryCode: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.country_codeAttr, OS.DataTypes.DataTypes.Text),
                                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.OnReady$generateStatesListPayloadJSResult"))();
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
                                        return tradershubController.default.derivApiSendMessage$Action(generateStatesListPayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                            derivApiSendMessageVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Deserialize: JSONDeserializeStatesListResponse
                                        jSONDeserializeStatesListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_69d197f741008559fd9136ea6f31ca4cStructure, false);
                                        OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "JavaScript1");
                                                span.setAttribute("outsystems.function.key", "675c5900-840e-46eb-afb5-bb7c436eb732");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_RealAccountCreation_AddressDetails_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", null, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // StateList = JSONDeserializeStatesListResponse.Data.States_list
                                        model.variables.stateListVar = jSONDeserializeStatesListResponseVar.value.dataOut.states_listAttr;
                                        // RealSignupStateList = DerivApiSendMessage.Response
                                        tradershubClientVariables.setRealSignupStateList(derivApiSendMessageVar.value.responseOut);
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


            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "6f9e94d4-3c62-4c4f-a37c-41fb176ce39f");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "83ae9daa-d5d3-4dbc-8353-32289f447ff2");
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

            dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "b8756b88-cabb-44d4-8b4a-67ec03e34bbc");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dropdownSearchOnChanged$Action, callContext, selectedOptionListIn);
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
                        span.setAttribute("outsystems.function.key", "c2350cf8-4bc5-446c-8649-331397ef63ae");
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.DropdownSearchOnChanged$vars", [{
            name: "SelectedOptionList",
            attrName: "selectedOptionListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
            },
            complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.OnReady$generateStatesListPayloadJSResult", [{
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

define("tradershub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "signup_modal_next_button_os",
        })
    };
});

define("tradershub.RealAccountCreation.AddressDetails.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            Address: $parameters.Address,
            Town: $parameters.Town,
            State: $parameters.State,
            PostCode: $parameters.PostCode
        }

        const addressDetailsRegx = {
            town: /^\p{L}[\p{L}\s'.-]{0,99}$/u,
            address: /^[\p{L}\p{Nd}\s'.,:;()\u00b0@#/-]{1,70}$/u,
            state: /^[\w\s\W'.;,-]{0,99}$/,
            postCode: /^(?! )[a-zA-Z0-9\s-]{0,20}$/,
            containsAtLeastOneLetter: /^(?=.*[A-Za-z]).*$/
        }

        const addressPermittedSpecialCharacters = ". , ' : ; ( ) ° @ # / -"

        const validationSchema = yup.object().shape({
            Address: yup.string()
                .required('Address is required.')
                .trim()
                .test(
                    'containsAtLeastOneLetter',
                    'Address must contain at least one letter.',
                    value => addressDetailsRegx.containsAtLeastOneLetter.test(value)
                )
                .test(
                    'addressFormat',
                    'Use only the following special characters: ' + addressPermittedSpecialCharacters,
                    value => addressDetailsRegx.address.test(value)
                ),
            Town: yup.string().required("Town/city is required.").trim().matches(addressDetailsRegx.town, 'Only letters, periods, hyphens, apostrophes, and spaces, please.'),
            State: yup.string().trim().matches(addressDetailsRegx.state, 'State is not in a proper format.'),
            PostCode: yup.string().trim().max(20, "Please enter a Postal/ZIP code under 20 characters.").matches(addressDetailsRegx.postCode, 'Only letters, numbers, space and hyphen are allowed.')
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});

define("tradershub.RealAccountCreation.AddressDetails.mvc$controller.OnReady.GenerateStatesListPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            states_list: $parameters.CountryCode
        })
    };
});

define("tradershub.RealAccountCreation.AddressDetails.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        setTimeout(() => {
            Analytics.Analytics.trackEvent({
                action: "real_account_address-details-open",
            })
        }, 100);

    };
});