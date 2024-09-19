define("tradershub.MainFlow.CFDs.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.Layouts.MainLayout.mvc$model", "OutSystemsUI.Numbers.Rating.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershub_Layouts_MainLayout_mvcModel, OutSystemsUI_Numbers_Rating_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel) {
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
                    this.attr("TrustPilot", "trustPilotDataAct", "TrustPilot", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new TrustPilotDataActRec());
                    }, true, TrustPilotDataActRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    trustPilotDataAct: OS.DataTypes.ImmutableBase.getData(str)
                }));
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = ((tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets || OutSystemsUI_Numbers_Rating_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.CFDs.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.CFDs.mvc$model", "tradershub.MainFlow.CFDs.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.Rating.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_CFDs_mvc_model, tradershub_MainFlow_CFDs_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "MainFlow.CFDs";
        }

        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "cb02e196-17b9-4e2b-8ab5-d8b95fec2c86",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.CFDs.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view, OutSystemsUI_Numbers_Rating_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_CFDs_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_CFDs_mvc_controller;
        }

        get title() {


            return "CFDs";
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
                    ActiveTab: 1
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #E6E9E9; border-radius: 16px; border-top: none;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CFDsBanner"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "margin-bottom: 10px; margin-top: 10px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.banner.svg"),
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
                                style: "height: 50px; margin-top: 0px; padding: 16px; text-align: left;"
                            },
                            style: "display-flex justify-content-space-evenly",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-left: 20px;"
                            },
                            style: "customer-feedback",
                            text: ["Our customer say"],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "customer-feedback",
                            text: ["Excellent"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Numbers_Rating_mvc_view, {
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
                                uuid: "6",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                filledState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                halfState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star-half",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                emptyState: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Icon, {
                                        icon: "star",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon text-neutral-5",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
                            },
                            style: "customer-feedback",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            value: model.getCachedValue(idService.getId("pPOyIA4x8EqpaCjv0nZNxQ.Value"), function() {
                                return (((OS.BuiltinFunctions.formatDecimal(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr, 2, ".", ",") + " out of 5 based on ") + OS.BuiltinFunctions.longIntegerToText(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr)) + " reviews");
                            }, function() {
                                return model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr;
                            }, function() {
                                return model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.trustPilotDataAct.dataFetchStatusAttr)
                        })), React.createElement(OSWidgets.Link, {
                            enabled: true,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("https://www.trustpilot.com/review/deriv.com", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot.svg"),
                            style: "cursor-pointer",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CFDsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: bold;"
                            },
                            text: ["CFDs trading"],
                            _idProps: {
                                service: idService,
                                name: "CFDsTrading"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
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
                                uuid: "16",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return ["Trade bigger positions with less capital on a wide range of global markets."];
                                })
                            },
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 20px; margin-top: 20px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-top: 0px;"
                            },
                            text: ["Available accounts"],
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "products-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "AccountsCardsContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "StandardAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5standard.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Standard"],
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Diverse financial and derived instruments."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FinancialAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5financial.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Financial"],
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Your all-in-one access to financial markets."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "FinancialSTPAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5financial.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Financial STP"],
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Direct access to market prices."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "SwapFreeAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5swf.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "38"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Swap-Free"],
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Overnight position holdings with no swap fees."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ZeroSpreadAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dmt5zrs.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "42"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "43"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Zero Spread"],
                            _idProps: {
                                service: idService,
                                uuid: "44"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "45"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Minimum trading costs for selected instruments."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "CTraderAccountCard2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "47"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "48"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Deriv cTrader"],
                            _idProps: {
                                service: idService,
                                uuid: "49"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "50"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Easy replication of trading strategies via copy trading."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 20px;"
                            },
                            style: "product-container display-flex flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DerivXAccountCard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivx.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "52"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex justify-content-space-between",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "53"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: bold; margin-bottom: 10px; margin-top: 10px;"
                            },
                            text: ["Deriv X"],
                            _idProps: {
                                service: idService,
                                uuid: "54"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Image, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter",
                                width: "32px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "55"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "Customised trading, powered by TradingView."))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.trustPilotDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr), asPrimitiveValue(model.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr)]
            }));
        }
    }

    return View;
});
define("tradershub.MainFlow.CFDs.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.model$ST_d9250f167f0b0818f60ee73b22ec1a06Structure"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController) {
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

            // Aggregates and Data Actions
            get trustPilot$DataActRefresh() {
                if (!(this.hasOwnProperty("_trustPilot$DataActRefresh"))) {
                    this._trustPilot$DataActRefresh = function() {
                        var innerBody = function(callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callDataAction("DataActionTrustPilot", "screenservices/tradershub/MainFlow/CFDs/DataActionTrustPilot", "ydH4654Tzg7pSpGSTEz6NQ", function(b) {
                                model.variables.trustPilotDataAct.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.trustPilotDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.trustPilotDataAct.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("TrustPilot", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TrustPilot");
                                span.setAttribute("outsystems.function.key", "5ee80f80-55d8-4069-83e9-7f814d925fa4");
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

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});