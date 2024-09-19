define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UserEmail", "userEmailIn", "UserEmail", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false),
                    this.attr("_userEmailInDataFetchStatus", "_userEmailInDataFetchStatus", "_userEmailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return false;
        }
        setInputs(inputs) {
            if ("UserEmail" in inputs) {
                this.variables.userEmailIn = inputs.UserEmail;
                if ("_userEmailInDataFetchStatus" in inputs) {
                    this.variables._userEmailInDataFetchStatus = inputs._userEmailInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$model", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_model, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "ForgotPassword.EmailVerificationSentBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "EmailVerificationSentBlock",
                functionKey: "f02a3e5f-12ee-4f1e-b13f-d97285d0d0fe",
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
            return PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_controller;
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
                    style: "background: white; display: flex; flex-direction: column; justify-content: center;"
                },
                style: "signup",
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
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px; text-align: center;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: "font-size: 96px; height: 128px;"
                },
                gridProperties: {
                    width: "128px",
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.email.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("OUP4_ngJ2U+KHS54a33Tbw#Value", "We’ve sent a verification link \u2028to ")), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.variables.userEmailIn,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._userEmailInDataFetchStatus)
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; gap: 8px; margin-bottom: 8px; margin-top: 16px;"
                },
                style: "display-flex justify-content-flex-start",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    width: "auto"
                },
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("z3UBGtc1W0+RfXnqw3WdlA#Value", "Didn\'t get an email? "))), React.createElement(OSWidgets.Label, {
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    width: "auto",
                    marginLeft: "0"
                },
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 14px; font-weight: bold; text-decoration: underline;"
                },
                text: [$text(getTranslation("zMaPYVkUw0OD1za8TxdeeQ#Value", "Resend email"))],
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    style: "display:flex; flex-direction:column;padding: 0 24px;"
                },
                tag: "ul",
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; width: auto;"
                },
                text: [$text(getTranslation("zom7hmSWsUy5xgWgjn0ksg#Value", "Make sure you’ve entered your email correctly."))],
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; width: auto;"
                },
                text: [$text(getTranslation("7UEGGYTlwEKf1U81dhfqeQ#Value", "Check your spam folder."))],
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.AdvancedHtml, {
                tag: "li",
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 12px; width: auto;"
                },
                text: [$text(getTranslation("8kih1_ff0UeIFc+ysew9NA#Value", "Make sure the email isn’t blocked by firewalls or filters."))],
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_TranslationsResources);
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
            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "617cb066-546c-4c18-94f4-3babf44808e7");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: ResendEmailHandler
                                    return controller.resendEmailHandler$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }


            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "617cb066-546c-4c18-94f4-3babf44808e7");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get resendEmailHandler$Action() {
                if (!(this.hasOwnProperty("_resendEmailHandler$Action"))) {
                    this._resendEmailHandler$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._resendEmailHandler$Action;
            }
            set resendEmailHandler$Action(value) {
                this._resendEmailHandler$Action = value;
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


define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Stellen Sie sicher, dass die E-Mail nicht von Firewalls oder Filtern blockiert wird.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Überprüfen Sie Ihren Spam-Ordner.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Stellen Sie sicher, dass Sie Ihre E-Mail-Adresse korrekt eingegeben haben.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "E-Mail erneut senden",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Keine E-Mail erhalten?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Wir haben einen Bestätigungslink gesendet an"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Asegúrate de que el correo electrónico no esté bloqueado por cortafuegos o filtros.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Verifica tu carpeta de spam.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Asegúrate de haber ingresado tu correo electrónico correctamente.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Reenviar correo electrónico",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "¿No recibiste un correo electrónico?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Hemos enviado un enlace de verificación a"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Assurez-vous que l\'e-mail n\'est pas bloqué par des pare-feu ou des filtres.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Vérifiez votre dossier spam.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Assurez-vous d\'avoir saisi correctement votre adresse e-mail.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Renvoyer l\'e-mail",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Vous n\'avez pas reçu d\'e-mail ?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Nous avons envoyé un lien de vérification à"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Assicurati che l\'email non sia bloccata da firewall o filtri.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Controlla la tua cartella spam.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Assicurati di aver inserito correttamente la tua email.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Invia nuovamente l\'email",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Non hai ricevuto un\'email?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Abbiamo inviato un link di verifica a"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Upewnij się, że e-mail nie jest blokowany przez zapory ogniowe lub filtry.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Sprawdź swój folder spam.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Upewnij się, że poprawnie wpisałeś swój adres e-mail.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Prześlij e-mail ponownie",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Nie otrzymałeś e-maila?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Wysłaliśmy link weryfikacyjny do"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Certifique-se de que o e-mail não está bloqueado por firewalls ou filtros.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Verifique a sua pasta de spam.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Certifique-se de que inseriu corretamente o seu e-mail.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Reenviar e-mail",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Não recebeu um e-mail?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Enviámos um link de verificação para"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "8kih1_ff0UeIFc+ysew9NA#Value": "Убедитесь, что электронное письмо не заблокировано межсетевыми экранами или фильтрами.",
        "7UEGGYTlwEKf1U81dhfqeQ#Value": "Проверьте свою папку со спамом.",
        "zom7hmSWsUy5xgWgjn0ksg#Value": "Убедитесь, что вы правильно ввели свой адрес электронной почты.",
        "zMaPYVkUw0OD1za8TxdeeQ#Value": "Переслать электронное письмо",
        "z3UBGtc1W0+RfXnqw3WdlA#Value": "Не получили письмо?",
        "OUP4_ngJ2U+KHS54a33Tbw#Value": "Мы отправили ссылку для подтверждения на"
    };
});

define("PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources", ["exports", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.de-DE", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.es-ES", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.fr-FR", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.it-IT", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.pl-PL", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.pt-PT", "PartnersHub.ForgotPassword.EmailVerificationSentBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_deDE, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_esES, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_frFR, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_itIT, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_plPL, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_ptPT, PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_ForgotPassword_EmailVerificationSentBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});