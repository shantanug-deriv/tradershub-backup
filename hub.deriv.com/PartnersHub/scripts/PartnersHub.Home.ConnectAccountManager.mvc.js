define("PartnersHub.Home.ConnectAccountManager.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
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

define("PartnersHub.Home.ConnectAccountManager.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.ConnectAccountManager.mvc$model", "PartnersHub.Home.ConnectAccountManager.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Home_ConnectAccountManager_mvc_model, PartnersHub_Home_ConnectAccountManager_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.ConnectAccountManager";
        }

        static getAttributes() {
            return {
                codeFunction: "ConnectAccountManager",
                functionKey: "9cc188c0-01fd-4d33-a8c8-9b5a7f89d164",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.ConnectAccountManager.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Home_ConnectAccountManager_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_ConnectAccountManager_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                style: "connect-account-manager",
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
                    style: "align-items: center; display: flex; justify-content: space-between;"
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
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between;"
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
                    style: "align-items: center; display: flex; gap: 14px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "height: 30px;"
                },
                gridProperties: {
                    width: "30px"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.whatsapp.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px; font-weight: bold;"
                },
                text: [$text(getTranslation("1WvkBGwnZEe65CmHsO972g#Value", "Connect with your account manager"))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("PartnersHub.Home.ConnectAccountManager.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_ConnectAccountManager_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_ConnectAccountManager_mvc_TranslationsResources);
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

            get onClick$Action() {
                if (!(this.hasOwnProperty("_onClick$Action"))) {
                    this._onClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClick$Action;
            }
            set onClick$Action(value) {
                this._onClick$Action = value;
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


define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.de-DE", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Verbinden Sie sich mit Ihrem Kundenbetreuer"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.es-ES", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Conéctate con tu gestor de cuentas"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.fr-FR", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Connectez-vous avec votre gestionnaire de compte"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.it-IT", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Connettiti con il tuo account manager"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.pl-PL", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Połącz się ze swoim menedżerem konta"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.pt-PT", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Conecte-se com o seu gestor de contas"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.ru-RU", [], function() {
    return {
        "1WvkBGwnZEe65CmHsO972g#Value": "Свяжитесь со своим менеджером по работе с клиентами"
    };
});

define("PartnersHub.Home.ConnectAccountManager.mvc$translationsResources", ["exports", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.de-DE", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.es-ES", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.fr-FR", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.it-IT", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.pl-PL", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.pt-PT", "PartnersHub.Home.ConnectAccountManager.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_deDE, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_esES, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_frFR, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_itIT, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_plPL, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_ptPT, PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_ConnectAccountManager_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});