define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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

        GetEmploymentStatusesAggrRecInner.RecordListType = PartnersHubModel.RL_117c7b7da327962152f7a4113c25ca3f;
        var GetEmploymentStatusesAggrRec = GetEmploymentStatusesAggrRecInner;
        GetEmploymentStatusesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isTaxInfoModalOpen", "isTaxInfoModalOpenVar", "isTaxInfoModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                TaxInfoForm: OS.Model.ValidationWidgetRecord,
                Input1: OS.Model.ValidationWidgetRecord,
                TaxIdentificationNumber: OS.Model.ValidationWidgetRecord,
                Checkbox1: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$model", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_model, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.EmploymentDetailsMobile";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsMobile",
                functionKey: "1b789a80-2dcb-44c9-9bf1-5001c76b621e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_InputWithIcon_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px;"
                },
                showPopup: model.variables.isTaxInfoModalOpenVar,
                style: "\"popup-dialog\"",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("aqBSd0vY4UeCYB0sG+khyQ#Value", "Tax information"))],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.closeTaxInfoModal$Action(controller.callContext(eventHandlerContext));

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
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("3CQLlTqfj0y2blXOAjEJGg#Value", "Do you have a tax indentification?"))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 16px; justify-content: center; margin-top: 20px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "align-items: center; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 38px; justify-content: center; padding: 12px 28px;"
                },
                gridProperties: {
                    width: "100%",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.nextStep$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "YeButton2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-weight: bold;"
                },
                text: [$text(getTranslation("B_WVXdWSW0CDoXZVQhgRCQ#Value", "Yes"))],
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "align-items: center; background: var(--Neutral-Neutral-0, #FFF); border: 1px solid var(--Brand-Secondary-Base, #FF444F); border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 38px; justify-content: center; padding: 12px 28px;"
                },
                gridProperties: {
                    width: "100%",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.goToAddressDetails$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "NoButton2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #FF444F;"
                },
                text: [$text(getTranslation("t0UTM6piu0C_k9PNxfLJww#Value", "No"))],
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "display-flex flex-direction-column gap-base",
                visible: (PartnersHubClientVariables.getRealSignupEmploymentDetailMobileScreen() === "status_list"),
                _idProps: {
                    service: idService,
                    name: "EmploymentStatusList"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("8jg4xfrK_EuVY+QGVDSwmg#Value", "Select your employment status")), React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.getEmploymentStatusesAggr.listOut,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.ListItem, {
                            extendedProperties: {
                                style: "align-items: center; background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 4px; cursor: pointer; display: flex; padding: 16px; width: 100%;"
                            },
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.listItem1OnClick$Action(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr, controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "",
                            triggerActionOnFullSwipeLeft: true,
                            triggerActionOnFullSwipeRight: true,
                            _idProps: {
                                service: idService,
                                name: "ListItem2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                leftActions: PlaceholderContent.Empty,
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; justify-content: space-between;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-style: normal; font-weight: 700; line-height: 21px;"
                                        },
                                        value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)
                                    }), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                rightActions: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: (PartnersHubClientVariables.getRealSignupEmploymentDetailMobileScreen() === "employment_details"),
                _idProps: {
                    service: idService,
                    name: "EmploymentDetailsTaxInfo"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "\"form card\"",
                _idProps: {
                    service: idService,
                    name: "TaxInfoForm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("494abvAK6kWbEPLJhBBb+Q#Value", "Country of tax residence"))), React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                    validationParentId: idService.getId("TaxInfoForm")
                },
                _idProps: {
                    service: idService,
                    uuid: "20",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.openResidenceList$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer; font-size: 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "angle-down",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("TaxInfoForm")
                            },
                            enabled: true,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.openResidenceList$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Text*/ 0,
                            mandatory: true,
                            maxLength: 50,
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxResidence(), function(value) {
                                PartnersHubClientVariables.setRealSignupTaxResidence(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupTaxResidence())]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "23"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "24"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("ymFzQmrOoEemwDnHQ8ikYA#Value", "Tax identification number (optional)"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("TaxInfoForm")
                },
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: false,
                maxLength: 50,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.taxIdentificationNumberOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                prompt: "Enter your tax identification number",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxIdentificationNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupTaxIdentificationNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "TaxIdentificationNumber"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "26"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("TaxInfoForm")
                },
                enabled: true,
                style: model.getCachedValue(idService.getId("Checkbox1.Style"), function() {
                    return ((PartnersHubClientVariables.getRealSignupisCheckboxError()) ? ("error-checkbox") : ("checkbox"));
                }, function() {
                    return PartnersHubClientVariables.getRealSignupisCheckboxError();
                }),
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupTINCheckbox(), function(value) {
                    PartnersHubClientVariables.setRealSignupTINCheckbox(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $text(getTranslation("mA3HrdNMnEKRV9EzarHiKg#Value", "I confirm that my tax information is accurate and complete. "))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: (PartnersHubClientVariables.getRealSignupisCheckboxError() === true),
                _idProps: {
                    service: idService,
                    uuid: "28"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #DC2020;"
                },
                text: [$text(getTranslation("RVR81evqbk+z+FPlOC+lXA#Value", "This is required."))],
                _idProps: {
                    service: idService,
                    uuid: "29"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "30"
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
                    title: "Next"
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
                    validationService: validationService,
                    validationParentId: idService.getId("TaxInfoForm")
                },
                _idProps: {
                    service: idService,
                    uuid: "31",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$NextStepReal", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_TranslationsResources);
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
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/PartnersHub/RealAccountCreationFlow/EmploymentDetailsMobile/ScreenDataSetGetEmploymentStatuses", "OMyidYGqb_lsx3H6Y6vNEQ", maxRecords, startIndex, function(b) {
                                model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEmploymentStatuses", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEmploymentStatuses");
                                span.setAttribute("outsystems.function.key", "f6861c11-c6e8-40c0-bc93-42688b0fad41");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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
            get _taxIdentificationNumberOnChange$Action() {
                if (!(this.hasOwnProperty("__taxIdentificationNumberOnChange$Action"))) {
                    this.__taxIdentificationNumberOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
                                span.setAttribute("outsystems.function.key", "1903f23a-9eae-43e6-9308-08aa392466c8");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TaxIdentificationNumberOnChange");
                                callContext = controller.callContext(callContext);
                                if (((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === ""))) {
                                    // RealSignupisCheckboxError = False
                                    PartnersHubClientVariables.setRealSignupisCheckboxError(false);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__taxIdentificationNumberOnChange$Action;
            }
            set _taxIdentificationNumberOnChange$Action(value) {
                this.__taxIdentificationNumberOnChange$Action = value;
            }

            get _openResidenceList$Action() {
                if (!(this.hasOwnProperty("__openResidenceList$Action"))) {
                    this.__openResidenceList$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenResidenceList", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenResidenceList");
                                span.setAttribute("outsystems.function.key", "54e498e4-eb5d-4619-8b30-4efebd84fcc5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenResidenceList");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/TaxResidenceList
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "TaxResidenceList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openResidenceList$Action;
            }
            set _openResidenceList$Action(value) {
                this.__openResidenceList$Action = value;
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
                                span.setAttribute("outsystems.function.key", "7b6824ea-8af0-4189-8725-1a3cacdba858");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PrimaryButtononClick");
                                callContext = controller.callContext(callContext);
                                if ((((PartnersHubClientVariables.getRealSignupTINCheckbox() === false) && ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== (""))))) {
                                    // RealSignupisCheckboxError = True
                                    PartnersHubClientVariables.setRealSignupisCheckboxError(true);
                                } else {
                                    if (((((PartnersHubClientVariables.getRealSignupTINCheckbox() === true) || (PartnersHubClientVariables.getRealSignupisCheckboxError() === false)) || (PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === "")))) {
                                        // Execute Action: RealSignupNextStep
                                        PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                        // Execute Action: RealSignupNextStepProgressBar
                                        PartnersHubController.default.realSignupNextStepProgressBar$Action(12, callContext);
                                        // Execute Action: GetHeaderTitle
                                        PartnersHubController.default.getHeaderTitle$Action(callContext);
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

                return this.__primaryButtononClick$Action;
            }
            set _primaryButtononClick$Action(value) {
                this.__primaryButtononClick$Action = value;
            }

            get _nextStep$Action() {
                if (!(this.hasOwnProperty("__nextStep$Action"))) {
                    this.__nextStep$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextStep", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextStep");
                                span.setAttribute("outsystems.function.key", "7c6c7a8b-7da0-4ddf-9c61-99bb3065087c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextStep");
                                callContext = controller.callContext(callContext);
                                // isTaxInfoModalOpen = False
                                model.variables.isTaxInfoModalOpenVar = false;
                                // RealSignupEmploymentDetailMobileScreen = "employment_details"
                                PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("employment_details");
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__nextStep$Action;
            }
            set _nextStep$Action(value) {
                this.__nextStep$Action = value;
            }

            get _goToAddressDetails$Action() {
                if (!(this.hasOwnProperty("__goToAddressDetails$Action"))) {
                    this.__goToAddressDetails$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoToAddressDetails", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoToAddressDetails");
                                span.setAttribute("outsystems.function.key", "a6b46e4c-03b6-4299-ad9c-1b03a1863687");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoToAddressDetails");
                                callContext = controller.callContext(callContext);
                                // Execute Action: NextStepReal
                                PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__goToAddressDetails$Action;
            }
            set _goToAddressDetails$Action(value) {
                this.__goToAddressDetails$Action = value;
            }

            get _closeTaxInfoModal$Action() {
                if (!(this.hasOwnProperty("__closeTaxInfoModal$Action"))) {
                    this.__closeTaxInfoModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseTaxInfoModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseTaxInfoModal");
                                span.setAttribute("outsystems.function.key", "a9e9841c-812a-42d2-9ef2-8eec62f1a805");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseTaxInfoModal");
                                callContext = controller.callContext(callContext);
                                // isTaxInfoModalOpen = False
                                model.variables.isTaxInfoModalOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeTaxInfoModal$Action;
            }
            set _closeTaxInfoModal$Action(value) {
                this.__closeTaxInfoModal$Action = value;
            }

            get _listItem1OnClick$Action() {
                if (!(this.hasOwnProperty("__listItem1OnClick$Action"))) {
                    this.__listItem1OnClick$Action = function(statusIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ListItem1OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ListItem1OnClick");
                                span.setAttribute("outsystems.function.key", "e5235d31-f17c-48b0-bf09-c418afe30620");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ListItem1OnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.ListItem1OnClick$vars"))());
                                vars.value.statusInLocal = statusIn;
                                // RealSignupEmploymentStatus = Status
                                PartnersHubClientVariables.setRealSignupEmploymentStatus(vars.value.statusInLocal);
                                if ((((vars.value.statusInLocal === "Student") || (vars.value.statusInLocal === "Unemployed")))) {
                                    // isTaxInfoModalOpen = True
                                    model.variables.isTaxInfoModalOpenVar = true;
                                } else {
                                    // RealSignupEmploymentDetailMobileScreen = "employment_details"
                                    PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("employment_details");
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__listItem1OnClick$Action;
            }
            set _listItem1OnClick$Action(value) {
                this.__listItem1OnClick$Action = value;
            }


            taxIdentificationNumberOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
                        span.setAttribute("outsystems.function.key", "1903f23a-9eae-43e6-9308-08aa392466c8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._taxIdentificationNumberOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            openResidenceList$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenResidenceList__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenResidenceList");
                        span.setAttribute("outsystems.function.key", "54e498e4-eb5d-4619-8b30-4efebd84fcc5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openResidenceList$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "7b6824ea-8af0-4189-8725-1a3cacdba858");
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

            nextStep$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextStep__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextStep");
                        span.setAttribute("outsystems.function.key", "7c6c7a8b-7da0-4ddf-9c61-99bb3065087c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._nextStep$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            goToAddressDetails$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoToAddressDetails__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoToAddressDetails");
                        span.setAttribute("outsystems.function.key", "a6b46e4c-03b6-4299-ad9c-1b03a1863687");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goToAddressDetails$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            closeTaxInfoModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseTaxInfoModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseTaxInfoModal");
                        span.setAttribute("outsystems.function.key", "a9e9841c-812a-42d2-9ef2-8eec62f1a805");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeTaxInfoModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            listItem1OnClick$Action(statusIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ListItem1OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ListItem1OnClick");
                        span.setAttribute("outsystems.function.key", "e5235d31-f17c-48b0-bf09-c418afe30620");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._listItem1OnClick$Action, callContext, statusIn);
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
                    this._onInitializeEventHandler = null;
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.ListItem1OnClick$vars", [{
            name: "Status",
            attrName: "statusInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.de-DE", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Dies ist erforderlich.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Ich bestätige, dass meine Steuerinformationen genau und vollständig sind.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Steueridentifikationsnummer (optional)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "Wohnsitzland für steuerliche Zwecke",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Wählen Sie Ihren Beschäftigungsstatus aus",
        "t0UTM6piu0C_k9PNxfLJww#Value": "Nein",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Ja",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "Haben Sie eine Steueridentifikationsnummer?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Steuerinformationen"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.es-ES", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Esto es requerido.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Confirmo que mi información fiscal es precisa y completa.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Número de identificación fiscal (opcional)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "País de residencia fiscal",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Seleccione su estado de empleo",
        "t0UTM6piu0C_k9PNxfLJww#Value": "No",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Sí",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "¿Tiene un número de identificación fiscal?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Información fiscal"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.fr-FR", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Ceci est requis.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Je confirme que mes informations fiscales sont exactes et complètes.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Numéro d\'identification fiscale (facultatif)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "Pays de résidence fiscale",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Sélectionnez votre statut d\'emploi",
        "t0UTM6piu0C_k9PNxfLJww#Value": "Non",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Oui",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "Avez-vous un numéro d\'identification fiscale ?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Informations fiscales"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.it-IT", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Questo è richiesto.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Confermo che le mie informazioni fiscali sono accurate e complete.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Numero di identificazione fiscale (opzionale)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "Paese di residenza fiscale",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Seleziona il tuo stato di occupazione",
        "t0UTM6piu0C_k9PNxfLJww#Value": "No",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Sì",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "Hai un numero di identificazione fiscale?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Informazioni fiscali"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.pl-PL", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "To jest wymagane.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Potwierdzam, że moje informacje podatkowe są dokładne i kompletne.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Numer identyfikacji podatkowej (opcjonalnie)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "Kraj rezydencji podatkowej",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Wybierz swój status zatrudnienia",
        "t0UTM6piu0C_k9PNxfLJww#Value": "Nie",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Tak",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "Czy masz numer identyfikacji podatkowej?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Informacje podatkowe"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.pt-PT", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Isto é necessário.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Confirmo que a minha informação fiscal é precisa e completa.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Número de identificação fiscal (opcional)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "País de residência fiscal",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Selecione o seu estado de emprego",
        "t0UTM6piu0C_k9PNxfLJww#Value": "Não",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Sim",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "Você tem um número de identificação fiscal?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Informação fiscal"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.ru-RU", [], function() {
    return {
        "RVR81evqbk+z+FPlOC+lXA#Value": "Это требуется.",
        "mA3HrdNMnEKRV9EzarHiKg#Value": "Я подтверждаю, что моя налоговая информация точна и полна.",
        "ymFzQmrOoEemwDnHQ8ikYA#Value": "Идентификационный номер налогоплательщика (по желанию)",
        "494abvAK6kWbEPLJhBBb+Q#Value": "Страна налогового резиденства",
        "8jg4xfrK_EuVY+QGVDSwmg#Value": "Выберите свой статус занятости",
        "t0UTM6piu0C_k9PNxfLJww#Value": "Нет",
        "B_WVXdWSW0CDoXZVQhgRCQ#Value": "Да",
        "3CQLlTqfj0y2blXOAjEJGg#Value": "У вас есть налоговый идентификатор?",
        "aqBSd0vY4UeCYB0sG+khyQ#Value": "Налоговая информация"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});