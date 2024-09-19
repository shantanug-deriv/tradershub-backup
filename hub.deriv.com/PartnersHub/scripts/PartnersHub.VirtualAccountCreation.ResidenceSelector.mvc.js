define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function(OSRuntimeCore, PartnersHubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc());
                    }, false, PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc),
                    this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc());
                    }, false, PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc),
                    this.attr("Subtitle", "subtitleIn", "Subtitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ResidenceList", "residenceListIn", "ResidenceList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc());
                    }, false, PartnersHubModel.RL_ad0d7e810e49e61265e2d337c04416fc),
                    this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("WebsiteStatus", "websiteStatusIn", "WebsiteStatus", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_4fc107f3f00705667fa092c970065f35Structure());
                    }, false, PartnersHubModel.ST_4fc107f3f00705667fa092c970065f35Structure),
                    this.attr("_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", "_websiteStatusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Input_SearchedItem: OS.Model.ValidationWidgetRecord
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
            if ("Subtitle" in inputs) {
                this.variables.subtitleIn = inputs.Subtitle;
                if ("_subtitleInDataFetchStatus" in inputs) {
                    this.variables._subtitleInDataFetchStatus = inputs._subtitleInDataFetchStatus;
                }

            }

            if ("ResidenceList" in inputs) {
                this.variables.residenceListIn = inputs.ResidenceList;
                if ("_residenceListInDataFetchStatus" in inputs) {
                    this.variables._residenceListInDataFetchStatus = inputs._residenceListInDataFetchStatus;
                }

            }

            if ("WebsiteStatus" in inputs) {
                this.variables.websiteStatusIn = inputs.WebsiteStatus;
                if ("_websiteStatusInDataFetchStatus" in inputs) {
                    this.variables._websiteStatusInDataFetchStatus = inputs._websiteStatusInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$model", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Search.mvc$view", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_model, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_Search_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "VirtualAccountCreation.ResidenceSelector";
        }

        static getAttributes() {
            return {
                codeFunction: "ResidenceSelector",
                functionKey: "18bb4f27-851a-4de9-8ca5-9c4fc4c361ff",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.VirtualAccountCreation.ResidenceSelector.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Search_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller;
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
                    style: "background-color: #fff; height: 100vh;"
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
                    style: "margin-right: 16px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Interaction_Search_mvc_view, {
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedProperties: {
                                style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0px"
                            },
                            inputType: /*Search*/ 8,
                            mandatory: false,
                            maxLength: 0,
                            onChange: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.onSearch$Action(model.variables.searchedResidenceVar, controller.callContext(eventHandlerContext));

                                ;
                            },
                            prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchedResidenceVar, function(value) {
                                model.variables.searchedResidenceVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.searchedResidenceVar)]
            })), $if((OS.BuiltinFunctions.length(model.variables.subtitleIn) > 0), false, this, function() {
                return [React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 14px; margin-right: 16px;"
                    },
                    gridProperties: {
                        marginLeft: "16px"
                    },
                    value: model.variables.subtitleIn,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subtitleInDataFetchStatus)
                })];
            }, function() {
                return [];
            }), $if((model.variables.filteredResidenceListVar.length > 0), false, this, function() {
                return [React.createElement(OSWidgets.List, {
                    animateItems: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    source: model.variables.filteredResidenceListVar,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getIsCountryUnavailable()), asPrimitiveValue(model.variables.currentResidenceVar), asPrimitiveValue(model.variables._websiteStatusInDataFetchStatus), asPrimitiveValue(model.variables.websiteStatusIn.clients_countryAttr), asPrimitiveValue(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr), asPrimitiveValue(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr)]
                            }, $if((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.websiteStatusIn.clients_countryAttr), false, this, function() {
                                return [React.createElement(OSWidgets.ListItem, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.onClickCountry$Action(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));

                                        ;
                                    },
                                    style: "list-item residence-item",
                                    triggerActionOnFullSwipeLeft: true,
                                    triggerActionOnFullSwipeRight: true,
                                    _idProps: {
                                        service: idService,
                                        name: "CurrentCountryItem"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        leftActions: PlaceholderContent.Empty,
                                        content: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "border-color: #e9ecef; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 16px; margin-top: 0px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "16px"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
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
                                                    style: "border-color: #e9ecef; border-style: solid; border-width: 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "font-size: 20px; font-weight: 700;"
                                                },
                                                style: model.getCachedValue(idService.getId("lC5fVYUy7Eal3CKv1kK3yQ.Style"), function() {
                                                    return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? ("current-country") : ("country-list"));
                                                }, function() {
                                                    return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
                                                }, function() {
                                                    return model.variables.currentResidenceVar;
                                                }),
                                                value: model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }))))), React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })))];
                                        }),
                                        rightActions: PlaceholderContent.Empty
                                    }
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.ListItem, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.onClickCountry$Action(model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));

                                        ;
                                    },
                                    style: model.getCachedValue(idService.getId("ListItem1.Style"), function() {
                                        return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? (((PartnersHubClientVariables.getIsCountryUnavailable()) ? ("list-item current-residence-item no-select") : ("list-item current-residence-item"))) : ("list-item residence-item"));
                                    }, function() {
                                        return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
                                    }, function() {
                                        return model.variables.currentResidenceVar;
                                    }, function() {
                                        return PartnersHubClientVariables.getIsCountryUnavailable();
                                    }),
                                    triggerActionOnFullSwipeLeft: true,
                                    triggerActionOnFullSwipeRight: true,
                                    _idProps: {
                                        service: idService,
                                        name: "ListItem1"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        leftActions: PlaceholderContent.Empty,
                                        content: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
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
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "font-size: 15px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: model.getCachedValue(idService.getId("kbAQbEuFikmTgsPEIEs6Sg.Style"), function() {
                                                    return (((model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr === model.variables.currentResidenceVar)) ? ("current-country") : ("country-list"));
                                                }, function() {
                                                    return model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).valueAttr;
                                                }, function() {
                                                    return model.variables.currentResidenceVar;
                                                }),
                                                value: model.variables.filteredResidenceListVar.getCurrent(callContext.iterationContext).textAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }))), React.createElement(OSWidgets.Icon, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: /*Twotimes*/ 1,
                                                style: "icon",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }))];
                                        }),
                                        rightActions: PlaceholderContent.Empty
                                    }
                                })];
                            }))];
                        }, callContext, idService, "1")
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getIsCountryUnavailable()), asPrimitiveValue(model.variables.currentResidenceVar), asPrimitiveValue(model.variables._websiteStatusInDataFetchStatus), asPrimitiveValue(model.variables.websiteStatusIn.clients_countryAttr)]
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin-top: 12px; text-align: center;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "22"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "23"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #222; font-size: 16px;"
                    },
                    text: [$text(getTranslation("NTn7X7AkMU+QdTPvRjMMCQ#Value", "Services not available"))],
                    _idProps: {
                        service: idService,
                        uuid: "24"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            })));
        }
    }

    return View;
});
define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller.OnSearch.JavaScript1JS", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller.OnReady.JavaScript1JS", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc", "PartnersHub.model$ST_4fc107f3f00705667fa092c970065f35Structure", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_TranslationsResources, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller_OnSearch_JavaScript1JS, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_TranslationsResources);
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
            get _onSearch$Action() {
                if (!(this.hasOwnProperty("__onSearch$Action"))) {
                    this.__onSearch$Action = function(searchedItemArgIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSearch", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSearch");
                                span.setAttribute("outsystems.function.key", "8473a3f6-13a2-4bc1-be90-3fc9e6b64d44");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSearch");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$vars"))());
                                vars.value.searchedItemArgInLocal = searchedItemArgIn;
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var serializeFilteredResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure))());
                                if (((OS.BuiltinFunctions.length(vars.value.searchedItemArgInLocal) > 0))) {
                                    // JSON Serialize: SerializeFilteredResidenceList
                                    serializeFilteredResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.filteredResidenceListVar, false, false);
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "2d776bbd-1d88-4216-b899-f932f8713d09");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller_OnSearch_JavaScript1JS, "JavaScript1", "OnSearch", {
                                                ResidenceList: OS.DataConversion.JSNodeParamConverter.to(serializeFilteredResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                SearchedResidence: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchedItemArgInLocal, OS.DataTypes.DataTypes.Text),
                                                FilteredResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult"))();
                                                jsNodeResult.filteredResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FilteredResidenceList, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // JSON Deserialize: JSONDeserializeResidenceListResponse
                                    jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.filteredResidenceListOut, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure, false);
                                    // FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                    model.variables.filteredResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                } else {
                                    // FilteredResidenceList = SortedResidenceList
                                    model.variables.filteredResidenceListVar = model.variables.sortedResidenceListVar;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onSearch$Action;
            }
            set _onSearch$Action(value) {
                this.__onSearch$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e6553aa2-c16f-43c2-b326-b3355dc3a767");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure))());
                                // JSON Serialize: JSONSerialize1
                                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.residenceListIn, false, false);
                                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "87b9a279-0515-426e-aef0-18922a59fe06");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                            ResidenceList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                            CurrentResidence: OS.DataConversion.JSNodeParamConverter.to(model.variables.websiteStatusIn.clients_countryAttr, OS.DataTypes.DataTypes.Text),
                                            SortedResidenceList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult"))();
                                            jsNodeResult.sortedResidenceListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SortedResidenceList, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializeResidenceListResponse
                                jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.sortedResidenceListOut, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure, false);
                                // FilteredResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                model.variables.filteredResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                // SortedResidenceList = JSONDeserializeResidenceListResponse.Data.Residence_list
                                model.variables.sortedResidenceListVar = jSONDeserializeResidenceListResponseVar.value.dataOut.residence_listAttr;
                                // CurrentResidence = WebsiteStatus.Clients_country
                                model.variables.currentResidenceVar = model.variables.websiteStatusIn.clients_countryAttr;
                                // ClientCountry = WebsiteStatus.Clients_country
                                PartnersHubClientVariables.setClientCountry(model.variables.websiteStatusIn.clients_countryAttr);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }


            onSearch$Action(searchedItemArgIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSearch__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSearch");
                        span.setAttribute("outsystems.function.key", "8473a3f6-13a2-4bc1-be90-3fc9e6b64d44");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onSearch$Action, callContext, searchedItemArgIn);
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
                        span.setAttribute("outsystems.function.key", "e6553aa2-c16f-43c2-b326-b3355dc3a767");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            get onClickCountry$Action() {
                if (!(this.hasOwnProperty("_onClickCountry$Action"))) {
                    this._onClickCountry$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickCountry$Action;
            }
            set onClickCountry$Action(value) {
                this._onClickCountry$Action = value;
            }

            get onClickBack$Action() {
                if (!(this.hasOwnProperty("_onClickBack$Action"))) {
                    this._onClickBack$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClickBack$Action;
            }
            set onClickBack$Action(value) {
                this._onClickBack$Action = value;
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$vars", [{
            name: "SearchedItemArg",
            attrName: "searchedItemArgInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult", [{
            name: "FilteredResidenceList",
            attrName: "filteredResidenceListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult", [{
            name: "SortedResidenceList",
            attrName: "sortedResidenceListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller.OnSearch.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceListResponse = JSON.parse($parameters.ResidenceList)

        const filteredResidenceListResponse = JSON.stringify({
            ...residenceListResponse,
            residence_list: residenceListResponse.filter(country => country["text"].toLowerCase().startsWith($parameters.SearchedResidence.toLowerCase()))
        })

        $parameters.FilteredResidenceList = filteredResidenceListResponse
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const residenceList = JSON.parse($parameters.ResidenceList)
        residenceList.sort((a, _) => a.value === $parameters.CurrentResidence ? -1 : 1)
        $parameters.SortedResidenceList = JSON.stringify({
            residence_list: residenceList
        })
        console.log($parameters.CurrentResidence)
    };
});


define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.de-DE", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Dienste nicht verfügbar",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Suche"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.es-ES", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Servicios no disponibles",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Buscar"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.fr-FR", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Services non disponibles",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Recherche"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.it-IT", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Servizi non disponibili",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Cerca"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.pl-PL", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Usługi niedostępne",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Szukaj"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.pt-PT", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Serviços não disponíveis",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Pesquisar"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.ru-RU", [], function() {
    return {
        "NTn7X7AkMU+QdTPvRjMMCQ#Value": "Услуги недоступны",
        "zcf3NBTGL0CMeabI9yNT_g#ValueExpression.-1822469688.1": "Поиск"
    };
});

define("PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources", ["exports", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.de-DE", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.es-ES", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.fr-FR", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.it-IT", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.pl-PL", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.pt-PT", "PartnersHub.VirtualAccountCreation.ResidenceSelector.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_deDE, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_esES, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_frFR, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_itIT, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_plPL, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_ptPT, PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_VirtualAccountCreation_ResidenceSelector_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});