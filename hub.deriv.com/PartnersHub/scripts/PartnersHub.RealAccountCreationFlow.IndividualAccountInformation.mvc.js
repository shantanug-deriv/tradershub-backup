define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "DerivLogger.controller", "PartnersHub.controller$NextStepReal", "DerivLogger.controller$ConsoleLog", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$DerivLogger"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, DerivLoggerController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("websiteAddress", "websiteAddressVar", "websiteAddress", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("isMobileLayout", "isMobileLayoutIn", "isMobileLayout", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                FormWebsiteAddress: OS.Model.ValidationWidgetRecord,
                Input_WebsiteAddress: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {
            if ("isMobileLayout" in inputs) {
                this.variables.isMobileLayoutIn = inputs.isMobileLayout;
                if ("_isMobileLayoutInDataFetchStatus" in inputs) {
                    this.variables._isMobileLayoutInDataFetchStatus = inputs._isMobileLayoutInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "DerivLogger.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$model", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.controller$NextStepReal", "DerivLogger.controller$ConsoleLog", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$DerivLogger"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, DerivLoggerController, React, OSView, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_model, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.IndividualAccountInformation";
        }

        static getAttributes() {
            return {
                codeFunction: "IndividualAccountInformation",
                functionKey: "9968871e-aeae-4eb4-b8b5-f3cdb26302db",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_controller;
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
                    style: model.getCachedValue(idService.getId("3cJ2R6CRa0efN_p6KepYQg.style"), function() {
                        return ((model.variables.isMobileLayoutIn) ? ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n") : ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n"));
                    }, function() {
                        return model.variables.isMobileLayoutIn;
                    })
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
                    style: ("margin-top: 0px;" + ((model.variables.isMobileLayoutIn) ? ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 8px;\r\n    gap: 16px;\r\n") : ("\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 24px;\r\n    gap: 24px;\r\n")))
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [$text(getTranslation("7xhuTyiejkmHiT0utntkkg#Value", "Share the website URL you\'ll use for promoting our services."))],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: model.getCachedValue(idService.getId("zpvzMg+3J0Kida7Ie4HBmQ.Style"), function() {
                    return ((model.widgets.get(idService.getId("Input_WebsiteAddress")).validAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : ("margin-bottom-s"));
                }, function() {
                    return model.widgets.get(idService.getId("Input_WebsiteAddress")).validAttr;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "\"form card\"",
                _idProps: {
                    service: idService,
                    name: "FormWebsiteAddress"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: true,
                targetWidget: "Input_WebsiteAddress",
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("nSNgqvEiEEeaizXqeVp1fw#Value", "Your Website"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("FormWebsiteAddress")
                },
                enabled: true,
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: true,
                maxLength: 50,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.onChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                prompt: "Enter your website address",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.websiteAddressVar, function(value) {
                    model.variables.websiteAddressVar = value;
                }),
                _idProps: {
                    service: idService,
                    name: "Input_WebsiteAddress"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: model.getCachedValue(idService.getId("mZ2cSteQWEGry8DcgRxoew.Style"), function() {
                    return ((!(model.variables.isMobileLayoutIn)) ? ("tnc-button-container tnc-button-container__desktop") : (""));
                }, function() {
                    return model.variables.isMobileLayoutIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isMobileLayoutInDataFetchStatus)
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                isDefault: false,
                onClick: function() {
                    controller.validationService.validateWidget("");
                    var eventHandlerContext = callContext.clone();
                    controller.nextAction$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: model.getCachedValue(idService.getId("Next.Style"), function() {
                    return ("btn btn-primary primary-button " + ((model.variables.isMobileLayoutIn) ? ("full-width") : ("")));
                }, function() {
                    return model.variables.isMobileLayoutIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Next"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isMobileLayoutInDataFetchStatus)
            }, $text(getTranslation("Ct2l9Kfj6ES_lWZVQq3kfQ#Value", "Next")))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "DerivLogger.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources", "PartnersHub.controller$NextStepReal", "DerivLogger.controller$ConsoleLog", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$DerivLogger"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, DerivLoggerController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_TranslationsResources);
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
            get _nextAction$Action() {
                if (!(this.hasOwnProperty("__nextAction$Action"))) {
                    this.__nextAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NextAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NextAction");
                                span.setAttribute("outsystems.function.key", "1a9d7a7d-d624-44b0-b763-4c75258325af");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NextAction");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("FormWebsiteAddress")).validAttr)) {
                                    // Execute Action: ConsoleLog
                                    DerivLoggerController.default.consoleLog$Action(model.variables.websiteAddressVar, PartnersHubModel.staticEntities.consoleErrorType.information, callContext);
                                    // Execute Action: NextStepReal
                                    PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
                                } else {
                                    // Input_WebsiteAddress.ValidationMessage = "Website URL is required."
                                    model.widgets.get(idService.getId("Input_WebsiteAddress")).validationMessageAttr = "Website URL is required.";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__nextAction$Action;
            }
            set _nextAction$Action(value) {
                this.__nextAction$Action = value;
            }

            get _onChange$Action() {
                if (!(this.hasOwnProperty("__onChange$Action"))) {
                    this.__onChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnChange");
                                span.setAttribute("outsystems.function.key", "7043dfd8-c9af-4580-80e8-4765c342f05a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnChange");
                                callContext = controller.callContext(callContext);
                                if ((((((model.variables.websiteAddressVar) !== (""))) ? (true) : (false)))) {
                                    // Input_WebsiteAddress.Valid = True
                                    model.widgets.get(idService.getId("Input_WebsiteAddress")).validAttr = true;
                                    // Input_WebsiteAddress.ValidationMessage = ""
                                    model.widgets.get(idService.getId("Input_WebsiteAddress")).validationMessageAttr = "";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onChange$Action;
            }
            set _onChange$Action(value) {
                this.__onChange$Action = value;
            }


            nextAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NextAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NextAction");
                        span.setAttribute("outsystems.function.key", "1a9d7a7d-d624-44b0-b763-4c75258325af");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._nextAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnChange");
                        span.setAttribute("outsystems.function.key", "7043dfd8-c9af-4580-80e8-4765c342f05a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onChange$Action, callContext);
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


define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.de-DE", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Nächste",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Ihre Website",
        "7xhuTyiejkmHiT0utntkkg#Value": "Teilen Sie die URL der Website, die Sie zur Bewerbung unserer Dienstleistungen verwenden werden."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.es-ES", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Siguiente",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Su sitio web",
        "7xhuTyiejkmHiT0utntkkg#Value": "Comparte la URL del sitio web que utilizarás para promover nuestros servicios."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.fr-FR", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Suivant",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Votre site web",
        "7xhuTyiejkmHiT0utntkkg#Value": "Partagez l\'URL du site web que vous utiliserez pour promouvoir nos services."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.it-IT", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Prossimo",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Il tuo sito web",
        "7xhuTyiejkmHiT0utntkkg#Value": "Condividi l\'URL del sito web che utilizzerai per promuovere i nostri servizi."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.pl-PL", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Następny",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Twoja strona internetowa",
        "7xhuTyiejkmHiT0utntkkg#Value": "Podziel się adresem URL strony internetowej, której użyjesz do promowania naszych usług."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.pt-PT", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Próximo",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "O seu site",
        "7xhuTyiejkmHiT0utntkkg#Value": "Compartilhe a URL do site que você usará para promover nossos serviços."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.ru-RU", [], function() {
    return {
        "Ct2l9Kfj6ES_lWZVQq3kfQ#Value": "Далее",
        "nSNgqvEiEEeaizXqeVp1fw#Value": "Ваш веб-сайт",
        "7xhuTyiejkmHiT0utntkkg#Value": "Поделитесь URL-адресом веб-сайта, который вы будете использовать для продвижения наших услуг."
    };
});

define("PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.IndividualAccountInformation.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_IndividualAccountInformation_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});