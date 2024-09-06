define("PartnersHub.Layouts.RealSignupLayout.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.controller", "OutSystemsUI.Navigation.Wizard.mvc$model", "OutSystemsUI.Navigation.WizardItem.mvc$model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, PartnersHubController, OutSystemsUI_Navigation_Wizard_mvcModel, OutSystemsUI_Navigation_WizardItem_mvcModel) {
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
            return {};
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (OutSystemsUI_Navigation_Wizard_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_WizardItem_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.RealSignupLayout.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.RealSignupLayout.mvc$model", "PartnersHub.Layouts.RealSignupLayout.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Navigation.Wizard.mvc$view", "OutSystemsUI.Navigation.WizardItem.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Layouts_RealSignupLayout_mvc_model, PartnersHub_Layouts_RealSignupLayout_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.RealSignupLayout";
        }

        static getAttributes() {
            return {
                codeFunction: "RealSignupLayout",
                functionKey: "bf4c5cd4-722b-4531-8b6d-4570b524b956",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.RealSignupLayout.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Navigation_Wizard_mvc_view, OutSystemsUI_Navigation_WizardItem_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_RealSignupLayout_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_RealSignupLayout_mvc_controller;
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
                    style: "display: flex; height: 100vh;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100vw"
                },
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
                    style: "background-color: #F2F3F4; padding: 48px 24px 0px 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "fit-content"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
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
                text: ["Add a real account"],
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
                        return [React.createElement(OutSystemsUI_Navigation_WizardItem_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Status: model.getCachedValue(idService.getId("lJfMZ5p7fkejH+44lJAjqQ.Status"), function() {
                                    return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 0)) ? (PartnersHubModel.staticEntities.steps.active) : (PartnersHubModel.staticEntities.steps.past));
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
                                    return [$if((PartnersHubClientVariables.getRealSignupCurrentStep() > 0), false, this, function() {
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
                                        text: ["Account type"],
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
                                Status: model.getCachedValue(idService.getId("sVUrUcAx2kqhIpCvwJNb1Q.Status"), function() {
                                    return (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1)) ? (PartnersHubModel.staticEntities.steps.active) : ((((PartnersHubClientVariables.getRealSignupCurrentStep() < 1)) ? (PartnersHubModel.staticEntities.steps.next) : (PartnersHubModel.staticEntities.steps.past))));
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
                                        text: ["Account currency"],
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
                                Status: model.getCachedValue(idService.getId("_71ySws82k+dsB5joJJ_vQ.Status"), function() {
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
                                uuid: "13",
                                alias: "4"
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
                                    }, "Personal details")];
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
                                Status: model.getCachedValue(idService.getId("1IOi4AjMNE6GVreeLPHF6g.Status"), function() {
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
                                uuid: "16",
                                alias: "5"
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
                                    }, "Identity verification")];
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
                                Status: model.getCachedValue(idService.getId("HcubDCqq7kW_hi7tw+7Qxg.Status"), function() {
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
                                uuid: "19",
                                alias: "6"
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
                                    }, "Employment details")];
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
                                Status: model.getCachedValue(idService.getId("nY+iSbdNb0OUPTZzsRlMnA.Status"), function() {
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
                                uuid: "22",
                                alias: "7"
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
                                    }, "Address details")];
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
                                Status: model.getCachedValue(idService.getId("GOYBTXbDy0uc0iTDvDQ8FQ.Status"), function() {
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
                                uuid: "25",
                                alias: "8"
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
                                    }, "Promotion platforms")];
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
                                Status: model.getCachedValue(idService.getId("ALhm7OYNQkiqZx1ptinZ+g.Status"), function() {
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
                                uuid: "28",
                                alias: "9"
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
                                                uuid: "29"
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
                                            uuid: "30"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Terms of use")];
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
                                Status: model.getCachedValue(idService.getId("nVIAdNTPa0OnhdhJcNJ0BQ.Status"), function() {
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
                                uuid: "31",
                                alias: "10"
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
                                                uuid: "32"
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
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "CFDs commission")];
                                })
                            },
                            _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep())]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "34"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.realSignupContent,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__content",
                _idProps: {
                    service: idService,
                    name: "RealSignupContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.RealSignupLayout.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealSignupLayout.mvc$translationsResources", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_RealSignupLayout_mvc_TranslationsResources) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_RealSignupLayout_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "8da6947d-d3f6-4313-9184-07fe5c029d6c");
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "a4415514-3ca4-47f4-bf13-95a75c2179ca");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: MountDerivAPIClient
                                PartnersHubController.default.mountDerivAPIClient$Action(callContext);
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


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8da6947d-d3f6-4313-9184-07fe5c029d6c");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "a4415514-3ca4-47f4-bf13-95a75c2179ca");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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


define("PartnersHub.Layouts.RealSignupLayout.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});