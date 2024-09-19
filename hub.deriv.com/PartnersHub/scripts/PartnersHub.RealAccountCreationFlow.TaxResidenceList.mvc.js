define("PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "PartnersHub.Common.ResidenceList.mvc$model", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocket.controller$GetWebsiteStatus", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel, PartnersHub_Common_ResidenceList_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure());
                    }, false, PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure),
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure());
                    }, false, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure)
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
                Model._hasValidationWidgetsValue = (CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets || PartnersHub_Common_ResidenceList_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$model", "PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$controller", "PartnersHub.clientVariables", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.ResidenceList.mvc$view", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocket.controller$GetWebsiteStatus", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_model, PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_controller, PartnersHubClientVariables, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, OSWidgets, PartnersHub_Common_ResidenceList_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.TaxResidenceList";
        }

        static getAttributes() {
            return {
                codeFunction: "TaxResidenceList",
                functionKey: "37d4276d-19e9-429c-81be-f0a8f0fae683",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, PartnersHub_Common_ResidenceList_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("bSfUN+kZnEKBvvCo8Prmgw#Title", "TaxResidenceList");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    HasBackButton: true,
                    Title: "Country of tax residence"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onBack$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.fullScreenMobileModalOnBack$Action(controller.callContext(eventHandlerContext));

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
                                style: "margin-top: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(PartnersHub_Common_ResidenceList_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                WebsiteStatus: model.variables.websiteStatusResponseVar.website_statusAttr,
                                ResidenceList: model.variables.residenceListResponseVar.residence_listAttr
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClickCountry$Action: function(selectedCountryIn) {
                                    var eventHandlerContext = callContext.clone();
                                    controller.residenceSelectorOnClickCountry$Action(selectedCountryIn, controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.residenceListResponseVar.residence_listAttr), asPrimitiveValue(model.variables.websiteStatusResponseVar.website_statusAttr)]
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.controller", "PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure", "PartnersHub.model$ST_dbace2176e52429900d8209086350204Structure", "PartnersHub.model$ST_0c954cdeca234316306bb67c6b24f05bStructure", "PartnersHub.model$ST_b539dd26c0de381503da71ca2655394fStructure", "PartnersHub.model$ST_eda668e7f210db3d136460db1684b63bStructure", "PartnersHub.model$ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure", "PartnersHub.model$RL_72539fe43229e47c6f0bb03bc660d8fe", "PartnersHub.model$ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure", "PartnersHub.model$ST_537325baeed781544ed9f203cd7f9384Structure", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_141ef15563438703b2e42d78c6c7aefeStructure", "PartnersHub.model$ST_c2546146ca44bb59a2a2de5acfe0b484Structure", "PartnersHub.model$ST_e422048bbd3aba1526832ee4606bb980Structure", "PartnersHub.model$ST_f85e728670d653d5fa01ee2557e6e730Structure", "PartnersHub.model$ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure", "PartnersHub.model$ST_b81b243ca5642018a62b9438e213af08Structure", "PartnersHub.model$ST_2a14839a43e1fca3e50600e797d0e612Structure", "PartnersHub.model$ST_8b8a7d131f11e4011391f72ed3597a0eStructure", "PartnersHub.model$ST_e9aa881415a78b4026eaae8ff05abb61Structure", "PartnersHub.model$ST_f20c843fba72b4c6aef8e435f175a9e5Structure", "PartnersHub.model$ST_66479ac0d3a37fcf31e7645e323ef0e1Structure", "PartnersHub.model$ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure", "PartnersHub.model$RL_d4fccd3e80d193e265d34ff56d4a302a", "PartnersHub.model$ST_c7bba0c276d724a640fd9ae5d39aa04eStructure", "PartnersHub.model$ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure", "PartnersHub.controller$SendResidenceList", "PartnersHub.controller$UseDevice", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocket.controller$GetWebsiteStatus", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlowController, PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_TranslationsResources);
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
            get _residenceSelectorOnClickCountry$Action() {
                if (!(this.hasOwnProperty("__residenceSelectorOnClickCountry$Action"))) {
                    this.__residenceSelectorOnClickCountry$Action = function(selectedCountryIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
                                span.setAttribute("outsystems.function.key", "10541cca-193b-4a44-8fb3-662624a68e16");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ResidenceSelectorOnClickCountry");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.ResidenceSelectorOnClickCountry$vars"))());
                                vars.value.selectedCountryInLocal = selectedCountryIn.clone();
                                // RealSignupTaxResidence = SelectedCountry.Text
                                PartnersHubClientVariables.setRealSignupTaxResidence(vars.value.selectedCountryInLocal.textAttr);
                                // RealSignupEmploymentDetailMobileScreen = "employment_details"
                                PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("employment_details");
                                // Destination: /PartnersHub/RealAccountCreation
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__residenceSelectorOnClickCountry$Action;
            }
            set _residenceSelectorOnClickCountry$Action(value) {
                this.__residenceSelectorOnClickCountry$Action = value;
            }

            get _fullScreenMobileModalOnBack$Action() {
                if (!(this.hasOwnProperty("__fullScreenMobileModalOnBack$Action"))) {
                    this.__fullScreenMobileModalOnBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                                span.setAttribute("outsystems.function.key", "656fcfa9-f037-49e0-a221-891d0a16c7cd");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FullScreenMobileModalOnBack");
                                callContext = controller.callContext(callContext);
                                // RealSignupEmploymentDetailMobileScreen = "employment_details"
                                PartnersHubClientVariables.setRealSignupEmploymentDetailMobileScreen("employment_details");
                                // Destination: /PartnersHub/RealAccountCreation
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__fullScreenMobileModalOnBack$Action;
            }
            set _fullScreenMobileModalOnBack$Action(value) {
                this.__fullScreenMobileModalOnBack$Action = value;
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
                                span.setAttribute("outsystems.function.key", "fa0181ca-7839-4e73-88a5-7b08dcdbe44d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MountDerivAPIClient
                                    PartnersHubController.default.mountDerivAPIClient$Action(callContext);
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "b27f5095-5c6b-4713-9f28-534080f2fe3a");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_TaxResidenceList_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.OnReady$javaScript1JSResult"))();
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
                                    }).then(function() {
                                        // Execute Action: UseDevice
                                        PartnersHubController.default.useDevice$Action(callContext);
                                        // Execute Action: GetWebsiteStatus
                                        model.flush();
                                        return RESTAPIWebsocketController.default.getWebsiteStatus$Action(PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "en", callContext).then(function(value) {
                                            getWebsiteStatusVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: SendResidenceList
                                        model.flush();
                                        return PartnersHubController.default.sendResidenceList$Action(callContext).then(function(value) {
                                            sendResidenceListVar.value = value;
                                        });
                                    }).then(function() {
                                        // WebsiteStatusResponse = GetWebsiteStatus.Response
                                        model.variables.websiteStatusResponseVar = OS.DataConversion.JSConversions.typeConvertRecord(getWebsiteStatusVar.value.responseOut, new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure(), function(source, target) {
                                            target.echo_reqAttr.website_statusAttr = source.echo_reqAttr.website_statusAttr;
                                            target.msg_typeAttr = source.msg_typeAttr;
                                            target.website_statusAttr.broker_codesAttr = source.website_statusAttr.broker_codesAttr;
                                            target.website_statusAttr.clients_countryAttr = source.website_statusAttr.clients_countryAttr;
                                            target.website_statusAttr.supported_languagesAttr = source.website_statusAttr.supported_languagesAttr;
                                            target.website_statusAttr.terms_conditions_versionAttr = source.website_statusAttr.terms_conditions_versionAttr;
                                            return target;
                                        });
                                        // ResidenceListResponse = SendResidenceList.ResidenceListResponse
                                        model.variables.residenceListResponseVar = sendResidenceListVar.value.residenceListResponseOut;
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


            residenceSelectorOnClickCountry$Action(selectedCountryIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ResidenceSelectorOnClickCountry");
                        span.setAttribute("outsystems.function.key", "10541cca-193b-4a44-8fb3-662624a68e16");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._residenceSelectorOnClickCountry$Action, callContext, selectedCountryIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            fullScreenMobileModalOnBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FullScreenMobileModalOnBack");
                        span.setAttribute("outsystems.function.key", "656fcfa9-f037-49e0-a221-891d0a16c7cd");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._fullScreenMobileModalOnBack$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "fa0181ca-7839-4e73-88a5-7b08dcdbe44d");
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.ResidenceSelectorOnClickCountry$vars", [{
            name: "SelectedCountry",
            attrName: "selectedCountryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure();
            },
            complexType: PartnersHubModel.ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.OnReady$javaScript1JSResult", [{
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

define("PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token');

        if (token) {
            $parameters.token = token;
        }
    };
});


define("PartnersHub.RealAccountCreationFlow.TaxResidenceList.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});