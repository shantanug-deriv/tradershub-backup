define("PartnersHub.Home.CommissionBanner.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.CommissionBanner.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.CommissionBanner.mvc$model", "PartnersHub.Home.CommissionBanner.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_CommissionBanner_mvc_model, PartnersHub_Home_CommissionBanner_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionBanner";
        }

        static getAttributes() {
            return {
                codeFunction: "CommissionBanner",
                functionKey: "d4ea40cd-9795-4f8f-add6-5946911c0c4e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionBanner.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Home_CommissionBanner_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_CommissionBanner_mvc_controller;
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
                    style: "background-color: #e9ecef; border-radius: 8px; display: inline-block; height: 153px; max-height: 130px; overflow: hidden; position: relative;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "commission-banner",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "height: 100%; position: absolute; z-index: 0;"
                },
                gridProperties: {
                    width: "100vw"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.GraphBackground.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    name: "GraphBackground"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "height: 120px; position: absolute; right: 10%;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.CommisionStructureIcon.svg"),
                style: "commission-icon",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    name: "CommisionStructureIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "text-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px; justify-content: center; z-index: 2;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "50%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold; text-wrap: wrap;"
                },
                style: "commission-text",
                text: [$text(getTranslation("fbMhprVBJUKl1tI+9HqV4w#Value", "How commissions are calculated"))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "z-index: 2;"
                },
                gridProperties: {
                    width: "110px",
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.onClickLearnMore$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "learn-more-button",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("dZs_UaLNzkKgTcMnmeLywA#Value", "Learn more")))))));
        }
    }

    return View;
});
define("PartnersHub.Home.CommissionBanner.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.CommissionBanner.mvc$translationsResources", "PartnersHub.Home.CommissionBanner.mvc$controller.OnClickLearnMore.JavaScript1JS", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_CommissionBanner_mvc_TranslationsResources, PartnersHub_Home_CommissionBanner_mvc_controller_OnClickLearnMore_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_CommissionBanner_mvc_TranslationsResources);
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
            get _onClickLearnMore$Action() {
                if (!(this.hasOwnProperty("__onClickLearnMore$Action"))) {
                    this.__onClickLearnMore$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLearnMore", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLearnMore");
                                span.setAttribute("outsystems.function.key", "c552f8c8-233b-4d7e-be75-4f3a01fcb16f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickLearnMore");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Learn more";
                                    rec.cta_placementAttr = "commission calculation section";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "079da253-b4e7-4d34-bb0a-abf0bae25d20");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_CommissionBanner_mvc_controller_OnClickLearnMore_JavaScript1JS, "JavaScript1", "OnClickLearnMore", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickLearnMore$Action;
            }
            set _onClickLearnMore$Action(value) {
                this.__onClickLearnMore$Action = value;
            }


            onClickLearnMore$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLearnMore__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLearnMore");
                        span.setAttribute("outsystems.function.key", "c552f8c8-233b-4d7e-be75-4f3a01fcb16f");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickLearnMore$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.CommissionBanner.mvc$controller.OnClickLearnMore.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.open("https://deriv.com/help-centre/affiliate-programme#id-commission-plans")
    };
});


define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.de-DE", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Erfahren Sie mehr",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Wie die Provisionen berechnet werden"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.es-ES", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Aprende más",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Cómo se calculan las comisiones"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.fr-FR", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "En savoir plus",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Comment les commissions sont calculées"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.it-IT", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Scopri di più",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Come vengono calcolate le commissioni"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.pl-PL", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Dowiedz się więcej",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Jak są obliczane prowizje"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.pt-PT", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Saiba mais",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Como são calculadas as comissões"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources.ru-RU", [], function() {
    return {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Узнайте больше",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Как рассчитываются комиссии"
    };
});

define("PartnersHub.Home.CommissionBanner.mvc$translationsResources", ["exports", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.de-DE", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.es-ES", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.fr-FR", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.it-IT", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.pl-PL", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.pt-PT", "PartnersHub.Home.CommissionBanner.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_CommissionBanner_mvc_translationsResources_deDE, PartnersHub_Home_CommissionBanner_mvc_translationsResources_esES, PartnersHub_Home_CommissionBanner_mvc_translationsResources_frFR, PartnersHub_Home_CommissionBanner_mvc_translationsResources_itIT, PartnersHub_Home_CommissionBanner_mvc_translationsResources_plPL, PartnersHub_Home_CommissionBanner_mvc_translationsResources_ptPT, PartnersHub_Home_CommissionBanner_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_CommissionBanner_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});