define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "OutSystemsUI.Interaction.DropdownSearch.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.Common.LoaderBlock.mvc$model", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$model", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$SendWebsiteStatus"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController, PartnersHub_Layouts_LayoutSignup_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, OutSystemsUI_Interaction_DropdownSearch_mvcModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_Common_LoaderBlock_mvcModel, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure());
                    }, false, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure());
                    }, false, PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure),
                    this.attr("isInitialLoading", "isInitialLoadingVar", "isInitialLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("DesktopSelectedCitizenship", "desktopSelectedCitizenshipVar", "DesktopSelectedCitizenship", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure());
                    }, false, PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure),
                    this.attr("CountryOfResidence", "countryOfResidenceIn", "CountryOfResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_countryOfResidenceInDataFetchStatus", "_countryOfResidenceInDataFetchStatus", "_countryOfResidenceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
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
                Model._hasValidationWidgetsValue = ((((((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_DropdownSearch_mvcModel.hasValidationWidgets) || CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets) || PartnersHub_Common_LoaderBlock_mvcModel.hasValidationWidgets) || PartnersHub_VirtualAccountCreation_ResidenceSelector_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("CountryOfResidence" in inputs) {
                this.variables.countryOfResidenceIn = OS.DataConversion.ServerDataConverter.from(inputs.CountryOfResidence, OS.DataTypes.DataTypes.Text);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$model", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "OutSystemsUI.Interaction.DropdownSearch.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "PartnersHub.Common.LoaderBlock.mvc$view", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$view", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$SendWebsiteStatus"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_VirtualAccountCreation_Citizenship_mvc_model, PartnersHub_VirtualAccountCreation_Citizenship_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "VirtualAccountCreation.Citizenship";
        }

        static getAttributes() {
            return {
                codeFunction: "Citizenship",
                functionKey: "54768bfe-ce10-49c4-920d-75aeed09cbaa",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.VirtualAccountCreation.Citizenship.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, OutSystemsUI_Interaction_DropdownSearch_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_VirtualAccountCreation_Citizenship_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_VirtualAccountCreation_Citizenship_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("_ot2VBDOxEmSDXWu7QnLqg#Title", "Citizenship");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutSignup_mvc_view, {
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
                                desktopContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
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
                                            style: "align-items: center; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "LogoContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "286px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; background-color: #F8F9FA; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "392px"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickBack$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            style: "cursor: pointer; height: 34px; margin-right: 16px; margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            width: "14px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 24px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        style: "country-of-residence-dropdown",
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
                                            style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 0px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "HeaderContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                                        },
                                        text: [$text(getTranslation("Dvlnn52Fpkygi+VBXSS2Dw#Value", "Citizenship"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 8px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OutSystemsUI_Interaction_DropdownSearch_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1", "Select your citizenship"),
                                            OptionsList: model.getCachedValue(idService.getId("OKXvRvi6wECG5a3i1SGcWg.OptionsList"), function() {
                                                return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.residenceListResponseVar.residence_listAttr, new PartnersHubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                                    target.valueAttr = source.valueAttr;
                                                    target.labelAttr = source.textAttr;
                                                    return target;
                                                });
                                            }, function() {
                                                return model.variables.residenceListResponseVar.residence_listAttr;
                                            }),
                                            OptionalConfigs: model.getCachedValue(idService.getId("OKXvRvi6wECG5a3i1SGcWg.OptionalConfigs"), function() {
                                                return function() {
                                                    var rec = new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure();
                                                    rec.noResultsTextAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1", "Services not available");
                                                    rec.noOptionsTextAttr = OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1", "Services not available");
                                                    return rec;
                                                }();
                                            })
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onChanged$Action: function(dropdownSearchIdIn, selectedOptionListIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.dropdownSearchOnChanged$Action(OS.DataConversion.JSConversions.typeConvertRecord(selectedOptionListIn.getCurrent(callContext.iterationContext), new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure(), function(source, target) {
                                                    target.valueAttr = source.valueAttr;
                                                    target.selectedAttr = model.variables.desktopSelectedCitizenshipVar.valueAttr;
                                                    return target;
                                                }), controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "12",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }), React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-weight: 400; line-height: 21px;"
                                        },
                                        text: [$text(getTranslation("ErifJ+AR6Eax2K9Df+hCjQ#Value", "Choose the citizenship/nationality shown on your official ID."))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            enabled: model.getCachedValue(idService.getId("Rtj6gyJbz0WOdwkq2J0+hw.enabled"), function() {
                                                return ((((model.variables.desktopSelectedCitizenshipVar.valueAttr) !== (""))) ? (true) : (false));
                                            }, function() {
                                                return model.variables.desktopSelectedCitizenshipVar.valueAttr;
                                            }),
                                            title: "Next"
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClick$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                controller.onClickCountry$Action(model.variables.desktopSelectedCitizenshipVar, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "14",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })))))];
                                }),
                                tabletContent: PlaceholderContent.Empty,
                                mobileContent: new PlaceholderContent(function() {
                                    return [React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            HasBackButton: false,
                                            HasCloseIcon: false,
                                            Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1", "Citizenship")
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
                                            uuid: "15",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [$if(model.variables.isInitialLoadingVar, false, this, function() {
                                                    return [React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
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
                                                            uuid: "16",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: 100dvh; padding: 16px 0px 16px 0px;"
                                                        },
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_view, {
                                                        getOwnerSpan: function() {
                                                            return _this.getChildSpan("render");
                                                        },
                                                        getOwnerDisposeSpan: function() {
                                                            return _this.getChildSpan("destroy");
                                                        },
                                                        inputs: {
                                                            Subtitle: "Choose the citizenship/nationality shown on your official ID.",
                                                            ResidenceList: model.variables.residenceListResponseVar.residence_listAttr,
                                                            WebsiteStatus: model.variables.websiteStatusResponseVar.website_statusAttr
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onClickCountry$Action: function(selectedCountryIn) {
                                                                var eventHandlerContext = callContext.clone();
                                                                controller.onClickCountry$Action(selectedCountryIn, controller.callContext(eventHandlerContext));

                                                                ;
                                                            }
                                                        },
                                                        _validationProps: {
                                                            validationService: validationService
                                                        },
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "18",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }))];
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(model.variables.isInitialLoadingVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.isInitialLoadingVar), asPrimitiveValue(model.variables.desktopSelectedCitizenshipVar), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr), asPrimitiveValue(model.variables.isInitialLoadingVar), asPrimitiveValue(model.variables.desktopSelectedCitizenshipVar), asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr)]
            }));
        }
    }

    return View;
});
define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources", "PartnersHub.VirtualAccountCreation.controller", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$SendWebsiteStatus"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_VirtualAccountCreation_Citizenship_mvc_TranslationsResources, PartnersHub_VirtualAccountCreationController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_VirtualAccountCreation_Citizenship_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "8215e71c-4319-4760-a720-2b77299739de");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                var sendWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((((((model.variables.countryOfResidenceIn) !== (""))) ? (true) : (false)))) {
                                            // isInitialLoading = True
                                            model.variables.isInitialLoadingVar = true;
                                            // Execute Action: SendResidenceList
                                            model.flush();
                                            return PartnersHubController.default.sendResidenceList$Action(callContext).then(function(value) {
                                                sendResidenceListVar.value = value;
                                            }).then(function() {
                                                // Execute Action: SendWebsiteStatus
                                                model.flush();
                                                return PartnersHubController.default.sendWebsiteStatus$Action(callContext).then(function(value) {
                                                    sendWebsiteStatusVar.value = value;
                                                });
                                            }).then(function() {
                                                // ResidenceListResponse = SendResidenceList.ResidenceListResponse
                                                model.variables.residenceListResponseVar = sendResidenceListVar.value.residenceListResponseOut;
                                                // WebsiteStatusResponse = SendWebsiteStatus.WebsiteStatusResponse
                                                model.variables.websiteStatusResponseVar = sendWebsiteStatusVar.value.websiteStatusResponseOut;
                                                // isInitialLoading = False
                                                model.variables.isInitialLoadingVar = false;
                                            });
                                        } else {
                                            // Destination: /PartnersHub/CountryOfResidence
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        }

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

            get _dropdownSearchOnChanged$Action() {
                if (!(this.hasOwnProperty("__dropdownSearchOnChanged$Action"))) {
                    this.__dropdownSearchOnChanged$Action = function(selectedCitizenshipIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DropdownSearchOnChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DropdownSearchOnChanged");
                                span.setAttribute("outsystems.function.key", "98131a65-aa7e-4440-9d8d-5cec72bbf1aa");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DropdownSearchOnChanged");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.Citizenship.DropdownSearchOnChanged$vars"))());
                                vars.value.selectedCitizenshipInLocal = selectedCitizenshipIn.clone();
                                // DesktopSelectedCitizenship = SelectedCitizenship
                                model.variables.desktopSelectedCitizenshipVar = vars.value.selectedCitizenshipInLocal;
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

            get _onClickCountry$Action() {
                if (!(this.hasOwnProperty("__onClickCountry$Action"))) {
                    this.__onClickCountry$Action = function(citizenshipIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCountry");
                                span.setAttribute("outsystems.function.key", "b4a77d28-0c50-46bd-939d-1a5b33e38e69");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.Citizenship.OnClickCountry$vars"))());
                                vars.value.citizenshipInLocal = citizenshipIn.clone();
                                // Destination: /PartnersHub/CreatePassword
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CreatePassword", {
                                    Citizenship: OS.DataConversion.ServerDataConverter.to(vars.value.citizenshipInLocal.valueAttr, OS.DataTypes.DataTypes.Text),
                                    Residence: OS.DataConversion.ServerDataConverter.to(model.variables.countryOfResidenceIn, OS.DataTypes.DataTypes.Text)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickCountry$Action;
            }
            set _onClickCountry$Action(value) {
                this.__onClickCountry$Action = value;
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
                                span.setAttribute("outsystems.function.key", "c7d2779d-66f0-4ddb-90b4-5cefb71b64e0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/CountryOfResidence
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {
                                    Code: OS.DataConversion.ServerDataConverter.to(PartnersHubClientVariables.getCode(), OS.DataTypes.DataTypes.Text)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickBack$Action;
            }
            set _onClickBack$Action(value) {
                this.__onClickBack$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8215e71c-4319-4760-a720-2b77299739de");
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

            dropdownSearchOnChanged$Action(selectedCitizenshipIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DropdownSearchOnChanged");
                        span.setAttribute("outsystems.function.key", "98131a65-aa7e-4440-9d8d-5cec72bbf1aa");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dropdownSearchOnChanged$Action, callContext, selectedCitizenshipIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickCountry$Action(citizenshipIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCountry");
                        span.setAttribute("outsystems.function.key", "b4a77d28-0c50-46bd-939d-1a5b33e38e69");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCountry$Action, callContext, citizenshipIn);
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
                        span.setAttribute("outsystems.function.key", "c7d2779d-66f0-4ddb-90b4-5cefb71b64e0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickBack$Action, callContext);
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
                        return PartnersHub_VirtualAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.Citizenship.DropdownSearchOnChanged$vars", [{
            name: "SelectedCitizenship",
            attrName: "selectedCitizenshipInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure();
            },
            complexType: PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure
        }]);
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.Citizenship.OnClickCountry$vars", [{
            name: "Citizenship",
            attrName: "citizenshipInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure();
            },
            complexType: PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.de-DE", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Wählen Sie die Staatsbürgerschaft/Nationalität, die auf Ihrem offiziellen Ausweis angegeben ist.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Dienste nicht verfügbar",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Dienste nicht verfügbar",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Staatsbürgerschaft"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.es-ES", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Elija la ciudadanía/nacionalidad que aparece en su documento de identidad oficial.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Servicios no disponibles",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Servicios no disponibles",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Ciudadanía"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.fr-FR", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Choisissez la citoyenneté/nationalité indiquée sur votre pièce d\'identité officielle.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Services non disponibles",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Services non disponibles",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Citoyenneté"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.it-IT", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Scegli la cittadinanza/nazionalità mostrata sul tuo documento d\'identità ufficiale.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Servizi non disponibili",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Servizi non disponibili",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Cittadinanza"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.pl-PL", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Wybierz obywatelstwo/narodowość widoczną na Twoim oficjalnym dowodzie tożsamości.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Usługi niedostępne",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Usługi niedostępne",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Obywatelstwo"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.pt-PT", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Escolha a cidadania/nacionalidade que aparece no seu documento de identificação oficial.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Serviços não disponíveis",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Serviços não disponíveis",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Cidadania"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.ru-RU", [], function() {
    return {
        "Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1": "Citizenship",
        "ErifJ+AR6Eax2K9Df+hCjQ#Value": "Выберите гражданство/национальность, указанную в вашем официальном удостоверении личности.",
        "VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1": "Услуги недоступны",
        "mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1": "Услуги недоступны",
        "e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1": "Select your citizenship",
        "Dvlnn52Fpkygi+VBXSS2Dw#Value": "Гражданство"
    };
});

define("PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources", ["exports", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.de-DE", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.es-ES", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.fr-FR", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.it-IT", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.pl-PL", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.pt-PT", "PartnersHub.VirtualAccountCreation.Citizenship.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_deDE, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_esES, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_frFR, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_itIT, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_plPL, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_ptPT, PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_VirtualAccountCreation_Citizenship_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});