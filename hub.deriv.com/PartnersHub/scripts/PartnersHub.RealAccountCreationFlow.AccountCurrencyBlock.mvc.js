define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$EN_8476f8009941f077eecf6fb67b7e9001EntityRecord", "PartnersHub.model$RL_f11f2783845d109e2716e7158d803ceb", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocket.controller$LandingCompany", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LandingCompany", "landingCompanyVar", "LandingCompany", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure());
                    }, false, RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure),
                    this.attr("FilteredRecommendedCurrencies", "filteredRecommendedCurrenciesVar", "FilteredRecommendedCurrencies", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb());
                    }, false, PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb),
                    this.attr("FilteredOtherCurrencies", "filteredOtherCurrenciesVar", "FilteredOtherCurrencies", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb());
                    }, false, PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb)
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$EN_8476f8009941f077eecf6fb67b7e9001EntityRecord", "PartnersHub.model$RL_f11f2783845d109e2716e7158d803ceb", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocket.controller$LandingCompany", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_model, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.AccountCurrencyBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "AccountCurrencyBlock",
                functionKey: "a9c60d9f-6c5c-4606-9d6d-f2e271fdd63a",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller;
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
                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [$text(getTranslation("1BgQC1dOl0+suliu5QMy_A#Value", "Recommended"))],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if((model.variables.filteredRecommendedCurrenciesVar.length > 0), false, this, function() {
                return [React.createElement(OSWidgets.List, {
                    animateItems: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    source: model.variables.filteredRecommendedCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        name: "RecommendedList"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.ListItem, {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.recommendedListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                    });;
                                },
                                style: model.getCachedValue(idService.getId("RecommendedListItem.Style"), function() {
                                    return (((model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr === PartnersHubClientVariables.getSelectedCurrencyCode())) ? ("currency-list--selected") : ("currency-list"));
                                }, function() {
                                    return model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr;
                                }, function() {
                                    return PartnersHubClientVariables.getSelectedCurrencyCode();
                                }),
                                triggerActionOnFullSwipeLeft: true,
                                triggerActionOnFullSwipeRight: true,
                                _idProps: {
                                    service: idService,
                                    name: "RecommendedListItem"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    leftActions: PlaceholderContent.Empty,
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
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
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            type: /*External*/ 1,
                                            url: model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Label, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex ",
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            style: "display-flex align-items-center flex-direction-row",
                                            value: model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            value: (("(" + model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr) + ")"),
                                            _idProps: {
                                                service: idService,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if((PartnersHubClientVariables.getSelectedCurrencyCode() === model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), false, this, function() {
                                            return [React.createElement(OSWidgets.Image, {
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [React.createElement(OSWidgets.Image, {
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })))];
                                    }),
                                    rightActions: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedCurrencyCode()), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr)]
                            })];
                        }, callContext, idService, "1")
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedCurrencyCode())]
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "skeleton-loader",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [$text(getTranslation("NavmSfU2vEqhUhapuAdKNA#Value", "Other"))],
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if((model.variables.filteredRecommendedCurrenciesVar.length > 0), false, this, function() {
                return [React.createElement(OSWidgets.List, {
                    animateItems: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    source: model.variables.filteredOtherCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        name: "OtherCurrencies"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.ListItem, {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.otherCurrenciesItemOnClick$Action(controller.callContext(eventHandlerContext));
                                    });;
                                },
                                style: model.getCachedValue(idService.getId("OtherCurrenciesItem.Style"), function() {
                                    return (((model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr === PartnersHubClientVariables.getSelectedCurrencyCode())) ? ("currency-list--selected") : ("currency-list"));
                                }, function() {
                                    return model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr;
                                }, function() {
                                    return PartnersHubClientVariables.getSelectedCurrencyCode();
                                }),
                                triggerActionOnFullSwipeLeft: true,
                                triggerActionOnFullSwipeRight: true,
                                _idProps: {
                                    service: idService,
                                    name: "OtherCurrenciesItem"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    leftActions: PlaceholderContent.Empty,
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
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
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "32px"
                                            },
                                            type: /*External*/ 1,
                                            url: model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Label, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex",
                                            _idProps: {
                                                service: idService,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            style: "display-flex align-items-center flex-direction-row",
                                            value: model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            value: (("(" + model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr) + ")"),
                                            _idProps: {
                                                service: idService,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if((PartnersHubClientVariables.getSelectedCurrencyCode() === model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), false, this, function() {
                                            return [React.createElement(OSWidgets.Image, {
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [React.createElement(OSWidgets.Image, {
                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                                type: /*Static*/ 0,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })))];
                                    }),
                                    rightActions: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedCurrencyCode()), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).iconAttr)]
                            })];
                        }, callContext, idService, "2")
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getSelectedCurrencyCode())]
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "skeleton-loader",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "26"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller.FilterCurrenciesFunction.JavaScript1JS", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller.OnReady.GetTokenJS", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$EN_8476f8009941f077eecf6fb67b7e9001EntityRecord", "PartnersHub.model$RL_f11f2783845d109e2716e7158d803ceb", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocket.controller$LandingCompany", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$GetSettings"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller_FilterCurrenciesFunction_JavaScript1JS, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller_OnReady_GetTokenJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {};
                this.dataFetchDependentsGraph = {};
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get currenciesList$ServerAction() {
                if (!(this.hasOwnProperty("_currenciesList$ServerAction"))) {
                    this._currenciesList$ServerAction = function(callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("CurrenciesList", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CurrenciesList");
                                span.setAttribute("outsystems.function.key", "afbc9da7-955b-42ad-b0aa-05595261bdd1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("CurrenciesList", "screenservices/PartnersHub/RealAccountCreationFlow/AccountCurrencyBlock/ActionCurrenciesList", "cJRrY5eZDn0IQr27TWbSWQ", {}, controller.callContext(callContext), undefined, undefined, true).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock$ActionCurrenciesList"))();
                                    executeServerActionResult.currenciesListOut = OS.DataConversion.ServerDataConverter.from(outputs.CurrenciesList, PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._currenciesList$ServerAction;
            }
            set currenciesList$ServerAction(value) {
                this._currenciesList$ServerAction = value;
            }


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
            get _filterCurrenciesFunction$Action() {
                if (!(this.hasOwnProperty("__filterCurrenciesFunction$Action"))) {
                    this.__filterCurrenciesFunction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FilterCurrenciesFunction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FilterCurrenciesFunction");
                                span.setAttribute("outsystems.function.key", "0e4bd242-43e9-48d3-83b4-a3017098e464");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("FilterCurrenciesFunction");
                                callContext = controller.callContext(callContext);
                                var currenciesListVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeOtherCurrenciesVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb))());
                                var jSONDeserializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: CurrenciesList
                                    model.flush();
                                    return controller.currenciesList$ServerAction(callContext).then(function(value) {
                                        currenciesListVar.value = value;
                                    }).then(function() {
                                        // JSON Serialize: JSONSerialize1
                                        jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(currenciesListVar.value.currenciesListOut, false, false);
                                        // JSON Serialize: JSONSerialize2
                                        jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr, false, false, OS.DataTypes.DataTypes.Text);
                                        javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "JavaScript1");
                                                span.setAttribute("outsystems.function.key", "764cf0f0-8309-4182-be00-fa96cf2381a9");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller_FilterCurrenciesFunction_JavaScript1JS, "JavaScript1", "FilterCurrenciesFunction", {
                                                    RawCurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    LegalAllowedCurrencies: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize2Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    RecommendedCurrencies: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                    OtherCurrencies: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult"))();
                                                    jsNodeResult.recommendedCurrenciesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RecommendedCurrencies, OS.DataTypes.DataTypes.Text);
                                                    jsNodeResult.otherCurrenciesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OtherCurrencies, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeCurrenciesList
                                        jSONDeserializeCurrenciesListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.recommendedCurrenciesOut, PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb, false);
                                        // JSON Deserialize: JSONDeserializeOtherCurrencies
                                        jSONDeserializeOtherCurrenciesVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.otherCurrenciesOut, PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb, false);
                                        // FilteredRecommendedCurrencies = JSONDeserializeCurrenciesList.Data
                                        model.variables.filteredRecommendedCurrenciesVar = jSONDeserializeCurrenciesListVar.value.dataOut;
                                        // FilteredOtherCurrencies = JSONDeserializeOtherCurrencies.Data
                                        model.variables.filteredOtherCurrenciesVar = jSONDeserializeOtherCurrenciesVar.value.dataOut;
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

                return this.__filterCurrenciesFunction$Action;
            }
            set _filterCurrenciesFunction$Action(value) {
                this.__filterCurrenciesFunction$Action = value;
            }

            get _recommendedListItemOnClick$Action() {
                if (!(this.hasOwnProperty("__recommendedListItemOnClick$Action"))) {
                    this.__recommendedListItemOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RecommendedListItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RecommendedListItemOnClick");
                                span.setAttribute("outsystems.function.key", "7899af20-fc0f-48c5-aae8-1ffe14623e64");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("RecommendedListItemOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // SelectedCurrencyCode = FilteredRecommendedCurrencies.Current.Code
                                    PartnersHubClientVariables.setSelectedCurrencyCode(model.variables.filteredRecommendedCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr);
                                    // Trigger Event: NextStepEvent
                                    return controller.nextStepEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__recommendedListItemOnClick$Action;
            }
            set _recommendedListItemOnClick$Action(value) {
                this.__recommendedListItemOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "7e81f65d-ef77-4630-b85b-7726cde9245b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var landingCompany2Var = new OS.DataTypes.VariableHolder();
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var getTokenJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    getTokenJSResult.value = OS.Logger.startActiveSpan("GetToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GetToken");
                                            span.setAttribute("outsystems.function.key", "66b8d8ba-f40b-4f3b-ba28-aee20c7cc52b");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_controller_OnReady_GetTokenJS, "GetToken", "OnReady", {
                                                authToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.OnReady$getTokenJSResult"))();
                                                jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.authToken, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: GetSettings
                                    model.flush();
                                    return RESTAPIWebsocketController.default.getSettings$Action("green.derivws.com", getTokenJSResult.value.authTokenOut, "1", "en", callContext).then(function(value) {
                                        getSettingsVar.value = value;
                                    }).then(function() {
                                        // Execute Action: LandingCompany2
                                        model.flush();
                                        return RESTAPIWebsocketController.default.landingCompany$Action(function() {
                                            var rec = new RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure();
                                            rec.landing_companyAttr = getSettingsVar.value.responseOut.get_settingsAttr.country_codeAttr;
                                            return rec;
                                        }(), "green.derivws.com", "1", "en", callContext).then(function(value) {
                                            landingCompany2Var.value = value;
                                        });
                                    }).then(function() {
                                        // LandingCompany = LandingCompany2.Response
                                        model.variables.landingCompanyVar = landingCompany2Var.value.responseOut;
                                        // Execute Action: FilterCurrenciesFunction
                                        return controller._filterCurrenciesFunction$Action(callContext);
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

            get _otherCurrenciesItemOnClick$Action() {
                if (!(this.hasOwnProperty("__otherCurrenciesItemOnClick$Action"))) {
                    this.__otherCurrenciesItemOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OtherCurrenciesItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OtherCurrenciesItemOnClick");
                                span.setAttribute("outsystems.function.key", "e239aa59-6b9d-4979-af3d-c2837fd19160");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OtherCurrenciesItemOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // SelectedCurrencyCode = FilteredOtherCurrencies.Current.Code
                                    PartnersHubClientVariables.setSelectedCurrencyCode(model.variables.filteredOtherCurrenciesVar.getCurrent(callContext.iterationContext).codeAttr);
                                    // Trigger Event: NextStepEvent
                                    return controller.nextStepEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__otherCurrenciesItemOnClick$Action;
            }
            set _otherCurrenciesItemOnClick$Action(value) {
                this.__otherCurrenciesItemOnClick$Action = value;
            }


            filterCurrenciesFunction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FilterCurrenciesFunction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FilterCurrenciesFunction");
                        span.setAttribute("outsystems.function.key", "0e4bd242-43e9-48d3-83b4-a3017098e464");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._filterCurrenciesFunction$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            recommendedListItemOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RecommendedListItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RecommendedListItemOnClick");
                        span.setAttribute("outsystems.function.key", "7899af20-fc0f-48c5-aae8-1ffe14623e64");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._recommendedListItemOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "7e81f65d-ef77-4630-b85b-7726cde9245b");
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

            otherCurrenciesItemOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OtherCurrenciesItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OtherCurrenciesItemOnClick");
                        span.setAttribute("outsystems.function.key", "e239aa59-6b9d-4979-af3d-c2837fd19160");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._otherCurrenciesItemOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get nextStepEvent$Action() {
                if (!(this.hasOwnProperty("_nextStepEvent$Action"))) {
                    this._nextStepEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._nextStepEvent$Action;
            }
            set nextStepEvent$Action(value) {
                this._nextStepEvent$Action = value;
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
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock$ActionCurrenciesList", [{
            name: "CurrenciesList",
            attrName: "currenciesListOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb();
            },
            complexType: PartnersHubModel.RL_f11f2783845d109e2716e7158d803ceb
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult", [{
            name: "RecommendedCurrencies",
            attrName: "recommendedCurrenciesOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "OtherCurrencies",
            attrName: "otherCurrenciesOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.OnReady$getTokenJSResult", [{
            name: "authToken",
            attrName: "authTokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller.FilterCurrenciesFunction.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const currencies = JSON.parse($parameters.RawCurrenciesList);
        const legalAllowedCurrencies = JSON.parse($parameters.LegalAllowedCurrencies);


        const filteredRecommendedCurrencies = currencies.filter(currency => legalAllowedCurrencies.includes(currency.Code) && currency.Category === 'Recommended');

        const filteredOtherCurrencies = currencies.filter(currency => legalAllowedCurrencies.includes(currency.Code) && currency.Category === 'Other');


        $parameters.RecommendedCurrencies = JSON.stringify(filteredRecommendedCurrencies)

        $parameters.OtherCurrencies = JSON.stringify(filteredOtherCurrencies)

    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$controller.OnReady.GetTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem("token");
        $parameters.authToken = token;
    };
});


define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Andere",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Empfohlen"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Otro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recomendado"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Autre",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recommandé"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Altro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Raccomandato"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Inny",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Zalecane"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Outro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recomendado"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Другой",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Рекомендуется"
    };
});

define("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_AccountCurrencyBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});