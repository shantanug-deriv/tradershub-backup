define("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "RESTAPIWebsocket.model", "PartnersHub.controller", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, RESTAPIWebsocketModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MaxCount", "maxCountVar", "MaxCount", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 100;
                    }, false),
                    this.attr("FirstName", "firstNameVar", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("DateofBirth2", "dateofBirth2Var", "DateofBirth2", true, false, OS.DataTypes.DataTypes.Date, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, false),
                    this.attr("CFDPassword", "cFDPasswordVar", "CFDPassword", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsPasswordValid", "isPasswordValidVar", "IsPasswordValid", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_72539fe43229e47c6f0bb03bc660d8fe());
                    }, false, PartnersHubModel.RL_72539fe43229e47c6f0bb03bc660d8fe),
                    this.attr("SelectedDocumentType", "selectedDocumentTypeVar", "SelectedDocumentType", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_eda668e7f210db3d136460db1684b63bStructure());
                    }, false, PartnersHubModel.ST_eda668e7f210db3d136460db1684b63bStructure),
                    this.attr("DocumentNumber", "documentNumberVar", "DocumentNumber", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Count", "countVar", "Count", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 9;
                    }, false),
                    this.attr("isTaxInfoModalOpen", "isTaxInfoModalOpenVar", "isTaxInfoModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("LastName", "lastNameVar", "LastName", true, false, OS.DataTypes.DataTypes.Text, function() {
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
                Form1: OS.Model.ValidationWidgetRecord,
                FirstName2: OS.Model.ValidationWidgetRecord,
                LastName2: OS.Model.ValidationWidgetRecord,
                Form2: OS.Model.ValidationWidgetRecord,
                Input_DateofBirth2: OS.Model.ValidationWidgetRecord,
                Form3: OS.Model.ValidationWidgetRecord,
                MobilePasswordField: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$model", "PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.MobileProgressBarLayout.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.LayoutBaseSection.mvc$view", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$view", "OutSystemsUI.Interaction.DatePicker.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "PartnersHub.RealAccountCreationFlow.IdentityVerificationBlock.mvc$view", "PartnersHub.RealAccountCreationFlow.TermsOfUseBlock.mvc$view", "CustomComponents.PasswordPolicy.PasswordPolicy.mvc$view", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, React, OSView, PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_model, PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_MobileProgressBarLayout_mvc_view, OSWidgets, PartnersHub_Layouts_LayoutBaseSection_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, OutSystemsUI_Interaction_DatePicker_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.Deprecated_MobileRealAccountCreation";
        }

        static getAttributes() {
            return {
                codeFunction: "Deprecated_MobileRealAccountCreation",
                functionKey: "dd1598b3-f656-427c-8388-ddb6b5723895",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_MobileProgressBarLayout_mvc_view, PartnersHub_Layouts_LayoutBaseSection_mvc_view, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_view, OutSystemsUI_Interaction_DatePicker_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, PartnersHub_RealAccountCreationFlow_IdentityVerificationBlock_mvc_view, PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("s5gV3Vb2fEKDiN22tXI4lQ#Title", "Deprecated_MobileRealAccountCreation");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_MobileProgressBarLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    BackStep: model.getCachedValue(idService.getId("RpgFcx5vPkuH5dYeR1d8Zg.BackStep"), function() {
                        return ((((PartnersHubClientVariables.getCurrentStepperPage() === 7) && (model.variables.selectedDocumentTypeVar.display_nameAttr === ""))) ? (2) : (1));
                    }, function() {
                        return PartnersHubClientVariables.getCurrentStepperPage();
                    }, function() {
                        return model.variables.selectedDocumentTypeVar.display_nameAttr;
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
                    mainContent2: new PlaceholderContent(function() {
                        return [React.createElement(PartnersHub_Layouts_LayoutBaseSection_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: flex-start; align-self: stretch; background: #fff; display: flex; flex: 1 0 0; flex-direction: column; gap: 16px; min-height: 750px; padding: 20px 16px;"
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
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        extendedProperties: {
                                            style: "align-self: stretch; background: var(--core-color-solid-slate-50, #FFF); display: flex; flex: 1 0 0; flex-direction: column; gap: 16px;"
                                        },
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 1),
                                        _idProps: {
                                            service: idService,
                                            name: "PartnerAccountTypePage"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Account type"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_view, {
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
                                                controller.accountTypeBlockOnClickEvent$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "6",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 2),
                                        _idProps: {
                                            service: idService,
                                            name: "AccountCurrencyPage"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold; margin-bottom: 0px;"
                                        },
                                        text: ["Account currency"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "margin-top: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
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
                                                controller.nextStep$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "10",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 3),
                                        _idProps: {
                                            service: idService,
                                            name: "PersonalDetails"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
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
                                        style: "",
                                        _idProps: {
                                            service: idService,
                                            name: "Form1"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Personal details"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 4px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "First (and middle) name"), React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form1")
                                        },
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Text*/ 0,
                                        mandatory: true,
                                        maxLength: 50,
                                        prompt: "First (and middle) name",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.firstNameVar, function(value) {
                                            model.variables.firstNameVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "FirstName2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 4px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Last name"), React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form1")
                                        },
                                        enabled: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Text*/ 0,
                                        mandatory: true,
                                        maxLength: 50,
                                        prompt: "Enter your last name",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.lastNameVar, function(value) {
                                            model.variables.lastNameVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "LastName2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; align-self: stretch; background: var(--Semantic-Info-Light, #E5F5FC); border-radius: 4px; display: flex; gap: 8px; padding: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "font-size: 8px;"
                                        },
                                        gridProperties: {
                                            width: "20px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Label, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "margin-right: 4px;"
                                        },
                                        text: ["Enter your"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-weight: bold; margin-right: 4px;"
                                        },
                                        text: ["name"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "exactly as it appears on your identity document.")), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            classes: "OSFillParent",
                                            marginLeft: "0"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.identitycardname.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "align-items: center; align-self: stretch; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; padding: 0px 16px;"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            controller.validationService.validateWidget(idService.getId("Form1"));
                                            var eventHandlerContext = callContext.clone();
                                            controller.personalDetailsFullNameNext$Action(controller.callContext(eventHandlerContext));


                                            ;
                                        },
                                        style: "\"btn\"",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                                        },
                                        text: ["Next"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 4),
                                        _idProps: {
                                            service: idService,
                                            name: "PersonalDetails2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "30"
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
                                        style: "",
                                        _idProps: {
                                            service: idService,
                                            name: "Form2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Personal details"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "32"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 4px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "34"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Date of birth", React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #bf333a; margin-left: 2px;"
                                        },
                                        text: ["*"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "35"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OutSystemsUI_Interaction_DatePicker_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            DateFormat: "DD/MM/YYYY",
                                            ShowTodayButton: true,
                                            OptionalConfigs: model.getCachedValue(idService.getId("datepicker.OptionalConfigs"), function() {
                                                return function() {
                                                    var rec = new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure();
                                                    rec.minDateAttr = OS.BuiltinFunctions.newDate(1934, 1, 1);
                                                    rec.maxDateAttr = OS.BuiltinFunctions.currDate();
                                                    return rec;
                                                }();
                                            }),
                                            TimeFormat: PartnersHubModel.staticEntities.datePickerTimeFormat.disabled
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onSelected$Action: function(datePickerIdIn, selectedDateTimeIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.datePickerOnSelected$Action(selectedDateTimeIn, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form2")
                                        },
                                        _idProps: {
                                            service: idService,
                                            name: "datepicker",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            datepicker: new PlaceholderContent(function() {
                                                return [React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                                        validationParentId: idService.getId("Form2")
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "37",
                                                        alias: "6"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        icon: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Icon, {
                                                                icon: "calendar-o",
                                                                iconSize: /*FontSize*/ 0,
                                                                style: "icon",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "38"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        input: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Input, {
                                                                _validationProps: {
                                                                    validationService: validationService,
                                                                    validationParentId: idService.getId("Form2")
                                                                },
                                                                enabled: true,
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                inputType: /*Date*/ 4,
                                                                mandatory: true,
                                                                maxLength: 0,
                                                                prompt: "dd/mm/yyyy",
                                                                style: "form-control",
                                                                variable: model.createVariable(OS.DataTypes.DataTypes.Date, model.variables.dateofBirth2Var, function(value) {
                                                                    model.variables.dateofBirth2Var = value;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Input_DateofBirth2"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.dateofBirth2Var)]
                                                })];
                                            }),
                                            placeholder_SSPreview: PlaceholderContent.Empty
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.dateofBirth2Var)]
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; align-self: stretch; background: var(--Semantic-Info-Light, #E5F5FC); border-radius: 4px; display: flex; gap: 8px; margin-top: 5px; padding: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "40"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "font-size: 8px;"
                                        },
                                        gridProperties: {
                                            width: "20px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "41"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Label, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "42"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "margin-right: 4px;"
                                        },
                                        text: ["Enter your"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "43"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-weight: bold; margin-right: 4px;"
                                        },
                                        text: ["date of birth"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "44"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "exactly as it appears on your identity document.")), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.dob.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "45"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Button, {
                                        enabled: true,
                                        extendedProperties: {
                                            style: "align-items: center; align-self: stretch; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; padding: 0px 16px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            controller.validationService.validateWidget(idService.getId("Form2"));
                                            var eventHandlerContext = callContext.clone();
                                            controller.dateOfBirthNext$Action(controller.callContext(eventHandlerContext));


                                            ;
                                        },
                                        style: "\"btn\"",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "46"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                                        },
                                        text: ["Next"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "47"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        style: "supported-documents-list",
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 5),
                                        _idProps: {
                                            service: idService,
                                            name: "IDV"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "49"
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
                                                controller.nextStep$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "50",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 6),
                                        _idProps: {
                                            service: idService,
                                            name: "EmploymentStatus"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 7),
                                        _idProps: {
                                            service: idService,
                                            name: "TaxInformation"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; justify-content: space-between;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "53"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Tax information"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "54"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.nextStep$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "55"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "cursor: pointer; font-size: 12px;"
                                        },
                                        text: ["Skip"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "56"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "margin-top: 20px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "57"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TaxResidence"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        text: ["Tax residence"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "59"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; background: var(--Neutral-Neutral-0, #FFF); border: 1px solid var(--Neutral-Neutral-5, #CED4DA); border-radius: 4px; display: flex; height: 48px; justify-content: space-between; margin-top: 10px; padding: 0px 16px 0px 16px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "60"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "color: #222; font-size: 16px;"
                                        },
                                        value: PartnersHubClientVariables.getClientCountry(),
                                        _idProps: {
                                            service: idService,
                                            uuid: "61"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Image, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "62"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 8),
                                        _idProps: {
                                            service: idService,
                                            name: "AddressDetails"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.nextStep$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "64"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "cursor: pointer; font-size: 12px;"
                                        },
                                        text: ["Skip"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "65"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        style: "termsofuse",
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 9),
                                        _idProps: {
                                            service: idService,
                                            name: "TermsOfUse"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "67"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 8px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "68"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Terms of use"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))), React.createElement(PartnersHub_RealAccountCreationFlow_TermsOfUseBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            isMobileLayout: true
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
                                            uuid: "71",
                                            alias: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: (PartnersHubClientVariables.getCurrentStepperPage() === 10),
                                        _idProps: {
                                            service: idService,
                                            name: "CFDCommision"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "73"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Form, {
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 8px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "",
                                        _idProps: {
                                            service: idService,
                                            name: "Form3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["To enable CFDs commission, set up your MT5 password"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "margin-bottom: 10px; margin-top: 10px;"
                                        },
                                        style: "password-input",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "76"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
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
                                            validationParentId: idService.getId("Form3")
                                        },
                                        _idProps: {
                                            service: idService,
                                            name: "PasswordField",
                                            alias: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            icon: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Image, {
                                                    extendedProperties: {
                                                        style: "height: 18px; margin-right: 10px;"
                                                    },
                                                    gridProperties: {
                                                        width: "18px"
                                                    },
                                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.password_lock.svg"),
                                                    type: /*Static*/ 0,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "78"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("Form3")
                                                    },
                                                    enabled: true,
                                                    extendedEvents: {
                                                        onFocus: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            controller.onRender$Action(controller.callContext(eventHandlerContext));

                                                            ;
                                                        }
                                                    },
                                                    extendedProperties: {
                                                        style: "border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; height: 56px; margin-bottom: 16px; margin-top: 16px; padding: 5px 16px 5px 16px;"
                                                    },
                                                    gridProperties: {
                                                        width: "100%"
                                                    },
                                                    inputType: /*Password*/ 1,
                                                    mandatory: true,
                                                    maxLength: 0,
                                                    prompt: "Password",
                                                    style: model.getCachedValue(idService.getId("MobilePasswordField.Style"), function() {
                                                        return (((OS.BuiltinFunctions.length(model.variables.cFDPasswordVar) === 0)) ? ("password-input__field") : (((model.variables.isPasswordValidVar) ? ("password-input__field password-input__field--success") : ("password-input__field password-input__field--failure"))));
                                                    }, function() {
                                                        return model.variables.cFDPasswordVar;
                                                    }, function() {
                                                        return model.variables.isPasswordValidVar;
                                                    }),
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.cFDPasswordVar, function(value) {
                                                        model.variables.cFDPasswordVar = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "MobilePasswordField"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.cFDPasswordVar)]
                                    })), React.createElement(CustomComponents_PasswordPolicy_PasswordPolicy_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Length: 8,
                                            Password: model.variables.cFDPasswordVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            compliant$Action: function(isValidIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onPasswordCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form3")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "80",
                                            alias: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }), React.createElement(OSWidgets.Button, {
                                        enabled: model.variables.isPasswordValidVar,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: false,
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.createPasswordOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: model.getCachedValue(idService.getId("_NFsgkoiw0qvQPKhsdd8cA.Style"), function() {
                                            return ((model.variables.isPasswordValidVar) ? ("primary-button") : ("primary-button-disabled"));
                                        }, function() {
                                            return model.variables.isPasswordValidVar;
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "81"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                                        },
                                        text: ["Create password"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "82"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))))))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.cFDPasswordVar), asPrimitiveValue(PartnersHubClientVariables.getClientCountry()), asPrimitiveValue(model.variables.dateofBirth2Var), asPrimitiveValue(model.variables.lastNameVar), asPrimitiveValue(model.variables.firstNameVar), asPrimitiveValue(PartnersHubClientVariables.getCurrentStepperPage())]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isPasswordValidVar), asPrimitiveValue(model.variables.cFDPasswordVar), asPrimitiveValue(PartnersHubClientVariables.getClientCountry()), asPrimitiveValue(model.variables.dateofBirth2Var), asPrimitiveValue(model.variables.lastNameVar), asPrimitiveValue(model.variables.firstNameVar), asPrimitiveValue(PartnersHubClientVariables.getCurrentStepperPage())]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller", "PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$controller.OnInitialize.JavaScript1JS", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController, PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_controller_OnInitialize_JavaScript1JS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_TranslationsResources);
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
            get _dateOfBirthNext$Action() {
                if (!(this.hasOwnProperty("__dateOfBirthNext$Action"))) {
                    this.__dateOfBirthNext$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DateOfBirthNext", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DateOfBirthNext");
                                span.setAttribute("outsystems.function.key", "0d2f6272-1099-4f4f-ac0a-66fb5e5f52a5");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DateOfBirthNext");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form2")).validAttr)) {
                                    // Execute Action: NextStep
                                    controller._nextStep$Action(callContext);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dateOfBirthNext$Action;
            }
            set _dateOfBirthNext$Action(value) {
                this.__dateOfBirthNext$Action = value;
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
                                span.setAttribute("outsystems.function.key", "1498eb72-90d2-41b0-9ac0-6369f14616db");
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
                                            span.setAttribute("outsystems.function.key", "07f92c6e-f400-4941-a026-03acab6414b4");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_Deprecated_MobileRealAccountCreation_mvc_controller_OnInitialize_JavaScript1JS, "JavaScript1", "OnInitialize", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.OnInitialize$javaScript1JSResult"))();
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

            get _personalDetailsFullNameNext$Action() {
                if (!(this.hasOwnProperty("__personalDetailsFullNameNext$Action"))) {
                    this.__personalDetailsFullNameNext$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PersonalDetailsFullNameNext", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PersonalDetailsFullNameNext");
                                span.setAttribute("outsystems.function.key", "1b4b11ac-3448-4e7e-8310-f590414a4b31");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PersonalDetailsFullNameNext");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // Execute Action: NextStep
                                    controller._nextStep$Action(callContext);
                                } else {
                                    // FirstName2.ValidationMessage = "First (and middle) name is required"
                                    model.widgets.get(idService.getId("FirstName2")).validationMessageAttr = "First (and middle) name is required";
                                    // LastName2.ValidationMessage = "Last name is required."
                                    model.widgets.get(idService.getId("LastName2")).validationMessageAttr = "Last name is required.";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__personalDetailsFullNameNext$Action;
            }
            set _personalDetailsFullNameNext$Action(value) {
                this.__personalDetailsFullNameNext$Action = value;
            }

            get _onClickSkip$Action() {
                if (!(this.hasOwnProperty("__onClickSkip$Action"))) {
                    this.__onClickSkip$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickSkip", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickSkip");
                                span.setAttribute("outsystems.function.key", "30b478c5-a5b4-4b35-88c8-302c5a097fcf");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickSkip");
                                callContext = controller.callContext(callContext);
                                // ProgressBarLength = If
                                PartnersHubClientVariables.setProgressBarLength((((PartnersHubClientVariables.getProgressBarLength() < model.variables.maxCountVar)) ? ((PartnersHubClientVariables.getProgressBarLength() + (model.variables.countVar * 2))) : (model.variables.maxCountVar)));
                                // CurrentStepperPage = 7
                                PartnersHubClientVariables.setCurrentStepperPage(7);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickSkip$Action;
            }
            set _onClickSkip$Action(value) {
                this.__onClickSkip$Action = value;
            }

            get _onPasswordCompliant$Action() {
                if (!(this.hasOwnProperty("__onPasswordCompliant$Action"))) {
                    this.__onPasswordCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnPasswordCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnPasswordCompliant");
                                span.setAttribute("outsystems.function.key", "314835bf-a3e7-436a-88c3-6a55991734c8");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnPasswordCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.OnPasswordCompliant$vars"))());
                                vars.value.isValidInLocal = isValidIn;
                                // IsPasswordValid = IsValid
                                model.variables.isPasswordValidVar = vars.value.isValidInLocal;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onPasswordCompliant$Action;
            }
            set _onPasswordCompliant$Action(value) {
                this.__onPasswordCompliant$Action = value;
            }

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "34de7161-02fe-4b60-839f-b31a02294c37");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
            }

            get _createPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__createPasswordOnClick$Action"))) {
                    this.__createPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreatePasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreatePasswordOnClick");
                                span.setAttribute("outsystems.function.key", "38e3dd5d-2dc4-479a-bc87-1f2ffa89ecce");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CreatePasswordOnClick");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form3")).validAttr)) {
                                    // Destination: /PartnersHub/PartnersHubDashboard
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__createPasswordOnClick$Action;
            }
            set _createPasswordOnClick$Action(value) {
                this.__createPasswordOnClick$Action = value;
            }

            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "42b6f454-2499-403a-8ec8-65639aa7e92c");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // DateofBirth2 = SelectedDateTime
                                model.variables.dateofBirth2Var = OS.BuiltinFunctions.dateTimeToDate(vars.value.selectedDateTimeInLocal);
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

            get _nextStep$Action() {
                if (!(this.hasOwnProperty("__nextStep$Action"))) {
                    this.__nextStep$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextStep", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextStep");
                                span.setAttribute("outsystems.function.key", "686ac2ca-7cea-47e3-9727-ac24ad0b7f35");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextStep");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetTaxInfoModal
                                controller._setTaxInfoModal$Action(false, callContext);
                                // ProgressBarLength = If
                                PartnersHubClientVariables.setProgressBarLength((((PartnersHubClientVariables.getProgressBarLength() < model.variables.maxCountVar)) ? ((PartnersHubClientVariables.getProgressBarLength() + model.variables.countVar)) : (model.variables.maxCountVar)));
                                // CurrentStepperPage = CurrentStepperPage + 1
                                PartnersHubClientVariables.setCurrentStepperPage((PartnersHubClientVariables.getCurrentStepperPage() + 1));
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

            get _accountTypeBlockOnClickEvent$Action() {
                if (!(this.hasOwnProperty("__accountTypeBlockOnClickEvent$Action"))) {
                    this.__accountTypeBlockOnClickEvent$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AccountTypeBlockOnClickEvent", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AccountTypeBlockOnClickEvent");
                                span.setAttribute("outsystems.function.key", "89d02e72-3fa5-4e59-a711-c542eb5514cb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AccountTypeBlockOnClickEvent");
                                callContext = controller.callContext(callContext);
                                // Execute Action: NextStep
                                controller._nextStep$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__accountTypeBlockOnClickEvent$Action;
            }
            set _accountTypeBlockOnClickEvent$Action(value) {
                this.__accountTypeBlockOnClickEvent$Action = value;
            }

            get _setTaxInfoModal$Action() {
                if (!(this.hasOwnProperty("__setTaxInfoModal$Action"))) {
                    this.__setTaxInfoModal$Action = function(setModalIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetTaxInfoModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetTaxInfoModal");
                                span.setAttribute("outsystems.function.key", "e9b27760-e64b-46f1-a3be-6058c494a4ed");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetTaxInfoModal");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.SetTaxInfoModal$vars"))());
                                vars.value.setModalInLocal = setModalIn;
                                if ((vars.value.setModalInLocal)) {
                                    // isTaxInfoModalOpen = True
                                    model.variables.isTaxInfoModalOpenVar = true;
                                } else {
                                    // isTaxInfoModalOpen = False
                                    model.variables.isTaxInfoModalOpenVar = false;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setTaxInfoModal$Action;
            }
            set _setTaxInfoModal$Action(value) {
                this.__setTaxInfoModal$Action = value;
            }


            dateOfBirthNext$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DateOfBirthNext__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DateOfBirthNext");
                        span.setAttribute("outsystems.function.key", "0d2f6272-1099-4f4f-ac0a-66fb5e5f52a5");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dateOfBirthNext$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "1498eb72-90d2-41b0-9ac0-6369f14616db");
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

            personalDetailsFullNameNext$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PersonalDetailsFullNameNext__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PersonalDetailsFullNameNext");
                        span.setAttribute("outsystems.function.key", "1b4b11ac-3448-4e7e-8310-f590414a4b31");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._personalDetailsFullNameNext$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickSkip$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickSkip__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickSkip");
                        span.setAttribute("outsystems.function.key", "30b478c5-a5b4-4b35-88c8-302c5a097fcf");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickSkip$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onPasswordCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnPasswordCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnPasswordCompliant");
                        span.setAttribute("outsystems.function.key", "314835bf-a3e7-436a-88c3-6a55991734c8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onPasswordCompliant$Action, callContext, isValidIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "34de7161-02fe-4b60-839f-b31a02294c37");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            createPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePasswordOnClick");
                        span.setAttribute("outsystems.function.key", "38e3dd5d-2dc4-479a-bc87-1f2ffa89ecce");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._createPasswordOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "42b6f454-2499-403a-8ec8-65639aa7e92c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            nextStep$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextStep__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextStep");
                        span.setAttribute("outsystems.function.key", "686ac2ca-7cea-47e3-9727-ac24ad0b7f35");
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

            accountTypeBlockOnClickEvent$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AccountTypeBlockOnClickEvent__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AccountTypeBlockOnClickEvent");
                        span.setAttribute("outsystems.function.key", "89d02e72-3fa5-4e59-a711-c542eb5514cb");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._accountTypeBlockOnClickEvent$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setTaxInfoModal$Action(setModalIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetTaxInfoModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetTaxInfoModal");
                        span.setAttribute("outsystems.function.key", "e9b27760-e64b-46f1-a3be-6058c494a4ed");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setTaxInfoModal$Action, callContext, setModalIn);
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.OnInitialize$javaScript1JSResult", [{
            name: "token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.OnPasswordCompliant$vars", [{
            name: "IsValid",
            attrName: "isValidInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.SetTaxInfoModal$vars", [{
            name: "setModal",
            attrName: "setModalInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$controller.OnInitialize.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')
        $parameters.token = token
    };
});


define("PartnersHub.RealAccountCreationFlow.Deprecated_MobileRealAccountCreation.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});