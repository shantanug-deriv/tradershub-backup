define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceList", "residenceListVar", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("TaxResidenceCountry", "taxResidenceCountryVar", "TaxResidenceCountry", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Form: OS.Model.ValidationWidgetRecord,
                Input_TIDNumber: OS.Model.ValidationWidgetRecord,
                TaxIDConfirmationCheckbox: OS.Model.ValidationWidgetRecord
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

define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$model", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_model, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_DropdownSearch_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.EmploymentDetailsForm";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsForm",
                functionKey: "d8bcb2d2-444e-412d-9602-de37f0b32c85",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.EmploymentDetailsForm.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller;
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


            return "Employment details | Deriv";
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
                    HideTitle: true,
                    Title: "Employment details"
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
                            style: "display-flex flex-direction-column ",
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex column-gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "flex-1 display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-style: normal; font-weight: 700; line-height: normal;"
                            },
                            text: ["Employment details"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-color: #333; border-style: solid; border-width: 0px;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("Form"));
                                var eventHandlerContext = callContext.clone();
                                controller.skipOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #333; font-style: normal; font-weight: 700; text-decoration: underline;"
                            },
                            text: ["Skip"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-s",
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
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            text: ["Country of tax residence"],
                            _idProps: {
                                service: idService,
                                uuid: "10"
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
                                StartingSelection: model.getCachedValue(idService.getId("TaxResidenceSelector.StartingSelection"), function() {
                                    return function() {
                                        var list = new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
                                        list.pushAll([function() {
                                            var rec = new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure();
                                            rec.valueAttr = ((((tradershubClientVariables.getRealSignupTaxResidence()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence()));
                                            rec.labelAttr = ((((tradershubClientVariables.getRealSignupTaxResidenceLabel()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (tradershubClientVariables.getRealSignupTaxResidenceLabel()) : (tradershubClientVariables.getSelectedResidence()));
                                            return rec;
                                        }()]);
                                        return list;
                                    }();
                                }, function() {
                                    return tradershubClientVariables.getRealSignupTaxResidence();
                                }, function() {
                                    return tradershubClientVariables.getSelectedResidence();
                                }, function() {
                                    return tradershubClientVariables.getRealSignupTaxResidenceLabel();
                                }),
                                Prompt: "Select your country of tax residence",
                                OptionalConfigs: model.getCachedValue(idService.getId("TaxResidenceSelector.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                        return rec;
                                    }();
                                }),
                                OptionsList: model.getCachedValue(idService.getId("TaxResidenceSelector.OptionsList"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListVar, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                        target.valueAttr = source.valueAttr;
                                        target.labelAttr = source.textAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.residenceListVar;
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
                                validationParentId: idService.getId("Form")
                            },
                            _idProps: {
                                service: idService,
                                name: "TaxResidenceSelector",
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
                            style: "display-flex flex-direction-column gap-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            targetWidget: "Input_TIDNumber",
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Tax identification number"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
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
                            prompt: "Enter your tax identification number",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupTIDNumber(), function(value) {
                                tradershubClientVariables.setRealSignupTIDNumber(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_TIDNumber"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), $if(((tradershubClientVariables.getRealSignupTIDNumber()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 16px;"
                                },
                                style: "display-flex gap-s align-items-center checkbox-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Checkbox, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form")
                                },
                                enabled: true,
                                style: "checkbox",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, tradershubClientVariables.getRealSignupTaxIDConfirmation(), function(value) {
                                    tradershubClientVariables.setRealSignupTaxIDConfirmation(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "TaxIDConfirmationCheckbox"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Label, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "TaxIDConfirmationCheckbox",
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "I confirm that my tax information is accurate and complete.")), $if(!(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), false, this, function() {
                                return [React.createElement(OSWidgets.Text, {
                                    style: "text-primary",
                                    text: ["This is required."],
                                    _idProps: {
                                        service: idService,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }, function() {
                                return [];
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-width: 0px; margin-top: 16px;"
                            },
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("Form"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next")))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxIDConfirmation()), asPrimitiveValue(tradershubClientVariables.getRealSignupTIDNumber()), asPrimitiveValue(model.variables.residenceListVar), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidenceLabel()), asPrimitiveValue(tradershubClientVariables.getSelectedResidence()), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidence())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationMobile.controller", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller.SaveOnClick.ValidateJS", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationMobileController, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller_SaveOnClick_ValidateJS) {
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "c029f176-d763-46bc-b25b-973e09639be5");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure))());
                                // JSON Deserialize: JSONDeserializeResidenceListResponse
                                jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(tradershubClientVariables.getRawResidenceListResponse(), tradershubModel.ST_3d5602677826d8c01775c21c1065c8ceStructure, false);
                                // ResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                model.variables.residenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
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

            get _skipOnClick$Action() {
                if (!(this.hasOwnProperty("__skipOnClick$Action"))) {
                    this.__skipOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SkipOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SkipOnClick");
                                span.setAttribute("outsystems.function.key", "c8f8cdab-fbe3-4dad-ad53-67a755cd6a86");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SkipOnClick");
                                callContext = controller.callContext(callContext);
                                // RealSignupSkippedEmploymentTaxDetails = True
                                tradershubClientVariables.setRealSignupSkippedEmploymentTaxDetails(true);
                                // Destination: /tradershub/AddressDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "address-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__skipOnClick$Action;
            }
            set _skipOnClick$Action(value) {
                this.__skipOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "d7d147a9-6722-40b0-a1ef-6d6f6faf5ac0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeEmploymentDetailsValidationErrorsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure))());
                                var jSONDeserializeEmploymentStatusValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "67bcd104-b248-4a04-9756-69be0f8059d8");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            EmployementStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
                                            TIDNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
                                            ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                            TaxResidenceCountry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
                                            TaxIDConfirmation: OS.DataConversion.JSNodeParamConverter.to((tradershubClientVariables.getRealSignupTaxIDConfirmation() ? "True" : "False"), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.SaveOnClick$validateJSResult"))();
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
                                // JSON Deserialize: JSONDeserializeEmploymentDetailsValidationErrors
                                jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure, false);
                                // JSON Deserialize: JSONDeserializeEmploymentStatusValidFields
                                jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure, false);
                                // Input_TIDNumber.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TIDNumber
                                model.widgets.get(idService.getId("Input_TIDNumber")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.tIDNumberAttr;
                                // Input_TIDNumber.ValidationMessage = JSONDeserializeEmploymentDetailsValidationErrors.Data.TIDNumber
                                model.widgets.get(idService.getId("Input_TIDNumber")).validationMessageAttr = jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut.tIDNumberAttr;
                                // TaxIDConfirmationCheckbox.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TaxIDConfirmation
                                model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.taxIDConfirmationAttr;
                                // TaxIDConfirmationCheckbox.ValidationMessage = NullTextIdentifier
                                model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validationMessageAttr = OS.BuiltinFunctions.nullTextIdentifier();
                                if ((model.widgets.get(idService.getId("Form")).validAttr)) {
                                    // RealSignupCurrentStep = 3
                                    tradershubClientVariables.setRealSignupCurrentStep(3);
                                    // Destination: /tradershub/AddressDetails
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "address-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedOptionListIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "fb7561c8-9725-488e-aaf9-dcb85edda58d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
                                // TaxResidenceCountry = SelectedOptionList.Current.Value
                                model.variables.taxResidenceCountryVar = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr;
                                // RealSignupTaxResidence = SelectedOptionList.Current.Value
                                tradershubClientVariables.setRealSignupTaxResidence(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
                                // RealSignupTaxResidenceLabel = SelectedOptionList.Current.Label
                                tradershubClientVariables.setRealSignupTaxResidenceLabel(vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).labelAttr);
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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "c029f176-d763-46bc-b25b-973e09639be5");
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

            skipOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SkipOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SkipOnClick");
                        span.setAttribute("outsystems.function.key", "c8f8cdab-fbe3-4dad-ad53-67a755cd6a86");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._skipOnClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "d7d147a9-6722-40b0-a1ef-6d6f6faf5ac0");
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

            dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "fb7561c8-9725-488e-aaf9-dcb85edda58d");
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
                    this._onReadyEventHandler = null;
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
                        return tradershub_RealAccountCreationMobileController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.SaveOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.DropdownSearchOnChanged$vars", [{
            name: "SelectedOptionList",
            attrName: "selectedOptionListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b();
            },
            complexType: tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller.SaveOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceList = (JSON.parse($parameters.ResidenceList)).residence_list;
        const tinFormat = residenceList.find((resident) => resident.value === $parameters.TaxResidenceCountry)?.tin_format || [];

        const payload = {
            TaxResidenceCountry: $parameters.TaxResidenceCountry,
            TIDNumber: $parameters.TIDNumber,
            EmployementStatus: $parameters.EmployementStatus,
            TaxIDConfirmation: $parameters.TaxIDConfirmation
        }

        const validationSchema = yup.object().shape({
            TaxResidenceCountry: yup.string().required('Tax residence country is required.'),
            TIDNumber: yup.string().max(25, "Tax Identification Number can't be longer than 25 characters.")
                .test("tin-format", "Tax identification number format is incorrect.", value => {
                    if (!value) return true;
                    if (tinFormat.length) {
                        return tinFormat.some(format => RegExp(format).test(value))
                    }
                    return true;
                }),
            EmployementStatus: yup.string().required('Employment status is required.'),
            TaxIDConfirmation: yup.bool().when('TIDNumber', (TIDNumber, schema) => {
                if (TIDNumber) {
                    return schema.oneOf([true], "This is required.").required("This is required.")
                }

                return schema
            }),
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload);


        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)

    };
});