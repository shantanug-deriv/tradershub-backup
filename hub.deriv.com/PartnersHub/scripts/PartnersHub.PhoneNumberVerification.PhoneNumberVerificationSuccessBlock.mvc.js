define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model"], function(OSRuntimeCore, PartnersHubModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel) {
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$model", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_model, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "PhoneNumberVerification.PhoneNumberVerificationSuccessBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "PhoneNumberVerificationSuccessBlock",
                functionKey: "c72540d4-e30e-4200-87fe-a7f03e95dca4",
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
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_controller;
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
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px; justify-content: center; text-align: center;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checksuccess.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px; font-weight: bold;"
                },
                text: [$text(getTranslation("HYnU0YvK1UOpA1lyGTo7Xg#Value", "Success"))],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "color: #222; margin-right: 0px; padding: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [$text(getTranslation("nsqW7xRMnEa2udMrIDU1Bw#Value", "Phone number verified. Your account manager will contact you shortly."))],
                _idProps: {
                    service: idService,
                    uuid: "5"
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
                    title: "OK",
                    Width: "100%"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickOk$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "6",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_TranslationsResources);
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

            get onClickOk$Action() {
                if (!(this.hasOwnProperty("_onClickOk$Action"))) {
                    this._onClickOk$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickOk$Action;
            }
            set onClickOk$Action(value) {
                this._onClickOk$Action = value;
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


define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Telefonnummer verifiziert. Ihr Kundenbetreuer wird Sie in Kürze kontaktieren.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Erfolg"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Número de teléfono verificado. Su gestor de cuentas se pondrá en contacto con usted en breve.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Éxito"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Numéro de téléphone vérifié. Votre gestionnaire de compte vous contactera bientôt.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Succès"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Numero di telefono verificato. Il tuo account manager ti contatterà a breve.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Successo"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Numer telefonu zweryfikowany. Twój menedżer konta skontaktuje się z Tobą wkrótce.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Sukces"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Número de telefone verificado. O seu gestor de conta irá contactá-lo em breve.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Sucesso"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "nsqW7xRMnEa2udMrIDU1Bw#Value": "Номер телефона подтвержден. Ваш менеджер свяжется с вами в ближайшее время.",
        "HYnU0YvK1UOpA1lyGTo7Xg#Value": "Успех"
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources", ["exports", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.de-DE", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.es-ES", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.fr-FR", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.it-IT", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.pl-PL", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.pt-PT", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationSuccessBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_deDE, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_esES, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_frFR, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_itIT, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_plPL, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_ptPT, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_PhoneNumberVerification_PhoneNumberVerificationSuccessBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});