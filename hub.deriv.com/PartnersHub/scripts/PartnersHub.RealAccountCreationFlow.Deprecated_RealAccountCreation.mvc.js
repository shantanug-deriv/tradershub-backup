define("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.Layouts.RealSignupLayout.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.IdentityVerificationBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$model", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupResetStep", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHub_Layouts_RealSignupLayout_mvcModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvcModel, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvcModel, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvcModel) {
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
                Model._hasValidationWidgetsValue = (((((((PartnersHub_Layouts_RealSignupLayout_mvcModel.hasValidationWidgets || CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$model", "PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealSignupLayout.mvc$view", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.IdentityVerificationBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$view", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupResetStep", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, React, OSView, PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_model, PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_RealSignupLayout_mvc_view, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.Deprecated_RealAccountCreation";
        }

        static getAttributes() {
            return {
                codeFunction: "Deprecated_RealAccountCreation",
                functionKey: "9bee18f9-f2f4-4e7d-a709-8b23b25c946a",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_RealSignupLayout_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("+Rjum_TyfU6nCYsjslyUag#Title", "Deprecated_RealAccountCreation");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_RealSignupLayout_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    realSignupContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 16px; width: 400px;"
                            },
                            showPopup: model.variables.isExitModalOpenVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 16px;"
                            },
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
                                style: "align-items: center; display: flex; justify-content: space-between;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Exit profile setup?"],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.setExitModal$Action(false, controller.callContext(eventHandlerContext));

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
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Complete the setup to access custom commission plans.", React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
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
                                title: "No, stay",
                                borderRadius: "100px",
                                Width: "100%",
                                enabled: true,
                                height: "38px"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.setExitModal$Action(false, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "7",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_SecondaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Yes, exit",
                                Width: "100%",
                                borderRadius: "100px",
                                BorderColor: "#FF444F",
                                height: "38px",
                                isTitleBold: false
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.closeandGoToDashboardExitModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "8",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "padding: 48px 24px 24px 24px; text-align: left;"
                            },
                            gridProperties: {
                                classes: "OSInline ThemeGrid_MarginGutter",
                                width: "850px"
                            },
                            style: "real-signup",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; justify-content: space-between;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TitleContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((PartnersHubClientVariables.getRealSignupCurrentStep() > 0), false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.goBack$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "cursor: pointer;"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })), React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold;"
                            },
                            value: PartnersHubClientVariables.getCurrentStepTitle(),
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.setExitModal$Action(true, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 14px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh; margin-top: 24px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 0),
                            _idProps: {
                                service: idService,
                                name: "AccountTypeContainer"
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
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, {
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
                                },
                                onClickEvent$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "19",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100%; margin-top: 24px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 1),
                            _idProps: {
                                service: idService,
                                name: "AccountCurrencyContainer"
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
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, {
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
                                },
                                nextStepEvent$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "22",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 2),
                            _idProps: {
                                service: idService,
                                name: "PersonalDetailsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 20px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_view, {
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
                                uuid: "25",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 3),
                            _idProps: {
                                service: idService,
                                name: "IdentityVerificationContainer"
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
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, {
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
                                },
                                onClickEvent$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "28",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh; margin-top: 24px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 4),
                            _idProps: {
                                service: idService,
                                name: "EmploymentDetailsContainer"
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
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 5),
                            _idProps: {
                                service: idService,
                                name: "AddressDetailsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 22px; font-weight: bold;"
                            },
                            text: ["Address details"],
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Next"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "35",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Reset"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.reset$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "36",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Back"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goBack$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "37",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 6),
                            _idProps: {
                                service: idService,
                                name: "PromotionPlatformsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 22px; font-weight: bold;"
                            },
                            text: ["Promotion Platforms"],
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Next"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "42",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Reset"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.reset$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "43",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Back"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goBack$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "44",
                                alias: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; font-size: 22px; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 7),
                            _idProps: {
                                service: idService,
                                name: "TermsOfUseContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                isMobileLayout: false
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
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; height: 100vh;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 8),
                            _idProps: {
                                service: idService,
                                name: "CFDCommissionContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "48"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "49"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; font-size: 22px; font-weight: bold;"
                            },
                            text: ["CFD Commission"],
                            _idProps: {
                                service: idService,
                                uuid: "50"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Next"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "51",
                                alias: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Reset"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.reset$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "52",
                                alias: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                title: "Back"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goBack$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "53",
                                alias: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getCurrentStepTitle()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep()), asPrimitiveValue(model.variables.isExitModalOpenVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller", "PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$controller.OnInitialize.JavaScript1JS", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupResetStep", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController, PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_controller_OnInitialize_JavaScript1JS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_TranslationsResources);
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
            get _goNextStep$Action() {
                if (!(this.hasOwnProperty("__goNextStep$Action"))) {
                    this.__goNextStep$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoNextStep", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoNextStep");
                                span.setAttribute("outsystems.function.key", "05fb4dc5-71dc-4d84-9d64-6d3fe86cf453");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoNextStep");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RealSignupNextStep
                                PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                // Execute Action: GetHeaderTitle
                                PartnersHubController.default.getHeaderTitle$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__goNextStep$Action;
            }
            set _goNextStep$Action(value) {
                this.__goNextStep$Action = value;
            }

            get _closeandGoToDashboardExitModal$Action() {
                if (!(this.hasOwnProperty("__closeandGoToDashboardExitModal$Action"))) {
                    this.__closeandGoToDashboardExitModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseandGoToDashboardExitModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseandGoToDashboardExitModal");
                                span.setAttribute("outsystems.function.key", "2be8fb41-fa8a-45a8-b7e0-2b2d27c65703");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseandGoToDashboardExitModal");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeandGoToDashboardExitModal$Action;
            }
            set _closeandGoToDashboardExitModal$Action(value) {
                this.__closeandGoToDashboardExitModal$Action = value;
            }

            get _goBack$Action() {
                if (!(this.hasOwnProperty("__goBack$Action"))) {
                    this.__goBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoBack");
                                span.setAttribute("outsystems.function.key", "38bb45bd-026d-43ca-a1cd-72348a00686d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoBack");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RealSignupPreviousStep
                                PartnersHubController.default.realSignupPreviousStep$Action(1, callContext);
                                // Execute Action: GetHeaderTitle
                                PartnersHubController.default.getHeaderTitle$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__goBack$Action;
            }
            set _goBack$Action(value) {
                this.__goBack$Action = value;
            }

            get _setExitModal$Action() {
                if (!(this.hasOwnProperty("__setExitModal$Action"))) {
                    this.__setExitModal$Action = function(isOpenIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("setExitModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "setExitModal");
                                span.setAttribute("outsystems.function.key", "820c4aff-e2ad-460b-973b-e9556ab929db");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("setExitModal");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.setExitModal$vars"))());
                                vars.value.isOpenInLocal = isOpenIn;
                                if ((vars.value.isOpenInLocal)) {
                                    // isExitModalOpen = True
                                    model.variables.isExitModalOpenVar = true;
                                } else {
                                    // isExitModalOpen = False
                                    model.variables.isExitModalOpenVar = false;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setExitModal$Action;
            }
            set _setExitModal$Action(value) {
                this.__setExitModal$Action = value;
            }

            get _reset$Action() {
                if (!(this.hasOwnProperty("__reset$Action"))) {
                    this.__reset$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Reset", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Reset");
                                span.setAttribute("outsystems.function.key", "cd6de95e-affb-46e5-9829-2d5d6b046435");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Reset");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RealSignupResetStep
                                PartnersHubController.default.realSignupResetStep$Action(callContext);
                                // Execute Action: GetHeaderTitle
                                PartnersHubController.default.getHeaderTitle$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__reset$Action;
            }
            set _reset$Action(value) {
                this.__reset$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e2ac95ae-199b-42ac-a5e5-0af319b0eaa2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MountDerivAPIClient
                                    PartnersHubController.default.mountDerivAPIClient$Action(callContext);
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "35ed9f03-caf5-45ba-80d9-1f6018814d94");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_Deprecated_RealAccountCreation_mvc_controller_OnInitialize_JavaScript1JS, "JavaScript1", "OnInitialize", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.OnInitialize$javaScript1JSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return PartnersHubController.default.sendAuthorize$Action(function() {
                                        var rec = new PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure();
                                        rec.authorizeAttr = javaScript1JSResult.value.tokenOut;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
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

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }


            goNextStep$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoNextStep__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoNextStep");
                        span.setAttribute("outsystems.function.key", "05fb4dc5-71dc-4d84-9d64-6d3fe86cf453");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goNextStep$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            closeandGoToDashboardExitModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseandGoToDashboardExitModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseandGoToDashboardExitModal");
                        span.setAttribute("outsystems.function.key", "2be8fb41-fa8a-45a8-b7e0-2b2d27c65703");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeandGoToDashboardExitModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            goBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoBack");
                        span.setAttribute("outsystems.function.key", "38bb45bd-026d-43ca-a1cd-72348a00686d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._goBack$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setExitModal$Action(isOpenIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("setExitModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "setExitModal");
                        span.setAttribute("outsystems.function.key", "820c4aff-e2ad-460b-973b-e9556ab929db");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setExitModal$Action, callContext, isOpenIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            reset$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Reset__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Reset");
                        span.setAttribute("outsystems.function.key", "cd6de95e-affb-46e5-9829-2d5d6b046435");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._reset$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "e2ac95ae-199b-42ac-a5e5-0af319b0eaa2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
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
                        return PartnersHub_RealAccountCreationFlowController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.setExitModal$vars", [{
            name: "isOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.OnInitialize$javaScript1JSResult", [{
            name: "token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$controller.OnInitialize.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')
        $parameters.token = token;
    };
});


define("PartnersHub.RealAccountCreationFlow.Deprecated_RealAccountCreation.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});