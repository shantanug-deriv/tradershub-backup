define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "PartnersHub.controller", "RESTAPIWebsocket.controller", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.IdentityVerificationBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$model", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$model", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$model", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$model", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.model$ST_c98d478d92307b8784bb1e90423f775bStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_db915d6b5cc14a9247531baaa76ce4a5Structure", "PartnersHub.model$RL_27bf68eaead02a99ca09aef3148704b7", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupPreviousStepProgressBar", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$MountDerivAPIClient", "RESTAPIWebsocket.controller$GetWebsiteStatus", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.controller$SendAuthorize", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, PartnersHubController, RESTAPIWebsocketController, PartnersHub_Layouts_RealAccountCreationLayout_mvcModel, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvcModel, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvcModel, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvcModel, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvcModel, PartnersHub_RealAccountCreationFlow_Addressdetails_mvcModel, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvcModel, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvcModel, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvcModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure());
                    }, false, RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure),
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure());
                    }, false, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure),
                    this.attr("Country", "countryVar", "Country", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure());
                    }, false, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure)
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = ((((((((((((PartnersHub_Layouts_RealAccountCreationLayout_mvcModel.hasValidationWidgets || PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_Addressdetails_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvcModel.hasValidationWidgets) || PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$model", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.RealAccountCreationLayout.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.IdentityVerificationBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsMobile.mvc$view", "PartnersHub.RealAccountCreationFlow.Addressdetails.mvc$view", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$view", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$view", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.model$ST_c98d478d92307b8784bb1e90423f775bStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_db915d6b5cc14a9247531baaa76ce4a5Structure", "PartnersHub.model$RL_27bf68eaead02a99ca09aef3148704b7", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupPreviousStepProgressBar", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$MountDerivAPIClient", "RESTAPIWebsocket.controller$GetWebsiteStatus", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.controller$SendAuthorize", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_model, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_RealAccountCreationLayout_mvc_view, OSWidgets, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_view, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_view, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_view, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.RealAccountCreation";
        }

        static getAttributes() {
            return {
                codeFunction: "RealAccountCreation",
                functionKey: "237d20f5-310d-4b77-b538-9d61598ecf9d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.RealAccountCreationFlow.RealAccountCreation.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_RealAccountCreationLayout_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_view, PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_view, PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_view, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_view, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("9SB9Iw0xd0u1OJ1hWY7PnQ#Title", "RealAccountCreation");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_RealAccountCreationLayout_mvc_view, {
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
                    onClickBack2$Action: function() {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; justify-content: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "real-signup",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; justify-content: space-between; min-width: 800px;"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "title-container",
                            visible: PartnersHubClientVariables.getIsDesktop(),
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
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((PartnersHubClientVariables.getRealSignupCurrentStep() > 1), false, this, function() {
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
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold;"
                            },
                            value: PartnersHubClientVariables.getCurrentStepTitle(),
                            _idProps: {
                                service: idService,
                                uuid: "6"
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
                                uuid: "7"
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
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; justify-content: space-between;"
                            },
                            visible: !(PartnersHubClientVariables.getIsDesktop()),
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            value: PartnersHubClientVariables.getCurrentStepTitle(),
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.goNextStep$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: (((PartnersHubClientVariables.getRealSignupCurrentStep() === 4) && (PartnersHubClientVariables.getisIDVMobileDocumentNumberContainerVisible() === false)) && PartnersHubClientVariables.getRealSignupIsIDVSupported()),
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; text-decoration: underline;"
                            },
                            text: [$text(getTranslation("qG1AIVmW3kew2FwCyxYUew#Value", "Skip"))],
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; margin-top: 24px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 1),
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
                                uuid: "14"
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
                                uuid: "15",
                                alias: "2"
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
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 2),
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
                                uuid: "17"
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
                                uuid: "18",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: (PartnersHubClientVariables.getRealSignupCurrentStep() === 3),
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
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
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
                                uuid: "21",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: model.getCachedValue(idService.getId("IdentityVerificationContainer.Visible"), function() {
                                return (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? (((PartnersHubClientVariables.getRealSignupCurrentStep()).toString() === "")) : ((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)));
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupCurrentStep();
                            }),
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
                                uuid: "23"
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
                                uuid: "24",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-direction: column; margin-top: 12px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: model.getCachedValue(idService.getId("EmploymentDetailsContainer.Visible"), function() {
                                return (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? ((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) : ((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)));
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupCurrentStep();
                            }),
                            _idProps: {
                                service: idService,
                                name: "EmploymentDetailsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    ResidenceListResponse: model.variables.residenceListResponseVar
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
                                    uuid: "27",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_RealAccountCreationFlow_EmploymentDetailsMobile_mvc_view, {
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
                                    uuid: "29",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("AddressDetailsContainer.Visible"), function() {
                                return (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? ((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) : ((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)));
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupCurrentStep();
                            }),
                            _idProps: {
                                service: idService,
                                name: "AddressDetailsContainer"
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
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_RealAccountCreationFlow_Addressdetails_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                StatesListResponse: model.variables.statesListResponseVar
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
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: model.getCachedValue(idService.getId("AccountInformation.Visible"), function() {
                                return (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? ((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) : ((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)));
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupCurrentStep();
                            }),
                            _idProps: {
                                service: idService,
                                name: "AccountInformation"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((PartnersHubClientVariables.getSelectedAccountType() === "Individual"), false, this, function() {
                            return [React.createElement(PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    isMobileLayout: PartnersHubClientVariables.getIsMobile()
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
                                    uuid: "34",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_view, {
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
                                    uuid: "35",
                                    alias: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: model.getCachedValue(idService.getId("TermsOfUse.Visible"), function() {
                                return (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? ((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) : ((PartnersHubClientVariables.getRealSignupCurrentStep() === 8)));
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                            }, function() {
                                return PartnersHubClientVariables.getRealSignupCurrentStep();
                            }),
                            _idProps: {
                                service: idService,
                                name: "TermsOfUse"
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
                                isMobileLayout: PartnersHubClientVariables.getIsMobile()
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
                                uuid: "37",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 16px; width: 400px;"
                            },
                            showPopup: model.variables.isExitModalOpenVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: idService,
                                uuid: "38"
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
                                uuid: "39"
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
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [$text(getTranslation("eA6s0SHKm0+A8rlV+JQ4gw#Value", "Exit profile setup?"))],
                            _idProps: {
                                service: idService,
                                uuid: "41"
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
                                uuid: "42"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), $text(getTranslation("INDkvkIe4k2YS9jNZT4rPQ#Value", "Complete the setup to access custom commission plans.")), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "43"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "44"
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
                                height: "38px",
                                enabled: true,
                                title: "Finish setup",
                                borderRadius: "100px",
                                Width: "100%"
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
                                uuid: "45",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "46"
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
                                borderRadius: "100px",
                                Width: "100%",
                                height: "38px",
                                BorderColor: "#FF444F",
                                isTitleBold: false,
                                title: "Exit"
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
                                uuid: "47",
                                alias: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isExitModalOpenVar), asPrimitiveValue(PartnersHubClientVariables.getIsMobile()), asPrimitiveValue(PartnersHubClientVariables.getSelectedAccountType()), asPrimitiveValue(model.variables.statesListResponseVar), asPrimitiveValue(model.variables.residenceListResponseVar), asPrimitiveValue(PartnersHubClientVariables.getRealSignupIsIDVSupported()), asPrimitiveValue(PartnersHubClientVariables.getisIDVMobileDocumentNumberContainerVisible()), asPrimitiveValue(PartnersHubClientVariables.getCurrentStepTitle()), asPrimitiveValue(PartnersHubClientVariables.getRealSignupCurrentStep()), asPrimitiveValue(PartnersHubClientVariables.getIsDesktop())]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller.OnReady.GetAuthTokenJS", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.model$ST_c98d478d92307b8784bb1e90423f775bStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_db915d6b5cc14a9247531baaa76ce4a5Structure", "PartnersHub.model$RL_27bf68eaead02a99ca09aef3148704b7", "PartnersHub.controller$RealSignupPreviousStep", "PartnersHub.controller$RealSignupPreviousStepProgressBar", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$MountDerivAPIClient", "RESTAPIWebsocket.controller$GetWebsiteStatus", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.controller$SendAuthorize", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure", "PartnersHub.controller$SendStatesList", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller_OnReady_GetAuthTokenJS, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_TranslationsResources);
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
            get _goBack$Action() {
                if (!(this.hasOwnProperty("__goBack$Action"))) {
                    this.__goBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoBack");
                                span.setAttribute("outsystems.function.key", "0303330b-742d-47db-aa2f-3ef8c2aadbb1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoBack");
                                callContext = controller.callContext(callContext);
                                if (((((PartnersHubClientVariables.getRealSignupCurrentStep() === 3) && PartnersHubClientVariables.getIsMobile()) && (PartnersHubClientVariables.getisDateOfBirthVisible() === true)))) {
                                    // isDateOfBirthVisible = False
                                    PartnersHubClientVariables.setisDateOfBirthVisible(false);
                                } else {
                                    if ((((PartnersHubClientVariables.getRealSignupCurrentStep() === 4) && PartnersHubClientVariables.getIsMobile()) && (PartnersHubClientVariables.getisIDVMobileDocumentNumberContainerVisible() === true))) {
                                        // isIDVMobileDocumentNumberContainerVisible = False
                                        PartnersHubClientVariables.setisIDVMobileDocumentNumberContainerVisible(false);
                                    } else {
                                        if ((((PartnersHubClientVariables.getRealSignupCurrentStep() === 5) && PartnersHubClientVariables.getIsMobile()) && (PartnersHubClientVariables.getRealSignupEmploymentDetailMobileScreen() === "employment_details"))) {
                                            // RealSignupEmploymentDetailMobileScreen = "status_list"
                                            PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("status_list");
                                        } else {
                                            // Execute Action: RealSignupPreviousStep
                                            PartnersHubController.default.realSignupPreviousStep$Action(1, callContext);
                                            // Execute Action: RealSignupPreviousStepProgressBar
                                            PartnersHubController.default.realSignupPreviousStepProgressBar$Action(12, callContext);
                                            // Execute Action: GetHeaderTitle
                                            PartnersHubController.default.getHeaderTitle$Action(callContext);
                                        }

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

                return this.__goBack$Action;
            }
            set _goBack$Action(value) {
                this.__goBack$Action = value;
            }

            get _goNextStep$Action() {
                if (!(this.hasOwnProperty("__goNextStep$Action"))) {
                    this.__goNextStep$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoNextStep", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoNextStep");
                                span.setAttribute("outsystems.function.key", "5a3c87ea-d4dd-4444-b2c3-e7b9e67c22f9");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoNextStep");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RealSignupNextStep
                                PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                // Execute Action: RealSignupNextStepProgressBar
                                PartnersHubController.default.realSignupNextStepProgressBar$Action(12, callContext);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "789dc093-a008-4979-9477-3e90c195372e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var sendStatesListVar = new OS.DataTypes.VariableHolder();
                                var getAuthTokenJSResult = new OS.DataTypes.VariableHolder();
                                var checkIfIDVIsSupportedJSJSResult = new OS.DataTypes.VariableHolder();
                                var serializeResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MountDerivAPIClient
                                    PartnersHubController.default.mountDerivAPIClient$Action(callContext);
                                    getAuthTokenJSResult.value = OS.Logger.startActiveSpan("GetAuthToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GetAuthToken");
                                            span.setAttribute("outsystems.function.key", "4aca33ac-b0d8-4cb0-a5b5-fb5b31dc7d46");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller_OnReady_GetAuthTokenJS, "GetAuthToken", "OnReady", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.OnReady$getAuthTokenJSResult"))();
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
                                        rec.authorizeAttr = getAuthTokenJSResult.value.tokenOut;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: UseDevice
                                        PartnersHubController.default.useDevice$Action(callContext);
                                        // Execute Action: GetWebsiteStatus
                                        model.flush();
                                        return RESTAPIWebsocketController.default.getWebsiteStatus$Action(PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                            getWebsiteStatusVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: SendResidenceList
                                        model.flush();
                                        return PartnersHubController.default.sendResidenceList$Action(callContext).then(function(value) {
                                            sendResidenceListVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: GetSettings
                                        model.flush();
                                        return RESTAPIWebsocketController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getAuthTokenJSResult.value.tokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                            getSettingsVar.value = value;
                                        });
                                    }).then(function() {
                                        // ResidenceListResponse = SendResidenceList.ResidenceListResponse
                                        model.variables.residenceListResponseVar = sendResidenceListVar.value.residenceListResponseOut;
                                        // WebsiteStatusResponse = GetWebsiteStatus.Response
                                        model.variables.websiteStatusResponseVar = getWebsiteStatusVar.value.responseOut;
                                        // Country = GetSettings.Response.Get_settings.Country_code
                                        model.variables.countryVar = getSettingsVar.value.responseOut.get_settingsAttr.country_codeAttr;
                                        // JSON Serialize: SerializeResidenceList
                                        serializeResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(sendResidenceListVar.value.residenceListResponseOut, false, false);
                                        checkIfIDVIsSupportedJSJSResult.value = OS.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "CheckIfIDVIsSupportedJS");
                                                span.setAttribute("outsystems.function.key", "f9a07789-e7ca-431b-ba59-50a102e7dc09");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS, "CheckIfIDVIsSupportedJS", "OnReady", {
                                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(serializeResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    SelectedCitizenship: OS.DataConversion.JSNodeParamConverter.to(getSettingsVar.value.responseOut.get_settingsAttr.citizenAttr, OS.DataTypes.DataTypes.Text),
                                                    isIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.OnReady$checkIfIDVIsSupportedJSJSResult"))();
                                                    jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isIDVSupported, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // RealSignupIsIDVSupported = CheckIfIDVIsSupportedJS.isIDVSupported
                                        PartnersHubClientVariables.setRealSignupIsIDVSupported(checkIfIDVIsSupportedJSJSResult.value.isIDVSupportedOut);
                                        // Execute Action: SendStatesList
                                        model.flush();
                                        return PartnersHubController.default.sendStatesList$Action(function() {
                                            var rec = new PartnersHubModel.ST_8401e8b399f219fdd97b12284d97703eStructure();
                                            rec.states_listAttr = model.variables.countryVar;
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            sendStatesListVar.value = value;
                                        });
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

            get _closeandGoToDashboardExitModal$Action() {
                if (!(this.hasOwnProperty("__closeandGoToDashboardExitModal$Action"))) {
                    this.__closeandGoToDashboardExitModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseandGoToDashboardExitModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseandGoToDashboardExitModal");
                                span.setAttribute("outsystems.function.key", "97dbc350-7fe3-42ff-9dba-5740b2a03a63");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseandGoToDashboardExitModal");
                                callContext = controller.callContext(callContext);
                                // isExitModalOpen = False
                                model.variables.isExitModalOpenVar = false;
                                // isCompleteMyProfileEnabled = True
                                PartnersHubClientVariables.setisCompleteMyProfileEnabled(true);
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

            get _setExitModal$Action() {
                if (!(this.hasOwnProperty("__setExitModal$Action"))) {
                    this.__setExitModal$Action = function(isOpenIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("setExitModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "setExitModal");
                                span.setAttribute("outsystems.function.key", "e079d44c-9b81-409a-94ed-4122bd610f88");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("setExitModal");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.setExitModal$vars"))());
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


            goBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoBack");
                        span.setAttribute("outsystems.function.key", "0303330b-742d-47db-aa2f-3ef8c2aadbb1");
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

            goNextStep$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoNextStep__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoNextStep");
                        span.setAttribute("outsystems.function.key", "5a3c87ea-d4dd-4444-b2c3-e7b9e67c22f9");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "789dc093-a008-4979-9477-3e90c195372e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            closeandGoToDashboardExitModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseandGoToDashboardExitModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseandGoToDashboardExitModal");
                        span.setAttribute("outsystems.function.key", "97dbc350-7fe3-42ff-9dba-5740b2a03a63");
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

            setExitModal$Action(isOpenIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("setExitModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "setExitModal");
                        span.setAttribute("outsystems.function.key", "e079d44c-9b81-409a-94ed-4122bd610f88");
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.OnReady$getAuthTokenJSResult", [{
            name: "token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.OnReady$checkIfIDVIsSupportedJSJSResult", [{
            name: "isIDVSupported",
            attrName: "isIDVSupportedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.RealAccountCreation.setExitModal$vars", [{
            name: "isOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller.OnReady.GetAuthTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token');

        if (token) {
            $parameters.token = token;
        }
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.SelectedCitizenship)

        $parameters.isIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)


    };
});


define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.de-DE", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Vervollständigen Sie die Einrichtung, um auf benutzerdefinierte Provisionspläne zuzugreifen.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Profilausgang einrichten?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Überspringen"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.es-ES", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Completa la configuración para acceder a planes de comisión personalizados.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "¿Configurar el perfil de salida?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Saltar"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.fr-FR", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Complétez la configuration pour accéder aux plans de commission personnalisés.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Configurer le profil de sortie ?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Passer"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.it-IT", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Completa la configurazione per accedere ai piani di commissione personalizzati.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Configurare il profilo di uscita?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Salta"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.pl-PL", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Ukończ konfigurację, aby uzyskać dostęp do niestandardowych planów prowizji.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Ustawienie profilu wyjścia?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Pomiń"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.pt-PT", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Complete a configuração para aceder a planos de comissão personalizados.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Configurar perfil de saída?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Saltar"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.ru-RU", [], function() {
    return {
        "INDkvkIe4k2YS9jNZT4rPQ#Value": "Завершите настройку, чтобы получить доступ к индивидуальным планам комиссий.",
        "eA6s0SHKm0+A8rlV+JQ4gw#Value": "Настройка профиля выхода?",
        "qG1AIVmW3kew2FwCyxYUew#Value": "Пропустить"
    };
});

define("PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.RealAccountCreation.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_RealAccountCreation_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});