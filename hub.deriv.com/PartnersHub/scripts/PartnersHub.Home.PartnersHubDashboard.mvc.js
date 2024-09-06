define("PartnersHub.Home.PartnersHubDashboard.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Common.LoaderBlock.mvc$model", "PartnersHub.Home.ReferralLinksReports.mvc$model", "PartnersHub.Home.CompleteMyProfile.mvc$model", "PartnersHub.Home.CommissionBanner.mvc$model", "PartnersHub.Home.PartnersAcademy.mvc$model", "PartnersHub.Home.AffiliateProgramme.mvc$model", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.controller$InitGTM", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$InitGrowthbook", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$GTMPushDataLayer", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Common_LoaderBlock_mvcModel, PartnersHub_Home_ReferralLinksReports_mvcModel, PartnersHub_Home_CompleteMyProfile_mvcModel, PartnersHub_Home_CommissionBanner_mvcModel, PartnersHub_Home_PartnersAcademy_mvcModel, PartnersHub_Home_AffiliateProgramme_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure());
                    }, false, PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure),
                    this.attr("isPhoneNumberVerified", "isPhoneNumberVerifiedVar", "isPhoneNumberVerified", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure());
                    }, false, PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure),
                    this.attr("isCompleteMyProfileEnabledGB", "isCompleteMyProfileEnabledGBVar", "isCompleteMyProfileEnabledGB", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Model._hasValidationWidgetsValue = ((((((PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Common_LoaderBlock_mvcModel.hasValidationWidgets) || PartnersHub_Home_ReferralLinksReports_mvcModel.hasValidationWidgets) || PartnersHub_Home_CompleteMyProfile_mvcModel.hasValidationWidgets) || PartnersHub_Home_CommissionBanner_mvcModel.hasValidationWidgets) || PartnersHub_Home_PartnersAcademy_mvcModel.hasValidationWidgets) || PartnersHub_Home_AffiliateProgramme_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.PartnersHubDashboard.mvc$model", "PartnersHub.Home.PartnersHubDashboard.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Common.LoaderBlock.mvc$view", "PartnersHub.Home.ReferralLinksReports.mvc$view", "PartnersHub.Home.CompleteMyProfile.mvc$view", "PartnersHub.Home.CommissionBanner.mvc$view", "PartnersHub.Home.PartnersAcademy.mvc$view", "PartnersHub.Home.AffiliateProgramme.mvc$view", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.controller$InitGTM", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$InitGrowthbook", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$GTMPushDataLayer", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_PartnersHubDashboard_mvc_model, PartnersHub_Home_PartnersHubDashboard_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Home.PartnersHubDashboard";
        }

        static getAttributes() {
            return {
                codeFunction: "PartnersHubDashboard",
                functionKey: "c31f116a-8af3-4faf-90b7-67d384e710b4",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Home.PartnersHubDashboard.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Common_LoaderBlock_mvc_view, PartnersHub_Home_ReferralLinksReports_mvc_view, PartnersHub_Home_CompleteMyProfile_mvc_view, PartnersHub_Home_CommissionBanner_mvc_view, PartnersHub_Home_PartnersAcademy_mvc_view, PartnersHub_Home_AffiliateProgramme_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_PartnersHubDashboard_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_PartnersHubDashboard_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("ahEfw_OKr0+Qt2fThOcQtA#Title", "PartnersHubDashboard");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
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
                    showLoaderEvent$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.showLoader$Action(controller.callContext(eventHandlerContext));

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
                    mainContent: new PlaceholderContent(function() {
                        return [$if(model.variables.isLoadingVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Common_LoaderBlock_mvc_view, {
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
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "partners-hub-dashboard",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "partners-hub-title-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "PartnersHubTitle"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; gap: 24px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #222; font-size: 24px; font-weight: bold;"
                                },
                                text: [$text(getTranslation("6QftVDCBCUOUp+OG1UYZ_A#Value", "Partner\'s Hub"))],
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; gap: 16px;"
                                },
                                style: "referral-links-reports-whatsapp",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
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
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_ReferralLinksReports_mvc_view, {
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
                                    uuid: "9",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "complete-profile-commission-banner",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "LesgoBanner"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: true,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: (PartnersHubClientVariables.getisCompleteMyProfileEnabled() || model.variables.isCompleteMyProfileEnabledGBVar),
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_CompleteMyProfile_mvc_view, {
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
                                    uuid: "12",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
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
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_CommissionBanner_mvc_view, {
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
                                    uuid: "14",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border: 1px solid #DEE2E6; border-radius: 8px; padding: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "PartnersAcademy"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_PartnersAcademy_mvc_view, {
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
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border: 1px solid #DEE2E6; border-radius: 8px; padding: 16px;"
                                },
                                style: "affiliate-programme-block",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "AffiliateProgramme"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(PartnersHub_Home_AffiliateProgramme_mvc_view, {
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
                                    uuid: "18",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isCompleteMyProfileEnabledGBVar), asPrimitiveValue(PartnersHubClientVariables.getisCompleteMyProfileEnabled()), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.Home.PartnersHubDashboard.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", "PartnersHub.Home.controller", "PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.isCompleteMyProfileEnabledGBScriptJS", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.controller$InitGTM", "PartnersHub.controller$RudderstackIdentifyEvent", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SetDefaultAppId", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.controller$MountLiveChat", "PartnersHub.controller$InitGrowthbook", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.controller$HandleRedirectOnLogin", "PartnersHub.controller$IFrameLogout", "PartnersHub.controller$GTMPushDataLayer", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.controller$MountDerivAPIClient"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources, PartnersHub_HomeController, PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_isCompleteMyProfileEnabledGBScriptJS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_PartnersHubDashboard_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "8c4ae32d-9ef6-460e-84a3-871cfdd7a45f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                var sendGetSettingsVar = new OS.DataTypes.VariableHolder();
                                var handleRedirectOnLoginVar = new OS.DataTypes.VariableHolder();
                                var isCompleteMyProfileEnabledGBScriptJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: UseDevice
                                    PartnersHubController.default.useDevice$Action(callContext);
                                    // Execute Action: InitGrowthbook
                                    model.flush();
                                    return PartnersHubController.default.initGrowthbook$Action(model.variables.websiteStatusResponseVar.website_statusAttr.clients_countryAttr, PartnersHubClientVariables.getIsMobile(), callContext).then(function() {
                                        // Execute Action: SetDefaultAppId
                                        PartnersHubController.default.setDefaultAppId$Action(false, callContext);
                                        // Execute Action: HandleRedirectOnLogin
                                        model.flush();
                                        return PartnersHubController.default.handleRedirectOnLogin$Action(callContext).then(function(value) {
                                            handleRedirectOnLoginVar.value = value;
                                        });
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((handleRedirectOnLoginVar.value.isLoggedInOut)) {
                                                // IsLoading = False
                                                model.variables.isLoadingVar = false;
                                                // Execute Action: InitGTM
                                                PartnersHubController.default.initGTM$Action(callContext);
                                                // Execute Action: GTMPushDataLayer
                                                PartnersHubController.default.gTMPushDataLayer$Action("page_load", callContext);
                                                // Execute Action: RudderstackIdentifyEvent
                                                PartnersHubController.default.rudderstackIdentifyEvent$Action(callContext);
                                                // Execute Action: SendWebsiteStatus
                                                model.flush();
                                                return PartnersHubController.default.sendWebsiteStatus$Action(callContext).then(function(value) {
                                                    sendWebsiteStatusVar.value = value;
                                                }).then(function() {
                                                    // Execute Action: SendGetSettings
                                                    model.flush();
                                                    return PartnersHubController.default.sendGetSettings$Action(callContext).then(function(value) {
                                                        sendGetSettingsVar.value = value;
                                                    });
                                                }).then(function() {
                                                    // Execute Action: MountLiveChat
                                                    PartnersHubController.default.mountLiveChat$Action(OS.DataConversion.JSConversions.typeConvertRecord(sendGetSettingsVar.value.getSettingsResponseOut, new PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure(), function(source, target) {
                                                        target.get_settingsAttr.account_opening_reasonAttr = source.account_opening_reasonAttr;
                                                        target.get_settingsAttr.address_cityAttr = source.address_cityAttr;
                                                        target.get_settingsAttr.address_line_1Attr = source.address_line_1Attr;
                                                        target.get_settingsAttr.address_line_2Attr = source.address_line_2Attr;
                                                        target.get_settingsAttr.address_postcodeAttr = source.address_postcodeAttr;
                                                        target.get_settingsAttr.address_stateAttr = source.address_stateAttr;
                                                        target.get_settingsAttr.allow_copiersAttr = source.allow_copiersAttr;
                                                        target.get_settingsAttr.citizenAttr = source.citizenAttr;
                                                        target.get_settingsAttr.client_tnc_statusAttr = source.client_tnc_statusAttr;
                                                        target.get_settingsAttr.cooling_off_expiration_dateAttr = source.cooling_off_expiration_dateAttr;
                                                        target.get_settingsAttr.countryAttr = source.countryAttr;
                                                        target.get_settingsAttr.country_codeAttr = source.country_codeAttr;
                                                        target.get_settingsAttr.date_of_birthAttr = source.date_of_birthAttr;
                                                        target.get_settingsAttr.dxtrade_user_exceptionAttr = source.dxtrade_user_exceptionAttr;
                                                        target.get_settingsAttr.emailAttr = source.emailAttr;
                                                        target.get_settingsAttr.email_consentAttr = source.email_consentAttr;
                                                        target.get_settingsAttr.employment_statusAttr = source.employment_statusAttr;
                                                        target.get_settingsAttr.fatca_declarationAttr = source.fatca_declarationAttr;
                                                        target.get_settingsAttr.first_nameAttr = source.first_nameAttr;
                                                        target.get_settingsAttr.has_secret_answerAttr = source.has_secret_answerAttr;
                                                        target.get_settingsAttr.immutable_fieldsAttr = source.immutable_fieldsAttr;
                                                        target.get_settingsAttr.is_authenticated_payment_agentAttr = source.is_authenticated_payment_agentAttr;
                                                        target.get_settingsAttr.last_nameAttr = source.last_nameAttr;
                                                        target.get_settingsAttr.non_pep_declarationAttr = source.non_pep_declarationAttr;
                                                        target.get_settingsAttr.phoneAttr = source.phoneAttr;
                                                        target.get_settingsAttr.place_of_birthAttr = source.place_of_birthAttr;
                                                        target.get_settingsAttr.preferred_languageAttr = source.preferred_languageAttr;
                                                        target.get_settingsAttr.request_professional_statusAttr = source.request_professional_statusAttr;
                                                        target.get_settingsAttr.residenceAttr = source.residenceAttr;
                                                        target.get_settingsAttr.salutationAttr = source.salutationAttr;
                                                        target.get_settingsAttr.tax_identification_numberAttr = source.tax_identification_numberAttr;
                                                        target.get_settingsAttr.tax_residenceAttr = source.tax_residenceAttr;
                                                        target.get_settingsAttr.trading_hubAttr = source.trading_hubAttr;
                                                        target.get_settingsAttr.user_hashAttr = source.user_hashAttr;
                                                        target.get_settingsAttr.phone_number_verificationAttr = source.phone_number_verificationAttr;
                                                        return target;
                                                    }), callContext);
                                                    // Execute Action: RudderstackTrackEvent
                                                    PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                                        var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                                        rec.actionAttr = "homepage_open";
                                                        return rec;
                                                    }(), "ce_partnershub_form", callContext);
                                                    isCompleteMyProfileEnabledGBScriptJSResult.value = OS.Logger.startActiveSpan("isCompleteMyProfileEnabledGBScript", function(span) {
                                                        if (span) {
                                                            span.setAttribute("code.function", "isCompleteMyProfileEnabledGBScript");
                                                            span.setAttribute("outsystems.function.key", "ae9af235-2483-4180-87f9-cde34842487a");
                                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                        }

                                                        try {
                                                            return controller.safeExecuteJSNode(PartnersHub_Home_PartnersHubDashboard_mvc_controller_OnReady_isCompleteMyProfileEnabledGBScriptJS, "isCompleteMyProfileEnabledGBScript", "OnReady", {
                                                                isCompleteMyProfileEnabledGB: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                            }, function($parameters) {
                                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$isCompleteMyProfileEnabledGBScriptJSResult"))();
                                                                jsNodeResult.isCompleteMyProfileEnabledGBOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isCompleteMyProfileEnabledGB, OS.DataTypes.DataTypes.Boolean);
                                                                return jsNodeResult;
                                                            }, {}, {});
                                                        } finally {
                                                            if (span) {
                                                                span.end();
                                                            }

                                                        }

                                                    }, 1);
                                                    // InitialGetSettingsEmail = SendGetSettings.GetSettingsResponse.Email
                                                    PartnersHubClientVariables.setInitialGetSettingsEmail(sendGetSettingsVar.value.getSettingsResponseOut.emailAttr);
                                                    // GetSettingsResponse = SendGetSettings.GetSettingsResponse
                                                    model.variables.getSettingsResponseVar = OS.DataConversion.JSConversions.typeConvertRecord(sendGetSettingsVar.value.getSettingsResponseOut, new PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure(), function(source, target) {
                                                        target.get_settingsAttr.account_opening_reasonAttr = source.account_opening_reasonAttr;
                                                        target.get_settingsAttr.address_cityAttr = source.address_cityAttr;
                                                        target.get_settingsAttr.address_line_1Attr = source.address_line_1Attr;
                                                        target.get_settingsAttr.address_line_2Attr = source.address_line_2Attr;
                                                        target.get_settingsAttr.address_postcodeAttr = source.address_postcodeAttr;
                                                        target.get_settingsAttr.address_stateAttr = source.address_stateAttr;
                                                        target.get_settingsAttr.allow_copiersAttr = source.allow_copiersAttr;
                                                        target.get_settingsAttr.citizenAttr = source.citizenAttr;
                                                        target.get_settingsAttr.client_tnc_statusAttr = source.client_tnc_statusAttr;
                                                        target.get_settingsAttr.cooling_off_expiration_dateAttr = source.cooling_off_expiration_dateAttr;
                                                        target.get_settingsAttr.countryAttr = source.countryAttr;
                                                        target.get_settingsAttr.country_codeAttr = source.country_codeAttr;
                                                        target.get_settingsAttr.date_of_birthAttr = source.date_of_birthAttr;
                                                        target.get_settingsAttr.dxtrade_user_exceptionAttr = source.dxtrade_user_exceptionAttr;
                                                        target.get_settingsAttr.emailAttr = source.emailAttr;
                                                        target.get_settingsAttr.email_consentAttr = source.email_consentAttr;
                                                        target.get_settingsAttr.employment_statusAttr = source.employment_statusAttr;
                                                        target.get_settingsAttr.fatca_declarationAttr = source.fatca_declarationAttr;
                                                        target.get_settingsAttr.first_nameAttr = source.first_nameAttr;
                                                        target.get_settingsAttr.has_secret_answerAttr = source.has_secret_answerAttr;
                                                        target.get_settingsAttr.immutable_fieldsAttr = source.immutable_fieldsAttr;
                                                        target.get_settingsAttr.is_authenticated_payment_agentAttr = source.is_authenticated_payment_agentAttr;
                                                        target.get_settingsAttr.last_nameAttr = source.last_nameAttr;
                                                        target.get_settingsAttr.non_pep_declarationAttr = source.non_pep_declarationAttr;
                                                        target.get_settingsAttr.phoneAttr = source.phoneAttr;
                                                        target.get_settingsAttr.place_of_birthAttr = source.place_of_birthAttr;
                                                        target.get_settingsAttr.preferred_languageAttr = source.preferred_languageAttr;
                                                        target.get_settingsAttr.request_professional_statusAttr = source.request_professional_statusAttr;
                                                        target.get_settingsAttr.residenceAttr = source.residenceAttr;
                                                        target.get_settingsAttr.salutationAttr = source.salutationAttr;
                                                        target.get_settingsAttr.tax_identification_numberAttr = source.tax_identification_numberAttr;
                                                        target.get_settingsAttr.tax_residenceAttr = source.tax_residenceAttr;
                                                        target.get_settingsAttr.trading_hubAttr = source.trading_hubAttr;
                                                        target.get_settingsAttr.user_hashAttr = source.user_hashAttr;
                                                        target.get_settingsAttr.phone_number_verificationAttr = source.phone_number_verificationAttr;
                                                        return target;
                                                    });
                                                    // isPhoneNumberVerified = SendGetSettings.GetSettingsResponse.Phone_number_verification.Properties.Verified
                                                    model.variables.isPhoneNumberVerifiedVar = sendGetSettingsVar.value.getSettingsResponseOut.phone_number_verificationAttr.propertiesAttr.verifiedAttr;
                                                    // isCompleteMyProfileEnabledGB = isCompleteMyProfileEnabledGBScript.isCompleteMyProfileEnabledGB
                                                    model.variables.isCompleteMyProfileEnabledGBVar = isCompleteMyProfileEnabledGBScriptJSResult.value.isCompleteMyProfileEnabledGBOut;
                                                    // WebsiteStatusResponse = SendWebsiteStatus.WebsiteStatusResponse
                                                    model.variables.websiteStatusResponseVar = sendWebsiteStatusVar.value.websiteStatusResponseOut;
                                                });
                                            } else {
                                                // Execute Action: IFrameLogout
                                                model.flush();
                                                return PartnersHubController.default.iFrameLogout$Action(callContext);
                                            }

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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "c16cf78e-29e5-49ad-b68c-eddeb97416d7");
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

            get _showLoader$Action() {
                if (!(this.hasOwnProperty("__showLoader$Action"))) {
                    this.__showLoader$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ShowLoader", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ShowLoader");
                                span.setAttribute("outsystems.function.key", "e4608d01-35c8-4d57-85e3-62ee0720597e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ShowLoader");
                                callContext = controller.callContext(callContext);
                                // IsLoading = True
                                model.variables.isLoadingVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__showLoader$Action;
            }
            set _showLoader$Action(value) {
                this.__showLoader$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "8c4ae32d-9ef6-460e-84a3-871cfdd7a45f");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "c16cf78e-29e5-49ad-b68c-eddeb97416d7");
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

            showLoader$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ShowLoader__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ShowLoader");
                        span.setAttribute("outsystems.function.key", "e4608d01-35c8-4d57-85e3-62ee0720597e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._showLoader$Action, callContext);
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
                        return PartnersHub_HomeController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.Home.PartnersHubDashboard.OnReady$isCompleteMyProfileEnabledGBScriptJSResult", [{
            name: "isCompleteMyProfileEnabledGB",
            attrName: "isCompleteMyProfileEnabledGBOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$controller.OnReady.isCompleteMyProfileEnabledGBScriptJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const isCompleteMyProfileEnabledGB = window.Analytics.Analytics.getFeatureValue("enable-dashboard-stepper");


        $parameters.isCompleteMyProfileEnabledGB = isCompleteMyProfileEnabledGB ?? false
    };
});


define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES", [], function() {
    return {
        "6QftVDCBCUOUp+OG1UYZ_A#Value": "Centro de socios"
    };
});

define("PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources", ["exports", "PartnersHub.Home.PartnersHubDashboard.mvc$translationsResources.es-ES"], function(exports, PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_esES) {
    return {
        "es-ES": {
            "translations": PartnersHub_Home_PartnersHubDashboard_mvc_translationsResources_esES,
            "isRTL": false
        }
    };
});