define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
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

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_model, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.AccountTypeBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "AccountTypeBlock",
                functionKey: "3811445e-9cb1-4b09-84dc-5e9e0e27dcf5",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.AccountTypeBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_controller;
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
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%",
                    marginLeft: "0"
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
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.individualAccountOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                style: model.getCachedValue(idService.getId("IndividualAccount.Style"), function() {
                    return (((PartnersHubClientVariables.getSelectedAccountType() === OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1", "Individual"))) ? ("accountType-selected") : ("accountType"));
                }, function() {
                    return PartnersHubClientVariables.getSelectedAccountType();
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "IndividualAccount"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.person.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%",
                    marginLeft: "16px"
                },
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
                    style: "display: flex; justify-content: space-between;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                text: [$text(getTranslation("BHu16PA31k+_xbV8XRVSxg#Value", "Individual"))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), $if((PartnersHubClientVariables.getSelectedAccountType() === OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1", "Individual")), false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.companyAccountOnClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                style: model.getCachedValue(idService.getId("CompanyAccount.Style"), function() {
                    return (((PartnersHubClientVariables.getSelectedAccountType() === OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1", "Company"))) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1", "accountType-selected")) : (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1", "accountType")));
                }, function() {
                    return PartnersHubClientVariables.getSelectedAccountType();
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CompanyAccount"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.company.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%",
                    marginLeft: "16px"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
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
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                text: [$text(getTranslation("jee0rhaeF0i47BhZaur4XQ#Value", "Company"))],
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), $if((PartnersHubClientVariables.getSelectedAccountType() === OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1", "Company")), false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_TranslationsResources);
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
            get _companyAccountOnClick$Action() {
                if (!(this.hasOwnProperty("__companyAccountOnClick$Action"))) {
                    this.__companyAccountOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CompanyAccountOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CompanyAccountOnClick");
                                span.setAttribute("outsystems.function.key", "025f6dc6-7533-4210-b811-be4dbb8c5b4f");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CompanyAccountOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // SelectedAccountType = "Company"
                                    PartnersHubClientVariables.setSelectedAccountType(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1", "Company"));
                                    // Trigger Event: OnClickEvent
                                    return controller.onClickEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__companyAccountOnClick$Action;
            }
            set _companyAccountOnClick$Action(value) {
                this.__companyAccountOnClick$Action = value;
            }

            get _individualAccountOnClick$Action() {
                if (!(this.hasOwnProperty("__individualAccountOnClick$Action"))) {
                    this.__individualAccountOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("IndividualAccountOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "IndividualAccountOnClick");
                                span.setAttribute("outsystems.function.key", "6a2f551c-3e2a-40e9-bf81-2614b8d94d6d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("IndividualAccountOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // SelectedAccountType = "Individual"
                                    PartnersHubClientVariables.setSelectedAccountType(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1", "Individual"));
                                    // Trigger Event: OnClickEvent
                                    return controller.onClickEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__individualAccountOnClick$Action;
            }
            set _individualAccountOnClick$Action(value) {
                this.__individualAccountOnClick$Action = value;
            }


            companyAccountOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CompanyAccountOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CompanyAccountOnClick");
                        span.setAttribute("outsystems.function.key", "025f6dc6-7533-4210-b811-be4dbb8c5b4f");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._companyAccountOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            individualAccountOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("IndividualAccountOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "IndividualAccountOnClick");
                        span.setAttribute("outsystems.function.key", "6a2f551c-3e2a-40e9-bf81-2614b8d94d6d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._individualAccountOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onClickEvent$Action() {
                if (!(this.hasOwnProperty("_onClickEvent$Action"))) {
                    this._onClickEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickEvent$Action;
            }
            set onClickEvent$Action(value) {
                this._onClickEvent$Action = value;
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


define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Unternehmen",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Unternehmen",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Individuum",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Individuum",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Individuum",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Unternehmen"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Empresa",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Empresa",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Individual",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Individual",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Individual",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Empresa"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Entreprise",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Société",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Individu",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Individu",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Individuel",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Entreprise"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Azienda",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Azienda",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Individuo",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Individuo",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Individuale",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Azienda"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Firma",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Firma",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Indywidualny",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Osoba",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Osoba",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Firma"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Empresa",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Empresa",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Individual",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Indivíduo",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Indivíduo",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Empresa"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "9NaN8+TFmUSsrAHuQcHGQw#Condition.-1679829923.1": "Компания",
        "jee0rhaeF0i47BhZaur4XQ#Value": "Компания",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.-1679829923.1": "Company",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.432258721.1": "accountType-selected",
        "SW2UP1DiwU+LXUSM9CTPNQ#ValueExpression.866168583.1": "accountType",
        "PP959Y1b3E+P+uig8CMpHg#Condition.1947172537.1": "Индивидуум",
        "BHu16PA31k+_xbV8XRVSxg#Value": "Индивидуум",
        "UDSRgRGzUUiUwUiJn6CoqA#ValueExpression.1947172537.1": "Individual",
        "CLODEFLXaEKn9l9vYuDccA#Value.1947172537.1": "Индивид",
        "2mcqCxIKFE2Z9g7oZ9rFSQ#Value.-1679829923.1": "Компания"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.AccountTypeBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountTypeBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});