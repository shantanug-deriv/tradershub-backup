define("tradershub.MainFlow.Options.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetWebsiteStatus", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$TradingPlatformProductListing", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$getCurrencyIcon", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController) {
    var OS = OSRuntimeCore;

    {
        class TrustPilotDataActRecInner extends
        OS.Model.DataSourceRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TrustPilotOutput", "trustPilotOutputOut", "TrustPilotOutput", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure());
                    }, true, tradershubModel.ST_d9250f167f0b0818f60ee73b22ec1a06Structure)
                ].concat(OS.Model.DataSourceRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new TrustPilotDataActRec(new TrustPilotDataActRec.RecordClass({
                    trustPilotOutputOut: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var TrustPilotDataActRec = TrustPilotDataActRecInner;
        TrustPilotDataActRec.init();
    }

    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsDerivGoModalVisible", "isDerivGoModalVisibleVar", "IsDerivGoModalVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("AccountType", "accountTypeVar", "AccountType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "demo";
                    }, false),
                    this.attr("ShouldShowDBot", "shouldShowDBotVar", "ShouldShowDBot", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowSmartTrader", "shouldShowSmartTraderVar", "ShouldShowSmartTrader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowDerivGo", "shouldShowDerivGoVar", "ShouldShowDerivGo", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("DTraderAvailableTradeTypes", "dTraderAvailableTradeTypesVar", "DTraderAvailableTradeTypes", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, false, OS.DataTypes.TextList),
                    this.attr("AuthorizeResponse", "authorizeResponseVar", "AuthorizeResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure());
                    }, false, tradershubModel.ST_8d630435c078369fbe29222c857e96f2Structure),
                    this.attr("FilteredAccountList", "filteredAccountListVar", "FilteredAccountList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_5efabb620fce6e69244e61944ef4417d());
                    }, false, tradershubModel.RL_5efabb620fce6e69244e61944ef4417d),
                    this.attr("IsAccountSwitcherOpen", "isAccountSwitcherOpenVar", "IsAccountSwitcherOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasRealAccount", "hasRealAccountVar", "HasRealAccount", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ShouldShowDTrader", "shouldShowDTraderVar", "ShouldShowDTrader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("SelectedAccountCurrency", "selectedAccountCurrencyVar", "SelectedAccountCurrency", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("SelectedAccountBalance", "selectedAccountBalanceVar", "SelectedAccountBalance", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsEmptyPlatformModalVisible", "isEmptyPlatformModalVisibleVar", "IsEmptyPlatformModalVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsDisabled", "isDisabledVar", "IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("OpenAccountSwitcherModal", "openAccountSwitcherModalVar", "OpenAccountSwitcherModal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TrustPilotDataActRec());
                    }, true, TrustPilotDataActRec)
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
                RealDemoSwitcher: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.Options.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.Options.mvc$model", "tradershub.MainFlow.Options.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.Rating.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetWebsiteStatus", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$TradingPlatformProductListing", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$getCurrencyIcon", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, React, OSView, tradershub_MainFlow_Options_mvc_model, tradershub_MainFlow_Options_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Options";
        }

        static getAttributes() {
            return {
                codeFunction: "Options",
                functionKey: "4605474b-132d-4331-8d2c-b367d0f37e9f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Options.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_Options_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_Options_mvc_controller;
        }

        get title() {


            return "Options";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    IsLoading: model.variables.isLoadingVar,
                    ActiveTab: 2
                },
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if((((model.variables.accountTypeVar === "demo") && ((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && !(model.variables.hasRealAccountVar)), false, this, function() {
                            return [React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "demo-blue-container",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: ["Fill in your account details to make your first deposit."],
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))))];
                        }, function() {
                            return [];
                        }), $if(false, false, this, function() {
                            return [];
                        }, function() {
                            return [];
                        }), $if(false, false, this, function() {
                            return [];
                        }, function() {
                            return [];
                        }), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border-radius: 16px;"
                                },
                                style: "banner",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "OptionsBanner"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "logged-out-banner",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $if(OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut, false, this, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilotbanner.svg"),
                                    style: "position-relative",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    extendedProperties: {
                                        style: "height: 180px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_responsivebanner.svg"),
                                    style: "position-relative",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "9"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "position-relative display-flex flex-direction-column logged-out-banner-content",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Content"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 28px; font-weight: bold;"
                                },
                                style: "margin-bottom-s banner-text",
                                text: ["Join over 2.5 million traders"],
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "height: 48px; padding: 18px;"
                                },
                                gridProperties: {
                                    width: "120px",
                                    marginLeft: "0"
                                },
                                isDefault: false,
                                onClick: function() {
                                    try {
                                        OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((OS.BuiltinFunctions.index(tradershubClientVariables.getURL(), "green", 0, false, false) > -1)) ? (("https://oauth.deriv.com/oauth2/authorize?app_id=" + tradershubClientVariables.getAppId())) : (((("https://" + tradershubClientVariables.getURL()) + "/oauth2/authorize?app_id=") + tradershubClientVariables.getAppId()))), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                    } catch (ex) {
                                        if (((ex.name) !== ("RedirectOccurredException"))) {
                                            throw ex;
                                        }

                                    };
                                },
                                style: "btn banner-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Get started"],
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "border: 1px solid #E6E9E9; border-radius: 0px 0px 16px 16px; border-top: 0; padding: 16px 0px 16px 0px;"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                style: "customer-feedback",
                                text: ["Our customer say"],
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin: 0 24px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "Excellent"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                style: "customer-feedback",
                                text: ["Excellent"],
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OutSystemsUI_Numbers_Rating_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    RatingValue: model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr,
                                    _ratingValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
                                },
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    filledState: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_star.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    halfState: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Image, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_half_star.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    emptyState: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Image, {
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_start_empty.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })
                                },
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin: 0 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "customer-feedback",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                value: model.getCachedValue(idService.getId("IO9lESkXS06WjSIBzGVALg.Value"), function() {
                                    return (((OS.BuiltinFunctions.formatDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr, 2, ".", ",") + " out of 5 based on ") + OS.BuiltinFunctions.formatDecimal(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), 0, ",", ",")) + " reviews");
                                }, function() {
                                    return model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr;
                                }, function() {
                                    return model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
                            })), React.createElement(OSWidgets.Image, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.redirectToTrustPilot$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot.svg"),
                                style: "cursor-pointer",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "options-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OptionsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "options-header__left",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LeftContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "main-title",
                            text: ["Options trading"],
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                Trigger: tradershubModel.staticEntities.trigger.onClick
                            },
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
                                uuid: "29",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "margin-top: 10px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        style: "display-flex align-center",
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "30"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return ["Predict the market; profit if you’re right; risk only what you put in."];
                                })
                            },
                            _dependencies: []
                        })), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [React.createElement(OSWidgets.ButtonGroup, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                enabled: true,
                                mandatory: true,
                                style: "real-demo-switcher",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountTypeVar, function(value) {
                                    model.variables.accountTypeVar = value;
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "RealDemoSwitcher"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.ButtonGroupItem, {
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.setDemoValue$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                style: "real-demo-switcher-item",
                                value: "demo",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "demo"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Demo"), React.createElement(OSWidgets.ButtonGroupItem, {
                                enabled: true,
                                extendedEvents: {
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.setRealValue$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                style: "real-demo-switcher-item",
                                value: "real",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "real"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Real"))];
                        }, function() {
                            return [];
                        })), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [$if((model.variables.accountTypeVar === "real"), true, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "real-account-dropdown-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "account-switcher",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "RealContainer"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.mobileAccountSwitcherOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-desktop flex-direction-column",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "MobileAccountSwitcher"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "37"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "display-flex align-items-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "38"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: #101213; font-size: 16px; font-weight: 700;"
                                    },
                                    value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                    _idProps: {
                                        service: idService,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        marginLeft: "8px"
                                    },
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "40"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "41"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.openAccountSwitcherOnClick$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-mobile",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DesktopAccountSwitcher"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "43"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "display-flex align-items-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "44"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: #101213; font-size: 16px; font-weight: 700;"
                                    },
                                    value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                    _idProps: {
                                        service: idService,
                                        uuid: "45"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        marginLeft: "8px"
                                    },
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "46"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "47"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "48"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    isDefault: false,
                                    onClick: function() {
                                        try {
                                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "Wallets", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                                        } catch (ex) {
                                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                                throw ex;
                                            }

                                        };
                                    },
                                    style: "transactions-button",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "49"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "50"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: ["Transfer"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "51"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Link, {
                                    enabled: true,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: "remove-hover",
                                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                    url: OS.Navigation.generateScreenURL("tradershub", "Wallets", {}),
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "52"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: ["Transfer"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "53"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))), $if(model.variables.isAccountSwitcherOpenVar, true, this, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "account-switcher__dropdown hide-mobile",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Dropdown"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "TitleContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #101213; font-weight: 700;"
                                        },
                                        text: ["Select account"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "56"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "padding: 10px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AccountListContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.filteredAccountListVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "AccountList"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.ListItem, {
                                                    onClick: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return controller.accountListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                        });;
                                                    },
                                                    style: "list-item",
                                                    triggerActionOnFullSwipeLeft: true,
                                                    triggerActionOnFullSwipeRight: true,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "ListItem"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        leftActions: PlaceholderContent.Empty,
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                style: model.getCachedValue(idService.getId("VYk_4jIW2UCOfQmrTAnzDg.Style"), function() {
                                                                    return (((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? ("account-list-item active-account") : ("account-list-item"));
                                                                }, function() {
                                                                    return tradershubClientVariables.getActiveLoginId();
                                                                }, function() {
                                                                    return model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr;
                                                                }),
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "60"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                extendedProperties: {
                                                                    style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                style: "display-flex align-items-center justify-content-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Icon"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Image, {
                                                                type: /*External*/ 1,
                                                                url: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "62"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })), React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                gridProperties: {
                                                                    marginLeft: "8px"
                                                                },
                                                                style: "display-flex align-items-center",
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "text"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(OSWidgets.Expression, {
                                                                style: "account-list-item__text",
                                                                value: (model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr).toString(),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountBalance"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }), React.createElement(OSWidgets.Expression, {
                                                                gridProperties: {
                                                                    marginLeft: "5px"
                                                                },
                                                                style: "account-list-item__text",
                                                                value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "AccountCurrency"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })))];
                                                        }),
                                                        rightActions: PlaceholderContent.Empty
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr), asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                                })];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                                    }), React.createElement(OSWidgets.Link, {
                                        enabled: true,
                                        style: "remove-hover",
                                        transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                        url: OS.Navigation.generateScreenURL("tradershub", "AddMoreAccount", {}),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                        },
                                        style: "display-flex align-items-center justify-content-space-between",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "AddMoreAccountContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #272B30; font-weight: 700;"
                                        },
                                        text: ["Add more accounts"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "68"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))))];
                                }, function() {
                                    return [];
                                }))];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "demo-account-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DemoContainer"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "72"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: ["Balance:"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "73"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "74"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Expression, {
                                    extendedProperties: {
                                        style: "color: #101213; font-size: 16px; font-weight: 700;"
                                    },
                                    value: ((model.variables.selectedAccountBalanceVar + " ") + model.variables.selectedAccountCurrencyVar),
                                    _idProps: {
                                        service: idService,
                                        name: "DemoBalance"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.topupDemoAccount$Action(controller.callContext(eventHandlerContext));
                                            });;
                                        }
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "ResetBalanceButton"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    isDefault: false,
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.topupDemoAccount$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    },
                                    style: "transactions-button",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "77"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.resetbalance.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "78"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: ["Reset balance"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "79"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: ["Reset balance"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "80"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })))];
                            })];
                        }, function() {
                            return [];
                        })), $if(model.variables.shouldShowDTraderVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: model.getCachedValue(idService.getId("DTraderContainer.Style"), function() {
                                    return ((model.variables.isDisabledVar) ? ("dtrader-container-disabled") : ("dtrader-container"));
                                }, function() {
                                    return model.variables.isDisabledVar;
                                }),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DTraderContainer"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                style: "display-flex align-items-center justify-content-space-between",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DTrader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "83"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                extendedProperties: {
                                    style: "height: 32px;"
                                },
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dtrader.svg"),
                                style: "",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "84"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    marginLeft: "16"
                                },
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "85"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Deriv Trader"],
                                _idProps: {
                                    service: idService,
                                    uuid: "86"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-top: 4px;"
                                },
                                text: ["Diverse trading options, low-entry costs."],
                                _idProps: {
                                    service: idService,
                                    uuid: "87"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                                return [React.createElement(OSWidgets.Button, {
                                    enabled: true,
                                    extendedProperties: {
                                        style: "height: 40px; padding: 18px;"
                                    },
                                    gridProperties: {
                                        width: "112px"
                                    },
                                    isDefault: false,
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    },
                                    style: "btn btn-primary hide-mobile",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "88"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, "Trade")];
                            }, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                    style: "cursor-pointer",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "89"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "trade-types-header",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "TraderTypesHeader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Trade types:"), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "trade-types-body",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "TradeTypesBody"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.accumulatorsRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width3"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "92"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "93"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.accumulators.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "94"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Accumulators"), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.turbosRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width3 ThemeGrid_MarginGutter"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "95"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "96"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.turbos.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "97"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Turbos"), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.vanillaRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width3 ThemeGrid_MarginGutter"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "98"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "99"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.vanilla_options.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "100"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Vanilla options"), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.multipliersRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width3 ThemeGrid_MarginGutter"
                                },
                                style: "trade-type-item",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "101"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 4px;"
                                },
                                style: "display-flex align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "102"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.multipliers.svg"),
                                style: "display-block",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "103"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), "Multiplies")), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "hide-desktop",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "104"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Button, {
                                enabled: true,
                                extendedProperties: {
                                    style: "height: 40px; margin-top: 16px; padding: 16px 0;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: false,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.dTraderRedirection$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                style: "btn btn-primary",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "ResponsiveTradeButton"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Trade")))];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "rest-of-platforms",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RestOfPlatforms"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.shouldShowDBotVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.botRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width4"
                                },
                                style: model.getCachedValue(idService.getId("DerivBot.Style"), function() {
                                    return ((model.variables.isDisabledVar) ? ("product-card-disabled") : ("product-card"));
                                }, function() {
                                    return model.variables.isDisabledVar;
                                }),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DerivBot"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dbot.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    name: "BotIcon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "display-flex justify-content-space-between align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "109"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "110"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Deriv Bot"],
                                _idProps: {
                                    service: idService,
                                    uuid: "111"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-top: 4px;"
                                },
                                text: ["Automated trading with custom bots."],
                                _idProps: {
                                    service: idService,
                                    uuid: "112"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Image, {
                                extendedProperties: {
                                    style: "height: 32px; margin-bottom: 0px; padding: 0px;"
                                },
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "113"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))];
                        }, function() {
                            return [];
                        }), $if(model.variables.shouldShowSmartTraderVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.smarttraderRedirection$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px; text-align: left;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width4",
                                    marginLeft: "0"
                                },
                                style: model.getCachedValue(idService.getId("SmartTrader.Style"), function() {
                                    return ((model.variables.isDisabledVar) ? ("product-card-disabled") : ("product-card"));
                                }, function() {
                                    return model.variables.isDisabledVar;
                                }),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "SmartTrader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.smart_trader.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "115"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "display-flex justify-content-space-between align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "116"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "117"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["SmartTrader"],
                                _idProps: {
                                    service: idService,
                                    uuid: "118"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-top: 4px;"
                                },
                                text: ["Simple interface for traders of all levels."],
                                _idProps: {
                                    service: idService,
                                    uuid: "119"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Image, {
                                extendedProperties: {
                                    style: "height: 32px; margin-bottom: 0px; padding: 0px;"
                                },
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "120"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))];
                        }, function() {
                            return [];
                        })), $if(model.variables.shouldShowDerivGoVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "deriv-go-section",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DerivGoHeader"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold; margin-top: 20px;"
                                },
                                text: ["Download our mobile app:"],
                                _idProps: {
                                    service: idService,
                                    uuid: "122"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        controller.toggleDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "margin-bottom: 0px;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_Width4"
                                },
                                style: "product-card",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "DerivGo"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgo.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "124"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex justify-content-space-between align-items-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "125"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex flex-direction-column",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "126"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: ["Deriv Go"],
                                _idProps: {
                                    service: idService,
                                    uuid: "127"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-top: 4px;"
                                },
                                text: ["Mobile trading on-the-go."],
                                _idProps: {
                                    service: idService,
                                    uuid: "128"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Image, {
                                extendedProperties: {
                                    style: "height: 32px; margin-bottom: 0px; padding: 0px;"
                                },
                                gridProperties: {
                                    width: "32px"
                                },
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "129"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), $if(model.variables.isDerivGoModalVisibleVar, false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DerivGoModal"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Popup, {
                                    extendedProperties: {
                                        style: "height: 100%; margin-bottom: 0px; margin-left: auto; margin-right: 0px; margin-top: 0px; overflow-y: scroll; padding: 10px;"
                                    },
                                    showPopup: model.variables.isDerivGoModalVisibleVar,
                                    style: "\"popup-dialog\"",
                                    _idProps: {
                                        service: idService,
                                        name: "DerivGoTradeModal"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-top: 10%;"
                                    },
                                    style: "display-flex align-items-center justify-content-space-between",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "Header"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: bold; margin-left: 0px; padding: 0px;"
                                    },
                                    text: ["Trade with Deriv Go"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "133"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Image, {
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.toggleDerivGoModal$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "padding: 0px;"
                                    },
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                                    style: "cursor-pointer",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "134"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                        uuid: "135",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "padding: 10px;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "MainContentOfModal"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "137"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgo.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "138"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: bold; margin-left: 10px;"
                                    },
                                    text: ["Deriv GO"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "139"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Image, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgobanner.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "140"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: left;"
                                    },
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "Description"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "margin-bottom: 10px; margin-top: 10px;"
                                    },
                                    text: ["Download Deriv GO and dive into trading on your mobile."],
                                    _idProps: {
                                        service: idService,
                                        uuid: "142"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    style: "display-flex justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DownloadCenter"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "ThemeGrid_Width4"
                                    },
                                    style: "display-flex flex-direction-column justify-content-center product-container",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "QRCode"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "145"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    extendedProperties: {
                                        style: "height: 80px;"
                                    },
                                    gridProperties: {
                                        width: "80px"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivgoonelink.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "146"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "147"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-size: 14px; width: 400px;"
                                    },
                                    text: ["Scan the QR code to download Deriv GO"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "148"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "DownloadLinks"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.androidDGoRedirection$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.googleplay.svg"),
                                    style: "cursor-pointer",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "150"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Image, {
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.iOSDGoRedirection$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.appstore.svg"),
                                    style: "cursor-pointer",
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "151"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "margin-top: 10px; text-align: center;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    style: "display-flex justify-content-center",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "Note"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    gridProperties: {
                                        classes: "ThemeGrid_Width8"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "153"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Text, {
                                    extendedProperties: {
                                        style: "font-weight: bold;"
                                    },
                                    text: ["Note: "],
                                    _idProps: {
                                        service: idService,
                                        uuid: "154"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), "Already have Deriv GO? Open the app and trade now.")))))];
                            }, function() {
                                return [];
                            })];
                        }, function() {
                            return [];
                        }), $if((tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier()), false, this, function() {
                            return [React.createElement(OSWidgets.Popup, {
                                showPopup: model.variables.isEmptyPlatformModalVisibleVar,
                                style: "popup-dialog display-flex flex-direction-column",
                                _idProps: {
                                    service: idService,
                                    name: "EmptyPlatformModal"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "No Trading options are available in your country. Login if you are a residence of another country", React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 10px; text-align: right;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "display-block",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "156"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Button, {
                                enabled: true,
                                isDefault: false,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.toggleEmptyPlatformModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                style: "btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "157"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "OK")))];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isEmptyPlatformModalVisibleVar), asPrimitiveValue(model.variables.isDerivGoModalVisibleVar), asPrimitiveValue(model.variables.shouldShowDerivGoVar), asPrimitiveValue(model.variables.shouldShowSmartTraderVar), asPrimitiveValue(model.variables.shouldShowDBotVar), asPrimitiveValue(model.variables.isDisabledVar), asPrimitiveValue(model.variables.shouldShowDTraderVar), asPrimitiveValue(tradershubClientVariables.getActiveLoginId()), asPrimitiveValue(model.variables.filteredAccountListVar), asPrimitiveValue(model.variables.isAccountSwitcherOpenVar), asPrimitiveValue(model.variables.selectedAccountCurrencyVar), asPrimitiveValue(model.variables.selectedAccountBalanceVar), asPrimitiveValue(model.variables.trustPilotDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr), asPrimitiveValue(model.variables.hasRealAccountVar), asPrimitiveValue(tradershubClientVariables.getAuthToken()), asPrimitiveValue(model.variables.accountTypeVar)]
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AccountSwitcherModal"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.openAccountSwitcherModalVar,
                style: "\"popup-dialog\"",
                _idProps: {
                    service: idService,
                    uuid: "159"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.openAccountSwitcherModalVar, true, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "container"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.titleContainerMobileOnClick$Action(controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    extendedProperties: {
                        style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 2px 0px; height: 52px; padding: 0 16px;"
                    },
                    style: "display-flex align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "TitleContainerMobile"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin-right: 16px;"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "162"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "163"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #272B30; font-size: 18px; font-weight: 700;"
                    },
                    text: ["Select account"],
                    _idProps: {
                        service: idService,
                        uuid: "164"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "AccountListContainerMobile"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.List, {
                    animateItems: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    source: model.variables.filteredAccountListVar,
                    style: "list list-group",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        name: "AccountList2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.ListItem, {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.accountListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                    });;
                                },
                                style: "list-item",
                                triggerActionOnFullSwipeLeft: true,
                                triggerActionOnFullSwipeRight: true,
                                _idProps: {
                                    service: idService,
                                    name: "ListItem2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    leftActions: PlaceholderContent.Empty,
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: model.getCachedValue(idService.getId("jniRmc6ji0OA7L_33sDXnA.Style"), function() {
                                                return (((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? ("account-list-item active-account") : ("account-list-item"));
                                            }, function() {
                                                return tradershubClientVariables.getActiveLoginId();
                                            }, function() {
                                                return model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr;
                                            }),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "168"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "24px"
                                            },
                                            style: "display-flex align-items-center justify-content-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "Icon2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            type: /*External*/ 1,
                                            url: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "170"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })), React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                marginLeft: "8px"
                                            },
                                            style: "display-flex align-items-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "text2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            style: "account-list-item__text",
                                            value: (model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr).toString(),
                                            _idProps: {
                                                service: idService,
                                                name: "AccountBalance2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Expression, {
                                            gridProperties: {
                                                marginLeft: "5px"
                                            },
                                            style: "account-list-item__text",
                                            value: model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr,
                                            _idProps: {
                                                service: idService,
                                                name: "AccountCurrency2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })))];
                                    }),
                                    rightActions: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).currencyAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).balanceAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).iconAttr), asPrimitiveValue(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr), asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                            })];
                        }, callContext, idService, "2")
                    },
                    _dependencies: [asPrimitiveValue(tradershubClientVariables.getActiveLoginId())]
                }), React.createElement(OSWidgets.Link, {
                    enabled: true,
                    style: "remove-hover",
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
                    url: OS.Navigation.generateScreenURL("tradershub", "AddMoreAccount", {}),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "174"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                    },
                    style: "display-flex align-items-center justify-content-space-between",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "AddMoreAccountContainer2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #272B30; font-weight: 700;"
                    },
                    text: ["Add more accounts"],
                    _idProps: {
                        service: idService,
                        uuid: "176"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex align-items-center justify-content-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "177"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "178"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))))))];
            }, function() {
                return [];
            }))));
        }
    }

    return View;
});
define("tradershub.MainFlow.Options.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.Options.mvc$controller.setDemoValue.GenerateDemoAccountTokenJS", "tradershub.MainFlow.Options.mvc$controller.OnReady.JavaScript1JS", "tradershub.MainFlow.Options.mvc$controller.OnReady.JavaScript2JS", "tradershub.MainFlow.Options.mvc$controller.FilterAccountListAction.FilterAccountListJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_8d630435c078369fbe29222c857e96f2Structure", "tradershub.model$ST_dda3674fb618c7350645a460f303a303Structure", "tradershub.model$RL_5efabb620fce6e69244e61944ef4417d", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "tradershub.controller$GetWebsiteStatus", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.controller$TradingPlatformProductListing", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure", "tradershub.controller$GetAccountByLoginId", "tradershub.controller$TopupVirtualAccount", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d", "tradershub.controller$GetAllAccountsBalance", "tradershub.controller$getCurrencyIcon", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_Options_mvc_controller_setDemoValue_GenerateDemoAccountTokenJS, tradershub_MainFlow_Options_mvc_controller_OnReady_JavaScript1JS, tradershub_MainFlow_Options_mvc_controller_OnReady_JavaScript2JS, tradershub_MainFlow_Options_mvc_controller_FilterAccountListAction_FilterAccountListJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    trustPilot$DataActRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    trustPilot$DataActRefresh: []
                };
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
                                span.setAttribute("outsystems.function.key", "f15c4591-9739-418f-bc8d-14d275e849d1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return controller.callServerAction("CurrenciesList", "screenservices/tradershub/MainFlow/Options/ActionCurrenciesList", "P9KvWybXyhlQu_4RCM97cg", {}, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options$ActionCurrenciesList"))();
                                    executeServerActionResult.currenciesListOut = OS.DataConversion.ServerDataConverter.from(outputs.CurrenciesList, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d);
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
            get trustPilot$DataActRefresh() {
                if (!(this.hasOwnProperty("_trustPilot$DataActRefresh"))) {
                    this._trustPilot$DataActRefresh = function() {
                        var innerBody = function(callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callDataAction("DataActionTrustPilot", "screenservices/tradershub/MainFlow/Options/DataActionTrustPilot", "ydH4654Tzg7pSpGSTEz6NQ", function(b) {
                                model.variables.trustPilotDataAct.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.trustPilotDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.trustPilotDataAct.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("TrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TrustPilot");
                                span.setAttribute("outsystems.function.key", "3af25550-b44b-45ed-9223-6bcf11055dc3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._trustPilot$DataActRefresh;
            }
            set trustPilot$DataActRefresh(value) {
                this._trustPilot$DataActRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["trustPilot$DataActRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _turbosRedirection$Action() {
                if (!(this.hasOwnProperty("__turbosRedirection$Action"))) {
                    this.__turbosRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TurbosRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TurbosRedirection");
                                span.setAttribute("outsystems.function.key", "1c18723e-c832-447f-940d-b297712b3aeb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TurbosRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=turboslong", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__turbosRedirection$Action;
            }
            set _turbosRedirection$Action(value) {
                this.__turbosRedirection$Action = value;
            }

            get _redirectToTrustPilot$Action() {
                if (!(this.hasOwnProperty("__redirectToTrustPilot$Action"))) {
                    this.__redirectToTrustPilot$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RedirectToTrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RedirectToTrustPilot");
                                span.setAttribute("outsystems.function.key", "3c7c4d49-cae7-4e98-835b-9e9f1048ac91");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RedirectToTrustPilot");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://www.trustpilot.com/review/deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__redirectToTrustPilot$Action;
            }
            set _redirectToTrustPilot$Action(value) {
                this.__redirectToTrustPilot$Action = value;
            }

            get _botRedirection$Action() {
                if (!(this.hasOwnProperty("__botRedirection$Action"))) {
                    this.__botRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("BotRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "BotRedirection");
                                span.setAttribute("outsystems.function.key", "487e811e-4a34-4952-bf3c-5edc021614a7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("BotRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/bot", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__botRedirection$Action;
            }
            set _botRedirection$Action(value) {
                this.__botRedirection$Action = value;
            }

            get _setDemoValue$Action() {
                if (!(this.hasOwnProperty("__setDemoValue$Action"))) {
                    this.__setDemoValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("setDemoValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "setDemoValue");
                                span.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("setDemoValue");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var generateDemoAccountTokenJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // AccountType = "demo"
                                    model.variables.accountTypeVar = "demo";
                                    generateDemoAccountTokenJSResult.value = OS.Logger.startActiveSpan("GenerateDemoAccountToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GenerateDemoAccountToken");
                                            span.setAttribute("outsystems.function.key", "9ede4f3f-ba3a-4921-b749-af69f8b99121");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_setDemoValue_GenerateDemoAccountTokenJS, "GenerateDemoAccountToken", "setDemoValue", {
                                                Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.setDemoValue$generateDemoAccountTokenJSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // AuthToken = GenerateDemoAccountToken.Token
                                    tradershubClientVariables.setAuthToken(generateDemoAccountTokenJSResult.value.tokenOut);
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                        model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                        // SelectedAccountBalance = SendAuthorize.Response.Authorize.Balance
                                        model.variables.selectedAccountBalanceVar = OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr);
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

                return this.__setDemoValue$Action;
            }
            set _setDemoValue$Action(value) {
                this.__setDemoValue$Action = value;
            }

            get _toggleEmptyPlatformModal$Action() {
                if (!(this.hasOwnProperty("__toggleEmptyPlatformModal$Action"))) {
                    this.__toggleEmptyPlatformModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleEmptyPlatformModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleEmptyPlatformModal");
                                span.setAttribute("outsystems.function.key", "717dde02-8407-4e11-a947-28c7a64fdb62");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleEmptyPlatformModal");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.isEmptyPlatformModalVisibleVar)) {
                                    // IsEmptyPlatformModalVisible = False
                                    model.variables.isEmptyPlatformModalVisibleVar = false;
                                } else {
                                    // OpenModal
                                    // IsEmptyPlatformModalVisible = True
                                    model.variables.isEmptyPlatformModalVisibleVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__toggleEmptyPlatformModal$Action;
            }
            set _toggleEmptyPlatformModal$Action(value) {
                this.__toggleEmptyPlatformModal$Action = value;
            }

            get _androidDGoRedirection$Action() {
                if (!(this.hasOwnProperty("__androidDGoRedirection$Action"))) {
                    this.__androidDGoRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AndroidDGoRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AndroidDGoRedirection");
                                span.setAttribute("outsystems.function.key", "79e5f91a-6c9a-402a-8928-277a43d4ff43");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AndroidDGoRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://play.google.com/store/apps/details?id=com.deriv.app", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__androidDGoRedirection$Action;
            }
            set _androidDGoRedirection$Action(value) {
                this.__androidDGoRedirection$Action = value;
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
                                span.setAttribute("outsystems.function.key", "7afdb3bf-4125-4448-a985-c79d43a16650");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                                var tradingPlatformProductListingVar = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var javaScript2JSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: GetWebsiteStatus
                                    model.flush();
                                    return tradershubController.default.getWebsiteStatus$Action(callContext).then(function() {
                                        javaScript2JSResult.value = OS.Logger.startActiveSpan("JavaScript2", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "JavaScript2");
                                                span.setAttribute("outsystems.function.key", "e6c1937f-b5e0-4378-97ac-6d26d00e933a");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_OnReady_JavaScript2JS, "JavaScript2", "OnReady", {
                                                    WebsiteData: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawWebsiteStatusResponse(), OS.DataTypes.DataTypes.Text),
                                                    ClientCountry: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.OnReady$javaScript2JSResult"))();
                                                    jsNodeResult.clientCountryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ClientCountry, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // ClientCountry = JavaScript2.ClientCountry
                                        tradershubClientVariables.setClientCountry(javaScript2JSResult.value.clientCountryOut);
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                                // Execute Action: FilterAccountListAction
                                                return controller._filterAccountListAction$Action(callContext).then(function() {
                                                    // Execute Action: SendAuthorize
                                                    model.flush();
                                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                                        sendAuthorizeVar.value = value;
                                                    });
                                                }).then(function() {
                                                    // Execute Action: SendGetSetting
                                                    model.flush();
                                                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                                                        sendGetSettingVar.value = value;
                                                    });
                                                }).then(function() {
                                                    // ClientCountry = SendGetSetting.GetSettingResponse.Country_code
                                                    tradershubClientVariables.setClientCountry(sendGetSettingVar.value.getSettingResponseOut.country_codeAttr);
                                                    // AuthorizeResponse = SendAuthorize.Response.Authorize
                                                    model.variables.authorizeResponseVar = sendAuthorizeVar.value.responseOut.authorizeAttr;
                                                });
                                            }

                                        });
                                    }).then(function() {
                                        // Execute Action: TradingPlatformProductListing
                                        model.flush();
                                        return tradershubController.default.tradingPlatformProductListing$Action(callContext).then(function(value) {
                                            tradingPlatformProductListingVar.value = value;
                                        }).then(function() {
                                            // ShouldShowDBot = TradingPlatformProductListing.ShouldShowDBot
                                            model.variables.shouldShowDBotVar = tradingPlatformProductListingVar.value.shouldShowDBotOut;
                                            // ShouldShowSmartTrader = TradingPlatformProductListing.ShouldShowSmartTrader
                                            model.variables.shouldShowSmartTraderVar = tradingPlatformProductListingVar.value.shouldShowSmartTraderOut;
                                            // ShouldShowDerivGo = TradingPlatformProductListing.ShouldShowDerivGo
                                            model.variables.shouldShowDerivGoVar = tradingPlatformProductListingVar.value.shouldShowDerivGoOut;
                                            // DTraderAvailableTradeTypes = TradingPlatformProductListing.DTraderAvailableTradeTypes
                                            model.variables.dTraderAvailableTradeTypesVar = tradingPlatformProductListingVar.value.dTraderAvailableTradeTypesOut;
                                            // ShouldShowDTrader = TradingPlatformProductListing.ShouldShowDTrader
                                            model.variables.shouldShowDTraderVar = tradingPlatformProductListingVar.value.shouldShowDTraderOut;
                                            javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "JavaScript1");
                                                    span.setAttribute("outsystems.function.key", "cbe3d8d7-47e3-4312-8677-6838520cdfae");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                                        ShouldShowDTrader: OS.DataConversion.JSNodeParamConverter.to(model.variables.shouldShowDTraderVar, OS.DataTypes.DataTypes.Boolean),
                                                        ShouldShowSmartTrader: OS.DataConversion.JSNodeParamConverter.to(model.variables.shouldShowSmartTraderVar, OS.DataTypes.DataTypes.Boolean),
                                                        ShouldShowDGo: OS.DataConversion.JSNodeParamConverter.to(model.variables.shouldShowDerivGoVar, OS.DataTypes.DataTypes.Boolean),
                                                        ShouldShowDBot: OS.DataConversion.JSNodeParamConverter.to(model.variables.shouldShowDBotVar, OS.DataTypes.DataTypes.Boolean),
                                                        AllOptionsAvailability: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.OnReady$javaScript1JSResult"))();
                                                        jsNodeResult.allOptionsAvailabilityOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AllOptionsAvailability, OS.DataTypes.DataTypes.Boolean);
                                                        return jsNodeResult;
                                                    }, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                            // IsEmptyPlatformModalVisible = If
                                            model.variables.isEmptyPlatformModalVisibleVar = ((javaScript1JSResult.value.allOptionsAvailabilityOut) ? (false) : (true));
                                            // IsLoadingDone
                                            // IsLoading = False
                                            model.variables.isLoadingVar = false;
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

            get _titleContainerMobileOnClick$Action() {
                if (!(this.hasOwnProperty("__titleContainerMobileOnClick$Action"))) {
                    this.__titleContainerMobileOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TitleContainerMobileOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TitleContainerMobileOnClick");
                                span.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TitleContainerMobileOnClick");
                                callContext = controller.callContext(callContext);
                                // OpenAccountSwitcherModal = False
                                model.variables.openAccountSwitcherModalVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__titleContainerMobileOnClick$Action;
            }
            set _titleContainerMobileOnClick$Action(value) {
                this.__titleContainerMobileOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // IsAccountSwitcherOpen = False
                                model.variables.isAccountSwitcherOpenVar = false;
                                // OpenAccountSwitcherModal = False
                                model.variables.openAccountSwitcherModalVar = false;
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

            get _setRealValue$Action() {
                if (!(this.hasOwnProperty("__setRealValue$Action"))) {
                    this.__setRealValue$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("setRealValue", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "setRealValue");
                                span.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("setRealValue");
                                callContext = controller.callContext(callContext);
                                var getTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.variables.hasRealAccountVar)) {
                                            // AccountType = "real"
                                            model.variables.accountTypeVar = "real";
                                            // Execute Action: GetTokenByLoginId
                                            getTokenByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(tradershubClientVariables.getActiveLoginId(), callContext);

                                            // AuthToken = GetTokenByLoginId.Token
                                            tradershubClientVariables.setAuthToken(getTokenByLoginIdVar.value.tokenOut);
                                            // Execute Action: SendAuthorize
                                            model.flush();
                                            return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                                sendAuthorizeVar.value = value;
                                            }).then(function() {
                                                // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                                model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                                // SelectedAccountBalance = SendAuthorize.Response.Authorize.Balance
                                                model.variables.selectedAccountBalanceVar = OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr);
                                            });
                                        } else {
                                            // Destination: /tradershub/CurrencySelection
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "currency-selection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        }

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

                return this.__setRealValue$Action;
            }
            set _setRealValue$Action(value) {
                this.__setRealValue$Action = value;
            }

            get _accumulatorsRedirection$Action() {
                if (!(this.hasOwnProperty("__accumulatorsRedirection$Action"))) {
                    this.__accumulatorsRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AccumulatorsRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AccumulatorsRedirection");
                                span.setAttribute("outsystems.function.key", "c28ff081-8b45-433f-8851-bb00be8bcbbd");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AccumulatorsRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=accumulator", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__accumulatorsRedirection$Action;
            }
            set _accumulatorsRedirection$Action(value) {
                this.__accumulatorsRedirection$Action = value;
            }

            get _toggleDerivGoModal$Action() {
                if (!(this.hasOwnProperty("__toggleDerivGoModal$Action"))) {
                    this.__toggleDerivGoModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ToggleDerivGoModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ToggleDerivGoModal");
                                span.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ToggleDerivGoModal");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.isDerivGoModalVisibleVar)) {
                                    // IsDerivGoModalVisible = False
                                    model.variables.isDerivGoModalVisibleVar = false;
                                } else {
                                    // OpenModal
                                    // IsDerivGoModalVisible = True
                                    model.variables.isDerivGoModalVisibleVar = true;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__toggleDerivGoModal$Action;
            }
            set _toggleDerivGoModal$Action(value) {
                this.__toggleDerivGoModal$Action = value;
            }

            get _smarttraderRedirection$Action() {
                if (!(this.hasOwnProperty("__smarttraderRedirection$Action"))) {
                    this.__smarttraderRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SmarttraderRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SmarttraderRedirection");
                                span.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SmarttraderRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://smarttrader.deriv.com/en/trading", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__smarttraderRedirection$Action;
            }
            set _smarttraderRedirection$Action(value) {
                this.__smarttraderRedirection$Action = value;
            }

            get _dTraderRedirection$Action() {
                if (!(this.hasOwnProperty("__dTraderRedirection$Action"))) {
                    this.__dTraderRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DTraderRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DTraderRedirection");
                                span.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DTraderRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dTraderRedirection$Action;
            }
            set _dTraderRedirection$Action(value) {
                this.__dTraderRedirection$Action = value;
            }

            get _iOSDGoRedirection$Action() {
                if (!(this.hasOwnProperty("__iOSDGoRedirection$Action"))) {
                    this.__iOSDGoRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("IOSDGoRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "IOSDGoRedirection");
                                span.setAttribute("outsystems.function.key", "cef242ee-2c2a-4c36-a247-3143e7d2120d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("IOSDGoRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__iOSDGoRedirection$Action;
            }
            set _iOSDGoRedirection$Action(value) {
                this.__iOSDGoRedirection$Action = value;
            }

            get _mobileAccountSwitcherOnClick$Action() {
                if (!(this.hasOwnProperty("__mobileAccountSwitcherOnClick$Action"))) {
                    this.__mobileAccountSwitcherOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("MobileAccountSwitcherOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "MobileAccountSwitcherOnClick");
                                span.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("MobileAccountSwitcherOnClick");
                                callContext = controller.callContext(callContext);
                                // OpenAccountSwitcherModal = notIsAccountSwitcherOpen
                                model.variables.openAccountSwitcherModalVar = !(model.variables.isAccountSwitcherOpenVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__mobileAccountSwitcherOnClick$Action;
            }
            set _mobileAccountSwitcherOnClick$Action(value) {
                this.__mobileAccountSwitcherOnClick$Action = value;
            }

            get _accountListItemOnClick$Action() {
                if (!(this.hasOwnProperty("__accountListItemOnClick$Action"))) {
                    this.__accountListItemOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AccountListItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AccountListItemOnClick");
                                span.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("AccountListItemOnClick");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var getTokenByLoginIdVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsAccountSwitcherOpen = False
                                    model.variables.isAccountSwitcherOpenVar = false;
                                    // OpenAccountSwitcherModal = False
                                    model.variables.openAccountSwitcherModalVar = false;
                                    return OS.Flow.executeSequence(function() {
                                        if (((((tradershubClientVariables.getActiveLoginId() === model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr)) ? (false) : (true)))) {
                                            // Execute Action: GetTokenByLoginId
                                            getTokenByLoginIdVar.value = tradershubController.default.getAccountByLoginId$Action(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr, callContext);

                                            // AuthToken = GetTokenByLoginId.Token
                                            tradershubClientVariables.setAuthToken(getTokenByLoginIdVar.value.tokenOut);
                                            // Execute Action: SendAuthorize
                                            model.flush();
                                            return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                                sendAuthorizeVar.value = value;
                                            }).then(function() {
                                                if ((!(sendAuthorizeVar.value.isErrorOut))) {
                                                    // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                                    model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                                    // SelectedAccountBalance = SendAuthorize.Response.Authorize.Balance
                                                    model.variables.selectedAccountBalanceVar = OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr);
                                                    // ActiveLoginId = FilteredAccountList.Current.Loginid
                                                    tradershubClientVariables.setActiveLoginId(model.variables.filteredAccountListVar.getCurrent(callContext.iterationContext).loginidAttr);
                                                }

                                            });
                                        }

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

                return this.__accountListItemOnClick$Action;
            }
            set _accountListItemOnClick$Action(value) {
                this.__accountListItemOnClick$Action = value;
            }

            get _multipliersRedirection$Action() {
                if (!(this.hasOwnProperty("__multipliersRedirection$Action"))) {
                    this.__multipliersRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("MultipliersRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "MultipliersRedirection");
                                span.setAttribute("outsystems.function.key", "df700acd-6a92-4799-855a-91a3953c0a66");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("MultipliersRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=multiplier", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__multipliersRedirection$Action;
            }
            set _multipliersRedirection$Action(value) {
                this.__multipliersRedirection$Action = value;
            }

            get _openAccountSwitcherOnClick$Action() {
                if (!(this.hasOwnProperty("__openAccountSwitcherOnClick$Action"))) {
                    this.__openAccountSwitcherOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenAccountSwitcherOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenAccountSwitcherOnClick");
                                span.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenAccountSwitcherOnClick");
                                callContext = controller.callContext(callContext);
                                // IsAccountSwitcherOpen = notIsAccountSwitcherOpen
                                model.variables.isAccountSwitcherOpenVar = !(model.variables.isAccountSwitcherOpenVar);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openAccountSwitcherOnClick$Action;
            }
            set _openAccountSwitcherOnClick$Action(value) {
                this.__openAccountSwitcherOnClick$Action = value;
            }

            get _topupDemoAccount$Action() {
                if (!(this.hasOwnProperty("__topupDemoAccount$Action"))) {
                    this.__topupDemoAccount$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TopupDemoAccount", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TopupDemoAccount");
                                span.setAttribute("outsystems.function.key", "e522a808-6967-48f8-8027-bea735f76085");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TopupDemoAccount");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: TopupVirtualAccount
                                    model.flush();
                                    return tradershubController.default.topupVirtualAccount$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__topupDemoAccount$Action;
            }
            set _topupDemoAccount$Action(value) {
                this.__topupDemoAccount$Action = value;
            }

            get _filterAccountListAction$Action() {
                if (!(this.hasOwnProperty("__filterAccountListAction$Action"))) {
                    this.__filterAccountListAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FilterAccountListAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FilterAccountListAction");
                                span.setAttribute("outsystems.function.key", "e7aa87d1-d38e-4107-800f-a9b9daabb919");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("FilterAccountListAction");
                                callContext = controller.callContext(callContext);
                                var currenciesListVar = new OS.DataTypes.VariableHolder();
                                var getAllAccountsBalanceVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var filterAccountListJSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerializeCurrenciesListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONSerializeAuthorizeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                var jSONDeserializeFilteredAccountListListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_5efabb620fce6e69244e61944ef4417d))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(false, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // SelectedAccountCurrency = SendAuthorize.Response.Authorize.Currency
                                        model.variables.selectedAccountCurrencyVar = sendAuthorizeVar.value.responseOut.authorizeAttr.currencyAttr;
                                        // SelectedAccountBalance = SendAuthorize.Response.Authorize.Balance
                                        model.variables.selectedAccountBalanceVar = OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.responseOut.authorizeAttr.balanceAttr);
                                        // JSON Serialize: JSONSerializeAuthorize
                                        jSONSerializeAuthorizeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(sendAuthorizeVar.value.responseOut, true, false);
                                        // Execute Action: GetAllAccountsBalance
                                        model.flush();
                                        return tradershubController.default.getAllAccountsBalance$Action(callContext).then(function(value) {
                                            getAllAccountsBalanceVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: CurrenciesList
                                        model.flush();
                                        return controller.currenciesList$ServerAction(callContext).then(function(value) {
                                            currenciesListVar.value = value;
                                        });
                                    }).then(function() {
                                        // JSON Serialize: JSONSerializeCurrenciesList
                                        jSONSerializeCurrenciesListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(currenciesListVar.value.currenciesListOut, false, false);
                                        filterAccountListJSResult.value = OS.Logger.startActiveSpan("FilterAccountList", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "FilterAccountList");
                                                span.setAttribute("outsystems.function.key", "ce6b6c20-1c58-4401-979c-504cab78b6c0");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_MainFlow_Options_mvc_controller_FilterAccountListAction_FilterAccountListJS, "FilterAccountList", "FilterAccountListAction", {
                                                    CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrenciesListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    AllAccountsBalance: OS.DataConversion.JSNodeParamConverter.to(getAllAccountsBalanceVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                    AuthorizeResponse: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeAuthorizeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    modifiedAccountList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                    HasRealAccount: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean),
                                                    IsDisabled: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.MainFlow.Options.FilterAccountListAction$filterAccountListJSResult"))();
                                                    jsNodeResult.modifiedAccountListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.modifiedAccountList, OS.DataTypes.DataTypes.Text);
                                                    jsNodeResult.hasRealAccountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasRealAccount, OS.DataTypes.DataTypes.Boolean);
                                                    jsNodeResult.isDisabledOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsDisabled, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {
                                                    getCurrencyIcon: tradershubController.default.clientActionProxies.getCurrencyIcon$Action
                                                }, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // JSON Deserialize: JSONDeserializeFilteredAccountListList
                                        jSONDeserializeFilteredAccountListListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(filterAccountListJSResult.value.modifiedAccountListOut, tradershubModel.RL_5efabb620fce6e69244e61944ef4417d, false);
                                        // FilteredAccountList = JSONDeserializeFilteredAccountListList.Data
                                        model.variables.filteredAccountListVar = jSONDeserializeFilteredAccountListListVar.value.dataOut;
                                        // HasRealAccount = FilterAccountList.HasRealAccount
                                        model.variables.hasRealAccountVar = filterAccountListJSResult.value.hasRealAccountOut;
                                        // AccountType = If
                                        model.variables.accountTypeVar = ((filterAccountListJSResult.value.hasRealAccountOut) ? ("real") : ("demo"));
                                        // IsDisabled = FilterAccountList.IsDisabled
                                        model.variables.isDisabledVar = filterAccountListJSResult.value.isDisabledOut;
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

                return this.__filterAccountListAction$Action;
            }
            set _filterAccountListAction$Action(value) {
                this.__filterAccountListAction$Action = value;
            }

            get _vanillaRedirection$Action() {
                if (!(this.hasOwnProperty("__vanillaRedirection$Action"))) {
                    this.__vanillaRedirection$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("VanillaRedirection", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "VanillaRedirection");
                                span.setAttribute("outsystems.function.key", "e851e336-37c0-4f91-aaf5-cbd43c848dec");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("VanillaRedirection");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://app.deriv.com/dtrader?trade_type=vanillalongcall", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__vanillaRedirection$Action;
            }
            set _vanillaRedirection$Action(value) {
                this.__vanillaRedirection$Action = value;
            }


            turbosRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TurbosRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TurbosRedirection");
                        span.setAttribute("outsystems.function.key", "1c18723e-c832-447f-940d-b297712b3aeb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._turbosRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            redirectToTrustPilot$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RedirectToTrustPilot__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RedirectToTrustPilot");
                        span.setAttribute("outsystems.function.key", "3c7c4d49-cae7-4e98-835b-9e9f1048ac91");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._redirectToTrustPilot$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            botRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("BotRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "BotRedirection");
                        span.setAttribute("outsystems.function.key", "487e811e-4a34-4952-bf3c-5edc021614a7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._botRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setDemoValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("setDemoValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "setDemoValue");
                        span.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._setDemoValue$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            toggleEmptyPlatformModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleEmptyPlatformModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleEmptyPlatformModal");
                        span.setAttribute("outsystems.function.key", "717dde02-8407-4e11-a947-28c7a64fdb62");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleEmptyPlatformModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            androidDGoRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AndroidDGoRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AndroidDGoRedirection");
                        span.setAttribute("outsystems.function.key", "79e5f91a-6c9a-402a-8928-277a43d4ff43");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._androidDGoRedirection$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "7afdb3bf-4125-4448-a985-c79d43a16650");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            titleContainerMobileOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TitleContainerMobileOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TitleContainerMobileOnClick");
                        span.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._titleContainerMobileOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            setRealValue$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("setRealValue__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "setRealValue");
                        span.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._setRealValue$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            accumulatorsRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AccumulatorsRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AccumulatorsRedirection");
                        span.setAttribute("outsystems.function.key", "c28ff081-8b45-433f-8851-bb00be8bcbbd");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._accumulatorsRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            toggleDerivGoModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ToggleDerivGoModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ToggleDerivGoModal");
                        span.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._toggleDerivGoModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            smarttraderRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SmarttraderRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SmarttraderRedirection");
                        span.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._smarttraderRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            dTraderRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DTraderRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DTraderRedirection");
                        span.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dTraderRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            iOSDGoRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("IOSDGoRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "IOSDGoRedirection");
                        span.setAttribute("outsystems.function.key", "cef242ee-2c2a-4c36-a247-3143e7d2120d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._iOSDGoRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            mobileAccountSwitcherOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("MobileAccountSwitcherOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MobileAccountSwitcherOnClick");
                        span.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._mobileAccountSwitcherOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            accountListItemOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AccountListItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AccountListItemOnClick");
                        span.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._accountListItemOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            multipliersRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("MultipliersRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MultipliersRedirection");
                        span.setAttribute("outsystems.function.key", "df700acd-6a92-4799-855a-91a3953c0a66");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._multipliersRedirection$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            openAccountSwitcherOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenAccountSwitcherOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenAccountSwitcherOnClick");
                        span.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openAccountSwitcherOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            topupDemoAccount$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TopupDemoAccount__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TopupDemoAccount");
                        span.setAttribute("outsystems.function.key", "e522a808-6967-48f8-8027-bea735f76085");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._topupDemoAccount$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            filterAccountListAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FilterAccountListAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FilterAccountListAction");
                        span.setAttribute("outsystems.function.key", "e7aa87d1-d38e-4107-800f-a9b9daabb919");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._filterAccountListAction$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            vanillaRedirection$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("VanillaRedirection__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "VanillaRedirection");
                        span.setAttribute("outsystems.function.key", "e851e336-37c0-4f91-aaf5-cbd43c848dec");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._vanillaRedirection$Action, callContext);
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
                        return tradershub_MainFlowController.default.handleError(ex, this.callContext());
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {}

            getDefaultTimeout() {
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables
        Controller.registerVariableGroupType("tradershub.MainFlow.Options$ActionCurrenciesList", [{
            name: "CurrenciesList",
            attrName: "currenciesListOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d();
            },
            complexType: tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d
        }]);

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.setDemoValue$generateDemoAccountTokenJSResult", [{
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.OnReady$javaScript1JSResult", [{
            name: "AllOptionsAvailability",
            attrName: "allOptionsAvailabilityOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.OnReady$javaScript2JSResult", [{
            name: "ClientCountry",
            attrName: "clientCountryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.MainFlow.Options.FilterAccountListAction$filterAccountListJSResult", [{
            name: "modifiedAccountList",
            attrName: "modifiedAccountListOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HasRealAccount",
            attrName: "hasRealAccountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return true;
            }
        }, {
            name: "IsDisabled",
            attrName: "isDisabledOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.Options.mvc$controller.setDemoValue.GenerateDemoAccountTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse(localStorage.accountsList);
        const VRTCAccount = Object.keys(data).find(key => key.startsWith('VRTC'));

        $parameters.Token = data[VRTCAccount]?.token;

    };
});

define("tradershub.MainFlow.Options.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.AllOptionsAvailability = $parameters.ShouldShowDGo || $parameters.ShouldShowDTrader || $parameters.ShouldShowDBot || $parameters.ShouldShowSmartTrader;
    };
});

define("tradershub.MainFlow.Options.mvc$controller.OnReady.JavaScript2JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const website_data = JSON.parse($parameters.WebsiteData);
        $parameters.ClientCountry = website_data.website_status.clients_country;
    };
});

define("tradershub.MainFlow.Options.mvc$controller.FilterAccountListAction.FilterAccountListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorize = JSON.parse($parameters.AuthorizeResponse);
        const accountList = authorize?.authorize?.account_list;
        const allAccountsBalance = JSON.parse($parameters.AllAccountsBalance);

        if (accountList.length > 1) {
            $parameters.HasRealAccount = true;
        } else {
            $parameters.HasRealAccount = false;
        }

        const filterAccountList = accountList?.filter((account) => !account.is_virtual);

        const is_disabled = accountList?.some((account) => !account.broker.startsWith("VR") && account.is_disabled === 1);
        $parameters.IsDisabled = is_disabled;

        const modifiedAccountList = filterAccountList?.map((account) => {
            const icon = $actions.getCurrencyIcon(account.currency || "USD", $parameters.CurrenciesList)?.CurrencyIcon;
            const balance = allAccountsBalance?.balance?.accounts;

            return {
                icon,
                is_disabled: account.is_disabled,
                loginid: account.loginid,
                currency: account.currency,
                balance: balance[account.loginid]?.balance
            };
        });

        $parameters.modifiedAccountList = JSON.stringify(modifiedAccountList);

    };
});