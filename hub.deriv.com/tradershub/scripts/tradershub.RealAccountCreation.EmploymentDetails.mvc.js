define("tradershub.RealAccountCreation.EmploymentDetails.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "OutSystemsUI.model", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class GetEmploymentStatusesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEmploymentStatusesAggrRec(new GetEmploymentStatusesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEmploymentStatusesAggrRecInner.RecordListType = tradershubModel.RL_d05ad81e70a826256d161d2b9afc0f03;
        var GetEmploymentStatusesAggrRec = GetEmploymentStatusesAggrRecInner;
        GetEmploymentStatusesAggrRec.init();
    }


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
                    }, false),
                    this.attr("NoTaxIDNumber", "noTaxIDNumberVar", "NoTaxIDNumber", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEmploymentStatusesAggrRec());
                    }, true, GetEmploymentStatusesAggrRec)
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
                EmployementStatusDropdown: OS.Model.ValidationWidgetRecord,
                NoTaxIDNumberAvailable: OS.Model.ValidationWidgetRecord,
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

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreation.EmploymentDetails.mvc$model", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$view", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, React, OSView, tradershub_RealAccountCreation_EmploymentDetails_mvc_model, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_DropdownSearch_mvc_view, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.EmploymentDetails";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetails",
                functionKey: "a130d4db-0e20-4fc9-bdc5-c91a5dcbe757",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.EmploymentDetails.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view];
        }

        get modelFactory() {
            return tradershub_RealAccountCreation_EmploymentDetails_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreation_EmploymentDetails_mvc_controller;
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
                    Title: "Employment details",
                    HideTitle: model.getCachedValue(idService.getId("7fJAmptkfkee4aRrg0ciVQ.HideTitle"), function() {
                        return OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut;
                    })
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
                            style: "full-width employment-details-section__desktop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
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
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "EmploymentStatus"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "EmployementStatusDropdown",
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Employment status"],
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #DC2020; font-size: 16px;"
                            },
                            text: ["*"],
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Dropdown, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            dropdownMode: /*Custom*/ 1,
                            emptyValue: "Select your employment status",
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 16px; margin-top: 8px;"
                            },
                            list: model.variables.getEmploymentStatusesAggr.listOut,
                            mandatory: true,
                            onChange: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.employementStatusDropdownOnChange$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "dropdown",
                            values: function(elem) {
                                return elem.employmentStatusAttr.idAttr;
                            },
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupEmployementStatus(), function(value) {
                                tradershubClientVariables.setRealSignupEmployementStatus(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "EmployementStatusDropdown"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.labelAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
                        })), $if(((OS.BuiltinFunctions.identifierToText(tradershubClientVariables.getRealSignupEmployementStatus()) === "student") || (OS.BuiltinFunctions.identifierToText(tradershubClientVariables.getRealSignupEmployementStatus()) === "unemployed")), true, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex align-items-center checkbox-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Checkbox, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form")
                                },
                                enabled: true,
                                style: "checkbox",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.noTaxIDNumberVar, function(value) {
                                    model.variables.noTaxIDNumberVar = value;
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "NoTaxIDNumberAvailable"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Label, {
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "8px"
                                },
                                targetWidget: "NoTaxIDNumberAvailable",
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "I don\'t have tax identification number."))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TaxResidence"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            text: ["Country of tax residence"],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OutSystemsUI_Interaction_DropdownSearch_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                StartingSelection: model.getCachedValue(idService.getId("u2kC3epDCEeZQ0+iKThzrw.StartingSelection"), function() {
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
                                OptionsList: model.getCachedValue(idService.getId("u2kC3epDCEeZQ0+iKThzrw.OptionsList"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListVar, new tradershubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                        target.valueAttr = source.valueAttr;
                                        target.labelAttr = source.textAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.residenceListVar;
                                }),
                                OptionalConfigs: model.getCachedValue(idService.getId("u2kC3epDCEeZQ0+iKThzrw.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                        rec.allowMultipleSelectionAttr = false;
                                        rec.isDisabledAttr = model.variables.noTaxIDNumberVar;
                                        rec.noResultsTextAttr = "Nothing to show";
                                        rec.searchPromptAttr = "Search";
                                        rec.noOptionsTextAttr = "There are no options to show";
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.noTaxIDNumberVar;
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
                                uuid: "16",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TaxIdentificationNumber"
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
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Tax identification number"],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            enabled: !(model.variables.noTaxIDNumberVar),
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
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
                        }))), $if((((tradershubClientVariables.getRealSignupTIDNumber()) !== (OS.BuiltinFunctions.nullTextIdentifier())) && !(model.variables.noTaxIDNumberVar)), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex gap-s align-items-center checkbox-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "21"
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
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "I confirm that my tax information is accurate and complete.")), $if(!(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), false, this, function() {
                                return [React.createElement(OSWidgets.Text, {
                                    style: "text-primary",
                                    text: ["This is required."],
                                    _idProps: {
                                        service: idService,
                                        uuid: "24"
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
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
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
                                controller.validationService.validateWidget(idService.getId("Form"));
                                var eventHandlerContext = callContext.clone();
                                controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next")))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "full-width employment-details-section__mobile",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_view, {
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
                                uuid: "28",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxIDConfirmation()), asPrimitiveValue(tradershubClientVariables.getRealSignupTIDNumber()), asPrimitiveValue(model.variables.residenceListVar), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidenceLabel()), asPrimitiveValue(tradershubClientVariables.getSelectedResidence()), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidence()), asPrimitiveValue(model.variables.noTaxIDNumberVar), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.listOut), asPrimitiveValue(tradershubClientVariables.getRealSignupEmployementStatus())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreation.controller", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.ValidateJS", "tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.RudderStackJS", "OutSystemsUI.controller$IsPhone", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "tradershub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationController, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_ValidateJS, tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_RudderStackJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEmploymentStatuses$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEmploymentStatuses$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getEmploymentStatuses$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEmploymentStatuses$AggrRefresh"))) {
                    this._getEmploymentStatuses$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/tradershub/RealAccountCreation/EmploymentDetails/ScreenDataSetGetEmploymentStatuses", "q_yCt7hT7woB7YmjOE0ilA", maxRecords, startIndex, function(b) {
                                model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEmploymentStatuses", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEmploymentStatuses");
                                span.setAttribute("outsystems.function.key", "94386f86-a542-40c5-8b72-4e26216a6d88");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._getEmploymentStatuses$AggrRefresh;
            }
            set getEmploymentStatuses$AggrRefresh(value) {
                this._getEmploymentStatuses$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEmploymentStatuses$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893");
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
                                // RealSignupCurrentStep = If
                                tradershubClientVariables.setRealSignupCurrentStep(((tradershubClientVariables.getRealSignupIsIDVSupported()) ? (4) : (3)));
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

            get _employementStatusDropdownOnChange$Action() {
                if (!(this.hasOwnProperty("__employementStatusDropdownOnChange$Action"))) {
                    this.__employementStatusDropdownOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("EmployementStatusDropdownOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "EmployementStatusDropdownOnChange");
                                span.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("EmployementStatusDropdownOnChange");
                                callContext = controller.callContext(callContext);
                                if (((((OS.BuiltinFunctions.identifierToText(tradershubClientVariables.getRealSignupEmployementStatus())) !== ("student")) || ((OS.BuiltinFunctions.identifierToText(tradershubClientVariables.getRealSignupEmployementStatus())) !== ("unemployed"))))) {
                                    // NoTaxIDNumber = False
                                    model.variables.noTaxIDNumberVar = false;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__employementStatusDropdownOnChange$Action;
            }
            set _employementStatusDropdownOnChange$Action(value) {
                this.__employementStatusDropdownOnChange$Action = value;
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
                                span.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeEmploymentStatusValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure))());
                                var jSONDeserializeEmploymentDetailsValidationErrorsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2437043bbd31c030b06d37eb045b623aStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "0959b7e9-6afc-491f-9dd1-505db42f50fb");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_ValidateJS, "Validate", "SaveOnClick", {
                                            TaxResidenceCountry: OS.DataConversion.JSNodeParamConverter.to(((((tradershubClientVariables.getRealSignupTaxResidence()) !== (""))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence())), OS.DataTypes.DataTypes.Text),
                                            TIDNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
                                            TaxIDConfirmation: OS.DataConversion.JSNodeParamConverter.to((tradershubClientVariables.getRealSignupTaxIDConfirmation() ? "True" : "False"), OS.DataTypes.DataTypes.Text),
                                            ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                            EmployementStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupEmployementStatus(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult"))();
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
                                // EmployementStatusDropdown.Valid = JSONDeserializeEmploymentStatusValidFields.Data.EmployementStatus
                                model.widgets.get(idService.getId("EmployementStatusDropdown")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.employementStatusAttr;
                                // EmployementStatusDropdown.ValidationMessage = JSONDeserializeEmploymentDetailsValidationErrors.Data.EmployementStatus
                                model.widgets.get(idService.getId("EmployementStatusDropdown")).validationMessageAttr = jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut.employementStatusAttr;
                                // Input_TIDNumber.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TIDNumber
                                model.widgets.get(idService.getId("Input_TIDNumber")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.tIDNumberAttr;
                                // Input_TIDNumber.ValidationMessage = JSONDeserializeEmploymentDetailsValidationErrors.Data.TIDNumber
                                model.widgets.get(idService.getId("Input_TIDNumber")).validationMessageAttr = jSONDeserializeEmploymentDetailsValidationErrorsVar.value.dataOut.tIDNumberAttr;
                                // TaxIDConfirmationCheckbox.Valid = JSONDeserializeEmploymentStatusValidFields.Data.TaxIDConfirmation
                                model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr = jSONDeserializeEmploymentStatusValidFieldsVar.value.dataOut.taxIDConfirmationAttr;
                                // TaxIDConfirmationCheckbox.ValidationMessage = NullTextIdentifier
                                model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validationMessageAttr = OS.BuiltinFunctions.nullTextIdentifier();
                                if ((model.widgets.get(idService.getId("Form")).validAttr)) {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "0e6d4c53-6f1f-4008-b8f6-c2c38220b9d8");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreation_EmploymentDetails_mvc_controller_SaveOnClick_RudderStackJS, "RudderStack", "SaveOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // RealSignupCurrentStep = 3
                                    tradershubClientVariables.setRealSignupCurrentStep(3);
                                    // RealSignupSkippedEmploymentTaxDetails = False
                                    tradershubClientVariables.setRealSignupSkippedEmploymentTaxDetails(false);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
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

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedOptionListIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars"))());
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
                        span.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893");
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

            employementStatusDropdownOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("EmployementStatusDropdownOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "EmployementStatusDropdownOnChange");
                        span.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._employementStatusDropdownOnChange$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28");
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
                        span.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54");
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

            dropdownSearchOnChanged$Action(selectedOptionListIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe");
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult", [{
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars", [{
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

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.ValidateJS", [], function() {
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

define("tradershub.RealAccountCreation.EmploymentDetails.mvc$controller.SaveOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_real_account_signup_form", {
            action: "step_passed",
            step_num: 2,
            step_codename: "employment_details",
            form_name: "real_account_signup_form_outsystems"
        });

    };
});