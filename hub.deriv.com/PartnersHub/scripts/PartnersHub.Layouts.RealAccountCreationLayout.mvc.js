define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Navigation.Wizard.mvc$model", "OutSystemsUI.Navigation.WizardItem.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Navigation_Wizard_mvcModel, OutSystemsUI_Navigation_WizardItem_mvcModel, OutSystemsUI_Numbers_ProgressBar_mvcModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    isExitModalOpenVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = ((((OutSystemsUI_Navigation_Wizard_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_WizardItem_mvcModel.hasValidationWidgets) || OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$model", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.Wizard.mvc$view", "OutSystemsUI.Navigation.WizardItem.mvc$view", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Layouts_RealAccountCreationLayout_mvc_model, PartnersHub_Layouts_RealAccountCreationLayout_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.RealAccountCreationLayout";
        }

        static getAttributes() {
            return {
                codeFunction: "RealAccountCreationLayout",
                functionKey: "0ce177de-f5cd-4242-9963-202c3b153f88",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.RealAccountCreationLayout.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_RealAccountCreationLayout_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_RealAccountCreationLayout_mvc_controller;
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
                style: "display-flex",
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
                    style: "background-color: #F2F3F4; height: 100vh; padding: 48px 24px 0px 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "fit-content"
                },
                style: "real-account-signup-sidebar",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "SidebarMenu"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 24px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px; font-weight: bold; text-wrap: nowrap;"
                },
                text: [$text(getTranslation("Pd1ZLA6XpE6fD+75qUoUXg#Value", "Add a real account"))],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OutSystemsUI_Navigation_Wizard_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    ExtendedClass: "real-account-signup-layout",
                    IsVertical: true
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
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if(PartnersHubClientVariables.getRealSignupIsIDVSupported(), false, this, function() {
                            return [React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("+lFREdQmF02weowM2pI1yQ.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1)) ? (PartnersHubModel.staticEntities.steps.active) : (PartnersHubModel.staticEntities.steps.past));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "5",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [$text(getTranslation("YramVibtdUKPaIgj1OJ0kg#Value", "Account type"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("iWjVaVKpwEe8CNVacGiETw.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 2)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 2)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "9",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 2), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [$text(getTranslation("S3iQjwG8M0OPkqWRBiGV2w#Value", "Account currency"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("6SyOWk+J_k2ZGmNfAaQanw.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 3)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 3)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "13",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 3), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("2zT5ezvOfUufLEkacU1hWA#Value", "Personal details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("DhSSqQQbxUi_Gyf9RC0nvA.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 4)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "16",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 4), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("z6g2BoLl+U+IZ0Uh+onO3Q#Value", "Identity verification")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("5+uXL66nPUeAaPhXt1ALpg.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 5)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "19",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 5), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("8KAIelA1vUOD1IBcV_3Bug#Value", "Employment details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("XeKHozSSbUmHtJTwI5AZYA.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 6)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "22",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 6), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("LOHogPj7AkamPabzFF_m4w#Value", "Address details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("s1B574_0jEquNA91_jdxlQ.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 7)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "25",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 7), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            value: model.getCachedValue(idService.getId("BGI1RY4JvUWfJD6b5QFFwQ.Value"), function() {
                                                return (((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details"));
                                            }, function() {
                                                return PartnersHubClientVariables.getSelectedAccountType();
                                            }),
                                            _idProps: {
                                                service: idService,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("oHY56PDRVk24fKy9As9+7w.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 8)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 8)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "29",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 8), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "30"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("JeN0p7uu00yd0gVlFMA4ng#Value", "Terms of use")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            })];
                        }, function() {
                            return [React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("SkNfiGc2rkStGOiPScCdXw.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1)) ? (PartnersHubModel.staticEntities.steps.active) : (PartnersHubModel.staticEntities.steps.past));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "32",
                                    alias: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "33"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [$text(getTranslation("Bp86I9Ixv0OIhQly_f6eUA#Value", "Account type"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("Qhn11z+0ZUe3EkeqZJIBqQ.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 2)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 2)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "36",
                                    alias: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 2), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "37"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Text, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [$text(getTranslation("_+B0FA+SSkKHk1HjYv340w#Value", "Account currency"))],
                                            _idProps: {
                                                service: idService,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("8nLL0_CPd0e_ccrBUbKPww.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 3)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 3)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "40",
                                    alias: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 3), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "41"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("TzCWE08vhEiMd46j9F_2pQ#Value", "Personal details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("xOIpcIlhGUuPhbwijEOY6g.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 4)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "43",
                                    alias: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 4), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "44"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "45"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("rPOlfxqGXkGuqdRCco9X3w#Value", "Employment details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("r31j4lQeZEWronSYgg9fPw.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 5)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "46",
                                    alias: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 5), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "47"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "48"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("5ycKwwc7KkytjvwmEJe4Ag#Value", "Address details")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("0vat_ptS6E2zV0oQB2My7Q.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 6)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "49",
                                    alias: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 6), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "50"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            value: model.getCachedValue(idService.getId("hf_qAgGVrkiwgKONd+LYZw.Value"), function() {
                                                return (((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details"));
                                            }, function() {
                                                return PartnersHubClientVariables.getSelectedAccountType();
                                            }),
                                            _idProps: {
                                                service: idService,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            }), React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    Status: model.getCachedValue(idService.getId("5BFqGV0nTka+FYTuot8jeQ.Status"), function() {
                                        return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 7)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
                                    }, function() {
                                        return PartnersHubClientVariables.getRealSignupCurrentStep();
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
                                    uuid: "53",
                                    alias: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 7), false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "54"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    label: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "55"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $text(getTranslation("sOpdF1jXe0aVJB8RctEMSg#Value", "Terms of use")))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupIsIDVSupported())]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "display-flex flex-direction-column",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "56"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "real-account-signup-progressbar",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "57"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; background: #fff; border-bottom: 2px solid #F1F3F5; display: flex; justify-content: space-between; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ProgressBarMobileHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: ((PartnersHubClientVariables.getRealSignupCurrentStep()) !== (1)),
                _idProps: {
                    service: idService,
                    uuid: "59"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickBack$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.backicon2.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "60"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background: #fff; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "95%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "61"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Progress: PartnersHubClientVariables.getProgressBarLength(),
                    Thickness: 9,
                    ProgressColor: PartnersHubModel.staticEntities.color.primary
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
                    uuid: "62",
                    alias: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            })), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickClose$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer; font-weight: normal; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "63"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__content",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "64"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "65"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; max-width: 400px; padding: 16px;"
                },
                showPopup: model.variables.isExitModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    uuid: "67"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "display-flex flex-direction-column",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "68"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "69"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("JkpYM0ORA0W5DV6B_mF2Kg#Value", "Exit profile setup?"))],
                _idProps: {
                    service: idService,
                    uuid: "70"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "71"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "72"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("k4gPXOzX2E+h7qtfW9Q3Eg#Value", "Complete the setup to access custom commission plans."))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "73"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "74"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Width: "100%",
                    enabled: true,
                    height: "40px",
                    title: "Finish setup"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "75",
                    alias: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "76"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_SecondaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    BorderColor: "#FF444F",
                    TextColor: "FF444F",
                    title: "Exit",
                    Width: "100%",
                    height: "40px"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.secondaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "77",
                    alias: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayout_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_RealAccountCreationLayout_mvc_TranslationsResources);
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
            get _secondaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__secondaryButtononClick$Action"))) {
                    this.__secondaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SecondaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SecondaryButtononClick");
                                span.setAttribute("outsystems.function.key", "51dd19e0-d7ba-47c6-bc39-4848170eeb44");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SecondaryButtononClick");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                                // isCompleteMyProfileEnabled = True
                                PartnersHubClientVariables.setisCompleteMyProfileEnabled(true);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__secondaryButtononClick$Action;
            }
            set _secondaryButtononClick$Action(value) {
                this.__secondaryButtononClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "86a19707-548b-4fbc-8897-1586d1f76ca2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: AddFavicon
                                addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.ico", callContext);

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

            get _primaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
                    this.__primaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PrimaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PrimaryButtononClick");
                                span.setAttribute("outsystems.function.key", "928e6fe1-dfd7-4003-940d-c9f95870b81a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PrimaryButtononClick");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__primaryButtononClick$Action;
            }
            set _primaryButtononClick$Action(value) {
                this.__primaryButtononClick$Action = value;
            }

            get _onClickClose$Action() {
                if (!(this.hasOwnProperty("__onClickClose$Action"))) {
                    this.__onClickClose$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickClose", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickClose");
                                span.setAttribute("outsystems.function.key", "9de86be5-75ce-4eb6-be01-43ef72ec8f05");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickClose");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = True
                                model.variables.isExitModalOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickClose$Action;
            }
            set _onClickClose$Action(value) {
                this.__onClickClose$Action = value;
            }

            get _onClickBack$Action() {
                if (!(this.hasOwnProperty("__onClickBack$Action"))) {
                    this.__onClickBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBack");
                                span.setAttribute("outsystems.function.key", "ccd26e01-cca4-4f7c-8d3a-05bbd86cd851");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickBack");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: onClickBack2
                                    return controller.onClickBack2$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onClickBack$Action;
            }
            set _onClickBack$Action(value) {
                this.__onClickBack$Action = value;
            }


            secondaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SecondaryButtononClick");
                        span.setAttribute("outsystems.function.key", "51dd19e0-d7ba-47c6-bc39-4848170eeb44");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._secondaryButtononClick$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "86a19707-548b-4fbc-8897-1586d1f76ca2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            primaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PrimaryButtononClick");
                        span.setAttribute("outsystems.function.key", "928e6fe1-dfd7-4003-940d-c9f95870b81a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickClose$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickClose__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickClose");
                        span.setAttribute("outsystems.function.key", "9de86be5-75ce-4eb6-be01-43ef72ec8f05");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickClose$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBack");
                        span.setAttribute("outsystems.function.key", "ccd26e01-cca4-4f7c-8d3a-05bbd86cd851");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickBack$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onClickBack2$Action() {
                if (!(this.hasOwnProperty("_onClickBack2$Action"))) {
                    this._onClickBack2$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickBack2$Action;
            }
            set onClickBack2$Action(value) {
                this._onClickBack2$Action = value;
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.de-DE", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Schließen Sie die Einrichtung ab, um auf benutzerdefinierte Provisionspläne zuzugreifen.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Profilausgang einrichten?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Nutzungsbedingungen",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Adressdetails",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Beschäftigungsdetails",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Persönliche Daten",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Kontowährung",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Kontotyp",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Nutzungsbedingungen",
        "LOHogPj7AkamPabzFF_m4w#Value": "Adressdetails",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Beschäftigungsdetails",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Identitätsverifizierung",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Persönliche Daten",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Kontowährung",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Kontotyp",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Ein echtes Konto hinzufügen"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.es-ES", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Completa la configuración para acceder a planes de comisión personalizados.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "¿Configurar perfil de salida?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Términos de uso",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Detalles de la dirección",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Detalles de empleo",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Datos personales",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Moneda de la cuenta",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Tipo de cuenta",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Términos de uso",
        "LOHogPj7AkamPabzFF_m4w#Value": "Detalles de dirección",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Detalles del empleo",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Verificación de identidad",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Detalles personales",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Moneda de la cuenta",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Tipo de cuenta",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Agregar una cuenta real"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.fr-FR", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Complétez la configuration pour accéder aux plans de commission personnalisés.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Configuration du profil de sortie ?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Conditions d\'utilisation",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Détails de l\'adresse",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Détails de l\'emploi",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Détails personnels",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Devise du compte",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Type de compte",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Conditions d\'utilisation",
        "LOHogPj7AkamPabzFF_m4w#Value": "Détails de l\'adresse",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Détails de l\'emploi",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Vérification d\'identité",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Détails personnels",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Devise du compte",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Type de compte",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Ajouter un compte réel"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.it-IT", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Completa la configurazione per accedere ai piani di commissione personalizzati.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Configurazione del profilo di uscita?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Termini di utilizzo",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Dettagli dell\'indirizzo",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Dettagli sull\'occupazione",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Dettagli personali",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Valuta del conto",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Tipo di conto",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Termini di utilizzo",
        "LOHogPj7AkamPabzFF_m4w#Value": "Dettagli dell\'indirizzo",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Dettagli sull\'impiego",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Verifica dell\'identità",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Dati personali",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Valuta del conto",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Tipo di conto",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Aggiungi un conto reale"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.pl-PL", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Zakończ konfigurację, aby uzyskać dostęp do niestandardowych planów prowizji.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Ustawienia profilu wyjściowego?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Warunki użytkowania",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Szczegóły adresu",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Szczegóły zatrudnienia",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Dane osobowe",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Waluta konta",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Typ konta",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Warunki użytkowania",
        "LOHogPj7AkamPabzFF_m4w#Value": "Szczegóły adresu",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Szczegóły zatrudnienia",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Weryfikacja tożsamości",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Szczegóły osobowe",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Waluta konta",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Typ konta",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Dodaj prawdziwe konto"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.pt-PT", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Complete a configuração para aceder a planos de comissão personalizados.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Configuração do perfil de saída?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Termos de uso",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Detalhes do endereço",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Detalhes de emprego",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Dados pessoais",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Moeda da conta",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Tipo de conta",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Termos de uso",
        "LOHogPj7AkamPabzFF_m4w#Value": "Detalhes do endereço",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Detalhes de emprego",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Verificação de identidade",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Dados pessoais",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Moeda da conta",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Tipo de conta",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Adicionar uma conta real"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.ru-RU", [], function() {
    return {
        "k4gPXOzX2E+h7qtfW9Q3Eg#Value": "Завершите настройку, чтобы получить доступ к пользовательским планам комиссий.",
        "JkpYM0ORA0W5DV6B_mF2Kg#Value": "Настройка профиля выхода?",
        "sOpdF1jXe0aVJB8RctEMSg#Value": "Условия использования",
        "5ycKwwc7KkytjvwmEJe4Ag#Value": "Адресные данные",
        "rPOlfxqGXkGuqdRCco9X3w#Value": "Подробности о трудоустройстве",
        "TzCWE08vhEiMd46j9F_2pQ#Value": "Личные данные",
        "_+B0FA+SSkKHk1HjYv340w#Value": "Валюта аккаунта",
        "Bp86I9Ixv0OIhQly_f6eUA#Value": "Тип счета",
        "JeN0p7uu00yd0gVlFMA4ng#Value": "Условия использования",
        "LOHogPj7AkamPabzFF_m4w#Value": "Детали адреса",
        "8KAIelA1vUOD1IBcV_3Bug#Value": "Подробности о трудоустройстве",
        "z6g2BoLl+U+IZ0Uh+onO3Q#Value": "Проверка личности",
        "2zT5ezvOfUufLEkacU1hWA#Value": "Личные данные",
        "S3iQjwG8M0OPkqWRBiGV2w#Value": "Валюта счета",
        "YramVibtdUKPaIgj1OJ0kg#Value": "Тип аккаунта",
        "Pd1ZLA6XpE6fD+75qUoUXg#Value": "Добавить реальный счет"
    };
});

define("PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources", ["exports", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.de-DE", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.es-ES", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.it-IT", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_deDE, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_esES, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_frFR, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_itIT, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_plPL, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_ptPT, PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Layouts_RealAccountCreationLayout_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});