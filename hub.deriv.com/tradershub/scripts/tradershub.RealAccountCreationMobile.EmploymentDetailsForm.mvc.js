define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceList", "residenceListVar", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a());
                    }, false, tradershubModel.RL_10436c71a703b5c08e6ed74c34052e0a),
                    this.attr("IsCountrySelectorPopupOpen", "isCountrySelectorPopupOpenVar", "IsCountrySelectorPopupOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Form: OS.Model.ValidationWidgetRecord,
                Input_InputState: OS.Model.ValidationWidgetRecord,
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

define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$model", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "tradershub.Common.CountryOfTaxResidenceSelector.mvc$view", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_model, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller, tradershubClientVariables, tradershub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, tradershub_Common_CountryOfTaxResidenceSelector_mvc_view) {
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
            return [tradershub_Layouts_RealAccountCreationLayout_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, tradershub_Common_CountryOfTaxResidenceSelector_mvc_view];
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
                        })), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                AlignIconRight: true
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: PlaceholderContent.Empty,
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form")
                                        },
                                        enabled: true,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.openCountrySelectorPopup$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Text*/ 0,
                                        mandatory: false,
                                        maxLength: 50,
                                        prompt: "Select your country of tax residence",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, tradershubClientVariables.getRealSignupTaxResidenceLabel(), function(value) {
                                            tradershubClientVariables.setRealSignupTaxResidenceLabel(value);
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_InputState"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Image, {
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.openCountrySelectorPopup$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
                                        style: "cursor-pointer",
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidenceLabel())]
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
                                uuid: "14"
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
                                uuid: "15"
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
                                uuid: "17"
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
                                    uuid: "18"
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
                                    uuid: "20"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "I confirm that my tax information is accurate and complete.")), $if(!(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), false, this, function() {
                                return [React.createElement(OSWidgets.Text, {
                                    style: "text-primary",
                                    text: ["This is required."],
                                    _idProps: {
                                        service: idService,
                                        uuid: "21"
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
                                uuid: "22"
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
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Next"))), React.createElement(OSWidgets.Popup, {
                            showPopup: model.variables.isCountrySelectorPopupOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.closeStateSelectionPopupOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: ["Country of tax residence"],
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.closeStateSelectionPopupOnClick$Action(controller.callContext(eventHandlerContext));

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(tradershub_Common_CountryOfTaxResidenceSelector_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ResidenceList: model.variables.residenceListVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClickCountry$Action: function(residenceIn, labelIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.countryOfTaxResidenceSelectorOnClickCountry$Action(residenceIn, labelIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "32",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.residenceListVar), asPrimitiveValue(model.variables.isCountrySelectorPopupOpenVar), asPrimitiveValue(model.widgets.get(idService.getId("TaxIDConfirmationCheckbox")).validAttr), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxIDConfirmation()), asPrimitiveValue(tradershubClientVariables.getRealSignupTIDNumber()), asPrimitiveValue(tradershubClientVariables.getRealSignupTaxResidenceLabel())]
            }));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationMobile.controller", "tradershub.RealAccountCreationMobile.EmploymentDetailsForm.mvc$controller.SaveOnClick.ValidateJS", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.model$RL_10436c71a703b5c08e6ed74c34052e0a", "tradershub.model$ST_f41b21ee1ca377ae619742cd5408a376Structure", "tradershub.model$ST_0690f5116aa54a9a733230ed909c87fbStructure", "tradershub.model$ST_d0797dfc77615b3a25728769b9f01e76Structure", "tradershub.model$ST_87555d90f21aa57fd03a9d7e779d31e3Structure", "tradershub.model$ST_739ced57b6317085dd90ed93a3159f3eStructure", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_f95d89703009688d0282052da4de0dc3", "tradershub.model$ST_2848cd79cb87a073a52246b673b32b79Structure", "tradershub.model$ST_8e51c0579a0eeb9a2bb60e1b5bc699e3Structure", "tradershub.model$ST_3d5602677826d8c01775c21c1065c8ceStructure", "tradershub.model$ST_2437043bbd31c030b06d37eb045b623aStructure", "tradershub.model$ST_ab9963fdfdd5d4ab71d52ec3f27aa094Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationMobileController, tradershub_RealAccountCreationMobile_EmploymentDetailsForm_mvc_controller_SaveOnClick_ValidateJS) {
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
            get _countryOfTaxResidenceSelectorOnClickCountry$Action() {
                if (!(this.hasOwnProperty("__countryOfTaxResidenceSelectorOnClickCountry$Action"))) {
                    this.__countryOfTaxResidenceSelectorOnClickCountry$Action = function(residenceIn, labelIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CountryOfTaxResidenceSelectorOnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CountryOfTaxResidenceSelectorOnClickCountry");
                                span.setAttribute("outsystems.function.key", "2f7d65eb-5ec0-4731-b1b6-4128cccdd09a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CountryOfTaxResidenceSelectorOnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.CountryOfTaxResidenceSelectorOnClickCountry$vars"))());
                                vars.value.residenceInLocal = residenceIn;
                                vars.value.labelInLocal = labelIn;
                                // RealSignupTaxResidence = Residence
                                tradershubClientVariables.setRealSignupTaxResidence(vars.value.residenceInLocal);
                                // RealSignupTaxResidenceLabel = Label
                                tradershubClientVariables.setRealSignupTaxResidenceLabel(vars.value.labelInLocal);
                                // IsCountrySelectorPopupOpen = False
                                model.variables.isCountrySelectorPopupOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__countryOfTaxResidenceSelectorOnClickCountry$Action;
            }
            set _countryOfTaxResidenceSelectorOnClickCountry$Action(value) {
                this.__countryOfTaxResidenceSelectorOnClickCountry$Action = value;
            }

            get _openCountrySelectorPopup$Action() {
                if (!(this.hasOwnProperty("__openCountrySelectorPopup$Action"))) {
                    this.__openCountrySelectorPopup$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenCountrySelectorPopup", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenCountrySelectorPopup");
                                span.setAttribute("outsystems.function.key", "a375951f-c3fd-471e-9f49-c2e22b3946a7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenCountrySelectorPopup");
                                callContext = controller.callContext(callContext);
                                // IsCountrySelectorPopupOpen = True
                                model.variables.isCountrySelectorPopupOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openCountrySelectorPopup$Action;
            }
            set _openCountrySelectorPopup$Action(value) {
                this.__openCountrySelectorPopup$Action = value;
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
                                            TaxResidenceCountry: OS.DataConversion.JSNodeParamConverter.to(((((tradershubClientVariables.getRealSignupTaxResidence()) !== (""))) ? (tradershubClientVariables.getRealSignupTaxResidence()) : (tradershubClientVariables.getSelectedResidence())), OS.DataTypes.DataTypes.Text),
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

            get _closeStateSelectionPopupOnClick$Action() {
                if (!(this.hasOwnProperty("__closeStateSelectionPopupOnClick$Action"))) {
                    this.__closeStateSelectionPopupOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseStateSelectionPopupOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseStateSelectionPopupOnClick");
                                span.setAttribute("outsystems.function.key", "f8f88e84-eef4-4570-b2f3-35774583b45e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseStateSelectionPopupOnClick");
                                callContext = controller.callContext(callContext);
                                // IsCountrySelectorPopupOpen = False
                                model.variables.isCountrySelectorPopupOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeStateSelectionPopupOnClick$Action;
            }
            set _closeStateSelectionPopupOnClick$Action(value) {
                this.__closeStateSelectionPopupOnClick$Action = value;
            }


            countryOfTaxResidenceSelectorOnClickCountry$Action(residenceIn, labelIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CountryOfTaxResidenceSelectorOnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CountryOfTaxResidenceSelectorOnClickCountry");
                        span.setAttribute("outsystems.function.key", "2f7d65eb-5ec0-4731-b1b6-4128cccdd09a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._countryOfTaxResidenceSelectorOnClickCountry$Action, callContext, residenceIn, labelIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            openCountrySelectorPopup$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenCountrySelectorPopup__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenCountrySelectorPopup");
                        span.setAttribute("outsystems.function.key", "a375951f-c3fd-471e-9f49-c2e22b3946a7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openCountrySelectorPopup$Action, callContext);
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

            closeStateSelectionPopupOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseStateSelectionPopupOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseStateSelectionPopupOnClick");
                        span.setAttribute("outsystems.function.key", "f8f88e84-eef4-4570-b2f3-35774583b45e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeStateSelectionPopupOnClick$Action, callContext);
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.CountryOfTaxResidenceSelectorOnClickCountry$vars", [{
            name: "Residence",
            attrName: "residenceInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Label",
            attrName: "labelInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
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