define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
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
            return {
                Form1: OS.Model.ValidationWidgetRecord,
                CompanyNameInput: OS.Model.ValidationWidgetRecord,
                CompanyRegistrationNumberInput: OS.Model.ValidationWidgetRecord,
                CompanyWebsiteInput: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$model", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_model, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.CompanyAccountInformation";
        }

        static getAttributes() {
            return {
                codeFunction: "CompanyAccountInformation",
                functionKey: "91135fb4-f48d-4fb0-8f6c-b96bf71e665b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex flex-direction-column gap-m",
                _idProps: {
                    service: idService,
                    name: "Form1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
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
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("RlEWszTL90ShMbKVY+FqdA#Value", "Company name"))), React.createElement(OSWidgets.Input, {
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
                prompt: "Enter your company name",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyName(), function(value) {
                    PartnersHubClientVariables.setRealSignupCompanyName(value);
                }),
                _idProps: {
                    service: idService,
                    name: "CompanyNameInput"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
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
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("oPe5bjYhZUGMG_agdPtCGA#Value", "Company registration number"))), React.createElement(OSWidgets.Input, {
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
                maxLength: 0,
                prompt: "Enter your company registration number",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyRegistrationNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupCompanyRegistrationNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "CompanyRegistrationNumberInput"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
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
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("nMJSRyUyykWZMZAzopN+yQ#Value", "Company website"))), React.createElement(OSWidgets.Input, {
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
                prompt: "Enter your company website address",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupCompanyWebsite(), function(value) {
                    PartnersHubClientVariables.setRealSignupCompanyWebsite(value);
                }),
                _idProps: {
                    service: idService,
                    name: "CompanyWebsiteInput"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; justify-content: flex-end;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: true,
                onClick: function() {
                    controller.validationService.validateWidget(idService.getId("Form1"));
                    var eventHandlerContext = callContext.clone();
                    controller.saveOnClick$Action(controller.callContext(eventHandlerContext));


                    ;
                },
                style: "next-step-button",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-weight: bold;"
                },
                text: [$text(getTranslation("8TyiCledL0Ozu+dR9ojnVw#Value", "Next"))],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_TranslationsResources);
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
            get _saveOnClick$Action() {
                if (!(this.hasOwnProperty("__saveOnClick$Action"))) {
                    this.__saveOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveOnClick");
                                span.setAttribute("outsystems.function.key", "04f7dcf7-8564-4d09-a755-d4de2783878e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SaveOnClick");
                                callContext = controller.callContext(callContext);
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // Execute Action: NextStepReal
                                    PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
                                } else {
                                    // CompanyNameInput.ValidationMessage = "Company name is required."
                                    model.widgets.get(idService.getId("CompanyNameInput")).validationMessageAttr = "Company name is required.";
                                    // CompanyRegistrationNumberInput.ValidationMessage = "Company registration number is required."
                                    model.widgets.get(idService.getId("CompanyRegistrationNumberInput")).validationMessageAttr = "Company registration number is required.";
                                    // CompanyWebsiteInput.ValidationMessage = "Website URL is required."
                                    model.widgets.get(idService.getId("CompanyWebsiteInput")).validationMessageAttr = "Website URL is required.";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__saveOnClick$Action;
            }
            set _saveOnClick$Action(value) {
                this.__saveOnClick$Action = value;
            }


            saveOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveOnClick");
                        span.setAttribute("outsystems.function.key", "04f7dcf7-8564-4d09-a755-d4de2783878e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._saveOnClick$Action, callContext);
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


define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.de-DE", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Nächste",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Unternehmenswebsite",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Unternehmensregistrierungsnummer",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Firmenname"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.es-ES", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Siguiente",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Sitio web de la empresa",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Número de registro de la empresa",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Nombre de la empresa"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.fr-FR", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Suivant",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Site web de l\'entreprise",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Numéro d\'enregistrement de l\'entreprise",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Nom de l\'entreprise"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.it-IT", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Prossimo",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Sito web dell\'azienda",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Numero di registrazione della società",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Nome dell\'azienda"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.pl-PL", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Następny",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Strona internetowa firmy",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Numer rejestracji firmy",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Nazwa firmy"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.pt-PT", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Próximo",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Site da empresa",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Número de registro da empresa",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Nome da empresa"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.ru-RU", [], function() {
    return {
        "8TyiCledL0Ozu+dR9ojnVw#Value": "Следующий",
        "nMJSRyUyykWZMZAzopN+yQ#Value": "Веб-сайт компании",
        "oPe5bjYhZUGMG_agdPtCGA#Value": "Номер регистрации компании",
        "RlEWszTL90ShMbKVY+FqdA#Value": "Название компании"
    };
});

define("PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.CompanyAccountInformation.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_CompanyAccountInformation_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});